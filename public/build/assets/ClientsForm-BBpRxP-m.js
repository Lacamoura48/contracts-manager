import{W as _,j as e}from"./app-CSSfp5Ar.js";import{C as t}from"./CustomInput-B8ivQ4-T.js";import{F as r,S as u}from"./SubmitButton-CE_Tv4UM.js";import{T as m}from"./TextArea-DYACPBsC.js";import{A as x}from"./AuthenticatedLayout-IwZ8GHwo.js";import{I as g}from"./InsideLayout-C2T9-5EB.js";import{a as b}from"./functions-DsWad_Iz.js";import{U as j}from"./undo-2-DgPFksLz.js";import"./loader-circle-jLnNVE2m.js";function F(c){const a=c.client,h=a?{full_name:a.full_name,phone:a.phone,email:a.email,phone2:a.phone2,id_code:a.id_code,address:a.address,wife_name:a.wife_name,wife_phone:a.wife_phone,notes:a.notes,_method:"PATCH"}:{full_name:"",phone:"",email:"",phone2:"",id_code:"",address:"",wife_name:"",wife_phone:"",notes:""},{data:o,setData:d,post:s,processing:p,errors:n}=_({...h,id_photo_front:null,id_photo_back:null}),i=l=>{d(l.target.name,l.target.type==="checkbox"?l.target.checked:l.target.value)},f=l=>{l.preventDefault(),a?s(route("clients.update",a.id)):s(route("clients.store"),{forceFormData:!0})};return console.log(n.email),e.jsx(x,{children:e.jsx(g,{headerTitle:"إضافة زبون جديد",headerLink:[{label:"رجوع إلى قائمة زبناء",url:"/clients",icon:j}],children:e.jsxs("form",{onSubmit:f,className:"max-w-2xl py-8",children:[e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(t,{onChange:i,defaultValue:o.full_name,label:"الاسم الكامل",name:"full_name",id:"clients-full_name",error:n.full_name}),e.jsx(t,{label:"رقم الهوية",name:"id_code",defaultValue:o.id_code,id:"clients-id_code",value:o.id_code,error:n.id_code,onChange:l=>d("id_code",b(l.target.value))})]}),e.jsx("div",{className:"mb-4 flex gap-3",children:e.jsx(t,{onChange:i,defaultValue:o.email,label:"البريد الإلكتروني",placeholder:"اختياري",name:"email",id:"clients-email",error:n.email})}),e.jsxs("div",{className:"mb-8 flex gap-3",children:[e.jsx(t,{label:"رقم الهاتف",name:"phone",defaultValue:o.phone,onChange:i,error:n.phone,id:"clients-phone"}),e.jsx(t,{label:"رقم واتساب",name:"phone2",placeholder:"اختياري",defaultValue:o.phone2,error:n.phone2,onChange:i,id:"clients-phone2"})]}),e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(r,{id:"clients-id_photo_front",name:"id_photo_front",label:"صورة الهوية (وجه)",defaultImage:a==null?void 0:a.id_photo_front,error:n.id_photo_front,imageSelected:o.id_photo_front,onChange:l=>d("id_photo_front",l.target.files[0])}),e.jsx(r,{id:"clients-id_photo_back",name:"id_photo_back",label:"صورة الهوية (ظهر)",imageSelected:o.id_photo_back,defaultImage:a==null?void 0:a.id_photo_back,error:n.id_photo_back,onChange:l=>d("id_photo_back",l.target.files[0])})]}),e.jsx("div",{className:"mb-4",children:e.jsx(m,{id:"clients-address",name:"address",onChange:i,defaultValue:o.address,label:"العنوان",placeholder:"اختياري"})}),e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(t,{label:"اسم الزوجة",name:"wife_name",onChange:i,defaultValue:o.wife_name,id:"clients-wife_name",placeholder:"اختياري"}),e.jsx(t,{label:"رقم هاتف الزوجة",name:"wife_phone",id:"clients-wife_phone",defaultValue:o.wife_phone,onChange:i,placeholder:"اختياري"})]}),e.jsx("div",{className:"mb-8 flex",children:e.jsx(m,{id:"clients-notes",name:"notes",onChange:i,defaultValue:o.notes,label:"ملاحظات",placeholder:"اختياري"})}),e.jsx("div",{children:e.jsx(u,{loading:p,children:a?"تحديث":"إرسال"})})]})})})}export{F as default};
