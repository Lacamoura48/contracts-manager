import{j as t,r as d,W as g}from"./app-CJrd39CQ.js";import{A as b,a as j}from"./Autocomplete-BUDTETCv.js";import{C as m}from"./CustomInput-CVKSG4un.js";import{F as y,S as v}from"./SubmitButton-BLRxvb0D.js";import{A as N}from"./AuthenticatedLayout-B_cWOMgT.js";import{I as C}from"./InsideLayout-Cpjfg6F6.js";import{c as u}from"./functions-DlqVqW7_.js";import{U as w}from"./undo-2-B4kfNEsi.js";import{C as k}from"./circle-plus-CE9a4alg.js";import"./loader-circle-BDRgFzsw.js";function F(r){return t.jsxs("div",{className:`relative ${r.width??"w-full"}`,children:[t.jsx("label",{className:"mb-1 block text-black",htmlFor:r.id,children:r.label}),r.icon&&t.jsx("div",{className:"absolute right-3 top-2/3 -translate-y-1/2",children:r.icon}),t.jsx("select",{...r,className:`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black ${r.error?"bg-red-100":"bg-gray-100"} placeholder:text-placeholder rounded-lg ${r.icon&&"pr-11"}`,children:r.children}),t.jsx("span",{className:"text-xs text-red-600",children:r.error})]})}function T(r){const l=r.contract,p=new URLSearchParams(window.location.search),s=d.useRef(),h=l?{client_id:l.client_id,total_price:l.total_price,contract_type:l.contract_type,start_date:l.start_date,_method:"PATCH"}:{client_id:p.get("client_id")||"",total_price:"",contract_type:"",start_amount:"",start_date:u(new Date)},{data:a,setData:o,post:i,processing:x,errors:c}=g({...h}),n=e=>{o(e.target.name,e.target.type==="checkbox"?e.target.checked:e.target.value)};d.useEffect(()=>{if(+a.total_price>0&&+a.contract_type>0){const e=(+a.total_price/+a.contract_type).toFixed(2);o("start_amount",e),s.current.value=e}},[a.contract_type,a.total_price]);const _=e=>{e.preventDefault(),console.log(a),l?i(route("contracts.update",l.id)):i(route("contracts.store"),{forceFormData:!0})};return t.jsx(N,{children:t.jsx(C,{headerTitle:"إضافة عقد جديد",headerLink:[{label:"رجوع إلى قائمة العقود",url:route("contracts.index"),icon:w},{label:"إضافة زبون جديد",url:route("clients.create"),icon:k}],children:t.jsxs("form",{onSubmit:_,className:"max-w-2xl py-8",children:[t.jsxs("div",{className:"mb-4 flex gap-3",children:[t.jsx(b,{placeholder:"إختر زبونا ",dataFunction:async e=>j("clients",e),defaultValue:a.client_id,choiceHandler:e=>o("client_id",e),listItemAtributeName:"full_name",id:"client-contract-form",label:"الزبون",error:c.client_id}),t.jsx(m,{type:"number",label:"المبلغ",placeholder:"المبلغ بالدرهم",min:"0",onChange:n,defaultValue:a.total_price,name:"total_price",id:"contracts-total_price",error:c.total_price})]}),t.jsx("div",{className:"mb-4 flex gap-3",children:t.jsxs(F,{onChange:n,label:"عدد الدفعات",id:"contracts-contract_type",name:"contract_type",defaultSelected:8,children:[t.jsx("option",{value:0,children:"بدون إقساط"}),t.jsx("option",{value:4,children:"4 دفعات"}),t.jsx("option",{value:6,children:"6 دفعات"}),t.jsx("option",{value:8,children:"8 دفعات"}),t.jsx("option",{value:10,children:"10 دفعات"}),t.jsx("option",{value:12,children:"12 دفعات"})]})}),t.jsxs("div",{className:"mb-4 flex gap-3",children:[t.jsx(m,{type:"date",label:"تاريخ أول دفعة",min:u(new Date),onChange:n,defaultValue:a.start_date,name:"start_date",id:"contracts-start_date",error:c.start_date}),t.jsxs("div",{className:"relative w-full",children:[t.jsx("label",{className:"mb-1 block text-black",htmlFor:"contracts-start_amount",children:"مبلغ أول دفعة"}),t.jsx("input",{id:"contracts-start_amount",type:"number",placeholder:"المبلغ بالدرهم",min:1,max:a.total_price,onChange:n,ref:s,defaultValue:a.start_amount,name:"start_amount",className:`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black ${c.start_amount?"bg-red-100":"bg-gray-100"} placeholder:text-placeholder rounded-lg`}),t.jsx("span",{className:"text-xs text-red-600",children:c.start_amount})]})]}),t.jsx("div",{className:"my-8 grid grid-cols-2 gap-3",children:[...Array(+a.contract_type).keys()].map(e=>t.jsx(y,{name:`proof${e+1}`,id:`contract-proof-${e+1}`,label:`إثبات الدفعة ${e+1}`,imageSelected:a[`proof${e+1}`],defaultImage:l==null?void 0:l.bonds[e].proof_image,onChange:f=>o(`proof${e+1}`,f.target.files[0])},e))}),t.jsx("div",{children:t.jsx(v,{loading:x,children:l?"تحديث":"إرسال"})})]})})})}export{T as default};
