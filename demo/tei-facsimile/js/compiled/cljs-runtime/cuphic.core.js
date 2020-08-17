goog.provide('cuphic.core');
/**
 * Helper function for normalised destructuring of a hiccup-vector `v`.
 */
cuphic.core.hicv = (function cuphic$core$hicv(v){
if(cljs.core.map_QMARK_(cljs.core.second(v))){
return v;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(v),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.rest(v));
}
});
cuphic.core.__GT_nodes = (function cuphic$core$__GT_nodes(v){
if(cljs.core.map_QMARK_(cljs.core.second(v))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(2));
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
}
});
/**
 * Get the symbol->value mapping found when comparing `cattr` to `hattr`.
 *   Returns nil if the two attrs don't match.
 */
cuphic.core.attr_bindings = (function cuphic$core$attr_bindings(cattr,hattr){
var diffs = lambdaisland.deep_diff2.diff(cattr,hattr);
var loc = cuphic.zip.vector_map_zip(diffs);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(clojure.zip.end_QMARK_(loc)){
return ret;
} else {
var map__52637 = clojure.zip.node(loc);
var map__52637__$1 = (((((!((map__52637 == null))))?(((((map__52637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52637):map__52637);
var node = map__52637__$1;
var _PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52637__$1,new cljs.core.Keyword(null,"+","+",1913524883));
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52637__$1,new cljs.core.Keyword(null,"-","-",-2112348439));
var pred__52639 = cljs.core.instance_QMARK_;
var expr__52640 = node;
if(cljs.core.truth_((pred__52639.cljs$core$IFn$_invoke$arity$2 ? pred__52639.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.Deletion,expr__52640) : pred__52639.call(null,lambdaisland.deep_diff2.diff_impl.Deletion,expr__52640)))){
return null;
} else {
if(cljs.core.truth_((pred__52639.cljs$core$IFn$_invoke$arity$2 ? pred__52639.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.Insertion,expr__52640) : pred__52639.call(null,lambdaisland.deep_diff2.diff_impl.Insertion,expr__52640)))){
if((((_PLUS_ instanceof cljs.core.Keyword)) && (cljs.core.map_QMARK_(clojure.zip.node(clojure.zip.up(clojure.zip.up(loc))))))){
var G__52830 = clojure.zip.next(loc);
var G__52831 = ret;
loc = G__52830;
ret = G__52831;
continue;
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__52639.cljs$core$IFn$_invoke$arity$2 ? pred__52639.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.Mismatch,expr__52640) : pred__52639.call(null,lambdaisland.deep_diff2.diff_impl.Mismatch,expr__52640)))){
if((_ instanceof cljs.core.Symbol)){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","?","cuphic.spec/?",906681842),_)){
var G__52832 = clojure.zip.next(loc);
var G__52833 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,_,_PLUS_);
loc = G__52832;
ret = G__52833;
continue;
} else {
var G__52834 = clojure.zip.next(loc);
var G__52835 = ret;
loc = G__52834;
ret = G__52835;
continue;
}
} else {
return null;
}
} else {
var G__52836 = clojure.zip.next(loc);
var G__52837 = ret;
loc = G__52836;
ret = G__52837;
continue;
}
}
}
}
break;
}
});
/**
 * Get the symbol->value mapping found when comparing only tags and attrs of a
 *   normalised Cuphic vector `cv` and a normalised Hiccup vector `hv`.
 *   Returns nil if the two vectors don't match.
 */
cuphic.core.tag_PLUS_attr_bindings = (function cuphic$core$tag_PLUS_attr_bindings(p__52645,p__52646){
var vec__52647 = p__52645;
var ctag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52647,(0),null);
var cattr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52647,(1),null);
var vec__52650 = p__52646;
var htag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52650,(0),null);
var hattr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52650,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ctag,htag)){
return cuphic.core.attr_bindings(cattr,hattr);
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","?","cuphic.spec/?",906681842),ctag)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","?","cuphic.spec/?",906681842),ctag))?cljs.core.PersistentArrayMap.createAsIfByAssoc([ctag,htag]):null),cuphic.core.attr_bindings(cattr,hattr)], 0));
} else {
return null;
}
}
});
/**
 * Get the symbol->value mapping found comparing two sequential collections.
 *   This function is used to scoop up bindings that would otherwise be skipped
 *   if a quantifier is present.
 *   Returns nil if the two vectors don't match.
 */
