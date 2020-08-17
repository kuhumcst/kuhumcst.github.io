goog.provide('kuhumcst.recap.widgets.tabs');
kuhumcst.recap.widgets.tabs.mk_drag_state = (function kuhumcst$recap$widgets$tabs$mk_drag_state(p__52515,n){
var map__52516 = p__52515;
var map__52516__$1 = (((((!((map__52516 == null))))?(((((map__52516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52516):map__52516);
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52516__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52516__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kvs","kvs",958455492),kuhumcst.recap.util.vec_dissoc(kvs,n),new cljs.core.Keyword(null,"i","i",-1386841315),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i))?(function (){var x__4217__auto__ = i;
var y__4218__auto__ = (cljs.core.count(kvs) - (2));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})():(((n < i))?(i - (1)):(((n > i))?i:null)))], null);
});
kuhumcst.recap.widgets.tabs.mk_drop_state = (function kuhumcst$recap$widgets$tabs$mk_drop_state(p__52522,n,kv){
var map__52523 = p__52522;
var map__52523__$1 = (((((!((map__52523 == null))))?(((((map__52523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52523):map__52523);
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52523__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52523__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kvs","kvs",958455492),kuhumcst.recap.util.vec_assoc(kvs,n,kv),new cljs.core.Keyword(null,"i","i",-1386841315),(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)))?n:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i))?(i + (1)):(((n < i))?(i + (1)):(((n > i))?(function (){var x__4214__auto__ = (0);
var y__4215__auto__ = i;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():null))))], null);
});
kuhumcst.recap.widgets.tabs.mk_tab_id = (function kuhumcst$recap$widgets$tabs$mk_tab_id(parent_id,n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
});
/**
 * Apply heterogeneous styling to tab `kvs`.
 */
kuhumcst.recap.widgets.tabs.heterostyled = (function kuhumcst$recap$widgets$tabs$heterostyled(kvs){
var backgrounds = cljs.core.cycle(cljs.core.shuffle(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["var(--tab-background-1)","var(--tab-background-2)","var(--tab-background-3)","var(--tab-background-4)","var(--tab-background-5)","var(--tab-background-6)"], null)));
var mk_style = (function (m,n){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(backgrounds,n)], null));
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(kvs),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (n,kv){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(kv,mk_style,n);
}),kvs));
});
/**
 * The tabs available in the `state`.
 */
