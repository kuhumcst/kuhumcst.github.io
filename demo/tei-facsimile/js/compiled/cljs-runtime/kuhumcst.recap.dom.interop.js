goog.provide('kuhumcst.recap.dom.interop');
kuhumcst.recap.dom.interop.bem_block = /(\w-?)+/;
/**
 * Add a BEM `modifier` class to an `element`.
 */
kuhumcst.recap.dom.interop.add_modifier_BANG_ = (function kuhumcst$recap$dom$interop$add_modifier_BANG_(element,modifier){
var class_list = element.classList;
var class$ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,kuhumcst.recap.dom.interop.bem_block),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(class_list)))),"--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier)].join('');
return class_list.add(class$);
});
/**
 * Remove a BEM `modifier` class from an `element`.
 */
kuhumcst.recap.dom.interop.remove_modifier_BANG_ = (function kuhumcst$recap$dom$interop$remove_modifier_BANG_(element,modifier){
var class_list = element.classList;
var class$ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48666_SHARP_){
return clojure.string.ends_with_QMARK_(p1__48666_SHARP_,["--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier)].join(''));
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(class_list)));
return class_list.remove(class$);
});

//# sourceMappingURL=kuhumcst.recap.dom.interop.js.map
