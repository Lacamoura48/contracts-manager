import{j as e,a as r}from"./app-CqiCJa1v.js";import{c as s,A as a}from"./AuthenticatedLayout-Cbqz5ayS.js";import{I as c}from"./InsideLayout-DVl-DAn7.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=s("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=s("Scroll",[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=s("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function h({data:t}){return console.log(t),e.jsx(a,{children:e.jsxs(c,{headerTitle:"الرئيسية",headerLink:[{label:"إضافة عقد جديد",url:route("contracts.create"),icon:l},{label:"إضافة زبون جديد",url:route("clients.create"),icon:o}],children:[e.jsxs("div",{className:"relative mb-4 rounded-2xl bg-black px-3 py-4",children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-white",children:"مجموع العقود الحالية"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(l,{color:"white",size:40}),e.jsx("span",{className:"text-6xl font-bold text-white",children:String(t.contracts_count).padStart(2,"0")})]}),e.jsx(r,{href:route("contracts.index"),className:"absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black",children:e.jsx(n,{})})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"mb-3 text-2xl font-bold",children:"حالات دفعات هذا الشهر"}),e.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[e.jsxs("div",{className:"flex aspect-square flex-col items-center justify-center rounded-xl bg-green-100 text-4xl font-bold text-green-500",children:[e.jsx("p",{children:String(t.paid_contracts).padStart(2,"0")}),e.jsx("p",{className:"text-sm font-normal",children:"مدفوعة"})]}),e.jsxs("div",{className:"flex flex-col aspect-square items-center justify-center rounded-xl bg-blue-100 text-4xl font-bold text-blue-500",children:[String(t.current_contracts).padStart(2,"0"),e.jsx("p",{className:"text-sm font-normal",children:"مستحقة"})]}),e.jsxs("div",{className:"flex flex-col aspect-square items-center justify-center rounded-xl bg-orange-100 text-4xl font-bold text-yellow-600",children:[String(t.late_contracts).padStart(2,"0"),e.jsx("p",{className:"text-sm font-normal",children:"متأخرة"})]}),e.jsxs("div",{className:"flex flex-col aspect-square items-center justify-center rounded-xl bg-red-100 text-4xl font-bold text-red-500",children:[String(t.very_late_contracts).padStart(2,"0"),e.jsx("p",{className:"text-sm font-normal",children:"متعثرة الدفع"})]})]})]})]})})}export{h as default};
