import{j as e,r as o,a as l,y as d}from"./app-3D4PXkdZ.js";import{C as x}from"./CustomInput-DJ1dAlax.js";import{c as i,A as m}from"./AuthenticatedLayout-Bah3AqvK.js";import{P as n}from"./PrimaryButton-DjLpjN-Q.js";import{f as h}from"./functions-DlqVqW7_.js";import{M as u}from"./Modal-CnCFsc5R.js";import{S as f}from"./SecondaryButton-IXIQAfT8.js";import{P as j}from"./phone-Cj3q1fIO.js";import{T as p}from"./trash-CbPzCFcj.js";import{E as g}from"./EmptyList-DYn5rfAQ.js";import{I as y}from"./InsideLayout-OSVjeT-T.js";import{C as b}from"./circle-plus-CSfEdj-A.js";import"./transition-4bW_IdiN.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=i("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function C({value:r,onChange:s,placeholder:a,name:t}){return e.jsx("div",{className:"flex-1",children:e.jsx(x,{defaultValue:r,id:"clients-search",label:"بحث",name:t,onChange:s,placeholder:a,icon:e.jsx(N,{size:24,color:"black"})})})}function k(){const r=new URLSearchParams(window.location.search);return e.jsx("div",{className:"mb-5 py-3",children:e.jsxs("form",{action:"",method:"get",className:"flex items-end gap-2",children:[e.jsx(C,{value:r.get("search"),name:"search",placeholder:"البحث باستخدام الاسم أو رقم التعريف"}),e.jsx(n,{type:"submit",className:"w-24",children:"بحث"})]})})}function P({client:r}){const[s,a]=o.useState(!1);function t(){d.delete(`/clients/${r.id}`)}return e.jsxs("div",{className:"rounded-lg border border-gray-400 bg-gray-100 p-3",children:[e.jsxs("div",{className:"mb-8 flex justify-between",children:[e.jsxs("div",{className:"flex w-1/2 items-center gap-2",children:[e.jsx(w,{size:40,color:"rgb(90,90,90)"}),e.jsxs("div",{children:[e.jsx(l,{href:route("clients.show",r.id),className:"font-bold hover:underline",children:r.full_name}),e.jsxs("p",{className:"text-sm text-gray-400",children:["أضيف يوم"," ",h(new Date(r.created_at))]})]})]}),e.jsxs("a",{href:`tel:${r.phone}`,className:"flex h-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-2 py-1 text-sm font-medium",children:[e.jsx(j,{size:18})," ",r.phone]})]}),e.jsxs("div",{className:"flex justify-end gap-1 rounded-lg px-2",children:[e.jsx(l,{href:`/clients/${r.id}/edit`,className:"flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 lg:w-12",children:e.jsx(v,{color:"white",size:20})}),e.jsx("button",{onClick:()=>a(!0),className:"flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 lg:w-12",children:e.jsx(p,{color:"white",size:20})})]}),e.jsx(u,{show:s,children:e.jsxs("div",{className:"px-8 py-10",children:[e.jsxs("h2",{className:"mb-5 text-2xl font-bold",children:["هل أنت متأكد أنك تريد حذف المستخدم ",r.full_name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(n,{className:"text-xl",onClick:t,children:"نعم"}),e.jsx(f,{className:"text-xl",onClick:()=>a(!1),children:"لا"})]})]})})]})}function c({direction:r,url:s}){return e.jsx(l,{disabled:!!s,href:s,className:`mx-1 flex items-center justify-center rounded-md bg-white px-4 py-2 capitalize ${r?"ltr:-scale-x-100":"rtl:-scale-x-100"} ${!s&&"cursor-not-allowed"} dark:bg-gray-800`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-5 w-5 ${s?"text-gray-200":"text-gray-500"}`,viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})})}function S({data:r}){return e.jsx("div",{className:"flex flex-row-reverse",children:r==null?void 0:r.links.map((s,a)=>a===0?e.jsx(c,{direction:!0,url:s.url},s.label):a===r.links.length-1?e.jsx(c,{url:s.url},s.label):e.jsx(l,{href:s.url,className:"mx-1 hidden transform rounded-md bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-black hover:text-white sm:inline dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-black dark:hover:text-gray-200",children:s.label},s.label))})}function z({clients:r}){var s;return e.jsx(e.Fragment,{children:(s=r==null?void 0:r.data)!=null&&s.length?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",children:r.data.map(a=>e.jsx(P,{client:a},a.id))}),e.jsx("div",{className:"mt-12 flex justify-center",children:e.jsx(S,{data:r})})]}):e.jsx(g,{model:"زبائن"})})}function _({clients:r}){return e.jsx(m,{children:e.jsxs(y,{headerTitle:"الزبناء",headerLink:[{label:"إضافة زبون جديد",url:"/clients/create",icon:b}],children:[e.jsx(k,{}),e.jsx(z,{clients:r})]})})}export{_ as default};
