goog.provide('kuhumcst.recap.drag');
goog.require('cljs.core');
/**
 * Temporary storage for drag-fns.
 */
kuhumcst.recap.drag.drag_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * The `drag-fn` is called with no args on a successful drop.
 */
kuhumcst.recap.drag.on_drag_start = (function kuhumcst$recap$drag$on_drag_start(drag_fn){
return (function (e){
var drag_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(drag_fn));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kuhumcst.recap.drag.drag_fns,cljs.core.assoc,drag_id,drag_fn);

(e.dataTransfer.effectAllowed = "move");

(e.dataTransfer.dropEffect = "move");

return e.dataTransfer.setData("fn",drag_id);
});
});
kuhumcst.recap.drag.on_drag_over = (function kuhumcst$recap$drag$on_drag_over(){
return (function (e){
e.preventDefault();

return (e.dataTransfer.dropEffect = "move");
});
});
/**
 * The `drop-fn` is called with the drag-fn's output as its input on a
 *   successful drop.
 */
kuhumcst.recap.drag.on_drop = (function kuhumcst$recap$drag$on_drop(drop_fn){
return (function (e){
e.preventDefault();

var drag_id = e.dataTransfer.getData("fn");
var drag_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kuhumcst.recap.drag.drag_fns),drag_id);
if(cljs.core.truth_(drag_fn)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(kuhumcst.recap.drag.drag_fns,cljs.core.dissoc,drag_id);

var G__46493 = (drag_fn.cljs$core$IFn$_invoke$arity$0 ? drag_fn.cljs$core$IFn$_invoke$arity$0() : drag_fn.call(null));
return (drop_fn.cljs$core$IFn$_invoke$arity$1 ? drop_fn.cljs$core$IFn$_invoke$arity$1(G__46493) : drop_fn.call(null,G__46493));
} else {
return null;
}
});
});

//# sourceMappingURL=kuhumcst.recap.drag.js.map
