!function r(i,o,a){function s(n,e){if(!o[n]){if(!i[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(l)return l(n,!0);throw(t=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",t}t=o[n]={exports:{}},i[n][0].call(t.exports,function(e){return s(i[n][1][e]||e)},t,t.exports,r,i,o,a)}return o[n].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,n,t){"use strict";window.Slideout=e("slideout");var r=e("highlight.js/lib/highlight"),e=e("highlight.js/lib/languages/javascript");r.registerLanguage("javascript",e),window.hljs=r;var i=function(e,n){setTimeout(function(e,n){e.location.href=n},250,e,n)}.bind(void 0,window);document.addEventListener("DOMContentLoaded",function(e){var n=new Slideout({menu:document.getElementById("menu"),panel:document.getElementById("panel"),padding:300,tolerance:70});document.getElementById("toggle-button").addEventListener("click",function(e){n.toggle()}),document.querySelectorAll(".delayed-opening").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),n.close(),i(e.target.href)})}),Array.from(document.getElementsByClassName("menu-main-element")).forEach(function(t){t.addEventListener("click",function(e){var n=t.nextElementSibling;Array.from(document.getElementsByClassName("menu-wrapper")).forEach(function(e){e!==n&&e.classList.remove("menu-open-wrapper")}),n.classList.toggle("menu-open-wrapper",!0)})}),r.initHighlightingOnLoad()})},{"highlight.js/lib/highlight":4,"highlight.js/lib/languages/javascript":5,slideout:7}],2:[function(e,n,t){"use strict";var s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};n.exports=function(e,n,t){var r,i=!1;function o(e){r=e,i||(s(a),i=!0)}function a(){t.call(e,r),i=!1}return e.addEventListener(n,o,!1),o}},{}],3:[function(e,n,t){"use strict";var r=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};t.__esModule=!0;var i=(o.prototype.on=function(e,n){return this._eventCollection=this._eventCollection||{},this._eventCollection[e]=this._eventCollection[e]||[],this._eventCollection[e].push(n),this},o.prototype.once=function(e,n){var t=this;function r(){t.off(e,r),n.apply(this,arguments)}return r.listener=n,this.on(e,r),this},o.prototype.off=function(e,t){var r=void 0;return this._eventCollection&&(r=this._eventCollection[e])&&(r.forEach(function(e,n){e!==t&&e.listener!==t||r.splice(n,1)}),0===r.length&&delete this._eventCollection[e]),this},o.prototype.emit=function(e){for(var n=this,t=arguments.length,r=Array(1<t?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var o=void 0;return this._eventCollection&&(o=this._eventCollection[e])&&(o=o.slice(0)).forEach(function(e){return e.apply(n,r)}),this},o);function o(){r(this,o)}t.default=i,n.exports=t.default},{}],4:[function(e,n,t){(function(B){(function(){var e,n;e=function(r){var t,M=!1,d=[],o=Object.keys,N=Object.create(null),a=Object.create(null),w=!0,n=/^(no-?highlight|plain|text)$/i,s=/\blang(?:uage)?-([\w-]+)\b/i,i=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,T="</span>",R="Could not find the language '{}', did you forget to load/include a language module?",L={hideUpgradeWarningAcceptNoSupportOrSecurityUpdates:!1,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},l="of and for in not or if then".split(" ");function C(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(e){return e.nodeName.toLowerCase()}function c(e){return n.test(e)}function u(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function g(e){var i=[];return function e(n,t){for(var r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?t+=r.nodeValue.length:1===r.nodeType&&(i.push({event:"start",offset:t,node:r}),t=e(r,t),f(r).match(/br|hr|img|input/)||i.push({event:"stop",offset:t,node:r}));return t}(e,0),i}function h(e,n,t){var r=0,i="",o=[];function a(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function s(e){i+="<"+f(e)+d.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+C(e.value).replace(/"/g,"&quot;")+'"'}).join("")+">"}function l(e){i+="</"+f(e)+">"}function c(e){("start"===e.event?s:l)(e.node)}for(;e.length||n.length;){var u=a();if(i+=C(t.substring(r,u[0].offset)),r=u[0].offset,u===e){for(o.reverse().forEach(l);c(u.splice(0,1)[0]),u=a(),u===e&&u.length&&u[0].offset===r;);o.reverse().forEach(s)}else"start"===u[0].event?o.push(u[0].node):o.pop(),c(u.splice(0,1)[0])}return i+C(t.substr(r))}function p(n){return n.variants&&!n.cached_variants&&(n.cached_variants=n.variants.map(function(e){return u(n,{variants:null},e)})),n.cached_variants||(function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(n)?[u(n,{starts:n.starts?u(n.starts):null})]:Object.isFrozen(n)?[u(n)]:[n])}function m(e){if(t&&!e.langApiRestored){for(var n in e.langApiRestored=!0,t)e[n]&&(e[t[n]]=e[n]);(e.contains||[]).concat(e.variants||[]).forEach(m)}}function _(n,r){var i={};return"string"==typeof n?t("keyword",n):o(n).forEach(function(e){t(e,n[e])}),i;function t(t,e){r&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var n=e.split("|");i[n[0]]=[t,(e=n[0],(n=n[1])?Number(n):function(e){return-1!=l.indexOf(e.toLowerCase())}(e)?0:1)]})}}function A(r){function u(e){return e&&e.source||e}function d(e,n){return new RegExp(u(e),"m"+(r.case_insensitive?"i":"")+(n?"g":""))}function i(i){var o={},a=[],s={},t=1;function e(e,n){o[t]=e,a.push([e,n]),t+=new RegExp(n.toString()+"|").exec("").length-1+1}for(var n=0;n<i.contains.length;n++){var r,l=(r=i.contains[n]).beginKeywords?"\\.?(?:"+r.begin+")\\.?":r.begin;e(r,l)}i.terminator_end&&e("end",i.terminator_end),i.illegal&&e("illegal",i.illegal);var c=d(function(e,n){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,i="",o=0;o<e.length;o++){var a=r+=1,s=u(e[o]);for(0<o&&(i+=n),i+="(";0<s.length;){var l=t.exec(s);if(null==l){i+=s;break}i+=s.substring(0,l.index),s=s.substring(l.index+l[0].length),"\\"==l[0][0]&&l[1]?i+="\\"+String(Number(l[1])+a):(i+=l[0],"("==l[0]&&r++)}i+=")"}return i}(a.map(function(e){return e[1]}),"|"),!0);return s.lastIndex=0,s.exec=function(e){var n;if(0===a.length)return null;c.lastIndex=s.lastIndex;var t=c.exec(e);if(!t)return null;for(var r=0;r<t.length;r++)if(null!=t[r]&&null!=o[""+r]){n=o[""+r];break}return"string"==typeof n?(t.type=n,t.extra=[i.illegal,i.terminator_end]):(t.type="begin",t.rule=n),t},s}if(r.contains&&-1!=r.contains.indexOf("self")){if(!w)throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");r.contains=r.contains.filter(function(e){return"self"!=e})}!function n(t,e){t.compiled||(t.compiled=!0,t.keywords=t.keywords||t.beginKeywords,t.keywords&&(t.keywords=_(t.keywords,r.case_insensitive)),t.lexemesRe=d(t.lexemes||/\w+/,!0),e&&(t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")\\b"),t.begin||(t.begin=/\B|\b/),t.beginRe=d(t.begin),t.endSameAsBegin&&(t.end=t.begin),t.end||t.endsWithParent||(t.end=/\B|\b/),t.end&&(t.endRe=d(t.end)),t.terminator_end=u(t.end)||"",t.endsWithParent&&e.terminator_end&&(t.terminator_end+=(t.end?"|":"")+e.terminator_end)),t.illegal&&(t.illegalRe=d(t.illegal)),null==t.relevance&&(t.relevance=1),t.contains||(t.contains=[]),t.contains=Array.prototype.concat.apply([],t.contains.map(function(e){return p("self"===e?t:e)})),t.contains.forEach(function(e){n(e,t)}),t.starts&&n(t.starts,e),t.terminators=i(t))}(r)}function S(n,e,r,t){L.hideUpgradeWarningAcceptNoSupportOrSecurityUpdates||"object"==typeof B&&"object"==typeof B.env&&B.env.HLJS_HIDE_UPGRADE_WARNING||M||(M=!0,console.log("Version 9 of Highlight.js has reached EOL and is no longer supported.\nPlease upgrade or ask whatever dependency you are using to upgrade.\nhttps://github.com/highlightjs/highlight.js/issues/2877"));var i=e;function o(e,n,t,r){if(!t&&""===n)return"";if(!e)return n;r='<span class="'+(r?"":L.classPrefix);return(r+=e+'">')+n+(t?"":T)}function a(){var e,n,t,r,i;if(!h.keywords)return C(E);for(t="",e=0,h.lexemesRe.lastIndex=0,n=h.lexemesRe.exec(E);n;)t+=C(E.substring(e,n.index)),r=h,i=n,i=g.case_insensitive?i[0].toLowerCase():i[0],(i=r.keywords.hasOwnProperty(i)&&r.keywords[i])?(v+=i[1],t+=o(i[0],C(n[0]))):t+=C(n[0]),e=h.lexemesRe.lastIndex,n=h.lexemesRe.exec(E);return t+C(E.substr(e))}function s(){m+=(null!=h.subLanguage?function(){var e="string"==typeof h.subLanguage;if(e&&!N[h.subLanguage])return C(E);var n=e?S(h.subLanguage,E,!0,p[h.subLanguage]):x(E,h.subLanguage.length?h.subLanguage:void 0);return 0<h.relevance&&(v+=n.relevance),e&&(p[h.subLanguage]=n.top),o(n.language,n.value,!1,!0)}:a)(),E=""}function l(e){m+=e.className?o(e.className,"",!0):"",h=Object.create(e,{parent:{value:h}})}function c(e){var n=e[0],e=e.rule;return e&&e.endSameAsBegin&&(e.endRe=new RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),e.skip?E+=n:(e.excludeBegin&&(E+=n),s(),e.returnBegin||e.excludeBegin||(E=n)),l(e),e.returnBegin?0:n.length}function u(e){var n=e[0],e=i.substr(e.index),t=function e(n,t){if(r=n.endRe,i=t,(i=r&&r.exec(i))&&0===i.index){for(;n.endsParent&&n.parent;)n=n.parent;return n}var r,i;if(n.endsWithParent)return e(n.parent,t)}(h,e);if(t){e=h;for(e.skip?E+=n:(e.returnEnd||e.excludeEnd||(E+=n),s(),e.excludeEnd&&(E=n));h.className&&(m+=T),h.skip||h.subLanguage||(v+=h.relevance),h=h.parent,h!==t.parent;);return t.starts&&(t.endSameAsBegin&&(t.starts.endRe=t.endRe),l(t.starts)),e.returnEnd?0:n.length}}var d={};function f(e,n){var t=n&&n[0];if(E+=e,null==t)return s(),0;if("begin"==d.type&&"end"==n.type&&d.index==n.index&&""===t)return E+=i.slice(n.index,n.index+1),1;if("illegal"===d.type&&""===t)return E+=i.slice(n.index,n.index+1),1;if("begin"===(d=n).type)return c(n);if("illegal"===n.type&&!r)throw new Error('Illegal lexeme "'+t+'" for mode "'+(h.className||"<unnamed>")+'"');if("end"===n.type){n=u(n);if(null!=n)return n}return E+=t,t.length}var g=D(n);if(!g)throw console.error(R.replace("{}",n)),new Error('Unknown language: "'+n+'"');A(g);for(var h=t||g,p={},m="",_=h;_!==g;_=_.parent)_.className&&(m=o(_.className,"",!0)+m);var E="",v=0;try{for(var b,y,O=0;h.terminators.lastIndex=O,b=h.terminators.exec(i);)y=f(i.substring(O,b.index),b),O=b.index+y;for(f(i.substr(O)),_=h;_.parent;_=_.parent)_.className&&(m+=T);return{relevance:v,value:m,illegal:!1,language:n,top:h}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{illegal:!0,relevance:0,value:C(i)};if(w)return{relevance:0,value:C(i),language:n,top:h,errorRaised:e};throw e}}function x(t,e){e=e||L.languages||o(N);var r={relevance:0,value:C(t)},i=r;return e.filter(D).filter(O).forEach(function(e){var n=S(e,t,!1);n.language=e,n.relevance>i.relevance&&(i=n),n.relevance>r.relevance&&(i=r,r=n)}),i.language&&(r.second_best=i),r}function E(e){return L.tabReplace||L.useBR?e.replace(i,function(e,n){return L.useBR&&"\n"===e?"<br>":L.tabReplace?n.replace(/\t/g,L.tabReplace):""}):e}function v(e){var n,t,r,i,o=function(e){var n,t,r,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=s.exec(o)){var a=D(t[1]);return a||(console.warn(R.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),a?t[1]:"no-highlight"}for(n=0,r=(o=o.split(/\s+/)).length;n<r;n++)if(c(i=o[n])||D(i))return i}(e);c(o)||(L.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,i=n.textContent,t=o?S(o,i,!0):x(i),(n=g(n)).length&&((r=document.createElement("div")).innerHTML=t.value,t.value=h(n,g(r),i)),t.value=E(t.value),e.innerHTML=t.value,e.className=(r=e.className,i=o,o=t.language,i=i?a[i]:o,o=[r.trim()],r.match(/\bhljs\b/)||o.push("hljs"),-1===r.indexOf(i)&&o.push(i),o.join(" ").trim()),e.result={language:t.language,re:t.relevance},t.second_best&&(e.second_best={language:t.second_best.language,re:t.second_best.relevance}))}function b(){var e;b.called||(b.called=!0,e=document.querySelectorAll("pre code"),d.forEach.call(e,v))}var y={disableAutodetect:!0};function D(e){return e=(e||"").toLowerCase(),N[e]||N[a[e]]}function O(e){e=D(e);return e&&!e.disableAutodetect}return r.highlight=S,r.highlightAuto=x,r.fixMarkup=E,r.highlightBlock=v,r.configure=function(e){L=u(L,e)},r.initHighlighting=b,r.initHighlightingOnLoad=function(){window.addEventListener("DOMContentLoaded",b,!1),window.addEventListener("load",b,!1)},r.registerLanguage=function(n,e){var t;try{t=e(r)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!w)throw e;console.error(e),t=y}m(N[n]=t),t.rawDefinition=e.bind(null,r),t.aliases&&t.aliases.forEach(function(e){a[e]=n})},r.listLanguages=function(){return o(N)},r.getLanguage=D,r.requireLanguage=function(e){var n=D(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},r.autoDetection=O,r.inherit=u,r.debugMode=function(){w=!1},r.IDENT_RE="[a-zA-Z]\\w*",r.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",r.NUMBER_RE="\\b\\d+(\\.\\d+)?",r.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",r.BINARY_NUMBER_RE="\\b(0b[01]+)",r.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",r.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},r.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[r.BACKSLASH_ESCAPE]},r.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[r.BACKSLASH_ESCAPE]},r.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},r.COMMENT=function(e,n,t){t=r.inherit({className:"comment",begin:e,end:n,contains:[]},t||{});return t.contains.push(r.PHRASAL_WORDS_MODE),t.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),t},r.C_LINE_COMMENT_MODE=r.COMMENT("//","$"),r.C_BLOCK_COMMENT_MODE=r.COMMENT("/\\*","\\*/"),r.HASH_COMMENT_MODE=r.COMMENT("#","$"),r.NUMBER_MODE={className:"number",begin:r.NUMBER_RE,relevance:0},r.C_NUMBER_MODE={className:"number",begin:r.C_NUMBER_RE,relevance:0},r.BINARY_NUMBER_MODE={className:"number",begin:r.BINARY_NUMBER_RE,relevance:0},r.CSS_NUMBER_MODE={className:"number",begin:r.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},r.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[r.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[r.BACKSLASH_ESCAPE]}]},r.TITLE_MODE={className:"title",begin:r.IDENT_RE,relevance:0},r.UNDERSCORE_TITLE_MODE={className:"title",begin:r.UNDERSCORE_IDENT_RE,relevance:0},r.METHOD_GUARD={begin:"\\.\\s*"+r.UNDERSCORE_IDENT_RE,relevance:0},[r.BACKSLASH_ESCAPE,r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,r.PHRASAL_WORDS_MODE,r.COMMENT,r.C_LINE_COMMENT_MODE,r.C_BLOCK_COMMENT_MODE,r.HASH_COMMENT_MODE,r.NUMBER_MODE,r.C_NUMBER_MODE,r.BINARY_NUMBER_MODE,r.CSS_NUMBER_MODE,r.REGEXP_MODE,r.TITLE_MODE,r.UNDERSCORE_TITLE_MODE,r.METHOD_GUARD].forEach(function(e){!function n(t){Object.freeze(t);var r="function"==typeof t;Object.getOwnPropertyNames(t).forEach(function(e){!t.hasOwnProperty(e)||null===t[e]||"object"!=typeof t[e]&&"function"!=typeof t[e]||r&&("caller"===e||"callee"===e||"arguments"===e)||Object.isFrozen(t[e])||n(t[e])});return t}(e)}),r},n="object"==typeof window&&window||"object"==typeof self&&self,void 0===t||t.nodeType?n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs})):e(t)}).call(this)}).call(this,e("_process"))},{_process:6}],5:[function(e,n,t){n.exports=function(e){var n="<>",t="</>",r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/},i="[A-Za-z$_][0-9A-Za-z$_]*",o={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},s={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},l={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,s],subLanguage:"xml"}},c={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,s],subLanguage:"css"}},u={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,s]};s.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,l,c,u,a,e.REGEXP_MODE];s=s.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx","mjs","cjs"],keywords:o,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,l,c,u,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,a,{begin:/[{,\n]\s*/,relevance:0,contains:[{begin:i+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:i,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+i+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:i},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:s}]}]},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:n,end:t},{begin:r.begin,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:i}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},{}],6:[function(e,n,t){var r,i,n=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(n){if(r===setTimeout)return setTimeout(n,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(n,0);try{return r(n,0)}catch(e){try{return r.call(null,n,0)}catch(e){return r.call(this,n,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var l,c=[],u=!1,d=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&g())}function g(){if(!u){var e=s(f);u=!0;for(var n=c.length;n;){for(l=c,c=[];++d<n;)l&&l[d].run();d=-1,n=c.length}l=null,u=!1,function(n){if(i===clearTimeout)return clearTimeout(n);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(n);try{i(n)}catch(e){try{return i.call(null,n)}catch(e){return i.call(this,n)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function p(){}n.nextTick=function(e){var n=new Array(arguments.length-1);if(1<arguments.length)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];c.push(new h(e,n)),1!==c.length||u||s(g)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},{}],7:[function(e,n,t){"use strict";var i,r,o,a=e("decouple"),s=e("emitter"),l=!1,c=window.document,u=c.documentElement,e=window.navigator.msPointerEnabled,d={start:e?"MSPointerDown":"touchstart",move:e?"MSPointerMove":"touchmove",end:e?"MSPointerUp":"touchend"},f=function(){var e,n=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,t=c.getElementsByTagName("script")[0].style;for(e in t)if(n.test(e))return"-"+e.match(n)[0].toLowerCase()+"-";return"WebkitOpacity"in t?"-webkit-":"KhtmlOpacity"in t?"-khtml-":""}();function g(e){e=e||{},this._startOffsetX=0,this._currentOffsetX=0,this._opening=!1,this._moved=!1,this._opened=!1,this._preventOpen=!1,this._touch=(void 0===e.touch||e.touch)&&!0,this._side=e.side||"left",this.panel=e.panel,this.menu=e.menu,this.panel.classList.contains("slideout-panel")||this.panel.classList.add("slideout-panel"),this.panel.classList.contains("slideout-panel-"+this._side)||this.panel.classList.add("slideout-panel-"+this._side),this.menu.classList.contains("slideout-menu")||this.menu.classList.add("slideout-menu"),this.menu.classList.contains("slideout-menu-"+this._side)||this.menu.classList.add("slideout-menu-"+this._side),this._fx=e.fx||"ease",this._duration=parseInt(e.duration,10)||300,this._tolerance=parseInt(e.tolerance,10)||70,this._padding=this._translateTo=parseInt(e.padding,10)||256,this._orientation="right"===this._side?-1:1,this._translateTo*=this._orientation,this._touch&&this._initTouchEvents()}o=s,(r=g).prototype=function(e,n){for(var t in n)n[t]&&(e[t]=n[t]);return e}(r.prototype||{},o.prototype),g.prototype.open=function(){var e=this;return this.emit("beforeopen"),u.classList.contains("slideout-open")||u.classList.add("slideout-open"),this._setTransition(),this._translateXTo(this._translateTo),this._opened=!0,setTimeout(function(){e.panel.style.transition=e.panel.style["-webkit-transition"]="",e.emit("open")},this._duration+50),this},g.prototype.close=function(){var e=this;return(this.isOpen()||this._opening)&&(this.emit("beforeclose"),this._setTransition(),this._translateXTo(0),this._opened=!1,setTimeout(function(){u.classList.remove("slideout-open"),e.panel.style.transition=e.panel.style["-webkit-transition"]=e.panel.style[f+"transform"]=e.panel.style.transform="",e.emit("close")},this._duration+50)),this},g.prototype.toggle=function(){return this.isOpen()?this.close():this.open()},g.prototype.isOpen=function(){return this._opened},g.prototype._translateXTo=function(e){return this._currentOffsetX=e,this.panel.style[f+"transform"]=this.panel.style.transform="translateX("+e+"px)",this},g.prototype._setTransition=function(){return this.panel.style[f+"transition"]=this.panel.style.transition=f+"transform "+this._duration+"ms "+this._fx,this},g.prototype._initTouchEvents=function(){var r=this;return this._onScrollFn=a(c,"scroll",function(){r._moved||(clearTimeout(i),l=!0,i=setTimeout(function(){l=!1},250))}),this._preventMove=function(e){r._moved&&e.preventDefault()},c.addEventListener(d.move,this._preventMove),this._resetTouchFn=function(e){void 0!==e.touches&&(r._moved=!1,r._opening=!1,r._startOffsetX=e.touches[0].pageX,r._preventOpen=!r._touch||!r.isOpen()&&0!==r.menu.clientWidth)},this.panel.addEventListener(d.start,this._resetTouchFn),this._onTouchCancelFn=function(){r._moved=!1,r._opening=!1},this.panel.addEventListener("touchcancel",this._onTouchCancelFn),this._onTouchEndFn=function(){r._moved&&(r.emit("translateend"),r._opening&&Math.abs(r._currentOffsetX)>r._tolerance?r.open():r.close()),r._moved=!1},this.panel.addEventListener(d.end,this._onTouchEndFn),this._onTouchMoveFn=function(e){var n,t;l||r._preventOpen||void 0===e.touches||function(e){for(;e.parentNode;){if(null!==e.getAttribute("data-slideout-ignore"))return e;e=e.parentNode}}(e.target)||(n=e.touches[0].clientX-r._startOffsetX,t=r._currentOffsetX=n,Math.abs(t)>r._padding||20<Math.abs(n)&&(r._opening=!0,e=n*r._orientation,r._opened&&0<e||!r._opened&&e<0||(r._moved||r.emit("translatestart"),e<=0&&(t=n+r._padding*r._orientation,r._opening=!1),r._moved&&u.classList.contains("slideout-open")||u.classList.add("slideout-open"),r.panel.style[f+"transform"]=r.panel.style.transform="translateX("+t+"px)",r.emit("translate",t),r._moved=!0)))},this.panel.addEventListener(d.move,this._onTouchMoveFn),this},g.prototype.enableTouch=function(){return this._touch=!0,this},g.prototype.disableTouch=function(){return this._touch=!1,this},g.prototype.destroy=function(){return this.close(),c.removeEventListener(d.move,this._preventMove),this.panel.removeEventListener(d.start,this._resetTouchFn),this.panel.removeEventListener("touchcancel",this._onTouchCancelFn),this.panel.removeEventListener(d.end,this._onTouchEndFn),this.panel.removeEventListener(d.move,this._onTouchMoveFn),c.removeEventListener("scroll",this._onScrollFn),this.open=this.close=function(){},this},n.exports=g},{decouple:2,emitter:3}]},{},[1]);