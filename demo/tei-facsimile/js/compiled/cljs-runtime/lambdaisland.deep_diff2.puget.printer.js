goog.provide('lambdaisland.deep_diff2.puget.printer');
/**
 * Get the type of the given object as a string. For Clojure, gets the name of
 *   the class of the object. For ClojureScript, gets either the `name` attribute
 *   or the protocol name if the `name` attribute doesn't exist.
 */
lambdaisland.deep_diff2.puget.printer.get_type_name = (function lambdaisland$deep_diff2$puget$printer$get_type_name(x){
var t = cljs.core.type(x);
var n = t.name;
if(cljs.core.empty_QMARK_(n)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0));
} else {
return n;
}
});
/**
 * Get the hashcode for a given object o
 */
lambdaisland.deep_diff2.puget.printer.get_identity_hashcode = (function lambdaisland$deep_diff2$puget$printer$get_identity_hashcode(o){
return cljs.core.hash(o);
});
/**
 * Returns a hex representation of input-string
 */
lambdaisland.deep_diff2.puget.printer.to_hex_string = (function lambdaisland$deep_diff2$puget$printer$to_hex_string(input_string){
return input_string.toString((16));
});
/**
 * Default options to use when constructing new printers.
 */
lambdaisland.deep_diff2.puget.printer._STAR_options_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"color-markup","color-markup",266742518),new cljs.core.Keyword(null,"print-color","print-color",722462614),new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092)],[" ",false,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"class-delimiter","class-delimiter",2013485793),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),new cljs.core.Keyword(null,"function-symbol","function-symbol",-1336068270),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"character","character",380652989)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyan","cyan",1118839274)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null)]),new cljs.core.Keyword(null,"pretty","pretty",-1916372486),(80),new cljs.core.Keyword(null,"ansi","ansi",1415977390),false,(80),","]);
/**
 * Merges maps of printer options, taking care to combine the color scheme
 *   correctly.
 */
lambdaisland.deep_diff2.puget.printer.merge_options = (function lambdaisland$deep_diff2$puget$printer$merge_options(a,b){
var colors = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(b)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0)),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),colors);
});
/**
 * Produces text colored according to the active color scheme. This is mostly
 *   useful to clients which want to produce output which matches data printed by
 *   Puget, but which is not directly printed by the library. Note that this
 *   function still obeys the `:print-color` option.
 */
lambdaisland.deep_diff2.puget.printer.color_text = (function lambdaisland$deep_diff2$puget$printer$color_text(var_args){
var G__52294 = arguments.length;
switch (G__52294) {
case 2:
return lambdaisland.deep_diff2.puget.printer.color_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lambdaisland.deep_diff2.puget.printer.color_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.color_text.cljs$core$IFn$_invoke$arity$2 = (function (element,text){
return lambdaisland.deep_diff2.puget.printer.color_text.cljs$core$IFn$_invoke$arity$3(lambdaisland.deep_diff2.puget.printer._STAR_options_STAR_,element,text);
}));

(lambdaisland.deep_diff2.puget.printer.color_text.cljs$core$IFn$_invoke$arity$3 = (function (options,element,text){
return lambdaisland.deep_diff2.puget.color.text.cljs$core$IFn$_invoke$arity$3(options,element,text);
}));

(lambdaisland.deep_diff2.puget.printer.color_text.cljs$lang$maxFixedArity = 3);

/**
 * Takes a sequence of entries and checks the mode to determine whether to sort
 *   them. Returns an appropriately ordered sequence.
 */
lambdaisland.deep_diff2.puget.printer.order_collection = (function lambdaisland$deep_diff2$puget$printer$order_collection(mode,coll,sort_fn){
if((((!(cljs.core.sorted_QMARK_(coll)))) && (((mode === true) || (((typeof mode === 'number') && (cljs.core.counted_QMARK_(coll)) && ((mode >= cljs.core.count(coll))))))))){
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(coll) : sort_fn.call(null,coll));
} else {
return cljs.core.seq(coll);
}
});
/**
 * Extract a common namespace from the keys in the map. Returns a tuple of the
 *   ns string and the stripped map, or nil if the keys are not keywords or there
 *   is no sufficiently common namespace.
 */
lambdaisland.deep_diff2.puget.printer.common_key_ns = (function lambdaisland$deep_diff2$puget$printer$common_key_ns(m){
if(cljs.core.every_QMARK_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.namespace),cljs.core.keys(m))){
var nsf = cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.keys(m)));
var vec__52348 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.val,nsf);
var common = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52348,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52348,(1),null);
if(((cljs.core.count(m) / (2)) < n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [common,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function lambdaisland$deep_diff2$puget$printer$common_key_ns_$_strip_common(p__52362){
var vec__52366 = p__52362;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52366,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52366,(1),null);
var e = vec__52366;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(common,cljs.core.namespace(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v], null);
} else {
return e;
}
})),m)], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Renders common syntax doc for an unknown representation of a value.
 */
