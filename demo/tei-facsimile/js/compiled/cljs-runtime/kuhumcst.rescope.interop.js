goog.provide('kuhumcst.rescope.interop');
goog.require('cljs.core');
/**
 * Private implementation of extend-class, expecting only JavaScript types. This
 *   is simply a way to emulate the more modern class-based JS while still using
 *   its prototype-based subclassing.
 * 
 *   The primary goal was to emulate a call to super() in the constructor. This is
 *   a requirement when creating custom HTML components.
 */
kuhumcst.rescope.interop.extend_class_STAR_ = (function kuhumcst$rescope$interop$extend_class_STAR_(parent,props_obj,construct){
var child = (function kuhumcst$rescope$interop$extend_class_STAR__$_child_STAR_(){
var obj = Reflect.construct(parent,[],kuhumcst$rescope$interop$extend_class_STAR__$_child_STAR_);
if(cljs.core.truth_(construct)){
(construct.cljs$core$IFn$_invoke$arity$1 ? construct.cljs$core$IFn$_invoke$arity$1(obj) : construct.call(null,obj));
} else {
}

return obj;
});
var prototype = Object.create(parent.prototype,(function (){var or__4126__auto__ = props_obj;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})());
(child.prototype = prototype);

return child;
});
/**
 * Convert a map of properties into a properties object that can be consumed by
 *   extend-class*.
 */
kuhumcst.rescope.interop.js_props = (function kuhumcst$rescope$interop$js_props(props){
var wrap_method = (function (f){
return (function() { 
var G__56494__delegate = function (args){
var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,args) : f.call(null,this$,args));
};
var G__56494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56497__i = 0, G__56497__a = new Array(arguments.length -  0);
while (G__56497__i < G__56497__a.length) {G__56497__a[G__56497__i] = arguments[G__56497__i + 0]; ++G__56497__i;}
  args = new cljs.core.IndexedSeq(G__56497__a,0,null);
} 
return G__56494__delegate.call(this,args);};
G__56494.cljs$lang$maxFixedArity = 0;
G__56494.cljs$lang$applyTo = (function (arglist__56498){
var args = cljs.core.seq(arglist__56498);
return G__56494__delegate(args);
});
G__56494.cljs$core$IFn$_invoke$arity$variadic = G__56494__delegate;
return G__56494;
})()
;
});
var G__56343 = (function (){var iter__4529__auto__ = (function kuhumcst$rescope$interop$js_props_$_iter__56344(s__56345){
return (new cljs.core.LazySeq(null,(function (){
var s__56345__$1 = s__56345;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56345__$1);
if(temp__5735__auto__){
var s__56345__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56345__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56345__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56347 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56346 = (0);
while(true){
if((i__56346 < size__4528__auto__)){
var vec__56350 = cljs.core._nth(c__4527__auto__,i__56346);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56350,(1),null);
cljs.core.chunk_append(b__56347,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.fn_QMARK_(v))?wrap_method(v):v)], null)], null));

var G__56511 = (i__56346 + (1));
i__56346 = G__56511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56347),kuhumcst$rescope$interop$js_props_$_iter__56344(cljs.core.chunk_rest(s__56345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56347),null);
}
} else {
var vec__56357 = cljs.core.first(s__56345__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56357,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56357,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.fn_QMARK_(v))?wrap_method(v):v)], null)], null),kuhumcst$rescope$interop$js_props_$_iter__56344(cljs.core.rest(s__56345__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(props);
})();
var G__56343__$1 = (((G__56343 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56343));
if((G__56343__$1 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__56343__$1);
}
});
/**
 * Extend the prototype of a `parent` class with a map of object `props`.
 */
