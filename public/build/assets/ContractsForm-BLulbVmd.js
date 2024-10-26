import{j as t,r as g,W as C}from"./app-BgtTloMb.js";import{A as V,a as k}from"./Autocomplete-CXE6QLYP.js";import{P as I}from"./ProofInput-Bqz4it2K.js";import{C as i}from"./CustomInput-Bj8JEFhP.js";import{T as A}from"./TextArea-BS-uHXbP.js";import{S as D}from"./SubmitButton-COrr8Mpt.js";import{A as F}from"./AuthenticatedLayout-DlPUrCuQ.js";import{I as S}from"./InsideLayout-BZuXrRkr.js";import{d}from"./functions-ruCkTwAr.js";import{U as P}from"./undo-2-K0FQmQYf.js";import{C as T}from"./circle-plus-C5BT8Kov.js";import"./loader-circle-D7tf1l1X.js";import"./Checkbox-CCt13_X7.js";function H(n){return t.jsxs("div",{className:`relative ${n.width??"w-full"}`,children:[t.jsx("label",{className:"mb-1 block text-black",htmlFor:n.id,children:n.label}),n.icon&&t.jsx("div",{className:"absolute right-3 top-2/3 -translate-y-1/2",children:n.icon}),t.jsx("select",{...n,className:`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black ${n.error?"bg-red-100":"bg-gray-100"} placeholder:text-placeholder rounded-lg ${n.icon&&"pr-11"}`,children:n.children}),t.jsx("span",{className:"text-xs text-red-600",children:n.error})]})}function K(n){const r=n.contract,y=new URLSearchParams(window.location.search),m=g.useRef(),j=r?{client_id:r.client_id,total_price:r.bonds_sum_amount,contract_type:r.bonds_count,start_date:d(new Date(r.bonds[0].created_at)),start_amount:r.bonds[0].amount,height:r.height,width:r.width,intensity:r.intensity,finishing_date:r.finishing_date,notes:r.notes,_method:"PATCH"}:{client_id:y.get("client_id")||"",total_price:"",contract_type:3,start_amount:"",start_date:d(new Date),bonds_array:[],height:"",width:"",intensity:"",finishing_date:d(new Date().setMonth(new Date().getMonth()+1)),notes:""},{data:e,setData:c,post:h,processing:v,errors:l}=C({...j});function w(a){const s=e.bonds_array.map(u=>u.id==a.id?a:u);c("bonds_array",s)}const p=a=>[...Array(a).keys()].map(s=>{var x,_,b,f;return{id:s+1,proof_image:((x=e.bonds_array[s])==null?void 0:x.proof_image)||null,title:((_=e.bonds_array[s])==null?void 0:_.title)||"",postable:((b=e.bonds_array[s])==null?void 0:b.postable)!==void 0?(f=e.bonds_array[s])==null?void 0:f.postable:!0}}),o=a=>{c(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};g.useEffect(()=>{if(+e.total_price>0)if(+e.contract_type!=3){const a=(+e.total_price/+e.contract_type).toFixed(2);c({...e,start_amount:a,bonds_array:!r&&p(+e.contract_type)}),m.current.value=a}else{const a=(+e.total_price/2).toFixed(2);c({...e,start_amount:a,bonds_array:!r&&p(+e.contract_type)}),m.current.value=a}},[e.contract_type,e.total_price]);const N=a=>{a.preventDefault(),console.log(e),r?h(route("contracts.update",r.id)):h(route("contracts.store"),{forceFormData:!0})};return console.log("bondsarray",e.bonds_array),t.jsx(F,{children:t.jsx(S,{headerTitle:"إضافة عقد جديد",headerLink:[{label:"رجوع إلى قائمة العقود",url:route("contracts.index"),icon:P},{label:"إضافة زبون جديد",url:route("clients.create"),icon:T}],children:t.jsxs("form",{onSubmit:N,className:"max-w-2xl py-8",children:[t.jsxs("div",{className:"mb-4 flex gap-3",children:[t.jsx(V,{placeholder:"إختر زبونا ",dataFunction:async a=>k("clients",a),defaultValue:e.client_id,choiceHandler:a=>c("client_id",a),listItemAtributeName:"full_name",id:"client-contract-form",label:"الزبون",error:l.client_id}),t.jsx(i,{type:"number",label:"المبلغ",placeholder:"المبلغ بالدرهم",min:"0",onChange:o,defaultValue:e.total_price,name:"total_price",id:"contracts-total_price",error:l.total_price})]}),t.jsx("div",{className:"mb-4 flex gap-3",children:t.jsxs(H,{onChange:o,label:"عدد الدفعات",id:"contracts-contract_type",name:"contract_type",defaultValue:e.contract_type,error:l.contract_type,children:[t.jsx("option",{value:3,children:"بدون إقساط"}),t.jsx("option",{value:4,children:"4 دفعات"}),t.jsx("option",{value:6,children:"6 دفعات"}),t.jsx("option",{value:8,children:"8 دفعات"}),t.jsx("option",{value:10,children:"10 دفعات"}),t.jsx("option",{value:12,children:"12 دفعات"})]})}),t.jsxs("div",{className:"mb-4 flex gap-3",children:[t.jsx(i,{type:"date",label:"تاريخ أول دفعة",min:r?null:d(new Date),onChange:o,defaultValue:e.start_date,name:"start_date",id:"contracts-start_date",error:l.start_date}),t.jsxs("div",{className:"relative w-full",children:[t.jsx("label",{className:"mb-1 block text-black",htmlFor:"contracts-start_amount",children:"مبلغ أول دفعة"}),t.jsx("input",{id:"contracts-start_amount",type:"number",placeholder:"المبلغ بالدرهم",min:1,max:e.total_price,onChange:o,ref:m,defaultValue:e.start_amount,name:"start_amount",className:`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black ${l.start_amount?"bg-red-100":"bg-gray-100"} placeholder:text-placeholder rounded-lg`}),t.jsx("span",{className:"text-xs text-red-600",children:l.start_amount})]})]}),t.jsx("div",{className:"mb-4 flex gap-3",children:t.jsx(i,{type:"date",label:"تاريخ انتهاء العمل",onChange:o,defaultValue:e.finishing_date,name:"finishing_date",id:"contracts-finishing_date",error:l.finishing_date})}),!r&&t.jsx("div",{className:"my-8 grid grid-cols-2 gap-x-3 gap-y-6",children:e.bonds_array.map(a=>t.jsx(I,{number:a.id,changeHandler:w},a.id))}),t.jsxs("div",{className:"my-4",children:[t.jsx("h2",{className:"mb-3 text-2xl font-bold",children:"معلومات عن المنتج"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx(i,{onChange:o,defaultValue:e.intensity,name:"intensity",id:"contracts-intensity",placeholder:"اختياري",label:"كثافة"}),t.jsx(i,{onChange:o,defaultValue:e.width,name:"width",id:"contracts-width",placeholder:"اختياري",label:"عرض"}),t.jsx(i,{onChange:o,defaultValue:e.height,name:"height",id:"contracts-height",placeholder:"اختياري",label:"ارتفاع"})]})]}),t.jsx("div",{className:"mb-8 flex",children:t.jsx(A,{id:"contracts-notes",name:"notes",onChange:o,defaultValue:e.notes,label:"ملاحظات",placeholder:"اختياري"})}),t.jsx("div",{children:t.jsx(D,{loading:v,children:r?"تحديث":"إرسال"})})]})})})}export{K as default};