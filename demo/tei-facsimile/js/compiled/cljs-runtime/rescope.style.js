goog.provide('rescope.style');
/**
 * Remove comments from a piece of `css`.
 */
rescope.style.remove_comments = (function rescope$style$remove_comments(css){
return clojure.string.replace(css,/\/\*.*\*\//,"");
});
/**
 * Super hairy, write-only code for adding a `prefix` to all element selectors
 *   in a piece of `css`.
 */
rescope.style.prefix_element_selectors = (function rescope$style$prefix_element_selectors(prefix,css){
var css_rule = /([^{]+)(\s*\{[^}]*\}\s*)/;
var _QMARK_element_split = /([\s\(\)]+)|([^\s\(\)]+)/;
var element_selector = /([a-zA-Z-]+).*/;
var add_prefix = (function (_QMARK_element){
if(cljs.core.truth_(((typeof _QMARK_element === 'string')?cljs.core.re_matches(element_selector,_QMARK_element):false))){
return rescope.util.prefixed(prefix,_QMARK_element);
} else {
return _QMARK_element;
}
});
var $ = css;
var $__$1 = cljs.core.re_seq(css_rule,$);
var $__$2 = (function (){var iter__4529__auto__ = (function rescope$style$prefix_element_selectors_$_iter__52138(s__52139){
return (new cljs.core.LazySeq(null,(function (){
var s__52139__$1 = s__52139;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52139__$1);
if(temp__5735__auto__){
var s__52139__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52139__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52139__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52141 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52140 = (0);
while(true){
if((i__52140 < size__4528__auto__)){
var vec__52151 = cljs.core._nth(c__4527__auto__,i__52140);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52151,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52151,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52151,(2),null);
cljs.core.chunk_append(b__52141,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4529__auto__ = ((function (i__52140,vec__52151,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__52141,s__52139__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix){
return (function rescope$style$prefix_element_selectors_$_iter__52138_$_iter__52156(s__52157){
return (new cljs.core.LazySeq(null,((function (i__52140,vec__52151,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__52141,s__52139__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix){
return (function (){
var s__52157__$1 = s__52157;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52157__$1);
if(temp__5735__auto____$1){
var s__52157__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52157__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__52157__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__52159 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__52158 = (0);
while(true){
if((i__52158 < size__4528__auto____$1)){
var _QMARK_elements = cljs.core._nth(c__4527__auto____$1,i__52158);
cljs.core.chunk_append(b__52159,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements));

var G__52341 = (i__52158 + (1));
i__52158 = G__52341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52159),rescope$style$prefix_element_selectors_$_iter__52138_$_iter__52156(cljs.core.chunk_rest(s__52157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52159),null);
}
} else {
var _QMARK_elements = cljs.core.first(s__52157__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements),rescope$style$prefix_element_selectors_$_iter__52138_$_iter__52156(cljs.core.rest(s__52157__$2)));
}
} else {
return null;
}
break;
}
});})(i__52140,vec__52151,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__52141,s__52139__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix))
,null,null));
});})(i__52140,vec__52151,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__52141,s__52139__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix))
;
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_element_split,selector)));
})(),declaration], null));