lambdaisland.deep_diff2.puget.printer.format_unknown = (function lambdaisland$deep_diff2$puget$printer$format_unknown(var_args){
var G__52388 = arguments.length;
switch (G__52388) {
case 2:
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$2 = (function (printer,value){
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$3(printer,value,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}));

(lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$3 = (function (printer,value,repr){
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4(printer,value,lambdaisland.deep_diff2.puget.printer.get_type_name(value),repr);
}));

(lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4 = (function (printer,value,tag,repr){
var sys_id = lambdaisland.deep_diff2.puget.printer.to_hex_string(lambdaisland.deep_diff2.puget.printer.get_identity_hashcode(value));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"class-delimiter","class-delimiter",2013485793),"#<"),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"class-name","class-name",945142584),tag),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"class-delimiter","class-delimiter",2013485793),"@"),sys_id,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(repr,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sys_id)].join('')))?(new cljs.core.List(null," ",(new cljs.core.List(null,repr,null,(1),null)),(2),null)):null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"class-delimiter","class-delimiter",2013485793),">")], null);
}));

(lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$lang$maxFixedArity = 4);

/**
 * Formats a document without considering metadata.
 */
lambdaisland.deep_diff2.puget.printer.format_doc_STAR_ = (function lambdaisland$deep_diff2$puget$printer$format_doc_STAR_(printer,value){
var lookup = new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901).cljs$core$IFn$_invoke$arity$1(printer);
var handler = (function (){var and__4115__auto__ = lookup;
if(cljs.core.truth_(and__4115__auto__)){
return (lookup.cljs$core$IFn$_invoke$arity$1 ? lookup.cljs$core$IFn$_invoke$arity$1(value) : lookup.call(null,value));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(handler)){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(printer,value) : handler.call(null,printer,value));
} else {
return fipp.visit.visit_STAR_(printer,value);
}
});
/**
 * Recursively renders a print document for the given value.
 */
lambdaisland.deep_diff2.puget.printer.format_doc = (function lambdaisland$deep_diff2$puget$printer$format_doc(printer,value){
var temp__5733__auto__ = cljs.core.meta(value);
if(cljs.core.truth_(temp__5733__auto__)){
var metadata = temp__5733__auto__;
return fipp.visit.visit_meta(printer,metadata,value);
} else {
return lambdaisland.deep_diff2.puget.printer.format_doc_STAR_(printer,value);
}
});
/**
 * Print handler which renders the value with `pr-str`.
 */
lambdaisland.deep_diff2.puget.printer.pr_handler = (function lambdaisland$deep_diff2$puget$printer$pr_handler(printer,value){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
});
/**
 * Print handler which renders the value using the printer's unknown type logic.
 */
lambdaisland.deep_diff2.puget.printer.unknown_handler = (function lambdaisland$deep_diff2$puget$printer$unknown_handler(printer,value){
return fipp.visit.visit_unknown(printer,value);
});
/**
 * Generates a print handler function which renders a tagged-literal with the
 *   given tag and a value produced by calling the function.
 */
lambdaisland.deep_diff2.puget.printer.tagged_handler = (function lambdaisland$deep_diff2$puget$printer$tagged_handler(tag,value_fn){
if((tag instanceof cljs.core.Symbol)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot create tagged handler with non-symbol tag ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"value-fn","value-fn",544624790),value_fn], null));
}

if(cljs.core.ifn_QMARK_(value_fn)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot create tagged handler for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," with non-function value transform"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"value-fn","value-fn",544624790),value_fn], null));
}

return (function lambdaisland$deep_diff2$puget$printer$tagged_handler_$_handler(printer,value){
return lambdaisland.deep_diff2.puget.printer.format_doc(printer,cljs.core.tagged_literal(tag,(value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(value) : value_fn.call(null,value))));
});
});
lambdaisland.deep_diff2.puget.printer.inst_pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS-00:00";
lambdaisland.deep_diff2.puget.printer.utc_date = (function lambdaisland$deep_diff2$puget$printer$utc_date(date){
return (new Date(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds()));
});
/**
 * Map of print handlers for Java/JavaScript types. This supports syntax for regular
 *   expressions, dates, UUIDs, and futures.
 */