cuphic.core.fixed_bindings = (function cuphic$core$fixed_bindings(ccoll,hcoll){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ccoll),cljs.core.count(hcoll))){
var G__52659 = ccoll;
var vec__52661 = G__52659;
var seq__52662 = cljs.core.seq(vec__52661);
var first__52663 = cljs.core.first(seq__52662);
var seq__52662__$1 = cljs.core.next(seq__52662);
var cnode = first__52663;
var ccoll__$1 = seq__52662__$1;
var G__52660 = hcoll;
var vec__52664 = G__52660;
var seq__52665 = cljs.core.seq(vec__52664);
var first__52666 = cljs.core.first(seq__52665);
var seq__52665__$1 = cljs.core.next(seq__52665);
var hnode = first__52666;
var hcoll__$1 = seq__52665__$1;
var ret = cljs.core.PersistentArrayMap.EMPTY;
var G__52659__$1 = G__52659;
var G__52660__$1 = G__52660;
var ret__$1 = ret;
while(true){
var vec__52673 = G__52659__$1;
var seq__52674 = cljs.core.seq(vec__52673);
var first__52675 = cljs.core.first(seq__52674);
var seq__52674__$1 = cljs.core.next(seq__52674);
var cnode__$1 = first__52675;
var ccoll__$2 = seq__52674__$1;
var vec__52676 = G__52660__$1;
var seq__52677 = cljs.core.seq(vec__52676);
var first__52678 = cljs.core.first(seq__52677);
var seq__52677__$1 = cljs.core.next(seq__52677);
var hnode__$1 = first__52678;
var hcoll__$2 = seq__52677__$1;
var ret__$2 = ret__$1;
if(cljs.core.truth_((function (){var and__4115__auto__ = cnode__$1;
if(cljs.core.truth_(and__4115__auto__)){
return hnode__$1;
} else {
return and__4115__auto__;
}
})())){
var temp__5735__auto__ = (cuphic.core.bindings_delta.cljs$core$IFn$_invoke$arity$2 ? cuphic.core.bindings_delta.cljs$core$IFn$_invoke$arity$2(cnode__$1,hnode__$1) : cuphic.core.bindings_delta.call(null,cnode__$1,hnode__$1));
if(cljs.core.truth_(temp__5735__auto__)){
var delta = temp__5735__auto__;
var G__52842 = ccoll__$2;
var G__52843 = hcoll__$2;
var G__52844 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret__$2,delta], 0));
G__52659__$1 = G__52842;
G__52660__$1 = G__52843;
ret__$1 = G__52844;
continue;
} else {
return null;
}
} else {
if(((cljs.core.empty_QMARK_(ccoll__$2)) && (cljs.core.empty_QMARK_(hcoll__$2)))){
return ret__$2;
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
/**
 * Find the bindings of the first occurrence of fixed-length sequence `cnodes`
 *   in `hnodes` starting the search at the `begin` index. As an aid to the caller,
 *   the indices of the matching subsection are attached as metadata.
 */
cuphic.core.section_search = (function cuphic$core$section_search(cnodes,hnodes,begin){
if((!(cljs.core.empty_QMARK_(cnodes)))){
var section_size = cljs.core.count(cnodes);
var end = (cljs.core.count(hnodes) - section_size);
var i = begin;
while(true){
if((i <= end)){
var section_end = (i + section_size);
var candidate = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(hnodes,i,section_end);
var temp__5733__auto__ = cuphic.core.fixed_bindings(cnodes,candidate);
if(cljs.core.truth_(temp__5733__auto__)){
var delta = temp__5733__auto__;
return cljs.core.with_meta(delta,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin","begin",-319034319),i,new cljs.core.Keyword(null,"end","end",-268185958),section_end], null));
} else {
var G__52845 = (i + (1));
i = G__52845;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
cuphic.core.quantifier_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.valid_QMARK_,new cljs.core.Keyword("cuphic.spec","quantifier","cuphic.spec/quantifier",1228319216));
/**
 * Return 1:1 bindings between `pattern` and `nodes` as kvs.
 */
cuphic.core.direct_bindings = (function cuphic$core$direct_bindings(pattern,nodes){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pattern),cljs.core.count(nodes))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (kvs,p__52680){
var vec__52681 = p__52680;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52681,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52681,(1),null);
var kv = vec__52681;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,v)){
return kvs;
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(kvs,kv);
} else {
if(cljs.core.vector_QMARK_(v)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,kvs,(cuphic.core.bindings_delta.cljs$core$IFn$_invoke$arity$2 ? cuphic.core.bindings_delta.cljs$core$IFn$_invoke$arity$2(k,v) : cuphic.core.bindings_delta.call(null,k,v)));
} else {
return cljs.core.reduced(null);

}
}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,nodes));
} else {
return null;
}
});
cuphic.core.not_fragment_QMARK_ = (function cuphic$core$not_fragment_QMARK_(x){
return (!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","fragment","cuphic.spec/fragment",1742764937),x)));
});
/**
 * Create a capture pattern from a sequence of `cnodes`. Returns the input data
 *   structure with relevant metadata attached, or nil if invalid.
 */
cuphic.core.capture_pattern = (function cuphic$core$capture_pattern(cnodes){
var parts = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cuphic.core.quantifier_QMARK_,cnodes);
var quantifiers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cuphic.core.quantifier_QMARK_,cljs.core.first),parts);
var quantifier_count = cljs.core.count(quantifiers);
var min_count = (function (){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","+","cuphic.spec/+",-1550371104),cljs.core.ffirst(quantifiers))){
return cljs.core.count(cnodes);
} else {
return (cljs.core.count(cnodes) - (1));
}
});
if((quantifier_count > (1))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quantifier_count,(0))){
return cljs.core.with_meta(cnodes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-count","min-count",1594709013),cljs.core.count(cnodes)], null));
} else {
if(cljs.core.truth_(cuphic.core.quantifier_QMARK_(cljs.core.first(cnodes)))){
return cljs.core.with_meta(cnodes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"quantifier","quantifier",-1347531575),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"min-count","min-count",1594709013),min_count()], null));
} else {
if(cljs.core.truth_(cuphic.core.quantifier_QMARK_(cljs.core.last(cnodes)))){
return cljs.core.with_meta(cnodes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"quantifier","quantifier",-1347531575),new cljs.core.Keyword(null,"affix","affix",1932418821),new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"min-count","min-count",1594709013),min_count()], null));
} else {
return cljs.core.with_meta(cnodes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"quantifier","quantifier",-1347531575),new cljs.core.Keyword(null,"infix","infix",1991018113),new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"min-count","min-count",1594709013),min_count()], null));

}
}
}
}
});
/**
 * Partition a list of `cnodes` into a list of capture patterns.
 */
