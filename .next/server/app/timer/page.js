(()=>{var e={};e.id=498,e.ids=[498],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1437:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>x});var n=s(3137),r=s(4647),a=s(4183),i=s.n(a),l=s(1775),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=n.AppPageRouteModule,x=["",{children:["timer",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9665)),"/Users/lakshaybogal/Desktop/Coding/WebDev/Next.js/Hooks/app/timer/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,7574)),"/Users/lakshaybogal/Desktop/Coding/WebDev/Next.js/Hooks/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/lakshaybogal/Desktop/Coding/WebDev/Next.js/Hooks/app/timer/page.tsx"],m="/timer/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new c({definition:{kind:r.x.APP_PAGE,page:"/timer/page",pathname:"/timer",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:x}})},5620:(e,t,s)=>{Promise.resolve().then(s.bind(s,6894))},6894:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var n=s(80),r=s(9885),a=s(3500),i=s(2695),l=s(1440),o=s.n(l);function c(){let[e,t]=(0,r.useState)({min:0,sec:0}),[s,l]=(0,r.useState)({min:0,sec:0}),[c,x]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let s;return c&&(s=setInterval(()=>{e.sec>0?t(e=>({...e,sec:e.sec-1})):e.min>0?t(e=>({...e,min:e.min-1,sec:59})):(clearInterval(s),x(!1))},1e3)),()=>clearInterval(s)},[e,c]);let d=e=>{if(!c){let{name:t,value:s}=e.target;l(e=>({...e,[t]:parseInt(s,10)}))}};return(0,n.jsxs)("section",{className:"flex justify-center flex-col items-center font-mono",children:[n.jsx("h1",{className:"text-7xl font-bold pt-2 text-center",children:"Countdown Timer"}),(0,n.jsxs)("div",{className:"flex relative left-5 gap-2",children:[(0,n.jsxs)("h2",{className:"text-7xl font-bold flex justify-center items-center px-10 py-2 border-2 rounded-xl my-10 ",children:[e.min<10?`0${e.min}`:e.min,":",e.sec<10?`0${e.sec}`:e.sec]}),n.jsx("button",{onClick:()=>{l({min:0,sec:0}),t({min:0,sec:0}),x(!1)},className:" text-5xl font-semibold ",children:n.jsx(i.oAZ,{})})]}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t(s),x(!0)},className:"flex flex-col text-xl items-center",children:[(0,n.jsxs)("div",{className:"relative left-5",children:[n.jsx("input",{type:"number",name:"min",className:"w-48 text-center text-4xl",value:s.min,onChange:d,disabled:c}),"min"]}),(0,n.jsxs)("div",{className:"relative left-5",children:[n.jsx("input",{type:"number",name:"sec",className:"w-48 text-center text-4xl",value:s.sec,onChange:d,disabled:c}),"sec"]}),n.jsx("button",{type:"submit",className:"btn px-3 py-2 rounded-xl font-semibold mt-2",disabled:c,children:"Set Timer"})]}),n.jsx("h2",{className:"flex justify-center font-medium pt-4",children:(0,n.jsxs)(o(),{rel:"stylesheet",href:"https://github.com/Lakshaybogal",children:[n.jsx("span",{className:"flex justify-center items-center text-6xl font-normal pb-2",children:n.jsx(a.NML,{})}),"Github Link"]})})]})}s(2891)},9665:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});var n=s(7536);let r=(0,n.createProxy)(String.raw`/Users/lakshaybogal/Desktop/Coding/WebDev/Next.js/Hooks/app/timer/page.tsx`),{__esModule:a,$$typeof:i}=r,l=r.default,o=l},2891:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[880,500,440,695,524],()=>s(1437));module.exports=n})();