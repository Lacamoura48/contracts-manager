import{j as e}from"./app-DEwMjOMY.js";import{A as t,I as o}from"./InsideLayout-d0yjP_K6.js";import{i as s}from"./functions-FzV0y7IQ.js";import{N as d}from"./notebook-TtFix4-w.js";import"./createLucideIcon-Db0_yqu2.js";import"./settings-DGvFIWKJ.js";function c({activities:i}){return e.jsx(t,{children:e.jsx(o,{headerLink:[{label:"عودة للملف الشخصي",url:route("profile.edit"),icon:d}],headerTitle:"سجل الأنشطة",children:e.jsx("div",{children:i.map(r=>e.jsxs("div",{className:"mb-3 rounded-xl border border-gray-300 px-2 py-2",children:[e.jsx("p",{className:"text-xs text-gray-600",children:s(r.created_at)}),e.jsx("p",{children:r.description})]},r.id))})})})}export{c as default};