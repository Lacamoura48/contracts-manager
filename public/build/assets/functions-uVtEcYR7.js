import{c as o}from"./AuthenticatedLayout-vPYy_ivK.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=o("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=o("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=o("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),f=n=>{const e=n.replace(/\D/g,"").slice(0,15);let t=e;return e.length>3&&(t=`${e.slice(0,3)}-${e.slice(3)}`),e.length>7&&(t=`${e.slice(0,3)}-${e.slice(3,7)}-${e.slice(7)}`),e.length>13&&(t=`${e.slice(0,3)}-${e.slice(3,7)}-${e.slice(7,14)}-${e.slice(14)}`),t};function g(n){try{return n.toLocaleString("ar-MA",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}catch{return""}}function m(n){const e=new Date,t=n.filter(a=>a.status!=="paid"&&new Date(a.payement_date)>e).sort((a,r)=>new Date(a.payement_date)-new Date(r.payement_date));return console.log(t),t.length>0?t[0].payement_date:null}const b=(n,e)=>{if(n==="paid")return"bcg-green";const t=new Date,a=new Date(e),r=(t-a)/(1e3*60*60*24);return r<1.5&&r>=0?"bcg-blue":r>1.5&&r<=3?"bcg-orange":r>3?"bcg-red":"bg-gray-200"},y=n=>n.includes("bcg-red")?{label:"متعترة الدفع",color:"bg-red-100 text-red-500"}:n.includes("bcg-orange")?{label:"متأخر",color:"bg-orange-100 text-orange-500"}:n.includes("bcg-blue")?{label:"مستحق الدفع",color:"bg-blue-100 text-blue-500 animate-pulse"}:n.every(t=>t==="bcg-green")?{label:"مدفوع",color:"text-green-500 bg-green-100"}:{label:"قادم",color:"text-gray-500 bg-gray-200"},D=n=>{const e=new Date(n),t=new Intl.DateTimeFormat("fr-FR",{year:"numeric",month:"2-digit",day:"2-digit"}).format(e),[a,r,c]=t.split("/");return`${c}-${r}-${a}`};function h(n){return{paid:{bg:"bcg-green text-white",icon:s},posted:{bg:"bcg-blue text-white",icon:i},denied:{bg:"bcg-red text-white",icon:l}}[n]}function p(n){const e=new Date;e.setHours(0,0,0,0);const t=new Date(n);if(t.setHours(0,0,0,0),t<e){const a=e-t,r=Math.floor(a/(1e3*60*60*24));return`متأخر ب ${r} ${r>2&&r<11?"أيام":"يوم"}`}else return g(t)}export{l as X,f as a,b,p as c,y as d,m as e,g as f,h as g,D as h};
