goog.provide('meander.util.epsilon');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.zip');
/**
 * true if compiling ClojureScript or in a ClojureScript setting,
 *   false otherwise.
 */
meander.util.epsilon.cljs_env_QMARK_ = (function meander$util$epsilon$cljs_env_QMARK_(env){
return true;
});
/**
 * Parse the string s as an integer.
 */
meander.util.epsilon.parse_int = (function meander$util$epsilon$parse_int(s){
return parseInt(s);
});
/**
 * Swap the elements at positions `i` and `j` in `v`.
 */
meander.util.epsilon.swap = (function meander$util$epsilon$swap(v,i,j){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,j)),j,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
});
/**
 * Return a sequence of all the ways to arrange coll.
 */
meander.util.epsilon.permutations = (function meander$util$epsilon$permutations(coll){
var v = cljs.core.vec(coll);
var n = cljs.core.count(v);
var n__$1 = n;
var a = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
while(true){
if((n__$1 === (0))){
return a;
} else {
var n_STAR_ = (n__$1 - (1));
var a_STAR_ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (n__$1,a,n_STAR_,v,n){
return (function meander$util$epsilon$permutations_$_step(v__$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (n__$1,a,n_STAR_,v,n){
return (function (i){
return meander.util.epsilon.swap(v__$1,i,n_STAR_);
});})(n__$1,a,n_STAR_,v,n))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n__$1));
});})(n__$1,a,n_STAR_,v,n))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
var G__47586 = n_STAR_;
var G__47587 = a_STAR_;
n__$1 = G__47586;
a = G__47587;
continue;
}
break;
}
});
/**
 * All the ways to choose k items from coll.
 */
meander.util.epsilon.k_combinations = (function meander$util$epsilon$k_combinations(coll,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),coll);
} else {
var coll__$1 = cljs.core.vec(coll);
var n = cljs.core.count(coll__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((k - (1)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (v){
var i = cljs.core.peek(v);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(v),cljs.core.range.cljs$core$IFn$_invoke$arity$1(i));
})))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(meander.util.epsilon.permutations),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ptrs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.nth,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(coll__$1),ptrs);
}))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)));
}
});
/**
 * Like `clojure.core/split-at` but for vectors.
 */
meander.util.epsilon.vsplit_at = (function meander$util$epsilon$vsplit_at(n,v){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var i = (function (){var x__4217__auto__ = n;
var y__4218__auto__ = cljs.core.count(v);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,i)], null);
});
/**
 * 
 *   (let [coll [:a :b]
 *      n 3]
 *   (vec-partitions n coll))
 *   ;; => ([[] [] [:a :b]]
 *   ;;     [[] [:a] [:b]]
 *   ;;     [[:a] [] [:b]]
 *   ;;     [[] [:a :b] []]
 *   ;;     [[:a] [:b] []]
 *   ;;     [[:a :b] [] []])
 *   
 */
meander.util.epsilon.vec_partitions = (function meander$util$epsilon$vec_partitions(var_args){
var G__47380 = arguments.length;
switch (G__47380) {
case 2:
return meander.util.epsilon.vec_partitions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return meander.util.epsilon.vec_partitions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(meander.util.epsilon.vec_partitions.cljs$core$IFn$_invoke$arity$2 = (function (n,v){
if(cljs.core.nat_int_QMARK_(n)){
} else {
throw (new Error("Assert failed: (nat-int? n)"));
}

var G__47389 = n;
switch (G__47389) {
case (0):
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));

break;
case (1):
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),null,(1),null));

break;
case (2):
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,i)], null);
})),cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(v) + (1))));

break;
default:
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,i)], null);
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__47397){
var vec__47398 = p__47397;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47398,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47398,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.conj),meander.util.epsilon.vec_partitions.cljs$core$IFn$_invoke$arity$2((n - (1)),a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b)], 0));
}))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(v) + (1))));

}
}));

(meander.util.epsilon.vec_partitions.cljs$core$IFn$_invoke$arity$3 = (function (n,m,v){
if(cljs.core.nat_int_QMARK_(n)){
} else {
throw (new Error("Assert failed: (nat-int? n)"));
}

if(cljs.core.nat_int_QMARK_(m)){
} else {
throw (new Error("Assert failed: (nat-int? m)"));
}

if((m <= cljs.core.count(v))){
var G__47413 = n;
switch (G__47413) {
case (0):
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));

break;
case (1):
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),null,(1),null));