cuphic.core.__GT_patterns = (function cuphic$core$__GT_patterns(cnodes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cuphic.core.capture_pattern,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cnodes));
});
/**
 * Return the aggregate min-count of a list of `capture-patterns`.
 */
cuphic.core.min_capture = (function cuphic$core$min_capture(capture_patterns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min-count","min-count",1594709013),cljs.core.meta),capture_patterns));
});
/**
 * Given a list of cnodes partitioned into `capture-patterns`, return the
 *   bindings found in `hnodes`.
 */
cuphic.core.pattern_bindings = (function cuphic$core$pattern_bindings(capture_patterns,hnodes){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var hnodes__$1 = hnodes;
var G__52690 = capture_patterns;
var vec__52691 = G__52690;
var seq__52692 = cljs.core.seq(vec__52691);
var first__52693 = cljs.core.first(seq__52692);
var seq__52692__$1 = cljs.core.next(seq__52692);
var pattern = first__52693;
var vec__52694 = seq__52692__$1;
var next_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52694,(0),null);
var patterns = vec__52694;
var ret__$1 = ret;
var hnodes__$2 = hnodes__$1;
var G__52690__$1 = G__52690;
while(true){
var ret__$2 = ret__$1;
var hnodes__$3 = hnodes__$2;
var vec__52725 = G__52690__$1;
var seq__52726 = cljs.core.seq(vec__52725);
var first__52727 = cljs.core.first(seq__52726);
var seq__52726__$1 = cljs.core.next(seq__52726);
var pattern__$1 = first__52727;
var vec__52728 = seq__52726__$1;
var next_pattern__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52728,(0),null);
var patterns__$1 = vec__52728;
var map__52735 = cljs.core.meta(pattern__$1);
var map__52735__$1 = (((((!((map__52735 == null))))?(((((map__52735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52735):map__52735);
var quantifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52735__$1,new cljs.core.Keyword(null,"quantifier","quantifier",-1347531575));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52735__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52735__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var nodes_until = ((function (ret__$1,hnodes__$2,G__52690__$1,map__52735,map__52735__$1,quantifier,parts,min_count,ret__$2,hnodes__$3,vec__52725,seq__52726,first__52727,seq__52726__$1,pattern__$1,vec__52728,next_pattern__$1,patterns__$1,ret,hnodes__$1,G__52690,vec__52691,seq__52692,first__52693,seq__52692__$1,pattern,vec__52694,next_pattern,patterns){
return (function (cnodes,hnodes__$4,begin){
var hit = cuphic.core.section_search(cnodes,hnodes__$4,begin);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(hnodes__$4,(0),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(hit));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.count(hnodes__$4);
}
})());
});})(ret__$1,hnodes__$2,G__52690__$1,map__52735,map__52735__$1,quantifier,parts,min_count,ret__$2,hnodes__$3,vec__52725,seq__52726,first__52727,seq__52726__$1,pattern__$1,vec__52728,next_pattern__$1,patterns__$1,ret,hnodes__$1,G__52690,vec__52691,seq__52692,first__52693,seq__52692__$1,pattern,vec__52694,next_pattern,patterns))
;
var min_nodes_QMARK_ = ((function (ret__$1,hnodes__$2,G__52690__$1,map__52735,map__52735__$1,quantifier,parts,min_count,nodes_until,ret__$2,hnodes__$3,vec__52725,seq__52726,first__52727,seq__52726__$1,pattern__$1,vec__52728,next_pattern__$1,patterns__$1,ret,hnodes__$1,G__52690,vec__52691,seq__52692,first__52693,seq__52692__$1,pattern,vec__52694,next_pattern,patterns){
return (function (quantifier__$1,nodes){
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(nodes))) && (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","+","cuphic.spec/+",-1550371104),quantifier__$1)))));
});})(ret__$1,hnodes__$2,G__52690__$1,map__52735,map__52735__$1,quantifier,parts,min_count,nodes_until,ret__$2,hnodes__$3,vec__52725,seq__52726,first__52727,seq__52726__$1,pattern__$1,vec__52728,next_pattern__$1,patterns__$1,ret,hnodes__$1,G__52690,vec__52691,seq__52692,first__52693,seq__52692__$1,pattern,vec__52694,next_pattern,patterns))
;
if(cljs.core.truth_(pattern__$1)){
if((min_count <= cljs.core.count(hnodes__$3))){
var G__52739 = quantifier;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__52739)){
var bound = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(hnodes__$3,(0),min_count);
var unbound = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(hnodes__$3,min_count);
var ret_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(ret__$2,cuphic.core.direct_bindings(pattern__$1,bound));
var G__52862 = ret_STAR_;
var G__52863 = unbound;
var G__52864 = patterns__$1;
ret__$1 = G__52862;
hnodes__$2 = G__52863;
G__52690__$1 = G__52864;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),G__52739)){
var vec__52741 = parts;
var vec__52744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52741,(0),null);
var quantifier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52744,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52741,(1),null);
var bound = nodes_until(next_pattern__$1,hnodes__$3,min_count);
var unbound = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(hnodes__$3,cljs.core.count(bound));
var split = (cljs.core.count(bound) - cljs.core.count(after));
var qnodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(bound,(0),split);
var anodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(bound,split);
var kvs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cuphic.core.direct_bindings(after,anodes),cljs.core.PersistentArrayMap.createAsIfByAssoc([quantifier__$1,qnodes]));
if(min_nodes_QMARK_(quantifier__$1,qnodes)){
var G__52868 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,ret__$2,kvs);
var G__52869 = unbound;
var G__52870 = patterns__$1;
ret__$1 = G__52868;
hnodes__$2 = G__52869;
G__52690__$1 = G__52870;
continue;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"affix","affix",1932418821),G__52739)){
var vec__52748 = parts;
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52748,(0),null);
var vec__52751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52748,(1),null);
var quantifier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52751,(0),null);
var bound = nodes_until(next_pattern__$1,hnodes__$3,min_count);
var unbound = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(hnodes__$3,cljs.core.count(bound));
var split = cljs.core.count(before);
var bnodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(bound,(0),split);
var qnodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(bound,split);
var kvs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cuphic.core.direct_bindings(before,bnodes),cljs.core.PersistentArrayMap.createAsIfByAssoc([quantifier__$1,qnodes]));
if(min_nodes_QMARK_(quantifier__$1,qnodes)){
var G__52875 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,ret__$2,kvs);
var G__52876 = unbound;
var G__52877 = patterns__$1;
ret__$1 = G__52875;
hnodes__$2 = G__52876;
G__52690__$1 = G__52877;
continue;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"infix","infix",1991018113),G__52739)){
var vec__52754 = parts;
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52754,(0),null);
var vec__52757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52754,(1),null);
var quantifier__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52757,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52754,(2),null);
var bound = nodes_until(next_pattern__$1,hnodes__$3,min_count);
var unbound = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(hnodes__$3,cljs.core.count(bound));
var split_1 = cljs.core.count(before);
var split_2 = (cljs.core.count(bound) - cljs.core.count(after));
var bnodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(bound,(0),split_1);
var anodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(bound,split_2);
var qnodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(bound,split_1,split_2);
var kvs = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cuphic.core.direct_bindings(before,bnodes),cuphic.core.direct_bindings(after,anodes),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([quantifier__$1,qnodes])], 0));
if(min_nodes_QMARK_(quantifier__$1,qnodes)){
var G__52882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,ret__$2,kvs);
var G__52883 = unbound;
var G__52884 = patterns__$1;
ret__$1 = G__52882;
hnodes__$2 = G__52883;
G__52690__$1 = G__52884;
continue;
} else {
return null;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52739)].join('')));

}
}
}
}
} else {
return null;
}
} else {
return ret__$2;
}
break;
}
});
/**
 * Given a `fragment` Cuphic vector and a sequence of `nodes`, return a sequence
 *   of bindings for matching sections.
 */
