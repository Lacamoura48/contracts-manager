import{r as n,j as e}from"./app-B8texML4.js";import{C as c,f as d}from"./functions-Dusporc1.js";import{c as r}from"./createLucideIcon-CKuIsglc.js";import{B as m}from"./BondsList-tq2jPkjk.js";import{A as x}from"./AuthenticatedLayout-Dr8tZljD.js";import{I as p}from"./InsideLayout-VncPy18J.js";import{U as h}from"./undo-2-iIkZPtwl.js";import{S as u}from"./square-pen-OFc5Lqc5.js";import{P as f}from"./phone-D1CfqYx1.js";import"./Modal-Dwy7Il6U.js";import"./transition-B2HFzY0m.js";import"./PrimaryButton-DbH-0h0m.js";import"./ProofInput-jMm7zCeg.js";import"./Checkbox-mJ4v8pzE.js";import"./CustomInput-D1UIDyAT.js";import"./FileInput-qm50XRI7.js";import"./SubmitButton-DBVdx5XA.js";import"./loader-circle-Ddgd4rUg.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=r("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=r("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),g=({textToCopy:t,label:o})=>{const[s,i]=n.useState(!1),a=()=>{navigator.clipboard.writeText(t).then(()=>{i(!0),setTimeout(()=>i(!1),3e3)}).catch(l=>{console.error("Failed to copy text: ",l)})};return e.jsx("div",{children:e.jsxs("button",{className:"relative top-1 rounded-full border border-black py-1 pl-4 pr-2 transition-colors duration-500 hover:bg-black hover:text-white",onClick:a,children:[s?e.jsx(c,{className:"ml-2 inline"}):e.jsx(b,{className:"ml-2 inline"}),s?"تم النسخ!":o]})})};function E({contract:t}){const o=window.location.origin+"/contracts/live/"+t.uuid;return e.jsx(x,{children:e.jsx(p,{headerTitle:`عقد خاص ب${t.client.full_name}`,headerLink:[{label:"رجوع إلى قائمة عقود",url:route("contracts.index"),icon:h},{label:"تعديل على العقد",url:route("contracts.edit",t.id),icon:u},{label:"المزيد عن هذا الزبون",url:route("clients.show",t.client.id),icon:k},{label:`الملاحظات/الملحقات (${t.files_count})`,url:route("contracts.files",t.id),icon:j}],children:e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("p",{className:"mb-4 text-center text-sm text-gray-400 md:text-start",children:["أضيف العقد يوم"," ",d(new Date(t.created_at))]}),e.jsx("div",{className:"text-center md:text-start",children:e.jsx(g,{textToCopy:o,label:"نسخ رابط العقد"})}),e.jsxs("p",{className:"mx-auto mt-5 flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 font-bold md:mx-0",children:[e.jsx(f,{size:20})," ",t.client.phone]}),e.jsx("hr",{className:"my-8"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("h2",{className:"text-3xl font-bold",children:[t.bonds_count," دفعات"]}),e.jsxs("p",{className:"flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 md:mx-0",children:[e.jsx(y,{size:20})," المبلغ الإجمالي :"," ",t.bonds_sum_amount]})]}),e.jsx("div",{children:e.jsx(m,{bonds:t.bonds})})]})})})}export{E as default};
