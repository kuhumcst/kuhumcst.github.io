goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43102 = arguments.length;
switch (G__43102) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43103 = (function (f,blockable,meta43104){
this.f = f;
this.blockable = blockable;
this.meta43104 = meta43104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43105,meta43104__$1){
var self__ = this;
var _43105__$1 = this;
return (new cljs.core.async.t_cljs$core$async43103(self__.f,self__.blockable,meta43104__$1));
}));

(cljs.core.async.t_cljs$core$async43103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43105){
var self__ = this;
var _43105__$1 = this;
return self__.meta43104;
}));

(cljs.core.async.t_cljs$core$async43103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43104","meta43104",2047026154,null)], null);
}));

(cljs.core.async.t_cljs$core$async43103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43103");

(cljs.core.async.t_cljs$core$async43103.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43103.
 */
cljs.core.async.__GT_t_cljs$core$async43103 = (function cljs$core$async$__GT_t_cljs$core$async43103(f__$1,blockable__$1,meta43104){
return (new cljs.core.async.t_cljs$core$async43103(f__$1,blockable__$1,meta43104));
});

}

return (new cljs.core.async.t_cljs$core$async43103(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43122 = arguments.length;
switch (G__43122) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43138 = arguments.length;
switch (G__43138) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43142 = arguments.length;
switch (G__43142) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46477 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46477) : fn1.call(null,val_46477));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46477) : fn1.call(null,val_46477));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43155 = arguments.length;
switch (G__43155) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___46496 = n;
var x_46497 = (0);
while(true){
if((x_46497 < n__4613__auto___46496)){
(a[x_46497] = x_46497);

var G__46502 = (x_46497 + (1));
x_46497 = G__46502;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43174 = (function (flag,meta43175){
this.flag = flag;
this.meta43175 = meta43175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43176,meta43175__$1){
var self__ = this;
var _43176__$1 = this;
return (new cljs.core.async.t_cljs$core$async43174(self__.flag,meta43175__$1));
}));

(cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43176){
var self__ = this;
var _43176__$1 = this;
return self__.meta43175;
}));

(cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43175","meta43175",-385369350,null)], null);
}));

(cljs.core.async.t_cljs$core$async43174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43174");

(cljs.core.async.t_cljs$core$async43174.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43174.
 */
cljs.core.async.__GT_t_cljs$core$async43174 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43174(flag__$1,meta43175){
return (new cljs.core.async.t_cljs$core$async43174(flag__$1,meta43175));
});

}

return (new cljs.core.async.t_cljs$core$async43174(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43196 = (function (flag,cb,meta43197){
this.flag = flag;
this.cb = cb;
this.meta43197 = meta43197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43198,meta43197__$1){
var self__ = this;
var _43198__$1 = this;
return (new cljs.core.async.t_cljs$core$async43196(self__.flag,self__.cb,meta43197__$1));
}));

(cljs.core.async.t_cljs$core$async43196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43198){
var self__ = this;
var _43198__$1 = this;
return self__.meta43197;
}));

(cljs.core.async.t_cljs$core$async43196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43197","meta43197",-849773659,null)], null);
}));

(cljs.core.async.t_cljs$core$async43196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43196");

(cljs.core.async.t_cljs$core$async43196.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43196.
 */
cljs.core.async.__GT_t_cljs$core$async43196 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43196(flag__$1,cb__$1,meta43197){
return (new cljs.core.async.t_cljs$core$async43196(flag__$1,cb__$1,meta43197));
});

}