break;
case (2):
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.take_while.cljs$core$IFn$_invoke$arity$1((function (){var j = cljs.core.count(v);
return (function (i){
return ((i + m) <= j);
});
})()),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(i + m)),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(i + m))], null);
}))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(v) + (1))));

break;
default:
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.take_while.cljs$core$IFn$_invoke$arity$1((function (){var j = cljs.core.count(v);
return (function (i){
return ((i + m) <= j);
});
})()),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),(i + m)),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(i + m))], null);
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__47428){
var vec__47429 = p__47428;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47429,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47429,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.conj),meander.util.epsilon.vec_partitions.cljs$core$IFn$_invoke$arity$3((n - (1)),m,a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b)], 0));
}))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(v) + (1))));

}
} else {
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
}
}));

(meander.util.epsilon.vec_partitions.cljs$lang$maxFixedArity = 3);

meander.util.epsilon.coll_partitions = (function meander$util$epsilon$coll_partitions(var_args){
var G__47435 = arguments.length;
switch (G__47435) {
case 2:
return meander.util.epsilon.coll_partitions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return meander.util.epsilon.coll_partitions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(meander.util.epsilon.coll_partitions.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
if(cljs.core.nat_int_QMARK_(n)){
} else {
throw (new Error("Assert failed: (nat-int? n)"));
}

var G__47441 = n;
switch (G__47441) {
case (0):
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));

break;
case (1):
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll], null),null,(1),null));

break;
case (2):
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,_){
return cljs.core.split_at(i,coll);
})),cljs.core.cons((1),coll));

break;
default:
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,_){
return cljs.core.split_at(i,coll);
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__47450){
var vec__47452 = p__47450;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47452,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47452,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.conj),meander.util.epsilon.coll_partitions.cljs$core$IFn$_invoke$arity$2((n - (1)),a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b)], 0));
}))),cljs.core.cons(cljs.core.first(coll),coll));

}
}));

(meander.util.epsilon.coll_partitions.cljs$core$IFn$_invoke$arity$3 = (function (n,m,coll){
if(cljs.core.nat_int_QMARK_(n)){
} else {
throw (new Error("Assert failed: (nat-int? n)"));
}

if(cljs.core.nat_int_QMARK_(m)){
} else {
throw (new Error("Assert failed: (nat-int? m)"));
}

if((m <= cljs.core.bounded_count(m,coll))){
var G__47464 = n;
switch (G__47464) {
case (0):
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));

break;
case (1):
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll], null),null,(1),null));

break;
case (2):
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,_){
return cljs.core.split_at((i + m),coll);
})),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()),cljs.core.cons((1),coll));

break;
default:
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,_){
return cljs.core.split_at((i + m),coll);
})),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__47472){
var vec__47473 = p__47472;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47473,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47473,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.conj),meander.util.epsilon.coll_partitions.cljs$core$IFn$_invoke$arity$3((n - (1)),m,a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b)], 0));
}))),cljs.core.cons(cljs.core.first(coll),coll));

}
} else {
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
}
}));

(meander.util.epsilon.coll_partitions.cljs$lang$maxFixedArity = 3);

/**
 * 
 *   Examples:
 * 
 *   (let [str "ab"
 *    n 0]
 *   (str-partitions n str))
 *   ;; => ([])
 * 
 *   (let [str "ab"
 *    n 1]
 *   (partitions n coll))
 *   ;; => (["ab"])
 * 
 *   (let [str "ab"
 *    n 2]
 *   (partitions n coll))
 *   ;; => ([[] ["ab"]
 *   ;;     [["a"] ["b"]]
 *   ;;     [["ab"] []])
 * 
 *   (let [str "ab"
 *    n 3]
 *   (partitions n coll))
 *   ;; => ([[] [] ["ab"]]
 *   ;;     [[] ["a"] ["b"]]
 *   ;;     [["a"] [] ["b"]]
 *   ;;     [[] ["ab"] []]
 *   ;;     [["a"] ["b"] []]
 *   ;;     [["ab"] [] []])
 *   
 */
