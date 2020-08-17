goog.provide('recap.dom.focus');
recap.dom.focus._STAR_requested_focus_STAR_ = null;
/**
 * Request that the element with the given `id` is given focus next.
 *   The element should have accept-focus! as its :ref handler.
 */
recap.dom.focus.request_BANG_ = (function recap$dom$focus$request_BANG_(id){
return (recap.dom.focus._STAR_requested_focus_STAR_ = id);
});
/**
 * Focus the HTML `element` if it has been requested. Use as a :ref handler.
 */
recap.dom.focus.accept_BANG_ = (function recap$dom$focus$accept_BANG_(element){
if(cljs.core.truth_((function (){var and__4115__auto__ = element;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element.id,recap.dom.focus._STAR_requested_focus_STAR_);
} else {
return and__4115__auto__;
}
})())){
(recap.dom.focus._STAR_requested_focus_STAR_ = null);

return element.focus();
} else {
return null;
}
});

//# sourceMappingURL=recap.dom.focus.js.map
