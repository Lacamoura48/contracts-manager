import{j as e,W as p}from"./app-CqiCJa1v.js";import{C as i}from"./CustomInput-1hk-p-kv.js";import{F as c,S as _}from"./SubmitButton-D_a8cUQj.js";import{A as u}from"./AuthenticatedLayout-Cbqz5ayS.js";import{I as x}from"./InsideLayout-DVl-DAn7.js";import{a as b}from"./functions-BFIscfgD.js";import{U as g}from"./undo-2-DFMQuYC0.js";import"./loader-circle-qsH-V_QL.js";function j(n){return e.jsxs("div",{className:`relative ${n.width??"w-full"}`,children:[e.jsx("label",{className:"mb-1 block text-black",htmlFor:n.id,children:n.label}),e.jsx("textarea",{rows:3,...n,className:`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black bg-${n.bg??"gray-100"} placeholder:text-placeholder rounded-lg`})]})}function F(n){const a=n.client,h=a?{full_name:a.full_name,phone:a.phone,phone2:a.phone2,id_code:a.id_code,address:a.address,wife_name:a.wife_name,wife_phone:a.wife_phone,_method:"PATCH"}:{full_name:"",phone:"",phone2:"",id_code:"",address:"",wife_name:"",wife_phone:""},{data:o,setData:r,post:s,processing:m,errors:t}=p({...h,id_photo_front:null,id_photo_back:null}),d=l=>{r(l.target.name,l.target.type==="checkbox"?l.target.checked:l.target.value)},f=l=>{l.preventDefault(),a?s(route("clients.update",a.id)):s(route("clients.store"),{forceFormData:!0})};return e.jsx(u,{children:e.jsx(x,{headerTitle:"إضافة زبون جديد",headerLink:[{label:"رجوع إلى قائمة زبناء",url:"/clients",icon:g}],children:e.jsxs("form",{onSubmit:f,className:"max-w-2xl py-8",children:[e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(i,{onChange:d,defaultValue:o.full_name,label:"الاسم الكامل",name:"full_name",id:"clients-full_name",error:t.full_name}),e.jsx(i,{label:"رقم الهوية",name:"id_code",defaultValue:o.id_code,id:"clients-id_code",value:o.id_code,error:t.id_code,onChange:l=>r("id_code",b(l.target.value))})]}),e.jsxs("div",{className:"mb-8 flex gap-3",children:[e.jsx(i,{label:"رقم الهاتف",name:"phone",defaultValue:o.phone,onChange:d,error:t.phone,id:"clients-phone"}),e.jsx(i,{label:"رقم واتساب",name:"phone2",placeholder:"اختياري",defaultValue:o.phone2,error:t.phone2,onChange:d,id:"clients-phone2"})]}),e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(c,{id:"clients-id_photo_front",name:"id_photo_front",label:"صورة الهوية (وجه)",defaultImage:a==null?void 0:a.id_photo_front,error:t.id_photo_front,imageSelected:o.id_photo_front,onChange:l=>r("id_photo_front",l.target.files[0])}),e.jsx(c,{id:"clients-id_photo_back",name:"id_photo_back",label:"صورة الهوية (ظهر)",imageSelected:o.id_photo_back,defaultImage:a==null?void 0:a.id_photo_back,error:t.id_photo_back,onChange:l=>r("id_photo_back",l.target.files[0])})]}),e.jsx("div",{className:"mb-4",children:e.jsx(j,{id:"clients-address",name:"address",onChange:d,defaultValue:o.address,label:"العنوان",placeholder:"اختياري"})}),e.jsxs("div",{className:"mb-8 flex gap-3",children:[e.jsx(i,{label:"اسم الزوجة",name:"wife_name",onChange:d,defaultValue:o.wife_name,id:"clients-wife_name",placeholder:"اختياري"}),e.jsx(i,{label:"رقم هاتف الزوجة",name:"wife_phone",id:"clients-wife_phone",defaultValue:o.wife_phone,onChange:d,placeholder:"اختياري"})]}),e.jsx("div",{children:e.jsx(_,{loading:m,children:a?"تحديث":"إرسال"})})]})})})}export{F as default};