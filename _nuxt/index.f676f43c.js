import U from"./BaseLayout.484f1775.js";import{r as A,f as _,o as d,c as u,b as C,w as R,a as e,n as m,t as h,g as f,s as M,i as N,h as y,j as b,T as Q,_ as w,k as v,l as z,m as D,q as E,F as P,v as L,x as J}from"./entry.20abf1cb.js";import"./nuxt-link.59ac98c7.js";const $="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMNJREFUSEvtlN0NgkAQhD86sBMsQTuQSrUDLUE7sQQziSQn7h8mF1/gDbLMtzs7dwOdn6GzPhsgdfjvFp2AG/B0Wt0BB+DijRJNIPEzcAeOBkTiV2APTB4kAkhA3Y8GpBV/vKcwp8x2YEHkxtx5KK7CDKCaJUTfZEsqXgUsIXovia8FzLboP2/xX2GqWtR6LhFr8WZSM4CVFgl56Vo1QRTFKMIfkMpB8xbaQn46aOqk61WR3pSVgmzJFY2wZgOkFna36AUMCDQZmJpqFgAAAABJRU5ErkJggg==",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALRJREFUSEvtlNENAiEQRB8d2MlZwlmCldjC2ZEdeCV4nViC2YRNEJHdgCR+HJ8TmMfOBAKDVxjszw4wE/6riA7ABbgm1y5pb1N5JxCjO3CMgAUoaR+ReQCp0QbM0UWBqj1LhViALnMB1gDd5jXAT8wtwApMwAM4xXxzrZh72oUVUTfEU3IXxALItNJHM8QDyCFn4JaBVWt6aHpIJpFHJuY1remrMH/Nbxu8Ee2A5gTMg8M7eAHF6TQZwEbJVwAAAABJRU5ErkJggg==",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFZJREFUSEtjZKAxYKSx+QyjFhAMYVKD6D/URKL1Ea0QavCoBQTjbOgEEcylBL2EpgAj0eBKRTS3AJfLh04cjPoAHgKDriwiNV+M1miEQ4zUSCZsIpoKAFy0DhnDOA3uAAAAAElFTkSuQmCC",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAENJREFUSEtjZKAxYKSx+QyjFhAM4dEgGg0igiFAUAGuVPSfoE7sCjDMGzALyPQAprbRjEYwKEeDaDSICIYAQQU0T0UAw9sCGchp4KEAAAAASUVORK5CYII=",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAK5JREFUSEvtlNENgzAMRF82YJN2BNiIDdoN2o1gBNiEESpLqRRFThwlRPzA5ync850Djs6P6+zPDTAbvrSiN/AFjmBMTcumSCUQoxewAZOHaFp1RQOwAo8AImaxFqZTYbkdnAKxltwMsQASuwlSCliAJ7ADoy871tR9WACZvtpcBrGW3GSeAzRP/r+zqQQz8Ak6l341rfpDkxe7/irMyUoPWLeo1Cd57gaYFXav6AceqzwZQ6MhHgAAAABJRU5ErkJggg==";const T={class:"action-bar"},Z=["onClick"],O=["onClick"],H={class:"page-num"},q=["onClick"],G=["onClick"],X={__name:"Flipbook",props:{images:{type:Array,default:()=>[]}},setup(o){const i=o,s=A([]),n=A([]);let a=A(!0),g=A(null);const p=A(),l=t=>{console.log("flip-left-start",t)},B=t=>{console.log("flip-left-end",t),window.location.hash="#"+t},F=t=>{console.log("flip-right-start",t)},S=t=>{console.log("flip-right-end",t),window.location.hash="#"+t},j=t=>{console.log("zoom-start",t)},k=t=>{console.log("zoom-end",t)},x=()=>{const t=parseInt(window.location.hash.slice(1),10);isFinite(t)&&(g.value=t)};return _(async()=>{window.addEventListener("keydown",t=>{const r=r.value;r&&(t.keyCode==37&&r.canFlipLeft&&r.flipLeft(),t.keyCode==39&&r.canFlipRight&&r.flipRight())}),setTimeout(()=>{n.value=[null,...i.images],s.value=[null,...i.images]},1),window.addEventListener("hashchange",x),x()}),(t,r)=>(d(),u("div",{id:"app",class:m({"has-mouse":f(a)}),onTouchstart:r[0]||(r[0]=c=>N(a)?a.value=!1:a=!1)},[C(f(M),{class:"flipbook",pages:o.images,pagesHiRes:s.value,startPage:f(g),ref_key:"flipbook",ref:p,onFlipLeftStart:l,onFlipLeftEnd:B,onFlipRightStart:F,onFlipRightEnd:S,onZoomStart:j,onZoomEnd:k},{default:R(c=>[e("div",T,[e("img",{src:K,alt:"btn left",class:m(["btn left cursor-pointer",{disabled:!c.canFlipLeft}]),onClick:c.flipLeft},null,10,Z),e("img",{src:V,alt:"btn plus",class:m(["btn plus cursor-pointer",{disabled:!c.canZoomIn}]),onClick:c.zoomIn},null,10,O),e("span",H," Página "+h(c.page)+" de "+h(c.numPages),1),e("img",{src:Y,alt:"btn minus",class:m(["btn minus cursor-pointer",{disabled:!c.canZoomOut}]),onClick:c.zoomOut},null,10,q),e("img",{src:I,alt:"btn right",class:m(["btn right",{disabled:!c.canFlipRight}]),onClick:c.flipRight},null,10,G)])]),_:1},8,["pages","pagesHiRes","startPage"])],34))}},W=X,ee={class:"z-[50] bg-white w-[90vw] h-[80vh]"},te={class:"relative flex justify-end z-[60] cursor-pointer"},oe=e("span",{class:"fixed inset-0 bg-black opacity-70"},null,-1),se={__name:"BookModal",props:{open:{type:Boolean,default:!1},title:{type:String,default:""},images:{type:Array,default:()=>[]}},setup(o){const i=o,s=A(null);return _(()=>{console.log(i.open)}),(n,a)=>(d(),y(Q,{to:"body"},[o.open?(d(),u("div",{key:0,ref_key:"modal",ref:s,class:"fixed inset-6 sm:inset-0 z-[50] flex justify-center items-center",role:"dialog"},[e("div",ee,[e("div",te,[e("img",{src:$,alt:"close icon",onClick:a[0]||(a[0]=g=>n.$emit("close"))})]),C(W,{images:o.images},null,8,["images"])]),oe],512)):b("",!0)]))}},ne=se,ae={class:"truncate"},ie={__name:"ProjectCard",props:{project:{type:Object,default:()=>{}}},setup(o){const i=o,s=A([]);let n=A(!1);_(()=>{const p=i.project.Photos.map(l=>l.image.data).flat();s.value=p.map(l=>l.attributes.url)});const a=()=>{n.value=!n.value};return(g,p)=>(d(),u("div",null,[e("div",{class:"rounded-lg border border-gray-300 p-8 max-w-[306px] cursor-pointer",onClick:a},[e("p",null,h(o.project.title),1),e("p",ae,h(o.project.description),1),f(n)?(d(),y(ne,{key:0,open:f(n),onClose:a,images:s.value},null,8,["open","images"])):b("",!0)])]))}},ce=ie,le=v({components:{ProjectCard:ce},setup(){const{$services:o}=J();z();const i=A([]),s=async()=>{try{i.value=await o.projects.getProjects()}catch(n){console.log(n)}};return _(async()=>{await s()}),D(s),{projects:i}}}),re={class:"w-full flex flex-col justify-center items-center px-1",id:"mis-proyectos"},Ae={class:"container"},de=e("h2",{class:"text-3xl font-bold mt-8 mb-4"},"Mis proyectos:",-1);function pe(o,i,s,n,a,g){const p=E("ProjectCard");return d(),u("div",re,[e("div",Ae,[de,(d(!0),u(P,null,L(o.projects,l=>(d(),u("div",{key:l.id,class:"flex flex-wrap gap-2 mb-8"},[C(p,{project:l.attributes},null,8,["project"])]))),128))])])}const ge=w(le,[["render",pe]]),ue=v({components:{BaseLayout:U,Projects:ge}}),me=e("div",{class:"h-screen bg-gray-100 w-full flex flex-col justify-center items-center px-1"},[e("div",{class:"container"},[e("p",{class:"text-xl font-medium"},"Carlos Paul"),e("h1",{class:"text-5xl font-bold mb-4"},"Ingeniería | Arquitectura"),e("p",null," Hola, soy Carlos Paul. Soy un apasionado arquitecto e ingeniero civil con una sólida formación y experiencia en el diseño y construcción de proyectos innovadores y funcionales. Mi enfoque multidisciplinario me permite combinar la estética arquitectónica con la viabilidad técnica, creando soluciones integrales que resuelven desafíos complejos en el entorno construido. "),e("div",{class:"mt-8 flex gap-4 self-start"},[e("button",{class:"rounded-full bg-black text-white p-4"},"Contáctame"),e("button",{class:"underline font-medium"},"Descargar CV")])])],-1);function fe(o,i,s,n,a,g){const p=E("Projects"),l=E("BaseLayout");return d(),y(l,null,{default:R(()=>[me,C(p)]),_:1})}const Ee=w(ue,[["render",fe]]);export{Ee as default};
