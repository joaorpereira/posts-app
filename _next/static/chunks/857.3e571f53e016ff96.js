"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{3857:function(r,n,e){e.r(n),e.d(n,{default:function(){return h},getStaticPaths:function(){return g},getStaticProps:function(){return p}});var t=e(29),a=e(7794),u=e.n(a),i=e(8527),o=e(1664),c=e.n(o),s=e(1163),l=e(8767),d=e(1169),f=e(5893);function h(){var r=(0,s.useRouter)().query.id,n=(0,l.useQuery)(["author",r],(function(){return(0,d.jS)(r)}),{enabled:Boolean(r)}),e=n.data,t=n.status;return"error"===t?(0,f.jsx)(f.Fragment,{children:"Something went wrong.."}):"loading"===t?(0,f.jsx)(f.Fragment,{children:"loading..."}):(0,f.jsx)(i.xv,{fontSize:"sm",fontWeight:"bold",children:e?(0,f.jsx)(c(),{href:"mailto:".concat(e.email),passHref:!0,children:(0,f.jsxs)(i.rU,{color:"blue.700",textDecoration:"underline",isExternal:!0,children:["Author: ",e.name]})}):(0,f.jsx)(f.Fragment,{children:"loading..."})})}var p=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=null===(e=n.params)||void 0===e?void 0:e.id,a=new l.QueryClient,r.next=4,a.prefetchQuery(["author",t],(function(){return(0,d.jS)(t)}));case 4:return r.abrupt("return",{props:{dehydratedState:(0,l.dehydrate)(a)}});case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),g=function(){var r=(0,t.Z)(u().mark((function r(){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",{paths:[],fallback:"blocking"});case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()}}]);