lambdaisland.deep_diff2.puget.printer.platform_handlers = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.inst_QMARK_,lambdaisland.deep_diff2.puget.printer.tagged_handler(new cljs.core.Symbol(null,"inst","inst",-2008473268,null),(function (p1__52479_SHARP_){
return (new goog.i18n.DateTimeFormat(lambdaisland.deep_diff2.puget.printer.inst_pattern)).format(lambdaisland.deep_diff2.puget.printer.utc_date(p1__52479_SHARP_));
})),cljs.core.uuid_QMARK_,lambdaisland.deep_diff2.puget.printer.tagged_handler(new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.core.str),cljs.core.object_QMARK_,lambdaisland.deep_diff2.puget.printer.tagged_handler(new cljs.core.Symbol(null,"js","js",-886355190,null),(function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,goog.object.get(x,k));
}),cljs.core.PersistentArrayMap.EMPTY,Object.keys(x));
}))]);
/**
 * Map of print handlers for 'primary' Clojure types. These should take
 *   precedence over the handlers in `clojure-interface-handlers`.
 */
lambdaisland.deep_diff2.puget.printer.clojure_handlers = cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (p1__52481_SHARP_){
if((!((p1__52481_SHARP_ == null)))){
if((((p1__52481_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__52481_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}),(function lambdaisland$deep_diff2$puget$printer$atom_handler(printer,value){
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4(printer,value,"Atom",lambdaisland.deep_diff2.puget.printer.format_doc(printer,cljs.core.deref(value)));
}),(function (p1__52482_SHARP_){
if((!((p1__52482_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__52482_SHARP_.cljs$core$Delay$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}),(function lambdaisland$deep_diff2$puget$printer$delay_handler(printer,value){
var doc = ((cljs.core.realized_QMARK_(value))?lambdaisland.deep_diff2.puget.printer.format_doc(printer,cljs.core.deref(value)):lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"nil","nil",99600501),"pending"));
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4(printer,value,"Delay",doc);
}),cljs.core.seq_QMARK_,(function lambdaisland$deep_diff2$puget$printer$iseq_handler(printer,value){
return fipp.visit.visit_seq(printer,value);
})]);
/**
 * Fallback print handlers for other Clojure interfaces.
 */
lambdaisland.deep_diff2.puget.printer.clojure_interface_handlers = cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (p1__52489_SHARP_){
if((!((p1__52489_SHARP_ == null)))){
if((((p1__52489_SHARP_.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === p1__52489_SHARP_.cljs$core$IPending$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}),(function lambdaisland$deep_diff2$puget$printer$pending_handler(printer,value){
var doc = ((cljs.core.realized_QMARK_(value))?lambdaisland.deep_diff2.puget.printer.format_doc(printer,cljs.core.deref(value)):lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(printer,new cljs.core.Keyword(null,"nil","nil",99600501),"pending"));
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$3(printer,value,doc);
}),cljs.core.fn_QMARK_,(function lambdaisland$deep_diff2$puget$printer$fn_handler(printer,value){
var doc = (function (){var vec__52494 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(lambdaisland.deep_diff2.puget.printer.get_type_name(value),"$","/"),/\$/);
var seq__52495 = cljs.core.seq(vec__52494);
var first__52496 = cljs.core.first(seq__52495);
var seq__52495__$1 = cljs.core.next(seq__52495);
var vname = first__52496;
var tail = seq__52495__$1;
if(cljs.core.seq(tail)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(vname),"[",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52490_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__52490_SHARP_,/__/));
}),tail)),"]"].join('');
} else {
return vname;
}
})();
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$4(printer,value,"Fn",doc);
})]);
/**
 * Print handler dispatch combining Java and Clojure handlers with inheritance
 *   lookups. Provides a similar experience as the standard Clojure
 *   pretty-printer.
 */
