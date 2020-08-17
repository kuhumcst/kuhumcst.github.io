goog.provide('kuhumcst.tei_facsimile.core');
kuhumcst.tei_facsimile.core.prefix = "tei";
kuhumcst.tei_facsimile.core.css = rescope.style.prefix_css(kuhumcst.tei_facsimile.core.prefix,"/* Hide all TEI metadata. */\nteiHeader, facsimile, [type=notes] {\n    display: none;\n}\n\n/* HTML div. */\ndiv {\n    display: block;\n}\n\n/* HTML address. */\naddrLine {\n  display: block;\n  font-style: italic;\n}\n\n/* HTML p. */\np, opener, closer, postscript {\n    display: block;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n/* HTML hr. */\npb:not(:first-of-type) {\n  display: block;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: auto;\n  margin-right: auto;\n  border-style: inset;\n  border-width: 1px;\n}\n\n/* Marking incorrect spelling inline. */\nchoice > sic::after {\n    content: \" [sic] \";\n    font-style: italic;\n}\n\n/* Removing corrected spelling from text. */\nchoice > corr {\n    display: none;\n}\n\n/* Unclear text is clearly marked with a red underline. */\nunclear {\n    text-decoration: red wavy underline;\n}\n\n/* Gaps of missing content. */\ngap {\n    display: inline-block;\n    width: 10em; /* TODO: need a programmatic solution for the exact length. */\n    height: 1em;\n    background: lightgrey;\n}\n\ngap:not(:first-child) {\n    margin-left: 1em;\n}\n\ngap:not(:last-child) {\n    margin-right: 1em;\n}\n\n/* Additions are also distinguished from normal text. */\nadd {\n    font-weight: bold;\n    font-style: italic;\n}\n\nadd[place=above] {\n    vertical-align: super;\n    font-size: 70%;\n}\n\n/* Assuming letters are written on a typewriter. */\n[type=letter] {\n    font-family: Georgia, serif;\n}\n\n[rend=handwritten] {\n    font-family: cursive;\n}\n\n[rend=underline] {\n    text-decoration: underline;\n}\n");
kuhumcst.tei_facsimile.core.da_type = (function kuhumcst$tei_facsimile$core$da_type(type){
var type__GT_s = new cljs.core.PersistentArrayMap(null, 7, ["conference","denne konference","org","denne organisation","pers","denne person","place","dette sted","publ","denne publikation","receiver","denne modtager","sender","denne afsender"], null);
return ["Vis mere om ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((type__GT_s.cljs$core$IFn$_invoke$arity$2 ? type__GT_s.cljs$core$IFn$_invoke$arity$2(type,"dette") : type__GT_s.call(null,type,"dette")))].join('');
});
kuhumcst.tei_facsimile.core.list_as_ul = cuphic.core.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Symbol(null,"+items","+items",311055057,null)], null),new cljs.core.Keyword(null,"to","to",192099007),(function (p__41446){
var map__41447 = p__41446;
var map__41447__$1 = (((((!((map__41447 == null))))?(((((map__41447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41447):map__41447);
var _PLUS_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41447__$1,new cljs.core.Symbol(null,"+items","+items",311055057,null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__4529__auto__ = (function kuhumcst$tei_facsimile$core$iter__41449(s__41450){
return (new cljs.core.LazySeq(null,(function (){
var s__41450__$1 = s__41450;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41450__$1);
if(temp__5735__auto__){
var s__41450__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41450__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__41450__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__41452 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__41451 = (0);
while(true){
if((i__41451 < size__4528__auto__)){
var vec__41453 = cljs.core._nth(c__4527__auto__,i__41451);
var seq__41454 = cljs.core.seq(vec__41453);
var first__41455 = cljs.core.first(seq__41454);
var seq__41454__$1 = cljs.core.next(seq__41454);
var tag = first__41455;
var first__41455__$1 = cljs.core.first(seq__41454__$1);
var seq__41454__$2 = cljs.core.next(seq__41454__$1);
var attr = first__41455__$1;
var content = seq__41454__$2;
cljs.core.chunk_append(b__41452,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),content));

var G__41470 = (i__41451 + (1));
i__41451 = G__41470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41452),kuhumcst$tei_facsimile$core$iter__41449(cljs.core.chunk_rest(s__41450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41452),null);
}
} else {
var vec__41456 = cljs.core.first(s__41450__$2);
var seq__41457 = cljs.core.seq(vec__41456);
var first__41458 = cljs.core.first(seq__41457);
var seq__41457__$1 = cljs.core.next(seq__41457);
var tag = first__41458;
var first__41458__$1 = cljs.core.first(seq__41457__$1);
var seq__41457__$2 = cljs.core.next(seq__41457__$1);
var attr = first__41458__$1;
var content = seq__41457__$2;
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),content),kuhumcst$tei_facsimile$core$iter__41449(cljs.core.rest(s__41450__$2)));
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
kuhumcst.tei_facsimile.core.ref_as_anchor = cuphic.core.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?","?",-62633706,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"?ref","?ref",-1971763450,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"to","to",192099007),(function (p__41459){
var map__41460 = p__41459;
var map__41460__$1 = (((((!((map__41460 == null))))?(((((map__41460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41460):map__41460);
var _QMARK_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41460__$1,new cljs.core.Symbol(null,"?ref","?ref",-1971763450,null));
var _QMARK_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41460__$1,new cljs.core.Symbol(null,"?type","?type",-1287409101,null));
if(cljs.core.truth_(_QMARK_ref)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),_QMARK_ref,new cljs.core.Keyword(null,"title","title",636505583),kuhumcst.tei_facsimile.core.da_type(_QMARK_type)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot","slot",240229571)], null)], null);
} else {
return null;
}
})], 0));
kuhumcst.tei_facsimile.core.wrap_pbs = cuphic.core.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pb","pb",-1523127746)], null),new cljs.core.Symbol(null,"+","+",-740910886,null)], null)], null),new cljs.core.Keyword(null,"to","to",192099007),(function (p__41464){
var map__41465 = p__41464;
var map__41465__$1 = (((((!((map__41465 == null))))?(((((map__41465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41465):map__41465);
var bindings = map__41465__$1;
var _LT__GT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,new cljs.core.Symbol(null,"<>","<>",-1374249383,null));
var map__41467 = cljs.core.meta(_LT__GT_);
var map__41467__$1 = (((((!((map__41467 == null))))?(((((map__41467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41467):map__41467);
var begin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467__$1,new cljs.core.Keyword(null,"begin","begin",-319034319));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(bindings));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(source,(0),begin),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slides","slides",-1933049910)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41463_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slide","slide",142491892)], null),p1__41463_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__41462_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pb","pb",-1523127746),cljs.core.first(p1__41462_SHARP_));
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(source,begin,end)))))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(source,end)], 0)));
})], 0));
kuhumcst.tei_facsimile.core.stages = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kuhumcst.tei_facsimile.core.wrap_pbs], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kuhumcst.tei_facsimile.core.ref_as_anchor,kuhumcst.tei_facsimile.core.list_as_ul], null),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),rescope.core.shadow_wrapper,new cljs.core.Keyword(null,"default","default",-1987822328),rescope.helpers.default_fn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),kuhumcst.tei_facsimile.core.prefix,new cljs.core.Keyword(null,"attr-kmap","attr-kmap",807970155),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xml:lang","xml:lang",-1485113568),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"xml:id","xml:id",-1782592788),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null))], null)], null);
kuhumcst.tei_facsimile.core.rewrite = cljs.core.memoize((function (p1__41469_SHARP_){
return cuphic.core.rewrite(p1__41469_SHARP_,kuhumcst.tei_facsimile.core.stages);
}));
kuhumcst.tei_facsimile.core.parse = cljs.core.memoize(rescope.formats.xml.parse);
/**
 * Parse, postprocess, and display TEI.
 */
kuhumcst.tei_facsimile.core.tei_xml = (function kuhumcst$tei_facsimile$core$tei_xml(xml){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rescope.core.scope,kuhumcst.tei_facsimile.core.rewrite(kuhumcst.tei_facsimile.core.parse(xml)),kuhumcst.tei_facsimile.core.css], null);
});

//# sourceMappingURL=kuhumcst.tei_facsimile.core.js.map
