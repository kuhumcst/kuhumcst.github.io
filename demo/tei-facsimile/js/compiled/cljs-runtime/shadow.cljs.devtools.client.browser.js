goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51319 = arguments.length;
var i__4737__auto___51320 = (0);
while(true){
if((i__4737__auto___51320 < len__4736__auto___51319)){
args__4742__auto__.push((arguments[i__4737__auto___51320]));

var G__51321 = (i__4737__auto___51320 + (1));
i__4737__auto___51320 = G__51321;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50752){
var G__50753 = cljs.core.first(seq50752);
var seq50752__$1 = cljs.core.next(seq50752);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50753,seq50752__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50795 = cljs.core.seq(sources);
var chunk__50796 = null;
var count__50797 = (0);
var i__50798 = (0);
while(true){
if((i__50798 < count__50797)){
var map__50827 = chunk__50796.cljs$core$IIndexed$_nth$arity$2(null,i__50798);
var map__50827__$1 = (((((!((map__50827 == null))))?(((((map__50827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50827):map__50827);
var src = map__50827__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50827__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50827__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50827__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50827__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50829){var e_51332 = e50829;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51332);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51332.message)].join('')));
}

var G__51333 = seq__50795;
var G__51334 = chunk__50796;
var G__51335 = count__50797;
var G__51336 = (i__50798 + (1));
seq__50795 = G__51333;
chunk__50796 = G__51334;
count__50797 = G__51335;
i__50798 = G__51336;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50795);
if(temp__5735__auto__){
var seq__50795__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50795__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50795__$1);
var G__51337 = cljs.core.chunk_rest(seq__50795__$1);
var G__51338 = c__4556__auto__;
var G__51339 = cljs.core.count(c__4556__auto__);
var G__51340 = (0);
seq__50795 = G__51337;
chunk__50796 = G__51338;
count__50797 = G__51339;
i__50798 = G__51340;
continue;
} else {
var map__50838 = cljs.core.first(seq__50795__$1);
var map__50838__$1 = (((((!((map__50838 == null))))?(((((map__50838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50838):map__50838);
var src = map__50838__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50840){var e_51341 = e50840;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51341);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51341.message)].join('')));
}

var G__51342 = cljs.core.next(seq__50795__$1);
var G__51343 = null;
var G__51344 = (0);
var G__51345 = (0);
seq__50795 = G__51342;
chunk__50796 = G__51343;
count__50797 = G__51344;
i__50798 = G__51345;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50856 = cljs.core.seq(js_requires);
var chunk__50857 = null;
var count__50858 = (0);
var i__50859 = (0);
while(true){
if((i__50859 < count__50858)){
var js_ns = chunk__50857.cljs$core$IIndexed$_nth$arity$2(null,i__50859);
var require_str_51347 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51347);


var G__51348 = seq__50856;
var G__51349 = chunk__50857;
var G__51350 = count__50858;
var G__51351 = (i__50859 + (1));
seq__50856 = G__51348;
chunk__50857 = G__51349;
count__50858 = G__51350;
i__50859 = G__51351;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50856);
if(temp__5735__auto__){
var seq__50856__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50856__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50856__$1);
var G__51352 = cljs.core.chunk_rest(seq__50856__$1);
var G__51353 = c__4556__auto__;
var G__51354 = cljs.core.count(c__4556__auto__);
var G__51355 = (0);
seq__50856 = G__51352;
chunk__50857 = G__51353;
count__50858 = G__51354;
i__50859 = G__51355;
continue;
} else {
var js_ns = cljs.core.first(seq__50856__$1);
var require_str_51356 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51356);


var G__51357 = cljs.core.next(seq__50856__$1);
var G__51358 = null;
var G__51359 = (0);
var G__51360 = (0);
seq__50856 = G__51357;
chunk__50857 = G__51358;
count__50858 = G__51359;
i__50859 = G__51360;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50872){
var map__50873 = p__50872;
var map__50873__$1 = (((((!((map__50873 == null))))?(((((map__50873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50873):map__50873);
var msg = map__50873__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50873__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50873__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50876(s__50877){
return (new cljs.core.LazySeq(null,(function (){
var s__50877__$1 = s__50877;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50877__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50883 = cljs.core.first(xs__6292__auto__);
var map__50883__$1 = (((((!((map__50883 == null))))?(((((map__50883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50883):map__50883);
var src = map__50883__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50883__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50883__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__50877__$1,map__50883,map__50883__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50873,map__50873__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50876_$_iter__50878(s__50879){
return (new cljs.core.LazySeq(null,((function (s__50877__$1,map__50883,map__50883__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50873,map__50873__$1,msg,info,reload_info){
return (function (){
var s__50879__$1 = s__50879;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50879__$1);
if(temp__5735__auto____$1){
var s__50879__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50879__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50879__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50881 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50880 = (0);
while(true){
if((i__50880 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__50880);
cljs.core.chunk_append(b__50881,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51375 = (i__50880 + (1));
i__50880 = G__51375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50881),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50876_$_iter__50878(cljs.core.chunk_rest(s__50879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50881),null);
}
} else {
var warning = cljs.core.first(s__50879__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50876_$_iter__50878(cljs.core.rest(s__50879__$2)));
}
} else {
return null;
}
break;
}
});})(s__50877__$1,map__50883,map__50883__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50873,map__50873__$1,msg,info,reload_info))
,null,null));
});})(s__50877__$1,map__50883,map__50883__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50873,map__50873__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50876(cljs.core.rest(s__50877__$1)));
} else {
var G__51379 = cljs.core.rest(s__50877__$1);
s__50877__$1 = G__51379;
continue;
}
} else {
var G__51380 = cljs.core.rest(s__50877__$1);
s__50877__$1 = G__51380;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__50925_51393 = cljs.core.seq(warnings);
var chunk__50926_51394 = null;
var count__50927_51395 = (0);
var i__50928_51396 = (0);
while(true){
if((i__50928_51396 < count__50927_51395)){
var map__50970_51397 = chunk__50926_51394.cljs$core$IIndexed$_nth$arity$2(null,i__50928_51396);
var map__50970_51398__$1 = (((((!((map__50970_51397 == null))))?(((((map__50970_51397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50970_51397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50970_51397):map__50970_51397);
var w_51399 = map__50970_51398__$1;
var msg_51400__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50970_51398__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50970_51398__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50970_51398__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50970_51398__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51403)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51401),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51402),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51400__$1)].join(''));


var G__51405 = seq__50925_51393;
var G__51406 = chunk__50926_51394;
var G__51407 = count__50927_51395;
var G__51408 = (i__50928_51396 + (1));
seq__50925_51393 = G__51405;
chunk__50926_51394 = G__51406;
count__50927_51395 = G__51407;
i__50928_51396 = G__51408;
continue;
} else {
var temp__5735__auto___51410 = cljs.core.seq(seq__50925_51393);
if(temp__5735__auto___51410){
var seq__50925_51411__$1 = temp__5735__auto___51410;
if(cljs.core.chunked_seq_QMARK_(seq__50925_51411__$1)){
var c__4556__auto___51412 = cljs.core.chunk_first(seq__50925_51411__$1);
var G__51418 = cljs.core.chunk_rest(seq__50925_51411__$1);
var G__51419 = c__4556__auto___51412;
var G__51420 = cljs.core.count(c__4556__auto___51412);
var G__51421 = (0);
seq__50925_51393 = G__51418;
chunk__50926_51394 = G__51419;
count__50927_51395 = G__51420;
i__50928_51396 = G__51421;
continue;
} else {
var map__50976_51423 = cljs.core.first(seq__50925_51411__$1);
var map__50976_51424__$1 = (((((!((map__50976_51423 == null))))?(((((map__50976_51423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50976_51423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50976_51423):map__50976_51423);
var w_51425 = map__50976_51424__$1;
var msg_51426__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50976_51424__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50976_51424__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50976_51424__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50976_51424__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51429)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51427),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51428),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51426__$1)].join(''));


var G__51431 = cljs.core.next(seq__50925_51411__$1);
var G__51432 = null;
var G__51433 = (0);
var G__51434 = (0);
seq__50925_51393 = G__51431;
chunk__50926_51394 = G__51432;
count__50927_51395 = G__51433;
i__50928_51396 = G__51434;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50871_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50871_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51061){
var map__51064 = p__51061;
var map__51064__$1 = (((((!((map__51064 == null))))?(((((map__51064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51064):map__51064);
var msg = map__51064__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51064__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51073 = cljs.core.seq(updates);
var chunk__51075 = null;
var count__51076 = (0);
var i__51077 = (0);
while(true){
if((i__51077 < count__51076)){
var path = chunk__51075.cljs$core$IIndexed$_nth$arity$2(null,i__51077);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51130_51438 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51133_51439 = null;
var count__51134_51440 = (0);
var i__51135_51441 = (0);
while(true){
if((i__51135_51441 < count__51134_51440)){
var node_51442 = chunk__51133_51439.cljs$core$IIndexed$_nth$arity$2(null,i__51135_51441);
var path_match_51445 = shadow.cljs.devtools.client.browser.match_paths(node_51442.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51445)){
var new_link_51446 = (function (){var G__51171 = node_51442.cloneNode(true);
G__51171.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51445),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51171;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51445], 0));

goog.dom.insertSiblingAfter(new_link_51446,node_51442);

goog.dom.removeNode(node_51442);


var G__51448 = seq__51130_51438;
var G__51449 = chunk__51133_51439;
var G__51450 = count__51134_51440;
var G__51451 = (i__51135_51441 + (1));
seq__51130_51438 = G__51448;
chunk__51133_51439 = G__51449;
count__51134_51440 = G__51450;
i__51135_51441 = G__51451;
continue;
} else {
var G__51452 = seq__51130_51438;
var G__51453 = chunk__51133_51439;
var G__51454 = count__51134_51440;
var G__51455 = (i__51135_51441 + (1));
seq__51130_51438 = G__51452;
chunk__51133_51439 = G__51453;
count__51134_51440 = G__51454;
i__51135_51441 = G__51455;
continue;
}
} else {
var temp__5735__auto___51456 = cljs.core.seq(seq__51130_51438);
if(temp__5735__auto___51456){
var seq__51130_51457__$1 = temp__5735__auto___51456;
if(cljs.core.chunked_seq_QMARK_(seq__51130_51457__$1)){
var c__4556__auto___51458 = cljs.core.chunk_first(seq__51130_51457__$1);
var G__51459 = cljs.core.chunk_rest(seq__51130_51457__$1);
var G__51460 = c__4556__auto___51458;
var G__51461 = cljs.core.count(c__4556__auto___51458);
var G__51462 = (0);
seq__51130_51438 = G__51459;
chunk__51133_51439 = G__51460;
count__51134_51440 = G__51461;
i__51135_51441 = G__51462;
continue;
} else {
var node_51463 = cljs.core.first(seq__51130_51457__$1);
var path_match_51464 = shadow.cljs.devtools.client.browser.match_paths(node_51463.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51464)){
var new_link_51465 = (function (){var G__51176 = node_51463.cloneNode(true);
G__51176.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51464),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51176;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51464], 0));

goog.dom.insertSiblingAfter(new_link_51465,node_51463);

goog.dom.removeNode(node_51463);


var G__51468 = cljs.core.next(seq__51130_51457__$1);
var G__51469 = null;
var G__51470 = (0);
var G__51471 = (0);
seq__51130_51438 = G__51468;
chunk__51133_51439 = G__51469;
count__51134_51440 = G__51470;
i__51135_51441 = G__51471;
continue;
} else {
var G__51472 = cljs.core.next(seq__51130_51457__$1);
var G__51473 = null;
var G__51474 = (0);
var G__51475 = (0);
seq__51130_51438 = G__51472;
chunk__51133_51439 = G__51473;
count__51134_51440 = G__51474;
i__51135_51441 = G__51475;
continue;
}
}
} else {
}
}
break;
}


var G__51476 = seq__51073;
var G__51477 = chunk__51075;
var G__51478 = count__51076;
var G__51479 = (i__51077 + (1));
seq__51073 = G__51476;
chunk__51075 = G__51477;
count__51076 = G__51478;
i__51077 = G__51479;
continue;
} else {
var G__51480 = seq__51073;
var G__51481 = chunk__51075;
var G__51482 = count__51076;
var G__51483 = (i__51077 + (1));
seq__51073 = G__51480;
chunk__51075 = G__51481;
count__51076 = G__51482;
i__51077 = G__51483;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51073);
if(temp__5735__auto__){
var seq__51073__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51073__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51073__$1);
var G__51485 = cljs.core.chunk_rest(seq__51073__$1);
var G__51486 = c__4556__auto__;
var G__51487 = cljs.core.count(c__4556__auto__);
var G__51488 = (0);
seq__51073 = G__51485;
chunk__51075 = G__51486;
count__51076 = G__51487;
i__51077 = G__51488;
continue;
} else {
var path = cljs.core.first(seq__51073__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51184_51489 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51187_51490 = null;
var count__51188_51491 = (0);
var i__51189_51492 = (0);
while(true){
if((i__51189_51492 < count__51188_51491)){
var node_51493 = chunk__51187_51490.cljs$core$IIndexed$_nth$arity$2(null,i__51189_51492);
var path_match_51494 = shadow.cljs.devtools.client.browser.match_paths(node_51493.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51494)){
var new_link_51495 = (function (){var G__51199 = node_51493.cloneNode(true);
G__51199.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51494),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51199;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51494], 0));

goog.dom.insertSiblingAfter(new_link_51495,node_51493);

goog.dom.removeNode(node_51493);


var G__51496 = seq__51184_51489;
var G__51497 = chunk__51187_51490;
var G__51498 = count__51188_51491;
var G__51499 = (i__51189_51492 + (1));
seq__51184_51489 = G__51496;
chunk__51187_51490 = G__51497;
count__51188_51491 = G__51498;
i__51189_51492 = G__51499;
continue;
} else {
var G__51500 = seq__51184_51489;
var G__51501 = chunk__51187_51490;
var G__51502 = count__51188_51491;
var G__51503 = (i__51189_51492 + (1));
seq__51184_51489 = G__51500;
chunk__51187_51490 = G__51501;
count__51188_51491 = G__51502;
i__51189_51492 = G__51503;
continue;
}
} else {
var temp__5735__auto___51504__$1 = cljs.core.seq(seq__51184_51489);
if(temp__5735__auto___51504__$1){
var seq__51184_51505__$1 = temp__5735__auto___51504__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51184_51505__$1)){
var c__4556__auto___51506 = cljs.core.chunk_first(seq__51184_51505__$1);
var G__51507 = cljs.core.chunk_rest(seq__51184_51505__$1);
var G__51508 = c__4556__auto___51506;
var G__51509 = cljs.core.count(c__4556__auto___51506);
var G__51510 = (0);
seq__51184_51489 = G__51507;
chunk__51187_51490 = G__51508;
count__51188_51491 = G__51509;
i__51189_51492 = G__51510;
continue;
} else {
var node_51511 = cljs.core.first(seq__51184_51505__$1);
var path_match_51512 = shadow.cljs.devtools.client.browser.match_paths(node_51511.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51512)){
var new_link_51513 = (function (){var G__51208 = node_51511.cloneNode(true);
G__51208.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51512),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51208;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51512], 0));

goog.dom.insertSiblingAfter(new_link_51513,node_51511);

goog.dom.removeNode(node_51511);


var G__51523 = cljs.core.next(seq__51184_51505__$1);
var G__51524 = null;
var G__51525 = (0);
var G__51526 = (0);
seq__51184_51489 = G__51523;
chunk__51187_51490 = G__51524;
count__51188_51491 = G__51525;
i__51189_51492 = G__51526;
continue;
} else {
var G__51527 = cljs.core.next(seq__51184_51505__$1);
var G__51528 = null;
var G__51529 = (0);
var G__51530 = (0);
seq__51184_51489 = G__51527;
chunk__51187_51490 = G__51528;
count__51188_51491 = G__51529;
i__51189_51492 = G__51530;
continue;
}
}
} else {
}
}
break;
}


var G__51531 = cljs.core.next(seq__51073__$1);
var G__51532 = null;
var G__51533 = (0);
var G__51534 = (0);
seq__51073 = G__51531;
chunk__51075 = G__51532;
count__51076 = G__51533;
i__51077 = G__51534;
continue;
} else {
var G__51535 = cljs.core.next(seq__51073__$1);
var G__51536 = null;
var G__51537 = (0);
var G__51538 = (0);
seq__51073 = G__51535;
chunk__51075 = G__51536;
count__51076 = G__51537;
i__51077 = G__51538;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51218){
var map__51219 = p__51218;
var map__51219__$1 = (((((!((map__51219 == null))))?(((((map__51219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51219):map__51219);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51219__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51230){
var map__51231 = p__51230;
var map__51231__$1 = (((((!((map__51231 == null))))?(((((map__51231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51231):map__51231);
var _ = map__51231__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51231__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51236,done,error){
var map__51237 = p__51236;
var map__51237__$1 = (((((!((map__51237 == null))))?(((((map__51237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51237):map__51237);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51237__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51244,done,error){
var map__51245 = p__51244;
var map__51245__$1 = (((((!((map__51245 == null))))?(((((map__51245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51245):map__51245);
var msg = map__51245__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51245__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51245__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51245__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51248){
var map__51249 = p__51248;
var map__51249__$1 = (((((!((map__51249 == null))))?(((((map__51249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51249):map__51249);
var src = map__51249__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51249__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51254 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51254) : done.call(null,G__51254));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51255){
var map__51256 = p__51255;
var map__51256__$1 = (((((!((map__51256 == null))))?(((((map__51256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51256):map__51256);
var msg__$1 = map__51256__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51256__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51258){var ex = e51258;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51259){
var map__51260 = p__51259;
var map__51260__$1 = (((((!((map__51260 == null))))?(((((map__51260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51260):map__51260);
var env = map__51260__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51260__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51275){
var map__51276 = p__51275;
var map__51276__$1 = (((((!((map__51276 == null))))?(((((map__51276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51276):map__51276);
var msg = map__51276__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51276__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51288){
var map__51289 = p__51288;
var map__51289__$1 = (((((!((map__51289 == null))))?(((((map__51289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51289):map__51289);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51305){
var map__51306 = p__51305;
var map__51306__$1 = (((((!((map__51306 == null))))?(((((map__51306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51306):map__51306);
var svc = map__51306__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51306__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
