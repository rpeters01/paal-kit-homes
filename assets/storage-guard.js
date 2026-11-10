/* Phase 28.5.2 — optimistic revision guard. localStorage has no atomic compare-and-swap;
   this prevents ordinary stale-tab writes, not simultaneous sub-millisecond races. */
(()=>{'use strict';
const STORE='paal-v2-projects-v1';
const revision=db=>Number.isSafeInteger(db?.revision)&&db.revision>=0?db.revision:0;
function commit(db,expected){
  const before=localStorage.getItem(STORE);
  let latest=null;
  if(before!==null){latest=JSON.parse(before);if(!latest||latest.version!==1||!Array.isArray(latest.projects))throw Error('INVALID_STORE');}
  if(revision(latest)!==expected)throw Error('STALE_PROJECT');
  const next={...db,revision:expected+1};
  localStorage.setItem(STORE,JSON.stringify(next));
  return next;
}
function restore(db,expectedRaw){
  // Explicit full-collection recovery can replace malformed JSON after two user confirmations.
  if(localStorage.getItem(STORE)!==expectedRaw)throw Error('STALE_PROJECT');
  let old=null;try{old=JSON.parse(expectedRaw);}catch(_){}
  const next={...db,revision:revision(old)+1};
  const raw=JSON.stringify(next);
  localStorage.setItem(STORE,raw);
  if(localStorage.getItem(STORE)!==raw)throw Error('RESTORE_VERIFICATION_FAILED');
  return next;
}
const message=()=>localStorage.getItem('paal-v2-lang')==='en'
?'Another tab has changed the project. Your changes were NOT saved. Copy any unsaved text, then reload this page to get the latest version.'
:'Een ander tabblad heeft het project gewijzigd. Je wijzigingen zijn NIET opgeslagen. Kopieer eventuele niet-opgeslagen tekst en herlaad deze pagina voor de nieuwste versie.';
window.PAALStorageGuard={STORE,revision,commit,restore,message};
})();