lambdaisland.deep_diff2.puget.printer.common_handlers = lambdaisland.deep_diff2.puget.dispatch.chained_lookup.cljs$core$IFn$_invoke$arity$variadic(lambdaisland.deep_diff2.puget.dispatch.predicate_lookup(lambdaisland.deep_diff2.puget.printer.platform_handlers),lambdaisland.deep_diff2.puget.dispatch.predicate_lookup(lambdaisland.deep_diff2.puget.printer.clojure_handlers),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lambdaisland.deep_diff2.puget.dispatch.predicate_lookup(lambdaisland.deep_diff2.puget.printer.clojure_interface_handlers)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fipp.visit.IVisitor}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lambdaisland.deep_diff2.puget.printer.CanonicalPrinter = (function (print_handlers,__meta,__extmap,__hash){
this.print_handlers = print_handlers;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52503,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52513 = k52503;
var G__52513__$1 = (((G__52513 instanceof cljs.core.Keyword))?G__52513.fqn:null);
switch (G__52513__$1) {
case "print-handlers":
return self__.print_handlers;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52503,else__4383__auto__);

}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52516){
var vec__52520 = p__52516;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52520,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52520,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#lambdaisland.deep-diff2.puget.printer.CanonicalPrinter{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),self__.print_handlers],null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52502){
var self__ = this;
var G__52502__$1 = this;
return (new cljs.core.RecordIter((0),G__52502__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(self__.print_handlers,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1240507582 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52504,other52505){
var self__ = this;
var this52504__$1 = this;
return (((!((other52505 == null)))) && ((this52504__$1.constructor === other52505.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52504__$1.print_handlers,other52505.print_handlers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52504__$1.__extmap,other52505.__extmap)));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(self__.print_handlers,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52502){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52523 = cljs.core.keyword_identical_QMARK_;
var expr__52524 = k__4388__auto__;
if(cljs.core.truth_((pred__52523.cljs$core$IFn$_invoke$arity$2 ? pred__52523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),expr__52524) : pred__52523.call(null,new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),expr__52524)))){
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(G__52502,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(self__.print_handlers,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52502),null));
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),self__.print_handlers,null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_record$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return this$__$1.fipp$visit$IVisitor$visit_unknown$arity$2(null,value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_meta$arity$3 = (function (this$,metadata,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.printer.format_doc_STAR_(this$__$1,value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_number$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_pattern$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return this$__$1.fipp$visit$IVisitor$visit_unknown$arity$2(null,value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_unknown$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
var not_defined_representation_message = ["No defined representation for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.deep_diff2.puget.printer.get_type_name(value)),": ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(not_defined_representation_message,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"causes","causes",320696351),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undefined-representation","undefined-representation",-1395497281),null], null), null)], null));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_symbol$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_seq$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),value);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",entries)], null),")"], null);
} else {
return "()";
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_boolean$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_tagged$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(value))].join('')," ",lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(value))], null);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_keyword$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_map$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52501_SHARP_){
return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,cljs.core.key(p1__52501_SHARP_))," ",lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,cljs.core.val(p1__52501_SHARP_))],null));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,arrangement.core.rank,value));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"{",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",entries)], null),"}"], null);
} else {
return "{}";
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_nil$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return "nil";
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_character$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_string$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_var$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return this$__$1.fipp$visit$IVisitor$visit_unknown$arity$2(null,value);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_set$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),cljs.core.sort.cljs$core$IFn$_invoke$arity$2(arrangement.core.rank,value));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#{",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",entries)], null),"}"], null);
} else {
return "#{}";
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.fipp$visit$IVisitor$visit_vector$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),value);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",entries)], null),"]"], null);
} else {
return "[]";
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52502){
var self__ = this;
var this__4379__auto____$1 = this;
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(self__.print_handlers,G__52502,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"print-handlers","print-handlers",-127526374,null)], null);
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.cljs$lang$type = true);

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"lambdaisland.deep-diff2.puget.printer/CanonicalPrinter",null,(1),null));
}));

(lambdaisland.deep_diff2.puget.printer.CanonicalPrinter.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"lambdaisland.deep-diff2.puget.printer/CanonicalPrinter");
}));

/**
 * Positional factory function for lambdaisland.deep-diff2.puget.printer/CanonicalPrinter.
 */
lambdaisland.deep_diff2.puget.printer.__GT_CanonicalPrinter = (function lambdaisland$deep_diff2$puget$printer$__GT_CanonicalPrinter(print_handlers){
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(print_handlers,null,null,null));
});

/**
 * Factory function for lambdaisland.deep-diff2.puget.printer/CanonicalPrinter, taking a map of keywords to field values.
 */
lambdaisland.deep_diff2.puget.printer.map__GT_CanonicalPrinter = (function lambdaisland$deep_diff2$puget$printer$map__GT_CanonicalPrinter(G__52506){
var extmap__4419__auto__ = (function (){var G__52536 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52506,new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901));
if(cljs.core.record_QMARK_(G__52506)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52536);
} else {
return G__52536;
}
})();
return (new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901).cljs$core$IFn$_invoke$arity$1(G__52506),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Constructs a new canonical printer with the given handler dispatch.
 */
