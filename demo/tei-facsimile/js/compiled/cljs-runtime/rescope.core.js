goog.provide('rescope.core');
/**
 * Get a set of all custom tags (as strings) found in a `hiccup` tree.
 */
rescope.core.hiccup__GT_custom_tags = (function rescope$core$hiccup__GT_custom_tags(hiccup){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(rescope.util.valid_custom_tag_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.name),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,rescope.select.all(hiccup))))));
});
/**
 * Define custom HTML elements covering all `tags`.
 */
rescope.core.define_elements_BANG_ = (function rescope$core$define_elements_BANG_(tags){
var seq__52024 = cljs.core.seq(tags);
var chunk__52025 = null;
var count__52026 = (0);
var i__52027 = (0);
while(true){
if((i__52027 < count__52026)){
var tag = chunk__52025.cljs$core$IIndexed$_nth$arity$2(null,i__52027);
rescope.interop.define_element_BANG_(tag);


var G__52092 = seq__52024;
var G__52093 = chunk__52025;
var G__52094 = count__52026;
var G__52095 = (i__52027 + (1));
seq__52024 = G__52092;
chunk__52025 = G__52093;
count__52026 = G__52094;
i__52027 = G__52095;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52024);
if(temp__5735__auto__){
var seq__52024__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52024__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52024__$1);
var G__52101 = cljs.core.chunk_rest(seq__52024__$1);
var G__52102 = c__4556__auto__;
var G__52103 = cljs.core.count(c__4556__auto__);
var G__52104 = (0);
seq__52024 = G__52101;
chunk__52025 = G__52102;
count__52026 = G__52103;
i__52027 = G__52104;
continue;
} else {
var tag = cljs.core.first(seq__52024__$1);
rescope.interop.define_element_BANG_(tag);


var G__52106 = cljs.core.next(seq__52024__$1);
var G__52107 = null;
var G__52108 = (0);
var G__52109 = (0);
seq__52024 = G__52106;
chunk__52025 = G__52107;
count__52026 = G__52108;
i__52027 = G__52109;
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
rescope.core.shadow_ref = (function rescope$core$shadow_ref(comp){
return (function (this$){
if(cljs.core.truth_(this$)){
if((void 0 === this$.shadow)){
(this$.shadow = this$.attachShadow(({"mode": "open"})));
} else {
}

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,this$], null),this$.shadow);
} else {
return null;
}
});
});
rescope.core.shadow_wrapper = (function rescope$core$shadow_wrapper(old_node,new_node){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(old_node,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1289896967),rescope.core.shadow_ref(cljs.core.constantly(new_node)));
});
/**
 * Render `hiccup` inside a shadow DOM with the root element as the shadow host.
 *   Optionally takes scoped `css` to apply to the content inside the shadow DOM.
 *   The `css` can be a string or hiccup, e.g. [:style], [:link], [:template].
 */
rescope.core.scope = (function rescope$core$scope(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52122 = arguments.length;
var i__4737__auto___52125 = (0);
while(true){
if((i__4737__auto___52125 < len__4736__auto___52122)){
args__4742__auto__.push((arguments[i__4737__auto___52125]));

var G__52127 = (i__4737__auto___52125 + (1));
i__4737__auto___52125 = G__52127;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rescope.core.scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rescope.core.scope.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__52059){
var vec__52060 = p__52059;
var css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52060,(0),null);
rescope.core.define_elements_BANG_(rescope.core.hiccup__GT_custom_tags(hiccup));

var vec__52063 = ((cljs.core.map_QMARK_(cljs.core.second(hiccup)))?cljs.core.split_at((2),hiccup):cljs.core.split_at((1),hiccup));
var vec__52066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52063,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52066,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52066,(1),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52063,(1),null);
var style = ((typeof css === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),css], null):css);
var comp = (function (_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),style], null),children);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr,new cljs.core.Keyword(null,"ref","ref",1289896967),rescope.core.shadow_ref(comp))], null);
}));

(rescope.core.scope.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rescope.core.scope.cljs$lang$applyTo = (function (seq52050){
var G__52051 = cljs.core.first(seq52050);
var seq52050__$1 = cljs.core.next(seq52050);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52051,seq52050__$1);
}));


//# sourceMappingURL=rescope.core.js.map
