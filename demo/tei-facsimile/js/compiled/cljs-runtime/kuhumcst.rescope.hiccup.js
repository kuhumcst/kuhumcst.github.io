goog.provide('kuhumcst.rescope.hiccup');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.zip');
goog.require('hickory.zip');
goog.require('kuhumcst.rescope.util');
goog.require('kuhumcst.rescope.core');
/**
 * Remove any blank strings from a string node `loc`.
 */
kuhumcst.rescope.hiccup.trim_str = (function kuhumcst$rescope$hiccup$trim_str(p__56616){
var vec__56617 = p__56616;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56617,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56617,(1),null);
var loc = vec__56617;
if(clojure.string.blank_QMARK_(node)){
return clojure.zip.remove(loc);
} else {
return loc;
}
});
/**
 * Remove any strings converted from XML comments from a string node `loc`.
 */
kuhumcst.rescope.hiccup.remove_comment = (function kuhumcst$rescope$hiccup$remove_comment(p__56624){
var vec__56625 = p__56624;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56625,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56625,(1),null);
var loc = vec__56625;
if(((clojure.string.starts_with_QMARK_(node,"<!--")) && (clojure.string.ends_with_QMARK_(node,"-->")))){
return clojure.zip.remove(loc);
} else {
return loc;
}
});
kuhumcst.rescope.hiccup.as_data__STAR_ = (function kuhumcst$rescope$hiccup$as_data__STAR_(attr){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function kuhumcst$rescope$hiccup$as_data__STAR__$_iter__56634(s__56635){
return (new cljs.core.LazySeq(null,(function (){
var s__56635__$1 = s__56635;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56635__$1);
if(temp__5735__auto__){
var s__56635__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56635__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56635__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56637 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56636 = (0);
while(true){
if((i__56636 < size__4528__auto__)){
var vec__56645 = cljs.core._nth(c__4527__auto__,i__56636);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56645,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56645,(1),null);
cljs.core.chunk_append(b__56637,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kuhumcst.rescope.util.data__STAR_(k)),v], null));

var G__56815 = (i__56636 + (1));
i__56636 = G__56815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56637),kuhumcst$rescope$hiccup$as_data__STAR__$_iter__56634(cljs.core.chunk_rest(s__56635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56637),null);
}
} else {
var vec__56661 = cljs.core.first(s__56635__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56661,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kuhumcst.rescope.util.data__STAR_(k)),v], null),kuhumcst$rescope$hiccup$as_data__STAR__$_iter__56634(cljs.core.rest(s__56635__$2)));
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
kuhumcst.rescope.hiccup.attr__GT_data_attr = (function kuhumcst$rescope$hiccup$attr__GT_data_attr(p__56675){
var vec__56677 = p__56675;
var vec__56680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56677,(0),null);
var seq__56681 = cljs.core.seq(vec__56680);
var first__56682 = cljs.core.first(seq__56681);
var seq__56681__$1 = cljs.core.next(seq__56681);
var tag = first__56682;
var first__56682__$1 = cljs.core.first(seq__56681__$1);
var seq__56681__$2 = cljs.core.next(seq__56681__$1);
var attr = first__56682__$1;
var content = seq__56681__$2;
var node = vec__56680;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56677,(1),null);
var loc = vec__56677;
if(cljs.core.map_QMARK_(attr)){
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),kuhumcst.rescope.hiccup.as_data__STAR_(attr)], 0));
} else {
return loc;
}
});
/**
 * Rename attr keys according to `kmap`.
 */
