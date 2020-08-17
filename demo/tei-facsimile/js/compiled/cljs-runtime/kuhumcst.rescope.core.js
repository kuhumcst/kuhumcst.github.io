goog.provide('kuhumcst.rescope.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.dom');
goog.require('kuhumcst.rescope.interop');
goog.require('kuhumcst.rescope.select');
/**
 * Get a set of all tags (as strings) found in a `hiccup` tree.
 */
kuhumcst.rescope.core.hiccup__GT_custom_tags = (function kuhumcst$rescope$core$hiccup__GT_custom_tags(hiccup){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(clojure.string.lower_case,cljs.core.name,cljs.core.first),kuhumcst.rescope.select.all(hiccup)));
});
/**
 * Define custom HTML elements covering all `tags`.
 */
kuhumcst.rescope.core.define_elements_BANG_ = (function kuhumcst$rescope$core$define_elements_BANG_(tags){
var seq__56503 = cljs.core.seq(tags);
var chunk__56504 = null;
var count__56505 = (0);
var i__56506 = (0);
while(true){
if((i__56506 < count__56505)){
var tag = chunk__56504.cljs$core$IIndexed$_nth$arity$2(null,i__56506);
kuhumcst.rescope.interop.define_element_BANG_(tag);


var G__56570 = seq__56503;
var G__56571 = chunk__56504;
var G__56572 = count__56505;
var G__56573 = (i__56506 + (1));
seq__56503 = G__56570;
chunk__56504 = G__56571;
count__56505 = G__56572;
i__56506 = G__56573;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56503);
if(temp__5735__auto__){
var seq__56503__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56503__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56503__$1);
var G__56574 = cljs.core.chunk_rest(seq__56503__$1);
var G__56575 = c__4556__auto__;
var G__56576 = cljs.core.count(c__4556__auto__);
var G__56577 = (0);
seq__56503 = G__56574;
chunk__56504 = G__56575;
count__56505 = G__56576;
i__56506 = G__56577;
continue;
} else {
var tag = cljs.core.first(seq__56503__$1);
kuhumcst.rescope.interop.define_element_BANG_(tag);


var G__56581 = cljs.core.next(seq__56503__$1);
var G__56582 = null;
var G__56583 = (0);
var G__56584 = (0);
seq__56503 = G__56581;
chunk__56504 = G__56582;
count__56505 = G__56583;
i__56506 = G__56584;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Get a :ref fn for a DOM element to render a given `comp` as its shadow root.
 *   The component should accept a single argument: the element's DOM reference.
 */
kuhumcst.rescope.core.shadow_ref = (function kuhumcst$rescope$core$shadow_ref(comp){
return (function (this$){
if(cljs.core.truth_(this$)){
(this$.shadow = this$.attachShadow(({"mode": "open"})));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,this$], null),this$.shadow);
} else {
return null;
}
});
});
/**
 * Render `hiccup` inside a shadow DOM with the root element as the shadow host.
 *   Optionally takes scoped `css` to apply to the content inside the shadow DOM.
 *   The `css` can be a string or hiccup, e.g. [:style], [:link], [:template].
 */
kuhumcst.rescope.core.scope = (function kuhumcst$rescope$core$scope(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56588 = arguments.length;
var i__4737__auto___56589 = (0);
while(true){
if((i__4737__auto___56589 < len__4736__auto___56588)){
args__4742__auto__.push((arguments[i__4737__auto___56589]));

var G__56590 = (i__4737__auto___56589 + (1));
i__4737__auto___56589 = G__56590;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kuhumcst.rescope.core.scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kuhumcst.rescope.core.scope.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__56546){
var vec__56547 = p__56546;
var css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56547,(0),null);
kuhumcst.rescope.core.define_elements_BANG_(kuhumcst.rescope.core.hiccup__GT_custom_tags(hiccup));

var vec__56550 = ((cljs.core.map_QMARK_(cljs.core.second(hiccup)))?cljs.core.split_at((2),hiccup):cljs.core.split_at((1),hiccup));
var vec__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56550,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56553,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56553,(1),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56550,(1),null);
var style = ((typeof css === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),css], null):css);
var comp = (function (_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),style], null),children);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr,new cljs.core.Keyword(null,"ref","ref",1289896967),kuhumcst.rescope.core.shadow_ref(comp))], null);
}));

(kuhumcst.rescope.core.scope.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kuhumcst.rescope.core.scope.cljs$lang$applyTo = (function (seq56538){
var G__56539 = cljs.core.first(seq56538);
var seq56538__$1 = cljs.core.next(seq56538);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56539,seq56538__$1);
}));


//# sourceMappingURL=kuhumcst.rescope.core.js.map
