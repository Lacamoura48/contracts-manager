import{r as x,j as e,y as o}from"./app-3D4PXkdZ.js";import{f as c}from"./functions-DlqVqW7_.js";import{M as N}from"./Modal-CnCFsc5R.js";import{P as y}from"./PrimaryButton-DjLpjN-Q.js";import{C as v}from"./CustomInput-DJ1dAlax.js";import{c as s,A as w}from"./AuthenticatedLayout-Bah3AqvK.js";import{I as M}from"./InsideLayout-OSVjeT-T.js";import{U as C}from"./undo-2-KFmisCop.js";import{P}from"./phone-Cj3q1fIO.js";import"./transition-4bW_IdiN.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=s("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=s("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=s("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=s("HandCoins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=s("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=s("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=s("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);function R({bond:t,current:n,lastBond:r}){var u,f;const l=x.useRef();function i(m){o.post(route("bonds.update",t.id),{proof_image:m.target.files[0],_method:"PATCH"})}const h={markAsPaid:{text:`تريد إثبات الدفع الخاص بتاريخ 
                        ${c(new Date(t.payement_date))}`,action:p},markAsUnpaid:{text:`تريد إلغاء الدفع الخاص بتاريخ 
            ${c(new Date(t.payement_date))}`,action:p},delayBond:{text:"هل أنت متأكد من أنك تريد تأخير هذا الدفع إلى بداية الشهر القادم؟",action:k},showProof:{text:e.jsxs(e.Fragment,{children:[e.jsx("img",{src:t.proof_image,className:"md:max-h-[450px]",alt:"لا يوجد صورة"}),e.jsx("p",{children:"هل تريد تغيير الصورة؟"})]}),action:()=>l.current.click()},partPayement:{text:e.jsx(v,{label:"أدخل الجزء المدفوع",placeholder:"(ستتم إضافة الباقي للشهر المقبل)",onChange:m=>j(m.target.value),type:"number",min:"0"}),action:b}},[d,a]=x.useState(!1),[g,j]=x.useState();function p(){o.patch(`/bonds/${t.id}`,{status:t.status=="paid"?"":"paid"},{onStart:()=>a(!1)})}function k(){o.patch(`/bonds/${t.id}/delay`,null,{onStart:()=>a(!1)})}function b(){o.patch(`/bonds/${t.id}/part`,{amount_paid:g},{onStart:()=>a(!1)})}return e.jsxs("div",{className:`mb-3 rounded-xl border px-3 py-4 transition-colors duration-500 ${t.status?"border-green-500 bg-green-100":""}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"small:text-xs me-5 rounded-r-xl text-start",children:e.jsx("button",{onClick:()=>a(t.status?"markAsUnpaid":"markAsPaid"),className:`${t.status?"bg-green-500":"bg-gray-200"} flex h-8 w-8 items-center justify-center rounded-xl transition-colors`,children:e.jsx(B,{color:"white",className:`transition-all duration-500 ${t.status?"scale-100 opacity-100":"scale-0 opacity-0"}`})})}),e.jsxs("div",{className:"small:text-xs me-5 text-start",children:[t.amount," درهم"]}),e.jsx("div",{className:"small:text-xs me-5 rounded-l-xl text-start",children:c(new Date(t.payement_date))}),e.jsx("button",{onClick:()=>a("showProof"),children:e.jsx(I,{})}),e.jsx("input",{ref:l,onChange:i,className:"hidden",type:"file"})]}),n&&!t.status&&e.jsxs("div",{className:"mt-6 flex gap-2",children:[e.jsxs("button",{onClick:()=>a("delayBond"),className:"w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white",children:[e.jsx(L,{className:"ml-2 inline-block"})," تأجيل الدفعة"]}),!r&&e.jsxs("button",{onClick:()=>a("partPayement"),className:"w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white",children:[e.jsx(A,{className:"ml-2 inline-block"})," دفع جزئي"]})]}),e.jsx(N,{show:d,children:e.jsxs("div",{className:"px-8 py-10",children:[e.jsx("h2",{className:"mb-5 text-2xl font-bold",children:(u=h[d])==null?void 0:u.text}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(y,{className:"text-xl",onClick:(f=h[d])==null?void 0:f.action,children:"نعم"}),e.jsx(y,{className:"text-xl",onClick:()=>a(!1),children:"رجوع"})]})]})})]})}function S({bonds:t}){let n=!1;return e.jsx("table",{className:"mt-8 w-full",children:e.jsx("tbody",{children:t.map((r,l)=>{const i=!n&&r.status!=="paid";return i&&(n=!0),e.jsx(R,{current:i,bond:r,lastBond:l+1===t.length},r.id)})})})}function G({contract:t}){return e.jsx(w,{children:e.jsx(M,{headerTitle:`عقد خاص ب${t.client.full_name}`,headerLink:[{label:"رجوع إلى قائمة عقود",url:route("contracts.index"),icon:C},{label:"المزيد عن هذا الزبون",url:route("clients.show",t.client.id),icon:H},{label:`الملحقات (${t.files_count})`,url:route("contracts.files",t.id),icon:$}],children:e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("p",{className:"mb-4 text-center text-sm text-gray-400 md:text-start",children:["أضيف العقد يوم"," ",c(new Date(t.created_at))]}),e.jsxs("p",{className:"mx-auto flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 font-bold md:mx-0",children:[e.jsx(P,{size:20})," ",t.client.phone]}),e.jsx("hr",{className:"my-8"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("h2",{className:"text-3xl font-bold",children:[t.bonds_count," دفعات"]}),e.jsxs("p",{className:"flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 md:mx-0",children:[e.jsx(_,{size:20})," المبلغ الإجمالي :"," ",t.bonds_sum_amount]})]}),e.jsx("div",{children:e.jsx(S,{bonds:t.bonds})})]})})})}export{G as default};