cuphic.core.fragment_bindings = (function cuphic$core$fragment_bindings(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52885 = arguments.length;
var i__4737__auto___52893 = (0);
while(true){
if((i__4737__auto___52893 < len__4736__auto___52885)){
args__4742__auto__.push((arguments[i__4737__auto___52893]));

var G__52894 = (i__4737__auto___52893 + (1));
i__4737__auto___52893 = G__52894;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cuphic.core.fragment_bindings.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cuphic.core.fragment_bindings.cljs$core$IFn$_invoke$arity$variadic = (function (fragment,nodes,p__52763){
var map__52764 = p__52763;
var map__52764__$1 = (((((!((map__52764 == null))))?(((((map__52764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52764):map__52764);
var opts = map__52764__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var begin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764__$1,new cljs.core.Keyword(null,"begin","begin",-319034319));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var _BANG_quantifier = cljs.core.complement(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.valid_QMARK_,new cljs.core.Keyword("cuphic.spec","quantifier","cuphic.spec/quantifier",1228319216)));
var ccoll = ((cljs.core.map_QMARK_(cljs.core.second(fragment)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(fragment,(2)):cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(fragment,(1)));
var vec__52766 = cljs.core.split_with(_BANG_quantifier,ccoll);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52766,(0),null);
var vec__52769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52766,(1),null);
var seq__52770 = cljs.core.seq(vec__52769);
var first__52771 = cljs.core.first(seq__52770);
var seq__52770__$1 = cljs.core.next(seq__52770);
var quantifier = first__52771;
var after = seq__52770__$1;
var nodes_size = cljs.core.count(nodes);
var min_size = ((cljs.core.count(before) + cljs.core.count(after)) + ((cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","+","cuphic.spec/+",-1550371104),quantifier))?(1):(0)));
if((cljs.core.count(nodes) >= min_size)){
var i = (function (){var or__4126__auto__ = begin;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var search = cljs.core.PersistentArrayMap.EMPTY;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i > end)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ret),limit)){
return ret;
} else {
if((((i >= nodes_size)) && (cljs.core.empty_QMARK_(search)))){
return ret;
} else {
if(((cljs.core.not(new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(search))) && (cljs.core.seq(before)))){
var temp__5733__auto__ = cuphic.core.section_search(before,nodes,i);
if(cljs.core.truth_(temp__5733__auto__)){
var before_search = temp__5733__auto__;
var G__52908 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(before_search));
var G__52909 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(search,new cljs.core.Keyword(null,"before","before",-1633692388),before_search);
var G__52910 = ret;
i = G__52908;
search = G__52909;
ret = G__52910;
continue;
} else {
return ret;
}
} else {
if(((cljs.core.not(new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(search))) && (cljs.core.seq(after)))){
var temp__5733__auto__ = cuphic.core.section_search(after,nodes,i);
if(cljs.core.truth_(temp__5733__auto__)){
var after_search = temp__5733__auto__;
var G__52911 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(after_search));
var G__52912 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(search,new cljs.core.Keyword(null,"after","after",594996914),after_search);
var G__52913 = ret;
i = G__52911;
search = G__52912;
ret = G__52913;
continue;
} else {
return ret;
}
} else {
if(((cljs.core.not(new cljs.core.Keyword(null,"recur","recur",-437573268).cljs$core$IFn$_invoke$arity$1(search))) && (cljs.core.seq(before)) && (cljs.core.not(cljs.core.seq(after))))){
var recur_search = cuphic.core.section_search(before,nodes,i);
var G__52915 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(recur_search));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return i;
}
})();
var G__52916 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(search,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (){var or__4126__auto__ = recur_search;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__52917 = ret;
i = G__52915;
search = G__52916;
ret = G__52917;
continue;
} else {
if(cljs.core.truth_(quantifier)){
var between_begin = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(search)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.last(ret)));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return begin;
}
}
})();
var between_end = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(search)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Keyword(null,"recur","recur",-437573268).cljs$core$IFn$_invoke$arity$1(search)));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.count(nodes);
}
}
})();
var between = (((between_begin < between_end))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(nodes,between_begin,between_end):cljs.core.PersistentVector.EMPTY);
var ret_STAR_ = (((!(((cljs.core.empty_QMARK_(between)) && (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","+","cuphic.spec/+",-1550371104),quantifier))))))?(function (){var section = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin","begin",-319034319),(between_begin - cljs.core.count(before)),new cljs.core.Keyword(null,"end","end",-268185958),(between_end + cljs.core.count(after))], null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([quantifier,between]),new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(search),new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(search)], 0)),section));
})():null);
var G__52918 = (function (){var x__4214__auto__ = i;
var y__4215__auto__ = between_end;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var G__52919 = cljs.core.PersistentArrayMap.EMPTY;
var G__52920 = (function (){var or__4126__auto__ = ret_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ret;
}
})();
i = G__52918;
search = G__52919;
ret = G__52920;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(search))){
var before_section = cljs.core.meta(new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(search));
var section = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(before_section),new cljs.core.Keyword(null,"end","end",-268185958),(new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(before_section) + cljs.core.count(before))], null);
var ret_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(search),new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(search)], 0)),section));
var G__52921 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(before_section);
var G__52922 = cljs.core.PersistentArrayMap.EMPTY;
var G__52923 = ret_STAR_;
i = G__52921;
search = G__52922;
ret = G__52923;
continue;
} else {
return ret;

}
}
}
}
}
}
}
}
break;
}
} else {
return null;
}
}));