kuhumcst.rescope.hiccup.rename_attr = (function kuhumcst$rescope$hiccup$rename_attr(kmap,p__56692){
var vec__56700 = p__56692;
var vec__56703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56700,(0),null);
var seq__56704 = cljs.core.seq(vec__56703);
var first__56705 = cljs.core.first(seq__56704);
var seq__56704__$1 = cljs.core.next(seq__56704);
var tag = first__56705;
var first__56705__$1 = cljs.core.first(seq__56704__$1);
var seq__56704__$2 = cljs.core.next(seq__56704__$1);
var attr = first__56705__$1;
var content = seq__56704__$2;
var node = vec__56703;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56700,(1),null);
var loc = vec__56700;
if(cljs.core.map_QMARK_(attr)){
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),clojure.set.rename_keys(attr,kuhumcst.rescope.hiccup.as_data__STAR_(kmap))], 0));
} else {
return loc;
}
});
kuhumcst.rescope.hiccup.assoc_meta = (function kuhumcst$rescope$hiccup$assoc_meta(o,k,v){
return cljs.core.with_meta(o,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(o),k,v));
});
/**
 * Insert shadow roots with components based on matches from `injector`.
 */
kuhumcst.rescope.hiccup.inject = (function kuhumcst$rescope$hiccup$inject(injector,p__56729){
var vec__56731 = p__56729;
var vec__56734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56731,(0),null);
var seq__56735 = cljs.core.seq(vec__56734);
var first__56736 = cljs.core.first(seq__56735);
var seq__56735__$1 = cljs.core.next(seq__56735);
var tag = first__56736;
var first__56736__$1 = cljs.core.first(seq__56735__$1);
var seq__56735__$2 = cljs.core.next(seq__56735__$1);
var attr = first__56736__$1;
var content = seq__56735__$2;
var node = vec__56734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56731,(1),null);
var loc = vec__56731;
var temp__5733__auto__ = (injector.cljs$core$IFn$_invoke$arity$1 ? injector.cljs$core$IFn$_invoke$arity$1(node) : injector.call(null,node));
if(cljs.core.truth_(temp__5733__auto__)){
var comp = temp__5733__auto__;
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(loc,kuhumcst.rescope.hiccup.assoc_meta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref","ref",1289896967),kuhumcst.rescope.core.shadow_ref(comp)], 0));
} else {
return loc;
}
});
/**
 * Transform a hiccup vector node `loc` to a valid custom element name by
 *   setting a custom `prefix`.
 */
kuhumcst.rescope.hiccup.add_prefix = (function kuhumcst$rescope$hiccup$add_prefix(prefix,p__56738){
var vec__56740 = p__56738;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56740,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56740,(1),null);
var loc = vec__56740;
var tag = cljs.core.name(cljs.core.first(node));
var new_tag = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kuhumcst.rescope.util.prefixed(prefix,tag));
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),new_tag], 0));
});
/**
 * Merge the element metadata into the attr. Mimics the behaviour of reagent.
 */
kuhumcst.rescope.hiccup.meta_into_attr = (function kuhumcst$rescope$hiccup$meta_into_attr(p__56747){
var vec__56750 = p__56747;
var vec__56753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56750,(0),null);
var seq__56754 = cljs.core.seq(vec__56753);
var first__56755 = cljs.core.first(seq__56754);
var seq__56754__$1 = cljs.core.next(seq__56754);
var tag = first__56755;
var first__56755__$1 = cljs.core.first(seq__56754__$1);
var seq__56754__$2 = cljs.core.next(seq__56754__$1);
var attr = first__56755__$1;
var content = seq__56754__$2;
var node = vec__56753;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56750,(1),null);
var loc = vec__56750;
var temp__5733__auto__ = cljs.core.meta(node);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),cljs.core.merge,m], 0));
} else {
return loc;
}
});
kuhumcst.rescope.hiccup.edit_leaf = (function kuhumcst$rescope$hiccup$edit_leaf(p__56757){
var vec__56758 = p__56757;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56758,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56758,(1),null);
var loc = vec__56758;
if(typeof node === 'string'){
return kuhumcst.rescope.hiccup.remove_comment(kuhumcst.rescope.hiccup.trim_str(loc));
} else {
return loc;
}
});
kuhumcst.rescope.hiccup.edit_branch = (function kuhumcst$rescope$hiccup$edit_branch(prefix,attr_kmap,injector,loc){
return kuhumcst.rescope.hiccup.meta_into_attr(kuhumcst.rescope.hiccup.add_prefix(prefix,kuhumcst.rescope.hiccup.rename_attr(attr_kmap,kuhumcst.rescope.hiccup.attr__GT_data_attr(kuhumcst.rescope.hiccup.inject(injector,loc)))));
});
/**
 * Return true if it makes sense to ignore this loc.
 */
