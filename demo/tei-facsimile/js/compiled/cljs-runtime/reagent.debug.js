goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__47097__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__47097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47099__i = 0, G__47099__a = new Array(arguments.length -  0);
while (G__47099__i < G__47099__a.length) {G__47099__a[G__47099__i] = arguments[G__47099__i + 0]; ++G__47099__i;}
  args = new cljs.core.IndexedSeq(G__47099__a,0,null);
} 
return G__47097__delegate.call(this,args);};
G__47097.cljs$lang$maxFixedArity = 0;
G__47097.cljs$lang$applyTo = (function (arglist__47100){
var args = cljs.core.seq(arglist__47100);
return G__47097__delegate(args);
});
G__47097.cljs$core$IFn$_invoke$arity$variadic = G__47097__delegate;
return G__47097;
})()
);

(o.error = (function() { 
var G__47101__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__47101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47103__i = 0, G__47103__a = new Array(arguments.length -  0);
while (G__47103__i < G__47103__a.length) {G__47103__a[G__47103__i] = arguments[G__47103__i + 0]; ++G__47103__i;}
  args = new cljs.core.IndexedSeq(G__47103__a,0,null);
} 
return G__47101__delegate.call(this,args);};
G__47101.cljs$lang$maxFixedArity = 0;
G__47101.cljs$lang$applyTo = (function (arglist__47104){
var args = cljs.core.seq(arglist__47104);
return G__47101__delegate(args);
});
G__47101.cljs$core$IFn$_invoke$arity$variadic = G__47101__delegate;
return G__47101;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