kuhumcst.rescope.interop.extend_class = (function kuhumcst$rescope$interop$extend_class(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56524 = arguments.length;
var i__4737__auto___56527 = (0);
while(true){
if((i__4737__auto___56527 < len__4736__auto___56524)){
args__4742__auto__.push((arguments[i__4737__auto___56527]));

var G__56530 = (i__4737__auto___56527 + (1));
i__4737__auto___56527 = G__56530;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kuhumcst.rescope.interop.extend_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kuhumcst.rescope.interop.extend_class.cljs$core$IFn$_invoke$arity$variadic = (function (parent,p__56375){
var vec__56386 = p__56375;
var map__56389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56386,(0),null);
var map__56389__$1 = (((((!((map__56389 == null))))?(((((map__56389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56389):map__56389);
var props = map__56389__$1;
var construct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56389__$1,new cljs.core.Keyword(null,"construct","construct",692547932));
return kuhumcst.rescope.interop.extend_class_STAR_(parent,kuhumcst.rescope.interop.js_props(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"construct","construct",692547932))),construct);
}));

(kuhumcst.rescope.interop.extend_class.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kuhumcst.rescope.interop.extend_class.cljs$lang$applyTo = (function (seq56367){
var G__56368 = cljs.core.first(seq56367);
var seq56367__$1 = cljs.core.next(seq56367);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56368,seq56367__$1);
}));

/**
 * Define a custom element based on a `tag` name. Can optionally take a map of
 *   `props` to refine the prototype of the new HTMLElement subclass.
 */
kuhumcst.rescope.interop.define_element_BANG_ = (function kuhumcst$rescope$interop$define_element_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56535 = arguments.length;
var i__4737__auto___56536 = (0);
while(true){
if((i__4737__auto___56536 < len__4736__auto___56535)){
args__4742__auto__.push((arguments[i__4737__auto___56536]));

var G__56537 = (i__4737__auto___56536 + (1));
i__4737__auto___56536 = G__56537;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kuhumcst.rescope.interop.define_element_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kuhumcst.rescope.interop.define_element_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (tag,p__56412){
var vec__56414 = p__56412;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56414,(0),null);
if((void 0 === window.customElements.get(tag))){
var element = kuhumcst.rescope.interop.extend_class.cljs$core$IFn$_invoke$arity$variadic(HTMLElement,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));
return window.customElements.define(tag,element);
} else {
return null;
}
}));

(kuhumcst.rescope.interop.define_element_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kuhumcst.rescope.interop.define_element_BANG_.cljs$lang$applyTo = (function (seq56402){
var G__56403 = cljs.core.first(seq56402);
var seq56402__$1 = cljs.core.next(seq56402);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56403,seq56402__$1);
}));

/**
 * Create a Blob object from a `coll` of content and a `type` (from `opts`).
 */
kuhumcst.rescope.interop.blob = (function kuhumcst$rescope$interop$blob(coll,p__56430){
var map__56431 = p__56430;
var map__56431__$1 = (((((!((map__56431 == null))))?(((((map__56431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56431):map__56431);
var opts = map__56431__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56431__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return (new Blob(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,coll),cljs.core.clj__GT_js(opts)));
});
/**
 * Wrap an atom `a` holding an object URL to auto-revoke the older objects.
 */
kuhumcst.rescope.interop.auto_revoked = (function kuhumcst$rescope$interop$auto_revoked(a){
return cljs.core.add_watch(a,new cljs.core.Keyword(null,"change","change",-1163046502),(function (k,r,o,n){
if(cljs.core.truth_((function (){var and__4115__auto__ = o;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(o,n);
} else {
return and__4115__auto__;
}
})())){
return URL.revokeObjectURL(o);
} else {
return null;
}
}));
});
/**
 * Create (or reuse) an object URL for a custom Blob based on `coll` and `opts`.
 *   Use together with auto-revoked to properly garbage-collect dangling objects.
 */
kuhumcst.rescope.interop.blob_url = cljs.core.memoize((function (coll,opts){
return URL.createObjectURL(kuhumcst.rescope.interop.blob(coll,opts));
}));
/**
 * Wrapping XMLHttpRequest as a function to make it more accessible.
 */
kuhumcst.rescope.interop.request = (function kuhumcst$rescope$interop$request(p__56452){
var map__56453 = p__56452;
var map__56453__$1 = (((((!((map__56453 == null))))?(((((map__56453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56453):map__56453);
var opts = map__56453__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56453__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56453__$1,new cljs.core.Keyword(null,"method","method",55703592),"GET");
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56453__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var on_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56453__$1,new cljs.core.Keyword(null,"on-progress","on-progress",1196110410));
var xhr = (new XMLHttpRequest());
xhr.open(method,url);

var iter__4529__auto___56564 = (function kuhumcst$rescope$interop$request_$_iter__56458(s__56459){
return (new cljs.core.LazySeq(null,(function (){
var s__56459__$1 = s__56459;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56459__$1);
if(temp__5735__auto__){
var s__56459__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56459__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56459__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56461 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56460 = (0);
while(true){
if((i__56460 < size__4528__auto__)){
var vec__56472 = cljs.core._nth(c__4527__auto__,i__56460);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56472,(1),null);
cljs.core.chunk_append(b__56461,xhr.setRequestHeader(k,v));

var G__56569 = (i__56460 + (1));
i__56460 = G__56569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56461),kuhumcst$rescope$interop$request_$_iter__56458(cljs.core.chunk_rest(s__56459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56461),null);
}
} else {
var vec__56475 = cljs.core.first(s__56459__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56475,(1),null);
return cljs.core.cons(xhr.setRequestHeader(k,v),kuhumcst$rescope$interop$request_$_iter__56458(cljs.core.rest(s__56459__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4529__auto___56564(headers);

if(cljs.core.truth_(on_progress)){
(xhr.onprogress = on_progress);
} else {
}

return xhr.send();
});
if((typeof kuhumcst !== 'undefined') && (typeof kuhumcst.rescope !== 'undefined') && (typeof kuhumcst.rescope.interop !== 'undefined') && (typeof kuhumcst.rescope.interop.event_data !== 'undefined')){
} else {
kuhumcst.rescope.interop.event_data = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56484 = cljs.core.get_global_hierarchy;
return (fexpr__56484.cljs$core$IFn$_invoke$arity$0 ? fexpr__56484.cljs$core$IFn$_invoke$arity$0() : fexpr__56484.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kuhumcst.rescope.interop","event-data"),(function (p1__56478_SHARP_){
return p1__56478_SHARP_.type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
kuhumcst.rescope.interop.event_data.cljs$core$IMultiFn$_add_method$arity$3(null,"progress",(function (event){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),event.loaded,new cljs.core.Keyword(null,"total","total",1916810418),(cljs.core.truth_(event.lengthComputable)?event.total:null)], null);
}));

//# sourceMappingURL=kuhumcst.rescope.interop.js.map
