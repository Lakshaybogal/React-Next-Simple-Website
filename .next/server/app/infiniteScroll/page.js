(()=>{var e={};e.id=602,e.ids=[602],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9311:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>d,originalPathname:()=>x,pages:()=>p,routeModule:()=>h,tree:()=>u});var r=s(3137),i=s(4647),n=s(4183),o=s.n(n),a=s(1775),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);s.d(t,l);let c=r.AppPageRouteModule,u=["",{children:["infiniteScroll",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5344)),"/Users/lakshaybogal/Desktop/Coding/WebDev/Next.js/Hooks/app/infiniteScroll/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,7574)),"/Users/lakshaybogal/Desktop/Coding/WebDev/Next.js/Hooks/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"]}],p=["/Users/lakshaybogal/Desktop/Coding/WebDev/Next.js/Hooks/app/infiniteScroll/page.tsx"],x="/infiniteScroll/page",d={require:s,loadChunk:()=>Promise.resolve()},h=new c({definition:{kind:i.x.APP_PAGE,page:"/infiniteScroll/page",pathname:"/infiniteScroll",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},3707:(e,t,s)=>{Promise.resolve().then(s.bind(s,5730))},5730:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(80),i=s(9885);s(4434);var n=s(3258),o=s(2975),a=s.n(o),l=s(3500),c=s(1440),u=s.n(c);let p=()=>{let[e,t]=(0,i.useState)([]),[s,o]=(0,i.useState)(1),c=()=>{n.Z.get(`https://api.unsplash.com/photos/?client_id=LVYZcVNB7n6y11iemN9L_0tLFnHK3WLH6SlSGBDIIyo&page=${s}&per_page=10`).then(r=>{t([...e,...r.data]),o(s+1)}).catch(e=>{console.error("Error fetching images:",e)})};return(0,i.useEffect)(()=>{c()},[]),(0,r.jsxs)("section",{className:"flex flex-col justify-center",children:[r.jsx("h1",{className:"font-mono lg:text-6xl font-bold flex justify-center ",children:"Infinite Scrolling Gallery"}),r.jsx(a(),{dataLength:e.length,next:c,hasMore:!0,loader:r.jsx("h4",{children:"Loading..."}),children:r.jsx("div",{className:"gallery ",children:e.map(e=>(0,r.jsxs)("div",{className:"flex flex-col justify-center p-2 ",children:[r.jsx("img",{src:e.urls.regular,alt:e.alt_description},e.id),r.jsx("h3",{className:"md:text-3xl",children:e.alt_description})]}))})}),r.jsx("h2",{className:"flex justify-center font-medium",children:(0,r.jsxs)(u(),{rel:"stylesheet",href:"https://github.com/Lakshaybogal",children:[r.jsx("span",{className:"flex justify-center items-center text-5xl font-normal pb-2",children:r.jsx(l.NML,{})}),"Github Link"]})})]})}},5344:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>l});var r=s(7536);let i=(0,r.createProxy)(String.raw`/Users/lakshaybogal/Desktop/Coding/WebDev/Next.js/Hooks/app/infiniteScroll/page.tsx`),{__esModule:n,$$typeof:o}=i,a=i.default,l=a},4434:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[880,500,440,497,524],()=>s(9311));module.exports=r})();