(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4949],{8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(i){o=!0,a=i}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},l=r(6273),c=r(387),i=r(7190);var u={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var t,r=!1!==e.prefetch,o=c.useRouter(),s=a.default.useMemo((function(){var t=n(l.resolveHref(o,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?l.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,w=n(i.useIntersection({rootMargin:"200px"}),2),E=w[0],O=w[1],C=a.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);a.default.useEffect((function(){var e=O&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,n=u[d+"%"+p+(t?"%"+t:"")];e&&!n&&f(o,d,p,{locale:t})}),[p,d,O,b,r,o]);var k={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:c}))}(e,o,d,p,y,h,m,b)},onMouseEnter:function(e){l.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&l.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);k.href=M||l.addBasePath(l.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=s},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(i){o=!0,a=i}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,i=o.useRef(),u=n(o.useState(!1),2),f=u[0],s=u[1],d=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!l&&!f){var e=a.requestIdleCallback((function(){return s(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=r(7294),a=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},1664:function(e,t,r){e.exports=r(8418)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),i(e.child))}))}function u(e){return function(t){return n.createElement(f,l({attr:l({},e.attr)},t),i(e.child))}}function f(e){var t=function(t){var r,o=e.attr,a=e.size,i=e.title,u=c(e,["attr","size","title"]),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);