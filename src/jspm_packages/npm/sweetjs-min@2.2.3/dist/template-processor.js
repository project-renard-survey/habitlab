'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),exports.processTemplate=processTemplate,exports.replaceTemplate=replaceTemplate;var _immutable=require('immutable'),_ramda=require('ramda'),_ramda2=_interopRequireDefault(_ramda),_syntax=require('./syntax'),_syntax2=_interopRequireDefault(_syntax),_errors=require('./errors');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const isDolar=a=>a&&'function'==typeof a.match&&a.match('identifier')&&'$'===a.val(),isDelimiter=a=>a&&'function'==typeof a.match&&a.match('delimiter'),isBraces=a=>a&&'function'==typeof a.match&&a.match('braces'),isParens=a=>a&&'function'==typeof a.match&&a.match('parens'),isBrackets=a=>a&&'function'==typeof a.match&&a.match('brackets'),insertIntoDelimiter=_ramda2.default.cond([[isBraces,(a,b)=>_syntax2.default.from('braces',b,a)],[isParens,(a,b)=>_syntax2.default.from('parens',b,a)],[isBrackets,(a,b)=>_syntax2.default.from('brackets',b,a)]]),process2=(a,b)=>{if(isBraces(b)&&isDolar(a.template.last()))return{template:a.template.push(_syntax2.default.from('braces',_immutable.List.of(_syntax2.default.from('number',a.interp.size)),b)),interp:a.interp.push(b.inner())};if(isDelimiter(b)){let c=processTemplate(b.inner(),a.interp);return{template:a.template.push(insertIntoDelimiter(b,c.template)),interp:c.interp}}return{template:a.template.push(b),interp:a.interp}};function cloneLineNumber(a,b){if(b&&a){if('function'==typeof a.setLineNumber)return a.setLineNumber(b.lineNumber());if(_immutable.List.isList(a))return a.map(c=>cloneLineNumber(c,b))}return a}const replace=(a,b)=>{let c=a.template.get(-1),d=a.template.get(-2);if(isBraces(b)&&isDolar(c)){let e=b.inner().first().val();(0,_errors.assert)(a.rep.size>e,'unknown replacement value');let f=cloneLineNumber(a.rep.get(e),d);return{template:a.template.pop().concat(f),rep:a.rep}}if(isDelimiter(b)){let e=replaceTemplate(b.inner(),a.rep);return{template:a.template.push(insertIntoDelimiter(b,e)),rep:a.rep}}return{template:a.template.push(b),rep:a.rep}};function processTemplate(a){let b=1>=arguments.length||arguments[1]===void 0?(0,_immutable.List)():arguments[1];return a.reduce(process2,{template:(0,_immutable.List)(),interp:b})}function replaceTemplate(a,b){return a.reduce(replace,{template:(0,_immutable.List)(),rep:b}).template}
