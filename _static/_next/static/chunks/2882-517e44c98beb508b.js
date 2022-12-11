"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2882],{2882:function(n,t,e){e.d(t,{Z:function(){return Nn}});var r=e(5666),i=e.n(r),o=e(5893),a=e(7294),u=e(1163),l=e(2390),c=e(2327),s=e(3750),f=e(1649),p=e(6966),d=e(7108),x=e(534),v=e(4484),h=e(9583),g=e(1537),m=e(5472);function b(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function w(){var n=b(["\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    margin: 52px 0 24px;\n    position: relative;\n    svg {\n        position: absolute;\n        left: 20px;\n        top: 24px;\n        bottom: 14px;\n        font-size: 16px;\n        color: white;\n        z-index: 10;\n    }\n    \n"]);return w=function(){return n},n}function y(){var n=b(["\n    padding: 16px 16px;\n    box-sizing: border-box;\n    border: none;\n    font-size: 14px;\n    line-height: 24px;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 32px;\n    color: white;\n    &:focus {\n        outline: none;\n    }\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    text-indent: 1px;\n    text-overflow: '';\n\n    ::-webkit-input-placeholder {\n        color: #a9a9a9;\n    }\n    \n    :-ms-input-placeholder {\n        color: #a9a9a9;\n    }\n    \n    ::placeholder {\n        color: #a9a9a9;\n    }\n"]);return y=function(){return n},n}function j(){var n=b(["\n    font-size: 14px;\n    line-height: 14px;\n    margin: 8px 0 0;\n    color: white;\n    position: absolute;\n    top: -32px;\n    right: 0;\n"]);return j=function(){return n},n}function P(){var n=b(["\n    color: red;\n    font-size: 12px;\n    margin: 0 24px 0;\n    white-space: pre;\n"]);return P=function(){return n},n}var Z,k=d.ZP.div(w()),O=(d.ZP.select(y()),d.ZP.label(j())),z=d.ZP.p(P());function S(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function C(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){S(n,t,e[t])}))}return n}var _={control:function(n){return C({},n,(S(Z={backgroundColor:"rgba(255, 255, 255, 0.1)",color:"white",border:"none",padding:"16px 16px",boxSizing:"border-box"},"border","none"),S(Z,"fontSize","14px"),S(Z,"lineHeight","24px"),S(Z,"background","rgba(255, 255, 255, 0.1)"),S(Z,"borderRadius","32px"),S(Z,"color","white"),S(Z,"textIndent","1px"),S(Z,":focus",{outline:"none"}),Z))},option:function(n){return C({},n,{fontSize:"14px"})},placeholder:function(n){return C({},n,{color:"white"})},singleValue:function(n){return C({},n,{color:"white"})},multiValue:function(n,t){t.data;return C({},n,{backgroundColor:"transparent"})},multiValueLabel:function(n){return C({},n,{color:"white"})},multiValueRemove:function(n){return C({},n,{color:"black",svg:{position:"unset"},":hover":{backgroundColor:"transparent",color:"white"}})}},E=(0,a.forwardRef)((function(n,t){var e;return(0,o.jsxs)(k,{children:[(0,o.jsx)(O,{children:n.label}),(0,o.jsx)(g.ZP,{ref:t,defaultValue:n.value,isMulti:n.isMultiple,options:n.options,onChange:function(t){return t?n.onChange(t):null},styles:_,placeholder:null===(e=n.options[0])||void 0===e?void 0:e.label,isSearchable:!1,components:{IndicatorSeparator:function(){return null},DropdownIndicator:function(){return null},IndicatorsContainer:function(){return null}}}),(0,o.jsx)(h.qL$,{}),!!n.error&&(0,o.jsx)(z,{children:n.error})]})}));function F(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function R(){var n=F(["\n\tposition: relative;\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tjustify-content: flex-start;\n\tgap: 60px;\n\tbox-sizing: border-box;\n\tpadding: 0 0px;\n"]);return R=function(){return n},n}function q(){var n=F(["\n\twidth: 100%;\n\tborder-radius: 32px;\n\toverflow: hidden;\n\tborder-bottom: none;\n\theight: 52px;\n\tmargin: 0px 0 24px;\n\tinput {\n\t\tpadding: 8px 16px !important;\n\t\theight: 32px;\n\t\tfont-size: 20px !important;\n\t}\n"]);return q=function(){return n},n}function M(){var n=F(["\n\tbackground: #3b4b7c\n"]);return M=function(){return n},n}function T(){var n=F(["\n\tdiv > a {\n\t\tdisplay: flex !important;\n\t}\n"]);return T=function(){return n},n}function V(){var n=F(["\n\tposition: relative;\n\tflex: 1;\n\toverflow-y: scroll;\n\toverflow-x: visible;\n\twidth: 100%;\n\tmargin-right: ",";\n\ttransition: all 0.5s ease;\n\tpointer-events: all !important;\n\n\t@media only screen and (max-width: 667px) {\n\t\tmargin-right: 0;\n\t}\n"]);return V=function(){return n},n}function L(){var n=F(["\n\tbackground: ",";\n\tposition: absolute;\n\ttop: 0;\n\tright: ",";\n\ttransition: all 0.5s ease;\n\tbottom: 0;\n\twidth: 250px;\n\tborder-radius: 32px 0 0px 32px;\n\tz-index: 10;\n\tpointer-events: all !important;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tjustify-content: flex-start;\n"]);return L=function(){return n},n}function I(){var n=F(["\n\tflex: 1;\n\twidth: 100%;\n\toverflow-y: scroll;\n\tpadding: 24px 16px;\n\n"]);return I=function(){return n},n}function N(){var n=F(["\n\tposition: fixed;\n\ttop: 128px;\n\tright: 101px;\n\tbottom: 68px;\n\twidth: 300px;\n\tpointer-events: none;\n\toverflow: hidden;\n\tz-index: 1000;\n\n\t@media only screen and (max-width: 667px) {\n\t\tright: 0;\n\t\ttop: 80px;\n\t}\n"]);return N=function(){return n},n}function U(){var n=F(["\n\tbackground: ",";\n\tposition: absolute;\n\ttop: 24px;\n\tleft: -43px;\n\twidth: 48px;\n\theight: 40px;\n\tborder-radius: 16px 0 0px 16px;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tcursor: pointer;\n\tsvg {\n\t\tcolor: #edbb42;\n\t\tfont-size: 24px\n\t}\n\tpointer-events: all !important;\n"]);return U=function(){return n},n}function D(){var n=F(["\n\tcursor: pointer;\n\tsvg {\n\t\tcolor:#edbb42;\n\t\tfont-size: 24px\n\t}\n\tpointer-events: all !important;\n\tmargin-top:15px;\n\tmargin-right:10px;\n"]);return D=function(){return n},n}var Q=d.ZP.div(R()),A=(0,d.ZP)(x.Z)(q()),B=(0,d.ZP)(E)(M()),H=(0,d.ZP)(v.Z)(T()),X=d.ZP.div(V(),(function(n){return n.open?"250px":"0px"})),$=d.ZP.div(L(),m.Z.colors.primary,(function(n){return n.open?"0px":"-250px"})),G=d.ZP.div(I()),J=d.ZP.div(N()),K=d.ZP.div(U(),m.Z.colors.primary),W=d.ZP.div(D());function Y(n,t,e,r,i,o,a){try{var u=n[o](a),l=u.value}catch(c){return void e(c)}u.done?t(l):Promise.resolve(l).then(r,i)}function nn(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var o=n.apply(t,e);function a(n){Y(o,r,i,a,u,"next",n)}function u(n){Y(o,r,i,a,u,"throw",n)}a(void 0)}))}}function tn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function en(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){tn(n,t,e[t])}))}return n}function rn(n){var t=(0,u.useRouter)(),e=(0,a.useContext)(p.S),r=(0,a.useState)({text:""}),l=r[0],d=r[1],x=(0,a.useState)([]),v=x[0],h=x[1],g=(0,a.useState)([]),m=g[0],b=g[1],w=(0,a.useState)([]),y=w[0],j=w[1],P=(0,a.useState)(""),Z=P[0],k=P[1],O=(0,a.useRef)(null),z=(0,a.useRef)(["followers","tag","platforms","ages","agesNo","followersNO"].map((function(n){return(0,a.createRef)()})));(0,a.useEffect)((function(){S()}),[n.open]),(0,a.useEffect)((function(){clearTimeout(O),O.current=null,O.current=setTimeout((function(){_("text",Z)}),300)}),[Z]),(0,a.useEffect)((function(){l.category_id=t.query.cat,t.query.cat&&d(en({},l))}),[t.query.cat]);var S=nn(i().mark((function t(){var e,r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.open||0!=v.length){t.next=14;break}return t.next=3,c.U("/regions");case 3:return e=t.sent,v.unshift({name:"\u0627\u0644\u0643\u0644",id:""}),h(C(e.data.data)),t.next=8,c.U("/platforms");case 8:return r=t.sent,b(C(r.data.data)),t.next=12,c.U("/tags");case 12:o=t.sent,j(C(o.data.data));case 14:case"end":return t.stop()}}),t)}))),C=function(n){return"\u0627\u0644\u0643\u0644"!==n[0].name&&n.unshift({name:"\u0627\u0644\u0643\u0644",id:""}),n},_=nn(i().mark((function n(t,r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:d((function(n){var i=en({},n);return i[t]=r,e.changeQuery(i),i}));case 1:case"end":return n.stop()}}),n)})));return(0,o.jsxs)(Q,{children:[(0,o.jsx)(J,{children:(0,o.jsxs)($,{open:n.open,children:[(0,o.jsx)(K,{onClick:function(){n.setOpen(!n.open)},children:(0,o.jsx)(s.P7O,{})}),(0,o.jsxs)(G,{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsx)(A,{hideLabel:!0,label:"\u0628\u062d\u062b",value:Z,onChange:function(n){k(n.target.value)}}),(0,o.jsx)(W,{onClick:function(){d({text:""}),k(""),e.changeQuery({text:""}),z.current.forEach((function(n){var t;null===(t=n.current)||void 0===t||t.clearValue()}))},children:(0,o.jsx)(f.oRX,{})})]}),(0,o.jsx)(H,{invert:!0,vertical:!0,onChange:function(n){_("gender",n)},value:l.gender||"",options:[{label:"\u0645\u0624\u062b\u0631\u0629",value:"female"},{label:"\u0645\u0624\u062b\u0631",value:"male"},{label:"\u0627\u0644\u0643\u0644",value:""}]}),(0,o.jsx)(B,{ref:z.current[0],label:"\u0645\u0648\u0642\u0639 \u0627\u0644\u062a\u0623\u062b\u064a\u0631",onChange:function(n){_("region_id",n.value)},value:l.region_id||"",options:v.map((function(n){return{value:n.id,label:n.name}}))}),(0,o.jsx)(B,{ref:z.current[1],label:"\u0627\u0644\u0645\u062a\u0627\u0628\u0639\u064a\u0646",onChange:function(n){_("followers_gender",n.value)},value:l.followers_gender||0,options:[{label:"\u0627\u0644\u0643\u0644",value:0},{label:"\u0628\u0646\u0627\u062a",value:2},{label:"\u0634\u0628\u0627\u0628",value:1}]}),(0,o.jsx)(B,{ref:z.current[2],label:"\u0627\u0644\u062a\u0627\u062c",onChange:function(n){return _("tag_id",n.map((function(n){return n.value})))},value:l.tag_id||"",options:y.map((function(n){return{value:n.id,label:n.name}})),isMultiple:!0}),(0,o.jsx)(B,{ref:z.current[3],label:"\u0627\u0644\u0645\u0646\u0635\u0627\u062a",onChange:function(n){_("platform_id",n.value)},value:l.platform_id||"all",options:m.map((function(n){return{value:n.id,label:n.name}}))}),(0,o.jsx)(B,{ref:z.current[4],label:"\u0623\u0639\u0645\u0627\u0631 \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u064a\u0646",onChange:function(n){_("followers_ages",n.value)},value:l.followers_ages||0,options:[{label:"\u0627\u0644\u0643\u0644",value:0},{label:"13-17",value:1},{label:"18-24",value:2},{label:"25-34",value:3},{label:"35-44",value:4},{label:"45-54",value:5},{label:"55-64",value:6}]}),(0,o.jsx)(B,{ref:z.current[5],label:"\u0639\u062f\u062f \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u064a\u0646",onChange:function(n){_("followers_count",n.value)},value:l.followers_count||0,options:[{label:"\u0627\u0644\u0643\u0644",value:0},{label:"> 10k",value:1},{label:"> 50k",value:2},{label:"> 500k",value:3},{label:"> 1M",value:4},{label:"> 10M",value:5}]})]})]})}),(0,o.jsx)(X,{open:n.open,children:n.children})]})}var on=e(1560),an=e(8365);function un(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function ln(){var n=un(["\n\tflex: 1;\n\tbox-sizing: border-box;\n\tpadding: 24px 72px 24px 24px;\n\twidth: 100%;\n\t@media only screen and (max-width: 667px) {\n\t\tpadding: 24px 24px 24px 24px;\n\t}\n"]);return ln=function(){return n},n}function cn(){var n=un(["\n    color: ",";\n    font-size: 16px;\n    font-weight: 800;\n    font-family: 'MediumFont';\n    text-align: right;\n    margin: 0 0 32px;\n\t@media only screen and (max-width: 667px) {\n\t\tpadding: 0 40px 0 0;\n\t}\n"]);return cn=function(){return n},n}function sn(){var n=un(["\n\tflex: 3;\n\tdisplay: grid;\n\talign-items: stretch;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: repeat(3, 1fr);\n\tgap: 16px;\n\tcolumn-gap: 16px;\n\twidyh:100%;\n\n\t@media only screen and (max-width: 1000px) {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t\tgrid-template-rows: repeat(3, 1fr);\n\t}\n\n\t@media only screen and (max-width: 667px) {\n\t\twidth: 100%;\n\t\tgrid-template-columns: repeat(1, 1fr);\n\t\tgrid-template-rows: repeat(6, 1fr);\n\t}\n"]);return sn=function(){return n},n}function fn(){var n=un(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: stretch;\n\tjustify-content: flex-start;\n\tgap: 16px;\n\twidth: 100%;\n\t@media only screen and (max-width: 667px) {\n\t\tflex-direction: column;\n\t}\n"]);return fn=function(){return n},n}function pn(){var n=un(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tjustify-content: space-between;\n\tgap: 8px;\n"]);return pn=function(){return n},n}function dn(){var n=un(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tjustify-content: flex-start;\n\tgap: 8px;\n"]);return dn=function(){return n},n}function xn(){var n=un(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbox-sizing: border-box !important;\n\toverflow: hidden !important;\n"]);return xn=function(){return n},n}function vn(){var n=un(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tmargin: 32px 0 0;\n"]);return vn=function(){return n},n}function hn(){var n=un(["\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 50%;\n\tbackground: white;\n\tfont-family: 'BoldFont';\n\tfont-size: 14px;\n\tdisplay: inline-flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 0 0 0 16px;\n\t","\n\tcursor: pointer;\n\n\t@media only screen and (max-width: 667px) {\n        width: 20px;\n\t\theight: 20px;\n\t\tmargin: 6px 0 0 4px;\n\t\tfont-size: 10px;\n\t\tpadding: 0 3px 5px;\n\t}\n\n"]);return hn=function(){return n},n}function gn(){var n=un(["\n\tfont-family: 'MediumFont';\n\tcolor: ",";\n\tfont-size: 14px;\n\tmargin: 0 0 0 16px;\n\topacity: ",";\n\tcursor: pointer;\n"]);return gn=function(){return n},n}function mn(){var n=un(["\n    color: ",";\n    font-size: 16px;\n    line-height: 16px;\n    font-weight: 800;\n    font-family: 'MediumFont';\n    text-align: right;\n    margin: -32px 0 0px;\n\theight: 24px;\n"]);return mn=function(){return n},n}function bn(){var n=un(["\n    color: ",";\n    font-size: 16px;\n    line-height: 16px;\n    font-weight: 800;\n    font-family: 'MediumFont';\n    text-align: right;\n    margin: 16px 0 8px;\n"]);return bn=function(){return n},n}function wn(){var n=un(["\n    border-radius: 24px;\n\tbackground: #cdcdcd;\n\topacity: 0.4;\n\tflex: 1;\n\twidth: 100%;\n\toverflow: hidden;\n\tposition: relative;\n\tmin-height: 200px;\n"]);return wn=function(){return n},n}var yn=d.ZP.div(ln()),jn=d.ZP.div(cn(),m.Z.colors.primary),Pn=d.ZP.div(sn()),Zn=d.ZP.div(fn()),kn=d.ZP.div(pn()),On=d.ZP.div(dn()),zn=((0,d.ZP)(an.Z)(xn()),d.ZP.div(vn())),Sn=d.ZP.div(hn(),(function(n){return n.active&&"\n\t\tbackground: ".concat(m.Z.colors.primary,";\n\t\tcolor: white;\n\t")})),Cn=d.ZP.div(gn(),m.Z.colors.primary,(function(n){return n.active?1:.5})),_n=d.ZP.div(mn(),m.Z.colors.primary),En=d.ZP.div(bn(),m.Z.colors.primary),Fn=d.ZP.div(wn());function Rn(n,t,e,r,i,o,a){try{var u=n[o](a),l=u.value}catch(c){return void e(c)}u.done?t(l):Promise.resolve(l).then(r,i)}function qn(n){var t=(0,u.useRouter)(),e=(0,a.useContext)(p.S),r=(0,a.useState)(!0),l=r[0],s=r[1],f=(0,a.useState)([]),d=f[0],x=f[1],v=(0,a.useState)({}),h=v[0],g=v[1],m=(0,a.useState)([]),b=m[0],w=m[1],y=(0,a.useState)(0),j=y[0],P=y[1],Z=(0,a.useState)(0),k=Z[0],O=Z[1],z=(0,a.useState)(0),S=z[0],C=z[1],_=(0,a.useState)(9),E=_[0],F=_[1],R=(0,a.useState)(!1),q=R[0],M=(R[1],(0,a.useState)(n.query||{text:"",category_id:void 0})),T=(M[0],M[1],(0,a.useRef)()),V=(0,a.useState)(!1),L=V[0],I=V[1];(0,a.useEffect)((function(){U(1)}),[e.query,e.updateQuery,t.query.cat]),(0,a.useEffect)((function(){setTimeout((function(){D()}),0)}),[q]);var N,U=(N=i().mark((function n(r){var o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),P(r),n.prev=2,n.next=5,c.U("/influencers",Object.assign({},e.query||{},{page:r,per_page:E,category_id:t.query.cat||""}));case 5:o=n.sent,x(o.data.data.ifluencers),w(o.data.data.last_views),g(o.data.data.featured),O(o.data.meta.last_page),C(o.data.meta.total),o.data.meta.total<9?F(o.data.meta.total):F(9),setTimeout((function(){D()}),0),n.next=17;break;case 15:n.prev=15,n.t0=n.catch(2);case 17:s(!1);case 18:case"end":return n.stop()}}),n,null,[[2,15]])})),function(){var n=this,t=arguments;return new Promise((function(e,r){var i=N.apply(n,t);function o(n){Rn(i,e,r,o,a,"next",n)}function a(n){Rn(i,e,r,o,a,"throw",n)}o(void 0)}))}),D=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})};return(0,o.jsx)(rn,{open:L,setOpen:I,children:(0,o.jsxs)(yn,{id:"f",children:[S>0&&(0,o.jsx)(jn,{id:"title",ref:T,children:!l&&(0,o.jsxs)(o.Fragment,{children:["\u0639\u0631\u0636 ",E," \u0645\u0624\u062b\u0631 \u0645\u0646 ",S]})}),(0,o.jsxs)(Zn,{children:[(0,o.jsx)(Pn,{children:l?(0,o.jsx)(o.Fragment,{children:new Array(9).fill(1).map((function(n,t){return(0,o.jsx)(Fn,{},"loading_"+n+t)}))}):(0,o.jsx)(o.Fragment,{children:S>0?(0,o.jsxs)(o.Fragment,{children:[d.map((function(n){return(0,o.jsx)(on.Z,{data:n},n.id)}))," "]}):(0,o.jsx)(jn,{children:"\u0644\u0627 \u064a\u0648\u062c\u062f \u0645\u0624\u062b\u0631\u064a\u0646 \u0644\u0647\u0630\u0627 \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u060c \u0627\u0631\u062c\u0648\u0627 \u062a\u062c\u0631\u0628\u0629 \u062e\u064a\u0627\u0631 \u0622\u062e\u0631"})})}),(0,o.jsx)(kn,{children:!L&&b.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_n,{children:"\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u0633\u0627\u0628\u0642"}),(0,o.jsx)(On,{children:b.map((function(n){return(0,o.jsx)(on.Z,{isLastSearched:!0,data:n},n.id)}))}),!!h&&Object.keys(h).length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(En,{children:"\u0645\u0624\u062b\u0631 \u0645\u0634\u0647\u0648\u0631"}),(0,o.jsx)(on.Z,{data:h},h.id)]})]})})]}),S>0&&(0,o.jsxs)(zn,{children:[(0,o.jsx)(Cn,{onClick:function(){j>1&&U(j-1)},active:j>1,children:"\u0627\u0644\u0633\u0627\u0628\u0642"}),new Array(k).fill(null).map((function(n,t){return(0,o.jsx)(Sn,{onClick:function(){U(t+1)},active:t+1==j,children:t+1},t)})),(0,o.jsx)(Cn,{onClick:function(){j<k&&U(j+1)},active:j<k,children:"\u0627\u0644\u062a\u0627\u0644\u064a"})]})]})})}function Mn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function Tn(){var n=Mn(["\n width:100%\n\n"]);return Tn=function(){return n},n}function Vn(){var n=Mn(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 24px;\n    width: 100%;\n"]);return Vn=function(){return n},n}var Ln=d.ZP.div(Tn());d.ZP.div(Vn());function In(n,t,e,r,i,o,a){try{var u=n[o](a),l=u.value}catch(c){return void e(c)}u.done?t(l):Promise.resolve(l).then(r,i)}function Nn(){var n=(0,a.useContext)(p.S).userType,t=(0,u.useRouter)();(0,a.useEffect)((function(){r()}),[]);var e,r=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"influencer"===n&&t.replace("/profileEdit");case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(n){In(o,r,i,a,u,"next",n)}function u(n){In(o,r,i,a,u,"throw",n)}a(void 0)}))});return(0,o.jsx)(Ln,{children:(0,o.jsx)(l.Z,{title:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",backLink:"/",children:(0,o.jsx)(qn,{limit:6})})})}}}]);