(cuphic.core.fragment_bindings.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cuphic.core.fragment_bindings.cljs$lang$applyTo = (function (seq52760){
var G__52761 = cljs.core.first(seq52760);
var seq52760__$1 = cljs.core.next(seq52760);
var G__52762 = cljs.core.first(seq52760__$1);
var seq52760__$2 = cljs.core.next(seq52760__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52761,G__52762,seq52760__$2);
}));

/**
 * Get a delta of the local bindings as a map by comparing `cnode` to `hnode`.
 *   Will return nil if the two nodes do not match.
 */
cuphic.core.bindings_delta = (function cuphic$core$bindings_delta(cnode,hnode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cnode,hnode)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core.vector_QMARK_(cnode)) && (cljs.core.vector_QMARK_(hnode)))){
var cv = cuphic.core.hicv(cnode);
var hv = cuphic.core.hicv(hnode);
var cnodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cv,(2));
var hnodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(hv,(2));
var temp__5735__auto__ = cuphic.core.tag_PLUS_attr_bindings(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cv,(0),(2)),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(hv,(0),(2)));
if(cljs.core.truth_(temp__5735__auto__)){
var tag_PLUS_attr_delta = temp__5735__auto__;
var vec__52777 = cljs.core.split_with(cuphic.core.not_fragment_QMARK_,cnodes);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52777,(0),null);
var vec__52780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52777,(1),null);
var seq__52781 = cljs.core.seq(vec__52780);
var first__52782 = cljs.core.first(seq__52781);
var seq__52781__$1 = cljs.core.next(seq__52781);
var fragment = first__52782;
var after = seq__52781__$1;
if(cljs.core.truth_(fragment)){
var bpatterns = cljs.core.not_empty(cuphic.core.__GT_patterns(before));
var apatterns = cljs.core.not_empty(cuphic.core.__GT_patterns(after));
var fnodes = cuphic.core.__GT_nodes(fragment);
var fragment_count = cuphic.core.min_capture(cuphic.core.__GT_patterns(fnodes));
var before_count = cuphic.core.min_capture(bpatterns);
var after_count = cuphic.core.min_capture(apatterns);
var max_count = cljs.core.count(hnodes);
if((((before_count + after_count) + fragment_count) <= max_count)){
var _LT__GT_ = cuphic.core.fragment_bindings.cljs$core$IFn$_invoke$arity$variadic(fragment,hnodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"begin","begin",-319034319),before_count,new cljs.core.Keyword(null,"end","end",-268185958),(max_count - after_count)], 0));
if(cljs.core.truth_(cljs.core.not_empty(_LT__GT_))){
var split_1 = new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(_LT__GT_)));
var split_2 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.last(_LT__GT_)));
var bnodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(hnodes,(0),split_1);
var anodes = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(hnodes,split_2);
var temp__5735__auto____$1 = (cljs.core.truth_(bpatterns)?cuphic.core.pattern_bindings(bpatterns,bnodes):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(temp__5735__auto____$1)){
var bdelta = temp__5735__auto____$1;
var temp__5735__auto____$2 = (cljs.core.truth_(apatterns)?cuphic.core.pattern_bindings(apatterns,anodes):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(temp__5735__auto____$2)){
var adelta = temp__5735__auto____$2;
var qdelta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"<>","<>",-1374249383,null),cljs.core.with_meta(_LT__GT_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin","begin",-319034319),((2) + split_1),new cljs.core.Keyword(null,"end","end",-268185958),((2) + split_2)], null))], null);
return cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_PLUS_attr_delta,bdelta,adelta,qdelta], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip","skip",602715391),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cv,hv], null)], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
var temp__5735__auto____$1 = cuphic.core.pattern_bindings(cuphic.core.__GT_patterns(cnodes),hnodes);
if(cljs.core.truth_(temp__5735__auto____$1)){
var delta = temp__5735__auto____$1;
return cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_PLUS_attr_delta,delta], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip","skip",602715391),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cv,hv], null)], null));
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","?","cuphic.spec/?",906681842),cnode)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cnode,hnode]);
} else {
return null;
}
}
}
});
/**
 * Get the symbol->value mapping found when comparing `cuphic` to `hiccup`.
 *   Returns nil if the hiccup does not match the cuphic.
 * 
 *   The two data structures are zipped through in parallel while their bindings
 *   are collected incrementally.
 */
