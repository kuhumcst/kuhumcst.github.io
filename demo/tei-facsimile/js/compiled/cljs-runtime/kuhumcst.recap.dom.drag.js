goog.provide('kuhumcst.recap.dom.drag');
/**
 * Temporary storage for drag-fns.
 */
kuhumcst.recap.dom.drag.drag_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * The `drag-fn` is called with no args on a successful drop.
 */
kuhumcst.recap.dom.drag.on_drag_start = (function kuhumcst$recap$dom$drag$on_drag_start(drag_fn){
return (function (e){
var drag_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(drag_fn));
var dt = e.dataTransfer;
var element = e.target;
var x_offset = (element.offsetWidth / (2));
var y_offset = (element.offsetHeight / (2));
var ghost = element.cloneNode(true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kuhumcst.recap.dom.drag.drag_fns,cljs.core.assoc,drag_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fn","drag-fn",1270882084),drag_fn,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),ghost], null));

(dt.effectAllowed = "move");

(dt.dropEffect = "move");

dt.setData("fn",drag_id);

ghost.classList.add("--ghost");

ghost.setAttribute("aria-hidden","true");

document.body.appendChild(ghost);

dt.setDragImage(ghost,x_offset,y_offset);

return setTimeout((function (){
kuhumcst.recap.dom.interop.add_modifier_BANG_(element.parentNode,"drag-parent");

return kuhumcst.recap.dom.interop.add_modifier_BANG_(element,"drag");
}),(100));
});
});
kuhumcst.recap.dom.drag.on_drag_end = (function kuhumcst$recap$dom$drag$on_drag_end(){
return (function (e){
kuhumcst.recap.dom.interop.remove_modifier_BANG_(e.target.parentNode,"drag-parent");

return kuhumcst.recap.dom.interop.remove_modifier_BANG_(e.target,"drag");
});
});
kuhumcst.recap.dom.drag.on_drag_over = (function kuhumcst$recap$dom$drag$on_drag_over(){
return (function (e){
e.preventDefault();

return (e.dataTransfer.dropEffect = "move");
});
});
kuhumcst.recap.dom.drag.on_drag_enter = (function kuhumcst$recap$dom$drag$on_drag_enter(){
return (function (e){
e.preventDefault();

return kuhumcst.recap.dom.interop.add_modifier_BANG_(e.target,"drag-over");
});
});
kuhumcst.recap.dom.drag.on_drag_leave = (function kuhumcst$recap$dom$drag$on_drag_leave(){
return (function (e){
e.preventDefault();

return kuhumcst.recap.dom.interop.remove_modifier_BANG_(e.target,"drag-over");
});
});
/**
 * The `drop-fn` is called with the drag-fn's output as its input on a
 *   successful drop.
 */
kuhumcst.recap.dom.drag.on_drop = (function kuhumcst$recap$dom$drag$on_drop(drop_fn){
return (function (e){
e.preventDefault();

kuhumcst.recap.dom.interop.remove_modifier_BANG_(e.target,"drag-over");

var drag_id = e.dataTransfer.getData("fn");
var map__48812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kuhumcst.recap.dom.drag.drag_fns),drag_id);
var map__48812__$1 = (((((!((map__48812 == null))))?(((((map__48812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48812):map__48812);
var drag_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48812__$1,new cljs.core.Keyword(null,"drag-fn","drag-fn",1270882084));
var ghost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48812__$1,new cljs.core.Keyword(null,"ghost","ghost",-1531157576));
if(cljs.core.truth_(drag_fn)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(kuhumcst.recap.dom.drag.drag_fns,cljs.core.dissoc,drag_id);

var G__48816_48828 = (drag_fn.cljs$core$IFn$_invoke$arity$0 ? drag_fn.cljs$core$IFn$_invoke$arity$0() : drag_fn.call(null));
(drop_fn.cljs$core$IFn$_invoke$arity$1 ? drop_fn.cljs$core$IFn$_invoke$arity$1(G__48816_48828) : drop_fn.call(null,G__48816_48828));

return ghost.parentNode.removeChild(ghost);
} else {
return null;
}
});
});

//# sourceMappingURL=kuhumcst.recap.dom.drag.js.map
