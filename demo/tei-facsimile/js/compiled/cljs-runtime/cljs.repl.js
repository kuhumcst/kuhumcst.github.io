goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52945){
var map__52946 = p__52945;
var map__52946__$1 = (((((!((map__52946 == null))))?(((((map__52946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52946):map__52946);
var m = map__52946__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52946__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52946__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52948_53049 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52949_53050 = null;
var count__52950_53051 = (0);
var i__52951_53052 = (0);
while(true){
if((i__52951_53052 < count__52950_53051)){
var f_53053 = chunk__52949_53050.cljs$core$IIndexed$_nth$arity$2(null,i__52951_53052);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53053], 0));


var G__53054 = seq__52948_53049;
var G__53055 = chunk__52949_53050;
var G__53056 = count__52950_53051;
var G__53057 = (i__52951_53052 + (1));
seq__52948_53049 = G__53054;
chunk__52949_53050 = G__53055;
count__52950_53051 = G__53056;
i__52951_53052 = G__53057;
continue;
} else {
var temp__5735__auto___53058 = cljs.core.seq(seq__52948_53049);
if(temp__5735__auto___53058){
var seq__52948_53059__$1 = temp__5735__auto___53058;
if(cljs.core.chunked_seq_QMARK_(seq__52948_53059__$1)){
var c__4556__auto___53060 = cljs.core.chunk_first(seq__52948_53059__$1);
var G__53061 = cljs.core.chunk_rest(seq__52948_53059__$1);
var G__53062 = c__4556__auto___53060;
var G__53063 = cljs.core.count(c__4556__auto___53060);
var G__53064 = (0);
seq__52948_53049 = G__53061;
chunk__52949_53050 = G__53062;
count__52950_53051 = G__53063;
i__52951_53052 = G__53064;
continue;
} else {
var f_53065 = cljs.core.first(seq__52948_53059__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53065], 0));


var G__53066 = cljs.core.next(seq__52948_53059__$1);
var G__53067 = null;
var G__53068 = (0);
var G__53069 = (0);
seq__52948_53049 = G__53066;
chunk__52949_53050 = G__53067;
count__52950_53051 = G__53068;
i__52951_53052 = G__53069;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53070 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53070], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53070)))?cljs.core.second(arglists_53070):arglists_53070)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52952_53071 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52953_53072 = null;
var count__52954_53073 = (0);
var i__52955_53074 = (0);
while(true){
if((i__52955_53074 < count__52954_53073)){
var vec__52966_53075 = chunk__52953_53072.cljs$core$IIndexed$_nth$arity$2(null,i__52955_53074);
var name_53076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52966_53075,(0),null);
var map__52969_53077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52966_53075,(1),null);
var map__52969_53078__$1 = (((((!((map__52969_53077 == null))))?(((((map__52969_53077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52969_53077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52969_53077):map__52969_53077);
var doc_53079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52969_53078__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52969_53078__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53076], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53080], 0));

if(cljs.core.truth_(doc_53079)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53079], 0));
} else {
}


var G__53081 = seq__52952_53071;
var G__53082 = chunk__52953_53072;
var G__53083 = count__52954_53073;
var G__53084 = (i__52955_53074 + (1));
seq__52952_53071 = G__53081;
chunk__52953_53072 = G__53082;
count__52954_53073 = G__53083;
i__52955_53074 = G__53084;
continue;
} else {
var temp__5735__auto___53085 = cljs.core.seq(seq__52952_53071);
if(temp__5735__auto___53085){
var seq__52952_53086__$1 = temp__5735__auto___53085;
if(cljs.core.chunked_seq_QMARK_(seq__52952_53086__$1)){
var c__4556__auto___53087 = cljs.core.chunk_first(seq__52952_53086__$1);
var G__53088 = cljs.core.chunk_rest(seq__52952_53086__$1);
var G__53089 = c__4556__auto___53087;
var G__53090 = cljs.core.count(c__4556__auto___53087);
var G__53091 = (0);
seq__52952_53071 = G__53088;
chunk__52953_53072 = G__53089;
count__52954_53073 = G__53090;
i__52955_53074 = G__53091;
continue;
} else {
var vec__52971_53092 = cljs.core.first(seq__52952_53086__$1);
var name_53093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52971_53092,(0),null);
var map__52974_53094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52971_53092,(1),null);
var map__52974_53095__$1 = (((((!((map__52974_53094 == null))))?(((((map__52974_53094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52974_53094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52974_53094):map__52974_53094);
var doc_53096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52974_53095__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52974_53095__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53093], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53097], 0));

if(cljs.core.truth_(doc_53096)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53096], 0));
} else {
}


var G__53098 = cljs.core.next(seq__52952_53086__$1);
var G__53099 = null;
var G__53100 = (0);
var G__53101 = (0);
seq__52952_53071 = G__53098;
chunk__52953_53072 = G__53099;
count__52954_53073 = G__53100;
i__52955_53074 = G__53101;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__52976 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52977 = null;
var count__52978 = (0);
var i__52979 = (0);
while(true){
if((i__52979 < count__52978)){
var role = chunk__52977.cljs$core$IIndexed$_nth$arity$2(null,i__52979);
var temp__5735__auto___53102__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53102__$1)){
var spec_53103 = temp__5735__auto___53102__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53103)], 0));
} else {
}