cuphic.core.bindings = (function cuphic$core$bindings(cuphic__$1,hiccup){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","cuphic","cuphic.spec/cuphic",1353074124),cuphic__$1)){
} else {
throw (new Error("Assert failed: (s/valid? :cuphic.spec/cuphic cuphic)"));
}

var cloc = hickory.zip.hiccup_zip(cuphic__$1);
var hloc = hickory.zip.hiccup_zip(hiccup);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(clojure.zip.end_QMARK_(hloc)){
return cljs.core.with_meta(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Symbol(null,"?","?",-62633706,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"+","+",-740910886,null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),hiccup], null));
} else {
var temp__5735__auto__ = cuphic.core.bindings_delta(clojure.zip.node(cloc),clojure.zip.node(hloc));
if(cljs.core.truth_(temp__5735__auto__)){
var delta = temp__5735__auto__;
var vec__52786 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip","skip",602715391).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(delta)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cuphic.zip.skip_subtree(cloc),cuphic.zip.skip_subtree(hloc)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloc,hloc], null));
var cloc_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52786,(0),null);
var hloc_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52786,(1),null);
var G__52926 = clojure.zip.next(cloc_STAR_);
var G__52927 = clojure.zip.next(hloc_STAR_);
var G__52928 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret,delta], 0));
cloc = G__52926;
hloc = G__52927;
ret = G__52928;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Returns the match, if any, of `hiccup` to `cuphic`.
 */
