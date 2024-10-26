import{j as e}from"./app-DV2Ep8eC.js";import{B as s}from"./BondsList-E5sHkxKv.js";import{c as r,A as i}from"./AuthenticatedLayout-vPYy_ivK.js";import{I as o}from"./InsideLayout-D8FAxVKu.js";import{f as a}from"./functions-uVtEcYR7.js";import{U as l}from"./undo-2-DG0iesx6.js";import{S as n}from"./square-pen-7VGWD4Be.js";import{P as m}from"./phone-C2APMZnR.js";import"./Modal-DYKsuJhX.js";import"./transition-CTzw2uGT.js";import"./PrimaryButton-CQAJOpXJ.js";import"./ProofInput-cAy7U8ma.js";import"./Checkbox-BEM-T9t1.js";import"./CustomInput-ae_CY9Ov.js";import"./SubmitButton-CdXLTAXB.js";import"./loader-circle-DoYCM_HV.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=r("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=r("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=r("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function B({contract:t}){return e.jsx(i,{children:e.jsx(o,{headerTitle:`عقد خاص ب${t.client.full_name}`,headerLink:[{label:"رجوع إلى قائمة عقود",url:route("contracts.index"),icon:l},{label:"تعديل على العقد",url:route("contracts.edit",t.id),icon:n},{label:"المزيد عن هذا الزبون",url:route("clients.show",t.client.id),icon:c},{label:`الملاحظات/الملحقات (${t.files_count})`,url:route("contracts.files",t.id),icon:x}],children:e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("p",{className:"mb-4 text-center text-sm text-gray-400 md:text-start",children:["أضيف العقد يوم"," ",a(new Date(t.created_at))]}),e.jsxs("p",{className:"mx-auto flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 font-bold md:mx-0",children:[e.jsx(m,{size:20})," ",t.client.phone]}),e.jsx("hr",{className:"my-8"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("h2",{className:"text-3xl font-bold",children:[t.bonds_count," دفعات"]}),e.jsxs("p",{className:"flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 md:mx-0",children:[e.jsx(d,{size:20})," المبلغ الإجمالي :"," ",t.bonds_sum_amount]})]}),e.jsx("div",{children:e.jsx(s,{bonds:t.bonds})})]})})})}export{B as default};
