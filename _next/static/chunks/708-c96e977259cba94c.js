(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{9008:function(e,r,t){e.exports=t(3121)},6523:function(e,r,t){"use strict";t.d(r,{Z:function(){return $}});var o=t(7294);function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var a=/^\[(.+)\]$/;function i(e,r){var t=e;return r.split("-").forEach(function(e){t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}var l=/\s+/;function s(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){if("string"==typeof r)return r;for(var t,o="",n=0;n<r.length;n++)r[n]&&(t=e(r[n]))&&(o&&(o+=" "),o+=t);return o}(e))&&(o&&(o+=" "),o+=r);return o}function c(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var d=/^\[(.+)\]$/,u=/^\d+\/\d+$/,p=new Set(["px","full","screen"]),b=/^(\d+)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/,m=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function g(e){return!Number.isNaN(Number(e))||p.has(e)||u.test(e)||h(e)}function h(e){var r,t=null==(r=d.exec(e))?void 0:r[1];return!!t&&(t.startsWith("length:")||f.test(t))}function v(e){var r,t=null==(r=d.exec(e))?void 0:r[1];return!!t&&t.startsWith("size:")}function y(e){var r,t=null==(r=d.exec(e))?void 0:r[1];return!!t&&t.startsWith("position:")}function x(e){var r,t=null==(r=d.exec(e))?void 0:r[1];return!!t&&(t.startsWith("url(")||t.startsWith("url:"))}function w(e){var r,t=null==(r=d.exec(e))?void 0:r[1];return!!t&&(!Number.isNaN(Number(t))||t.startsWith("number:"))}function k(e){var r,t=null==(r=d.exec(e))?void 0:r[1];return t?Number.isInteger(Number(t)):Number.isInteger(Number(e))}function z(e){return d.test(e)}function j(){return!0}function N(e){return b.test(e)}function C(e){var r,t=null==(r=d.exec(e))?void 0:r[1];return!!t&&m.test(t)}var G=function(){for(var e,r,t,o=arguments.length,c=Array(o),d=0;d<o;d++)c[d]=arguments[d];var u=function(o){var l=c[0];return r=(e=function(e){var r,t,o,l,s;return n({cache:function(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,o=new Map;function n(n,a){t.set(n,a),++r>e&&(r=0,o=t,t=new Map)}return{get:function(e){var r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set:function(e,r){t.has(e)?t.set(e,r):n(e,r)}}}(e.cacheSize),splitModifiers:(r=e.separator||":",function(e){for(var t=0,o=[],n=0,a=0;a<e.length;a++){var i=e[a];0===t&&i===r[0]&&(1===r.length||e.slice(a,a+r.length)===r)&&(o.push(e.slice(n,a)),n=a+r.length),"["===i?t++:"]"===i&&t--}var l=0===o.length?e:e.substring(n),s=l.startsWith("!"),c=s?l.substring(1):l;return{modifiers:o,hasImportantModifier:s,baseClassName:c}})},(t=e.theme,o=e.prefix,l={nextPart:new Map,validators:[]},(s=Object.entries(e.classGroups),o?s.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?o+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[o+e[0],e[1]]})):e})]}):s).forEach(function(e){var r=e[0];(function e(r,t,o,n){r.forEach(function(r){if("string"==typeof r){(""===r?t:i(t,r)).classGroupId=o;return}if("function"==typeof r){if(r.isThemeGetter){e(r(n),t,o,n);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(function(r){var a=r[0];e(r[1],i(t,a),o,n)})})})(e[1],l,r,t)}),{getClassGroupId:function(e){var r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(r,t){if(0===r.length)return t.classGroupId;var o,n=r[0],a=t.nextPart.get(n),i=a?e(r.slice(1),a):void 0;if(i)return i;if(0!==t.validators.length){var l=r.join("-");return null==(o=t.validators.find(function(e){return(0,e.validator)(l)}))?void 0:o.classGroupId}}(r,l)||function(e){if(a.test(e)){var r=a.exec(e)[1],t=null==r?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(r){return e.conflictingClassGroups[r]||[]}}))}(c.slice(1).reduce(function(e,r){return r(e)},l()))).cache.get,t=e.cache.set,u=p,p(o)};function p(o){var n,a,i,s,c=r(o);if(c)return c;var d=(n=e.splitModifiers,a=e.getClassGroupId,i=e.getConflictingClassGroupIds,s=new Set,o.trim().split(l).map(function(e){var r=n(e),t=r.modifiers,o=r.hasImportantModifier,i=a(r.baseClassName);if(!i)return{isTailwindClass:!1,originalClassName:e};var l=(function(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(e){"["===e[0]?(r.push.apply(r,t.sort().concat([e])),t=[]):t.push(e)}),r.push.apply(r,t.sort()),r})(t).join(":");return{isTailwindClass:!0,modifierId:o?l+"!":l,classGroupId:i,originalClassName:e}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,t=e.classGroupId,o=r+t;return!s.has(o)&&(s.add(o),i(t).forEach(function(e){return s.add(r+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return t(o,d),d}return function(){return u(s.apply(null,arguments))}}(function(){var e=c("colors"),r=c("spacing"),t=c("blur"),o=c("brightness"),n=c("borderColor"),a=c("borderRadius"),i=c("borderSpacing"),l=c("borderWidth"),s=c("contrast"),d=c("grayscale"),u=c("hueRotate"),p=c("invert"),b=c("gap"),f=c("gradientColorStops"),m=c("inset"),G=c("margin"),O=c("opacity"),I=c("padding"),E=c("saturate"),S=c("scale"),M=c("sepia"),P=c("skew"),W=c("space"),$=c("translate"),T=function(){return["auto","contain","none"]},R=function(){return["auto","hidden","clip","visible","scroll"]},_=function(){return["auto",r]},q=function(){return["",g]},A=function(){return["auto",k]},Z=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},B=function(){return["solid","dashed","dotted","double","none"]},D=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},F=function(){return["start","end","center","between","around","evenly"]},H=function(){return["","0",z]},J=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]};return{cacheSize:500,theme:{colors:[j],spacing:[g],blur:["none","",N,h],brightness:[k],borderColor:[e],borderRadius:["none","","full",N,h],borderSpacing:[r],borderWidth:q(),contrast:[k],grayscale:H(),hueRotate:[k],invert:H(),gap:[r],gradientColorStops:[e],inset:_(),margin:_(),opacity:[k],padding:[r],saturate:[k],scale:[k],sepia:H(),skew:[k,z],space:[r],translate:[r]},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Z(),[z])}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:[k]}],basis:[{basis:[r]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",k]}],"grid-cols":[{"grid-cols":[j]}],"col-start-end":[{col:["auto",{span:[k]}]}],"col-start":[{"col-start":A()}],"col-end":[{"col-end":A()}],"grid-rows":[{"grid-rows":[j]}],"row-start-end":[{row:["auto",{span:[k]}]}],"row-start":[{"row-start":A()}],"row-end":[{"row-end":A()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:F()}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:[].concat(F(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(F(),["baseline","stretch"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[I]}],px:[{px:[I]}],py:[{py:[I]}],pt:[{pt:[I]}],pr:[{pr:[I]}],pb:[{pb:[I]}],pl:[{pl:[I]}],m:[{m:[G]}],mx:[{mx:[G]}],my:[{my:[G]}],mt:[{mt:[G]}],mr:[{mr:[G]}],mb:[{mb:[G]}],ml:[{ml:[G]}],"space-x":[{"space-x":[W]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[W]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",r]}],"min-w":[{"min-w":["min","max","fit",g]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[N]},N,h]}],h:[{h:[r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",g]}],"max-h":[{"max-h":[r,"min","max","fit"]}],"font-size":[{text:["base",N,h]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",w]}],"font-family":[{font:[j]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",h]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[O]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(B(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",g]}],"underline-offset":[{"underline-offset":["auto",g]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[r]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",h]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap"]}],break:[{break:["normal","words","all","keep"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[O]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Z(),[y])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",v]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},x]}],"bg-color":[{bg:[e]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[O]}],"border-style":[{border:[].concat(B(),["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[O]}],"divide-style":[{divide:B()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(B())}],"outline-offset":[{"outline-offset":[g]}],"outline-w":[{outline:[g]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[O]}],"ring-offset-w":[{"ring-offset":[g]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",N,C]}],"shadow-color":[{shadow:[j]}],opacity:[{opacity:[O]}],"mix-blend":[{"mix-blend":D()}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",N,z]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[E]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[O]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:[k]}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:[k]}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[k,z]}],"translate-x":[{"translate-x":[$]}],"translate-y":[{"translate-y":[$]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[r]}],"scroll-mx":[{"scroll-mx":[r]}],"scroll-my":[{"scroll-my":[r]}],"scroll-mt":[{"scroll-mt":[r]}],"scroll-mr":[{"scroll-mr":[r]}],"scroll-mb":[{"scroll-mb":[r]}],"scroll-ml":[{"scroll-ml":[r]}],"scroll-p":[{"scroll-p":[r]}],"scroll-px":[{"scroll-px":[r]}],"scroll-py":[{"scroll-py":[r]}],"scroll-pt":[{"scroll-pt":[r]}],"scroll-pr":[{"scroll-pr":[r]}],"scroll-pb":[{"scroll-pb":[r]}],"scroll-pl":[{"scroll-pl":[r]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,w]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],"col-start-end":["col-start","col-end"],"row-start-end":["row-start","row-end"],gap:["gap-x","gap-y"],p:["px","py","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-t","rounded-r","rounded-b","rounded-l","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]}}}),O=Symbol("isTwElement?"),I=(e,r)=>e.reduce((e,t,o)=>e.concat(t||[],r[o]||[]),[]),E=(e,r="")=>{let t=e.join(" ").trim().replace(/\n/g," ").replace(/\s{2,}/g," ").split(" ").filter(e=>","!==e),o=r?r.split(" "):[];return G(...t.concat(o).filter(e=>" "!==e))},S=([e])=>"$"!==e.charAt(0),M=e=>!0===e[O],P=e=>(r,...t)=>{let n=(a=[])=>{let i=o.forwardRef((n,i)=>{let{$as:l=e,style:s={},...c}=n,d=M(e)?e:l,u=a?a.reduce((e,r)=>Object.assign(e,"function"==typeof r?r(n):r),{}):{},p=M(d)?c:Object.fromEntries(Object.entries(c).filter(S));return o.createElement(d,{...p,style:{...u,...s},ref:i,className:E(I(r,t.map(e=>e({...c,$as:l}))),c.className),...M(e)?{$as:l}:{}})});return i[O]=!0,"string"!=typeof e?i.displayName=e.displayName||e.name||"tw.Component":i.displayName="tw."+e,i.withStyle=e=>n(a.concat(e)),i};return n()},W=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].reduce((e,r)=>({...e,[r]:P(r)}),{}),$=Object.assign(P,W)},7297:function(e,r,t){"use strict";function o(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}t.d(r,{Z:function(){return o}})}}]);