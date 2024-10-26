import{r as i,j as t,y as l}from"./app-BS4AV5Fs.js";import{A as m,a as c}from"./Autocomplete-CGxaRgxF.js";import{C as d}from"./CustomInput-COwHvWKG.js";import{C as u}from"./CustomSelect-cMmcCRkc.js";import{P as p}from"./PrimaryButton-CLgX4s01.js";import{B as h}from"./BondsList-B7bN5J3r.js";import{E as x}from"./EmptyList-bTnv93kF.js";import{A as f}from"./AuthenticatedLayout-Bl8Qtks8.js";import{I as g}from"./InsideLayout-BeIP_V8v.js";import{C as j}from"./circle-plus-irCCrYex.js";import"./loader-circle-6lWdPofZ.js";import"./functions--JcqmtFZ.js";import"./Modal-CVQc7EmX.js";import"./transition-C-SZhtvC.js";import"./ProofInput-CTL0eVr7.js";import"./Checkbox-BJ1qAPju.js";import"./SubmitButton-BdYV-IQ7.js";function b(){const s=new URLSearchParams(window.location.search),[a,r]=i.useState({month:s.get("month")||"",client_id:s.get("client_id")||"",status:s.get("status")||""}),n=e=>{e.preventDefault(),l.get(route("bonds.index"),{...a})};return t.jsx("div",{className:"mb-5 py-3",children:t.jsxs("form",{onSubmit:n,method:"get",className:"grid grid-cols-2 items-end gap-2 md:grid-cols-4",children:[t.jsx("div",{className:"flex-1",children:t.jsx(m,{placeholder:"إختر زبونا",dataFunction:async e=>c("clients",e),defaultValue:s.get("client_id"),choiceHandler:e=>r(o=>({...o,client_id:e})),listItemAtributeName:"full_name",id:"contract-filter-form",label:"الزبون"})}),t.jsx(d,{type:"month",label:"الشهر",onChange:e=>r(o=>({...o,month:e.target.value})),name:"bonds_month",defaultValue:s.get("month"),id:"bonds-month"}),t.jsxs(u,{onChange:e=>r(o=>({...o,status:e.target.value})),id:"filters-bonds-status",name:"status",defaultValue:a.status||"null",children:[t.jsx("option",{value:"",children:"الحالة"}),t.jsx("option",{value:"coming",children:"القادمة"}),t.jsx("option",{value:"pending",children:"المستحقة"}),t.jsx("option",{value:"late",children:"المتأخرة"}),t.jsx("option",{value:"very_late",children:"المتعترة"})]}),t.jsx(p,{type:"submit",className:"w-24",children:"بحث"})]})})}function U({bonds:s}){const a=new URLSearchParams(window.location.search);return t.jsx(f,{children:t.jsxs(g,{headerTitle:a.get("month")?`دفعات ${a.get("month")} `:"دفعات هذا الشهر",headerLink:[{label:"إضافة عقد جديد",url:"/contracts/create",icon:j}],children:[t.jsx(b,{}),t.jsx("div",{className:"max-w-2xl",children:s.data.length>0?t.jsx(h,{bonds:s.data}):t.jsx(x,{model:"عقود"})})]})})}export{U as default};
