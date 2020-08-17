goog.provide('rescope.select');
/**
 * Create an element selector predicate for element `tags`. Will select elements
 *   present in the list of tags. Selects all elements if no tags are specified.
 */
rescope.select.element = (function rescope$select$element(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51946 = arguments.length;
var i__4737__auto___51947 = (0);
while(true){
if((i__4737__auto___51947 < len__4736__auto___51946)){
args__4742__auto__.push((arguments[i__4737__auto___51947]));

var G__51948 = (i__4737__auto___51947 + (1));
i__4737__auto___51947 = G__51948;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return rescope.select.element.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(rescope.select.element.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
if(cljs.core.empty_QMARK_(tags)){
return cljs.core.vector_QMARK_;
} else {
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set(tags),cljs.core.first));
}
}));

(rescope.select.element.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rescope.select.element.cljs$lang$applyTo = (function (seq51846){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51846));
}));

/**
 * Create an attribute selector predicate based on `attr`. Passing a set as attr
 *   will test for the existence of attribute keys, while passing a map will test
 *   for matching key-value pairs of attributes.
 */
rescope.select.attr = (function rescope$select$attr(attr){
var contains_attr_QMARK_ = (function (p__51862){
var vec__51864 = p__51862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51864,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51864,(1),null);
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
rescope.select.select_while = (function rescope$select$select_while(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51949 = arguments.length;
var i__4737__auto___51950 = (0);
while(true){
if((i__4737__auto___51950 < len__4736__auto___51949)){
args__4742__auto__.push((arguments[i__4737__auto___51950]));

var G__51951 = (i__4737__auto___51950 + (1));
i__4737__auto___51950 = G__51951;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rescope.select.select_while.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rescope.select.select_while.cljs$core$IFn$_invoke$arity$variadic = (function (coll_pred,hiccup,preds){
var matches_QMARK_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.every_pred,cljs.core.vector_QMARK_,preds);
var collect = (function (coll,p__51888){
var vec__51889 = p__51888;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51889,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51889,(1),null);
var loc = vec__51889;
var G__51894 = coll;
var G__51894__$1 = ((cljs.core.not((coll_pred.cljs$core$IFn$_invoke$arity$1 ? coll_pred.cljs$core$IFn$_invoke$arity$1(coll) : coll_pred.call(null,coll))))?cljs.core.reduced(G__51894):G__51894);
if(cljs.core.truth_((matches_QMARK_.cljs$core$IFn$_invoke$arity$1 ? matches_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : matches_QMARK_.call(null,node)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51894__$1,node);
} else {
return G__51894__$1;
}
});
var zip_iter = cljs.core.iterate(clojure.zip.next,hickory.zip.hiccup_zip(hiccup));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(collect,cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(clojure.zip.end_QMARK_),zip_iter));
}));

(rescope.select.select_while.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rescope.select.select_while.cljs$lang$applyTo = (function (seq51873){
var G__51874 = cljs.core.first(seq51873);
var seq51873__$1 = cljs.core.next(seq51873);
var G__51875 = cljs.core.first(seq51873__$1);
var seq51873__$2 = cljs.core.next(seq51873__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51874,G__51875,seq51873__$2);
}));

/**
 * Select all elements satisfying `preds` in a `hiccup` tree. If no predicates
 *   are specified, all elements in the hiccup will be returned.
 */
rescope.select.all = (function rescope$select$all(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51956 = arguments.length;
var i__4737__auto___51957 = (0);
while(true){
if((i__4737__auto___51957 < len__4736__auto___51956)){
args__4742__auto__.push((arguments[i__4737__auto___51957]));

var G__51958 = (i__4737__auto___51957 + (1));
i__4737__auto___51957 = G__51958;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rescope.select.all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rescope.select.all.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,preds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rescope.select.select_while,cljs.core.constantly(true),hiccup,preds);
}));

(rescope.select.all.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rescope.select.all.cljs$lang$applyTo = (function (seq51911){
var G__51912 = cljs.core.first(seq51911);
var seq51911__$1 = cljs.core.next(seq51911);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51912,seq51911__$1);
}));

/**
 * Select the first element satisfying `preds` in a `hiccup` tree.
 */
rescope.select.one = (function rescope$select$one(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51965 = arguments.length;
var i__4737__auto___51967 = (0);
while(true){
if((i__4737__auto___51967 < len__4736__auto___51965)){
args__4742__auto__.push((arguments[i__4737__auto___51967]));

var G__51968 = (i__4737__auto___51967 + (1));
i__4737__auto___51967 = G__51968;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rescope.select.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rescope.select.one.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,preds){
return cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rescope.select.select_while,(function (p1__51931_SHARP_){
return (cljs.core.count(p1__51931_SHARP_) < (1));
}),hiccup,preds));
}));

(rescope.select.one.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rescope.select.one.cljs$lang$applyTo = (function (seq51933){
var G__51934 = cljs.core.first(seq51933);
var seq51933__$1 = cljs.core.next(seq51933);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51934,seq51933__$1);
}));


//# sourceMappingURL=rescope.select.js.map