lambdaisland.deep_diff2.puget.printer.canonical_printer = (function lambdaisland$deep_diff2$puget$printer$canonical_printer(var_args){
var G__52538 = arguments.length;
switch (G__52538) {
case 0:
return lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$core$IFn$_invoke$arity$0 = (function (){
return lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$core$IFn$_invoke$arity$1(null);
}));

(lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$core$IFn$_invoke$arity$1 = (function (handlers){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new lambdaisland.deep_diff2.puget.printer.CanonicalPrinter(handlers,null,null,null)),new cljs.core.Keyword(null,"width","width",-384071477),(0));
}));

(lambdaisland.deep_diff2.puget.printer.canonical_printer.cljs$lang$maxFixedArity = 1);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fipp.visit.IVisitor}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lambdaisland.deep_diff2.puget.printer.PrettyPrinter = (function (width,print_meta,sort_keys,map_delimiter,map_coll_separator,namespace_maps,seq_limit,print_color,color_markup,color_scheme,print_handlers,print_fallback,__meta,__extmap,__hash){
this.width = width;
this.print_meta = print_meta;
this.sort_keys = sort_keys;
this.map_delimiter = map_delimiter;
this.map_coll_separator = map_coll_separator;
this.namespace_maps = namespace_maps;
this.seq_limit = seq_limit;
this.print_color = print_color;
this.color_markup = color_markup;
this.color_scheme = color_scheme;
this.print_handlers = print_handlers;
this.print_fallback = print_fallback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52541,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52545 = k52541;
var G__52545__$1 = (((G__52545 instanceof cljs.core.Keyword))?G__52545.fqn:null);
switch (G__52545__$1) {
case "width":
return self__.width;

break;
case "print-meta":
return self__.print_meta;

break;
case "sort-keys":
return self__.sort_keys;

break;
case "map-delimiter":
return self__.map_delimiter;

break;
case "map-coll-separator":
return self__.map_coll_separator;

break;
case "namespace-maps":
return self__.namespace_maps;

break;
case "seq-limit":
return self__.seq_limit;

break;
case "print-color":
return self__.print_color;

break;
case "color-markup":
return self__.color_markup;

break;
case "color-scheme":
return self__.color_scheme;

break;
case "print-handlers":
return self__.print_handlers;

break;
case "print-fallback":
return self__.print_fallback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52541,else__4383__auto__);

}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52547){
var vec__52548 = p__52547;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52548,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52548,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#lambdaisland.deep-diff2.puget.printer.PrettyPrinter{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),self__.sort_keys],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),self__.map_delimiter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),self__.map_coll_separator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),self__.namespace_maps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),self__.seq_limit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-color","print-color",722462614),self__.print_color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color-markup","color-markup",266742518),self__.color_markup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),self__.color_scheme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),self__.print_handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),self__.print_fallback],null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52540){
var self__ = this;
var G__52540__$1 = this;
return (new cljs.core.RecordIter((0),G__52540__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),new cljs.core.Keyword(null,"print-color","print-color",722462614),new cljs.core.Keyword(null,"color-markup","color-markup",266742518),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-310152131 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52542,other52543){
var self__ = this;
var this52542__$1 = this;
return (((!((other52543 == null)))) && ((this52542__$1.constructor === other52543.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.width,other52543.width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.print_meta,other52543.print_meta)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.sort_keys,other52543.sort_keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.map_delimiter,other52543.map_delimiter)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.map_coll_separator,other52543.map_coll_separator)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.namespace_maps,other52543.namespace_maps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.seq_limit,other52543.seq_limit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.print_color,other52543.print_color)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.color_markup,other52543.color_markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.color_scheme,other52543.color_scheme)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.print_handlers,other52543.print_handlers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.print_fallback,other52543.print_fallback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52542__$1.__extmap,other52543.__extmap)));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),null,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),null,new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),null,new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),null,new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),null,new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),null,new cljs.core.Keyword(null,"color-markup","color-markup",266742518),null,new cljs.core.Keyword(null,"print-color","print-color",722462614),null,new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),null,new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52540){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52551 = cljs.core.keyword_identical_QMARK_;
var expr__52552 = k__4388__auto__;
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(G__52540,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,G__52540,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,G__52540,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,G__52540,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,G__52540,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,G__52540,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,G__52540,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-color","print-color",722462614),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"print-color","print-color",722462614),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,G__52540,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color-markup","color-markup",266742518),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"color-markup","color-markup",266742518),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,G__52540,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,G__52540,self__.print_handlers,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,G__52540,self__.print_fallback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52551.cljs$core$IFn$_invoke$arity$2 ? pred__52551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),expr__52552) : pred__52551.call(null,new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),expr__52552)))){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,G__52540,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52540),null));
}
}
}
}
}
}
}
}
}
}
}
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),self__.sort_keys,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),self__.map_delimiter,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),self__.map_coll_separator,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),self__.namespace_maps,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),self__.seq_limit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-color","print-color",722462614),self__.print_color,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"color-markup","color-markup",266742518),self__.color_markup,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),self__.color_scheme,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),self__.print_handlers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894),self__.print_fallback,null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_record$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return this$__$1.fipp$visit$IVisitor$visit_tagged$arity$2(null,cljs.core.tagged_literal(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lambdaisland.deep_diff2.puget.printer.get_type_name(value)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,value)));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_meta$arity$3 = (function (this$,metadata,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.print_meta)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"^"),lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,metadata)], null),new cljs.core.Keyword(null,"line","line",212345235),lambdaisland.deep_diff2.puget.printer.format_doc_STAR_(this$__$1,value)], null);
} else {
return lambdaisland.deep_diff2.puget.printer.format_doc_STAR_(this$__$1,value);
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_number$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"number","number",1570378438),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_pattern$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"#"),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"string","string",-1989541586),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\""].join(''))], null);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_unknown$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
var G__52559 = self__.print_fallback;
var G__52559__$1 = (((G__52559 instanceof cljs.core.Keyword))?G__52559.fqn:null);
switch (G__52559__$1) {
case "pretty":
return lambdaisland.deep_diff2.puget.printer.format_unknown.cljs$core$IFn$_invoke$arity$2(this$__$1,value);

break;
case "print":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))], null);

