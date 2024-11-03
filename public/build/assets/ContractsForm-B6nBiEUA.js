import{r as f,W as N,j as t}from"./app-9wsz9jZb.js";import{A as H,a as V}from"./Autocomplete-BBoqjExS.js";import{P as I}from"./ProofInput-Bo8pUf6h.js";import{C as i}from"./CustomInput-DRkgp0I-.js";import{C as m}from"./CustomSelect-DGQeHsvM.js";import{T as A}from"./TextArea-Cct2WEbC.js";import{S as F}from"./SubmitButton-CnUVZOom.js";import{A as D}from"./AuthenticatedLayout-ZB1KLX_y.js";import{I as S}from"./InsideLayout-CO3S_nnF.js";import{h as u}from"./functions-D42VZABQ.js";import{U as P}from"./undo-2-10ePNFaX.js";import{C as T}from"./circle-plus-C2QRffRx.js";import"./loader-circle-BgOsaWcg.js";import"./createLucideIcon-DPrxXY7H.js";import"./Checkbox-D9I0bGU0.js";import"./FileInput-BV6mDQs0.js";function Y(y){const r=y.contract,j=new URLSearchParams(window.location.search),c=f.useRef(),v=r?{client_id:r.client_id,total_price:r.bonds_sum_amount,contract_type:r.bonds_count,start_date:u(new Date(r.bonds[0].created_at)),start_amount:r.bonds[0].amount,height:r.height,width:r.width,intensity:r.intensity,work_duration:r.work_duration,notes:r.notes,_method:"PATCH"}:{client_id:j.get("client_id")||"",total_price:"",contract_type:3,start_amount:"",start_date:u(new Date),bonds_array:[],height:"",width:"70cm",intensity:"20kg/H",work_duration:"",notes:""},{data:e,setData:l,post:p,processing:w,errors:n}=N({...v});function k(a){const s=e.bonds_array.map(d=>d.id==a.id?a:d);l("bonds_array",s)}const h=a=>[...Array(a).keys()].map(s=>{var _,x,b,g;return{id:s+1,proof_image:((_=e.bonds_array[s])==null?void 0:_.proof_image)||null,title:((x=e.bonds_array[s])==null?void 0:x.title)||"",postable:((b=e.bonds_array[s])==null?void 0:b.postable)!==void 0?(g=e.bonds_array[s])==null?void 0:g.postable:!0}}),o=a=>{l(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};f.useEffect(()=>{if(+e.total_price>0)if(+e.contract_type!=3){const a=(+e.total_price/+e.contract_type).toFixed(2);l({...e,start_amount:a,bonds_array:!r&&h(+e.contract_type)}),c.current.value=a}else{const a=(+e.total_price/2).toFixed(2);l({...e,start_amount:a,bonds_array:!r&&h(+e.contract_type)}),c.current.value=a}},[e.contract_type,e.total_price]);const C=a=>{a.preventDefault(),console.log(e),r?p(route("contracts.update",r.id)):p(route("contracts.store"),{forceFormData:!0})};return console.log("bondsarray",e.bonds_array),t.jsx(D,{children:t.jsx(S,{headerTitle:"إضافة عقد جديد",headerLink:[{label:"رجوع إلى قائمة العقود",url:route("contracts.index"),icon:P},{label:"إضافة زبون جديد",url:route("clients.create"),icon:T}],children:t.jsxs("form",{onSubmit:C,className:"max-w-2xl py-8",children:[t.jsxs("div",{className:"mb-4 flex gap-3",children:[t.jsx(H,{placeholder:"إختر زبونا ",dataFunction:async a=>V("clients",a),defaultValue:e.client_id,choiceHandler:a=>l("client_id",a),listItemAtributeName:"full_name",id:"client-contract-form",label:"الزبون",error:n.client_id}),t.jsx(i,{type:"number",label:"المبلغ",placeholder:"المبلغ بالدرهم",min:"0",onChange:o,defaultValue:e.total_price,name:"total_price",id:"contracts-total_price",error:n.total_price})]}),t.jsx("div",{className:"mb-4 flex gap-3",children:t.jsxs(m,{onChange:o,label:"عدد الدفعات",id:"contracts-contract_type",name:"contract_type",defaultValue:e.contract_type,error:n.contract_type,children:[t.jsx("option",{value:3,children:"بدون إقساط"}),t.jsx("option",{value:4,children:"4 دفعات"}),t.jsx("option",{value:6,children:"6 دفعات"}),t.jsx("option",{value:8,children:"8 دفعات"}),t.jsx("option",{value:10,children:"10 دفعات"}),t.jsx("option",{value:12,children:"12 دفعات"})]})}),t.jsxs("div",{className:"mb-4 flex gap-3",children:[t.jsx(i,{type:"date",label:"تاريخ أول دفعة",min:r?null:u(new Date),onChange:o,defaultValue:e.start_date,name:"start_date",id:"contracts-start_date",error:n.start_date}),t.jsxs("div",{className:"relative w-full",children:[t.jsx("label",{className:"mb-1 block text-black",htmlFor:"contracts-start_amount",children:"مبلغ أول دفعة"}),t.jsx("input",{id:"contracts-start_amount",type:"number",placeholder:"المبلغ بالدرهم",min:1,max:e.total_price,onChange:o,ref:c,defaultValue:e.start_amount,name:"start_amount",className:`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black ${n.start_amount?"bg-red-100":"bg-gray-100"} placeholder:text-placeholder rounded-lg`}),t.jsx("span",{className:"text-xs text-red-600",children:n.start_amount})]})]}),t.jsx("div",{className:"mb-4 flex gap-3",children:t.jsx(i,{type:"number",label:"مدة الانجاز",placeholder:"عدد أيام",onChange:o,defaultValue:e.work_duration,name:"work_duration",id:"contracts-work_duration",error:n.work_duration})}),!r&&t.jsx("div",{className:"my-8 grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2",children:e.bonds_array.map(a=>t.jsx(I,{number:a.id,changeHandler:k},a.id))}),t.jsxs("div",{className:"my-4",children:[t.jsx("h2",{className:"mb-3 text-2xl font-bold",children:"معلومات عن المنتج"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs(m,{onChange:o,defaultValue:e.intensity,name:"intensity",id:"contracts-intensity",label:"كثافة",children:[t.jsx("option",{value:"20kg/H",children:"20kg/H"}),t.jsx("option",{value:"25kg/H",children:"25kg/H"}),t.jsx("option",{value:"30kg/H",children:"30kg/H"})]}),t.jsxs(m,{onChange:o,defaultValue:e.width,name:"width",id:"contracts-width",label:"عرض",children:[t.jsx("option",{value:"70cm",children:"70cm"}),t.jsx("option",{value:"75cm",children:"75cm"}),t.jsx("option",{value:"80cm",children:"80cm"})]}),t.jsx(i,{onChange:o,defaultValue:e.height,name:"height",id:"contracts-height",label:"ارتفاع"})]})]}),t.jsx("div",{className:"mb-8 flex",children:t.jsx(A,{id:"contracts-notes",name:"notes",onChange:o,defaultValue:e.notes,label:"ملاحظات",placeholder:"اختياري"})}),t.jsx("div",{children:t.jsx(F,{loading:w,children:r?"تحديث":"إرسال"})})]})})})}export{Y as default};