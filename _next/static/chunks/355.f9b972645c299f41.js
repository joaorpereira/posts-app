"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[355],{9355:function(r,n,e){e.r(n),e.d(n,{default:function(){return l},getStaticPaths:function(){return p},getStaticProps:function(){return f}});var t=e(29),a=e(7794),i=e.n(a),o=e(8527),u=e(1163),s=e(8767),c=e(1169),d=e(5893);function l(){var r=(0,u.useRouter)().query.id,n=(0,s.useQuery)(["comments",{id:r}],(function(){return(0,c.Vo)(r)}),{enabled:Boolean(r)}),e=n.data,t=n.status;return"error"===t?(0,d.jsx)(d.Fragment,{children:"Something went wrong.."}):"loading"===t?(0,d.jsx)(d.Fragment,{children:"loading..."}):(0,d.jsxs)(o.Kq,{spacing:6,children:[(0,d.jsx)(o.X6,{as:"h2",size:"md",children:"Comments"}),(0,d.jsx)(o.Kq,{spacing:6,children:e?e.map((function(r){return(0,d.jsxs)(o.Kq,{spacing:2,borderWidth:1,padding:2,paddingLeft:4,borderLeftWidth:6,borderLeftColor:"blue.500",backgroundColor:"gray.50",borderRadius:"lg",boxShadow:"sm",children:[(0,d.jsx)(o.xv,{fontSize:"sm",children:r.body}),(0,d.jsxs)(o.xv,{fontSize:"xs",color:"gray.700",children:["- ",r.email.split("@")[0]]})]},r.id)})):(0,d.jsx)(d.Fragment,{children:"loading..."})})]})}var f=function(){var r=(0,t.Z)(i().mark((function r(n){var e,t,a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=null===(e=n.params)||void 0===e?void 0:e.id,a=new s.QueryClient,r.next=4,a.prefetchQuery(["comments",t],(function(){return(0,c.Vo)(t)}));case 4:return r.abrupt("return",{props:{dehydratedState:(0,s.dehydrate)(a)}});case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",{paths:[],fallback:"blocking"});case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()}}]);