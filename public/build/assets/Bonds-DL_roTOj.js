import{j as t,r as m,y as d}from"./app-1Xwr3j2F.js";import{f as h}from"./functions-D-pPGhkv.js";import{F as u,r as p,a as g,p as f,D as x,P as b,T as s,V as l,I as j,S as y}from"./Rubik-Regular-DoIgz5Dy.js";import{F as w}from"./file-down-qALVaN8w.js";import{A as v,a as C}from"./Autocomplete-Bdj0VKvL.js";import{C as F}from"./CustomInput-JcP1_YaM.js";import{C as P}from"./CustomSelect-C3pBgQlc.js";import{P as B}from"./PrimaryButton-BJ9KihL6.js";import{B as D}from"./BondsList-Cgc7T8yZ.js";import{E as k}from"./EmptyList-CnKNTB-R.js";import{A as S,I as _}from"./InsideLayout-CDlWnFEd.js";import{C as I}from"./circle-plus-B7zGYJM0.js";import"./createLucideIcon-DTezSfTo.js";import"./x-EB9Axt3V.js";import"./loader-circle-n8Q3zkey.js";import"./Modal-CyOio9ne.js";import"./transition-CizVyvXQ.js";import"./ProofInput-hvpZ10bu.js";import"./Checkbox-B0-XYksC.js";import"./FileInput-C6Wh_e5p.js";import"./SubmitButton-6sFbLoX4.js";import"./phone-ovroPAJH.js";import"./settings-cr5HS0gz.js";u.register({family:"rubik",fonts:[{src:p,fontWeight:"normal"},{src:g,fontWeight:"bold"}]});const r=y.create({page:{flexDirection:"rtl",fontFamily:"rubik",padding:30,backgroundColor:"#f9f9f9",fontSize:13},bondsGrid:{flexDirection:"row-reverse",flexWrap:"wrap",gap:5},bondCard:{width:265,backgroundColor:"rgb(220,220,240)",borderRadius:8,padding:10},title:{fontWeight:"bold",textAlign:"center",marginBottom:14,fontSize:18},smallInfo:{fontWeight:"light",fontSize:11,textAlign:"center"},textRight:{textAlign:"right"},mb:{marginBottom:14},padwhiteBg:{borderRadius:6,padding:3,backgroundColor:"white"},maxh:{height:200,width:"100%"},bondProof:{width:"100%",height:"100%",objectFit:"contain"},postableNo:{borderRadius:999,paddingHorizontal:8,paddingVertical:4,backgroundColor:"beige",color:"brown",textAlign:"center",fontSize:10,fontWeight:"bold",marginBottom:8}}),A=({bonds:e,currentMonth:i})=>t.jsx(x,{children:t.jsxs(b,{size:"A4",style:r.page,children:[t.jsxs(s,{style:r.title,children:["دفعات شهر"," ",i||new Date().getMonth()+1+"-"+new Date().getFullYear()]}),t.jsx(l,{style:[r.bondsGrid],children:e.map(o=>t.jsxs(l,{style:r.bondCard,children:[t.jsx(s,{style:[r.mb,r.smallInfo],children:h(new Date(o.payement_date))}),t.jsx(l,{style:[r.mb,r.maxh],children:o.proof_image?t.jsx(j,{style:r.bondProof,src:o.proof_image}):t.jsx(s,{style:[r.smallInfo,r.padwhiteBg],children:"بدون صورة إثبات"})}),!o.postable&&t.jsx(s,{style:r.postableNo,children:"شيك ضمان"}),t.jsxs(s,{style:r.smallInfo,children:[o.contract.client.full_name," |"," ",o.contract.client.phone]})]},o.payement_date))})]})});function N({bonds:e,currentMonth:i}){const o=async()=>{const n=await f(t.jsx(A,{bonds:e,currentMonth:i})).toBlob(),a=URL.createObjectURL(n);window.open(a,"_blank")};return t.jsxs("button",{onClick:o,className:"relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white",children:[t.jsx(w,{className:"ml-2 mr-1 inline"}),"فتح PDF"]})}function R(){const e=new URLSearchParams(window.location.search),[i,o]=m.useState({month:e.get("month")||"",client_id:e.get("client_id")||"",status:e.get("status")||""}),c=n=>{n.preventDefault(),d.get(route("bonds.index"),{...i})};return t.jsx("div",{className:"mb-5 py-3",children:t.jsxs("form",{onSubmit:c,method:"get",className:"grid grid-cols-2 items-end gap-2 md:grid-cols-4",children:[t.jsx("div",{className:"flex-1",children:t.jsx(v,{placeholder:"إختر زبونا",dataFunction:async n=>C("clients",n),defaultValue:e.get("client_id"),choiceHandler:n=>o(a=>({...a,client_id:n})),listItemAtributeName:"full_name",id:"contract-filter-form",label:"الزبون"})}),t.jsx(F,{type:"month",label:"الشهر",onChange:n=>o(a=>({...a,month:n.target.value})),name:"bonds_month",defaultValue:e.get("month"),id:"bonds-month"}),t.jsxs(P,{onChange:n=>o(a=>({...a,status:n.target.value})),id:"filters-bonds-status",name:"status",defaultValue:i.status||"null",children:[t.jsx("option",{value:"",children:"الحالة"}),t.jsx("option",{value:"coming",children:"القادمة"}),t.jsx("option",{value:"pending",children:"المستحقة"}),t.jsx("option",{value:"late",children:"المتأخرة"}),t.jsx("option",{value:"very_late",children:"المتعترة"})]}),t.jsx(B,{type:"submit",className:"w-24",children:"بحث"})]})})}function nt({bonds:e}){const i=new URLSearchParams(window.location.search);return t.jsx(S,{children:t.jsxs(_,{headerTitle:i.get("month")?`دفعات ${i.get("month")} `:"دفعات هذا الشهر",headerLink:[{label:"إضافة عقد جديد",url:"/contracts/create",icon:I}],children:[t.jsx(R,{}),t.jsx("div",{children:t.jsx(N,{bonds:e,currentMonth:i.get("month")})}),t.jsx("div",{className:"max-w-2xl",children:e.length>0?t.jsx(D,{noActions:!0,bonds:e}):t.jsx(k,{model:"دفعات"})})]})})}export{nt as default};
