goog.provide('cuphic.zip');
/**
 * Also zips maps in addition to zipping vectors. Intentionally skips records.
 */
cuphic.zip.vector_map_zip = (function cuphic$zip$vector_map_zip(root){
return clojure.zip.zipper(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.complement(cljs.core.record_QMARK_))),cljs.core.seq,(function (node,children){
if(cljs.core.vector_QMARK_(node)){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,children),cljs.core.meta(node));
} else {
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children),cljs.core.meta(node));
}
}),root);
});
/**
 * Fast-forward a zipper to skip the subtree at `loc`.
 */
cuphic.zip.skip_subtree = (function cuphic$zip$skip_subtree(p__51603){
while(true){
var vec__51604 = p__51603;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51604,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51604,(1),null);
var loc = vec__51604;
if(clojure.zip.end_QMARK_(loc)){
return loc;
} else {
if(cljs.core.truth_(clojure.zip.right(loc))){
return clojure.zip.right(loc);
} else {
if(cljs.core.truth_(clojure.zip.up(loc))){
var G__51614 = clojure.zip.up(loc);
p__51603 = G__51614;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loc,(1),new cljs.core.Keyword(null,"end","end",-268185958));

}
}
}
break;
}
});
/**
 * Replace `loc` with `nodes`.
 */
cuphic.zip.multi_replace = (function cuphic$zip$multi_replace(loc,nodes){
return clojure.zip.remove(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.zip.insert_left,loc,nodes));
});

//# sourceMappingURL=cuphic.zip.js.map
