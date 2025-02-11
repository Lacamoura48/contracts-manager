import{r as c,j as e,y as m,a as j}from"./app-BW51sJCY.js";import{M as b,C as v}from"./ContractPDF-DtYg_Iw1.js";import{B as y}from"./BondsList-CingNtwC.js";import{S as N,P as w}from"./index-B3i-53mV.js";import{M as C}from"./Modal-B9FE2C6z.js";import{P as n}from"./PrimaryButton-CF90Hi4_.js";import{F as S}from"./FileInput-Ca9VPC_B.js";import{f as k}from"./functions-DuHHseie.js";import"./createLucideIcon-Daxuz9wX.js";import"./Rubik-Regular-r9cpkZXg.js";import"./settings-BvninLX3.js";import"./x-noody4f_.js";import"./ProofInput-Czg-K-U5.js";import"./Checkbox--xYTwl9I.js";import"./CustomInput-IfO7B0s3.js";import"./SubmitButton-BR-rPeqo.js";import"./loader-circle-CyMCh7el.js";import"./transition-Ds8Qg9uz.js";function P({show:s,signature:a,id:o,closeHandler:l}){const t=c.useRef({}),[x,i]=c.useState(),[d,u]=c.useState(),p=()=>{t.current.clear()},f=r=>{m.post(route("contracts.sign",o),{signature:r,_method:"patch"},{onSuccess:()=>i(!0)})},h=()=>{if(t.current.isEmpty())return;const r=t.current.getTrimmedCanvas().toDataURL("image/png");f(r)};function g(r){r.preventDefault(),m.post(route("contracts.signProof",o),{signature_proof:d,_method:"PATCH"},{onSuccess:l})}return e.jsx(C,{show:s,children:a||x?e.jsxs("div",{className:"flex flex-col items-center py-4",children:[e.jsxs("h2",{className:"text-black",children:[e.jsx("span",{className:"font-bold text-gray-600",children:"الخطوة الثانية:"})," ","يرجى تحميل صورة هويتك، كدليل على أنك مالك التوقيع"]}),e.jsxs("form",{className:"flex w-full flex-col gap-4 px-5 py-4",onSubmit:g,children:[e.jsx(S,{name:"signature_proof",label:"صورة بطاقة الهوية",imageSelected:d,onChange:r=>u(r.target.files[0]),id:"signature_proof_input"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{children:"إرسال"}),e.jsx(n,{onClick:l,type:"button",children:"رجوع"})]})]})]}):e.jsxs("div",{className:"flex flex-col items-center py-4",children:[e.jsxs("h2",{className:"text-black",children:[e.jsx("span",{className:"font-bold text-gray-600",children:"الخطوة الأولى:"})," ","الرجاء التوقيع في المنطقة أدناه"]}),e.jsx(N,{ref:t,penColor:"black",canvasProps:{width:400,height:250,className:"sigCanvas border-2 border-gray-600 rounded-xl mb-3"}}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{onClick:h,children:"تأكيد"}),e.jsx(n,{onClick:p,children:"إعادة المحاولة"}),e.jsx(n,{onClick:l,children:"رجوع"})]})]})})}function K({contract:s,auth:a,terms:o}){const[l,t]=c.useState(!1),x=s.bonds.filter(i=>i.status==="paid"||i.status==="posted");return e.jsxs("div",{className:"flex h-screen flex-col justify-center px-8 py-10 text-center",children:[e.jsx("h1",{className:"text-2xl font-bold md:text-3xl",children:`عقد خاص ب${s.client.full_name}`}),e.jsxs("p",{className:"mb-4 text-center text-sm text-gray-400",children:["أنشئ العقد يوم"," ",k(new Date(s.created_at))]}),e.jsxs("div",{className:"mx-auto mb-4 flex w-full max-w-xl gap-4",children:[e.jsxs("div",{className:"w-full rounded-2xl bg-gray-200 px-4 py-6",children:[e.jsx("h3",{children:"القيمة الإجمالية"}),e.jsx("p",{className:"mt-2 rounded-full bg-white px-2 py-1 text-xl font-bold",children:parseFloat(s.bonds_sum_amount).toFixed(2)})]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-200 px-4 py-6",children:[e.jsx("h3",{children:"الدفعات المدفوعة"}),e.jsxs("p",{className:"mt-2 rounded-full bg-white px-2 py-1 text-xl font-bold text-green-600",children:[x.length,e.jsxs("span",{className:"font-normal text-black",children:["/",s.bonds.length]})]})]})]}),e.jsx("div",{className:"mb-3 w-full max-w-xl flex-1 self-center overflow-y-scroll rounded-2xl border bg-gray-200 px-2",children:e.jsx(y,{noActions:!0,bonds:s.bonds})}),e.jsxs("div",{className:"mt-auto flex flex-col items-center gap-4",children:[a.user&&e.jsx(e.Fragment,{children:e.jsxs(j,{href:route("contracts.send",s.id),className:"relative top-1 w-full max-w-xl rounded-xl bg-gray-200 py-3 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white",children:[e.jsx(b,{className:"ml-2 inline"}),"البعث للزبون"]})}),e.jsx(v,{terms:o,auth:a,contract:s}),!a.user&&!s.signature_proof&&e.jsx(e.Fragment,{children:e.jsxs("button",{onClick:()=>t(!0),className:"relative top-1 w-full max-w-xl rounded-xl border border-black bg-black py-3 pl-4 pr-1 text-white transition-colors duration-500 hover:bg-gray-800 hover:text-white",children:[e.jsx(w,{className:"ml-2 inline"}),"توقيع العقد"]})}),e.jsx(P,{signature:s.signature,signatureProof:s.signature_proof,show:l,id:s.id,closeHandler:()=>t(!1)})]})]})}export{K as default};
