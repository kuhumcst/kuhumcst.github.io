goog.provide('lambdaisland.deep_diff2.puget.dispatch');
/**
 * Builds a dispatcher which looks up a type by checking multiple dispatchers
 *   in order until a matching entry is found. Takes either a single collection of
 *   dispatchers or a variable list of dispatcher arguments. Ignores nil
 *   dispatchers in the sequence.
 */
lambdaisland.deep_diff2.puget.dispatch.chained_lookup = (function lambdaisland$deep_diff2$puget$dispatch$chained_lookup(var_args){
var G__51192 = arguments.length;
switch (G__51192) {
case 1:
return lambdaisland.deep_diff2.puget.dispatch.chained_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___51225 = arguments.length;
var i__4737__auto___51227 = (0);
while(true){
if((i__4737__auto___51227 < len__4736__auto___51225)){
args_arr__4757__auto__.push((arguments[i__4737__auto___51227]));

var G__51228 = (i__4737__auto___51227 + (1));
i__4737__auto___51227 = G__51228;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return lambdaisland.deep_diff2.puget.dispatch.chained_lookup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(lambdaisland.deep_diff2.puget.dispatch.chained_lookup.cljs$core$IFn$_invoke$arity$1 = (function (dispatchers){
if(cljs.core.sequential_QMARK_(dispatchers)){
} else {
throw (new Error("Assert failed: (sequential? dispatchers)"));
}

var candidates = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,dispatchers);
var no_chain_lookup_provided_message = "chained-lookup must be provided at least one dispatch function to try.";
if(cljs.core.empty_QMARK_(candidates)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(no_chain_lookup_provided_message,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"causes","causes",320696351),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-chained-lookup-provided","no-chained-lookup-provided",1632977370),null], null), null)], null));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(candidates))){
return cljs.core.first(candidates);
} else {
return (function lambdaisland$deep_diff2$puget$dispatch$lookup(t){
return cljs.core.some((function (p1__51178_SHARP_){
return (p1__51178_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51178_SHARP_.cljs$core$IFn$_invoke$arity$1(t) : p1__51178_SHARP_.call(null,t));
}),candidates);
});
}
}));

(lambdaisland.deep_diff2.puget.dispatch.chained_lookup.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return lambdaisland.deep_diff2.puget.dispatch.chained_lookup.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(a,b,more));
}));

/** @this {Function} */
(lambdaisland.deep_diff2.puget.dispatch.chained_lookup.cljs$lang$applyTo = (function (seq51181){
var G__51182 = cljs.core.first(seq51181);
var seq51181__$1 = cljs.core.next(seq51181);
var G__51183 = cljs.core.first(seq51181__$1);
var seq51181__$2 = cljs.core.next(seq51181__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51182,G__51183,seq51181__$2);
}));

(lambdaisland.deep_diff2.puget.dispatch.chained_lookup.cljs$lang$maxFixedArity = (2));

/**
 * Builds a dispatcher which caches values returned for each type. This improves
 *   performance when the underlying dispatcher may need to perform complex
 *   lookup logic to determine the dispatched value.
 */
lambdaisland.deep_diff2.puget.dispatch.caching_lookup = (function lambdaisland$deep_diff2$puget$dispatch$caching_lookup(dispatch){
var cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function lambdaisland$deep_diff2$puget$dispatch$caching_lookup_$_lookup(t){
var memory = cljs.core.deref(cache);
if(cljs.core.contains_QMARK_(memory,t)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(memory,t);
} else {
var v = (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(t) : dispatch.call(null,t));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,t,v);

return v;
}
});
});
/**
 * Look up a handler for a value based on a map from predicate to handler
 */
lambdaisland.deep_diff2.puget.dispatch.predicate_lookup = (function lambdaisland$deep_diff2$puget$dispatch$predicate_lookup(types){
return (function lambdaisland$deep_diff2$puget$dispatch$predicate_lookup_$_lookup(value){
return cljs.core.some((function (p__51214){
var vec__51215 = p__51214;
var pred_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51215,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51215,(1),null);
if(cljs.core.truth_((pred_QMARK_.cljs$core$IFn$_invoke$arity$1 ? pred_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : pred_QMARK_.call(null,value)))){
return handler;
} else {
return null;
}
}),types);
});
});

//# sourceMappingURL=lambdaisland.deep_diff2.puget.dispatch.js.map
