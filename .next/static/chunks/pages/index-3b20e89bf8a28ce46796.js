_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"20a2":function(e,n,t){e.exports=t("nOHt")},H0SL:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("cMU6")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cMU6:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("YFqc"),c=t.n(o),a=t("q1tI");t("20a2");n.default=function(){var e=Object(a.useState)(""),n=e[0],t=e[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:["username",Object(r.jsx)("input",{value:n,onChange:function(e){return t(e.target.value)}})]}),Object(r.jsxs)("p",{children:[n," \uae43\ud5c8\ube0c \uac80\uc0c9\ud558\uae30"]}),Object(r.jsx)(c.a,{href:"/users/".concat(n),children:Object(r.jsx)("a",{children:"Search"})})]})}},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),u=t("nOHt"),i=t("vNVm"),s={};function l(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var _=c.Children.only(v),w=_&&"object"===typeof _&&_.ref,E=(0,i.useIntersection)({rootMargin:"200px"}),j=r(E,2),m=j[0],L=j[1],M=c.default.useCallback((function(e){m(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,m]);(0,c.useEffect)((function(){var e=L&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,L,g,n,t]);var O={ref:M,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,t,d,p,h,b,y,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var x="undefined"!==typeof g?g:t&&t.locale,N=(0,a.getDomainLocale)(p,x,t&&t.locales,t&&t.domainLocales);O.href=N||(0,a.addBasePath)((0,a.addLocale)(p,x,t&&t.defaultLocale))}return c.default.cloneElement(_,O)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("zoAU"),o=t("AroE");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,o=(0,c.useRef)(),s=(0,c.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){u||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var c=t("q1tI"),a=o(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var i=new Map}},[["H0SL",0,1,2]]]);