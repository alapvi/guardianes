/* Guardianes del Planeta — interface ES / VAL, sin servicios externos */
"use strict";
const va={
skip:"Ves al contingut",brand:"GUARDIANS <small>DEL PLANETA</small>",nav1:"Projecte",nav2:"Making of",nav3:"Guardians",nav4:"L’aula",
eyebrow:"UNA CREACIÓ ORIGINAL · SIS MISSIONS",hero1:"Els Guardians",hero2:"del Planeta",tagline:"D’un esbós a una aventura educativa.",
heroDesc:"Sis personatges únics, dissenyats, impresos en 3D i pintats a mà per a donar vida a les situacions d’aprenentatge.",
cta:"Descobrix com van nàixer ↗",heroCaption:"FETS A MÀ, DES DE ZERO",scroll:"LLISCA PER A DESCOBRIR ↓",
origin:"01 · L’ORIGEN",originTitle:"Una idea que cobra vida.",
originText:"Els guardians naixen per a crear materials originals que connecten amb l’alumnat. Cada personatge representa una missió ambiental i acompanya les situacions d’aprenentatge.",
value1:"Creació pròpia",value1Text:"De la primera idea a la figura acabada. Cap personatge comprat.",
value2:"Identitat educativa",value2Text:"Sis personatges que donen sentit als reptes d’aprenentatge.",
value3:"Compromís ambiental",value3Text:"Una aventura per a aprendre a cuidar el nostre planeta.",
makingSmall:"02 · AIXÍ ES VAN FER",makingTitle:"L’art de fer-los realitat.",
makingText:"No van nàixer en una botiga. Cada guardià va recórrer un camí: imaginar, dissenyar, imprimir i pintar. Este és el nostre making of.",
step1Label:"EL PUNT DE PARTIDA",step1:"Primer, una idea",step1Text:"Tot comença amb un esbós: imaginar l’aspecte i la personalitat de cada guardià.",sketchDescription:"L’esbós parteix d’esta il·lustració inicial, que definix l’aparença i la personalitat dels sis guardians.",sketchCaption:"IL·LUSTRACIÓ BASE · PUNT DE PARTIDA",
step2Label:"DEL PAPER A LA PANTALLA",step2:"El disseny pren forma",step2Text:"El personatge es modela digitalment i s’obté un arxiu STL per a preparar la impressió 3D.",
step3Label:"DEL DIGITAL AL REAL",step3:"La màgia d’imprimir en 3D",step3Text:"El programa de laminatge prepara les instruccions d’impressió. Capa a capa, la figura es fa realitat.",printing:"IMPRESSIÓ EN MARXA",video1:"Impressió · Vista 1",video2:"Impressió · Vista 2",
step4Label:"EL TREBALL ARTESANAL",step4:"Pinzellada a pinzellada",step4Text:"Les figures acabades d’imprimir reben color a mà. Cada detall aporta expressió i personalitat.",unpainted:"ABANS DEL COLOR",painting:"PINTURA A MÀ",
step5Label:"EL RESULTAT FINAL",step5:"Els guardians cobren vida!",step5Text:"Després de dissenyar-los, fabricar-los i pintar-los, els sis personatges estan preparats per a acompanyar una nova aventura educativa.",viewGuardians:"Coneix els sis guardians ↓",
gallerySmall:"03 · ELS PROTAGONISTES",galleryTitle:"Sis guardians. Sis missions.",galleryIntro:"Cada un té una personalitat, un propòsit i una història per contar. Selecciona un personatge per a conéixer la seua missió.",
shortTrasto:"Reciclatge i residus",shortFlora:"Boscos i natura",shortDoris:"Mars sense plàstics",shortAeris:"Aire net",shortGota:"Ús responsable de l’aigua",shortChispas:"Energia responsable",
classSmall:"04 · DEL TALLER A L’AULA",classTitle:"Creats per a aprendre.",
classText:"Estos personatges originals acompanyen les situacions d’aprenentatge i acosten els reptes ambientals a l’alumnat mitjançant recursos visuals, manipulatius i motivadors.",
classNote:"El disseny digital i la impressió 3D formen part de l’elaboració docent. Pintar figures prèviament impreses podria adaptar-se com a proposta creativa a 1r de Primària, amb materials segurs i supervisió.",
artTop:"D’UNA IDEA",artMain:"A UNA AVENTURA",artBottom:"PER A APRENDRE I CUIDAR",
closingSmall:"EL COMENÇAMENT D’UNA AVENTURA",closingTitle:"No els vam comprar. Els vam fer realitat.",
closingText:"Els vam imaginar, els vam dissenyar, els vam imprimir i els vam pintar. Ara estan preparats per a acompanyar els menuts guardians del nostre planeta.",
closingCaption:"SIS GUARDIANS, UNA MISSIÓ COMPARTIDA",back:"Torna a l’inici ↑",brandFooter:"GUARDIANS DEL PLANETA",footer:"Un projecte educatiu de creació pròpia.",
dialogIntro:"CONEIX EL GUARDIÀ",dialogMission:"LA SEUA MISSIÓ",dialogClose:"Torna a la galeria"
};
const missions={
es:{
trasto:"Trasto, el guardián del reciclaje, nos enseña a separar los residuos y dar una segunda vida a los materiales.",
flora:"Flora, la guardiana de los árboles, protege los bosques y nos enseña la importancia de cuidar las plantas y los animales.",
doris:"Doris, la guardiana de los océanos, cuida los mares y a los animales que viven en ellos, evitando que la basura llegue al agua.",
aeris:"Aeris, el guardián del aire, nos ayuda a mantener el aire limpio y a reducir la contaminación.",
gota:"Gota, la guardiana del consumo responsable del agua, nos enseña a no desperdiciar ni una gota de agua.",
chispas:"Chispas, el guardián de la electricidad, nos enseña a ahorrar energía y a utilizarla de forma responsable."
},
va:{
trasto:"Trasto, el guardià del reciclatge, ens ensenya a separar els residus i a donar una segona vida als materials.",
flora:"Flora, la guardiana dels arbres, protegix els boscos i ens ensenya la importància de cuidar les plantes i els animals.",
doris:"Doris, la guardiana dels oceans, cuida les mars i els animals que hi viuen i evita que el fem arribe a l’aigua.",
aeris:"Aeris, el guardià de l’aire, ens ajuda a mantindre l’aire net i a reduir la contaminació.",
gota:"Gota, la guardiana del consum responsable de l’aigua, ens ensenya a no malgastar ni una gota d’aigua.",
chispas:"Chispas, el guardià de l’electricitat, ens ensenya a estalviar energia i a utilitzar-la de manera responsable."
}};
const portraits={
chispas:"/assets/img/guardianes/guardian1.jpeg",
gota:"/assets/img/guardianes/guardian2.jpeg",
aeris:"/assets/img/guardianes/guardian3.jpeg",
doris:"/assets/img/guardianes/guardian4.jpeg",
flora:"/assets/img/guardianes/guardian5.jpeg",
trasto:"/assets/img/guardianes/guardian6.jpeg"
};
const translatable=[...document.querySelectorAll("[data-key]")];
const originals=new Map(translatable.map(el=>[el,el.innerHTML]));
const buttons=[...document.querySelectorAll("[data-lang]")];
const dlg=document.querySelector("#guardian-dialog");
const picture=document.querySelector("#dialog-image");
const title=document.querySelector("#dialog-title");
const description=document.querySelector("#dialog-description");
let currentLanguage="es";
let currentGuardian=null;
function languageChange(lang){
 currentLanguage=lang==="va"?"va":"es";
 document.documentElement.lang=currentLanguage==="va"?"ca-valencia":"es";
 for(const el of translatable){const key=el.dataset.key;el.innerHTML=currentLanguage==="va"?(va[key]??originals.get(el)):originals.get(el)}
 for(const btn of buttons){const active=btn.dataset.lang===currentLanguage;btn.setAttribute("aria-pressed",String(active))}
 for(const img of document.querySelectorAll("[data-alt-es]"))img.alt=currentLanguage==="va"?img.dataset.altVa:img.dataset.altEs;
 document.title=currentLanguage==="va"?"Guardians del Planeta · Making of":"Guardianes del Planeta · Making of";
 document.querySelector('meta[name="description"]').content=currentLanguage==="va"?"Descobrix com es van crear sis guardians educatius, des del disseny fins a la impressió 3D i la pintura artesanal.":"Descubre cómo se crearon seis guardianes educativos, desde el diseño hasta la impresión 3D y la pintura artesanal.";
 if(currentGuardian)showGuardian(currentGuardian);
}
buttons.forEach(btn=>btn.addEventListener("click",()=>languageChange(btn.dataset.lang)));
function showGuardian(name){
 currentGuardian=name;
 picture.src=portraits[name];
 picture.alt=name;
 title.textContent=name.charAt(0).toUpperCase()+name.slice(1);
 description.textContent=missions[currentLanguage][name];
}
document.querySelectorAll("[data-guardian]").forEach(card=>{
 card.addEventListener("click",()=>{showGuardian(card.dataset.guardian);if(typeof dlg.showModal==="function")dlg.showModal();});
});
document.querySelector("#close-dialog").addEventListener("click",()=>dlg.close());
document.querySelector("#dialog-back").addEventListener("click",()=>dlg.close());
dlg.addEventListener("click",event=>{if(event.target===dlg)dlg.close()});
dlg.addEventListener("close",()=>{currentGuardian=null});
document.querySelectorAll("img").forEach(img=>{
 img.addEventListener("error",()=>{img.style.visibility="hidden";img.setAttribute("data-missing","true")});
});
languageChange("es");
