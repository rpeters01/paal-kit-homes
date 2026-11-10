(function(){
 const dict={nl:{siteCosts:'Overige projectkosten',costHelp:'Vul alleen bedragen in die je kunt onderbouwen. Leeg = onbekend, niet $0. Kies raming of offerte en vermeld waar het bedrag vandaan komt.',costSummary:'Kostenoverzicht',missingCosts:'Nog onbekende kostenposten',costAmount:'Bedrag (AUD)',costEvidence:'Status',estimate:'Eigen raming',quote:'Offerte',costSource:'Bron / toelichting',costDate:'Datum bron',kitCost:'PAAL-bouwpakket',deliveryCost:'Transport bouwpakket',assemblyCost:'Montage / bouwarbeid',fitoutCost:'Installaties en afwerking gebouw',landFees:'Aankoopkosten / heffingen grond',studies:'Onderzoeken, ontwerp en vergunningen',earthworks:'Grondwerk en terreinvoorbereiding',utilities:'Aansluitingen / water / afvalwater / stroom',externalWorks:'Opritten, drainage en terreinwerk',contingency:'Onvoorzien (handmatig bedrag)',knownSubtotal:'Totaal ingevulde bedragen (geen volledig budget)',costExcluded:'Ontbrekende posten zijn niet meegerekend. Het totaal is geen offerte of compleet bouwbudget.',costZero:'$0 betekent expliciet geen kosten; leeg betekent onbekend.',noSource:'Niet vermeld',myProjects:'Mijn projecten',storageNote:'Projecten worden automatisch bewaard in deze browser op dit apparaat. Geen account of online synchronisatie.',selectProject:'Open project',projectName:'Projectnaam',newProject:'Nieuw project',copyProject:'Project kopiëren',deleteProject:'Verwijderen',backup:'Back-up maken',migrationBackup:'Migratieback-up downloaden',restore:'Back-up herstellen',backupWarning:'Let op: browsergegevens kunnen worden gewist. Maak regelmatig een back-up. Op een ander apparaat verschijnen projecten niet automatisch.',saved:'Alle wijzigingen opgeslagen',saving:'Wijzigingen opslaan…',saveError:'Opslaan mislukt. Maak een back-up en controleer browseropslag.',loadError:'Projectgegevens konden niet worden geladen. De oorspronkelijke browsergegevens zijn niet overschreven. Exporteer zo nodig de migratieback-up.',confirmDelete:'Dit project definitief verwijderen?',confirmRestore:'Back-up importeren als nieuw project?',untitled:'Nieuw project',copySuffix:' (kopie)',invalidBackup:'Dit is geen geldig PAAL-projectbestand.',home:'Startpagina',back:'← Terug naar oorspronkelijke website',over:'Gebouwvoetafdruk is groter dan het perceel.',missing:'Vul een geldige perceeloppervlakte in om ruimte te berekenen.',research:'Ervaringen',guide:'Bouwgids',planner:'Kostenplanner',sources:'Bronnen',title:'Kostenplanner',intro:'Onafhankelijk onderzoek en een voorlopige planner voor grond, woningen, schuren en kosten.',researchTitle:'Onderzoeksbibliotheek',researchDesc:'Hier komen uitsluitend controleerbare ervaringen en bouwprojecten. Nog geen onafhankelijke dossiers gepubliceerd.',guideTitle:'Van grond tot bewoning',guideDesc:'Onderzoek de haalbaarheid voordat je grond koopt.',plannerTitle:'Kostenplanner',land:'Perceel',area:'Perceeloppervlak (m²)',price:'Vraagprijs grond (AUD)',buildings:'Gebouwen',add:'Gebouw toevoegen',remove:'Verwijderen',kind:'Type',house:'Woning',shed:'Schuur',length:'Lengte (m)',width:'Breedte (m)',foundation:'Fundering',slab:'Betonplaat',piers:'Verhoogd / poeren',unknown:'Onbekend',rate:'Voorlopige funderingsprijs (AUD/m²)',total:'Indicatieve bekende kosten',footprint:'Totale gebouwvoetafdruk',remaining:'Overig perceeloppervlak (geen bouwrecht)',save:'Project opslaan',load:'Projectbestand openen',reset:'Beginwaarden herstellen',costNote:'Dit overzicht telt alleen ingevulde bedragen op. Lege posten blijven onbekend. Geen offerte, bouwrecht of volledig budget.',legal:'Twee zelfstandige woningen zijn niet automatisch toegestaan. Controleer bestemming, toepasselijke regels en vergunningen voor het specifieke perceel.',sourcesTitle:'Bronnen & betrouwbaarheid',sourcesDesc:'Alle toekomstige bedragen en juridische conclusies krijgen een bron, controledatum en status. De huidige rekenwaarden zijn invoer van de gebruiker, geen marktprijzen.',steps:'Onderzoeksfasen',stage1:'1. Perceel en toegestane ontwikkeling',stage2:'2. Onderzoeken, ontwerp en vergunningen',stage3:'3. Grondwerk, funderingen en infrastructuur',stage4:'4. PAAL-kit, levering en montage',stage5:'5. Installaties, afwerking en oplevering',stage6:'6. Ervaringen na bewoning',status:'In ontwikkeling',exported:'Back-up gedownload.',invalid:'Controleer de ingevoerde getallen.',name:'Naam'},en:{siteCosts:'Other project costs',costHelp:'Enter only amounts you can substantiate. Blank = unknown, not $0. Choose estimate or quote and note where the figure comes from.',costSummary:'Cost overview',missingCosts:'Cost items still unknown',costAmount:'Amount (AUD)',costEvidence:'Status',estimate:'Own estimate',quote:'Quote',costSource:'Source / notes',costDate:'Source date',kitCost:'PAAL building kit',deliveryCost:'Kit delivery',assemblyCost:'Assembly / construction labour',fitoutCost:'Building services and fit-out',landFees:'Land purchase costs / duties',studies:'Studies, design and approvals',earthworks:'Earthworks and site preparation',utilities:'Power, water and wastewater connections',externalWorks:'Driveways, drainage and external works',contingency:'Contingency (manually entered)',knownSubtotal:'Sum of entered amounts (not a complete budget)',costExcluded:'Missing items are excluded. The subtotal is not a quote or complete build budget.',costZero:'$0 explicitly means no cost; blank means unknown.',noSource:'Not provided',myProjects:'My projects',storageNote:'Projects are saved automatically in this browser on this device. No account or online sync.',selectProject:'Open project',projectName:'Project name',newProject:'New project',copyProject:'Duplicate project',deleteProject:'Delete project',backup:'Create backup',migrationBackup:'Download migration backup',restore:'Restore backup',backupWarning:'Important: browser data can be cleared. Make regular backups. Projects do not automatically appear on other devices.',saved:'All changes saved',saving:'Saving changes…',saveError:'Could not save. Make a backup and check browser storage.',loadError:'Project data could not be loaded. Original browser data has not been overwritten. Export the migration backup if needed.',confirmDelete:'Permanently delete this project?',confirmRestore:'Import backup as a new project?',untitled:'New project',copySuffix:' (copy)',invalidBackup:'Not a valid PAAL project file.',home:'Home',back:'← Back to original website',over:'Building footprint exceeds lot area.',missing:'Enter a valid lot area to calculate remaining land.',research:'Owner stories',guide:'Build guide',planner:'Cost Planner',sources:'Sources',title:'Cost Planner',intro:'Independent research and a preliminary planner for land, homes, sheds and costs.',researchTitle:'Research library',researchDesc:'Only verifiable owner accounts and projects will be published here. No independent dossiers published yet.',guideTitle:'From vacant land to living in your home',guideDesc:'Assess feasibility before buying land.',plannerTitle:'Cost Planner',land:'Land',area:'Lot area (m²)',price:'Land asking price (AUD)',buildings:'Buildings',add:'Add building',remove:'Remove',kind:'Type',house:'Home',shed:'Shed',length:'Length (m)',width:'Width (m)',foundation:'Foundation',slab:'Concrete slab',piers:'Elevated / piers',unknown:'Unknown',rate:'Indicative foundation rate (AUD/m²)',total:'Indicative known costs',footprint:'Total building footprint',remaining:'Other land area (not a planning approval)',save:'Save project',load:'Open project file',reset:'Restore example',costNote:'This summary adds only entered amounts. Blank items remain unknown. Not a quote, planning approval or complete budget.',legal:'Two independent dwellings are not automatically permitted. Verify zoning, applicable controls and approvals for the specific property.',sourcesTitle:'Sources & confidence',sourcesDesc:'Future prices and planning claims will show a source, review date and evidence status. Current calculation rates are user inputs, not market quotes.',steps:'Research stages',stage1:'1. Land and permitted development',stage2:'2. Investigations, design and approvals',stage3:'3. Earthworks, foundations and infrastructure',stage4:'4. PAAL kit, delivery and assembly',stage5:'5. Services, finishing and occupancy',stage6:'6. Living in the finished home',status:'In development',exported:'Backup downloaded.',invalid:'Check numeric inputs.',name:'Name'}};
 const COST_KEYS=['landFees','studies','earthworks','utilities','externalWorks','contingency'];
 const BUILDING_COST_KEYS=['kitCost','deliveryCost','assemblyCost','fitoutCost'];
 const emptyCost=()=>({amount:null,evidence:'estimate',source:'',date:''});
 const freshCosts=keys=>Object.fromEntries(keys.map(k=>[k,emptyCost()]));
 const example=()=>({schemaVersion:1,lotArea:8000,landPrice:450000,siteCosts:freshCosts(COST_KEYS),landEvidence:emptyCost(),buildings:[{id:1,kind:'house',name:'Main home',length:20,width:12.5,foundation:'unknown',rate:null},{id:2,kind:'house',name:'Second home',length:20,width:10,foundation:'unknown',rate:null},{id:3,kind:'shed',name:'Shed',length:15,width:10,foundation:'unknown',rate:null}]});
 let state=example(),lang='nl';try{lang=localStorage.getItem('paal-v2-lang')==='en'?'en':'nl'}catch(e){}const $=s=>document.querySelector(s);const t=k=>dict[lang][k]||k;const money=v=>new Intl.NumberFormat(lang==='nl'?'nl-NL':'en-AU',{style:'currency',currency:'AUD',maximumFractionDigits:0}).format(v);const num=v=>v!==null&&v!==undefined&&String(v).trim()!==''&&Number.isFinite(+v)&&+v>=0?+v:null;
 const HOME_CATALOG={
  custom:{name:"Eigen ontwerp / Custom",brand:"Custom",price:null},
  'paal-blackheath':{name:'Blackheath',brand:'PAAL Classic',price:148200},
  'paal-fitzroy':{name:'Fitzroy',brand:'PAAL Classic',price:151950},
  'paal-kiama':{name:'Kiama',brand:'PAAL Classic',price:159430},
  'paal-berrima':{name:'Berrima',brand:'PAAL Classic',price:164630},
  'paal-tasman':{name:'Tasman',brand:'PAAL Classic',price:172420},
  'paal-patterson':{name:'Patterson',brand:'PAAL Classic',price:176700},
  'avalon':{name:'Avalon',brand:'PAAL Classic',price:191090,length:17.94,width:17.2,roofArea:240},
  'paal-robertson':{name:'Robertson',brand:'PAAL Classic',price:196010},
  'paal-elizabeth':{name:'Elizabeth',brand:'PAAL Classic',price:213150},
  'paal-windsor':{name:'Windsor',brand:'PAAL Classic',price:219780},
  'paal-barrington':{name:'Barrington',brand:'PAAL Classic',price:220630},
  'paal-riverina':{name:'Riverina',brand:'PAAL Classic',price:226660},
  'paal-camden':{name:'Camden',brand:'PAAL Classic',price:257180},
  'paal-murray':{name:'Murray',brand:'PAAL Classic',price:266670},
  'paal-hartley':{name:'Hartley',brand:'PAAL Classic',price:286130},
  'paal-hawkesbury':{name:'Hawkesbury',brand:'PAAL Classic',price:243420,length:25.71,width:10.66,roofArea:278,source:'https://www.paalkithomes.com.au/kit-homes/the-hawkesbury.php'},
  'paal-stanthorpe':{name:'Stanthorpe',brand:'PAAL Classic',price:293070},
  'paal-derwent':{name:'Derwent',brand:'PAAL Classic',price:299940},
  'paal-castlereagh':{name:'Castlereagh',brand:'PAAL Classic',price:319100},
  'paal-richmond':{name:'Richmond',brand:'PAAL Classic',price:353140},
  'paal-franklin':{name:'Franklin',brand:'PAAL Classic',price:351840},
  'pavilion-barclay':{name:'Barclay',brand:'PAAL Pavilion',price:140760},
  'pavilion-rutherford':{name:'Rutherford',brand:'PAAL Pavilion',price:192310},
  'pavilion-eltham':{name:'Eltham',brand:'PAAL Pavilion',price:213730},
  'pavilion-edgerton':{name:'Edgerton',brand:'PAAL Pavilion',price:243650},
  'pavilion-daylesford':{name:'Daylesford',brand:'PAAL Pavilion',price:230810},
  'pavilion-shirlow':{name:'Shirlow',brand:'PAAL Pavilion',price:281240},
  'pavilion-brighton':{name:'Brighton',brand:'PAAL Pavilion',price:295240},
  'pavilion-hampton':{name:'Hampton',brand:'PAAL Pavilion',price:331160},
  'pavilion-coventry':{name:'Coventry',brand:'PAAL Pavilion',price:394700},
  'met-macleay-2':{name:'Macleay 2',brand:'MET-Kit',price:104800},
  'met-hastings-3':{name:'Hastings 3',brand:'MET-Kit',price:103470,floorArea:98.3,roofArea:140.3,source:'https://www.metkithomes.com.au/files/range/hastings-3-kit-home-floorplan.php'},
  'met-forest-3':{name:'Forest 3',brand:'MET-Kit',price:100820},
  'met-springvale-3':{name:'Springvale 3',brand:'MET-Kit',price:123450},
  'met-hunter-3':{name:'Hunter 3',brand:'MET-Kit',price:104020},
  'met-greenway-3':{name:'Greenway 3',brand:'MET-Kit',price:113320,floorArea:104.8,roofArea:149.1,source:'https://www.metkithomes.com.au/files/range/greenway-3-kit-home-floorplan.php'},
  'met-argyle-3':{name:'Argyle 3',brand:'MET-Kit',price:117330,floorArea:117.8,roofArea:166.7,frontage:16.35,source:'https://www.metkithomes.com.au/files/range/argyle-3-kit-home-floorplan.php'},
  'met-mitchell-4':{name:'Mitchell 4',brand:'MET-Kit',price:107770,floorArea:104.8,roofArea:149.1,source:'https://www.metkithomes.com.au/files/range/mitchell-4-kit-home-floorplan.php'},
  'met-earlwood-4':{name:'Earlwood 4',brand:'MET-Kit',price:126600},
  'met-sandford-4':{name:'Sandford 4',brand:'MET-Kit',price:128630},
  'met-gordon-4':{name:'Gordon 4',brand:'MET-Kit',price:126870,floorArea:130.7,roofArea:184.3,source:'https://www.metkithomes.com.au/files/range/gordon-4-kit-home-floorplan.php'},
  'met-flinders-4':{name:'Flinders 4',brand:'MET-Kit',price:116870,floorArea:124.2,source:'https://www.metkithomes.com.au/files/range/flinders-4-kit-home-floorplan.php'},
  'met-the-entertainer':{name:'The Entertainer',brand:'MET-Kit',price:180240},
  'met-daintree-5':{name:'Daintree 5',brand:'MET-Kit',price:146730},
  'met-sandford-5':{name:'Sandford 5',brand:'MET-Kit',price:128560},
 };
 const homeModel=id=>HOME_CATALOG[id]||HOME_CATALOG.custom;
 const homeModelOptions=()=>{const groups=[["PAAL - Classic","PAAL Classic"],["PAAL - Pavilion","PAAL Pavilion"],["MET-Kit - Budget","MET-Kit"]];return `<option value="custom">${lang==='nl'?'Eigen ontwerp':'Custom design'}</option>`+groups.map(([label,brand])=>`<optgroup label="${label}">${Object.entries(HOME_CATALOG).filter(([id,m])=>m.brand===brand).map(([id,m])=>`<option value="${id}">${m.name} - AU$ ${m.price.toLocaleString('en-AU')}</option>`).join('')}</optgroup>`).join('');};
 function translate(){document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));$('#language').value=lang;render();renderProjectMenu();updateSaveStatus();}
 function render(){const list=$('#buildings');if(!list)return;list.replaceChildren();state.buildings.forEach((b,i)=>{const el=document.createElement('div');el.className='card';el.innerHTML=`<div class="fields"><div><label>${t('name')}</label><input data-key="name" type="text"></div><div><label>${t('kind')}</label><select data-key="kind"><option value="house">${t('house')}</option><option value="shed">${t('shed')}</option></select></div><div><label>${t('length')}</label><input data-key="length" type="number" min="0.1" step="0.1"></div><div><label>${t('width')}</label><input data-key="width" type="number" min="0.1" step="0.1"></div><div><label>${t('foundation')}</label><select data-key="foundation"><option value="unknown">${t('unknown')}</option><option value="slab">${t('slab')}</option><option value="piers">${t('piers')}</option></select></div><div><label>${t('rate')}</label><input data-key="rate" type="number" min="0" step="1" placeholder="${t('unknown')}"></div></div><button class="secondary" data-remove>${t('remove')}</button>`;list.append(el);
 if(b.kind==='house'){
 const model=document.createElement('div');model.className='model-picker';model.innerHTML=`<label>${lang==='nl'?'Woningcatalogus':'Home catalogue'}</label><select class="model-select"></select><div class="model-info"></div><div class="model-source"></div><div class="model-frontage-field"><label for="frontage-model-${i}">${lang==='nl'?'Gevelbreedte (m) — fabrikantgegeven':'Frontage (m) — manufacturer-confirmed'}</label><input id="frontage-model-${i}" class="model-frontage" type="text" readonly aria-label="${lang==='nl'?'Officiële gevelbreedte, niet gebruikt voor funderingsberekening':'Manufacturer-confirmed frontage, not used for foundation estimates'}"><small class="frontage-note">${lang==='nl'?'Niet gebruikt als lengte, breedte of betonvloeroppervlak.':'Not used as building length, width or concrete slab area.'}</small></div><label>${lang==='nl'?'Betonvloeroppervlak (m²) — optioneel, volgens bouwtekening':'Concrete slab area (m²) — optional, from construction drawings'}</label><input class="model-slab" type="number" min="0" step="0.1" placeholder="${lang==='nl'?'Leeg = indicatieve rechthoek indien maten bekend':'Blank = indicative rectangle if dimensions are known'}">`;
 el.prepend(model);const select=model.querySelector('select');select.innerHTML=homeModelOptions();select.value=HOME_CATALOG[b.modelId]?b.modelId:'custom';
 const info=model.querySelector('.model-info');const infoUpdate=()=>{const m=homeModel(b.modelId);const hasSlab=b.slabArea!==null&&b.slabArea!==undefined&&Number(b.slabArea)>0;const validDims=Number(b.length)>0&&Number(b.width)>0;const floor=hasSlab?Number(b.slabArea):(validDims?Number(b.length)*Number(b.width):null);const approx=hasSlab?(lang==='nl'?'ingevoerde betonvloer':'entered slab area'):validDims?(lang==='nl'?'voorlopige rechthoek lengte × breedte':'provisional length × width rectangle'):(lang==='nl'?'onbekend (maten ontbreken)':'unknown (dimensions missing)');
info.textContent=m.price?(lang==='nl'?`${m.brand} — ${m.name}: gepubliceerde kitprijs ${money(m.price)} incl. GST (geen offerte, af fabriek). ${m.floorArea?'Officiële woonvloeroppervlakte: '+m.floorArea+' m². ':''}${m.roofArea?'Oppervlakte onder dak: '+m.roofArea+' m². ':''}${m.frontage?'Officiële gevelbreedte: '+m.frontage+' m; diepte niet bevestigd. ':''}${m.source?'Bron: '+m.source+'. ':''}Dynamische fundering op basis van ${approx}: ${floor!==null&&Number.isFinite(floor)?floor.toFixed(1):'onbekend'} m². Controleer de werkelijke betonvloer op de bouwtekening; dakoppervlak is niet automatisch betonvloeroppervlak.`:`${m.brand} — ${m.name}: published kit price ${money(m.price)} including GST (reference only, ex-factory; not a quote). ${m.floorArea?'Manufacturer-published living area: '+m.floorArea+' m². ':''}${m.roofArea?'Area under roof: '+m.roofArea+' m². ':''}${m.frontage?'Manufacturer-confirmed frontage: '+m.frontage+' m; depth not confirmed. ':''}${m.source?'Source: '+m.source+'. ':''}Dynamic foundation estimate based on ${approx}: ${floor!==null&&Number.isFinite(floor)?floor.toFixed(1):'unknown'} m². Confirm the actual slab area from construction drawings; roof area is not necessarily slab area.`):(lang==='nl'?'Eigen ontwerp: vul maten en prijzen zelf in. Dynamische fundering gebruikt de betonvloer of voorlopig lengte × breedte.':'Custom design: enter your own dimensions and prices. The dynamic foundation estimate uses the slab area or a provisional length × width rectangle.');};infoUpdate();
 const frontageField=model.querySelector('.model-frontage-field');const frontageInput=model.querySelector('.model-frontage');const frontageValue=homeModel(b.modelId).frontage;frontageField.hidden=!(Number(frontageValue)>0);frontageInput.value=Number(frontageValue)>0?Number(frontageValue).toLocaleString(lang==='nl'?'nl-NL':'en-AU',{maximumFractionDigits:2}):'';
 const sourceEl=model.querySelector('.model-source');const updateSource=()=>{const m=homeModel(b.modelId);sourceEl.replaceChildren();if(m.source){const a=document.createElement('a');a.href=m.source;a.target='_blank';a.rel='noopener noreferrer';a.textContent=lang==='nl'?'Open officiële modelpagina':'Open official model page';sourceEl.append(a);}if(m.frontage&&!m.length){const note=document.createElement('div');note.textContent=lang==='nl'?'De fabrikant bevestigt de gevelbreedte, maar niet de volledige diepte. Daarom blijven lengte en breedte leeg tot de plattegrond is gecontroleerd. De woon- en dakoppervlakte worden niet als betonvloer gebruikt.':'The manufacturer confirms the frontage, but not the full depth. Length and width therefore remain blank until the floor plan is checked. Living and roof areas are not used as slab area.';sourceEl.append(note);}};updateSource();
 const slabInput=model.querySelector('.model-slab');slabInput.value=b.slabArea??'';slabInput.addEventListener('change',()=>{b.slabArea=num(slabInput.value);infoUpdate();calc();queueSave();});
 select.addEventListener('change',()=>{b.modelId=select.value;const m=homeModel(b.modelId);b.kitReference=m.price??null;b.roofArea=m.roofArea??null;b.slabArea=null;b.length=m.length??null;b.width=m.width??null;b.floorArea=m.floorArea??null;b.name=m.price?m.name:b.name;render();queueSave();});
 }
 if(b.kind==='house')renderInclusions(el,b);
 addCostFields(el,b);el.querySelectorAll('[data-key]').forEach(inp=>{const key=inp.dataset.key;inp.value=b[key]??'';inp.addEventListener('input',()=>{b[key]=['length','width','rate'].includes(key)?num(inp.value):inp.value;calc();queueSave();});});el.querySelector('[data-remove]').onclick=()=>{state.buildings.splice(i,1);render();queueSave();};});$('#lotArea').value=state.lotArea??'';$('#landPrice').value=state.landPrice??'';renderSiteCosts();calc();}

 // PAAL standard inclusions, May 2026: reference information, not a project-specific quotation.
 const INCLUSION_GROUPS=[
 ['frame','Stalen frame, dak, gevel, ramen en deuren','included'],
 ['kitchen','Keukenkasten en standaard keukenonderdelen','included'],
 ['appliances','Oven, kookplaat en afzuigkap (P.C.-items)','allowance'],
 ['bathroom','Sanitair, wastafels, toiletten, bad en boiler (P.C.-items)','allowance'],
 ['tiles','Tegels (PAAL-stelpost $40/m²)','allowance'],
 ['electrical','Elektrische kit: schakelaars, stopcontacten en lampen','included'],
 ['plumbing','Sanitaire kit: kranen en doucheonderdelen','included'],
 ['screens','Douchewanden op maat','excluded'],
 ['installation','Montage, elektricien en loodgieter: arbeid','verify'],
 ['slab','Betonvloer en funderingen','verify']
 ];
 const INCLUSION_LABELS_EN={'frame':'Steel framing, roofing, cladding, windows and doors','kitchen':'Kitchen cabinetry and standard kitchen components','appliances':'Oven, cooktop and rangehood (prime cost items)','bathroom':'Bathroom fittings, basins, toilets, bath and hot water unit (prime cost items)','tiles':'Tiles (PAAL allowance $40/m²)','electrical':'Electrical kit: switches, power points and light fittings','plumbing':'Plumbing kit: taps and shower fittings','screens':'Custom shower screens','installation':'Assembly, electrician and plumber labour','slab':'Concrete slab and foundations'};
 function renderInclusions(el,b){
  const details=document.createElement('details');details.className='inclusion-panel';
  const summary=document.createElement('summary');summary.textContent=lang==='nl'?'PAAL-kitinhoud, stelposten en meerwerk':'PAAL kit inclusions, allowances and upgrades';details.append(summary);
  const desc=document.createElement('p');desc.className='muted';desc.textContent=lang==='nl'?'Standaardlijst PAAL 05/2026, controleer per model en offerte. Alleen bevestigde EXTRA meerkosten worden toegevoegd. Kitmaterialen en installatiearbeid zijn gescheiden.':'PAAL standard inclusions list, May 2026. Check against the specific model and quote. Only confirmed ADDITIONAL costs are added. Kit materials and installation labour are separate.';details.append(desc);
  const grid=document.createElement('div');grid.className='inclusion-grid';
  b.inclusions=b.inclusions||{};
  for(const [key,labelNl,defaultStatus] of INCLUSION_GROUPS){
   const label=lang==='nl'?labelNl:INCLUSION_LABELS_EN[key];
   const row=document.createElement('div');row.className='inclusion-row';
   const title=document.createElement('strong');title.textContent=label;
   const select=document.createElement('select');select.setAttribute('aria-label',label+' status');
   for(const [value,text] of [['included',lang==='nl'?'Inbegrepen (standaardlijst)':'Included (standard kit)'],['allowance',lang==='nl'?'Stelpost / P.C.':'Allowance / P.C. item'],['excluded',lang==='nl'?'Niet inbegrepen':'Excluded'],['verify',lang==='nl'?'Nog bevestigen':'To be confirmed']]){const opt=document.createElement('option');opt.value=value;opt.textContent=text;select.append(opt);}
   const stored=b.inclusions[key]||{};select.value=stored.status||defaultStatus;
   const amount=document.createElement('input');amount.type='number';amount.min='0';amount.step='50';amount.placeholder=lang==='nl'?'Extra meerkosten AUD (optioneel)':'Additional cost AUD (optional)';amount.setAttribute('aria-label',label+(lang==='nl'?' extra kosten':' additional cost'));amount.value=stored.extra??'';
   const note=document.createElement('input');note.type='text';note.maxLength=160;note.placeholder=lang==='nl'?'Bron / gekozen upgrade':'Source / selected upgrade';note.setAttribute('aria-label',label+(lang==='nl'?' toelichting':' notes'));note.value=stored.note||'';
   const save=()=>{b.inclusions[key]={status:select.value,extra:num(amount.value),note:note.value.slice(0,160)};calc();queueSave();};
   for(const input of [select,amount,note])input.addEventListener('change',save);
   row.append(title,select,amount,note);grid.append(row);
  }
  details.append(grid);el.append(details);
 }
 function inclusionAdjustments(){const cfg=dynamicCfg();if(!cfg.upgrades)return [];
  const out=[];for(const b of state.buildings){if(b.kind!=='house')continue;let amount=0;let count=0;for(const v of Object.values(b.inclusions||{})){if(v&&v.extra!==null&&v.extra!==undefined&&Number.isFinite(Number(v.extra))){amount+=Number(v.extra);count++;}}if(count)out.push({label:`${b.name||(lang==='nl'?'Woning':'Residence')}: ${count} vastgelegde meerkosten (bovenop kit/overige posten)`,delta:amount});}return out;
 }
 function normalCost(c){if(typeof c==='number')return {amount:num(c),evidence:'estimate',source:'',date:''};return {amount:num(c?.amount),evidence:c?.evidence==='quote'?'quote':'estimate',source:String(c?.source||'').slice(0,250),date:/^\d{4}-\d{2}-\d{2}$/.test(c?.date||'')?c.date:''};}
 function costEditor(key,c,scope){const wrap=document.createElement('div');wrap.className='cost-row';const title=document.createElement('h4');title.textContent=t(key);wrap.append(title);const fields=document.createElement('div');fields.className='fields';const addField=(label,type,value,handler,options)=>{const outer=document.createElement('div'),lab=document.createElement('label');lab.textContent=t(label);const input=document.createElement(options?'select':'input');if(options){options.forEach(([v,k])=>{const o=document.createElement('option');o.value=v;o.textContent=t(k);input.append(o);});}else{input.type=type;if(type==='number'){input.min='0';input.step='100';input.placeholder=t('unknown');}if(type==='text')input.maxLength=250;}input.value=value??'';input.addEventListener('input',()=>{handler(input.value);calc();queueSave();});outer.append(lab,input);fields.append(outer);};addField('costAmount','number',c.amount,v=>c.amount=num(v));addField('costEvidence','text',c.evidence,v=>c.evidence=v,[['estimate','estimate'],['quote','quote']]);addField('costSource','text',c.source,v=>c.source=v.slice(0,250));addField('costDate','date',c.date,v=>c.date=v);wrap.append(fields);scope.append(wrap);}
 function addCostFields(el,b){if(!b.costs)b.costs=freshCosts(BUILDING_COST_KEYS);const details=document.createElement('details');details.className='building-costs';const summary=document.createElement('summary');summary.textContent=lang==='nl'?'Kosten voor dit gebouw':'Costs for this building';details.append(summary);BUILDING_COST_KEYS.forEach(k=>costEditor(k,b.costs[k],details));el.append(details);}
 function renderSiteCosts(){const el=$('#siteCosts');el.replaceChildren();COST_KEYS.forEach(k=>costEditor(k,state.siteCosts[k],el));renderCarport();}
 function renderCarport(){const el=$('#carportPanel');if(!el)return;el.replaceChildren();const c=state.carport||{enabled:false,length:13,width:7,placement:'undecided',layoutX:30,layoutY:40,cost:emptyCost(),includedInExternal:true};state.carport=c;
 const h=document.createElement('h3');h.textContent=lang==='nl'?'Carport (vier auto’s)':'Carport (four cars)';el.append(h);
 const note=document.createElement('p');note.className='muted';note.textContent=lang==='nl'?'Los van de schuur. Kosten zijn een raming, geen offerte. Bij opgenomen kosten in terreinwerk wordt alleen de verdeling aangepast, niet het totaal.':'Separate from the shed. Costs are estimates, not quotes. If already included in external works, only the allocation changes, not the total.';el.append(note);
 const fields=document.createElement('div');fields.className='fields';el.append(fields);
 const input=(label,type,value,change,options)=>{const box=document.createElement('div'),lab=document.createElement('label'),inp=document.createElement(options?'select':'input');lab.textContent=label;if(options){for(const [val,txt] of options){const opt=document.createElement('option');opt.value=val;opt.textContent=txt;inp.append(opt);}}else inp.type=type;if(type==='checkbox')inp.checked=!!value;else inp.value=value??'';if(type==='number'){inp.min='0';inp.step='0.1';}inp.addEventListener('change',()=>{const v=type==='checkbox'?inp.checked:inp.value;change(v);renderCarport();calc();queueSave();});if(type==='checkbox'){
   box.classList.add('paal-toggle-card');
   lab.classList.add('paal-toggle-label');
   const id='paal-carport-toggle-'+(label.includes('External')?'included':'enabled');
   inp.id=id;lab.htmlFor=id;
   const refreshStatus=()=>box.classList.toggle('is-on',inp.checked);
   inp.addEventListener('change',refreshStatus);refreshStatus();
   box.append(lab,inp);
  }else{box.append(lab,inp);}
  fields.append(box);};
 input(lang==='nl'?'Carport opnemen':'Include carport','checkbox',c.enabled,v=>c.enabled=v);
 if(!c.enabled)return;
 input(lang==='nl'?'Lengte (m)':'Length (m)','number',c.length,v=>{if(Number(v)>0)c.length=Number(v)});
 input(lang==='nl'?'Breedte (m)':'Width (m)','number',c.width,v=>{if(Number(v)>0)c.width=Number(v)});
 input(lang==='nl'?'Uitvoering':'Configuration','text',c.placement,v=>c.placement=v,[['undecided',lang==='nl'?'Nog niet bepaald':'Undecided'],['attached',lang==='nl'?'Aangebouwd':'Attached'],['freestanding',lang==='nl'?'Vrijstaand':'Freestanding']]);
 input(lang==='nl'?'Kostenraming (AUD; leeg = onbekend)':'Cost estimate (AUD; blank = unknown)','number',c.cost?.amount,v=>{c.cost=c.cost||emptyCost();c.cost.amount=num(v)});
 input(lang==='nl'?'Bedrag zit al in External works':'Amount already included in external works','checkbox',c.includedInExternal,v=>c.includedInExternal=v);
 input(lang==='nl'?'Toelichting / bron':'Source / notes','text',c.cost?.source,v=>{c.cost=c.cost||emptyCost();c.cost.source=String(v).slice(0,250)});
 const warn=document.createElement('p');warn.className='notice';const amount=c.cost?.amount;const ext=state.siteCosts?.externalWorks?.amount;warn.textContent=amount===null||amount===undefined?(lang==='nl'?'Carportkosten nog onbekend. Bestaande External works blijven ongewijzigd.':'Carport costs unknown; existing external works unchanged.'):(c.includedInExternal?(Number(ext)>=Number(amount)?(lang==='nl'?`Van External works (${money(Number(ext))}) wordt ${money(Number(amount))} apart getoond als carport; totaal blijft gelijk.`:`Carport ${money(Number(amount))} is reallocated from external works ${money(Number(ext))}; total unchanged.`):(lang==='nl'?'LET OP: carportbedrag is groter dan External works. Geen aftrek toegepast; controleer dubbeltelling.':'WARNING: carport exceeds external works. No deduction applied; check double counting.')):(lang==='nl'?'Carportbedrag wordt bovenop de bestaande External works geteld. Controleer dubbeltelling.':'Carport amount is added to external works; check for double counting.'));el.append(warn);
 }


 // Phase 25: opt-in dynamic foundation estimate. Existing projects are unchanged until enabled.
 function fdConfig(){return state.advancedV1?.foundationDynamic||null;}
 function dynamicCfg(){return state.advancedV1?.dynamicCosts26||{};}
 function dynamicEnabled(key){return key==='foundation'?!!fdConfig()?.enabled:!!dynamicCfg()[key];}
 function fdEstimate(){return PAALCostEngine.compute(state).foundation;}
 function dynamicAdjustments(){return PAALCostEngine.compute(state).adjustments;}
 function costLabel(label){if(lang==='nl')return label;const m={landFees:'Land purchase costs',studies:'Planning and studies',earthworks:'Earthworks',utilities:'Utility connections',externalWorks:'External works',contingency:'Contingency',kitCost:'Kit package',deliveryCost:'Delivery',assemblyCost:'Assembly labour',fitoutCost:'Fit-out',Land:'Land',foundation:'Foundation'};if(m[label])return m[label];if(label==='Fundering: berekening geblokkeerd')return 'Foundations: calculation blocked';if(label==='Dynamische fundering: nieuwe raming minus bestaande voorziening')return 'Dynamic foundations: new estimate less existing allowance';if(label==='Fundering: geen gebouwen met betonplaat, bestaande voorziening niet afgetrokken')return 'Foundations: no eligible slab buildings; existing allowance not deducted';const match=label.match(/^(kitCost|assemblyCost|fitoutCost|deliveryCost): (\d+) woning\(en\) herberekend; (\d+) zonder basis\/model, (\d+) offerte\(s\) overgeslagen$/);if(match)return `${m[match[1]]}: ${match[2]} residences recalculated; ${match[3]} missing baseline/model, ${match[4]} quotes excluded`;const skip=label.match(/^(kitCost|assemblyCost|fitoutCost|deliveryCost): geen veilige herberekening/);if(skip)return `${m[skip[1]]}: no reliable recalculation (missing amounts or quotes)`;const inc=label.match(/^(.*): (\d+) vastgelegde meerkosten \(bovenop kit\/overige posten\)$/);if(inc)return `${inc[1]}: ${inc[2]} recorded additional costs (on top of kit/other items)`;return label.replace(/ — (kitCost|deliveryCost|assemblyCost|fitoutCost|foundation)$/,(_,key)=>' — '+m[key]);}
 function fdRender(){const panel=document.getElementById('foundationDynamic');if(!panel)return;
 const f=fdConfig(),c=dynamicCfg();for(const [id,val] of [['fdEnabled',!!f?.enabled],['dynKit',!!c.kit],['dynAssembly',!!c.assembly],['dynFitout',!!c.fitout],['dynDelivery',!!c.delivery],['dynUpgrades',!!c.upgrades]])panel.querySelector('#'+id).checked=val;
 for(const [id,val] of [['fdConcreteRate',f?.concreteRate??350],['fdBaseline',f?.baseline??0],['dynAssemblyRate',c.assemblyRate??650],['dynFitoutRate',c.fitoutRate??1100],['dynDeliveryAmount',c.deliveryAmount??12000]])panel.querySelector('#'+id).value=val;
 const eligibleBuildings=state.buildings.map((b,i)=>({b,i})).filter(x=>x.b.foundation==='slab');
 const baselineInput=panel.querySelector('#fdBaseline');const baselineWrap=baselineInput?.parentElement;
 if(baselineWrap)baselineWrap.hidden=eligibleBuildings.length>1 || f?.baselineVersion===2;
 const perBox=panel.querySelector('#fdPerBuilding');if(perBox){
  perBox.hidden=!f?.enabled;
  const key=eligibleBuildings.map(({b})=>String(b.id)).join('|');
  if(perBox.dataset.key!==key || perBox.dataset.lang!==lang){
   perBox.replaceChildren();perBox.dataset.key=key;perBox.dataset.lang=lang;
   const heading=document.createElement('p');heading.textContent=lang==='nl'?'Bestaande funderingsvoorziening per gebouw (AUD). Bij meerdere betonplaatgebouwen is het projectbrede bedrag niet bruikbaar.':'Existing foundation allowance per building (AUD). For multiple slab buildings, a project-wide amount is not safe.';perBox.append(heading);
   for(const {b,i} of eligibleBuildings){const label=document.createElement('label');label.textContent=(b.name||'#'+(i+1))+' ';const input=document.createElement('input');input.type='number';input.min='0';input.step='50';input.dataset.foundationBuilding=String(b.id);input.placeholder=lang==='nl'?'Vul bedrag in (ook 0)':'Enter amount (including 0)';input.value=b.foundationBaseline??'';label.append(input);perBox.append(label);}
  }else{
   for(const {b,i} of eligibleBuildings){const input=[...perBox.querySelectorAll('[data-foundation-building]')].find(x=>x.dataset.foundationBuilding===String(b.id));if(!input)continue;input.parentElement.firstChild.textContent=(b.name||'#'+(i+1))+' ';if(document.activeElement!==input)input.value=b.foundationBaseline??'';}
  }
 }
 const out=panel.querySelector('#fdOutput');out.replaceChildren();const adjustments=dynamicAdjustments();if(!adjustments.length){out.textContent=lang==='nl'?'Geen dynamische berekeningen geselecteerd; bestaande begroting ongewijzigd.':'No dynamic estimates selected; the existing budget is unchanged.';return;}
 const blocked=adjustments.find(a=>a.blocked);if(blocked){const warning=document.createElement('p');warning.setAttribute('role','alert');warning.style.cssText='background:#ffe4e4;border-left:4px solid #b91c1c;padding:12px';const reasons={"earthworks-foundation-overlap":lang==='nl'?'Grondwerk bevat mogelijk funderingskosten en er is geen bestaande funderingsvoorziening opgegeven. Splits Grondwerk of vul de funderingsvoorziening per gebouw in.':'Earthworks may include foundations and no existing allowance is recorded. Split earthworks or enter the allowance for each building.',"legacy-multiple-buildings":lang==='nl'?'De oude projectbrede funderingsvoorziening kan niet veilig over meerdere betonplaatgebouwen worden verdeeld. Vul de bestaande voorziening per gebouw in.':'The legacy project-wide foundation allowance cannot safely be allocated across multiple slab buildings. Enter the allowance for each building.',"missing-per-building":lang==='nl'?'Niet voor elk betonplaatgebouw is een bestaande funderingsvoorziening ingevuld. Vul ook 0 expliciet in als er niets is opgenomen.':'Not every slab building has an existing foundation allowance. Explicitly enter 0 if nothing is included.',"legacy-baseline-review":lang==='nl'?'Oude funderingsbedragen zijn gekoppeld aan veranderlijke gebouwnummers. Controleer de oorspronkelijke bedragen en vul ze opnieuw per gebouw in; de oude gegevens blijven bewaard.':'Legacy foundation amounts were linked to changeable building numbers. Verify the original amounts and re-enter them per building; the old values remain preserved.',"invalid-per-building":lang==='nl'?'Een funderingsvoorziening per gebouw is ongeldig.':'A per-building foundation allowance is invalid.'};warning.textContent=(lang==='nl'?'GEBLOKKEERD: ':'BLOCKED: ')+(reasons[blocked.reason]||blocked.reason)+(lang==='nl'?' De dynamische funderingscorrectie is niet meegenomen; het totaal is geen definitief gevalideerde funderingsraming.':' The dynamic foundation adjustment has not been applied; the total is not a validated foundation estimate.');out.append(warning);}
 const table=document.createElement('table');const tbody=document.createElement('tbody');for(const a of adjustments){const tr=document.createElement('tr');const td=document.createElement('td');td.textContent=costLabel(a.label);const amount=document.createElement('td');amount.textContent=a.skipped?(lang==='nl'?'Niet berekend':'Not calculated'):money(a.delta);tr.append(td,amount);tbody.append(tr);}table.append(tbody);out.append(table);
 if(f?.enabled){const r=fdEstimate();const sub=document.createElement('p');sub.textContent=(lang==='nl'?'Funderingen: ':'Foundations: ')+r.rows.map(x=>x.excluded?x.name+(lang==='nl'?' (niet berekend)':' (not calculated)'):x.name+' '+x.area.toFixed(1)+' m², '+x.volume.toFixed(1)+' m³, '+money(x.total)).join(' | ')+(lang==='nl'?'. Totale nieuwe raming: ':'. Total new estimate: ')+money(r.sum)+'.';out.append(sub);}
 }
 function fdInit(){const panel=document.getElementById('foundationDynamic');if(!panel)return;
 if(!panel.querySelector('#fdPerBuilding')){const div=document.createElement('div');div.id='fdPerBuilding';panel.querySelector('#fdOutput').before(div);}
 panel.addEventListener('input',event=>{if(!event.target.matches('[data-foundation-building]'))return;
  const b=state.buildings.find(x=>String(x.id)===event.target.dataset.foundationBuilding);if(!b)return;
  b.foundationBaseline=event.target.value===''?null:Number(event.target.value);
  state.advancedV1=state.advancedV1||{};
  const old=state.advancedV1.foundationDynamic||{};
  // Version 2 takes effect only after every slab building has an explicitly reviewed amount.
  const ready=state.buildings.filter(x=>x.foundation==='slab').every(x=>x.foundationBaseline!==null&&x.foundationBaseline!==undefined&&Number.isFinite(Number(x.foundationBaseline))&&Number(x.foundationBaseline)>=0);
  state.advancedV1.foundationDynamic={...old,baselineVersion:ready?2:(old.baselineVersion===2?2:1)};
  calc();queueSave();
 });
 const save=()=>{state.advancedV1=state.advancedV1||{};state.advancedV1.foundationDynamic={enabled:panel.querySelector('#fdEnabled').checked,concreteRate:Number(panel.querySelector('#fdConcreteRate').value)||350,...(state.advancedV1.foundationDynamic||{}),baseline:Number(panel.querySelector('#fdBaseline').value)||0};state.advancedV1.dynamicCosts26={kit:panel.querySelector('#dynKit').checked,assembly:panel.querySelector('#dynAssembly').checked,fitout:panel.querySelector('#dynFitout').checked,delivery:panel.querySelector('#dynDelivery').checked,upgrades:panel.querySelector('#dynUpgrades').checked,assemblyRate:Number(panel.querySelector('#dynAssemblyRate').value)||0,fitoutRate:Number(panel.querySelector('#dynFitoutRate').value)||0,deliveryAmount:Number(panel.querySelector('#dynDeliveryAmount').value)||0};calc();queueSave();};
 for(const el of panel.querySelectorAll('input'))el.addEventListener('change',save);
 }
 function calc(){const footprint=state.buildings.reduce((sum,b)=>sum+(b.length>0&&b.width>0?b.length*b.width:0),0)+(state.carport?.enabled&&Number(state.carport.length)>0&&Number(state.carport.width)>0?Number(state.carport.length)*Number(state.carport.width):0);const result=PAALCostEngine.compute(state);const subtotal=result.sum,missing=result.missing,filled=result.filled,quotes=result.quotes;const rows=result.entries.filter(e=>e.amount!==null).map(e=>[e.label,e.amount]);$('#footprint').textContent=footprint.toLocaleString(lang==='nl'?'nl-NL':'en-AU',{maximumFractionDigits:1})+' m²';$('#remaining').textContent=state.lotArea>0?(state.lotArea-footprint).toLocaleString(lang==='nl'?'nl-NL':'en-AU',{maximumFractionDigits:1})+' m²':t('unknown');$('#total').textContent=money(subtotal);$('#total').style.outline=result.blocked?'3px solid #b91c1c':'';$('#total').title=result.blocked?(lang==='nl'?'Funderingscorrectie geblokkeerd — totaal niet gevalideerd':'Foundation adjustment blocked — total not validated'):'';$('#missingCosts').textContent=String(missing);$('#coverage').textContent=state.lotArea>0?(100*footprint/state.lotArea).toFixed(1)+'%':'—';$('#status').textContent=(result.blocked?(lang==='nl'?'LET OP: funderingscorrectie geblokkeerd — totaal niet gevalideerd. ':'WARNING: foundation adjustment blocked — total not validated. '):'')+`${filled} ${lang==='nl'?'posten ingevuld':'items entered'} · ${quotes} ${lang==='nl'?'offertes':'quotes'}. ${t('costExcluded')}`;const breakdown=$('#costBreakdown');breakdown.replaceChildren();const table=document.createElement('table');const tbody=document.createElement('tbody');rows.forEach(([label,value])=>{const tr=document.createElement('tr'),td=document.createElement('td'),price=document.createElement('td');td.textContent=costLabel(label);price.textContent=money(value);tr.append(td,price);tbody.append(tr);});table.append(tbody);breakdown.append(table);$('#warning').hidden=!(state.lotArea>0&&footprint>state.lotArea);$('#warning').textContent=t('over');updateSiteConsistency();fdRender();
 }
 function updateSiteConsistency(){
   const el=$('#siteConsistency'),badge=$('#siteStatusBadge');if(!el)return;
   const w=Number(state.lotWidth),h=Number(state.lotDepth),area=Number(state.lotArea);
   const errors=[],cautions=[];
   if(w>0&&h>0&&area>0&&Math.abs(w*h-area)>Math.max(1,area*.001))cautions.push(lang==='nl'?`Oppervlakte (${area.toFixed(1)} m²) verschilt van breedte × diepte (${(w*h).toFixed(1)} m²).`:`Lot area (${area.toFixed(1)} m²) differs from width × depth (${(w*h).toFixed(1)} m²).`);
   if(w>0&&h>0){
     const valid=state.buildings.map((b,i)=>{const l=Number(b.length),bw=Number(b.width);if(!(l>0&&bw>0))return null;const rotated=b.layoutRotation===90||b.layoutRotation===270;return {name:b.name||`#${i+1}`,x:b.layoutX==null?2+(i%3)*8:Number(b.layoutX),y:b.layoutY==null?2+Math.floor(i/3)*15:Number(b.layoutY),w:rotated?bw:l,h:rotated?l:bw};}).filter(Boolean);
     if(state.carport?.enabled&&Number(state.carport.length)>0&&Number(state.carport.width)>0){const c=state.carport;valid.push({name:'Carport',x:Number(c.layoutX)||0,y:Number(c.layoutY)||0,w:c.layoutRotation===90||c.layoutRotation===270?Number(c.width):Number(c.length),h:c.layoutRotation===90||c.layoutRotation===270?Number(c.length):Number(c.width)});}
     for(const b of valid)if(b.x<0||b.y<0||b.x+b.w>w||b.y+b.h>h)errors.push(`${b.name}: ${lang==='nl'?'buiten het perceel':'outside the lot'}`);
     for(let i=0;i<valid.length;i++)for(let j=i+1;j<valid.length;j++){const a=valid[i],b=valid[j];if(a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y)errors.push(`${a.name} + ${b.name}: ${lang==='nl'?'overlap':'overlap'}`);}
   }else cautions.push(lang==='nl'?'Perceelbreedte en -diepte ontbreken. Stel deze in de perceelplanner in.':'Lot width and depth are missing. Set them in the site planner.');
   const severity=errors.length?'error':cautions.length?'caution':'ok';
   const count=errors.length||cautions.length;
   const title=severity==='error'?(lang==='nl'?`PERCEELCONTROLE — ${errors.length} PROBLEEM${errors.length===1?'':'EN'}`:`SITE CHECKS — ${errors.length} PROBLEM${errors.length===1?'':'S'}`):severity==='caution'?(lang==='nl'?`PERCEELCONTROLE — ${count} AANDACHTSPUNT${count===1?'':'EN'}`:`SITE CHECKS — ${count} ITEM${count===1?'':'S'} TO REVIEW`):(lang==='nl'?'PERCEELCONTROLE — GEEN GEOMETRISCHE PROBLEMEN':'SITE CHECKS — NO GEOMETRIC ISSUES');
   el.className='site-check site-check--'+severity;el.replaceChildren();
   const heading=document.createElement('h3');heading.className='site-check__title';heading.textContent=(severity==='error'?'⚠ ':severity==='ok'?'✓ ':'! ')+title;el.append(heading);
   const messages=[...errors,...cautions];if(messages.length){const ul=document.createElement('ul');for(const msg of messages){const li=document.createElement('li');li.textContent=msg;ul.append(li);}el.append(ul);}else{const p=document.createElement('p');p.textContent=lang==='nl'?'Geen overlappingen of gebouwen buiten de perceelgrenzen gevonden.':'No overlaps or buildings outside the lot boundaries found.';el.append(p);}
   const link=document.createElement('a');link.href='perceelplanner.html';link.className='site-check__link';link.textContent=lang==='nl'?'Bekijk in perceelplanner →':'View in site planner →';el.append(link);
   if(badge){badge.className='site-status-badge site-status-badge--'+severity;badge.textContent=severity==='error'?(lang==='nl'?`${errors.length} perceelprobleem${errors.length===1?'':'en'}`:`${errors.length} site problem${errors.length===1?'':'s'}`):severity==='caution'?(lang==='nl'?`${count} aandachtspunt${count===1?'':'en'}`:`${count} item${count===1?'':'s'} to review`):(lang==='nl'?'Perceelcontrole: in orde':'Site checks: OK');}
 }
 const STORE='paal-v2-projects-v1';
 let projects=[],activeId=null,saveTimer=null,saveError=false,loadError=false,backupError=false,loadedRevision=0,conflictError=false,quotaError=false;
 const uid=()=>('p-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10));
 const clone=x=>JSON.parse(JSON.stringify(x));
 const clean=(obj)=>{if(!obj||obj.schemaVersion!==1||!Array.isArray(obj.buildings)||obj.buildings.length>100)throw Error('schema');return {carport:obj.carport&&typeof obj.carport==='object'?{enabled:obj.carport.enabled===true,length:num(obj.carport.length)||13,width:num(obj.carport.width)||7,placement:['undecided','attached','freestanding'].includes(obj.carport.placement)?obj.carport.placement:'undecided',layoutX:num(obj.carport.layoutX)??30,layoutY:num(obj.carport.layoutY)??40,layoutRotation:[0,90,180,270].includes(Number(obj.carport.layoutRotation))?Number(obj.carport.layoutRotation):0,cost:normalCost(obj.carport.cost),includedInExternal:obj.carport.includedInExternal!==false}:null,advancedV1:obj.advancedV1&&typeof obj.advancedV1==='object'?JSON.parse(JSON.stringify(obj.advancedV1)):null,buildPlan:obj.buildPlan&&typeof obj.buildPlan==='object'?JSON.parse(JSON.stringify(obj.buildPlan)):null,schemaVersion:1,lotArea:num(obj.lotArea),lotWidth:Number(obj.lotWidth)>0?Number(obj.lotWidth):null,lotDepth:Number(obj.lotDepth)>0?Number(obj.lotDepth):null,landPrice:num(obj.landPrice),siteCosts:Object.fromEntries(COST_KEYS.map(k=>[k,normalCost(obj.siteCosts?.[k])])),landEvidence:normalCost(obj.landEvidence),buildings:obj.buildings.map((b,i)=>({id:(typeof b.id==='string'&&b.id.length<100&&b.id?b.id:(Number.isSafeInteger(b.id)&&b.id>0?b.id:i+1)),kind:b.kind==='shed'?'shed':'house',name:String(b.name||'').slice(0,120),modelId:HOME_CATALOG[b.modelId]?b.modelId:'custom',roofArea:num(b.roofArea),floorArea:num(b.floorArea),slabArea:num(b.slabArea),kitReference:num(b.kitReference),inclusions:Object.fromEntries(Object.entries(b.inclusions&&typeof b.inclusions==='object'?b.inclusions:{}).filter(([k])=>INCLUSION_GROUPS.some(g=>g[0]===k)).map(([k,v])=>[k,{status:['included','allowance','excluded','verify'].includes(v?.status)?v.status:'verify',extra:num(v?.extra),note:String(v?.note||'').slice(0,160)}])),length:num(b.length),width:num(b.width),foundation:['unknown','slab','piers'].includes(b.foundation)?b.foundation:'unknown',foundationBaseline:b.foundationBaseline===null||b.foundationBaseline===undefined||b.foundationBaseline===''?null:(Number.isFinite(Number(b.foundationBaseline))?Number(b.foundationBaseline):null),rate:num(b.rate),layoutX:Number.isFinite(Number(b.layoutX))&&b.layoutX!==null?Math.max(0,Number(b.layoutX)):null,layoutY:Number.isFinite(Number(b.layoutY))&&b.layoutY!==null?Math.max(0,Number(b.layoutY)):null,layoutRotation:[0,90,180,270].includes(Number(b.layoutRotation))?Number(b.layoutRotation):0,costs:Object.fromEntries(BUILDING_COST_KEYS.map(k=>[k,normalCost(b.costs?.[k])]))}))};};
 const current=()=>projects.find(p=>p.id===activeId);
 function lockUnsafeEditing(){
   const ids=['projectSelect','projectName','newProject','copyProject','deleteProject','add','reset','lotArea','landPrice'];
   ids.forEach(id=>{const el=$('#'+id);if(el)el.disabled=loadError||conflictError;});
   const banner=$('#loadFailureBanner');if(banner){banner.hidden=!(loadError||conflictError);banner.textContent=conflictError?PAALStorageGuard.message():(lang==='nl'?'PROJECTGEGEVENS NIET GELADEN — bewerken is geblokkeerd. Download zo nodig de migratieback-up en herstel een gecontroleerde back-up.':'PROJECT DATA NOT LOADED — editing is locked. Download the migration backup if available and restore a verified backup.');}
 }
 function updateSaveStatus(){lockUnsafeEditing();const el=$('#saveStatus');el.textContent=conflictError?PAALStorageGuard.message():(loadError?t('loadError'):(backupError?(lang==='nl'?'Migratieback-up kon niet worden opgeslagen (mogelijk onvoldoende browseropslag). Download een afzonderlijke projectback-up.':'Migration backup could not be saved (possibly browser storage full). Download a separate project backup.'):(quotaError?(lang==='nl'?'Browseropslag vol. Exporteer een back-up en maak opslagruimte vrij.':'Browser storage full. Export a backup and free up storage space.'):(saveError?t('saveError'):t('saved')))));el.classList.toggle('save-error',saveError||loadError||backupError||conflictError);}
 function persist(){
   clearTimeout(saveTimer);saveTimer=null;
   if(loadError||conflictError){updateSaveStatus();return;}
   const p=current();if(!p)return;
   try{
     // Always start from the newest stored collection: other tabs may have edited other projects.
     const latest=JSON.parse(localStorage.getItem(STORE)||'null');
     if(PAALStorageGuard.revision(latest)!==loadedRevision)throw Error('STALE_PROJECT');
     if(latest&&latest.version===1&&Array.isArray(latest.projects)){
       const remote=latest.projects.find(x=>x.id===activeId);
       if(remote&&remote.data){
         // Roadmap belongs to its own editor; never overwrite it with a stale cost-planner snapshot.
         state.buildPlan=clone(remote.data.buildPlan??null);
         state.advancedV1={...(remote.data.advancedV1||{}),...(state.advancedV1||{})};
         // Preserve site geometry edited in the site planner while this tab was open.
         state.lotWidth=remote.data.lotWidth??state.lotWidth;
         state.lotDepth=remote.data.lotDepth??state.lotDepth;
         state.buildings.forEach(b=>{const r=remote.data.buildings?.find(x=>String(x.id)===String(b.id));if(r){b.layoutX=r.layoutX;b.layoutY=r.layoutY;b.layoutRotation=r.layoutRotation;}});
       }
       const merged=new Map(latest.projects.map(x=>[x.id,x]));
       for(const local of projects){if(!merged.has(local.id))merged.set(local.id,local);}
       projects=[...merged.values()];
     }
     const target=current();if(!target)return;
     target.data=clone(state);target.name=p.name;target.modified=new Date().toISOString();
     const saved=PAALStorageGuard.commit({version:1,activeId,projects},loadedRevision);loadedRevision=saved.revision;saveError=false;quotaError=false;
   }catch(e){saveError=true;if(e.message==='STALE_PROJECT')conflictError=true;if(e.name==='QuotaExceededError'||e.code===22)quotaError=true;}
   updateSaveStatus();renderProjectMenu(false);
 }
 function queueSave(){if(loadError||conflictError){updateSaveStatus();return;}const el=$('#saveStatus');el.textContent=t('saving');clearTimeout(saveTimer);saveTimer=setTimeout(persist,300);}
 function renderProjectMenu(updateName=true){const sel=$('#projectSelect'),prev=sel.value;sel.replaceChildren();projects.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=p.name;sel.append(o)});sel.value=activeId||prev;if(updateName){const p=current();$('#projectName').value=p?p.name:'';}}
 function switchProject(id){if(loadError||conflictError)return;if(saveTimer)persist();else refreshFromSharedStore();if(loadError||conflictError||saveError)return;activeId=id;const p=current();if(!p)return;state=clean(p.data);render();renderProjectMenu();persist();}
 function createProject(name,data){if(loadError||conflictError)return;if(saveTimer)persist();else refreshFromSharedStore();if(loadError||conflictError||saveError)return;const p={id:uid(),name:name||t('untitled'),modified:new Date().toISOString(),data:clone(data||example())};projects.push(p);activeId=p.id;state=clean(p.data);render();renderProjectMenu();persist();}
 function initProjects(){try{const saved=JSON.parse(localStorage.getItem(STORE)||'null');if(saved&&saved.version===1&&Array.isArray(saved.projects)){loadedRevision=PAALStorageGuard.revision(saved);if(saved.projects.some(p=>p.data?.advancedV1?.foundationDynamic?.baselinePerBuilding)){const backupKey='paal-v2-pre-foundation-migration-backup';try{if(!localStorage.getItem(backupKey))localStorage.setItem(backupKey,JSON.stringify(saved));}catch(err){backupError=true;console.warn('PAAL foundation backup unavailable',err);}}projects=saved.projects.filter(p=>p&&typeof p.id==='string'&&typeof p.name==='string'&&p.data).slice(0,100).map(p=>({id:p.id,name:p.name.slice(0,100),modified:p.modified,data:clean(p.data)}));activeId=projects.some(p=>p.id===saved.activeId)?saved.activeId:projects[0]?.id;}}catch(e){loadError=true;console.error('PAAL project load failed',e);}if(!projects.length){projects=[{id:uid(),name:lang==='nl'?'Mijn eerste project':'My first project',modified:new Date().toISOString(),data:example()}];activeId=projects[0].id;}state=clean(current().data);render();renderProjectMenu();updateSaveStatus();}
 $('#language').addEventListener('change',e=>{lang=e.target.value;try{localStorage.setItem('paal-v2-lang',lang)}catch(e){}translate();});
 $('#lotArea').addEventListener('input',e=>{if(loadError||conflictError)return;state.lotArea=num(e.target.value);calc();queueSave();});
 $('#landPrice').addEventListener('input',e=>{if(loadError||conflictError)return;state.landPrice=num(e.target.value);calc();queueSave();});
 $('#add').onclick=()=>{if(loadError||conflictError)return;state.buildings.push({id:Date.now(),kind:'house',name:'',length:null,width:null,foundation:'unknown',rate:null,costs:freshCosts(BUILDING_COST_KEYS)});render();queueSave();};
 $('#reset').onclick=()=>{if(loadError||conflictError)return;if(confirm(lang==='nl'?'Voorbeeldwaarden herstellen? Het huidige project wordt overschreven.':'Restore example values? This will overwrite the current project.')){state=clean(example());render();persist();}};
 $('#projectSelect').addEventListener('change',e=>switchProject(e.target.value));
 $('#projectName').addEventListener('input',e=>{if(loadError||conflictError)return;const p=current();if(p){p.name=e.target.value.slice(0,100)||t('untitled');queueSave();}});
 $('#newProject').onclick=()=>createProject(t('untitled'),example());
 $('#copyProject').onclick=()=>createProject(current().name+t('copySuffix'),state);
 $('#deleteProject').onclick=()=>{
   if(loadError||conflictError){updateSaveStatus();return;}
   if(!confirm(t('confirmDelete')))return;
   clearTimeout(saveTimer);saveTimer=null;
   try{
     const latest=JSON.parse(localStorage.getItem(STORE)||'null');
     if(!latest||!Array.isArray(latest.projects))throw Error('INVALID_STORE');
     if(PAALStorageGuard.revision(latest)!==loadedRevision)throw Error('STALE_PROJECT');
     const remaining=latest.projects.filter(p=>p.id!==activeId);
     if(!remaining.length)remaining.push({id:uid(),name:t('untitled'),modified:new Date().toISOString(),data:example()});
     const selected=remaining[0].id;
     const saved=PAALStorageGuard.commit({...latest,activeId:selected,projects:remaining},loadedRevision);
     loadedRevision=saved.revision;projects=remaining;activeId=selected;state=clean(current().data);
     render();renderProjectMenu();updateSaveStatus();
   }catch(err){saveError=true;if(err.message==='STALE_PROJECT')conflictError=true;updateSaveStatus();}
 };
 // Backups are always a single project in the established v1 format, including buildPlan.
 function backupFilename(name){
   const safe=String(name||'Project').normalize('NFKC').replace(/[^a-z0-9_-]+/gi,'-').replace(/^-+|-+$/g,'').slice(0,55)||'Project';
   const today=new Date();const date=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
   return `PAAL_${safe}_${date}.json`;
 }
 function downloadBackup(blob,filename){
   const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;
   document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
 }
 $('#migrationBackup').onclick=()=>{
   const raw=localStorage.getItem('paal-v2-pre-foundation-migration-backup');
   if(!raw){alert(lang==='nl'?'Geen migratieback-up beschikbaar.':'No migration backup available.');return;}
   downloadBackup(new Blob([raw],{type:'application/json'}),'PAAL_migratie_backup_origineel.json');
   $('#saveStatus').textContent=lang==='nl'?'Migratieback-up gedownload. Bewaar dit bestand veilig.':'Migration backup downloaded. Keep this file safe.';
 };
 $('#backup').onclick=async()=>{
   if(loadError){const raw=localStorage.getItem(STORE);if(raw!==null)downloadBackup(new Blob([raw],{type:'application/json'}),'PAAL_ORIGINELE_BROWSERGEGEVENS_ONBEWERKT.json');else alert(lang==='nl'?'Geen oorspronkelijke gegevens gevonden.':'No original data found.');return;}
   if(!conflictError)persist();
   const payload={format:'paal-project-backup',version:1,project:{name:current().name,data:clone(state)}};
   const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
   const filename=backupFilename(current().name);
   // Chromium on localhost supports a native filename-and-location picker.
   if(typeof window.showSaveFilePicker==='function'){
     try{
       const handle=await window.showSaveFilePicker({suggestedName:filename,types:[{description:'PAAL project back-up (JSON)',accept:{'application/json':['.json']}}]});
       const writable=await handle.createWritable();await writable.write(blob);await writable.close();
       $('#saveStatus').textContent=lang==='nl'?'Back-up opgeslagen.':'Backup saved.';
       return;
     }catch(err){
       if(err&&err.name==='AbortError')return; // Cancel means no backup.
       // API unsupported by this context, or failed: offer the standard download instead.
       if(!confirm(lang==='nl'?'Opslaan via het bestandsvenster is mislukt. De back-up downloaden via Chrome?':'Save dialog failed. Download the backup using your browser instead?'))return;
     }
   }
   // Fallback: allow filename choice; destination is controlled by browser download settings.
   const choice=prompt(lang==='nl'?'Bestandsnaam voor de back-up (opslaglocatie via Chrome-downloadinstellingen):':'Backup filename (location controlled by browser download settings):',filename);
   if(choice===null)return;
   let selected=choice.trim().replace(/[\\/:*?"<>|\x00-\x1f]/g,'-');
   if(!selected)selected=filename;
   if(!selected.toLowerCase().endsWith('.json'))selected+='.json';
   downloadBackup(blob,selected);
   $('#saveStatus').textContent=lang==='nl'?'Back-up gedownload. Controleer de Downloads-map.':'Backup downloaded. Check your Downloads folder.';
 };
 $('#restoreButton').addEventListener('click',()=>$('#restore').click());
 $('#restore').addEventListener('change',async e=>{
   const file=e.target.files[0];if(!file)return;
   try{
     if(file.size>1000000)throw Error('size');
     const obj=JSON.parse(await file.text());let data,name;
     if(obj&&obj.version===1&&Array.isArray(obj.projects)&&!obj.format){
       if(!obj.projects.length||obj.projects.length>100)throw Error('Invalid project count');
       const validated=obj.projects.map(p=>{
         if(!p||typeof p.id!=='string'||!p.id.trim()||typeof p.name!=='string')throw Error('Invalid project metadata');
         return {id:p.id,name:p.name.slice(0,100),modified:p.modified,data:clean(p.data)};
       });
       if(new Set(validated.map(p=>p.id)).size!==validated.length)throw Error('Duplicate project IDs');
       const msg=lang==='nl'?'VOLLEDIGE COLLECTIE HERSTELLEN?\nDit vervangt ALLE huidige projecten. Maak eerst een veiligheidskopie van de huidige browsergegevens. Doorgaan?':'RESTORE ENTIRE COLLECTION?\nThis replaces ALL current projects. First save a safety copy of current browser data. Continue?';
       if(!confirm(msg))return;
       const existing=localStorage.getItem(STORE);
       // Never overwrite the only recovery copy; force a file download first.
       if(existing){
         downloadBackup(new Blob([existing],{type:'application/json'}),'PAAL_veiligheidskopie_voor_herstel.json');
         if(!confirm(lang==='nl'?'LET OP: een aangeboden download is GEEN garantie. Controleer zelf in je Downloads-map dat PAAL_veiligheidskopie_voor_herstel.json werkelijk bestaat en geopend kan worden. Bij twijfel: ANNULEREN. Heb je dit gecontroleerd?':'WARNING: offering a download is NOT a guarantee. Check your Downloads folder and open PAAL_veiligheidskopie_voor_herstel.json before proceeding. If unsure, CANCEL. Have you verified it?'))return;
       }
       const raw=JSON.stringify({version:1,activeId:validated.some(p=>p.id===obj.activeId)?obj.activeId:validated[0].id,projects:validated});
       const restored=PAALStorageGuard.restore(JSON.parse(raw),existing);
       const committedRaw=JSON.stringify(restored);
       if(localStorage.getItem(STORE)!==committedRaw)throw Error('Restore verification failed');
       loadError=false;saveError=false;backupError=false;conflictError=false;quotaError=false;loadedRevision=restored.revision;
       projects=validated;activeId=validated.some(p=>p.id===obj.activeId)?obj.activeId:validated[0].id;
       state=clean(current().data);render();renderProjectMenu();updateSaveStatus();
       alert(lang==='nl'?'Collectie hersteld. Alle projecten zijn opnieuw geladen.':'Collection restored. All projects have been reloaded.');
       return;
     }
     if(loadError||conflictError)throw Error(lang==='nl'?'Bij een laadfout is alleen herstel van een volledige collectie toegestaan.':'After a load failure, only full-collection restore is allowed.');
     if(obj?.format==='paal-project-backup'&&obj.version===1){data=clean(obj.project?.data);name=String(obj.project?.name||t('untitled')).slice(0,100);}
     else{data=clean(obj);name=file.name.replace(/\.json$/i,'').slice(0,100);}
     // An imported backup is always a new project. Make its name unique so users
     // can distinguish it from the existing project with the same backup name.
     refreshFromSharedStore();
     const base=name||t('untitled');let unique=base,number=2;
     while(projects.some(p=>p.name.toLocaleLowerCase()===unique.toLocaleLowerCase())){
       const suffix=` (import ${number++})`;unique=base.slice(0,100-suffix.length)+suffix;
     }
     const message=lang==='nl'
       ?`Back-up importeren als NIEUW project “${unique}”?\nHet bestaande project blijft behouden.`
       :`Import backup as NEW project “${unique}”?\nThe existing project will be kept.`;
     if(!confirm(message))return;
     if(loadError||conflictError){alert(lang==='nl'?'Laden is mislukt. De opslag is beschermd tegen overschrijven. Herstel eerst de browsergegevens vanuit een veilige kopie.':'Loading failed. Storage is protected against overwriting. Restore browser data from a safe copy first.');return;}
     createProject(unique,data);
     // Verify the persisted project, including new phase 17–24 fields.
     const stored=JSON.parse(localStorage.getItem(STORE)||'null');
     const imported=stored?.projects?.find(p=>p.id===activeId);
     if(!imported||JSON.stringify(imported.data.advancedV1??null)!==JSON.stringify(data.advancedV1??null))throw Error('Import verification failed');
     alert(lang==='nl'?`Import geslaagd: “${unique}”.\nSelecteer dit project ook in Projecttools.`:`Import successful: “${unique}”.\nSelect it in Project Tools too.`);
   }catch(err){console.error('PAAL backup import',err);alert((lang==='nl'?'Import mislukt: ':'Import failed: ')+err.message);}
   finally{e.target.value='';}
 });

 // Refresh only when there are no unsaved edits: avoids overwriting a user's current changes.
 function refreshFromSharedStore(){
   if(saveTimer||loadError||conflictError)return;
   try{
     const saved=JSON.parse(localStorage.getItem(STORE)||'null');
     if(!saved||saved.version!==1||!Array.isArray(saved.projects))return;
     loadedRevision=PAALStorageGuard.revision(saved);
     const next=saved.projects.filter(p=>p&&typeof p.id==='string'&&typeof p.name==='string'&&p.data).slice(0,100).map(p=>({id:p.id,name:p.name.slice(0,100),modified:p.modified,data:clean(p.data)}));
     if(!next.length)return;
     projects=next;activeId=next.some(p=>p.id===saved.activeId)?saved.activeId:next[0].id;
     state=clean(current().data);render();renderProjectMenu();updateSaveStatus();
   }catch(e){/* Keep the current in-memory project when browser storage is unavailable. */}
 }
 window.addEventListener('focus',refreshFromSharedStore);
 window.addEventListener('pageshow',refreshFromSharedStore);
 window.addEventListener('storage',e=>{if(e.key===STORE)refreshFromSharedStore();});
 // Native browser confirmation is the only reliable warning before leaving.
 window.addEventListener('beforeunload',e=>{if(saveTimer||conflictError||saveError){e.preventDefault();e.returnValue='';}});
 window.addEventListener('pagehide',()=>{if(saveTimer)persist();});
 initProjects();fdInit();translate();
})();
