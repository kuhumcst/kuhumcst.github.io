goog.provide('rescope.interop');
/**
 * Private implementation of extend-class, expecting only JavaScript types. This
 *   is simply a way to emulate the more modern class-based JS while still using
 *   its prototype-based subclassing.
 * 
 *   The primary goal was to emulate a call to super() in the constructor. This is
 *   a requirement when creating custom HTML components.
 */
rescope.interop.extend_class_STAR_ = (function rescope$interop$extend_class_STAR_(parent,props_obj,construct){
var child = (function rescope$interop$extend_class_STAR__$_child_STAR_(){
var obj = Reflect.construct(parent,[],rescope$interop$extend_class_STAR__$_child_STAR_);
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
rescope.interop.js_props = (function rescope$interop$js_props(props){
var wrap_method = (function (f){
return (function() { 
var G__51953__delegate = function (args){
var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,args) : f.call(null,this$,args));
};
var G__51953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51954__i = 0, G__51954__a = new Array(arguments.length -  0);
while (G__51954__i < G__51954__a.length) {G__51954__a[G__51954__i] = arguments[G__51954__i + 0]; ++G__51954__i;}
  args = new cljs.core.IndexedSeq(G__51954__a,0,null);
} 
return G__51953__delegate.call(this,args);};
G__51953.cljs$lang$maxFixedArity = 0;
G__51953.cljs$lang$applyTo = (function (arglist__51955){
var args = cljs.core.seq(arglist__51955);
return G__51953__delegate(args);
});
G__51953.cljs$core$IFn$_invoke$arity$variadic = G__51953__delegate;
return G__51953;
})()
;
});
var G__51813 = (function (){var iter__4529__auto__ = (function rescope$interop$js_props_$_iter__51814(s__51815){
return (new cljs.core.LazySeq(null,(function (){
var s__51815__$1 = s__51815;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51815__$1);
if(temp__5735__auto__){
var s__51815__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51815__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51815__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51817 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51816 = (0);
while(true){
if((i__51816 < size__4528__auto__)){
var vec__51824 = cljs.core._nth(c__4527__auto__,i__51816);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51824,(1),null);
cljs.core.chunk_append(b__51817,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.fn_QMARK_(v))?wrap_method(v):v)], null)], null));

var G__51966 = (i__51816 + (1));
i__51816 = G__51966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51817),rescope$interop$js_props_$_iter__51814(cljs.core.chunk_rest(s__51815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51817),null);
}
} else {
var vec__51842 = cljs.core.first(s__51815__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51842,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.fn_QMARK_(v))?wrap_method(v):v)], null)], null),rescope$interop$js_props_$_iter__51814(cljs.core.rest(s__51815__$2)));
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
var G__51813__$1 = (((G__51813 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51813));
if((G__51813__$1 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__51813__$1);
}
});
/**
 * Extend the prototype of a `parent` class with a map of object `props`.
 */
