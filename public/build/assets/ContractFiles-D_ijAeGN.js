import{r as m,j as e,y as x,W as f}from"./app-BNsID-5_.js";import{f as h}from"./functions-TtcGIt92.js";import{M as p}from"./Modal-CPv3QRJh.js";import{P as g}from"./PrimaryButton-D0DaLr1v.js";import{S as j}from"./SecondaryButton-D4BLfzGs.js";import{T as b}from"./trash-CAavUbEg.js";import{C as y}from"./CustomInput-Ckf7hU8w.js";import{F as w}from"./FileInput-EHf548zf.js";import{S as N}from"./SubmitButton-Oas_Nj3B.js";import{E as S}from"./EmptyList-DJkafe39.js";import{c as v}from"./createLucideIcon-Cy-BHGjY.js";import{A as k,I as F}from"./InsideLayout-DSq4Ts8Q.js";import"./transition-DxRVsRhS.js";import"./loader-circle-B9PMQuxZ.js";import"./settings-DdWZQiLt.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=v("SquarePlus",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);function D({file:t}){const[a,s]=m.useState(!1);function r(){x.delete(route("files.delete",t.id),{onStart:()=>s(!1)})}return e.jsxs("div",{className:"relative mb-3 break-inside-avoid rounded-lg bg-gray-200 px-2 py-4",children:[e.jsx("button",{onClick:()=>s(!0),className:"absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black",children:e.jsx(b,{color:"white",size:18})}),e.jsx("p",{className:"text-sm font-medium text-gray-500",children:h(new Date(t.created_at))}),t.title&&e.jsx("p",{className:"mb-3 text-lg font-medium text-black",children:t.title}),t.image&&e.jsx("img",{className:"rounded-lg",src:t.image,alt:"file image"}),e.jsx(p,{show:a,children:e.jsxs("div",{className:"px-8 py-10",children:[e.jsxs("h2",{className:"mb-5 text-2xl font-bold",children:['هل أنت متأكد أنك تريد حذف "',t.title,'"']}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(g,{className:"text-xl",onClick:r,children:"نعم"}),e.jsx(j,{className:"text-xl",onClick:()=>s(!1),children:"لا"})]})]})})]})}function P({closeHandler:t,contract_id:a,type:s}){const[r,o]=m.useState(!1),{data:l,setData:n,post:c,processing:d}=f({title:"",image:null,as_note:s==="notes"});function u(i){if(i.preventDefault(),!l.title&&!l.image){o("يجب ملء أحد المدخلات لإضافة ملحق");return}c(route("files.store",a),{forceFormData:!0,onFinish:t})}return e.jsxs("form",{onSubmit:u,className:"flex flex-col gap-5 rounded-lg border-2 border-gray-200 px-2 py-5 font-medium",children:[e.jsx(y,{placeholder:s==="notes"?"الملاحظة":"عنوان للملحق",onChange:i=>n("title",i.target.value),name:"title",id:"title-files",error:r}),s==="files"&&e.jsx(w,{imageSelected:l.image,onChange:i=>n("image",i.target.files[0]),name:"image",id:"image-files",label:"صورة الملحق"}),e.jsx(N,{loading:d,children:"إضافة"})]})}function E({files:t,contract_id:a,type:s}){const[r,o]=m.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{className:"my-6",children:r?e.jsx(P,{type:s,closeHandler:()=>o(!1),contract_id:a}):e.jsxs("button",{onClick:()=>o(!0),className:"w-full rounded-lg bg-black py-3 text-center font-medium text-white",children:[e.jsx(C,{size:25,className:"ml-3 inline-block"}),e.jsx("span",{children:s==="files"?"إضافة ملحق":"إضافة ملاحظة"})]})}),t.length>0?e.jsx("div",{className:"columns-1 gap-3 md:columns-2",children:t.map((l,n)=>e.jsx(D,{file:l},n))}):e.jsx(S,{model:s==="files"?"ملحق":"ملاحظة"})]})}function J({contract:t}){const a=new URLSearchParams(window.location.search);return e.jsx(k,{children:e.jsx(F,{headerTitle:`${a.get("type")==="notes"?"ملاحظات":"ملحقات"} العقد خاص ب${t.client.full_name}`,children:e.jsx("div",{className:"max-w-2xl",children:e.jsx(E,{contract_id:t.id,files:t.files,type:a.get("type")})})})})}export{J as default};