cuphic.core.matches = (function cuphic$core$matches(cuphic__$1,hiccup){
if(cljs.core.truth_(cuphic.core.bindings(cuphic__$1,hiccup))){
return hiccup;
} else {
return null;
}
});
/**
 * Given a `loc` and a sequence of `fragment-bindings`, replace the loc with
 *   multiple fragments with individual bindings applied.
 */
cuphic.core.fragment_replace = (function cuphic$core$fragment_replace(p__52796,fragment_bindings){
var vec__52797 = p__52796;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52797,(0),null);
var loc = vec__52797;
var parts = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cuphic.core.hicv(node),(2));
var bindings__GT_section = (function (symbol__GT_value){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","quantifier","cuphic.spec/quantifier",1228319216),x)){
return (symbol__GT_value.cljs$core$IFn$_invoke$arity$1 ? symbol__GT_value.cljs$core$IFn$_invoke$arity$1(x) : symbol__GT_value.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(symbol__GT_value.cljs$core$IFn$_invoke$arity$2 ? symbol__GT_value.cljs$core$IFn$_invoke$arity$2(x,x) : symbol__GT_value.call(null,x,x))], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parts], 0));
});
var replacements = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(bindings__GT_section,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fragment_bindings], 0));
return cuphic.zip.multi_replace(loc,replacements);
});
/**
 * Apply `symbol->value` bindings to a piece of `cuphic`.
 */
cuphic.core.apply_bindings = (function cuphic$core$apply_bindings(symbol__GT_value,cuphic__$1){
var G__52803 = cuphic.zip.vector_map_zip(cuphic__$1);
var vec__52804 = G__52803;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52804,(0),null);
var loc = vec__52804;
var G__52803__$1 = G__52803;
while(true){
var vec__52807 = G__52803__$1;
var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52807,(0),null);
var loc__$1 = vec__52807;
if(clojure.zip.end_QMARK_(loc__$1)){
return clojure.zip.root(loc__$1);
} else {
var replacement = (symbol__GT_value.cljs$core$IFn$_invoke$arity$1 ? symbol__GT_value.cljs$core$IFn$_invoke$arity$1(node__$1) : symbol__GT_value.call(null,node__$1));
var G__52929 = clojure.zip.next((cljs.core.truth_(replacement)?((cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","quantifier","cuphic.spec/quantifier",1228319216),node__$1))?cuphic.zip.multi_replace(loc__$1,replacement):clojure.zip.replace(loc__$1,replacement)):((((cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cuphic.spec","fragment","cuphic.spec/fragment",1742764937),node__$1)) && (cljs.core.contains_QMARK_(symbol__GT_value,new cljs.core.Symbol(null,"<>","<>",-1374249383,null)))))?cuphic.core.fragment_replace(loc__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(symbol__GT_value,new cljs.core.Symbol(null,"<>","<>",-1374249383,null))):loc__$1
)));
G__52803__$1 = G__52929;
continue;
}
break;
}
});
/**
 * Transform hiccup using cuphic from/to templates.
 * 
 *   Substitutes symbols in `to` with bound values from `hiccup` based on symbols
 *   in `from`. The cuphic templates can also be replaced with functions that
 *   either produce or consume a symbol->value map. 
 */
