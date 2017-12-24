// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29136 = arguments.length;
switch (G__29136) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29137 = (function (f,blockable,meta29138){
this.f = f;
this.blockable = blockable;
this.meta29138 = meta29138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29139,meta29138__$1){
var self__ = this;
var _29139__$1 = this;
return (new cljs.core.async.t_cljs$core$async29137(self__.f,self__.blockable,meta29138__$1));
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29139){
var self__ = this;
var _29139__$1 = this;
return self__.meta29138;
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta29138], null);
});

cljs.core.async.t_cljs$core$async29137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29137";

cljs.core.async.t_cljs$core$async29137.cljs$lang$ctorPrWriter = (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write(writer__7386__auto__,"cljs.core.async/t_cljs$core$async29137");
});

cljs.core.async.__GT_t_cljs$core$async29137 = (function cljs$core$async$__GT_t_cljs$core$async29137(f__$1,blockable__$1,meta29138){
return (new cljs.core.async.t_cljs$core$async29137(f__$1,blockable__$1,meta29138));
});

}

return (new cljs.core.async.t_cljs$core$async29137(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__29143 = arguments.length;
switch (G__29143) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29146 = arguments.length;
switch (G__29146) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__29149 = arguments.length;
switch (G__29149) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_29151 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29151) : fn1.call(null,val_29151));
} else {
cljs.core.async.impl.dispatch.run(((function (val_29151,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29151) : fn1.call(null,val_29151));
});})(val_29151,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29153 = arguments.length;
switch (G__29153) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7698__auto___29155 = n;
var x_29156 = (0);
while(true){
if((x_29156 < n__7698__auto___29155)){
(a[x_29156] = (0));

var G__29157 = (x_29156 + (1));
x_29156 = G__29157;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__29158 = (i + (1));
i = G__29158;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async29159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29159 = (function (flag,meta29160){
this.flag = flag;
this.meta29160 = meta29160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29161,meta29160__$1){
var self__ = this;
var _29161__$1 = this;
return (new cljs.core.async.t_cljs$core$async29159(self__.flag,meta29160__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29161){
var self__ = this;
var _29161__$1 = this;
return self__.meta29160;
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta29160], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29159";

cljs.core.async.t_cljs$core$async29159.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write(writer__7386__auto__,"cljs.core.async/t_cljs$core$async29159");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29159 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29159(flag__$1,meta29160){
return (new cljs.core.async.t_cljs$core$async29159(flag__$1,meta29160));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29159(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29162 = (function (flag,cb,meta29163){
this.flag = flag;
this.cb = cb;
this.meta29163 = meta29163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29164,meta29163__$1){
var self__ = this;
var _29164__$1 = this;
return (new cljs.core.async.t_cljs$core$async29162(self__.flag,self__.cb,meta29163__$1));
});

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29164){
var self__ = this;
var _29164__$1 = this;
return self__.meta29163;
});

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta29163], null);
});

cljs.core.async.t_cljs$core$async29162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29162";

cljs.core.async.t_cljs$core$async29162.cljs$lang$ctorPrWriter = (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write(writer__7386__auto__,"cljs.core.async/t_cljs$core$async29162");
});

cljs.core.async.__GT_t_cljs$core$async29162 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29162(flag__$1,cb__$1,meta29163){
return (new cljs.core.async.t_cljs$core$async29162(flag__$1,cb__$1,meta29163));
});

}

