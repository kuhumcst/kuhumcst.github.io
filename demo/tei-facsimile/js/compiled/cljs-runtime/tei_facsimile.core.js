goog.provide('tei_facsimile.core');
tei_facsimile.core.prefix = "tei";
tei_facsimile.core.tei_css = rescope.style.prefix_css(tei_facsimile.core.prefix,"/* Hide all TEI metadata. */\nteiHeader, facsimile, [type=notes] {\n    display: none;\n}\n\n/* HTML div. */\ndiv {\n    display: block;\n}\n\n/* HTML address. */\naddrLine {\n  display: block;\n  font-style: italic;\n}\n\n/* HTML p. */\np, opener, closer, postscript {\n    display: block;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n/* HTML hr. */\npb:not(:first-of-type) {\n  display: block;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: auto;\n  margin-right: auto;\n  border-style: inset;\n  border-width: 1px;\n}\n\n/* Marking incorrect spelling inline. */\nchoice > sic::after {\n    content: \" [sic] \";\n    font-style: italic;\n}\n\n/* Removing corrected spelling from text. */\nchoice > corr {\n    display: none;\n}\n\n/* Unclear text is clearly marked with a red underline. */\nunclear {\n    text-decoration: red wavy underline;\n}\n\n/* Gaps of missing content. */\ngap {\n    display: inline-block;\n    width: 10em; /* TODO: need a programmatic solution for the exact length. */\n    height: 1em;\n    background: lightgrey;\n}\n\ngap:not(:first-child) {\n    margin-left: 1em;\n}\n\ngap:not(:last-child) {\n    margin-right: 1em;\n}\n\n/* Additions are also distinguished from normal text. */\nadd {\n    font-weight: bold;\n    font-style: italic;\n}\n\nadd[place=above] {\n    vertical-align: super;\n    font-size: 70%;\n}\n\n/* Assuming letters are written on a typewriter. */\n[type=letter] {\n    font-family: Georgia, serif;\n}\n\n[rend=handwritten] {\n    font-family: cursive;\n}\n\n[rend=underline] {\n    text-decoration: underline;\n}\n");
tei_facsimile.core.recap_PLUS_tei_css = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(recap.css.shadow_style),"\n\n/*\n\t === tei.css ===\n*/\n",tei_facsimile.core.tei_css].join('');
tei_facsimile.core.da_type = (function tei_facsimile$core$da_type(type){
var type__GT_s = new cljs.core.PersistentArrayMap(null, 7, ["conference","denne konference","org","denne organisation","pers","denne person","place","dette sted","publ","denne publikation","receiver","denne modtager","sender","denne afsender"], null);
return ["Vis mere om ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((type__GT_s.cljs$core$IFn$_invoke$arity$2 ? type__GT_s.cljs$core$IFn$_invoke$arity$2(type,"dette") : type__GT_s.call(null,type,"dette")))].join('');
});
tei_facsimile.core.list_as_ul = cuphic.core.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Symbol(null,"+items","+items",311055057,null)], null),new cljs.core.Keyword(null,"to","to",192099007),(function (p__53876){
var map__53877 = p__53876;
var map__53877__$1 = (((((!((map__53877 == null))))?(((((map__53877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53877):map__53877);
var _PLUS_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Symbol(null,"+items","+items",311055057,null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__4529__auto__ = (function tei_facsimile$core$iter__53879(s__53880){
return (new cljs.core.LazySeq(null,(function (){
var s__53880__$1 = s__53880;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53880__$1);
if(temp__5735__auto__){
var s__53880__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53880__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53880__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53882 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53881 = (0);
while(true){
if((i__53881 < size__4528__auto__)){
var vec__53883 = cljs.core._nth(c__4527__auto__,i__53881);
var seq__53884 = cljs.core.seq(vec__53883);
var first__53885 = cljs.core.first(seq__53884);
var seq__53884__$1 = cljs.core.next(seq__53884);
var tag = first__53885;
var first__53885__$1 = cljs.core.first(seq__53884__$1);
var seq__53884__$2 = cljs.core.next(seq__53884__$1);
var attr = first__53885__$1;
var content = seq__53884__$2;
cljs.core.chunk_append(b__53882,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),content));

var G__53924 = (i__53881 + (1));
i__53881 = G__53924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53882),tei_facsimile$core$iter__53879(cljs.core.chunk_rest(s__53880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53882),null);
}
} else {
var vec__53886 = cljs.core.first(s__53880__$2);
var seq__53887 = cljs.core.seq(vec__53886);
var first__53888 = cljs.core.first(seq__53887);
var seq__53887__$1 = cljs.core.next(seq__53887);
var tag = first__53888;
var first__53888__$1 = cljs.core.first(seq__53887__$1);
var seq__53887__$2 = cljs.core.next(seq__53887__$1);
var attr = first__53888__$1;
var content = seq__53887__$2;
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),content),tei_facsimile$core$iter__53879(cljs.core.rest(s__53880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(_PLUS_items);
})());
})], 0));
tei_facsimile.core.ref_as_anchor = cuphic.core.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?","?",-62633706,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"?ref","?ref",-1971763450,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"to","to",192099007),(function (p__53889){
var map__53890 = p__53889;
var map__53890__$1 = (((((!((map__53890 == null))))?(((((map__53890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53890):map__53890);
var _QMARK_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53890__$1,new cljs.core.Symbol(null,"?ref","?ref",-1971763450,null));
var _QMARK_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53890__$1,new cljs.core.Symbol(null,"?type","?type",-1287409101,null));
if(cljs.core.truth_(_QMARK_ref)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),_QMARK_ref,new cljs.core.Keyword(null,"title","title",636505583),tei_facsimile.core.da_type(_QMARK_type)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot","slot",240229571)], null)], null);
} else {
return null;
}
})], 0));
tei_facsimile.core.default_fn = rescope.helpers.default_fn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),"tei",new cljs.core.Keyword(null,"attr-kmap","attr-kmap",807970155),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xml:lang","xml:lang",-1485113568),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"xml:id","xml:id",-1782592788),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null));
tei_facsimile.core.custom_wrapper = (function tei_facsimile$core$custom_wrapper(old_node,new_node){
var styled_slide = cljs.core.constantly(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),tei_facsimile.core.recap_PLUS_tei_css], null),new_node], null));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(old_node,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1289896967),rescope.core.shadow_ref(styled_slide));
});
tei_facsimile.core.internal_stage = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tei_facsimile.core.ref_as_anchor,tei_facsimile.core.list_as_ul], null),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),tei_facsimile.core.custom_wrapper,new cljs.core.Keyword(null,"default","default",-1987822328),tei_facsimile.core.default_fn], null);
tei_facsimile.core.carousel_pbs = cuphic.core.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pb","pb",-1523127746)], null),new cljs.core.Symbol(null,"+","+",-740910886,null)], null)], null),new cljs.core.Keyword(null,"to","to",192099007),(function (p__53894){
var map__53895 = p__53894;
var map__53895__$1 = (((((!((map__53895 == null))))?(((((map__53895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53895):map__53895);
var bindings = map__53895__$1;
var _LT__GT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53895__$1,new cljs.core.Symbol(null,"<>","<>",-1374249383,null));
var map__53897 = cljs.core.meta(_LT__GT_);
var map__53897__$1 = (((((!((map__53897 == null))))?(((((map__53897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53897):map__53897);
var begin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53897__$1,new cljs.core.Keyword(null,"begin","begin",-319034319));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53897__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(bindings));
var pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.concat),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__53892_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pb","pb",-1523127746),cljs.core.first(p1__53892_SHARP_));
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(source,begin,end))));
var pp = cljs.core.count(pages);
var kvs = (function (){var iter__4529__auto__ = (function tei_facsimile$core$iter__53899(s__53900){
return (new cljs.core.LazySeq(null,(function (){
var s__53900__$1 = s__53900;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53900__$1);
if(temp__5735__auto__){
var s__53900__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53900__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53900__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53902 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53901 = (0);
while(true){
if((i__53901 < size__4528__auto__)){
var vec__53903 = cljs.core._nth(c__4527__auto__,i__53901);
var vec__53906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53903,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53906,(0),null);
var map__53909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53906,(1),null);
var map__53909__$1 = (((((!((map__53909 == null))))?(((((map__53909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53909):map__53909);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53909__$1,new cljs.core.Keyword(null,"n","n",562130025));
var facs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53909__$1,new cljs.core.Keyword(null,"facs","facs",-1414240612));
var page = vec__53903;
cljs.core.chunk_append(b__53902,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Side ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," af ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pp),"; facs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(facs),"."].join(''),page], null));

var G__53925 = (i__53901 + (1));
i__53901 = G__53925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53902),tei_facsimile$core$iter__53899(cljs.core.chunk_rest(s__53900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53902),null);
}
} else {
var vec__53911 = cljs.core.first(s__53900__$2);
var vec__53914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53911,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53914,(0),null);
var map__53917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53914,(1),null);
var map__53917__$1 = (((((!((map__53917 == null))))?(((((map__53917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53917):map__53917);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"n","n",562130025));
var facs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"facs","facs",-1414240612));
var page = vec__53911;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Side ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," af ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pp),"; facs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(facs),"."].join(''),page], null),tei_facsimile$core$iter__53899(cljs.core.rest(s__53900__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(pages);
})();
var rewrite_kv = (function (p__53919){
var vec__53920 = p__53919;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53920,(1),null);
var rewrite = (function (p1__53893_SHARP_){
return cuphic.core.rewrite(p1__53893_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tei_facsimile.core.internal_stage], null));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite,v))], null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cuphic.core.rewrite,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(source,(0),begin),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tei_facsimile.core.internal_stage], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [recap.widgets.carousel.carousel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"kvs","kvs",958455492),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_kv,kvs)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Facsimile"], null)], null)], null);
})], 0));
tei_facsimile.core.all_stages = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tei_facsimile.core.ref_as_anchor,tei_facsimile.core.list_as_ul,tei_facsimile.core.carousel_pbs], null),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),tei_facsimile.core.custom_wrapper,new cljs.core.Keyword(null,"default","default",-1987822328),tei_facsimile.core.default_fn], null)], null);
tei_facsimile.core.rewrite = cljs.core.memoize((function (p1__53923_SHARP_){
return cuphic.core.rewrite(p1__53923_SHARP_,tei_facsimile.core.all_stages);
}));
tei_facsimile.core.parse = cljs.core.memoize(rescope.formats.xml.parse);
/**
 * Parse, postprocess, and display TEI.
 */
tei_facsimile.core.tei_xml = (function tei_facsimile$core$tei_xml(xml){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rescope.core.scope,tei_facsimile.core.rewrite(tei_facsimile.core.parse(xml)),tei_facsimile.core.tei_css], null);
});

//# sourceMappingURL=tei_facsimile.core.js.map
