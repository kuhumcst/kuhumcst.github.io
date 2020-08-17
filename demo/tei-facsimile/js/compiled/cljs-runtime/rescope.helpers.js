goog.provide('rescope.helpers');
rescope.helpers.as_data__STAR_ = (function rescope$helpers$as_data__STAR_(attr){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function rescope$helpers$as_data__STAR__$_iter__52069(s__52070){
return (new cljs.core.LazySeq(null,(function (){
var s__52070__$1 = s__52070;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52070__$1);
if(temp__5735__auto__){
var s__52070__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52070__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52070__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52072 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52071 = (0);
while(true){
if((i__52071 < size__4528__auto__)){
var vec__52079 = cljs.core._nth(c__4527__auto__,i__52071);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52079,(1),null);
cljs.core.chunk_append(b__52072,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(rescope.util.data__STAR_(k)),v], null));

var G__52193 = (i__52071 + (1));
i__52071 = G__52193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52072),rescope$helpers$as_data__STAR__$_iter__52069(cljs.core.chunk_rest(s__52070__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52072),null);
}
} else {
var vec__52096 = cljs.core.first(s__52070__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52096,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(rescope.util.data__STAR_(k)),v], null),rescope$helpers$as_data__STAR__$_iter__52069(cljs.core.rest(s__52070__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(attr);
})());
});
/**
 * Convert all attributes into data-* attributes.
 */
rescope.helpers.attr__GT_data_attr = (function rescope$helpers$attr__GT_data_attr(p__52113){
var vec__52116 = p__52113;
var seq__52117 = cljs.core.seq(vec__52116);
var first__52118 = cljs.core.first(seq__52117);
var seq__52117__$1 = cljs.core.next(seq__52117);
var tag = first__52118;
var first__52118__$1 = cljs.core.first(seq__52117__$1);
var seq__52117__$2 = cljs.core.next(seq__52117__$1);
var attr = first__52118__$1;
var content = seq__52117__$2;
var node = vec__52116;
if(cljs.core.map_QMARK_(attr)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,(1),rescope.helpers.as_data__STAR_(attr));
} else {
return node;
}
});
/**
 * Rename attr keys according to `kmap`.
 */
rescope.helpers.rename_attr = (function rescope$helpers$rename_attr(kmap,p__52130){
var vec__52131 = p__52130;
var seq__52132 = cljs.core.seq(vec__52131);
var first__52133 = cljs.core.first(seq__52132);
var seq__52132__$1 = cljs.core.next(seq__52132);
var tag = first__52133;
var first__52133__$1 = cljs.core.first(seq__52132__$1);
var seq__52132__$2 = cljs.core.next(seq__52132__$1);
var attr = first__52133__$1;
var content = seq__52132__$2;
var node = vec__52131;
if(cljs.core.truth_((function (){var and__4115__auto__ = kmap;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.map_QMARK_(attr);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,(1),clojure.set.rename_keys(attr,rescope.helpers.as_data__STAR_(kmap)));
} else {
return node;
}
});
/**
 * Transform a hiccup vector node `loc` to a valid custom element name by
 *   setting a custom `prefix`.
 */
rescope.helpers.add_prefix = (function rescope$helpers$add_prefix(prefix,node){
if((cljs.core.first(node) instanceof cljs.core.Keyword)){
var tag = cljs.core.name(cljs.core.first(node));
var new_tag = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(rescope.util.prefixed(prefix,tag));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,(0),new_tag);
} else {
return node;
}
});
/**
 * Merge the element metadata into the attr. Mimics the behaviour of reagent.
 */
rescope.helpers.meta_into_attr = (function rescope$helpers$meta_into_attr(p__52146){
var vec__52148 = p__52146;
var seq__52149 = cljs.core.seq(vec__52148);
var first__52150 = cljs.core.first(seq__52149);
var seq__52149__$1 = cljs.core.next(seq__52149);
var tag = first__52150;
var first__52150__$1 = cljs.core.first(seq__52149__$1);
var seq__52149__$2 = cljs.core.next(seq__52149__$1);
var attr = first__52150__$1;
var content = seq__52149__$2;
var node = vec__52148;
var temp__5733__auto__ = cljs.core.meta(node);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
if(cljs.core.map_QMARK_(attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,(1),cljs.core.merge,m);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,m], null),content);
}
} else {
return node;
}
});
/**
 * Return function applying default transformations based on `opts`.
 * 
 *   This is meant to be used as the :default fn in the final stage of a Cuphic
 *   rewrite to ensure that the Hiccup will convert to standards-compliant HTML.
 */
rescope.helpers.default_fn = (function rescope$helpers$default_fn(p__52165){
var map__52168 = p__52165;
var map__52168__$1 = (((((!((map__52168 == null))))?(((((map__52168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52168):map__52168);
var opts = map__52168__$1;
var attr_kmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52168__$1,new cljs.core.Keyword(null,"attr-kmap","attr-kmap",807970155));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52168__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
return (function (node){
return rescope.helpers.meta_into_attr(rescope.helpers.add_prefix(prefix,rescope.helpers.rename_attr(attr_kmap,rescope.helpers.attr__GT_data_attr(node))));
});
});

//# sourceMappingURL=rescope.helpers.js.map
