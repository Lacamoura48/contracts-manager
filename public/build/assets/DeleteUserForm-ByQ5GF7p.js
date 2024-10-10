import{j as e,r as c,W as w}from"./app-BgkO7Lrd.js";import{T as g,I as j}from"./TextInput-BTBX9Q20.js";import{I as N}from"./InputLabel-BtEHWCWE.js";import{M as b,S as D}from"./SecondaryButton-NWPH0qle.js";import"./transition-B08rOrVX.js";function d({className:o="",disabled:s,children:t,...r}){return e.jsx("button",{...r,className:`inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 ${s&&"opacity-25"} `+o,disabled:s,children:t})}function E({className:o=""}){const[s,t]=c.useState(!1),r=c.useRef(),{data:i,setData:u,delete:m,processing:p,reset:l,errors:x,clearErrors:f}=w({password:""}),y=()=>{t(!0)},h=n=>{n.preventDefault(),m(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>a(),onError:()=>r.current.focus(),onFinish:()=>l()})},a=()=>{t(!1),f(),l()};return e.jsxs("section",{className:`space-y-6 ${o}`,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsx(d,{onClick:y,children:"Delete Account"}),e.jsx(b,{show:s,onClose:a,children:e.jsxs("form",{onSubmit:h,className:"p-6",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),e.jsxs("div",{className:"mt-6",children:[e.jsx(N,{htmlFor:"password",value:"Password",className:"sr-only"}),e.jsx(g,{id:"password",type:"password",name:"password",ref:r,value:i.password,onChange:n=>u("password",n.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e.jsx(j,{message:x.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(D,{onClick:a,children:"Cancel"}),e.jsx(d,{className:"ms-3",disabled:p,children:"Delete Account"})]})]})})]})}export{E as default};
