goog.provide('rescope.formats.xml');
rescope.formats.xml.dom_parse = (function rescope$formats$xml$dom_parse(xml){
return (new DOMParser()).parseFromString(xml,"text/xml").firstChild;
});
goog.object.set(hickory.core.HiccupRepresentable,"object",true);

goog.object.set(hickory.core.as_hiccup,"object",(function (this$){
var pred__52507 = cljs.core._EQ_;
var expr__52508 = this$.nodeType;
if(cljs.core.truth_((pred__52507.cljs$core$IFn$_invoke$arity$2 ? pred__52507.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__52508) : pred__52507.call(null,hickory.core.Attribute,expr__52508)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword(this$.name),this$.value], null);
} else {
if(cljs.core.truth_((pred__52507.cljs$core$IFn$_invoke$arity$2 ? pred__52507.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__52508) : pred__52507.call(null,hickory.core.Comment,expr__52508)))){
return null;
} else {
if(cljs.core.truth_((pred__52507.cljs$core$IFn$_invoke$arity$2 ? pred__52507.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__52508) : pred__52507.call(null,hickory.core.Document,expr__52508)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,this$.childNodes);
} else {
if(cljs.core.truth_((pred__52507.cljs$core$IFn$_invoke$arity$2 ? pred__52507.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__52508) : pred__52507.call(null,hickory.core.DocumentType,expr__52508)))){
return hickory.core.format_doctype(this$);
} else {
if(cljs.core.truth_((pred__52507.cljs$core$IFn$_invoke$arity$2 ? pred__52507.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__52508) : pred__52507.call(null,hickory.core.Element,expr__52508)))){
var tag = hickory.utils.lower_case_keyword(this$.tagName);
var attr = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,this$.attributes));
var children = this$.childNodes;
var content = cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,children);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attr], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,content)));
} else {
if(cljs.core.truth_((pred__52507.cljs$core$IFn$_invoke$arity$2 ? pred__52507.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__52508) : pred__52507.call(null,hickory.core.Text,expr__52508)))){
var s = this$.wholeText;
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return hickory.utils.html_escape(s);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52508)].join('')));
}
}
}
}
}
}
}));
/**
 * Naïvely convert an `xml` string into a raw hiccup representation.
 */
rescope.formats.xml.parse = (function rescope$formats$xml$parse(xml){
return hickory.core.as_hiccup(rescope.formats.xml.dom_parse(xml));
});

//# sourceMappingURL=rescope.formats.xml.js.map
