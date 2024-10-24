import{r as n,j as e,a as c}from"./app-CSSfp5Ar.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=(...r)=>r.filter((t,a,s)=>!!t&&s.indexOf(t)===a).join(" ");/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=n.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:f,...p},g)=>n.createElement("svg",{ref:g,...w,width:t,height:t,stroke:r,strokeWidth:s?Number(a)*24/Number(t):a,className:m("lucide",o),...p},[...f.map(([b,k])=>n.createElement(b,k)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(r,t)=>{const a=n.forwardRef(({className:s,...o},l)=>n.createElement(y,{ref:l,iconNode:t,className:m(`lucide-${j(r)}`,s),...o}));return a.displayName=`${r}`,a};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=i("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=i("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=i("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function d({showHandler:r,link:t,label:a,subLink:s,icon:o}){const l=route().current(t);return e.jsxs(c,{onClick:r,className:`${l?"bg-primary text-secondary":"bg-secondary text-primary hover:bg-muted"} ${s?"py-1 pl-6 pr-2":"px-2 py-2 font-medium"} group mb-2 flex w-full items-center gap-3 rounded-md text-sm text-white`,href:route(t),children:[e.jsx("span",{className:`${l?"h-4":"h-1"} w-1 rounded-full bg-white transition-all group-hover:h-4`}),o,a]})}function $({open:r,openHandler:t}){const[a,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:"bg-primary z-20 flex h-16 w-full items-center gap-2 bg-black pl-4 md:hidden",children:e.jsx("img",{className:"mx-auto block w-20",src:"/icons/logo.png",alt:"logo"})}),e.jsxs("aside",{className:`translate-transform fixed right-0 top-0 z-50 hidden h-screen w-full bg-black px-2 duration-500 md:block md:w-[15rem] ${a?"translate-x-0":"translate-x-full"} pt-6 ${r?"sm:translate-x-0":"sm:-translate-x-block"}`,children:[e.jsx("button",{onClick:t,className:`absolute top-16 hidden h-9 w-9 items-center justify-center rounded-full bg-black shadow-lg transition-all duration-500 sm:flex ${r?"-left-4 rotate-0":"-left-10 rotate-180"}`,children:e.jsx(v,{color:"white",size:25})}),e.jsxs("div",{className:`flex h-[calc(100vh-2rem)] flex-col transition-opacity duration-500 ${r?"opacity-100 delay-300":"opacity-0"}`,children:[e.jsx("a",{href:"/dashboard",children:e.jsx("img",{width:120,height:120,className:"mx-auto mb-8 block",src:"/icons/logo.png",alt:"carlock logo"})}),e.jsxs("div",{className:"relative top-3 flex flex-col",children:[e.jsx(d,{showHandler:()=>s(!1),link:"dashboard",label:"الرئيسية",icon:e.jsx(h,{size:22})}),e.jsx(d,{showHandler:()=>s(!1),link:"clients.index",label:"الزبناء",icon:e.jsx(x,{size:22})}),e.jsx(d,{showHandler:()=>s(!1),link:"contracts.index",label:"العقود",icon:e.jsx(u,{size:22})})]}),e.jsx("p",{className:"mx-auto mt-auto pb-5 text-gray-600",children:"0.0.1"})]})]}),e.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-[30] flex h-20 flex-row-reverse items-center bg-black p-1 md:hidden",children:[e.jsx(c,{className:`${route().current("dashboard")&&"rounded-md bg-white"} flex h-full flex-1 items-center justify-center p-5`,href:"/dashboard",children:e.jsx(h,{size:25,color:route().current("dashboard")?"black":"white"})}),e.jsx(c,{className:`${route().current("clients")&&"rounded-md bg-white"} flex h-full flex-1 items-center justify-center p-5`,href:"/clients",children:e.jsx(x,{size:25,color:route().current("clients")?"black":"white"})}),e.jsx(c,{className:`${route().current("contracts")&&"rounded-md bg-white"} flex h-full flex-1 items-center justify-center p-5`,href:"/contracts",children:e.jsx(u,{size:25,color:route().current("contracts")?"black":"white"})}),e.jsx(c,{className:`${route().current("settings")&&"rounded-md bg-white"} flex h-full flex-1 items-center justify-center p-5`,href:"#",children:e.jsx(N,{size:25,color:route().current("settings")?"black":"white"})})]})]})}function C({children:r}){const[t,a]=n.useState(!0);return e.jsxs("div",{className:`grid transition-all duration-500 ${t?"md:grid-cols-[15rem_1fr]":"md:grid-cols-[0rem_1fr]"} grid-cols-none`,children:[e.jsx($,{open:t,openHandler:()=>a(!t)}),e.jsx("div",{}),e.jsx("main",{children:r})]})}export{C as A,N as S,i as c};
