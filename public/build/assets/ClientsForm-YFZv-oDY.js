import{j as e,W as u}from"./app-DcjuE_uT.js";import{C as i}from"./CustomInput-CT-7nPbp.js";import{C as f}from"./CustomSelect-Csme1Y62.js";import{F as c}from"./FileInput-B5frHSNa.js";import{S as x}from"./SubmitButton-CPGIhJ16.js";import{A as _}from"./AuthenticatedLayout-Blb7AohH.js";import{I as b}from"./InsideLayout-CHN4JS0a.js";import{a as g}from"./functions-DsqCjJb0.js";import{U as j}from"./undo-2-CKdMrvN2.js";import"./createLucideIcon-kBc6etM_.js";import"./loader-circle-ApLobLhG.js";function C(d){return e.jsxs("div",{className:`relative ${d.width??"w-full"}`,children:[e.jsx("label",{className:"mb-1 block text-black",htmlFor:d.id,children:d.label}),e.jsx("textarea",{rows:3,...d,className:`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black bg-${d.bg??"gray-100"} placeholder:text-placeholder rounded-lg`})]})}function T(d){const a=d.client,m=a?{full_name:a.full_name,phone:a.phone,email:a.email,phone2:a.phone2,id_code:a.id_code,wife_name:a.wife_name,wife_phone:a.wife_phone,notes:a.notes,state:a.state,building:a.building,appart:a.appart,location:a.location,area:a.area,_method:"PATCH"}:{full_name:"",phone:"",email:"",phone2:"",id_code:"",address:"",wife_name:"",wife_phone:"",notes:"",state:"إمارة أبوظبي",building:"",appart:"",location:"",area:""},{data:l,setData:s,post:r,processing:h,errors:t}=u({...m,id_photo_front:null,id_photo_back:null}),o=n=>{s(n.target.name,n.target.type==="checkbox"?n.target.checked:n.target.value)},p=n=>{n.preventDefault(),a?r(route("clients.update",a.id)):r(route("clients.store"),{forceFormData:!0})};return console.log(t.email),e.jsx(_,{children:e.jsx(b,{headerTitle:"إضافة زبون جديد",headerLink:[{label:"رجوع إلى قائمة زبناء",url:"/clients",icon:j}],children:e.jsxs("form",{onSubmit:p,className:"max-w-2xl py-8",children:[e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(i,{onChange:o,defaultValue:l.full_name,label:"الاسم الكامل",name:"full_name",id:"clients-full_name",error:t.full_name}),e.jsx(i,{label:"رقم الهوية",name:"id_code",defaultValue:l.id_code,id:"clients-id_code",value:l.id_code,error:t.id_code,onChange:n=>s("id_code",g(n.target.value))})]}),e.jsx("div",{className:"mb-4 flex gap-3",children:e.jsx(i,{onChange:o,defaultValue:l.email,label:"البريد الإلكتروني",placeholder:"اختياري",name:"email",id:"clients-email",error:t.email})}),e.jsxs("div",{className:"mb-8 flex gap-3",children:[e.jsx(i,{label:"رقم الهاتف",name:"phone",defaultValue:l.phone,onChange:o,error:t.phone,id:"clients-phone"}),e.jsx(i,{label:"رقم واتساب",name:"phone2",placeholder:"اختياري",defaultValue:l.phone2,error:t.phone2,onChange:o,id:"clients-phone2"})]}),e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(c,{id:"clients-id_photo_front",name:"id_photo_front",label:"صورة الهوية (وجه)",defaultImage:a==null?void 0:a.id_photo_front,error:t.id_photo_front,imageSelected:l.id_photo_front,onChange:n=>s("id_photo_front",n.target.files[0])}),e.jsx(c,{id:"clients-id_photo_back",name:"id_photo_back",label:"صورة الهوية (ظهر)",imageSelected:l.id_photo_back,defaultImage:a==null?void 0:a.id_photo_back,error:t.id_photo_back,onChange:n=>s("id_photo_back",n.target.files[0])})]}),e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(i,{label:"اسم الزوجة",name:"wife_name",onChange:o,defaultValue:l.wife_name,id:"clients-wife_name",placeholder:"اختياري"}),e.jsx(i,{label:"رقم هاتف الزوجة",name:"wife_phone",id:"clients-wife_phone",defaultValue:l.wife_phone,onChange:o,placeholder:"اختياري"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"mb-3 text-2xl font-bold",children:"العنوان"}),e.jsxs("div",{className:"mb-4 flex gap-2",children:[e.jsxs(f,{onChange:o,defaultValue:l.state,name:"state",id:"clients-state",label:"الإمارة",children:[e.jsx("option",{value:"إمارة أبوظبي",children:"إمارة أبوظبي"}),e.jsx("option",{value:"إمارة دبي",children:"إمارة دبي"}),e.jsx("option",{value:"إمارة الشارقة",children:"إمارة الشارقة"}),e.jsx("option",{value:"إمارة عجمان",children:"إمارة عجمان"}),e.jsx("option",{value:"إمارة أم القيوين",children:"إمارة أم القيوين"}),e.jsx("option",{value:"إمارة رأس الخيمة",children:"إمارة رأس الخيمة"}),e.jsx("option",{value:"إمارة الفجيرة",children:"إمارة الفجيرة"})]}),e.jsx(i,{label:"الجهة",name:"area",id:"clients-area",defaultValue:l.area,onChange:o,placeholder:"اختياري"})]}),e.jsxs("div",{className:"mb-4 flex gap-2",children:[e.jsx(i,{label:"رقم/اسم البناية",name:"building",id:"clients-building",defaultValue:l.building,onChange:o,placeholder:"اختياري"}),e.jsx(i,{label:"رقم الشقة",name:"appart",id:"clients-appart",defaultValue:l.appart,onChange:o,placeholder:"اختياري"})]}),e.jsx("div",{children:e.jsx(i,{label:"Map location",name:"location",id:"clients-location",defaultValue:l.location,onChange:o,placeholder:"اختياري"})})]}),e.jsx("div",{className:"mb-8 flex",children:e.jsx(C,{id:"clients-notes",name:"notes",onChange:o,defaultValue:l.notes,label:"ملاحظات",placeholder:"اختياري"})}),e.jsx("div",{children:e.jsx(x,{loading:h,children:a?"تحديث":"إرسال"})})]})})})}export{T as default};