break;
case "error":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No defined representation for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.deep_diff2.puget.printer.get_type_name(value)),": ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"causes","causes",320696351),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undefined-representation","undefined-representation",-1395497281),null], null), null)], null));

break;
default:
if(cljs.core.ifn_QMARK_(self__.print_fallback)){
return (self__.print_fallback.cljs$core$IFn$_invoke$arity$2 ? self__.print_fallback.cljs$core$IFn$_invoke$arity$2(this$__$1,value) : self__.print_fallback.call(null,this$__$1,value));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unsupported value for print-fallback: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.print_fallback], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"causes","causes",320696351),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsupported-value","unsupported-value",394963777),null], null), null)], null));
}

}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_symbol$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_seq$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var vec__52560 = (cljs.core.truth_((function (){var and__4115__auto__ = self__.seq_limit;
if(cljs.core.truth_(and__4115__auto__)){
return (self__.seq_limit > (0));
} else {
return and__4115__auto__;
}
})())?(function (){var head = cljs.core.take.cljs$core$IFn$_invoke$arity$2(self__.seq_limit,value);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,(self__.seq_limit <= cljs.core.count(head))], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(value),false], null));
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52560,(0),null);
var trimmed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52560,(1),null);
var elements = (function (){var G__52563 = (((cljs.core.first(values) instanceof cljs.core.Symbol))?cljs.core.cons(lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"function-symbol","function-symbol",-1336068270),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(values))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),cljs.core.rest(values))):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),values));
if(cljs.core.truth_(trimmed_QMARK_)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__52563,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"nil","nil",99600501),"...")], null));
} else {
return G__52563;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"("),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),elements)], null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),")")], null);
} else {
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"()");
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_boolean$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_tagged$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
var map__52564 = value;
var map__52564__$1 = (((((!((map__52564 == null))))?(((((map__52564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52564):map__52564);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52564__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52564__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(value))].join('')),((cljs.core.coll_QMARK_(form))?new cljs.core.Keyword(null,"line","line",212345235):" "),lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(value))], null);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_keyword$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"keyword","keyword",811389747),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_map$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var vec__52567 = (cljs.core.truth_(self__.namespace_maps)?lambdaisland.deep_diff2.puget.printer.common_key_ns(value):null);
var common_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52567,(0),null);
var stripped = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52567,(1),null);
var kvs = lambdaisland.deep_diff2.puget.printer.order_collection(self__.sort_keys,(function (){var or__4126__auto__ = stripped;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})(),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.sort_by,cljs.core.first,arrangement.core.rank));
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52570){
var vec__52571 = p__52570;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52571,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52571,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,k),((cljs.core.coll_QMARK_(v))?self__.map_coll_separator:" "),lambdaisland.deep_diff2.puget.printer.format_doc(this$__$1,v)], null);
}),kvs);
var map_doc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"{"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),self__.map_delimiter,new cljs.core.Keyword(null,"line","line",212345235)], null),entries)], null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"}")], null);
if(cljs.core.truth_(common_ns)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(common_ns)].join('')),new cljs.core.Keyword(null,"line","line",212345235),map_doc], null);
} else {
return map_doc;
}
} else {
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"{}");
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_nil$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"nil","nil",99600501),"nil");
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_character$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"character","character",380652989),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_string$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_var$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"#'"),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),(2)))], null);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_set$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
var entries = lambdaisland.deep_diff2.puget.printer.order_collection(self__.sort_keys,value,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.sort,arrangement.core.rank));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"#{"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),entries))], null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"}")], null);
} else {
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"#{}");
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.fipp$visit$IVisitor$visit_vector$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(value)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"["),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc,this$__$1),value))], null),lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"]")], null);
} else {
return lambdaisland.deep_diff2.puget.color.document.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"[]");
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52540){
var self__ = this;
var this__4379__auto____$1 = this;
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(self__.width,self__.print_meta,self__.sort_keys,self__.map_delimiter,self__.map_coll_separator,self__.namespace_maps,self__.seq_limit,self__.print_color,self__.color_markup,self__.color_scheme,self__.print_handlers,self__.print_fallback,G__52540,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"print-meta","print-meta",-1620321171,null),new cljs.core.Symbol(null,"sort-keys","sort-keys",-1342923776,null),new cljs.core.Symbol(null,"map-delimiter","map-delimiter",968790435,null),new cljs.core.Symbol(null,"map-coll-separator","map-coll-separator",-2044774454,null),new cljs.core.Symbol(null,"namespace-maps","namespace-maps",-396495601,null),new cljs.core.Symbol(null,"seq-limit","seq-limit",474615035,null),new cljs.core.Symbol(null,"print-color","print-color",-1931973155,null),new cljs.core.Symbol(null,"color-markup","color-markup",1907274045,null),new cljs.core.Symbol(null,"color-scheme","color-scheme",736689232,null),new cljs.core.Symbol(null,"print-handlers","print-handlers",-127526374,null),new cljs.core.Symbol(null,"print-fallback","print-fallback",411319633,null)], null);
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.cljs$lang$type = true);

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"lambdaisland.deep-diff2.puget.printer/PrettyPrinter",null,(1),null));
}));

