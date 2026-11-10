/* Fase 28.1 — single source of truth for known project costs. Read-only; no storage writes. */
(function(global){'use strict';
const COST_KEYS=['landFees','studies','earthworks','utilities','externalWorks','contingency'];
const BUILDING_COST_KEYS=['kitCost','deliveryCost','assemblyCost','fitoutCost'];
const HOME_CATALOG={};
function compute(project){const state=project||{};
 function inclusionAdjustments(){const cfg=dynamicCfg();if(!cfg.upgrades)return [];
  const out=[];for(const b of state.buildings){if(b.kind!=='house')continue;let amount=0;let count=0;for(const v of Object.values(b.inclusions||{})){if(v&&v.extra!==null&&v.extra!==undefined&&Number.isFinite(Number(v.extra))){amount+=Number(v.extra);count++;}}if(count)out.push({label:`${b.name||'#'+(state.buildings.indexOf(b)+1)}: ${count} vastgelegde meerkosten (bovenop kit/overige posten)`,delta:amount});}return out;
 }
 // Fixed reference profiles: never infer pricing from array position.
 const FD_PROFILES={house:{area:250,volume:37,perimeter:65,concrete:12950,steel:10500,forms:7000,membrane:3500,pump:3500,labour:12000,subbase:8500},shed:{area:225,volume:42,perimeter:60,concrete:14700,steel:12000,forms:7000,membrane:1800,pump:4200,labour:12500,subbase:8500},custom:{area:250,volume:37,perimeter:65,concrete:12950,steel:10500,forms:7000,membrane:3500,pump:3500,labour:12000,subbase:8500}};
 function fdConfig(){return state.advancedV1?.foundationDynamic||null;}
 function fdEstimate(){const cfg=fdConfig();if(!cfg?.enabled)return null;
  const rows=[],eligible=[];let sum=0,baseline=0;
  (state.buildings||[]).forEach((b,i)=>{const id=String(b.id??i);const area=Number(b.slabArea)>0?Number(b.slabArea):(Number(b.length)>0&&Number(b.width)>0?Number(b.length)*Number(b.width):null);
   if(!(area>0)||b.foundation!=='slab'){rows.push({id,name:b.name||`#${i+1}`,excluded:true});return;}
   const profile=b.kind==='shed'?'shed':b.kind==='house'?'house':'custom';const base=FD_PROFILES[profile];const ratio=area/base.area;
   const perimeter=Number(b.length)>0&&Number(b.width)>0?(Number(b.length)+Number(b.width))*2:4*Math.sqrt(area);const pRatio=perimeter/base.perimeter;
   const thickness=profile==='shed'?.15:.10;const volume=area*thickness+(base.volume-base.area*thickness)*pRatio;
   const costs={concrete:volume*Number(cfg.concreteRate||350),steel:base.steel*ratio,forms:base.forms*pRatio,membrane:base.membrane*ratio,pump:base.pump*(.7+.3*volume/base.volume),labour:base.labour*(.25+.75*ratio),subbase:base.subbase*ratio};
   const total=Object.values(costs).reduce((a,b)=>a+b,0);sum+=total;eligible.push(id);rows.push({id,name:b.name||`#${i+1}`,area,volume,costs,total,profile,foundationBaseline:b.foundationBaseline});
  });
  let baselineIssue=null;
  // Legacy ID-keyed amounts cannot be trusted after an earlier delete/reload.
  // Never silently associate those values with a different building.
  if(cfg.baselineVersion!==2 && cfg.baselinePerBuilding && typeof cfg.baselinePerBuilding==='object'){
   baselineIssue='legacy-baseline-review';
  }else if(cfg.baselineVersion===2){
   for(const row of rows.filter(r=>!r.excluded)){
    const v=row.foundationBaseline;
    if(v===undefined||v===null||v===''){baselineIssue='missing-per-building';break;}
    if(!Number.isFinite(Number(v))||Number(v)<0){baselineIssue='invalid-per-building';break;}
    baseline+=Number(v);
   }
  }else if(eligible.length===1){
   const v=cfg.baseline;
   if(v!==undefined&&v!==null&&v!==''&&(!Number.isFinite(Number(v))||Number(v)<0))baselineIssue='invalid-per-building';
   else baseline=Number(v||0);
  }else if(eligible.length>1){baselineIssue='legacy-multiple-buildings';}
  return {rows,sum,baseline,baselineIssue,eligible};
 }
 function foundationConflict(fd){if(!fd||!fd.eligible.length)return null;const earth=state.siteCosts?.earthworks;
  if(fd.baselineIssue)return fd.baselineIssue;const text=String(earth?.source||'').toLowerCase();if(Number(earth?.amount)>0&&/slab|fundering|foundation|betonplaat/.test(text)&&fd.baseline===0)return 'earthworks-foundation-overlap';
  return fd.baselineIssue;
 }
 const DYN_KEYS={kit:'kitCost',assembly:'assemblyCost',fitout:'fitoutCost',delivery:'deliveryCost'};
 function dynamicCfg(){return state.advancedV1?.dynamicCosts26||{};}
 function dynamicEnabled(key){return key==='foundation'?(!!fdConfig()?.enabled&&!foundationConflict(fdEstimate())):!!dynamicCfg()[key];}
 function dynamicAdjustments(){
 const out=[];const fd=fdEstimate();if(fd&&fd.rows.some(r=>!r.excluded)){const reason=foundationConflict(fd);if(reason)out.push({label:'Fundering: berekening geblokkeerd',delta:0,skipped:true,blocked:true,reason});else out.push({label:'Dynamische fundering: nieuwe raming minus bestaande voorziening',delta:fd.sum-fd.baseline});}else if(fd)out.push({label:'Fundering: geen gebouwen met betonplaat, bestaande voorziening niet afgetrokken',delta:0,skipped:true});
 const cfg=dynamicCfg();out.push(...inclusionAdjustments());for(const [type,key] of Object.entries(DYN_KEYS)){
 if(!cfg[type])continue;
 let computed=0,baseline=0,unknown=0,quoted=0,eligible=0;
 for(const b of state.buildings){if(b.kind!=='house')continue;
 const c=b.costs?.[key];if(c?.evidence==='quote'){quoted++;continue;}
 if(c?.amount===null||c?.amount===undefined||!Number.isFinite(Number(c.amount))){unknown++;continue;}
 const area=Number(b.roofArea)>0?Number(b.roofArea):Number(b.length)*Number(b.width);
 if(!(area>0)){unknown++;continue;}
 let estimate=null;
 if(type==='kit'){if(b.modelId&&b.modelId!=='custom'&&Number(b.kitReference)>0)estimate=Number(b.kitReference);else{unknown++;continue;}}
 if(type==='assembly')estimate=area*Number(cfg.assemblyRate??650);
 if(type==='fitout')estimate=area*Number(cfg.fitoutRate??1100);
 if(type==='delivery')estimate=Number(cfg.deliveryAmount??12000);
 if(estimate===null)continue;computed+=estimate;baseline+=Number(c.amount);eligible++;
 }
 if(eligible)out.push({label:`${key}: ${eligible} woning(en) herberekend; ${unknown} zonder basis/model, ${quoted} offerte(s) overgeslagen`,delta:computed-baseline});
 else out.push({label:`${key}: geen veilige herberekening (bedragen ontbreken of offerte)`,delta:0,skipped:true});
 }
 return out;
 }

let sum=0,missing=0,filled=0,quotes=0;const entries=[];const add=(group,label,amount,evidence)=>{const n=amount===null||amount===undefined||amount===''?null:Number(amount);if(n===null||!Number.isFinite(n)){missing++;entries.push({group,label,amount:null});return;}sum+=n;filled++;if(evidence==='quote')quotes++;entries.push({group,label,amount:n});};
add('land','Land',state.landPrice,'estimate');
const cp=state.carport,cpAmount=cp?.enabled&&cp.cost?.amount!==null&&cp.cost?.amount!==undefined&&Number.isFinite(Number(cp.cost.amount))?Number(cp.cost.amount):null;
const extAmount=state.siteCosts?.externalWorks?.amount;
const allocate=cpAmount!==null&&cp.includedInExternal===true&&extAmount!==null&&extAmount!==undefined&&Number(extAmount)>=cpAmount;
for(const k of COST_KEYS){if(k==='externalWorks'&&allocate)add('other','External works (excluding allocated carport)',Number(extAmount)-cpAmount,state.siteCosts[k]?.evidence);else add('other',k,state.siteCosts?.[k]?.amount,state.siteCosts?.[k]?.evidence);}
if(cp?.enabled)add('carport','Carport — '+(cp.placement||'undecided'),cpAmount,cp.cost?.evidence);

for(const adj of dynamicAdjustments()){sum+=adj.delta;entries.push({group:'other',label:adj.label,amount:adj.delta,adjustment:true,skipped:!!adj.skipped,blocked:!!adj.blocked,reason:adj.reason||null});}
(state.buildings||[]).forEach((b,i)=>{const group=b.kind==='shed'?'shed':i===0?'main':'second';const name=b.name||'Building '+(i+1);const foundation=b.foundation!=='unknown'&&b.rate!==null&&b.rate!==undefined&&Number(b.rate)>=0&&Number(b.length)>0&&Number(b.width)>0?Number(b.length)*Number(b.width)*Number(b.rate):null;if(!dynamicEnabled('foundation'))add(group,name+' — foundation',foundation,'estimate');for(const k of BUILDING_COST_KEYS)add(group,name+' — '+k,b.costs?.[k]?.amount,b.costs?.[k]?.evidence);});
const adjustments=dynamicAdjustments();return {sum,missing,filled,quotes,entries,adjustments,foundation:fdEstimate(),blocked:adjustments.some(a=>a.blocked)};}
global.PAALCostEngine=Object.freeze({compute});
})(typeof window!=='undefined'?window:globalThis);
