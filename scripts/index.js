!function a(s,o,l){function c(n,e){if(!o[n]){if(!s[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var r=o[n]={exports:{}};s[n][0].call(r.exports,function(e){return c(s[n][1][e]||e)},r,r.exports,a,s,o,l)}return o[n].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,n,t){"use strict";window.Slideout=e("slideout");var i=e("highlight.js/lib/highlight"),r=e("highlight.js/lib/languages/javascript");i.registerLanguage("javascript",r),window.hljs=i;var a=function(e,n){setTimeout(function(e,n){e.location.href=n},250,e,n)}.bind(void 0,window);document.addEventListener("DOMContentLoaded",function(e){var n=new Slideout({menu:document.getElementById("menu"),panel:document.getElementById("panel"),padding:300,tolerance:70});document.getElementById("toggle-button").addEventListener("click",function(e){n.toggle()}),document.querySelectorAll(".delayed-opening").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),n.close(),a(e.target.href)})}),Array.from(document.getElementsByClassName("menu-main-element")).forEach(function(t){t.addEventListener("click",function(e){var n=t.nextElementSibling;Array.from(document.getElementsByClassName("menu-wrapper")).forEach(function(e){e!==n&&e.classList.remove("menu-open-wrapper")}),n.classList.toggle("menu-open-wrapper",!0)})}),i.initHighlightingOnLoad()})},{"highlight.js/lib/highlight":3,"highlight.js/lib/languages/javascript":4,slideout:5}],2:[function(e,n,t){"use strict";var o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};n.exports=function(e,n,t){var i,r=!1;function a(e){i=e,r||(o(s),r=!0)}function s(){t.call(e,i),r=!1}return e.addEventListener(n,a,!1),a}},{}],3:[function(e,n,t){var i,r;i=function(r){var t,d=[],l=Object.keys,v={},o={},n=/^(no-?highlight|plain|text)$/i,c=/\blang(?:uage)?-([\w-]+)\b/i,i=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,E="</span>",b={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function y(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h(e){return e.nodeName.toLowerCase()}function N(e,n){var t=e&&e.exec(n);return t&&0===t.index}function u(e){return n.test(e)}function f(e){var n,t={},i=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return i.forEach(function(e){for(n in e)t[n]=e[n]}),t}function g(e){var r=[];return function e(n,t){for(var i=n.firstChild;i;i=i.nextSibling)3===i.nodeType?t+=i.nodeValue.length:1===i.nodeType&&(r.push({event:"start",offset:t,node:i}),t=e(i,t),h(i).match(/br|hr|img|input/)||r.push({event:"stop",offset:t,node:i}));return t}(e,0),r}function a(e){if(t&&!e.langApiRestored){for(var n in e.langApiRestored=!0,t)e[n]&&(e[t[n]]=e[n]);(e.contains||[]).concat(e.variants||[]).forEach(a)}}function w(s){function c(e){return e&&e.source||e}function o(e,n){return new RegExp(c(e),"m"+(s.case_insensitive?"i":"")+(n?"g":""))}!function n(t,e){if(!t.compiled){if(t.compiled=!0,t.keywords=t.keywords||t.beginKeywords,t.keywords){function i(t,e){s.case_insensitive&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var n=e.split("|");r[n[0]]=[t,n[1]?Number(n[1]):1]})}var r={};"string"==typeof t.keywords?i("keyword",t.keywords):l(t.keywords).forEach(function(e){i(e,t.keywords[e])}),t.keywords=r}t.lexemesRe=o(t.lexemes||/\w+/,!0),e&&(t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")\\b"),t.begin||(t.begin=/\B|\b/),t.beginRe=o(t.begin),t.endSameAsBegin&&(t.end=t.begin),t.end||t.endsWithParent||(t.end=/\B|\b/),t.end&&(t.endRe=o(t.end)),t.terminator_end=c(t.end)||"",t.endsWithParent&&e.terminator_end&&(t.terminator_end+=(t.end?"|":"")+e.terminator_end)),t.illegal&&(t.illegalRe=o(t.illegal)),null==t.relevance&&(t.relevance=1),t.contains||(t.contains=[]),t.contains=Array.prototype.concat.apply([],t.contains.map(function(e){return function(n){return n.variants&&!n.cached_variants&&(n.cached_variants=n.variants.map(function(e){return f(n,{variants:null},e)})),n.cached_variants||n.endsWithParent&&[f(n)]||[n]}("self"===e?t:e)})),t.contains.forEach(function(e){n(e,t)}),t.starts&&n(t.starts,e);var a=t.contains.map(function(e){return e.beginKeywords?"\\.?(?:"+e.begin+")\\.?":e.begin}).concat([t.terminator_end,t.illegal]).map(c).filter(Boolean);t.terminators=a.length?o(function(e,n){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,i=0,r="",a=0;a<e.length;a++){var s=i,o=c(e[a]);for(0<a&&(r+=n);0<o.length;){var l=t.exec(o);if(null==l){r+=o;break}r+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),"\\"==l[0][0]&&l[1]?r+="\\"+String(Number(l[1])+s):(r+=l[0],"("==l[0]&&i++)}}return r}(a,"|"),!0):{exec:function(){return null}}}}(s)}function R(e,n,a,t){function o(e,n,t,i){var r='<span class="'+(i?"":b.classPrefix);return e?(r+=e+'">')+n+(t?"":E):n}function s(){h+=null!=u.subLanguage?function(){var e="string"==typeof u.subLanguage;if(e&&!v[u.subLanguage])return y(f);var n=e?R(u.subLanguage,f,!0,d[u.subLanguage]):M(f,u.subLanguage.length?u.subLanguage:void 0);return 0<u.relevance&&(g+=n.relevance),e&&(d[u.subLanguage]=n.top),o(n.language,n.value,!1,!0)}():function(){var e,n,t,i,r,a,s;if(!u.keywords)return y(f);for(i="",n=0,u.lexemesRe.lastIndex=0,t=u.lexemesRe.exec(f);t;)i+=y(f.substring(n,t.index)),r=u,a=t,void 0,s=c.case_insensitive?a[0].toLowerCase():a[0],(e=r.keywords.hasOwnProperty(s)&&r.keywords[s])?(g+=e[1],i+=o(e[0],y(t[0]))):i+=y(t[0]),n=u.lexemesRe.lastIndex,t=u.lexemesRe.exec(f);return i+y(f.substr(n))}(),f=""}function l(e){h+=e.className?o(e.className,"",!0):"",u=Object.create(e,{parent:{value:u}})}function i(e,n){if(f+=e,null==n)return s(),0;var t=function(e,n){var t,i,r;for(t=0,i=n.contains.length;t<i;t++)if(N(n.contains[t].beginRe,e))return n.contains[t].endSameAsBegin&&(n.contains[t].endRe=(r=n.contains[t].beginRe.exec(e)[0],new RegExp(r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),n.contains[t]}(n,u);if(t)return t.skip?f+=n:(t.excludeBegin&&(f+=n),s(),t.returnBegin||t.excludeBegin||(f=n)),l(t),t.returnBegin?0:n.length;var i=function e(n,t){if(N(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(u,n);if(i){var r=u;for(r.skip?f+=n:(r.returnEnd||r.excludeEnd||(f+=n),s(),r.excludeEnd&&(f=n));u.className&&(h+=E),u.skip||u.subLanguage||(g+=u.relevance),(u=u.parent)!==i.parent;);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),l(i.starts)),r.returnEnd?0:n.length}if(function(e,n){return!a&&N(n.illegalRe,e)}(n,u))throw new Error('Illegal lexeme "'+n+'" for mode "'+(u.className||"<unnamed>")+'"');return f+=n,n.length||1}var c=O(e);if(!c)throw new Error('Unknown language: "'+e+'"');w(c);var r,u=t||c,d={},h="";for(r=u;r!==c;r=r.parent)r.className&&(h=o(r.className,"",!0)+h);var f="",g=0;try{for(var p,m,_=0;u.terminators.lastIndex=_,p=u.terminators.exec(n);)m=i(n.substring(_,p.index),p[0]),_=p.index+m;for(i(n.substr(_)),r=u;r.parent;r=r.parent)r.className&&(h+=E);return{relevance:g,value:h,language:e,top:u}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:y(n)};throw e}}function M(t,e){e=e||b.languages||l(v);var i={relevance:0,value:y(t)},r=i;return e.filter(O).filter(_).forEach(function(e){var n=R(e,t,!1);n.language=e,n.relevance>r.relevance&&(r=n),n.relevance>i.relevance&&(r=i,i=n)}),r.language&&(i.second_best=r),i}function p(e){return b.tabReplace||b.useBR?e.replace(i,function(e,n){return b.useBR&&"\n"===e?"<br>":b.tabReplace?n.replace(/\t/g,b.tabReplace):""}):e}function s(e){var n,t,i,r,a,s=function(e){var n,t,i,r,a=e.className+" ";if(a+=e.parentNode?e.parentNode.className:"",t=c.exec(a))return O(t[1])?t[1]:"no-highlight";for(n=0,i=(a=a.split(/\s+/)).length;n<i;n++)if(u(r=a[n])||O(r))return r}(e);u(s)||(b.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,a=n.textContent,i=s?R(s,a,!0):M(a),(t=g(n)).length&&((r=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=i.value,i.value=function(e,n,t){var i=0,r="",a=[];function s(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function o(e){r+="<"+h(e)+d.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+y(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function l(e){r+="</"+h(e)+">"}function c(e){("start"===e.event?o:l)(e.node)}for(;e.length||n.length;){var u=s();if(r+=y(t.substring(i,u[0].offset)),i=u[0].offset,u===e){for(a.reverse().forEach(l);c(u.splice(0,1)[0]),(u=s())===e&&u.length&&u[0].offset===i;);a.reverse().forEach(o)}else"start"===u[0].event?a.push(u[0].node):a.pop(),c(u.splice(0,1)[0])}return r+y(t.substr(i))}(t,g(r),a)),i.value=p(i.value),e.innerHTML=i.value,e.className=function(e,n,t){var i=n?o[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),-1===e.indexOf(i)&&r.push(i),r.join(" ").trim()}(e.className,s,i.language),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function m(){if(!m.called){m.called=!0;var e=document.querySelectorAll("pre code");d.forEach.call(e,s)}}function O(e){return e=(e||"").toLowerCase(),v[e]||v[o[e]]}function _(e){var n=O(e);return n&&!n.disableAutodetect}return r.highlight=R,r.highlightAuto=M,r.fixMarkup=p,r.highlightBlock=s,r.configure=function(e){b=f(b,e)},r.initHighlighting=m,r.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",m,!1),addEventListener("load",m,!1)},r.registerLanguage=function(n,e){var t=v[n]=e(r);a(t),t.aliases&&t.aliases.forEach(function(e){o[e]=n})},r.listLanguages=function(){return l(v)},r.getLanguage=O,r.autoDetection=_,r.inherit=f,r.IDENT_RE="[a-zA-Z]\\w*",r.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",r.NUMBER_RE="\\b\\d+(\\.\\d+)?",r.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",r.BINARY_NUMBER_RE="\\b(0b[01]+)",r.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",r.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},r.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[r.BACKSLASH_ESCAPE]},r.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[r.BACKSLASH_ESCAPE]},r.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},r.COMMENT=function(e,n,t){var i=r.inherit({className:"comment",begin:e,end:n,contains:[]},t||{});return i.contains.push(r.PHRASAL_WORDS_MODE),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),i},r.C_LINE_COMMENT_MODE=r.COMMENT("//","$"),r.C_BLOCK_COMMENT_MODE=r.COMMENT("/\\*","\\*/"),r.HASH_COMMENT_MODE=r.COMMENT("#","$"),r.NUMBER_MODE={className:"number",begin:r.NUMBER_RE,relevance:0},r.C_NUMBER_MODE={className:"number",begin:r.C_NUMBER_RE,relevance:0},r.BINARY_NUMBER_MODE={className:"number",begin:r.BINARY_NUMBER_RE,relevance:0},r.CSS_NUMBER_MODE={className:"number",begin:r.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},r.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[r.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[r.BACKSLASH_ESCAPE]}]},r.TITLE_MODE={className:"title",begin:r.IDENT_RE,relevance:0},r.UNDERSCORE_TITLE_MODE={className:"title",begin:r.UNDERSCORE_IDENT_RE,relevance:0},r.METHOD_GUARD={begin:"\\.\\s*"+r.UNDERSCORE_IDENT_RE,relevance:0},r},r="object"==typeof window&&window||"object"==typeof self&&self,void 0===t||t.nodeType?r&&(r.hljs=i({}),"function"==typeof define&&define.amd&&define([],function(){return r.hljs})):i(t)},{}],4:[function(e,n,t){n.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},i={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},a={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]};r.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,i,e.REGEXP_MODE];var s=r.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:s}]}]},{className:"",begin:/\s/,end:/\s*/,skip:!0},{begin:/</,end:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,subLanguage:"xml",contains:[{begin:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},{begin:/<[A-Za-z0-9\\._:-]+/,end:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,skip:!0,contains:[{begin:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},{}],5:[function(e,n,t){"use strict";var i,r,a,s=e("decouple"),o=e("emitter"),l=!1,c=window.document,u=c.documentElement,d=window.navigator.msPointerEnabled,h={start:d?"MSPointerDown":"touchstart",move:d?"MSPointerMove":"touchmove",end:d?"MSPointerUp":"touchend"},f=function(){var e=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,n=c.getElementsByTagName("script")[0].style;for(var t in n)if(e.test(t))return"-"+t.match(e)[0].toLowerCase()+"-";return"WebkitOpacity"in n?"-webkit-":"KhtmlOpacity"in n?"-khtml-":""}();function g(e){e=e||{},this._startOffsetX=0,this._currentOffsetX=0,this._opening=!1,this._moved=!1,this._opened=!1,this._preventOpen=!1,this._touch=void 0===e.touch||e.touch&&!0,this._side=e.side||"left",this.panel=e.panel,this.menu=e.menu,this.panel.classList.contains("slideout-panel")||this.panel.classList.add("slideout-panel"),this.panel.classList.contains("slideout-panel-"+this._side)||this.panel.classList.add("slideout-panel-"+this._side),this.menu.classList.contains("slideout-menu")||this.menu.classList.add("slideout-menu"),this.menu.classList.contains("slideout-menu-"+this._side)||this.menu.classList.add("slideout-menu-"+this._side),this._fx=e.fx||"ease",this._duration=parseInt(e.duration,10)||300,this._tolerance=parseInt(e.tolerance,10)||70,this._padding=this._translateTo=parseInt(e.padding,10)||256,this._orientation="right"===this._side?-1:1,this._translateTo*=this._orientation,this._touch&&this._initTouchEvents()}a=o,(r=g).prototype=function(e,n){for(var t in n)n[t]&&(e[t]=n[t]);return e}(r.prototype||{},a.prototype),g.prototype.open=function(){var e=this;return this.emit("beforeopen"),u.classList.contains("slideout-open")||u.classList.add("slideout-open"),this._setTransition(),this._translateXTo(this._translateTo),this._opened=!0,setTimeout(function(){e.panel.style.transition=e.panel.style["-webkit-transition"]="",e.emit("open")},this._duration+50),this},g.prototype.close=function(){var e=this;return(this.isOpen()||this._opening)&&(this.emit("beforeclose"),this._setTransition(),this._translateXTo(0),this._opened=!1,setTimeout(function(){u.classList.remove("slideout-open"),e.panel.style.transition=e.panel.style["-webkit-transition"]=e.panel.style[f+"transform"]=e.panel.style.transform="",e.emit("close")},this._duration+50)),this},g.prototype.toggle=function(){return this.isOpen()?this.close():this.open()},g.prototype.isOpen=function(){return this._opened},g.prototype._translateXTo=function(e){return this._currentOffsetX=e,this.panel.style[f+"transform"]=this.panel.style.transform="translateX("+e+"px)",this},g.prototype._setTransition=function(){return this.panel.style[f+"transition"]=this.panel.style.transition=f+"transform "+this._duration+"ms "+this._fx,this},g.prototype._initTouchEvents=function(){var r=this;return this._onScrollFn=s(c,"scroll",function(){r._moved||(clearTimeout(i),l=!0,i=setTimeout(function(){l=!1},250))}),this._preventMove=function(e){r._moved&&e.preventDefault()},c.addEventListener(h.move,this._preventMove),this._resetTouchFn=function(e){void 0!==e.touches&&(r._moved=!1,r._opening=!1,r._startOffsetX=e.touches[0].pageX,r._preventOpen=!r._touch||!r.isOpen()&&0!==r.menu.clientWidth)},this.panel.addEventListener(h.start,this._resetTouchFn),this._onTouchCancelFn=function(){r._moved=!1,r._opening=!1},this.panel.addEventListener("touchcancel",this._onTouchCancelFn),this._onTouchEndFn=function(){r._moved&&(r.emit("translateend"),r._opening&&Math.abs(r._currentOffsetX)>r._tolerance?r.open():r.close()),r._moved=!1},this.panel.addEventListener(h.end,this._onTouchEndFn),this._onTouchMoveFn=function(e){if(!(l||r._preventOpen||void 0===e.touches||function(e){for(;e.parentNode;){if(null!==e.getAttribute("data-slideout-ignore"))return e;e=e.parentNode}return null}(e.target))){var n=e.touches[0].clientX-r._startOffsetX,t=r._currentOffsetX=n;if(!(Math.abs(t)>r._padding)&&20<Math.abs(n)){r._opening=!0;var i=n*r._orientation;if(r._opened&&0<i||!r._opened&&i<0)return;r._moved||r.emit("translatestart"),i<=0&&(t=n+r._padding*r._orientation,r._opening=!1),r._moved&&u.classList.contains("slideout-open")||u.classList.add("slideout-open"),r.panel.style[f+"transform"]=r.panel.style.transform="translateX("+t+"px)",r.emit("translate",t),r._moved=!0}}},this.panel.addEventListener(h.move,this._onTouchMoveFn),this},g.prototype.enableTouch=function(){return this._touch=!0,this},g.prototype.disableTouch=function(){return this._touch=!1,this},g.prototype.destroy=function(){return this.close(),c.removeEventListener(h.move,this._preventMove),this.panel.removeEventListener(h.start,this._resetTouchFn),this.panel.removeEventListener("touchcancel",this._onTouchCancelFn),this.panel.removeEventListener(h.end,this._onTouchEndFn),this.panel.removeEventListener(h.move,this._onTouchMoveFn),c.removeEventListener("scroll",this._onScrollFn),this.open=this.close=function(){},this},n.exports=g},{decouple:2,emitter:6}],6:[function(e,n,t){"use strict";t.__esModule=!0;var i=(r.prototype.on=function(e,n){return this._eventCollection=this._eventCollection||{},this._eventCollection[e]=this._eventCollection[e]||[],this._eventCollection[e].push(n),this},r.prototype.once=function(e,n){var t=this;function i(){t.off(e,i),n.apply(this,arguments)}return i.listener=n,this.on(e,i),this},r.prototype.off=function(e,t){var i=void 0;return this._eventCollection&&(i=this._eventCollection[e])&&(i.forEach(function(e,n){e!==t&&e.listener!==t||i.splice(n,1)}),0===i.length&&delete this._eventCollection[e]),this},r.prototype.emit=function(e){for(var n=this,t=arguments.length,i=Array(1<t?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];var a=void 0;return this._eventCollection&&(a=this._eventCollection[e])&&(a=a.slice(0)).forEach(function(e){return e.apply(n,i)}),this},r);function r(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r)}t.default=i,n.exports=t.default},{}]},{},[1]);