(lambdaisland.deep_diff2.puget.printer.PrettyPrinter.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"lambdaisland.deep-diff2.puget.printer/PrettyPrinter");
}));

/**
 * Positional factory function for lambdaisland.deep-diff2.puget.printer/PrettyPrinter.
 */
lambdaisland.deep_diff2.puget.printer.__GT_PrettyPrinter = (function lambdaisland$deep_diff2$puget$printer$__GT_PrettyPrinter(width,print_meta,sort_keys,map_delimiter,map_coll_separator,namespace_maps,seq_limit,print_color,color_markup,color_scheme,print_handlers,print_fallback){
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(width,print_meta,sort_keys,map_delimiter,map_coll_separator,namespace_maps,seq_limit,print_color,color_markup,color_scheme,print_handlers,print_fallback,null,null,null));
});

/**
 * Factory function for lambdaisland.deep-diff2.puget.printer/PrettyPrinter, taking a map of keywords to field values.
 */
lambdaisland.deep_diff2.puget.printer.map__GT_PrettyPrinter = (function lambdaisland$deep_diff2$puget$printer$map__GT_PrettyPrinter(G__52544){
var extmap__4419__auto__ = (function (){var G__52575 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52544,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993),new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092),new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315),new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128),new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492),new cljs.core.Keyword(null,"print-color","print-color",722462614),new cljs.core.Keyword(null,"color-markup","color-markup",266742518),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894)], 0));
if(cljs.core.record_QMARK_(G__52544)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52575);
} else {
return G__52575;
}
})();
return (new lambdaisland.deep_diff2.puget.printer.PrettyPrinter(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"sort-keys","sort-keys",1311511993).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"map-delimiter","map-delimiter",-671741092).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"map-coll-separator","map-coll-separator",609661315).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"namespace-maps","namespace-maps",-2037027128).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"seq-limit","seq-limit",-1165916492).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"print-color","print-color",722462614).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"color-markup","color-markup",266742518).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901).cljs$core$IFn$_invoke$arity$1(G__52544),new cljs.core.Keyword(null,"print-fallback","print-fallback",-1229211894).cljs$core$IFn$_invoke$arity$1(G__52544),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Constructs a new printer from the given configuration.
 */
