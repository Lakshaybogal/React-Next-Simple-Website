(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{262:function(e,t,n){Promise.resolve().then(n.bind(n,8395))},8395:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var s=n(7437),l=n(2265),c=n(3159),i=n(6820),a=n(1396),r=n.n(a);function m(){let[e,t]=(0,l.useState)({min:0,sec:0}),[n,a]=(0,l.useState)({min:0,sec:0}),[m,x]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let n;return m&&(n=setInterval(()=>{e.sec>0?t(e=>({...e,sec:e.sec-1})):e.min>0?t(e=>({...e,min:e.min-1,sec:59})):(clearInterval(n),x(!1))},1e3)),()=>clearInterval(n)},[e,m]);let o=e=>{if(!m){let{name:t,value:n}=e.target;a(e=>({...e,[t]:parseInt(n,10)}))}};return(0,s.jsxs)("section",{className:"flex justify-center flex-col items-center font-mono",children:[(0,s.jsx)("h1",{className:"text-7xl font-bold pt-2 text-center",children:"Countdown Timer"}),(0,s.jsxs)("div",{className:"flex relative left-5 gap-2",children:[(0,s.jsxs)("h2",{className:"text-7xl font-bold flex justify-center items-center px-10 py-2 border-2 rounded-xl my-10 ",children:[e.min<10?"0".concat(e.min):e.min,":",e.sec<10?"0".concat(e.sec):e.sec]}),(0,s.jsx)("button",{onClick:()=>{a({min:0,sec:0}),t({min:0,sec:0}),x(!1)},className:" text-5xl font-semibold ",children:(0,s.jsx)(i.oAZ,{})})]}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t(n),x(!0)},className:"flex flex-col text-xl items-center",children:[(0,s.jsxs)("div",{className:"relative left-5",children:[(0,s.jsx)("input",{type:"number",name:"min",className:"w-48 text-center text-4xl",value:n.min,onChange:o,disabled:m}),"min"]}),(0,s.jsxs)("div",{className:"relative left-5",children:[(0,s.jsx)("input",{type:"number",name:"sec",className:"w-48 text-center text-4xl",value:n.sec,onChange:o,disabled:m}),"sec"]}),(0,s.jsx)("button",{type:"submit",className:"btn px-3 py-2 rounded-xl font-semibold mt-2",disabled:m,children:"Set Timer"})]}),(0,s.jsx)("h2",{className:"flex justify-center font-medium pt-4",children:(0,s.jsxs)(r(),{rel:"stylesheet",href:"https://github.com/Lakshaybogal",children:[(0,s.jsx)("span",{className:"flex justify-center items-center text-6xl font-normal pb-2",children:(0,s.jsx)(c.NML,{})}),"Github Link"]})})]})}n(2759)},2759:function(){}},function(e){e.O(0,[420,115,438,971,864,744],function(){return e(e.s=262)}),_N_E=e.O()}]);