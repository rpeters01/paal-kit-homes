const fs=require('fs'),vm=require('vm'),assert=require('assert');
const root=__dirname;
const source=fs.readFileSync(root+'/assets/storage-guard.js','utf8');
const storage=new Map();let failWrites=false;
const localStorage={getItem:k=>storage.has(k)?storage.get(k):null,setItem(k,v){if(failWrites)throw Error('QuotaExceededError');storage.set(k,String(v));}};
const sandbox={window:{},localStorage};vm.runInNewContext(source,sandbox);
const guard=sandbox.window.PAALStorageGuard,KEY=guard.STORE;
const collection={version:1,activeId:'p',projects:[{id:'p',name:'Original',data:{schemaVersion:1,buildings:[]}}]};
const first=guard.commit(collection,0);assert.strictEqual(first.revision,1);
const second=guard.commit({...first,projects:[{...first.projects[0],name:'Changed by A'}]},1);assert.strictEqual(second.revision,2);
assert.throws(()=>guard.commit({...first,projects:[{...first.projects[0],name:'Stale B'}]},1),/STALE_PROJECT/);
assert.strictEqual(JSON.parse(localStorage.getItem(KEY)).projects[0].name,'Changed by A');
const original=localStorage.getItem(KEY);
failWrites=true;assert.throws(()=>guard.commit(second,2),/QuotaExceededError/);failWrites=false;
assert.strictEqual(localStorage.getItem(KEY),original,'Failed save leaves original intact');
const corrupt='{not valid JSON';localStorage.setItem(KEY,corrupt);
assert.throws(()=>guard.commit(collection,0));assert.strictEqual(localStorage.getItem(KEY),corrupt);
const restored=guard.restore(collection,corrupt);assert.strictEqual(restored.revision,1);
assert.strictEqual(JSON.parse(localStorage.getItem(KEY)).projects[0].name,'Original');
assert.throws(()=>guard.restore(collection,corrupt),/STALE_PROJECT/);
const before=localStorage.getItem(KEY);failWrites=true;
assert.throws(()=>guard.restore(collection,before),/QuotaExceededError/);failWrites=false;
assert.strictEqual(localStorage.getItem(KEY),before,'Failed restore preserves old bytes');
for(const page of ['project-planner.html','perceelplanner.html','bouwplanning.html','project-tools.html']){
 const html=fs.readFileSync(root+'/'+page,'utf8');assert(html.includes('assets/storage-guard.js'),page+' missing guard');
 assert(html.indexOf('assets/storage-guard.js')<html.indexOf('assets/'+({ 'project-planner.html':'app','perceelplanner.html':'site-plan','bouwplanning.html':'build-plan','project-tools.html':'project-tools'}[page])+'.js'));
}
for(const file of ['app','site-plan','build-plan','project-tools']){
 const s=fs.readFileSync(root+'/assets/'+file+'.js','utf8');assert(s.includes('PAALStorageGuard.commit('),file+' unguarded save');
}
const app=fs.readFileSync(root+'/assets/app.js','utf8');
assert(app.includes('PAAL_ORIGINELE_BROWSERGEGEVENS_ONBEWERKT.json'));
assert(app.includes('PAALStorageGuard.restore(JSON.parse(raw),existing)'));
assert(app.includes('remote.data.buildings?.find(x=>String(x.id)===String(b.id))'));
const site=fs.readFileSync(root+'/assets/site-plan.js','utf8');assert(site.includes('remote.data.buildings?.find(x=>String(x.id)===String(b.id))'));
console.log('PASS: revision conflicts, stale tab, quota failures, corrupt-data recovery, restore cancellation precondition, id-based geometry, four editors');
// Execute the real asynchronous collection-restore event handler, not just its source strings.
(async()=>{
 const start=app.indexOf("$('#restore').addEventListener('change',async e=>{");
 const end=app.indexOf(' // Refresh only',start);
 assert(start>=0&&end>start);
 const restoreSource=app.slice(start,end);
 async function attempt({input,confirmations=[true,true],initial=JSON.stringify(collection),quota=false}){
  const data=new Map([[KEY,initial]]);let writes=0,downloads=0,alerts=[],calls=0;
  const ls={getItem:k=>data.has(k)?data.get(k):null,setItem(k,v){if(quota)throw Error('QuotaExceededError');writes++;data.set(k,String(v));}};
  const env={window:{},localStorage:ls};vm.runInNewContext(source,env);
  const file={size:JSON.stringify(input).length,name:'collection.json',text:async()=>JSON.stringify(input)};
  const inputElement={files:[file],value:'collection.json'};
  const context={
   $:()=>({addEventListener:(event,fn)=>{context.handler=fn}}),
   localStorage:ls,STORE:KEY,PAALStorageGuard:env.window.PAALStorageGuard,
   clean:d=>{if(!d||d.schemaVersion!==1||!Array.isArray(d.buildings))throw Error('Invalid schema');return d},
   confirm:()=>confirmations[calls++]??false,alert:msg=>alerts.push(msg),
   downloadBackup:()=>{downloads++},Blob,JSON,console:{error:()=>{}},
   lang:'nl',t:k=>k,projects:[],activeId:null,state:null,
   render:()=>{},renderProjectMenu:()=>{},updateSaveStatus:()=>{},
   current:()=>context.projects.find(p=>p.id===context.activeId),
   refreshFromSharedStore:()=>{},createProject:()=>{},
   loadError:false,saveError:false,backupError:false,conflictError:false,loadedRevision:0,
  };
  vm.runInNewContext(restoreSource,context);await context.handler({target:inputElement});
  return {raw:ls.getItem(KEY),writes,downloads,alerts,cleared:inputElement.value==='',initial};
 }
 const valid=await attempt({input:collection});
 assert.strictEqual(JSON.parse(valid.raw).projects[0].name,'Original');assert.strictEqual(JSON.parse(valid.raw).revision,1);assert.strictEqual(valid.downloads,1);assert.strictEqual(valid.writes,1);
 const bad={...collection,projects:[collection.projects[0],{id:'bad',name:'Bad',data:{schemaVersion:2,buildings:[]}}]};
 const rejected=await attempt({input:bad});assert.strictEqual(rejected.raw,rejected.initial);assert.strictEqual(rejected.writes,0);
 const cancelled=await attempt({input:collection,confirmations:[true,false]});assert.strictEqual(cancelled.raw,cancelled.initial);assert.strictEqual(cancelled.writes,0);
 const failed=await attempt({input:collection,quota:true});assert.strictEqual(failed.raw,failed.initial);assert.strictEqual(failed.writes,0);
 const malformed=await attempt({input:collection,initial:'{broken'});assert.strictEqual(JSON.parse(malformed.raw).projects[0].name,'Original');
 console.log('PASS: real restore handler: valid, invalid, cancelled, quota failure, corrupt-store recovery');
})().catch(e=>{console.error(e);process.exitCode=1});
