import{r as d,j as a}from"./app-B8texML4.js";import{C as r}from"./Checkbox-mJ4v8pzE.js";import{C as m}from"./CustomInput-D1UIDyAT.js";import{F as u}from"./FileInput-qm50XRI7.js";function j({number:t,changeHandler:c,proof:e}){const[l,n]=d.useState({proof_image:null,id:t,title:(e==null?void 0:e.title)||"",postable:(e==null?void 0:e.postable)!==void 0?e==null?void 0:e.postable:!0,payement_date:(e==null?void 0:e.payement_date)||null});return d.useEffect(()=>{c(l)},[l]),a.jsxs("div",{className:"flex flex-col gap-2 rounded-2xl border-2 border-slate-200 px-2 py-3",children:[a.jsx(u,{name:`proof${t+1}`,id:`contract-proof-${t+1}`,label:`إثبات الدفعة ${t||""}`,imageSelected:l.proof_image,defaultImage:e==null?void 0:e.proof_image,onChange:s=>n(i=>({...i,proof_image:s.target.files[0]}))},t),a.jsx(m,{placeholder:"ملاحظة",defaultValue:l.title,onChange:s=>n(i=>({...i,title:s.target.value}))}),a.jsxs("div",{children:[a.jsx("label",{className:"ml-2",htmlFor:`proofCheck${t}`,children:"قابل للدفع"}),a.jsx(r,{onChange:s=>n(i=>({...i,postable:s.target.checked})),id:`proofCheck${t}`,defaultChecked:l.postable})]})]})}export{j as P};
