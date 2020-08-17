goog.provide('recap.dom.drag');
/**
 * Temporary storage for drag-fns.
 */
recap.dom.drag.drag_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * The `drag-fn` is called with no args on a successful drop.
 */
recap.dom.drag.on_drag_start = (function recap$dom$drag$on_drag_start(drag_fn){
return (function (e){
var drag_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(drag_fn));
var dt = e.dataTransfer;
var element = e.target;
var x_offset = (element.offsetWidth / (2));
var y_offset = (element.offsetHeight / (2));
var ghost = element.cloneNode(true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(recap.dom.drag.drag_fns,cljs.core.assoc,drag_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fn","drag-fn",1270882084),drag_fn,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),ghost], null));

(dt.effectAllowed = "move");

(dt.dropEffect = "move");

dt.setData("fn",drag_id);

ghost.classList.add("--ghost");

ghost.setAttribute("aria-hidden","true");

document.body.appendChild(ghost);

dt.setDragImage(ghost,x_offset,y_offset);

return setTimeout((function (){
recap.dom.interop.add_modifier_BANG_(element.parentNode,"drag-parent");

return recap.dom.interop.add_modifier_BANG_(element,"drag");
}),(100));
});
});
recap.dom.drag.on_drag_end = (function recap$dom$drag$on_drag_end(){
return (function (e){
recap.dom.interop.remove_modifier_BANG_(e.target.parentNode,"drag-parent");

return recap.dom.interop.remove_modifier_BANG_(e.target,"drag");
});
});
recap.dom.drag.on_drag_over = (function recap$dom$drag$on_drag_over(){
return (function (e){
e.preventDefault();

return (e.dataTransfer.dropEffect = "move");
});
});
recap.dom.drag.on_drag_enter = (function recap$dom$drag$on_drag_enter(){
return (function (e){
e.preventDefault();

return recap.dom.interop.add_modifier_BANG_(e.target,"drag-over");
});
});
recap.dom.drag.on_drag_leave = (function recap$dom$drag$on_drag_leave(){
return (function (e){
e.preventDefault();

return recap.dom.interop.remove_modifier_BANG_(e.target,"drag-over");
});
});
/**
 * The `drop-fn` is called with the drag-fn's output as its input on a
 *   successful drop.
 */
recap.dom.drag.on_drop = (function recap$dom$drag$on_drop(drop_fn){
return (function (e){
e.preventDefault();

recap.dom.interop.remove_modifier_BANG_(e.target,"drag-over");

var drag_id = e.dataTransfer.getData("fn");
var map__47890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(recap.dom.drag.drag_fns),drag_id);
var map__47890__$1 = (((((!((map__47890 == null))))?(((((map__47890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47890):map__47890);
var drag_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47890__$1,new cljs.core.Keyword(null,"drag-fn","drag-fn",1270882084));
var ghost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47890__$1,new cljs.core.Keyword(null,"ghost","ghost",-1531157576));
if(cljs.core.truth_(drag_fn)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(recap.dom.drag.drag_fns,cljs.core.dissoc,drag_id);

var G__47900_47917 = (drag_fn.cljs$core$IFn$_invoke$arity$0 ? drag_fn.cljs$core$IFn$_invoke$arity$0() : drag_fn.call(null));
(drop_fn.cljs$core$IFn$_invoke$arity$1 ? drop_fn.cljs$core$IFn$_invoke$arity$1(G__47900_47917) : drop_fn.call(null,G__47900_47917));

return ghost.parentNode.removeChild(ghost);
} else {
return null;
}
});
});

//# sourceMappingURL=recap.dom.drag.js.map
