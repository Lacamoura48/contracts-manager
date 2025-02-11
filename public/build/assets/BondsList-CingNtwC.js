import{j as e,y as m,W as D,r as h,a as I}from"./app-BW51sJCY.js";import{f as y,e as z,h as v,r as L}from"./functions-DuHHseie.js";import{M as F}from"./Modal-B9FE2C6z.js";import{P as N}from"./PrimaryButton-CF90Hi4_.js";import{c}from"./createLucideIcon-Daxuz9wX.js";import{X as R}from"./x-noody4f_.js";import{P as T}from"./ProofInput-Czg-K-U5.js";import{C as p}from"./CustomInput-IfO7B0s3.js";import{S as O}from"./SubmitButton-BR-rPeqo.js";import{a as W}from"./settings-BvninLX3.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=c("ArrowBigUpDash",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=c("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=c("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=c("HandCoins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=c("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=c("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=c("MessageCircleOff",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=c("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);function J({bond:t,closeHandler:s}){function a(r){m.post(`/bonds/${t.id}`,{status:r=="none"?null:r,_method:"PATCH"},{onStart:s})}return e.jsxs("div",{children:[e.jsxs("p",{className:"mb-4",children:["تريد إثبات الدفع الخاص بتاريخ"," ",y(new Date(t.payement_date))]}),t.postable==1?e.jsxs("div",{className:"flex flex-col gap-4 text-sm",children:[t.status!=="posted"&&e.jsxs("button",{className:"rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white",onClick:()=>a("posted"),children:[e.jsx(U,{className:"ml-2 inline-block"}),"تم ايداع الشيك"]}),t.status!=="paid"&&e.jsxs("button",{onClick:()=>a("paid"),className:"rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white",children:[e.jsx(w,{className:"ml-2 inline-block"}),"تم صرف الشيك"]}),t.status!=="denied"&&e.jsxs("button",{onClick:()=>a("denied"),className:"hover:bg-red rounded-lg border border-red-300 bg-red-100 py-2 text-red-700 transition-colors hover:text-red-500",children:[e.jsx(R,{className:"ml-2 inline-block"}),"شيك مرتجع"]}),t.status!==null&&e.jsxs("button",{onClick:()=>a("none"),className:"hover:bg-red rounded-lg border border-slate-300 bg-slate-100 py-2 text-slate-700 transition-colors hover:text-slate-500",children:[e.jsx(C,{className:"ml-2 inline-block"}),"بدون الحالة"]})]}):e.jsx("div",{className:"flex flex-col gap-4 text-sm",children:t.status!=="paid"?e.jsxs("button",{onClick:()=>a("paid"),className:"rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white",children:[e.jsx(w,{className:"ml-2 inline-block"}),"إثبات الدفع"]}):e.jsxs("button",{onClick:()=>a("none"),className:"hover:bg-red rounded-lg border border-slate-300 bg-slate-100 py-2 text-slate-700 transition-colors hover:text-slate-500",children:[e.jsx(C,{className:"ml-2 inline-block"}),"إلغاء الدفع"]})})]})}function K({proof:t,closeHandler:s}){const{data:a,setData:r,post:i,processing:o,errors:x}=D({payement_date:t.payement_date,title:t.title,postable:t.postable,action_done:t.action_done,proof_image:t.proof_image,_method:"PATCH"});function g(n){n.preventDefault(),i(route("bonds.update",t.id),{preserveScroll:!1,onSuccess:s})}return e.jsx("div",{className:"w-full",children:e.jsxs("form",{onSubmit:g,children:[e.jsx(T,{changeHandler:n=>r({...a,...n}),proof:t}),e.jsx("div",{className:"my-3",children:e.jsx(p,{type:"date",label:"تاريخ دفعة",onChange:n=>r("payement_date",n.target.value),defaultValue:a.payement_date,name:"payement_date",id:"contracts-payement_date",error:x.payement_date})}),e.jsx("div",{className:"my-3",children:e.jsx(p,{label:"ملاحظة",onChange:n=>r("action_done",n.target.value),defaultValue:a.action_done,name:"action_done",id:"contracts-action_done",error:x.action_done})}),e.jsx(O,{loading:o,children:"تحديث"})]})})}function Q({phone:t,text:s,className:a,children:r}){const o=`https://api.whatsapp.com/send?phone=+971${t.split(" ")[0]}&text=${s}`;return e.jsx("a",{target:"_blank",href:o,className:a,rel:"noreferrer",children:r})}function Y({bond:t,noActions:s,ranking:a,last:r}){var b,f,j,k;const i=h.useRef(),o=z(t.status),[x,g]=h.useState(),[n,l]=h.useState(!1),[_,M]=h.useState(),P=`
نود تذكيرك بأنه لم يتم سداد المبلغ المستحق لهذا الشهر حتى الآن. لقد تأخر السداد لمدة ${v(t.payement_date)}. نرجو منك تسديد المبلغ في أقرب وقت ممكن لتجنب أي رسوم إضافية أو إجراءات لاحقة`;async function A(d){const $=await L(d.target.files[0]);m.post(route("bonds.update",t.id),{proof_image:$,_method:"PATCH"})}const u={markAsPaid:{text:e.jsx(J,{bond:t,closeHandler:()=>l("")})},delayBond:{text:"هل أنت متأكد من أنك تريد تأخير هذا الدفع إلى بداية الشهر القادم؟",action:B},updateBond:{text:e.jsx(K,{closeHandler:()=>l(""),proof:t})},showProof:{text:e.jsxs(e.Fragment,{children:[e.jsx("img",{src:t.proof_image,className:"md:max-h-[450px]",alt:"لا يوجد صورة"}),e.jsx("p",{children:"هل تريد تغيير الصورة؟"})]}),action:()=>i.current.click()},partPayement:{text:e.jsx(p,{label:"أدخل الجزء المدفوع",placeholder:"(ستتم إضافة الباقي للشهر المقبل)",onChange:d=>M(d.target.value),type:"number",min:"0"}),action:H},changeAmount:{text:e.jsx(p,{label:"أدخل مبلغ الدفعة",placeholder:"(ستتم تقسيم الباقي للأشهر المقبلة)",onChange:d=>g(d.target.value),type:"number",min:"0"}),action:S}};function B(){m.post(`/bonds/${t.id}/delay`,{_method:"PATCH"},{onStart:()=>l(!1)})}function H(){m.post(`/bonds/${t.id}/part`,{amount_paid:_,_method:"PATCH"},{onStart:()=>l(!1)})}function S(){m.post(`/bonds/${t.id}`,{amount:x,_method:"PATCH"},{onStart:()=>l(!1)})}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`mb-4 rounded-xl border px-3 py-4 transition-colors duration-500 ${t.status=="paid"?"border-green-500 bg-green-100":"bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[s?t.action_done==="دفعة متأخرة"?e.jsx("p",{className:"border-l border-l-gray-500 pl-3",children:"دفعة متأخرة"}):e.jsxs("p",{className:"border-l border-l-gray-500 pl-3",children:["الدفعة ",a]}):e.jsx("div",{children:e.jsx("button",{onClick:()=>l("markAsPaid"),className:`${t.status?o.bg:"bg-gray-200"} flex h-9 w-9 items-center justify-center rounded-xl transition-colors`,children:t.status&&o?e.jsx(o.icon,{className:`transition-all duration-500 ${t.status?"scale-100 opacity-100":"scale-0 opacity-0"}`}):null})}),e.jsxs("div",{children:[e.jsxs("span",{className:"block font-medium",children:[parseFloat(t.amount).toFixed(2)," درهم"," ",!t.postable&&e.jsx("span",{className:"mb-4 whitespace-nowrap rounded-full bg-orange-100 px-4 py-1 text-center text-xs text-orange-800",children:"شيك ضمان"})," ",t.action_done&&!s&&e.jsx("span",{className:"mb-4 whitespace-nowrap rounded-full bg-violet-100 px-2 py-1 text-center text-xs text-violet-800",children:t.action_done})]}),e.jsx("span",{className:`text-xs ${new Date(t.payement_date)<new Date&&!t.status?"text-red-500":"text-gray-500"}`,children:t.status?y(new Date(t.payement_date)):`${y(new Date(t.payement_date))} (${v(t.payement_date)})`})]})]}),e.jsxs("div",{className:"flex gap-1",children:[((b=t.contract)==null?void 0:b.client.id)&&e.jsxs(e.Fragment,{children:[e.jsx(I,{className:"rounded-lg border border-gray-300 bg-gray-100 px-2 py-2 text-xs text-gray-700 transition-colors hover:bg-black hover:text-white",href:route("contracts.show",t.contract.id),children:t.contract.client.nickname||t.contract.client.full_name}),e.jsx(Q,{phone:t.contract.client.phone,text:P,className:"w-11 rounded-lg border border-gray-300 bg-gray-100 px-2 py-2",children:e.jsx("img",{className:"w-20",src:"/icons/wa.png",alt:"whatsapp icon"})})]}),!s&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"w-10 rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white",onClick:()=>l("showProof"),children:t.proof_image?e.jsx(X,{className:"inline-block",size:20}):e.jsx(q,{className:"inline-block",size:20})}),e.jsx("button",{onClick:()=>l("updateBond"),className:"w-10 rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white",children:e.jsx(W,{className:"inline-block",size:20})})]}),s&&e.jsxs("div",{className:"flex flex-col",children:[t.action_done&&e.jsx("span",{className:"mb-4 whitespace-nowrap rounded-full bg-violet-100 px-2 py-1 text-center text-xs text-violet-800",children:t.action_done}),t.status&&e.jsx("span",{className:`mb-4 whitespace-nowrap rounded-full px-2 py-1 text-center text-xs ${o.bg}`,children:o.label})]})]}),e.jsx("input",{ref:i,onChange:A,className:"hidden",type:"file"})]}),!t.status&&!s&&e.jsxs("div",{className:"mt-6 flex gap-2 text-sm",children:[e.jsxs("button",{onClick:()=>l("delayBond"),className:"w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white",children:[e.jsx(G,{className:"ml-2 inline-block"})," تأجيل الدفعة"]}),!r&&e.jsxs("button",{onClick:()=>l("changeAmount"),className:"w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white",children:[e.jsx(V,{className:"ml-2 inline-block"})," ","تغيير المبلغ"]}),e.jsxs("button",{onClick:()=>l("partPayement"),className:"w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white",children:[e.jsx(E,{className:"ml-2 inline-block"})," دفع جزئي"]})]})]}),e.jsx(F,{maxWidth:"lg",show:n,children:e.jsxs("div",{className:"px-8 py-10",children:[e.jsx("h2",{className:"mb-5",children:(f=u[n])==null?void 0:f.text}),e.jsxs("div",{className:"flex gap-4",children:[((j=u[n])==null?void 0:j.action)&&e.jsx(N,{className:"text-xl",onClick:(k=u[n])==null?void 0:k.action,children:"نعم"}),e.jsx(N,{className:"text-xl",onClick:()=>l(!1),children:"رجوع"})]})]})})]})}function ie({bonds:t,noActions:s}){return e.jsx("div",{className:"mt-8 w-full",children:t.map((a,r)=>e.jsx(Y,{noActions:s,ranking:r+1,bond:a,last:r===t.length-1},a.id))})}export{ie as B,Q as O};