var G__53104 = seq__52976;
var G__53105 = chunk__52977;
var G__53106 = count__52978;
var G__53107 = (i__52979 + (1));
seq__52976 = G__53104;
chunk__52977 = G__53105;
count__52978 = G__53106;
i__52979 = G__53107;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__52976);
if(temp__5735__auto____$1){
var seq__52976__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52976__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52976__$1);
var G__53108 = cljs.core.chunk_rest(seq__52976__$1);
var G__53109 = c__4556__auto__;
var G__53110 = cljs.core.count(c__4556__auto__);
var G__53111 = (0);
seq__52976 = G__53108;
chunk__52977 = G__53109;
count__52978 = G__53110;
i__52979 = G__53111;
continue;
} else {
var role = cljs.core.first(seq__52976__$1);
var temp__5735__auto___53112__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53112__$2)){
var spec_53113 = temp__5735__auto___53112__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53113)], 0));
} else {
}


var G__53114 = cljs.core.next(seq__52976__$1);
var G__53115 = null;
var G__53116 = (0);
var G__53117 = (0);
seq__52976 = G__53114;
chunk__52977 = G__53115;
count__52978 = G__53116;
i__52979 = G__53117;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__53118 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53119 = cljs.core.ex_cause(t);
via = G__53118;
t = G__53119;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__52982 = datafied_throwable;
var map__52982__$1 = (((((!((map__52982 == null))))?(((((map__52982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52982):map__52982);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52982__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52982__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52982__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52983 = cljs.core.last(via);
var map__52983__$1 = (((((!((map__52983 == null))))?(((((map__52983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52983):map__52983);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52983__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52983__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52983__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52984 = data;
var map__52984__$1 = (((((!((map__52984 == null))))?(((((map__52984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52984):map__52984);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52984__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52984__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52984__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52985 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52985__$1 = (((((!((map__52985 == null))))?(((((map__52985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52985):map__52985);
var top_data = map__52985__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52985__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__52990 = phase;
var G__52990__$1 = (((G__52990 instanceof cljs.core.Keyword))?G__52990.fqn:null);
switch (G__52990__$1) {
case "read-source":
var map__52991 = data;
var map__52991__$1 = (((((!((map__52991 == null))))?(((((map__52991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52991):map__52991);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52991__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52991__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__52993 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__52993__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52993,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52993);
var G__52993__$2 = (cljs.core.truth_((function (){var fexpr__52994 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52994.cljs$core$IFn$_invoke$arity$1 ? fexpr__52994.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52994.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52993__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52993__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52993__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52993__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__52995 = top_data;
var G__52995__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52995,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52995);
var G__52995__$2 = (cljs.core.truth_((function (){var fexpr__52996 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52996.cljs$core$IFn$_invoke$arity$1 ? fexpr__52996.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52996.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52995__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52995__$1);
var G__52995__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52995__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52995__$2);
var G__52995__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52995__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52995__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52995__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52995__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52997 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52997,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52997,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52997,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52997,(3),null);
var G__53000 = top_data;
var G__53000__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53000,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53000);
var G__53000__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53000__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53000__$1);
var G__53000__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53000__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53000__$2);
var G__53000__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53000__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53000__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53000__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53000__$4;
}

break;
case "execution":
var vec__53001 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53001,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53001,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53001,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53001,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52981_SHARP_){
var or__4126__auto__ = (p1__52981_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__53005 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53005.cljs$core$IFn$_invoke$arity$1 ? fexpr__53005.cljs$core$IFn$_invoke$arity$1(p1__52981_SHARP_) : fexpr__53005.call(null,p1__52981_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__53006 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53006__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53006,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53006);
var G__53006__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53006__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53006__$1);
var G__53006__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53006__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53006__$2);
var G__53006__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53006__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53006__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53006__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53006__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52990__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53009){
var map__53010 = p__53009;
var map__53010__$1 = (((((!((map__53010 == null))))?(((((map__53010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53010):map__53010);
var triage_data = map__53010__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53010__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53010__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53010__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53010__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53010__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53010__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53010__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53010__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53012 = phase;
var G__53012__$1 = (((G__53012 instanceof cljs.core.Keyword))?G__53012.fqn:null);
switch (G__53012__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53013 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53014 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53015 = loc;
var G__53016 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53017_53122 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53018_53123 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53019_53124 = true;
var _STAR_print_fn_STAR__temp_val__53020_53125 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53019_53124);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53020_53125);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53007_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53007_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53018_53123);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53017_53122);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53013,G__53014,G__53015,G__53016) : format.call(null,G__53013,G__53014,G__53015,G__53016));

break;
case "macroexpansion":
var G__53021 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53022 = cause_type;
var G__53023 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53024 = loc;
var G__53025 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53021,G__53022,G__53023,G__53024,G__53025) : format.call(null,G__53021,G__53022,G__53023,G__53024,G__53025));

break;
case "compile-syntax-check":
var G__53026 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53027 = cause_type;
var G__53028 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53029 = loc;
var G__53030 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53026,G__53027,G__53028,G__53029,G__53030) : format.call(null,G__53026,G__53027,G__53028,G__53029,G__53030));

break;
case "compilation":
var G__53031 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53032 = cause_type;
var G__53033 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53034 = loc;
var G__53035 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53031,G__53032,G__53033,G__53034,G__53035) : format.call(null,G__53031,G__53032,G__53033,G__53034,G__53035));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53036 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53037 = symbol;
var G__53038 = loc;
var G__53039 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53040_53126 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53041_53127 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53042_53128 = true;
var _STAR_print_fn_STAR__temp_val__53043_53129 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53042_53128);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53043_53129);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53008_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53008_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53041_53127);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53040_53126);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53036,G__53037,G__53038,G__53039) : format.call(null,G__53036,G__53037,G__53038,G__53039));
} else {
var G__53044 = "Execution error%s at %s(%s).\n%s\n";
var G__53045 = cause_type;
var G__53046 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53047 = loc;
var G__53048 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53044,G__53045,G__53046,G__53047,G__53048) : format.call(null,G__53044,G__53045,G__53046,G__53047,G__53048));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53012__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
