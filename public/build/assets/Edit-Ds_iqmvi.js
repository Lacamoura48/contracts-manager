import{j as e,a as s}from"./app-DEwMjOMY.js";import{A as r,I as i,U as o}from"./InsideLayout-d0yjP_K6.js";import l from"./UpdatePasswordForm-D0afZf9s.js";import m from"./UpdateProfileInformationForm-C9rcblFb.js";import{S as d}from"./scroll-BBfkto7v.js";import{c as p}from"./createLucideIcon-Db0_yqu2.js";import"./settings-DGvFIWKJ.js";import"./TextInput-CR-JBrxO.js";import"./InputLabel-B5Moy9nv.js";import"./PrimaryButton-DXBsNTvI.js";import"./transition-BGxXk4sm.js";import"./FileInput-sXVPZqt4.js";import"./Modal-BEoUpYlb.js";import"./index-BYCEkgHo.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=p("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);function L({mustVerifyEmail:a,status:t}){return e.jsx(r,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"الملف الشخصي"}),children:e.jsx(i,{noBack:!0,headerLink:[{label:"سجل الأنشطة",url:route("settings.activities"),icon:d},{label:"المدراء",url:route("profile.index"),icon:o},{label:"شروط و أحكام",url:route("terms.edit"),icon:n}],headerTitle:"الملف الشخصي",children:e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8",children:[e.jsx("div",{className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:e.jsx(m,{mustVerifyEmail:a,status:t,className:"max-w-xl"})}),e.jsx("div",{className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:e.jsx(l,{className:"max-w-xl"})}),e.jsx("div",{children:e.jsx(s,{href:route("logout"),method:"post",as:"button",className:"rounded-lg bg-red-700 px-6 py-2 text-white",children:"تسجيل الخروج"})})]})})})})}export{L as default};