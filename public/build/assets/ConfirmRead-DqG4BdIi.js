import{W as m,j as e}from"./app-9wsz9jZb.js";import{C as n}from"./CustomInput-DRkgp0I-.js";import{S as d}from"./SubmitButton-CnUVZOom.js";import{a as u}from"./functions-D42VZABQ.js";import"./loader-circle-BgOsaWcg.js";import"./createLucideIcon-DPrxXY7H.js";function b({id:o}){const{data:r,setData:s,post:a,processing:i,errors:l}=m({id_code:"",_method:"PATCH"}),c=t=>{t.preventDefault(),a(route("contracts.read",o))};return e.jsxs("div",{className:"flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-black px-4",children:[e.jsx("img",{className:"mx-auto block w-32",src:"/icons/logo.png",alt:"logo"}),e.jsx("p",{className:"text-center text-2xl font-semibold text-white",children:"لرؤية العقد المرجو إدخال رقم الهوية الخاص بك"}),e.jsxs("form",{onSubmit:c,className:"w-full",children:[e.jsx(n,{placeholder:"رقم الهوية",width:"w-full max-w-lg",name:"id_code",id:"confirm-id_code",value:r.id_code,error:l.id_code,onChange:t=>s("id_code",u(t.target.value))}),e.jsx(d,{loading:i,children:"عرض العقد"})]})]})}export{b as default};