cuphic.core.transform = (function cuphic$core$transform(from,to,hiccup){
var temp__5735__auto__ = ((cljs.core.fn_QMARK_(from))?(from.cljs$core$IFn$_invoke$arity$1 ? from.cljs$core$IFn$_invoke$arity$1(hiccup) : from.call(null,hiccup)):cuphic.core.bindings(from,hiccup));
if(cljs.core.truth_(temp__5735__auto__)){
var symbol__GT_value = temp__5735__auto__;
if(cljs.core.fn_QMARK_(to)){
return (to.cljs$core$IFn$_invoke$arity$1 ? to.cljs$core$IFn$_invoke$arity$1(symbol__GT_value) : to.call(null,symbol__GT_value));
} else {
return cuphic.core.apply_bindings(symbol__GT_value,to);
}
} else {
return null;
}
});
/**
 * Make a transform fn to transform hiccup using cuphic from/to templates.
 */
cuphic.core.transformer = (function cuphic$core$transformer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52930 = arguments.length;
var i__4737__auto___52935 = (0);
while(true){
if((i__4737__auto___52935 < len__4736__auto___52930)){
args__4742__auto__.push((arguments[i__4737__auto___52935]));

var G__52936 = (i__4737__auto___52935 + (1));
i__4737__auto___52935 = G__52936;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cuphic.core.transformer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cuphic.core.transformer.cljs$core$IFn$_invoke$arity$variadic = (function (p__52811){
var map__52812 = p__52811;
var map__52812__$1 = (((((!((map__52812 == null))))?(((((map__52812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52812):map__52812);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52812__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52812__$1,new cljs.core.Keyword(null,"to","to",192099007));
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cuphic.core.transform,from,to);
}));

(cuphic.core.transformer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cuphic.core.transformer.cljs$lang$applyTo = (function (seq52810){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52810));
}));

/**
 * Apply a `stage` of transformations to a Hiccup `node`.
 */
cuphic.core.apply_stage = (function cuphic$core$apply_stage(node,p__52815){
var map__52816 = p__52815;
var map__52816__$1 = (((((!((map__52816 == null))))?(((((map__52816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52816):map__52816);
var stage = map__52816__$1;
var wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52816__$1,new cljs.core.Keyword(null,"wrapper","wrapper",-969103524));
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52816__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52816__$1,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.identity);
var G__52818 = (function (){var temp__5733__auto__ = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52814_SHARP_){
return (p1__52814_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52814_SHARP_.cljs$core$IFn$_invoke$arity$1(node) : p1__52814_SHARP_.call(null,node));
}),transformers)));
if(cljs.core.truth_(temp__5733__auto__)){
var new_node = temp__5733__auto__;
if(cljs.core.truth_(wrapper)){
return (wrapper.cljs$core$IFn$_invoke$arity$2 ? wrapper.cljs$core$IFn$_invoke$arity$2(node,new_node) : wrapper.call(null,node,new_node));
} else {
return new_node;
}
} else {
return node;
}
})();
return (default$.cljs$core$IFn$_invoke$arity$1 ? default$.cljs$core$IFn$_invoke$arity$1(G__52818) : default$.call(null,G__52818));
});
/**
 * Process the nodes of `hiccup` tree in a sequence of `stages`.
 * 
 *   Stages are maps with the following keys (optional):
 *  :transformers - sequence of transformer fns applied to each Hiccup node.
 *  :wrapper      - fn applied to [node new-node] on successful transformations.
 *  :default      - fn applied to every Hiccup node as a final step.
 * 
 *   Note: a transformer is an fn that, given a Hiccup node, attempts to match the
 *   node, returning a transformed node on matches, otherwise returning nil.
 */
cuphic.core.rewrite = (function cuphic$core$rewrite(hiccup,stages){
var G__52822 = hickory.zip.hiccup_zip(hiccup);
var vec__52823 = G__52822;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52823,(0),null);
var loc = vec__52823;
var G__52822__$1 = G__52822;
while(true){
var vec__52826 = G__52822__$1;
var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52826,(0),null);
var loc__$1 = vec__52826;
if(clojure.zip.end_QMARK_(loc__$1)){
return clojure.zip.root(loc__$1);
} else {
var G__52943 = clojure.zip.next(((cljs.core.vector_QMARK_(node__$1))?(function (){var new_node = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cuphic.core.apply_stage,node__$1,stages);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node__$1,new_node)){
return clojure.zip.replace(loc__$1,new_node);
} else {
return loc__$1;
}
})():loc__$1));
G__52822__$1 = G__52943;
continue;
}
break;
}
});

//# sourceMappingURL=cuphic.core.js.map
