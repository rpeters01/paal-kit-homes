'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const read=n=>fs.readFileSync('assets/'+n+'.js','utf8');
const app=read('app'),build=read('build-plan'),tools=read('project-tools');
function checkBeforeUnload(source,pendingExpr){
 const marker="window.addEventListener('beforeunload',e=>{";
 const pos=source.indexOf(marker);assert(pos>=0,'missing beforeunload handler');
 const end=source.indexOf('});',pos);assert(end>pos,'incomplete handler');
 const handler=source.slice(pos+marker.length,end);
 for(const flags of [{saveTimer:1,conflictError:false,saveError:false,quotaError:false},{saveTimer:null,conflictError:true,saveError:false,quotaError:false},{saveTimer:null,conflictError:false,saveError:true,quotaError:true},{saveTimer:null,conflictError:false,saveError:false,quotaError:false}]){
  let prevented=false;const e={preventDefault(){prevented=true},returnValue:null};
  vm.runInNewContext('(function(e){'+handler+'})(e)',{e,...flags});
  assert.equal(prevented,Boolean(pendingExpr(flags)));
 }
}
checkBeforeUnload(app,f=>f.saveTimer||f.conflictError||f.saveError);
checkBeforeUnload(build,f=>f.conflictError||f.quotaError);
checkBeforeUnload(tools,f=>f.conflictError||f.quotaError);
for(const [name,src] of [['build',build],['tools',tools]]){
 assert(src.includes('function lockUnsafeEditing()'),name+' lock missing');
 assert(src.includes('lockUnsafeEditing();'),name+' lock invocation missing');
 assert(src.includes('QuotaExceededError'),name+' quota error missing');
 assert(src.includes('paal-edit-locked'),name+' visible warning missing');
}
assert(app.includes('if(loadError||conflictError||saveError)return;activeId=id;'));
assert(app.includes('if(loadError||conflictError||saveError)return;const p={id:uid()'));
assert(app.includes('QuotaExceededError'));
console.log('PASS phase28.5.2.1 beforeunload handler execution and safety contracts');
