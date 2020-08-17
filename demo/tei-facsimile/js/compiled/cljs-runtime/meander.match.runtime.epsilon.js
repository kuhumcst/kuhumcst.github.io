goog.provide('meander.match.runtime.epsilon');
goog.require('cljs.core');
goog.require('meander.util.epsilon');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.zip');
meander.match.runtime.epsilon.permutations = meander.util.epsilon.permutations;
meander.match.runtime.epsilon.k_combinations = meander.util.epsilon.k_combinations;
meander.match.runtime.epsilon.partitions = meander.util.epsilon.partitions;
meander.match.runtime.epsilon.coll_zip = meander.util.epsilon.coll_zip;
meander.match.runtime.epsilon.coll_seq = meander.util.epsilon.coll_seq;
meander.match.runtime.epsilon.zip_next_seq = meander.util.epsilon.zip_next_seq;
meander.match.runtime.epsilon.knit = meander.util.epsilon.knit;
/**
 * Special value signaling a match failure. Generated code will often
 *   utilize this value for control flow purposes.
 */
meander.match.runtime.epsilon.FAIL = (function (){
if((typeof meander !== 'undefined') && (typeof meander.match !== 'undefined') && (typeof meander.match.runtime !== 'undefined') && (typeof meander.match.runtime.epsilon !== 'undefined') && (typeof meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591 = (function (meta47592){
this.meta47592 = meta47592;
this.cljs$lang$protocol_mask$partition0$ = 8781824;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47593,meta47592__$1){
var self__ = this;
var _47593__$1 = this;
return (new meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591(meta47592__$1));
}));

(meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47593){
var self__ = this;
var _47593__$1 = this;
return self__.meta47592;
}));

(meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47592","meta47592",-794781891,null)], null);
}));

(meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591.cljs$lang$type = true);

(meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591.cljs$lang$ctorStr = "meander.match.runtime.epsilon/t_meander$match$runtime$epsilon47591");

(meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"meander.match.runtime.epsilon/t_meander$match$runtime$epsilon47591");
}));

/**
 * Positional factory function for meander.match.runtime.epsilon/t_meander$match$runtime$epsilon47591.
 */
meander.match.runtime.epsilon.__GT_t_meander$match$runtime$epsilon47591 = (function meander$match$runtime$epsilon$__GT_t_meander$match$runtime$epsilon47591(meta47592){
return (new meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591(meta47592));
});

}

