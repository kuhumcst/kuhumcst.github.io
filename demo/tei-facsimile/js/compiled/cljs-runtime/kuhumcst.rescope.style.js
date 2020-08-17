goog.provide('kuhumcst.rescope.style');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('kuhumcst.rescope.util');
/**
 * Remove comments from a piece of `css`.
 */
kuhumcst.rescope.style.remove_comments = (function kuhumcst$rescope$style$remove_comments(css){
return clojure.string.replace(css,/\/\*.*\*\//,"");
});
/**
 * Super hairy, write-only code for adding a `prefix` to all element selectors
 *   in a piece of `css`.
 */
kuhumcst.rescope.style.prefix_element_selectors = (function kuhumcst$rescope$style$prefix_element_selectors(prefix,css){
var css_rule = /([^{]+)(\s*\{[^}]*\}\s*)/;
var _QMARK_element_split = /([\s\(\)]+)|([^\s\(\)]+)/;
var element_selector = /([a-zA-Z-]+).*/;
var add_prefix = (function (_QMARK_element){
if(cljs.core.truth_(((typeof _QMARK_element === 'string')?cljs.core.re_matches(element_selector,_QMARK_element):false))){
return kuhumcst.rescope.util.prefixed(prefix,_QMARK_element);
} else {
return _QMARK_element;
}
});
var $ = css;
var $__$1 = cljs.core.re_seq(css_rule,$);
var $__$2 = (function (){var iter__4529__auto__ = (function kuhumcst$rescope$style$prefix_element_selectors_$_iter__56353(s__56354){
return (new cljs.core.LazySeq(null,(function (){
var s__56354__$1 = s__56354;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56354__$1);
if(temp__5735__auto__){
var s__56354__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56354__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56354__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56356 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56355 = (0);
while(true){
if((i__56355 < size__4528__auto__)){
var vec__56360 = cljs.core._nth(c__4527__auto__,i__56355);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56360,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56360,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56360,(2),null);
cljs.core.chunk_append(b__56356,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4529__auto__ = ((function (i__56355,vec__56360,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__56356,s__56354__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix){
return (function kuhumcst$rescope$style$prefix_element_selectors_$_iter__56353_$_iter__56363(s__56364){
return (new cljs.core.LazySeq(null,((function (i__56355,vec__56360,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__56356,s__56354__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix){
return (function (){
var s__56364__$1 = s__56364;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56364__$1);
if(temp__5735__auto____$1){
var s__56364__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56364__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__56364__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__56366 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__56365 = (0);
while(true){
if((i__56365 < size__4528__auto____$1)){
var _QMARK_elements = cljs.core._nth(c__4527__auto____$1,i__56365);
cljs.core.chunk_append(b__56366,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements));

var G__56507 = (i__56365 + (1));
i__56365 = G__56507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56366),kuhumcst$rescope$style$prefix_element_selectors_$_iter__56353_$_iter__56363(cljs.core.chunk_rest(s__56364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56366),null);
}
} else {
var _QMARK_elements = cljs.core.first(s__56364__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements),kuhumcst$rescope$style$prefix_element_selectors_$_iter__56353_$_iter__56363(cljs.core.rest(s__56364__$2)));
}
} else {
return null;
}
break;
}
});})(i__56355,vec__56360,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__56356,s__56354__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix))
,null,null));
});})(i__56355,vec__56360,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__56356,s__56354__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix))
;
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_element_split,selector)));
})(),declaration], null));

var G__56518 = (i__56355 + (1));
i__56355 = G__56518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56356),kuhumcst$rescope$style$prefix_element_selectors_$_iter__56353(cljs.core.chunk_rest(s__56354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56356),null);
}
} else {
var vec__56379 = cljs.core.first(s__56354__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56379,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56379,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56379,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4529__auto__ = ((function (vec__56379,_,selector,declaration,s__56354__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix){
return (function kuhumcst$rescope$style$prefix_element_selectors_$_iter__56353_$_iter__56382(s__56383){
return (new cljs.core.LazySeq(null,(function (){
var s__56383__$1 = s__56383;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56383__$1);
if(temp__5735__auto____$1){
var s__56383__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56383__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56383__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56385 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56384 = (0);
while(true){
if((i__56384 < size__4528__auto__)){
var _QMARK_elements = cljs.core._nth(c__4527__auto__,i__56384);
cljs.core.chunk_append(b__56385,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements));

var G__56533 = (i__56384 + (1));
i__56384 = G__56533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56385),kuhumcst$rescope$style$prefix_element_selectors_$_iter__56353_$_iter__56382(cljs.core.chunk_rest(s__56383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56385),null);
}
} else {
var _QMARK_elements = cljs.core.first(s__56383__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements),kuhumcst$rescope$style$prefix_element_selectors_$_iter__56353_$_iter__56382(cljs.core.rest(s__56383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__56379,_,selector,declaration,s__56354__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix))
;
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_element_split,selector)));
})(),declaration], null),kuhumcst$rescope$style$prefix_element_selectors_$_iter__56353(cljs.core.rest(s__56354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__($__$1);
})();
var $__$3 = cljs.core.flatten($__$2);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,$__$3);
});
/**
 * More Perl-wannabe, garbage code for prefixing data-* to attribute selectors
 *   in a piece of `css`.
 */