kuhumcst.recap.widgets.tabs.tab_list = (function kuhumcst$recap$widgets$tabs$tab_list(p__52530,p__52531){
var map__52532 = p__52530;
var map__52532__$1 = (((((!((map__52532 == null))))?(((((map__52532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52532):map__52532);
var state = map__52532__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52532__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52532__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__52533 = p__52531;
var map__52533__$1 = (((((!((map__52533 == null))))?(((((map__52533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52533):map__52533);
var opts = map__52533__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52533__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
kuhumcst.recap.state.assert_valid(state,new cljs.core.Keyword("kuhumcst.recap.state","kvs+i","kuhumcst.recap.state/kvs+i",13151152));

var map__52538 = cljs.core.deref(state);
var map__52538__$1 = (((((!((map__52538 == null))))?(((((map__52538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52538):map__52538);
var kvs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52538__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52538__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
var length = cljs.core.count(kvs__$1);
var append = (function (kv){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kuhumcst.recap.widgets.tabs.mk_drop_state,(length - (1)),kv);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kuhumcst.recap.widgets.tabs.mk_drop_state,length,kv);
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-list","div.tab-list",-1713189330),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"role","role",-736691072),"tablist",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),kuhumcst.recap.dom.keyboard.roving_tabindex_handler,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),kuhumcst.recap.dom.drag.on_drag_enter(),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),kuhumcst.recap.dom.drag.on_drag_over(),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),kuhumcst.recap.dom.drag.on_drag_leave(),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),kuhumcst.recap.dom.drag.on_drop(append)], null),(function (){var iter__4529__auto__ = (function kuhumcst$recap$widgets$tabs$tab_list_$_iter__52541(s__52542){
return (new cljs.core.LazySeq(null,(function (){
var s__52542__$1 = s__52542;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52542__$1);
if(temp__5735__auto__){
var s__52542__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52542__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52542__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52544 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52543 = (0);
while(true){
if((i__52543 < size__4528__auto__)){
var n = cljs.core._nth(c__4527__auto__,i__52543);
var vec__52545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,n);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52545,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52545,(1),null);
var kv = vec__52545;
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1);
var tab_id = kuhumcst.recap.widgets.tabs.mk_tab_id(id,n);
var delete$ = ((function (i__52543,vec__52545,k,_,kv,selected_QMARK_,tab_id,n,c__4527__auto__,size__4528__auto__,b__52544,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,kuhumcst.recap.widgets.tabs.mk_drag_state,n);

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(kv,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_);
});})(i__52543,vec__52545,k,_,kv,selected_QMARK_,tab_id,n,c__4527__auto__,size__4528__auto__,b__52544,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id))
;
var insert = ((function (i__52543,vec__52545,k,_,kv,selected_QMARK_,tab_id,delete$,n,c__4527__auto__,size__4528__auto__,b__52544,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id){
return (function (kv__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kuhumcst.recap.widgets.tabs.mk_drop_state,n,kv__$1);
});})(i__52543,vec__52545,k,_,kv,selected_QMARK_,tab_id,delete$,n,c__4527__auto__,size__4528__auto__,b__52544,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id))
;
var select = ((function (i__52543,vec__52545,k,_,kv,selected_QMARK_,tab_id,delete$,insert,n,c__4527__auto__,size__4528__auto__,b__52544,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(i__52543,vec__52545,k,_,kv,selected_QMARK_,tab_id,delete$,insert,n,c__4527__auto__,size__4528__auto__,b__52544,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id))
;
cljs.core.chunk_append(b__52544,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab","span.tab",330510028),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671)],["tab",((selected_QMARK_)?"0":"-1"),cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs__$1,i__$1,n], null)),kuhumcst.recap.dom.focus.accept_BANG_,kuhumcst.recap.dom.drag.on_drop(insert),select,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)),kuhumcst.recap.dom.drag.on_drag_leave(),kuhumcst.recap.dom.drag.on_drag_start(delete$),true,tab_id,kuhumcst.recap.dom.drag.on_drag_enter(),selected_QMARK_,kuhumcst.recap.dom.drag.on_drag_over(),selected_QMARK_,kuhumcst.recap.dom.drag.on_drag_end()]),k], null));

var G__52626 = (i__52543 + (1));
i__52543 = G__52626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52544),kuhumcst$recap$widgets$tabs$tab_list_$_iter__52541(cljs.core.chunk_rest(s__52542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52544),null);
}
} else {
var n = cljs.core.first(s__52542__$2);
var vec__52551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,n);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52551,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52551,(1),null);
var kv = vec__52551;
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1);
var tab_id = kuhumcst.recap.widgets.tabs.mk_tab_id(id,n);
var delete$ = ((function (vec__52551,k,_,kv,selected_QMARK_,tab_id,n,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,kuhumcst.recap.widgets.tabs.mk_drag_state,n);

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(kv,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_);
});})(vec__52551,k,_,kv,selected_QMARK_,tab_id,n,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id))
;
var insert = ((function (vec__52551,k,_,kv,selected_QMARK_,tab_id,delete$,n,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id){
return (function (kv__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kuhumcst.recap.widgets.tabs.mk_drop_state,n,kv__$1);
});})(vec__52551,k,_,kv,selected_QMARK_,tab_id,delete$,n,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id))
;
var select = ((function (vec__52551,k,_,kv,selected_QMARK_,tab_id,delete$,insert,n,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(vec__52551,k,_,kv,selected_QMARK_,tab_id,delete$,insert,n,s__52542__$2,temp__5735__auto__,map__52538,map__52538__$1,kvs__$1,i__$1,length,append,map__52532,map__52532__$1,state,kvs,i,map__52533,map__52533__$1,opts,id))
;
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab","span.tab",330510028),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671)],["tab",((selected_QMARK_)?"0":"-1"),cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs__$1,i__$1,n], null)),kuhumcst.recap.dom.focus.accept_BANG_,kuhumcst.recap.dom.drag.on_drop(insert),select,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)),kuhumcst.recap.dom.drag.on_drag_leave(),kuhumcst.recap.dom.drag.on_drag_start(delete$),true,tab_id,kuhumcst.recap.dom.drag.on_drag_enter(),selected_QMARK_,kuhumcst.recap.dom.drag.on_drag_over(),selected_QMARK_,kuhumcst.recap.dom.drag.on_drag_end()]),k], null),kuhumcst$recap$widgets$tabs$tab_list_$_iter__52541(cljs.core.rest(s__52542__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(length));
})()], null);
});
/**
 * The currently selected tab-panel of the `state`.
 */
kuhumcst.recap.widgets.tabs.tab_panel = (function kuhumcst$recap$widgets$tabs$tab_panel(p__52556,p__52557){
var map__52558 = p__52556;
var map__52558__$1 = (((((!((map__52558 == null))))?(((((map__52558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52558):map__52558);
var state = map__52558__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52558__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52558__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__52559 = p__52557;
var map__52559__$1 = (((((!((map__52559 == null))))?(((((map__52559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52559):map__52559);
var opts = map__52559__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52559__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
kuhumcst.recap.state.assert_valid(state,new cljs.core.Keyword("kuhumcst.recap.state","kvs+i","kuhumcst.recap.state/kvs+i",13151152));

var map__52564 = cljs.core.deref(state);
var map__52564__$1 = (((((!((map__52564 == null))))?(((((map__52564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52564):map__52564);
var kvs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52564__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52564__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
var vec__52565 = (cljs.core.truth_(cljs.core.not_empty(kvs__$1))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,i__$1):null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52565,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52565,(1),null);
var kv = vec__52565;
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.tab-panel","section.tab-panel",561093350),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"tabpanel",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),kuhumcst.recap.widgets.tabs.mk_tab_id(id,i__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv))], null),v], null);
} else {
return null;
}
});
/**
 * Merged view of the tab-list and the tab-panel of the currently selected tab.
 *   Takes `state` of the form described in the docstring of this namespace.
 */
kuhumcst.recap.widgets.tabs.tabs = (function kuhumcst$recap$widgets$tabs$tabs(p__52574,p__52575){
var map__52576 = p__52574;
var map__52576__$1 = (((((!((map__52576 == null))))?(((((map__52576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52576):map__52576);
var state = map__52576__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52576__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52576__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__52577 = p__52575;
var map__52577__$1 = (((((!((map__52577 == null))))?(((((map__52577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52577):map__52577);
var opts = map__52577__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52577__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.tabs","article.tabs",1086188119),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kuhumcst.recap.widgets.tabs.tab_list,state,opts], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kuhumcst.recap.widgets.tabs.tab_panel,state,opts], null)], null);
});

//# sourceMappingURL=kuhumcst.recap.widgets.tabs.js.map
