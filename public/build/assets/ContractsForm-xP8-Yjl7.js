import{r as f,W as N,j as t}from"./app-DRVT9tCf.js";import{A as H,a as I}from"./Autocomplete-Bhrx6nMP.js";import{P as V}from"./ProofInput-Tozxng5Y.js";import{C as m}from"./CustomInput-CJy4IPXj.js";import{C as c}from"./CustomSelect-BsUZAXR0.js";import{S as F}from"./SubmitButton-DgzLuHeG.js";import{A,I as D}from"./InsideLayout-tWiJCeca.js";import{d as u}from"./functions-DY3BSX6T.js";import{U as S}from"./undo-2-C65VN2yK.js";import{C as P}from"./circle-plus-PgaEvvOk.js";import"./loader-circle-DbtZiuQO.js";import"./createLucideIcon-q7ImhZmf.js";import"./Checkbox-BKJnEmHt.js";import"./FileInput-D9KZ105S.js";import"./settings-Cbhc6GV_.js";function Q(y){const r=y.contract,j=new URLSearchParams(window.location.search),i=f.useRef(),v=r?{client_id:r.client_id,total_price:Math.round(parseFloat(r.bonds_sum_amount)),contract_type:r.bonds_count,start_date:u(new Date(r.bonds[0].created_at)),start_amount:r.bonds[0].amount,height:r.height,width:r.width,intensity:r.intensity,work_duration:r.work_duration,notes:r.notes,_method:"PATCH"}:{client_id:j.get("client_id")||"",total_price:"",contract_type:3,start_amount:"",start_date:u(new Date),bonds_array:[],height:"27cm",width:"75cm",intensity:"25kg/H",work_duration:"",notes:""},{data:e,setData:s,post:p,processing:w,errors:n}=N({...v});function k(a){const l=e.bonds_array.map(d=>d.id==a.id?a:d);s("bonds_array",l)}const h=a=>[...Array(a).keys()].map(l=>{var _,x,b,g;return{id:l+1,proof_image:((_=e.bonds_array[l])==null?void 0:_.proof_image)||null,title:((x=e.bonds_array[l])==null?void 0:x.title)||"",postable:((b=e.bonds_array[l])==null?void 0:b.postable)!==void 0?(g=e.bonds_array[l])==null?void 0:g.postable:!0}}),o=a=>{s(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};f.useEffect(()=>{if(+e.total_price>0)if(+e.contract_type!=3){const a=(+e.total_price/+e.contract_type).toFixed(2);s({...e,start_amount:a,bonds_array:!r&&h(+e.contract_type)}),i.current.value=a}else{const a=(+e.total_price/2).toFixed(2);s({...e,start_amount:a,bonds_array:!r&&h(+e.contract_type)}),i.current.value=a}},[e.contract_type,e.total_price]);const C=a=>{a.preventDefault(),console.log(e),r?p(route("contracts.update",r.id)):p(route("contracts.store"),{forceFormData:!0})};return console.log("bondsarray",e.bonds_array),t.jsx(A,{children:t.jsx(D,{headerTitle:"إضافة عقد جديد",headerLink:[{label:"رجوع إلى قائمة العقود",url:route("contracts.index"),icon:S},{label:"إضافة زبون جديد",url:route("clients.create"),icon:P}],children:t.jsxs("form",{onSubmit:C,className:"max-w-2xl py-8",children:[t.jsxs("div",{className:"mb-4 flex gap-3",children:[t.jsx(H,{placeholder:"إختر زبونا ",dataFunction:async a=>I("clients",a),defaultValue:e.client_id,choiceHandler:a=>s("client_id",a),listItemAtributeName:"full_name",id:"client-contract-form",label:"الزبون",error:n.client_id}),t.jsx(m,{type:"number",label:"المبلغ",placeholder:"المبلغ بالدرهم",min:"0",onChange:o,defaultValue:e.total_price,name:"total_price",id:"contracts-total_price",error:n.total_price})]}),t.jsx("div",{className:"mb-4 flex gap-3",children:t.jsxs(c,{onChange:o,label:"عدد الدفعات",id:"contracts-contract_type",name:"contract_type",defaultValue:e.contract_type,error:n.contract_type,children:[t.jsx("option",{value:3,children:"بدون إقساط"}),t.jsx("option",{value:4,children:"4 دفعات"}),t.jsx("option",{value:6,children:"6 دفعات"}),t.jsx("option",{value:8,children:"8 دفعات"}),t.jsx("option",{value:10,children:"10 دفعات"}),t.jsx("option",{value:12,children:"12 دفعات"})]})}),t.jsxs("div",{className:"mb-4 flex gap-3",children:[t.jsx(m,{type:"date",label:"تاريخ أول دفعة",min:r?null:u(new Date),onChange:o,defaultValue:e.start_date,name:"start_date",id:"contracts-start_date",error:n.start_date}),t.jsxs("div",{className:"relative w-full",children:[t.jsx("label",{className:"mb-1 block text-black",htmlFor:"contracts-start_amount",children:"مبلغ أول دفعة"}),t.jsx("input",{id:"contracts-start_amount",type:"number",placeholder:"المبلغ بالدرهم",min:1,step:".01",max:e.total_price,onChange:o,ref:i,defaultValue:e.start_amount,name:"start_amount",className:`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black ${n.start_amount?"bg-red-100":"bg-gray-100"} placeholder:text-placeholder rounded-lg`}),t.jsx("span",{className:"text-xs text-red-600",children:n.start_amount})]})]}),t.jsx("div",{className:"mb-4 flex gap-3",children:t.jsx(m,{type:"number",label:"مدة الانجاز",placeholder:"عدد أيام",onChange:o,defaultValue:e.work_duration,name:"work_duration",id:"contracts-work_duration",error:n.work_duration})}),!r&&t.jsx("div",{className:"my-8 grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2",children:e.bonds_array.map(a=>t.jsx(V,{number:a.id,changeHandler:k},a.id))}),t.jsxs("div",{className:"my-4",children:[t.jsx("h2",{className:"mb-3 text-2xl font-bold",children:"معلومات عن المنتج"}),t.jsxs("div",{className:"mb-8 flex gap-2",children:[t.jsxs(c,{onChange:o,defaultValue:e.intensity,name:"intensity",id:"contracts-intensity",label:"كثافة",children:[t.jsx("option",{value:"20kg/H",children:"20kg/H"}),t.jsx("option",{value:"25kg/H",children:"25kg/H"}),t.jsx("option",{value:"30kg/H",children:"30kg/H"})]}),t.jsxs(c,{onChange:o,defaultValue:e.width,name:"width",id:"contracts-width",label:"عرض",children:[t.jsx("option",{value:"70cm",children:"70cm"}),t.jsx("option",{value:"75cm",children:"75cm"}),t.jsx("option",{value:"80cm",children:"80cm"})]}),t.jsxs(c,{onChange:o,defaultValue:e.height,name:"height",id:"contracts-height",label:"ارتفاع",children:[t.jsx("option",{value:"20cm",children:"20cm"}),t.jsx("option",{value:"22cm",children:"22cm"}),t.jsx("option",{value:"25cm",children:"25cm"}),t.jsx("option",{value:"27cm",children:"27cm"}),t.jsx("option",{value:"30cm",children:"30cm"})]})]})]}),t.jsx("div",{children:t.jsx(F,{loading:w,children:r?"تحديث":"إرسال"})})]})})})}export{Q as default};
