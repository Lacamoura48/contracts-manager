import{c as h}from"./createLucideIcon-DTezSfTo.js";import{X as b}from"./x-EB9Axt3V.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=h("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=h("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),F=t=>{const e=t.replace(/\D/g,"").slice(0,15);let n=e;return e.length>3&&(n=`${e.slice(0,3)}-${e.slice(3)}`),e.length>7&&(n=`${e.slice(0,3)}-${e.slice(3,7)}-${e.slice(7)}`),e.length>13&&(n=`${e.slice(0,3)}-${e.slice(3,7)}-${e.slice(7,14)}-${e.slice(14)}`),n};function D(t){try{return t.toLocaleString("ar-MA",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}catch{return""}}function x(t){const e=new Date,n=t.filter(c=>c.status!=="paid"&&new Date(c.payement_date)>e).sort((c,a)=>new Date(c.payement_date)-new Date(a.payement_date));return console.log(n),n.length>0?n[0].payement_date:null}const k=(t,e)=>{if(t)return p(t).bg;const n=new Date,c=new Date(e),a=(n-c)/(1e3*60*60*24);return a<1.5&&a>=0?"bcg-turq":a>1.5&&a<=3?"bcg-orange":a>3?"bcg-black":"bg-gray-200"},P=t=>t.includes("bcg-red")?{label:"متعترة الدفع",color:"bg-red-100 text-red-500"}:t.includes("bcg-orange")?{label:"متأخر",color:"bg-orange-100 text-orange-500"}:t.includes("bcg-blue")?{label:"مستحق الدفع",color:"bg-blue-100 text-blue-500 animate-pulse"}:t.every(n=>n==="bcg-green")?{label:"مدفوع",color:"text-green-500 bg-green-100"}:{label:"قادم",color:"text-gray-500 bg-gray-200"},I=t=>{const e=new Date(t),n=new Intl.DateTimeFormat("fr-FR",{year:"numeric",month:"2-digit",day:"2-digit"}).format(e),[c,a,s]=n.split("/");return`${s}-${a}-${c}`};function p(t){return{paid:{bg:"bcg-green text-white",icon:y,label:"مدفوع"},posted:{bg:"bcg-blue text-white",icon:w,label:"تم إداع الشيك"},denied:{bg:"bcg-red text-white",icon:b,label:"شيك مرتجع"}}[t]}function C(t){const e=new Date;e.setHours(0,0,0,0);const n=new Date(t);if(n.setHours(0,0,0,0),n<e){const c=e-n,a=Math.floor(c/(1e3*60*60*24));return`متأخر ب ${a} ${a>2&&a<11?"أيام":"يوم"}`}else return D(n)}function v(t){if(t===0)return"صفر";const e=["","واحد","اثنان","ثلآثة","أربعة","خمسة","ستة","سبعة","ثمانية","تسعة"],n=["","عشرة","عشرون","ثلآثون","أربعون","خمسون","ستون","سبعون","ثمانون","تسعون"],c=["عشرة","أحد عشر","اثنا عشر","ثلآثة عشر","أربعة عشر","خمسة عشر","ستة عشر","سبعة عشر","ثمانية عشر","تسعة عشر"],a=["","مائة","مائتان","ثلآثمائة","أربعمائة","خمسمائة","ستمائة","سبعمائة","ثمانمائة","تسعمائة"];function s(o){if(o<10)return e[o];if(o<20)return c[o-10];const r=n[Math.floor(o/10)],g=e[o%10];return g?`${g} و ${r}`:r}function u(o){const r=a[Math.floor(o/100)],g=s(o%100);return r&&g?`${r} و ${g}`:r||g}function m(o){const r=Math.floor(o/1e3);return r===1?"ألف":r===2?"ألفان":r<=9?e[r]+" آلاف":u(r)+(r===10?" آلاف":" ألف")}function d(o){const r=Math.round(o*100);return r===0?"":`درهم إماراتي و  ${s(r)} فلس`}const[l,f]=t.toString().split(".").map(Number);let i="";if(l<100)i=s(l);else if(l<1e3)i=u(l);else if(l<1e6){const o=m(l),r=u(l%1e3);i=r?`${o} و ${r}`:o}else return"العدد كبير جدًا أو غير مدعوم";return f?(i+=` ${d(f/100)}`,i):i+" درهم إماراتي"}function A(t){return new Date(t).toLocaleString("ar-MA",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})}function S(t,e=800,n="image/jpeg",c=.8){return new Promise((a,s)=>{const u=new FileReader;u.onload=function(m){const d=new Image;d.onload=function(){const l=d.height/d.width,f=Math.round(e*l),i=document.createElement("canvas"),o=i.getContext("2d");i.width=e,i.height=f,o.drawImage(d,0,0,e,f),i.toBlob(r=>{if(r){const g=new File([r],t.name,{type:n,lastModified:Date.now()});a(g)}else s(new Error("Failed to create Blob from canvas."))},n,c)},d.onerror=()=>s(new Error("Failed to load the image.")),d.src=m.target.result},u.onerror=()=>s(new Error("Failed to read the file.")),u.readAsDataURL(t)})}export{y as C,F as a,P as b,x as c,I as d,p as e,D as f,k as g,C as h,A as i,v as n,S as r};
