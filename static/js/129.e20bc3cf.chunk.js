"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[129],{129:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r,i,a=t(885),s=t(168),l=t(444),c=l.default.li(r||(r=(0,s.Z)(["\n  list-style-type: none;\n  .review {\n    &__date {\n      font-size: 14px;\n      opacity: 0.7;\n    }\n    &__text {\n    }\n  }\n"]))),u=t(184),o=function(e){var n=e.review,t=n.content,r=n.updated_at,i=n.author,a=new Date(r);return(0,u.jsxs)(c,{children:[(0,u.jsx)("p",{className:"review__author",children:i}),(0,u.jsx)("span",{className:"review__date",children:a.toLocaleDateString()}),(0,u.jsx)("p",{className:"review__text",children:t})]})},d=t(791),h=t(470),f=t(684),x=l.default.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin: 0;\n  padding: 0;\n\n  max-height: 400px;\n  overflow: scroll;\n"]))),_=function(){var e=(0,h.UO)().movieId,n=(0,d.useState)(null),t=(0,a.Z)(n,2),r=t[0],i=t[1];if((0,d.useEffect)((function(){(0,f.tx)(e).then((function(e){return i(e.results)}))}),[e]),r)return r.length>0?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(x,{children:r.map((function(e){return(0,u.jsx)(o,{review:e},e.id)}))})}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(x,{children:(0,u.jsx)("p",{children:"No reviews!"})})})}}}]);
//# sourceMappingURL=129.e20bc3cf.chunk.js.map