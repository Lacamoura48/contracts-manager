import{W as u,j as e}from"./app-BW51sJCY.js";import{C as i}from"./CustomInput-IfO7B0s3.js";import{C as f}from"./CustomSelect-CyXAVmum.js";import{F as r}from"./FileInput-Ca9VPC_B.js";import{T as x}from"./TextArea-B5lLLsDI.js";import{S as _}from"./SubmitButton-BR-rPeqo.js";import{A as b,I as g}from"./InsideLayout-lr2hLF2F.js";import{a as j}from"./functions-DuHHseie.js";import{U as C}from"./undo-2-p2hNMB26.js";import"./createLucideIcon-Daxuz9wX.js";import"./loader-circle-CyMCh7el.js";import"./settings-BvninLX3.js";import"./x-noody4f_.js";function U(c){const a=c.client,m=a?{full_name:a.full_name,nickname:a.nickname,phone:a.phone,email:a.email,phone2:a.phone2,id_code:a.id_code,wife_name:a.wife_name,wife_phone:a.wife_phone,notes:a.notes,state:a.state,building:a.building,appart:a.appart,location:a.location,area:a.area,_method:"PATCH"}:{full_name:"",nickname:"",phone:"",email:"",phone2:"",id_code:"",address:"",wife_name:"",wife_phone:"",notes:"",state:"إمارة أبوظبي",building:"",appart:"",location:"",area:""},{data:l,setData:s,post:d,processing:p,errors:t}=u({...m,id_photo_front:null,id_photo_back:null}),n=o=>{s(o.target.name,o.target.type==="checkbox"?o.target.checked:o.target.value)},h=o=>{o.preventDefault(),a?d(route("clients.update",a.id)):d(route("clients.store"),{forceFormData:!0})};return e.jsx(b,{children:e.jsx(g,{headerTitle:"إضافة زبون جديد",headerLink:[{label:"رجوع إلى قائمة زبناء",url:"/clients",icon:C}],children:e.jsxs("form",{onSubmit:h,className:"max-w-2xl py-8",children:[e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(i,{onChange:n,defaultValue:l.full_name,label:"الاسم الكامل",name:"full_name",id:"clients-full_name",error:t.full_name}),e.jsx(i,{label:"رقم الهوية",name:"id_code",defaultValue:l.id_code,id:"clients-id_code",value:l.id_code,error:t.id_code,onChange:o=>s("id_code",j(o.target.value))})]}),e.jsx("div",{className:"mb-4",children:e.jsx(i,{onChange:n,defaultValue:l.nickname,label:"اللقب",placeholder:"اختياري",name:"nickname",id:"users-nickname",error:t.nickname,required:!0})}),e.jsx("div",{className:"mb-4 flex gap-3",children:e.jsx(i,{onChange:n,defaultValue:l.email,label:"البريد الإلكتروني",placeholder:"اختياري",name:"email",id:"clients-email",error:t.email})}),e.jsxs("div",{className:"mb-8 flex gap-3",children:[e.jsxs("div",{className:"relative w-full",children:[!a&&e.jsx("span",{className:"absolute left-3 top-9",children:"971+"}),e.jsx("label",{className:"mb-1 block",htmlFor:"clients-phone",children:"رقم الهاتف"}),e.jsx("input",{className:`w-full border-none px-2 py-2 ${!a&&"pl-[3.2rem]"} text-left accent-black placeholder:text-gray-400 focus:ring-black ${t.phone?"bg-red-100":"bg-gray-100"} placeholder:text-placeholder rounded-lg`,name:"phone",defaultValue:l.phone,onChange:n,id:"clients-phone"})]}),e.jsx(i,{label:"رقم ثانوي",name:"phone2",placeholder:"اختياري",defaultValue:l.phone2,error:t.phone2,onChange:n,id:"clients-phone2"})]}),e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(r,{id:"clients-id_photo_front",name:"id_photo_front",label:"صورة الهوية (وجه)",defaultImage:a==null?void 0:a.id_photo_front,error:t.id_photo_front,imageSelected:l.id_photo_front,onChange:o=>s("id_photo_front",o.target.files[0])}),e.jsx(r,{id:"clients-id_photo_back",name:"id_photo_back",label:"صورة الهوية (ظهر)",imageSelected:l.id_photo_back,defaultImage:a==null?void 0:a.id_photo_back,error:t.id_photo_back,onChange:o=>s("id_photo_back",o.target.files[0])})]}),e.jsxs("div",{className:"mb-4 flex gap-3",children:[e.jsx(i,{label:"اسم الزوجة",name:"wife_name",onChange:n,defaultValue:l.wife_name,id:"clients-wife_name",placeholder:"اختياري"}),e.jsx(i,{label:"رقم هاتف الزوجة",name:"wife_phone",id:"clients-wife_phone",defaultValue:l.wife_phone,onChange:n,placeholder:"اختياري"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"mb-3 text-2xl font-bold",children:"العنوان"}),e.jsxs("div",{className:"mb-4 flex gap-2",children:[e.jsxs(f,{onChange:n,defaultValue:l.state,name:"state",id:"clients-state",label:"الإمارة",children:[e.jsx("option",{value:"إمارة أبوظبي",children:"إمارة أبوظبي"}),e.jsx("option",{value:"إمارة دبي",children:"إمارة دبي"}),e.jsx("option",{value:"إمارة الشارقة",children:"إمارة الشارقة"}),e.jsx("option",{value:"إمارة عجمان",children:"إمارة عجمان"}),e.jsx("option",{value:"إمارة أم القيوين",children:"إمارة أم القيوين"}),e.jsx("option",{value:"إمارة رأس الخيمة",children:"إمارة رأس الخيمة"}),e.jsx("option",{value:"إمارة الفجيرة",children:"إمارة الفجيرة"})]}),e.jsx(i,{label:"الجهة",name:"area",id:"clients-area",defaultValue:l.area,onChange:n,placeholder:"اختياري"})]}),e.jsxs("div",{className:"mb-4 flex gap-2",children:[e.jsx(i,{label:"رقم/اسم البناية",name:"building",id:"clients-building",defaultValue:l.building,onChange:n,placeholder:"اختياري"}),e.jsx(i,{label:"رقم الشقة",name:"appart",id:"clients-appart",defaultValue:l.appart,onChange:n,placeholder:"اختياري"})]}),e.jsx("div",{children:e.jsx(i,{label:"Map location",name:"location",id:"clients-location",defaultValue:l.location,onChange:n,placeholder:"اختياري"})})]}),e.jsx("div",{className:"mb-8 flex",children:e.jsx(x,{id:"clients-notes",name:"notes",onChange:n,defaultValue:l.notes,label:"ملاحظات",placeholder:"اختياري"})}),e.jsx("div",{children:e.jsx(_,{loading:p,children:a?"تحديث":"إرسال"})})]})})})}export{U as default};
