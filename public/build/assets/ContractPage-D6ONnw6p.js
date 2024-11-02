import{r as n,j as e,a as c}from"./app-BsqOED3C.js";import{C as d,f as m}from"./functions-CpNnpaj8.js";import{c as r}from"./createLucideIcon--9i-o5Ux.js";import{B as x}from"./BondsList-DoY_eenC.js";import{A as p}from"./AuthenticatedLayout-Brdy6jEs.js";import{I as h}from"./InsideLayout-DXnb3UfG.js";import{U as u}from"./undo-2-Cwdit2xj.js";import{S as f}from"./square-pen-BACpT5OW.js";import{P as y}from"./phone-mhDAsMx8.js";import"./Modal-jNFDS_3u.js";import"./transition-CZIH6jLN.js";import"./PrimaryButton-CwGR5BPc.js";import"./ProofInput-DHxlOzlG.js";import"./Checkbox--ISX6F95.js";import"./CustomInput-DAYamfqE.js";import"./FileInput-WJ1voHiR.js";import"./SubmitButton-Y3bTmigm.js";import"./loader-circle-Dt6dFIxG.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=r("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=r("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=r("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=r("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),w=({textToCopy:t,label:o})=>{const[s,i]=n.useState(!1),a=()=>{navigator.clipboard.writeText(t).then(()=>{i(!0),setTimeout(()=>i(!1),3e3)}).catch(l=>{console.error("Failed to copy text: ",l)})};return e.jsx("div",{children:e.jsxs("button",{className:"relative top-1 rounded-full border border-black py-1 pl-4 pr-2 transition-colors duration-500 hover:bg-black hover:text-white",onClick:a,children:[s?e.jsx(d,{className:"ml-2 inline"}):e.jsx(j,{className:"ml-2 inline"}),s?"تم النسخ!":o]})})};function $({contract:t}){const o=window.location.origin+"/contracts/live/"+t.uuid;return e.jsx(p,{children:e.jsx(h,{headerTitle:`عقد خاص ب${t.client.full_name}`,headerLink:[{label:"رجوع إلى قائمة عقود",url:route("contracts.index"),icon:u},{label:"تعديل على العقد",url:route("contracts.edit",t.id),icon:f},{label:"المزيد عن هذا الزبون",url:route("clients.show",t.client.id),icon:g},{label:`الملاحظات/الملحقات (${t.files_count})`,url:route("contracts.files",t.id),icon:k}],children:e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("p",{className:"mb-4 text-center text-sm text-gray-400 md:text-start",children:["أضيف العقد يوم"," ",m(new Date(t.created_at))]}),e.jsxs("div",{className:"flex justify-center gap-3 md:justify-start md:text-start",children:[e.jsx(w,{textToCopy:o,label:"نسخ رابط العقد"}),e.jsxs(c,{href:route("contracts.send",t.id),className:"relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white",children:[e.jsx(v,{className:"ml-2 inline"}),"البعث للزبون"]})]}),e.jsxs("p",{className:"mx-auto mt-5 flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 font-bold md:mx-0",children:[e.jsx(y,{size:20})," ",t.client.phone]}),e.jsx("hr",{className:"my-8"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("h2",{className:"text-3xl font-bold",children:[t.bonds_count," دفعات"]}),e.jsxs("p",{className:"flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 md:mx-0",children:[e.jsx(b,{size:20})," المبلغ الإجمالي :"," ",t.bonds_sum_amount]})]}),e.jsx("div",{children:e.jsx(x,{bonds:t.bonds})})]})})})}export{$ as default};