return (new cljs.core.async.t_cljs$core$async29162(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29165_SHARP_){
var G__29167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29165_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29167) : fret.call(null,G__29167));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29166_SHARP_){
var G__29168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29166_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29168) : fret.call(null,G__29168));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__6774__auto__ = wport;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29169 = (i + (1));
i = G__29169;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6774__auto__ = ret;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6762__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6762__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6762__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__7906__auto__ = [];
var len__7899__auto___29175 = arguments.length;
var i__7900__auto___29176 = (0);
while(true){
if((i__7900__auto___29176 < len__7899__auto___29175)){
args__7906__auto__.push((arguments[i__7900__auto___29176]));

var G__29177 = (i__7900__auto___29176 + (1));
i__7900__auto___29176 = G__29177;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29172){
var map__29173 = p__29172;
var map__29173__$1 = ((((!((map__29173 == null)))?((((map__29173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29173):map__29173);
var opts = map__29173__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29170){
var G__29171 = cljs.core.first(seq29170);
var seq29170__$1 = cljs.core.next(seq29170);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29171,seq29170__$1);
});

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
var G__29179 = arguments.length;
switch (G__29179) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29090__auto___29225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___29225){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___29225){
return (function (state_29203){
var state_val_29204 = (state_29203[(1)]);
if((state_val_29204 === (7))){
var inst_29199 = (state_29203[(2)]);
var state_29203__$1 = state_29203;
var statearr_29205_29226 = state_29203__$1;
(statearr_29205_29226[(2)] = inst_29199);

(statearr_29205_29226[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29204 === (1))){
var state_29203__$1 = state_29203;
var statearr_29206_29227 = state_29203__$1;
(statearr_29206_29227[(2)] = null);

(statearr_29206_29227[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29204 === (4))){
var inst_29182 = (state_29203[(7)]);
var inst_29182__$1 = (state_29203[(2)]);
var inst_29183 = (inst_29182__$1 == null);
var state_29203__$1 = (function (){var statearr_29207 = state_29203;
(statearr_29207[(7)] = inst_29182__$1);

return statearr_29207;
})();
if(cljs.core.truth_(inst_29183)){
var statearr_29208_29228 = state_29203__$1;
(statearr_29208_29228[(1)] = (5));

} else {
var statearr_29209_29229 = state_29203__$1;
(statearr_29209_29229[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29204 === (13))){
var state_29203__$1 = state_29203;
var statearr_29210_29230 = state_29203__$1;
(statearr_29210_29230[(2)] = null);

(statearr_29210_29230[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29204 === (6))){
var inst_29182 = (state_29203[(7)]);
var state_29203__$1 = state_29203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29203__$1,(11),to,inst_29182);
} else {
if((state_val_29204 === (3))){
var inst_29201 = (state_29203[(2)]);
var state_29203__$1 = state_29203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29203__$1,inst_29201);
} else {
if((state_val_29204 === (12))){
var state_29203__$1 = state_29203;
var statearr_29211_29231 = state_29203__$1;
(statearr_29211_29231[(2)] = null);

(statearr_29211_29231[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29204 === (2))){
var state_29203__$1 = state_29203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29203__$1,(4),from);
} else {
if((state_val_29204 === (11))){
var inst_29192 = (state_29203[(2)]);
var state_29203__$1 = state_29203;
if(cljs.core.truth_(inst_29192)){
var statearr_29212_29232 = state_29203__$1;
(statearr_29212_29232[(1)] = (12));

} else {
var statearr_29213_29233 = state_29203__$1;
(statearr_29213_29233[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29204 === (9))){
var state_29203__$1 = state_29203;
var statearr_29214_29234 = state_29203__$1;
(statearr_29214_29234[(2)] = null);

(statearr_29214_29234[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29204 === (5))){
var state_29203__$1 = state_29203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29215_29235 = state_29203__$1;
(statearr_29215_29235[(1)] = (8));

} else {
var statearr_29216_29236 = state_29203__$1;
(statearr_29216_29236[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29204 === (14))){
var inst_29197 = (state_29203[(2)]);
var state_29203__$1 = state_29203;
var statearr_29217_29237 = state_29203__$1;
(statearr_29217_29237[(2)] = inst_29197);

(statearr_29217_29237[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29204 === (10))){
var inst_29189 = (state_29203[(2)]);
var state_29203__$1 = state_29203;
var statearr_29218_29238 = state_29203__$1;
(statearr_29218_29238[(2)] = inst_29189);

(statearr_29218_29238[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29204 === (8))){
var inst_29186 = cljs.core.async.close_BANG_(to);
var state_29203__$1 = state_29203;
var statearr_29219_29239 = state_29203__$1;
(statearr_29219_29239[(2)] = inst_29186);

(statearr_29219_29239[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___29225))
;
return ((function (switch__28990__auto__,c__29090__auto___29225){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_29220 = [null,null,null,null,null,null,null,null];
(statearr_29220[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_29220[(1)] = (1));

return statearr_29220;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_29203){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29203);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29221){if((e29221 instanceof Object)){
var ex__28994__auto__ = e29221;
var statearr_29222_29240 = state_29203;
(statearr_29222_29240[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29203);

return cljs.core.cst$kw$recur;
} else {
throw e29221;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29241 = state_29203;
state_29203 = G__29241;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_29203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_29203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___29225))
})();
var state__29092__auto__ = (function (){var statearr_29223 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29223[(6)] = c__29090__auto___29225);

return statearr_29223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___29225))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__29242){
var vec__29243 = p__29242;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29243,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29243,(1),null);
var job = vec__29243;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29090__auto___29414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___29414,res,vec__29243,v,p,job,jobs,results){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___29414,res,vec__29243,v,p,job,jobs,results){
return (function (state_29250){
var state_val_29251 = (state_29250[(1)]);
if((state_val_29251 === (1))){
var state_29250__$1 = state_29250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29250__$1,(2),res,v);
} else {
if((state_val_29251 === (2))){
var inst_29247 = (state_29250[(2)]);
var inst_29248 = cljs.core.async.close_BANG_(res);
var state_29250__$1 = (function (){var statearr_29252 = state_29250;
(statearr_29252[(7)] = inst_29247);

return statearr_29252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29250__$1,inst_29248);
} else {
return null;
}
}
});})(c__29090__auto___29414,res,vec__29243,v,p,job,jobs,results))
;
return ((function (switch__28990__auto__,c__29090__auto___29414,res,vec__29243,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0 = (function (){
var statearr_29253 = [null,null,null,null,null,null,null,null];
(statearr_29253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__);

(statearr_29253[(1)] = (1));

return statearr_29253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1 = (function (state_29250){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29250);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29254){if((e29254 instanceof Object)){
var ex__28994__auto__ = e29254;
var statearr_29255_29415 = state_29250;
(statearr_29255_29415[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29250);

return cljs.core.cst$kw$recur;
} else {
throw e29254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29416 = state_29250;
state_29250 = G__29416;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__ = function(state_29250){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1.call(this,state_29250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___29414,res,vec__29243,v,p,job,jobs,results))
})();
var state__29092__auto__ = (function (){var statearr_29256 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29256[(6)] = c__29090__auto___29414);

return statearr_29256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___29414,res,vec__29243,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29257){
var vec__29258 = p__29257;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29258,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29258,(1),null);
var job = vec__29258;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7698__auto___29417 = n;
var __29418 = (0);
while(true){
if((__29418 < n__7698__auto___29417)){
var G__29261_29419 = type;
var G__29261_29420__$1 = (((G__29261_29419 instanceof cljs.core.Keyword))?G__29261_29419.fqn:null);
switch (G__29261_29420__$1) {
case "compute":
var c__29090__auto___29422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29418,c__29090__auto___29422,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (__29418,c__29090__auto___29422,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async){
return (function (state_29274){
var state_val_29275 = (state_29274[(1)]);
if((state_val_29275 === (1))){
var state_29274__$1 = state_29274;
var statearr_29276_29423 = state_29274__$1;
(statearr_29276_29423[(2)] = null);

(statearr_29276_29423[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29275 === (2))){
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29274__$1,(4),jobs);
} else {
if((state_val_29275 === (3))){
var inst_29272 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29274__$1,inst_29272);
} else {
if((state_val_29275 === (4))){
var inst_29264 = (state_29274[(2)]);
var inst_29265 = process(inst_29264);
var state_29274__$1 = state_29274;
if(cljs.core.truth_(inst_29265)){
var statearr_29277_29424 = state_29274__$1;
(statearr_29277_29424[(1)] = (5));

} else {
var statearr_29278_29425 = state_29274__$1;
(statearr_29278_29425[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29275 === (5))){
var state_29274__$1 = state_29274;
var statearr_29279_29426 = state_29274__$1;
(statearr_29279_29426[(2)] = null);

(statearr_29279_29426[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29275 === (6))){
var state_29274__$1 = state_29274;
var statearr_29280_29427 = state_29274__$1;
(statearr_29280_29427[(2)] = null);

(statearr_29280_29427[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29275 === (7))){
var inst_29270 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29281_29428 = state_29274__$1;
(statearr_29281_29428[(2)] = inst_29270);

(statearr_29281_29428[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__29418,c__29090__auto___29422,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async))
;
return ((function (__29418,switch__28990__auto__,c__29090__auto___29422,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0 = (function (){
var statearr_29282 = [null,null,null,null,null,null,null];
(statearr_29282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__);

(statearr_29282[(1)] = (1));

return statearr_29282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1 = (function (state_29274){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29274);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29283){if((e29283 instanceof Object)){
var ex__28994__auto__ = e29283;
var statearr_29284_29429 = state_29274;
(statearr_29284_29429[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29274);

return cljs.core.cst$kw$recur;
} else {
throw e29283;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29430 = state_29274;
state_29274 = G__29430;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__ = function(state_29274){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1.call(this,state_29274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__;
})()
;})(__29418,switch__28990__auto__,c__29090__auto___29422,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async))
})();
var state__29092__auto__ = (function (){var statearr_29285 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29285[(6)] = c__29090__auto___29422);

return statearr_29285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(__29418,c__29090__auto___29422,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async))
);


break;
case "async":
var c__29090__auto___29431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29418,c__29090__auto___29431,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (__29418,c__29090__auto___29431,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async){
return (function (state_29298){
var state_val_29299 = (state_29298[(1)]);
if((state_val_29299 === (1))){
var state_29298__$1 = state_29298;
var statearr_29300_29432 = state_29298__$1;
(statearr_29300_29432[(2)] = null);

(statearr_29300_29432[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29299 === (2))){
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29298__$1,(4),jobs);
} else {
if((state_val_29299 === (3))){
var inst_29296 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29298__$1,inst_29296);
} else {
if((state_val_29299 === (4))){
var inst_29288 = (state_29298[(2)]);
var inst_29289 = async(inst_29288);
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29289)){
var statearr_29301_29433 = state_29298__$1;
(statearr_29301_29433[(1)] = (5));

} else {
var statearr_29302_29434 = state_29298__$1;
(statearr_29302_29434[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29299 === (5))){
var state_29298__$1 = state_29298;
var statearr_29303_29435 = state_29298__$1;
(statearr_29303_29435[(2)] = null);

(statearr_29303_29435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29299 === (6))){
var state_29298__$1 = state_29298;
var statearr_29304_29436 = state_29298__$1;
(statearr_29304_29436[(2)] = null);

(statearr_29304_29436[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29299 === (7))){
var inst_29294 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29305_29437 = state_29298__$1;
(statearr_29305_29437[(2)] = inst_29294);

(statearr_29305_29437[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__29418,c__29090__auto___29431,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async))
;
return ((function (__29418,switch__28990__auto__,c__29090__auto___29431,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0 = (function (){
var statearr_29306 = [null,null,null,null,null,null,null];
(statearr_29306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__);

(statearr_29306[(1)] = (1));

return statearr_29306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1 = (function (state_29298){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29298);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29307){if((e29307 instanceof Object)){
var ex__28994__auto__ = e29307;
var statearr_29308_29438 = state_29298;
(statearr_29308_29438[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29298);

return cljs.core.cst$kw$recur;
} else {
throw e29307;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29439 = state_29298;
state_29298 = G__29439;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__ = function(state_29298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1.call(this,state_29298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__;
})()
;})(__29418,switch__28990__auto__,c__29090__auto___29431,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async))
})();
var state__29092__auto__ = (function (){var statearr_29309 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29309[(6)] = c__29090__auto___29431);

return statearr_29309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(__29418,c__29090__auto___29431,G__29261_29419,G__29261_29420__$1,n__7698__auto___29417,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29261_29420__$1)].join('')));

}

var G__29440 = (__29418 + (1));
__29418 = G__29440;
continue;
} else {
}
break;
}

var c__29090__auto___29441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___29441,jobs,results,process,async){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___29441,jobs,results,process,async){
return (function (state_29331){
var state_val_29332 = (state_29331[(1)]);
if((state_val_29332 === (1))){
var state_29331__$1 = state_29331;
var statearr_29333_29442 = state_29331__$1;
(statearr_29333_29442[(2)] = null);

(statearr_29333_29442[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29332 === (2))){
var state_29331__$1 = state_29331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29331__$1,(4),from);
} else {
if((state_val_29332 === (3))){
var inst_29329 = (state_29331[(2)]);
var state_29331__$1 = state_29331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29331__$1,inst_29329);
} else {
if((state_val_29332 === (4))){
var inst_29312 = (state_29331[(7)]);
var inst_29312__$1 = (state_29331[(2)]);
var inst_29313 = (inst_29312__$1 == null);
var state_29331__$1 = (function (){var statearr_29334 = state_29331;
(statearr_29334[(7)] = inst_29312__$1);

return statearr_29334;
})();
if(cljs.core.truth_(inst_29313)){
var statearr_29335_29443 = state_29331__$1;
(statearr_29335_29443[(1)] = (5));

} else {
var statearr_29336_29444 = state_29331__$1;
(statearr_29336_29444[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29332 === (5))){
var inst_29315 = cljs.core.async.close_BANG_(jobs);
var state_29331__$1 = state_29331;
var statearr_29337_29445 = state_29331__$1;
(statearr_29337_29445[(2)] = inst_29315);

(statearr_29337_29445[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29332 === (6))){
var inst_29317 = (state_29331[(8)]);
var inst_29312 = (state_29331[(7)]);
var inst_29317__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29318 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29319 = [inst_29312,inst_29317__$1];
var inst_29320 = (new cljs.core.PersistentVector(null,2,(5),inst_29318,inst_29319,null));
var state_29331__$1 = (function (){var statearr_29338 = state_29331;
(statearr_29338[(8)] = inst_29317__$1);

return statearr_29338;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29331__$1,(8),jobs,inst_29320);
} else {
if((state_val_29332 === (7))){
var inst_29327 = (state_29331[(2)]);
var state_29331__$1 = state_29331;
var statearr_29339_29446 = state_29331__$1;
(statearr_29339_29446[(2)] = inst_29327);

(statearr_29339_29446[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29332 === (8))){
var inst_29317 = (state_29331[(8)]);
var inst_29322 = (state_29331[(2)]);
var state_29331__$1 = (function (){var statearr_29340 = state_29331;
(statearr_29340[(9)] = inst_29322);

return statearr_29340;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29331__$1,(9),results,inst_29317);
} else {
if((state_val_29332 === (9))){
var inst_29324 = (state_29331[(2)]);
var state_29331__$1 = (function (){var statearr_29341 = state_29331;
(statearr_29341[(10)] = inst_29324);

return statearr_29341;
})();
var statearr_29342_29447 = state_29331__$1;
(statearr_29342_29447[(2)] = null);

(statearr_29342_29447[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___29441,jobs,results,process,async))
;
return ((function (switch__28990__auto__,c__29090__auto___29441,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0 = (function (){
var statearr_29343 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__);

(statearr_29343[(1)] = (1));

return statearr_29343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1 = (function (state_29331){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29331);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29344){if((e29344 instanceof Object)){
var ex__28994__auto__ = e29344;
var statearr_29345_29448 = state_29331;
(statearr_29345_29448[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29331);

return cljs.core.cst$kw$recur;
} else {
throw e29344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29449 = state_29331;
state_29331 = G__29449;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__ = function(state_29331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1.call(this,state_29331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___29441,jobs,results,process,async))
})();
var state__29092__auto__ = (function (){var statearr_29346 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29346[(6)] = c__29090__auto___29441);

return statearr_29346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___29441,jobs,results,process,async))
);


var c__29090__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto__,jobs,results,process,async){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto__,jobs,results,process,async){
return (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (7))){
var inst_29380 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29386_29450 = state_29384__$1;
(statearr_29386_29450[(2)] = inst_29380);

(statearr_29386_29450[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (20))){
var state_29384__$1 = state_29384;
var statearr_29387_29451 = state_29384__$1;
(statearr_29387_29451[(2)] = null);

(statearr_29387_29451[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (1))){
var state_29384__$1 = state_29384;
var statearr_29388_29452 = state_29384__$1;
(statearr_29388_29452[(2)] = null);

(statearr_29388_29452[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (4))){
var inst_29349 = (state_29384[(7)]);
var inst_29349__$1 = (state_29384[(2)]);
var inst_29350 = (inst_29349__$1 == null);
var state_29384__$1 = (function (){var statearr_29389 = state_29384;
(statearr_29389[(7)] = inst_29349__$1);

return statearr_29389;
})();
if(cljs.core.truth_(inst_29350)){
var statearr_29390_29453 = state_29384__$1;
(statearr_29390_29453[(1)] = (5));

} else {
var statearr_29391_29454 = state_29384__$1;
(statearr_29391_29454[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (15))){
var inst_29362 = (state_29384[(8)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29384__$1,(18),to,inst_29362);
} else {
if((state_val_29385 === (21))){
var inst_29375 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29392_29455 = state_29384__$1;
(statearr_29392_29455[(2)] = inst_29375);

(statearr_29392_29455[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (13))){
var inst_29377 = (state_29384[(2)]);
var state_29384__$1 = (function (){var statearr_29393 = state_29384;
(statearr_29393[(9)] = inst_29377);

return statearr_29393;
})();
var statearr_29394_29456 = state_29384__$1;
(statearr_29394_29456[(2)] = null);

(statearr_29394_29456[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (6))){
var inst_29349 = (state_29384[(7)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29384__$1,(11),inst_29349);
} else {
if((state_val_29385 === (17))){
var inst_29370 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
if(cljs.core.truth_(inst_29370)){
var statearr_29395_29457 = state_29384__$1;
(statearr_29395_29457[(1)] = (19));

} else {
var statearr_29396_29458 = state_29384__$1;
(statearr_29396_29458[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (3))){
var inst_29382 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29384__$1,inst_29382);
} else {
if((state_val_29385 === (12))){
var inst_29359 = (state_29384[(10)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29384__$1,(14),inst_29359);
} else {
if((state_val_29385 === (2))){
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29384__$1,(4),results);
} else {
if((state_val_29385 === (19))){
var state_29384__$1 = state_29384;
var statearr_29397_29459 = state_29384__$1;
(statearr_29397_29459[(2)] = null);

(statearr_29397_29459[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (11))){
var inst_29359 = (state_29384[(2)]);
var state_29384__$1 = (function (){var statearr_29398 = state_29384;
(statearr_29398[(10)] = inst_29359);

return statearr_29398;
})();
var statearr_29399_29460 = state_29384__$1;
(statearr_29399_29460[(2)] = null);

(statearr_29399_29460[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (9))){
var state_29384__$1 = state_29384;
var statearr_29400_29461 = state_29384__$1;
(statearr_29400_29461[(2)] = null);

(statearr_29400_29461[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (5))){
var state_29384__$1 = state_29384;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29401_29462 = state_29384__$1;
(statearr_29401_29462[(1)] = (8));

} else {
var statearr_29402_29463 = state_29384__$1;
(statearr_29402_29463[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (14))){
var inst_29362 = (state_29384[(8)]);
var inst_29364 = (state_29384[(11)]);
var inst_29362__$1 = (state_29384[(2)]);
var inst_29363 = (inst_29362__$1 == null);
var inst_29364__$1 = cljs.core.not(inst_29363);
var state_29384__$1 = (function (){var statearr_29403 = state_29384;
(statearr_29403[(8)] = inst_29362__$1);

(statearr_29403[(11)] = inst_29364__$1);

return statearr_29403;
})();
if(inst_29364__$1){
var statearr_29404_29464 = state_29384__$1;
(statearr_29404_29464[(1)] = (15));

} else {
var statearr_29405_29465 = state_29384__$1;
(statearr_29405_29465[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (16))){
var inst_29364 = (state_29384[(11)]);
var state_29384__$1 = state_29384;
var statearr_29406_29466 = state_29384__$1;
(statearr_29406_29466[(2)] = inst_29364);

(statearr_29406_29466[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (10))){
var inst_29356 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29407_29467 = state_29384__$1;
(statearr_29407_29467[(2)] = inst_29356);

(statearr_29407_29467[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (18))){
var inst_29367 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29408_29468 = state_29384__$1;
(statearr_29408_29468[(2)] = inst_29367);

(statearr_29408_29468[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29385 === (8))){
var inst_29353 = cljs.core.async.close_BANG_(to);
var state_29384__$1 = state_29384;
var statearr_29409_29469 = state_29384__$1;
(statearr_29409_29469[(2)] = inst_29353);

(statearr_29409_29469[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto__,jobs,results,process,async))
;
return ((function (switch__28990__auto__,c__29090__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0 = (function (){
var statearr_29410 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__);

(statearr_29410[(1)] = (1));

return statearr_29410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1 = (function (state_29384){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29384);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29411){if((e29411 instanceof Object)){
var ex__28994__auto__ = e29411;
var statearr_29412_29470 = state_29384;
(statearr_29412_29470[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29384);

return cljs.core.cst$kw$recur;
} else {
throw e29411;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29471 = state_29384;
state_29384 = G__29471;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto__,jobs,results,process,async))
})();
var state__29092__auto__ = (function (){var statearr_29413 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29413[(6)] = c__29090__auto__);

return statearr_29413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto__,jobs,results,process,async))
);

return c__29090__auto__;
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
var G__29473 = arguments.length;
switch (G__29473) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__29476 = arguments.length;
switch (G__29476) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__29479 = arguments.length;
switch (G__29479) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29090__auto___29528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___29528,tc,fc){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___29528,tc,fc){
return (function (state_29505){
var state_val_29506 = (state_29505[(1)]);
if((state_val_29506 === (7))){
var inst_29501 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29507_29529 = state_29505__$1;
(statearr_29507_29529[(2)] = inst_29501);

(statearr_29507_29529[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29506 === (1))){
var state_29505__$1 = state_29505;
var statearr_29508_29530 = state_29505__$1;
(statearr_29508_29530[(2)] = null);

(statearr_29508_29530[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29506 === (4))){
var inst_29482 = (state_29505[(7)]);
var inst_29482__$1 = (state_29505[(2)]);
var inst_29483 = (inst_29482__$1 == null);
var state_29505__$1 = (function (){var statearr_29509 = state_29505;
(statearr_29509[(7)] = inst_29482__$1);

return statearr_29509;
})();
if(cljs.core.truth_(inst_29483)){
var statearr_29510_29531 = state_29505__$1;
(statearr_29510_29531[(1)] = (5));

} else {
var statearr_29511_29532 = state_29505__$1;
(statearr_29511_29532[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29506 === (13))){
var state_29505__$1 = state_29505;
var statearr_29512_29533 = state_29505__$1;
(statearr_29512_29533[(2)] = null);

(statearr_29512_29533[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29506 === (6))){
var inst_29482 = (state_29505[(7)]);
var inst_29488 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29482) : p.call(null,inst_29482));
var state_29505__$1 = state_29505;
if(cljs.core.truth_(inst_29488)){
var statearr_29513_29534 = state_29505__$1;
(statearr_29513_29534[(1)] = (9));

} else {
var statearr_29514_29535 = state_29505__$1;
(statearr_29514_29535[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29506 === (3))){
var inst_29503 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29505__$1,inst_29503);
} else {
if((state_val_29506 === (12))){
var state_29505__$1 = state_29505;
var statearr_29515_29536 = state_29505__$1;
(statearr_29515_29536[(2)] = null);

(statearr_29515_29536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29506 === (2))){
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29505__$1,(4),ch);
} else {
if((state_val_29506 === (11))){
var inst_29482 = (state_29505[(7)]);
var inst_29492 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29505__$1,(8),inst_29492,inst_29482);
} else {
if((state_val_29506 === (9))){
var state_29505__$1 = state_29505;
var statearr_29516_29537 = state_29505__$1;
(statearr_29516_29537[(2)] = tc);

(statearr_29516_29537[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29506 === (5))){
var inst_29485 = cljs.core.async.close_BANG_(tc);
var inst_29486 = cljs.core.async.close_BANG_(fc);
var state_29505__$1 = (function (){var statearr_29517 = state_29505;
(statearr_29517[(8)] = inst_29485);

return statearr_29517;
})();
var statearr_29518_29538 = state_29505__$1;
(statearr_29518_29538[(2)] = inst_29486);

(statearr_29518_29538[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29506 === (14))){
var inst_29499 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29519_29539 = state_29505__$1;
(statearr_29519_29539[(2)] = inst_29499);

(statearr_29519_29539[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29506 === (10))){
var state_29505__$1 = state_29505;
var statearr_29520_29540 = state_29505__$1;
(statearr_29520_29540[(2)] = fc);

(statearr_29520_29540[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29506 === (8))){
var inst_29494 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
if(cljs.core.truth_(inst_29494)){
var statearr_29521_29541 = state_29505__$1;
(statearr_29521_29541[(1)] = (12));

} else {
var statearr_29522_29542 = state_29505__$1;
(statearr_29522_29542[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___29528,tc,fc))
;
return ((function (switch__28990__auto__,c__29090__auto___29528,tc,fc){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_29523 = [null,null,null,null,null,null,null,null,null];
(statearr_29523[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_29523[(1)] = (1));

return statearr_29523;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_29505){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29505);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29524){if((e29524 instanceof Object)){
var ex__28994__auto__ = e29524;
var statearr_29525_29543 = state_29505;
(statearr_29525_29543[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29505);

return cljs.core.cst$kw$recur;
} else {
throw e29524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29544 = state_29505;
state_29505 = G__29544;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_29505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_29505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___29528,tc,fc))
})();
var state__29092__auto__ = (function (){var statearr_29526 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29526[(6)] = c__29090__auto___29528);

return statearr_29526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___29528,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29090__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto__){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto__){
return (function (state_29565){
var state_val_29566 = (state_29565[(1)]);
if((state_val_29566 === (7))){
var inst_29561 = (state_29565[(2)]);
var state_29565__$1 = state_29565;
var statearr_29567_29585 = state_29565__$1;
(statearr_29567_29585[(2)] = inst_29561);

(statearr_29567_29585[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29566 === (1))){
var inst_29545 = init;
var state_29565__$1 = (function (){var statearr_29568 = state_29565;
(statearr_29568[(7)] = inst_29545);

return statearr_29568;
})();
var statearr_29569_29586 = state_29565__$1;
(statearr_29569_29586[(2)] = null);

(statearr_29569_29586[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29566 === (4))){
var inst_29548 = (state_29565[(8)]);
var inst_29548__$1 = (state_29565[(2)]);
var inst_29549 = (inst_29548__$1 == null);
var state_29565__$1 = (function (){var statearr_29570 = state_29565;
(statearr_29570[(8)] = inst_29548__$1);

return statearr_29570;
})();
if(cljs.core.truth_(inst_29549)){
var statearr_29571_29587 = state_29565__$1;
(statearr_29571_29587[(1)] = (5));

} else {
var statearr_29572_29588 = state_29565__$1;
(statearr_29572_29588[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29566 === (6))){
var inst_29552 = (state_29565[(9)]);
var inst_29548 = (state_29565[(8)]);
var inst_29545 = (state_29565[(7)]);
var inst_29552__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29545,inst_29548) : f.call(null,inst_29545,inst_29548));
var inst_29553 = cljs.core.reduced_QMARK_(inst_29552__$1);
var state_29565__$1 = (function (){var statearr_29573 = state_29565;
(statearr_29573[(9)] = inst_29552__$1);

return statearr_29573;
})();
if(inst_29553){
var statearr_29574_29589 = state_29565__$1;
(statearr_29574_29589[(1)] = (8));

} else {
var statearr_29575_29590 = state_29565__$1;
(statearr_29575_29590[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29566 === (3))){
var inst_29563 = (state_29565[(2)]);
var state_29565__$1 = state_29565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29565__$1,inst_29563);
} else {
if((state_val_29566 === (2))){
var state_29565__$1 = state_29565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29565__$1,(4),ch);
} else {
if((state_val_29566 === (9))){
var inst_29552 = (state_29565[(9)]);
var inst_29545 = inst_29552;
var state_29565__$1 = (function (){var statearr_29576 = state_29565;
(statearr_29576[(7)] = inst_29545);

return statearr_29576;
})();
var statearr_29577_29591 = state_29565__$1;
(statearr_29577_29591[(2)] = null);

(statearr_29577_29591[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29566 === (5))){
var inst_29545 = (state_29565[(7)]);
var state_29565__$1 = state_29565;
var statearr_29578_29592 = state_29565__$1;
(statearr_29578_29592[(2)] = inst_29545);

(statearr_29578_29592[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29566 === (10))){
var inst_29559 = (state_29565[(2)]);
var state_29565__$1 = state_29565;
var statearr_29579_29593 = state_29565__$1;
(statearr_29579_29593[(2)] = inst_29559);

(statearr_29579_29593[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29566 === (8))){
var inst_29552 = (state_29565[(9)]);
var inst_29555 = cljs.core.deref(inst_29552);
var state_29565__$1 = state_29565;
var statearr_29580_29594 = state_29565__$1;
(statearr_29580_29594[(2)] = inst_29555);

(statearr_29580_29594[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto__))
;
return ((function (switch__28990__auto__,c__29090__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28991__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28991__auto____0 = (function (){
var statearr_29581 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29581[(0)] = cljs$core$async$reduce_$_state_machine__28991__auto__);

(statearr_29581[(1)] = (1));

return statearr_29581;
});
var cljs$core$async$reduce_$_state_machine__28991__auto____1 = (function (state_29565){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29565);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29582){if((e29582 instanceof Object)){
var ex__28994__auto__ = e29582;
var statearr_29583_29595 = state_29565;
(statearr_29583_29595[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29565);

return cljs.core.cst$kw$recur;
} else {
throw e29582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29596 = state_29565;
state_29565 = G__29596;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28991__auto__ = function(state_29565){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28991__auto____1.call(this,state_29565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28991__auto____0;
cljs$core$async$reduce_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28991__auto____1;
return cljs$core$async$reduce_$_state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto__))
})();
var state__29092__auto__ = (function (){var statearr_29584 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29584[(6)] = c__29090__auto__);

return statearr_29584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto__))
);

return c__29090__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29090__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto__,f__$1){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto__,f__$1){
return (function (state_29602){
var state_val_29603 = (state_29602[(1)]);
if((state_val_29603 === (1))){
var inst_29597 = cljs.core.async.reduce(f__$1,init,ch);
var state_29602__$1 = state_29602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29602__$1,(2),inst_29597);
} else {
if((state_val_29603 === (2))){
var inst_29599 = (state_29602[(2)]);
var inst_29600 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29599) : f__$1.call(null,inst_29599));
var state_29602__$1 = state_29602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29602__$1,inst_29600);
} else {
return null;
}
}
});})(c__29090__auto__,f__$1))
;
return ((function (switch__28990__auto__,c__29090__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28991__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28991__auto____0 = (function (){
var statearr_29604 = [null,null,null,null,null,null,null];
(statearr_29604[(0)] = cljs$core$async$transduce_$_state_machine__28991__auto__);

(statearr_29604[(1)] = (1));

return statearr_29604;
});
var cljs$core$async$transduce_$_state_machine__28991__auto____1 = (function (state_29602){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29602);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29605){if((e29605 instanceof Object)){
var ex__28994__auto__ = e29605;
var statearr_29606_29608 = state_29602;
(statearr_29606_29608[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29602);

return cljs.core.cst$kw$recur;
} else {
throw e29605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29609 = state_29602;
state_29602 = G__29609;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28991__auto__ = function(state_29602){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28991__auto____1.call(this,state_29602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28991__auto____0;
cljs$core$async$transduce_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28991__auto____1;
return cljs$core$async$transduce_$_state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto__,f__$1))
})();
var state__29092__auto__ = (function (){var statearr_29607 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29607[(6)] = c__29090__auto__);

return statearr_29607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto__,f__$1))
);

return c__29090__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29611 = arguments.length;
switch (G__29611) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29090__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto__){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto__){
return (function (state_29636){
var state_val_29637 = (state_29636[(1)]);
if((state_val_29637 === (7))){
var inst_29618 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29638_29659 = state_29636__$1;
(statearr_29638_29659[(2)] = inst_29618);

(statearr_29638_29659[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29637 === (1))){
var inst_29612 = cljs.core.seq(coll);
var inst_29613 = inst_29612;
var state_29636__$1 = (function (){var statearr_29639 = state_29636;
(statearr_29639[(7)] = inst_29613);

return statearr_29639;
})();
var statearr_29640_29660 = state_29636__$1;
(statearr_29640_29660[(2)] = null);

(statearr_29640_29660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29637 === (4))){
var inst_29613 = (state_29636[(7)]);
var inst_29616 = cljs.core.first(inst_29613);
var state_29636__$1 = state_29636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29636__$1,(7),ch,inst_29616);
} else {
if((state_val_29637 === (13))){
var inst_29630 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29641_29661 = state_29636__$1;
(statearr_29641_29661[(2)] = inst_29630);

(statearr_29641_29661[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29637 === (6))){
var inst_29621 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
if(cljs.core.truth_(inst_29621)){
var statearr_29642_29662 = state_29636__$1;
(statearr_29642_29662[(1)] = (8));

} else {
var statearr_29643_29663 = state_29636__$1;
(statearr_29643_29663[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29637 === (3))){
var inst_29634 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29636__$1,inst_29634);
} else {
if((state_val_29637 === (12))){
var state_29636__$1 = state_29636;
var statearr_29644_29664 = state_29636__$1;
(statearr_29644_29664[(2)] = null);

(statearr_29644_29664[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29637 === (2))){
var inst_29613 = (state_29636[(7)]);
var state_29636__$1 = state_29636;
if(cljs.core.truth_(inst_29613)){
var statearr_29645_29665 = state_29636__$1;
(statearr_29645_29665[(1)] = (4));

} else {
var statearr_29646_29666 = state_29636__$1;
(statearr_29646_29666[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29637 === (11))){
var inst_29627 = cljs.core.async.close_BANG_(ch);
var state_29636__$1 = state_29636;
var statearr_29647_29667 = state_29636__$1;
(statearr_29647_29667[(2)] = inst_29627);

(statearr_29647_29667[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29637 === (9))){
var state_29636__$1 = state_29636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29648_29668 = state_29636__$1;
(statearr_29648_29668[(1)] = (11));

} else {
var statearr_29649_29669 = state_29636__$1;
(statearr_29649_29669[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29637 === (5))){
var inst_29613 = (state_29636[(7)]);
var state_29636__$1 = state_29636;
var statearr_29650_29670 = state_29636__$1;
(statearr_29650_29670[(2)] = inst_29613);

(statearr_29650_29670[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29637 === (10))){
var inst_29632 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29651_29671 = state_29636__$1;
(statearr_29651_29671[(2)] = inst_29632);

(statearr_29651_29671[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29637 === (8))){
var inst_29613 = (state_29636[(7)]);
var inst_29623 = cljs.core.next(inst_29613);
var inst_29613__$1 = inst_29623;
var state_29636__$1 = (function (){var statearr_29652 = state_29636;
(statearr_29652[(7)] = inst_29613__$1);

return statearr_29652;
})();
var statearr_29653_29672 = state_29636__$1;
(statearr_29653_29672[(2)] = null);

(statearr_29653_29672[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto__))
;
return ((function (switch__28990__auto__,c__29090__auto__){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_29654 = [null,null,null,null,null,null,null,null];
(statearr_29654[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_29654[(1)] = (1));

return statearr_29654;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_29636){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29636);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29655){if((e29655 instanceof Object)){
var ex__28994__auto__ = e29655;
var statearr_29656_29673 = state_29636;
(statearr_29656_29673[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29636);

return cljs.core.cst$kw$recur;
} else {
throw e29655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29674 = state_29636;
state_29636 = G__29674;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_29636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_29636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto__))
})();
var state__29092__auto__ = (function (){var statearr_29657 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29657[(6)] = c__29090__auto__);

return statearr_29657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto__))
);

return c__29090__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7443__auto__ = (((_ == null))?null:_);
var m__7444__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7444__auto__.call(null,_));
} else {
var m__7444__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7444__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7443__auto__ = (((m == null))?null:m);
var m__7444__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7444__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7444__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7444__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7443__auto__ = (((m == null))?null:m);
var m__7444__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7444__auto__.call(null,m,ch));
} else {
var m__7444__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7444__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7443__auto__ = (((m == null))?null:m);
var m__7444__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7444__auto__.call(null,m));
} else {
var m__7444__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7444__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if(typeof cljs.core.async.t_cljs$core$async29675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29675 = (function (ch,cs,meta29676){
this.ch = ch;
this.cs = cs;
this.meta29676 = meta29676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29677,meta29676__$1){
var self__ = this;
var _29677__$1 = this;
return (new cljs.core.async.t_cljs$core$async29675(self__.ch,self__.cs,meta29676__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29677){
var self__ = this;
var _29677__$1 = this;
return self__.meta29676;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta29676], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29675";

cljs.core.async.t_cljs$core$async29675.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write(writer__7386__auto__,"cljs.core.async/t_cljs$core$async29675");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29675 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29675(ch__$1,cs__$1,meta29676){
return (new cljs.core.async.t_cljs$core$async29675(ch__$1,cs__$1,meta29676));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29675(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29090__auto___29897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___29897,cs,m,dchan,dctr,done){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___29897,cs,m,dchan,dctr,done){
return (function (state_29812){
var state_val_29813 = (state_29812[(1)]);
if((state_val_29813 === (7))){
var inst_29808 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29814_29898 = state_29812__$1;
(statearr_29814_29898[(2)] = inst_29808);

(statearr_29814_29898[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (20))){
var inst_29711 = (state_29812[(7)]);
var inst_29723 = cljs.core.first(inst_29711);
var inst_29724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29723,(0),null);
var inst_29725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29723,(1),null);
var state_29812__$1 = (function (){var statearr_29815 = state_29812;
(statearr_29815[(8)] = inst_29724);

return statearr_29815;
})();
if(cljs.core.truth_(inst_29725)){
var statearr_29816_29899 = state_29812__$1;
(statearr_29816_29899[(1)] = (22));

} else {
var statearr_29817_29900 = state_29812__$1;
(statearr_29817_29900[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (27))){
var inst_29680 = (state_29812[(9)]);
var inst_29755 = (state_29812[(10)]);
var inst_29760 = (state_29812[(11)]);
var inst_29753 = (state_29812[(12)]);
var inst_29760__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29753,inst_29755);
var inst_29761 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29760__$1,inst_29680,done);
var state_29812__$1 = (function (){var statearr_29818 = state_29812;
(statearr_29818[(11)] = inst_29760__$1);

return statearr_29818;
})();
if(cljs.core.truth_(inst_29761)){
var statearr_29819_29901 = state_29812__$1;
(statearr_29819_29901[(1)] = (30));

} else {
var statearr_29820_29902 = state_29812__$1;
(statearr_29820_29902[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (1))){
var state_29812__$1 = state_29812;
var statearr_29821_29903 = state_29812__$1;
(statearr_29821_29903[(2)] = null);

(statearr_29821_29903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (24))){
var inst_29711 = (state_29812[(7)]);
var inst_29730 = (state_29812[(2)]);
var inst_29731 = cljs.core.next(inst_29711);
var inst_29689 = inst_29731;
var inst_29690 = null;
var inst_29691 = (0);
var inst_29692 = (0);
var state_29812__$1 = (function (){var statearr_29822 = state_29812;
(statearr_29822[(13)] = inst_29692);

(statearr_29822[(14)] = inst_29730);

(statearr_29822[(15)] = inst_29690);

(statearr_29822[(16)] = inst_29689);

(statearr_29822[(17)] = inst_29691);

return statearr_29822;
})();
var statearr_29823_29904 = state_29812__$1;
(statearr_29823_29904[(2)] = null);

(statearr_29823_29904[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (39))){
var state_29812__$1 = state_29812;
var statearr_29827_29905 = state_29812__$1;
(statearr_29827_29905[(2)] = null);

(statearr_29827_29905[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (4))){
var inst_29680 = (state_29812[(9)]);
var inst_29680__$1 = (state_29812[(2)]);
var inst_29681 = (inst_29680__$1 == null);
var state_29812__$1 = (function (){var statearr_29828 = state_29812;
(statearr_29828[(9)] = inst_29680__$1);

return statearr_29828;
})();
if(cljs.core.truth_(inst_29681)){
var statearr_29829_29906 = state_29812__$1;
(statearr_29829_29906[(1)] = (5));

} else {
var statearr_29830_29907 = state_29812__$1;
(statearr_29830_29907[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (15))){
var inst_29692 = (state_29812[(13)]);
var inst_29690 = (state_29812[(15)]);
var inst_29689 = (state_29812[(16)]);
var inst_29691 = (state_29812[(17)]);
var inst_29707 = (state_29812[(2)]);
var inst_29708 = (inst_29692 + (1));
var tmp29824 = inst_29690;
var tmp29825 = inst_29689;
var tmp29826 = inst_29691;
var inst_29689__$1 = tmp29825;
var inst_29690__$1 = tmp29824;
var inst_29691__$1 = tmp29826;
var inst_29692__$1 = inst_29708;
var state_29812__$1 = (function (){var statearr_29831 = state_29812;
(statearr_29831[(13)] = inst_29692__$1);

(statearr_29831[(15)] = inst_29690__$1);

(statearr_29831[(16)] = inst_29689__$1);

(statearr_29831[(17)] = inst_29691__$1);

(statearr_29831[(18)] = inst_29707);

return statearr_29831;
})();
var statearr_29832_29908 = state_29812__$1;
(statearr_29832_29908[(2)] = null);

(statearr_29832_29908[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (21))){
var inst_29734 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29836_29909 = state_29812__$1;
(statearr_29836_29909[(2)] = inst_29734);

(statearr_29836_29909[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (31))){
var inst_29760 = (state_29812[(11)]);
var inst_29764 = done(null);
var inst_29765 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29760);
var state_29812__$1 = (function (){var statearr_29837 = state_29812;
(statearr_29837[(19)] = inst_29764);

return statearr_29837;
})();
var statearr_29838_29910 = state_29812__$1;
(statearr_29838_29910[(2)] = inst_29765);

(statearr_29838_29910[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (32))){
var inst_29755 = (state_29812[(10)]);
var inst_29752 = (state_29812[(20)]);
var inst_29754 = (state_29812[(21)]);
var inst_29753 = (state_29812[(12)]);
var inst_29767 = (state_29812[(2)]);
var inst_29768 = (inst_29755 + (1));
var tmp29833 = inst_29752;
var tmp29834 = inst_29754;
var tmp29835 = inst_29753;
var inst_29752__$1 = tmp29833;
var inst_29753__$1 = tmp29835;
var inst_29754__$1 = tmp29834;
var inst_29755__$1 = inst_29768;
var state_29812__$1 = (function (){var statearr_29839 = state_29812;
(statearr_29839[(10)] = inst_29755__$1);

(statearr_29839[(22)] = inst_29767);

(statearr_29839[(20)] = inst_29752__$1);

(statearr_29839[(21)] = inst_29754__$1);

(statearr_29839[(12)] = inst_29753__$1);

return statearr_29839;
})();
var statearr_29840_29911 = state_29812__$1;
(statearr_29840_29911[(2)] = null);

(statearr_29840_29911[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (40))){
var inst_29780 = (state_29812[(23)]);
var inst_29784 = done(null);
var inst_29785 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29780);
var state_29812__$1 = (function (){var statearr_29841 = state_29812;
(statearr_29841[(24)] = inst_29784);

return statearr_29841;
})();
var statearr_29842_29912 = state_29812__$1;
(statearr_29842_29912[(2)] = inst_29785);

(statearr_29842_29912[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (33))){
var inst_29771 = (state_29812[(25)]);
var inst_29773 = cljs.core.chunked_seq_QMARK_(inst_29771);
var state_29812__$1 = state_29812;
if(inst_29773){
var statearr_29843_29913 = state_29812__$1;
(statearr_29843_29913[(1)] = (36));

} else {
var statearr_29844_29914 = state_29812__$1;
(statearr_29844_29914[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (13))){
var inst_29701 = (state_29812[(26)]);
var inst_29704 = cljs.core.async.close_BANG_(inst_29701);
var state_29812__$1 = state_29812;
var statearr_29845_29915 = state_29812__$1;
(statearr_29845_29915[(2)] = inst_29704);

(statearr_29845_29915[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (22))){
var inst_29724 = (state_29812[(8)]);
var inst_29727 = cljs.core.async.close_BANG_(inst_29724);
var state_29812__$1 = state_29812;
var statearr_29846_29916 = state_29812__$1;
(statearr_29846_29916[(2)] = inst_29727);

(statearr_29846_29916[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (36))){
var inst_29771 = (state_29812[(25)]);
var inst_29775 = cljs.core.chunk_first(inst_29771);
var inst_29776 = cljs.core.chunk_rest(inst_29771);
var inst_29777 = cljs.core.count(inst_29775);
var inst_29752 = inst_29776;
var inst_29753 = inst_29775;
var inst_29754 = inst_29777;
var inst_29755 = (0);
var state_29812__$1 = (function (){var statearr_29847 = state_29812;
(statearr_29847[(10)] = inst_29755);

(statearr_29847[(20)] = inst_29752);

(statearr_29847[(21)] = inst_29754);

(statearr_29847[(12)] = inst_29753);

return statearr_29847;
})();
var statearr_29848_29917 = state_29812__$1;
(statearr_29848_29917[(2)] = null);

(statearr_29848_29917[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (41))){
var inst_29771 = (state_29812[(25)]);
var inst_29787 = (state_29812[(2)]);
var inst_29788 = cljs.core.next(inst_29771);
var inst_29752 = inst_29788;
var inst_29753 = null;
var inst_29754 = (0);
var inst_29755 = (0);
var state_29812__$1 = (function (){var statearr_29849 = state_29812;
(statearr_29849[(10)] = inst_29755);

(statearr_29849[(20)] = inst_29752);

(statearr_29849[(27)] = inst_29787);

(statearr_29849[(21)] = inst_29754);

(statearr_29849[(12)] = inst_29753);

return statearr_29849;
})();
var statearr_29850_29918 = state_29812__$1;
(statearr_29850_29918[(2)] = null);

(statearr_29850_29918[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (43))){
var state_29812__$1 = state_29812;
var statearr_29851_29919 = state_29812__$1;
(statearr_29851_29919[(2)] = null);

(statearr_29851_29919[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (29))){
var inst_29796 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29852_29920 = state_29812__$1;
(statearr_29852_29920[(2)] = inst_29796);

(statearr_29852_29920[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (44))){
var inst_29805 = (state_29812[(2)]);
var state_29812__$1 = (function (){var statearr_29853 = state_29812;
(statearr_29853[(28)] = inst_29805);

return statearr_29853;
})();
var statearr_29854_29921 = state_29812__$1;
(statearr_29854_29921[(2)] = null);

(statearr_29854_29921[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (6))){
var inst_29744 = (state_29812[(29)]);
var inst_29743 = cljs.core.deref(cs);
var inst_29744__$1 = cljs.core.keys(inst_29743);
var inst_29745 = cljs.core.count(inst_29744__$1);
var inst_29746 = cljs.core.reset_BANG_(dctr,inst_29745);
var inst_29751 = cljs.core.seq(inst_29744__$1);
var inst_29752 = inst_29751;
var inst_29753 = null;
var inst_29754 = (0);
var inst_29755 = (0);
var state_29812__$1 = (function (){var statearr_29855 = state_29812;
(statearr_29855[(30)] = inst_29746);

(statearr_29855[(10)] = inst_29755);

(statearr_29855[(20)] = inst_29752);

(statearr_29855[(29)] = inst_29744__$1);

(statearr_29855[(21)] = inst_29754);

(statearr_29855[(12)] = inst_29753);

return statearr_29855;
})();
var statearr_29856_29922 = state_29812__$1;
(statearr_29856_29922[(2)] = null);

(statearr_29856_29922[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (28))){
var inst_29771 = (state_29812[(25)]);
var inst_29752 = (state_29812[(20)]);
var inst_29771__$1 = cljs.core.seq(inst_29752);
var state_29812__$1 = (function (){var statearr_29857 = state_29812;
(statearr_29857[(25)] = inst_29771__$1);

return statearr_29857;
})();
if(inst_29771__$1){
var statearr_29858_29923 = state_29812__$1;
(statearr_29858_29923[(1)] = (33));

} else {
var statearr_29859_29924 = state_29812__$1;
(statearr_29859_29924[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (25))){
var inst_29755 = (state_29812[(10)]);
var inst_29754 = (state_29812[(21)]);
var inst_29757 = (inst_29755 < inst_29754);
var inst_29758 = inst_29757;
var state_29812__$1 = state_29812;
if(cljs.core.truth_(inst_29758)){
var statearr_29860_29925 = state_29812__$1;
(statearr_29860_29925[(1)] = (27));

} else {
var statearr_29861_29926 = state_29812__$1;
(statearr_29861_29926[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (34))){
var state_29812__$1 = state_29812;
var statearr_29862_29927 = state_29812__$1;
(statearr_29862_29927[(2)] = null);

(statearr_29862_29927[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (17))){
var state_29812__$1 = state_29812;
var statearr_29863_29928 = state_29812__$1;
(statearr_29863_29928[(2)] = null);

(statearr_29863_29928[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (3))){
var inst_29810 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29812__$1,inst_29810);
} else {
if((state_val_29813 === (12))){
var inst_29739 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29864_29929 = state_29812__$1;
(statearr_29864_29929[(2)] = inst_29739);

(statearr_29864_29929[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (2))){
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29812__$1,(4),ch);
} else {
if((state_val_29813 === (23))){
var state_29812__$1 = state_29812;
var statearr_29865_29930 = state_29812__$1;
(statearr_29865_29930[(2)] = null);

(statearr_29865_29930[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (35))){
var inst_29794 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29866_29931 = state_29812__$1;
(statearr_29866_29931[(2)] = inst_29794);

(statearr_29866_29931[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (19))){
var inst_29711 = (state_29812[(7)]);
var inst_29715 = cljs.core.chunk_first(inst_29711);
var inst_29716 = cljs.core.chunk_rest(inst_29711);
var inst_29717 = cljs.core.count(inst_29715);
var inst_29689 = inst_29716;
var inst_29690 = inst_29715;
var inst_29691 = inst_29717;
var inst_29692 = (0);
var state_29812__$1 = (function (){var statearr_29867 = state_29812;
(statearr_29867[(13)] = inst_29692);

(statearr_29867[(15)] = inst_29690);

(statearr_29867[(16)] = inst_29689);

(statearr_29867[(17)] = inst_29691);

return statearr_29867;
})();
var statearr_29868_29932 = state_29812__$1;
(statearr_29868_29932[(2)] = null);

(statearr_29868_29932[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (11))){
var inst_29689 = (state_29812[(16)]);
var inst_29711 = (state_29812[(7)]);
var inst_29711__$1 = cljs.core.seq(inst_29689);
var state_29812__$1 = (function (){var statearr_29869 = state_29812;
(statearr_29869[(7)] = inst_29711__$1);

return statearr_29869;
})();
if(inst_29711__$1){
var statearr_29870_29933 = state_29812__$1;
(statearr_29870_29933[(1)] = (16));

} else {
var statearr_29871_29934 = state_29812__$1;
(statearr_29871_29934[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (9))){
var inst_29741 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29872_29935 = state_29812__$1;
(statearr_29872_29935[(2)] = inst_29741);

(statearr_29872_29935[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (5))){
var inst_29687 = cljs.core.deref(cs);
var inst_29688 = cljs.core.seq(inst_29687);
var inst_29689 = inst_29688;
var inst_29690 = null;
var inst_29691 = (0);
var inst_29692 = (0);
var state_29812__$1 = (function (){var statearr_29873 = state_29812;
(statearr_29873[(13)] = inst_29692);

(statearr_29873[(15)] = inst_29690);

(statearr_29873[(16)] = inst_29689);

(statearr_29873[(17)] = inst_29691);

return statearr_29873;
})();
var statearr_29874_29936 = state_29812__$1;
(statearr_29874_29936[(2)] = null);

(statearr_29874_29936[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (14))){
var state_29812__$1 = state_29812;
var statearr_29875_29937 = state_29812__$1;
(statearr_29875_29937[(2)] = null);

(statearr_29875_29937[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (45))){
var inst_29802 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29876_29938 = state_29812__$1;
(statearr_29876_29938[(2)] = inst_29802);

(statearr_29876_29938[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (26))){
var inst_29744 = (state_29812[(29)]);
var inst_29798 = (state_29812[(2)]);
var inst_29799 = cljs.core.seq(inst_29744);
var state_29812__$1 = (function (){var statearr_29877 = state_29812;
(statearr_29877[(31)] = inst_29798);

return statearr_29877;
})();
if(inst_29799){
var statearr_29878_29939 = state_29812__$1;
(statearr_29878_29939[(1)] = (42));

} else {
var statearr_29879_29940 = state_29812__$1;
(statearr_29879_29940[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (16))){
var inst_29711 = (state_29812[(7)]);
var inst_29713 = cljs.core.chunked_seq_QMARK_(inst_29711);
var state_29812__$1 = state_29812;
if(inst_29713){
var statearr_29880_29941 = state_29812__$1;
(statearr_29880_29941[(1)] = (19));

} else {
var statearr_29881_29942 = state_29812__$1;
(statearr_29881_29942[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (38))){
var inst_29791 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29882_29943 = state_29812__$1;
(statearr_29882_29943[(2)] = inst_29791);

(statearr_29882_29943[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (30))){
var state_29812__$1 = state_29812;
var statearr_29883_29944 = state_29812__$1;
(statearr_29883_29944[(2)] = null);

(statearr_29883_29944[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (10))){
var inst_29692 = (state_29812[(13)]);
var inst_29690 = (state_29812[(15)]);
var inst_29700 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29690,inst_29692);
var inst_29701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29700,(0),null);
var inst_29702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29700,(1),null);
var state_29812__$1 = (function (){var statearr_29884 = state_29812;
(statearr_29884[(26)] = inst_29701);

return statearr_29884;
})();
if(cljs.core.truth_(inst_29702)){
var statearr_29885_29945 = state_29812__$1;
(statearr_29885_29945[(1)] = (13));

} else {
var statearr_29886_29946 = state_29812__$1;
(statearr_29886_29946[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (18))){
var inst_29737 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29887_29947 = state_29812__$1;
(statearr_29887_29947[(2)] = inst_29737);

(statearr_29887_29947[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (42))){
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29812__$1,(45),dchan);
} else {
if((state_val_29813 === (37))){
var inst_29771 = (state_29812[(25)]);
var inst_29680 = (state_29812[(9)]);
var inst_29780 = (state_29812[(23)]);
var inst_29780__$1 = cljs.core.first(inst_29771);
var inst_29781 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29780__$1,inst_29680,done);
var state_29812__$1 = (function (){var statearr_29888 = state_29812;
(statearr_29888[(23)] = inst_29780__$1);

return statearr_29888;
})();
if(cljs.core.truth_(inst_29781)){
var statearr_29889_29948 = state_29812__$1;
(statearr_29889_29948[(1)] = (39));

} else {
var statearr_29890_29949 = state_29812__$1;
(statearr_29890_29949[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29813 === (8))){
var inst_29692 = (state_29812[(13)]);
var inst_29691 = (state_29812[(17)]);
var inst_29694 = (inst_29692 < inst_29691);
var inst_29695 = inst_29694;
var state_29812__$1 = state_29812;
if(cljs.core.truth_(inst_29695)){
var statearr_29891_29950 = state_29812__$1;
(statearr_29891_29950[(1)] = (10));

} else {
var statearr_29892_29951 = state_29812__$1;
(statearr_29892_29951[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___29897,cs,m,dchan,dctr,done))
;
return ((function (switch__28990__auto__,c__29090__auto___29897,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28991__auto__ = null;
var cljs$core$async$mult_$_state_machine__28991__auto____0 = (function (){
var statearr_29893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29893[(0)] = cljs$core$async$mult_$_state_machine__28991__auto__);

(statearr_29893[(1)] = (1));

return statearr_29893;
});
var cljs$core$async$mult_$_state_machine__28991__auto____1 = (function (state_29812){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_29812);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e29894){if((e29894 instanceof Object)){
var ex__28994__auto__ = e29894;
var statearr_29895_29952 = state_29812;
(statearr_29895_29952[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29812);

return cljs.core.cst$kw$recur;
} else {
throw e29894;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__29953 = state_29812;
state_29812 = G__29953;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28991__auto__ = function(state_29812){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28991__auto____1.call(this,state_29812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28991__auto____0;
cljs$core$async$mult_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28991__auto____1;
return cljs$core$async$mult_$_state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___29897,cs,m,dchan,dctr,done))
})();
var state__29092__auto__ = (function (){var statearr_29896 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_29896[(6)] = c__29090__auto___29897);

return statearr_29896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___29897,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29955 = arguments.length;
switch (G__29955) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7443__auto__ = (((m == null))?null:m);
var m__7444__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7444__auto__.call(null,m,ch));
} else {
var m__7444__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7444__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7443__auto__ = (((m == null))?null:m);
var m__7444__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7444__auto__.call(null,m,ch));
} else {
var m__7444__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7444__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7443__auto__ = (((m == null))?null:m);
var m__7444__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7444__auto__.call(null,m));
} else {
var m__7444__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7444__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7443__auto__ = (((m == null))?null:m);
var m__7444__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7444__auto__.call(null,m,state_map));
} else {
var m__7444__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7444__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7443__auto__ = (((m == null))?null:m);
var m__7444__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7444__auto__.call(null,m,mode));
} else {
var m__7444__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7444__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7906__auto__ = [];
var len__7899__auto___29967 = arguments.length;
var i__7900__auto___29968 = (0);
while(true){
if((i__7900__auto___29968 < len__7899__auto___29967)){
args__7906__auto__.push((arguments[i__7900__auto___29968]));

var G__29969 = (i__7900__auto___29968 + (1));
i__7900__auto___29968 = G__29969;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29961){
var map__29962 = p__29961;
var map__29962__$1 = ((((!((map__29962 == null)))?((((map__29962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29962):map__29962);
var opts = map__29962__$1;
var statearr_29964_29970 = state;
(statearr_29964_29970[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__29962,map__29962__$1,opts){
return (function (val){
var statearr_29965_29971 = state;
(statearr_29965_29971[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__29962,map__29962__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29966_29972 = state;
(statearr_29966_29972[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29957){
var G__29958 = cljs.core.first(seq29957);
var seq29957__$1 = cljs.core.next(seq29957);
var G__29959 = cljs.core.first(seq29957__$1);
var seq29957__$2 = cljs.core.next(seq29957__$1);
var G__29960 = cljs.core.first(seq29957__$2);
var seq29957__$3 = cljs.core.next(seq29957__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29958,G__29959,G__29960,seq29957__$3);
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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29973 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29974){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29974 = meta29974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29975,meta29974__$1){
var self__ = this;
var _29975__$1 = this;
return (new cljs.core.async.t_cljs$core$async29973(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29974__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29975){
var self__ = this;
var _29975__$1 = this;
return self__.meta29974;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29973.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta29974], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29973";

cljs.core.async.t_cljs$core$async29973.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write(writer__7386__auto__,"cljs.core.async/t_cljs$core$async29973");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29973 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29973(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29974){
return (new cljs.core.async.t_cljs$core$async29973(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29974));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29973(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29090__auto___30137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___30137,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___30137,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30077){
var state_val_30078 = (state_30077[(1)]);
if((state_val_30078 === (7))){
var inst_29992 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30079_30138 = state_30077__$1;
(statearr_30079_30138[(2)] = inst_29992);

(statearr_30079_30138[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (20))){
var inst_30004 = (state_30077[(7)]);
var state_30077__$1 = state_30077;
var statearr_30080_30139 = state_30077__$1;
(statearr_30080_30139[(2)] = inst_30004);

(statearr_30080_30139[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (27))){
var state_30077__$1 = state_30077;
var statearr_30081_30140 = state_30077__$1;
(statearr_30081_30140[(2)] = null);

(statearr_30081_30140[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (1))){
var inst_29979 = (state_30077[(8)]);
var inst_29979__$1 = calc_state();
var inst_29981 = (inst_29979__$1 == null);
var inst_29982 = cljs.core.not(inst_29981);
var state_30077__$1 = (function (){var statearr_30082 = state_30077;
(statearr_30082[(8)] = inst_29979__$1);

return statearr_30082;
})();
if(inst_29982){
var statearr_30083_30141 = state_30077__$1;
(statearr_30083_30141[(1)] = (2));

} else {
var statearr_30084_30142 = state_30077__$1;
(statearr_30084_30142[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (24))){
var inst_30028 = (state_30077[(9)]);
var inst_30037 = (state_30077[(10)]);
var inst_30051 = (state_30077[(11)]);
var inst_30051__$1 = (inst_30028.cljs$core$IFn$_invoke$arity$1 ? inst_30028.cljs$core$IFn$_invoke$arity$1(inst_30037) : inst_30028.call(null,inst_30037));
var state_30077__$1 = (function (){var statearr_30085 = state_30077;
(statearr_30085[(11)] = inst_30051__$1);

return statearr_30085;
})();
if(cljs.core.truth_(inst_30051__$1)){
var statearr_30086_30143 = state_30077__$1;
(statearr_30086_30143[(1)] = (29));

} else {
var statearr_30087_30144 = state_30077__$1;
(statearr_30087_30144[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (4))){
var inst_29995 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
if(cljs.core.truth_(inst_29995)){
var statearr_30088_30145 = state_30077__$1;
(statearr_30088_30145[(1)] = (8));

} else {
var statearr_30089_30146 = state_30077__$1;
(statearr_30089_30146[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (15))){
var inst_30022 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
if(cljs.core.truth_(inst_30022)){
var statearr_30090_30147 = state_30077__$1;
(statearr_30090_30147[(1)] = (19));

} else {
var statearr_30091_30148 = state_30077__$1;
(statearr_30091_30148[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (21))){
var inst_30027 = (state_30077[(12)]);
var inst_30027__$1 = (state_30077[(2)]);
var inst_30028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30027__$1,cljs.core.cst$kw$solos);
var inst_30029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30027__$1,cljs.core.cst$kw$mutes);
var inst_30030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30027__$1,cljs.core.cst$kw$reads);
var state_30077__$1 = (function (){var statearr_30092 = state_30077;
(statearr_30092[(9)] = inst_30028);

(statearr_30092[(12)] = inst_30027__$1);

(statearr_30092[(13)] = inst_30029);

return statearr_30092;
})();
return cljs.core.async.ioc_alts_BANG_(state_30077__$1,(22),inst_30030);
} else {
if((state_val_30078 === (31))){
var inst_30059 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
if(cljs.core.truth_(inst_30059)){
var statearr_30093_30149 = state_30077__$1;
(statearr_30093_30149[(1)] = (32));

} else {
var statearr_30094_30150 = state_30077__$1;
(statearr_30094_30150[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (32))){
var inst_30036 = (state_30077[(14)]);
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30077__$1,(35),out,inst_30036);
} else {
if((state_val_30078 === (33))){
var inst_30027 = (state_30077[(12)]);
var inst_30004 = inst_30027;
var state_30077__$1 = (function (){var statearr_30095 = state_30077;
(statearr_30095[(7)] = inst_30004);

return statearr_30095;
})();
var statearr_30096_30151 = state_30077__$1;
(statearr_30096_30151[(2)] = null);

(statearr_30096_30151[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (13))){
var inst_30004 = (state_30077[(7)]);
var inst_30011 = inst_30004.cljs$lang$protocol_mask$partition0$;
var inst_30012 = (inst_30011 & (64));
var inst_30013 = inst_30004.cljs$core$ISeq$;
var inst_30014 = (cljs.core.PROTOCOL_SENTINEL === inst_30013);
var inst_30015 = (inst_30012) || (inst_30014);
var state_30077__$1 = state_30077;
if(cljs.core.truth_(inst_30015)){
var statearr_30097_30152 = state_30077__$1;
(statearr_30097_30152[(1)] = (16));

} else {
var statearr_30098_30153 = state_30077__$1;
(statearr_30098_30153[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (22))){
var inst_30036 = (state_30077[(14)]);
var inst_30037 = (state_30077[(10)]);
var inst_30035 = (state_30077[(2)]);
var inst_30036__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30035,(0),null);
var inst_30037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30035,(1),null);
var inst_30038 = (inst_30036__$1 == null);
var inst_30039 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30037__$1,change);
var inst_30040 = (inst_30038) || (inst_30039);
var state_30077__$1 = (function (){var statearr_30099 = state_30077;
(statearr_30099[(14)] = inst_30036__$1);

(statearr_30099[(10)] = inst_30037__$1);

return statearr_30099;
})();
if(cljs.core.truth_(inst_30040)){
var statearr_30100_30154 = state_30077__$1;
(statearr_30100_30154[(1)] = (23));

} else {
var statearr_30101_30155 = state_30077__$1;
(statearr_30101_30155[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (36))){
var inst_30027 = (state_30077[(12)]);
var inst_30004 = inst_30027;
var state_30077__$1 = (function (){var statearr_30102 = state_30077;
(statearr_30102[(7)] = inst_30004);

return statearr_30102;
})();
var statearr_30103_30156 = state_30077__$1;
(statearr_30103_30156[(2)] = null);

(statearr_30103_30156[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (29))){
var inst_30051 = (state_30077[(11)]);
var state_30077__$1 = state_30077;
var statearr_30104_30157 = state_30077__$1;
(statearr_30104_30157[(2)] = inst_30051);

(statearr_30104_30157[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (6))){
var state_30077__$1 = state_30077;
var statearr_30105_30158 = state_30077__$1;
(statearr_30105_30158[(2)] = false);

(statearr_30105_30158[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (28))){
var inst_30047 = (state_30077[(2)]);
var inst_30048 = calc_state();
var inst_30004 = inst_30048;
var state_30077__$1 = (function (){var statearr_30106 = state_30077;
(statearr_30106[(7)] = inst_30004);

(statearr_30106[(15)] = inst_30047);

return statearr_30106;
})();
var statearr_30107_30159 = state_30077__$1;
(statearr_30107_30159[(2)] = null);

(statearr_30107_30159[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (25))){
var inst_30073 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30108_30160 = state_30077__$1;
(statearr_30108_30160[(2)] = inst_30073);

(statearr_30108_30160[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (34))){
var inst_30071 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30109_30161 = state_30077__$1;
(statearr_30109_30161[(2)] = inst_30071);

(statearr_30109_30161[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (17))){
var state_30077__$1 = state_30077;
var statearr_30110_30162 = state_30077__$1;
(statearr_30110_30162[(2)] = false);

(statearr_30110_30162[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (3))){
var state_30077__$1 = state_30077;
var statearr_30111_30163 = state_30077__$1;
(statearr_30111_30163[(2)] = false);

(statearr_30111_30163[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (12))){
var inst_30075 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30077__$1,inst_30075);
} else {
if((state_val_30078 === (2))){
var inst_29979 = (state_30077[(8)]);
var inst_29984 = inst_29979.cljs$lang$protocol_mask$partition0$;
var inst_29985 = (inst_29984 & (64));
var inst_29986 = inst_29979.cljs$core$ISeq$;
var inst_29987 = (cljs.core.PROTOCOL_SENTINEL === inst_29986);
var inst_29988 = (inst_29985) || (inst_29987);
var state_30077__$1 = state_30077;
if(cljs.core.truth_(inst_29988)){
var statearr_30112_30164 = state_30077__$1;
(statearr_30112_30164[(1)] = (5));

} else {
var statearr_30113_30165 = state_30077__$1;
(statearr_30113_30165[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (23))){
var inst_30036 = (state_30077[(14)]);
var inst_30042 = (inst_30036 == null);
var state_30077__$1 = state_30077;
if(cljs.core.truth_(inst_30042)){
var statearr_30114_30166 = state_30077__$1;
(statearr_30114_30166[(1)] = (26));

} else {
var statearr_30115_30167 = state_30077__$1;
(statearr_30115_30167[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (35))){
var inst_30062 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
if(cljs.core.truth_(inst_30062)){
var statearr_30116_30168 = state_30077__$1;
(statearr_30116_30168[(1)] = (36));

} else {
var statearr_30117_30169 = state_30077__$1;
(statearr_30117_30169[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (19))){
var inst_30004 = (state_30077[(7)]);
var inst_30024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30004);
var state_30077__$1 = state_30077;
var statearr_30118_30170 = state_30077__$1;
(statearr_30118_30170[(2)] = inst_30024);

(statearr_30118_30170[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (11))){
var inst_30004 = (state_30077[(7)]);
var inst_30008 = (inst_30004 == null);
var inst_30009 = cljs.core.not(inst_30008);
var state_30077__$1 = state_30077;
if(inst_30009){
var statearr_30119_30171 = state_30077__$1;
(statearr_30119_30171[(1)] = (13));

} else {
var statearr_30120_30172 = state_30077__$1;
(statearr_30120_30172[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (9))){
var inst_29979 = (state_30077[(8)]);
var state_30077__$1 = state_30077;
var statearr_30121_30173 = state_30077__$1;
(statearr_30121_30173[(2)] = inst_29979);

(statearr_30121_30173[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (5))){
var state_30077__$1 = state_30077;
var statearr_30122_30174 = state_30077__$1;
(statearr_30122_30174[(2)] = true);

(statearr_30122_30174[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (14))){
var state_30077__$1 = state_30077;
var statearr_30123_30175 = state_30077__$1;
(statearr_30123_30175[(2)] = false);

(statearr_30123_30175[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (26))){
var inst_30037 = (state_30077[(10)]);
var inst_30044 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30037);
var state_30077__$1 = state_30077;
var statearr_30124_30176 = state_30077__$1;
(statearr_30124_30176[(2)] = inst_30044);

(statearr_30124_30176[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (16))){
var state_30077__$1 = state_30077;
var statearr_30125_30177 = state_30077__$1;
(statearr_30125_30177[(2)] = true);

(statearr_30125_30177[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (38))){
var inst_30067 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30126_30178 = state_30077__$1;
(statearr_30126_30178[(2)] = inst_30067);

(statearr_30126_30178[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (30))){
var inst_30028 = (state_30077[(9)]);
var inst_30037 = (state_30077[(10)]);
var inst_30029 = (state_30077[(13)]);
var inst_30054 = cljs.core.empty_QMARK_(inst_30028);
var inst_30055 = (inst_30029.cljs$core$IFn$_invoke$arity$1 ? inst_30029.cljs$core$IFn$_invoke$arity$1(inst_30037) : inst_30029.call(null,inst_30037));
var inst_30056 = cljs.core.not(inst_30055);
var inst_30057 = (inst_30054) && (inst_30056);
var state_30077__$1 = state_30077;
var statearr_30127_30179 = state_30077__$1;
(statearr_30127_30179[(2)] = inst_30057);

(statearr_30127_30179[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (10))){
var inst_29979 = (state_30077[(8)]);
var inst_30000 = (state_30077[(2)]);
var inst_30001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30000,cljs.core.cst$kw$solos);
var inst_30002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30000,cljs.core.cst$kw$mutes);
var inst_30003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30000,cljs.core.cst$kw$reads);
var inst_30004 = inst_29979;
var state_30077__$1 = (function (){var statearr_30128 = state_30077;
(statearr_30128[(7)] = inst_30004);

(statearr_30128[(16)] = inst_30001);

(statearr_30128[(17)] = inst_30002);

(statearr_30128[(18)] = inst_30003);

return statearr_30128;
})();
var statearr_30129_30180 = state_30077__$1;
(statearr_30129_30180[(2)] = null);

(statearr_30129_30180[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (18))){
var inst_30019 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30130_30181 = state_30077__$1;
(statearr_30130_30181[(2)] = inst_30019);

(statearr_30130_30181[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (37))){
var state_30077__$1 = state_30077;
var statearr_30131_30182 = state_30077__$1;
(statearr_30131_30182[(2)] = null);

(statearr_30131_30182[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30078 === (8))){
var inst_29979 = (state_30077[(8)]);
var inst_29997 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29979);
var state_30077__$1 = state_30077;
var statearr_30132_30183 = state_30077__$1;
(statearr_30132_30183[(2)] = inst_29997);

(statearr_30132_30183[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___30137,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28990__auto__,c__29090__auto___30137,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28991__auto__ = null;
var cljs$core$async$mix_$_state_machine__28991__auto____0 = (function (){
var statearr_30133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30133[(0)] = cljs$core$async$mix_$_state_machine__28991__auto__);

(statearr_30133[(1)] = (1));

return statearr_30133;
});
var cljs$core$async$mix_$_state_machine__28991__auto____1 = (function (state_30077){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_30077);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e30134){if((e30134 instanceof Object)){
var ex__28994__auto__ = e30134;
var statearr_30135_30184 = state_30077;
(statearr_30135_30184[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30077);

return cljs.core.cst$kw$recur;
} else {
throw e30134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__30185 = state_30077;
state_30077 = G__30185;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28991__auto__ = function(state_30077){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28991__auto____1.call(this,state_30077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28991__auto____0;
cljs$core$async$mix_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28991__auto____1;
return cljs$core$async$mix_$_state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___30137,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29092__auto__ = (function (){var statearr_30136 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_30136[(6)] = c__29090__auto___30137);

return statearr_30136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___30137,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7443__auto__ = (((p == null))?null:p);
var m__7444__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7444__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7444__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7444__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7443__auto__ = (((p == null))?null:p);
var m__7444__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7444__auto__.call(null,p,v,ch));
} else {
var m__7444__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7444__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30187 = arguments.length;
switch (G__30187) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7443__auto__ = (((p == null))?null:p);
var m__7444__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7444__auto__.call(null,p));
} else {
var m__7444__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7444__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7443__auto__ = (((p == null))?null:p);
var m__7444__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7443__auto__)]);
if(!((m__7444__auto__ == null))){
return (m__7444__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7444__auto__.call(null,p,v));
} else {
var m__7444__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return (m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7444__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7444__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__30191 = arguments.length;
switch (G__30191) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6774__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6774__auto__,mults){
return (function (p1__30189_SHARP_){
if(cljs.core.truth_((p1__30189_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30189_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30189_SHARP_.call(null,topic)))){
return p1__30189_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30189_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6774__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30192 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30193){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30193 = meta30193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30194,meta30193__$1){
var self__ = this;
var _30194__$1 = this;
return (new cljs.core.async.t_cljs$core$async30192(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30193__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30192.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30194){
var self__ = this;
var _30194__$1 = this;
return self__.meta30193;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30192.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30192.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30192.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30192.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30192.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30192.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30192.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30192.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta30193], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30192";

cljs.core.async.t_cljs$core$async30192.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write(writer__7386__auto__,"cljs.core.async/t_cljs$core$async30192");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30192 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30192(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30193){
return (new cljs.core.async.t_cljs$core$async30192(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30193));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30192(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29090__auto___30312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___30312,mults,ensure_mult,p){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___30312,mults,ensure_mult,p){
return (function (state_30266){
var state_val_30267 = (state_30266[(1)]);
if((state_val_30267 === (7))){
var inst_30262 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30268_30313 = state_30266__$1;
(statearr_30268_30313[(2)] = inst_30262);

(statearr_30268_30313[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (20))){
var state_30266__$1 = state_30266;
var statearr_30269_30314 = state_30266__$1;
(statearr_30269_30314[(2)] = null);

(statearr_30269_30314[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (1))){
var state_30266__$1 = state_30266;
var statearr_30270_30315 = state_30266__$1;
(statearr_30270_30315[(2)] = null);

(statearr_30270_30315[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (24))){
var inst_30245 = (state_30266[(7)]);
var inst_30254 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30245);
var state_30266__$1 = state_30266;
var statearr_30271_30316 = state_30266__$1;
(statearr_30271_30316[(2)] = inst_30254);

(statearr_30271_30316[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (4))){
var inst_30197 = (state_30266[(8)]);
var inst_30197__$1 = (state_30266[(2)]);
var inst_30198 = (inst_30197__$1 == null);
var state_30266__$1 = (function (){var statearr_30272 = state_30266;
(statearr_30272[(8)] = inst_30197__$1);

return statearr_30272;
})();
if(cljs.core.truth_(inst_30198)){
var statearr_30273_30317 = state_30266__$1;
(statearr_30273_30317[(1)] = (5));

} else {
var statearr_30274_30318 = state_30266__$1;
(statearr_30274_30318[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (15))){
var inst_30239 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30275_30319 = state_30266__$1;
(statearr_30275_30319[(2)] = inst_30239);

(statearr_30275_30319[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (21))){
var inst_30259 = (state_30266[(2)]);
var state_30266__$1 = (function (){var statearr_30276 = state_30266;
(statearr_30276[(9)] = inst_30259);

return statearr_30276;
})();
var statearr_30277_30320 = state_30266__$1;
(statearr_30277_30320[(2)] = null);

(statearr_30277_30320[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (13))){
var inst_30221 = (state_30266[(10)]);
var inst_30223 = cljs.core.chunked_seq_QMARK_(inst_30221);
var state_30266__$1 = state_30266;
if(inst_30223){
var statearr_30278_30321 = state_30266__$1;
(statearr_30278_30321[(1)] = (16));

} else {
var statearr_30279_30322 = state_30266__$1;
(statearr_30279_30322[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (22))){
var inst_30251 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
if(cljs.core.truth_(inst_30251)){
var statearr_30280_30323 = state_30266__$1;
(statearr_30280_30323[(1)] = (23));

} else {
var statearr_30281_30324 = state_30266__$1;
(statearr_30281_30324[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (6))){
var inst_30245 = (state_30266[(7)]);
var inst_30197 = (state_30266[(8)]);
var inst_30247 = (state_30266[(11)]);
var inst_30245__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30197) : topic_fn.call(null,inst_30197));
var inst_30246 = cljs.core.deref(mults);
var inst_30247__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30246,inst_30245__$1);
var state_30266__$1 = (function (){var statearr_30282 = state_30266;
(statearr_30282[(7)] = inst_30245__$1);

(statearr_30282[(11)] = inst_30247__$1);

return statearr_30282;
})();
if(cljs.core.truth_(inst_30247__$1)){
var statearr_30283_30325 = state_30266__$1;
(statearr_30283_30325[(1)] = (19));

} else {
var statearr_30284_30326 = state_30266__$1;
(statearr_30284_30326[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (25))){
var inst_30256 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30285_30327 = state_30266__$1;
(statearr_30285_30327[(2)] = inst_30256);

(statearr_30285_30327[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (17))){
var inst_30221 = (state_30266[(10)]);
var inst_30230 = cljs.core.first(inst_30221);
var inst_30231 = cljs.core.async.muxch_STAR_(inst_30230);
var inst_30232 = cljs.core.async.close_BANG_(inst_30231);
var inst_30233 = cljs.core.next(inst_30221);
var inst_30207 = inst_30233;
var inst_30208 = null;
var inst_30209 = (0);
var inst_30210 = (0);
var state_30266__$1 = (function (){var statearr_30286 = state_30266;
(statearr_30286[(12)] = inst_30209);

(statearr_30286[(13)] = inst_30208);

(statearr_30286[(14)] = inst_30232);

(statearr_30286[(15)] = inst_30210);

(statearr_30286[(16)] = inst_30207);

return statearr_30286;
})();
var statearr_30287_30328 = state_30266__$1;
(statearr_30287_30328[(2)] = null);

(statearr_30287_30328[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (3))){
var inst_30264 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30266__$1,inst_30264);
} else {
if((state_val_30267 === (12))){
var inst_30241 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30288_30329 = state_30266__$1;
(statearr_30288_30329[(2)] = inst_30241);

(statearr_30288_30329[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (2))){
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30266__$1,(4),ch);
} else {
if((state_val_30267 === (23))){
var state_30266__$1 = state_30266;
var statearr_30289_30330 = state_30266__$1;
(statearr_30289_30330[(2)] = null);

(statearr_30289_30330[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (19))){
var inst_30197 = (state_30266[(8)]);
var inst_30247 = (state_30266[(11)]);
var inst_30249 = cljs.core.async.muxch_STAR_(inst_30247);
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30266__$1,(22),inst_30249,inst_30197);
} else {
if((state_val_30267 === (11))){
var inst_30221 = (state_30266[(10)]);
var inst_30207 = (state_30266[(16)]);
var inst_30221__$1 = cljs.core.seq(inst_30207);
var state_30266__$1 = (function (){var statearr_30290 = state_30266;
(statearr_30290[(10)] = inst_30221__$1);

return statearr_30290;
})();
if(inst_30221__$1){
var statearr_30291_30331 = state_30266__$1;
(statearr_30291_30331[(1)] = (13));

} else {
var statearr_30292_30332 = state_30266__$1;
(statearr_30292_30332[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (9))){
var inst_30243 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30293_30333 = state_30266__$1;
(statearr_30293_30333[(2)] = inst_30243);

(statearr_30293_30333[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (5))){
var inst_30204 = cljs.core.deref(mults);
var inst_30205 = cljs.core.vals(inst_30204);
var inst_30206 = cljs.core.seq(inst_30205);
var inst_30207 = inst_30206;
var inst_30208 = null;
var inst_30209 = (0);
var inst_30210 = (0);
var state_30266__$1 = (function (){var statearr_30294 = state_30266;
(statearr_30294[(12)] = inst_30209);

(statearr_30294[(13)] = inst_30208);

(statearr_30294[(15)] = inst_30210);

(statearr_30294[(16)] = inst_30207);

return statearr_30294;
})();
var statearr_30295_30334 = state_30266__$1;
(statearr_30295_30334[(2)] = null);

(statearr_30295_30334[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (14))){
var state_30266__$1 = state_30266;
var statearr_30299_30335 = state_30266__$1;
(statearr_30299_30335[(2)] = null);

(statearr_30299_30335[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (16))){
var inst_30221 = (state_30266[(10)]);
var inst_30225 = cljs.core.chunk_first(inst_30221);
var inst_30226 = cljs.core.chunk_rest(inst_30221);
var inst_30227 = cljs.core.count(inst_30225);
var inst_30207 = inst_30226;
var inst_30208 = inst_30225;
var inst_30209 = inst_30227;
var inst_30210 = (0);
var state_30266__$1 = (function (){var statearr_30300 = state_30266;
(statearr_30300[(12)] = inst_30209);

(statearr_30300[(13)] = inst_30208);

(statearr_30300[(15)] = inst_30210);

(statearr_30300[(16)] = inst_30207);

return statearr_30300;
})();
var statearr_30301_30336 = state_30266__$1;
(statearr_30301_30336[(2)] = null);

(statearr_30301_30336[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (10))){
var inst_30209 = (state_30266[(12)]);
var inst_30208 = (state_30266[(13)]);
var inst_30210 = (state_30266[(15)]);
var inst_30207 = (state_30266[(16)]);
var inst_30215 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30208,inst_30210);
var inst_30216 = cljs.core.async.muxch_STAR_(inst_30215);
var inst_30217 = cljs.core.async.close_BANG_(inst_30216);
var inst_30218 = (inst_30210 + (1));
var tmp30296 = inst_30209;
var tmp30297 = inst_30208;
var tmp30298 = inst_30207;
var inst_30207__$1 = tmp30298;
var inst_30208__$1 = tmp30297;
var inst_30209__$1 = tmp30296;
var inst_30210__$1 = inst_30218;
var state_30266__$1 = (function (){var statearr_30302 = state_30266;
(statearr_30302[(12)] = inst_30209__$1);

(statearr_30302[(13)] = inst_30208__$1);

(statearr_30302[(17)] = inst_30217);

(statearr_30302[(15)] = inst_30210__$1);

(statearr_30302[(16)] = inst_30207__$1);

return statearr_30302;
})();
var statearr_30303_30337 = state_30266__$1;
(statearr_30303_30337[(2)] = null);

(statearr_30303_30337[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (18))){
var inst_30236 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30304_30338 = state_30266__$1;
(statearr_30304_30338[(2)] = inst_30236);

(statearr_30304_30338[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30267 === (8))){
var inst_30209 = (state_30266[(12)]);
var inst_30210 = (state_30266[(15)]);
var inst_30212 = (inst_30210 < inst_30209);
var inst_30213 = inst_30212;
var state_30266__$1 = state_30266;
if(cljs.core.truth_(inst_30213)){
var statearr_30305_30339 = state_30266__$1;
(statearr_30305_30339[(1)] = (10));

} else {
var statearr_30306_30340 = state_30266__$1;
(statearr_30306_30340[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___30312,mults,ensure_mult,p))
;
return ((function (switch__28990__auto__,c__29090__auto___30312,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_30307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30307[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_30307[(1)] = (1));

return statearr_30307;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_30266){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_30266);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e30308){if((e30308 instanceof Object)){
var ex__28994__auto__ = e30308;
var statearr_30309_30341 = state_30266;
(statearr_30309_30341[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30266);

return cljs.core.cst$kw$recur;
} else {
throw e30308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__30342 = state_30266;
state_30266 = G__30342;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_30266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_30266);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___30312,mults,ensure_mult,p))
})();
var state__29092__auto__ = (function (){var statearr_30310 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_30310[(6)] = c__29090__auto___30312);

return statearr_30310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___30312,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30344 = arguments.length;
switch (G__30344) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__30347 = arguments.length;
switch (G__30347) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__30350 = arguments.length;
switch (G__30350) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29090__auto___30417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___30417,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___30417,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30389){
var state_val_30390 = (state_30389[(1)]);
if((state_val_30390 === (7))){
var state_30389__$1 = state_30389;
var statearr_30391_30418 = state_30389__$1;
(statearr_30391_30418[(2)] = null);

(statearr_30391_30418[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (1))){
var state_30389__$1 = state_30389;
var statearr_30392_30419 = state_30389__$1;
(statearr_30392_30419[(2)] = null);

(statearr_30392_30419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (4))){
var inst_30353 = (state_30389[(7)]);
var inst_30355 = (inst_30353 < cnt);
var state_30389__$1 = state_30389;
if(cljs.core.truth_(inst_30355)){
var statearr_30393_30420 = state_30389__$1;
(statearr_30393_30420[(1)] = (6));

} else {
var statearr_30394_30421 = state_30389__$1;
(statearr_30394_30421[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (15))){
var inst_30385 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30395_30422 = state_30389__$1;
(statearr_30395_30422[(2)] = inst_30385);

(statearr_30395_30422[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (13))){
var inst_30378 = cljs.core.async.close_BANG_(out);
var state_30389__$1 = state_30389;
var statearr_30396_30423 = state_30389__$1;
(statearr_30396_30423[(2)] = inst_30378);

(statearr_30396_30423[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (6))){
var state_30389__$1 = state_30389;
var statearr_30397_30424 = state_30389__$1;
(statearr_30397_30424[(2)] = null);

(statearr_30397_30424[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (3))){
var inst_30387 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30389__$1,inst_30387);
} else {
if((state_val_30390 === (12))){
var inst_30375 = (state_30389[(8)]);
var inst_30375__$1 = (state_30389[(2)]);
var inst_30376 = cljs.core.some(cljs.core.nil_QMARK_,inst_30375__$1);
var state_30389__$1 = (function (){var statearr_30398 = state_30389;
(statearr_30398[(8)] = inst_30375__$1);

return statearr_30398;
})();
if(cljs.core.truth_(inst_30376)){
var statearr_30399_30425 = state_30389__$1;
(statearr_30399_30425[(1)] = (13));

} else {
var statearr_30400_30426 = state_30389__$1;
(statearr_30400_30426[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (2))){
var inst_30352 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30353 = (0);
var state_30389__$1 = (function (){var statearr_30401 = state_30389;
(statearr_30401[(7)] = inst_30353);

(statearr_30401[(9)] = inst_30352);

return statearr_30401;
})();
var statearr_30402_30427 = state_30389__$1;
(statearr_30402_30427[(2)] = null);

(statearr_30402_30427[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (11))){
var inst_30353 = (state_30389[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30389,(10),Object,null,(9));
var inst_30362 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30353) : chs__$1.call(null,inst_30353));
var inst_30363 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30353) : done.call(null,inst_30353));
var inst_30364 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30362,inst_30363);
var state_30389__$1 = state_30389;
var statearr_30403_30428 = state_30389__$1;
(statearr_30403_30428[(2)] = inst_30364);


cljs.core.async.impl.ioc_helpers.process_exception(state_30389__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (9))){
var inst_30353 = (state_30389[(7)]);
var inst_30366 = (state_30389[(2)]);
var inst_30367 = (inst_30353 + (1));
var inst_30353__$1 = inst_30367;
var state_30389__$1 = (function (){var statearr_30404 = state_30389;
(statearr_30404[(7)] = inst_30353__$1);

(statearr_30404[(10)] = inst_30366);

return statearr_30404;
})();
var statearr_30405_30429 = state_30389__$1;
(statearr_30405_30429[(2)] = null);

(statearr_30405_30429[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (5))){
var inst_30373 = (state_30389[(2)]);
var state_30389__$1 = (function (){var statearr_30406 = state_30389;
(statearr_30406[(11)] = inst_30373);

return statearr_30406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30389__$1,(12),dchan);
} else {
if((state_val_30390 === (14))){
var inst_30375 = (state_30389[(8)]);
var inst_30380 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30375);
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30389__$1,(16),out,inst_30380);
} else {
if((state_val_30390 === (16))){
var inst_30382 = (state_30389[(2)]);
var state_30389__$1 = (function (){var statearr_30407 = state_30389;
(statearr_30407[(12)] = inst_30382);

return statearr_30407;
})();
var statearr_30408_30430 = state_30389__$1;
(statearr_30408_30430[(2)] = null);

(statearr_30408_30430[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (10))){
var inst_30357 = (state_30389[(2)]);
var inst_30358 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30389__$1 = (function (){var statearr_30409 = state_30389;
(statearr_30409[(13)] = inst_30357);

return statearr_30409;
})();
var statearr_30410_30431 = state_30389__$1;
(statearr_30410_30431[(2)] = inst_30358);


cljs.core.async.impl.ioc_helpers.process_exception(state_30389__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_30390 === (8))){
var inst_30371 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30411_30432 = state_30389__$1;
(statearr_30411_30432[(2)] = inst_30371);

(statearr_30411_30432[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___30417,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28990__auto__,c__29090__auto___30417,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_30412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30412[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_30412[(1)] = (1));

return statearr_30412;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_30389){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_30389);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e30413){if((e30413 instanceof Object)){
var ex__28994__auto__ = e30413;
var statearr_30414_30433 = state_30389;
(statearr_30414_30433[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30389);

return cljs.core.cst$kw$recur;
} else {
throw e30413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__30434 = state_30389;
state_30389 = G__30434;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_30389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_30389);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___30417,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29092__auto__ = (function (){var statearr_30415 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_30415[(6)] = c__29090__auto___30417);

return statearr_30415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___30417,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30437 = arguments.length;
switch (G__30437) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29090__auto___30491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___30491,out){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___30491,out){
return (function (state_30469){
var state_val_30470 = (state_30469[(1)]);
if((state_val_30470 === (7))){
var inst_30449 = (state_30469[(7)]);
var inst_30448 = (state_30469[(8)]);
var inst_30448__$1 = (state_30469[(2)]);
var inst_30449__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30448__$1,(0),null);
var inst_30450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30448__$1,(1),null);
var inst_30451 = (inst_30449__$1 == null);
var state_30469__$1 = (function (){var statearr_30471 = state_30469;
(statearr_30471[(7)] = inst_30449__$1);

(statearr_30471[(8)] = inst_30448__$1);

(statearr_30471[(9)] = inst_30450);

return statearr_30471;
})();
if(cljs.core.truth_(inst_30451)){
var statearr_30472_30492 = state_30469__$1;
(statearr_30472_30492[(1)] = (8));

} else {
var statearr_30473_30493 = state_30469__$1;
(statearr_30473_30493[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30470 === (1))){
var inst_30438 = cljs.core.vec(chs);
var inst_30439 = inst_30438;
var state_30469__$1 = (function (){var statearr_30474 = state_30469;
(statearr_30474[(10)] = inst_30439);

return statearr_30474;
})();
var statearr_30475_30494 = state_30469__$1;
(statearr_30475_30494[(2)] = null);

(statearr_30475_30494[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30470 === (4))){
var inst_30439 = (state_30469[(10)]);
var state_30469__$1 = state_30469;
return cljs.core.async.ioc_alts_BANG_(state_30469__$1,(7),inst_30439);
} else {
if((state_val_30470 === (6))){
var inst_30465 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30476_30495 = state_30469__$1;
(statearr_30476_30495[(2)] = inst_30465);

(statearr_30476_30495[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30470 === (3))){
var inst_30467 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30469__$1,inst_30467);
} else {
if((state_val_30470 === (2))){
var inst_30439 = (state_30469[(10)]);
var inst_30441 = cljs.core.count(inst_30439);
var inst_30442 = (inst_30441 > (0));
var state_30469__$1 = state_30469;
if(cljs.core.truth_(inst_30442)){
var statearr_30478_30496 = state_30469__$1;
(statearr_30478_30496[(1)] = (4));

} else {
var statearr_30479_30497 = state_30469__$1;
(statearr_30479_30497[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30470 === (11))){
var inst_30439 = (state_30469[(10)]);
var inst_30458 = (state_30469[(2)]);
var tmp30477 = inst_30439;
var inst_30439__$1 = tmp30477;
var state_30469__$1 = (function (){var statearr_30480 = state_30469;
(statearr_30480[(11)] = inst_30458);

(statearr_30480[(10)] = inst_30439__$1);

return statearr_30480;
})();
var statearr_30481_30498 = state_30469__$1;
(statearr_30481_30498[(2)] = null);

(statearr_30481_30498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30470 === (9))){
var inst_30449 = (state_30469[(7)]);
var state_30469__$1 = state_30469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30469__$1,(11),out,inst_30449);
} else {
if((state_val_30470 === (5))){
var inst_30463 = cljs.core.async.close_BANG_(out);
var state_30469__$1 = state_30469;
var statearr_30482_30499 = state_30469__$1;
(statearr_30482_30499[(2)] = inst_30463);

(statearr_30482_30499[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30470 === (10))){
var inst_30461 = (state_30469[(2)]);
var state_30469__$1 = state_30469;
var statearr_30483_30500 = state_30469__$1;
(statearr_30483_30500[(2)] = inst_30461);

(statearr_30483_30500[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30470 === (8))){
var inst_30449 = (state_30469[(7)]);
var inst_30448 = (state_30469[(8)]);
var inst_30450 = (state_30469[(9)]);
var inst_30439 = (state_30469[(10)]);
var inst_30453 = (function (){var cs = inst_30439;
var vec__30444 = inst_30448;
var v = inst_30449;
var c = inst_30450;
return ((function (cs,vec__30444,v,c,inst_30449,inst_30448,inst_30450,inst_30439,state_val_30470,c__29090__auto___30491,out){
return (function (p1__30435_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30435_SHARP_);
});
;})(cs,vec__30444,v,c,inst_30449,inst_30448,inst_30450,inst_30439,state_val_30470,c__29090__auto___30491,out))
})();
var inst_30454 = cljs.core.filterv(inst_30453,inst_30439);
var inst_30439__$1 = inst_30454;
var state_30469__$1 = (function (){var statearr_30484 = state_30469;
(statearr_30484[(10)] = inst_30439__$1);

return statearr_30484;
})();
var statearr_30485_30501 = state_30469__$1;
(statearr_30485_30501[(2)] = null);

(statearr_30485_30501[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___30491,out))
;
return ((function (switch__28990__auto__,c__29090__auto___30491,out){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_30486 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30486[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_30486[(1)] = (1));

return statearr_30486;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_30469){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_30469);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e30487){if((e30487 instanceof Object)){
var ex__28994__auto__ = e30487;
var statearr_30488_30502 = state_30469;
(statearr_30488_30502[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30469);

return cljs.core.cst$kw$recur;
} else {
throw e30487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__30503 = state_30469;
state_30469 = G__30503;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_30469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_30469);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___30491,out))
})();
var state__29092__auto__ = (function (){var statearr_30489 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_30489[(6)] = c__29090__auto___30491);

return statearr_30489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___30491,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__30505 = arguments.length;
switch (G__30505) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29090__auto___30550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___30550,out){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___30550,out){
return (function (state_30529){
var state_val_30530 = (state_30529[(1)]);
if((state_val_30530 === (7))){
var inst_30511 = (state_30529[(7)]);
var inst_30511__$1 = (state_30529[(2)]);
var inst_30512 = (inst_30511__$1 == null);
var inst_30513 = cljs.core.not(inst_30512);
var state_30529__$1 = (function (){var statearr_30531 = state_30529;
(statearr_30531[(7)] = inst_30511__$1);

return statearr_30531;
})();
if(inst_30513){
var statearr_30532_30551 = state_30529__$1;
(statearr_30532_30551[(1)] = (8));

} else {
var statearr_30533_30552 = state_30529__$1;
(statearr_30533_30552[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30530 === (1))){
var inst_30506 = (0);
var state_30529__$1 = (function (){var statearr_30534 = state_30529;
(statearr_30534[(8)] = inst_30506);

return statearr_30534;
})();
var statearr_30535_30553 = state_30529__$1;
(statearr_30535_30553[(2)] = null);

(statearr_30535_30553[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30530 === (4))){
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30529__$1,(7),ch);
} else {
if((state_val_30530 === (6))){
var inst_30524 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30536_30554 = state_30529__$1;
(statearr_30536_30554[(2)] = inst_30524);

(statearr_30536_30554[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30530 === (3))){
var inst_30526 = (state_30529[(2)]);
var inst_30527 = cljs.core.async.close_BANG_(out);
var state_30529__$1 = (function (){var statearr_30537 = state_30529;
(statearr_30537[(9)] = inst_30526);

return statearr_30537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30529__$1,inst_30527);
} else {
if((state_val_30530 === (2))){
var inst_30506 = (state_30529[(8)]);
var inst_30508 = (inst_30506 < n);
var state_30529__$1 = state_30529;
if(cljs.core.truth_(inst_30508)){
var statearr_30538_30555 = state_30529__$1;
(statearr_30538_30555[(1)] = (4));

} else {
var statearr_30539_30556 = state_30529__$1;
(statearr_30539_30556[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30530 === (11))){
var inst_30506 = (state_30529[(8)]);
var inst_30516 = (state_30529[(2)]);
var inst_30517 = (inst_30506 + (1));
var inst_30506__$1 = inst_30517;
var state_30529__$1 = (function (){var statearr_30540 = state_30529;
(statearr_30540[(10)] = inst_30516);

(statearr_30540[(8)] = inst_30506__$1);

return statearr_30540;
})();
var statearr_30541_30557 = state_30529__$1;
(statearr_30541_30557[(2)] = null);

(statearr_30541_30557[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30530 === (9))){
var state_30529__$1 = state_30529;
var statearr_30542_30558 = state_30529__$1;
(statearr_30542_30558[(2)] = null);

(statearr_30542_30558[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30530 === (5))){
var state_30529__$1 = state_30529;
var statearr_30543_30559 = state_30529__$1;
(statearr_30543_30559[(2)] = null);

(statearr_30543_30559[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30530 === (10))){
var inst_30521 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30544_30560 = state_30529__$1;
(statearr_30544_30560[(2)] = inst_30521);

(statearr_30544_30560[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30530 === (8))){
var inst_30511 = (state_30529[(7)]);
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30529__$1,(11),out,inst_30511);
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
});})(c__29090__auto___30550,out))
;
return ((function (switch__28990__auto__,c__29090__auto___30550,out){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_30545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30545[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_30545[(1)] = (1));

return statearr_30545;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_30529){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_30529);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e30546){if((e30546 instanceof Object)){
var ex__28994__auto__ = e30546;
var statearr_30547_30561 = state_30529;
(statearr_30547_30561[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30529);

return cljs.core.cst$kw$recur;
} else {
throw e30546;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__30562 = state_30529;
state_30529 = G__30562;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_30529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_30529);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___30550,out))
})();
var state__29092__auto__ = (function (){var statearr_30548 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_30548[(6)] = c__29090__auto___30550);

return statearr_30548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___30550,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30564 = (function (f,ch,meta30565){
this.f = f;
this.ch = ch;
this.meta30565 = meta30565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30566,meta30565__$1){
var self__ = this;
var _30566__$1 = this;
return (new cljs.core.async.t_cljs$core$async30564(self__.f,self__.ch,meta30565__$1));
});

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30566){
var self__ = this;
var _30566__$1 = this;
return self__.meta30565;
});

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30567 = (function (f,ch,meta30565,_,fn1,meta30568){
this.f = f;
this.ch = ch;
this.meta30565 = meta30565;
this._ = _;
this.fn1 = fn1;
this.meta30568 = meta30568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30569,meta30568__$1){
var self__ = this;
var _30569__$1 = this;
return (new cljs.core.async.t_cljs$core$async30567(self__.f,self__.ch,self__.meta30565,self__._,self__.fn1,meta30568__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30569){
var self__ = this;
var _30569__$1 = this;
return self__.meta30568;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30567.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30567.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30563_SHARP_){
var G__30570 = (((p1__30563_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30563_SHARP_) : self__.f.call(null,p1__30563_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30570) : f1.call(null,G__30570));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30567.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30565,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async30564], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta30568], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30567";

cljs.core.async.t_cljs$core$async30567.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write(writer__7386__auto__,"cljs.core.async/t_cljs$core$async30567");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30567 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30567(f__$1,ch__$1,meta30565__$1,___$2,fn1__$1,meta30568){
return (new cljs.core.async.t_cljs$core$async30567(f__$1,ch__$1,meta30565__$1,___$2,fn1__$1,meta30568));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30567(self__.f,self__.ch,self__.meta30565,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6762__auto__ = ret;
if(cljs.core.truth_(and__6762__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__6762__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30571 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30571) : self__.f.call(null,G__30571));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30565], null);
});

cljs.core.async.t_cljs$core$async30564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30564";

cljs.core.async.t_cljs$core$async30564.cljs$lang$ctorPrWriter = (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write(writer__7386__auto__,"cljs.core.async/t_cljs$core$async30564");
});

cljs.core.async.__GT_t_cljs$core$async30564 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30564(f__$1,ch__$1,meta30565){
return (new cljs.core.async.t_cljs$core$async30564(f__$1,ch__$1,meta30565));
});

}

return (new cljs.core.async.t_cljs$core$async30564(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30572 = (function (f,ch,meta30573){
this.f = f;
this.ch = ch;
this.meta30573 = meta30573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30574,meta30573__$1){
var self__ = this;
var _30574__$1 = this;
return (new cljs.core.async.t_cljs$core$async30572(self__.f,self__.ch,meta30573__$1));
});

cljs.core.async.t_cljs$core$async30572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30574){
var self__ = this;
var _30574__$1 = this;
return self__.meta30573;
});

cljs.core.async.t_cljs$core$async30572.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30572.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30572.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async30572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30573], null);
});

cljs.core.async.t_cljs$core$async30572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30572";

cljs.core.async.t_cljs$core$async30572.cljs$lang$ctorPrWriter = (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write(writer__7386__auto__,"cljs.core.async/t_cljs$core$async30572");
});

cljs.core.async.__GT_t_cljs$core$async30572 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30572(f__$1,ch__$1,meta30573){
return (new cljs.core.async.t_cljs$core$async30572(f__$1,ch__$1,meta30573));
});

}

return (new cljs.core.async.t_cljs$core$async30572(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30575 = (function (p,ch,meta30576){
this.p = p;
this.ch = ch;
this.meta30576 = meta30576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30577,meta30576__$1){
var self__ = this;
var _30577__$1 = this;
return (new cljs.core.async.t_cljs$core$async30575(self__.p,self__.ch,meta30576__$1));
});

cljs.core.async.t_cljs$core$async30575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30577){
var self__ = this;
var _30577__$1 = this;
return self__.meta30576;
});

cljs.core.async.t_cljs$core$async30575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async30575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30576], null);
});

cljs.core.async.t_cljs$core$async30575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30575";

cljs.core.async.t_cljs$core$async30575.cljs$lang$ctorPrWriter = (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write(writer__7386__auto__,"cljs.core.async/t_cljs$core$async30575");
});

cljs.core.async.__GT_t_cljs$core$async30575 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30575(p__$1,ch__$1,meta30576){
return (new cljs.core.async.t_cljs$core$async30575(p__$1,ch__$1,meta30576));
});

}

return (new cljs.core.async.t_cljs$core$async30575(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30579 = arguments.length;
switch (G__30579) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29090__auto___30619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___30619,out){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___30619,out){
return (function (state_30600){
var state_val_30601 = (state_30600[(1)]);
if((state_val_30601 === (7))){
var inst_30596 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
var statearr_30602_30620 = state_30600__$1;
(statearr_30602_30620[(2)] = inst_30596);

(statearr_30602_30620[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30601 === (1))){
var state_30600__$1 = state_30600;
var statearr_30603_30621 = state_30600__$1;
(statearr_30603_30621[(2)] = null);

(statearr_30603_30621[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30601 === (4))){
var inst_30582 = (state_30600[(7)]);
var inst_30582__$1 = (state_30600[(2)]);
var inst_30583 = (inst_30582__$1 == null);
var state_30600__$1 = (function (){var statearr_30604 = state_30600;
(statearr_30604[(7)] = inst_30582__$1);

return statearr_30604;
})();
if(cljs.core.truth_(inst_30583)){
var statearr_30605_30622 = state_30600__$1;
(statearr_30605_30622[(1)] = (5));

} else {
var statearr_30606_30623 = state_30600__$1;
(statearr_30606_30623[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30601 === (6))){
var inst_30582 = (state_30600[(7)]);
var inst_30587 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30582) : p.call(null,inst_30582));
var state_30600__$1 = state_30600;
if(cljs.core.truth_(inst_30587)){
var statearr_30607_30624 = state_30600__$1;
(statearr_30607_30624[(1)] = (8));

} else {
var statearr_30608_30625 = state_30600__$1;
(statearr_30608_30625[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30601 === (3))){
var inst_30598 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30600__$1,inst_30598);
} else {
if((state_val_30601 === (2))){
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30600__$1,(4),ch);
} else {
if((state_val_30601 === (11))){
var inst_30590 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
var statearr_30609_30626 = state_30600__$1;
(statearr_30609_30626[(2)] = inst_30590);

(statearr_30609_30626[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30601 === (9))){
var state_30600__$1 = state_30600;
var statearr_30610_30627 = state_30600__$1;
(statearr_30610_30627[(2)] = null);

(statearr_30610_30627[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30601 === (5))){
var inst_30585 = cljs.core.async.close_BANG_(out);
var state_30600__$1 = state_30600;
var statearr_30611_30628 = state_30600__$1;
(statearr_30611_30628[(2)] = inst_30585);

(statearr_30611_30628[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30601 === (10))){
var inst_30593 = (state_30600[(2)]);
var state_30600__$1 = (function (){var statearr_30612 = state_30600;
(statearr_30612[(8)] = inst_30593);

return statearr_30612;
})();
var statearr_30613_30629 = state_30600__$1;
(statearr_30613_30629[(2)] = null);

(statearr_30613_30629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30601 === (8))){
var inst_30582 = (state_30600[(7)]);
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30600__$1,(11),out,inst_30582);
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
});})(c__29090__auto___30619,out))
;
return ((function (switch__28990__auto__,c__29090__auto___30619,out){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_30614 = [null,null,null,null,null,null,null,null,null];
(statearr_30614[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_30614[(1)] = (1));

return statearr_30614;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_30600){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_30600);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e30615){if((e30615 instanceof Object)){
var ex__28994__auto__ = e30615;
var statearr_30616_30630 = state_30600;
(statearr_30616_30630[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30600);

return cljs.core.cst$kw$recur;
} else {
throw e30615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__30631 = state_30600;
state_30600 = G__30631;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_30600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_30600);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___30619,out))
})();
var state__29092__auto__ = (function (){var statearr_30617 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_30617[(6)] = c__29090__auto___30619);

return statearr_30617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___30619,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30633 = arguments.length;
switch (G__30633) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29090__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto__){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto__){
return (function (state_30696){
var state_val_30697 = (state_30696[(1)]);
if((state_val_30697 === (7))){
var inst_30692 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30698_30736 = state_30696__$1;
(statearr_30698_30736[(2)] = inst_30692);

(statearr_30698_30736[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (20))){
var inst_30662 = (state_30696[(7)]);
var inst_30673 = (state_30696[(2)]);
var inst_30674 = cljs.core.next(inst_30662);
var inst_30648 = inst_30674;
var inst_30649 = null;
var inst_30650 = (0);
var inst_30651 = (0);
var state_30696__$1 = (function (){var statearr_30699 = state_30696;
(statearr_30699[(8)] = inst_30651);

(statearr_30699[(9)] = inst_30650);

(statearr_30699[(10)] = inst_30649);

(statearr_30699[(11)] = inst_30673);

(statearr_30699[(12)] = inst_30648);

return statearr_30699;
})();
var statearr_30700_30737 = state_30696__$1;
(statearr_30700_30737[(2)] = null);

(statearr_30700_30737[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (1))){
var state_30696__$1 = state_30696;
var statearr_30701_30738 = state_30696__$1;
(statearr_30701_30738[(2)] = null);

(statearr_30701_30738[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (4))){
var inst_30637 = (state_30696[(13)]);
var inst_30637__$1 = (state_30696[(2)]);
var inst_30638 = (inst_30637__$1 == null);
var state_30696__$1 = (function (){var statearr_30702 = state_30696;
(statearr_30702[(13)] = inst_30637__$1);

return statearr_30702;
})();
if(cljs.core.truth_(inst_30638)){
var statearr_30703_30739 = state_30696__$1;
(statearr_30703_30739[(1)] = (5));

} else {
var statearr_30704_30740 = state_30696__$1;
(statearr_30704_30740[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (15))){
var state_30696__$1 = state_30696;
var statearr_30708_30741 = state_30696__$1;
(statearr_30708_30741[(2)] = null);

(statearr_30708_30741[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (21))){
var state_30696__$1 = state_30696;
var statearr_30709_30742 = state_30696__$1;
(statearr_30709_30742[(2)] = null);

(statearr_30709_30742[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (13))){
var inst_30651 = (state_30696[(8)]);
var inst_30650 = (state_30696[(9)]);
var inst_30649 = (state_30696[(10)]);
var inst_30648 = (state_30696[(12)]);
var inst_30658 = (state_30696[(2)]);
var inst_30659 = (inst_30651 + (1));
var tmp30705 = inst_30650;
var tmp30706 = inst_30649;
var tmp30707 = inst_30648;
var inst_30648__$1 = tmp30707;
var inst_30649__$1 = tmp30706;
var inst_30650__$1 = tmp30705;
var inst_30651__$1 = inst_30659;
var state_30696__$1 = (function (){var statearr_30710 = state_30696;
(statearr_30710[(8)] = inst_30651__$1);

(statearr_30710[(9)] = inst_30650__$1);

(statearr_30710[(14)] = inst_30658);

(statearr_30710[(10)] = inst_30649__$1);

(statearr_30710[(12)] = inst_30648__$1);

return statearr_30710;
})();
var statearr_30711_30743 = state_30696__$1;
(statearr_30711_30743[(2)] = null);

(statearr_30711_30743[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (22))){
var state_30696__$1 = state_30696;
var statearr_30712_30744 = state_30696__$1;
(statearr_30712_30744[(2)] = null);

(statearr_30712_30744[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (6))){
var inst_30637 = (state_30696[(13)]);
var inst_30646 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30637) : f.call(null,inst_30637));
var inst_30647 = cljs.core.seq(inst_30646);
var inst_30648 = inst_30647;
var inst_30649 = null;
var inst_30650 = (0);
var inst_30651 = (0);
var state_30696__$1 = (function (){var statearr_30713 = state_30696;
(statearr_30713[(8)] = inst_30651);

(statearr_30713[(9)] = inst_30650);

(statearr_30713[(10)] = inst_30649);

(statearr_30713[(12)] = inst_30648);

return statearr_30713;
})();
var statearr_30714_30745 = state_30696__$1;
(statearr_30714_30745[(2)] = null);

(statearr_30714_30745[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (17))){
var inst_30662 = (state_30696[(7)]);
var inst_30666 = cljs.core.chunk_first(inst_30662);
var inst_30667 = cljs.core.chunk_rest(inst_30662);
var inst_30668 = cljs.core.count(inst_30666);
var inst_30648 = inst_30667;
var inst_30649 = inst_30666;
var inst_30650 = inst_30668;
var inst_30651 = (0);
var state_30696__$1 = (function (){var statearr_30715 = state_30696;
(statearr_30715[(8)] = inst_30651);

(statearr_30715[(9)] = inst_30650);

(statearr_30715[(10)] = inst_30649);

(statearr_30715[(12)] = inst_30648);

return statearr_30715;
})();
var statearr_30716_30746 = state_30696__$1;
(statearr_30716_30746[(2)] = null);

(statearr_30716_30746[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (3))){
var inst_30694 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30696__$1,inst_30694);
} else {
if((state_val_30697 === (12))){
var inst_30682 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30717_30747 = state_30696__$1;
(statearr_30717_30747[(2)] = inst_30682);

(statearr_30717_30747[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (2))){
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30696__$1,(4),in$);
} else {
if((state_val_30697 === (23))){
var inst_30690 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30718_30748 = state_30696__$1;
(statearr_30718_30748[(2)] = inst_30690);

(statearr_30718_30748[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (19))){
var inst_30677 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30719_30749 = state_30696__$1;
(statearr_30719_30749[(2)] = inst_30677);

(statearr_30719_30749[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (11))){
var inst_30662 = (state_30696[(7)]);
var inst_30648 = (state_30696[(12)]);
var inst_30662__$1 = cljs.core.seq(inst_30648);
var state_30696__$1 = (function (){var statearr_30720 = state_30696;
(statearr_30720[(7)] = inst_30662__$1);

return statearr_30720;
})();
if(inst_30662__$1){
var statearr_30721_30750 = state_30696__$1;
(statearr_30721_30750[(1)] = (14));

} else {
var statearr_30722_30751 = state_30696__$1;
(statearr_30722_30751[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (9))){
var inst_30684 = (state_30696[(2)]);
var inst_30685 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30696__$1 = (function (){var statearr_30723 = state_30696;
(statearr_30723[(15)] = inst_30684);

return statearr_30723;
})();
if(cljs.core.truth_(inst_30685)){
var statearr_30724_30752 = state_30696__$1;
(statearr_30724_30752[(1)] = (21));

} else {
var statearr_30725_30753 = state_30696__$1;
(statearr_30725_30753[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (5))){
var inst_30640 = cljs.core.async.close_BANG_(out);
var state_30696__$1 = state_30696;
var statearr_30726_30754 = state_30696__$1;
(statearr_30726_30754[(2)] = inst_30640);

(statearr_30726_30754[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (14))){
var inst_30662 = (state_30696[(7)]);
var inst_30664 = cljs.core.chunked_seq_QMARK_(inst_30662);
var state_30696__$1 = state_30696;
if(inst_30664){
var statearr_30727_30755 = state_30696__$1;
(statearr_30727_30755[(1)] = (17));

} else {
var statearr_30728_30756 = state_30696__$1;
(statearr_30728_30756[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (16))){
var inst_30680 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30729_30757 = state_30696__$1;
(statearr_30729_30757[(2)] = inst_30680);

(statearr_30729_30757[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30697 === (10))){
var inst_30651 = (state_30696[(8)]);
var inst_30649 = (state_30696[(10)]);
var inst_30656 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30649,inst_30651);
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30696__$1,(13),out,inst_30656);
} else {
if((state_val_30697 === (18))){
var inst_30662 = (state_30696[(7)]);
var inst_30671 = cljs.core.first(inst_30662);
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30696__$1,(20),out,inst_30671);
} else {
if((state_val_30697 === (8))){
var inst_30651 = (state_30696[(8)]);
var inst_30650 = (state_30696[(9)]);
var inst_30653 = (inst_30651 < inst_30650);
var inst_30654 = inst_30653;
var state_30696__$1 = state_30696;
if(cljs.core.truth_(inst_30654)){
var statearr_30730_30758 = state_30696__$1;
(statearr_30730_30758[(1)] = (10));

} else {
var statearr_30731_30759 = state_30696__$1;
(statearr_30731_30759[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__29090__auto__))
;
return ((function (switch__28990__auto__,c__29090__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28991__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28991__auto____0 = (function (){
var statearr_30732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30732[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28991__auto__);

(statearr_30732[(1)] = (1));

return statearr_30732;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28991__auto____1 = (function (state_30696){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_30696);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e30733){if((e30733 instanceof Object)){
var ex__28994__auto__ = e30733;
var statearr_30734_30760 = state_30696;
(statearr_30734_30760[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30696);

return cljs.core.cst$kw$recur;
} else {
throw e30733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__30761 = state_30696;
state_30696 = G__30761;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28991__auto__ = function(state_30696){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28991__auto____1.call(this,state_30696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28991__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28991__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto__))
})();
var state__29092__auto__ = (function (){var statearr_30735 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_30735[(6)] = c__29090__auto__);

return statearr_30735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto__))
);

return c__29090__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30763 = arguments.length;
switch (G__30763) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30766 = arguments.length;
switch (G__30766) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30769 = arguments.length;
switch (G__30769) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29090__auto___30816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___30816,out){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___30816,out){
return (function (state_30793){
var state_val_30794 = (state_30793[(1)]);
if((state_val_30794 === (7))){
var inst_30788 = (state_30793[(2)]);
var state_30793__$1 = state_30793;
var statearr_30795_30817 = state_30793__$1;
(statearr_30795_30817[(2)] = inst_30788);

(statearr_30795_30817[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30794 === (1))){
var inst_30770 = null;
var state_30793__$1 = (function (){var statearr_30796 = state_30793;
(statearr_30796[(7)] = inst_30770);

return statearr_30796;
})();
var statearr_30797_30818 = state_30793__$1;
(statearr_30797_30818[(2)] = null);

(statearr_30797_30818[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30794 === (4))){
var inst_30773 = (state_30793[(8)]);
var inst_30773__$1 = (state_30793[(2)]);
var inst_30774 = (inst_30773__$1 == null);
var inst_30775 = cljs.core.not(inst_30774);
var state_30793__$1 = (function (){var statearr_30798 = state_30793;
(statearr_30798[(8)] = inst_30773__$1);

return statearr_30798;
})();
if(inst_30775){
var statearr_30799_30819 = state_30793__$1;
(statearr_30799_30819[(1)] = (5));

} else {
var statearr_30800_30820 = state_30793__$1;
(statearr_30800_30820[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30794 === (6))){
var state_30793__$1 = state_30793;
var statearr_30801_30821 = state_30793__$1;
(statearr_30801_30821[(2)] = null);

(statearr_30801_30821[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30794 === (3))){
var inst_30790 = (state_30793[(2)]);
var inst_30791 = cljs.core.async.close_BANG_(out);
var state_30793__$1 = (function (){var statearr_30802 = state_30793;
(statearr_30802[(9)] = inst_30790);

return statearr_30802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30793__$1,inst_30791);
} else {
if((state_val_30794 === (2))){
var state_30793__$1 = state_30793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30793__$1,(4),ch);
} else {
if((state_val_30794 === (11))){
var inst_30773 = (state_30793[(8)]);
var inst_30782 = (state_30793[(2)]);
var inst_30770 = inst_30773;
var state_30793__$1 = (function (){var statearr_30803 = state_30793;
(statearr_30803[(10)] = inst_30782);

(statearr_30803[(7)] = inst_30770);

return statearr_30803;
})();
var statearr_30804_30822 = state_30793__$1;
(statearr_30804_30822[(2)] = null);

(statearr_30804_30822[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30794 === (9))){
var inst_30773 = (state_30793[(8)]);
var state_30793__$1 = state_30793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30793__$1,(11),out,inst_30773);
} else {
if((state_val_30794 === (5))){
var inst_30773 = (state_30793[(8)]);
var inst_30770 = (state_30793[(7)]);
var inst_30777 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30773,inst_30770);
var state_30793__$1 = state_30793;
if(inst_30777){
var statearr_30806_30823 = state_30793__$1;
(statearr_30806_30823[(1)] = (8));

} else {
var statearr_30807_30824 = state_30793__$1;
(statearr_30807_30824[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30794 === (10))){
var inst_30785 = (state_30793[(2)]);
var state_30793__$1 = state_30793;
var statearr_30808_30825 = state_30793__$1;
(statearr_30808_30825[(2)] = inst_30785);

(statearr_30808_30825[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30794 === (8))){
var inst_30770 = (state_30793[(7)]);
var tmp30805 = inst_30770;
var inst_30770__$1 = tmp30805;
var state_30793__$1 = (function (){var statearr_30809 = state_30793;
(statearr_30809[(7)] = inst_30770__$1);

return statearr_30809;
})();
var statearr_30810_30826 = state_30793__$1;
(statearr_30810_30826[(2)] = null);

(statearr_30810_30826[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___30816,out))
;
return ((function (switch__28990__auto__,c__29090__auto___30816,out){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_30811 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30811[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_30811[(1)] = (1));

return statearr_30811;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_30793){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_30793);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e30812){if((e30812 instanceof Object)){
var ex__28994__auto__ = e30812;
var statearr_30813_30827 = state_30793;
(statearr_30813_30827[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30793);

return cljs.core.cst$kw$recur;
} else {
throw e30812;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__30828 = state_30793;
state_30793 = G__30828;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_30793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_30793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___30816,out))
})();
var state__29092__auto__ = (function (){var statearr_30814 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_30814[(6)] = c__29090__auto___30816);

return statearr_30814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___30816,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30830 = arguments.length;
switch (G__30830) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29090__auto___30896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___30896,out){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___30896,out){
return (function (state_30868){
var state_val_30869 = (state_30868[(1)]);
if((state_val_30869 === (7))){
var inst_30864 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
var statearr_30870_30897 = state_30868__$1;
(statearr_30870_30897[(2)] = inst_30864);

(statearr_30870_30897[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30869 === (1))){
var inst_30831 = (new Array(n));
var inst_30832 = inst_30831;
var inst_30833 = (0);
var state_30868__$1 = (function (){var statearr_30871 = state_30868;
(statearr_30871[(7)] = inst_30833);

(statearr_30871[(8)] = inst_30832);

return statearr_30871;
})();
var statearr_30872_30898 = state_30868__$1;
(statearr_30872_30898[(2)] = null);

(statearr_30872_30898[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30869 === (4))){
var inst_30836 = (state_30868[(9)]);
var inst_30836__$1 = (state_30868[(2)]);
var inst_30837 = (inst_30836__$1 == null);
var inst_30838 = cljs.core.not(inst_30837);
var state_30868__$1 = (function (){var statearr_30873 = state_30868;
(statearr_30873[(9)] = inst_30836__$1);

return statearr_30873;
})();
if(inst_30838){
var statearr_30874_30899 = state_30868__$1;
(statearr_30874_30899[(1)] = (5));

} else {
var statearr_30875_30900 = state_30868__$1;
(statearr_30875_30900[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30869 === (15))){
var inst_30858 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
var statearr_30876_30901 = state_30868__$1;
(statearr_30876_30901[(2)] = inst_30858);

(statearr_30876_30901[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30869 === (13))){
var state_30868__$1 = state_30868;
var statearr_30877_30902 = state_30868__$1;
(statearr_30877_30902[(2)] = null);

(statearr_30877_30902[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30869 === (6))){
var inst_30833 = (state_30868[(7)]);
var inst_30854 = (inst_30833 > (0));
var state_30868__$1 = state_30868;
if(cljs.core.truth_(inst_30854)){
var statearr_30878_30903 = state_30868__$1;
(statearr_30878_30903[(1)] = (12));

} else {
var statearr_30879_30904 = state_30868__$1;
(statearr_30879_30904[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30869 === (3))){
var inst_30866 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30868__$1,inst_30866);
} else {
if((state_val_30869 === (12))){
var inst_30832 = (state_30868[(8)]);
var inst_30856 = cljs.core.vec(inst_30832);
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30868__$1,(15),out,inst_30856);
} else {
if((state_val_30869 === (2))){
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30868__$1,(4),ch);
} else {
if((state_val_30869 === (11))){
var inst_30848 = (state_30868[(2)]);
var inst_30849 = (new Array(n));
var inst_30832 = inst_30849;
var inst_30833 = (0);
var state_30868__$1 = (function (){var statearr_30880 = state_30868;
(statearr_30880[(7)] = inst_30833);

(statearr_30880[(10)] = inst_30848);

(statearr_30880[(8)] = inst_30832);

return statearr_30880;
})();
var statearr_30881_30905 = state_30868__$1;
(statearr_30881_30905[(2)] = null);

(statearr_30881_30905[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30869 === (9))){
var inst_30832 = (state_30868[(8)]);
var inst_30846 = cljs.core.vec(inst_30832);
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30868__$1,(11),out,inst_30846);
} else {
if((state_val_30869 === (5))){
var inst_30836 = (state_30868[(9)]);
var inst_30841 = (state_30868[(11)]);
var inst_30833 = (state_30868[(7)]);
var inst_30832 = (state_30868[(8)]);
var inst_30840 = (inst_30832[inst_30833] = inst_30836);
var inst_30841__$1 = (inst_30833 + (1));
var inst_30842 = (inst_30841__$1 < n);
var state_30868__$1 = (function (){var statearr_30882 = state_30868;
(statearr_30882[(11)] = inst_30841__$1);

(statearr_30882[(12)] = inst_30840);

return statearr_30882;
})();
if(cljs.core.truth_(inst_30842)){
var statearr_30883_30906 = state_30868__$1;
(statearr_30883_30906[(1)] = (8));

} else {
var statearr_30884_30907 = state_30868__$1;
(statearr_30884_30907[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30869 === (14))){
var inst_30861 = (state_30868[(2)]);
var inst_30862 = cljs.core.async.close_BANG_(out);
var state_30868__$1 = (function (){var statearr_30886 = state_30868;
(statearr_30886[(13)] = inst_30861);

return statearr_30886;
})();
var statearr_30887_30908 = state_30868__$1;
(statearr_30887_30908[(2)] = inst_30862);

(statearr_30887_30908[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30869 === (10))){
var inst_30852 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
var statearr_30888_30909 = state_30868__$1;
(statearr_30888_30909[(2)] = inst_30852);

(statearr_30888_30909[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30869 === (8))){
var inst_30841 = (state_30868[(11)]);
var inst_30832 = (state_30868[(8)]);
var tmp30885 = inst_30832;
var inst_30832__$1 = tmp30885;
var inst_30833 = inst_30841;
var state_30868__$1 = (function (){var statearr_30889 = state_30868;
(statearr_30889[(7)] = inst_30833);

(statearr_30889[(8)] = inst_30832__$1);

return statearr_30889;
})();
var statearr_30890_30910 = state_30868__$1;
(statearr_30890_30910[(2)] = null);

(statearr_30890_30910[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___30896,out))
;
return ((function (switch__28990__auto__,c__29090__auto___30896,out){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_30891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30891[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_30891[(1)] = (1));

return statearr_30891;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_30868){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_30868);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e30892){if((e30892 instanceof Object)){
var ex__28994__auto__ = e30892;
var statearr_30893_30911 = state_30868;
(statearr_30893_30911[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30868);

return cljs.core.cst$kw$recur;
} else {
throw e30892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__30912 = state_30868;
state_30868 = G__30912;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_30868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_30868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___30896,out))
})();
var state__29092__auto__ = (function (){var statearr_30894 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_30894[(6)] = c__29090__auto___30896);

return statearr_30894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___30896,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30914 = arguments.length;
switch (G__30914) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29090__auto___30984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___30984,out){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___30984,out){
return (function (state_30956){
var state_val_30957 = (state_30956[(1)]);
if((state_val_30957 === (7))){
var inst_30952 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_30958_30985 = state_30956__$1;
(statearr_30958_30985[(2)] = inst_30952);

(statearr_30958_30985[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30957 === (1))){
var inst_30915 = [];
var inst_30916 = inst_30915;
var inst_30917 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_30956__$1 = (function (){var statearr_30959 = state_30956;
(statearr_30959[(7)] = inst_30917);

(statearr_30959[(8)] = inst_30916);

return statearr_30959;
})();
var statearr_30960_30986 = state_30956__$1;
(statearr_30960_30986[(2)] = null);

(statearr_30960_30986[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30957 === (4))){
var inst_30920 = (state_30956[(9)]);
var inst_30920__$1 = (state_30956[(2)]);
var inst_30921 = (inst_30920__$1 == null);
var inst_30922 = cljs.core.not(inst_30921);
var state_30956__$1 = (function (){var statearr_30961 = state_30956;
(statearr_30961[(9)] = inst_30920__$1);

return statearr_30961;
})();
if(inst_30922){
var statearr_30962_30987 = state_30956__$1;
(statearr_30962_30987[(1)] = (5));

} else {
var statearr_30963_30988 = state_30956__$1;
(statearr_30963_30988[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30957 === (15))){
var inst_30946 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_30964_30989 = state_30956__$1;
(statearr_30964_30989[(2)] = inst_30946);

(statearr_30964_30989[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30957 === (13))){
var state_30956__$1 = state_30956;
var statearr_30965_30990 = state_30956__$1;
(statearr_30965_30990[(2)] = null);

(statearr_30965_30990[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30957 === (6))){
var inst_30916 = (state_30956[(8)]);
var inst_30941 = inst_30916.length;
var inst_30942 = (inst_30941 > (0));
var state_30956__$1 = state_30956;
if(cljs.core.truth_(inst_30942)){
var statearr_30966_30991 = state_30956__$1;
(statearr_30966_30991[(1)] = (12));

} else {
var statearr_30967_30992 = state_30956__$1;
(statearr_30967_30992[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30957 === (3))){
var inst_30954 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30956__$1,inst_30954);
} else {
if((state_val_30957 === (12))){
var inst_30916 = (state_30956[(8)]);
var inst_30944 = cljs.core.vec(inst_30916);
var state_30956__$1 = state_30956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30956__$1,(15),out,inst_30944);
} else {
if((state_val_30957 === (2))){
var state_30956__$1 = state_30956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30956__$1,(4),ch);
} else {
if((state_val_30957 === (11))){
var inst_30920 = (state_30956[(9)]);
var inst_30924 = (state_30956[(10)]);
var inst_30934 = (state_30956[(2)]);
var inst_30935 = [];
var inst_30936 = inst_30935.push(inst_30920);
var inst_30916 = inst_30935;
var inst_30917 = inst_30924;
var state_30956__$1 = (function (){var statearr_30968 = state_30956;
(statearr_30968[(11)] = inst_30936);

(statearr_30968[(12)] = inst_30934);

(statearr_30968[(7)] = inst_30917);

(statearr_30968[(8)] = inst_30916);

return statearr_30968;
})();
var statearr_30969_30993 = state_30956__$1;
(statearr_30969_30993[(2)] = null);

(statearr_30969_30993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30957 === (9))){
var inst_30916 = (state_30956[(8)]);
var inst_30932 = cljs.core.vec(inst_30916);
var state_30956__$1 = state_30956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30956__$1,(11),out,inst_30932);
} else {
if((state_val_30957 === (5))){
var inst_30920 = (state_30956[(9)]);
var inst_30924 = (state_30956[(10)]);
var inst_30917 = (state_30956[(7)]);
var inst_30924__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30920) : f.call(null,inst_30920));
var inst_30925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30924__$1,inst_30917);
var inst_30926 = cljs.core.keyword_identical_QMARK_(inst_30917,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_30927 = (inst_30925) || (inst_30926);
var state_30956__$1 = (function (){var statearr_30970 = state_30956;
(statearr_30970[(10)] = inst_30924__$1);

return statearr_30970;
})();
if(cljs.core.truth_(inst_30927)){
var statearr_30971_30994 = state_30956__$1;
(statearr_30971_30994[(1)] = (8));

} else {
var statearr_30972_30995 = state_30956__$1;
(statearr_30972_30995[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30957 === (14))){
var inst_30949 = (state_30956[(2)]);
var inst_30950 = cljs.core.async.close_BANG_(out);
var state_30956__$1 = (function (){var statearr_30974 = state_30956;
(statearr_30974[(13)] = inst_30949);

return statearr_30974;
})();
var statearr_30975_30996 = state_30956__$1;
(statearr_30975_30996[(2)] = inst_30950);

(statearr_30975_30996[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30957 === (10))){
var inst_30939 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_30976_30997 = state_30956__$1;
(statearr_30976_30997[(2)] = inst_30939);

(statearr_30976_30997[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30957 === (8))){
var inst_30920 = (state_30956[(9)]);
var inst_30924 = (state_30956[(10)]);
var inst_30916 = (state_30956[(8)]);
var inst_30929 = inst_30916.push(inst_30920);
var tmp30973 = inst_30916;
var inst_30916__$1 = tmp30973;
var inst_30917 = inst_30924;
var state_30956__$1 = (function (){var statearr_30977 = state_30956;
(statearr_30977[(14)] = inst_30929);

(statearr_30977[(7)] = inst_30917);

(statearr_30977[(8)] = inst_30916__$1);

return statearr_30977;
})();
var statearr_30978_30998 = state_30956__$1;
(statearr_30978_30998[(2)] = null);

(statearr_30978_30998[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__29090__auto___30984,out))
;
return ((function (switch__28990__auto__,c__29090__auto___30984,out){
return (function() {
var cljs$core$async$state_machine__28991__auto__ = null;
var cljs$core$async$state_machine__28991__auto____0 = (function (){
var statearr_30979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30979[(0)] = cljs$core$async$state_machine__28991__auto__);

(statearr_30979[(1)] = (1));

return statearr_30979;
});
var cljs$core$async$state_machine__28991__auto____1 = (function (state_30956){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_30956);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e30980){if((e30980 instanceof Object)){
var ex__28994__auto__ = e30980;
var statearr_30981_30999 = state_30956;
(statearr_30981_30999[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30956);

return cljs.core.cst$kw$recur;
} else {
throw e30980;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__31000 = state_30956;
state_30956 = G__31000;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs$core$async$state_machine__28991__auto__ = function(state_30956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28991__auto____1.call(this,state_30956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28991__auto____0;
cljs$core$async$state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28991__auto____1;
return cljs$core$async$state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___30984,out))
})();
var state__29092__auto__ = (function (){var statearr_30982 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_30982[(6)] = c__29090__auto___30984);

return statearr_30982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___30984,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