kuhumcst.rescope.style.convert_to_data__STAR_ = (function kuhumcst$rescope$style$convert_to_data__STAR_(css){
var css_rule = /([^{]+)(\s*\{[^}]*\}\s*)/;
var _QMARK_attr_split = /(\[[^\]]+\])|([^\[]+)/;
var attr_selector = /\[([a-zA-Z]+)(.*)/;
var add_data__STAR_ = (function (_QMARK_attr){
var temp__5733__auto__ = ((typeof _QMARK_attr === 'string')?cljs.core.re_matches(attr_selector,_QMARK_attr):false);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__56417 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56417,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56417,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56417,(2),null);
return ["[",kuhumcst.rescope.util.data__STAR_(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return _QMARK_attr;
}
});
var $ = css;
var $__$1 = cljs.core.re_seq(css_rule,$);
var $__$2 = (function (){var iter__4529__auto__ = (function kuhumcst$rescope$style$convert_to_data__STAR__$_iter__56422(s__56423){
return (new cljs.core.LazySeq(null,(function (){
var s__56423__$1 = s__56423;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56423__$1);
if(temp__5735__auto__){
var s__56423__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56423__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56423__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56425 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56424 = (0);
while(true){
if((i__56424 < size__4528__auto__)){
var vec__56427 = cljs.core._nth(c__4527__auto__,i__56424);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56427,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56427,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56427,(2),null);
cljs.core.chunk_append(b__56425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4529__auto__ = ((function (i__56424,vec__56427,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__56425,s__56423__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_){
return (function kuhumcst$rescope$style$convert_to_data__STAR__$_iter__56422_$_iter__56436(s__56437){
return (new cljs.core.LazySeq(null,((function (i__56424,vec__56427,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__56425,s__56423__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_){
return (function (){
var s__56437__$1 = s__56437;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56437__$1);
if(temp__5735__auto____$1){
var s__56437__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56437__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__56437__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__56439 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__56438 = (0);
while(true){
if((i__56438 < size__4528__auto____$1)){
var _QMARK_attrs = cljs.core._nth(c__4527__auto____$1,i__56438);
cljs.core.chunk_append(b__56439,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs));

var G__56556 = (i__56438 + (1));
i__56438 = G__56556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56439),kuhumcst$rescope$style$convert_to_data__STAR__$_iter__56422_$_iter__56436(cljs.core.chunk_rest(s__56437__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56439),null);
}
} else {
var _QMARK_attrs = cljs.core.first(s__56437__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs),kuhumcst$rescope$style$convert_to_data__STAR__$_iter__56422_$_iter__56436(cljs.core.rest(s__56437__$2)));
}
} else {
return null;
}
break;
}
});})(i__56424,vec__56427,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__56425,s__56423__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_))
,null,null));
});})(i__56424,vec__56427,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__56425,s__56423__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_))
;
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_attr_split,selector)));
})(),declaration], null));

var G__56565 = (i__56424 + (1));
i__56424 = G__56565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56425),kuhumcst$rescope$style$convert_to_data__STAR__$_iter__56422(cljs.core.chunk_rest(s__56423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56425),null);
}
} else {
var vec__56455 = cljs.core.first(s__56423__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56455,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56455,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56455,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4529__auto__ = ((function (vec__56455,_,selector,declaration,s__56423__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_){
return (function kuhumcst$rescope$style$convert_to_data__STAR__$_iter__56422_$_iter__56465(s__56466){
return (new cljs.core.LazySeq(null,(function (){
var s__56466__$1 = s__56466;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56466__$1);
if(temp__5735__auto____$1){
var s__56466__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56466__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56466__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56468 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56467 = (0);
while(true){
if((i__56467 < size__4528__auto__)){
var _QMARK_attrs = cljs.core._nth(c__4527__auto__,i__56467);
cljs.core.chunk_append(b__56468,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs));

var G__56580 = (i__56467 + (1));
i__56467 = G__56580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56468),kuhumcst$rescope$style$convert_to_data__STAR__$_iter__56422_$_iter__56465(cljs.core.chunk_rest(s__56466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56468),null);
}
} else {
var _QMARK_attrs = cljs.core.first(s__56466__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs),kuhumcst$rescope$style$convert_to_data__STAR__$_iter__56422_$_iter__56465(cljs.core.rest(s__56466__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__56455,_,selector,declaration,s__56423__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_))
;
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_attr_split,selector)));
})(),declaration], null),kuhumcst$rescope$style$convert_to_data__STAR__$_iter__56422(cljs.core.rest(s__56423__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__($__$1);
})();
var $__$3 = cljs.core.flatten($__$2);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,$__$3);
});
/**
 * Remove superfluous newlines.
 */
kuhumcst.rescope.style.trim_blank_space = (function kuhumcst$rescope$style$trim_blank_space(css){
return clojure.string.triml(clojure.string.replace(clojure.string.replace(css,/ +\n/,"\n"),/\n\n+/,"\n\n"));
});
/**
 * Patch a piece of `css` written for the original document structure so that it
 *   matches the postprocessed hiccup. Will remove comments, add `prefix` to
 *   element selectors, and convert all attribute selectors to the data-* style.
 */
kuhumcst.rescope.style.prefix_css = (function kuhumcst$rescope$style$prefix_css(prefix,css){
return kuhumcst.rescope.style.trim_blank_space(kuhumcst.rescope.style.convert_to_data__STAR_(kuhumcst.rescope.style.prefix_element_selectors(prefix,kuhumcst.rescope.style.remove_comments(css))));
});

//# sourceMappingURL=kuhumcst.rescope.style.js.map
