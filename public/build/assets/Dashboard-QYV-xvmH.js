import{r as i,j as e,a}from"./app-BA4RG4j-.js";import{A as d,I as m}from"./InsideLayout-Qx95bBWz.js";import{S as c}from"./scroll-DGqkmxLq.js";import{c as o}from"./createLucideIcon-QtlK6aPg.js";import"./settings-iGY54ntk.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=o("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=o("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function N({data:t}){const s=x=>parseFloat(x).toFixed(1),[l,r]=i.useState("month"),n={month:{paid:s(t.sum_monthly_paid_amount),unpaid:s(t.sum_monthly_unpaid_amount),sum:s(t.contracts_monthly_sum)},all:{paid:s(t.sum_paid_amount),unpaid:s(t.sum_unpaid_amount),sum:s(t.contracts_sum)}};return e.jsx(d,{children:e.jsxs(m,{headerTitle:"الرئيسية",noBack:!0,headerLink:[{label:"إضافة عقد جديد",url:route("contracts.create"),icon:c},{label:"إضافة زبون جديد",url:route("clients.create"),icon:u}],children:[e.jsxs("div",{className:"mb-4 border border-1 border-gray-400 p-1 rounded-2xl",children:[e.jsxs("div",{className:"w-full flex gap-1 mb-5",children:[e.jsx("button",{onClick:()=>r("all"),className:`flex-1 py-2 rounded-lg ${l=="all"?"bg-black text-white":"bg-gray-200 text-black"} transition-colors duration-500`,children:"المجموع"}),e.jsx("button",{onClick:()=>r("month"),className:`flex-1 py-2 rounded-lg ${l=="month"?"bg-black text-white":"bg-gray-200 text-black"} transition-colors duration-500`,children:"الشهر"})]}),e.jsxs("div",{className:"grid sm:grid-cols-4 grid-cols-2 gap-2",children:[e.jsxs("div",{className:"relative rounded-2xl bg-black px-3 py-4",children:[e.jsx("h2",{className:"mb-4 sm:text-xl  font-semibold text-white",children:"مجموع العقود الحالية"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(c,{color:"white",size:25}),e.jsx("span",{className:"sm:text-5xl text-3xl font-bold text-white",children:String(t.contracts_count).padStart(2,"0")})]}),e.jsx(a,{href:route("contracts.index"),className:"absolute bottom-3 left-3 flex size-8 items-center justify-center rounded-full bg-white text-black",children:e.jsx(h,{})})]}),e.jsxs("div",{className:"relative rounded-2xl bg-black px-3 py-4",children:[e.jsx("h2",{className:"mb-4 sm:text-xl text-sm font-semibold text-white",children:"مبلغ دفعات"}),e.jsx("span",{className:"sm:text-4xl text-2xl font-bold text-white",children:n[l].sum})]}),e.jsxs("div",{className:"relative rounded-2xl bg-black px-3 py-4",children:[e.jsx("h2",{className:"mb-4 sm:text-xl text-sm font-semibold text-white",children:"دفعات المدفوعة"}),e.jsx("span",{className:"sm:text-4xl text-2xl font-bold text-white",children:n[l].paid})]}),e.jsxs("div",{className:"relative rounded-2xl bg-black px-3 py-4",children:[e.jsx("h2",{className:"mb-4 sm:text-xl text-sm font-semibold text-white",children:"دفعات الغير المدفوعة"}),e.jsx("span",{className:"sm:text-4xl text-2xl font-bold text-white",children:n[l].unpaid})]})]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"mb-3 sm:text-2xl text-xl font-bold",children:"حالات دفعات هذا الشهر"}),e.jsxs("div",{className:"grid sm:grid-cols-4 grid-cols-2 gap-2",children:[e.jsxs(a,{href:"/bonds?status=paid",className:"flex aspect-[2] flex-col items-center justify-center rounded-xl bg-green-100 text-4xl font-bold text-green-500",children:[e.jsx("p",{children:String(t.paid_contracts).padStart(2,"0")}),e.jsx("p",{className:"text-sm font-normal",children:"مدفوعة"})]}),e.jsxs(a,{href:"/bonds?status=pending",className:"flex aspect-[2] flex-col items-center justify-center rounded-xl bg-blue-100 text-4xl font-bold text-blue-500",children:[String(t.current_contracts).padStart(2,"0"),e.jsx("p",{className:"text-sm font-normal",children:"مستحقة"})]}),e.jsxs(a,{href:"/bonds?status=late",className:"flex aspect-[2] flex-col items-center justify-center rounded-xl bg-orange-100 text-4xl font-bold text-yellow-600",children:[String(t.late_contracts).padStart(2,"0"),e.jsx("p",{className:"text-sm font-normal",children:"متأخرة"})]}),e.jsxs(a,{href:"/bonds?status=very_late",className:"flex aspect-[2] flex-col items-center justify-center rounded-xl bg-red-100 text-4xl font-bold text-red-500",children:[String(t.very_late_contracts).padStart(2,"0"),e.jsx("p",{className:"text-sm font-normal",children:"متعثرة الدفع"})]})]})]})]})})}export{N as default};
