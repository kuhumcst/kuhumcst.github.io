goog.provide('kuhumcst.recap.dom.keyboard');
/**
 * Get siblings for an `element` (including itself) with the same ARIA role.
 */
kuhumcst.recap.dom.keyboard.role_siblings = (function kuhumcst$recap$dom$keyboard$role_siblings(element){
var role = element.getAttribute("role");
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48946_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(role,p1__48946_SHARP_.getAttribute("role"));
}),element.parentNode.children);
});
/**
 * Get adjacent role siblings for an `element` as [before after].
 */
kuhumcst.recap.dom.keyboard.adjacent_role_siblings = (function kuhumcst$recap$dom$keyboard$adjacent_role_siblings(element){
var before = cljs.core.PersistentVector.EMPTY;
var after = null;
var G__48953 = kuhumcst.recap.dom.keyboard.role_siblings(element);
var vec__48954 = G__48953;
var seq__48955 = cljs.core.seq(vec__48954);
var first__48956 = cljs.core.first(seq__48955);
var seq__48955__$1 = cljs.core.next(seq__48955);
var sibling = first__48956;
var siblings = seq__48955__$1;
var before__$1 = before;
var after__$1 = after;
var G__48953__$1 = G__48953;
while(true){
var before__$2 = before__$1;
var after__$2 = after__$1;
var vec__48968 = G__48953__$1;
var seq__48970 = cljs.core.seq(vec__48968);
var first__48971 = cljs.core.first(seq__48970);
var seq__48970__$1 = cljs.core.next(seq__48970);
var sibling__$1 = first__48971;
var siblings__$1 = seq__48970__$1;
if((sibling__$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [before__$2,after__$2], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,sibling__$1)){
var G__49027 = before__$2;
var G__49028 = cljs.core.PersistentVector.EMPTY;
var G__49029 = siblings__$1;
before__$1 = G__49027;
after__$1 = G__49028;
G__48953__$1 = G__49029;
continue;
} else {
if(cljs.core.truth_(after__$2)){
var G__49035 = before__$2;
var G__49036 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(after__$2,sibling__$1);
var G__49037 = siblings__$1;
before__$1 = G__49035;
after__$1 = G__49036;
G__48953__$1 = G__49037;
continue;
} else {
if(cljs.core.truth_(before__$2)){
var G__49038 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(before__$2,sibling__$1);
var G__49039 = after__$2;
var G__49040 = siblings__$1;
before__$1 = G__49038;
after__$1 = G__49039;
G__48953__$1 = G__49040;
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
kuhumcst.recap.dom.keyboard.prev_item = clojure.set.union.cljs$core$IFn$_invoke$arity$2(kuhumcst.recap.dom.key.up,kuhumcst.recap.dom.key.left);
kuhumcst.recap.dom.keyboard.next_item = clojure.set.union.cljs$core$IFn$_invoke$arity$2(kuhumcst.recap.dom.key.down,kuhumcst.recap.dom.key.right);
kuhumcst.recap.dom.keyboard.click_item = clojure.set.union.cljs$core$IFn$_invoke$arity$2(kuhumcst.recap.dom.key.spacebar,kuhumcst.recap.dom.key.enter);
kuhumcst.recap.dom.keyboard.supported_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(kuhumcst.recap.dom.keyboard.prev_item,kuhumcst.recap.dom.keyboard.next_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kuhumcst.recap.dom.keyboard.click_item], 0));
/**
 * OnKeyDown handler with keyboard functionality needed for a roving tabindex.
 *   Focus moves between adjacent DOM siblings with the same ARIA role.
 * 
 *   Requires :on-click and :role to have been set on the affected elements.
 *   The elements should also update their :tabindex attribute reactively.
 * 
 *   ARIA references:
 *  https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_general_within
 */
kuhumcst.recap.dom.keyboard.roving_tabindex_handler = (function kuhumcst$recap$dom$keyboard$roving_tabindex_handler(e){
if(cljs.core.truth_((kuhumcst.recap.dom.keyboard.supported_keys.cljs$core$IFn$_invoke$arity$1 ? kuhumcst.recap.dom.keyboard.supported_keys.cljs$core$IFn$_invoke$arity$1(e.key) : kuhumcst.recap.dom.keyboard.supported_keys.call(null,e.key)))){
e.preventDefault();

e.stopPropagation();

var vec__48980 = kuhumcst.recap.dom.keyboard.adjacent_role_siblings(e.target);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48980,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48980,(1),null);
var pred__48983 = cljs.core.contains_QMARK_;
var expr__48984 = e.key;
if(cljs.core.truth_((pred__48983.cljs$core$IFn$_invoke$arity$2 ? pred__48983.cljs$core$IFn$_invoke$arity$2(kuhumcst.recap.dom.keyboard.click_item,expr__48984) : pred__48983.call(null,kuhumcst.recap.dom.keyboard.click_item,expr__48984)))){
kuhumcst.recap.dom.focus.request_BANG_(e.target.id);

e.target.click();

return e.target.focus();
} else {
if(cljs.core.truth_((pred__48983.cljs$core$IFn$_invoke$arity$2 ? pred__48983.cljs$core$IFn$_invoke$arity$2(kuhumcst.recap.dom.keyboard.prev_item,expr__48984) : pred__48983.call(null,kuhumcst.recap.dom.keyboard.prev_item,expr__48984)))){
return cljs.core.last(((cljs.core.empty_QMARK_(before))?after:before)).focus();
} else {
if(cljs.core.truth_((pred__48983.cljs$core$IFn$_invoke$arity$2 ? pred__48983.cljs$core$IFn$_invoke$arity$2(kuhumcst.recap.dom.keyboard.next_item,expr__48984) : pred__48983.call(null,kuhumcst.recap.dom.keyboard.next_item,expr__48984)))){
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

//# sourceMappingURL=kuhumcst.recap.dom.keyboard.js.map