meander.util.epsilon.str_partitions = (function meander$util$epsilon$str_partitions(n,str){
if(cljs.core.nat_int_QMARK_(n)){
} else {
throw (new Error("Assert failed: (nat-int? n)"));
}

var G__47479 = n;
switch (G__47479) {
case (0):
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));

break;
case (1):
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [str], null),null,(1),null));

break;
case (2):
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(str,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(str,i)], null);
})),cljs.core.range.cljs$core$IFn$_invoke$arity$1((str.length() + (1))));

break;
default:
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(str,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(str,i)], null);
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__47484){
var vec__47485 = p__47484;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47485,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47485,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.conj),(function (){var G__47490 = (n - (1));
var G__47491 = a;
return (meander.util.epsilon.str_partitions.cljs$core$IFn$_invoke$arity$2 ? meander.util.epsilon.str_partitions.cljs$core$IFn$_invoke$arity$2(G__47490,G__47491) : meander.util.epsilon.str_partitions.call(null,G__47490,G__47491));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b)], 0));
}))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((str.length() + (1))));

}
});
/**
 * 
 *   Examples:
 * 
 *   (def coll [:a :b])
 * 
 *   (partitions 0 coll))
 *   ;; => ([])
 * 
 *   (partitions 1 coll)
 *   ;; => ([[:a :b]])
 * 
 *   (partitions 2 coll)
 *   ;; => '([[] [:a :b]]
 *   ;;      [[:a] [:b]]
 *   ;;      [[:a :b] []])
 * 
 *   (partitions 3 coll)
 *   ;; => '([[] [] [:a :b]]
 *   ;;      [[] [:a] [:b]]
 *   ;;      [[:a] [] [:b]]
 *   ;;      [[] [:a :b] []]
 *   ;;      [[:a] [:b] []]
 *   ;;      [[:a :b] [] []])
 *   
 */
meander.util.epsilon.partitions = (function meander$util$epsilon$partitions(var_args){
var G__47495 = arguments.length;
switch (G__47495) {
case 2:
return meander.util.epsilon.partitions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return meander.util.epsilon.partitions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(meander.util.epsilon.partitions.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
if(cljs.core.vector_QMARK_(coll)){
return meander.util.epsilon.vec_partitions.cljs$core$IFn$_invoke$arity$2(n,coll);
} else {
if(cljs.core.coll_QMARK_(coll)){
return meander.util.epsilon.coll_partitions.cljs$core$IFn$_invoke$arity$2(n,coll);
} else {
if(typeof coll === 'string'){
return meander.util.epsilon.str_partitions(n,coll);
} else {
if((coll == null)){
return cljs.core.List.EMPTY;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("coll must be a string? or coll?",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(coll)], null));

}
}
}
}
}));

(meander.util.epsilon.partitions.cljs$core$IFn$_invoke$arity$3 = (function (n,m,coll){
if(cljs.core.vector_QMARK_(coll)){
return meander.util.epsilon.vec_partitions.cljs$core$IFn$_invoke$arity$3(n,m,coll);
} else {
if(cljs.core.coll_QMARK_(coll)){
return meander.util.epsilon.coll_partitions.cljs$core$IFn$_invoke$arity$3(n,m,coll);
} else {
if(typeof coll === 'string'){
return meander.util.epsilon.str_partitions(n,coll);
} else {
if((coll == null)){
return cljs.core.List.EMPTY;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("coll must be a string? or coll?",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(coll)], null));

}
}
}
}
}));

(meander.util.epsilon.partitions.cljs$lang$maxFixedArity = 3);

meander.util.epsilon.coll_zip = (function meander$util$epsilon$coll_zip(root){
return clojure.zip.zipper(cljs.core.coll_QMARK_,cljs.core.seq,(function (coll,coll_new){
if(cljs.core.seq_QMARK_(coll)){
return coll_new;
} else {
if(cljs.core.map_QMARK_(coll)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,coll_new);
} else {
if(cljs.core.map_entry_QMARK_(coll)){
return cljs.core.vec(coll_new);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(coll),coll_new);

}
}
}
}),root);
});
/**
 * Return a lazy sequence of all the nodes in the tree `root`
 *   excluding `map-entry?`s.
 */
