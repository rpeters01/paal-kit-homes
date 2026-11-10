/* Fase 28.5.1 — automated source/consistency checks (no browser required). */
const fs=require('fs'),assert=require('assert');
const pages=['index','project-planner','perceelplanner','bouwplanning','dashboard','project-tools'];
for(const name of pages){const html=fs.readFileSync(name+'.html','utf8');assert(html.includes('assets/navigation.js'),name+' navigation missing');if(name!=='index')assert(html.includes('assets/ui-language.js'),name+' shared i18n missing');}
const app=fs.readFileSync('assets/app.js','utf8'),ui=fs.readFileSync('assets/ui-language.js','utf8'),home=fs.readFileSync('index.html','utf8');
assert(app.includes("'Home catalogue'"),'English model label');assert(app.includes('Manufacturer-confirmed frontage'),'English frontage');assert(app.includes('Confirm the actual slab area'),'English model description');
assert(app.includes('INCLUSION_LABELS_EN'),'English inclusions');assert(app.includes('function costLabel'),'English cost breakdown');
assert(ui.includes("key==='inclusionNote'"),'Inclusions hyperlink preservation');assert(ui.includes('28.5.2'),'version');
assert(home.includes("localStorage.setItem('paal-v2-lang',lang)"),'shared language preference');
assert(home.includes("document.title='PAAL — '"),'home title follows language');
assert(!fs.readFileSync('assets/cost-engine.js','utf8').includes('`Gebouw ${i+1}`'),'neutral building fallback');
assert(fs.readFileSync('assets/project-tools.js','utf8').includes('Opslaan mislukt:'),'translated save failure');
assert(!app.includes('state.buildings.forEach((b,i)=>{b.name='),'do not rewrite building names');
console.log('PASS: six page navigation, translation wiring, model texts, preserved link, language preference, no project-name translation');
