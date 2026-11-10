/* Fase 28.3: one bilingual navigation across all application pages. */
(function(){
'use strict';
const items=[
 ['index.html','Startpagina','Home'],
 ['project-planner.html','Kostenplanner','Cost Planner'],
 ['perceelplanner.html','Perceelplanner','Site Planner'],
 ['bouwplanning.html','Bouwplanning','Construction Planning'],
 ['dashboard.html','Projectdashboard','Project Dashboard'],
 ['project-tools.html','Percelen & scenario’s','Land & Scenarios']
];
function language(){const select=document.querySelector('select#language');if(select)return select.value==='en'?'en':'nl';const en=document.querySelector('#en[aria-pressed="true"]');return en?'en':(localStorage.getItem('paal-v2-lang')==='en'?'en':'nl');}
function render(){
 let nav=document.querySelector('header nav');
 if(!nav){nav=document.querySelector('#paal-main-navigation');}
 if(!nav){nav=document.createElement('nav');nav.id='paal-main-navigation';nav.setAttribute('aria-label','Main navigation');const top=document.querySelector('.top');if(top)top.insertAdjacentElement('afterend',nav);else document.body.insertBefore(nav,document.body.firstChild);}
 const lang=language();const here=location.pathname.split('/').pop()||'index.html';
 nav.replaceChildren();
 for(const [href,nl,en] of items){const a=document.createElement('a');a.href=href;a.textContent=lang==='en'?en:nl;if(href===here)a.setAttribute('aria-current','page');nav.appendChild(a);}
 nav.classList.add('paal-main-nav');
}
document.addEventListener('change',e=>{if(e.target?.id==='language')render();});
document.querySelector('#nl')?.addEventListener('click',()=>setTimeout(render,0));
document.querySelector('#en')?.addEventListener('click',()=>setTimeout(render,0));
render();
})();
