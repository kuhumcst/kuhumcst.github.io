goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__46655,p__46656){
var map__46657 = p__46655;
var map__46657__$1 = (((((!((map__46657 == null))))?(((((map__46657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46657):map__46657);
var svc = map__46657__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46657__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46657__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46657__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46658 = p__46656;
var map__46658__$1 = (((((!((map__46658 == null))))?(((((map__46658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46658):map__46658);
var msg = map__46658__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46658__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46658__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46658__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46658__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__46682,p__46683){
var map__46684 = p__46682;
var map__46684__$1 = (((((!((map__46684 == null))))?(((((map__46684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46684):map__46684);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46684__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__46685 = p__46683;
var map__46685__$1 = (((((!((map__46685 == null))))?(((((map__46685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46685):map__46685);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46685__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__46704,p__46705){
var map__46708 = p__46704;
var map__46708__$1 = (((((!((map__46708 == null))))?(((((map__46708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46708):map__46708);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46708__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46708__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46709 = p__46705;
var map__46709__$1 = (((((!((map__46709 == null))))?(((((map__46709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46709):map__46709);
var msg = map__46709__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46709__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__46717,tid){
var map__46720 = p__46717;
var map__46720__$1 = (((((!((map__46720 == null))))?(((((map__46720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46720):map__46720);
var svc = map__46720__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46720__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__46739 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__46740 = null;
var count__46741 = (0);
var i__46742 = (0);
while(true){
if((i__46742 < count__46741)){
var vec__46759 = chunk__46740.cljs$core$IIndexed$_nth$arity$2(null,i__46742);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46759,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46759,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46833 = seq__46739;
var G__46834 = chunk__46740;
var G__46835 = count__46741;
var G__46836 = (i__46742 + (1));
seq__46739 = G__46833;
chunk__46740 = G__46834;
count__46741 = G__46835;
i__46742 = G__46836;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46739);
if(temp__5735__auto__){
var seq__46739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46739__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46739__$1);
var G__46843 = cljs.core.chunk_rest(seq__46739__$1);
var G__46844 = c__4556__auto__;
var G__46845 = cljs.core.count(c__4556__auto__);
var G__46846 = (0);
seq__46739 = G__46843;
chunk__46740 = G__46844;
count__46741 = G__46845;
i__46742 = G__46846;
continue;
} else {
var vec__46766 = cljs.core.first(seq__46739__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46766,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46766,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46853 = cljs.core.next(seq__46739__$1);
var G__46854 = null;
var G__46855 = (0);
var G__46856 = (0);
seq__46739 = G__46853;
chunk__46740 = G__46854;
count__46741 = G__46855;
i__46742 = G__46856;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__46732_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__46732_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__46733_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__46733_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__46734_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__46734_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__46735_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__46735_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__46780){
var map__46781 = p__46780;
var map__46781__$1 = (((((!((map__46781 == null))))?(((((map__46781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46781):map__46781);
var svc = map__46781__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46781__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46781__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
