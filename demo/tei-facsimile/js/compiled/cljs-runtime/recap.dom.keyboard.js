goog.provide('recap.dom.keyboard');
/**
 * Get siblings for an `element` (including itself) with the same ARIA role.
 */
recap.dom.keyboard.role_siblings = (function recap$dom$keyboard$role_siblings(element){
var role = element.getAttribute("role");
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48020_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(role,p1__48020_SHARP_.getAttribute("role"));
}),element.parentNode.children);
});
/**
 * Get adjacent role siblings for an `element` as [before after].
 */
recap.dom.keyboard.adjacent_role_siblings = (function recap$dom$keyboard$adjacent_role_siblings(element){
var before = cljs.core.PersistentVector.EMPTY;
var after = null;
var G__48029 = recap.dom.keyboard.role_siblings(element);
var vec__48034 = G__48029;
var seq__48035 = cljs.core.seq(vec__48034);
var first__48036 = cljs.core.first(seq__48035);
var seq__48035__$1 = cljs.core.next(seq__48035);
var sibling = first__48036;
var siblings = seq__48035__$1;
var before__$1 = before;
var after__$1 = after;
var G__48029__$1 = G__48029;
while(true){
var before__$2 = before__$1;
var after__$2 = after__$1;
var vec__48048 = G__48029__$1;
var seq__48049 = cljs.core.seq(vec__48048);
var first__48050 = cljs.core.first(seq__48049);
var seq__48049__$1 = cljs.core.next(seq__48049);
var sibling__$1 = first__48050;
var siblings__$1 = seq__48049__$1;
if((sibling__$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [before__$2,after__$2], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,sibling__$1)){
var G__48095 = before__$2;
var G__48096 = cljs.core.PersistentVector.EMPTY;
var G__48097 = siblings__$1;
before__$1 = G__48095;
after__$1 = G__48096;
G__48029__$1 = G__48097;
continue;
} else {
if(cljs.core.truth_(after__$2)){
var G__48098 = before__$2;
var G__48099 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(after__$2,sibling__$1);
var G__48100 = siblings__$1;
before__$1 = G__48098;
after__$1 = G__48099;
G__48029__$1 = G__48100;
continue;
} else {
if(cljs.core.truth_(before__$2)){
var G__48102 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(before__$2,sibling__$1);
var G__48103 = after__$2;
var G__48104 = siblings__$1;
before__$1 = G__48102;
after__$1 = G__48103;
G__48029__$1 = G__48104;
continue;
} else {
return null;
}
}
}
}
break;
}
});
recap.dom.keyboard.prev_item = clojure.set.union.cljs$core$IFn$_invoke$arity$2(recap.dom.key.up,recap.dom.key.left);
recap.dom.keyboard.next_item = clojure.set.union.cljs$core$IFn$_invoke$arity$2(recap.dom.key.down,recap.dom.key.right);
recap.dom.keyboard.click_item = clojure.set.union.cljs$core$IFn$_invoke$arity$2(recap.dom.key.spacebar,recap.dom.key.enter);
recap.dom.keyboard.supported_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(recap.dom.keyboard.prev_item,recap.dom.keyboard.next_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([recap.dom.keyboard.click_item], 0));
/**
 * OnKeyDown handler with keyboard functionality needed for a roving tabindex.
 *   Focus moves between adjacent DOM siblings with the same ARIA role.
 * 
 *   Requires :on-click and :role to have been set on the affected elements.
 *   The elements should also update their :tab-index attribute reactively.
 * 
 *   ARIA references:
 *  https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_general_within
 */
recap.dom.keyboard.roving_tabindex_handler = (function recap$dom$keyboard$roving_tabindex_handler(e){
if(cljs.core.truth_((recap.dom.keyboard.supported_keys.cljs$core$IFn$_invoke$arity$1 ? recap.dom.keyboard.supported_keys.cljs$core$IFn$_invoke$arity$1(e.key) : recap.dom.keyboard.supported_keys.call(null,e.key)))){
e.preventDefault();

e.stopPropagation();

var vec__48069 = recap.dom.keyboard.adjacent_role_siblings(e.target);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48069,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48069,(1),null);
var pred__48075 = cljs.core.contains_QMARK_;
var expr__48076 = e.key;
if(cljs.core.truth_((pred__48075.cljs$core$IFn$_invoke$arity$2 ? pred__48075.cljs$core$IFn$_invoke$arity$2(recap.dom.keyboard.click_item,expr__48076) : pred__48075.call(null,recap.dom.keyboard.click_item,expr__48076)))){
recap.dom.focus.request_BANG_(e.target.id);

e.target.click();

return e.target.focus();
} else {
if(cljs.core.truth_((pred__48075.cljs$core$IFn$_invoke$arity$2 ? pred__48075.cljs$core$IFn$_invoke$arity$2(recap.dom.keyboard.prev_item,expr__48076) : pred__48075.call(null,recap.dom.keyboard.prev_item,expr__48076)))){
return cljs.core.last(((cljs.core.empty_QMARK_(before))?after:before)).focus();
} else {
if(cljs.core.truth_((pred__48075.cljs$core$IFn$_invoke$arity$2 ? pred__48075.cljs$core$IFn$_invoke$arity$2(recap.dom.keyboard.next_item,expr__48076) : pred__48075.call(null,recap.dom.keyboard.next_item,expr__48076)))){
return cljs.core.first(((cljs.core.empty_QMARK_(after))?before:after)).focus();
} else {
return new cljs.core.Keyword(null,"no-op","no-op",-93046065);
}
}
}
} else {
return null;
}
});

//# sourceMappingURL=recap.dom.keyboard.js.map
