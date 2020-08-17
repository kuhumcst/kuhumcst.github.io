goog.provide('recap.util');
recap.util.vec_dissoc = (function recap$util$vec_dissoc(coll,n){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(n + (1)))));
});
recap.util.vec_assoc = (function recap$util$vec_assoc(coll,n,v){
var vec__49113 = cljs.core.split_at(n,coll);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49113,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49113,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after], 0)));
});

//# sourceMappingURL=recap.util.js.map