var G__52356 = (i__52140 + (1));
i__52140 = G__52356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52141),rescope$style$prefix_element_selectors_$_iter__52138(cljs.core.chunk_rest(s__52139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52141),null);
}
} else {
var vec__52186 = cljs.core.first(s__52139__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52186,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52186,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52186,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4529__auto__ = ((function (vec__52186,_,selector,declaration,s__52139__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix){
return (function rescope$style$prefix_element_selectors_$_iter__52138_$_iter__52189(s__52190){
return (new cljs.core.LazySeq(null,(function (){
var s__52190__$1 = s__52190;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52190__$1);
if(temp__5735__auto____$1){
var s__52190__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52190__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52190__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52192 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52191 = (0);
while(true){
if((i__52191 < size__4528__auto__)){
var _QMARK_elements = cljs.core._nth(c__4527__auto__,i__52191);
cljs.core.chunk_append(b__52192,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements));

var G__52379 = (i__52191 + (1));
i__52191 = G__52379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52192),rescope$style$prefix_element_selectors_$_iter__52138_$_iter__52189(cljs.core.chunk_rest(s__52190__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52192),null);
}
} else {
var _QMARK_elements = cljs.core.first(s__52190__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements),rescope$style$prefix_element_selectors_$_iter__52138_$_iter__52189(cljs.core.rest(s__52190__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__52186,_,selector,declaration,s__52139__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix))
;
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_element_split,selector)));
})(),declaration], null),rescope$style$prefix_element_selectors_$_iter__52138(cljs.core.rest(s__52139__$2)));
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
rescope.style.convert_to_data__STAR_ = (function rescope$style$convert_to_data__STAR_(css){
var css_rule = /([^{]+)(\s*\{[^}]*\}\s*)/;
var _QMARK_attr_split = /(\[[^\]]+\])|([^\[]+)/;
var attr_selector = /\[([a-zA-Z]+)(.*)/;
var add_data__STAR_ = (function (_QMARK_attr){
var temp__5733__auto__ = ((typeof _QMARK_attr === 'string')?cljs.core.re_matches(attr_selector,_QMARK_attr):false);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__52228 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52228,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52228,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52228,(2),null);
return ["[",rescope.util.data__STAR_(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return _QMARK_attr;
}
});
var $ = css;
var $__$1 = cljs.core.re_seq(css_rule,$);
var $__$2 = (function (){var iter__4529__auto__ = (function rescope$style$convert_to_data__STAR__$_iter__52236(s__52237){
return (new cljs.core.LazySeq(null,(function (){
var s__52237__$1 = s__52237;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52237__$1);
if(temp__5735__auto__){
var s__52237__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52237__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52237__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52239 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52238 = (0);
while(true){
if((i__52238 < size__4528__auto__)){
var vec__52251 = cljs.core._nth(c__4527__auto__,i__52238);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52251,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52251,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52251,(2),null);
cljs.core.chunk_append(b__52239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4529__auto__ = ((function (i__52238,vec__52251,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__52239,s__52237__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_){
return (function rescope$style$convert_to_data__STAR__$_iter__52236_$_iter__52254(s__52255){
return (new cljs.core.LazySeq(null,((function (i__52238,vec__52251,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__52239,s__52237__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_){
return (function (){
var s__52255__$1 = s__52255;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52255__$1);
if(temp__5735__auto____$1){
var s__52255__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52255__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__52255__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__52257 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__52256 = (0);
while(true){
if((i__52256 < size__4528__auto____$1)){
var _QMARK_attrs = cljs.core._nth(c__4527__auto____$1,i__52256);
cljs.core.chunk_append(b__52257,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs));

var G__52429 = (i__52256 + (1));
i__52256 = G__52429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52257),rescope$style$convert_to_data__STAR__$_iter__52236_$_iter__52254(cljs.core.chunk_rest(s__52255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52257),null);
}
} else {
var _QMARK_attrs = cljs.core.first(s__52255__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs),rescope$style$convert_to_data__STAR__$_iter__52236_$_iter__52254(cljs.core.rest(s__52255__$2)));
}
} else {
return null;
}
break;
}
});})(i__52238,vec__52251,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__52239,s__52237__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_))
,null,null));
});})(i__52238,vec__52251,_,selector,declaration,c__4527__auto__,size__4528__auto__,b__52239,s__52237__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_))
;
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_attr_split,selector)));
})(),declaration], null));

var G__52430 = (i__52238 + (1));
i__52238 = G__52430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52239),rescope$style$convert_to_data__STAR__$_iter__52236(cljs.core.chunk_rest(s__52237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52239),null);
}
} else {
var vec__52271 = cljs.core.first(s__52237__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52271,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52271,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52271,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4529__auto__ = ((function (vec__52271,_,selector,declaration,s__52237__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_){
return (function rescope$style$convert_to_data__STAR__$_iter__52236_$_iter__52274(s__52275){
return (new cljs.core.LazySeq(null,(function (){
var s__52275__$1 = s__52275;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52275__$1);
if(temp__5735__auto____$1){
var s__52275__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52275__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52275__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52277 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52276 = (0);
while(true){
if((i__52276 < size__4528__auto__)){
var _QMARK_attrs = cljs.core._nth(c__4527__auto__,i__52276);
cljs.core.chunk_append(b__52277,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs));

var G__52456 = (i__52276 + (1));
i__52276 = G__52456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52277),rescope$style$convert_to_data__STAR__$_iter__52236_$_iter__52274(cljs.core.chunk_rest(s__52275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52277),null);
}
} else {
var _QMARK_attrs = cljs.core.first(s__52275__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs),rescope$style$convert_to_data__STAR__$_iter__52236_$_iter__52274(cljs.core.rest(s__52275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__52271,_,selector,declaration,s__52237__$2,temp__5735__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_))
;
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_attr_split,selector)));
})(),declaration], null),rescope$style$convert_to_data__STAR__$_iter__52236(cljs.core.rest(s__52237__$2)));
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
rescope.style.trim_blank_space = (function rescope$style$trim_blank_space(css){
return clojure.string.triml(clojure.string.replace(clojure.string.replace(css,/ +\n/,"\n"),/\n\n+/,"\n\n"));
});
/**
 * Patch a piece of `css` written for the original document structure so that it
 *   matches the postprocessed hiccup. Will remove comments, add `prefix` to
 *   element selectors, and convert all attribute selectors to the data-* style.
 */
rescope.style.prefix_css = (function rescope$style$prefix_css(prefix,css){
return rescope.style.trim_blank_space(rescope.style.convert_to_data__STAR_(rescope.style.prefix_element_selectors(prefix,rescope.style.remove_comments(css))));
});

//# sourceMappingURL=rescope.style.js.map
