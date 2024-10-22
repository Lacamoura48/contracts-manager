import{j as t,r as m,W as f}from"./app-CqiCJa1v.js";import{A as g,a as j}from"./Autocomplete-G4CmO8Lz.js";import{C as u}from"./CustomInput-1hk-p-kv.js";import{F as y,S as v}from"./SubmitButton-D_a8cUQj.js";import{A as N}from"./AuthenticatedLayout-Cbqz5ayS.js";import{I as w}from"./InsideLayout-DVl-DAn7.js";import{d as s}from"./functions-BFIscfgD.js";import{U as C}from"./undo-2-DFMQuYC0.js";import{C as k}from"./circle-plus-Ck-tANEV.js";import"./loader-circle-qsH-V_QL.js";function F(l){return t.jsxs("div",{className:`relative ${l.width??"w-full"}`,children:[t.jsx("label",{className:"mb-1 block text-black",htmlFor:l.id,children:l.label}),l.icon&&t.jsx("div",{className:"absolute right-3 top-2/3 -translate-y-1/2",children:l.icon}),t.jsx("select",{...l,className:`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black ${l.error?"bg-red-100":"bg-gray-100"} placeholder:text-placeholder rounded-lg ${l.icon&&"pr-11"}`,children:l.children}),t.jsx("span",{className:"text-xs text-red-600",children:l.error})]})}function T(l){const r=l.contract,p=new URLSearchParams(window.location.search),i=m.useRef();console.log(l);const h=r?{client_id:r.client_id,total_price:r.bonds_sum_amount,contract_type:r.bonds_count,start_date:s(new Date(r.bonds[0].created_at)),start_amount:r.bonds[0].amount,_method:"PATCH"}:{client_id:p.get("client_id")||"",total_price:"",contract_type:"",start_amount:"",start_date:s(new Date)},{data:a,setData:n,post:d,processing:x,errors:o}=f({...h}),c=e=>{n(e.target.name,e.target.type==="checkbox"?e.target.checked:e.target.value)};m.useEffect(()=>{if(+a.total_price>0&&+a.contract_type>0){const e=(+a.total_price/+a.contract_type).toFixed(2);n("start_amount",e),i.current.value=e}},[a.contract_type,a.total_price]);const _=e=>{e.preventDefault(),console.log(a),r?d(route("contracts.update",r.id)):d(route("contracts.store"),{forceFormData:!0})};return t.jsx(N,{children:t.jsx(w,{headerTitle:"إضافة عقد جديد",headerLink:[{label:"رجوع إلى قائمة العقود",url:route("contracts.index"),icon:C},{label:"إضافة زبون جديد",url:route("clients.create"),icon:k}],children:t.jsxs("form",{onSubmit:_,className:"max-w-2xl py-8",children:[t.jsxs("div",{className:"mb-4 flex gap-3",children:[t.jsx(g,{placeholder:"إختر زبونا ",dataFunction:async e=>j("clients",e),defaultValue:a.client_id,choiceHandler:e=>n("client_id",e),listItemAtributeName:"full_name",id:"client-contract-form",label:"الزبون",error:o.client_id}),t.jsx(u,{type:"number",label:"المبلغ",placeholder:"المبلغ بالدرهم",min:"0",onChange:c,defaultValue:a.total_price,name:"total_price",id:"contracts-total_price",error:o.total_price})]}),t.jsx("div",{className:"mb-4 flex gap-3",children:t.jsxs(F,{onChange:c,label:"عدد الدفعات",id:"contracts-contract_type",name:"contract_type",defaultValue:a.contract_type,children:[t.jsx("option",{value:0,children:"بدون إقساط"}),t.jsx("option",{value:4,children:"4 دفعات"}),t.jsx("option",{value:6,children:"6 دفعات"}),t.jsx("option",{value:8,children:"8 دفعات"}),t.jsx("option",{value:10,children:"10 دفعات"}),t.jsx("option",{value:12,children:"12 دفعات"})]})}),t.jsxs("div",{className:"mb-4 flex gap-3",children:[t.jsx(u,{type:"date",label:"تاريخ أول دفعة",min:r?null:s(new Date),onChange:c,defaultValue:a.start_date,name:"start_date",id:"contracts-start_date",error:o.start_date}),t.jsxs("div",{className:"relative w-full",children:[t.jsx("label",{className:"mb-1 block text-black",htmlFor:"contracts-start_amount",children:"مبلغ أول دفعة"}),t.jsx("input",{id:"contracts-start_amount",type:"number",placeholder:"المبلغ بالدرهم",min:1,max:a.total_price,onChange:c,ref:i,defaultValue:a.start_amount,name:"start_amount",className:`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black ${o.start_amount?"bg-red-100":"bg-gray-100"} placeholder:text-placeholder rounded-lg`}),t.jsx("span",{className:"text-xs text-red-600",children:o.start_amount})]})]}),!r&&t.jsx("div",{className:"my-8 grid grid-cols-2 gap-3",children:[...Array(+a.contract_type).keys()].map(e=>t.jsx(y,{name:`proof${e+1}`,id:`contract-proof-${e+1}`,label:`إثبات الدفعة ${e+1}`,imageSelected:a[`proof${e+1}`],defaultImage:r==null?void 0:r.bonds[e].proof_image,onChange:b=>n(`proof${e+1}`,b.target.files[0])},e))}),t.jsx("div",{children:t.jsx(v,{loading:x,children:r?"تحديث":"إرسال"})})]})})})}export{T as default};