lambdaisland.deep_diff2.puget.printer.pretty_printer = (function lambdaisland$deep_diff2$puget$printer$pretty_printer(opts){
return lambdaisland.deep_diff2.puget.printer.map__GT_PrettyPrinter(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.merge_options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"print-handlers","print-handlers",-1768057901),lambdaisland.deep_diff2.puget.printer.common_handlers], null),lambdaisland.deep_diff2.puget.printer._STAR_options_STAR_,opts], null)));
});
/**
 * Prints a value using the given printer.
 */
lambdaisland.deep_diff2.puget.printer.render_out = (function lambdaisland$deep_diff2$puget$printer$render_out(var_args){
var G__52580 = arguments.length;
switch (G__52580) {
case 2:
return lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$2 = (function (printer,value){
return lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$3(printer,value,null);
}));

(lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$3 = (function (printer,value,opts){
var _STAR_print_meta_STAR__orig_val__52585 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__52586 = false;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52586);

try{return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.puget.printer.format_doc(printer,value),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(printer)], null),opts], 0)));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52585);
}}));

(lambdaisland.deep_diff2.puget.printer.render_out.cljs$lang$maxFixedArity = 3);

/**
 * Renders a value to a string using the given printer.
 */
lambdaisland.deep_diff2.puget.printer.render_str = (function lambdaisland$deep_diff2$puget$printer$render_str(printer,value){
return clojure.string.trim_newline((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52587_52731 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52588_52732 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52589_52733 = true;
var _STAR_print_fn_STAR__temp_val__52590_52734 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52589_52733);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52590_52734);

try{lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$2(printer,value);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52588_52732);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52587_52731);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
});
/**
 * Pretty-prints a value to *out*. Options may be passed to override the
 *   default *options* map.
 */
lambdaisland.deep_diff2.puget.printer.pprint = (function lambdaisland$deep_diff2$puget$printer$pprint(var_args){
var G__52594 = arguments.length;
switch (G__52594) {
case 1:
return lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return lambdaisland.deep_diff2.puget.printer.render_out.cljs$core$IFn$_invoke$arity$3(lambdaisland.deep_diff2.puget.printer.pretty_printer(opts),value,opts);
}));

(lambdaisland.deep_diff2.puget.printer.pprint.cljs$lang$maxFixedArity = 2);

/**
 * Pretty-print a value to a string.
 */
lambdaisland.deep_diff2.puget.printer.pprint_str = (function lambdaisland$deep_diff2$puget$printer$pprint_str(var_args){
var G__52596 = arguments.length;
switch (G__52596) {
case 1:
return lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return lambdaisland.deep_diff2.puget.printer.render_str(lambdaisland.deep_diff2.puget.printer.pretty_printer(opts),value);
}));

(lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$lang$maxFixedArity = 2);

/**
 * Like pprint, but turns on colored output.
 */
lambdaisland.deep_diff2.puget.printer.cprint = (function lambdaisland$deep_diff2$puget$printer$cprint(var_args){
var G__52598 = arguments.length;
switch (G__52598) {
case 1:
return lambdaisland.deep_diff2.puget.printer.cprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.deep_diff2.puget.printer.cprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.cprint.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lambdaisland.deep_diff2.puget.printer.cprint.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(lambdaisland.deep_diff2.puget.printer.cprint.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return lambdaisland.deep_diff2.puget.printer.pprint.cljs$core$IFn$_invoke$arity$2(value,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"print-color","print-color",722462614),true));
}));

(lambdaisland.deep_diff2.puget.printer.cprint.cljs$lang$maxFixedArity = 2);

/**
 * Pretty-prints a value to a colored string.
 */
lambdaisland.deep_diff2.puget.printer.cprint_str = (function lambdaisland$deep_diff2$puget$printer$cprint_str(var_args){
var G__52600 = arguments.length;
switch (G__52600) {
case 1:
return lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return lambdaisland.deep_diff2.puget.printer.pprint_str.cljs$core$IFn$_invoke$arity$2(value,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"print-color","print-color",722462614),true));
}));

(lambdaisland.deep_diff2.puget.printer.cprint_str.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=lambdaisland.deep_diff2.puget.printer.js.map
