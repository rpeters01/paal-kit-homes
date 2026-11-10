// Fase 28.5.1: exercise actual view functions with a shared engine, plus recovery UI contract.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const read=n=>fs.readFileSync(__dirname+'/'+n,'utf8');
function extract(src,start){const i=src.indexOf(start);assert(i>=0,start);const b=src.indexOf('{',i+start.length);let depth=0,quote=null,escaped=false;for(let j=b;j<src.length;j++){const c=src[j];if(quote){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c===quote)quote=null;continue;}if(c==='"'||c==="'"||c==='`'){quote=c;continue;}if(c==='{')depth++;if(c==='}'&&!--depth)return src.slice(i,j+1);}throw Error('Unable to extract '+start);}
const eng={};vm.runInNewContext(read('assets/cost-engine.js'),eng);
const compute=eng.PAALCostEngine.compute;
const dashSrc=read('assets/dashboard.js'),toolSrc=read('assets/project-tools.js');
const dashboard=vm.runInNewContext('('+extract(dashSrc,'function financial(d)')+')',{PAALCostEngine:{compute},t:k=>k});
const toolCtx={PAALCostEngine:{compute},val:v=>v===null||v===undefined||v===''?null:Number(v)};
const costs=vm.runInNewContext('('+extract(toolSrc,'function costs(d)')+')',toolCtx);
const calc=vm.runInNewContext('('+extract(toolSrc,'function calc(d,x)')+')',{costs,val:toolCtx.val,Math});
const fixtures=[
 {schemaVersion:1,landPrice:300000,siteCosts:{},buildings:[]},
 {schemaVersion:1,landPrice:300000,siteCosts:{earthworks:{amount:5000}},buildings:[{id:'a',kind:'house',foundation:'slab',length:10,width:10,foundationBaseline:12000,costs:{}}],advancedV1:{foundationDynamic:{enabled:true,baselineVersion:2,concreteRate:350}}},
 {schemaVersion:1,landPrice:300000,siteCosts:{},buildings:[{id:'a',kind:'house',foundation:'slab',length:10,width:10,costs:{}}],advancedV1:{foundationDynamic:{enabled:true,baselineVersion:1,baselinePerBuilding:{a:12000}}}}
];
for(const [i,d] of fixtures.entries()){
 const engine=compute(d),groups=dashboard(d),tool=costs(d),scenario=calc(d,{scenario:{uplift:0,buffer:0,budget:null}});
 const total=groups.reduce((n,g)=>n+g.amount,0),missing=groups.reduce((n,g)=>n+g.missing,0);
 assert(Math.abs(total-engine.sum)<1e-6,'Dashboard sum fixture '+i);
 assert.strictEqual(missing,engine.missing,'Dashboard missing fixture '+i);
 assert.strictEqual(tool.sum,engine.sum,'Tools sum fixture '+i);
 assert.strictEqual(tool.missing,engine.missing,'Tools missing fixture '+i);
 assert.strictEqual(tool.blocked,engine.blocked,'Tools blocked fixture '+i);
 assert.strictEqual(scenario.blocked,engine.blocked,'Scenario blocked fixture '+i);
 assert.strictEqual(scenario.total,engine.sum,'Scenario zero-uplift zero-buffer fixture '+i);
}
const app=read('assets/app.js'),html=read('project-planner.html');
assert(app.includes("loadError?t('loadError')"),'Distinct load-error message');
assert(app.includes('if(loadError||conflictError){updateSaveStatus();return;}'),'Guard against overwriting corrupt stored data');
assert(app.includes("$('#migrationBackup').onclick"),'Migration snapshot export handler');
assert(app.includes("localStorage.getItem('paal-v2-pre-foundation-migration-backup')"),'Snapshot reads preserved backup');
assert(html.includes('id="migrationBackup"'),'Export button is present');
assert(dashSrc.includes('paal-full-grid')&&toolSrc.includes('paal-full-grid'),'Warnings span grid');
console.log('PASS: actual dashboard financial(), tools costs()/calc() agree with central engine for three fixtures');
console.log('PASS: load-error guard, migration export and full-grid warning contracts');