meander.util.epsilon.coll_seq = (function meander$util$epsilon$coll_seq(root){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.map_entry_QMARK_,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,root));
});
/**
 * Given a clojure.zip zipper location loc return a lazy sequence of
 *   all clojure.zip/next locations from loc. Note that `map-entry?`s
 *   are skipped.
 */
meander.util.epsilon.zip_next_seq = (function meander$util$epsilon$zip_next_seq(loc){
while(true){
if(clojure.zip.end_QMARK_(loc)){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.map_entry_QMARK_(clojure.zip.node(loc))){
var G__47684 = clojure.zip.next(loc);
loc = G__47684;
continue;
} else {
return (new cljs.core.LazySeq(null,((function (loc){
return (function (){
return cljs.core.cons(loc,(function (){var G__47518 = clojure.zip.next(loc);
return (meander.util.epsilon.zip_next_seq.cljs$core$IFn$_invoke$arity$1 ? meander.util.epsilon.zip_next_seq.cljs$core$IFn$_invoke$arity$1(G__47518) : meander.util.epsilon.zip_next_seq.call(null,G__47518));
})());
});})(loc))
,null,null));

}
}
break;
}
});
/**
 * Returns a sorted sequence of values in xs by frequency of
 *   occurence.
 */
meander.util.epsilon.rank = (function meander$util$epsilon$rank(xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.val),cljs.core.frequencies(xs)));
});
/**
 * Returns true if s matches the regex pattern re, false otherwise.
 */
meander.util.epsilon.re_matches_QMARK_ = (function meander$util$epsilon$re_matches_QMARK_(re,s){
return re.test(s);
});
/**
 * Converts all `form` into a form suitable for use as a `case`
 *   test. Assumes `form` is already a literal value.
 */
meander.util.epsilon.case_test_form = (function meander$util$epsilon$case_test_form(form){
return clojure.walk.prewalk((function (y){
if(cljs.core.seq_QMARK_(y)){
return cljs.core.vec(y);
} else {
return y;
}
}),form);
});
/**
 * `true` if `x` is a quoted form, e.g. `(quote _)`, and `false`
 *   otherwise.
 */
meander.util.epsilon.quoted_QMARK_ = (function meander$util$epsilon$quoted_QMARK_(x){
return ((cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"quote","quote",1377916282,null))));
});
meander.util.epsilon.knit = (function meander$util$epsilon$knit(colls){
var G__47542 = cljs.core.bounded_count((2),colls);
switch (G__47542) {
case (0):
return cljs.core.List.EMPTY;

break;
case (1):
if(cljs.core.seq(cljs.core.first(colls))){
return cljs.core.first(colls);
} else {
return cljs.core.List.EMPTY;
}

break;
default:
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(cljs.core.seq),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first)),colls),(new cljs.core.LazySeq(null,(function (){
var G__47547 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,colls);
return (meander.util.epsilon.knit.cljs$core$IFn$_invoke$arity$1 ? meander.util.epsilon.knit.cljs$core$IFn$_invoke$arity$1(G__47547) : meander.util.epsilon.knit.call(null,G__47547));
}),null,null)));

}
});
meander.util.epsilon.expand_symbol = (function meander$util$epsilon$expand_symbol(sym,env){
var temp__5737__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env);
if((temp__5737__auto__ == null)){
return sym;
} else {
var cljs_ns = temp__5737__auto__;
if(cljs.core.qualified_symbol_QMARK_(sym)){
var ns_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(sym));
var temp__5737__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(cljs_ns),ns_sym);
if((temp__5737__auto____$1 == null)){
return sym;
} else {
var ns = temp__5737__auto____$1;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
}
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs_ns)),cljs.core.name(sym));
}
}
});
meander.util.epsilon.js_value_QMARK_ = (function meander$util$epsilon$js_value_QMARK_(x){
return false;
});
meander.util.epsilon.make_js_value = (function meander$util$epsilon$make_js_value(x){
return x;
});
meander.util.epsilon.val_of_js_value = (function meander$util$epsilon$val_of_js_value(x){
if(meander.util.epsilon.js_value_QMARK_(x)){
return x.val();
} else {
return x;
}
});

//# sourceMappingURL=meander.util.epsilon.js.map
