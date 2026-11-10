// Integration-style checks of the actual clean() and initProjects() source functions.
// No duplicate reimplementation of their logic.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(__dirname+'/assets/app.js','utf8');
function extract(start){const i=src.indexOf(start);assert(i>=0,start);const brace=src.indexOf('{',i+start.length);let depth=0,quote=null,escaped=false;for(let j=brace;j<src.length;j++){const c=src[j];if(quote){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c===quote)quote=null;continue;}if(c==='"'||c==="'"||c==='`'){quote=c;continue;}if(c==='{')depth++;if(c==='}'&&!--depth)return src.slice(i,j+1); }throw Error('Cannot extract '+start);}
// clean() is a single arrow expression with nested literals: terminate at the known next declaration.
const begin=src.indexOf('const clean=(obj)=>');const end=src.indexOf('\n const current=',begin);assert(begin>=0&&end>begin);
const cleanSource=src.slice(begin,end).trim();
const ctx={COST_KEYS:['landFees','studies','earthworks','utilities','externalWorks','contingency'],BUILDING_COST_KEYS:['kitCost','deliveryCost','assemblyCost','fitoutCost'],HOME_CATALOG:{},INCLUSION_GROUPS:[],num:v=>v===null||v===undefined||v===''?null:Number(v),normalCost:v=>v||{amount:null}};
const clean=vm.runInNewContext('(function(){'+cleanSource+' return clean;})()',ctx);
const make=(id,name,baseline)=>({id,name,kind:'house',foundation:'slab',foundationBaseline:baseline,length:10,width:10,costs:{}});
const source={schemaVersion:1,buildings:[make('main','Main',50000),make('second','Second',30000),make('shed','Shed',15000)]};
const saved=clean(source);saved.buildings.splice(1,1);const loaded=clean(JSON.parse(JSON.stringify(saved)));
assert.strictEqual(loaded.buildings.length,2);assert.strictEqual(loaded.buildings[1].name,'Shed');assert.strictEqual(loaded.buildings[1].id,'shed');assert.strictEqual(loaded.buildings[1].foundationBaseline,15000);
const reversed=clean({...saved,buildings:[...saved.buildings].reverse()});assert.strictEqual(reversed.buildings[0].foundationBaseline,15000);
const invalid=clean({...saved,buildings:[make('x','Invalid',-500)]});assert.strictEqual(invalid.buildings[0].foundationBaseline,-500,'Keep invalid source data so engine can block, not silently discard');
console.log('PASS: actual clean() preserves building baseline across delete, reload, reorder and invalid-data blocking');
// Exercise actual initProjects() with an in-memory localStorage, ensuring the backup is made only once.
const initSource=extract('function initProjects()');
const storage=new Map();const localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,String(v))};
const STORE='paal-v2-projects-v1',BACKUP='paal-v2-pre-foundation-migration-backup';
const legacy={version:1,activeId:'p1',projects:[{id:'p1',name:'Test',data:{...source,advancedV1:{foundationDynamic:{enabled:true,baselinePerBuilding:{main:50000,second:30000,shed:15000}}}}}]};
storage.set(STORE,JSON.stringify(legacy));
const sandbox={localStorage,STORE,PAALStorageGuard:{revision:x=>x?.revision||0},clean,projects:[],activeId:null,console,example:()=>source,uid:()=> 'new',render:()=>{},renderProjectMenu:()=>{},updateSaveStatus:()=>{},current:()=>sandbox.projects.find(p=>p.id===sandbox.activeId),lang:'nl',persist:()=>{}};
const init=vm.runInNewContext('('+initSource+')',sandbox);init();
assert.deepStrictEqual(JSON.parse(storage.get(BACKUP)),legacy,'Backup must be exact pre-clean original');
const firstBackup=storage.get(BACKUP);storage.set(STORE,JSON.stringify({...legacy,projects:[]}));init();assert.strictEqual(storage.get(BACKUP),firstBackup,'Backup must never be overwritten');
console.log('PASS: actual initProjects() creates and preserves pre-migration backup');
// All three views call the same engine, and blocked is surfaced in the UI source and JSON export.
const engine={};vm.runInNewContext(fs.readFileSync(__dirname+'/assets/cost-engine.js','utf8'),engine);
const result=engine.PAALCostEngine.compute(legacy.projects[0].data);assert.strictEqual(result.blocked,true);
const dash=fs.readFileSync(__dirname+'/assets/dashboard.js','utf8'),tools=fs.readFileSync(__dirname+'/assets/project-tools.js','utf8');
assert(dash.includes('PAALCostEngine.compute(d)')&&dash.includes('foundationBlocked')&&dash.includes('if(foundationBlocked)'));
assert(tools.includes('PAALCostEngine.compute(d)')&&tools.includes('blocked:r.blocked')&&tools.includes('if(c.blocked)'));
assert(tools.includes('knownCosts:costs(p.data)'),'Export must use shared cost engine including blocked status');
console.log('PASS: shared engine and blocked warnings/JSON export wired across views (source-level contract)');