rescope.interop.extend_class = (function rescope$interop$extend_class(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51980 = arguments.length;
var i__4737__auto___51984 = (0);
while(true){
if((i__4737__auto___51984 < len__4736__auto___51980)){
args__4742__auto__.push((arguments[i__4737__auto___51984]));

var G__51985 = (i__4737__auto___51984 + (1));
i__4737__auto___51984 = G__51985;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rescope.interop.extend_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rescope.interop.extend_class.cljs$core$IFn$_invoke$arity$variadic = (function (parent,p__51853){
var vec__51855 = p__51853;
var map__51858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51855,(0),null);
var map__51858__$1 = (((((!((map__51858 == null))))?(((((map__51858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51858):map__51858);
var props = map__51858__$1;
var construct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51858__$1,new cljs.core.Keyword(null,"construct","construct",692547932));
return rescope.interop.extend_class_STAR_(parent,rescope.interop.js_props(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"construct","construct",692547932))),construct);
}));

(rescope.interop.extend_class.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rescope.interop.extend_class.cljs$lang$applyTo = (function (seq51849){
var G__51850 = cljs.core.first(seq51849);
var seq51849__$1 = cljs.core.next(seq51849);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51850,seq51849__$1);
}));

/**
 * Define a custom element based on a `tag` name. Can optionally take a map of
 *   `props` to refine the prototype of the new HTMLElement subclass.
 */
rescope.interop.define_element_BANG_ = (function rescope$interop$define_element_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51990 = arguments.length;
var i__4737__auto___51995 = (0);
while(true){
if((i__4737__auto___51995 < len__4736__auto___51990)){
args__4742__auto__.push((arguments[i__4737__auto___51995]));

var G__51996 = (i__4737__auto___51995 + (1));
i__4737__auto___51995 = G__51996;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rescope.interop.define_element_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rescope.interop.define_element_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (tag,p__51880){
var vec__51881 = p__51880;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51881,(0),null);
if((void 0 === window.customElements.get(tag))){
var element = rescope.interop.extend_class.cljs$core$IFn$_invoke$arity$variadic(HTMLElement,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));
return window.customElements.define(tag,element);
} else {
return null;
}
}));

(rescope.interop.define_element_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rescope.interop.define_element_BANG_.cljs$lang$applyTo = (function (seq51871){
var G__51872 = cljs.core.first(seq51871);
var seq51871__$1 = cljs.core.next(seq51871);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51872,seq51871__$1);
}));

/**
 * Create a Blob object from a `coll` of content and a `type` (from `opts`).
 */
rescope.interop.blob = (function rescope$interop$blob(coll,p__51895){
var map__51897 = p__51895;
var map__51897__$1 = (((((!((map__51897 == null))))?(((((map__51897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51897):map__51897);
var opts = map__51897__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51897__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return (new Blob(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,coll),cljs.core.clj__GT_js(opts)));
});
/**
 * Wrap an atom `a` holding an object URL to auto-revoke the older objects.
 */
rescope.interop.auto_revoked = (function rescope$interop$auto_revoked(a){
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
rescope.interop.blob_url = cljs.core.memoize((function (coll,opts){
return URL.createObjectURL(rescope.interop.blob(coll,opts));
}));
/**
 * Wrapping XMLHttpRequest as a function to make it more accessible.
 */
rescope.interop.request = (function rescope$interop$request(p__51917){
var map__51918 = p__51917;
var map__51918__$1 = (((((!((map__51918 == null))))?(((((map__51918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51918):map__51918);
var opts = map__51918__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51918__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51918__$1,new cljs.core.Keyword(null,"method","method",55703592),"GET");
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51918__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var on_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51918__$1,new cljs.core.Keyword(null,"on-progress","on-progress",1196110410));
var xhr = (new XMLHttpRequest());
xhr.open(method,url);

var iter__4529__auto___52018 = (function rescope$interop$request_$_iter__51926(s__51927){
return (new cljs.core.LazySeq(null,(function (){
var s__51927__$1 = s__51927;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51927__$1);
if(temp__5735__auto__){
var s__51927__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51927__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51927__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51930 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51929 = (0);
while(true){
if((i__51929 < size__4528__auto__)){
var vec__51935 = cljs.core._nth(c__4527__auto__,i__51929);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51935,(1),null);
cljs.core.chunk_append(b__51930,xhr.setRequestHeader(k,v));

var G__52028 = (i__51929 + (1));
i__51929 = G__52028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51930),rescope$interop$request_$_iter__51926(cljs.core.chunk_rest(s__51927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51930),null);
}
} else {
var vec__51938 = cljs.core.first(s__51927__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51938,(1),null);
return cljs.core.cons(xhr.setRequestHeader(k,v),rescope$interop$request_$_iter__51926(cljs.core.rest(s__51927__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4529__auto___52018(headers);

if(cljs.core.truth_(on_progress)){
(xhr.onprogress = on_progress);
} else {
}

return xhr.send();
});
if((typeof rescope !== 'undefined') && (typeof rescope.interop !== 'undefined') && (typeof rescope.interop.event_data !== 'undefined')){
} else {
rescope.interop.event_data = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51945 = cljs.core.get_global_hierarchy;
return (fexpr__51945.cljs$core$IFn$_invoke$arity$0 ? fexpr__51945.cljs$core$IFn$_invoke$arity$0() : fexpr__51945.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("rescope.interop","event-data"),(function (p1__51943_SHARP_){
return p1__51943_SHARP_.type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
rescope.interop.event_data.cljs$core$IMultiFn$_add_method$arity$3(null,"progress",(function (event){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),event.loaded,new cljs.core.Keyword(null,"total","total",1916810418),(cljs.core.truth_(event.lengthComputable)?event.total:null)], null);
}));

//# sourceMappingURL=rescope.interop.js.map
