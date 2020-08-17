goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__48928 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__48929 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__48929);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__48940 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__48941 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__48941);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__48940);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__48928);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__48953 = arguments.length;
switch (G__48953) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__48981_49027 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__48982_49028 = null;
var count__48983_49029 = (0);
var i__48984_49030 = (0);
while(true){
if((i__48984_49030 < count__48983_49029)){
var v_49031 = chunk__48982_49028.cljs$core$IIndexed$_nth$arity$2(null,i__48984_49030);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_49031);


var G__49032 = seq__48981_49027;
var G__49033 = chunk__48982_49028;
var G__49034 = count__48983_49029;
var G__49035 = (i__48984_49030 + (1));
seq__48981_49027 = G__49032;
chunk__48982_49028 = G__49033;
count__48983_49029 = G__49034;
i__48984_49030 = G__49035;
continue;
} else {
var temp__5735__auto___49036 = cljs.core.seq(seq__48981_49027);
if(temp__5735__auto___49036){
var seq__48981_49038__$1 = temp__5735__auto___49036;
if(cljs.core.chunked_seq_QMARK_(seq__48981_49038__$1)){
var c__4556__auto___49040 = cljs.core.chunk_first(seq__48981_49038__$1);
var G__49041 = cljs.core.chunk_rest(seq__48981_49038__$1);
var G__49042 = c__4556__auto___49040;
var G__49043 = cljs.core.count(c__4556__auto___49040);
var G__49044 = (0);
seq__48981_49027 = G__49041;
chunk__48982_49028 = G__49042;
count__48983_49029 = G__49043;
i__48984_49030 = G__49044;
continue;
} else {
var v_49051 = cljs.core.first(seq__48981_49038__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_49051);


var G__49053 = cljs.core.next(seq__48981_49038__$1);
var G__49054 = null;
var G__49055 = (0);
var G__49056 = (0);
seq__48981_49027 = G__49053;
chunk__48982_49028 = G__49054;
count__48983_49029 = G__49055;
i__48984_49030 = G__49056;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
