goog.provide('meander.substitute.runtime.epsilon');
goog.require('cljs.core');
meander.substitute.runtime.epsilon.FAIL = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
meander.substitute.runtime.epsilon.iterator = (function meander$substitute$runtime$epsilon$iterator(coll){
return cljs.core.iter(coll);
});
meander.substitute.runtime.epsilon.iterator_seq = (function meander$substitute$runtime$epsilon$f(i){
if(cljs.core.truth_(i.hasNext())){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(i.next(),meander$substitute$runtime$epsilon$f(i));
}),null,null));
} else {
return null;
}
});

//# sourceMappingURL=meander.substitute.runtime.epsilon.js.map