kuhumcst.rescope.hiccup.ignore_QMARK_ = (function kuhumcst$rescope$hiccup$ignore_QMARK_(p__56767){
var vec__56768 = p__56767;
var vec__56771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56768,(0),null);
var seq__56772 = cljs.core.seq(vec__56771);
var first__56773 = cljs.core.first(seq__56772);
var seq__56772__$1 = cljs.core.next(seq__56772);
var tag = first__56773;
var first__56773__$1 = cljs.core.first(seq__56772__$1);
var seq__56772__$2 = cljs.core.next(seq__56772__$1);
var attr = first__56773__$1;
var content = seq__56772__$2;
var node = vec__56771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56768,(1),null);
var loc = vec__56768;
return ((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"<>","<>",1280186386))));
});
/**
 * Process relevant nodes of a zipper made from a `hiccup` tree based on `opts`.
 *   Return the transformed structure as valid HTML with shadow DOM injections.
 * 
 *   The hiccup structure is trimmed and the `prefix` is applied to all element
 *   tags in the tree. Attributes are renamed according to `attr-kmap` or converted
 *   into the data-* format. Finally, shadow roots are inserted based on the
 *   `injector`, the HTML now being rendered by replacement components.
 */
kuhumcst.rescope.hiccup.postprocess = (function kuhumcst$rescope$hiccup$postprocess(var_args){
var G__56789 = arguments.length;
switch (G__56789) {
case 2:
return kuhumcst.rescope.hiccup.postprocess.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return kuhumcst.rescope.hiccup.postprocess.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kuhumcst.rescope.hiccup.postprocess.cljs$core$IFn$_invoke$arity$2 = (function (hiccup,p__56799){
var map__56800 = p__56799;
var map__56800__$1 = (((((!((map__56800 == null))))?(((((map__56800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56800):map__56800);
var opts = map__56800__$1;
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56800__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"rescope");
var attr_kmap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56800__$1,new cljs.core.Keyword(null,"attr-kmap","attr-kmap",807970155),cljs.core.PersistentArrayMap.EMPTY);
var injector = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56800__$1,new cljs.core.Keyword(null,"injector","injector",-1718984338),cljs.core.constantly(null));
var postprocess_STAR_ = (function (p__56808){
var vec__56809 = p__56808;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56809,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56809,(1),null);
var loc = vec__56809;
if(cljs.core.vector_QMARK_(node)){
return kuhumcst.rescope.hiccup.edit_branch(prefix,attr_kmap,injector,loc);
} else {
return kuhumcst.rescope.hiccup.edit_leaf(loc);
}
});
var loc = hickory.zip.hiccup_zip(hiccup);
while(true){
if(clojure.zip.end_QMARK_(loc)){
return clojure.zip.root(loc);
} else {
var G__56822 = clojure.zip.next(((kuhumcst.rescope.hiccup.ignore_QMARK_(loc))?loc:postprocess_STAR_(loc)));
loc = G__56822;
continue;
}
break;
}
}));

(kuhumcst.rescope.hiccup.postprocess.cljs$core$IFn$_invoke$arity$1 = (function (hiccup){
return kuhumcst.rescope.hiccup.postprocess.cljs$core$IFn$_invoke$arity$2(hiccup,null);
}));

(kuhumcst.rescope.hiccup.postprocess.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=kuhumcst.rescope.hiccup.js.map
