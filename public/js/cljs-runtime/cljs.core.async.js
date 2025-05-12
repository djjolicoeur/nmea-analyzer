goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14573 = (function (f,blockable,meta14574){
this.f = f;
this.blockable = blockable;
this.meta14574 = meta14574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14575,meta14574__$1){
var self__ = this;
var _14575__$1 = this;
return (new cljs.core.async.t_cljs$core$async14573(self__.f,self__.blockable,meta14574__$1));
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14575){
var self__ = this;
var _14575__$1 = this;
return self__.meta14574;
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14574","meta14574",-161073625,null)], null);
}));

(cljs.core.async.t_cljs$core$async14573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14573");

(cljs.core.async.t_cljs$core$async14573.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14573.
 */
cljs.core.async.__GT_t_cljs$core$async14573 = (function cljs$core$async$__GT_t_cljs$core$async14573(f,blockable,meta14574){
return (new cljs.core.async.t_cljs$core$async14573(f,blockable,meta14574));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14564 = arguments.length;
switch (G__14564) {
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
return (new cljs.core.async.t_cljs$core$async14573(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14608 = arguments.length;
switch (G__14608) {
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
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14618 = arguments.length;
switch (G__14618) {
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
var G__14632 = arguments.length;
switch (G__14632) {
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
var val_17863 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17863) : fn1.call(null,val_17863));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17863) : fn1.call(null,val_17863));
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
var G__14651 = arguments.length;
switch (G__14651) {
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
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
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
var n__5616__auto___17883 = n;
var x_17884 = (0);
while(true){
if((x_17884 < n__5616__auto___17883)){
(a[x_17884] = x_17884);

var G__17885 = (x_17884 + (1));
x_17884 = G__17885;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14662 = (function (flag,meta14663){
this.flag = flag;
this.meta14663 = meta14663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14664,meta14663__$1){
var self__ = this;
var _14664__$1 = this;
return (new cljs.core.async.t_cljs$core$async14662(self__.flag,meta14663__$1));
}));

(cljs.core.async.t_cljs$core$async14662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14664){
var self__ = this;
var _14664__$1 = this;
return self__.meta14663;
}));

(cljs.core.async.t_cljs$core$async14662.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14662.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14663","meta14663",1119981372,null)], null);
}));

(cljs.core.async.t_cljs$core$async14662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14662");

(cljs.core.async.t_cljs$core$async14662.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14662.
 */
cljs.core.async.__GT_t_cljs$core$async14662 = (function cljs$core$async$__GT_t_cljs$core$async14662(flag,meta14663){
return (new cljs.core.async.t_cljs$core$async14662(flag,meta14663));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14662(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14676 = (function (flag,cb,meta14677){
this.flag = flag;
this.cb = cb;
this.meta14677 = meta14677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14678,meta14677__$1){
var self__ = this;
var _14678__$1 = this;
return (new cljs.core.async.t_cljs$core$async14676(self__.flag,self__.cb,meta14677__$1));
}));

(cljs.core.async.t_cljs$core$async14676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14678){
var self__ = this;
var _14678__$1 = this;
return self__.meta14677;
}));

(cljs.core.async.t_cljs$core$async14676.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14677","meta14677",-516620491,null)], null);
}));

(cljs.core.async.t_cljs$core$async14676.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14676");

(cljs.core.async.t_cljs$core$async14676.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14676");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14676.
 */
cljs.core.async.__GT_t_cljs$core$async14676 = (function cljs$core$async$__GT_t_cljs$core$async14676(flag,cb,meta14677){
return (new cljs.core.async.t_cljs$core$async14676(flag,cb,meta14677));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14676(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_17900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_17900)){
if((!(((port_17900.cljs$core$IFn$_invoke$arity$1 ? port_17900.cljs$core$IFn$_invoke$arity$1((1)) : port_17900.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__17901 = (i + (1));
i = G__17901;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14687_SHARP_){
var G__14703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14687_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14703) : fret.call(null,G__14703));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14689_SHARP_){
var G__14704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14689_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14704) : fret.call(null,G__14704));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17919 = (i + (1));
i = G__17919;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
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
var args__5755__auto__ = [];
var len__5749__auto___17920 = arguments.length;
var i__5750__auto___17921 = (0);
while(true){
if((i__5750__auto___17921 < len__5749__auto___17920)){
args__5755__auto__.push((arguments[i__5750__auto___17921]));

var G__17922 = (i__5750__auto___17921 + (1));
i__5750__auto___17921 = G__17922;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14723){
var map__14725 = p__14723;
var map__14725__$1 = cljs.core.__destructure_map(map__14725);
var opts = map__14725__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14716){
var G__14717 = cljs.core.first(seq14716);
var seq14716__$1 = cljs.core.next(seq14716);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14717,seq14716__$1);
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
var G__14743 = arguments.length;
switch (G__14743) {
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
var c__14489__auto___17924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_14834){
var state_val_14841 = (state_14834[(1)]);
if((state_val_14841 === (7))){
var inst_14824 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14858_17925 = state_14834__$1;
(statearr_14858_17925[(2)] = inst_14824);

(statearr_14858_17925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14841 === (1))){
var state_14834__$1 = state_14834;
var statearr_14862_17930 = state_14834__$1;
(statearr_14862_17930[(2)] = null);

(statearr_14862_17930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14841 === (4))){
var inst_14788 = (state_14834[(7)]);
var inst_14788__$1 = (state_14834[(2)]);
var inst_14797 = (inst_14788__$1 == null);
var state_14834__$1 = (function (){var statearr_14864 = state_14834;
(statearr_14864[(7)] = inst_14788__$1);

return statearr_14864;
})();
if(cljs.core.truth_(inst_14797)){
var statearr_14865_17934 = state_14834__$1;
(statearr_14865_17934[(1)] = (5));

} else {
var statearr_14866_17935 = state_14834__$1;
(statearr_14866_17935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14841 === (13))){
var state_14834__$1 = state_14834;
var statearr_14872_17936 = state_14834__$1;
(statearr_14872_17936[(2)] = null);

(statearr_14872_17936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14841 === (6))){
var inst_14788 = (state_14834[(7)]);
var state_14834__$1 = state_14834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14834__$1,(11),to,inst_14788);
} else {
if((state_val_14841 === (3))){
var inst_14827 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14834__$1,inst_14827);
} else {
if((state_val_14841 === (12))){
var state_14834__$1 = state_14834;
var statearr_14874_17937 = state_14834__$1;
(statearr_14874_17937[(2)] = null);

(statearr_14874_17937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14841 === (2))){
var state_14834__$1 = state_14834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14834__$1,(4),from);
} else {
if((state_val_14841 === (11))){
var inst_14816 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
if(cljs.core.truth_(inst_14816)){
var statearr_14876_17938 = state_14834__$1;
(statearr_14876_17938[(1)] = (12));

} else {
var statearr_14877_17939 = state_14834__$1;
(statearr_14877_17939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14841 === (9))){
var state_14834__$1 = state_14834;
var statearr_14878_17940 = state_14834__$1;
(statearr_14878_17940[(2)] = null);

(statearr_14878_17940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14841 === (5))){
var state_14834__$1 = state_14834;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14881_17944 = state_14834__$1;
(statearr_14881_17944[(1)] = (8));

} else {
var statearr_14883_17946 = state_14834__$1;
(statearr_14883_17946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14841 === (14))){
var inst_14822 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14898_17947 = state_14834__$1;
(statearr_14898_17947[(2)] = inst_14822);

(statearr_14898_17947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14841 === (10))){
var inst_14810 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14913_17948 = state_14834__$1;
(statearr_14913_17948[(2)] = inst_14810);

(statearr_14913_17948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14841 === (8))){
var inst_14802 = cljs.core.async.close_BANG_(to);
var state_14834__$1 = state_14834;
var statearr_14917_17952 = state_14834__$1;
(statearr_14917_17952[(2)] = inst_14802);

(statearr_14917_17952[(1)] = (10));


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
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_14924 = [null,null,null,null,null,null,null,null];
(statearr_14924[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_14924[(1)] = (1));

return statearr_14924;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_14834){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_14834);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e14930){var ex__13828__auto__ = e14930;
var statearr_14933_17957 = state_14834;
(statearr_14933_17957[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_14834[(4)]))){
var statearr_14934_17958 = state_14834;
(statearr_14934_17958[(1)] = cljs.core.first((state_14834[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17959 = state_14834;
state_14834 = G__17959;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_14834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_14834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_14935 = f__14490__auto__();
(statearr_14935[(6)] = c__14489__auto___17924);

return statearr_14935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
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
var process__$1 = (function (p__14956){
var vec__14957 = p__14956;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14957,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14957,(1),null);
var job = vec__14957;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14489__auto___17961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_14964){
var state_val_14965 = (state_14964[(1)]);
if((state_val_14965 === (1))){
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14964__$1,(2),res,v);
} else {
if((state_val_14965 === (2))){
var inst_14961 = (state_14964[(2)]);
var inst_14962 = cljs.core.async.close_BANG_(res);
var state_14964__$1 = (function (){var statearr_14975 = state_14964;
(statearr_14975[(7)] = inst_14961);

return statearr_14975;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14964__$1,inst_14962);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0 = (function (){
var statearr_14979 = [null,null,null,null,null,null,null,null];
(statearr_14979[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__);

(statearr_14979[(1)] = (1));

return statearr_14979;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1 = (function (state_14964){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_14964);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e14981){var ex__13828__auto__ = e14981;
var statearr_14985_17972 = state_14964;
(statearr_14985_17972[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_14964[(4)]))){
var statearr_14988_17974 = state_14964;
(statearr_14988_17974[(1)] = cljs.core.first((state_14964[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17975 = state_14964;
state_14964 = G__17975;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__ = function(state_14964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1.call(this,state_14964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_14990 = f__14490__auto__();
(statearr_14990[(6)] = c__14489__auto___17961);

return statearr_14990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14993){
var vec__14997 = p__14993;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14997,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14997,(1),null);
var job = vec__14997;
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
var n__5616__auto___17976 = n;
var __17977 = (0);
while(true){
if((__17977 < n__5616__auto___17976)){
var G__15002_17978 = type;
var G__15002_17979__$1 = (((G__15002_17978 instanceof cljs.core.Keyword))?G__15002_17978.fqn:null);
switch (G__15002_17979__$1) {
case "compute":
var c__14489__auto___17981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17977,c__14489__auto___17981,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async){
return (function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = ((function (__17977,c__14489__auto___17981,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async){
return (function (state_15017){
var state_val_15018 = (state_15017[(1)]);
if((state_val_15018 === (1))){
var state_15017__$1 = state_15017;
var statearr_15024_17982 = state_15017__$1;
(statearr_15024_17982[(2)] = null);

(statearr_15024_17982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15018 === (2))){
var state_15017__$1 = state_15017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15017__$1,(4),jobs);
} else {
if((state_val_15018 === (3))){
var inst_15015 = (state_15017[(2)]);
var state_15017__$1 = state_15017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15017__$1,inst_15015);
} else {
if((state_val_15018 === (4))){
var inst_15007 = (state_15017[(2)]);
var inst_15008 = process__$1(inst_15007);
var state_15017__$1 = state_15017;
if(cljs.core.truth_(inst_15008)){
var statearr_15034_17986 = state_15017__$1;
(statearr_15034_17986[(1)] = (5));

} else {
var statearr_15036_17987 = state_15017__$1;
(statearr_15036_17987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15018 === (5))){
var state_15017__$1 = state_15017;
var statearr_15042_17988 = state_15017__$1;
(statearr_15042_17988[(2)] = null);

(statearr_15042_17988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15018 === (6))){
var state_15017__$1 = state_15017;
var statearr_15049_17989 = state_15017__$1;
(statearr_15049_17989[(2)] = null);

(statearr_15049_17989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15018 === (7))){
var inst_15013 = (state_15017[(2)]);
var state_15017__$1 = state_15017;
var statearr_15053_17990 = state_15017__$1;
(statearr_15053_17990[(2)] = inst_15013);

(statearr_15053_17990[(1)] = (3));


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
});})(__17977,c__14489__auto___17981,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async))
;
return ((function (__17977,switch__13824__auto__,c__14489__auto___17981,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0 = (function (){
var statearr_15064 = [null,null,null,null,null,null,null];
(statearr_15064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__);

(statearr_15064[(1)] = (1));

return statearr_15064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1 = (function (state_15017){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_15017);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e15066){var ex__13828__auto__ = e15066;
var statearr_15067_17992 = state_15017;
(statearr_15067_17992[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_15017[(4)]))){
var statearr_15068_17998 = state_15017;
(statearr_15068_17998[(1)] = cljs.core.first((state_15017[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18010 = state_15017;
state_15017 = G__18010;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__ = function(state_15017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1.call(this,state_15017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__;
})()
;})(__17977,switch__13824__auto__,c__14489__auto___17981,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async))
})();
var state__14491__auto__ = (function (){var statearr_15070 = f__14490__auto__();
(statearr_15070[(6)] = c__14489__auto___17981);

return statearr_15070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
});})(__17977,c__14489__auto___17981,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async))
);


break;
case "async":
var c__14489__auto___18013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17977,c__14489__auto___18013,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async){
return (function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = ((function (__17977,c__14489__auto___18013,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async){
return (function (state_15084){
var state_val_15085 = (state_15084[(1)]);
if((state_val_15085 === (1))){
var state_15084__$1 = state_15084;
var statearr_15086_18018 = state_15084__$1;
(statearr_15086_18018[(2)] = null);

(statearr_15086_18018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (2))){
var state_15084__$1 = state_15084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15084__$1,(4),jobs);
} else {
if((state_val_15085 === (3))){
var inst_15082 = (state_15084[(2)]);
var state_15084__$1 = state_15084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15084__$1,inst_15082);
} else {
if((state_val_15085 === (4))){
var inst_15073 = (state_15084[(2)]);
var inst_15074 = async(inst_15073);
var state_15084__$1 = state_15084;
if(cljs.core.truth_(inst_15074)){
var statearr_15093_18031 = state_15084__$1;
(statearr_15093_18031[(1)] = (5));

} else {
var statearr_15094_18032 = state_15084__$1;
(statearr_15094_18032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (5))){
var state_15084__$1 = state_15084;
var statearr_15095_18033 = state_15084__$1;
(statearr_15095_18033[(2)] = null);

(statearr_15095_18033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (6))){
var state_15084__$1 = state_15084;
var statearr_15097_18034 = state_15084__$1;
(statearr_15097_18034[(2)] = null);

(statearr_15097_18034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (7))){
var inst_15080 = (state_15084[(2)]);
var state_15084__$1 = state_15084;
var statearr_15098_18035 = state_15084__$1;
(statearr_15098_18035[(2)] = inst_15080);

(statearr_15098_18035[(1)] = (3));


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
});})(__17977,c__14489__auto___18013,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async))
;
return ((function (__17977,switch__13824__auto__,c__14489__auto___18013,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0 = (function (){
var statearr_15105 = [null,null,null,null,null,null,null];
(statearr_15105[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__);

(statearr_15105[(1)] = (1));

return statearr_15105;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1 = (function (state_15084){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_15084);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e15106){var ex__13828__auto__ = e15106;
var statearr_15107_18041 = state_15084;
(statearr_15107_18041[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_15084[(4)]))){
var statearr_15108_18042 = state_15084;
(statearr_15108_18042[(1)] = cljs.core.first((state_15084[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18043 = state_15084;
state_15084 = G__18043;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__ = function(state_15084){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1.call(this,state_15084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__;
})()
;})(__17977,switch__13824__auto__,c__14489__auto___18013,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async))
})();
var state__14491__auto__ = (function (){var statearr_15114 = f__14490__auto__();
(statearr_15114[(6)] = c__14489__auto___18013);

return statearr_15114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
});})(__17977,c__14489__auto___18013,G__15002_17978,G__15002_17979__$1,n__5616__auto___17976,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15002_17979__$1)].join('')));

}

var G__18046 = (__17977 + (1));
__17977 = G__18046;
continue;
} else {
}
break;
}

var c__14489__auto___18047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_15150){
var state_val_15151 = (state_15150[(1)]);
if((state_val_15151 === (7))){
var inst_15146 = (state_15150[(2)]);
var state_15150__$1 = state_15150;
var statearr_15157_18048 = state_15150__$1;
(statearr_15157_18048[(2)] = inst_15146);

(statearr_15157_18048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (1))){
var state_15150__$1 = state_15150;
var statearr_15158_18049 = state_15150__$1;
(statearr_15158_18049[(2)] = null);

(statearr_15158_18049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (4))){
var inst_15124 = (state_15150[(7)]);
var inst_15124__$1 = (state_15150[(2)]);
var inst_15125 = (inst_15124__$1 == null);
var state_15150__$1 = (function (){var statearr_15162 = state_15150;
(statearr_15162[(7)] = inst_15124__$1);

return statearr_15162;
})();
if(cljs.core.truth_(inst_15125)){
var statearr_15163_18050 = state_15150__$1;
(statearr_15163_18050[(1)] = (5));

} else {
var statearr_15164_18051 = state_15150__$1;
(statearr_15164_18051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (6))){
var inst_15124 = (state_15150[(7)]);
var inst_15129 = (state_15150[(8)]);
var inst_15129__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15132 = [inst_15124,inst_15129__$1];
var inst_15138 = (new cljs.core.PersistentVector(null,2,(5),inst_15130,inst_15132,null));
var state_15150__$1 = (function (){var statearr_15169 = state_15150;
(statearr_15169[(8)] = inst_15129__$1);

return statearr_15169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15150__$1,(8),jobs,inst_15138);
} else {
if((state_val_15151 === (3))){
var inst_15148 = (state_15150[(2)]);
var state_15150__$1 = state_15150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15150__$1,inst_15148);
} else {
if((state_val_15151 === (2))){
var state_15150__$1 = state_15150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15150__$1,(4),from);
} else {
if((state_val_15151 === (9))){
var inst_15143 = (state_15150[(2)]);
var state_15150__$1 = (function (){var statearr_15170 = state_15150;
(statearr_15170[(9)] = inst_15143);

return statearr_15170;
})();
var statearr_15171_18059 = state_15150__$1;
(statearr_15171_18059[(2)] = null);

(statearr_15171_18059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (5))){
var inst_15127 = cljs.core.async.close_BANG_(jobs);
var state_15150__$1 = state_15150;
var statearr_15172_18060 = state_15150__$1;
(statearr_15172_18060[(2)] = inst_15127);

(statearr_15172_18060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (8))){
var inst_15129 = (state_15150[(8)]);
var inst_15140 = (state_15150[(2)]);
var state_15150__$1 = (function (){var statearr_15174 = state_15150;
(statearr_15174[(10)] = inst_15140);

return statearr_15174;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15150__$1,(9),results,inst_15129);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0 = (function (){
var statearr_15175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__);

(statearr_15175[(1)] = (1));

return statearr_15175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1 = (function (state_15150){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_15150);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e15177){var ex__13828__auto__ = e15177;
var statearr_15179_18068 = state_15150;
(statearr_15179_18068[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_15150[(4)]))){
var statearr_15181_18069 = state_15150;
(statearr_15181_18069[(1)] = cljs.core.first((state_15150[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18074 = state_15150;
state_15150 = G__18074;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__ = function(state_15150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1.call(this,state_15150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_15185 = f__14490__auto__();
(statearr_15185[(6)] = c__14489__auto___18047);

return statearr_15185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));


var c__14489__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_15227){
var state_val_15228 = (state_15227[(1)]);
if((state_val_15228 === (7))){
var inst_15223 = (state_15227[(2)]);
var state_15227__$1 = state_15227;
var statearr_15229_18079 = state_15227__$1;
(statearr_15229_18079[(2)] = inst_15223);

(statearr_15229_18079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (20))){
var state_15227__$1 = state_15227;
var statearr_15231_18087 = state_15227__$1;
(statearr_15231_18087[(2)] = null);

(statearr_15231_18087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (1))){
var state_15227__$1 = state_15227;
var statearr_15232_18091 = state_15227__$1;
(statearr_15232_18091[(2)] = null);

(statearr_15232_18091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (4))){
var inst_15188 = (state_15227[(7)]);
var inst_15188__$1 = (state_15227[(2)]);
var inst_15189 = (inst_15188__$1 == null);
var state_15227__$1 = (function (){var statearr_15233 = state_15227;
(statearr_15233[(7)] = inst_15188__$1);

return statearr_15233;
})();
if(cljs.core.truth_(inst_15189)){
var statearr_15234_18095 = state_15227__$1;
(statearr_15234_18095[(1)] = (5));

} else {
var statearr_15236_18096 = state_15227__$1;
(statearr_15236_18096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (15))){
var inst_15204 = (state_15227[(8)]);
var state_15227__$1 = state_15227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15227__$1,(18),to,inst_15204);
} else {
if((state_val_15228 === (21))){
var inst_15218 = (state_15227[(2)]);
var state_15227__$1 = state_15227;
var statearr_15237_18100 = state_15227__$1;
(statearr_15237_18100[(2)] = inst_15218);

(statearr_15237_18100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (13))){
var inst_15220 = (state_15227[(2)]);
var state_15227__$1 = (function (){var statearr_15238 = state_15227;
(statearr_15238[(9)] = inst_15220);

return statearr_15238;
})();
var statearr_15240_18101 = state_15227__$1;
(statearr_15240_18101[(2)] = null);

(statearr_15240_18101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (6))){
var inst_15188 = (state_15227[(7)]);
var state_15227__$1 = state_15227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15227__$1,(11),inst_15188);
} else {
if((state_val_15228 === (17))){
var inst_15213 = (state_15227[(2)]);
var state_15227__$1 = state_15227;
if(cljs.core.truth_(inst_15213)){
var statearr_15241_18105 = state_15227__$1;
(statearr_15241_18105[(1)] = (19));

} else {
var statearr_15242_18106 = state_15227__$1;
(statearr_15242_18106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (3))){
var inst_15225 = (state_15227[(2)]);
var state_15227__$1 = state_15227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15227__$1,inst_15225);
} else {
if((state_val_15228 === (12))){
var inst_15200 = (state_15227[(10)]);
var state_15227__$1 = state_15227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15227__$1,(14),inst_15200);
} else {
if((state_val_15228 === (2))){
var state_15227__$1 = state_15227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15227__$1,(4),results);
} else {
if((state_val_15228 === (19))){
var state_15227__$1 = state_15227;
var statearr_15244_18107 = state_15227__$1;
(statearr_15244_18107[(2)] = null);

(statearr_15244_18107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (11))){
var inst_15200 = (state_15227[(2)]);
var state_15227__$1 = (function (){var statearr_15245 = state_15227;
(statearr_15245[(10)] = inst_15200);

return statearr_15245;
})();
var statearr_15246_18108 = state_15227__$1;
(statearr_15246_18108[(2)] = null);

(statearr_15246_18108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (9))){
var state_15227__$1 = state_15227;
var statearr_15248_18109 = state_15227__$1;
(statearr_15248_18109[(2)] = null);

(statearr_15248_18109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (5))){
var state_15227__$1 = state_15227;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15249_18110 = state_15227__$1;
(statearr_15249_18110[(1)] = (8));

} else {
var statearr_15250_18111 = state_15227__$1;
(statearr_15250_18111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (14))){
var inst_15204 = (state_15227[(8)]);
var inst_15207 = (state_15227[(11)]);
var inst_15204__$1 = (state_15227[(2)]);
var inst_15206 = (inst_15204__$1 == null);
var inst_15207__$1 = cljs.core.not(inst_15206);
var state_15227__$1 = (function (){var statearr_15251 = state_15227;
(statearr_15251[(8)] = inst_15204__$1);

(statearr_15251[(11)] = inst_15207__$1);

return statearr_15251;
})();
if(inst_15207__$1){
var statearr_15252_18118 = state_15227__$1;
(statearr_15252_18118[(1)] = (15));

} else {
var statearr_15253_18119 = state_15227__$1;
(statearr_15253_18119[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (16))){
var inst_15207 = (state_15227[(11)]);
var state_15227__$1 = state_15227;
var statearr_15254_18120 = state_15227__$1;
(statearr_15254_18120[(2)] = inst_15207);

(statearr_15254_18120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (10))){
var inst_15197 = (state_15227[(2)]);
var state_15227__$1 = state_15227;
var statearr_15255_18121 = state_15227__$1;
(statearr_15255_18121[(2)] = inst_15197);

(statearr_15255_18121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (18))){
var inst_15210 = (state_15227[(2)]);
var state_15227__$1 = state_15227;
var statearr_15258_18122 = state_15227__$1;
(statearr_15258_18122[(2)] = inst_15210);

(statearr_15258_18122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (8))){
var inst_15194 = cljs.core.async.close_BANG_(to);
var state_15227__$1 = state_15227;
var statearr_15260_18128 = state_15227__$1;
(statearr_15260_18128[(2)] = inst_15194);

(statearr_15260_18128[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0 = (function (){
var statearr_15263 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__);

(statearr_15263[(1)] = (1));

return statearr_15263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1 = (function (state_15227){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_15227);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e15264){var ex__13828__auto__ = e15264;
var statearr_15265_18130 = state_15227;
(statearr_15265_18130[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_15227[(4)]))){
var statearr_15266_18131 = state_15227;
(statearr_15266_18131[(1)] = cljs.core.first((state_15227[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18132 = state_15227;
state_15227 = G__18132;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__ = function(state_15227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1.call(this,state_15227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_15271 = f__14490__auto__();
(statearr_15271[(6)] = c__14489__auto__);

return statearr_15271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));

return c__14489__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15275 = arguments.length;
switch (G__15275) {
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
var G__15282 = arguments.length;
switch (G__15282) {
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
var G__15290 = arguments.length;
switch (G__15290) {
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
var c__14489__auto___18146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_15325){
var state_val_15326 = (state_15325[(1)]);
if((state_val_15326 === (7))){
var inst_15319 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
var statearr_15328_18147 = state_15325__$1;
(statearr_15328_18147[(2)] = inst_15319);

(statearr_15328_18147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (1))){
var state_15325__$1 = state_15325;
var statearr_15329_18150 = state_15325__$1;
(statearr_15329_18150[(2)] = null);

(statearr_15329_18150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (4))){
var inst_15297 = (state_15325[(7)]);
var inst_15297__$1 = (state_15325[(2)]);
var inst_15301 = (inst_15297__$1 == null);
var state_15325__$1 = (function (){var statearr_15330 = state_15325;
(statearr_15330[(7)] = inst_15297__$1);

return statearr_15330;
})();
if(cljs.core.truth_(inst_15301)){
var statearr_15331_18151 = state_15325__$1;
(statearr_15331_18151[(1)] = (5));

} else {
var statearr_15332_18152 = state_15325__$1;
(statearr_15332_18152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (13))){
var state_15325__$1 = state_15325;
var statearr_15334_18153 = state_15325__$1;
(statearr_15334_18153[(2)] = null);

(statearr_15334_18153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (6))){
var inst_15297 = (state_15325[(7)]);
var inst_15306 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15297) : p.call(null,inst_15297));
var state_15325__$1 = state_15325;
if(cljs.core.truth_(inst_15306)){
var statearr_15335_18154 = state_15325__$1;
(statearr_15335_18154[(1)] = (9));

} else {
var statearr_15336_18155 = state_15325__$1;
(statearr_15336_18155[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (3))){
var inst_15322 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15325__$1,inst_15322);
} else {
if((state_val_15326 === (12))){
var state_15325__$1 = state_15325;
var statearr_15337_18156 = state_15325__$1;
(statearr_15337_18156[(2)] = null);

(statearr_15337_18156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (2))){
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15325__$1,(4),ch);
} else {
if((state_val_15326 === (11))){
var inst_15297 = (state_15325[(7)]);
var inst_15310 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15325__$1,(8),inst_15310,inst_15297);
} else {
if((state_val_15326 === (9))){
var state_15325__$1 = state_15325;
var statearr_15340_18157 = state_15325__$1;
(statearr_15340_18157[(2)] = tc);

(statearr_15340_18157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (5))){
var inst_15303 = cljs.core.async.close_BANG_(tc);
var inst_15304 = cljs.core.async.close_BANG_(fc);
var state_15325__$1 = (function (){var statearr_15342 = state_15325;
(statearr_15342[(8)] = inst_15303);

return statearr_15342;
})();
var statearr_15345_18161 = state_15325__$1;
(statearr_15345_18161[(2)] = inst_15304);

(statearr_15345_18161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (14))){
var inst_15317 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
var statearr_15348_18164 = state_15325__$1;
(statearr_15348_18164[(2)] = inst_15317);

(statearr_15348_18164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (10))){
var state_15325__$1 = state_15325;
var statearr_15350_18165 = state_15325__$1;
(statearr_15350_18165[(2)] = fc);

(statearr_15350_18165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (8))){
var inst_15312 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
if(cljs.core.truth_(inst_15312)){
var statearr_15351_18166 = state_15325__$1;
(statearr_15351_18166[(1)] = (12));

} else {
var statearr_15352_18167 = state_15325__$1;
(statearr_15352_18167[(1)] = (13));

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
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_15359 = [null,null,null,null,null,null,null,null,null];
(statearr_15359[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_15359[(1)] = (1));

return statearr_15359;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_15325){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_15325);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e15360){var ex__13828__auto__ = e15360;
var statearr_15361_18175 = state_15325;
(statearr_15361_18175[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_15325[(4)]))){
var statearr_15362_18176 = state_15325;
(statearr_15362_18176[(1)] = cljs.core.first((state_15325[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18179 = state_15325;
state_15325 = G__18179;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_15325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_15325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_15371 = f__14490__auto__();
(statearr_15371[(6)] = c__14489__auto___18146);

return statearr_15371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
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
var c__14489__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_15408){
var state_val_15409 = (state_15408[(1)]);
if((state_val_15409 === (7))){
var inst_15404 = (state_15408[(2)]);
var state_15408__$1 = state_15408;
var statearr_15415_18180 = state_15408__$1;
(statearr_15415_18180[(2)] = inst_15404);

(statearr_15415_18180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (1))){
var inst_15379 = init;
var inst_15383 = inst_15379;
var state_15408__$1 = (function (){var statearr_15417 = state_15408;
(statearr_15417[(7)] = inst_15383);

return statearr_15417;
})();
var statearr_15418_18184 = state_15408__$1;
(statearr_15418_18184[(2)] = null);

(statearr_15418_18184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (4))){
var inst_15388 = (state_15408[(8)]);
var inst_15388__$1 = (state_15408[(2)]);
var inst_15389 = (inst_15388__$1 == null);
var state_15408__$1 = (function (){var statearr_15419 = state_15408;
(statearr_15419[(8)] = inst_15388__$1);

return statearr_15419;
})();
if(cljs.core.truth_(inst_15389)){
var statearr_15420_18187 = state_15408__$1;
(statearr_15420_18187[(1)] = (5));

} else {
var statearr_15421_18188 = state_15408__$1;
(statearr_15421_18188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (6))){
var inst_15383 = (state_15408[(7)]);
var inst_15388 = (state_15408[(8)]);
var inst_15394 = (state_15408[(9)]);
var inst_15394__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15383,inst_15388) : f.call(null,inst_15383,inst_15388));
var inst_15395 = cljs.core.reduced_QMARK_(inst_15394__$1);
var state_15408__$1 = (function (){var statearr_15422 = state_15408;
(statearr_15422[(9)] = inst_15394__$1);

return statearr_15422;
})();
if(inst_15395){
var statearr_15423_18190 = state_15408__$1;
(statearr_15423_18190[(1)] = (8));

} else {
var statearr_15424_18192 = state_15408__$1;
(statearr_15424_18192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (3))){
var inst_15406 = (state_15408[(2)]);
var state_15408__$1 = state_15408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15408__$1,inst_15406);
} else {
if((state_val_15409 === (2))){
var state_15408__$1 = state_15408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15408__$1,(4),ch);
} else {
if((state_val_15409 === (9))){
var inst_15394 = (state_15408[(9)]);
var inst_15383 = inst_15394;
var state_15408__$1 = (function (){var statearr_15430 = state_15408;
(statearr_15430[(7)] = inst_15383);

return statearr_15430;
})();
var statearr_15432_18193 = state_15408__$1;
(statearr_15432_18193[(2)] = null);

(statearr_15432_18193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (5))){
var inst_15383 = (state_15408[(7)]);
var state_15408__$1 = state_15408;
var statearr_15433_18194 = state_15408__$1;
(statearr_15433_18194[(2)] = inst_15383);

(statearr_15433_18194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (10))){
var inst_15402 = (state_15408[(2)]);
var state_15408__$1 = state_15408;
var statearr_15435_18195 = state_15408__$1;
(statearr_15435_18195[(2)] = inst_15402);

(statearr_15435_18195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (8))){
var inst_15394 = (state_15408[(9)]);
var inst_15398 = cljs.core.deref(inst_15394);
var state_15408__$1 = state_15408;
var statearr_15436_18208 = state_15408__$1;
(statearr_15436_18208[(2)] = inst_15398);

(statearr_15436_18208[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13825__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13825__auto____0 = (function (){
var statearr_15437 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15437[(0)] = cljs$core$async$reduce_$_state_machine__13825__auto__);

(statearr_15437[(1)] = (1));

return statearr_15437;
});
var cljs$core$async$reduce_$_state_machine__13825__auto____1 = (function (state_15408){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_15408);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e15439){var ex__13828__auto__ = e15439;
var statearr_15440_18213 = state_15408;
(statearr_15440_18213[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_15408[(4)]))){
var statearr_15443_18214 = state_15408;
(statearr_15443_18214[(1)] = cljs.core.first((state_15408[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18215 = state_15408;
state_15408 = G__18215;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13825__auto__ = function(state_15408){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13825__auto____1.call(this,state_15408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13825__auto____0;
cljs$core$async$reduce_$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13825__auto____1;
return cljs$core$async$reduce_$_state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_15445 = f__14490__auto__();
(statearr_15445[(6)] = c__14489__auto__);

return statearr_15445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));

return c__14489__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14489__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_15463){
var state_val_15464 = (state_15463[(1)]);
if((state_val_15464 === (1))){
var inst_15458 = cljs.core.async.reduce(f__$1,init,ch);
var state_15463__$1 = state_15463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15463__$1,(2),inst_15458);
} else {
if((state_val_15464 === (2))){
var inst_15460 = (state_15463[(2)]);
var inst_15461 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15460) : f__$1.call(null,inst_15460));
var state_15463__$1 = state_15463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15463__$1,inst_15461);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13825__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13825__auto____0 = (function (){
var statearr_15474 = [null,null,null,null,null,null,null];
(statearr_15474[(0)] = cljs$core$async$transduce_$_state_machine__13825__auto__);

(statearr_15474[(1)] = (1));

return statearr_15474;
});
var cljs$core$async$transduce_$_state_machine__13825__auto____1 = (function (state_15463){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_15463);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e15475){var ex__13828__auto__ = e15475;
var statearr_15476_18229 = state_15463;
(statearr_15476_18229[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_15463[(4)]))){
var statearr_15477_18230 = state_15463;
(statearr_15477_18230[(1)] = cljs.core.first((state_15463[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18240 = state_15463;
state_15463 = G__18240;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13825__auto__ = function(state_15463){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13825__auto____1.call(this,state_15463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13825__auto____0;
cljs$core$async$transduce_$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13825__auto____1;
return cljs$core$async$transduce_$_state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_15485 = f__14490__auto__();
(statearr_15485[(6)] = c__14489__auto__);

return statearr_15485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));

return c__14489__auto__;
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
var G__15494 = arguments.length;
switch (G__15494) {
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
var c__14489__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_15528){
var state_val_15529 = (state_15528[(1)]);
if((state_val_15529 === (7))){
var inst_15510 = (state_15528[(2)]);
var state_15528__$1 = state_15528;
var statearr_15530_18251 = state_15528__$1;
(statearr_15530_18251[(2)] = inst_15510);

(statearr_15530_18251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (1))){
var inst_15504 = cljs.core.seq(coll);
var inst_15505 = inst_15504;
var state_15528__$1 = (function (){var statearr_15532 = state_15528;
(statearr_15532[(7)] = inst_15505);

return statearr_15532;
})();
var statearr_15533_18252 = state_15528__$1;
(statearr_15533_18252[(2)] = null);

(statearr_15533_18252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (4))){
var inst_15505 = (state_15528[(7)]);
var inst_15508 = cljs.core.first(inst_15505);
var state_15528__$1 = state_15528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15528__$1,(7),ch,inst_15508);
} else {
if((state_val_15529 === (13))){
var inst_15522 = (state_15528[(2)]);
var state_15528__$1 = state_15528;
var statearr_15537_18253 = state_15528__$1;
(statearr_15537_18253[(2)] = inst_15522);

(statearr_15537_18253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (6))){
var inst_15513 = (state_15528[(2)]);
var state_15528__$1 = state_15528;
if(cljs.core.truth_(inst_15513)){
var statearr_15538_18254 = state_15528__$1;
(statearr_15538_18254[(1)] = (8));

} else {
var statearr_15540_18255 = state_15528__$1;
(statearr_15540_18255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (3))){
var inst_15526 = (state_15528[(2)]);
var state_15528__$1 = state_15528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15528__$1,inst_15526);
} else {
if((state_val_15529 === (12))){
var state_15528__$1 = state_15528;
var statearr_15542_18256 = state_15528__$1;
(statearr_15542_18256[(2)] = null);

(statearr_15542_18256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (2))){
var inst_15505 = (state_15528[(7)]);
var state_15528__$1 = state_15528;
if(cljs.core.truth_(inst_15505)){
var statearr_15545_18257 = state_15528__$1;
(statearr_15545_18257[(1)] = (4));

} else {
var statearr_15547_18258 = state_15528__$1;
(statearr_15547_18258[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (11))){
var inst_15519 = cljs.core.async.close_BANG_(ch);
var state_15528__$1 = state_15528;
var statearr_15548_18259 = state_15528__$1;
(statearr_15548_18259[(2)] = inst_15519);

(statearr_15548_18259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (9))){
var state_15528__$1 = state_15528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15553_18260 = state_15528__$1;
(statearr_15553_18260[(1)] = (11));

} else {
var statearr_15554_18261 = state_15528__$1;
(statearr_15554_18261[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (5))){
var inst_15505 = (state_15528[(7)]);
var state_15528__$1 = state_15528;
var statearr_15557_18265 = state_15528__$1;
(statearr_15557_18265[(2)] = inst_15505);

(statearr_15557_18265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (10))){
var inst_15524 = (state_15528[(2)]);
var state_15528__$1 = state_15528;
var statearr_15559_18266 = state_15528__$1;
(statearr_15559_18266[(2)] = inst_15524);

(statearr_15559_18266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (8))){
var inst_15505 = (state_15528[(7)]);
var inst_15515 = cljs.core.next(inst_15505);
var inst_15505__$1 = inst_15515;
var state_15528__$1 = (function (){var statearr_15560 = state_15528;
(statearr_15560[(7)] = inst_15505__$1);

return statearr_15560;
})();
var statearr_15561_18267 = state_15528__$1;
(statearr_15561_18267[(2)] = null);

(statearr_15561_18267[(1)] = (2));


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
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_15563 = [null,null,null,null,null,null,null,null];
(statearr_15563[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_15563[(1)] = (1));

return statearr_15563;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_15528){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_15528);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e15566){var ex__13828__auto__ = e15566;
var statearr_15568_18268 = state_15528;
(statearr_15568_18268[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_15528[(4)]))){
var statearr_15569_18269 = state_15528;
(statearr_15569_18269[(1)] = cljs.core.first((state_15528[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18274 = state_15528;
state_15528 = G__18274;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_15528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_15528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_15571 = f__14490__auto__();
(statearr_15571[(6)] = c__14489__auto__);

return statearr_15571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));

return c__14489__auto__;
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
var G__15578 = arguments.length;
switch (G__15578) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18286 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18286(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18294 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18294(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18295 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18295(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18297 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18297(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15622 = (function (ch,cs,meta15623){
this.ch = ch;
this.cs = cs;
this.meta15623 = meta15623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15624,meta15623__$1){
var self__ = this;
var _15624__$1 = this;
return (new cljs.core.async.t_cljs$core$async15622(self__.ch,self__.cs,meta15623__$1));
}));

(cljs.core.async.t_cljs$core$async15622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15624){
var self__ = this;
var _15624__$1 = this;
return self__.meta15623;
}));

(cljs.core.async.t_cljs$core$async15622.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15622.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15622.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15622.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15622.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15623","meta15623",-953659172,null)], null);
}));

(cljs.core.async.t_cljs$core$async15622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15622");

(cljs.core.async.t_cljs$core$async15622.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15622.
 */
cljs.core.async.__GT_t_cljs$core$async15622 = (function cljs$core$async$__GT_t_cljs$core$async15622(ch,cs,meta15623){
return (new cljs.core.async.t_cljs$core$async15622(ch,cs,meta15623));
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
var m = (new cljs.core.async.t_cljs$core$async15622(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14489__auto___18307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_15804){
var state_val_15806 = (state_15804[(1)]);
if((state_val_15806 === (7))){
var inst_15797 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15812_18309 = state_15804__$1;
(statearr_15812_18309[(2)] = inst_15797);

(statearr_15812_18309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (20))){
var inst_15682 = (state_15804[(7)]);
var inst_15698 = cljs.core.first(inst_15682);
var inst_15699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15698,(0),null);
var inst_15700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15698,(1),null);
var state_15804__$1 = (function (){var statearr_15817 = state_15804;
(statearr_15817[(8)] = inst_15699);

return statearr_15817;
})();
if(cljs.core.truth_(inst_15700)){
var statearr_15818_18310 = state_15804__$1;
(statearr_15818_18310[(1)] = (22));

} else {
var statearr_15819_18311 = state_15804__$1;
(statearr_15819_18311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (27))){
var inst_15734 = (state_15804[(9)]);
var inst_15736 = (state_15804[(10)]);
var inst_15742 = (state_15804[(11)]);
var inst_15646 = (state_15804[(12)]);
var inst_15742__$1 = cljs.core._nth(inst_15734,inst_15736);
var inst_15743 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15742__$1,inst_15646,done);
var state_15804__$1 = (function (){var statearr_15824 = state_15804;
(statearr_15824[(11)] = inst_15742__$1);

return statearr_15824;
})();
if(cljs.core.truth_(inst_15743)){
var statearr_15826_18315 = state_15804__$1;
(statearr_15826_18315[(1)] = (30));

} else {
var statearr_15829_18316 = state_15804__$1;
(statearr_15829_18316[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (1))){
var state_15804__$1 = state_15804;
var statearr_15831_18317 = state_15804__$1;
(statearr_15831_18317[(2)] = null);

(statearr_15831_18317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (24))){
var inst_15682 = (state_15804[(7)]);
var inst_15705 = (state_15804[(2)]);
var inst_15707 = cljs.core.next(inst_15682);
var inst_15656 = inst_15707;
var inst_15657 = null;
var inst_15658 = (0);
var inst_15659 = (0);
var state_15804__$1 = (function (){var statearr_15835 = state_15804;
(statearr_15835[(13)] = inst_15705);

(statearr_15835[(14)] = inst_15656);

(statearr_15835[(15)] = inst_15657);

(statearr_15835[(16)] = inst_15658);

(statearr_15835[(17)] = inst_15659);

return statearr_15835;
})();
var statearr_15836_18318 = state_15804__$1;
(statearr_15836_18318[(2)] = null);

(statearr_15836_18318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (39))){
var state_15804__$1 = state_15804;
var statearr_15843_18319 = state_15804__$1;
(statearr_15843_18319[(2)] = null);

(statearr_15843_18319[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (4))){
var inst_15646 = (state_15804[(12)]);
var inst_15646__$1 = (state_15804[(2)]);
var inst_15647 = (inst_15646__$1 == null);
var state_15804__$1 = (function (){var statearr_15845 = state_15804;
(statearr_15845[(12)] = inst_15646__$1);

return statearr_15845;
})();
if(cljs.core.truth_(inst_15647)){
var statearr_15846_18321 = state_15804__$1;
(statearr_15846_18321[(1)] = (5));

} else {
var statearr_15848_18322 = state_15804__$1;
(statearr_15848_18322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (15))){
var inst_15659 = (state_15804[(17)]);
var inst_15656 = (state_15804[(14)]);
var inst_15657 = (state_15804[(15)]);
var inst_15658 = (state_15804[(16)]);
var inst_15678 = (state_15804[(2)]);
var inst_15679 = (inst_15659 + (1));
var tmp15838 = inst_15656;
var tmp15839 = inst_15658;
var tmp15840 = inst_15657;
var inst_15656__$1 = tmp15838;
var inst_15657__$1 = tmp15840;
var inst_15658__$1 = tmp15839;
var inst_15659__$1 = inst_15679;
var state_15804__$1 = (function (){var statearr_15852 = state_15804;
(statearr_15852[(18)] = inst_15678);

(statearr_15852[(14)] = inst_15656__$1);

(statearr_15852[(15)] = inst_15657__$1);

(statearr_15852[(16)] = inst_15658__$1);

(statearr_15852[(17)] = inst_15659__$1);

return statearr_15852;
})();
var statearr_15853_18323 = state_15804__$1;
(statearr_15853_18323[(2)] = null);

(statearr_15853_18323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (21))){
var inst_15711 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15862_18324 = state_15804__$1;
(statearr_15862_18324[(2)] = inst_15711);

(statearr_15862_18324[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (31))){
var inst_15742 = (state_15804[(11)]);
var inst_15746 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15742);
var state_15804__$1 = state_15804;
var statearr_15867_18329 = state_15804__$1;
(statearr_15867_18329[(2)] = inst_15746);

(statearr_15867_18329[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (32))){
var inst_15736 = (state_15804[(10)]);
var inst_15733 = (state_15804[(19)]);
var inst_15734 = (state_15804[(9)]);
var inst_15735 = (state_15804[(20)]);
var inst_15748 = (state_15804[(2)]);
var inst_15749 = (inst_15736 + (1));
var tmp15855 = inst_15734;
var tmp15856 = inst_15733;
var tmp15858 = inst_15735;
var inst_15733__$1 = tmp15856;
var inst_15734__$1 = tmp15855;
var inst_15735__$1 = tmp15858;
var inst_15736__$1 = inst_15749;
var state_15804__$1 = (function (){var statearr_15869 = state_15804;
(statearr_15869[(21)] = inst_15748);

(statearr_15869[(19)] = inst_15733__$1);

(statearr_15869[(9)] = inst_15734__$1);

(statearr_15869[(20)] = inst_15735__$1);

(statearr_15869[(10)] = inst_15736__$1);

return statearr_15869;
})();
var statearr_15871_18333 = state_15804__$1;
(statearr_15871_18333[(2)] = null);

(statearr_15871_18333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (40))){
var inst_15769 = (state_15804[(22)]);
var inst_15773 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15769);
var state_15804__$1 = state_15804;
var statearr_15875_18335 = state_15804__$1;
(statearr_15875_18335[(2)] = inst_15773);

(statearr_15875_18335[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (33))){
var inst_15756 = (state_15804[(23)]);
var inst_15761 = cljs.core.chunked_seq_QMARK_(inst_15756);
var state_15804__$1 = state_15804;
if(inst_15761){
var statearr_15877_18339 = state_15804__$1;
(statearr_15877_18339[(1)] = (36));

} else {
var statearr_15878_18341 = state_15804__$1;
(statearr_15878_18341[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (13))){
var inst_15670 = (state_15804[(24)]);
var inst_15675 = cljs.core.async.close_BANG_(inst_15670);
var state_15804__$1 = state_15804;
var statearr_15882_18343 = state_15804__$1;
(statearr_15882_18343[(2)] = inst_15675);

(statearr_15882_18343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (22))){
var inst_15699 = (state_15804[(8)]);
var inst_15702 = cljs.core.async.close_BANG_(inst_15699);
var state_15804__$1 = state_15804;
var statearr_15884_18344 = state_15804__$1;
(statearr_15884_18344[(2)] = inst_15702);

(statearr_15884_18344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (36))){
var inst_15756 = (state_15804[(23)]);
var inst_15763 = cljs.core.chunk_first(inst_15756);
var inst_15764 = cljs.core.chunk_rest(inst_15756);
var inst_15766 = cljs.core.count(inst_15763);
var inst_15733 = inst_15764;
var inst_15734 = inst_15763;
var inst_15735 = inst_15766;
var inst_15736 = (0);
var state_15804__$1 = (function (){var statearr_15888 = state_15804;
(statearr_15888[(19)] = inst_15733);

(statearr_15888[(9)] = inst_15734);

(statearr_15888[(20)] = inst_15735);

(statearr_15888[(10)] = inst_15736);

return statearr_15888;
})();
var statearr_15890_18346 = state_15804__$1;
(statearr_15890_18346[(2)] = null);

(statearr_15890_18346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (41))){
var inst_15756 = (state_15804[(23)]);
var inst_15775 = (state_15804[(2)]);
var inst_15777 = cljs.core.next(inst_15756);
var inst_15733 = inst_15777;
var inst_15734 = null;
var inst_15735 = (0);
var inst_15736 = (0);
var state_15804__$1 = (function (){var statearr_15892 = state_15804;
(statearr_15892[(25)] = inst_15775);

(statearr_15892[(19)] = inst_15733);

(statearr_15892[(9)] = inst_15734);

(statearr_15892[(20)] = inst_15735);

(statearr_15892[(10)] = inst_15736);

return statearr_15892;
})();
var statearr_15893_18351 = state_15804__$1;
(statearr_15893_18351[(2)] = null);

(statearr_15893_18351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (43))){
var state_15804__$1 = state_15804;
var statearr_15897_18352 = state_15804__$1;
(statearr_15897_18352[(2)] = null);

(statearr_15897_18352[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (29))){
var inst_15785 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15900_18353 = state_15804__$1;
(statearr_15900_18353[(2)] = inst_15785);

(statearr_15900_18353[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (44))){
var inst_15794 = (state_15804[(2)]);
var state_15804__$1 = (function (){var statearr_15901 = state_15804;
(statearr_15901[(26)] = inst_15794);

return statearr_15901;
})();
var statearr_15903_18354 = state_15804__$1;
(statearr_15903_18354[(2)] = null);

(statearr_15903_18354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (6))){
var inst_15723 = (state_15804[(27)]);
var inst_15722 = cljs.core.deref(cs);
var inst_15723__$1 = cljs.core.keys(inst_15722);
var inst_15725 = cljs.core.count(inst_15723__$1);
var inst_15726 = cljs.core.reset_BANG_(dctr,inst_15725);
var inst_15732 = cljs.core.seq(inst_15723__$1);
var inst_15733 = inst_15732;
var inst_15734 = null;
var inst_15735 = (0);
var inst_15736 = (0);
var state_15804__$1 = (function (){var statearr_15907 = state_15804;
(statearr_15907[(27)] = inst_15723__$1);

(statearr_15907[(28)] = inst_15726);

(statearr_15907[(19)] = inst_15733);

(statearr_15907[(9)] = inst_15734);

(statearr_15907[(20)] = inst_15735);

(statearr_15907[(10)] = inst_15736);

return statearr_15907;
})();
var statearr_15909_18358 = state_15804__$1;
(statearr_15909_18358[(2)] = null);

(statearr_15909_18358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (28))){
var inst_15733 = (state_15804[(19)]);
var inst_15756 = (state_15804[(23)]);
var inst_15756__$1 = cljs.core.seq(inst_15733);
var state_15804__$1 = (function (){var statearr_15915 = state_15804;
(statearr_15915[(23)] = inst_15756__$1);

return statearr_15915;
})();
if(inst_15756__$1){
var statearr_15917_18360 = state_15804__$1;
(statearr_15917_18360[(1)] = (33));

} else {
var statearr_15918_18363 = state_15804__$1;
(statearr_15918_18363[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (25))){
var inst_15736 = (state_15804[(10)]);
var inst_15735 = (state_15804[(20)]);
var inst_15738 = (inst_15736 < inst_15735);
var inst_15739 = inst_15738;
var state_15804__$1 = state_15804;
if(cljs.core.truth_(inst_15739)){
var statearr_15923_18368 = state_15804__$1;
(statearr_15923_18368[(1)] = (27));

} else {
var statearr_15924_18369 = state_15804__$1;
(statearr_15924_18369[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (34))){
var state_15804__$1 = state_15804;
var statearr_15927_18370 = state_15804__$1;
(statearr_15927_18370[(2)] = null);

(statearr_15927_18370[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (17))){
var state_15804__$1 = state_15804;
var statearr_15929_18371 = state_15804__$1;
(statearr_15929_18371[(2)] = null);

(statearr_15929_18371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (3))){
var inst_15799 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15804__$1,inst_15799);
} else {
if((state_val_15806 === (12))){
var inst_15716 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15931_18374 = state_15804__$1;
(statearr_15931_18374[(2)] = inst_15716);

(statearr_15931_18374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (2))){
var state_15804__$1 = state_15804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15804__$1,(4),ch);
} else {
if((state_val_15806 === (23))){
var state_15804__$1 = state_15804;
var statearr_15939_18375 = state_15804__$1;
(statearr_15939_18375[(2)] = null);

(statearr_15939_18375[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (35))){
var inst_15783 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15940_18376 = state_15804__$1;
(statearr_15940_18376[(2)] = inst_15783);

(statearr_15940_18376[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (19))){
var inst_15682 = (state_15804[(7)]);
var inst_15688 = cljs.core.chunk_first(inst_15682);
var inst_15689 = cljs.core.chunk_rest(inst_15682);
var inst_15691 = cljs.core.count(inst_15688);
var inst_15656 = inst_15689;
var inst_15657 = inst_15688;
var inst_15658 = inst_15691;
var inst_15659 = (0);
var state_15804__$1 = (function (){var statearr_15946 = state_15804;
(statearr_15946[(14)] = inst_15656);

(statearr_15946[(15)] = inst_15657);

(statearr_15946[(16)] = inst_15658);

(statearr_15946[(17)] = inst_15659);

return statearr_15946;
})();
var statearr_15949_18385 = state_15804__$1;
(statearr_15949_18385[(2)] = null);

(statearr_15949_18385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (11))){
var inst_15656 = (state_15804[(14)]);
var inst_15682 = (state_15804[(7)]);
var inst_15682__$1 = cljs.core.seq(inst_15656);
var state_15804__$1 = (function (){var statearr_15951 = state_15804;
(statearr_15951[(7)] = inst_15682__$1);

return statearr_15951;
})();
if(inst_15682__$1){
var statearr_15952_18392 = state_15804__$1;
(statearr_15952_18392[(1)] = (16));

} else {
var statearr_15953_18395 = state_15804__$1;
(statearr_15953_18395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (9))){
var inst_15718 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15956_18402 = state_15804__$1;
(statearr_15956_18402[(2)] = inst_15718);

(statearr_15956_18402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (5))){
var inst_15653 = cljs.core.deref(cs);
var inst_15655 = cljs.core.seq(inst_15653);
var inst_15656 = inst_15655;
var inst_15657 = null;
var inst_15658 = (0);
var inst_15659 = (0);
var state_15804__$1 = (function (){var statearr_15958 = state_15804;
(statearr_15958[(14)] = inst_15656);

(statearr_15958[(15)] = inst_15657);

(statearr_15958[(16)] = inst_15658);

(statearr_15958[(17)] = inst_15659);

return statearr_15958;
})();
var statearr_15960_18414 = state_15804__$1;
(statearr_15960_18414[(2)] = null);

(statearr_15960_18414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (14))){
var state_15804__$1 = state_15804;
var statearr_15961_18417 = state_15804__$1;
(statearr_15961_18417[(2)] = null);

(statearr_15961_18417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (45))){
var inst_15791 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15966_18423 = state_15804__$1;
(statearr_15966_18423[(2)] = inst_15791);

(statearr_15966_18423[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (26))){
var inst_15723 = (state_15804[(27)]);
var inst_15787 = (state_15804[(2)]);
var inst_15788 = cljs.core.seq(inst_15723);
var state_15804__$1 = (function (){var statearr_15968 = state_15804;
(statearr_15968[(29)] = inst_15787);

return statearr_15968;
})();
if(inst_15788){
var statearr_15969_18432 = state_15804__$1;
(statearr_15969_18432[(1)] = (42));

} else {
var statearr_15970_18433 = state_15804__$1;
(statearr_15970_18433[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (16))){
var inst_15682 = (state_15804[(7)]);
var inst_15685 = cljs.core.chunked_seq_QMARK_(inst_15682);
var state_15804__$1 = state_15804;
if(inst_15685){
var statearr_15975_18434 = state_15804__$1;
(statearr_15975_18434[(1)] = (19));

} else {
var statearr_15978_18435 = state_15804__$1;
(statearr_15978_18435[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (38))){
var inst_15780 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15980_18436 = state_15804__$1;
(statearr_15980_18436[(2)] = inst_15780);

(statearr_15980_18436[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (30))){
var state_15804__$1 = state_15804;
var statearr_15982_18437 = state_15804__$1;
(statearr_15982_18437[(2)] = null);

(statearr_15982_18437[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (10))){
var inst_15657 = (state_15804[(15)]);
var inst_15659 = (state_15804[(17)]);
var inst_15667 = cljs.core._nth(inst_15657,inst_15659);
var inst_15670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15667,(0),null);
var inst_15672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15667,(1),null);
var state_15804__$1 = (function (){var statearr_15986 = state_15804;
(statearr_15986[(24)] = inst_15670);

return statearr_15986;
})();
if(cljs.core.truth_(inst_15672)){
var statearr_15987_18440 = state_15804__$1;
(statearr_15987_18440[(1)] = (13));

} else {
var statearr_15988_18441 = state_15804__$1;
(statearr_15988_18441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (18))){
var inst_15714 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15990_18442 = state_15804__$1;
(statearr_15990_18442[(2)] = inst_15714);

(statearr_15990_18442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (42))){
var state_15804__$1 = state_15804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15804__$1,(45),dchan);
} else {
if((state_val_15806 === (37))){
var inst_15756 = (state_15804[(23)]);
var inst_15769 = (state_15804[(22)]);
var inst_15646 = (state_15804[(12)]);
var inst_15769__$1 = cljs.core.first(inst_15756);
var inst_15770 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15769__$1,inst_15646,done);
var state_15804__$1 = (function (){var statearr_15996 = state_15804;
(statearr_15996[(22)] = inst_15769__$1);

return statearr_15996;
})();
if(cljs.core.truth_(inst_15770)){
var statearr_15999_18443 = state_15804__$1;
(statearr_15999_18443[(1)] = (39));

} else {
var statearr_16000_18444 = state_15804__$1;
(statearr_16000_18444[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (8))){
var inst_15659 = (state_15804[(17)]);
var inst_15658 = (state_15804[(16)]);
var inst_15661 = (inst_15659 < inst_15658);
var inst_15662 = inst_15661;
var state_15804__$1 = state_15804;
if(cljs.core.truth_(inst_15662)){
var statearr_16006_18445 = state_15804__$1;
(statearr_16006_18445[(1)] = (10));

} else {
var statearr_16007_18446 = state_15804__$1;
(statearr_16007_18446[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13825__auto__ = null;
var cljs$core$async$mult_$_state_machine__13825__auto____0 = (function (){
var statearr_16011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16011[(0)] = cljs$core$async$mult_$_state_machine__13825__auto__);

(statearr_16011[(1)] = (1));

return statearr_16011;
});
var cljs$core$async$mult_$_state_machine__13825__auto____1 = (function (state_15804){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_15804);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e16013){var ex__13828__auto__ = e16013;
var statearr_16014_18451 = state_15804;
(statearr_16014_18451[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_15804[(4)]))){
var statearr_16016_18452 = state_15804;
(statearr_16016_18452[(1)] = cljs.core.first((state_15804[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18453 = state_15804;
state_15804 = G__18453;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13825__auto__ = function(state_15804){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13825__auto____1.call(this,state_15804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13825__auto____0;
cljs$core$async$mult_$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13825__auto____1;
return cljs$core$async$mult_$_state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_16018 = f__14490__auto__();
(statearr_16018[(6)] = c__14489__auto___18307);

return statearr_16018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
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
var G__16025 = arguments.length;
switch (G__16025) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18469 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18469(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18472 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18472(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18473 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18473(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18486 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18486(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18491 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18491(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___18498 = arguments.length;
var i__5750__auto___18499 = (0);
while(true){
if((i__5750__auto___18499 < len__5749__auto___18498)){
args__5755__auto__.push((arguments[i__5750__auto___18499]));

var G__18500 = (i__5750__auto___18499 + (1));
i__5750__auto___18499 = G__18500;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16100){
var map__16101 = p__16100;
var map__16101__$1 = cljs.core.__destructure_map(map__16101);
var opts = map__16101__$1;
var statearr_16102_18503 = state;
(statearr_16102_18503[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16103_18504 = state;
(statearr_16103_18504[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16104_18505 = state;
(statearr_16104_18505[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16092){
var G__16093 = cljs.core.first(seq16092);
var seq16092__$1 = cljs.core.next(seq16092);
var G__16094 = cljs.core.first(seq16092__$1);
var seq16092__$2 = cljs.core.next(seq16092__$1);
var G__16095 = cljs.core.first(seq16092__$2);
var seq16092__$3 = cljs.core.next(seq16092__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16093,G__16094,G__16095,seq16092__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16130 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16131){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16131 = meta16131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16132,meta16131__$1){
var self__ = this;
var _16132__$1 = this;
return (new cljs.core.async.t_cljs$core$async16130(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16131__$1));
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16132){
var self__ = this;
var _16132__$1 = this;
return self__.meta16131;
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16131","meta16131",-1630893665,null)], null);
}));

(cljs.core.async.t_cljs$core$async16130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16130");

(cljs.core.async.t_cljs$core$async16130.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16130.
 */
cljs.core.async.__GT_t_cljs$core$async16130 = (function cljs$core$async$__GT_t_cljs$core$async16130(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16131){
return (new cljs.core.async.t_cljs$core$async16130(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16131));
});


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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16130(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14489__auto___18549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_16240){
var state_val_16241 = (state_16240[(1)]);
if((state_val_16241 === (7))){
var inst_16194 = (state_16240[(2)]);
var state_16240__$1 = state_16240;
if(cljs.core.truth_(inst_16194)){
var statearr_16252_18551 = state_16240__$1;
(statearr_16252_18551[(1)] = (8));

} else {
var statearr_16253_18552 = state_16240__$1;
(statearr_16253_18552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (20))){
var inst_16185 = (state_16240[(7)]);
var state_16240__$1 = state_16240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16240__$1,(23),out,inst_16185);
} else {
if((state_val_16241 === (1))){
var inst_16165 = calc_state();
var inst_16166 = cljs.core.__destructure_map(inst_16165);
var inst_16167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16166,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16166,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16166,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16170 = inst_16165;
var state_16240__$1 = (function (){var statearr_16256 = state_16240;
(statearr_16256[(8)] = inst_16167);

(statearr_16256[(9)] = inst_16168);

(statearr_16256[(10)] = inst_16169);

(statearr_16256[(11)] = inst_16170);

return statearr_16256;
})();
var statearr_16257_18553 = state_16240__$1;
(statearr_16257_18553[(2)] = null);

(statearr_16257_18553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (24))){
var inst_16173 = (state_16240[(12)]);
var inst_16170 = inst_16173;
var state_16240__$1 = (function (){var statearr_16259 = state_16240;
(statearr_16259[(11)] = inst_16170);

return statearr_16259;
})();
var statearr_16260_18555 = state_16240__$1;
(statearr_16260_18555[(2)] = null);

(statearr_16260_18555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (4))){
var inst_16185 = (state_16240[(7)]);
var inst_16189 = (state_16240[(13)]);
var inst_16184 = (state_16240[(2)]);
var inst_16185__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16184,(0),null);
var inst_16187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16184,(1),null);
var inst_16189__$1 = (inst_16185__$1 == null);
var state_16240__$1 = (function (){var statearr_16268 = state_16240;
(statearr_16268[(7)] = inst_16185__$1);

(statearr_16268[(14)] = inst_16187);

(statearr_16268[(13)] = inst_16189__$1);

return statearr_16268;
})();
if(cljs.core.truth_(inst_16189__$1)){
var statearr_16270_18556 = state_16240__$1;
(statearr_16270_18556[(1)] = (5));

} else {
var statearr_16271_18557 = state_16240__$1;
(statearr_16271_18557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (15))){
var inst_16174 = (state_16240[(15)]);
var inst_16211 = (state_16240[(16)]);
var inst_16211__$1 = cljs.core.empty_QMARK_(inst_16174);
var state_16240__$1 = (function (){var statearr_16272 = state_16240;
(statearr_16272[(16)] = inst_16211__$1);

return statearr_16272;
})();
if(inst_16211__$1){
var statearr_16273_18561 = state_16240__$1;
(statearr_16273_18561[(1)] = (17));

} else {
var statearr_16274_18562 = state_16240__$1;
(statearr_16274_18562[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (21))){
var inst_16173 = (state_16240[(12)]);
var inst_16170 = inst_16173;
var state_16240__$1 = (function (){var statearr_16278 = state_16240;
(statearr_16278[(11)] = inst_16170);

return statearr_16278;
})();
var statearr_16281_18563 = state_16240__$1;
(statearr_16281_18563[(2)] = null);

(statearr_16281_18563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (13))){
var inst_16201 = (state_16240[(2)]);
var inst_16202 = calc_state();
var inst_16170 = inst_16202;
var state_16240__$1 = (function (){var statearr_16284 = state_16240;
(statearr_16284[(17)] = inst_16201);

(statearr_16284[(11)] = inst_16170);

return statearr_16284;
})();
var statearr_16289_18564 = state_16240__$1;
(statearr_16289_18564[(2)] = null);

(statearr_16289_18564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (22))){
var inst_16234 = (state_16240[(2)]);
var state_16240__$1 = state_16240;
var statearr_16291_18565 = state_16240__$1;
(statearr_16291_18565[(2)] = inst_16234);

(statearr_16291_18565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (6))){
var inst_16187 = (state_16240[(14)]);
var inst_16192 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16187,change);
var state_16240__$1 = state_16240;
var statearr_16293_18566 = state_16240__$1;
(statearr_16293_18566[(2)] = inst_16192);

(statearr_16293_18566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (25))){
var state_16240__$1 = state_16240;
var statearr_16295_18567 = state_16240__$1;
(statearr_16295_18567[(2)] = null);

(statearr_16295_18567[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (17))){
var inst_16175 = (state_16240[(18)]);
var inst_16187 = (state_16240[(14)]);
var inst_16213 = (inst_16175.cljs$core$IFn$_invoke$arity$1 ? inst_16175.cljs$core$IFn$_invoke$arity$1(inst_16187) : inst_16175.call(null,inst_16187));
var inst_16214 = cljs.core.not(inst_16213);
var state_16240__$1 = state_16240;
var statearr_16300_18569 = state_16240__$1;
(statearr_16300_18569[(2)] = inst_16214);

(statearr_16300_18569[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (3))){
var inst_16238 = (state_16240[(2)]);
var state_16240__$1 = state_16240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16240__$1,inst_16238);
} else {
if((state_val_16241 === (12))){
var state_16240__$1 = state_16240;
var statearr_16304_18571 = state_16240__$1;
(statearr_16304_18571[(2)] = null);

(statearr_16304_18571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (2))){
var inst_16170 = (state_16240[(11)]);
var inst_16173 = (state_16240[(12)]);
var inst_16173__$1 = cljs.core.__destructure_map(inst_16170);
var inst_16174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16173__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16173__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16173__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16240__$1 = (function (){var statearr_16310 = state_16240;
(statearr_16310[(12)] = inst_16173__$1);

(statearr_16310[(15)] = inst_16174);

(statearr_16310[(18)] = inst_16175);

return statearr_16310;
})();
return cljs.core.async.ioc_alts_BANG_(state_16240__$1,(4),inst_16176);
} else {
if((state_val_16241 === (23))){
var inst_16224 = (state_16240[(2)]);
var state_16240__$1 = state_16240;
if(cljs.core.truth_(inst_16224)){
var statearr_16311_18578 = state_16240__$1;
(statearr_16311_18578[(1)] = (24));

} else {
var statearr_16312_18579 = state_16240__$1;
(statearr_16312_18579[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (19))){
var inst_16218 = (state_16240[(2)]);
var state_16240__$1 = state_16240;
var statearr_16313_18580 = state_16240__$1;
(statearr_16313_18580[(2)] = inst_16218);

(statearr_16313_18580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (11))){
var inst_16187 = (state_16240[(14)]);
var inst_16198 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16187);
var state_16240__$1 = state_16240;
var statearr_16318_18582 = state_16240__$1;
(statearr_16318_18582[(2)] = inst_16198);

(statearr_16318_18582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (9))){
var inst_16174 = (state_16240[(15)]);
var inst_16187 = (state_16240[(14)]);
var inst_16205 = (state_16240[(19)]);
var inst_16205__$1 = (inst_16174.cljs$core$IFn$_invoke$arity$1 ? inst_16174.cljs$core$IFn$_invoke$arity$1(inst_16187) : inst_16174.call(null,inst_16187));
var state_16240__$1 = (function (){var statearr_16327 = state_16240;
(statearr_16327[(19)] = inst_16205__$1);

return statearr_16327;
})();
if(cljs.core.truth_(inst_16205__$1)){
var statearr_16332_18583 = state_16240__$1;
(statearr_16332_18583[(1)] = (14));

} else {
var statearr_16333_18584 = state_16240__$1;
(statearr_16333_18584[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (5))){
var inst_16189 = (state_16240[(13)]);
var state_16240__$1 = state_16240;
var statearr_16341_18585 = state_16240__$1;
(statearr_16341_18585[(2)] = inst_16189);

(statearr_16341_18585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (14))){
var inst_16205 = (state_16240[(19)]);
var state_16240__$1 = state_16240;
var statearr_16343_18586 = state_16240__$1;
(statearr_16343_18586[(2)] = inst_16205);

(statearr_16343_18586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (26))){
var inst_16229 = (state_16240[(2)]);
var state_16240__$1 = state_16240;
var statearr_16344_18587 = state_16240__$1;
(statearr_16344_18587[(2)] = inst_16229);

(statearr_16344_18587[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (16))){
var inst_16220 = (state_16240[(2)]);
var state_16240__$1 = state_16240;
if(cljs.core.truth_(inst_16220)){
var statearr_16346_18588 = state_16240__$1;
(statearr_16346_18588[(1)] = (20));

} else {
var statearr_16348_18589 = state_16240__$1;
(statearr_16348_18589[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (10))){
var inst_16236 = (state_16240[(2)]);
var state_16240__$1 = state_16240;
var statearr_16354_18590 = state_16240__$1;
(statearr_16354_18590[(2)] = inst_16236);

(statearr_16354_18590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (18))){
var inst_16211 = (state_16240[(16)]);
var state_16240__$1 = state_16240;
var statearr_16355_18592 = state_16240__$1;
(statearr_16355_18592[(2)] = inst_16211);

(statearr_16355_18592[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16241 === (8))){
var inst_16185 = (state_16240[(7)]);
var inst_16196 = (inst_16185 == null);
var state_16240__$1 = state_16240;
if(cljs.core.truth_(inst_16196)){
var statearr_16357_18598 = state_16240__$1;
(statearr_16357_18598[(1)] = (11));

} else {
var statearr_16358_18599 = state_16240__$1;
(statearr_16358_18599[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__13825__auto__ = null;
var cljs$core$async$mix_$_state_machine__13825__auto____0 = (function (){
var statearr_16362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16362[(0)] = cljs$core$async$mix_$_state_machine__13825__auto__);

(statearr_16362[(1)] = (1));

return statearr_16362;
});
var cljs$core$async$mix_$_state_machine__13825__auto____1 = (function (state_16240){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_16240);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e16363){var ex__13828__auto__ = e16363;
var statearr_16364_18608 = state_16240;
(statearr_16364_18608[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_16240[(4)]))){
var statearr_16366_18609 = state_16240;
(statearr_16366_18609[(1)] = cljs.core.first((state_16240[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18610 = state_16240;
state_16240 = G__18610;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13825__auto__ = function(state_16240){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13825__auto____1.call(this,state_16240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13825__auto____0;
cljs$core$async$mix_$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13825__auto____1;
return cljs$core$async$mix_$_state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_16374 = f__14490__auto__();
(statearr_16374[(6)] = c__14489__auto___18549);

return statearr_16374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18616 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18616(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18617 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18617(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18626 = (function() {
var G__18631 = null;
var G__18631__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18631__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18631 = function(p,v){
switch(arguments.length){
case 1:
return G__18631__1.call(this,p);
case 2:
return G__18631__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18631.cljs$core$IFn$_invoke$arity$1 = G__18631__1;
G__18631.cljs$core$IFn$_invoke$arity$2 = G__18631__2;
return G__18631;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16412 = arguments.length;
switch (G__16412) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18626(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18626(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16436 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16437){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16437 = meta16437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16438,meta16437__$1){
var self__ = this;
var _16438__$1 = this;
return (new cljs.core.async.t_cljs$core$async16436(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16437__$1));
}));

(cljs.core.async.t_cljs$core$async16436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16438){
var self__ = this;
var _16438__$1 = this;
return self__.meta16437;
}));

(cljs.core.async.t_cljs$core$async16436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16436.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16436.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16436.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16437","meta16437",-397429485,null)], null);
}));

(cljs.core.async.t_cljs$core$async16436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16436");

(cljs.core.async.t_cljs$core$async16436.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16436.
 */
cljs.core.async.__GT_t_cljs$core$async16436 = (function cljs$core$async$__GT_t_cljs$core$async16436(ch,topic_fn,buf_fn,mults,ensure_mult,meta16437){
return (new cljs.core.async.t_cljs$core$async16436(ch,topic_fn,buf_fn,mults,ensure_mult,meta16437));
});


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
var G__16426 = arguments.length;
switch (G__16426) {
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
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16420_SHARP_){
if(cljs.core.truth_((p1__16420_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16420_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16420_SHARP_.call(null,topic)))){
return p1__16420_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16420_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16436(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14489__auto___18740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_16562){
var state_val_16563 = (state_16562[(1)]);
if((state_val_16563 === (7))){
var inst_16558 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
var statearr_16567_18741 = state_16562__$1;
(statearr_16567_18741[(2)] = inst_16558);

(statearr_16567_18741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (20))){
var state_16562__$1 = state_16562;
var statearr_16569_18742 = state_16562__$1;
(statearr_16569_18742[(2)] = null);

(statearr_16569_18742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (1))){
var state_16562__$1 = state_16562;
var statearr_16571_18743 = state_16562__$1;
(statearr_16571_18743[(2)] = null);

(statearr_16571_18743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (24))){
var inst_16538 = (state_16562[(7)]);
var inst_16550 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16538);
var state_16562__$1 = state_16562;
var statearr_16572_18744 = state_16562__$1;
(statearr_16572_18744[(2)] = inst_16550);

(statearr_16572_18744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (4))){
var inst_16468 = (state_16562[(8)]);
var inst_16468__$1 = (state_16562[(2)]);
var inst_16470 = (inst_16468__$1 == null);
var state_16562__$1 = (function (){var statearr_16573 = state_16562;
(statearr_16573[(8)] = inst_16468__$1);

return statearr_16573;
})();
if(cljs.core.truth_(inst_16470)){
var statearr_16574_18745 = state_16562__$1;
(statearr_16574_18745[(1)] = (5));

} else {
var statearr_16575_18746 = state_16562__$1;
(statearr_16575_18746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (15))){
var inst_16532 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
var statearr_16576_18751 = state_16562__$1;
(statearr_16576_18751[(2)] = inst_16532);

(statearr_16576_18751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (21))){
var inst_16555 = (state_16562[(2)]);
var state_16562__$1 = (function (){var statearr_16577 = state_16562;
(statearr_16577[(9)] = inst_16555);

return statearr_16577;
})();
var statearr_16578_18756 = state_16562__$1;
(statearr_16578_18756[(2)] = null);

(statearr_16578_18756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (13))){
var inst_16504 = (state_16562[(10)]);
var inst_16509 = cljs.core.chunked_seq_QMARK_(inst_16504);
var state_16562__$1 = state_16562;
if(inst_16509){
var statearr_16581_18760 = state_16562__$1;
(statearr_16581_18760[(1)] = (16));

} else {
var statearr_16582_18761 = state_16562__$1;
(statearr_16582_18761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (22))){
var inst_16547 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
if(cljs.core.truth_(inst_16547)){
var statearr_16587_18769 = state_16562__$1;
(statearr_16587_18769[(1)] = (23));

} else {
var statearr_16588_18770 = state_16562__$1;
(statearr_16588_18770[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (6))){
var inst_16468 = (state_16562[(8)]);
var inst_16538 = (state_16562[(7)]);
var inst_16541 = (state_16562[(11)]);
var inst_16538__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16468) : topic_fn.call(null,inst_16468));
var inst_16540 = cljs.core.deref(mults);
var inst_16541__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16540,inst_16538__$1);
var state_16562__$1 = (function (){var statearr_16591 = state_16562;
(statearr_16591[(7)] = inst_16538__$1);

(statearr_16591[(11)] = inst_16541__$1);

return statearr_16591;
})();
if(cljs.core.truth_(inst_16541__$1)){
var statearr_16593_18773 = state_16562__$1;
(statearr_16593_18773[(1)] = (19));

} else {
var statearr_16594_18774 = state_16562__$1;
(statearr_16594_18774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (25))){
var inst_16552 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
var statearr_16596_18781 = state_16562__$1;
(statearr_16596_18781[(2)] = inst_16552);

(statearr_16596_18781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (17))){
var inst_16504 = (state_16562[(10)]);
var inst_16519 = cljs.core.first(inst_16504);
var inst_16524 = cljs.core.async.muxch_STAR_(inst_16519);
var inst_16525 = cljs.core.async.close_BANG_(inst_16524);
var inst_16526 = cljs.core.next(inst_16504);
var inst_16485 = inst_16526;
var inst_16486 = null;
var inst_16487 = (0);
var inst_16488 = (0);
var state_16562__$1 = (function (){var statearr_16597 = state_16562;
(statearr_16597[(12)] = inst_16525);

(statearr_16597[(13)] = inst_16485);

(statearr_16597[(14)] = inst_16486);

(statearr_16597[(15)] = inst_16487);

(statearr_16597[(16)] = inst_16488);

return statearr_16597;
})();
var statearr_16600_18804 = state_16562__$1;
(statearr_16600_18804[(2)] = null);

(statearr_16600_18804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (3))){
var inst_16560 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16562__$1,inst_16560);
} else {
if((state_val_16563 === (12))){
var inst_16534 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
var statearr_16615_18812 = state_16562__$1;
(statearr_16615_18812[(2)] = inst_16534);

(statearr_16615_18812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (2))){
var state_16562__$1 = state_16562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16562__$1,(4),ch);
} else {
if((state_val_16563 === (23))){
var state_16562__$1 = state_16562;
var statearr_16627_18828 = state_16562__$1;
(statearr_16627_18828[(2)] = null);

(statearr_16627_18828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (19))){
var inst_16541 = (state_16562[(11)]);
var inst_16468 = (state_16562[(8)]);
var inst_16545 = cljs.core.async.muxch_STAR_(inst_16541);
var state_16562__$1 = state_16562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16562__$1,(22),inst_16545,inst_16468);
} else {
if((state_val_16563 === (11))){
var inst_16485 = (state_16562[(13)]);
var inst_16504 = (state_16562[(10)]);
var inst_16504__$1 = cljs.core.seq(inst_16485);
var state_16562__$1 = (function (){var statearr_16630 = state_16562;
(statearr_16630[(10)] = inst_16504__$1);

return statearr_16630;
})();
if(inst_16504__$1){
var statearr_16631_18839 = state_16562__$1;
(statearr_16631_18839[(1)] = (13));

} else {
var statearr_16632_18844 = state_16562__$1;
(statearr_16632_18844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (9))){
var inst_16536 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
var statearr_16635_18852 = state_16562__$1;
(statearr_16635_18852[(2)] = inst_16536);

(statearr_16635_18852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (5))){
var inst_16481 = cljs.core.deref(mults);
var inst_16482 = cljs.core.vals(inst_16481);
var inst_16483 = cljs.core.seq(inst_16482);
var inst_16485 = inst_16483;
var inst_16486 = null;
var inst_16487 = (0);
var inst_16488 = (0);
var state_16562__$1 = (function (){var statearr_16643 = state_16562;
(statearr_16643[(13)] = inst_16485);

(statearr_16643[(14)] = inst_16486);

(statearr_16643[(15)] = inst_16487);

(statearr_16643[(16)] = inst_16488);

return statearr_16643;
})();
var statearr_16647_18859 = state_16562__$1;
(statearr_16647_18859[(2)] = null);

(statearr_16647_18859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (14))){
var state_16562__$1 = state_16562;
var statearr_16651_18865 = state_16562__$1;
(statearr_16651_18865[(2)] = null);

(statearr_16651_18865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (16))){
var inst_16504 = (state_16562[(10)]);
var inst_16511 = cljs.core.chunk_first(inst_16504);
var inst_16512 = cljs.core.chunk_rest(inst_16504);
var inst_16513 = cljs.core.count(inst_16511);
var inst_16485 = inst_16512;
var inst_16486 = inst_16511;
var inst_16487 = inst_16513;
var inst_16488 = (0);
var state_16562__$1 = (function (){var statearr_16655 = state_16562;
(statearr_16655[(13)] = inst_16485);

(statearr_16655[(14)] = inst_16486);

(statearr_16655[(15)] = inst_16487);

(statearr_16655[(16)] = inst_16488);

return statearr_16655;
})();
var statearr_16656_18874 = state_16562__$1;
(statearr_16656_18874[(2)] = null);

(statearr_16656_18874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (10))){
var inst_16486 = (state_16562[(14)]);
var inst_16488 = (state_16562[(16)]);
var inst_16485 = (state_16562[(13)]);
var inst_16487 = (state_16562[(15)]);
var inst_16497 = cljs.core._nth(inst_16486,inst_16488);
var inst_16498 = cljs.core.async.muxch_STAR_(inst_16497);
var inst_16499 = cljs.core.async.close_BANG_(inst_16498);
var inst_16500 = (inst_16488 + (1));
var tmp16648 = inst_16485;
var tmp16649 = inst_16486;
var tmp16650 = inst_16487;
var inst_16485__$1 = tmp16648;
var inst_16486__$1 = tmp16649;
var inst_16487__$1 = tmp16650;
var inst_16488__$1 = inst_16500;
var state_16562__$1 = (function (){var statearr_16659 = state_16562;
(statearr_16659[(17)] = inst_16499);

(statearr_16659[(13)] = inst_16485__$1);

(statearr_16659[(14)] = inst_16486__$1);

(statearr_16659[(15)] = inst_16487__$1);

(statearr_16659[(16)] = inst_16488__$1);

return statearr_16659;
})();
var statearr_16660_18879 = state_16562__$1;
(statearr_16660_18879[(2)] = null);

(statearr_16660_18879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (18))){
var inst_16529 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
var statearr_16661_18880 = state_16562__$1;
(statearr_16661_18880[(2)] = inst_16529);

(statearr_16661_18880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (8))){
var inst_16488 = (state_16562[(16)]);
var inst_16487 = (state_16562[(15)]);
var inst_16492 = (inst_16488 < inst_16487);
var inst_16493 = inst_16492;
var state_16562__$1 = state_16562;
if(cljs.core.truth_(inst_16493)){
var statearr_16662_18883 = state_16562__$1;
(statearr_16662_18883[(1)] = (10));

} else {
var statearr_16663_18884 = state_16562__$1;
(statearr_16663_18884[(1)] = (11));

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
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_16669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16669[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_16669[(1)] = (1));

return statearr_16669;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_16562){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_16562);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e16672){var ex__13828__auto__ = e16672;
var statearr_16673_18887 = state_16562;
(statearr_16673_18887[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_16562[(4)]))){
var statearr_16675_18891 = state_16562;
(statearr_16675_18891[(1)] = cljs.core.first((state_16562[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18902 = state_16562;
state_16562 = G__18902;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_16562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_16562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_16678 = f__14490__auto__();
(statearr_16678[(6)] = c__14489__auto___18740);

return statearr_16678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
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
var G__16683 = arguments.length;
switch (G__16683) {
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
var G__16696 = arguments.length;
switch (G__16696) {
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
var G__16704 = arguments.length;
switch (G__16704) {
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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14489__auto___18956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_16760){
var state_val_16761 = (state_16760[(1)]);
if((state_val_16761 === (7))){
var state_16760__$1 = state_16760;
var statearr_16766_18959 = state_16760__$1;
(statearr_16766_18959[(2)] = null);

(statearr_16766_18959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (1))){
var state_16760__$1 = state_16760;
var statearr_16767_18962 = state_16760__$1;
(statearr_16767_18962[(2)] = null);

(statearr_16767_18962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (4))){
var inst_16714 = (state_16760[(7)]);
var inst_16713 = (state_16760[(8)]);
var inst_16716 = (inst_16714 < inst_16713);
var state_16760__$1 = state_16760;
if(cljs.core.truth_(inst_16716)){
var statearr_16770_18973 = state_16760__$1;
(statearr_16770_18973[(1)] = (6));

} else {
var statearr_16771_18976 = state_16760__$1;
(statearr_16771_18976[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (15))){
var inst_16746 = (state_16760[(9)]);
var inst_16751 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16746);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16760__$1,(17),out,inst_16751);
} else {
if((state_val_16761 === (13))){
var inst_16746 = (state_16760[(9)]);
var inst_16746__$1 = (state_16760[(2)]);
var inst_16747 = cljs.core.some(cljs.core.nil_QMARK_,inst_16746__$1);
var state_16760__$1 = (function (){var statearr_16774 = state_16760;
(statearr_16774[(9)] = inst_16746__$1);

return statearr_16774;
})();
if(cljs.core.truth_(inst_16747)){
var statearr_16775_18981 = state_16760__$1;
(statearr_16775_18981[(1)] = (14));

} else {
var statearr_16777_18983 = state_16760__$1;
(statearr_16777_18983[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (6))){
var state_16760__$1 = state_16760;
var statearr_16778_18984 = state_16760__$1;
(statearr_16778_18984[(2)] = null);

(statearr_16778_18984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (17))){
var inst_16753 = (state_16760[(2)]);
var state_16760__$1 = (function (){var statearr_16785 = state_16760;
(statearr_16785[(10)] = inst_16753);

return statearr_16785;
})();
var statearr_16786_18986 = state_16760__$1;
(statearr_16786_18986[(2)] = null);

(statearr_16786_18986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (3))){
var inst_16758 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16760__$1,inst_16758);
} else {
if((state_val_16761 === (12))){
var _ = (function (){var statearr_16791 = state_16760;
(statearr_16791[(4)] = cljs.core.rest((state_16760[(4)])));

return statearr_16791;
})();
var state_16760__$1 = state_16760;
var ex16784 = (state_16760__$1[(2)]);
var statearr_16793_18991 = state_16760__$1;
(statearr_16793_18991[(5)] = ex16784);


if((ex16784 instanceof Object)){
var statearr_16794_18992 = state_16760__$1;
(statearr_16794_18992[(1)] = (11));

(statearr_16794_18992[(5)] = null);

} else {
throw ex16784;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (2))){
var inst_16711 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16713 = cnt;
var inst_16714 = (0);
var state_16760__$1 = (function (){var statearr_16803 = state_16760;
(statearr_16803[(11)] = inst_16711);

(statearr_16803[(8)] = inst_16713);

(statearr_16803[(7)] = inst_16714);

return statearr_16803;
})();
var statearr_16804_19005 = state_16760__$1;
(statearr_16804_19005[(2)] = null);

(statearr_16804_19005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (11))){
var inst_16721 = (state_16760[(2)]);
var inst_16722 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16760__$1 = (function (){var statearr_16805 = state_16760;
(statearr_16805[(12)] = inst_16721);

return statearr_16805;
})();
var statearr_16806_19006 = state_16760__$1;
(statearr_16806_19006[(2)] = inst_16722);

(statearr_16806_19006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (9))){
var inst_16714 = (state_16760[(7)]);
var _ = (function (){var statearr_16807 = state_16760;
(statearr_16807[(4)] = cljs.core.cons((12),(state_16760[(4)])));

return statearr_16807;
})();
var inst_16729 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16714) : chs__$1.call(null,inst_16714));
var inst_16730 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16714) : done.call(null,inst_16714));
var inst_16731 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16729,inst_16730);
var ___$1 = (function (){var statearr_16810 = state_16760;
(statearr_16810[(4)] = cljs.core.rest((state_16760[(4)])));

return statearr_16810;
})();
var state_16760__$1 = state_16760;
var statearr_16812_19015 = state_16760__$1;
(statearr_16812_19015[(2)] = inst_16731);

(statearr_16812_19015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (5))){
var inst_16741 = (state_16760[(2)]);
var state_16760__$1 = (function (){var statearr_16813 = state_16760;
(statearr_16813[(13)] = inst_16741);

return statearr_16813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16760__$1,(13),dchan);
} else {
if((state_val_16761 === (14))){
var inst_16749 = cljs.core.async.close_BANG_(out);
var state_16760__$1 = state_16760;
var statearr_16815_19019 = state_16760__$1;
(statearr_16815_19019[(2)] = inst_16749);

(statearr_16815_19019[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (16))){
var inst_16756 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16819_19021 = state_16760__$1;
(statearr_16819_19021[(2)] = inst_16756);

(statearr_16819_19021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (10))){
var inst_16714 = (state_16760[(7)]);
var inst_16734 = (state_16760[(2)]);
var inst_16735 = (inst_16714 + (1));
var inst_16714__$1 = inst_16735;
var state_16760__$1 = (function (){var statearr_16820 = state_16760;
(statearr_16820[(14)] = inst_16734);

(statearr_16820[(7)] = inst_16714__$1);

return statearr_16820;
})();
var statearr_16822_19033 = state_16760__$1;
(statearr_16822_19033[(2)] = null);

(statearr_16822_19033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (8))){
var inst_16739 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16823_19040 = state_16760__$1;
(statearr_16823_19040[(2)] = inst_16739);

(statearr_16823_19040[(1)] = (5));


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
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_16829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16829[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_16829[(1)] = (1));

return statearr_16829;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_16760){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_16760);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e16830){var ex__13828__auto__ = e16830;
var statearr_16831_19066 = state_16760;
(statearr_16831_19066[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_16760[(4)]))){
var statearr_16832_19069 = state_16760;
(statearr_16832_19069[(1)] = cljs.core.first((state_16760[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19070 = state_16760;
state_16760 = G__19070;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_16760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_16760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_16834 = f__14490__auto__();
(statearr_16834[(6)] = c__14489__auto___18956);

return statearr_16834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));

}

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
var G__16842 = arguments.length;
switch (G__16842) {
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
var c__14489__auto___19086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_16906){
var state_val_16907 = (state_16906[(1)]);
if((state_val_16907 === (7))){
var inst_16881 = (state_16906[(7)]);
var inst_16882 = (state_16906[(8)]);
var inst_16881__$1 = (state_16906[(2)]);
var inst_16882__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16881__$1,(0),null);
var inst_16883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16881__$1,(1),null);
var inst_16884 = (inst_16882__$1 == null);
var state_16906__$1 = (function (){var statearr_16911 = state_16906;
(statearr_16911[(7)] = inst_16881__$1);

(statearr_16911[(8)] = inst_16882__$1);

(statearr_16911[(9)] = inst_16883);

return statearr_16911;
})();
if(cljs.core.truth_(inst_16884)){
var statearr_16914_19097 = state_16906__$1;
(statearr_16914_19097[(1)] = (8));

} else {
var statearr_16917_19099 = state_16906__$1;
(statearr_16917_19099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16907 === (1))){
var inst_16871 = cljs.core.vec(chs);
var inst_16872 = inst_16871;
var state_16906__$1 = (function (){var statearr_16919 = state_16906;
(statearr_16919[(10)] = inst_16872);

return statearr_16919;
})();
var statearr_16920_19113 = state_16906__$1;
(statearr_16920_19113[(2)] = null);

(statearr_16920_19113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16907 === (4))){
var inst_16872 = (state_16906[(10)]);
var state_16906__$1 = state_16906;
return cljs.core.async.ioc_alts_BANG_(state_16906__$1,(7),inst_16872);
} else {
if((state_val_16907 === (6))){
var inst_16902 = (state_16906[(2)]);
var state_16906__$1 = state_16906;
var statearr_16921_19115 = state_16906__$1;
(statearr_16921_19115[(2)] = inst_16902);

(statearr_16921_19115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16907 === (3))){
var inst_16904 = (state_16906[(2)]);
var state_16906__$1 = state_16906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16906__$1,inst_16904);
} else {
if((state_val_16907 === (2))){
var inst_16872 = (state_16906[(10)]);
var inst_16874 = cljs.core.count(inst_16872);
var inst_16875 = (inst_16874 > (0));
var state_16906__$1 = state_16906;
if(cljs.core.truth_(inst_16875)){
var statearr_16924_19116 = state_16906__$1;
(statearr_16924_19116[(1)] = (4));

} else {
var statearr_16925_19117 = state_16906__$1;
(statearr_16925_19117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16907 === (11))){
var inst_16872 = (state_16906[(10)]);
var inst_16895 = (state_16906[(2)]);
var tmp16922 = inst_16872;
var inst_16872__$1 = tmp16922;
var state_16906__$1 = (function (){var statearr_16927 = state_16906;
(statearr_16927[(11)] = inst_16895);

(statearr_16927[(10)] = inst_16872__$1);

return statearr_16927;
})();
var statearr_16928_19122 = state_16906__$1;
(statearr_16928_19122[(2)] = null);

(statearr_16928_19122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16907 === (9))){
var inst_16882 = (state_16906[(8)]);
var state_16906__$1 = state_16906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16906__$1,(11),out,inst_16882);
} else {
if((state_val_16907 === (5))){
var inst_16900 = cljs.core.async.close_BANG_(out);
var state_16906__$1 = state_16906;
var statearr_16935_19127 = state_16906__$1;
(statearr_16935_19127[(2)] = inst_16900);

(statearr_16935_19127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16907 === (10))){
var inst_16898 = (state_16906[(2)]);
var state_16906__$1 = state_16906;
var statearr_16938_19130 = state_16906__$1;
(statearr_16938_19130[(2)] = inst_16898);

(statearr_16938_19130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16907 === (8))){
var inst_16872 = (state_16906[(10)]);
var inst_16881 = (state_16906[(7)]);
var inst_16882 = (state_16906[(8)]);
var inst_16883 = (state_16906[(9)]);
var inst_16890 = (function (){var cs = inst_16872;
var vec__16877 = inst_16881;
var v = inst_16882;
var c = inst_16883;
return (function (p1__16840_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16840_SHARP_);
});
})();
var inst_16891 = cljs.core.filterv(inst_16890,inst_16872);
var inst_16872__$1 = inst_16891;
var state_16906__$1 = (function (){var statearr_16944 = state_16906;
(statearr_16944[(10)] = inst_16872__$1);

return statearr_16944;
})();
var statearr_16945_19143 = state_16906__$1;
(statearr_16945_19143[(2)] = null);

(statearr_16945_19143[(1)] = (2));


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
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_16946 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16946[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_16946[(1)] = (1));

return statearr_16946;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_16906){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_16906);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e16949){var ex__13828__auto__ = e16949;
var statearr_16950_19162 = state_16906;
(statearr_16950_19162[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_16906[(4)]))){
var statearr_16953_19163 = state_16906;
(statearr_16953_19163[(1)] = cljs.core.first((state_16906[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19164 = state_16906;
state_16906 = G__19164;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_16906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_16906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_16954 = f__14490__auto__();
(statearr_16954[(6)] = c__14489__auto___19086);

return statearr_16954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
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
var G__16956 = arguments.length;
switch (G__16956) {
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
var c__14489__auto___19168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_16984){
var state_val_16985 = (state_16984[(1)]);
if((state_val_16985 === (7))){
var inst_16966 = (state_16984[(7)]);
var inst_16966__$1 = (state_16984[(2)]);
var inst_16967 = (inst_16966__$1 == null);
var inst_16968 = cljs.core.not(inst_16967);
var state_16984__$1 = (function (){var statearr_16989 = state_16984;
(statearr_16989[(7)] = inst_16966__$1);

return statearr_16989;
})();
if(inst_16968){
var statearr_16990_19178 = state_16984__$1;
(statearr_16990_19178[(1)] = (8));

} else {
var statearr_16991_19183 = state_16984__$1;
(statearr_16991_19183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16985 === (1))){
var inst_16958 = (0);
var state_16984__$1 = (function (){var statearr_16992 = state_16984;
(statearr_16992[(8)] = inst_16958);

return statearr_16992;
})();
var statearr_16994_19188 = state_16984__$1;
(statearr_16994_19188[(2)] = null);

(statearr_16994_19188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16985 === (4))){
var state_16984__$1 = state_16984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16984__$1,(7),ch);
} else {
if((state_val_16985 === (6))){
var inst_16979 = (state_16984[(2)]);
var state_16984__$1 = state_16984;
var statearr_16996_19190 = state_16984__$1;
(statearr_16996_19190[(2)] = inst_16979);

(statearr_16996_19190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16985 === (3))){
var inst_16981 = (state_16984[(2)]);
var inst_16982 = cljs.core.async.close_BANG_(out);
var state_16984__$1 = (function (){var statearr_16997 = state_16984;
(statearr_16997[(9)] = inst_16981);

return statearr_16997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16984__$1,inst_16982);
} else {
if((state_val_16985 === (2))){
var inst_16958 = (state_16984[(8)]);
var inst_16963 = (inst_16958 < n);
var state_16984__$1 = state_16984;
if(cljs.core.truth_(inst_16963)){
var statearr_17002_19200 = state_16984__$1;
(statearr_17002_19200[(1)] = (4));

} else {
var statearr_17003_19202 = state_16984__$1;
(statearr_17003_19202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16985 === (11))){
var inst_16958 = (state_16984[(8)]);
var inst_16971 = (state_16984[(2)]);
var inst_16972 = (inst_16958 + (1));
var inst_16958__$1 = inst_16972;
var state_16984__$1 = (function (){var statearr_17009 = state_16984;
(statearr_17009[(10)] = inst_16971);

(statearr_17009[(8)] = inst_16958__$1);

return statearr_17009;
})();
var statearr_17010_19210 = state_16984__$1;
(statearr_17010_19210[(2)] = null);

(statearr_17010_19210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16985 === (9))){
var state_16984__$1 = state_16984;
var statearr_17011_19215 = state_16984__$1;
(statearr_17011_19215[(2)] = null);

(statearr_17011_19215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16985 === (5))){
var state_16984__$1 = state_16984;
var statearr_17012_19217 = state_16984__$1;
(statearr_17012_19217[(2)] = null);

(statearr_17012_19217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16985 === (10))){
var inst_16976 = (state_16984[(2)]);
var state_16984__$1 = state_16984;
var statearr_17013_19220 = state_16984__$1;
(statearr_17013_19220[(2)] = inst_16976);

(statearr_17013_19220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16985 === (8))){
var inst_16966 = (state_16984[(7)]);
var state_16984__$1 = state_16984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16984__$1,(11),out,inst_16966);
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
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_17015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17015[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_17015[(1)] = (1));

return statearr_17015;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_16984){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_16984);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e17016){var ex__13828__auto__ = e17016;
var statearr_17017_19221 = state_16984;
(statearr_17017_19221[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_16984[(4)]))){
var statearr_17022_19222 = state_16984;
(statearr_17022_19222[(1)] = cljs.core.first((state_16984[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19224 = state_16984;
state_16984 = G__19224;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_16984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_16984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_17023 = f__14490__auto__();
(statearr_17023[(6)] = c__14489__auto___19168);

return statearr_17023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17036 = (function (f,ch,meta17027,_,fn1,meta17037){
this.f = f;
this.ch = ch;
this.meta17027 = meta17027;
this._ = _;
this.fn1 = fn1;
this.meta17037 = meta17037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17038,meta17037__$1){
var self__ = this;
var _17038__$1 = this;
return (new cljs.core.async.t_cljs$core$async17036(self__.f,self__.ch,self__.meta17027,self__._,self__.fn1,meta17037__$1));
}));

(cljs.core.async.t_cljs$core$async17036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17038){
var self__ = this;
var _17038__$1 = this;
return self__.meta17037;
}));

(cljs.core.async.t_cljs$core$async17036.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17025_SHARP_){
var G__17048 = (((p1__17025_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17025_SHARP_) : self__.f.call(null,p1__17025_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17048) : f1.call(null,G__17048));
});
}));

(cljs.core.async.t_cljs$core$async17036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17027","meta17027",23342952,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17026","cljs.core.async/t_cljs$core$async17026",-1395132241,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17037","meta17037",-1044177461,null)], null);
}));

(cljs.core.async.t_cljs$core$async17036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17036");

(cljs.core.async.t_cljs$core$async17036.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async17036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17036.
 */
cljs.core.async.__GT_t_cljs$core$async17036 = (function cljs$core$async$__GT_t_cljs$core$async17036(f,ch,meta17027,_,fn1,meta17037){
return (new cljs.core.async.t_cljs$core$async17036(f,ch,meta17027,_,fn1,meta17037));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17026 = (function (f,ch,meta17027){
this.f = f;
this.ch = ch;
this.meta17027 = meta17027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17028,meta17027__$1){
var self__ = this;
var _17028__$1 = this;
return (new cljs.core.async.t_cljs$core$async17026(self__.f,self__.ch,meta17027__$1));
}));

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17028){
var self__ = this;
var _17028__$1 = this;
return self__.meta17027;
}));

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17036(self__.f,self__.ch,self__.meta17027,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17054 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17054) : self__.f.call(null,G__17054));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17026.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17027","meta17027",23342952,null)], null);
}));

(cljs.core.async.t_cljs$core$async17026.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17026");

(cljs.core.async.t_cljs$core$async17026.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async17026");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17026.
 */
cljs.core.async.__GT_t_cljs$core$async17026 = (function cljs$core$async$__GT_t_cljs$core$async17026(f,ch,meta17027){
return (new cljs.core.async.t_cljs$core$async17026(f,ch,meta17027));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17026(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17060 = (function (f,ch,meta17061){
this.f = f;
this.ch = ch;
this.meta17061 = meta17061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17062,meta17061__$1){
var self__ = this;
var _17062__$1 = this;
return (new cljs.core.async.t_cljs$core$async17060(self__.f,self__.ch,meta17061__$1));
}));

(cljs.core.async.t_cljs$core$async17060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17062){
var self__ = this;
var _17062__$1 = this;
return self__.meta17061;
}));

(cljs.core.async.t_cljs$core$async17060.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17060.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17060.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17061","meta17061",1252312687,null)], null);
}));

(cljs.core.async.t_cljs$core$async17060.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17060");

(cljs.core.async.t_cljs$core$async17060.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async17060");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17060.
 */
cljs.core.async.__GT_t_cljs$core$async17060 = (function cljs$core$async$__GT_t_cljs$core$async17060(f,ch,meta17061){
return (new cljs.core.async.t_cljs$core$async17060(f,ch,meta17061));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17060(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17101 = (function (p,ch,meta17102){
this.p = p;
this.ch = ch;
this.meta17102 = meta17102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17103,meta17102__$1){
var self__ = this;
var _17103__$1 = this;
return (new cljs.core.async.t_cljs$core$async17101(self__.p,self__.ch,meta17102__$1));
}));

(cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17103){
var self__ = this;
var _17103__$1 = this;
return self__.meta17102;
}));

(cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17101.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17102","meta17102",77981815,null)], null);
}));

(cljs.core.async.t_cljs$core$async17101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17101");

(cljs.core.async.t_cljs$core$async17101.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async17101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17101.
 */
cljs.core.async.__GT_t_cljs$core$async17101 = (function cljs$core$async$__GT_t_cljs$core$async17101(p,ch,meta17102){
return (new cljs.core.async.t_cljs$core$async17101(p,ch,meta17102));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17101(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17132 = arguments.length;
switch (G__17132) {
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
var c__14489__auto___19289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_17156){
var state_val_17157 = (state_17156[(1)]);
if((state_val_17157 === (7))){
var inst_17152 = (state_17156[(2)]);
var state_17156__$1 = state_17156;
var statearr_17158_19291 = state_17156__$1;
(statearr_17158_19291[(2)] = inst_17152);

(statearr_17158_19291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17157 === (1))){
var state_17156__$1 = state_17156;
var statearr_17159_19292 = state_17156__$1;
(statearr_17159_19292[(2)] = null);

(statearr_17159_19292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17157 === (4))){
var inst_17138 = (state_17156[(7)]);
var inst_17138__$1 = (state_17156[(2)]);
var inst_17139 = (inst_17138__$1 == null);
var state_17156__$1 = (function (){var statearr_17160 = state_17156;
(statearr_17160[(7)] = inst_17138__$1);

return statearr_17160;
})();
if(cljs.core.truth_(inst_17139)){
var statearr_17161_19295 = state_17156__$1;
(statearr_17161_19295[(1)] = (5));

} else {
var statearr_17162_19296 = state_17156__$1;
(statearr_17162_19296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17157 === (6))){
var inst_17138 = (state_17156[(7)]);
var inst_17143 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17138) : p.call(null,inst_17138));
var state_17156__$1 = state_17156;
if(cljs.core.truth_(inst_17143)){
var statearr_17163_19301 = state_17156__$1;
(statearr_17163_19301[(1)] = (8));

} else {
var statearr_17164_19302 = state_17156__$1;
(statearr_17164_19302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17157 === (3))){
var inst_17154 = (state_17156[(2)]);
var state_17156__$1 = state_17156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17156__$1,inst_17154);
} else {
if((state_val_17157 === (2))){
var state_17156__$1 = state_17156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17156__$1,(4),ch);
} else {
if((state_val_17157 === (11))){
var inst_17146 = (state_17156[(2)]);
var state_17156__$1 = state_17156;
var statearr_17165_19303 = state_17156__$1;
(statearr_17165_19303[(2)] = inst_17146);

(statearr_17165_19303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17157 === (9))){
var state_17156__$1 = state_17156;
var statearr_17166_19304 = state_17156__$1;
(statearr_17166_19304[(2)] = null);

(statearr_17166_19304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17157 === (5))){
var inst_17141 = cljs.core.async.close_BANG_(out);
var state_17156__$1 = state_17156;
var statearr_17167_19305 = state_17156__$1;
(statearr_17167_19305[(2)] = inst_17141);

(statearr_17167_19305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17157 === (10))){
var inst_17149 = (state_17156[(2)]);
var state_17156__$1 = (function (){var statearr_17170 = state_17156;
(statearr_17170[(8)] = inst_17149);

return statearr_17170;
})();
var statearr_17171_19306 = state_17156__$1;
(statearr_17171_19306[(2)] = null);

(statearr_17171_19306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17157 === (8))){
var inst_17138 = (state_17156[(7)]);
var state_17156__$1 = state_17156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17156__$1,(11),out,inst_17138);
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
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_17175 = [null,null,null,null,null,null,null,null,null];
(statearr_17175[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_17175[(1)] = (1));

return statearr_17175;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_17156){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_17156);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e17176){var ex__13828__auto__ = e17176;
var statearr_17177_19313 = state_17156;
(statearr_17177_19313[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_17156[(4)]))){
var statearr_17178_19315 = state_17156;
(statearr_17178_19315[(1)] = cljs.core.first((state_17156[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19316 = state_17156;
state_17156 = G__19316;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_17156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_17156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_17184 = f__14490__auto__();
(statearr_17184[(6)] = c__14489__auto___19289);

return statearr_17184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17187 = arguments.length;
switch (G__17187) {
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
var c__14489__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_17270){
var state_val_17271 = (state_17270[(1)]);
if((state_val_17271 === (7))){
var inst_17266 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17275_19326 = state_17270__$1;
(statearr_17275_19326[(2)] = inst_17266);

(statearr_17275_19326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (20))){
var inst_17224 = (state_17270[(7)]);
var inst_17247 = (state_17270[(2)]);
var inst_17248 = cljs.core.next(inst_17224);
var inst_17205 = inst_17248;
var inst_17206 = null;
var inst_17207 = (0);
var inst_17208 = (0);
var state_17270__$1 = (function (){var statearr_17279 = state_17270;
(statearr_17279[(8)] = inst_17247);

(statearr_17279[(9)] = inst_17205);

(statearr_17279[(10)] = inst_17206);

(statearr_17279[(11)] = inst_17207);

(statearr_17279[(12)] = inst_17208);

return statearr_17279;
})();
var statearr_17280_19334 = state_17270__$1;
(statearr_17280_19334[(2)] = null);

(statearr_17280_19334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (1))){
var state_17270__$1 = state_17270;
var statearr_17281_19335 = state_17270__$1;
(statearr_17281_19335[(2)] = null);

(statearr_17281_19335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (4))){
var inst_17191 = (state_17270[(13)]);
var inst_17191__$1 = (state_17270[(2)]);
var inst_17192 = (inst_17191__$1 == null);
var state_17270__$1 = (function (){var statearr_17282 = state_17270;
(statearr_17282[(13)] = inst_17191__$1);

return statearr_17282;
})();
if(cljs.core.truth_(inst_17192)){
var statearr_17283_19337 = state_17270__$1;
(statearr_17283_19337[(1)] = (5));

} else {
var statearr_17284_19338 = state_17270__$1;
(statearr_17284_19338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (15))){
var state_17270__$1 = state_17270;
var statearr_17288_19341 = state_17270__$1;
(statearr_17288_19341[(2)] = null);

(statearr_17288_19341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (21))){
var state_17270__$1 = state_17270;
var statearr_17289_19342 = state_17270__$1;
(statearr_17289_19342[(2)] = null);

(statearr_17289_19342[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (13))){
var inst_17208 = (state_17270[(12)]);
var inst_17205 = (state_17270[(9)]);
var inst_17206 = (state_17270[(10)]);
var inst_17207 = (state_17270[(11)]);
var inst_17219 = (state_17270[(2)]);
var inst_17220 = (inst_17208 + (1));
var tmp17285 = inst_17206;
var tmp17286 = inst_17207;
var tmp17287 = inst_17205;
var inst_17205__$1 = tmp17287;
var inst_17206__$1 = tmp17285;
var inst_17207__$1 = tmp17286;
var inst_17208__$1 = inst_17220;
var state_17270__$1 = (function (){var statearr_17290 = state_17270;
(statearr_17290[(14)] = inst_17219);

(statearr_17290[(9)] = inst_17205__$1);

(statearr_17290[(10)] = inst_17206__$1);

(statearr_17290[(11)] = inst_17207__$1);

(statearr_17290[(12)] = inst_17208__$1);

return statearr_17290;
})();
var statearr_17291_19344 = state_17270__$1;
(statearr_17291_19344[(2)] = null);

(statearr_17291_19344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (22))){
var state_17270__$1 = state_17270;
var statearr_17296_19345 = state_17270__$1;
(statearr_17296_19345[(2)] = null);

(statearr_17296_19345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (6))){
var inst_17191 = (state_17270[(13)]);
var inst_17203 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17191) : f.call(null,inst_17191));
var inst_17204 = cljs.core.seq(inst_17203);
var inst_17205 = inst_17204;
var inst_17206 = null;
var inst_17207 = (0);
var inst_17208 = (0);
var state_17270__$1 = (function (){var statearr_17297 = state_17270;
(statearr_17297[(9)] = inst_17205);

(statearr_17297[(10)] = inst_17206);

(statearr_17297[(11)] = inst_17207);

(statearr_17297[(12)] = inst_17208);

return statearr_17297;
})();
var statearr_17298_19347 = state_17270__$1;
(statearr_17298_19347[(2)] = null);

(statearr_17298_19347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (17))){
var inst_17224 = (state_17270[(7)]);
var inst_17235 = cljs.core.chunk_first(inst_17224);
var inst_17237 = cljs.core.chunk_rest(inst_17224);
var inst_17238 = cljs.core.count(inst_17235);
var inst_17205 = inst_17237;
var inst_17206 = inst_17235;
var inst_17207 = inst_17238;
var inst_17208 = (0);
var state_17270__$1 = (function (){var statearr_17299 = state_17270;
(statearr_17299[(9)] = inst_17205);

(statearr_17299[(10)] = inst_17206);

(statearr_17299[(11)] = inst_17207);

(statearr_17299[(12)] = inst_17208);

return statearr_17299;
})();
var statearr_17300_19348 = state_17270__$1;
(statearr_17300_19348[(2)] = null);

(statearr_17300_19348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (3))){
var inst_17268 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17270__$1,inst_17268);
} else {
if((state_val_17271 === (12))){
var inst_17256 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17302_19353 = state_17270__$1;
(statearr_17302_19353[(2)] = inst_17256);

(statearr_17302_19353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (2))){
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17270__$1,(4),in$);
} else {
if((state_val_17271 === (23))){
var inst_17264 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17306_19356 = state_17270__$1;
(statearr_17306_19356[(2)] = inst_17264);

(statearr_17306_19356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (19))){
var inst_17251 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17307_19357 = state_17270__$1;
(statearr_17307_19357[(2)] = inst_17251);

(statearr_17307_19357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (11))){
var inst_17205 = (state_17270[(9)]);
var inst_17224 = (state_17270[(7)]);
var inst_17224__$1 = cljs.core.seq(inst_17205);
var state_17270__$1 = (function (){var statearr_17308 = state_17270;
(statearr_17308[(7)] = inst_17224__$1);

return statearr_17308;
})();
if(inst_17224__$1){
var statearr_17309_19364 = state_17270__$1;
(statearr_17309_19364[(1)] = (14));

} else {
var statearr_17310_19365 = state_17270__$1;
(statearr_17310_19365[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (9))){
var inst_17258 = (state_17270[(2)]);
var inst_17259 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17270__$1 = (function (){var statearr_17312 = state_17270;
(statearr_17312[(15)] = inst_17258);

return statearr_17312;
})();
if(cljs.core.truth_(inst_17259)){
var statearr_17313_19367 = state_17270__$1;
(statearr_17313_19367[(1)] = (21));

} else {
var statearr_17314_19368 = state_17270__$1;
(statearr_17314_19368[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (5))){
var inst_17194 = cljs.core.async.close_BANG_(out);
var state_17270__$1 = state_17270;
var statearr_17316_19369 = state_17270__$1;
(statearr_17316_19369[(2)] = inst_17194);

(statearr_17316_19369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (14))){
var inst_17224 = (state_17270[(7)]);
var inst_17233 = cljs.core.chunked_seq_QMARK_(inst_17224);
var state_17270__$1 = state_17270;
if(inst_17233){
var statearr_17317_19370 = state_17270__$1;
(statearr_17317_19370[(1)] = (17));

} else {
var statearr_17318_19371 = state_17270__$1;
(statearr_17318_19371[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (16))){
var inst_17254 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17319_19372 = state_17270__$1;
(statearr_17319_19372[(2)] = inst_17254);

(statearr_17319_19372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (10))){
var inst_17206 = (state_17270[(10)]);
var inst_17208 = (state_17270[(12)]);
var inst_17217 = cljs.core._nth(inst_17206,inst_17208);
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17270__$1,(13),out,inst_17217);
} else {
if((state_val_17271 === (18))){
var inst_17224 = (state_17270[(7)]);
var inst_17242 = cljs.core.first(inst_17224);
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17270__$1,(20),out,inst_17242);
} else {
if((state_val_17271 === (8))){
var inst_17208 = (state_17270[(12)]);
var inst_17207 = (state_17270[(11)]);
var inst_17212 = (inst_17208 < inst_17207);
var inst_17213 = inst_17212;
var state_17270__$1 = state_17270;
if(cljs.core.truth_(inst_17213)){
var statearr_17323_19378 = state_17270__$1;
(statearr_17323_19378[(1)] = (10));

} else {
var statearr_17325_19379 = state_17270__$1;
(statearr_17325_19379[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13825__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13825__auto____0 = (function (){
var statearr_17327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17327[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13825__auto__);

(statearr_17327[(1)] = (1));

return statearr_17327;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13825__auto____1 = (function (state_17270){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_17270);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e17328){var ex__13828__auto__ = e17328;
var statearr_17332_19384 = state_17270;
(statearr_17332_19384[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_17270[(4)]))){
var statearr_17333_19385 = state_17270;
(statearr_17333_19385[(1)] = cljs.core.first((state_17270[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19389 = state_17270;
state_17270 = G__19389;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13825__auto__ = function(state_17270){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13825__auto____1.call(this,state_17270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13825__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13825__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_17336 = f__14490__auto__();
(statearr_17336[(6)] = c__14489__auto__);

return statearr_17336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));

return c__14489__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17338 = arguments.length;
switch (G__17338) {
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
var G__17342 = arguments.length;
switch (G__17342) {
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
var G__17345 = arguments.length;
switch (G__17345) {
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
var c__14489__auto___19409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_17377){
var state_val_17378 = (state_17377[(1)]);
if((state_val_17378 === (7))){
var inst_17372 = (state_17377[(2)]);
var state_17377__$1 = state_17377;
var statearr_17381_19410 = state_17377__$1;
(statearr_17381_19410[(2)] = inst_17372);

(statearr_17381_19410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (1))){
var inst_17351 = null;
var state_17377__$1 = (function (){var statearr_17382 = state_17377;
(statearr_17382[(7)] = inst_17351);

return statearr_17382;
})();
var statearr_17383_19411 = state_17377__$1;
(statearr_17383_19411[(2)] = null);

(statearr_17383_19411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (4))){
var inst_17354 = (state_17377[(8)]);
var inst_17354__$1 = (state_17377[(2)]);
var inst_17355 = (inst_17354__$1 == null);
var inst_17356 = cljs.core.not(inst_17355);
var state_17377__$1 = (function (){var statearr_17384 = state_17377;
(statearr_17384[(8)] = inst_17354__$1);

return statearr_17384;
})();
if(inst_17356){
var statearr_17385_19417 = state_17377__$1;
(statearr_17385_19417[(1)] = (5));

} else {
var statearr_17386_19418 = state_17377__$1;
(statearr_17386_19418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (6))){
var state_17377__$1 = state_17377;
var statearr_17387_19420 = state_17377__$1;
(statearr_17387_19420[(2)] = null);

(statearr_17387_19420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (3))){
var inst_17374 = (state_17377[(2)]);
var inst_17375 = cljs.core.async.close_BANG_(out);
var state_17377__$1 = (function (){var statearr_17394 = state_17377;
(statearr_17394[(9)] = inst_17374);

return statearr_17394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17377__$1,inst_17375);
} else {
if((state_val_17378 === (2))){
var state_17377__$1 = state_17377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17377__$1,(4),ch);
} else {
if((state_val_17378 === (11))){
var inst_17354 = (state_17377[(8)]);
var inst_17366 = (state_17377[(2)]);
var inst_17351 = inst_17354;
var state_17377__$1 = (function (){var statearr_17399 = state_17377;
(statearr_17399[(10)] = inst_17366);

(statearr_17399[(7)] = inst_17351);

return statearr_17399;
})();
var statearr_17403_19436 = state_17377__$1;
(statearr_17403_19436[(2)] = null);

(statearr_17403_19436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (9))){
var inst_17354 = (state_17377[(8)]);
var state_17377__$1 = state_17377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17377__$1,(11),out,inst_17354);
} else {
if((state_val_17378 === (5))){
var inst_17354 = (state_17377[(8)]);
var inst_17351 = (state_17377[(7)]);
var inst_17358 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17354,inst_17351);
var state_17377__$1 = state_17377;
if(inst_17358){
var statearr_17406_19440 = state_17377__$1;
(statearr_17406_19440[(1)] = (8));

} else {
var statearr_17407_19441 = state_17377__$1;
(statearr_17407_19441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (10))){
var inst_17369 = (state_17377[(2)]);
var state_17377__$1 = state_17377;
var statearr_17408_19442 = state_17377__$1;
(statearr_17408_19442[(2)] = inst_17369);

(statearr_17408_19442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (8))){
var inst_17351 = (state_17377[(7)]);
var tmp17404 = inst_17351;
var inst_17351__$1 = tmp17404;
var state_17377__$1 = (function (){var statearr_17416 = state_17377;
(statearr_17416[(7)] = inst_17351__$1);

return statearr_17416;
})();
var statearr_17417_19443 = state_17377__$1;
(statearr_17417_19443[(2)] = null);

(statearr_17417_19443[(1)] = (2));


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
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_17421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17421[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_17421[(1)] = (1));

return statearr_17421;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_17377){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_17377);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e17422){var ex__13828__auto__ = e17422;
var statearr_17423_19448 = state_17377;
(statearr_17423_19448[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_17377[(4)]))){
var statearr_17424_19449 = state_17377;
(statearr_17424_19449[(1)] = cljs.core.first((state_17377[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19452 = state_17377;
state_17377 = G__19452;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_17377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_17377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_17432 = f__14490__auto__();
(statearr_17432[(6)] = c__14489__auto___19409);

return statearr_17432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17447 = arguments.length;
switch (G__17447) {
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
var c__14489__auto___19463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_17492){
var state_val_17493 = (state_17492[(1)]);
if((state_val_17493 === (7))){
var inst_17488 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17496_19468 = state_17492__$1;
(statearr_17496_19468[(2)] = inst_17488);

(statearr_17496_19468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (1))){
var inst_17452 = (new Array(n));
var inst_17453 = inst_17452;
var inst_17454 = (0);
var state_17492__$1 = (function (){var statearr_17497 = state_17492;
(statearr_17497[(7)] = inst_17453);

(statearr_17497[(8)] = inst_17454);

return statearr_17497;
})();
var statearr_17499_19474 = state_17492__$1;
(statearr_17499_19474[(2)] = null);

(statearr_17499_19474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (4))){
var inst_17457 = (state_17492[(9)]);
var inst_17457__$1 = (state_17492[(2)]);
var inst_17459 = (inst_17457__$1 == null);
var inst_17460 = cljs.core.not(inst_17459);
var state_17492__$1 = (function (){var statearr_17502 = state_17492;
(statearr_17502[(9)] = inst_17457__$1);

return statearr_17502;
})();
if(inst_17460){
var statearr_17503_19479 = state_17492__$1;
(statearr_17503_19479[(1)] = (5));

} else {
var statearr_17504_19484 = state_17492__$1;
(statearr_17504_19484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (15))){
var inst_17482 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17505_19485 = state_17492__$1;
(statearr_17505_19485[(2)] = inst_17482);

(statearr_17505_19485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (13))){
var state_17492__$1 = state_17492;
var statearr_17506_19486 = state_17492__$1;
(statearr_17506_19486[(2)] = null);

(statearr_17506_19486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (6))){
var inst_17454 = (state_17492[(8)]);
var inst_17477 = (inst_17454 > (0));
var state_17492__$1 = state_17492;
if(cljs.core.truth_(inst_17477)){
var statearr_17507_19492 = state_17492__$1;
(statearr_17507_19492[(1)] = (12));

} else {
var statearr_17508_19493 = state_17492__$1;
(statearr_17508_19493[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (3))){
var inst_17490 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17492__$1,inst_17490);
} else {
if((state_val_17493 === (12))){
var inst_17453 = (state_17492[(7)]);
var inst_17480 = cljs.core.vec(inst_17453);
var state_17492__$1 = state_17492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17492__$1,(15),out,inst_17480);
} else {
if((state_val_17493 === (2))){
var state_17492__$1 = state_17492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17492__$1,(4),ch);
} else {
if((state_val_17493 === (11))){
var inst_17471 = (state_17492[(2)]);
var inst_17472 = (new Array(n));
var inst_17453 = inst_17472;
var inst_17454 = (0);
var state_17492__$1 = (function (){var statearr_17509 = state_17492;
(statearr_17509[(10)] = inst_17471);

(statearr_17509[(7)] = inst_17453);

(statearr_17509[(8)] = inst_17454);

return statearr_17509;
})();
var statearr_17510_19497 = state_17492__$1;
(statearr_17510_19497[(2)] = null);

(statearr_17510_19497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (9))){
var inst_17453 = (state_17492[(7)]);
var inst_17469 = cljs.core.vec(inst_17453);
var state_17492__$1 = state_17492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17492__$1,(11),out,inst_17469);
} else {
if((state_val_17493 === (5))){
var inst_17453 = (state_17492[(7)]);
var inst_17454 = (state_17492[(8)]);
var inst_17457 = (state_17492[(9)]);
var inst_17463 = (state_17492[(11)]);
var inst_17462 = (inst_17453[inst_17454] = inst_17457);
var inst_17463__$1 = (inst_17454 + (1));
var inst_17464 = (inst_17463__$1 < n);
var state_17492__$1 = (function (){var statearr_17514 = state_17492;
(statearr_17514[(12)] = inst_17462);

(statearr_17514[(11)] = inst_17463__$1);

return statearr_17514;
})();
if(cljs.core.truth_(inst_17464)){
var statearr_17516_19499 = state_17492__$1;
(statearr_17516_19499[(1)] = (8));

} else {
var statearr_17517_19500 = state_17492__$1;
(statearr_17517_19500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (14))){
var inst_17485 = (state_17492[(2)]);
var inst_17486 = cljs.core.async.close_BANG_(out);
var state_17492__$1 = (function (){var statearr_17519 = state_17492;
(statearr_17519[(13)] = inst_17485);

return statearr_17519;
})();
var statearr_17520_19506 = state_17492__$1;
(statearr_17520_19506[(2)] = inst_17486);

(statearr_17520_19506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (10))){
var inst_17475 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17521_19507 = state_17492__$1;
(statearr_17521_19507[(2)] = inst_17475);

(statearr_17521_19507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (8))){
var inst_17453 = (state_17492[(7)]);
var inst_17463 = (state_17492[(11)]);
var tmp17518 = inst_17453;
var inst_17453__$1 = tmp17518;
var inst_17454 = inst_17463;
var state_17492__$1 = (function (){var statearr_17522 = state_17492;
(statearr_17522[(7)] = inst_17453__$1);

(statearr_17522[(8)] = inst_17454);

return statearr_17522;
})();
var statearr_17523_19511 = state_17492__$1;
(statearr_17523_19511[(2)] = null);

(statearr_17523_19511[(1)] = (2));


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
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_17528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17528[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_17528[(1)] = (1));

return statearr_17528;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_17492){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_17492);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e17529){var ex__13828__auto__ = e17529;
var statearr_17530_19514 = state_17492;
(statearr_17530_19514[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_17492[(4)]))){
var statearr_17531_19515 = state_17492;
(statearr_17531_19515[(1)] = cljs.core.first((state_17492[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19520 = state_17492;
state_17492 = G__19520;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_17492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_17492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_17532 = f__14490__auto__();
(statearr_17532[(6)] = c__14489__auto___19463);

return statearr_17532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17545 = arguments.length;
switch (G__17545) {
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
var c__14489__auto___19526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14490__auto__ = (function (){var switch__13824__auto__ = (function (state_17595){
var state_val_17596 = (state_17595[(1)]);
if((state_val_17596 === (7))){
var inst_17591 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17605_19528 = state_17595__$1;
(statearr_17605_19528[(2)] = inst_17591);

(statearr_17605_19528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (1))){
var inst_17551 = [];
var inst_17552 = inst_17551;
var inst_17553 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17595__$1 = (function (){var statearr_17610 = state_17595;
(statearr_17610[(7)] = inst_17552);

(statearr_17610[(8)] = inst_17553);

return statearr_17610;
})();
var statearr_17611_19531 = state_17595__$1;
(statearr_17611_19531[(2)] = null);

(statearr_17611_19531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (4))){
var inst_17556 = (state_17595[(9)]);
var inst_17556__$1 = (state_17595[(2)]);
var inst_17557 = (inst_17556__$1 == null);
var inst_17558 = cljs.core.not(inst_17557);
var state_17595__$1 = (function (){var statearr_17612 = state_17595;
(statearr_17612[(9)] = inst_17556__$1);

return statearr_17612;
})();
if(inst_17558){
var statearr_17616_19539 = state_17595__$1;
(statearr_17616_19539[(1)] = (5));

} else {
var statearr_17619_19540 = state_17595__$1;
(statearr_17619_19540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (15))){
var inst_17552 = (state_17595[(7)]);
var inst_17583 = cljs.core.vec(inst_17552);
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17595__$1,(18),out,inst_17583);
} else {
if((state_val_17596 === (13))){
var inst_17578 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17620_19541 = state_17595__$1;
(statearr_17620_19541[(2)] = inst_17578);

(statearr_17620_19541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (6))){
var inst_17552 = (state_17595[(7)]);
var inst_17580 = inst_17552.length;
var inst_17581 = (inst_17580 > (0));
var state_17595__$1 = state_17595;
if(cljs.core.truth_(inst_17581)){
var statearr_17621_19543 = state_17595__$1;
(statearr_17621_19543[(1)] = (15));

} else {
var statearr_17622_19544 = state_17595__$1;
(statearr_17622_19544[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (17))){
var inst_17588 = (state_17595[(2)]);
var inst_17589 = cljs.core.async.close_BANG_(out);
var state_17595__$1 = (function (){var statearr_17624 = state_17595;
(statearr_17624[(10)] = inst_17588);

return statearr_17624;
})();
var statearr_17628_19550 = state_17595__$1;
(statearr_17628_19550[(2)] = inst_17589);

(statearr_17628_19550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (3))){
var inst_17593 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17595__$1,inst_17593);
} else {
if((state_val_17596 === (12))){
var inst_17552 = (state_17595[(7)]);
var inst_17571 = cljs.core.vec(inst_17552);
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17595__$1,(14),out,inst_17571);
} else {
if((state_val_17596 === (2))){
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17595__$1,(4),ch);
} else {
if((state_val_17596 === (11))){
var inst_17552 = (state_17595[(7)]);
var inst_17556 = (state_17595[(9)]);
var inst_17560 = (state_17595[(11)]);
var inst_17568 = inst_17552.push(inst_17556);
var tmp17635 = inst_17552;
var inst_17552__$1 = tmp17635;
var inst_17553 = inst_17560;
var state_17595__$1 = (function (){var statearr_17641 = state_17595;
(statearr_17641[(12)] = inst_17568);

(statearr_17641[(7)] = inst_17552__$1);

(statearr_17641[(8)] = inst_17553);

return statearr_17641;
})();
var statearr_17645_19560 = state_17595__$1;
(statearr_17645_19560[(2)] = null);

(statearr_17645_19560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (9))){
var inst_17553 = (state_17595[(8)]);
var inst_17564 = cljs.core.keyword_identical_QMARK_(inst_17553,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17595__$1 = state_17595;
var statearr_17649_19563 = state_17595__$1;
(statearr_17649_19563[(2)] = inst_17564);

(statearr_17649_19563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (5))){
var inst_17556 = (state_17595[(9)]);
var inst_17560 = (state_17595[(11)]);
var inst_17553 = (state_17595[(8)]);
var inst_17561 = (state_17595[(13)]);
var inst_17560__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17556) : f.call(null,inst_17556));
var inst_17561__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17560__$1,inst_17553);
var state_17595__$1 = (function (){var statearr_17650 = state_17595;
(statearr_17650[(11)] = inst_17560__$1);

(statearr_17650[(13)] = inst_17561__$1);

return statearr_17650;
})();
if(inst_17561__$1){
var statearr_17651_19571 = state_17595__$1;
(statearr_17651_19571[(1)] = (8));

} else {
var statearr_17652_19572 = state_17595__$1;
(statearr_17652_19572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (14))){
var inst_17556 = (state_17595[(9)]);
var inst_17560 = (state_17595[(11)]);
var inst_17573 = (state_17595[(2)]);
var inst_17574 = [];
var inst_17575 = inst_17574.push(inst_17556);
var inst_17552 = inst_17574;
var inst_17553 = inst_17560;
var state_17595__$1 = (function (){var statearr_17655 = state_17595;
(statearr_17655[(14)] = inst_17573);

(statearr_17655[(15)] = inst_17575);

(statearr_17655[(7)] = inst_17552);

(statearr_17655[(8)] = inst_17553);

return statearr_17655;
})();
var statearr_17656_19590 = state_17595__$1;
(statearr_17656_19590[(2)] = null);

(statearr_17656_19590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (16))){
var state_17595__$1 = state_17595;
var statearr_17667_19593 = state_17595__$1;
(statearr_17667_19593[(2)] = null);

(statearr_17667_19593[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (10))){
var inst_17566 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
if(cljs.core.truth_(inst_17566)){
var statearr_17674_19595 = state_17595__$1;
(statearr_17674_19595[(1)] = (11));

} else {
var statearr_17675_19596 = state_17595__$1;
(statearr_17675_19596[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (18))){
var inst_17585 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17676_19601 = state_17595__$1;
(statearr_17676_19601[(2)] = inst_17585);

(statearr_17676_19601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (8))){
var inst_17561 = (state_17595[(13)]);
var state_17595__$1 = state_17595;
var statearr_17677_19602 = state_17595__$1;
(statearr_17677_19602[(2)] = inst_17561);

(statearr_17677_19602[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__13825__auto__ = null;
var cljs$core$async$state_machine__13825__auto____0 = (function (){
var statearr_17680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17680[(0)] = cljs$core$async$state_machine__13825__auto__);

(statearr_17680[(1)] = (1));

return statearr_17680;
});
var cljs$core$async$state_machine__13825__auto____1 = (function (state_17595){
while(true){
var ret_value__13826__auto__ = (function (){try{while(true){
var result__13827__auto__ = switch__13824__auto__(state_17595);
if(cljs.core.keyword_identical_QMARK_(result__13827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13827__auto__;
}
break;
}
}catch (e17685){var ex__13828__auto__ = e17685;
var statearr_17686_19605 = state_17595;
(statearr_17686_19605[(2)] = ex__13828__auto__);


if(cljs.core.seq((state_17595[(4)]))){
var statearr_17688_19606 = state_17595;
(statearr_17688_19606[(1)] = cljs.core.first((state_17595[(4)])));

} else {
throw ex__13828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19607 = state_17595;
state_17595 = G__19607;
continue;
} else {
return ret_value__13826__auto__;
}
break;
}
});
cljs$core$async$state_machine__13825__auto__ = function(state_17595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13825__auto____1.call(this,state_17595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13825__auto____0;
cljs$core$async$state_machine__13825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13825__auto____1;
return cljs$core$async$state_machine__13825__auto__;
})()
})();
var state__14491__auto__ = (function (){var statearr_17694 = f__14490__auto__();
(statearr_17694[(6)] = c__14489__auto___19526);

return statearr_17694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14491__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
