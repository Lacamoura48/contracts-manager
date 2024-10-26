import{r as n,j as e,y as u,W as x}from"./app-BS4AV5Fs.js";import{f as h}from"./functions--JcqmtFZ.js";import{M as f}from"./Modal-CVQc7EmX.js";import{P as p}from"./PrimaryButton-CLgX4s01.js";import{S as g}from"./SecondaryButton-D6Knz49c.js";import{T as j}from"./trash-uniPTZw1.js";import{C as b}from"./Checkbox-BJ1qAPju.js";import{C as y}from"./CustomInput-COwHvWKG.js";import{F as N,S as k}from"./SubmitButton-BdYV-IQ7.js";import{E as v}from"./EmptyList-bTnv93kF.js";import{c as w,A as C}from"./AuthenticatedLayout-Bl8Qtks8.js";import{I as F}from"./InsideLayout-BeIP_V8v.js";import{U as S}from"./undo-2-Dv4lW_Zr.js";import"./transition-C-SZhtvC.js";import"./loader-circle-6lWdPofZ.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=w("SquarePlus",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);function I({file:t}){const[i,s]=n.useState(!1);function r(){u.delete(route("files.delete",t.id),{onStart:()=>s(!1)})}return e.jsxs("div",{className:"relative mb-3 break-inside-avoid rounded-lg bg-gray-200 px-2 py-4",children:[e.jsx("button",{onClick:()=>s(!0),className:"absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black",children:e.jsx(j,{color:"white",size:18})}),e.jsx("p",{className:"text-sm font-medium text-gray-500",children:h(new Date(t.created_at))}),t.title&&e.jsx("p",{className:"mb-3 text-lg font-medium text-black",children:t.title}),t.image&&e.jsx("img",{className:"rounded-lg",src:t.image,alt:"file image"}),e.jsx(f,{show:i,children:e.jsxs("div",{className:"px-8 py-10",children:[e.jsxs("h2",{className:"mb-5 text-2xl font-bold",children:['هل أنت متأكد أنك تريد حذف "',t.title,'"']}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(p,{className:"text-xl",onClick:r,children:"نعم"}),e.jsx(g,{className:"text-xl",onClick:()=>s(!1),children:"لا"})]})]})})]})}function _({closeHandler:t,contract_id:i}){const[s,r]=n.useState(!1),{data:l,setData:o,post:m,processing:c}=x({title:"",image:null,as_note:!1});function d(a){if(a.preventDefault(),!l.title&&!l.image){r("يجب ملء أحد المدخلات لإضافة ملحق");return}m(route("files.store",i),{forceFormData:!0,onFinish:t})}return e.jsxs("form",{onSubmit:d,className:"flex flex-col gap-5 rounded-lg border-2 border-gray-200 px-2 py-5 font-medium",children:[e.jsx(y,{placeholder:"عنوان للملحق",onChange:a=>o("title",a.target.value),name:"title",id:"title-files",error:s}),e.jsx(N,{imageSelected:l.image,onChange:a=>o("image",a.target.files[0]),name:"image",id:"image-files",label:"صورة الملحق"}),e.jsxs("div",{children:[e.jsx(b,{onChange:a=>o("as_note",a.target.checked),id:"asNoteInput",defaultChecked:l.as_note}),e.jsx("label",{className:"mr-2 font-normal",htmlFor:"asNoteInput",children:"تضاف لملاحظات العقد"})]}),e.jsx(k,{loading:c,children:"إضافة"})]})}function E({files:t,contract_id:i}){const[s,r]=n.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{className:"my-6",children:s?e.jsx(_,{closeHandler:()=>r(!1),contract_id:i}):e.jsxs("button",{onClick:()=>r(!0),className:"w-full rounded-lg bg-black py-3 text-center font-medium text-white",children:[e.jsx(D,{size:25,className:"ml-3 inline-block"}),e.jsx("span",{children:"إضافة ملحق"})]})}),t.length>0?e.jsx("div",{className:"columns-1 gap-3 md:columns-2",children:t.map((l,o)=>e.jsx(I,{file:l},o))}):e.jsx(v,{model:"ملحقات"})]})}function K({contract:t}){return e.jsx(C,{children:e.jsx(F,{headerTitle:`الملحقات العقد خاص ب${t.client.full_name}`,headerLink:[{label:"رجوع إلى العقد",url:route("contracts.show",t.id),icon:S}],children:e.jsx("div",{className:"max-w-2xl",children:e.jsx(E,{contract_id:t.id,files:t.files})})})})}export{K as default};
