goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47941 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47941(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47947 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47947(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46551 = coll;
var G__46552 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46551,G__46552) : shadow.dom.lazy_native_coll_seq.call(null,G__46551,G__46552));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46600 = arguments.length;
switch (G__46600) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46616 = arguments.length;
switch (G__46616) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46632 = arguments.length;
switch (G__46632) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46665 = arguments.length;
switch (G__46665) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46690 = arguments.length;
switch (G__46690) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46716 = arguments.length;
switch (G__46716) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46749){if((e46749 instanceof Object)){
var e = e46749;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46749;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46773 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46774 = null;
var count__46775 = (0);
var i__46776 = (0);
while(true){
if((i__46776 < count__46775)){
var el = chunk__46774.cljs$core$IIndexed$_nth$arity$2(null,i__46776);
var handler_47987__$1 = ((function (seq__46773,chunk__46774,count__46775,i__46776,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46773,chunk__46774,count__46775,i__46776,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47987__$1);


var G__47988 = seq__46773;
var G__47989 = chunk__46774;
var G__47990 = count__46775;
var G__47991 = (i__46776 + (1));
seq__46773 = G__47988;
chunk__46774 = G__47989;
count__46775 = G__47990;
i__46776 = G__47991;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46773);
if(temp__5735__auto__){
var seq__46773__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46773__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46773__$1);
var G__47994 = cljs.core.chunk_rest(seq__46773__$1);
var G__47995 = c__4556__auto__;
var G__47996 = cljs.core.count(c__4556__auto__);
var G__47997 = (0);
seq__46773 = G__47994;
chunk__46774 = G__47995;
count__46775 = G__47996;
i__46776 = G__47997;
continue;
} else {
var el = cljs.core.first(seq__46773__$1);
var handler_47998__$1 = ((function (seq__46773,chunk__46774,count__46775,i__46776,el,seq__46773__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46773,chunk__46774,count__46775,i__46776,el,seq__46773__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47998__$1);


var G__47999 = cljs.core.next(seq__46773__$1);
var G__48000 = null;
var G__48001 = (0);
var G__48002 = (0);
seq__46773 = G__47999;
chunk__46774 = G__48000;
count__46775 = G__48001;
i__46776 = G__48002;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__46822 = arguments.length;
switch (G__46822) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46838 = cljs.core.seq(events);
var chunk__46839 = null;
var count__46840 = (0);
var i__46841 = (0);
while(true){
if((i__46841 < count__46840)){
var vec__46864 = chunk__46839.cljs$core$IIndexed$_nth$arity$2(null,i__46841);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46864,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46864,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48006 = seq__46838;
var G__48007 = chunk__46839;
var G__48008 = count__46840;
var G__48009 = (i__46841 + (1));
seq__46838 = G__48006;
chunk__46839 = G__48007;
count__46840 = G__48008;
i__46841 = G__48009;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46838);
if(temp__5735__auto__){
var seq__46838__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46838__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46838__$1);
var G__48011 = cljs.core.chunk_rest(seq__46838__$1);
var G__48012 = c__4556__auto__;
var G__48013 = cljs.core.count(c__4556__auto__);
var G__48014 = (0);
seq__46838 = G__48011;
chunk__46839 = G__48012;
count__46840 = G__48013;
i__46841 = G__48014;
continue;
} else {
var vec__46871 = cljs.core.first(seq__46838__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46871,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46871,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48016 = cljs.core.next(seq__46838__$1);
var G__48017 = null;
var G__48018 = (0);
var G__48019 = (0);
seq__46838 = G__48016;
chunk__46839 = G__48017;
count__46840 = G__48018;
i__46841 = G__48019;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46881 = cljs.core.seq(styles);
var chunk__46882 = null;
var count__46883 = (0);
var i__46884 = (0);
while(true){
if((i__46884 < count__46883)){
var vec__46914 = chunk__46882.cljs$core$IIndexed$_nth$arity$2(null,i__46884);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46914,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48030 = seq__46881;
var G__48031 = chunk__46882;
var G__48032 = count__46883;
var G__48033 = (i__46884 + (1));
seq__46881 = G__48030;
chunk__46882 = G__48031;
count__46883 = G__48032;
i__46884 = G__48033;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46881);
if(temp__5735__auto__){
var seq__46881__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46881__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46881__$1);
var G__48042 = cljs.core.chunk_rest(seq__46881__$1);
var G__48043 = c__4556__auto__;
var G__48044 = cljs.core.count(c__4556__auto__);
var G__48045 = (0);
seq__46881 = G__48042;
chunk__46882 = G__48043;
count__46883 = G__48044;
i__46884 = G__48045;
continue;
} else {
var vec__46927 = cljs.core.first(seq__46881__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46927,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46927,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48052 = cljs.core.next(seq__46881__$1);
var G__48053 = null;
var G__48054 = (0);
var G__48055 = (0);
seq__46881 = G__48052;
chunk__46882 = G__48053;
count__46883 = G__48054;
i__46884 = G__48055;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46937_48059 = key;
var G__46937_48060__$1 = (((G__46937_48059 instanceof cljs.core.Keyword))?G__46937_48059.fqn:null);
switch (G__46937_48060__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48082 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_48082,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_48082,"aria-");
}
})())){
el.setAttribute(ks_48082,value);
} else {
(el[ks_48082] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47000){
var map__47001 = p__47000;
var map__47001__$1 = (((((!((map__47001 == null))))?(((((map__47001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47001):map__47001);
var props = map__47001__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47001__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47010 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47010,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47010,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47010,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47022 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47022,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47022;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47033 = arguments.length;
switch (G__47033) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47055){
var vec__47058 = p__47055;
var seq__47059 = cljs.core.seq(vec__47058);
var first__47060 = cljs.core.first(seq__47059);
var seq__47059__$1 = cljs.core.next(seq__47059);
var nn = first__47060;
var first__47060__$1 = cljs.core.first(seq__47059__$1);
var seq__47059__$2 = cljs.core.next(seq__47059__$1);
var np = first__47060__$1;
var nc = seq__47059__$2;
var node = vec__47058;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47067 = nn;
var G__47069 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47067,G__47069) : create_fn.call(null,G__47067,G__47069));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47073 = nn;
var G__47074 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47073,G__47074) : create_fn.call(null,G__47073,G__47074));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47076 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47076,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47076,(1),null);
var seq__47079_48138 = cljs.core.seq(node_children);
var chunk__47080_48139 = null;
var count__47081_48140 = (0);
var i__47082_48141 = (0);
while(true){
if((i__47082_48141 < count__47081_48140)){
var child_struct_48143 = chunk__47080_48139.cljs$core$IIndexed$_nth$arity$2(null,i__47082_48141);
var children_48144 = shadow.dom.dom_node(child_struct_48143);
if(cljs.core.seq_QMARK_(children_48144)){
var seq__47131_48145 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48144));
var chunk__47133_48146 = null;
var count__47134_48147 = (0);
var i__47135_48148 = (0);
while(true){
if((i__47135_48148 < count__47134_48147)){
var child_48153 = chunk__47133_48146.cljs$core$IIndexed$_nth$arity$2(null,i__47135_48148);
if(cljs.core.truth_(child_48153)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48153);


var G__48154 = seq__47131_48145;
var G__48155 = chunk__47133_48146;
var G__48156 = count__47134_48147;
var G__48157 = (i__47135_48148 + (1));
seq__47131_48145 = G__48154;
chunk__47133_48146 = G__48155;
count__47134_48147 = G__48156;
i__47135_48148 = G__48157;
continue;
} else {
var G__48158 = seq__47131_48145;
var G__48159 = chunk__47133_48146;
var G__48160 = count__47134_48147;
var G__48161 = (i__47135_48148 + (1));
seq__47131_48145 = G__48158;
chunk__47133_48146 = G__48159;
count__47134_48147 = G__48160;
i__47135_48148 = G__48161;
continue;
}
} else {
var temp__5735__auto___48163 = cljs.core.seq(seq__47131_48145);
if(temp__5735__auto___48163){
var seq__47131_48164__$1 = temp__5735__auto___48163;
if(cljs.core.chunked_seq_QMARK_(seq__47131_48164__$1)){
var c__4556__auto___48165 = cljs.core.chunk_first(seq__47131_48164__$1);
var G__48166 = cljs.core.chunk_rest(seq__47131_48164__$1);
var G__48167 = c__4556__auto___48165;
var G__48168 = cljs.core.count(c__4556__auto___48165);
var G__48169 = (0);
seq__47131_48145 = G__48166;
chunk__47133_48146 = G__48167;
count__47134_48147 = G__48168;
i__47135_48148 = G__48169;
continue;
} else {
var child_48171 = cljs.core.first(seq__47131_48164__$1);
if(cljs.core.truth_(child_48171)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48171);


var G__48172 = cljs.core.next(seq__47131_48164__$1);
var G__48173 = null;
var G__48174 = (0);
var G__48175 = (0);
seq__47131_48145 = G__48172;
chunk__47133_48146 = G__48173;
count__47134_48147 = G__48174;
i__47135_48148 = G__48175;
continue;
} else {
var G__48177 = cljs.core.next(seq__47131_48164__$1);
var G__48178 = null;
var G__48179 = (0);
var G__48180 = (0);
seq__47131_48145 = G__48177;
chunk__47133_48146 = G__48178;
count__47134_48147 = G__48179;
i__47135_48148 = G__48180;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48144);
}


var G__48183 = seq__47079_48138;
var G__48184 = chunk__47080_48139;
var G__48185 = count__47081_48140;
var G__48186 = (i__47082_48141 + (1));
seq__47079_48138 = G__48183;
chunk__47080_48139 = G__48184;
count__47081_48140 = G__48185;
i__47082_48141 = G__48186;
continue;
} else {
var temp__5735__auto___48191 = cljs.core.seq(seq__47079_48138);
if(temp__5735__auto___48191){
var seq__47079_48192__$1 = temp__5735__auto___48191;
if(cljs.core.chunked_seq_QMARK_(seq__47079_48192__$1)){
var c__4556__auto___48193 = cljs.core.chunk_first(seq__47079_48192__$1);
var G__48194 = cljs.core.chunk_rest(seq__47079_48192__$1);
var G__48195 = c__4556__auto___48193;
var G__48196 = cljs.core.count(c__4556__auto___48193);
var G__48197 = (0);
seq__47079_48138 = G__48194;
chunk__47080_48139 = G__48195;
count__47081_48140 = G__48196;
i__47082_48141 = G__48197;
continue;
} else {
var child_struct_48200 = cljs.core.first(seq__47079_48192__$1);
var children_48201 = shadow.dom.dom_node(child_struct_48200);
if(cljs.core.seq_QMARK_(children_48201)){
var seq__47154_48202 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48201));
var chunk__47157_48203 = null;
var count__47158_48204 = (0);
var i__47159_48205 = (0);
while(true){
if((i__47159_48205 < count__47158_48204)){
var child_48208 = chunk__47157_48203.cljs$core$IIndexed$_nth$arity$2(null,i__47159_48205);
if(cljs.core.truth_(child_48208)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48208);


var G__48210 = seq__47154_48202;
var G__48211 = chunk__47157_48203;
var G__48212 = count__47158_48204;
var G__48213 = (i__47159_48205 + (1));
seq__47154_48202 = G__48210;
chunk__47157_48203 = G__48211;
count__47158_48204 = G__48212;
i__47159_48205 = G__48213;
continue;
} else {
var G__48215 = seq__47154_48202;
var G__48216 = chunk__47157_48203;
var G__48217 = count__47158_48204;
var G__48218 = (i__47159_48205 + (1));
seq__47154_48202 = G__48215;
chunk__47157_48203 = G__48216;
count__47158_48204 = G__48217;
i__47159_48205 = G__48218;
continue;
}
} else {
var temp__5735__auto___48220__$1 = cljs.core.seq(seq__47154_48202);
if(temp__5735__auto___48220__$1){
var seq__47154_48221__$1 = temp__5735__auto___48220__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47154_48221__$1)){
var c__4556__auto___48222 = cljs.core.chunk_first(seq__47154_48221__$1);
var G__48223 = cljs.core.chunk_rest(seq__47154_48221__$1);
var G__48224 = c__4556__auto___48222;
var G__48225 = cljs.core.count(c__4556__auto___48222);
var G__48226 = (0);
seq__47154_48202 = G__48223;
chunk__47157_48203 = G__48224;
count__47158_48204 = G__48225;
i__47159_48205 = G__48226;
continue;
} else {
var child_48228 = cljs.core.first(seq__47154_48221__$1);
if(cljs.core.truth_(child_48228)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48228);


var G__48229 = cljs.core.next(seq__47154_48221__$1);
var G__48230 = null;
var G__48231 = (0);
var G__48232 = (0);
seq__47154_48202 = G__48229;
chunk__47157_48203 = G__48230;
count__47158_48204 = G__48231;
i__47159_48205 = G__48232;
continue;
} else {
var G__48235 = cljs.core.next(seq__47154_48221__$1);
var G__48236 = null;
var G__48237 = (0);
var G__48238 = (0);
seq__47154_48202 = G__48235;
chunk__47157_48203 = G__48236;
count__47158_48204 = G__48237;
i__47159_48205 = G__48238;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48201);
}


var G__48241 = cljs.core.next(seq__47079_48192__$1);
var G__48242 = null;
var G__48243 = (0);
var G__48244 = (0);
seq__47079_48138 = G__48241;
chunk__47080_48139 = G__48242;
count__47081_48140 = G__48243;
i__47082_48141 = G__48244;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47186 = cljs.core.seq(node);
var chunk__47187 = null;
var count__47188 = (0);
var i__47189 = (0);
while(true){
if((i__47189 < count__47188)){
var n = chunk__47187.cljs$core$IIndexed$_nth$arity$2(null,i__47189);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48257 = seq__47186;
var G__48258 = chunk__47187;
var G__48259 = count__47188;
var G__48260 = (i__47189 + (1));
seq__47186 = G__48257;
chunk__47187 = G__48258;
count__47188 = G__48259;
i__47189 = G__48260;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47186);
if(temp__5735__auto__){
var seq__47186__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47186__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47186__$1);
var G__48262 = cljs.core.chunk_rest(seq__47186__$1);
var G__48263 = c__4556__auto__;
var G__48264 = cljs.core.count(c__4556__auto__);
var G__48265 = (0);
seq__47186 = G__48262;
chunk__47187 = G__48263;
count__47188 = G__48264;
i__47189 = G__48265;
continue;
} else {
var n = cljs.core.first(seq__47186__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48268 = cljs.core.next(seq__47186__$1);
var G__48269 = null;
var G__48270 = (0);
var G__48271 = (0);
seq__47186 = G__48268;
chunk__47187 = G__48269;
count__47188 = G__48270;
i__47189 = G__48271;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47204 = arguments.length;
switch (G__47204) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47213 = arguments.length;
switch (G__47213) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47227 = arguments.length;
switch (G__47227) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48302 = arguments.length;
var i__4737__auto___48303 = (0);
while(true){
if((i__4737__auto___48303 < len__4736__auto___48302)){
args__4742__auto__.push((arguments[i__4737__auto___48303]));

var G__48305 = (i__4737__auto___48303 + (1));
i__4737__auto___48303 = G__48305;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47262_48307 = cljs.core.seq(nodes);
var chunk__47263_48308 = null;
var count__47264_48309 = (0);
var i__47265_48310 = (0);
while(true){
if((i__47265_48310 < count__47264_48309)){
var node_48313 = chunk__47263_48308.cljs$core$IIndexed$_nth$arity$2(null,i__47265_48310);
fragment.appendChild(shadow.dom._to_dom(node_48313));


var G__48314 = seq__47262_48307;
var G__48315 = chunk__47263_48308;
var G__48316 = count__47264_48309;
var G__48317 = (i__47265_48310 + (1));
seq__47262_48307 = G__48314;
chunk__47263_48308 = G__48315;
count__47264_48309 = G__48316;
i__47265_48310 = G__48317;
continue;
} else {
var temp__5735__auto___48319 = cljs.core.seq(seq__47262_48307);
if(temp__5735__auto___48319){
var seq__47262_48321__$1 = temp__5735__auto___48319;
if(cljs.core.chunked_seq_QMARK_(seq__47262_48321__$1)){
var c__4556__auto___48322 = cljs.core.chunk_first(seq__47262_48321__$1);
var G__48323 = cljs.core.chunk_rest(seq__47262_48321__$1);
var G__48324 = c__4556__auto___48322;
var G__48325 = cljs.core.count(c__4556__auto___48322);
var G__48326 = (0);
seq__47262_48307 = G__48323;
chunk__47263_48308 = G__48324;
count__47264_48309 = G__48325;
i__47265_48310 = G__48326;
continue;
} else {
var node_48327 = cljs.core.first(seq__47262_48321__$1);
fragment.appendChild(shadow.dom._to_dom(node_48327));


var G__48328 = cljs.core.next(seq__47262_48321__$1);
var G__48329 = null;
var G__48330 = (0);
var G__48331 = (0);
seq__47262_48307 = G__48328;
chunk__47263_48308 = G__48329;
count__47264_48309 = G__48330;
i__47265_48310 = G__48331;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47255){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47255));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47294_48333 = cljs.core.seq(scripts);
var chunk__47295_48334 = null;
var count__47296_48335 = (0);
var i__47297_48336 = (0);
while(true){
if((i__47297_48336 < count__47296_48335)){
var vec__47321_48337 = chunk__47295_48334.cljs$core$IIndexed$_nth$arity$2(null,i__47297_48336);
var script_tag_48338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47321_48337,(0),null);
var script_body_48339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47321_48337,(1),null);
eval(script_body_48339);


var G__48341 = seq__47294_48333;
var G__48342 = chunk__47295_48334;
var G__48343 = count__47296_48335;
var G__48344 = (i__47297_48336 + (1));
seq__47294_48333 = G__48341;
chunk__47295_48334 = G__48342;
count__47296_48335 = G__48343;
i__47297_48336 = G__48344;
continue;
} else {
var temp__5735__auto___48345 = cljs.core.seq(seq__47294_48333);
if(temp__5735__auto___48345){
var seq__47294_48346__$1 = temp__5735__auto___48345;
if(cljs.core.chunked_seq_QMARK_(seq__47294_48346__$1)){
var c__4556__auto___48348 = cljs.core.chunk_first(seq__47294_48346__$1);
var G__48349 = cljs.core.chunk_rest(seq__47294_48346__$1);
var G__48350 = c__4556__auto___48348;
var G__48351 = cljs.core.count(c__4556__auto___48348);
var G__48352 = (0);
seq__47294_48333 = G__48349;
chunk__47295_48334 = G__48350;
count__47296_48335 = G__48351;
i__47297_48336 = G__48352;
continue;
} else {
var vec__47332_48355 = cljs.core.first(seq__47294_48346__$1);
var script_tag_48356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47332_48355,(0),null);
var script_body_48357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47332_48355,(1),null);
eval(script_body_48357);


var G__48360 = cljs.core.next(seq__47294_48346__$1);
var G__48361 = null;
var G__48362 = (0);
var G__48363 = (0);
seq__47294_48333 = G__48360;
chunk__47295_48334 = G__48361;
count__47296_48335 = G__48362;
i__47297_48336 = G__48363;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47341){
var vec__47344 = p__47341;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47344,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47344,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47379 = arguments.length;
switch (G__47379) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47410 = cljs.core.seq(style_keys);
var chunk__47411 = null;
var count__47412 = (0);
var i__47413 = (0);
while(true){
if((i__47413 < count__47412)){
var it = chunk__47411.cljs$core$IIndexed$_nth$arity$2(null,i__47413);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48410 = seq__47410;
var G__48411 = chunk__47411;
var G__48412 = count__47412;
var G__48413 = (i__47413 + (1));
seq__47410 = G__48410;
chunk__47411 = G__48411;
count__47412 = G__48412;
i__47413 = G__48413;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47410);
if(temp__5735__auto__){
var seq__47410__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47410__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47410__$1);
var G__48415 = cljs.core.chunk_rest(seq__47410__$1);
var G__48416 = c__4556__auto__;
var G__48417 = cljs.core.count(c__4556__auto__);
var G__48418 = (0);
seq__47410 = G__48415;
chunk__47411 = G__48416;
count__47412 = G__48417;
i__47413 = G__48418;
continue;
} else {
var it = cljs.core.first(seq__47410__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48424 = cljs.core.next(seq__47410__$1);
var G__48425 = null;
var G__48426 = (0);
var G__48427 = (0);
seq__47410 = G__48424;
chunk__47411 = G__48425;
count__47412 = G__48426;
i__47413 = G__48427;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47432,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47450 = k47432;
var G__47450__$1 = (((G__47450 instanceof cljs.core.Keyword))?G__47450.fqn:null);
switch (G__47450__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47432,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47455){
var vec__47456 = p__47455;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47456,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47456,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47431){
var self__ = this;
var G__47431__$1 = this;
return (new cljs.core.RecordIter((0),G__47431__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47434,other47435){
var self__ = this;
var this47434__$1 = this;
return (((!((other47435 == null)))) && ((this47434__$1.constructor === other47435.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47434__$1.x,other47435.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47434__$1.y,other47435.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47434__$1.__extmap,other47435.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47431){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47479 = cljs.core.keyword_identical_QMARK_;
var expr__47480 = k__4388__auto__;
if(cljs.core.truth_((pred__47479.cljs$core$IFn$_invoke$arity$2 ? pred__47479.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47480) : pred__47479.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47480)))){
return (new shadow.dom.Coordinate(G__47431,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47479.cljs$core$IFn$_invoke$arity$2 ? pred__47479.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47480) : pred__47479.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47480)))){
return (new shadow.dom.Coordinate(self__.x,G__47431,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47431),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47431){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47431,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47440){
var extmap__4419__auto__ = (function (){var G__47507 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47440,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47440)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47507);
} else {
return G__47507;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47440),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47440),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47520,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47534 = k47520;
var G__47534__$1 = (((G__47534 instanceof cljs.core.Keyword))?G__47534.fqn:null);
switch (G__47534__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47520,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47544){
var vec__47545 = p__47544;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47545,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47545,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47519){
var self__ = this;
var G__47519__$1 = this;
return (new cljs.core.RecordIter((0),G__47519__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47521,other47522){
var self__ = this;
var this47521__$1 = this;
return (((!((other47522 == null)))) && ((this47521__$1.constructor === other47522.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47521__$1.w,other47522.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47521__$1.h,other47522.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47521__$1.__extmap,other47522.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47519){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47637 = cljs.core.keyword_identical_QMARK_;
var expr__47638 = k__4388__auto__;
if(cljs.core.truth_((pred__47637.cljs$core$IFn$_invoke$arity$2 ? pred__47637.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47638) : pred__47637.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47638)))){
return (new shadow.dom.Size(G__47519,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47637.cljs$core$IFn$_invoke$arity$2 ? pred__47637.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47638) : pred__47637.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47638)))){
return (new shadow.dom.Size(self__.w,G__47519,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47519),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47519){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47519,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47525){
var extmap__4419__auto__ = (function (){var G__47650 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47525,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47525)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47650);
} else {
return G__47650;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47525),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47525),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__48585 = (i + (1));
var G__48586 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48585;
ret = G__48586;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47685){
var vec__47688 = p__47685;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47688,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47688,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47695 = arguments.length;
switch (G__47695) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48607 = ps;
var G__48608 = (i + (1));
el__$1 = G__48607;
i = G__48608;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47727 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47727,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47727,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47727,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47733_48633 = cljs.core.seq(props);
var chunk__47734_48634 = null;
var count__47735_48635 = (0);
var i__47736_48636 = (0);
while(true){
if((i__47736_48636 < count__47735_48635)){
var vec__47753_48637 = chunk__47734_48634.cljs$core$IIndexed$_nth$arity$2(null,i__47736_48636);
var k_48638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47753_48637,(0),null);
var v_48639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47753_48637,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48638);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48638),v_48639);


var G__48644 = seq__47733_48633;
var G__48645 = chunk__47734_48634;
var G__48646 = count__47735_48635;
var G__48647 = (i__47736_48636 + (1));
seq__47733_48633 = G__48644;
chunk__47734_48634 = G__48645;
count__47735_48635 = G__48646;
i__47736_48636 = G__48647;
continue;
} else {
var temp__5735__auto___48649 = cljs.core.seq(seq__47733_48633);
if(temp__5735__auto___48649){
var seq__47733_48651__$1 = temp__5735__auto___48649;
if(cljs.core.chunked_seq_QMARK_(seq__47733_48651__$1)){
var c__4556__auto___48652 = cljs.core.chunk_first(seq__47733_48651__$1);
var G__48653 = cljs.core.chunk_rest(seq__47733_48651__$1);
var G__48654 = c__4556__auto___48652;
var G__48655 = cljs.core.count(c__4556__auto___48652);
var G__48656 = (0);
seq__47733_48633 = G__48653;
chunk__47734_48634 = G__48654;
count__47735_48635 = G__48655;
i__47736_48636 = G__48656;
continue;
} else {
var vec__47767_48659 = cljs.core.first(seq__47733_48651__$1);
var k_48660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47767_48659,(0),null);
var v_48661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47767_48659,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48660);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48660),v_48661);


var G__48663 = cljs.core.next(seq__47733_48651__$1);
var G__48664 = null;
var G__48665 = (0);
var G__48666 = (0);
seq__47733_48633 = G__48663;
chunk__47734_48634 = G__48664;
count__47735_48635 = G__48665;
i__47736_48636 = G__48666;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47781 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47781,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47781,(1),null);
var seq__47784_48671 = cljs.core.seq(node_children);
var chunk__47786_48672 = null;
var count__47787_48673 = (0);
var i__47788_48674 = (0);
while(true){
if((i__47788_48674 < count__47787_48673)){
var child_struct_48676 = chunk__47786_48672.cljs$core$IIndexed$_nth$arity$2(null,i__47788_48674);
if((!((child_struct_48676 == null)))){
if(typeof child_struct_48676 === 'string'){
var text_48677 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48677),child_struct_48676].join(''));
} else {
var children_48682 = shadow.dom.svg_node(child_struct_48676);
if(cljs.core.seq_QMARK_(children_48682)){
var seq__47822_48683 = cljs.core.seq(children_48682);
var chunk__47824_48684 = null;
var count__47825_48685 = (0);
var i__47826_48686 = (0);
while(true){
if((i__47826_48686 < count__47825_48685)){
var child_48687 = chunk__47824_48684.cljs$core$IIndexed$_nth$arity$2(null,i__47826_48686);
if(cljs.core.truth_(child_48687)){
node.appendChild(child_48687);


var G__48689 = seq__47822_48683;
var G__48690 = chunk__47824_48684;
var G__48691 = count__47825_48685;
var G__48692 = (i__47826_48686 + (1));
seq__47822_48683 = G__48689;
chunk__47824_48684 = G__48690;
count__47825_48685 = G__48691;
i__47826_48686 = G__48692;
continue;
} else {
var G__48694 = seq__47822_48683;
var G__48695 = chunk__47824_48684;
var G__48696 = count__47825_48685;
var G__48697 = (i__47826_48686 + (1));
seq__47822_48683 = G__48694;
chunk__47824_48684 = G__48695;
count__47825_48685 = G__48696;
i__47826_48686 = G__48697;
continue;
}
} else {
var temp__5735__auto___48699 = cljs.core.seq(seq__47822_48683);
if(temp__5735__auto___48699){
var seq__47822_48701__$1 = temp__5735__auto___48699;
if(cljs.core.chunked_seq_QMARK_(seq__47822_48701__$1)){
var c__4556__auto___48703 = cljs.core.chunk_first(seq__47822_48701__$1);
var G__48705 = cljs.core.chunk_rest(seq__47822_48701__$1);
var G__48706 = c__4556__auto___48703;
var G__48707 = cljs.core.count(c__4556__auto___48703);
var G__48708 = (0);
seq__47822_48683 = G__48705;
chunk__47824_48684 = G__48706;
count__47825_48685 = G__48707;
i__47826_48686 = G__48708;
continue;
} else {
var child_48709 = cljs.core.first(seq__47822_48701__$1);
if(cljs.core.truth_(child_48709)){
node.appendChild(child_48709);


var G__48710 = cljs.core.next(seq__47822_48701__$1);
var G__48711 = null;
var G__48712 = (0);
var G__48713 = (0);
seq__47822_48683 = G__48710;
chunk__47824_48684 = G__48711;
count__47825_48685 = G__48712;
i__47826_48686 = G__48713;
continue;
} else {
var G__48714 = cljs.core.next(seq__47822_48701__$1);
var G__48715 = null;
var G__48716 = (0);
var G__48717 = (0);
seq__47822_48683 = G__48714;
chunk__47824_48684 = G__48715;
count__47825_48685 = G__48716;
i__47826_48686 = G__48717;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48682);
}
}


var G__48718 = seq__47784_48671;
var G__48719 = chunk__47786_48672;
var G__48720 = count__47787_48673;
var G__48721 = (i__47788_48674 + (1));
seq__47784_48671 = G__48718;
chunk__47786_48672 = G__48719;
count__47787_48673 = G__48720;
i__47788_48674 = G__48721;
continue;
} else {
var G__48723 = seq__47784_48671;
var G__48724 = chunk__47786_48672;
var G__48725 = count__47787_48673;
var G__48726 = (i__47788_48674 + (1));
seq__47784_48671 = G__48723;
chunk__47786_48672 = G__48724;
count__47787_48673 = G__48725;
i__47788_48674 = G__48726;
continue;
}
} else {
var temp__5735__auto___48727 = cljs.core.seq(seq__47784_48671);
if(temp__5735__auto___48727){
var seq__47784_48728__$1 = temp__5735__auto___48727;
if(cljs.core.chunked_seq_QMARK_(seq__47784_48728__$1)){
var c__4556__auto___48730 = cljs.core.chunk_first(seq__47784_48728__$1);
var G__48731 = cljs.core.chunk_rest(seq__47784_48728__$1);
var G__48732 = c__4556__auto___48730;
var G__48733 = cljs.core.count(c__4556__auto___48730);
var G__48734 = (0);
seq__47784_48671 = G__48731;
chunk__47786_48672 = G__48732;
count__47787_48673 = G__48733;
i__47788_48674 = G__48734;
continue;
} else {
var child_struct_48736 = cljs.core.first(seq__47784_48728__$1);
if((!((child_struct_48736 == null)))){
if(typeof child_struct_48736 === 'string'){
var text_48738 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48738),child_struct_48736].join(''));
} else {
var children_48739 = shadow.dom.svg_node(child_struct_48736);
if(cljs.core.seq_QMARK_(children_48739)){
var seq__47842_48740 = cljs.core.seq(children_48739);
var chunk__47844_48741 = null;
var count__47845_48742 = (0);
var i__47846_48743 = (0);
while(true){
if((i__47846_48743 < count__47845_48742)){
var child_48748 = chunk__47844_48741.cljs$core$IIndexed$_nth$arity$2(null,i__47846_48743);
if(cljs.core.truth_(child_48748)){
node.appendChild(child_48748);


var G__48749 = seq__47842_48740;
var G__48750 = chunk__47844_48741;
var G__48751 = count__47845_48742;
var G__48752 = (i__47846_48743 + (1));
seq__47842_48740 = G__48749;
chunk__47844_48741 = G__48750;
count__47845_48742 = G__48751;
i__47846_48743 = G__48752;
continue;
} else {
var G__48754 = seq__47842_48740;
var G__48755 = chunk__47844_48741;
var G__48756 = count__47845_48742;
var G__48757 = (i__47846_48743 + (1));
seq__47842_48740 = G__48754;
chunk__47844_48741 = G__48755;
count__47845_48742 = G__48756;
i__47846_48743 = G__48757;
continue;
}
} else {
var temp__5735__auto___48760__$1 = cljs.core.seq(seq__47842_48740);
if(temp__5735__auto___48760__$1){
var seq__47842_48761__$1 = temp__5735__auto___48760__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47842_48761__$1)){
var c__4556__auto___48763 = cljs.core.chunk_first(seq__47842_48761__$1);
var G__48764 = cljs.core.chunk_rest(seq__47842_48761__$1);
var G__48765 = c__4556__auto___48763;
var G__48766 = cljs.core.count(c__4556__auto___48763);
var G__48767 = (0);
seq__47842_48740 = G__48764;
chunk__47844_48741 = G__48765;
count__47845_48742 = G__48766;
i__47846_48743 = G__48767;
continue;
} else {
var child_48769 = cljs.core.first(seq__47842_48761__$1);
if(cljs.core.truth_(child_48769)){
node.appendChild(child_48769);


var G__48770 = cljs.core.next(seq__47842_48761__$1);
var G__48771 = null;
var G__48772 = (0);
var G__48773 = (0);
seq__47842_48740 = G__48770;
chunk__47844_48741 = G__48771;
count__47845_48742 = G__48772;
i__47846_48743 = G__48773;
continue;
} else {
var G__48774 = cljs.core.next(seq__47842_48761__$1);
var G__48775 = null;
var G__48776 = (0);
var G__48777 = (0);
seq__47842_48740 = G__48774;
chunk__47844_48741 = G__48775;
count__47845_48742 = G__48776;
i__47846_48743 = G__48777;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48739);
}
}


var G__48779 = cljs.core.next(seq__47784_48728__$1);
var G__48780 = null;
var G__48781 = (0);
var G__48782 = (0);
seq__47784_48671 = G__48779;
chunk__47786_48672 = G__48780;
count__47787_48673 = G__48781;
i__47788_48674 = G__48782;
continue;
} else {
var G__48783 = cljs.core.next(seq__47784_48728__$1);
var G__48784 = null;
var G__48785 = (0);
var G__48786 = (0);
seq__47784_48671 = G__48783;
chunk__47786_48672 = G__48784;
count__47787_48673 = G__48785;
i__47788_48674 = G__48786;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48788 = arguments.length;
var i__4737__auto___48789 = (0);
while(true){
if((i__4737__auto___48789 < len__4736__auto___48788)){
args__4742__auto__.push((arguments[i__4737__auto___48789]));

var G__48794 = (i__4737__auto___48789 + (1));
i__4737__auto___48789 = G__48794;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47881){
var G__47882 = cljs.core.first(seq47881);
var seq47881__$1 = cljs.core.next(seq47881);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47882,seq47881__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47894 = arguments.length;
switch (G__47894) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__43000__auto___48806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_47910){
var state_val_47911 = (state_47910[(1)]);
if((state_val_47911 === (1))){
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47910__$1,(2),once_or_cleanup);
} else {
if((state_val_47911 === (2))){
var inst_47907 = (state_47910[(2)]);
var inst_47908 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47910__$1 = (function (){var statearr_47915 = state_47910;
(statearr_47915[(7)] = inst_47907);

return statearr_47915;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47910__$1,inst_47908);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42765__auto__ = null;
var shadow$dom$state_machine__42765__auto____0 = (function (){
var statearr_47916 = [null,null,null,null,null,null,null,null];
(statearr_47916[(0)] = shadow$dom$state_machine__42765__auto__);

(statearr_47916[(1)] = (1));

return statearr_47916;
});
var shadow$dom$state_machine__42765__auto____1 = (function (state_47910){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_47910);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e47920){var ex__42768__auto__ = e47920;
var statearr_47921_48817 = state_47910;
(statearr_47921_48817[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_47910[(4)]))){
var statearr_47922_48819 = state_47910;
(statearr_47922_48819[(1)] = cljs.core.first((state_47910[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48827 = state_47910;
state_47910 = G__48827;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
shadow$dom$state_machine__42765__auto__ = function(state_47910){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42765__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42765__auto____1.call(this,state_47910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42765__auto____0;
shadow$dom$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42765__auto____1;
return shadow$dom$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_47927 = f__43001__auto__();
(statearr_47927[(6)] = c__43000__auto___48806);

return statearr_47927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