return (new cljs.core.async.t_cljs$core$async43196(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43220_SHARP_){
var G__43228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43220_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43228) : fret.call(null,G__43228));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43221_SHARP_){
var G__43235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43221_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43235) : fret.call(null,G__43235));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46538 = (i + (1));
i = G__46538;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46539 = arguments.length;
var i__4737__auto___46540 = (0);
while(true){
if((i__4737__auto___46540 < len__4736__auto___46539)){
args__4742__auto__.push((arguments[i__4737__auto___46540]));

var G__46541 = (i__4737__auto___46540 + (1));
i__4737__auto___46540 = G__46541;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43246){
var map__43247 = p__43246;
var map__43247__$1 = (((((!((map__43247 == null))))?(((((map__43247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43247):map__43247);
var opts = map__43247__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43242){
var G__43243 = cljs.core.first(seq43242);
var seq43242__$1 = cljs.core.next(seq43242);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43243,seq43242__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43259 = arguments.length;
switch (G__43259) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43000__auto___46558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_43309){
var state_val_43310 = (state_43309[(1)]);
if((state_val_43310 === (7))){
var inst_43301 = (state_43309[(2)]);
var state_43309__$1 = state_43309;
var statearr_43317_46559 = state_43309__$1;
(statearr_43317_46559[(2)] = inst_43301);

(statearr_43317_46559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43310 === (1))){
var state_43309__$1 = state_43309;
var statearr_43318_46560 = state_43309__$1;
(statearr_43318_46560[(2)] = null);

(statearr_43318_46560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43310 === (4))){
var inst_43273 = (state_43309[(7)]);
var inst_43273__$1 = (state_43309[(2)]);
var inst_43280 = (inst_43273__$1 == null);
var state_43309__$1 = (function (){var statearr_43322 = state_43309;
(statearr_43322[(7)] = inst_43273__$1);

return statearr_43322;
})();
if(cljs.core.truth_(inst_43280)){
var statearr_43324_46561 = state_43309__$1;
(statearr_43324_46561[(1)] = (5));

} else {
var statearr_43326_46562 = state_43309__$1;
(statearr_43326_46562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43310 === (13))){
var state_43309__$1 = state_43309;
var statearr_43330_46568 = state_43309__$1;
(statearr_43330_46568[(2)] = null);

(statearr_43330_46568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43310 === (6))){
var inst_43273 = (state_43309[(7)]);
var state_43309__$1 = state_43309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43309__$1,(11),to,inst_43273);
} else {
if((state_val_43310 === (3))){
var inst_43303 = (state_43309[(2)]);
var state_43309__$1 = state_43309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43309__$1,inst_43303);
} else {
if((state_val_43310 === (12))){
var state_43309__$1 = state_43309;
var statearr_43347_46574 = state_43309__$1;
(statearr_43347_46574[(2)] = null);

(statearr_43347_46574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43310 === (2))){
var state_43309__$1 = state_43309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43309__$1,(4),from);
} else {
if((state_val_43310 === (11))){
var inst_43291 = (state_43309[(2)]);
var state_43309__$1 = state_43309;
if(cljs.core.truth_(inst_43291)){
var statearr_43352_46578 = state_43309__$1;
(statearr_43352_46578[(1)] = (12));

} else {
var statearr_43353_46580 = state_43309__$1;
(statearr_43353_46580[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43310 === (9))){
var state_43309__$1 = state_43309;
var statearr_43363_46584 = state_43309__$1;
(statearr_43363_46584[(2)] = null);

(statearr_43363_46584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43310 === (5))){
var state_43309__$1 = state_43309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43364_46588 = state_43309__$1;
(statearr_43364_46588[(1)] = (8));

} else {
var statearr_43365_46591 = state_43309__$1;
(statearr_43365_46591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43310 === (14))){
var inst_43299 = (state_43309[(2)]);
var state_43309__$1 = state_43309;
var statearr_43371_46595 = state_43309__$1;
(statearr_43371_46595[(2)] = inst_43299);

(statearr_43371_46595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43310 === (10))){
var inst_43287 = (state_43309[(2)]);
var state_43309__$1 = state_43309;
var statearr_43375_46596 = state_43309__$1;
(statearr_43375_46596[(2)] = inst_43287);

(statearr_43375_46596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43310 === (8))){
var inst_43284 = cljs.core.async.close_BANG_(to);
var state_43309__$1 = state_43309;
var statearr_43376_46598 = state_43309__$1;
(statearr_43376_46598[(2)] = inst_43284);

(statearr_43376_46598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_43380 = [null,null,null,null,null,null,null,null];
(statearr_43380[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_43380[(1)] = (1));

return statearr_43380;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_43309){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_43309);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e43387){var ex__42768__auto__ = e43387;
var statearr_43388_46605 = state_43309;
(statearr_43388_46605[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_43309[(4)]))){
var statearr_43390_46608 = state_43309;
(statearr_43390_46608[(1)] = cljs.core.first((state_43309[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46609 = state_43309;
state_43309 = G__46609;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_43309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_43309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_43394 = f__43001__auto__();
(statearr_43394[(6)] = c__43000__auto___46558);

return statearr_43394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43415){
var vec__43416 = p__43415;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43416,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43416,(1),null);
var job = vec__43416;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43000__auto___46623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_43426){
var state_val_43427 = (state_43426[(1)]);
if((state_val_43427 === (1))){
var state_43426__$1 = state_43426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43426__$1,(2),res,v);
} else {
if((state_val_43427 === (2))){
var inst_43423 = (state_43426[(2)]);
var inst_43424 = cljs.core.async.close_BANG_(res);
var state_43426__$1 = (function (){var statearr_43442 = state_43426;
(statearr_43442[(7)] = inst_43423);

return statearr_43442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43426__$1,inst_43424);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0 = (function (){
var statearr_43444 = [null,null,null,null,null,null,null,null];
(statearr_43444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__);

(statearr_43444[(1)] = (1));

return statearr_43444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1 = (function (state_43426){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_43426);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e43447){var ex__42768__auto__ = e43447;
var statearr_43449_46642 = state_43426;
(statearr_43449_46642[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_43426[(4)]))){
var statearr_43450_46644 = state_43426;
(statearr_43450_46644[(1)] = cljs.core.first((state_43426[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46648 = state_43426;
state_43426 = G__46648;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__ = function(state_43426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1.call(this,state_43426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_43452 = f__43001__auto__();
(statearr_43452[(6)] = c__43000__auto___46623);

return statearr_43452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43453){
var vec__43454 = p__43453;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43454,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43454,(1),null);
var job = vec__43454;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___46661 = n;
var __46662 = (0);
while(true){
if((__46662 < n__4613__auto___46661)){
var G__43462_46663 = type;
var G__43462_46664__$1 = (((G__43462_46663 instanceof cljs.core.Keyword))?G__43462_46663.fqn:null);
switch (G__43462_46664__$1) {
case "compute":
var c__43000__auto___46667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46662,c__43000__auto___46667,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async){
return (function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = ((function (__46662,c__43000__auto___46667,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async){
return (function (state_43479){
var state_val_43480 = (state_43479[(1)]);
if((state_val_43480 === (1))){
var state_43479__$1 = state_43479;
var statearr_43481_46669 = state_43479__$1;
(statearr_43481_46669[(2)] = null);

(statearr_43481_46669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (2))){
var state_43479__$1 = state_43479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43479__$1,(4),jobs);
} else {
if((state_val_43480 === (3))){
var inst_43477 = (state_43479[(2)]);
var state_43479__$1 = state_43479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43479__$1,inst_43477);
} else {
if((state_val_43480 === (4))){
var inst_43465 = (state_43479[(2)]);
var inst_43470 = process(inst_43465);
var state_43479__$1 = state_43479;
if(cljs.core.truth_(inst_43470)){
var statearr_43486_46675 = state_43479__$1;
(statearr_43486_46675[(1)] = (5));

} else {
var statearr_43487_46676 = state_43479__$1;
(statearr_43487_46676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (5))){
var state_43479__$1 = state_43479;
var statearr_43490_46677 = state_43479__$1;
(statearr_43490_46677[(2)] = null);

(statearr_43490_46677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (6))){
var state_43479__$1 = state_43479;
var statearr_43492_46679 = state_43479__$1;
(statearr_43492_46679[(2)] = null);

(statearr_43492_46679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43480 === (7))){
var inst_43475 = (state_43479[(2)]);
var state_43479__$1 = state_43479;
var statearr_43493_46680 = state_43479__$1;
(statearr_43493_46680[(2)] = inst_43475);

(statearr_43493_46680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46662,c__43000__auto___46667,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async))
;
return ((function (__46662,switch__42764__auto__,c__43000__auto___46667,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0 = (function (){
var statearr_43497 = [null,null,null,null,null,null,null];
(statearr_43497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__);

(statearr_43497[(1)] = (1));

return statearr_43497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1 = (function (state_43479){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_43479);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e43498){var ex__42768__auto__ = e43498;
var statearr_43500_46696 = state_43479;
(statearr_43500_46696[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_43479[(4)]))){
var statearr_43503_46698 = state_43479;
(statearr_43503_46698[(1)] = cljs.core.first((state_43479[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46700 = state_43479;
state_43479 = G__46700;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__ = function(state_43479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1.call(this,state_43479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__;
})()
;})(__46662,switch__42764__auto__,c__43000__auto___46667,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async))
})();
var state__43002__auto__ = (function (){var statearr_43516 = f__43001__auto__();
(statearr_43516[(6)] = c__43000__auto___46667);

return statearr_43516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
});})(__46662,c__43000__auto___46667,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async))
);


break;
case "async":
var c__43000__auto___46707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46662,c__43000__auto___46707,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async){
return (function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = ((function (__46662,c__43000__auto___46707,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async){
return (function (state_43529){
var state_val_43530 = (state_43529[(1)]);
if((state_val_43530 === (1))){
var state_43529__$1 = state_43529;
var statearr_43535_46711 = state_43529__$1;
(statearr_43535_46711[(2)] = null);

(statearr_43535_46711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (2))){
var state_43529__$1 = state_43529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43529__$1,(4),jobs);
} else {
if((state_val_43530 === (3))){
var inst_43527 = (state_43529[(2)]);
var state_43529__$1 = state_43529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43529__$1,inst_43527);
} else {
if((state_val_43530 === (4))){
var inst_43519 = (state_43529[(2)]);
var inst_43520 = async(inst_43519);
var state_43529__$1 = state_43529;
if(cljs.core.truth_(inst_43520)){
var statearr_43536_46718 = state_43529__$1;
(statearr_43536_46718[(1)] = (5));

} else {
var statearr_43537_46723 = state_43529__$1;
(statearr_43537_46723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (5))){
var state_43529__$1 = state_43529;
var statearr_43547_46727 = state_43529__$1;
(statearr_43547_46727[(2)] = null);

(statearr_43547_46727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (6))){
var state_43529__$1 = state_43529;
var statearr_43549_46731 = state_43529__$1;
(statearr_43549_46731[(2)] = null);

(statearr_43549_46731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (7))){
var inst_43525 = (state_43529[(2)]);
var state_43529__$1 = state_43529;
var statearr_43552_46738 = state_43529__$1;
(statearr_43552_46738[(2)] = inst_43525);

(statearr_43552_46738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46662,c__43000__auto___46707,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async))
;
return ((function (__46662,switch__42764__auto__,c__43000__auto___46707,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0 = (function (){
var statearr_43554 = [null,null,null,null,null,null,null];
(statearr_43554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__);

(statearr_43554[(1)] = (1));

return statearr_43554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1 = (function (state_43529){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_43529);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e43555){var ex__42768__auto__ = e43555;
var statearr_43556_46750 = state_43529;
(statearr_43556_46750[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_43529[(4)]))){
var statearr_43558_46754 = state_43529;
(statearr_43558_46754[(1)] = cljs.core.first((state_43529[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46756 = state_43529;
state_43529 = G__46756;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__ = function(state_43529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1.call(this,state_43529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__;
})()
;})(__46662,switch__42764__auto__,c__43000__auto___46707,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async))
})();
var state__43002__auto__ = (function (){var statearr_43562 = f__43001__auto__();
(statearr_43562[(6)] = c__43000__auto___46707);

return statearr_43562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
});})(__46662,c__43000__auto___46707,G__43462_46663,G__43462_46664__$1,n__4613__auto___46661,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43462_46664__$1)].join('')));

}

var G__46765 = (__46662 + (1));
__46662 = G__46765;
continue;
} else {
}
break;
}

var c__43000__auto___46769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_43590){
var state_val_43591 = (state_43590[(1)]);
if((state_val_43591 === (7))){
var inst_43586 = (state_43590[(2)]);
var state_43590__$1 = state_43590;
var statearr_43605_46771 = state_43590__$1;
(statearr_43605_46771[(2)] = inst_43586);

(statearr_43605_46771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43591 === (1))){
var state_43590__$1 = state_43590;
var statearr_43610_46777 = state_43590__$1;
(statearr_43610_46777[(2)] = null);

(statearr_43610_46777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43591 === (4))){
var inst_43568 = (state_43590[(7)]);
var inst_43568__$1 = (state_43590[(2)]);
var inst_43569 = (inst_43568__$1 == null);
var state_43590__$1 = (function (){var statearr_43615 = state_43590;
(statearr_43615[(7)] = inst_43568__$1);

return statearr_43615;
})();
if(cljs.core.truth_(inst_43569)){
var statearr_43619_46785 = state_43590__$1;
(statearr_43619_46785[(1)] = (5));

} else {
var statearr_43624_46786 = state_43590__$1;
(statearr_43624_46786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43591 === (6))){
var inst_43568 = (state_43590[(7)]);
var inst_43573 = (state_43590[(8)]);
var inst_43573__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43577 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43578 = [inst_43568,inst_43573__$1];
var inst_43579 = (new cljs.core.PersistentVector(null,2,(5),inst_43577,inst_43578,null));
var state_43590__$1 = (function (){var statearr_43632 = state_43590;
(statearr_43632[(8)] = inst_43573__$1);

return statearr_43632;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43590__$1,(8),jobs,inst_43579);
} else {
if((state_val_43591 === (3))){
var inst_43588 = (state_43590[(2)]);
var state_43590__$1 = state_43590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43590__$1,inst_43588);
} else {
if((state_val_43591 === (2))){
var state_43590__$1 = state_43590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43590__$1,(4),from);
} else {
if((state_val_43591 === (9))){
var inst_43583 = (state_43590[(2)]);
var state_43590__$1 = (function (){var statearr_43634 = state_43590;
(statearr_43634[(9)] = inst_43583);

return statearr_43634;
})();
var statearr_43638_46800 = state_43590__$1;
(statearr_43638_46800[(2)] = null);

(statearr_43638_46800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43591 === (5))){
var inst_43571 = cljs.core.async.close_BANG_(jobs);
var state_43590__$1 = state_43590;
var statearr_43639_46807 = state_43590__$1;
(statearr_43639_46807[(2)] = inst_43571);

(statearr_43639_46807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43591 === (8))){
var inst_43573 = (state_43590[(8)]);
var inst_43581 = (state_43590[(2)]);
var state_43590__$1 = (function (){var statearr_43640 = state_43590;
(statearr_43640[(10)] = inst_43581);

return statearr_43640;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43590__$1,(9),results,inst_43573);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0 = (function (){
var statearr_43650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__);

(statearr_43650[(1)] = (1));

return statearr_43650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1 = (function (state_43590){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_43590);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e43657){var ex__42768__auto__ = e43657;
var statearr_43658_46813 = state_43590;
(statearr_43658_46813[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_43590[(4)]))){
var statearr_43659_46814 = state_43590;
(statearr_43659_46814[(1)] = cljs.core.first((state_43590[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46815 = state_43590;
state_43590 = G__46815;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__ = function(state_43590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1.call(this,state_43590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_43660 = f__43001__auto__();
(statearr_43660[(6)] = c__43000__auto___46769);

return statearr_43660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


var c__43000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_43710){
var state_val_43711 = (state_43710[(1)]);
if((state_val_43711 === (7))){
var inst_43705 = (state_43710[(2)]);
var state_43710__$1 = state_43710;
var statearr_43718_46816 = state_43710__$1;
(statearr_43718_46816[(2)] = inst_43705);

(statearr_43718_46816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (20))){
var state_43710__$1 = state_43710;
var statearr_43720_46818 = state_43710__$1;
(statearr_43720_46818[(2)] = null);

(statearr_43720_46818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (1))){
var state_43710__$1 = state_43710;
var statearr_43721_46821 = state_43710__$1;
(statearr_43721_46821[(2)] = null);

(statearr_43721_46821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (4))){
var inst_43667 = (state_43710[(7)]);
var inst_43667__$1 = (state_43710[(2)]);
var inst_43668 = (inst_43667__$1 == null);
var state_43710__$1 = (function (){var statearr_43722 = state_43710;
(statearr_43722[(7)] = inst_43667__$1);

return statearr_43722;
})();
if(cljs.core.truth_(inst_43668)){
var statearr_43724_46823 = state_43710__$1;
(statearr_43724_46823[(1)] = (5));

} else {
var statearr_43727_46824 = state_43710__$1;
(statearr_43727_46824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (15))){
var inst_43680 = (state_43710[(8)]);
var state_43710__$1 = state_43710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43710__$1,(18),to,inst_43680);
} else {
if((state_val_43711 === (21))){
var inst_43699 = (state_43710[(2)]);
var state_43710__$1 = state_43710;
var statearr_43729_46825 = state_43710__$1;
(statearr_43729_46825[(2)] = inst_43699);

(statearr_43729_46825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (13))){
var inst_43701 = (state_43710[(2)]);
var state_43710__$1 = (function (){var statearr_43736 = state_43710;
(statearr_43736[(9)] = inst_43701);

return statearr_43736;
})();
var statearr_43737_46826 = state_43710__$1;
(statearr_43737_46826[(2)] = null);

(statearr_43737_46826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (6))){
var inst_43667 = (state_43710[(7)]);
var state_43710__$1 = state_43710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43710__$1,(11),inst_43667);
} else {
if((state_val_43711 === (17))){
var inst_43693 = (state_43710[(2)]);
var state_43710__$1 = state_43710;
if(cljs.core.truth_(inst_43693)){
var statearr_43738_46832 = state_43710__$1;
(statearr_43738_46832[(1)] = (19));

} else {
var statearr_43739_46837 = state_43710__$1;
(statearr_43739_46837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (3))){
var inst_43707 = (state_43710[(2)]);
var state_43710__$1 = state_43710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43710__$1,inst_43707);
} else {
if((state_val_43711 === (12))){
var inst_43677 = (state_43710[(10)]);
var state_43710__$1 = state_43710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43710__$1,(14),inst_43677);
} else {
if((state_val_43711 === (2))){
var state_43710__$1 = state_43710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43710__$1,(4),results);
} else {
if((state_val_43711 === (19))){
var state_43710__$1 = state_43710;
var statearr_43740_46852 = state_43710__$1;
(statearr_43740_46852[(2)] = null);

(statearr_43740_46852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (11))){
var inst_43677 = (state_43710[(2)]);
var state_43710__$1 = (function (){var statearr_43742 = state_43710;
(statearr_43742[(10)] = inst_43677);

return statearr_43742;
})();
var statearr_43745_46862 = state_43710__$1;
(statearr_43745_46862[(2)] = null);

(statearr_43745_46862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (9))){
var state_43710__$1 = state_43710;
var statearr_43754_46868 = state_43710__$1;
(statearr_43754_46868[(2)] = null);

(statearr_43754_46868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (5))){
var state_43710__$1 = state_43710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43756_46869 = state_43710__$1;
(statearr_43756_46869[(1)] = (8));

} else {
var statearr_43757_46870 = state_43710__$1;
(statearr_43757_46870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (14))){
var inst_43680 = (state_43710[(8)]);
var inst_43680__$1 = (state_43710[(2)]);
var inst_43683 = (inst_43680__$1 == null);
var inst_43684 = cljs.core.not(inst_43683);
var state_43710__$1 = (function (){var statearr_43758 = state_43710;
(statearr_43758[(8)] = inst_43680__$1);

return statearr_43758;
})();
if(inst_43684){
var statearr_43762_46877 = state_43710__$1;
(statearr_43762_46877[(1)] = (15));

} else {
var statearr_43763_46879 = state_43710__$1;
(statearr_43763_46879[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (16))){
var state_43710__$1 = state_43710;
var statearr_43764_46880 = state_43710__$1;
(statearr_43764_46880[(2)] = false);

(statearr_43764_46880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (10))){
var inst_43674 = (state_43710[(2)]);
var state_43710__$1 = state_43710;
var statearr_43771_46885 = state_43710__$1;
(statearr_43771_46885[(2)] = inst_43674);

(statearr_43771_46885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (18))){
var inst_43689 = (state_43710[(2)]);
var state_43710__$1 = state_43710;
var statearr_43779_46890 = state_43710__$1;
(statearr_43779_46890[(2)] = inst_43689);

(statearr_43779_46890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43711 === (8))){
var inst_43671 = cljs.core.async.close_BANG_(to);
var state_43710__$1 = state_43710;
var statearr_43782_46897 = state_43710__$1;
(statearr_43782_46897[(2)] = inst_43671);

(statearr_43782_46897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0 = (function (){
var statearr_43790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__);

(statearr_43790[(1)] = (1));

return statearr_43790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1 = (function (state_43710){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_43710);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e43791){var ex__42768__auto__ = e43791;
var statearr_43792_46906 = state_43710;
(statearr_43792_46906[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_43710[(4)]))){
var statearr_43795_46909 = state_43710;
(statearr_43795_46909[(1)] = cljs.core.first((state_43710[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46913 = state_43710;
state_43710 = G__46913;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__ = function(state_43710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1.call(this,state_43710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42765__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_43796 = f__43001__auto__();
(statearr_43796[(6)] = c__43000__auto__);

return statearr_43796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));

return c__43000__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__43800 = arguments.length;
switch (G__43800) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__43813 = arguments.length;
switch (G__43813) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__43847 = arguments.length;
switch (G__43847) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43000__auto___46948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_43886){
var state_val_43887 = (state_43886[(1)]);
if((state_val_43887 === (7))){
var inst_43882 = (state_43886[(2)]);
var state_43886__$1 = state_43886;
var statearr_43891_46950 = state_43886__$1;
(statearr_43891_46950[(2)] = inst_43882);

(statearr_43891_46950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43887 === (1))){
var state_43886__$1 = state_43886;
var statearr_43896_46953 = state_43886__$1;
(statearr_43896_46953[(2)] = null);

(statearr_43896_46953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43887 === (4))){
var inst_43863 = (state_43886[(7)]);
var inst_43863__$1 = (state_43886[(2)]);
var inst_43864 = (inst_43863__$1 == null);
var state_43886__$1 = (function (){var statearr_43903 = state_43886;
(statearr_43903[(7)] = inst_43863__$1);

return statearr_43903;
})();
if(cljs.core.truth_(inst_43864)){
var statearr_43905_46960 = state_43886__$1;
(statearr_43905_46960[(1)] = (5));

} else {
var statearr_43908_46963 = state_43886__$1;
(statearr_43908_46963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43887 === (13))){
var state_43886__$1 = state_43886;
var statearr_43914_46964 = state_43886__$1;
(statearr_43914_46964[(2)] = null);

(statearr_43914_46964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43887 === (6))){
var inst_43863 = (state_43886[(7)]);
var inst_43869 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43863) : p.call(null,inst_43863));
var state_43886__$1 = state_43886;
if(cljs.core.truth_(inst_43869)){
var statearr_43920_46975 = state_43886__$1;
(statearr_43920_46975[(1)] = (9));

} else {
var statearr_43921_46976 = state_43886__$1;
(statearr_43921_46976[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43887 === (3))){
var inst_43884 = (state_43886[(2)]);
var state_43886__$1 = state_43886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43886__$1,inst_43884);
} else {
if((state_val_43887 === (12))){
var state_43886__$1 = state_43886;
var statearr_43922_46981 = state_43886__$1;
(statearr_43922_46981[(2)] = null);

(statearr_43922_46981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43887 === (2))){
var state_43886__$1 = state_43886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43886__$1,(4),ch);
} else {
if((state_val_43887 === (11))){
var inst_43863 = (state_43886[(7)]);
var inst_43873 = (state_43886[(2)]);
var state_43886__$1 = state_43886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43886__$1,(8),inst_43873,inst_43863);
} else {
if((state_val_43887 === (9))){
var state_43886__$1 = state_43886;
var statearr_43928_46989 = state_43886__$1;
(statearr_43928_46989[(2)] = tc);

(statearr_43928_46989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43887 === (5))){
var inst_43866 = cljs.core.async.close_BANG_(tc);
var inst_43867 = cljs.core.async.close_BANG_(fc);
var state_43886__$1 = (function (){var statearr_43929 = state_43886;
(statearr_43929[(8)] = inst_43866);

return statearr_43929;
})();
var statearr_43932_46992 = state_43886__$1;
(statearr_43932_46992[(2)] = inst_43867);

(statearr_43932_46992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43887 === (14))){
var inst_43880 = (state_43886[(2)]);
var state_43886__$1 = state_43886;
var statearr_43937_46998 = state_43886__$1;
(statearr_43937_46998[(2)] = inst_43880);

(statearr_43937_46998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43887 === (10))){
var state_43886__$1 = state_43886;
var statearr_43938_47003 = state_43886__$1;
(statearr_43938_47003[(2)] = fc);

(statearr_43938_47003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43887 === (8))){
var inst_43875 = (state_43886[(2)]);
var state_43886__$1 = state_43886;
if(cljs.core.truth_(inst_43875)){
var statearr_43942_47009 = state_43886__$1;
(statearr_43942_47009[(1)] = (12));

} else {
var statearr_43943_47013 = state_43886__$1;
(statearr_43943_47013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_43944 = [null,null,null,null,null,null,null,null,null];
(statearr_43944[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_43944[(1)] = (1));

return statearr_43944;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_43886){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_43886);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e43945){var ex__42768__auto__ = e43945;
var statearr_43946_47023 = state_43886;
(statearr_43946_47023[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_43886[(4)]))){
var statearr_43947_47024 = state_43886;
(statearr_43947_47024[(1)] = cljs.core.first((state_43886[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47026 = state_43886;
state_43886 = G__47026;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_43886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_43886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_43962 = f__43001__auto__();
(statearr_43962[(6)] = c__43000__auto___46948);

return statearr_43962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_43984){
var state_val_43985 = (state_43984[(1)]);
if((state_val_43985 === (7))){
var inst_43980 = (state_43984[(2)]);
var state_43984__$1 = state_43984;
var statearr_43990_47035 = state_43984__$1;
(statearr_43990_47035[(2)] = inst_43980);

(statearr_43990_47035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (1))){
var inst_43963 = init;
var inst_43964 = inst_43963;
var state_43984__$1 = (function (){var statearr_43992 = state_43984;
(statearr_43992[(7)] = inst_43964);

return statearr_43992;
})();
var statearr_43997_47038 = state_43984__$1;
(statearr_43997_47038[(2)] = null);

(statearr_43997_47038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (4))){
var inst_43967 = (state_43984[(8)]);
var inst_43967__$1 = (state_43984[(2)]);
var inst_43968 = (inst_43967__$1 == null);
var state_43984__$1 = (function (){var statearr_44006 = state_43984;
(statearr_44006[(8)] = inst_43967__$1);

return statearr_44006;
})();
if(cljs.core.truth_(inst_43968)){
var statearr_44009_47047 = state_43984__$1;
(statearr_44009_47047[(1)] = (5));

} else {
var statearr_44015_47049 = state_43984__$1;
(statearr_44015_47049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (6))){
var inst_43964 = (state_43984[(7)]);
var inst_43971 = (state_43984[(9)]);
var inst_43967 = (state_43984[(8)]);
var inst_43971__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43964,inst_43967) : f.call(null,inst_43964,inst_43967));
var inst_43972 = cljs.core.reduced_QMARK_(inst_43971__$1);
var state_43984__$1 = (function (){var statearr_44016 = state_43984;
(statearr_44016[(9)] = inst_43971__$1);

return statearr_44016;
})();
if(inst_43972){
var statearr_44017_47052 = state_43984__$1;
(statearr_44017_47052[(1)] = (8));

} else {
var statearr_44019_47053 = state_43984__$1;
(statearr_44019_47053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (3))){
var inst_43982 = (state_43984[(2)]);
var state_43984__$1 = state_43984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43984__$1,inst_43982);
} else {
if((state_val_43985 === (2))){
var state_43984__$1 = state_43984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43984__$1,(4),ch);
} else {
if((state_val_43985 === (9))){
var inst_43971 = (state_43984[(9)]);
var inst_43964 = inst_43971;
var state_43984__$1 = (function (){var statearr_44024 = state_43984;
(statearr_44024[(7)] = inst_43964);

return statearr_44024;
})();
var statearr_44025_47064 = state_43984__$1;
(statearr_44025_47064[(2)] = null);

(statearr_44025_47064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (5))){
var inst_43964 = (state_43984[(7)]);
var state_43984__$1 = state_43984;
var statearr_44031_47066 = state_43984__$1;
(statearr_44031_47066[(2)] = inst_43964);

(statearr_44031_47066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (10))){
var inst_43978 = (state_43984[(2)]);
var state_43984__$1 = state_43984;
var statearr_44038_47072 = state_43984__$1;
(statearr_44038_47072[(2)] = inst_43978);

(statearr_44038_47072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43985 === (8))){
var inst_43971 = (state_43984[(9)]);
var inst_43974 = cljs.core.deref(inst_43971);
var state_43984__$1 = state_43984;
var statearr_44048_47075 = state_43984__$1;
(statearr_44048_47075[(2)] = inst_43974);

(statearr_44048_47075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42765__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42765__auto____0 = (function (){
var statearr_44054 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44054[(0)] = cljs$core$async$reduce_$_state_machine__42765__auto__);

(statearr_44054[(1)] = (1));

return statearr_44054;
});
var cljs$core$async$reduce_$_state_machine__42765__auto____1 = (function (state_43984){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_43984);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e44055){var ex__42768__auto__ = e44055;
var statearr_44056_47083 = state_43984;
(statearr_44056_47083[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_43984[(4)]))){
var statearr_44057_47084 = state_43984;
(statearr_44057_47084[(1)] = cljs.core.first((state_43984[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47091 = state_43984;
state_43984 = G__47091;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42765__auto__ = function(state_43984){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42765__auto____1.call(this,state_43984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42765__auto____0;
cljs$core$async$reduce_$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42765__auto____1;
return cljs$core$async$reduce_$_state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_44066 = f__43001__auto__();
(statearr_44066[(6)] = c__43000__auto__);

return statearr_44066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));

return c__43000__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_44088){
var state_val_44089 = (state_44088[(1)]);
if((state_val_44089 === (1))){
var inst_44083 = cljs.core.async.reduce(f__$1,init,ch);
var state_44088__$1 = state_44088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44088__$1,(2),inst_44083);
} else {
if((state_val_44089 === (2))){
var inst_44085 = (state_44088[(2)]);
var inst_44086 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44085) : f__$1.call(null,inst_44085));
var state_44088__$1 = state_44088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44088__$1,inst_44086);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42765__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42765__auto____0 = (function (){
var statearr_44093 = [null,null,null,null,null,null,null];
(statearr_44093[(0)] = cljs$core$async$transduce_$_state_machine__42765__auto__);

(statearr_44093[(1)] = (1));

return statearr_44093;
});
var cljs$core$async$transduce_$_state_machine__42765__auto____1 = (function (state_44088){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_44088);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e44094){var ex__42768__auto__ = e44094;
var statearr_44095_47105 = state_44088;
(statearr_44095_47105[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_44088[(4)]))){
var statearr_44096_47106 = state_44088;
(statearr_44096_47106[(1)] = cljs.core.first((state_44088[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47107 = state_44088;
state_44088 = G__47107;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42765__auto__ = function(state_44088){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42765__auto____1.call(this,state_44088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42765__auto____0;
cljs$core$async$transduce_$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42765__auto____1;
return cljs$core$async$transduce_$_state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_44101 = f__43001__auto__();
(statearr_44101[(6)] = c__43000__auto__);

return statearr_44101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));

return c__43000__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44104 = arguments.length;
switch (G__44104) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_44135){
var state_val_44136 = (state_44135[(1)]);
if((state_val_44136 === (7))){
var inst_44115 = (state_44135[(2)]);
var state_44135__$1 = state_44135;
var statearr_44137_47123 = state_44135__$1;
(statearr_44137_47123[(2)] = inst_44115);

(statearr_44137_47123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (1))){
var inst_44109 = cljs.core.seq(coll);
var inst_44110 = inst_44109;
var state_44135__$1 = (function (){var statearr_44138 = state_44135;
(statearr_44138[(7)] = inst_44110);

return statearr_44138;
})();
var statearr_44139_47125 = state_44135__$1;
(statearr_44139_47125[(2)] = null);

(statearr_44139_47125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (4))){
var inst_44110 = (state_44135[(7)]);
var inst_44113 = cljs.core.first(inst_44110);
var state_44135__$1 = state_44135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44135__$1,(7),ch,inst_44113);
} else {
if((state_val_44136 === (13))){
var inst_44127 = (state_44135[(2)]);
var state_44135__$1 = state_44135;
var statearr_44145_47127 = state_44135__$1;
(statearr_44145_47127[(2)] = inst_44127);

(statearr_44145_47127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (6))){
var inst_44118 = (state_44135[(2)]);
var state_44135__$1 = state_44135;
if(cljs.core.truth_(inst_44118)){
var statearr_44150_47130 = state_44135__$1;
(statearr_44150_47130[(1)] = (8));

} else {
var statearr_44152_47138 = state_44135__$1;
(statearr_44152_47138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (3))){
var inst_44131 = (state_44135[(2)]);
var state_44135__$1 = state_44135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44135__$1,inst_44131);
} else {
if((state_val_44136 === (12))){
var state_44135__$1 = state_44135;
var statearr_44157_47141 = state_44135__$1;
(statearr_44157_47141[(2)] = null);

(statearr_44157_47141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (2))){
var inst_44110 = (state_44135[(7)]);
var state_44135__$1 = state_44135;
if(cljs.core.truth_(inst_44110)){
var statearr_44158_47142 = state_44135__$1;
(statearr_44158_47142[(1)] = (4));

} else {
var statearr_44159_47143 = state_44135__$1;
(statearr_44159_47143[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (11))){
var inst_44124 = cljs.core.async.close_BANG_(ch);
var state_44135__$1 = state_44135;
var statearr_44161_47144 = state_44135__$1;
(statearr_44161_47144[(2)] = inst_44124);

(statearr_44161_47144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (9))){
var state_44135__$1 = state_44135;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44163_47146 = state_44135__$1;
(statearr_44163_47146[(1)] = (11));

} else {
var statearr_44167_47147 = state_44135__$1;
(statearr_44167_47147[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (5))){
var inst_44110 = (state_44135[(7)]);
var state_44135__$1 = state_44135;
var statearr_44169_47148 = state_44135__$1;
(statearr_44169_47148[(2)] = inst_44110);

(statearr_44169_47148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (10))){
var inst_44129 = (state_44135[(2)]);
var state_44135__$1 = state_44135;
var statearr_44170_47149 = state_44135__$1;
(statearr_44170_47149[(2)] = inst_44129);

(statearr_44170_47149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (8))){
var inst_44110 = (state_44135[(7)]);
var inst_44120 = cljs.core.next(inst_44110);
var inst_44110__$1 = inst_44120;
var state_44135__$1 = (function (){var statearr_44171 = state_44135;
(statearr_44171[(7)] = inst_44110__$1);

return statearr_44171;
})();
var statearr_44172_47152 = state_44135__$1;
(statearr_44172_47152[(2)] = null);

(statearr_44172_47152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_44177 = [null,null,null,null,null,null,null,null];
(statearr_44177[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_44177[(1)] = (1));

return statearr_44177;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_44135){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_44135);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e44178){var ex__42768__auto__ = e44178;
var statearr_44179_47155 = state_44135;
(statearr_44179_47155[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_44135[(4)]))){
var statearr_44180_47161 = state_44135;
(statearr_44180_47161[(1)] = cljs.core.first((state_44135[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47162 = state_44135;
state_44135 = G__47162;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_44135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_44135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_44181 = f__43001__auto__();
(statearr_44181[(6)] = c__43000__auto__);

return statearr_44181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));

return c__43000__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44188 = arguments.length;
switch (G__44188) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47170 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47170(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47172 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47172(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47177 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47177(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47179 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47179(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44206 = (function (ch,cs,meta44207){
this.ch = ch;
this.cs = cs;
this.meta44207 = meta44207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44208,meta44207__$1){
var self__ = this;
var _44208__$1 = this;
return (new cljs.core.async.t_cljs$core$async44206(self__.ch,self__.cs,meta44207__$1));
}));

(cljs.core.async.t_cljs$core$async44206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44208){
var self__ = this;
var _44208__$1 = this;
return self__.meta44207;
}));

(cljs.core.async.t_cljs$core$async44206.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44206.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44206.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44206.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44206.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44207","meta44207",-1609133846,null)], null);
}));

(cljs.core.async.t_cljs$core$async44206.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44206");

(cljs.core.async.t_cljs$core$async44206.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44206");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44206.
 */
cljs.core.async.__GT_t_cljs$core$async44206 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44206(ch__$1,cs__$1,meta44207){
return (new cljs.core.async.t_cljs$core$async44206(ch__$1,cs__$1,meta44207));
});

}

return (new cljs.core.async.t_cljs$core$async44206(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43000__auto___47197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_44423){
var state_val_44424 = (state_44423[(1)]);
if((state_val_44424 === (7))){
var inst_44416 = (state_44423[(2)]);
var state_44423__$1 = state_44423;
var statearr_44431_47198 = state_44423__$1;
(statearr_44431_47198[(2)] = inst_44416);

(statearr_44431_47198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (20))){
var inst_44260 = (state_44423[(7)]);
var inst_44275 = cljs.core.first(inst_44260);
var inst_44276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44275,(0),null);
var inst_44277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44275,(1),null);
var state_44423__$1 = (function (){var statearr_44434 = state_44423;
(statearr_44434[(8)] = inst_44276);

return statearr_44434;
})();
if(cljs.core.truth_(inst_44277)){
var statearr_44435_47200 = state_44423__$1;
(statearr_44435_47200[(1)] = (22));

} else {
var statearr_44436_47201 = state_44423__$1;
(statearr_44436_47201[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (27))){
var inst_44351 = (state_44423[(9)]);
var inst_44325 = (state_44423[(10)]);
var inst_44327 = (state_44423[(11)]);
var inst_44222 = (state_44423[(12)]);
var inst_44351__$1 = cljs.core._nth(inst_44325,inst_44327);
var inst_44352 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44351__$1,inst_44222,done);
var state_44423__$1 = (function (){var statearr_44444 = state_44423;
(statearr_44444[(9)] = inst_44351__$1);

return statearr_44444;
})();
if(cljs.core.truth_(inst_44352)){
var statearr_44445_47206 = state_44423__$1;
(statearr_44445_47206[(1)] = (30));

} else {
var statearr_44446_47207 = state_44423__$1;
(statearr_44446_47207[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (1))){
var state_44423__$1 = state_44423;
var statearr_44448_47208 = state_44423__$1;
(statearr_44448_47208[(2)] = null);

(statearr_44448_47208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (24))){
var inst_44260 = (state_44423[(7)]);
var inst_44287 = (state_44423[(2)]);
var inst_44291 = cljs.core.next(inst_44260);
var inst_44235 = inst_44291;
var inst_44236 = null;
var inst_44237 = (0);
var inst_44238 = (0);
var state_44423__$1 = (function (){var statearr_44452 = state_44423;
(statearr_44452[(13)] = inst_44235);

(statearr_44452[(14)] = inst_44236);

(statearr_44452[(15)] = inst_44238);

(statearr_44452[(16)] = inst_44287);

(statearr_44452[(17)] = inst_44237);

return statearr_44452;
})();
var statearr_44453_47212 = state_44423__$1;
(statearr_44453_47212[(2)] = null);

(statearr_44453_47212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (39))){
var state_44423__$1 = state_44423;
var statearr_44462_47214 = state_44423__$1;
(statearr_44462_47214[(2)] = null);

(statearr_44462_47214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (4))){
var inst_44222 = (state_44423[(12)]);
var inst_44222__$1 = (state_44423[(2)]);
var inst_44227 = (inst_44222__$1 == null);
var state_44423__$1 = (function (){var statearr_44464 = state_44423;
(statearr_44464[(12)] = inst_44222__$1);

return statearr_44464;
})();
if(cljs.core.truth_(inst_44227)){
var statearr_44465_47215 = state_44423__$1;
(statearr_44465_47215[(1)] = (5));

} else {
var statearr_44466_47217 = state_44423__$1;
(statearr_44466_47217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (15))){
var inst_44235 = (state_44423[(13)]);
var inst_44236 = (state_44423[(14)]);
var inst_44238 = (state_44423[(15)]);
var inst_44237 = (state_44423[(17)]);
var inst_44254 = (state_44423[(2)]);
var inst_44255 = (inst_44238 + (1));
var tmp44457 = inst_44235;
var tmp44458 = inst_44236;
var tmp44459 = inst_44237;
var inst_44235__$1 = tmp44457;
var inst_44236__$1 = tmp44458;
var inst_44237__$1 = tmp44459;
var inst_44238__$1 = inst_44255;
var state_44423__$1 = (function (){var statearr_44471 = state_44423;
(statearr_44471[(13)] = inst_44235__$1);

(statearr_44471[(14)] = inst_44236__$1);

(statearr_44471[(15)] = inst_44238__$1);

(statearr_44471[(18)] = inst_44254);

(statearr_44471[(17)] = inst_44237__$1);

return statearr_44471;
})();
var statearr_44472_47223 = state_44423__$1;
(statearr_44472_47223[(2)] = null);

(statearr_44472_47223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (21))){
var inst_44294 = (state_44423[(2)]);
var state_44423__$1 = state_44423;
var statearr_44476_47224 = state_44423__$1;
(statearr_44476_47224[(2)] = inst_44294);

(statearr_44476_47224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (31))){
var inst_44351 = (state_44423[(9)]);
var inst_44355 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44351);
var state_44423__$1 = state_44423;
var statearr_44480_47225 = state_44423__$1;
(statearr_44480_47225[(2)] = inst_44355);

(statearr_44480_47225[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (32))){
var inst_44325 = (state_44423[(10)]);
var inst_44326 = (state_44423[(19)]);
var inst_44327 = (state_44423[(11)]);
var inst_44324 = (state_44423[(20)]);
var inst_44357 = (state_44423[(2)]);
var inst_44358 = (inst_44327 + (1));
var tmp44473 = inst_44325;
var tmp44474 = inst_44326;
var tmp44475 = inst_44324;
var inst_44324__$1 = tmp44475;
var inst_44325__$1 = tmp44473;
var inst_44326__$1 = tmp44474;
var inst_44327__$1 = inst_44358;
var state_44423__$1 = (function (){var statearr_44482 = state_44423;
(statearr_44482[(10)] = inst_44325__$1);

(statearr_44482[(19)] = inst_44326__$1);

(statearr_44482[(11)] = inst_44327__$1);

(statearr_44482[(20)] = inst_44324__$1);

(statearr_44482[(21)] = inst_44357);

return statearr_44482;
})();
var statearr_44483_47228 = state_44423__$1;
(statearr_44483_47228[(2)] = null);

(statearr_44483_47228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (40))){
var inst_44385 = (state_44423[(22)]);
var inst_44389 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44385);
var state_44423__$1 = state_44423;
var statearr_44487_47230 = state_44423__$1;
(statearr_44487_47230[(2)] = inst_44389);

(statearr_44487_47230[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (33))){
var inst_44370 = (state_44423[(23)]);
var inst_44374 = cljs.core.chunked_seq_QMARK_(inst_44370);
var state_44423__$1 = state_44423;
if(inst_44374){
var statearr_44489_47235 = state_44423__$1;
(statearr_44489_47235[(1)] = (36));

} else {
var statearr_44491_47236 = state_44423__$1;
(statearr_44491_47236[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (13))){
var inst_44247 = (state_44423[(24)]);
var inst_44251 = cljs.core.async.close_BANG_(inst_44247);
var state_44423__$1 = state_44423;
var statearr_44496_47239 = state_44423__$1;
(statearr_44496_47239[(2)] = inst_44251);

(statearr_44496_47239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (22))){
var inst_44276 = (state_44423[(8)]);
var inst_44284 = cljs.core.async.close_BANG_(inst_44276);
var state_44423__$1 = state_44423;
var statearr_44497_47241 = state_44423__$1;
(statearr_44497_47241[(2)] = inst_44284);

(statearr_44497_47241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (36))){
var inst_44370 = (state_44423[(23)]);
var inst_44380 = cljs.core.chunk_first(inst_44370);
var inst_44381 = cljs.core.chunk_rest(inst_44370);
var inst_44382 = cljs.core.count(inst_44380);
var inst_44324 = inst_44381;
var inst_44325 = inst_44380;
var inst_44326 = inst_44382;
var inst_44327 = (0);
var state_44423__$1 = (function (){var statearr_44502 = state_44423;
(statearr_44502[(10)] = inst_44325);

(statearr_44502[(19)] = inst_44326);

(statearr_44502[(11)] = inst_44327);

(statearr_44502[(20)] = inst_44324);

return statearr_44502;
})();
var statearr_44504_47246 = state_44423__$1;
(statearr_44504_47246[(2)] = null);

(statearr_44504_47246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (41))){
var inst_44370 = (state_44423[(23)]);
var inst_44391 = (state_44423[(2)]);
var inst_44392 = cljs.core.next(inst_44370);
var inst_44324 = inst_44392;
var inst_44325 = null;
var inst_44326 = (0);
var inst_44327 = (0);
var state_44423__$1 = (function (){var statearr_44505 = state_44423;
(statearr_44505[(10)] = inst_44325);

(statearr_44505[(19)] = inst_44326);

(statearr_44505[(11)] = inst_44327);

(statearr_44505[(25)] = inst_44391);

(statearr_44505[(20)] = inst_44324);

return statearr_44505;
})();
var statearr_44510_47250 = state_44423__$1;
(statearr_44510_47250[(2)] = null);

(statearr_44510_47250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (43))){
var state_44423__$1 = state_44423;
var statearr_44511_47253 = state_44423__$1;
(statearr_44511_47253[(2)] = null);

(statearr_44511_47253[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (29))){
var inst_44402 = (state_44423[(2)]);
var state_44423__$1 = state_44423;
var statearr_44512_47256 = state_44423__$1;
(statearr_44512_47256[(2)] = inst_44402);

(statearr_44512_47256[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (44))){
var inst_44413 = (state_44423[(2)]);
var state_44423__$1 = (function (){var statearr_44516 = state_44423;
(statearr_44516[(26)] = inst_44413);

return statearr_44516;
})();
var statearr_44517_47261 = state_44423__$1;
(statearr_44517_47261[(2)] = null);

(statearr_44517_47261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (6))){
var inst_44310 = (state_44423[(27)]);
var inst_44308 = cljs.core.deref(cs);
var inst_44310__$1 = cljs.core.keys(inst_44308);
var inst_44314 = cljs.core.count(inst_44310__$1);
var inst_44315 = cljs.core.reset_BANG_(dctr,inst_44314);
var inst_44323 = cljs.core.seq(inst_44310__$1);
var inst_44324 = inst_44323;
var inst_44325 = null;
var inst_44326 = (0);
var inst_44327 = (0);
var state_44423__$1 = (function (){var statearr_44519 = state_44423;
(statearr_44519[(10)] = inst_44325);

(statearr_44519[(28)] = inst_44315);

(statearr_44519[(19)] = inst_44326);

(statearr_44519[(11)] = inst_44327);

(statearr_44519[(27)] = inst_44310__$1);

(statearr_44519[(20)] = inst_44324);

return statearr_44519;
})();
var statearr_44526_47276 = state_44423__$1;
(statearr_44526_47276[(2)] = null);

(statearr_44526_47276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (28))){
var inst_44370 = (state_44423[(23)]);
var inst_44324 = (state_44423[(20)]);
var inst_44370__$1 = cljs.core.seq(inst_44324);
var state_44423__$1 = (function (){var statearr_44527 = state_44423;
(statearr_44527[(23)] = inst_44370__$1);

return statearr_44527;
})();
if(inst_44370__$1){
var statearr_44531_47282 = state_44423__$1;
(statearr_44531_47282[(1)] = (33));

} else {
var statearr_44536_47286 = state_44423__$1;
(statearr_44536_47286[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (25))){
var inst_44326 = (state_44423[(19)]);
var inst_44327 = (state_44423[(11)]);
var inst_44342 = (inst_44327 < inst_44326);
var inst_44343 = inst_44342;
var state_44423__$1 = state_44423;
if(cljs.core.truth_(inst_44343)){
var statearr_44540_47293 = state_44423__$1;
(statearr_44540_47293[(1)] = (27));

} else {
var statearr_44541_47300 = state_44423__$1;
(statearr_44541_47300[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (34))){
var state_44423__$1 = state_44423;
var statearr_44542_47308 = state_44423__$1;
(statearr_44542_47308[(2)] = null);

(statearr_44542_47308[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (17))){
var state_44423__$1 = state_44423;
var statearr_44546_47312 = state_44423__$1;
(statearr_44546_47312[(2)] = null);

(statearr_44546_47312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (3))){
var inst_44418 = (state_44423[(2)]);
var state_44423__$1 = state_44423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44423__$1,inst_44418);
} else {
if((state_val_44424 === (12))){
var inst_44300 = (state_44423[(2)]);
var state_44423__$1 = state_44423;
var statearr_44547_47318 = state_44423__$1;
(statearr_44547_47318[(2)] = inst_44300);

(statearr_44547_47318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (2))){
var state_44423__$1 = state_44423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44423__$1,(4),ch);
} else {
if((state_val_44424 === (23))){
var state_44423__$1 = state_44423;
var statearr_44548_47326 = state_44423__$1;
(statearr_44548_47326[(2)] = null);

(statearr_44548_47326[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (35))){
var inst_44400 = (state_44423[(2)]);
var state_44423__$1 = state_44423;
var statearr_44551_47330 = state_44423__$1;
(statearr_44551_47330[(2)] = inst_44400);

(statearr_44551_47330[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (19))){
var inst_44260 = (state_44423[(7)]);
var inst_44267 = cljs.core.chunk_first(inst_44260);
var inst_44268 = cljs.core.chunk_rest(inst_44260);
var inst_44269 = cljs.core.count(inst_44267);
var inst_44235 = inst_44268;
var inst_44236 = inst_44267;
var inst_44237 = inst_44269;
var inst_44238 = (0);
var state_44423__$1 = (function (){var statearr_44553 = state_44423;
(statearr_44553[(13)] = inst_44235);

(statearr_44553[(14)] = inst_44236);

(statearr_44553[(15)] = inst_44238);

(statearr_44553[(17)] = inst_44237);

return statearr_44553;
})();
var statearr_44557_47339 = state_44423__$1;
(statearr_44557_47339[(2)] = null);

(statearr_44557_47339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (11))){
var inst_44235 = (state_44423[(13)]);
var inst_44260 = (state_44423[(7)]);
var inst_44260__$1 = cljs.core.seq(inst_44235);
var state_44423__$1 = (function (){var statearr_44558 = state_44423;
(statearr_44558[(7)] = inst_44260__$1);

return statearr_44558;
})();
if(inst_44260__$1){
var statearr_44559_47350 = state_44423__$1;
(statearr_44559_47350[(1)] = (16));

} else {
var statearr_44560_47353 = state_44423__$1;
(statearr_44560_47353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (9))){
var inst_44303 = (state_44423[(2)]);
var state_44423__$1 = state_44423;
var statearr_44564_47357 = state_44423__$1;
(statearr_44564_47357[(2)] = inst_44303);

(statearr_44564_47357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (5))){
var inst_44233 = cljs.core.deref(cs);
var inst_44234 = cljs.core.seq(inst_44233);
var inst_44235 = inst_44234;
var inst_44236 = null;
var inst_44237 = (0);
var inst_44238 = (0);
var state_44423__$1 = (function (){var statearr_44572 = state_44423;
(statearr_44572[(13)] = inst_44235);

(statearr_44572[(14)] = inst_44236);

(statearr_44572[(15)] = inst_44238);

(statearr_44572[(17)] = inst_44237);

return statearr_44572;
})();
var statearr_44573_47365 = state_44423__$1;
(statearr_44573_47365[(2)] = null);

(statearr_44573_47365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (14))){
var state_44423__$1 = state_44423;
var statearr_44574_47366 = state_44423__$1;
(statearr_44574_47366[(2)] = null);

(statearr_44574_47366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (45))){
var inst_44410 = (state_44423[(2)]);
var state_44423__$1 = state_44423;
var statearr_44575_47367 = state_44423__$1;
(statearr_44575_47367[(2)] = inst_44410);

(statearr_44575_47367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (26))){
var inst_44310 = (state_44423[(27)]);
var inst_44404 = (state_44423[(2)]);
var inst_44405 = cljs.core.seq(inst_44310);
var state_44423__$1 = (function (){var statearr_44576 = state_44423;
(statearr_44576[(29)] = inst_44404);

return statearr_44576;
})();
if(inst_44405){
var statearr_44577_47377 = state_44423__$1;
(statearr_44577_47377[(1)] = (42));

} else {
var statearr_44579_47380 = state_44423__$1;
(statearr_44579_47380[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (16))){
var inst_44260 = (state_44423[(7)]);
var inst_44264 = cljs.core.chunked_seq_QMARK_(inst_44260);
var state_44423__$1 = state_44423;
if(inst_44264){
var statearr_44580_47381 = state_44423__$1;
(statearr_44580_47381[(1)] = (19));

} else {
var statearr_44581_47382 = state_44423__$1;
(statearr_44581_47382[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (38))){
var inst_44397 = (state_44423[(2)]);
var state_44423__$1 = state_44423;
var statearr_44582_47383 = state_44423__$1;
(statearr_44582_47383[(2)] = inst_44397);

(statearr_44582_47383[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (30))){
var state_44423__$1 = state_44423;
var statearr_44586_47384 = state_44423__$1;
(statearr_44586_47384[(2)] = null);

(statearr_44586_47384[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (10))){
var inst_44236 = (state_44423[(14)]);
var inst_44238 = (state_44423[(15)]);
var inst_44246 = cljs.core._nth(inst_44236,inst_44238);
var inst_44247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44246,(0),null);
var inst_44248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44246,(1),null);
var state_44423__$1 = (function (){var statearr_44593 = state_44423;
(statearr_44593[(24)] = inst_44247);

return statearr_44593;
})();
if(cljs.core.truth_(inst_44248)){
var statearr_44594_47393 = state_44423__$1;
(statearr_44594_47393[(1)] = (13));

} else {
var statearr_44595_47394 = state_44423__$1;
(statearr_44595_47394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (18))){
var inst_44298 = (state_44423[(2)]);
var state_44423__$1 = state_44423;
var statearr_44596_47395 = state_44423__$1;
(statearr_44596_47395[(2)] = inst_44298);

(statearr_44596_47395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (42))){
var state_44423__$1 = state_44423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44423__$1,(45),dchan);
} else {
if((state_val_44424 === (37))){
var inst_44370 = (state_44423[(23)]);
var inst_44222 = (state_44423[(12)]);
var inst_44385 = (state_44423[(22)]);
var inst_44385__$1 = cljs.core.first(inst_44370);
var inst_44386 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44385__$1,inst_44222,done);
var state_44423__$1 = (function (){var statearr_44598 = state_44423;
(statearr_44598[(22)] = inst_44385__$1);

return statearr_44598;
})();
if(cljs.core.truth_(inst_44386)){
var statearr_44599_47397 = state_44423__$1;
(statearr_44599_47397[(1)] = (39));

} else {
var statearr_44600_47398 = state_44423__$1;
(statearr_44600_47398[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44424 === (8))){
var inst_44238 = (state_44423[(15)]);
var inst_44237 = (state_44423[(17)]);
var inst_44240 = (inst_44238 < inst_44237);
var inst_44241 = inst_44240;
var state_44423__$1 = state_44423;
if(cljs.core.truth_(inst_44241)){
var statearr_44601_47400 = state_44423__$1;
(statearr_44601_47400[(1)] = (10));

} else {
var statearr_44602_47401 = state_44423__$1;
(statearr_44602_47401[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42765__auto__ = null;
var cljs$core$async$mult_$_state_machine__42765__auto____0 = (function (){
var statearr_44604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44604[(0)] = cljs$core$async$mult_$_state_machine__42765__auto__);

(statearr_44604[(1)] = (1));

return statearr_44604;
});
var cljs$core$async$mult_$_state_machine__42765__auto____1 = (function (state_44423){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_44423);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e44610){var ex__42768__auto__ = e44610;
var statearr_44611_47405 = state_44423;
(statearr_44611_47405[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_44423[(4)]))){
var statearr_44613_47407 = state_44423;
(statearr_44613_47407[(1)] = cljs.core.first((state_44423[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47409 = state_44423;
state_44423 = G__47409;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42765__auto__ = function(state_44423){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42765__auto____1.call(this,state_44423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42765__auto____0;
cljs$core$async$mult_$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42765__auto____1;
return cljs$core$async$mult_$_state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_44614 = f__43001__auto__();
(statearr_44614[(6)] = c__43000__auto___47197);

return statearr_44614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44617 = arguments.length;
switch (G__44617) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47425 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47425(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47430 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47430(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47441 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47441(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47449 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47449(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47454 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47454(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47460 = arguments.length;
var i__4737__auto___47461 = (0);
while(true){
if((i__4737__auto___47461 < len__4736__auto___47460)){
args__4742__auto__.push((arguments[i__4737__auto___47461]));

var G__47462 = (i__4737__auto___47461 + (1));
i__4737__auto___47461 = G__47462;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44658){
var map__44659 = p__44658;
var map__44659__$1 = (((((!((map__44659 == null))))?(((((map__44659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44659):map__44659);
var opts = map__44659__$1;
var statearr_44671_47467 = state;
(statearr_44671_47467[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44672_47469 = state;
(statearr_44672_47469[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44675_47472 = state;
(statearr_44675_47472[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44645){
var G__44646 = cljs.core.first(seq44645);
var seq44645__$1 = cljs.core.next(seq44645);
var G__44647 = cljs.core.first(seq44645__$1);
var seq44645__$2 = cljs.core.next(seq44645__$1);
var G__44648 = cljs.core.first(seq44645__$2);
var seq44645__$3 = cljs.core.next(seq44645__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44646,G__44647,G__44648,seq44645__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44695 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44696){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44696 = meta44696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44697,meta44696__$1){
var self__ = this;
var _44697__$1 = this;
return (new cljs.core.async.t_cljs$core$async44695(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44696__$1));
}));

(cljs.core.async.t_cljs$core$async44695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44697){
var self__ = this;
var _44697__$1 = this;
return self__.meta44696;
}));

(cljs.core.async.t_cljs$core$async44695.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44695.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44695.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44695.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44695.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44695.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44695.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44696","meta44696",-1859757923,null)], null);
}));

(cljs.core.async.t_cljs$core$async44695.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44695");

(cljs.core.async.t_cljs$core$async44695.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44695");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44695.
 */
cljs.core.async.__GT_t_cljs$core$async44695 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44695(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44696){
return (new cljs.core.async.t_cljs$core$async44695(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44696));
});

}

return (new cljs.core.async.t_cljs$core$async44695(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43000__auto___47508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_44829){
var state_val_44830 = (state_44829[(1)]);
if((state_val_44830 === (7))){
var inst_44737 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44835_47512 = state_44829__$1;
(statearr_44835_47512[(2)] = inst_44737);

(statearr_44835_47512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (20))){
var inst_44755 = (state_44829[(7)]);
var state_44829__$1 = state_44829;
var statearr_44841_47513 = state_44829__$1;
(statearr_44841_47513[(2)] = inst_44755);

(statearr_44841_47513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (27))){
var state_44829__$1 = state_44829;
var statearr_44842_47514 = state_44829__$1;
(statearr_44842_47514[(2)] = null);

(statearr_44842_47514[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (1))){
var inst_44720 = (state_44829[(8)]);
var inst_44720__$1 = calc_state();
var inst_44723 = (inst_44720__$1 == null);
var inst_44724 = cljs.core.not(inst_44723);
var state_44829__$1 = (function (){var statearr_44844 = state_44829;
(statearr_44844[(8)] = inst_44720__$1);

return statearr_44844;
})();
if(inst_44724){
var statearr_44845_47516 = state_44829__$1;
(statearr_44845_47516[(1)] = (2));

} else {
var statearr_44847_47517 = state_44829__$1;
(statearr_44847_47517[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (24))){
var inst_44788 = (state_44829[(9)]);
var inst_44779 = (state_44829[(10)]);
var inst_44802 = (state_44829[(11)]);
var inst_44802__$1 = (inst_44779.cljs$core$IFn$_invoke$arity$1 ? inst_44779.cljs$core$IFn$_invoke$arity$1(inst_44788) : inst_44779.call(null,inst_44788));
var state_44829__$1 = (function (){var statearr_44848 = state_44829;
(statearr_44848[(11)] = inst_44802__$1);

return statearr_44848;
})();
if(cljs.core.truth_(inst_44802__$1)){
var statearr_44849_47518 = state_44829__$1;
(statearr_44849_47518[(1)] = (29));

} else {
var statearr_44850_47523 = state_44829__$1;
(statearr_44850_47523[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (4))){
var inst_44740 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
if(cljs.core.truth_(inst_44740)){
var statearr_44851_47524 = state_44829__$1;
(statearr_44851_47524[(1)] = (8));

} else {
var statearr_44854_47526 = state_44829__$1;
(statearr_44854_47526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (15))){
var inst_44773 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
if(cljs.core.truth_(inst_44773)){
var statearr_44857_47529 = state_44829__$1;
(statearr_44857_47529[(1)] = (19));

} else {
var statearr_44858_47530 = state_44829__$1;
(statearr_44858_47530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (21))){
var inst_44778 = (state_44829[(12)]);
var inst_44778__$1 = (state_44829[(2)]);
var inst_44779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44778__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44778__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44778__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44829__$1 = (function (){var statearr_44863 = state_44829;
(statearr_44863[(13)] = inst_44780);

(statearr_44863[(10)] = inst_44779);

(statearr_44863[(12)] = inst_44778__$1);

return statearr_44863;
})();
return cljs.core.async.ioc_alts_BANG_(state_44829__$1,(22),inst_44781);
} else {
if((state_val_44830 === (31))){
var inst_44811 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
if(cljs.core.truth_(inst_44811)){
var statearr_44868_47535 = state_44829__$1;
(statearr_44868_47535[(1)] = (32));

} else {
var statearr_44869_47536 = state_44829__$1;
(statearr_44869_47536[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (32))){
var inst_44787 = (state_44829[(14)]);
var state_44829__$1 = state_44829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44829__$1,(35),out,inst_44787);
} else {
if((state_val_44830 === (33))){
var inst_44778 = (state_44829[(12)]);
var inst_44755 = inst_44778;
var state_44829__$1 = (function (){var statearr_44874 = state_44829;
(statearr_44874[(7)] = inst_44755);

return statearr_44874;
})();
var statearr_44875_47537 = state_44829__$1;
(statearr_44875_47537[(2)] = null);

(statearr_44875_47537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (13))){
var inst_44755 = (state_44829[(7)]);
var inst_44762 = inst_44755.cljs$lang$protocol_mask$partition0$;
var inst_44763 = (inst_44762 & (64));
var inst_44764 = inst_44755.cljs$core$ISeq$;
var inst_44765 = (cljs.core.PROTOCOL_SENTINEL === inst_44764);
var inst_44766 = ((inst_44763) || (inst_44765));
var state_44829__$1 = state_44829;
if(cljs.core.truth_(inst_44766)){
var statearr_44877_47548 = state_44829__$1;
(statearr_44877_47548[(1)] = (16));

} else {
var statearr_44880_47549 = state_44829__$1;
(statearr_44880_47549[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (22))){
var inst_44788 = (state_44829[(9)]);
var inst_44787 = (state_44829[(14)]);
var inst_44786 = (state_44829[(2)]);
var inst_44787__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44786,(0),null);
var inst_44788__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44786,(1),null);
var inst_44789 = (inst_44787__$1 == null);
var inst_44790 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44788__$1,change);
var inst_44791 = ((inst_44789) || (inst_44790));
var state_44829__$1 = (function (){var statearr_44887 = state_44829;
(statearr_44887[(9)] = inst_44788__$1);

(statearr_44887[(14)] = inst_44787__$1);

return statearr_44887;
})();
if(cljs.core.truth_(inst_44791)){
var statearr_44888_47553 = state_44829__$1;
(statearr_44888_47553[(1)] = (23));

} else {
var statearr_44891_47554 = state_44829__$1;
(statearr_44891_47554[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (36))){
var inst_44778 = (state_44829[(12)]);
var inst_44755 = inst_44778;
var state_44829__$1 = (function (){var statearr_44892 = state_44829;
(statearr_44892[(7)] = inst_44755);

return statearr_44892;
})();
var statearr_44896_47561 = state_44829__$1;
(statearr_44896_47561[(2)] = null);

(statearr_44896_47561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (29))){
var inst_44802 = (state_44829[(11)]);
var state_44829__$1 = state_44829;
var statearr_44907_47570 = state_44829__$1;
(statearr_44907_47570[(2)] = inst_44802);

(statearr_44907_47570[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (6))){
var state_44829__$1 = state_44829;
var statearr_44909_47590 = state_44829__$1;
(statearr_44909_47590[(2)] = false);

(statearr_44909_47590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (28))){
var inst_44798 = (state_44829[(2)]);
var inst_44799 = calc_state();
var inst_44755 = inst_44799;
var state_44829__$1 = (function (){var statearr_44911 = state_44829;
(statearr_44911[(7)] = inst_44755);

(statearr_44911[(15)] = inst_44798);

return statearr_44911;
})();
var statearr_44912_47591 = state_44829__$1;
(statearr_44912_47591[(2)] = null);

(statearr_44912_47591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (25))){
var inst_44825 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44915_47593 = state_44829__$1;
(statearr_44915_47593[(2)] = inst_44825);

(statearr_44915_47593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (34))){
var inst_44823 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44916_47601 = state_44829__$1;
(statearr_44916_47601[(2)] = inst_44823);

(statearr_44916_47601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (17))){
var state_44829__$1 = state_44829;
var statearr_44918_47602 = state_44829__$1;
(statearr_44918_47602[(2)] = false);

(statearr_44918_47602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (3))){
var state_44829__$1 = state_44829;
var statearr_44920_47604 = state_44829__$1;
(statearr_44920_47604[(2)] = false);

(statearr_44920_47604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (12))){
var inst_44827 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44829__$1,inst_44827);
} else {
if((state_val_44830 === (2))){
var inst_44720 = (state_44829[(8)]);
var inst_44729 = inst_44720.cljs$lang$protocol_mask$partition0$;
var inst_44730 = (inst_44729 & (64));
var inst_44731 = inst_44720.cljs$core$ISeq$;
var inst_44732 = (cljs.core.PROTOCOL_SENTINEL === inst_44731);
var inst_44733 = ((inst_44730) || (inst_44732));
var state_44829__$1 = state_44829;
if(cljs.core.truth_(inst_44733)){
var statearr_44921_47617 = state_44829__$1;
(statearr_44921_47617[(1)] = (5));

} else {
var statearr_44922_47618 = state_44829__$1;
(statearr_44922_47618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (23))){
var inst_44787 = (state_44829[(14)]);
var inst_44793 = (inst_44787 == null);
var state_44829__$1 = state_44829;
if(cljs.core.truth_(inst_44793)){
var statearr_44923_47620 = state_44829__$1;
(statearr_44923_47620[(1)] = (26));

} else {
var statearr_44928_47624 = state_44829__$1;
(statearr_44928_47624[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (35))){
var inst_44814 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
if(cljs.core.truth_(inst_44814)){
var statearr_44930_47626 = state_44829__$1;
(statearr_44930_47626[(1)] = (36));

} else {
var statearr_44932_47627 = state_44829__$1;
(statearr_44932_47627[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (19))){
var inst_44755 = (state_44829[(7)]);
var inst_44775 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44755);
var state_44829__$1 = state_44829;
var statearr_44935_47633 = state_44829__$1;
(statearr_44935_47633[(2)] = inst_44775);

(statearr_44935_47633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (11))){
var inst_44755 = (state_44829[(7)]);
var inst_44759 = (inst_44755 == null);
var inst_44760 = cljs.core.not(inst_44759);
var state_44829__$1 = state_44829;
if(inst_44760){
var statearr_44939_47634 = state_44829__$1;
(statearr_44939_47634[(1)] = (13));

} else {
var statearr_44940_47636 = state_44829__$1;
(statearr_44940_47636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (9))){
var inst_44720 = (state_44829[(8)]);
var state_44829__$1 = state_44829;
var statearr_44941_47640 = state_44829__$1;
(statearr_44941_47640[(2)] = inst_44720);

(statearr_44941_47640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (5))){
var state_44829__$1 = state_44829;
var statearr_44942_47642 = state_44829__$1;
(statearr_44942_47642[(2)] = true);

(statearr_44942_47642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (14))){
var state_44829__$1 = state_44829;
var statearr_44943_47643 = state_44829__$1;
(statearr_44943_47643[(2)] = false);

(statearr_44943_47643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (26))){
var inst_44788 = (state_44829[(9)]);
var inst_44795 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44788);
var state_44829__$1 = state_44829;
var statearr_44944_47644 = state_44829__$1;
(statearr_44944_47644[(2)] = inst_44795);

(statearr_44944_47644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (16))){
var state_44829__$1 = state_44829;
var statearr_44948_47645 = state_44829__$1;
(statearr_44948_47645[(2)] = true);

(statearr_44948_47645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (38))){
var inst_44819 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44961_47648 = state_44829__$1;
(statearr_44961_47648[(2)] = inst_44819);

(statearr_44961_47648[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (30))){
var inst_44788 = (state_44829[(9)]);
var inst_44780 = (state_44829[(13)]);
var inst_44779 = (state_44829[(10)]);
var inst_44805 = cljs.core.empty_QMARK_(inst_44779);
var inst_44807 = (inst_44780.cljs$core$IFn$_invoke$arity$1 ? inst_44780.cljs$core$IFn$_invoke$arity$1(inst_44788) : inst_44780.call(null,inst_44788));
var inst_44808 = cljs.core.not(inst_44807);
var inst_44809 = ((inst_44805) && (inst_44808));
var state_44829__$1 = state_44829;
var statearr_44964_47649 = state_44829__$1;
(statearr_44964_47649[(2)] = inst_44809);

(statearr_44964_47649[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (10))){
var inst_44720 = (state_44829[(8)]);
var inst_44751 = (state_44829[(2)]);
var inst_44752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44751,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44751,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44751,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44755 = inst_44720;
var state_44829__$1 = (function (){var statearr_44965 = state_44829;
(statearr_44965[(7)] = inst_44755);

(statearr_44965[(16)] = inst_44754);

(statearr_44965[(17)] = inst_44752);

(statearr_44965[(18)] = inst_44753);

return statearr_44965;
})();
var statearr_44966_47651 = state_44829__$1;
(statearr_44966_47651[(2)] = null);

(statearr_44966_47651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (18))){
var inst_44770 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44967_47652 = state_44829__$1;
(statearr_44967_47652[(2)] = inst_44770);

(statearr_44967_47652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (37))){
var state_44829__$1 = state_44829;
var statearr_44968_47654 = state_44829__$1;
(statearr_44968_47654[(2)] = null);

(statearr_44968_47654[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (8))){
var inst_44720 = (state_44829[(8)]);
var inst_44748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44720);
var state_44829__$1 = state_44829;
var statearr_44971_47656 = state_44829__$1;
(statearr_44971_47656[(2)] = inst_44748);

(statearr_44971_47656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42765__auto__ = null;
var cljs$core$async$mix_$_state_machine__42765__auto____0 = (function (){
var statearr_44977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44977[(0)] = cljs$core$async$mix_$_state_machine__42765__auto__);

(statearr_44977[(1)] = (1));

return statearr_44977;
});
var cljs$core$async$mix_$_state_machine__42765__auto____1 = (function (state_44829){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_44829);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e44978){var ex__42768__auto__ = e44978;
var statearr_44979_47658 = state_44829;
(statearr_44979_47658[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_44829[(4)]))){
var statearr_44981_47659 = state_44829;
(statearr_44981_47659[(1)] = cljs.core.first((state_44829[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47663 = state_44829;
state_44829 = G__47663;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42765__auto__ = function(state_44829){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42765__auto____1.call(this,state_44829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42765__auto____0;
cljs$core$async$mix_$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42765__auto____1;
return cljs$core$async$mix_$_state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_44987 = f__43001__auto__();
(statearr_44987[(6)] = c__43000__auto___47508);

return statearr_44987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47676 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47676(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47679 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47679(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47686 = (function() {
var G__47687 = null;
var G__47687__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47687__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47687 = function(p,v){
switch(arguments.length){
case 1:
return G__47687__1.call(this,p);
case 2:
return G__47687__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47687.cljs$core$IFn$_invoke$arity$1 = G__47687__1;
G__47687.cljs$core$IFn$_invoke$arity$2 = G__47687__2;
return G__47687;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45052 = arguments.length;
switch (G__45052) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47686(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47686(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45071 = arguments.length;
switch (G__45071) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45065_SHARP_){
if(cljs.core.truth_((p1__45065_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45065_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45065_SHARP_.call(null,topic)))){
return p1__45065_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45065_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45081 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45082){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45082 = meta45082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45083,meta45082__$1){
var self__ = this;
var _45083__$1 = this;
return (new cljs.core.async.t_cljs$core$async45081(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45082__$1));
}));

(cljs.core.async.t_cljs$core$async45081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45083){
var self__ = this;
var _45083__$1 = this;
return self__.meta45082;
}));

(cljs.core.async.t_cljs$core$async45081.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45081.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45081.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45081.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45081.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45081.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45082","meta45082",-51169814,null)], null);
}));

(cljs.core.async.t_cljs$core$async45081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45081");

(cljs.core.async.t_cljs$core$async45081.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45081.
 */
cljs.core.async.__GT_t_cljs$core$async45081 = (function cljs$core$async$__GT_t_cljs$core$async45081(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45082){
return (new cljs.core.async.t_cljs$core$async45081(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45082));
});

}

return (new cljs.core.async.t_cljs$core$async45081(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43000__auto___47718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_45200){
var state_val_45202 = (state_45200[(1)]);
if((state_val_45202 === (7))){
var inst_45196 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45207_47719 = state_45200__$1;
(statearr_45207_47719[(2)] = inst_45196);

(statearr_45207_47719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (20))){
var state_45200__$1 = state_45200;
var statearr_45209_47720 = state_45200__$1;
(statearr_45209_47720[(2)] = null);

(statearr_45209_47720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (1))){
var state_45200__$1 = state_45200;
var statearr_45210_47721 = state_45200__$1;
(statearr_45210_47721[(2)] = null);

(statearr_45210_47721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (24))){
var inst_45178 = (state_45200[(7)]);
var inst_45188 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45178);
var state_45200__$1 = state_45200;
var statearr_45221_47725 = state_45200__$1;
(statearr_45221_47725[(2)] = inst_45188);

(statearr_45221_47725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (4))){
var inst_45116 = (state_45200[(8)]);
var inst_45116__$1 = (state_45200[(2)]);
var inst_45117 = (inst_45116__$1 == null);
var state_45200__$1 = (function (){var statearr_45224 = state_45200;
(statearr_45224[(8)] = inst_45116__$1);

return statearr_45224;
})();
if(cljs.core.truth_(inst_45117)){
var statearr_45225_47730 = state_45200__$1;
(statearr_45225_47730[(1)] = (5));

} else {
var statearr_45226_47731 = state_45200__$1;
(statearr_45226_47731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (15))){
var inst_45169 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45233_47732 = state_45200__$1;
(statearr_45233_47732[(2)] = inst_45169);

(statearr_45233_47732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (21))){
var inst_45193 = (state_45200[(2)]);
var state_45200__$1 = (function (){var statearr_45235 = state_45200;
(statearr_45235[(9)] = inst_45193);

return statearr_45235;
})();
var statearr_45236_47740 = state_45200__$1;
(statearr_45236_47740[(2)] = null);

(statearr_45236_47740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (13))){
var inst_45148 = (state_45200[(10)]);
var inst_45150 = cljs.core.chunked_seq_QMARK_(inst_45148);
var state_45200__$1 = state_45200;
if(inst_45150){
var statearr_45238_47741 = state_45200__$1;
(statearr_45238_47741[(1)] = (16));

} else {
var statearr_45239_47742 = state_45200__$1;
(statearr_45239_47742[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (22))){
var inst_45185 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
if(cljs.core.truth_(inst_45185)){
var statearr_45240_47743 = state_45200__$1;
(statearr_45240_47743[(1)] = (23));

} else {
var statearr_45241_47744 = state_45200__$1;
(statearr_45241_47744[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (6))){
var inst_45181 = (state_45200[(11)]);
var inst_45178 = (state_45200[(7)]);
var inst_45116 = (state_45200[(8)]);
var inst_45178__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45116) : topic_fn.call(null,inst_45116));
var inst_45180 = cljs.core.deref(mults);
var inst_45181__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45180,inst_45178__$1);
var state_45200__$1 = (function (){var statearr_45246 = state_45200;
(statearr_45246[(11)] = inst_45181__$1);

(statearr_45246[(7)] = inst_45178__$1);

return statearr_45246;
})();
if(cljs.core.truth_(inst_45181__$1)){
var statearr_45250_47749 = state_45200__$1;
(statearr_45250_47749[(1)] = (19));

} else {
var statearr_45255_47750 = state_45200__$1;
(statearr_45255_47750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (25))){
var inst_45190 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45260_47752 = state_45200__$1;
(statearr_45260_47752[(2)] = inst_45190);

(statearr_45260_47752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (17))){
var inst_45148 = (state_45200[(10)]);
var inst_45159 = cljs.core.first(inst_45148);
var inst_45160 = cljs.core.async.muxch_STAR_(inst_45159);
var inst_45161 = cljs.core.async.close_BANG_(inst_45160);
var inst_45162 = cljs.core.next(inst_45148);
var inst_45130 = inst_45162;
var inst_45131 = null;
var inst_45132 = (0);
var inst_45133 = (0);
var state_45200__$1 = (function (){var statearr_45271 = state_45200;
(statearr_45271[(12)] = inst_45161);

(statearr_45271[(13)] = inst_45131);

(statearr_45271[(14)] = inst_45132);

(statearr_45271[(15)] = inst_45130);

(statearr_45271[(16)] = inst_45133);

return statearr_45271;
})();
var statearr_45279_47764 = state_45200__$1;
(statearr_45279_47764[(2)] = null);

(statearr_45279_47764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (3))){
var inst_45198 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45200__$1,inst_45198);
} else {
if((state_val_45202 === (12))){
var inst_45171 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45286_47770 = state_45200__$1;
(statearr_45286_47770[(2)] = inst_45171);

(statearr_45286_47770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (2))){
var state_45200__$1 = state_45200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45200__$1,(4),ch);
} else {
if((state_val_45202 === (23))){
var state_45200__$1 = state_45200;
var statearr_45293_47776 = state_45200__$1;
(statearr_45293_47776[(2)] = null);

(statearr_45293_47776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (19))){
var inst_45181 = (state_45200[(11)]);
var inst_45116 = (state_45200[(8)]);
var inst_45183 = cljs.core.async.muxch_STAR_(inst_45181);
var state_45200__$1 = state_45200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45200__$1,(22),inst_45183,inst_45116);
} else {
if((state_val_45202 === (11))){
var inst_45130 = (state_45200[(15)]);
var inst_45148 = (state_45200[(10)]);
var inst_45148__$1 = cljs.core.seq(inst_45130);
var state_45200__$1 = (function (){var statearr_45303 = state_45200;
(statearr_45303[(10)] = inst_45148__$1);

return statearr_45303;
})();
if(inst_45148__$1){
var statearr_45305_47778 = state_45200__$1;
(statearr_45305_47778[(1)] = (13));

} else {
var statearr_45306_47779 = state_45200__$1;
(statearr_45306_47779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (9))){
var inst_45173 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45308_47780 = state_45200__$1;
(statearr_45308_47780[(2)] = inst_45173);

(statearr_45308_47780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (5))){
var inst_45127 = cljs.core.deref(mults);
var inst_45128 = cljs.core.vals(inst_45127);
var inst_45129 = cljs.core.seq(inst_45128);
var inst_45130 = inst_45129;
var inst_45131 = null;
var inst_45132 = (0);
var inst_45133 = (0);
var state_45200__$1 = (function (){var statearr_45309 = state_45200;
(statearr_45309[(13)] = inst_45131);

(statearr_45309[(14)] = inst_45132);

(statearr_45309[(15)] = inst_45130);

(statearr_45309[(16)] = inst_45133);

return statearr_45309;
})();
var statearr_45311_47791 = state_45200__$1;
(statearr_45311_47791[(2)] = null);

(statearr_45311_47791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (14))){
var state_45200__$1 = state_45200;
var statearr_45315_47798 = state_45200__$1;
(statearr_45315_47798[(2)] = null);

(statearr_45315_47798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (16))){
var inst_45148 = (state_45200[(10)]);
var inst_45152 = cljs.core.chunk_first(inst_45148);
var inst_45154 = cljs.core.chunk_rest(inst_45148);
var inst_45155 = cljs.core.count(inst_45152);
var inst_45130 = inst_45154;
var inst_45131 = inst_45152;
var inst_45132 = inst_45155;
var inst_45133 = (0);
var state_45200__$1 = (function (){var statearr_45316 = state_45200;
(statearr_45316[(13)] = inst_45131);

(statearr_45316[(14)] = inst_45132);

(statearr_45316[(15)] = inst_45130);

(statearr_45316[(16)] = inst_45133);

return statearr_45316;
})();
var statearr_45317_47801 = state_45200__$1;
(statearr_45317_47801[(2)] = null);

(statearr_45317_47801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (10))){
var inst_45131 = (state_45200[(13)]);
var inst_45132 = (state_45200[(14)]);
var inst_45130 = (state_45200[(15)]);
var inst_45133 = (state_45200[(16)]);
var inst_45139 = cljs.core._nth(inst_45131,inst_45133);
var inst_45140 = cljs.core.async.muxch_STAR_(inst_45139);
var inst_45141 = cljs.core.async.close_BANG_(inst_45140);
var inst_45142 = (inst_45133 + (1));
var tmp45312 = inst_45131;
var tmp45313 = inst_45132;
var tmp45314 = inst_45130;
var inst_45130__$1 = tmp45314;
var inst_45131__$1 = tmp45312;
var inst_45132__$1 = tmp45313;
var inst_45133__$1 = inst_45142;
var state_45200__$1 = (function (){var statearr_45331 = state_45200;
(statearr_45331[(17)] = inst_45141);

(statearr_45331[(13)] = inst_45131__$1);

(statearr_45331[(14)] = inst_45132__$1);

(statearr_45331[(15)] = inst_45130__$1);

(statearr_45331[(16)] = inst_45133__$1);

return statearr_45331;
})();
var statearr_45336_47806 = state_45200__$1;
(statearr_45336_47806[(2)] = null);

(statearr_45336_47806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (18))){
var inst_45165 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45342_47807 = state_45200__$1;
(statearr_45342_47807[(2)] = inst_45165);

(statearr_45342_47807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45202 === (8))){
var inst_45132 = (state_45200[(14)]);
var inst_45133 = (state_45200[(16)]);
var inst_45136 = (inst_45133 < inst_45132);
var inst_45137 = inst_45136;
var state_45200__$1 = state_45200;
if(cljs.core.truth_(inst_45137)){
var statearr_45347_47808 = state_45200__$1;
(statearr_45347_47808[(1)] = (10));

} else {
var statearr_45348_47809 = state_45200__$1;
(statearr_45348_47809[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_45349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45349[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_45349[(1)] = (1));

return statearr_45349;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_45200){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_45200);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e45350){var ex__42768__auto__ = e45350;
var statearr_45351_47816 = state_45200;
(statearr_45351_47816[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_45200[(4)]))){
var statearr_45352_47817 = state_45200;
(statearr_45352_47817[(1)] = cljs.core.first((state_45200[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47818 = state_45200;
state_45200 = G__47818;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_45200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_45200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_45356 = f__43001__auto__();
(statearr_45356[(6)] = c__43000__auto___47718);

return statearr_45356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45363 = arguments.length;
switch (G__45363) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45371 = arguments.length;
switch (G__45371) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45380 = arguments.length;
switch (G__45380) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43000__auto___47840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_45436){
var state_val_45437 = (state_45436[(1)]);
if((state_val_45437 === (7))){
var state_45436__$1 = state_45436;
var statearr_45442_47841 = state_45436__$1;
(statearr_45442_47841[(2)] = null);

(statearr_45442_47841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (1))){
var state_45436__$1 = state_45436;
var statearr_45443_47852 = state_45436__$1;
(statearr_45443_47852[(2)] = null);

(statearr_45443_47852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (4))){
var inst_45393 = (state_45436[(7)]);
var inst_45391 = (state_45436[(8)]);
var inst_45395 = (inst_45393 < inst_45391);
var state_45436__$1 = state_45436;
if(cljs.core.truth_(inst_45395)){
var statearr_45449_47853 = state_45436__$1;
(statearr_45449_47853[(1)] = (6));

} else {
var statearr_45451_47854 = state_45436__$1;
(statearr_45451_47854[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (15))){
var inst_45422 = (state_45436[(9)]);
var inst_45427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45422);
var state_45436__$1 = state_45436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45436__$1,(17),out,inst_45427);
} else {
if((state_val_45437 === (13))){
var inst_45422 = (state_45436[(9)]);
var inst_45422__$1 = (state_45436[(2)]);
var inst_45423 = cljs.core.some(cljs.core.nil_QMARK_,inst_45422__$1);
var state_45436__$1 = (function (){var statearr_45453 = state_45436;
(statearr_45453[(9)] = inst_45422__$1);

return statearr_45453;
})();
if(cljs.core.truth_(inst_45423)){
var statearr_45454_47855 = state_45436__$1;
(statearr_45454_47855[(1)] = (14));

} else {
var statearr_45455_47856 = state_45436__$1;
(statearr_45455_47856[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (6))){
var state_45436__$1 = state_45436;
var statearr_45456_47857 = state_45436__$1;
(statearr_45456_47857[(2)] = null);

(statearr_45456_47857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (17))){
var inst_45429 = (state_45436[(2)]);
var state_45436__$1 = (function (){var statearr_45464 = state_45436;
(statearr_45464[(10)] = inst_45429);

return statearr_45464;
})();
var statearr_45467_47858 = state_45436__$1;
(statearr_45467_47858[(2)] = null);

(statearr_45467_47858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (3))){
var inst_45434 = (state_45436[(2)]);
var state_45436__$1 = state_45436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45436__$1,inst_45434);
} else {
if((state_val_45437 === (12))){
var _ = (function (){var statearr_45468 = state_45436;
(statearr_45468[(4)] = cljs.core.rest((state_45436[(4)])));

return statearr_45468;
})();
var state_45436__$1 = state_45436;
var ex45462 = (state_45436__$1[(2)]);
var statearr_45470_47864 = state_45436__$1;
(statearr_45470_47864[(5)] = ex45462);


if((ex45462 instanceof Object)){
var statearr_45473_47865 = state_45436__$1;
(statearr_45473_47865[(1)] = (11));

(statearr_45473_47865[(5)] = null);

} else {
throw ex45462;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (2))){
var inst_45390 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45391 = cnt;
var inst_45393 = (0);
var state_45436__$1 = (function (){var statearr_45479 = state_45436;
(statearr_45479[(7)] = inst_45393);

(statearr_45479[(8)] = inst_45391);

(statearr_45479[(11)] = inst_45390);

return statearr_45479;
})();
var statearr_45481_47877 = state_45436__$1;
(statearr_45481_47877[(2)] = null);

(statearr_45481_47877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (11))){
var inst_45401 = (state_45436[(2)]);
var inst_45402 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45436__$1 = (function (){var statearr_45483 = state_45436;
(statearr_45483[(12)] = inst_45401);

return statearr_45483;
})();
var statearr_45484_47883 = state_45436__$1;
(statearr_45484_47883[(2)] = inst_45402);

(statearr_45484_47883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (9))){
var inst_45393 = (state_45436[(7)]);
var _ = (function (){var statearr_45487 = state_45436;
(statearr_45487[(4)] = cljs.core.cons((12),(state_45436[(4)])));

return statearr_45487;
})();
var inst_45408 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45393) : chs__$1.call(null,inst_45393));
var inst_45409 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45393) : done.call(null,inst_45393));
var inst_45410 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45408,inst_45409);
var ___$1 = (function (){var statearr_45490 = state_45436;
(statearr_45490[(4)] = cljs.core.rest((state_45436[(4)])));

return statearr_45490;
})();
var state_45436__$1 = state_45436;
var statearr_45491_47884 = state_45436__$1;
(statearr_45491_47884[(2)] = inst_45410);

(statearr_45491_47884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (5))){
var inst_45420 = (state_45436[(2)]);
var state_45436__$1 = (function (){var statearr_45496 = state_45436;
(statearr_45496[(13)] = inst_45420);

return statearr_45496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45436__$1,(13),dchan);
} else {
if((state_val_45437 === (14))){
var inst_45425 = cljs.core.async.close_BANG_(out);
var state_45436__$1 = state_45436;
var statearr_45497_47889 = state_45436__$1;
(statearr_45497_47889[(2)] = inst_45425);

(statearr_45497_47889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (16))){
var inst_45432 = (state_45436[(2)]);
var state_45436__$1 = state_45436;
var statearr_45498_47891 = state_45436__$1;
(statearr_45498_47891[(2)] = inst_45432);

(statearr_45498_47891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (10))){
var inst_45393 = (state_45436[(7)]);
var inst_45413 = (state_45436[(2)]);
var inst_45414 = (inst_45393 + (1));
var inst_45393__$1 = inst_45414;
var state_45436__$1 = (function (){var statearr_45499 = state_45436;
(statearr_45499[(7)] = inst_45393__$1);

(statearr_45499[(14)] = inst_45413);

return statearr_45499;
})();
var statearr_45500_47899 = state_45436__$1;
(statearr_45500_47899[(2)] = null);

(statearr_45500_47899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45437 === (8))){
var inst_45418 = (state_45436[(2)]);
var state_45436__$1 = state_45436;
var statearr_45502_47901 = state_45436__$1;
(statearr_45502_47901[(2)] = inst_45418);

(statearr_45502_47901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_45505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45505[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_45505[(1)] = (1));

return statearr_45505;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_45436){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_45436);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e45507){var ex__42768__auto__ = e45507;
var statearr_45508_47902 = state_45436;
(statearr_45508_47902[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_45436[(4)]))){
var statearr_45514_47903 = state_45436;
(statearr_45514_47903[(1)] = cljs.core.first((state_45436[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47904 = state_45436;
state_45436 = G__47904;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_45436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_45436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_45515 = f__43001__auto__();
(statearr_45515[(6)] = c__43000__auto___47840);

return statearr_45515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45518 = arguments.length;
switch (G__45518) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43000__auto___47914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_45553){
var state_val_45554 = (state_45553[(1)]);
if((state_val_45554 === (7))){
var inst_45531 = (state_45553[(7)]);
var inst_45530 = (state_45553[(8)]);
var inst_45530__$1 = (state_45553[(2)]);
var inst_45531__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45530__$1,(0),null);
var inst_45532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45530__$1,(1),null);
var inst_45533 = (inst_45531__$1 == null);
var state_45553__$1 = (function (){var statearr_45558 = state_45553;
(statearr_45558[(7)] = inst_45531__$1);

(statearr_45558[(9)] = inst_45532);

(statearr_45558[(8)] = inst_45530__$1);

return statearr_45558;
})();
if(cljs.core.truth_(inst_45533)){
var statearr_45559_47918 = state_45553__$1;
(statearr_45559_47918[(1)] = (8));

} else {
var statearr_45560_47919 = state_45553__$1;
(statearr_45560_47919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45554 === (1))){
var inst_45519 = cljs.core.vec(chs);
var inst_45520 = inst_45519;
var state_45553__$1 = (function (){var statearr_45561 = state_45553;
(statearr_45561[(10)] = inst_45520);

return statearr_45561;
})();
var statearr_45562_47924 = state_45553__$1;
(statearr_45562_47924[(2)] = null);

(statearr_45562_47924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45554 === (4))){
var inst_45520 = (state_45553[(10)]);
var state_45553__$1 = state_45553;
return cljs.core.async.ioc_alts_BANG_(state_45553__$1,(7),inst_45520);
} else {
if((state_val_45554 === (6))){
var inst_45547 = (state_45553[(2)]);
var state_45553__$1 = state_45553;
var statearr_45566_47928 = state_45553__$1;
(statearr_45566_47928[(2)] = inst_45547);

(statearr_45566_47928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45554 === (3))){
var inst_45549 = (state_45553[(2)]);
var state_45553__$1 = state_45553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45553__$1,inst_45549);
} else {
if((state_val_45554 === (2))){
var inst_45520 = (state_45553[(10)]);
var inst_45523 = cljs.core.count(inst_45520);
var inst_45524 = (inst_45523 > (0));
var state_45553__$1 = state_45553;
if(cljs.core.truth_(inst_45524)){
var statearr_45573_47932 = state_45553__$1;
(statearr_45573_47932[(1)] = (4));

} else {
var statearr_45574_47933 = state_45553__$1;
(statearr_45574_47933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45554 === (11))){
var inst_45520 = (state_45553[(10)]);
var inst_45540 = (state_45553[(2)]);
var tmp45567 = inst_45520;
var inst_45520__$1 = tmp45567;
var state_45553__$1 = (function (){var statearr_45576 = state_45553;
(statearr_45576[(11)] = inst_45540);

(statearr_45576[(10)] = inst_45520__$1);

return statearr_45576;
})();
var statearr_45579_47934 = state_45553__$1;
(statearr_45579_47934[(2)] = null);

(statearr_45579_47934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45554 === (9))){
var inst_45531 = (state_45553[(7)]);
var state_45553__$1 = state_45553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45553__$1,(11),out,inst_45531);
} else {
if((state_val_45554 === (5))){
var inst_45545 = cljs.core.async.close_BANG_(out);
var state_45553__$1 = state_45553;
var statearr_45583_47935 = state_45553__$1;
(statearr_45583_47935[(2)] = inst_45545);

(statearr_45583_47935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45554 === (10))){
var inst_45543 = (state_45553[(2)]);
var state_45553__$1 = state_45553;
var statearr_45584_47936 = state_45553__$1;
(statearr_45584_47936[(2)] = inst_45543);

(statearr_45584_47936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45554 === (8))){
var inst_45531 = (state_45553[(7)]);
var inst_45532 = (state_45553[(9)]);
var inst_45530 = (state_45553[(8)]);
var inst_45520 = (state_45553[(10)]);
var inst_45535 = (function (){var cs = inst_45520;
var vec__45526 = inst_45530;
var v = inst_45531;
var c = inst_45532;
return (function (p1__45516_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45516_SHARP_);
});
})();
var inst_45536 = cljs.core.filterv(inst_45535,inst_45520);
var inst_45520__$1 = inst_45536;
var state_45553__$1 = (function (){var statearr_45592 = state_45553;
(statearr_45592[(10)] = inst_45520__$1);

return statearr_45592;
})();
var statearr_45593_47937 = state_45553__$1;
(statearr_45593_47937[(2)] = null);

(statearr_45593_47937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_45599 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45599[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_45599[(1)] = (1));

return statearr_45599;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_45553){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_45553);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e45600){var ex__42768__auto__ = e45600;
var statearr_45601_47938 = state_45553;
(statearr_45601_47938[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_45553[(4)]))){
var statearr_45602_47939 = state_45553;
(statearr_45602_47939[(1)] = cljs.core.first((state_45553[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47940 = state_45553;
state_45553 = G__47940;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_45553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_45553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_45606 = f__43001__auto__();
(statearr_45606[(6)] = c__43000__auto___47914);

return statearr_45606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45618 = arguments.length;
switch (G__45618) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43000__auto___47946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_45651){
var state_val_45652 = (state_45651[(1)]);
if((state_val_45652 === (7))){
var inst_45629 = (state_45651[(7)]);
var inst_45629__$1 = (state_45651[(2)]);
var inst_45630 = (inst_45629__$1 == null);
var inst_45631 = cljs.core.not(inst_45630);
var state_45651__$1 = (function (){var statearr_45653 = state_45651;
(statearr_45653[(7)] = inst_45629__$1);

return statearr_45653;
})();
if(inst_45631){
var statearr_45654_47948 = state_45651__$1;
(statearr_45654_47948[(1)] = (8));

} else {
var statearr_45655_47950 = state_45651__$1;
(statearr_45655_47950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (1))){
var inst_45624 = (0);
var state_45651__$1 = (function (){var statearr_45656 = state_45651;
(statearr_45656[(8)] = inst_45624);

return statearr_45656;
})();
var statearr_45658_47953 = state_45651__$1;
(statearr_45658_47953[(2)] = null);

(statearr_45658_47953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (4))){
var state_45651__$1 = state_45651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45651__$1,(7),ch);
} else {
if((state_val_45652 === (6))){
var inst_45646 = (state_45651[(2)]);
var state_45651__$1 = state_45651;
var statearr_45659_47954 = state_45651__$1;
(statearr_45659_47954[(2)] = inst_45646);

(statearr_45659_47954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (3))){
var inst_45648 = (state_45651[(2)]);
var inst_45649 = cljs.core.async.close_BANG_(out);
var state_45651__$1 = (function (){var statearr_45662 = state_45651;
(statearr_45662[(9)] = inst_45648);

return statearr_45662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45651__$1,inst_45649);
} else {
if((state_val_45652 === (2))){
var inst_45624 = (state_45651[(8)]);
var inst_45626 = (inst_45624 < n);
var state_45651__$1 = state_45651;
if(cljs.core.truth_(inst_45626)){
var statearr_45665_47956 = state_45651__$1;
(statearr_45665_47956[(1)] = (4));

} else {
var statearr_45666_47957 = state_45651__$1;
(statearr_45666_47957[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (11))){
var inst_45624 = (state_45651[(8)]);
var inst_45638 = (state_45651[(2)]);
var inst_45639 = (inst_45624 + (1));
var inst_45624__$1 = inst_45639;
var state_45651__$1 = (function (){var statearr_45667 = state_45651;
(statearr_45667[(10)] = inst_45638);

(statearr_45667[(8)] = inst_45624__$1);

return statearr_45667;
})();
var statearr_45668_47959 = state_45651__$1;
(statearr_45668_47959[(2)] = null);

(statearr_45668_47959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (9))){
var state_45651__$1 = state_45651;
var statearr_45669_47960 = state_45651__$1;
(statearr_45669_47960[(2)] = null);

(statearr_45669_47960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (5))){
var state_45651__$1 = state_45651;
var statearr_45670_47963 = state_45651__$1;
(statearr_45670_47963[(2)] = null);

(statearr_45670_47963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (10))){
var inst_45643 = (state_45651[(2)]);
var state_45651__$1 = state_45651;
var statearr_45672_47964 = state_45651__$1;
(statearr_45672_47964[(2)] = inst_45643);

(statearr_45672_47964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45652 === (8))){
var inst_45629 = (state_45651[(7)]);
var state_45651__$1 = state_45651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45651__$1,(11),out,inst_45629);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_45674 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45674[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_45674[(1)] = (1));

return statearr_45674;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_45651){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_45651);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e45676){var ex__42768__auto__ = e45676;
var statearr_45677_47970 = state_45651;
(statearr_45677_47970[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_45651[(4)]))){
var statearr_45678_47971 = state_45651;
(statearr_45678_47971[(1)] = cljs.core.first((state_45651[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47973 = state_45651;
state_45651 = G__47973;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_45651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_45651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_45681 = f__43001__auto__();
(statearr_45681[(6)] = c__43000__auto___47946);

return statearr_45681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45687 = (function (f,ch,meta45688){
this.f = f;
this.ch = ch;
this.meta45688 = meta45688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45689,meta45688__$1){
var self__ = this;
var _45689__$1 = this;
return (new cljs.core.async.t_cljs$core$async45687(self__.f,self__.ch,meta45688__$1));
}));

(cljs.core.async.t_cljs$core$async45687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45689){
var self__ = this;
var _45689__$1 = this;
return self__.meta45688;
}));

(cljs.core.async.t_cljs$core$async45687.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45687.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45698 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45698 = (function (f,ch,meta45688,_,fn1,meta45699){
this.f = f;
this.ch = ch;
this.meta45688 = meta45688;
this._ = _;
this.fn1 = fn1;
this.meta45699 = meta45699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45700,meta45699__$1){
var self__ = this;
var _45700__$1 = this;
return (new cljs.core.async.t_cljs$core$async45698(self__.f,self__.ch,self__.meta45688,self__._,self__.fn1,meta45699__$1));
}));

(cljs.core.async.t_cljs$core$async45698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45700){
var self__ = this;
var _45700__$1 = this;
return self__.meta45699;
}));

(cljs.core.async.t_cljs$core$async45698.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45698.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45685_SHARP_){
var G__45714 = (((p1__45685_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45685_SHARP_) : self__.f.call(null,p1__45685_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45714) : f1.call(null,G__45714));
});
}));

(cljs.core.async.t_cljs$core$async45698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45688","meta45688",203903000,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45687","cljs.core.async/t_cljs$core$async45687",1574077814,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45699","meta45699",-84913815,null)], null);
}));

(cljs.core.async.t_cljs$core$async45698.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45698");

(cljs.core.async.t_cljs$core$async45698.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45698");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45698.
 */
cljs.core.async.__GT_t_cljs$core$async45698 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45698(f__$1,ch__$1,meta45688__$1,___$2,fn1__$1,meta45699){
return (new cljs.core.async.t_cljs$core$async45698(f__$1,ch__$1,meta45688__$1,___$2,fn1__$1,meta45699));
});

}

return (new cljs.core.async.t_cljs$core$async45698(self__.f,self__.ch,self__.meta45688,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45726 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45726) : self__.f.call(null,G__45726));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45687.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45688","meta45688",203903000,null)], null);
}));

(cljs.core.async.t_cljs$core$async45687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45687");

(cljs.core.async.t_cljs$core$async45687.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45687.
 */
cljs.core.async.__GT_t_cljs$core$async45687 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45687(f__$1,ch__$1,meta45688){
return (new cljs.core.async.t_cljs$core$async45687(f__$1,ch__$1,meta45688));
});

}

return (new cljs.core.async.t_cljs$core$async45687(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45733 = (function (f,ch,meta45734){
this.f = f;
this.ch = ch;
this.meta45734 = meta45734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45735,meta45734__$1){
var self__ = this;
var _45735__$1 = this;
return (new cljs.core.async.t_cljs$core$async45733(self__.f,self__.ch,meta45734__$1));
}));

(cljs.core.async.t_cljs$core$async45733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45735){
var self__ = this;
var _45735__$1 = this;
return self__.meta45734;
}));

(cljs.core.async.t_cljs$core$async45733.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45733.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45733.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45734","meta45734",-2038127545,null)], null);
}));

(cljs.core.async.t_cljs$core$async45733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45733");

(cljs.core.async.t_cljs$core$async45733.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45733.
 */
cljs.core.async.__GT_t_cljs$core$async45733 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45733(f__$1,ch__$1,meta45734){
return (new cljs.core.async.t_cljs$core$async45733(f__$1,ch__$1,meta45734));
});

}

return (new cljs.core.async.t_cljs$core$async45733(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45765 = (function (p,ch,meta45766){
this.p = p;
this.ch = ch;
this.meta45766 = meta45766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45767,meta45766__$1){
var self__ = this;
var _45767__$1 = this;
return (new cljs.core.async.t_cljs$core$async45765(self__.p,self__.ch,meta45766__$1));
}));

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45767){
var self__ = this;
var _45767__$1 = this;
return self__.meta45766;
}));

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45766","meta45766",-1003005709,null)], null);
}));

(cljs.core.async.t_cljs$core$async45765.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45765");

(cljs.core.async.t_cljs$core$async45765.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45765");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45765.
 */
cljs.core.async.__GT_t_cljs$core$async45765 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45765(p__$1,ch__$1,meta45766){
return (new cljs.core.async.t_cljs$core$async45765(p__$1,ch__$1,meta45766));
});

}

return (new cljs.core.async.t_cljs$core$async45765(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45803 = arguments.length;
switch (G__45803) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43000__auto___48025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_45837){
var state_val_45838 = (state_45837[(1)]);
if((state_val_45838 === (7))){
var inst_45833 = (state_45837[(2)]);
var state_45837__$1 = state_45837;
var statearr_45845_48037 = state_45837__$1;
(statearr_45845_48037[(2)] = inst_45833);

(statearr_45845_48037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (1))){
var state_45837__$1 = state_45837;
var statearr_45853_48038 = state_45837__$1;
(statearr_45853_48038[(2)] = null);

(statearr_45853_48038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (4))){
var inst_45817 = (state_45837[(7)]);
var inst_45817__$1 = (state_45837[(2)]);
var inst_45818 = (inst_45817__$1 == null);
var state_45837__$1 = (function (){var statearr_45854 = state_45837;
(statearr_45854[(7)] = inst_45817__$1);

return statearr_45854;
})();
if(cljs.core.truth_(inst_45818)){
var statearr_45855_48046 = state_45837__$1;
(statearr_45855_48046[(1)] = (5));

} else {
var statearr_45856_48047 = state_45837__$1;
(statearr_45856_48047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (6))){
var inst_45817 = (state_45837[(7)]);
var inst_45822 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45817) : p.call(null,inst_45817));
var state_45837__$1 = state_45837;
if(cljs.core.truth_(inst_45822)){
var statearr_45861_48051 = state_45837__$1;
(statearr_45861_48051[(1)] = (8));

} else {
var statearr_45863_48056 = state_45837__$1;
(statearr_45863_48056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (3))){
var inst_45835 = (state_45837[(2)]);
var state_45837__$1 = state_45837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45837__$1,inst_45835);
} else {
if((state_val_45838 === (2))){
var state_45837__$1 = state_45837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45837__$1,(4),ch);
} else {
if((state_val_45838 === (11))){
var inst_45826 = (state_45837[(2)]);
var state_45837__$1 = state_45837;
var statearr_45865_48064 = state_45837__$1;
(statearr_45865_48064[(2)] = inst_45826);

(statearr_45865_48064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (9))){
var state_45837__$1 = state_45837;
var statearr_45867_48065 = state_45837__$1;
(statearr_45867_48065[(2)] = null);

(statearr_45867_48065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (5))){
var inst_45820 = cljs.core.async.close_BANG_(out);
var state_45837__$1 = state_45837;
var statearr_45871_48067 = state_45837__$1;
(statearr_45871_48067[(2)] = inst_45820);

(statearr_45871_48067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (10))){
var inst_45829 = (state_45837[(2)]);
var state_45837__$1 = (function (){var statearr_45872 = state_45837;
(statearr_45872[(8)] = inst_45829);

return statearr_45872;
})();
var statearr_45873_48074 = state_45837__$1;
(statearr_45873_48074[(2)] = null);

(statearr_45873_48074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (8))){
var inst_45817 = (state_45837[(7)]);
var state_45837__$1 = state_45837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45837__$1,(11),out,inst_45817);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_45880 = [null,null,null,null,null,null,null,null,null];
(statearr_45880[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_45880[(1)] = (1));

return statearr_45880;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_45837){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_45837);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e45888){var ex__42768__auto__ = e45888;
var statearr_45889_48084 = state_45837;
(statearr_45889_48084[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_45837[(4)]))){
var statearr_45891_48087 = state_45837;
(statearr_45891_48087[(1)] = cljs.core.first((state_45837[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48088 = state_45837;
state_45837 = G__48088;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_45837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_45837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_45893 = f__43001__auto__();
(statearr_45893[(6)] = c__43000__auto___48025);

return statearr_45893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45900 = arguments.length;
switch (G__45900) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_45984){
var state_val_45985 = (state_45984[(1)]);
if((state_val_45985 === (7))){
var inst_45980 = (state_45984[(2)]);
var state_45984__$1 = state_45984;
var statearr_45993_48101 = state_45984__$1;
(statearr_45993_48101[(2)] = inst_45980);

(statearr_45993_48101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (20))){
var inst_45945 = (state_45984[(7)]);
var inst_45961 = (state_45984[(2)]);
var inst_45962 = cljs.core.next(inst_45945);
var inst_45928 = inst_45962;
var inst_45929 = null;
var inst_45930 = (0);
var inst_45931 = (0);
var state_45984__$1 = (function (){var statearr_45997 = state_45984;
(statearr_45997[(8)] = inst_45931);

(statearr_45997[(9)] = inst_45930);

(statearr_45997[(10)] = inst_45961);

(statearr_45997[(11)] = inst_45929);

(statearr_45997[(12)] = inst_45928);

return statearr_45997;
})();
var statearr_45999_48107 = state_45984__$1;
(statearr_45999_48107[(2)] = null);

(statearr_45999_48107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (1))){
var state_45984__$1 = state_45984;
var statearr_46001_48108 = state_45984__$1;
(statearr_46001_48108[(2)] = null);

(statearr_46001_48108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (4))){
var inst_45911 = (state_45984[(13)]);
var inst_45911__$1 = (state_45984[(2)]);
var inst_45912 = (inst_45911__$1 == null);
var state_45984__$1 = (function (){var statearr_46006 = state_45984;
(statearr_46006[(13)] = inst_45911__$1);

return statearr_46006;
})();
if(cljs.core.truth_(inst_45912)){
var statearr_46007_48113 = state_45984__$1;
(statearr_46007_48113[(1)] = (5));

} else {
var statearr_46008_48115 = state_45984__$1;
(statearr_46008_48115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (15))){
var state_45984__$1 = state_45984;
var statearr_46014_48117 = state_45984__$1;
(statearr_46014_48117[(2)] = null);

(statearr_46014_48117[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (21))){
var state_45984__$1 = state_45984;
var statearr_46015_48122 = state_45984__$1;
(statearr_46015_48122[(2)] = null);

(statearr_46015_48122[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (13))){
var inst_45931 = (state_45984[(8)]);
var inst_45930 = (state_45984[(9)]);
var inst_45929 = (state_45984[(11)]);
var inst_45928 = (state_45984[(12)]);
var inst_45940 = (state_45984[(2)]);
var inst_45941 = (inst_45931 + (1));
var tmp46009 = inst_45930;
var tmp46010 = inst_45929;
var tmp46011 = inst_45928;
var inst_45928__$1 = tmp46011;
var inst_45929__$1 = tmp46010;
var inst_45930__$1 = tmp46009;
var inst_45931__$1 = inst_45941;
var state_45984__$1 = (function (){var statearr_46016 = state_45984;
(statearr_46016[(8)] = inst_45931__$1);

(statearr_46016[(9)] = inst_45930__$1);

(statearr_46016[(11)] = inst_45929__$1);

(statearr_46016[(14)] = inst_45940);

(statearr_46016[(12)] = inst_45928__$1);

return statearr_46016;
})();
var statearr_46019_48132 = state_45984__$1;
(statearr_46019_48132[(2)] = null);

(statearr_46019_48132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (22))){
var state_45984__$1 = state_45984;
var statearr_46021_48133 = state_45984__$1;
(statearr_46021_48133[(2)] = null);

(statearr_46021_48133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (6))){
var inst_45911 = (state_45984[(13)]);
var inst_45920 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45911) : f.call(null,inst_45911));
var inst_45921 = cljs.core.seq(inst_45920);
var inst_45928 = inst_45921;
var inst_45929 = null;
var inst_45930 = (0);
var inst_45931 = (0);
var state_45984__$1 = (function (){var statearr_46029 = state_45984;
(statearr_46029[(8)] = inst_45931);

(statearr_46029[(9)] = inst_45930);

(statearr_46029[(11)] = inst_45929);

(statearr_46029[(12)] = inst_45928);

return statearr_46029;
})();
var statearr_46030_48137 = state_45984__$1;
(statearr_46030_48137[(2)] = null);

(statearr_46030_48137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (17))){
var inst_45945 = (state_45984[(7)]);
var inst_45951 = cljs.core.chunk_first(inst_45945);
var inst_45952 = cljs.core.chunk_rest(inst_45945);
var inst_45954 = cljs.core.count(inst_45951);
var inst_45928 = inst_45952;
var inst_45929 = inst_45951;
var inst_45930 = inst_45954;
var inst_45931 = (0);
var state_45984__$1 = (function (){var statearr_46043 = state_45984;
(statearr_46043[(8)] = inst_45931);

(statearr_46043[(9)] = inst_45930);

(statearr_46043[(11)] = inst_45929);

(statearr_46043[(12)] = inst_45928);

return statearr_46043;
})();
var statearr_46045_48152 = state_45984__$1;
(statearr_46045_48152[(2)] = null);

(statearr_46045_48152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (3))){
var inst_45982 = (state_45984[(2)]);
var state_45984__$1 = state_45984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45984__$1,inst_45982);
} else {
if((state_val_45985 === (12))){
var inst_45970 = (state_45984[(2)]);
var state_45984__$1 = state_45984;
var statearr_46048_48162 = state_45984__$1;
(statearr_46048_48162[(2)] = inst_45970);

(statearr_46048_48162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (2))){
var state_45984__$1 = state_45984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45984__$1,(4),in$);
} else {
if((state_val_45985 === (23))){
var inst_45978 = (state_45984[(2)]);
var state_45984__$1 = state_45984;
var statearr_46049_48170 = state_45984__$1;
(statearr_46049_48170[(2)] = inst_45978);

(statearr_46049_48170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (19))){
var inst_45965 = (state_45984[(2)]);
var state_45984__$1 = state_45984;
var statearr_46051_48176 = state_45984__$1;
(statearr_46051_48176[(2)] = inst_45965);

(statearr_46051_48176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (11))){
var inst_45945 = (state_45984[(7)]);
var inst_45928 = (state_45984[(12)]);
var inst_45945__$1 = cljs.core.seq(inst_45928);
var state_45984__$1 = (function (){var statearr_46054 = state_45984;
(statearr_46054[(7)] = inst_45945__$1);

return statearr_46054;
})();
if(inst_45945__$1){
var statearr_46056_48198 = state_45984__$1;
(statearr_46056_48198[(1)] = (14));

} else {
var statearr_46057_48199 = state_45984__$1;
(statearr_46057_48199[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (9))){
var inst_45972 = (state_45984[(2)]);
var inst_45973 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45984__$1 = (function (){var statearr_46062 = state_45984;
(statearr_46062[(15)] = inst_45972);

return statearr_46062;
})();
if(cljs.core.truth_(inst_45973)){
var statearr_46063_48214 = state_45984__$1;
(statearr_46063_48214[(1)] = (21));

} else {
var statearr_46064_48219 = state_45984__$1;
(statearr_46064_48219[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (5))){
var inst_45914 = cljs.core.async.close_BANG_(out);
var state_45984__$1 = state_45984;
var statearr_46065_48227 = state_45984__$1;
(statearr_46065_48227[(2)] = inst_45914);

(statearr_46065_48227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (14))){
var inst_45945 = (state_45984[(7)]);
var inst_45948 = cljs.core.chunked_seq_QMARK_(inst_45945);
var state_45984__$1 = state_45984;
if(inst_45948){
var statearr_46066_48240 = state_45984__$1;
(statearr_46066_48240[(1)] = (17));

} else {
var statearr_46072_48245 = state_45984__$1;
(statearr_46072_48245[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (16))){
var inst_45968 = (state_45984[(2)]);
var state_45984__$1 = state_45984;
var statearr_46079_48247 = state_45984__$1;
(statearr_46079_48247[(2)] = inst_45968);

(statearr_46079_48247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (10))){
var inst_45931 = (state_45984[(8)]);
var inst_45929 = (state_45984[(11)]);
var inst_45937 = cljs.core._nth(inst_45929,inst_45931);
var state_45984__$1 = state_45984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45984__$1,(13),out,inst_45937);
} else {
if((state_val_45985 === (18))){
var inst_45945 = (state_45984[(7)]);
var inst_45959 = cljs.core.first(inst_45945);
var state_45984__$1 = state_45984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45984__$1,(20),out,inst_45959);
} else {
if((state_val_45985 === (8))){
var inst_45931 = (state_45984[(8)]);
var inst_45930 = (state_45984[(9)]);
var inst_45933 = (inst_45931 < inst_45930);
var inst_45934 = inst_45933;
var state_45984__$1 = state_45984;
if(cljs.core.truth_(inst_45934)){
var statearr_46098_48255 = state_45984__$1;
(statearr_46098_48255[(1)] = (10));

} else {
var statearr_46099_48256 = state_45984__$1;
(statearr_46099_48256[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42765__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42765__auto____0 = (function (){
var statearr_46100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46100[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42765__auto__);

(statearr_46100[(1)] = (1));

return statearr_46100;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42765__auto____1 = (function (state_45984){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_45984);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e46101){var ex__42768__auto__ = e46101;
var statearr_46102_48261 = state_45984;
(statearr_46102_48261[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_45984[(4)]))){
var statearr_46103_48266 = state_45984;
(statearr_46103_48266[(1)] = cljs.core.first((state_45984[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48273 = state_45984;
state_45984 = G__48273;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42765__auto__ = function(state_45984){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42765__auto____1.call(this,state_45984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42765__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42765__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_46105 = f__43001__auto__();
(statearr_46105[(6)] = c__43000__auto__);

return statearr_46105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));

return c__43000__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46111 = arguments.length;
switch (G__46111) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46113 = arguments.length;
switch (G__46113) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46121 = arguments.length;
switch (G__46121) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43000__auto___48298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_46146){
var state_val_46147 = (state_46146[(1)]);
if((state_val_46147 === (7))){
var inst_46141 = (state_46146[(2)]);
var state_46146__$1 = state_46146;
var statearr_46152_48301 = state_46146__$1;
(statearr_46152_48301[(2)] = inst_46141);

(statearr_46152_48301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (1))){
var inst_46123 = null;
var state_46146__$1 = (function (){var statearr_46153 = state_46146;
(statearr_46153[(7)] = inst_46123);

return statearr_46153;
})();
var statearr_46154_48304 = state_46146__$1;
(statearr_46154_48304[(2)] = null);

(statearr_46154_48304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (4))){
var inst_46126 = (state_46146[(8)]);
var inst_46126__$1 = (state_46146[(2)]);
var inst_46127 = (inst_46126__$1 == null);
var inst_46128 = cljs.core.not(inst_46127);
var state_46146__$1 = (function (){var statearr_46158 = state_46146;
(statearr_46158[(8)] = inst_46126__$1);

return statearr_46158;
})();
if(inst_46128){
var statearr_46160_48311 = state_46146__$1;
(statearr_46160_48311[(1)] = (5));

} else {
var statearr_46162_48312 = state_46146__$1;
(statearr_46162_48312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (6))){
var state_46146__$1 = state_46146;
var statearr_46164_48318 = state_46146__$1;
(statearr_46164_48318[(2)] = null);

(statearr_46164_48318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (3))){
var inst_46143 = (state_46146[(2)]);
var inst_46144 = cljs.core.async.close_BANG_(out);
var state_46146__$1 = (function (){var statearr_46165 = state_46146;
(statearr_46165[(9)] = inst_46143);

return statearr_46165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46146__$1,inst_46144);
} else {
if((state_val_46147 === (2))){
var state_46146__$1 = state_46146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46146__$1,(4),ch);
} else {
if((state_val_46147 === (11))){
var inst_46126 = (state_46146[(8)]);
var inst_46135 = (state_46146[(2)]);
var inst_46123 = inst_46126;
var state_46146__$1 = (function (){var statearr_46166 = state_46146;
(statearr_46166[(7)] = inst_46123);

(statearr_46166[(10)] = inst_46135);

return statearr_46166;
})();
var statearr_46169_48340 = state_46146__$1;
(statearr_46169_48340[(2)] = null);

(statearr_46169_48340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (9))){
var inst_46126 = (state_46146[(8)]);
var state_46146__$1 = state_46146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46146__$1,(11),out,inst_46126);
} else {
if((state_val_46147 === (5))){
var inst_46126 = (state_46146[(8)]);
var inst_46123 = (state_46146[(7)]);
var inst_46130 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46126,inst_46123);
var state_46146__$1 = state_46146;
if(inst_46130){
var statearr_46173_48364 = state_46146__$1;
(statearr_46173_48364[(1)] = (8));

} else {
var statearr_46174_48366 = state_46146__$1;
(statearr_46174_48366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (10))){
var inst_46138 = (state_46146[(2)]);
var state_46146__$1 = state_46146;
var statearr_46175_48370 = state_46146__$1;
(statearr_46175_48370[(2)] = inst_46138);

(statearr_46175_48370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (8))){
var inst_46123 = (state_46146[(7)]);
var tmp46172 = inst_46123;
var inst_46123__$1 = tmp46172;
var state_46146__$1 = (function (){var statearr_46178 = state_46146;
(statearr_46178[(7)] = inst_46123__$1);

return statearr_46178;
})();
var statearr_46180_48373 = state_46146__$1;
(statearr_46180_48373[(2)] = null);

(statearr_46180_48373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_46181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46181[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_46181[(1)] = (1));

return statearr_46181;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_46146){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_46146);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e46182){var ex__42768__auto__ = e46182;
var statearr_46184_48390 = state_46146;
(statearr_46184_48390[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_46146[(4)]))){
var statearr_46187_48392 = state_46146;
(statearr_46187_48392[(1)] = cljs.core.first((state_46146[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48405 = state_46146;
state_46146 = G__48405;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_46146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_46146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_46190 = f__43001__auto__();
(statearr_46190[(6)] = c__43000__auto___48298);

return statearr_46190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46203 = arguments.length;
switch (G__46203) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43000__auto___48441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_46262){
var state_val_46263 = (state_46262[(1)]);
if((state_val_46263 === (7))){
var inst_46256 = (state_46262[(2)]);
var state_46262__$1 = state_46262;
var statearr_46265_48442 = state_46262__$1;
(statearr_46265_48442[(2)] = inst_46256);

(statearr_46265_48442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (1))){
var inst_46214 = (new Array(n));
var inst_46215 = inst_46214;
var inst_46216 = (0);
var state_46262__$1 = (function (){var statearr_46269 = state_46262;
(statearr_46269[(7)] = inst_46216);

(statearr_46269[(8)] = inst_46215);

return statearr_46269;
})();
var statearr_46270_48444 = state_46262__$1;
(statearr_46270_48444[(2)] = null);

(statearr_46270_48444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (4))){
var inst_46223 = (state_46262[(9)]);
var inst_46223__$1 = (state_46262[(2)]);
var inst_46228 = (inst_46223__$1 == null);
var inst_46229 = cljs.core.not(inst_46228);
var state_46262__$1 = (function (){var statearr_46271 = state_46262;
(statearr_46271[(9)] = inst_46223__$1);

return statearr_46271;
})();
if(inst_46229){
var statearr_46272_48449 = state_46262__$1;
(statearr_46272_48449[(1)] = (5));

} else {
var statearr_46273_48450 = state_46262__$1;
(statearr_46273_48450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (15))){
var inst_46250 = (state_46262[(2)]);
var state_46262__$1 = state_46262;
var statearr_46274_48451 = state_46262__$1;
(statearr_46274_48451[(2)] = inst_46250);

(statearr_46274_48451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (13))){
var state_46262__$1 = state_46262;
var statearr_46275_48453 = state_46262__$1;
(statearr_46275_48453[(2)] = null);

(statearr_46275_48453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (6))){
var inst_46216 = (state_46262[(7)]);
var inst_46245 = (inst_46216 > (0));
var state_46262__$1 = state_46262;
if(cljs.core.truth_(inst_46245)){
var statearr_46279_48454 = state_46262__$1;
(statearr_46279_48454[(1)] = (12));

} else {
var statearr_46280_48455 = state_46262__$1;
(statearr_46280_48455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (3))){
var inst_46258 = (state_46262[(2)]);
var state_46262__$1 = state_46262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46262__$1,inst_46258);
} else {
if((state_val_46263 === (12))){
var inst_46215 = (state_46262[(8)]);
var inst_46248 = cljs.core.vec(inst_46215);
var state_46262__$1 = state_46262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46262__$1,(15),out,inst_46248);
} else {
if((state_val_46263 === (2))){
var state_46262__$1 = state_46262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46262__$1,(4),ch);
} else {
if((state_val_46263 === (11))){
var inst_46239 = (state_46262[(2)]);
var inst_46240 = (new Array(n));
var inst_46215 = inst_46240;
var inst_46216 = (0);
var state_46262__$1 = (function (){var statearr_46288 = state_46262;
(statearr_46288[(7)] = inst_46216);

(statearr_46288[(8)] = inst_46215);

(statearr_46288[(10)] = inst_46239);

return statearr_46288;
})();
var statearr_46290_48485 = state_46262__$1;
(statearr_46290_48485[(2)] = null);

(statearr_46290_48485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (9))){
var inst_46215 = (state_46262[(8)]);
var inst_46237 = cljs.core.vec(inst_46215);
var state_46262__$1 = state_46262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46262__$1,(11),out,inst_46237);
} else {
if((state_val_46263 === (5))){
var inst_46216 = (state_46262[(7)]);
var inst_46232 = (state_46262[(11)]);
var inst_46223 = (state_46262[(9)]);
var inst_46215 = (state_46262[(8)]);
var inst_46231 = (inst_46215[inst_46216] = inst_46223);
var inst_46232__$1 = (inst_46216 + (1));
var inst_46233 = (inst_46232__$1 < n);
var state_46262__$1 = (function (){var statearr_46294 = state_46262;
(statearr_46294[(12)] = inst_46231);

(statearr_46294[(11)] = inst_46232__$1);

return statearr_46294;
})();
if(cljs.core.truth_(inst_46233)){
var statearr_46295_48497 = state_46262__$1;
(statearr_46295_48497[(1)] = (8));

} else {
var statearr_46297_48500 = state_46262__$1;
(statearr_46297_48500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (14))){
var inst_46253 = (state_46262[(2)]);
var inst_46254 = cljs.core.async.close_BANG_(out);
var state_46262__$1 = (function (){var statearr_46300 = state_46262;
(statearr_46300[(13)] = inst_46253);

return statearr_46300;
})();
var statearr_46302_48501 = state_46262__$1;
(statearr_46302_48501[(2)] = inst_46254);

(statearr_46302_48501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (10))){
var inst_46243 = (state_46262[(2)]);
var state_46262__$1 = state_46262;
var statearr_46304_48502 = state_46262__$1;
(statearr_46304_48502[(2)] = inst_46243);

(statearr_46304_48502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (8))){
var inst_46232 = (state_46262[(11)]);
var inst_46215 = (state_46262[(8)]);
var tmp46298 = inst_46215;
var inst_46215__$1 = tmp46298;
var inst_46216 = inst_46232;
var state_46262__$1 = (function (){var statearr_46308 = state_46262;
(statearr_46308[(7)] = inst_46216);

(statearr_46308[(8)] = inst_46215__$1);

return statearr_46308;
})();
var statearr_46309_48509 = state_46262__$1;
(statearr_46309_48509[(2)] = null);

(statearr_46309_48509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_46310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46310[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_46310[(1)] = (1));

return statearr_46310;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_46262){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_46262);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e46311){var ex__42768__auto__ = e46311;
var statearr_46312_48520 = state_46262;
(statearr_46312_48520[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_46262[(4)]))){
var statearr_46313_48522 = state_46262;
(statearr_46313_48522[(1)] = cljs.core.first((state_46262[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48524 = state_46262;
state_46262 = G__48524;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_46262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_46262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_46321 = f__43001__auto__();
(statearr_46321[(6)] = c__43000__auto___48441);

return statearr_46321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46334 = arguments.length;
switch (G__46334) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43000__auto___48543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43001__auto__ = (function (){var switch__42764__auto__ = (function (state_46379){
var state_val_46380 = (state_46379[(1)]);
if((state_val_46380 === (7))){
var inst_46375 = (state_46379[(2)]);
var state_46379__$1 = state_46379;
var statearr_46382_48547 = state_46379__$1;
(statearr_46382_48547[(2)] = inst_46375);

(statearr_46382_48547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (1))){
var inst_46338 = [];
var inst_46339 = inst_46338;
var inst_46340 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46379__$1 = (function (){var statearr_46385 = state_46379;
(statearr_46385[(7)] = inst_46340);

(statearr_46385[(8)] = inst_46339);

return statearr_46385;
})();
var statearr_46387_48553 = state_46379__$1;
(statearr_46387_48553[(2)] = null);

(statearr_46387_48553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (4))){
var inst_46343 = (state_46379[(9)]);
var inst_46343__$1 = (state_46379[(2)]);
var inst_46344 = (inst_46343__$1 == null);
var inst_46345 = cljs.core.not(inst_46344);
var state_46379__$1 = (function (){var statearr_46388 = state_46379;
(statearr_46388[(9)] = inst_46343__$1);

return statearr_46388;
})();
if(inst_46345){
var statearr_46389_48554 = state_46379__$1;
(statearr_46389_48554[(1)] = (5));

} else {
var statearr_46392_48556 = state_46379__$1;
(statearr_46392_48556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (15))){
var inst_46369 = (state_46379[(2)]);
var state_46379__$1 = state_46379;
var statearr_46397_48559 = state_46379__$1;
(statearr_46397_48559[(2)] = inst_46369);

(statearr_46397_48559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (13))){
var state_46379__$1 = state_46379;
var statearr_46398_48562 = state_46379__$1;
(statearr_46398_48562[(2)] = null);

(statearr_46398_48562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (6))){
var inst_46339 = (state_46379[(8)]);
var inst_46364 = inst_46339.length;
var inst_46365 = (inst_46364 > (0));
var state_46379__$1 = state_46379;
if(cljs.core.truth_(inst_46365)){
var statearr_46399_48565 = state_46379__$1;
(statearr_46399_48565[(1)] = (12));

} else {
var statearr_46402_48566 = state_46379__$1;
(statearr_46402_48566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (3))){
var inst_46377 = (state_46379[(2)]);
var state_46379__$1 = state_46379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46379__$1,inst_46377);
} else {
if((state_val_46380 === (12))){
var inst_46339 = (state_46379[(8)]);
var inst_46367 = cljs.core.vec(inst_46339);
var state_46379__$1 = state_46379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46379__$1,(15),out,inst_46367);
} else {
if((state_val_46380 === (2))){
var state_46379__$1 = state_46379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46379__$1,(4),ch);
} else {
if((state_val_46380 === (11))){
var inst_46347 = (state_46379[(10)]);
var inst_46343 = (state_46379[(9)]);
var inst_46357 = (state_46379[(2)]);
var inst_46358 = [];
var inst_46359 = inst_46358.push(inst_46343);
var inst_46339 = inst_46358;
var inst_46340 = inst_46347;
var state_46379__$1 = (function (){var statearr_46410 = state_46379;
(statearr_46410[(7)] = inst_46340);

(statearr_46410[(8)] = inst_46339);

(statearr_46410[(11)] = inst_46359);

(statearr_46410[(12)] = inst_46357);

return statearr_46410;
})();
var statearr_46411_48573 = state_46379__$1;
(statearr_46411_48573[(2)] = null);

(statearr_46411_48573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (9))){
var inst_46339 = (state_46379[(8)]);
var inst_46355 = cljs.core.vec(inst_46339);
var state_46379__$1 = state_46379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46379__$1,(11),out,inst_46355);
} else {
if((state_val_46380 === (5))){
var inst_46340 = (state_46379[(7)]);
var inst_46347 = (state_46379[(10)]);
var inst_46343 = (state_46379[(9)]);
var inst_46347__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46343) : f.call(null,inst_46343));
var inst_46348 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46347__$1,inst_46340);
var inst_46349 = cljs.core.keyword_identical_QMARK_(inst_46340,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46350 = ((inst_46348) || (inst_46349));
var state_46379__$1 = (function (){var statearr_46418 = state_46379;
(statearr_46418[(10)] = inst_46347__$1);

return statearr_46418;
})();
if(cljs.core.truth_(inst_46350)){
var statearr_46419_48575 = state_46379__$1;
(statearr_46419_48575[(1)] = (8));

} else {
var statearr_46420_48577 = state_46379__$1;
(statearr_46420_48577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (14))){
var inst_46372 = (state_46379[(2)]);
var inst_46373 = cljs.core.async.close_BANG_(out);
var state_46379__$1 = (function (){var statearr_46422 = state_46379;
(statearr_46422[(13)] = inst_46372);

return statearr_46422;
})();
var statearr_46423_48582 = state_46379__$1;
(statearr_46423_48582[(2)] = inst_46373);

(statearr_46423_48582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (10))){
var inst_46362 = (state_46379[(2)]);
var state_46379__$1 = state_46379;
var statearr_46424_48584 = state_46379__$1;
(statearr_46424_48584[(2)] = inst_46362);

(statearr_46424_48584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46380 === (8))){
var inst_46339 = (state_46379[(8)]);
var inst_46347 = (state_46379[(10)]);
var inst_46343 = (state_46379[(9)]);
var inst_46352 = inst_46339.push(inst_46343);
var tmp46421 = inst_46339;
var inst_46339__$1 = tmp46421;
var inst_46340 = inst_46347;
var state_46379__$1 = (function (){var statearr_46425 = state_46379;
(statearr_46425[(7)] = inst_46340);

(statearr_46425[(8)] = inst_46339__$1);

(statearr_46425[(14)] = inst_46352);

return statearr_46425;
})();
var statearr_46426_48592 = state_46379__$1;
(statearr_46426_48592[(2)] = null);

(statearr_46426_48592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42765__auto__ = null;
var cljs$core$async$state_machine__42765__auto____0 = (function (){
var statearr_46427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46427[(0)] = cljs$core$async$state_machine__42765__auto__);

(statearr_46427[(1)] = (1));

return statearr_46427;
});
var cljs$core$async$state_machine__42765__auto____1 = (function (state_46379){
while(true){
var ret_value__42766__auto__ = (function (){try{while(true){
var result__42767__auto__ = switch__42764__auto__(state_46379);
if(cljs.core.keyword_identical_QMARK_(result__42767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42767__auto__;
}
break;
}
}catch (e46428){var ex__42768__auto__ = e46428;
var statearr_46432_48595 = state_46379;
(statearr_46432_48595[(2)] = ex__42768__auto__);


if(cljs.core.seq((state_46379[(4)]))){
var statearr_46435_48597 = state_46379;
(statearr_46435_48597[(1)] = cljs.core.first((state_46379[(4)])));

} else {
throw ex__42768__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48598 = state_46379;
state_46379 = G__48598;
continue;
} else {
return ret_value__42766__auto__;
}
break;
}
});
cljs$core$async$state_machine__42765__auto__ = function(state_46379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42765__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42765__auto____1.call(this,state_46379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42765__auto____0;
cljs$core$async$state_machine__42765__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42765__auto____1;
return cljs$core$async$state_machine__42765__auto__;
})()
})();
var state__43002__auto__ = (function (){var statearr_46436 = f__43001__auto__();
(statearr_46436[(6)] = c__43000__auto___48543);

return statearr_46436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43002__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
