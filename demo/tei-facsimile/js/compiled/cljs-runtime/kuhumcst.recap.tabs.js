goog.provide('kuhumcst.recap.tabs');
goog.require('cljs.core');
goog.require('kuhumcst.recap.drag');
goog.require('kuhumcst.recap.util');
kuhumcst.recap.tabs.mk_drag_state = (function kuhumcst$recap$tabs$mk_drag_state(p__46652,n,tab){
var map__46653 = p__46652;
var map__46653__$1 = (((((!((map__46653 == null))))?(((((map__46653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46653):map__46653);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46653__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46653__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),kuhumcst.recap.util.vec_dissoc(tabs,n),new cljs.core.Keyword(null,"i","i",-1386841315),(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tab)))?(0):(((n < i))?(i - (1)):i
))], null);
});
kuhumcst.recap.tabs.mk_drop_state = (function kuhumcst$recap$tabs$mk_drop_state(p__46672,n,tab){
var map__46677 = p__46672;
var map__46677__$1 = (((((!((map__46677 == null))))?(((((map__46677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46677):map__46677);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46677__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46677__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),kuhumcst.recap.util.vec_assoc(tabs,n,tab),new cljs.core.Keyword(null,"i","i",-1386841315),(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tab)))?n:(((n <= i))?(i + (1)):i
))], null);
});
kuhumcst.recap.tabs.mk_tab_id = (function kuhumcst$recap$tabs$mk_tab_id(tab_list_id,n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_list_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
});
/**
 * The tabs available in the `state`.
 */
