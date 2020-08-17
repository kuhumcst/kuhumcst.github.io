goog.provide('kuhumcst.rescope.select');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('hickory.zip');
/**
 * Create an element selector predicate for element `tags`. Will select elements
 *   present in the list of tags. Selects all elements if no tags are specified.
 */
kuhumcst.rescope.select.element = (function kuhumcst$rescope$select$element(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56480 = arguments.length;
var i__4737__auto___56482 = (0);
while(true){
if((i__4737__auto___56482 < len__4736__auto___56480)){
args__4742__auto__.push((arguments[i__4737__auto___56482]));

var G__56483 = (i__4737__auto___56482 + (1));
i__4737__auto___56482 = G__56483;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return kuhumcst.rescope.select.element.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(kuhumcst.rescope.select.element.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
if(cljs.core.empty_QMARK_(tags)){
return cljs.core.vector_QMARK_;
} else {
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set(tags),cljs.core.first));
}
}));

(kuhumcst.rescope.select.element.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kuhumcst.rescope.select.element.cljs$lang$applyTo = (function (seq56390){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56390));
}));

/**
 * Create an attribute selector predicate based on `attr`. Passing a set as attr
 *   will test for the existence of attribute keys, while passing a map will test
 *   for matching key-value pairs of attributes.
 */
kuhumcst.rescope.select.attr = (function kuhumcst$rescope$select$attr(attr){
var contains_attr_QMARK_ = (function (p__56404){
var vec__56405 = p__56404;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56405,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56405,(1),null);
if(cljs.core.set_QMARK_(attr)){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,m),attr);
} else {
if(cljs.core.map_QMARK_(attr)){
return cljs.core.every_QMARK_(cljs.core.set(m),attr);
} else {
return cljs.core.contains_QMARK_(m,attr);

}
}
});
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.second),contains_attr_QMARK_);
});
/**
 * Select elements satisfying `preds` in a `hiccup` tree while (coll-pred coll)
 *   returns logically true.
 */
kuhumcst.rescope.select.select_while = (function kuhumcst$rescope$select$select_while(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56489 = arguments.length;
var i__4737__auto___56490 = (0);
while(true){
if((i__4737__auto___56490 < len__4736__auto___56489)){
args__4742__auto__.push((arguments[i__4737__auto___56490]));

var G__56493 = (i__4737__auto___56490 + (1));
i__4737__auto___56490 = G__56493;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return kuhumcst.rescope.select.select_while.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(kuhumcst.rescope.select.select_while.cljs$core$IFn$_invoke$arity$variadic = (function (coll_pred,hiccup,preds){
var matches_QMARK_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.every_pred,cljs.core.vector_QMARK_,preds);
var collect = (function (coll,p__56440){
var vec__56441 = p__56440;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56441,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56441,(1),null);
var loc = vec__56441;
var G__56444 = coll;
var G__56444__$1 = ((cljs.core.not((coll_pred.cljs$core$IFn$_invoke$arity$1 ? coll_pred.cljs$core$IFn$_invoke$arity$1(coll) : coll_pred.call(null,coll))))?cljs.core.reduced(G__56444):G__56444);
if(cljs.core.truth_((matches_QMARK_.cljs$core$IFn$_invoke$arity$1 ? matches_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : matches_QMARK_.call(null,node)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56444__$1,node);
} else {
return G__56444__$1;
}
});
var zip_iter = cljs.core.iterate(clojure.zip.next,hickory.zip.hiccup_zip(hiccup));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(collect,cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(clojure.zip.end_QMARK_),zip_iter));
}));

(kuhumcst.rescope.select.select_while.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(kuhumcst.rescope.select.select_while.cljs$lang$applyTo = (function (seq56413){
var G__56420 = cljs.core.first(seq56413);
var seq56413__$1 = cljs.core.next(seq56413);
var G__56421 = cljs.core.first(seq56413__$1);
var seq56413__$2 = cljs.core.next(seq56413__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56420,G__56421,seq56413__$2);
}));

/**
 * Select all elements satisfying `preds` in a `hiccup` tree. If no predicates
 *   are specified, all elements in the hiccup will be returned.
 */
kuhumcst.rescope.select.all = (function kuhumcst$rescope$select$all(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56512 = arguments.length;
var i__4737__auto___56513 = (0);
while(true){
if((i__4737__auto___56513 < len__4736__auto___56512)){
args__4742__auto__.push((arguments[i__4737__auto___56513]));

var G__56519 = (i__4737__auto___56513 + (1));
i__4737__auto___56513 = G__56519;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kuhumcst.rescope.select.all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kuhumcst.rescope.select.all.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,preds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(kuhumcst.rescope.select.select_while,cljs.core.constantly(true),hiccup,preds);
}));

(kuhumcst.rescope.select.all.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kuhumcst.rescope.select.all.cljs$lang$applyTo = (function (seq56446){
var G__56447 = cljs.core.first(seq56446);
var seq56446__$1 = cljs.core.next(seq56446);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56447,seq56446__$1);
}));

/**
 * Select the first element satisfying `preds` in a `hiccup` tree.
 */
kuhumcst.rescope.select.one = (function kuhumcst$rescope$select$one(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56526 = arguments.length;
var i__4737__auto___56528 = (0);
while(true){
if((i__4737__auto___56528 < len__4736__auto___56526)){
args__4742__auto__.push((arguments[i__4737__auto___56528]));

var G__56532 = (i__4737__auto___56528 + (1));
i__4737__auto___56528 = G__56532;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kuhumcst.rescope.select.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kuhumcst.rescope.select.one.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,preds){
return cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(kuhumcst.rescope.select.select_while,(function (p1__56469_SHARP_){
return (cljs.core.count(p1__56469_SHARP_) < (1));
}),hiccup,preds));
}));

(kuhumcst.rescope.select.one.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kuhumcst.rescope.select.one.cljs$lang$applyTo = (function (seq56470){
var G__56471 = cljs.core.first(seq56470);
var seq56470__$1 = cljs.core.next(seq56470);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56471,seq56470__$1);
}));


//# sourceMappingURL=kuhumcst.rescope.select.js.map