return (new meander.match.runtime.epsilon.t_meander$match$runtime$epsilon47591(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * true if the `x` is the special runtime value `FAIL`, false
 *   otherwise.
 */
meander.match.runtime.epsilon.fail_QMARK_ = (function meander$match$runtime$epsilon$fail_QMARK_(x){
return (x === meander.match.runtime.epsilon.FAIL);
});
meander.match.runtime.epsilon.run_star_1 = (function meander$match$runtime$epsilon$run_star_1(coll,rets,body_f,then_f){
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,xs){
var acc__$1 = (function (){var G__47616 = acc;
var G__47617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null);
return (body_f.cljs$core$IFn$_invoke$arity$2 ? body_f.cljs$core$IFn$_invoke$arity$2(G__47616,G__47617) : body_f.call(null,G__47616,G__47617));
})();
if(meander.match.runtime.epsilon.fail_QMARK_(acc__$1)){
return cljs.core.reduced(meander.match.runtime.epsilon.FAIL);
} else {
return acc__$1;
}
}),rets,coll);
if(meander.match.runtime.epsilon.fail_QMARK_(result)){
return meander.match.runtime.epsilon.FAIL;
} else {
return (then_f.cljs$core$IFn$_invoke$arity$1 ? then_f.cljs$core$IFn$_invoke$arity$1(result) : then_f.call(null,result));
}
});
meander.match.runtime.epsilon.run_star_seq = (function meander$match$runtime$epsilon$run_star_seq(coll,rets,n,body_f,then_f){
var coll__$1 = coll;
var rets__$1 = rets;
while(true){
var xs = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),n)){
var rets__$2 = (body_f.cljs$core$IFn$_invoke$arity$2 ? body_f.cljs$core$IFn$_invoke$arity$2(rets__$1,xs) : body_f.call(null,rets__$1,xs));
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$2)){
return meander.match.runtime.epsilon.FAIL;
} else {
var G__47778 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll__$1);
var G__47779 = rets__$2;
coll__$1 = G__47778;
rets__$1 = G__47779;
continue;
}
} else {
if(cljs.core.seq(coll__$1)){
return meander.match.runtime.epsilon.FAIL;
} else {
return (then_f.cljs$core$IFn$_invoke$arity$1 ? then_f.cljs$core$IFn$_invoke$arity$1(rets__$1) : then_f.call(null,rets__$1));
}
}
break;
}
});
meander.match.runtime.epsilon.run_star_seq_search = (function meander$match$runtime$epsilon$run_star_seq_search(coll,rets,n,body_f,then_f){
var xs = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),n)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (rets__$1){
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$1)){
return null;
} else {
var G__47626 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll);
var G__47627 = rets__$1;
var G__47628 = n;
var G__47629 = body_f;
var G__47630 = then_f;
return (meander.match.runtime.epsilon.run_star_seq_search.cljs$core$IFn$_invoke$arity$5 ? meander.match.runtime.epsilon.run_star_seq_search.cljs$core$IFn$_invoke$arity$5(G__47626,G__47627,G__47628,G__47629,G__47630) : meander.match.runtime.epsilon.run_star_seq_search.call(null,G__47626,G__47627,G__47628,G__47629,G__47630));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(body_f.cljs$core$IFn$_invoke$arity$2 ? body_f.cljs$core$IFn$_invoke$arity$2(rets,xs) : body_f.call(null,rets,xs))], 0));
} else {
if(cljs.core.seq(coll)){
return null;
} else {
return (then_f.cljs$core$IFn$_invoke$arity$1 ? then_f.cljs$core$IFn$_invoke$arity$1(rets) : then_f.call(null,rets));
}
}
});
meander.match.runtime.epsilon.run_plus_seq_search = (function meander$match$runtime$epsilon$run_plus_seq_search(coll,rets,n,m,body_f,then_f){
var m_STAR_n = (m * n);
var xs = cljs.core.take.cljs$core$IFn$_invoke$arity$2(m_STAR_n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),m_STAR_n)){
var ys = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(m_STAR_n,coll);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (rets__$1){
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$1)){
return null;
} else {
return meander.match.runtime.epsilon.run_star_seq_search(ys,rets__$1,n,body_f,then_f);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (chunk){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (rets__$1){
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$1)){
return null;
} else {
return (body_f.cljs$core$IFn$_invoke$arity$2 ? body_f.cljs$core$IFn$_invoke$arity$2(rets__$1,chunk) : body_f.call(null,rets__$1,chunk));
}
}));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(n,xs))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rets], null))], 0));
} else {
if(cljs.core.seq(coll)){
return null;
} else {
return (then_f.cljs$core$IFn$_invoke$arity$1 ? then_f.cljs$core$IFn$_invoke$arity$1(rets) : then_f.call(null,rets));
}
}
});
meander.match.runtime.epsilon.run_star_vec = (function meander$match$runtime$epsilon$run_star_vec(coll,rets,n,body_f,then_f){
var coll__$1 = coll;
var rets__$1 = rets;
while(true){
var xs = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll__$1,(0),(function (){var x__4217__auto__ = n;
var y__4218__auto__ = cljs.core.count(coll__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),n)){
var rets__$2 = (body_f.cljs$core$IFn$_invoke$arity$2 ? body_f.cljs$core$IFn$_invoke$arity$2(rets__$1,xs) : body_f.call(null,rets__$1,xs));
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$2)){
return meander.match.runtime.epsilon.FAIL;
} else {
var G__47804 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll__$1,(function (){var x__4217__auto__ = n;
var y__4218__auto__ = cljs.core.count(coll__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
var G__47805 = rets__$2;
coll__$1 = G__47804;
rets__$1 = G__47805;
continue;
}
} else {
if(cljs.core.seq(coll__$1)){
return meander.match.runtime.epsilon.FAIL;
} else {
return (then_f.cljs$core$IFn$_invoke$arity$1 ? then_f.cljs$core$IFn$_invoke$arity$1(rets__$1) : then_f.call(null,rets__$1));
}
}
break;
}
});
meander.match.runtime.epsilon.run_star_vec_search = (function meander$match$runtime$epsilon$run_star_vec_search(coll,rets,n,body_f,then_f){
var xs = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),(function (){var x__4217__auto__ = n;
var y__4218__auto__ = cljs.core.count(coll);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),n)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (rets__$1){
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$1)){
return null;
} else {
var G__47677 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,n);
var G__47678 = rets__$1;
var G__47679 = n;
var G__47680 = body_f;
var G__47681 = then_f;
return (meander.match.runtime.epsilon.run_star_vec_search.cljs$core$IFn$_invoke$arity$5 ? meander.match.runtime.epsilon.run_star_vec_search.cljs$core$IFn$_invoke$arity$5(G__47677,G__47678,G__47679,G__47680,G__47681) : meander.match.runtime.epsilon.run_star_vec_search.call(null,G__47677,G__47678,G__47679,G__47680,G__47681));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(body_f.cljs$core$IFn$_invoke$arity$2 ? body_f.cljs$core$IFn$_invoke$arity$2(rets,xs) : body_f.call(null,rets,xs))], 0));
} else {
if(cljs.core.seq(coll)){
return null;
} else {
return (then_f.cljs$core$IFn$_invoke$arity$1 ? then_f.cljs$core$IFn$_invoke$arity$1(rets) : then_f.call(null,rets));
}
}
});
meander.match.runtime.epsilon.run_plus_vec_search = (function meander$match$runtime$epsilon$run_plus_vec_search(coll,rets,n,m,body_f,then_f){
var m_STAR_n = (m * n);
var xs = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),(function (){var x__4217__auto__ = m_STAR_n;
var y__4218__auto__ = cljs.core.count(coll);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),m_STAR_n)){
var ys = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,m_STAR_n);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (rets__$1){
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$1)){
return null;
} else {
return meander.match.runtime.epsilon.run_star_vec_search(ys,rets__$1,n,body_f,then_f);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (chunk){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (rets__$1){
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$1)){
return null;
} else {
return (body_f.cljs$core$IFn$_invoke$arity$2 ? body_f.cljs$core$IFn$_invoke$arity$2(rets__$1,chunk) : body_f.call(null,rets__$1,chunk));
}
}));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(n,xs))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rets], null))], 0));
} else {
if(cljs.core.seq(coll)){
return null;
} else {
return (then_f.cljs$core$IFn$_invoke$arity$1 ? then_f.cljs$core$IFn$_invoke$arity$1(rets) : then_f.call(null,rets));
}
}
});
meander.match.runtime.epsilon.run_star_js_array = (function meander$match$runtime$epsilon$run_star_js_array(coll,rets,n,body_f,then_f){
var coll__$1 = coll;
var rets__$1 = rets;
while(true){
var xs = coll__$1.slice((0),(function (){var x__4217__auto__ = coll__$1.length;
var y__4218__auto__ = n;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),n)){
var rets__$2 = (body_f.cljs$core$IFn$_invoke$arity$2 ? body_f.cljs$core$IFn$_invoke$arity$2(rets__$1,xs) : body_f.call(null,rets__$1,xs));
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$2)){
return meander.match.runtime.epsilon.FAIL;
} else {
var G__47839 = coll__$1.slice(n);
var G__47840 = rets__$2;
coll__$1 = G__47839;
rets__$1 = G__47840;
continue;
}
} else {
if(cljs.core.seq(coll__$1)){
return meander.match.runtime.epsilon.FAIL;
} else {
return (then_f.cljs$core$IFn$_invoke$arity$1 ? then_f.cljs$core$IFn$_invoke$arity$1(rets__$1) : then_f.call(null,rets__$1));
}
}
break;
}
});
meander.match.runtime.epsilon.run_star_js_array_search = (function meander$match$runtime$epsilon$run_star_js_array_search(coll,rets,n,body_f,then_f){
var xs = coll.slice((0),(function (){var x__4217__auto__ = n;
var y__4218__auto__ = cljs.core.count(coll);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),n)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (rets__$1){
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$1)){
return null;
} else {
var G__47724 = coll.slice(n);
var G__47725 = rets__$1;
var G__47726 = n;
var G__47727 = body_f;
var G__47728 = then_f;
return (meander.match.runtime.epsilon.run_star_js_array_search.cljs$core$IFn$_invoke$arity$5 ? meander.match.runtime.epsilon.run_star_js_array_search.cljs$core$IFn$_invoke$arity$5(G__47724,G__47725,G__47726,G__47727,G__47728) : meander.match.runtime.epsilon.run_star_js_array_search.call(null,G__47724,G__47725,G__47726,G__47727,G__47728));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(body_f.cljs$core$IFn$_invoke$arity$2 ? body_f.cljs$core$IFn$_invoke$arity$2(rets,xs) : body_f.call(null,rets,xs))], 0));
} else {
if(cljs.core.seq(coll)){
return null;
} else {
return (then_f.cljs$core$IFn$_invoke$arity$1 ? then_f.cljs$core$IFn$_invoke$arity$1(rets) : then_f.call(null,rets));
}
}
});
meander.match.runtime.epsilon.run_plus_js_array_search = (function meander$match$runtime$epsilon$run_plus_js_array_search(coll,rets,n,m,body_f,then_f){
var m_STAR_n = (m * n);
var xs = coll.slice((0),(function (){var x__4217__auto__ = m_STAR_n;
var y__4218__auto__ = cljs.core.count(coll);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),m_STAR_n)){
var ys = coll.slice(m_STAR_n);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (rets__$1){
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$1)){
return null;
} else {
return meander.match.runtime.epsilon.run_star_js_array_search(ys,rets__$1,n,body_f,then_f);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (chunk){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (rets__$1){
if(meander.match.runtime.epsilon.fail_QMARK_(rets__$1)){
return null;
} else {
return (body_f.cljs$core$IFn$_invoke$arity$2 ? body_f.cljs$core$IFn$_invoke$arity$2(rets__$1,chunk) : body_f.call(null,rets__$1,chunk));
}
}));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(n,xs))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rets], null))], 0));
} else {
if(cljs.core.seq(coll)){
return null;
} else {
return (then_f.cljs$core$IFn$_invoke$arity$1 ? then_f.cljs$core$IFn$_invoke$arity$1(rets) : then_f.call(null,rets));
}
}
});

//# sourceMappingURL=meander.match.runtime.epsilon.js.map
