goog.provide('kuhumcst.recap.util');
kuhumcst.recap.util.vec_dissoc = (function kuhumcst$recap$util$vec_dissoc(coll,n){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(n + (1)))));
});
kuhumcst.recap.util.vec_assoc = (function kuhumcst$recap$util$vec_assoc(coll,n,v){
var vec__49502 = cljs.core.split_at(n,coll);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49502,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49502,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after], 0)));
});

//# sourceMappingURL=kuhumcst.recap.util.js.map
