System.registerDynamic("npm:percipio@0.1.2/src/bandits.js",["underscore","./stats"],!0,function(d,f,g){var k=this||self,o=d("underscore"),q=d("./stats").rbeta,r=d("./stats").pdfbeta,s=d("./stats").beta,u=function(w,z,A,B){var C={};return C.id=w,C.reward=z,C.wins=A,C.trials=B,C.losses=function(){return C.trials-C.wins},C.prizeProbability=function(){return q(1+C.wins,1+C.losses())},C.posterior=function(D){return r(D,1+C.wins,1+C.losses())},C},v=function(w){var z={};return z.arms=w,z.maxPrizeArm=function(){return o.max(z.arms,function(A){return A.prizeProbability()})},z.update=function(A,B){var A=o.find(z.arms,function(C){return C.id==A.id});A.wins+=B,A.trials+=1},z.armPosteriors=function(){return x=o.range(0,1,0.01),z.arms.map(function(A){return A.posterior(x)})},z};g.exports.Predictor=function(w){var z={},A=v(w);return z.predict=function(){var B=A.maxPrizeArm();return B},z.learn=function(B,C){A.update(B,C)},z.posteriorProbabilities=function(){return A.armPosteriors()},z},g.exports.Arm=u,g.exports.createArm=function(w,z){return u(w,z,0,0)}}),System.registerDynamic("npm:percipio@0.1.2/src/naive_bayes.js",["underscore"],!0,function(d,f,g){var h=this||self,m=d("underscore");g.exports.Predictor=function(){function q(t,u){var v={};return m.keys(t).forEach(function(w){v[w]=t[w]/u}),v}function r(t,u){var v={};return m.keys(u).forEach(function(w){var z=u[w];v[w]={},t[w].forEach(function(A,B){v[w][B]=A/z})}),v}var s={};return s.totalCount=0,s.classCounts={},s.conditionalCounts={},s.learn=function(t,u){s.totalCount++,s.classCounts[u]=void 0===s.classCounts[u]?1:s.classCounts[u]+1,void 0===s.conditionalCounts[u]&&(s.conditionalCounts[u]=Array(t.length+1).join("0").split("").map(parseFloat)),t.forEach(function(v,w){s.conditionalCounts[u][w]+=v})},s.predict=function(t){var u=q(s.classCounts,s.totalCount),v=r(s.conditionalCounts,s.classCounts),w={};m.keys(s.classCounts).forEach(function(A){w[A]=Math.log(u[A]),t.forEach(function(B,C){0<B&&(w[A]+=Math.log(v[A][C]))})});var z=m.max(w);return parseFloat(m.invert(w)[z])},s}}),System.registerDynamic("npm:percipio@0.1.2/src/stats.js",["underscore"],!0,function(d,f,g){function h(z){return z.reduce(function(A,B){return A+B})}function k(z){return h(z)/z.length}function s(z,A){var B=Math.log(z)*(z-0.5)+Math.log(A)*(A-0.5),C=Math.log(z+A)*(z+A-0.5);return Math.sqrt(2*Math.PI)*Math.exp(B-C)}var u=this||self,w=d("underscore");g.exports.sum=h,g.exports.mean=k,g.exports.min=function(z){return w.min(z)},g.exports.max=function(z){return w.max(z)},g.exports.variance=function(z){var A=k(z),B=z.map(function(C){return Math.pow(C-A,2)});return k(B)},g.exports.beta=s,g.exports.rbeta=function(z,A){var B=z/A;if(1>=Math.min(z,A))var C=Math.min(z,A);else var C=Math.sqrt((2*z*A-z-A)/(z+A-2));for(;;){var D=Math.random(),E=Math.random(),F=Math.pow(1/D-1,1/C);if(4*D*E*E<Math.pow(F,z-C)*Math.pow((1+B)/(1+B*F),z+A))return B*F/(1+B*F)}},g.exports.pdfbeta=function(z,A,B){return _beta=s(A,B),z.map(function(D){return Math.pow(D,A-1)*Math.pow(1-D,B-1)/_beta})}}),System.registerDynamic("npm:underscore@1.8.3.json",[],!0,function(){return{main:"underscore.js",format:"cjs",meta:{"*.json":{format:"json"}}}}),System.registerDynamic("npm:underscore@1.8.3/underscore.js",[],!0,function(d,f,g){var h=this||self;(function(){function m(fa){function ga(ha,ia,ja,ka,la,ma){for(;0<=la&&la<ma;la+=fa){var na=ka?ka[la]:la;ja=ia(ja,ha[na],na,ha)}return ja}return function(ha,ia,ja,ka){ia=J(ia,ka,4);var la=!Q(ha)&&I.keys(ha),ma=(la||ha).length,na=0<fa?0:ma-1;return 3>arguments.length&&(ja=ha[la?la[na]:na],na+=fa),ga(ha,ia,ja,la,na,ma)}}function o(fa){return function(ga,ha,ia){ha=K(ha,ia);for(var ja=P(ga),ka=0<fa?0:ja-1;0<=ka&&ka<ja;ka+=fa)if(ha(ga[ka],ka,ga))return ka;return-1}}function q(fa,ga,ha){return function(ia,ja,ka){var la=0,ma=P(ia);if("number"==typeof ka)0<fa?la=0<=ka?ka:Math.max(ka+ma,la):ma=0<=ka?Math.min(ka+1,ma):ka+ma+1;else if(ha&&ka&&ma)return ka=ha(ia,ja),ia[ka]===ja?ka:-1;if(ja!==ja)return ka=ga(A.call(ia,la,ma),I.isNaN),0<=ka?ka+la:-1;for(ka=0<fa?la:ma-1;0<=ka&&ka<ma;ka+=fa)if(ia[ka]===ja)return ka;return-1}}function r(fa,ga){var ha=V.length,ia=fa.constructor,ja=I.isFunction(ia)&&ia.prototype||v,ka="constructor";for(I.has(fa,ka)&&!I.contains(ga,ka)&&ga.push(ka);ha--;)ka=V[ha],ka in fa&&fa[ka]!==ja[ka]&&!I.contains(ga,ka)&&ga.push(ka)}var s=this,t=s._,u=Array.prototype,v=Object.prototype,w=Function.prototype,z=u.push,A=u.slice,B=v.toString,C=v.hasOwnProperty,D=Array.isArray,E=Object.keys,F=w.bind,G=Object.create,H=function(){},I=function(fa){return fa instanceof I?fa:this instanceof I?void(this._wrapped=fa):new I(fa)};"undefined"==typeof f?s._=I:("undefined"!=typeof g&&g.exports&&(f=g.exports=I),f._=I),I.VERSION="1.8.3";var J=function(fa,ga,ha){if(void 0===ga)return fa;switch(null==ha?3:ha){case 1:return function(ia){return fa.call(ga,ia)};case 2:return function(ia,ja){return fa.call(ga,ia,ja)};case 3:return function(ia,ja,ka){return fa.call(ga,ia,ja,ka)};case 4:return function(ia,ja,ka,la){return fa.call(ga,ia,ja,ka,la)};}return function(){return fa.apply(ga,arguments)}},K=function(fa,ga,ha){return null==fa?I.identity:I.isFunction(fa)?J(fa,ga,ha):I.isObject(fa)?I.matcher(fa):I.property(fa)};I.iteratee=function(fa,ga){return K(fa,ga,Infinity)};var L=function(fa,ga){return function(ha){var ia=arguments.length;if(2>ia||null==ha)return ha;for(var ja=1;ja<ia;ja++)for(var oa,ka=arguments[ja],la=fa(ka),ma=la.length,na=0;na<ma;na++)oa=la[na],ga&&void 0!==ha[oa]||(ha[oa]=ka[oa]);return ha}},M=function(fa){if(!I.isObject(fa))return{};if(G)return G(fa);H.prototype=fa;var ga=new H;return H.prototype=null,ga},N=function(fa){return function(ga){return null==ga?void 0:ga[fa]}},O=Math.pow(2,53)-1,P=N("length"),Q=function(fa){var ga=P(fa);return"number"==typeof ga&&0<=ga&&ga<=O};I.each=I.forEach=function(fa,ga,ha){ga=J(ga,ha);var ia,ja;if(Q(fa))for(ia=0,ja=fa.length;ia<ja;ia++)ga(fa[ia],ia,fa);else{var ka=I.keys(fa);for(ia=0,ja=ka.length;ia<ja;ia++)ga(fa[ka[ia]],ka[ia],fa)}return fa},I.map=I.collect=function(fa,ga,ha){ga=K(ga,ha);for(var ma,ia=!Q(fa)&&I.keys(fa),ja=(ia||fa).length,ka=Array(ja),la=0;la<ja;la++)ma=ia?ia[la]:la,ka[la]=ga(fa[ma],ma,fa);return ka},I.reduce=I.foldl=I.inject=m(1),I.reduceRight=I.foldr=m(-1),I.find=I.detect=function(fa,ga,ha){var ia;if(ia=Q(fa)?I.findIndex(fa,ga,ha):I.findKey(fa,ga,ha),void 0!=ia&&-1!==ia)return fa[ia]},I.filter=I.select=function(fa,ga,ha){var ia=[];return ga=K(ga,ha),I.each(fa,function(ja,ka,la){ga(ja,ka,la)&&ia.push(ja)}),ia},I.reject=function(fa,ga,ha){return I.filter(fa,I.negate(K(ga)),ha)},I.every=I.all=function(fa,ga,ha){ga=K(ga,ha);for(var la,ia=!Q(fa)&&I.keys(fa),ja=(ia||fa).length,ka=0;ka<ja;ka++)if(la=ia?ia[ka]:ka,!ga(fa[la],la,fa))return!1;return!0},I.some=I.any=function(fa,ga,ha){ga=K(ga,ha);for(var la,ia=!Q(fa)&&I.keys(fa),ja=(ia||fa).length,ka=0;ka<ja;ka++)if(la=ia?ia[ka]:ka,ga(fa[la],la,fa))return!0;return!1},I.contains=I.includes=I.include=function(fa,ga,ha,ia){return Q(fa)||(fa=I.values(fa)),("number"!=typeof ha||ia)&&(ha=0),0<=I.indexOf(fa,ga,ha)},I.invoke=function(fa,ga){var ha=A.call(arguments,2),ia=I.isFunction(ga);return I.map(fa,function(ja){var ka=ia?ga:ja[ga];return null==ka?ka:ka.apply(ja,ha)})},I.pluck=function(fa,ga){return I.map(fa,I.property(ga))},I.where=function(fa,ga){return I.filter(fa,I.matcher(ga))},I.findWhere=function(fa,ga){return I.find(fa,I.matcher(ga))},I.max=function(fa,ga,ha){var ka,la,ia=-Infinity,ja=-Infinity;if(null==ga&&null!=fa){fa=Q(fa)?fa:I.values(fa);for(var ma=0,na=fa.length;ma<na;ma++)ka=fa[ma],ka>ia&&(ia=ka)}else ga=K(ga,ha),I.each(fa,function(oa,pa,qa){la=ga(oa,pa,qa),(la>ja||la===-Infinity&&ia==-Infinity)&&(ia=oa,ja=la)});return ia},I.min=function(fa,ga,ha){var ka,la,ia=Infinity,ja=Infinity;if(null==ga&&null!=fa){fa=Q(fa)?fa:I.values(fa);for(var ma=0,na=fa.length;ma<na;ma++)ka=fa[ma],ka<ia&&(ia=ka)}else ga=K(ga,ha),I.each(fa,function(oa,pa,qa){la=ga(oa,pa,qa),(la<ja||la===Infinity&&ia==Infinity)&&(ia=oa,ja=la)});return ia},I.shuffle=function(fa){for(var ka,ga=Q(fa)?fa:I.values(fa),ha=ga.length,ia=Array(ha),ja=0;ja<ha;ja++)ka=I.random(0,ja),ka!==ja&&(ia[ja]=ia[ka]),ia[ka]=ga[ja];return ia},I.sample=function(fa,ga,ha){return null==ga||ha?(Q(fa)||(fa=I.values(fa)),fa[I.random(fa.length-1)]):I.shuffle(fa).slice(0,Math.max(0,ga))},I.sortBy=function(fa,ga,ha){return ga=K(ga,ha),I.pluck(I.map(fa,function(ia,ja,ka){return{value:ia,index:ja,criteria:ga(ia,ja,ka)}}).sort(function(ia,ja){var ka=ia.criteria,la=ja.criteria;if(ka!==la){if(ka>la||void 0===ka)return 1;if(ka<la||void 0===la)return-1}return ia.index-ja.index}),"value")};var R=function(fa){return function(ga,ha,ia){var ja={};return ha=K(ha,ia),I.each(ga,function(ka,la){var ma=ha(ka,la,ga);fa(ja,ka,ma)}),ja}};I.groupBy=R(function(fa,ga,ha){I.has(fa,ha)?fa[ha].push(ga):fa[ha]=[ga]}),I.indexBy=R(function(fa,ga,ha){fa[ha]=ga}),I.countBy=R(function(fa,ga,ha){I.has(fa,ha)?fa[ha]++:fa[ha]=1}),I.toArray=function(fa){return fa?I.isArray(fa)?A.call(fa):Q(fa)?I.map(fa,I.identity):I.values(fa):[]},I.size=function(fa){return null==fa?0:Q(fa)?fa.length:I.keys(fa).length},I.partition=function(fa,ga,ha){ga=K(ga,ha);var ia=[],ja=[];return I.each(fa,function(ka,la,ma){(ga(ka,la,ma)?ia:ja).push(ka)}),[ia,ja]},I.first=I.head=I.take=function(fa,ga,ha){return null==fa?void 0:null==ga||ha?fa[0]:I.initial(fa,fa.length-ga)},I.initial=function(fa,ga,ha){return A.call(fa,0,Math.max(0,fa.length-(null==ga||ha?1:ga)))},I.last=function(fa,ga,ha){return null==fa?void 0:null==ga||ha?fa[fa.length-1]:I.rest(fa,Math.max(0,fa.length-ga))},I.rest=I.tail=I.drop=function(fa,ga,ha){return A.call(fa,null==ga||ha?1:ga)},I.compact=function(fa){return I.filter(fa,I.identity)};var S=function(fa,ga,ha,ia){for(var na,ja=[],ka=0,la=ia||0,ma=P(fa);la<ma;la++)if(na=fa[la],Q(na)&&(I.isArray(na)||I.isArguments(na))){ga||(na=S(na,ga,ha));var oa=0,pa=na.length;for(ja.length+=pa;oa<pa;)ja[ka++]=na[oa++]}else ha||(ja[ka++]=na);return ja};I.flatten=function(fa,ga){return S(fa,ga,!1)},I.without=function(fa){return I.difference(fa,A.call(arguments,1))},I.uniq=I.unique=function(fa,ga,ha,ia){I.isBoolean(ga)||(ia=ha,ha=ga,ga=!1),null!=ha&&(ha=K(ha,ia));for(var ja=[],ka=[],la=0,ma=P(fa);la<ma;la++){var na=fa[la],oa=ha?ha(na,la,fa):na;ga?((!la||ka!==oa)&&ja.push(na),ka=oa):ha?!I.contains(ka,oa)&&(ka.push(oa),ja.push(na)):!I.contains(ja,na)&&ja.push(na)}return ja},I.union=function(){return I.uniq(S(arguments,!0,!0))},I.intersection=function(fa){for(var ka,ga=[],ha=arguments.length,ia=0,ja=P(fa);ia<ja;ia++)if(ka=fa[ia],!I.contains(ga,ka)){for(var la=1;la<ha&&!!I.contains(arguments[la],ka);la++);la===ha&&ga.push(ka)}return ga},I.difference=function(fa){var ga=S(arguments,!0,!0,1);return I.filter(fa,function(ha){return!I.contains(ga,ha)})},I.zip=function(){return I.unzip(arguments)},I.unzip=function(fa){for(var ga=fa&&I.max(fa,P).length||0,ha=Array(ga),ia=0;ia<ga;ia++)ha[ia]=I.pluck(fa,ia);return ha},I.object=function(fa,ga){for(var ha={},ia=0,ja=P(fa);ia<ja;ia++)ga?ha[fa[ia]]=ga[ia]:ha[fa[ia][0]]=fa[ia][1];return ha},I.findIndex=o(1),I.findLastIndex=o(-1),I.sortedIndex=function(fa,ga,ha,ia){ha=K(ha,ia,1);for(var ma,ja=ha(ga),ka=0,la=P(fa);ka<la;)ma=Math.floor((ka+la)/2),ha(fa[ma])<ja?ka=ma+1:la=ma;return ka},I.indexOf=q(1,I.findIndex,I.sortedIndex),I.lastIndexOf=q(-1,I.findLastIndex),I.range=function(fa,ga,ha){null==ga&&(ga=fa||0,fa=0),ha=ha||1;for(var ia=Math.max(Math.ceil((ga-fa)/ha),0),ja=Array(ia),ka=0;ka<ia;ka++,fa+=ha)ja[ka]=fa;return ja};var T=function(fa,ga,ha,ia,ja){if(!(ia instanceof ga))return fa.apply(ha,ja);var ka=M(fa.prototype),la=fa.apply(ka,ja);return I.isObject(la)?la:ka};I.bind=function(fa,ga){if(F&&fa.bind===F)return F.apply(fa,A.call(arguments,1));if(!I.isFunction(fa))throw new TypeError("Bind must be called on a function");var ha=A.call(arguments,2),ia=function(){return T(fa,ia,ga,this,ha.concat(A.call(arguments)))};return ia},I.partial=function(fa){var ga=A.call(arguments,1),ha=function(){for(var ia=0,ja=ga.length,ka=Array(ja),la=0;la<ja;la++)ka[la]=ga[la]===I?arguments[ia++]:ga[la];for(;ia<arguments.length;)ka.push(arguments[ia++]);return T(fa,ha,this,this,ka)};return ha},I.bindAll=function(fa){var ga,ia,ha=arguments.length;if(1>=ha)throw new Error("bindAll must be passed function names");for(ga=1;ga<ha;ga++)ia=arguments[ga],fa[ia]=I.bind(fa[ia],fa);return fa},I.memoize=function(fa,ga){var ha=function(ia){var ja=ha.cache,ka=""+(ga?ga.apply(this,arguments):ia);return I.has(ja,ka)||(ja[ka]=fa.apply(this,arguments)),ja[ka]};return ha.cache={},ha},I.delay=function(fa,ga){var ha=A.call(arguments,2);return setTimeout(function(){return fa.apply(null,ha)},ga)},I.defer=I.partial(I.delay,I,1),I.throttle=function(fa,ga,ha){var ia,ja,ka,la=null,ma=0;ha||(ha={});var na=function(){ma=!1===ha.leading?0:I.now(),la=null,ka=fa.apply(ia,ja),la||(ia=ja=null)};return function(){var oa=I.now();ma||!1!==ha.leading||(ma=oa);var pa=ga-(oa-ma);return ia=this,ja=arguments,0>=pa||pa>ga?(la&&(clearTimeout(la),la=null),ma=oa,ka=fa.apply(ia,ja),!la&&(ia=ja=null)):!la&&!1!==ha.trailing&&(la=setTimeout(na,pa)),ka}},I.debounce=function(fa,ga,ha){var ia,ja,ka,la,ma,na=function(){var oa=I.now()-la;oa<ga&&0<=oa?ia=setTimeout(na,ga-oa):(ia=null,!ha&&(ma=fa.apply(ka,ja),!ia&&(ka=ja=null)))};return function(){ka=this,ja=arguments,la=I.now();var oa=ha&&!ia;return ia||(ia=setTimeout(na,ga)),oa&&(ma=fa.apply(ka,ja),ka=ja=null),ma}},I.wrap=function(fa,ga){return I.partial(ga,fa)},I.negate=function(fa){return function(){return!fa.apply(this,arguments)}},I.compose=function(){var fa=arguments,ga=fa.length-1;return function(){for(var ha=ga,ia=fa[ga].apply(this,arguments);ha--;)ia=fa[ha].call(this,ia);return ia}},I.after=function(fa,ga){return function(){if(1>--fa)return ga.apply(this,arguments)}},I.before=function(fa,ga){var ha;return function(){return 0<--fa&&(ha=ga.apply(this,arguments)),1>=fa&&(ga=null),ha}},I.once=I.partial(I.before,2);var U=!{toString:null}.propertyIsEnumerable("toString"),V=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];I.keys=function(fa){if(!I.isObject(fa))return[];if(E)return E(fa);var ga=[];for(var ha in fa)I.has(fa,ha)&&ga.push(ha);return U&&r(fa,ga),ga},I.allKeys=function(fa){if(!I.isObject(fa))return[];var ga=[];for(var ha in fa)ga.push(ha);return U&&r(fa,ga),ga},I.values=function(fa){for(var ga=I.keys(fa),ha=ga.length,ia=Array(ha),ja=0;ja<ha;ja++)ia[ja]=fa[ga[ja]];return ia},I.mapObject=function(fa,ga,ha){ga=K(ga,ha);for(var la,ia=I.keys(fa),ja=ia.length,ka={},ma=0;ma<ja;ma++)la=ia[ma],ka[la]=ga(fa[la],la,fa);return ka},I.pairs=function(fa){for(var ga=I.keys(fa),ha=ga.length,ia=Array(ha),ja=0;ja<ha;ja++)ia[ja]=[ga[ja],fa[ga[ja]]];return ia},I.invert=function(fa){for(var ga={},ha=I.keys(fa),ia=0,ja=ha.length;ia<ja;ia++)ga[fa[ha[ia]]]=ha[ia];return ga},I.functions=I.methods=function(fa){var ga=[];for(var ha in fa)I.isFunction(fa[ha])&&ga.push(ha);return ga.sort()},I.extend=L(I.allKeys),I.extendOwn=I.assign=L(I.keys),I.findKey=function(fa,ga,ha){ga=K(ga,ha);for(var ja,ia=I.keys(fa),ka=0,la=ia.length;ka<la;ka++)if(ja=ia[ka],ga(fa[ja],ja,fa))return ja},I.pick=function(fa,ga,ha){var ka,la,ia={},ja=fa;if(null==ja)return ia;I.isFunction(ga)?(la=I.allKeys(ja),ka=J(ga,ha)):(la=S(arguments,!1,!1,1),ka=function(qa,ra,sa){return ra in sa},ja=Object(ja));for(var ma=0,na=la.length;ma<na;ma++){var oa=la[ma],pa=ja[oa];ka(pa,oa,ja)&&(ia[oa]=pa)}return ia},I.omit=function(fa,ga,ha){if(I.isFunction(ga))ga=I.negate(ga);else{var ia=I.map(S(arguments,!1,!1,1),String);ga=function(ja,ka){return!I.contains(ia,ka)}}return I.pick(fa,ga,ha)},I.defaults=L(I.allKeys,!0),I.create=function(fa,ga){var ha=M(fa);return ga&&I.extendOwn(ha,ga),ha},I.clone=function(fa){return I.isObject(fa)?I.isArray(fa)?fa.slice():I.extend({},fa):fa},I.tap=function(fa,ga){return ga(fa),fa},I.isMatch=function(fa,ga){var ha=I.keys(ga),ia=ha.length;if(null==fa)return!ia;for(var la,ja=Object(fa),ka=0;ka<ia;ka++)if(la=ha[ka],ga[la]!==ja[la]||!(la in ja))return!1;return!0};var W=function(fa,ga,ha,ia){if(fa===ga)return 0!==fa||1/fa==1/ga;if(null==fa||null==ga)return fa===ga;fa instanceof I&&(fa=fa._wrapped),ga instanceof I&&(ga=ga._wrapped);var ja=B.call(fa);if(ja!==B.call(ga))return!1;switch(ja){case"[object RegExp]":case"[object String]":return""+fa==""+ga;case"[object Number]":return+fa==+fa?0==+fa?1/+fa==1/ga:+fa==+ga:+ga!=+ga;case"[object Date]":case"[object Boolean]":return+fa==+ga;}var ka="[object Array]"===ja;if(!ka){if("object"!=typeof fa||"object"!=typeof ga)return!1;var la=fa.constructor,ma=ga.constructor;if(la!==ma&&!(I.isFunction(la)&&la instanceof la&&I.isFunction(ma)&&ma instanceof ma)&&"constructor"in fa&&"constructor"in ga)return!1}ha=ha||[],ia=ia||[];for(var na=ha.length;na--;)if(ha[na]===fa)return ia[na]===ga;if(ha.push(fa),ia.push(ga),ka){if(na=fa.length,na!==ga.length)return!1;for(;na--;)if(!W(fa[na],ga[na],ha,ia))return!1}else{var pa,oa=I.keys(fa);if(na=oa.length,I.keys(ga).length!==na)return!1;for(;na--;)if(pa=oa[na],!(I.has(ga,pa)&&W(fa[pa],ga[pa],ha,ia)))return!1}return ha.pop(),ia.pop(),!0};I.isEqual=function(fa,ga){return W(fa,ga)},I.isEmpty=function(fa){return!(null!=fa)||(Q(fa)&&(I.isArray(fa)||I.isString(fa)||I.isArguments(fa))?0===fa.length:0===I.keys(fa).length)},I.isElement=function(fa){return!!(fa&&1===fa.nodeType)},I.isArray=D||function(fa){return"[object Array]"===B.call(fa)},I.isObject=function(fa){var ga=typeof fa;return"function"==ga||"object"==ga&&!!fa},I.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(fa){I["is"+fa]=function(ga){return B.call(ga)==="[object "+fa+"]"}}),I.isArguments(arguments)||(I.isArguments=function(fa){return I.has(fa,"callee")}),"function"!=typeof /./&&"object"!=typeof Int8Array&&(I.isFunction=function(fa){return"function"==typeof fa||!1}),I.isFinite=function(fa){return isFinite(fa)&&!isNaN(parseFloat(fa))},I.isNaN=function(fa){return I.isNumber(fa)&&fa!==+fa},I.isBoolean=function(fa){return!0===fa||!1===fa||"[object Boolean]"===B.call(fa)},I.isNull=function(fa){return null===fa},I.isUndefined=function(fa){return void 0===fa},I.has=function(fa,ga){return null!=fa&&C.call(fa,ga)},I.noConflict=function(){return s._=t,this},I.identity=function(fa){return fa},I.constant=function(fa){return function(){return fa}},I.noop=function(){},I.property=N,I.propertyOf=function(fa){return null==fa?function(){}:function(ga){return fa[ga]}},I.matcher=I.matches=function(fa){return fa=I.extendOwn({},fa),function(ga){return I.isMatch(ga,fa)}},I.times=function(fa,ga,ha){var ia=Array(Math.max(0,fa));ga=J(ga,ha,1);for(var ja=0;ja<fa;ja++)ia[ja]=ga(ja);return ia},I.random=function(fa,ga){return null==ga&&(ga=fa,fa=0),fa+Math.floor(Math.random()*(ga-fa+1))},I.now=Date.now||function(){return new Date().getTime()};var X={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Y=I.invert(X),Z=function(fa){var ga=function(ka){return fa[ka]},ha="(?:"+I.keys(fa).join("|")+")",ia=RegExp(ha),ja=RegExp(ha,"g");return function(ka){return ka=null==ka?"":""+ka,ia.test(ka)?ka.replace(ja,ga):ka}};I.escape=Z(X),I.unescape=Z(Y),I.result=function(fa,ga,ha){var ia=null==fa?void 0:fa[ga];return void 0===ia&&(ia=ha),I.isFunction(ia)?ia.call(fa):ia};var $=0;I.uniqueId=function(fa){var ga=++$+"";return fa?fa+ga:ga},I.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var aa=/(.)^/,ba={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},ca=/\\|'|\r|\n|\u2028|\u2029/g,da=function(fa){return"\\"+ba[fa]};I.template=function(fa,ga,ha){!ga&&ha&&(ga=ha),ga=I.defaults({},ga,I.templateSettings);var ia=RegExp([(ga.escape||aa).source,(ga.interpolate||aa).source,(ga.evaluate||aa).source].join("|")+"|$","g"),ja=0,ka="__p+='";fa.replace(ia,function(oa,pa,qa,ra,sa){return ka+=fa.slice(ja,sa).replace(ca,da),ja=sa+oa.length,pa?ka+="'+\n((__t=("+pa+"))==null?'':_.escape(__t))+\n'":qa?ka+="'+\n((__t=("+qa+"))==null?'':__t)+\n'":ra&&(ka+="';\n"+ra+"\n__p+='"),oa}),ka+="';\n",ga.variable||(ka="with(obj||{}){\n"+ka+"}\n"),ka="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+ka+"return __p;\n";try{var la=new Function(ga.variable||"obj","_",ka)}catch(oa){throw oa.source=ka,oa}var ma=function(oa){return la.call(this,oa,I)},na=ga.variable||"obj";return ma.source="function("+na+"){\n"+ka+"}",ma},I.chain=function(fa){var ga=I(fa);return ga._chain=!0,ga};var ea=function(fa,ga){return fa._chain?I(ga).chain():ga};I.mixin=function(fa){I.each(I.functions(fa),function(ga){var ha=I[ga]=fa[ga];I.prototype[ga]=function(){var ia=[this._wrapped];return z.apply(ia,arguments),ea(this,ha.apply(I,ia))}})},I.mixin(I),I.each(["pop","push","reverse","shift","sort","splice","unshift"],function(fa){var ga=u[fa];I.prototype[fa]=function(){var ha=this._wrapped;return ga.apply(ha,arguments),("shift"===fa||"splice"===fa)&&0===ha.length&&delete ha[0],ea(this,ha)}}),I.each(["concat","join","slice"],function(fa){var ga=u[fa];I.prototype[fa]=function(){return ea(this,ga.apply(this._wrapped,arguments))}}),I.prototype.value=function(){return this._wrapped},I.prototype.valueOf=I.prototype.toJSON=I.prototype.value,I.prototype.toString=function(){return""+this._wrapped},"function"==typeof void 0}).call(f)}),System.registerDynamic("npm:percipio@0.1.2/src/metrics.js",["underscore"],!0,function(d,f,g){var k=this||self,o=d("underscore");g.exports.totalRegret=function(q,r){var s=[],t=o.max(q),u=0;return r.forEach(function(v){u+=t-q[v],s.push(u)}),s}}),System.registerDynamic("npm:percipio@0.1.2.json",[],!0,function(){return{main:"src/index.js",format:"cjs",meta:{"*.json":{format:"json"}},map:{"./src":"./src/index.js"}}}),System.registerDynamic("npm:percipio@0.1.2/src/index.js",["./bandits","./naive_bayes","./stats","./metrics"],!0,function(d,f,g){var h=this||self;g.exports.bandits=d("./bandits"),g.exports.naiveBayes=d("./naive_bayes"),g.exports.stats=d("./stats"),g.exports.metrics=d("./metrics")});
