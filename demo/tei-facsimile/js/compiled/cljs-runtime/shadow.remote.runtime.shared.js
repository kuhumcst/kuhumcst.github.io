goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45682,res){
var map__45683 = p__45682;
var map__45683__$1 = (((((!((map__45683 == null))))?(((((map__45683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45683):map__45683);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45683__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45683__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45690 = res;
var G__45690__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45690,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45690);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45690__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45690__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45696 = arguments.length;
switch (G__45696) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45702,msg,handlers,timeout_after_ms){
var map__45704 = p__45702;
var map__45704__$1 = (((((!((map__45704 == null))))?(((((map__45704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45704):map__45704);
var runtime = map__45704__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45704__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46052 = arguments.length;
var i__4737__auto___46053 = (0);
while(true){
if((i__4737__auto___46053 < len__4736__auto___46052)){
args__4742__auto__.push((arguments[i__4737__auto___46053]));

var G__46055 = (i__4737__auto___46053 + (1));
i__4737__auto___46053 = G__46055;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45715,ev,args){
var map__45716 = p__45715;
var map__45716__$1 = (((((!((map__45716 == null))))?(((((map__45716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45716):map__45716);
var runtime = map__45716__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__45718 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45721 = null;
var count__45722 = (0);
var i__45723 = (0);
while(true){
if((i__45723 < count__45722)){
var ext = chunk__45721.cljs$core$IIndexed$_nth$arity$2(null,i__45723);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46067 = seq__45718;
var G__46068 = chunk__45721;
var G__46069 = count__45722;
var G__46070 = (i__45723 + (1));
seq__45718 = G__46067;
chunk__45721 = G__46068;
count__45722 = G__46069;
i__45723 = G__46070;
continue;
} else {
var G__46073 = seq__45718;
var G__46074 = chunk__45721;
var G__46075 = count__45722;
var G__46076 = (i__45723 + (1));
seq__45718 = G__46073;
chunk__45721 = G__46074;
count__45722 = G__46075;
i__45723 = G__46076;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45718);
if(temp__5735__auto__){
var seq__45718__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45718__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45718__$1);
var G__46081 = cljs.core.chunk_rest(seq__45718__$1);
var G__46082 = c__4556__auto__;
var G__46083 = cljs.core.count(c__4556__auto__);
var G__46084 = (0);
seq__45718 = G__46081;
chunk__45721 = G__46082;
count__45722 = G__46083;
i__45723 = G__46084;
continue;
} else {
var ext = cljs.core.first(seq__45718__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46088 = cljs.core.next(seq__45718__$1);
var G__46089 = null;
var G__46090 = (0);
var G__46091 = (0);
seq__45718 = G__46088;
chunk__45721 = G__46089;
count__45722 = G__46090;
i__45723 = G__46091;
continue;
} else {
var G__46094 = cljs.core.next(seq__45718__$1);
var G__46095 = null;
var G__46096 = (0);
var G__46097 = (0);
seq__45718 = G__46094;
chunk__45721 = G__46095;
count__45722 = G__46096;
i__45723 = G__46097;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45711){
var G__45712 = cljs.core.first(seq45711);
var seq45711__$1 = cljs.core.next(seq45711);
var G__45713 = cljs.core.first(seq45711__$1);
var seq45711__$2 = cljs.core.next(seq45711__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45712,G__45713,seq45711__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__45747,p__45748){
var map__45749 = p__45747;
var map__45749__$1 = (((((!((map__45749 == null))))?(((((map__45749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45749):map__45749);
var runtime = map__45749__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45749__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45750 = p__45748;
var map__45750__$1 = (((((!((map__45750 == null))))?(((((map__45750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45750):map__45750);
var msg = map__45750__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45750__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__45759 = cljs.core.deref(state_ref);
var map__45759__$1 = (((((!((map__45759 == null))))?(((((map__45759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45759):map__45759);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45759__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45759__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__45768){
var map__45769 = p__45768;
var map__45769__$1 = (((((!((map__45769 == null))))?(((((map__45769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45769):map__45769);
var runtime = map__45769__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45769__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4126__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__45778,msg){
var map__45779 = p__45778;
var map__45779__$1 = (((((!((map__45779 == null))))?(((((map__45779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45779):map__45779);
var runtime = map__45779__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45779__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__45796,key,p__45797){
var map__45799 = p__45796;
var map__45799__$1 = (((((!((map__45799 == null))))?(((((map__45799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45799):map__45799);
var state = map__45799__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45799__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__45800 = p__45797;
var map__45800__$1 = (((((!((map__45800 == null))))?(((((map__45800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45800):map__45800);
var spec = map__45800__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45800__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__45840,key,spec){
var map__45842 = p__45840;
var map__45842__$1 = (((((!((map__45842 == null))))?(((((map__45842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45842):map__45842);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45842__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__45848_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__45848_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__45849_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__45849_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__45850_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__45850_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__45851_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__45851_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__45852_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__45852_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__45866,key){
var map__45868 = p__45866;
var map__45868__$1 = (((((!((map__45868 == null))))?(((((map__45868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45868):map__45868);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45868__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__45878,msg){
var map__45879 = p__45878;
var map__45879__$1 = (((((!((map__45879 == null))))?(((((map__45879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45879):map__45879);
var runtime = map__45879__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45879__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__45894,p__45895){
var map__45897 = p__45894;
var map__45897__$1 = (((((!((map__45897 == null))))?(((((map__45897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45897):map__45897);
var runtime = map__45897__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45898 = p__45895;
var map__45898__$1 = (((((!((map__45898 == null))))?(((((map__45898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45898):map__45898);
var msg = map__45898__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45898__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45898__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__45922 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45924 = null;
var count__45925 = (0);
var i__45926 = (0);
while(true){
if((i__45926 < count__45925)){
var map__45991 = chunk__45924.cljs$core$IIndexed$_nth$arity$2(null,i__45926);
var map__45991__$1 = (((((!((map__45991 == null))))?(((((map__45991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45991):map__45991);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45991__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46194 = seq__45922;
var G__46195 = chunk__45924;
var G__46196 = count__45925;
var G__46197 = (i__45926 + (1));
seq__45922 = G__46194;
chunk__45924 = G__46195;
count__45925 = G__46196;
i__45926 = G__46197;
continue;
} else {
var G__46199 = seq__45922;
var G__46200 = chunk__45924;
var G__46201 = count__45925;
var G__46202 = (i__45926 + (1));
seq__45922 = G__46199;
chunk__45924 = G__46200;
count__45925 = G__46201;
i__45926 = G__46202;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45922);
if(temp__5735__auto__){
var seq__45922__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45922__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45922__$1);
var G__46205 = cljs.core.chunk_rest(seq__45922__$1);
var G__46206 = c__4556__auto__;
var G__46207 = cljs.core.count(c__4556__auto__);
var G__46208 = (0);
seq__45922 = G__46205;
chunk__45924 = G__46206;
count__45925 = G__46207;
i__45926 = G__46208;
continue;
} else {
var map__46000 = cljs.core.first(seq__45922__$1);
var map__46000__$1 = (((((!((map__46000 == null))))?(((((map__46000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46000):map__46000);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46000__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46217 = cljs.core.next(seq__45922__$1);
var G__46218 = null;
var G__46219 = (0);
var G__46220 = (0);
seq__45922 = G__46217;
chunk__45924 = G__46218;
count__45925 = G__46219;
i__45926 = G__46220;
continue;
} else {
var G__46224 = cljs.core.next(seq__45922__$1);
var G__46225 = null;
var G__46226 = (0);
var G__46227 = (0);
seq__45922 = G__46224;
chunk__45924 = G__46225;
count__45925 = G__46226;
i__45926 = G__46227;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
