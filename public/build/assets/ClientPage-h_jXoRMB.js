import{j as e}from"./app-1Xwr3j2F.js";import{f as x}from"./functions-D-pPGhkv.js";import{F as h,r as m,a as j,p,D as f,P as y,V as r,T as l,I as c,S as b}from"./Rubik-Regular-DoIgz5Dy.js";import{F as g}from"./file-down-qALVaN8w.js";import{A as u,I as w,a as N}from"./InsideLayout-CDlWnFEd.js";import{U as _}from"./undo-2-UCcPvyJE.js";import{C as k}from"./circle-plus-B7zGYJM0.js";import{S as B}from"./square-pen-BlZTD_Jb.js";import{S}from"./scroll-Bxdxquyz.js";import{P as v}from"./phone-ovroPAJH.js";import"./createLucideIcon-DTezSfTo.js";import"./x-EB9Axt3V.js";import"./settings-cr5HS0gz.js";h.register({family:"rubik",fonts:[{src:m,fontWeight:"normal"},{src:j,fontWeight:"bold"}]});const s=b.create({page:{flexDirection:"rtl",fontFamily:"rubik",padding:40,backgroundColor:"#f9f9f9"},section:{marginBottom:20,padding:15,borderRadius:5,borderWidth:1,borderColor:"#ccc",backgroundColor:"#fff"},heading:{fontSize:16,marginBottom:10,textAlign:"right",fontFamily:"rubik",color:"#333",fontWeight:"bold"},text:{fontSize:12,textAlign:"right",color:"#444"},label:{fontSize:12,fontWeight:"bold",color:"#000"},value:{fontSize:12,color:"#555"},flexBetween:{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",marginBottom:16,borderBottom:1,borderColor:"#ddd",paddingBottom:8},imageSection:{textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"center",gap:8,marginTop:10},image:{width:200,height:130,marginVertical:10,border:"1px solid #ccc",borderRadius:5,objectFit:"contain"},footer:{fontSize:10,color:"#999",textAlign:"center",marginTop:40,borderTop:"1px solid #ccc",paddingTop:10},notes:{textAlign:"center",fontSize:10},notesTitle:{fontSize:13,textAlign:"center",marginBottom:6}}),D=({client:t,address:o})=>e.jsx(f,{children:e.jsxs(y,{size:"A4",style:s.page,children:[e.jsxs(r,{style:s.section,children:[e.jsxs(l,{style:s.heading,children:[t.full_name," معلومات العميل"]}),e.jsxs(l,{style:s.text,children:["أضيف يوم: ",x(new Date(t.created_at))]}),e.jsxs(l,{style:s.text,children:["رقم الهاتف: ",t.phone]})]}),e.jsxs(r,{style:s.section,children:[e.jsx(l,{style:s.heading,children:"تفاصيل إضافية"}),e.jsxs(r,{style:s.flexBetween,children:[e.jsx(l,{style:s.label,children:"رقم الواتساب"}),e.jsx(l,{style:s.value,children:t.phone2||"غير متوفر"})]}),e.jsxs(r,{style:s.flexBetween,children:[e.jsx(l,{style:s.label,children:"البريد الإلكتروني"}),e.jsx(l,{style:s.value,children:t.email})]}),e.jsxs(r,{style:s.flexBetween,children:[e.jsx(l,{style:s.label,children:"رقم الهوية"}),e.jsx(l,{style:s.value,children:t.id_code})]}),e.jsxs(r,{style:s.flexBetween,children:[e.jsx(l,{style:s.label,children:"اسم الزوجة"}),e.jsx(l,{style:s.value,children:t.wife_name})]}),e.jsxs(r,{style:s.flexBetween,children:[e.jsx(l,{style:s.label,children:"هاتف الزوجة"}),e.jsx(l,{style:s.value,children:t.wife_phone})]}),e.jsxs(r,{style:s.flexBetween,children:[e.jsx(l,{style:s.label,children:"Map location"}),e.jsx(l,{style:s.value,children:t.location})]}),e.jsxs(r,{style:s.flexBetween,children:[e.jsx(l,{style:s.label,children:"العنوان"}),e.jsx(l,{style:s.value,children:o})]})]}),e.jsxs(r,{style:s.section,children:[e.jsx(l,{style:s.heading,children:"صور الهوية (وجه وظهر)"}),e.jsxs(r,{style:s.imageSection,children:[t.id_photo_front?e.jsx(c,{style:s.image,src:t.id_photo_front}):e.jsx(l,{style:s.text,children:"صورة الهوية (وجه) غير متوفرة"}),t.id_photo_back?e.jsx(c,{style:s.image,src:t.id_photo_back}):e.jsx(l,{style:s.text,children:"صورة الهوية (ظهر) غير متوفرة"})]})]}),e.jsx(l,{style:s.notesTitle,children:"ملاحظات"}),e.jsx(l,{style:s.notes,children:t.notes}),e.jsxs(l,{style:s.footer,children:["تم إنشاء هذا الملف بتاريخ ",new Date().toLocaleDateString()]})]})});function C({client:t,address:o}){const i=async()=>{const n=await p(e.jsx(D,{address:o,client:t})).toBlob(),a=URL.createObjectURL(n);window.open(a,"_blank")};return e.jsxs("button",{onClick:i,className:"relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white",children:[e.jsx(g,{className:"ml-2 mr-1 inline"}),"فتح PDF"]})}function E({client:t}){const o=t.state||"",i=t.building||"",d=t.appart||"",n=t.area||"",a=o+"، "+n+" "+i+" "+d;return e.jsx(u,{children:e.jsx(w,{headerTitle:t.full_name,headerLink:[{label:"رجوع إلى قائمة زبناء",url:"/clients",icon:_},{label:"إنشاء عقد",url:`/contracts/create?client_id=${t.id}`,icon:k},{label:"تعديل على الزبون",url:route("clients.edit",t.id),icon:B},{label:"عقود الزبون",url:"/contracts?client_id="+t.id,icon:S},{label:"دفعات الزبون",url:"/bonds?client_id="+t.id,icon:N}],children:e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("p",{className:"mb-4 text-center text-sm text-gray-400 md:text-start",children:["أضيف يوم"," ",x(new Date(t.created_at))]}),e.jsxs("a",{href:"tel:"+t.phone,className:"mx-auto flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 font-bold md:mx-0",children:[e.jsx(v,{size:20})," ",t.phone]}),e.jsx("div",{className:"mt-6 flex justify-center md:justify-normal",children:e.jsx(C,{client:t,address:a})}),e.jsx("hr",{className:"my-5"}),e.jsxs("table",{className:"mx-auto max-w-full md:mx-0",children:[e.jsxs("tr",{children:[e.jsx("th",{className:"w-1/2 px-2 py-4 text-right",children:"رقم ثانوي"}),e.jsx("td",{className:"w-1/2 px-2 text-left",children:t.phone2})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"w-1/2 px-2 py-4 text-right",children:"البريد الإلكتروني"}),e.jsx("td",{className:"w-1/2 px-2 text-left",children:t.email})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"w-1/2 px-2 py-4 text-right",children:"رقم الهوية"}),e.jsx("td",{className:"w-1/2 px-2 text-left",children:t.id_code})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"w-1/2 px-2 py-4 text-right",children:"اسم الزوجة"}),e.jsx("td",{className:"w-1/2 px-2 text-left",children:t.wife_name})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"w-1/2 px-2 py-4 text-right",children:"هاتف الزوجة"}),e.jsx("td",{className:"w-1/2 px-2 text-left",children:t.wife_phone})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"w-1/2 px-2 py-4 text-right",children:"العنوان"}),e.jsx("td",{className:"w-1/2 px-2 text-left",children:a})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"w-1/2 px-2 py-4 text-right",children:"ملاحظات"}),e.jsx("td",{className:"w-1/2 px-2 text-left",children:t.notes})]})]}),e.jsxs("h2",{className:"my-8 text-center text-lg font-bold underline md:text-start",children:["صورة الهوية (وجه وظهر)"," "]}),e.jsx("img",{className:"mb-4 block rounded-xl",src:t.id_photo_front,alt:""}),e.jsx("img",{className:"mb-4 block rounded-xl",src:t.id_photo_back,alt:""})]})})})}export{E as default};
