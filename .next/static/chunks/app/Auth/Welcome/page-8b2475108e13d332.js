(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[391],{2986:function(e,t,r){Promise.resolve().then(r.bind(r,9016))},1:function(e,t,r){"use strict";r.r(t),r.d(t,{AuthProvider:function(){return l},useAuth:function(){return s}});var n=r(7437),o=r(2265);let u=(0,o.createContext)(void 0),s=()=>(0,o.useContext)(u),l=e=>{let{children:t}=e,[r,s]=(0,o.useState)(null);return(0,n.jsx)(u.Provider,{value:{user:r,login:e=>{s(e)},logout:()=>{s(null)}},children:t})}},9016:function(e,t,r){"use strict";r.r(t);var n=r(7437),o=r(1);t.default=()=>{let e=(0,o.useAuth)();return(0,n.jsx)("div",{children:null!==e.user?(0,n.jsxs)("h1",{className:"font-mono font-black text-6xl pt-10 mb-4 text-center",children:["Welcome ",e.user.name]}):(0,n.jsx)("h2",{className:"font-mono font-black text-6xl pt-10 mb-4 text-center",children:"Please Login"})})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,c={},i=null,f=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,n)&&!l.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:f,props:c,_owner:s.current}}t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=2986)}),_N_E=e.O()}]);