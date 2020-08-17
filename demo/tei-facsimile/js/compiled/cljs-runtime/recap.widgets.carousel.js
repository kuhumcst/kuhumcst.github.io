goog.provide('recap.widgets.carousel');
/**
 * Tabbed carousel with a slide picker, but without automatic slide rotation.
 *   Takes `state` of the form described in the docstring of this namespace.
 * 
 *   Optionally, certain HTML attributes specified in the `opts` may merged with
 *   the carousel attr. This should be done in order to satisfy ARIA labeling
 *   requirements, e.g. either :aria-label or :aria-labelledby should be set.
 */
recap.widgets.carousel.carousel = (function recap$widgets$carousel$carousel(p__52211,p__52212){
var map__52213 = p__52211;
var map__52213__$1 = (((((!((map__52213 == null))))?(((((map__52213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52213):map__52213);
var state = map__52213__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52213__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52213__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__52214 = p__52212;
var map__52214__$1 = (((((!((map__52214 == null))))?(((((map__52214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52214):map__52214);
var opts = map__52214__$1;
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52214__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_labelledby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52214__$1,new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667));
var with_let52240 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let52240","with-let52240",-1872592412));
var temp__5739__auto___52304 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___52304 == null)){
} else {
var c__47351__auto___52305 = temp__5739__auto___52304;
if((with_let52240.generation === c__47351__auto___52305.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let52240.generation = c__47351__auto___52305.ratomGeneration);
}


var init52241 = (with_let52240.length === (0));
var state__$1 = ((init52241)?(with_let52240[(0)] = recap.state.prepare(new cljs.core.Keyword("recap.state","kvs+i","recap.state/kvs+i",1073629360),state)):(with_let52240[(0)]));
var next_slide = ((init52241)?(with_let52240[(1)] = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.update,new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.inc);
})):(with_let52240[(1)]));
var prev_slide = ((init52241)?(with_let52240[(2)] = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.update,new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.dec);
})):(with_let52240[(2)]));
var res__47352__auto__ = (function (){var map__52260 = cljs.core.deref(state__$1);
var map__52260__$1 = (((((!((map__52260 == null))))?(((((map__52260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52260):map__52260);
var i__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52260__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var kvs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52260__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var vec__52261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,i__$1);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52261,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52261,(1),null);
var tab_panel_id = cljs.core.random_uuid();
var label_id = cljs.core.random_uuid();
var prev_QMARK_ = (i__$1 > (0));
var next_QMARK_ = (i__$1 < (cljs.core.count(kvs__$1) - (1)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel","div.carousel",-760498478),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),"group",new cljs.core.Keyword(null,"aria-roledescription","aria-roledescription",549343444),"carousel",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),aria_label,new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),aria_labelledby], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.carousel__select","button.carousel__select",-617636703),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["View slide number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)].join(''),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((prev_QMARK_)?"0":"-1"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((prev_QMARK_)?prev_slide:null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel__slide","div.carousel__slide",223315872),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"tabpanel",new cljs.core.Keyword(null,"id","id",-1388402092),tab_panel_id,new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),label_id], null),(((cljs.core.count(kvs__$1) > (2)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel__slide-header","div.carousel__slide-header",-208317774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel__slide-label","div.carousel__slide-label",1672685114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),label_id], null),label], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slide-picker","div.slide-picker",393327121),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"tablist",new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),recap.dom.keyboard.roving_tabindex_handler,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Choose a slide to display"], null)], null),(function (){var iter__4529__auto__ = (function recap$widgets$carousel$carousel_$_iter__52267(s__52268){
return (new cljs.core.LazySeq(null,(function (){
var s__52268__$1 = s__52268;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52268__$1);
if(temp__5735__auto__){
var s__52268__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52268__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52268__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52270 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52269 = (0);
while(true){
if((i__52269 < size__4528__auto__)){
var n = cljs.core._nth(c__4527__auto__,i__52269);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1);
var select = ((function (i__52269,selected_QMARK_,n,c__4527__auto__,size__4528__auto__,b__52270,s__52268__$2,temp__5735__auto__,map__52260,map__52260__$1,i__$1,kvs__$1,vec__52261,label,content,tab_panel_id,label_id,prev_QMARK_,next_QMARK_,init52241,state__$1,next_slide,prev_slide,with_let52240,map__52213,map__52213__$1,state,kvs,i,map__52214,map__52214__$1,opts,aria_label,aria_labelledby){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(i__52269,selected_QMARK_,n,c__4527__auto__,size__4528__auto__,b__52270,s__52268__$2,temp__5735__auto__,map__52260,map__52260__$1,i__$1,kvs__$1,vec__52261,label,content,tab_panel_id,label_id,prev_QMARK_,next_QMARK_,init52241,state__$1,next_slide,prev_slide,with_let52240,map__52213,map__52213__$1,state,kvs,i,map__52214,map__52214__$1,opts,aria_label,aria_labelledby))
;
cljs.core.chunk_append(b__52270,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.slide-picker__dot","span.slide-picker__dot",75672836),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),tab_panel_id,new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),selected_QMARK_,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((selected_QMARK_)?"0":"-1"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),select], null)], null));

var G__52396 = (i__52269 + (1));
i__52269 = G__52396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52270),recap$widgets$carousel$carousel_$_iter__52267(cljs.core.chunk_rest(s__52268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52270),null);
}
} else {
var n = cljs.core.first(s__52268__$2);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1);
var select = ((function (selected_QMARK_,n,s__52268__$2,temp__5735__auto__,map__52260,map__52260__$1,i__$1,kvs__$1,vec__52261,label,content,tab_panel_id,label_id,prev_QMARK_,next_QMARK_,init52241,state__$1,next_slide,prev_slide,with_let52240,map__52213,map__52213__$1,state,kvs,i,map__52214,map__52214__$1,opts,aria_label,aria_labelledby){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(selected_QMARK_,n,s__52268__$2,temp__5735__auto__,map__52260,map__52260__$1,i__$1,kvs__$1,vec__52261,label,content,tab_panel_id,label_id,prev_QMARK_,next_QMARK_,init52241,state__$1,next_slide,prev_slide,with_let52240,map__52213,map__52213__$1,state,kvs,i,map__52214,map__52214__$1,opts,aria_label,aria_labelledby))
;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.slide-picker__dot","span.slide-picker__dot",75672836),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),tab_panel_id,new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),selected_QMARK_,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((selected_QMARK_)?"0":"-1"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),select], null)], null),recap$widgets$carousel$carousel_$_iter__52267(cljs.core.rest(s__52268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(kvs__$1)));
})())], null):null),content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.carousel__select","button.carousel__select",-617636703),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["View slide number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i__$1 + (1)))].join(''),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((next_QMARK_)?"0":"-1"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((next_QMARK_)?next_slide:null)], null)], null)], null);
})();

return res__47352__auto__;
});

//# sourceMappingURL=recap.widgets.carousel.js.map
