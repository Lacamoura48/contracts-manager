import{j as c,r as e}from"./app-3D4PXkdZ.js";function x({message:t,className:s="",...n}){return t?c.jsx("p",{...n,className:"text-sm text-red-600 "+s,children:t}):null}const p=e.forwardRef(function({type:s="text",className:n="",isFocused:o=!1,...a},f){const u=e.useRef(null);return e.useImperativeHandle(f,()=>({focus:()=>{var r;return(r=u.current)==null?void 0:r.focus()}})),e.useEffect(()=>{var r;o&&((r=u.current)==null||r.focus())},[o]),c.jsx("input",{...a,type:s,className:"rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black "+n,ref:u})});export{x as I,p as T};