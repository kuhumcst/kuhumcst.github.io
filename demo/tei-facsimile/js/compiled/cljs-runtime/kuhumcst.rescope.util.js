goog.provide('kuhumcst.rescope.util');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Add a `prefix` to an HTML `tag`, creating a valid custom HTML element name.
 */
kuhumcst.rescope.util.prefixed = (function kuhumcst$rescope$util$prefixed(prefix,tag){
var reserved_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["missing-glyph",null,"font-face-src",null,"font-face-uri",null,"font-face-format",null,"font-face-name",null,"font-face",null,"annotation-xml",null,"color-profile",null], null), null);
var prefixed_tag = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
if(cljs.core.contains_QMARK_(reserved_tags,prefixed_tag)){
return [prefixed_tag,"-x"].join('');
} else {
return prefixed_tag;
}
});
/**
 * Convert an XML attribute `k` into a data-* attribute.
 */
kuhumcst.rescope.util.data__STAR_ = (function kuhumcst$rescope$util$data__STAR_(k){
var $ = k;
var $__$1 = cljs.core.name($);
var $__$2 = clojure.string.replace($__$1,":","-");
return ["data-",$__$2].join('');
});

//# sourceMappingURL=kuhumcst.rescope.util.js.map
