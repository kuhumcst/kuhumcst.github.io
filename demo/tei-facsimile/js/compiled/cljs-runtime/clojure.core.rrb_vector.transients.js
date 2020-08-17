goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_50929 = ret;
var shift_50930__$1 = shift;
while(true){
var arr_50935 = n_50929.arr;
var subidx_50936 = (((cnt - (1)) >> shift_50930__$1) & (31));
if((shift_50930__$1 === (5))){
(arr_50935[subidx_50936] = tail_node);
} else {
var child_50939 = (arr_50935[subidx_50936]);
if((child_50939 == null)){
(arr_50935[subidx_50936] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_50930__$1 - (5)),tail_node));
} else {
var editable_child_50945 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_50939);
(arr_50935[subidx_50936] = editable_child_50945);

var G__50947 = editable_child_50945;
var G__50948 = (shift_50930__$1 - (5));
n_50929 = G__50947;
shift_50930__$1 = G__50948;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__50833 = (shift - (5));
var G__50834 = ccnt;
var G__50835 = root_edit;
var G__50836 = child;
var G__50837 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__50833,G__50834,G__50835,G__50836,G__50837) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__50833,G__50834,G__50835,G__50836,G__50837));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_50960 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_50961 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_50960,data_50961);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__50851 = (shift - (5));
var G__50852 = cnt;
var G__50853 = root_edit;
var G__50854 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__50851,G__50852,G__50853,G__50854) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__50851,G__50852,G__50853,G__50854));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__50860 = (shift - (5));
var G__50861 = child_cnt;
var G__50863 = root_edit;
var G__50864 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__50860,G__50861,G__50863,G__50864) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__50860,G__50861,G__50863,G__50864));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_50983__$1 = shift;
var node_50984 = ret;
while(true){
if((shift_50983__$1 === (0))){
var arr_50986 = node_50984.arr;
(arr_50986[(i & (31))] = val);
} else {
var arr_50987 = node_50984.arr;
var subidx_50988 = ((i >> shift_50983__$1) & (31));
var child_50989 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_50987[subidx_50988]));
(arr_50987[subidx_50988] = child_50989);

var G__50992 = (shift_50983__$1 - (5));
var G__50993 = child_50989;
shift_50983__$1 = G__50992;
node_50984 = G__50993;
continue;
}
break;
}
} else {
var arr_50994 = ret.arr;
var rngs_50995 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_50996 = ((i >> shift) & (31));
var subidx_50997__$1 = (function (){var subidx_50997__$1 = subidx_50996;
while(true){
if((i < ((rngs_50995[subidx_50997__$1]) | (0)))){
return subidx_50997__$1;
} else {
var G__51009 = (subidx_50997__$1 + (1));
subidx_50997__$1 = G__51009;
continue;
}
break;
}
})();
var i_50998__$1 = (((subidx_50997__$1 === (0)))?i:(i - (rngs_50995[(subidx_50997__$1 - (1))])));
(arr_50994[subidx_50997__$1] = (function (){var G__50893 = (shift - (5));
var G__50894 = root_edit;
var G__50895 = (arr_50994[subidx_50997__$1]);
var G__50896 = i_50998__$1;
var G__50897 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__50893,G__50894,G__50895,G__50896,G__50897) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__50893,G__50894,G__50895,G__50896,G__50897));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