kuhumcst.recap.tabs.tab_list = (function kuhumcst$recap$tabs$tab_list(state,p__46715){
var map__46716 = p__46715;
var map__46716__$1 = (((((!((map__46716 == null))))?(((((map__46716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46716):map__46716);
var opts = map__46716__$1;
var tab_list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46716__$1,new cljs.core.Keyword(null,"tab-list-id","tab-list-id",-612640109));
var map__46726 = cljs.core.deref(state);
var map__46726__$1 = (((((!((map__46726 == null))))?(((((map__46726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46726):map__46726);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46726__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46726__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
var append = (function (tab){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_list_id,new cljs.core.Keyword(null,"tab-list-id","tab-list-id",-612640109).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tab)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kuhumcst.recap.tabs.mk_drop_state,(cljs.core.count(tabs) - (1)),tab);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kuhumcst.recap.tabs.mk_drop_state,cljs.core.count(tabs),tab);
}
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-list","div.tab-list",-1713189330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),tab_list_id,new cljs.core.Keyword(null,"role","role",-736691072),"tab-list"], null),(function (){var iter__4582__auto__ = (function kuhumcst$recap$tabs$tab_list_$_iter__46746(s__46747){
return (new cljs.core.LazySeq(null,(function (){
var s__46747__$1 = s__46747;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46747__$1);
if(temp__5735__auto__){
var s__46747__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46747__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__46747__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__46749 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__46748 = (0);
while(true){
if((i__46748 < size__4581__auto__)){
var n = cljs.core._nth(c__4580__auto__,i__46748);
var vec__46765 = cljs.core.with_meta(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tabs,n),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tab-list-id","tab-list-id",-612640109),tab_list_id,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i)], null));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46765,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46765,(1),null);
var tab = vec__46765;
var id = kuhumcst.recap.tabs.mk_tab_id(tab_list_id,n);
var delete$ = ((function (i__46748,vec__46765,k,_,tab,id,n,c__4580__auto__,size__4581__auto__,b__46749,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kuhumcst.recap.tabs.mk_drag_state,n,tab);

return tab;
});})(i__46748,vec__46765,k,_,tab,id,n,c__4580__auto__,size__4581__auto__,b__46749,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id))
;
var insert = ((function (i__46748,vec__46765,k,_,tab,id,delete$,n,c__4580__auto__,size__4581__auto__,b__46749,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id){
return (function (tab__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kuhumcst.recap.tabs.mk_drop_state,n,tab__$1);
});})(i__46748,vec__46765,k,_,tab,id,delete$,n,c__4580__auto__,size__4581__auto__,b__46749,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id))
;
var select = ((function (i__46748,vec__46765,k,_,tab,id,delete$,insert,n,c__4580__auto__,size__4581__auto__,b__46749,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(i__46748,vec__46765,k,_,tab,id,delete$,insert,n,c__4580__auto__,size__4581__auto__,b__46749,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id))
;
cljs.core.chunk_append(b__46749,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab","span.tab",330510028),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kuhumcst.recap.util.tab_attr(select),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabs,i,n], null)),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tab)),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),kuhumcst.recap.drag.on_drag_start(delete$),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),kuhumcst.recap.drag.on_drag_over(),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),kuhumcst.recap.drag.on_drop(insert)], null)], 0)),k], null));

var G__46942 = (i__46748 + (1));
i__46748 = G__46942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46749),kuhumcst$recap$tabs$tab_list_$_iter__46746(cljs.core.chunk_rest(s__46747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46749),null);
}
} else {
var n = cljs.core.first(s__46747__$2);
var vec__46789 = cljs.core.with_meta(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tabs,n),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tab-list-id","tab-list-id",-612640109),tab_list_id,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i)], null));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(1),null);
var tab = vec__46789;
var id = kuhumcst.recap.tabs.mk_tab_id(tab_list_id,n);
var delete$ = ((function (vec__46789,k,_,tab,id,n,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kuhumcst.recap.tabs.mk_drag_state,n,tab);

return tab;
});})(vec__46789,k,_,tab,id,n,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id))
;
var insert = ((function (vec__46789,k,_,tab,id,delete$,n,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id){
return (function (tab__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kuhumcst.recap.tabs.mk_drop_state,n,tab__$1);
});})(vec__46789,k,_,tab,id,delete$,n,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id))
;
var select = ((function (vec__46789,k,_,tab,id,delete$,insert,n,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(vec__46789,k,_,tab,id,delete$,insert,n,s__46747__$2,temp__5735__auto__,map__46726,map__46726__$1,tabs,i,append,map__46716,map__46716__$1,opts,tab_list_id))
;
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab","span.tab",330510028),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kuhumcst.recap.util.tab_attr(select),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabs,i,n], null)),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tab)),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),kuhumcst.recap.drag.on_drag_start(delete$),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),kuhumcst.recap.drag.on_drag_over(),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),kuhumcst.recap.drag.on_drop(insert)], null)], 0)),k], null),kuhumcst$recap$tabs$tab_list_$_iter__46746(cljs.core.rest(s__46747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tabs)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-list__spacer","span.tab-list__spacer",-260105132),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),kuhumcst.recap.drag.on_drag_over(),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),kuhumcst.recap.drag.on_drop(append)], null)], null)], null);
});
/**
 * The currently selected tab-panel of the `state`.
 */
kuhumcst.recap.tabs.tab_panel = (function kuhumcst$recap$tabs$tab_panel(state,p__46808){
var map__46809 = p__46808;
var map__46809__$1 = (((((!((map__46809 == null))))?(((((map__46809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46809):map__46809);
var opts = map__46809__$1;
var tab_list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46809__$1,new cljs.core.Keyword(null,"tab-list-id","tab-list-id",-612640109));
var map__46812 = cljs.core.deref(state);
var map__46812__$1 = (((((!((map__46812 == null))))?(((((map__46812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46812):map__46812);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46812__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46812__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
var vec__46814 = (cljs.core.truth_(cljs.core.not_empty(tabs))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tabs,i):null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814,(1),null);
var tab_id = kuhumcst.recap.tabs.mk_tab_id(tab_list_id,i);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.tab-panel","section.tab-panel",561093350),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),tab_id], null),v], null);
});
/**
 * A merged view of the tab-list and the tab-panel of the currently selected tab.
 *   Takes `state` of the form described in the docstring of this namespace.
 */
kuhumcst.recap.tabs.tabs = (function kuhumcst$recap$tabs$tabs(state,p__46831){
var map__46832 = p__46831;
var map__46832__$1 = (((((!((map__46832 == null))))?(((((map__46832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46832):map__46832);
var opts = map__46832__$1;
var tab_list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46832__$1,new cljs.core.Keyword(null,"tab-list-id","tab-list-id",-612640109));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.tabs","article.tabs",1086188119),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kuhumcst.recap.tabs.tab_list,state,opts], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kuhumcst.recap.tabs.tab_panel,state,opts], null)], null);
});

//# sourceMappingURL=kuhumcst.recap.tabs.js.map
