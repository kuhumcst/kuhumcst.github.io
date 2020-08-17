goog.provide('recap.widgets.tabs');
recap.widgets.tabs.mk_drag_state = (function recap$widgets$tabs$mk_drag_state(p__52208,n){
var map__52209 = p__52208;
var map__52209__$1 = (((((!((map__52209 == null))))?(((((map__52209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52209):map__52209);
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52209__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52209__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kvs","kvs",958455492),recap.util.vec_dissoc(kvs,n),new cljs.core.Keyword(null,"i","i",-1386841315),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i))?(function (){var x__4217__auto__ = i;
var y__4218__auto__ = (cljs.core.count(kvs) - (2));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})():(((n < i))?(i - (1)):(((n > i))?i:null)))], null);
});
recap.widgets.tabs.mk_drop_state = (function recap$widgets$tabs$mk_drop_state(p__52245,n,kv){
var map__52246 = p__52245;
var map__52246__$1 = (((((!((map__52246 == null))))?(((((map__52246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52246):map__52246);
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52246__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52246__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kvs","kvs",958455492),recap.util.vec_assoc(kvs,n,kv),new cljs.core.Keyword(null,"i","i",-1386841315),(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)))?n:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i))?(i + (1)):(((n < i))?(i + (1)):(((n > i))?(function (){var x__4214__auto__ = (0);
var y__4215__auto__ = i;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():null))))], null);
});
recap.widgets.tabs.mk_tab_id = (function recap$widgets$tabs$mk_tab_id(parent_id,n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
});
recap.widgets.tabs.mk_tab_panel_id = (function recap$widgets$tabs$mk_tab_panel_id(parent_id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-tabpanel"].join('');
});
/**
 * Apply heterogeneous styling to tab `kvs`.
 */
recap.widgets.tabs.heterostyled = (function recap$widgets$tabs$heterostyled(kvs){
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
recap.widgets.tabs.tab_list = (function recap$widgets$tabs$tab_list(p__52278,p__52279){
var map__52280 = p__52278;
var map__52280__$1 = (((((!((map__52280 == null))))?(((((map__52280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52280):map__52280);
var state = map__52280__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52280__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52280__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__52281 = p__52279;
var map__52281__$1 = (((((!((map__52281 == null))))?(((((map__52281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52281):map__52281);
var opts = map__52281__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52281__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
recap.state.assert_valid(state,new cljs.core.Keyword("recap.state","kvs+i","recap.state/kvs+i",1073629360));

var map__52297 = cljs.core.deref(state);
var map__52297__$1 = (((((!((map__52297 == null))))?(((((map__52297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52297):map__52297);
var kvs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52297__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
var length = cljs.core.count(kvs__$1);
var append = (function (kv){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,recap.widgets.tabs.mk_drop_state,(length - (1)),kv);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,recap.widgets.tabs.mk_drop_state,length,kv);
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-list","div.tab-list",-1713189330),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"role","role",-736691072),"tablist",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Choose a tab to display",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),recap.dom.keyboard.roving_tabindex_handler,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),recap.dom.drag.on_drag_enter(),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),recap.dom.drag.on_drag_over(),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),recap.dom.drag.on_drag_leave(),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),recap.dom.drag.on_drop(append)], null),(function (){var iter__4529__auto__ = (function recap$widgets$tabs$tab_list_$_iter__52300(s__52301){
return (new cljs.core.LazySeq(null,(function (){
var s__52301__$1 = s__52301;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52301__$1);
if(temp__5735__auto__){
var s__52301__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52301__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52301__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52303 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52302 = (0);
while(true){
if((i__52302 < size__4528__auto__)){
var n = cljs.core._nth(c__4527__auto__,i__52302);
var vec__52326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,n);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52326,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52326,(1),null);
var kv = vec__52326;
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1);
var tab_id = recap.widgets.tabs.mk_tab_id(id,n);
var delete$ = ((function (i__52302,vec__52326,k,_,kv,selected_QMARK_,tab_id,n,c__4527__auto__,size__4528__auto__,b__52303,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,recap.widgets.tabs.mk_drag_state,n);

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(kv,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_);
});})(i__52302,vec__52326,k,_,kv,selected_QMARK_,tab_id,n,c__4527__auto__,size__4528__auto__,b__52303,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id))
;
var insert = ((function (i__52302,vec__52326,k,_,kv,selected_QMARK_,tab_id,delete$,n,c__4527__auto__,size__4528__auto__,b__52303,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id){
return (function (kv__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,recap.widgets.tabs.mk_drop_state,n,kv__$1);
});})(i__52302,vec__52326,k,_,kv,selected_QMARK_,tab_id,delete$,n,c__4527__auto__,size__4528__auto__,b__52303,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id))
;
var select = ((function (i__52302,vec__52326,k,_,kv,selected_QMARK_,tab_id,delete$,insert,n,c__4527__auto__,size__4528__auto__,b__52303,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(i__52302,vec__52326,k,_,kv,selected_QMARK_,tab_id,delete$,insert,n,c__4527__auto__,size__4528__auto__,b__52303,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id))
;
cljs.core.chunk_append(b__52303,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab","span.tab",330510028),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671)],["tab",((selected_QMARK_)?"0":"-1"),cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs__$1,i__$1,n], null)),recap.dom.focus.accept_BANG_,recap.dom.drag.on_drop(insert),recap.widgets.tabs.mk_tab_panel_id(id),select,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)),recap.dom.drag.on_drag_leave(),recap.dom.drag.on_drag_start(delete$),true,tab_id,recap.dom.drag.on_drag_enter(),selected_QMARK_,recap.dom.drag.on_drag_over(),["View tab number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((n + (1)))].join(''),selected_QMARK_,recap.dom.drag.on_drag_end()]),k], null));

var G__52510 = (i__52302 + (1));
i__52302 = G__52510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52303),recap$widgets$tabs$tab_list_$_iter__52300(cljs.core.chunk_rest(s__52301__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52303),null);
}
} else {
var n = cljs.core.first(s__52301__$2);
var vec__52358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,n);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52358,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52358,(1),null);
var kv = vec__52358;
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1);
var tab_id = recap.widgets.tabs.mk_tab_id(id,n);
var delete$ = ((function (vec__52358,k,_,kv,selected_QMARK_,tab_id,n,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,recap.widgets.tabs.mk_drag_state,n);

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(kv,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_);
});})(vec__52358,k,_,kv,selected_QMARK_,tab_id,n,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id))
;
var insert = ((function (vec__52358,k,_,kv,selected_QMARK_,tab_id,delete$,n,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id){
return (function (kv__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,recap.widgets.tabs.mk_drop_state,n,kv__$1);
});})(vec__52358,k,_,kv,selected_QMARK_,tab_id,delete$,n,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id))
;
var select = ((function (vec__52358,k,_,kv,selected_QMARK_,tab_id,delete$,insert,n,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(vec__52358,k,_,kv,selected_QMARK_,tab_id,delete$,insert,n,s__52301__$2,temp__5735__auto__,map__52297,map__52297__$1,kvs__$1,i__$1,length,append,map__52280,map__52280__$1,state,kvs,i,map__52281,map__52281__$1,opts,id))
;
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab","span.tab",330510028),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671)],["tab",((selected_QMARK_)?"0":"-1"),cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs__$1,i__$1,n], null)),recap.dom.focus.accept_BANG_,recap.dom.drag.on_drop(insert),recap.widgets.tabs.mk_tab_panel_id(id),select,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)),recap.dom.drag.on_drag_leave(),recap.dom.drag.on_drag_start(delete$),true,tab_id,recap.dom.drag.on_drag_enter(),selected_QMARK_,recap.dom.drag.on_drag_over(),["View tab number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((n + (1)))].join(''),selected_QMARK_,recap.dom.drag.on_drag_end()]),k], null),recap$widgets$tabs$tab_list_$_iter__52300(cljs.core.rest(s__52301__$2)));
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
recap.widgets.tabs.tab_panel = (function recap$widgets$tabs$tab_panel(p__52410,p__52411){
var map__52412 = p__52410;
var map__52412__$1 = (((((!((map__52412 == null))))?(((((map__52412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52412):map__52412);
var state = map__52412__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52412__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52412__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__52413 = p__52411;
var map__52413__$1 = (((((!((map__52413 == null))))?(((((map__52413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52413):map__52413);
var opts = map__52413__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52413__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
recap.state.assert_valid(state,new cljs.core.Keyword("recap.state","kvs+i","recap.state/kvs+i",1073629360));

var map__52421 = cljs.core.deref(state);
var map__52421__$1 = (((((!((map__52421 == null))))?(((((map__52421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52421):map__52421);
var kvs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52421__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52421__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
var vec__52422 = (cljs.core.truth_(cljs.core.not_empty(kvs__$1))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,i__$1):null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52422,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52422,(1),null);
var kv = vec__52422;
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.tab-panel","section.tab-panel",561093350),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),"tabpanel",new cljs.core.Keyword(null,"id","id",-1388402092),recap.widgets.tabs.mk_tab_panel_id(id),new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),recap.widgets.tabs.mk_tab_id(id,i__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv))], null),v], null);
} else {
return null;
}
});
/**
 * Merged view of the tab-list and the tab-panel of the currently selected tab.
 *   Takes `state` of the form described in the docstring of this namespace.
 */
recap.widgets.tabs.tabs = (function recap$widgets$tabs$tabs(p__52444,p__52445){
var map__52449 = p__52444;
var map__52449__$1 = (((((!((map__52449 == null))))?(((((map__52449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52449):map__52449);
var state = map__52449__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52449__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52449__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__52450 = p__52445;
var map__52450__$1 = (((((!((map__52450 == null))))?(((((map__52450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52450):map__52450);
var opts = map__52450__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.tabs","article.tabs",1086188119),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [recap.widgets.tabs.tab_list,state,opts], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [recap.widgets.tabs.tab_panel,state,opts], null)], null);
});

//# sourceMappingURL=recap.widgets.tabs.js.map
