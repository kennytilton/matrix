// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__9933 = arguments.length;
switch (G__9933) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9934 = (function (f,blockable,meta9935){
this.f = f;
this.blockable = blockable;
this.meta9935 = meta9935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9936,meta9935__$1){
var self__ = this;
var _9936__$1 = this;
return (new cljs.core.async.t_cljs$core$async9934(self__.f,self__.blockable,meta9935__$1));
});

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9936){
var self__ = this;
var _9936__$1 = this;
return self__.meta9935;
});

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9935","meta9935",1383408560,null)], null);
});

cljs.core.async.t_cljs$core$async9934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9934";

cljs.core.async.t_cljs$core$async9934.cljs$lang$ctorPrWriter = (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write.call(null,writer__7386__auto__,"cljs.core.async/t_cljs$core$async9934");
});

cljs.core.async.__GT_t_cljs$core$async9934 = (function cljs$core$async$__GT_t_cljs$core$async9934(f__$1,blockable__$1,meta9935){
return (new cljs.core.async.t_cljs$core$async9934(f__$1,blockable__$1,meta9935));
});

}

return (new cljs.core.async.t_cljs$core$async9934(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__9940 = arguments.length;
switch (G__9940) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__9943 = arguments.length;
switch (G__9943) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__9946 = arguments.length;
switch (G__9946) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9948 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9948);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9948,ret){
return (function (){
return fn1.call(null,val_9948);
});})(val_9948,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__9950 = arguments.length;
switch (G__9950) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7698__auto___9952 = n;
var x_9953 = (0);
while(true){
if((x_9953 < n__7698__auto___9952)){
(a[x_9953] = (0));

var G__9954 = (x_9953 + (1));
x_9953 = G__9954;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9955 = (i + (1));
i = G__9955;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9956 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9956 = (function (flag,meta9957){
this.flag = flag;
this.meta9957 = meta9957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9958,meta9957__$1){
var self__ = this;
var _9958__$1 = this;
return (new cljs.core.async.t_cljs$core$async9956(self__.flag,meta9957__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9958){
var self__ = this;
var _9958__$1 = this;
return self__.meta9957;
});})(flag))
;

cljs.core.async.t_cljs$core$async9956.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9956.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9956.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9957","meta9957",-301158101,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9956.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9956";

cljs.core.async.t_cljs$core$async9956.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write.call(null,writer__7386__auto__,"cljs.core.async/t_cljs$core$async9956");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9956 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9956(flag__$1,meta9957){
return (new cljs.core.async.t_cljs$core$async9956(flag__$1,meta9957));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9956(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9959 = (function (flag,cb,meta9960){
this.flag = flag;
this.cb = cb;
this.meta9960 = meta9960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9961,meta9960__$1){
var self__ = this;
var _9961__$1 = this;
return (new cljs.core.async.t_cljs$core$async9959(self__.flag,self__.cb,meta9960__$1));
});

cljs.core.async.t_cljs$core$async9959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9961){
var self__ = this;
var _9961__$1 = this;
return self__.meta9960;
});

cljs.core.async.t_cljs$core$async9959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9960","meta9960",-57483097,null)], null);
});

cljs.core.async.t_cljs$core$async9959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9959";

cljs.core.async.t_cljs$core$async9959.cljs$lang$ctorPrWriter = (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write.call(null,writer__7386__auto__,"cljs.core.async/t_cljs$core$async9959");
});

cljs.core.async.__GT_t_cljs$core$async9959 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9959(flag__$1,cb__$1,meta9960){
return (new cljs.core.async.t_cljs$core$async9959(flag__$1,cb__$1,meta9960));
});

}

return (new cljs.core.async.t_cljs$core$async9959(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9962_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9962_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9963_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9963_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6774__auto__ = wport;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9964 = (i + (1));
i = G__9964;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6762__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6762__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6762__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__7899__auto___9970 = arguments.length;
var i__7900__auto___9971 = (0);
while(true){
if((i__7900__auto___9971 < len__7899__auto___9970)){
args__7906__auto__.push((arguments[i__7900__auto___9971]));

var G__9972 = (i__7900__auto___9971 + (1));
i__7900__auto___9971 = G__9972;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9967){
var map__9968 = p__9967;
var map__9968__$1 = ((((!((map__9968 == null)))?((((map__9968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9968):map__9968);
var opts = map__9968__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9965){
var G__9966 = cljs.core.first.call(null,seq9965);
var seq9965__$1 = cljs.core.next.call(null,seq9965);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9966,seq9965__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__9974 = arguments.length;
switch (G__9974) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9887__auto___10020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___10020){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___10020){
return (function (state_9998){
var state_val_9999 = (state_9998[(1)]);
if((state_val_9999 === (7))){
var inst_9994 = (state_9998[(2)]);
var state_9998__$1 = state_9998;
var statearr_10000_10021 = state_9998__$1;
(statearr_10000_10021[(2)] = inst_9994);

(statearr_10000_10021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (1))){
var state_9998__$1 = state_9998;
var statearr_10001_10022 = state_9998__$1;
(statearr_10001_10022[(2)] = null);

(statearr_10001_10022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (4))){
var inst_9977 = (state_9998[(7)]);
var inst_9977__$1 = (state_9998[(2)]);
var inst_9978 = (inst_9977__$1 == null);
var state_9998__$1 = (function (){var statearr_10002 = state_9998;
(statearr_10002[(7)] = inst_9977__$1);

return statearr_10002;
})();
if(cljs.core.truth_(inst_9978)){
var statearr_10003_10023 = state_9998__$1;
(statearr_10003_10023[(1)] = (5));

} else {
var statearr_10004_10024 = state_9998__$1;
(statearr_10004_10024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (13))){
var state_9998__$1 = state_9998;
var statearr_10005_10025 = state_9998__$1;
(statearr_10005_10025[(2)] = null);

(statearr_10005_10025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (6))){
var inst_9977 = (state_9998[(7)]);
var state_9998__$1 = state_9998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9998__$1,(11),to,inst_9977);
} else {
if((state_val_9999 === (3))){
var inst_9996 = (state_9998[(2)]);
var state_9998__$1 = state_9998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9998__$1,inst_9996);
} else {
if((state_val_9999 === (12))){
var state_9998__$1 = state_9998;
var statearr_10006_10026 = state_9998__$1;
(statearr_10006_10026[(2)] = null);

(statearr_10006_10026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (2))){
var state_9998__$1 = state_9998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9998__$1,(4),from);
} else {
if((state_val_9999 === (11))){
var inst_9987 = (state_9998[(2)]);
var state_9998__$1 = state_9998;
if(cljs.core.truth_(inst_9987)){
var statearr_10007_10027 = state_9998__$1;
(statearr_10007_10027[(1)] = (12));

} else {
var statearr_10008_10028 = state_9998__$1;
(statearr_10008_10028[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (9))){
var state_9998__$1 = state_9998;
var statearr_10009_10029 = state_9998__$1;
(statearr_10009_10029[(2)] = null);

(statearr_10009_10029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (5))){
var state_9998__$1 = state_9998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10010_10030 = state_9998__$1;
(statearr_10010_10030[(1)] = (8));

} else {
var statearr_10011_10031 = state_9998__$1;
(statearr_10011_10031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (14))){
var inst_9992 = (state_9998[(2)]);
var state_9998__$1 = state_9998;
var statearr_10012_10032 = state_9998__$1;
(statearr_10012_10032[(2)] = inst_9992);

(statearr_10012_10032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (10))){
var inst_9984 = (state_9998[(2)]);
var state_9998__$1 = state_9998;
var statearr_10013_10033 = state_9998__$1;
(statearr_10013_10033[(2)] = inst_9984);

(statearr_10013_10033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (8))){
var inst_9981 = cljs.core.async.close_BANG_.call(null,to);
var state_9998__$1 = state_9998;
var statearr_10014_10034 = state_9998__$1;
(statearr_10014_10034[(2)] = inst_9981);

(statearr_10014_10034[(1)] = (10));


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
});})(c__9887__auto___10020))
;
return ((function (switch__9799__auto__,c__9887__auto___10020){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_10015 = [null,null,null,null,null,null,null,null];
(statearr_10015[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_10015[(1)] = (1));

return statearr_10015;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_9998){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_9998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10016){if((e10016 instanceof Object)){
var ex__9803__auto__ = e10016;
var statearr_10017_10035 = state_9998;
(statearr_10017_10035[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10036 = state_9998;
state_9998 = G__10036;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_9998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_9998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___10020))
})();
var state__9889__auto__ = (function (){var statearr_10018 = f__9888__auto__.call(null);
(statearr_10018[(6)] = c__9887__auto___10020);

return statearr_10018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___10020))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10037){
var vec__10038 = p__10037;
var v = cljs.core.nth.call(null,vec__10038,(0),null);
var p = cljs.core.nth.call(null,vec__10038,(1),null);
var job = vec__10038;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9887__auto___10209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___10209,res,vec__10038,v,p,job,jobs,results){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___10209,res,vec__10038,v,p,job,jobs,results){
return (function (state_10045){
var state_val_10046 = (state_10045[(1)]);
if((state_val_10046 === (1))){
var state_10045__$1 = state_10045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10045__$1,(2),res,v);
} else {
if((state_val_10046 === (2))){
var inst_10042 = (state_10045[(2)]);
var inst_10043 = cljs.core.async.close_BANG_.call(null,res);
var state_10045__$1 = (function (){var statearr_10047 = state_10045;
(statearr_10047[(7)] = inst_10042);

return statearr_10047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10045__$1,inst_10043);
} else {
return null;
}
}
});})(c__9887__auto___10209,res,vec__10038,v,p,job,jobs,results))
;
return ((function (switch__9799__auto__,c__9887__auto___10209,res,vec__10038,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0 = (function (){
var statearr_10048 = [null,null,null,null,null,null,null,null];
(statearr_10048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__);

(statearr_10048[(1)] = (1));

return statearr_10048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1 = (function (state_10045){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10049){if((e10049 instanceof Object)){
var ex__9803__auto__ = e10049;
var statearr_10050_10210 = state_10045;
(statearr_10050_10210[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10211 = state_10045;
state_10045 = G__10211;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__ = function(state_10045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1.call(this,state_10045);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___10209,res,vec__10038,v,p,job,jobs,results))
})();
var state__9889__auto__ = (function (){var statearr_10051 = f__9888__auto__.call(null);
(statearr_10051[(6)] = c__9887__auto___10209);

return statearr_10051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___10209,res,vec__10038,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10052){
var vec__10053 = p__10052;
var v = cljs.core.nth.call(null,vec__10053,(0),null);
var p = cljs.core.nth.call(null,vec__10053,(1),null);
var job = vec__10053;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7698__auto___10212 = n;
var __10213 = (0);
while(true){
if((__10213 < n__7698__auto___10212)){
var G__10056_10214 = type;
var G__10056_10215__$1 = (((G__10056_10214 instanceof cljs.core.Keyword))?G__10056_10214.fqn:null);
switch (G__10056_10215__$1) {
case "compute":
var c__9887__auto___10217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10213,c__9887__auto___10217,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (__10213,c__9887__auto___10217,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async){
return (function (state_10069){
var state_val_10070 = (state_10069[(1)]);
if((state_val_10070 === (1))){
var state_10069__$1 = state_10069;
var statearr_10071_10218 = state_10069__$1;
(statearr_10071_10218[(2)] = null);

(statearr_10071_10218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10070 === (2))){
var state_10069__$1 = state_10069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10069__$1,(4),jobs);
} else {
if((state_val_10070 === (3))){
var inst_10067 = (state_10069[(2)]);
var state_10069__$1 = state_10069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10069__$1,inst_10067);
} else {
if((state_val_10070 === (4))){
var inst_10059 = (state_10069[(2)]);
var inst_10060 = process.call(null,inst_10059);
var state_10069__$1 = state_10069;
if(cljs.core.truth_(inst_10060)){
var statearr_10072_10219 = state_10069__$1;
(statearr_10072_10219[(1)] = (5));

} else {
var statearr_10073_10220 = state_10069__$1;
(statearr_10073_10220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10070 === (5))){
var state_10069__$1 = state_10069;
var statearr_10074_10221 = state_10069__$1;
(statearr_10074_10221[(2)] = null);

(statearr_10074_10221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10070 === (6))){
var state_10069__$1 = state_10069;
var statearr_10075_10222 = state_10069__$1;
(statearr_10075_10222[(2)] = null);

(statearr_10075_10222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10070 === (7))){
var inst_10065 = (state_10069[(2)]);
var state_10069__$1 = state_10069;
var statearr_10076_10223 = state_10069__$1;
(statearr_10076_10223[(2)] = inst_10065);

(statearr_10076_10223[(1)] = (3));


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
});})(__10213,c__9887__auto___10217,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async))
;
return ((function (__10213,switch__9799__auto__,c__9887__auto___10217,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0 = (function (){
var statearr_10077 = [null,null,null,null,null,null,null];
(statearr_10077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__);

(statearr_10077[(1)] = (1));

return statearr_10077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1 = (function (state_10069){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10078){if((e10078 instanceof Object)){
var ex__9803__auto__ = e10078;
var statearr_10079_10224 = state_10069;
(statearr_10079_10224[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10225 = state_10069;
state_10069 = G__10225;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__ = function(state_10069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1.call(this,state_10069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__;
})()
;})(__10213,switch__9799__auto__,c__9887__auto___10217,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async))
})();
var state__9889__auto__ = (function (){var statearr_10080 = f__9888__auto__.call(null);
(statearr_10080[(6)] = c__9887__auto___10217);

return statearr_10080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(__10213,c__9887__auto___10217,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async))
);


break;
case "async":
var c__9887__auto___10226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10213,c__9887__auto___10226,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (__10213,c__9887__auto___10226,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async){
return (function (state_10093){
var state_val_10094 = (state_10093[(1)]);
if((state_val_10094 === (1))){
var state_10093__$1 = state_10093;
var statearr_10095_10227 = state_10093__$1;
(statearr_10095_10227[(2)] = null);

(statearr_10095_10227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10094 === (2))){
var state_10093__$1 = state_10093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10093__$1,(4),jobs);
} else {
if((state_val_10094 === (3))){
var inst_10091 = (state_10093[(2)]);
var state_10093__$1 = state_10093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10093__$1,inst_10091);
} else {
if((state_val_10094 === (4))){
var inst_10083 = (state_10093[(2)]);
var inst_10084 = async.call(null,inst_10083);
var state_10093__$1 = state_10093;
if(cljs.core.truth_(inst_10084)){
var statearr_10096_10228 = state_10093__$1;
(statearr_10096_10228[(1)] = (5));

} else {
var statearr_10097_10229 = state_10093__$1;
(statearr_10097_10229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10094 === (5))){
var state_10093__$1 = state_10093;
var statearr_10098_10230 = state_10093__$1;
(statearr_10098_10230[(2)] = null);

(statearr_10098_10230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10094 === (6))){
var state_10093__$1 = state_10093;
var statearr_10099_10231 = state_10093__$1;
(statearr_10099_10231[(2)] = null);

(statearr_10099_10231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10094 === (7))){
var inst_10089 = (state_10093[(2)]);
var state_10093__$1 = state_10093;
var statearr_10100_10232 = state_10093__$1;
(statearr_10100_10232[(2)] = inst_10089);

(statearr_10100_10232[(1)] = (3));


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
});})(__10213,c__9887__auto___10226,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async))
;
return ((function (__10213,switch__9799__auto__,c__9887__auto___10226,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0 = (function (){
var statearr_10101 = [null,null,null,null,null,null,null];
(statearr_10101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__);

(statearr_10101[(1)] = (1));

return statearr_10101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1 = (function (state_10093){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10102){if((e10102 instanceof Object)){
var ex__9803__auto__ = e10102;
var statearr_10103_10233 = state_10093;
(statearr_10103_10233[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10234 = state_10093;
state_10093 = G__10234;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__ = function(state_10093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1.call(this,state_10093);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__;
})()
;})(__10213,switch__9799__auto__,c__9887__auto___10226,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async))
})();
var state__9889__auto__ = (function (){var statearr_10104 = f__9888__auto__.call(null);
(statearr_10104[(6)] = c__9887__auto___10226);

return statearr_10104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(__10213,c__9887__auto___10226,G__10056_10214,G__10056_10215__$1,n__7698__auto___10212,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10056_10215__$1)].join('')));

}

var G__10235 = (__10213 + (1));
__10213 = G__10235;
continue;
} else {
}
break;
}

var c__9887__auto___10236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___10236,jobs,results,process,async){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___10236,jobs,results,process,async){
return (function (state_10126){
var state_val_10127 = (state_10126[(1)]);
if((state_val_10127 === (1))){
var state_10126__$1 = state_10126;
var statearr_10128_10237 = state_10126__$1;
(statearr_10128_10237[(2)] = null);

(statearr_10128_10237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (2))){
var state_10126__$1 = state_10126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10126__$1,(4),from);
} else {
if((state_val_10127 === (3))){
var inst_10124 = (state_10126[(2)]);
var state_10126__$1 = state_10126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10126__$1,inst_10124);
} else {
if((state_val_10127 === (4))){
var inst_10107 = (state_10126[(7)]);
var inst_10107__$1 = (state_10126[(2)]);
var inst_10108 = (inst_10107__$1 == null);
var state_10126__$1 = (function (){var statearr_10129 = state_10126;
(statearr_10129[(7)] = inst_10107__$1);

return statearr_10129;
})();
if(cljs.core.truth_(inst_10108)){
var statearr_10130_10238 = state_10126__$1;
(statearr_10130_10238[(1)] = (5));

} else {
var statearr_10131_10239 = state_10126__$1;
(statearr_10131_10239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (5))){
var inst_10110 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10126__$1 = state_10126;
var statearr_10132_10240 = state_10126__$1;
(statearr_10132_10240[(2)] = inst_10110);

(statearr_10132_10240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (6))){
var inst_10112 = (state_10126[(8)]);
var inst_10107 = (state_10126[(7)]);
var inst_10112__$1 = cljs.core.async.chan.call(null,(1));
var inst_10113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10114 = [inst_10107,inst_10112__$1];
var inst_10115 = (new cljs.core.PersistentVector(null,2,(5),inst_10113,inst_10114,null));
var state_10126__$1 = (function (){var statearr_10133 = state_10126;
(statearr_10133[(8)] = inst_10112__$1);

return statearr_10133;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10126__$1,(8),jobs,inst_10115);
} else {
if((state_val_10127 === (7))){
var inst_10122 = (state_10126[(2)]);
var state_10126__$1 = state_10126;
var statearr_10134_10241 = state_10126__$1;
(statearr_10134_10241[(2)] = inst_10122);

(statearr_10134_10241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10127 === (8))){
var inst_10112 = (state_10126[(8)]);
var inst_10117 = (state_10126[(2)]);
var state_10126__$1 = (function (){var statearr_10135 = state_10126;
(statearr_10135[(9)] = inst_10117);

return statearr_10135;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10126__$1,(9),results,inst_10112);
} else {
if((state_val_10127 === (9))){
var inst_10119 = (state_10126[(2)]);
var state_10126__$1 = (function (){var statearr_10136 = state_10126;
(statearr_10136[(10)] = inst_10119);

return statearr_10136;
})();
var statearr_10137_10242 = state_10126__$1;
(statearr_10137_10242[(2)] = null);

(statearr_10137_10242[(1)] = (2));


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
});})(c__9887__auto___10236,jobs,results,process,async))
;
return ((function (switch__9799__auto__,c__9887__auto___10236,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0 = (function (){
var statearr_10138 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__);

(statearr_10138[(1)] = (1));

return statearr_10138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1 = (function (state_10126){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10139){if((e10139 instanceof Object)){
var ex__9803__auto__ = e10139;
var statearr_10140_10243 = state_10126;
(statearr_10140_10243[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10244 = state_10126;
state_10126 = G__10244;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__ = function(state_10126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1.call(this,state_10126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___10236,jobs,results,process,async))
})();
var state__9889__auto__ = (function (){var statearr_10141 = f__9888__auto__.call(null);
(statearr_10141[(6)] = c__9887__auto___10236);

return statearr_10141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___10236,jobs,results,process,async))
);


var c__9887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto__,jobs,results,process,async){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto__,jobs,results,process,async){
return (function (state_10179){
var state_val_10180 = (state_10179[(1)]);
if((state_val_10180 === (7))){
var inst_10175 = (state_10179[(2)]);
var state_10179__$1 = state_10179;
var statearr_10181_10245 = state_10179__$1;
(statearr_10181_10245[(2)] = inst_10175);

(statearr_10181_10245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (20))){
var state_10179__$1 = state_10179;
var statearr_10182_10246 = state_10179__$1;
(statearr_10182_10246[(2)] = null);

(statearr_10182_10246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (1))){
var state_10179__$1 = state_10179;
var statearr_10183_10247 = state_10179__$1;
(statearr_10183_10247[(2)] = null);

(statearr_10183_10247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (4))){
var inst_10144 = (state_10179[(7)]);
var inst_10144__$1 = (state_10179[(2)]);
var inst_10145 = (inst_10144__$1 == null);
var state_10179__$1 = (function (){var statearr_10184 = state_10179;
(statearr_10184[(7)] = inst_10144__$1);

return statearr_10184;
})();
if(cljs.core.truth_(inst_10145)){
var statearr_10185_10248 = state_10179__$1;
(statearr_10185_10248[(1)] = (5));

} else {
var statearr_10186_10249 = state_10179__$1;
(statearr_10186_10249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (15))){
var inst_10157 = (state_10179[(8)]);
var state_10179__$1 = state_10179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10179__$1,(18),to,inst_10157);
} else {
if((state_val_10180 === (21))){
var inst_10170 = (state_10179[(2)]);
var state_10179__$1 = state_10179;
var statearr_10187_10250 = state_10179__$1;
(statearr_10187_10250[(2)] = inst_10170);

(statearr_10187_10250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (13))){
var inst_10172 = (state_10179[(2)]);
var state_10179__$1 = (function (){var statearr_10188 = state_10179;
(statearr_10188[(9)] = inst_10172);

return statearr_10188;
})();
var statearr_10189_10251 = state_10179__$1;
(statearr_10189_10251[(2)] = null);

(statearr_10189_10251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (6))){
var inst_10144 = (state_10179[(7)]);
var state_10179__$1 = state_10179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10179__$1,(11),inst_10144);
} else {
if((state_val_10180 === (17))){
var inst_10165 = (state_10179[(2)]);
var state_10179__$1 = state_10179;
if(cljs.core.truth_(inst_10165)){
var statearr_10190_10252 = state_10179__$1;
(statearr_10190_10252[(1)] = (19));

} else {
var statearr_10191_10253 = state_10179__$1;
(statearr_10191_10253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (3))){
var inst_10177 = (state_10179[(2)]);
var state_10179__$1 = state_10179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10179__$1,inst_10177);
} else {
if((state_val_10180 === (12))){
var inst_10154 = (state_10179[(10)]);
var state_10179__$1 = state_10179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10179__$1,(14),inst_10154);
} else {
if((state_val_10180 === (2))){
var state_10179__$1 = state_10179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10179__$1,(4),results);
} else {
if((state_val_10180 === (19))){
var state_10179__$1 = state_10179;
var statearr_10192_10254 = state_10179__$1;
(statearr_10192_10254[(2)] = null);

(statearr_10192_10254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (11))){
var inst_10154 = (state_10179[(2)]);
var state_10179__$1 = (function (){var statearr_10193 = state_10179;
(statearr_10193[(10)] = inst_10154);

return statearr_10193;
})();
var statearr_10194_10255 = state_10179__$1;
(statearr_10194_10255[(2)] = null);

(statearr_10194_10255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (9))){
var state_10179__$1 = state_10179;
var statearr_10195_10256 = state_10179__$1;
(statearr_10195_10256[(2)] = null);

(statearr_10195_10256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (5))){
var state_10179__$1 = state_10179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10196_10257 = state_10179__$1;
(statearr_10196_10257[(1)] = (8));

} else {
var statearr_10197_10258 = state_10179__$1;
(statearr_10197_10258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (14))){
var inst_10157 = (state_10179[(8)]);
var inst_10159 = (state_10179[(11)]);
var inst_10157__$1 = (state_10179[(2)]);
var inst_10158 = (inst_10157__$1 == null);
var inst_10159__$1 = cljs.core.not.call(null,inst_10158);
var state_10179__$1 = (function (){var statearr_10198 = state_10179;
(statearr_10198[(8)] = inst_10157__$1);

(statearr_10198[(11)] = inst_10159__$1);

return statearr_10198;
})();
if(inst_10159__$1){
var statearr_10199_10259 = state_10179__$1;
(statearr_10199_10259[(1)] = (15));

} else {
var statearr_10200_10260 = state_10179__$1;
(statearr_10200_10260[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (16))){
var inst_10159 = (state_10179[(11)]);
var state_10179__$1 = state_10179;
var statearr_10201_10261 = state_10179__$1;
(statearr_10201_10261[(2)] = inst_10159);

(statearr_10201_10261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (10))){
var inst_10151 = (state_10179[(2)]);
var state_10179__$1 = state_10179;
var statearr_10202_10262 = state_10179__$1;
(statearr_10202_10262[(2)] = inst_10151);

(statearr_10202_10262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (18))){
var inst_10162 = (state_10179[(2)]);
var state_10179__$1 = state_10179;
var statearr_10203_10263 = state_10179__$1;
(statearr_10203_10263[(2)] = inst_10162);

(statearr_10203_10263[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10180 === (8))){
var inst_10148 = cljs.core.async.close_BANG_.call(null,to);
var state_10179__$1 = state_10179;
var statearr_10204_10264 = state_10179__$1;
(statearr_10204_10264[(2)] = inst_10148);

(statearr_10204_10264[(1)] = (10));


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
});})(c__9887__auto__,jobs,results,process,async))
;
return ((function (switch__9799__auto__,c__9887__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0 = (function (){
var statearr_10205 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__);

(statearr_10205[(1)] = (1));

return statearr_10205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1 = (function (state_10179){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10206){if((e10206 instanceof Object)){
var ex__9803__auto__ = e10206;
var statearr_10207_10265 = state_10179;
(statearr_10207_10265[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10266 = state_10179;
state_10179 = G__10266;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__ = function(state_10179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1.call(this,state_10179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto__,jobs,results,process,async))
})();
var state__9889__auto__ = (function (){var statearr_10208 = f__9888__auto__.call(null);
(statearr_10208[(6)] = c__9887__auto__);

return statearr_10208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto__,jobs,results,process,async))
);

return c__9887__auto__;
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
var G__10268 = arguments.length;
switch (G__10268) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__10271 = arguments.length;
switch (G__10271) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__10274 = arguments.length;
switch (G__10274) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9887__auto___10323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___10323,tc,fc){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___10323,tc,fc){
return (function (state_10300){
var state_val_10301 = (state_10300[(1)]);
if((state_val_10301 === (7))){
var inst_10296 = (state_10300[(2)]);
var state_10300__$1 = state_10300;
var statearr_10302_10324 = state_10300__$1;
(statearr_10302_10324[(2)] = inst_10296);

(statearr_10302_10324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10301 === (1))){
var state_10300__$1 = state_10300;
var statearr_10303_10325 = state_10300__$1;
(statearr_10303_10325[(2)] = null);

(statearr_10303_10325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10301 === (4))){
var inst_10277 = (state_10300[(7)]);
var inst_10277__$1 = (state_10300[(2)]);
var inst_10278 = (inst_10277__$1 == null);
var state_10300__$1 = (function (){var statearr_10304 = state_10300;
(statearr_10304[(7)] = inst_10277__$1);

return statearr_10304;
})();
if(cljs.core.truth_(inst_10278)){
var statearr_10305_10326 = state_10300__$1;
(statearr_10305_10326[(1)] = (5));

} else {
var statearr_10306_10327 = state_10300__$1;
(statearr_10306_10327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10301 === (13))){
var state_10300__$1 = state_10300;
var statearr_10307_10328 = state_10300__$1;
(statearr_10307_10328[(2)] = null);

(statearr_10307_10328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10301 === (6))){
var inst_10277 = (state_10300[(7)]);
var inst_10283 = p.call(null,inst_10277);
var state_10300__$1 = state_10300;
if(cljs.core.truth_(inst_10283)){
var statearr_10308_10329 = state_10300__$1;
(statearr_10308_10329[(1)] = (9));

} else {
var statearr_10309_10330 = state_10300__$1;
(statearr_10309_10330[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10301 === (3))){
var inst_10298 = (state_10300[(2)]);
var state_10300__$1 = state_10300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10300__$1,inst_10298);
} else {
if((state_val_10301 === (12))){
var state_10300__$1 = state_10300;
var statearr_10310_10331 = state_10300__$1;
(statearr_10310_10331[(2)] = null);

(statearr_10310_10331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10301 === (2))){
var state_10300__$1 = state_10300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10300__$1,(4),ch);
} else {
if((state_val_10301 === (11))){
var inst_10277 = (state_10300[(7)]);
var inst_10287 = (state_10300[(2)]);
var state_10300__$1 = state_10300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10300__$1,(8),inst_10287,inst_10277);
} else {
if((state_val_10301 === (9))){
var state_10300__$1 = state_10300;
var statearr_10311_10332 = state_10300__$1;
(statearr_10311_10332[(2)] = tc);

(statearr_10311_10332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10301 === (5))){
var inst_10280 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10281 = cljs.core.async.close_BANG_.call(null,fc);
var state_10300__$1 = (function (){var statearr_10312 = state_10300;
(statearr_10312[(8)] = inst_10280);

return statearr_10312;
})();
var statearr_10313_10333 = state_10300__$1;
(statearr_10313_10333[(2)] = inst_10281);

(statearr_10313_10333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10301 === (14))){
var inst_10294 = (state_10300[(2)]);
var state_10300__$1 = state_10300;
var statearr_10314_10334 = state_10300__$1;
(statearr_10314_10334[(2)] = inst_10294);

(statearr_10314_10334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10301 === (10))){
var state_10300__$1 = state_10300;
var statearr_10315_10335 = state_10300__$1;
(statearr_10315_10335[(2)] = fc);

(statearr_10315_10335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10301 === (8))){
var inst_10289 = (state_10300[(2)]);
var state_10300__$1 = state_10300;
if(cljs.core.truth_(inst_10289)){
var statearr_10316_10336 = state_10300__$1;
(statearr_10316_10336[(1)] = (12));

} else {
var statearr_10317_10337 = state_10300__$1;
(statearr_10317_10337[(1)] = (13));

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
});})(c__9887__auto___10323,tc,fc))
;
return ((function (switch__9799__auto__,c__9887__auto___10323,tc,fc){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_10318 = [null,null,null,null,null,null,null,null,null];
(statearr_10318[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_10318[(1)] = (1));

return statearr_10318;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_10300){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10319){if((e10319 instanceof Object)){
var ex__9803__auto__ = e10319;
var statearr_10320_10338 = state_10300;
(statearr_10320_10338[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10339 = state_10300;
state_10300 = G__10339;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_10300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_10300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___10323,tc,fc))
})();
var state__9889__auto__ = (function (){var statearr_10321 = f__9888__auto__.call(null);
(statearr_10321[(6)] = c__9887__auto___10323);

return statearr_10321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___10323,tc,fc))
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
var c__9887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto__){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto__){
return (function (state_10360){
var state_val_10361 = (state_10360[(1)]);
if((state_val_10361 === (7))){
var inst_10356 = (state_10360[(2)]);
var state_10360__$1 = state_10360;
var statearr_10362_10380 = state_10360__$1;
(statearr_10362_10380[(2)] = inst_10356);

(statearr_10362_10380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (1))){
var inst_10340 = init;
var state_10360__$1 = (function (){var statearr_10363 = state_10360;
(statearr_10363[(7)] = inst_10340);

return statearr_10363;
})();
var statearr_10364_10381 = state_10360__$1;
(statearr_10364_10381[(2)] = null);

(statearr_10364_10381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (4))){
var inst_10343 = (state_10360[(8)]);
var inst_10343__$1 = (state_10360[(2)]);
var inst_10344 = (inst_10343__$1 == null);
var state_10360__$1 = (function (){var statearr_10365 = state_10360;
(statearr_10365[(8)] = inst_10343__$1);

return statearr_10365;
})();
if(cljs.core.truth_(inst_10344)){
var statearr_10366_10382 = state_10360__$1;
(statearr_10366_10382[(1)] = (5));

} else {
var statearr_10367_10383 = state_10360__$1;
(statearr_10367_10383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (6))){
var inst_10340 = (state_10360[(7)]);
var inst_10347 = (state_10360[(9)]);
var inst_10343 = (state_10360[(8)]);
var inst_10347__$1 = f.call(null,inst_10340,inst_10343);
var inst_10348 = cljs.core.reduced_QMARK_.call(null,inst_10347__$1);
var state_10360__$1 = (function (){var statearr_10368 = state_10360;
(statearr_10368[(9)] = inst_10347__$1);

return statearr_10368;
})();
if(inst_10348){
var statearr_10369_10384 = state_10360__$1;
(statearr_10369_10384[(1)] = (8));

} else {
var statearr_10370_10385 = state_10360__$1;
(statearr_10370_10385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (3))){
var inst_10358 = (state_10360[(2)]);
var state_10360__$1 = state_10360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10360__$1,inst_10358);
} else {
if((state_val_10361 === (2))){
var state_10360__$1 = state_10360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10360__$1,(4),ch);
} else {
if((state_val_10361 === (9))){
var inst_10347 = (state_10360[(9)]);
var inst_10340 = inst_10347;
var state_10360__$1 = (function (){var statearr_10371 = state_10360;
(statearr_10371[(7)] = inst_10340);

return statearr_10371;
})();
var statearr_10372_10386 = state_10360__$1;
(statearr_10372_10386[(2)] = null);

(statearr_10372_10386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (5))){
var inst_10340 = (state_10360[(7)]);
var state_10360__$1 = state_10360;
var statearr_10373_10387 = state_10360__$1;
(statearr_10373_10387[(2)] = inst_10340);

(statearr_10373_10387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (10))){
var inst_10354 = (state_10360[(2)]);
var state_10360__$1 = state_10360;
var statearr_10374_10388 = state_10360__$1;
(statearr_10374_10388[(2)] = inst_10354);

(statearr_10374_10388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10361 === (8))){
var inst_10347 = (state_10360[(9)]);
var inst_10350 = cljs.core.deref.call(null,inst_10347);
var state_10360__$1 = state_10360;
var statearr_10375_10389 = state_10360__$1;
(statearr_10375_10389[(2)] = inst_10350);

(statearr_10375_10389[(1)] = (10));


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
});})(c__9887__auto__))
;
return ((function (switch__9799__auto__,c__9887__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9800__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9800__auto____0 = (function (){
var statearr_10376 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10376[(0)] = cljs$core$async$reduce_$_state_machine__9800__auto__);

(statearr_10376[(1)] = (1));

return statearr_10376;
});
var cljs$core$async$reduce_$_state_machine__9800__auto____1 = (function (state_10360){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10377){if((e10377 instanceof Object)){
var ex__9803__auto__ = e10377;
var statearr_10378_10390 = state_10360;
(statearr_10378_10390[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10391 = state_10360;
state_10360 = G__10391;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9800__auto__ = function(state_10360){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9800__auto____1.call(this,state_10360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9800__auto____0;
cljs$core$async$reduce_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9800__auto____1;
return cljs$core$async$reduce_$_state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto__))
})();
var state__9889__auto__ = (function (){var statearr_10379 = f__9888__auto__.call(null);
(statearr_10379[(6)] = c__9887__auto__);

return statearr_10379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto__))
);

return c__9887__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__9887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto__,f__$1){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto__,f__$1){
return (function (state_10397){
var state_val_10398 = (state_10397[(1)]);
if((state_val_10398 === (1))){
var inst_10392 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10397__$1 = state_10397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10397__$1,(2),inst_10392);
} else {
if((state_val_10398 === (2))){
var inst_10394 = (state_10397[(2)]);
var inst_10395 = f__$1.call(null,inst_10394);
var state_10397__$1 = state_10397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10397__$1,inst_10395);
} else {
return null;
}
}
});})(c__9887__auto__,f__$1))
;
return ((function (switch__9799__auto__,c__9887__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9800__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9800__auto____0 = (function (){
var statearr_10399 = [null,null,null,null,null,null,null];
(statearr_10399[(0)] = cljs$core$async$transduce_$_state_machine__9800__auto__);

(statearr_10399[(1)] = (1));

return statearr_10399;
});
var cljs$core$async$transduce_$_state_machine__9800__auto____1 = (function (state_10397){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10400){if((e10400 instanceof Object)){
var ex__9803__auto__ = e10400;
var statearr_10401_10403 = state_10397;
(statearr_10401_10403[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10404 = state_10397;
state_10397 = G__10404;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9800__auto__ = function(state_10397){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9800__auto____1.call(this,state_10397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9800__auto____0;
cljs$core$async$transduce_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9800__auto____1;
return cljs$core$async$transduce_$_state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto__,f__$1))
})();
var state__9889__auto__ = (function (){var statearr_10402 = f__9888__auto__.call(null);
(statearr_10402[(6)] = c__9887__auto__);

return statearr_10402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto__,f__$1))
);

return c__9887__auto__;
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
var G__10406 = arguments.length;
switch (G__10406) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto__){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto__){
return (function (state_10431){
var state_val_10432 = (state_10431[(1)]);
if((state_val_10432 === (7))){
var inst_10413 = (state_10431[(2)]);
var state_10431__$1 = state_10431;
var statearr_10433_10454 = state_10431__$1;
(statearr_10433_10454[(2)] = inst_10413);

(statearr_10433_10454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10432 === (1))){
var inst_10407 = cljs.core.seq.call(null,coll);
var inst_10408 = inst_10407;
var state_10431__$1 = (function (){var statearr_10434 = state_10431;
(statearr_10434[(7)] = inst_10408);

return statearr_10434;
})();
var statearr_10435_10455 = state_10431__$1;
(statearr_10435_10455[(2)] = null);

(statearr_10435_10455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10432 === (4))){
var inst_10408 = (state_10431[(7)]);
var inst_10411 = cljs.core.first.call(null,inst_10408);
var state_10431__$1 = state_10431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10431__$1,(7),ch,inst_10411);
} else {
if((state_val_10432 === (13))){
var inst_10425 = (state_10431[(2)]);
var state_10431__$1 = state_10431;
var statearr_10436_10456 = state_10431__$1;
(statearr_10436_10456[(2)] = inst_10425);

(statearr_10436_10456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10432 === (6))){
var inst_10416 = (state_10431[(2)]);
var state_10431__$1 = state_10431;
if(cljs.core.truth_(inst_10416)){
var statearr_10437_10457 = state_10431__$1;
(statearr_10437_10457[(1)] = (8));

} else {
var statearr_10438_10458 = state_10431__$1;
(statearr_10438_10458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10432 === (3))){
var inst_10429 = (state_10431[(2)]);
var state_10431__$1 = state_10431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10431__$1,inst_10429);
} else {
if((state_val_10432 === (12))){
var state_10431__$1 = state_10431;
var statearr_10439_10459 = state_10431__$1;
(statearr_10439_10459[(2)] = null);

(statearr_10439_10459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10432 === (2))){
var inst_10408 = (state_10431[(7)]);
var state_10431__$1 = state_10431;
if(cljs.core.truth_(inst_10408)){
var statearr_10440_10460 = state_10431__$1;
(statearr_10440_10460[(1)] = (4));

} else {
var statearr_10441_10461 = state_10431__$1;
(statearr_10441_10461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10432 === (11))){
var inst_10422 = cljs.core.async.close_BANG_.call(null,ch);
var state_10431__$1 = state_10431;
var statearr_10442_10462 = state_10431__$1;
(statearr_10442_10462[(2)] = inst_10422);

(statearr_10442_10462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10432 === (9))){
var state_10431__$1 = state_10431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10443_10463 = state_10431__$1;
(statearr_10443_10463[(1)] = (11));

} else {
var statearr_10444_10464 = state_10431__$1;
(statearr_10444_10464[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10432 === (5))){
var inst_10408 = (state_10431[(7)]);
var state_10431__$1 = state_10431;
var statearr_10445_10465 = state_10431__$1;
(statearr_10445_10465[(2)] = inst_10408);

(statearr_10445_10465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10432 === (10))){
var inst_10427 = (state_10431[(2)]);
var state_10431__$1 = state_10431;
var statearr_10446_10466 = state_10431__$1;
(statearr_10446_10466[(2)] = inst_10427);

(statearr_10446_10466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10432 === (8))){
var inst_10408 = (state_10431[(7)]);
var inst_10418 = cljs.core.next.call(null,inst_10408);
var inst_10408__$1 = inst_10418;
var state_10431__$1 = (function (){var statearr_10447 = state_10431;
(statearr_10447[(7)] = inst_10408__$1);

return statearr_10447;
})();
var statearr_10448_10467 = state_10431__$1;
(statearr_10448_10467[(2)] = null);

(statearr_10448_10467[(1)] = (2));


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
});})(c__9887__auto__))
;
return ((function (switch__9799__auto__,c__9887__auto__){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_10449 = [null,null,null,null,null,null,null,null];
(statearr_10449[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_10449[(1)] = (1));

return statearr_10449;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_10431){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10450){if((e10450 instanceof Object)){
var ex__9803__auto__ = e10450;
var statearr_10451_10468 = state_10431;
(statearr_10451_10468[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10469 = state_10431;
state_10431 = G__10469;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_10431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_10431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto__))
})();
var state__9889__auto__ = (function (){var statearr_10452 = f__9888__auto__.call(null);
(statearr_10452[(6)] = c__9887__auto__);

return statearr_10452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto__))
);

return c__9887__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
return m__7444__auto__.call(null,_);
} else {
var m__7444__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
return m__7444__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7444__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__7444__auto__.call(null,m,ch);
} else {
var m__7444__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__7444__auto__.call(null,m);
} else {
var m__7444__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10470 = (function (ch,cs,meta10471){
this.ch = ch;
this.cs = cs;
this.meta10471 = meta10471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10472,meta10471__$1){
var self__ = this;
var _10472__$1 = this;
return (new cljs.core.async.t_cljs$core$async10470(self__.ch,self__.cs,meta10471__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10472){
var self__ = this;
var _10472__$1 = this;
return self__.meta10471;
});})(cs))
;

cljs.core.async.t_cljs$core$async10470.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10470.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10470.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10470.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10470.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10470.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10471","meta10471",320896420,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10470";

cljs.core.async.t_cljs$core$async10470.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write.call(null,writer__7386__auto__,"cljs.core.async/t_cljs$core$async10470");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10470 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10470(ch__$1,cs__$1,meta10471){
return (new cljs.core.async.t_cljs$core$async10470(ch__$1,cs__$1,meta10471));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10470(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9887__auto___10692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___10692,cs,m,dchan,dctr,done){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___10692,cs,m,dchan,dctr,done){
return (function (state_10607){
var state_val_10608 = (state_10607[(1)]);
if((state_val_10608 === (7))){
var inst_10603 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10609_10693 = state_10607__$1;
(statearr_10609_10693[(2)] = inst_10603);

(statearr_10609_10693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (20))){
var inst_10506 = (state_10607[(7)]);
var inst_10518 = cljs.core.first.call(null,inst_10506);
var inst_10519 = cljs.core.nth.call(null,inst_10518,(0),null);
var inst_10520 = cljs.core.nth.call(null,inst_10518,(1),null);
var state_10607__$1 = (function (){var statearr_10610 = state_10607;
(statearr_10610[(8)] = inst_10519);

return statearr_10610;
})();
if(cljs.core.truth_(inst_10520)){
var statearr_10611_10694 = state_10607__$1;
(statearr_10611_10694[(1)] = (22));

} else {
var statearr_10612_10695 = state_10607__$1;
(statearr_10612_10695[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (27))){
var inst_10548 = (state_10607[(9)]);
var inst_10475 = (state_10607[(10)]);
var inst_10555 = (state_10607[(11)]);
var inst_10550 = (state_10607[(12)]);
var inst_10555__$1 = cljs.core._nth.call(null,inst_10548,inst_10550);
var inst_10556 = cljs.core.async.put_BANG_.call(null,inst_10555__$1,inst_10475,done);
var state_10607__$1 = (function (){var statearr_10613 = state_10607;
(statearr_10613[(11)] = inst_10555__$1);

return statearr_10613;
})();
if(cljs.core.truth_(inst_10556)){
var statearr_10614_10696 = state_10607__$1;
(statearr_10614_10696[(1)] = (30));

} else {
var statearr_10615_10697 = state_10607__$1;
(statearr_10615_10697[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (1))){
var state_10607__$1 = state_10607;
var statearr_10616_10698 = state_10607__$1;
(statearr_10616_10698[(2)] = null);

(statearr_10616_10698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (24))){
var inst_10506 = (state_10607[(7)]);
var inst_10525 = (state_10607[(2)]);
var inst_10526 = cljs.core.next.call(null,inst_10506);
var inst_10484 = inst_10526;
var inst_10485 = null;
var inst_10486 = (0);
var inst_10487 = (0);
var state_10607__$1 = (function (){var statearr_10617 = state_10607;
(statearr_10617[(13)] = inst_10525);

(statearr_10617[(14)] = inst_10487);

(statearr_10617[(15)] = inst_10485);

(statearr_10617[(16)] = inst_10484);

(statearr_10617[(17)] = inst_10486);

return statearr_10617;
})();
var statearr_10618_10699 = state_10607__$1;
(statearr_10618_10699[(2)] = null);

(statearr_10618_10699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (39))){
var state_10607__$1 = state_10607;
var statearr_10622_10700 = state_10607__$1;
(statearr_10622_10700[(2)] = null);

(statearr_10622_10700[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (4))){
var inst_10475 = (state_10607[(10)]);
var inst_10475__$1 = (state_10607[(2)]);
var inst_10476 = (inst_10475__$1 == null);
var state_10607__$1 = (function (){var statearr_10623 = state_10607;
(statearr_10623[(10)] = inst_10475__$1);

return statearr_10623;
})();
if(cljs.core.truth_(inst_10476)){
var statearr_10624_10701 = state_10607__$1;
(statearr_10624_10701[(1)] = (5));

} else {
var statearr_10625_10702 = state_10607__$1;
(statearr_10625_10702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (15))){
var inst_10487 = (state_10607[(14)]);
var inst_10485 = (state_10607[(15)]);
var inst_10484 = (state_10607[(16)]);
var inst_10486 = (state_10607[(17)]);
var inst_10502 = (state_10607[(2)]);
var inst_10503 = (inst_10487 + (1));
var tmp10619 = inst_10485;
var tmp10620 = inst_10484;
var tmp10621 = inst_10486;
var inst_10484__$1 = tmp10620;
var inst_10485__$1 = tmp10619;
var inst_10486__$1 = tmp10621;
var inst_10487__$1 = inst_10503;
var state_10607__$1 = (function (){var statearr_10626 = state_10607;
(statearr_10626[(14)] = inst_10487__$1);

(statearr_10626[(15)] = inst_10485__$1);

(statearr_10626[(16)] = inst_10484__$1);

(statearr_10626[(17)] = inst_10486__$1);

(statearr_10626[(18)] = inst_10502);

return statearr_10626;
})();
var statearr_10627_10703 = state_10607__$1;
(statearr_10627_10703[(2)] = null);

(statearr_10627_10703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (21))){
var inst_10529 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10631_10704 = state_10607__$1;
(statearr_10631_10704[(2)] = inst_10529);

(statearr_10631_10704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (31))){
var inst_10555 = (state_10607[(11)]);
var inst_10559 = done.call(null,null);
var inst_10560 = cljs.core.async.untap_STAR_.call(null,m,inst_10555);
var state_10607__$1 = (function (){var statearr_10632 = state_10607;
(statearr_10632[(19)] = inst_10559);

return statearr_10632;
})();
var statearr_10633_10705 = state_10607__$1;
(statearr_10633_10705[(2)] = inst_10560);

(statearr_10633_10705[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (32))){
var inst_10548 = (state_10607[(9)]);
var inst_10549 = (state_10607[(20)]);
var inst_10550 = (state_10607[(12)]);
var inst_10547 = (state_10607[(21)]);
var inst_10562 = (state_10607[(2)]);
var inst_10563 = (inst_10550 + (1));
var tmp10628 = inst_10548;
var tmp10629 = inst_10549;
var tmp10630 = inst_10547;
var inst_10547__$1 = tmp10630;
var inst_10548__$1 = tmp10628;
var inst_10549__$1 = tmp10629;
var inst_10550__$1 = inst_10563;
var state_10607__$1 = (function (){var statearr_10634 = state_10607;
(statearr_10634[(9)] = inst_10548__$1);

(statearr_10634[(22)] = inst_10562);

(statearr_10634[(20)] = inst_10549__$1);

(statearr_10634[(12)] = inst_10550__$1);

(statearr_10634[(21)] = inst_10547__$1);

return statearr_10634;
})();
var statearr_10635_10706 = state_10607__$1;
(statearr_10635_10706[(2)] = null);

(statearr_10635_10706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (40))){
var inst_10575 = (state_10607[(23)]);
var inst_10579 = done.call(null,null);
var inst_10580 = cljs.core.async.untap_STAR_.call(null,m,inst_10575);
var state_10607__$1 = (function (){var statearr_10636 = state_10607;
(statearr_10636[(24)] = inst_10579);

return statearr_10636;
})();
var statearr_10637_10707 = state_10607__$1;
(statearr_10637_10707[(2)] = inst_10580);

(statearr_10637_10707[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (33))){
var inst_10566 = (state_10607[(25)]);
var inst_10568 = cljs.core.chunked_seq_QMARK_.call(null,inst_10566);
var state_10607__$1 = state_10607;
if(inst_10568){
var statearr_10638_10708 = state_10607__$1;
(statearr_10638_10708[(1)] = (36));

} else {
var statearr_10639_10709 = state_10607__$1;
(statearr_10639_10709[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (13))){
var inst_10496 = (state_10607[(26)]);
var inst_10499 = cljs.core.async.close_BANG_.call(null,inst_10496);
var state_10607__$1 = state_10607;
var statearr_10640_10710 = state_10607__$1;
(statearr_10640_10710[(2)] = inst_10499);

(statearr_10640_10710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (22))){
var inst_10519 = (state_10607[(8)]);
var inst_10522 = cljs.core.async.close_BANG_.call(null,inst_10519);
var state_10607__$1 = state_10607;
var statearr_10641_10711 = state_10607__$1;
(statearr_10641_10711[(2)] = inst_10522);

(statearr_10641_10711[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (36))){
var inst_10566 = (state_10607[(25)]);
var inst_10570 = cljs.core.chunk_first.call(null,inst_10566);
var inst_10571 = cljs.core.chunk_rest.call(null,inst_10566);
var inst_10572 = cljs.core.count.call(null,inst_10570);
var inst_10547 = inst_10571;
var inst_10548 = inst_10570;
var inst_10549 = inst_10572;
var inst_10550 = (0);
var state_10607__$1 = (function (){var statearr_10642 = state_10607;
(statearr_10642[(9)] = inst_10548);

(statearr_10642[(20)] = inst_10549);

(statearr_10642[(12)] = inst_10550);

(statearr_10642[(21)] = inst_10547);

return statearr_10642;
})();
var statearr_10643_10712 = state_10607__$1;
(statearr_10643_10712[(2)] = null);

(statearr_10643_10712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (41))){
var inst_10566 = (state_10607[(25)]);
var inst_10582 = (state_10607[(2)]);
var inst_10583 = cljs.core.next.call(null,inst_10566);
var inst_10547 = inst_10583;
var inst_10548 = null;
var inst_10549 = (0);
var inst_10550 = (0);
var state_10607__$1 = (function (){var statearr_10644 = state_10607;
(statearr_10644[(9)] = inst_10548);

(statearr_10644[(20)] = inst_10549);

(statearr_10644[(12)] = inst_10550);

(statearr_10644[(27)] = inst_10582);

(statearr_10644[(21)] = inst_10547);

return statearr_10644;
})();
var statearr_10645_10713 = state_10607__$1;
(statearr_10645_10713[(2)] = null);

(statearr_10645_10713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (43))){
var state_10607__$1 = state_10607;
var statearr_10646_10714 = state_10607__$1;
(statearr_10646_10714[(2)] = null);

(statearr_10646_10714[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (29))){
var inst_10591 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10647_10715 = state_10607__$1;
(statearr_10647_10715[(2)] = inst_10591);

(statearr_10647_10715[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (44))){
var inst_10600 = (state_10607[(2)]);
var state_10607__$1 = (function (){var statearr_10648 = state_10607;
(statearr_10648[(28)] = inst_10600);

return statearr_10648;
})();
var statearr_10649_10716 = state_10607__$1;
(statearr_10649_10716[(2)] = null);

(statearr_10649_10716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (6))){
var inst_10539 = (state_10607[(29)]);
var inst_10538 = cljs.core.deref.call(null,cs);
var inst_10539__$1 = cljs.core.keys.call(null,inst_10538);
var inst_10540 = cljs.core.count.call(null,inst_10539__$1);
var inst_10541 = cljs.core.reset_BANG_.call(null,dctr,inst_10540);
var inst_10546 = cljs.core.seq.call(null,inst_10539__$1);
var inst_10547 = inst_10546;
var inst_10548 = null;
var inst_10549 = (0);
var inst_10550 = (0);
var state_10607__$1 = (function (){var statearr_10650 = state_10607;
(statearr_10650[(9)] = inst_10548);

(statearr_10650[(20)] = inst_10549);

(statearr_10650[(30)] = inst_10541);

(statearr_10650[(12)] = inst_10550);

(statearr_10650[(29)] = inst_10539__$1);

(statearr_10650[(21)] = inst_10547);

return statearr_10650;
})();
var statearr_10651_10717 = state_10607__$1;
(statearr_10651_10717[(2)] = null);

(statearr_10651_10717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (28))){
var inst_10566 = (state_10607[(25)]);
var inst_10547 = (state_10607[(21)]);
var inst_10566__$1 = cljs.core.seq.call(null,inst_10547);
var state_10607__$1 = (function (){var statearr_10652 = state_10607;
(statearr_10652[(25)] = inst_10566__$1);

return statearr_10652;
})();
if(inst_10566__$1){
var statearr_10653_10718 = state_10607__$1;
(statearr_10653_10718[(1)] = (33));

} else {
var statearr_10654_10719 = state_10607__$1;
(statearr_10654_10719[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (25))){
var inst_10549 = (state_10607[(20)]);
var inst_10550 = (state_10607[(12)]);
var inst_10552 = (inst_10550 < inst_10549);
var inst_10553 = inst_10552;
var state_10607__$1 = state_10607;
if(cljs.core.truth_(inst_10553)){
var statearr_10655_10720 = state_10607__$1;
(statearr_10655_10720[(1)] = (27));

} else {
var statearr_10656_10721 = state_10607__$1;
(statearr_10656_10721[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (34))){
var state_10607__$1 = state_10607;
var statearr_10657_10722 = state_10607__$1;
(statearr_10657_10722[(2)] = null);

(statearr_10657_10722[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (17))){
var state_10607__$1 = state_10607;
var statearr_10658_10723 = state_10607__$1;
(statearr_10658_10723[(2)] = null);

(statearr_10658_10723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (3))){
var inst_10605 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10607__$1,inst_10605);
} else {
if((state_val_10608 === (12))){
var inst_10534 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10659_10724 = state_10607__$1;
(statearr_10659_10724[(2)] = inst_10534);

(statearr_10659_10724[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (2))){
var state_10607__$1 = state_10607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10607__$1,(4),ch);
} else {
if((state_val_10608 === (23))){
var state_10607__$1 = state_10607;
var statearr_10660_10725 = state_10607__$1;
(statearr_10660_10725[(2)] = null);

(statearr_10660_10725[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (35))){
var inst_10589 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10661_10726 = state_10607__$1;
(statearr_10661_10726[(2)] = inst_10589);

(statearr_10661_10726[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (19))){
var inst_10506 = (state_10607[(7)]);
var inst_10510 = cljs.core.chunk_first.call(null,inst_10506);
var inst_10511 = cljs.core.chunk_rest.call(null,inst_10506);
var inst_10512 = cljs.core.count.call(null,inst_10510);
var inst_10484 = inst_10511;
var inst_10485 = inst_10510;
var inst_10486 = inst_10512;
var inst_10487 = (0);
var state_10607__$1 = (function (){var statearr_10662 = state_10607;
(statearr_10662[(14)] = inst_10487);

(statearr_10662[(15)] = inst_10485);

(statearr_10662[(16)] = inst_10484);

(statearr_10662[(17)] = inst_10486);

return statearr_10662;
})();
var statearr_10663_10727 = state_10607__$1;
(statearr_10663_10727[(2)] = null);

(statearr_10663_10727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (11))){
var inst_10506 = (state_10607[(7)]);
var inst_10484 = (state_10607[(16)]);
var inst_10506__$1 = cljs.core.seq.call(null,inst_10484);
var state_10607__$1 = (function (){var statearr_10664 = state_10607;
(statearr_10664[(7)] = inst_10506__$1);

return statearr_10664;
})();
if(inst_10506__$1){
var statearr_10665_10728 = state_10607__$1;
(statearr_10665_10728[(1)] = (16));

} else {
var statearr_10666_10729 = state_10607__$1;
(statearr_10666_10729[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (9))){
var inst_10536 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10667_10730 = state_10607__$1;
(statearr_10667_10730[(2)] = inst_10536);

(statearr_10667_10730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (5))){
var inst_10482 = cljs.core.deref.call(null,cs);
var inst_10483 = cljs.core.seq.call(null,inst_10482);
var inst_10484 = inst_10483;
var inst_10485 = null;
var inst_10486 = (0);
var inst_10487 = (0);
var state_10607__$1 = (function (){var statearr_10668 = state_10607;
(statearr_10668[(14)] = inst_10487);

(statearr_10668[(15)] = inst_10485);

(statearr_10668[(16)] = inst_10484);

(statearr_10668[(17)] = inst_10486);

return statearr_10668;
})();
var statearr_10669_10731 = state_10607__$1;
(statearr_10669_10731[(2)] = null);

(statearr_10669_10731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (14))){
var state_10607__$1 = state_10607;
var statearr_10670_10732 = state_10607__$1;
(statearr_10670_10732[(2)] = null);

(statearr_10670_10732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (45))){
var inst_10597 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10671_10733 = state_10607__$1;
(statearr_10671_10733[(2)] = inst_10597);

(statearr_10671_10733[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (26))){
var inst_10539 = (state_10607[(29)]);
var inst_10593 = (state_10607[(2)]);
var inst_10594 = cljs.core.seq.call(null,inst_10539);
var state_10607__$1 = (function (){var statearr_10672 = state_10607;
(statearr_10672[(31)] = inst_10593);

return statearr_10672;
})();
if(inst_10594){
var statearr_10673_10734 = state_10607__$1;
(statearr_10673_10734[(1)] = (42));

} else {
var statearr_10674_10735 = state_10607__$1;
(statearr_10674_10735[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (16))){
var inst_10506 = (state_10607[(7)]);
var inst_10508 = cljs.core.chunked_seq_QMARK_.call(null,inst_10506);
var state_10607__$1 = state_10607;
if(inst_10508){
var statearr_10675_10736 = state_10607__$1;
(statearr_10675_10736[(1)] = (19));

} else {
var statearr_10676_10737 = state_10607__$1;
(statearr_10676_10737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (38))){
var inst_10586 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10677_10738 = state_10607__$1;
(statearr_10677_10738[(2)] = inst_10586);

(statearr_10677_10738[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (30))){
var state_10607__$1 = state_10607;
var statearr_10678_10739 = state_10607__$1;
(statearr_10678_10739[(2)] = null);

(statearr_10678_10739[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (10))){
var inst_10487 = (state_10607[(14)]);
var inst_10485 = (state_10607[(15)]);
var inst_10495 = cljs.core._nth.call(null,inst_10485,inst_10487);
var inst_10496 = cljs.core.nth.call(null,inst_10495,(0),null);
var inst_10497 = cljs.core.nth.call(null,inst_10495,(1),null);
var state_10607__$1 = (function (){var statearr_10679 = state_10607;
(statearr_10679[(26)] = inst_10496);

return statearr_10679;
})();
if(cljs.core.truth_(inst_10497)){
var statearr_10680_10740 = state_10607__$1;
(statearr_10680_10740[(1)] = (13));

} else {
var statearr_10681_10741 = state_10607__$1;
(statearr_10681_10741[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (18))){
var inst_10532 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10682_10742 = state_10607__$1;
(statearr_10682_10742[(2)] = inst_10532);

(statearr_10682_10742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (42))){
var state_10607__$1 = state_10607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10607__$1,(45),dchan);
} else {
if((state_val_10608 === (37))){
var inst_10475 = (state_10607[(10)]);
var inst_10566 = (state_10607[(25)]);
var inst_10575 = (state_10607[(23)]);
var inst_10575__$1 = cljs.core.first.call(null,inst_10566);
var inst_10576 = cljs.core.async.put_BANG_.call(null,inst_10575__$1,inst_10475,done);
var state_10607__$1 = (function (){var statearr_10683 = state_10607;
(statearr_10683[(23)] = inst_10575__$1);

return statearr_10683;
})();
if(cljs.core.truth_(inst_10576)){
var statearr_10684_10743 = state_10607__$1;
(statearr_10684_10743[(1)] = (39));

} else {
var statearr_10685_10744 = state_10607__$1;
(statearr_10685_10744[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (8))){
var inst_10487 = (state_10607[(14)]);
var inst_10486 = (state_10607[(17)]);
var inst_10489 = (inst_10487 < inst_10486);
var inst_10490 = inst_10489;
var state_10607__$1 = state_10607;
if(cljs.core.truth_(inst_10490)){
var statearr_10686_10745 = state_10607__$1;
(statearr_10686_10745[(1)] = (10));

} else {
var statearr_10687_10746 = state_10607__$1;
(statearr_10687_10746[(1)] = (11));

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
});})(c__9887__auto___10692,cs,m,dchan,dctr,done))
;
return ((function (switch__9799__auto__,c__9887__auto___10692,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9800__auto__ = null;
var cljs$core$async$mult_$_state_machine__9800__auto____0 = (function (){
var statearr_10688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10688[(0)] = cljs$core$async$mult_$_state_machine__9800__auto__);

(statearr_10688[(1)] = (1));

return statearr_10688;
});
var cljs$core$async$mult_$_state_machine__9800__auto____1 = (function (state_10607){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10689){if((e10689 instanceof Object)){
var ex__9803__auto__ = e10689;
var statearr_10690_10747 = state_10607;
(statearr_10690_10747[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10748 = state_10607;
state_10607 = G__10748;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9800__auto__ = function(state_10607){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9800__auto____1.call(this,state_10607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9800__auto____0;
cljs$core$async$mult_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9800__auto____1;
return cljs$core$async$mult_$_state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___10692,cs,m,dchan,dctr,done))
})();
var state__9889__auto__ = (function (){var statearr_10691 = f__9888__auto__.call(null);
(statearr_10691[(6)] = c__9887__auto___10692);

return statearr_10691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___10692,cs,m,dchan,dctr,done))
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
var G__10750 = arguments.length;
switch (G__10750) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
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
return m__7444__auto__.call(null,m,ch);
} else {
var m__7444__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__7444__auto__.call(null,m,ch);
} else {
var m__7444__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__7444__auto__.call(null,m);
} else {
var m__7444__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__7444__auto__.call(null,m,state_map);
} else {
var m__7444__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__7444__auto__.call(null,m,mode);
} else {
var m__7444__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7906__auto__ = [];
var len__7899__auto___10762 = arguments.length;
var i__7900__auto___10763 = (0);
while(true){
if((i__7900__auto___10763 < len__7899__auto___10762)){
args__7906__auto__.push((arguments[i__7900__auto___10763]));

var G__10764 = (i__7900__auto___10763 + (1));
i__7900__auto___10763 = G__10764;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10756){
var map__10757 = p__10756;
var map__10757__$1 = ((((!((map__10757 == null)))?((((map__10757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10757):map__10757);
var opts = map__10757__$1;
var statearr_10759_10765 = state;
(statearr_10759_10765[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10757,map__10757__$1,opts){
return (function (val){
var statearr_10760_10766 = state;
(statearr_10760_10766[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10757,map__10757__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10761_10767 = state;
(statearr_10761_10767[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10752){
var G__10753 = cljs.core.first.call(null,seq10752);
var seq10752__$1 = cljs.core.next.call(null,seq10752);
var G__10754 = cljs.core.first.call(null,seq10752__$1);
var seq10752__$2 = cljs.core.next.call(null,seq10752__$1);
var G__10755 = cljs.core.first.call(null,seq10752__$2);
var seq10752__$3 = cljs.core.next.call(null,seq10752__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10753,G__10754,G__10755,seq10752__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10768 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta10769){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta10769 = meta10769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10770,meta10769__$1){
var self__ = this;
var _10770__$1 = this;
return (new cljs.core.async.t_cljs$core$async10768(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta10769__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10770){
var self__ = this;
var _10770__$1 = this;
return self__.meta10769;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10768.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10768.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta10769","meta10769",-1127489056,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10768";

cljs.core.async.t_cljs$core$async10768.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write.call(null,writer__7386__auto__,"cljs.core.async/t_cljs$core$async10768");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10768 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10768(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10769){
return (new cljs.core.async.t_cljs$core$async10768(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10769));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10768(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9887__auto___10932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___10932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___10932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10872){
var state_val_10873 = (state_10872[(1)]);
if((state_val_10873 === (7))){
var inst_10787 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
var statearr_10874_10933 = state_10872__$1;
(statearr_10874_10933[(2)] = inst_10787);

(statearr_10874_10933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (20))){
var inst_10799 = (state_10872[(7)]);
var state_10872__$1 = state_10872;
var statearr_10875_10934 = state_10872__$1;
(statearr_10875_10934[(2)] = inst_10799);

(statearr_10875_10934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (27))){
var state_10872__$1 = state_10872;
var statearr_10876_10935 = state_10872__$1;
(statearr_10876_10935[(2)] = null);

(statearr_10876_10935[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (1))){
var inst_10774 = (state_10872[(8)]);
var inst_10774__$1 = calc_state.call(null);
var inst_10776 = (inst_10774__$1 == null);
var inst_10777 = cljs.core.not.call(null,inst_10776);
var state_10872__$1 = (function (){var statearr_10877 = state_10872;
(statearr_10877[(8)] = inst_10774__$1);

return statearr_10877;
})();
if(inst_10777){
var statearr_10878_10936 = state_10872__$1;
(statearr_10878_10936[(1)] = (2));

} else {
var statearr_10879_10937 = state_10872__$1;
(statearr_10879_10937[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (24))){
var inst_10846 = (state_10872[(9)]);
var inst_10832 = (state_10872[(10)]);
var inst_10823 = (state_10872[(11)]);
var inst_10846__$1 = inst_10823.call(null,inst_10832);
var state_10872__$1 = (function (){var statearr_10880 = state_10872;
(statearr_10880[(9)] = inst_10846__$1);

return statearr_10880;
})();
if(cljs.core.truth_(inst_10846__$1)){
var statearr_10881_10938 = state_10872__$1;
(statearr_10881_10938[(1)] = (29));

} else {
var statearr_10882_10939 = state_10872__$1;
(statearr_10882_10939[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (4))){
var inst_10790 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
if(cljs.core.truth_(inst_10790)){
var statearr_10883_10940 = state_10872__$1;
(statearr_10883_10940[(1)] = (8));

} else {
var statearr_10884_10941 = state_10872__$1;
(statearr_10884_10941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (15))){
var inst_10817 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
if(cljs.core.truth_(inst_10817)){
var statearr_10885_10942 = state_10872__$1;
(statearr_10885_10942[(1)] = (19));

} else {
var statearr_10886_10943 = state_10872__$1;
(statearr_10886_10943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (21))){
var inst_10822 = (state_10872[(12)]);
var inst_10822__$1 = (state_10872[(2)]);
var inst_10823 = cljs.core.get.call(null,inst_10822__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10824 = cljs.core.get.call(null,inst_10822__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10825 = cljs.core.get.call(null,inst_10822__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10872__$1 = (function (){var statearr_10887 = state_10872;
(statearr_10887[(12)] = inst_10822__$1);

(statearr_10887[(11)] = inst_10823);

(statearr_10887[(13)] = inst_10824);

return statearr_10887;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10872__$1,(22),inst_10825);
} else {
if((state_val_10873 === (31))){
var inst_10854 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
if(cljs.core.truth_(inst_10854)){
var statearr_10888_10944 = state_10872__$1;
(statearr_10888_10944[(1)] = (32));

} else {
var statearr_10889_10945 = state_10872__$1;
(statearr_10889_10945[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (32))){
var inst_10831 = (state_10872[(14)]);
var state_10872__$1 = state_10872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10872__$1,(35),out,inst_10831);
} else {
if((state_val_10873 === (33))){
var inst_10822 = (state_10872[(12)]);
var inst_10799 = inst_10822;
var state_10872__$1 = (function (){var statearr_10890 = state_10872;
(statearr_10890[(7)] = inst_10799);

return statearr_10890;
})();
var statearr_10891_10946 = state_10872__$1;
(statearr_10891_10946[(2)] = null);

(statearr_10891_10946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (13))){
var inst_10799 = (state_10872[(7)]);
var inst_10806 = inst_10799.cljs$lang$protocol_mask$partition0$;
var inst_10807 = (inst_10806 & (64));
var inst_10808 = inst_10799.cljs$core$ISeq$;
var inst_10809 = (cljs.core.PROTOCOL_SENTINEL === inst_10808);
var inst_10810 = (inst_10807) || (inst_10809);
var state_10872__$1 = state_10872;
if(cljs.core.truth_(inst_10810)){
var statearr_10892_10947 = state_10872__$1;
(statearr_10892_10947[(1)] = (16));

} else {
var statearr_10893_10948 = state_10872__$1;
(statearr_10893_10948[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (22))){
var inst_10831 = (state_10872[(14)]);
var inst_10832 = (state_10872[(10)]);
var inst_10830 = (state_10872[(2)]);
var inst_10831__$1 = cljs.core.nth.call(null,inst_10830,(0),null);
var inst_10832__$1 = cljs.core.nth.call(null,inst_10830,(1),null);
var inst_10833 = (inst_10831__$1 == null);
var inst_10834 = cljs.core._EQ_.call(null,inst_10832__$1,change);
var inst_10835 = (inst_10833) || (inst_10834);
var state_10872__$1 = (function (){var statearr_10894 = state_10872;
(statearr_10894[(14)] = inst_10831__$1);

(statearr_10894[(10)] = inst_10832__$1);

return statearr_10894;
})();
if(cljs.core.truth_(inst_10835)){
var statearr_10895_10949 = state_10872__$1;
(statearr_10895_10949[(1)] = (23));

} else {
var statearr_10896_10950 = state_10872__$1;
(statearr_10896_10950[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (36))){
var inst_10822 = (state_10872[(12)]);
var inst_10799 = inst_10822;
var state_10872__$1 = (function (){var statearr_10897 = state_10872;
(statearr_10897[(7)] = inst_10799);

return statearr_10897;
})();
var statearr_10898_10951 = state_10872__$1;
(statearr_10898_10951[(2)] = null);

(statearr_10898_10951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (29))){
var inst_10846 = (state_10872[(9)]);
var state_10872__$1 = state_10872;
var statearr_10899_10952 = state_10872__$1;
(statearr_10899_10952[(2)] = inst_10846);

(statearr_10899_10952[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (6))){
var state_10872__$1 = state_10872;
var statearr_10900_10953 = state_10872__$1;
(statearr_10900_10953[(2)] = false);

(statearr_10900_10953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (28))){
var inst_10842 = (state_10872[(2)]);
var inst_10843 = calc_state.call(null);
var inst_10799 = inst_10843;
var state_10872__$1 = (function (){var statearr_10901 = state_10872;
(statearr_10901[(15)] = inst_10842);

(statearr_10901[(7)] = inst_10799);

return statearr_10901;
})();
var statearr_10902_10954 = state_10872__$1;
(statearr_10902_10954[(2)] = null);

(statearr_10902_10954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (25))){
var inst_10868 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
var statearr_10903_10955 = state_10872__$1;
(statearr_10903_10955[(2)] = inst_10868);

(statearr_10903_10955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (34))){
var inst_10866 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
var statearr_10904_10956 = state_10872__$1;
(statearr_10904_10956[(2)] = inst_10866);

(statearr_10904_10956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (17))){
var state_10872__$1 = state_10872;
var statearr_10905_10957 = state_10872__$1;
(statearr_10905_10957[(2)] = false);

(statearr_10905_10957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (3))){
var state_10872__$1 = state_10872;
var statearr_10906_10958 = state_10872__$1;
(statearr_10906_10958[(2)] = false);

(statearr_10906_10958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (12))){
var inst_10870 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10872__$1,inst_10870);
} else {
if((state_val_10873 === (2))){
var inst_10774 = (state_10872[(8)]);
var inst_10779 = inst_10774.cljs$lang$protocol_mask$partition0$;
var inst_10780 = (inst_10779 & (64));
var inst_10781 = inst_10774.cljs$core$ISeq$;
var inst_10782 = (cljs.core.PROTOCOL_SENTINEL === inst_10781);
var inst_10783 = (inst_10780) || (inst_10782);
var state_10872__$1 = state_10872;
if(cljs.core.truth_(inst_10783)){
var statearr_10907_10959 = state_10872__$1;
(statearr_10907_10959[(1)] = (5));

} else {
var statearr_10908_10960 = state_10872__$1;
(statearr_10908_10960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (23))){
var inst_10831 = (state_10872[(14)]);
var inst_10837 = (inst_10831 == null);
var state_10872__$1 = state_10872;
if(cljs.core.truth_(inst_10837)){
var statearr_10909_10961 = state_10872__$1;
(statearr_10909_10961[(1)] = (26));

} else {
var statearr_10910_10962 = state_10872__$1;
(statearr_10910_10962[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (35))){
var inst_10857 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
if(cljs.core.truth_(inst_10857)){
var statearr_10911_10963 = state_10872__$1;
(statearr_10911_10963[(1)] = (36));

} else {
var statearr_10912_10964 = state_10872__$1;
(statearr_10912_10964[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (19))){
var inst_10799 = (state_10872[(7)]);
var inst_10819 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10799);
var state_10872__$1 = state_10872;
var statearr_10913_10965 = state_10872__$1;
(statearr_10913_10965[(2)] = inst_10819);

(statearr_10913_10965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (11))){
var inst_10799 = (state_10872[(7)]);
var inst_10803 = (inst_10799 == null);
var inst_10804 = cljs.core.not.call(null,inst_10803);
var state_10872__$1 = state_10872;
if(inst_10804){
var statearr_10914_10966 = state_10872__$1;
(statearr_10914_10966[(1)] = (13));

} else {
var statearr_10915_10967 = state_10872__$1;
(statearr_10915_10967[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (9))){
var inst_10774 = (state_10872[(8)]);
var state_10872__$1 = state_10872;
var statearr_10916_10968 = state_10872__$1;
(statearr_10916_10968[(2)] = inst_10774);

(statearr_10916_10968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (5))){
var state_10872__$1 = state_10872;
var statearr_10917_10969 = state_10872__$1;
(statearr_10917_10969[(2)] = true);

(statearr_10917_10969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (14))){
var state_10872__$1 = state_10872;
var statearr_10918_10970 = state_10872__$1;
(statearr_10918_10970[(2)] = false);

(statearr_10918_10970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (26))){
var inst_10832 = (state_10872[(10)]);
var inst_10839 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10832);
var state_10872__$1 = state_10872;
var statearr_10919_10971 = state_10872__$1;
(statearr_10919_10971[(2)] = inst_10839);

(statearr_10919_10971[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (16))){
var state_10872__$1 = state_10872;
var statearr_10920_10972 = state_10872__$1;
(statearr_10920_10972[(2)] = true);

(statearr_10920_10972[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (38))){
var inst_10862 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
var statearr_10921_10973 = state_10872__$1;
(statearr_10921_10973[(2)] = inst_10862);

(statearr_10921_10973[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (30))){
var inst_10832 = (state_10872[(10)]);
var inst_10823 = (state_10872[(11)]);
var inst_10824 = (state_10872[(13)]);
var inst_10849 = cljs.core.empty_QMARK_.call(null,inst_10823);
var inst_10850 = inst_10824.call(null,inst_10832);
var inst_10851 = cljs.core.not.call(null,inst_10850);
var inst_10852 = (inst_10849) && (inst_10851);
var state_10872__$1 = state_10872;
var statearr_10922_10974 = state_10872__$1;
(statearr_10922_10974[(2)] = inst_10852);

(statearr_10922_10974[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (10))){
var inst_10774 = (state_10872[(8)]);
var inst_10795 = (state_10872[(2)]);
var inst_10796 = cljs.core.get.call(null,inst_10795,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10797 = cljs.core.get.call(null,inst_10795,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10798 = cljs.core.get.call(null,inst_10795,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10799 = inst_10774;
var state_10872__$1 = (function (){var statearr_10923 = state_10872;
(statearr_10923[(16)] = inst_10797);

(statearr_10923[(7)] = inst_10799);

(statearr_10923[(17)] = inst_10796);

(statearr_10923[(18)] = inst_10798);

return statearr_10923;
})();
var statearr_10924_10975 = state_10872__$1;
(statearr_10924_10975[(2)] = null);

(statearr_10924_10975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (18))){
var inst_10814 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
var statearr_10925_10976 = state_10872__$1;
(statearr_10925_10976[(2)] = inst_10814);

(statearr_10925_10976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (37))){
var state_10872__$1 = state_10872;
var statearr_10926_10977 = state_10872__$1;
(statearr_10926_10977[(2)] = null);

(statearr_10926_10977[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (8))){
var inst_10774 = (state_10872[(8)]);
var inst_10792 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10774);
var state_10872__$1 = state_10872;
var statearr_10927_10978 = state_10872__$1;
(statearr_10927_10978[(2)] = inst_10792);

(statearr_10927_10978[(1)] = (10));


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
});})(c__9887__auto___10932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9799__auto__,c__9887__auto___10932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9800__auto__ = null;
var cljs$core$async$mix_$_state_machine__9800__auto____0 = (function (){
var statearr_10928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10928[(0)] = cljs$core$async$mix_$_state_machine__9800__auto__);

(statearr_10928[(1)] = (1));

return statearr_10928;
});
var cljs$core$async$mix_$_state_machine__9800__auto____1 = (function (state_10872){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_10872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e10929){if((e10929 instanceof Object)){
var ex__9803__auto__ = e10929;
var statearr_10930_10979 = state_10872;
(statearr_10930_10979[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10980 = state_10872;
state_10872 = G__10980;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9800__auto__ = function(state_10872){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9800__auto____1.call(this,state_10872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9800__auto____0;
cljs$core$async$mix_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9800__auto____1;
return cljs$core$async$mix_$_state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___10932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9889__auto__ = (function (){var statearr_10931 = f__9888__auto__.call(null);
(statearr_10931[(6)] = c__9887__auto___10932);

return statearr_10931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___10932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
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
return m__7444__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7444__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__7444__auto__.call(null,p,v,ch);
} else {
var m__7444__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__10982 = arguments.length;
switch (G__10982) {
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
return m__7444__auto__.call(null,p);
} else {
var m__7444__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__7444__auto__.call(null,p,v);
} else {
var m__7444__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7444__auto____$1 == null))){
return m__7444__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__10986 = arguments.length;
switch (G__10986) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6774__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6774__auto__,mults){
return (function (p1__10984_SHARP_){
if(cljs.core.truth_(p1__10984_SHARP_.call(null,topic))){
return p1__10984_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10984_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6774__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10987 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10987 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10988){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10988 = meta10988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10989,meta10988__$1){
var self__ = this;
var _10989__$1 = this;
return (new cljs.core.async.t_cljs$core$async10987(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10988__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10989){
var self__ = this;
var _10989__$1 = this;
return self__.meta10988;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10987.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10987.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10987.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10987.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10987.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10987.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10987.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10987.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10988","meta10988",1690766233,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10987";

cljs.core.async.t_cljs$core$async10987.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write.call(null,writer__7386__auto__,"cljs.core.async/t_cljs$core$async10987");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10987 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10987(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10988){
return (new cljs.core.async.t_cljs$core$async10987(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10988));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10987(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9887__auto___11107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___11107,mults,ensure_mult,p){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___11107,mults,ensure_mult,p){
return (function (state_11061){
var state_val_11062 = (state_11061[(1)]);
if((state_val_11062 === (7))){
var inst_11057 = (state_11061[(2)]);
var state_11061__$1 = state_11061;
var statearr_11063_11108 = state_11061__$1;
(statearr_11063_11108[(2)] = inst_11057);

(statearr_11063_11108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (20))){
var state_11061__$1 = state_11061;
var statearr_11064_11109 = state_11061__$1;
(statearr_11064_11109[(2)] = null);

(statearr_11064_11109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (1))){
var state_11061__$1 = state_11061;
var statearr_11065_11110 = state_11061__$1;
(statearr_11065_11110[(2)] = null);

(statearr_11065_11110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (24))){
var inst_11040 = (state_11061[(7)]);
var inst_11049 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11040);
var state_11061__$1 = state_11061;
var statearr_11066_11111 = state_11061__$1;
(statearr_11066_11111[(2)] = inst_11049);

(statearr_11066_11111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (4))){
var inst_10992 = (state_11061[(8)]);
var inst_10992__$1 = (state_11061[(2)]);
var inst_10993 = (inst_10992__$1 == null);
var state_11061__$1 = (function (){var statearr_11067 = state_11061;
(statearr_11067[(8)] = inst_10992__$1);

return statearr_11067;
})();
if(cljs.core.truth_(inst_10993)){
var statearr_11068_11112 = state_11061__$1;
(statearr_11068_11112[(1)] = (5));

} else {
var statearr_11069_11113 = state_11061__$1;
(statearr_11069_11113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (15))){
var inst_11034 = (state_11061[(2)]);
var state_11061__$1 = state_11061;
var statearr_11070_11114 = state_11061__$1;
(statearr_11070_11114[(2)] = inst_11034);

(statearr_11070_11114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (21))){
var inst_11054 = (state_11061[(2)]);
var state_11061__$1 = (function (){var statearr_11071 = state_11061;
(statearr_11071[(9)] = inst_11054);

return statearr_11071;
})();
var statearr_11072_11115 = state_11061__$1;
(statearr_11072_11115[(2)] = null);

(statearr_11072_11115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (13))){
var inst_11016 = (state_11061[(10)]);
var inst_11018 = cljs.core.chunked_seq_QMARK_.call(null,inst_11016);
var state_11061__$1 = state_11061;
if(inst_11018){
var statearr_11073_11116 = state_11061__$1;
(statearr_11073_11116[(1)] = (16));

} else {
var statearr_11074_11117 = state_11061__$1;
(statearr_11074_11117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (22))){
var inst_11046 = (state_11061[(2)]);
var state_11061__$1 = state_11061;
if(cljs.core.truth_(inst_11046)){
var statearr_11075_11118 = state_11061__$1;
(statearr_11075_11118[(1)] = (23));

} else {
var statearr_11076_11119 = state_11061__$1;
(statearr_11076_11119[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (6))){
var inst_11040 = (state_11061[(7)]);
var inst_10992 = (state_11061[(8)]);
var inst_11042 = (state_11061[(11)]);
var inst_11040__$1 = topic_fn.call(null,inst_10992);
var inst_11041 = cljs.core.deref.call(null,mults);
var inst_11042__$1 = cljs.core.get.call(null,inst_11041,inst_11040__$1);
var state_11061__$1 = (function (){var statearr_11077 = state_11061;
(statearr_11077[(7)] = inst_11040__$1);

(statearr_11077[(11)] = inst_11042__$1);

return statearr_11077;
})();
if(cljs.core.truth_(inst_11042__$1)){
var statearr_11078_11120 = state_11061__$1;
(statearr_11078_11120[(1)] = (19));

} else {
var statearr_11079_11121 = state_11061__$1;
(statearr_11079_11121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (25))){
var inst_11051 = (state_11061[(2)]);
var state_11061__$1 = state_11061;
var statearr_11080_11122 = state_11061__$1;
(statearr_11080_11122[(2)] = inst_11051);

(statearr_11080_11122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (17))){
var inst_11016 = (state_11061[(10)]);
var inst_11025 = cljs.core.first.call(null,inst_11016);
var inst_11026 = cljs.core.async.muxch_STAR_.call(null,inst_11025);
var inst_11027 = cljs.core.async.close_BANG_.call(null,inst_11026);
var inst_11028 = cljs.core.next.call(null,inst_11016);
var inst_11002 = inst_11028;
var inst_11003 = null;
var inst_11004 = (0);
var inst_11005 = (0);
var state_11061__$1 = (function (){var statearr_11081 = state_11061;
(statearr_11081[(12)] = inst_11003);

(statearr_11081[(13)] = inst_11004);

(statearr_11081[(14)] = inst_11027);

(statearr_11081[(15)] = inst_11005);

(statearr_11081[(16)] = inst_11002);

return statearr_11081;
})();
var statearr_11082_11123 = state_11061__$1;
(statearr_11082_11123[(2)] = null);

(statearr_11082_11123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (3))){
var inst_11059 = (state_11061[(2)]);
var state_11061__$1 = state_11061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11061__$1,inst_11059);
} else {
if((state_val_11062 === (12))){
var inst_11036 = (state_11061[(2)]);
var state_11061__$1 = state_11061;
var statearr_11083_11124 = state_11061__$1;
(statearr_11083_11124[(2)] = inst_11036);

(statearr_11083_11124[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (2))){
var state_11061__$1 = state_11061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11061__$1,(4),ch);
} else {
if((state_val_11062 === (23))){
var state_11061__$1 = state_11061;
var statearr_11084_11125 = state_11061__$1;
(statearr_11084_11125[(2)] = null);

(statearr_11084_11125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (19))){
var inst_10992 = (state_11061[(8)]);
var inst_11042 = (state_11061[(11)]);
var inst_11044 = cljs.core.async.muxch_STAR_.call(null,inst_11042);
var state_11061__$1 = state_11061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11061__$1,(22),inst_11044,inst_10992);
} else {
if((state_val_11062 === (11))){
var inst_11016 = (state_11061[(10)]);
var inst_11002 = (state_11061[(16)]);
var inst_11016__$1 = cljs.core.seq.call(null,inst_11002);
var state_11061__$1 = (function (){var statearr_11085 = state_11061;
(statearr_11085[(10)] = inst_11016__$1);

return statearr_11085;
})();
if(inst_11016__$1){
var statearr_11086_11126 = state_11061__$1;
(statearr_11086_11126[(1)] = (13));

} else {
var statearr_11087_11127 = state_11061__$1;
(statearr_11087_11127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (9))){
var inst_11038 = (state_11061[(2)]);
var state_11061__$1 = state_11061;
var statearr_11088_11128 = state_11061__$1;
(statearr_11088_11128[(2)] = inst_11038);

(statearr_11088_11128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (5))){
var inst_10999 = cljs.core.deref.call(null,mults);
var inst_11000 = cljs.core.vals.call(null,inst_10999);
var inst_11001 = cljs.core.seq.call(null,inst_11000);
var inst_11002 = inst_11001;
var inst_11003 = null;
var inst_11004 = (0);
var inst_11005 = (0);
var state_11061__$1 = (function (){var statearr_11089 = state_11061;
(statearr_11089[(12)] = inst_11003);

(statearr_11089[(13)] = inst_11004);

(statearr_11089[(15)] = inst_11005);

(statearr_11089[(16)] = inst_11002);

return statearr_11089;
})();
var statearr_11090_11129 = state_11061__$1;
(statearr_11090_11129[(2)] = null);

(statearr_11090_11129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (14))){
var state_11061__$1 = state_11061;
var statearr_11094_11130 = state_11061__$1;
(statearr_11094_11130[(2)] = null);

(statearr_11094_11130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (16))){
var inst_11016 = (state_11061[(10)]);
var inst_11020 = cljs.core.chunk_first.call(null,inst_11016);
var inst_11021 = cljs.core.chunk_rest.call(null,inst_11016);
var inst_11022 = cljs.core.count.call(null,inst_11020);
var inst_11002 = inst_11021;
var inst_11003 = inst_11020;
var inst_11004 = inst_11022;
var inst_11005 = (0);
var state_11061__$1 = (function (){var statearr_11095 = state_11061;
(statearr_11095[(12)] = inst_11003);

(statearr_11095[(13)] = inst_11004);

(statearr_11095[(15)] = inst_11005);

(statearr_11095[(16)] = inst_11002);

return statearr_11095;
})();
var statearr_11096_11131 = state_11061__$1;
(statearr_11096_11131[(2)] = null);

(statearr_11096_11131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (10))){
var inst_11003 = (state_11061[(12)]);
var inst_11004 = (state_11061[(13)]);
var inst_11005 = (state_11061[(15)]);
var inst_11002 = (state_11061[(16)]);
var inst_11010 = cljs.core._nth.call(null,inst_11003,inst_11005);
var inst_11011 = cljs.core.async.muxch_STAR_.call(null,inst_11010);
var inst_11012 = cljs.core.async.close_BANG_.call(null,inst_11011);
var inst_11013 = (inst_11005 + (1));
var tmp11091 = inst_11003;
var tmp11092 = inst_11004;
var tmp11093 = inst_11002;
var inst_11002__$1 = tmp11093;
var inst_11003__$1 = tmp11091;
var inst_11004__$1 = tmp11092;
var inst_11005__$1 = inst_11013;
var state_11061__$1 = (function (){var statearr_11097 = state_11061;
(statearr_11097[(12)] = inst_11003__$1);

(statearr_11097[(13)] = inst_11004__$1);

(statearr_11097[(17)] = inst_11012);

(statearr_11097[(15)] = inst_11005__$1);

(statearr_11097[(16)] = inst_11002__$1);

return statearr_11097;
})();
var statearr_11098_11132 = state_11061__$1;
(statearr_11098_11132[(2)] = null);

(statearr_11098_11132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (18))){
var inst_11031 = (state_11061[(2)]);
var state_11061__$1 = state_11061;
var statearr_11099_11133 = state_11061__$1;
(statearr_11099_11133[(2)] = inst_11031);

(statearr_11099_11133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11062 === (8))){
var inst_11004 = (state_11061[(13)]);
var inst_11005 = (state_11061[(15)]);
var inst_11007 = (inst_11005 < inst_11004);
var inst_11008 = inst_11007;
var state_11061__$1 = state_11061;
if(cljs.core.truth_(inst_11008)){
var statearr_11100_11134 = state_11061__$1;
(statearr_11100_11134[(1)] = (10));

} else {
var statearr_11101_11135 = state_11061__$1;
(statearr_11101_11135[(1)] = (11));

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
});})(c__9887__auto___11107,mults,ensure_mult,p))
;
return ((function (switch__9799__auto__,c__9887__auto___11107,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_11102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11102[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_11102[(1)] = (1));

return statearr_11102;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_11061){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11103){if((e11103 instanceof Object)){
var ex__9803__auto__ = e11103;
var statearr_11104_11136 = state_11061;
(statearr_11104_11136[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11137 = state_11061;
state_11061 = G__11137;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_11061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_11061);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___11107,mults,ensure_mult,p))
})();
var state__9889__auto__ = (function (){var statearr_11105 = f__9888__auto__.call(null);
(statearr_11105[(6)] = c__9887__auto___11107);

return statearr_11105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___11107,mults,ensure_mult,p))
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
var G__11139 = arguments.length;
switch (G__11139) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11142 = arguments.length;
switch (G__11142) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__11145 = arguments.length;
switch (G__11145) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9887__auto___11212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___11212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___11212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11184){
var state_val_11185 = (state_11184[(1)]);
if((state_val_11185 === (7))){
var state_11184__$1 = state_11184;
var statearr_11186_11213 = state_11184__$1;
(statearr_11186_11213[(2)] = null);

(statearr_11186_11213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (1))){
var state_11184__$1 = state_11184;
var statearr_11187_11214 = state_11184__$1;
(statearr_11187_11214[(2)] = null);

(statearr_11187_11214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (4))){
var inst_11148 = (state_11184[(7)]);
var inst_11150 = (inst_11148 < cnt);
var state_11184__$1 = state_11184;
if(cljs.core.truth_(inst_11150)){
var statearr_11188_11215 = state_11184__$1;
(statearr_11188_11215[(1)] = (6));

} else {
var statearr_11189_11216 = state_11184__$1;
(statearr_11189_11216[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (15))){
var inst_11180 = (state_11184[(2)]);
var state_11184__$1 = state_11184;
var statearr_11190_11217 = state_11184__$1;
(statearr_11190_11217[(2)] = inst_11180);

(statearr_11190_11217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (13))){
var inst_11173 = cljs.core.async.close_BANG_.call(null,out);
var state_11184__$1 = state_11184;
var statearr_11191_11218 = state_11184__$1;
(statearr_11191_11218[(2)] = inst_11173);

(statearr_11191_11218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (6))){
var state_11184__$1 = state_11184;
var statearr_11192_11219 = state_11184__$1;
(statearr_11192_11219[(2)] = null);

(statearr_11192_11219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (3))){
var inst_11182 = (state_11184[(2)]);
var state_11184__$1 = state_11184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11184__$1,inst_11182);
} else {
if((state_val_11185 === (12))){
var inst_11170 = (state_11184[(8)]);
var inst_11170__$1 = (state_11184[(2)]);
var inst_11171 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11170__$1);
var state_11184__$1 = (function (){var statearr_11193 = state_11184;
(statearr_11193[(8)] = inst_11170__$1);

return statearr_11193;
})();
if(cljs.core.truth_(inst_11171)){
var statearr_11194_11220 = state_11184__$1;
(statearr_11194_11220[(1)] = (13));

} else {
var statearr_11195_11221 = state_11184__$1;
(statearr_11195_11221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (2))){
var inst_11147 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11148 = (0);
var state_11184__$1 = (function (){var statearr_11196 = state_11184;
(statearr_11196[(9)] = inst_11147);

(statearr_11196[(7)] = inst_11148);

return statearr_11196;
})();
var statearr_11197_11222 = state_11184__$1;
(statearr_11197_11222[(2)] = null);

(statearr_11197_11222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (11))){
var inst_11148 = (state_11184[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11184,(10),Object,null,(9));
var inst_11157 = chs__$1.call(null,inst_11148);
var inst_11158 = done.call(null,inst_11148);
var inst_11159 = cljs.core.async.take_BANG_.call(null,inst_11157,inst_11158);
var state_11184__$1 = state_11184;
var statearr_11198_11223 = state_11184__$1;
(statearr_11198_11223[(2)] = inst_11159);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11184__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (9))){
var inst_11148 = (state_11184[(7)]);
var inst_11161 = (state_11184[(2)]);
var inst_11162 = (inst_11148 + (1));
var inst_11148__$1 = inst_11162;
var state_11184__$1 = (function (){var statearr_11199 = state_11184;
(statearr_11199[(7)] = inst_11148__$1);

(statearr_11199[(10)] = inst_11161);

return statearr_11199;
})();
var statearr_11200_11224 = state_11184__$1;
(statearr_11200_11224[(2)] = null);

(statearr_11200_11224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (5))){
var inst_11168 = (state_11184[(2)]);
var state_11184__$1 = (function (){var statearr_11201 = state_11184;
(statearr_11201[(11)] = inst_11168);

return statearr_11201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11184__$1,(12),dchan);
} else {
if((state_val_11185 === (14))){
var inst_11170 = (state_11184[(8)]);
var inst_11175 = cljs.core.apply.call(null,f,inst_11170);
var state_11184__$1 = state_11184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11184__$1,(16),out,inst_11175);
} else {
if((state_val_11185 === (16))){
var inst_11177 = (state_11184[(2)]);
var state_11184__$1 = (function (){var statearr_11202 = state_11184;
(statearr_11202[(12)] = inst_11177);

return statearr_11202;
})();
var statearr_11203_11225 = state_11184__$1;
(statearr_11203_11225[(2)] = null);

(statearr_11203_11225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (10))){
var inst_11152 = (state_11184[(2)]);
var inst_11153 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11184__$1 = (function (){var statearr_11204 = state_11184;
(statearr_11204[(13)] = inst_11152);

return statearr_11204;
})();
var statearr_11205_11226 = state_11184__$1;
(statearr_11205_11226[(2)] = inst_11153);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11184__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (8))){
var inst_11166 = (state_11184[(2)]);
var state_11184__$1 = state_11184;
var statearr_11206_11227 = state_11184__$1;
(statearr_11206_11227[(2)] = inst_11166);

(statearr_11206_11227[(1)] = (5));


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
});})(c__9887__auto___11212,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9799__auto__,c__9887__auto___11212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_11207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11207[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_11207[(1)] = (1));

return statearr_11207;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_11184){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11208){if((e11208 instanceof Object)){
var ex__9803__auto__ = e11208;
var statearr_11209_11228 = state_11184;
(statearr_11209_11228[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11229 = state_11184;
state_11184 = G__11229;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_11184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_11184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___11212,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9889__auto__ = (function (){var statearr_11210 = f__9888__auto__.call(null);
(statearr_11210[(6)] = c__9887__auto___11212);

return statearr_11210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___11212,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__11232 = arguments.length;
switch (G__11232) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9887__auto___11286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___11286,out){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___11286,out){
return (function (state_11264){
var state_val_11265 = (state_11264[(1)]);
if((state_val_11265 === (7))){
var inst_11243 = (state_11264[(7)]);
var inst_11244 = (state_11264[(8)]);
var inst_11243__$1 = (state_11264[(2)]);
var inst_11244__$1 = cljs.core.nth.call(null,inst_11243__$1,(0),null);
var inst_11245 = cljs.core.nth.call(null,inst_11243__$1,(1),null);
var inst_11246 = (inst_11244__$1 == null);
var state_11264__$1 = (function (){var statearr_11266 = state_11264;
(statearr_11266[(7)] = inst_11243__$1);

(statearr_11266[(9)] = inst_11245);

(statearr_11266[(8)] = inst_11244__$1);

return statearr_11266;
})();
if(cljs.core.truth_(inst_11246)){
var statearr_11267_11287 = state_11264__$1;
(statearr_11267_11287[(1)] = (8));

} else {
var statearr_11268_11288 = state_11264__$1;
(statearr_11268_11288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (1))){
var inst_11233 = cljs.core.vec.call(null,chs);
var inst_11234 = inst_11233;
var state_11264__$1 = (function (){var statearr_11269 = state_11264;
(statearr_11269[(10)] = inst_11234);

return statearr_11269;
})();
var statearr_11270_11289 = state_11264__$1;
(statearr_11270_11289[(2)] = null);

(statearr_11270_11289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (4))){
var inst_11234 = (state_11264[(10)]);
var state_11264__$1 = state_11264;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11264__$1,(7),inst_11234);
} else {
if((state_val_11265 === (6))){
var inst_11260 = (state_11264[(2)]);
var state_11264__$1 = state_11264;
var statearr_11271_11290 = state_11264__$1;
(statearr_11271_11290[(2)] = inst_11260);

(statearr_11271_11290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (3))){
var inst_11262 = (state_11264[(2)]);
var state_11264__$1 = state_11264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11264__$1,inst_11262);
} else {
if((state_val_11265 === (2))){
var inst_11234 = (state_11264[(10)]);
var inst_11236 = cljs.core.count.call(null,inst_11234);
var inst_11237 = (inst_11236 > (0));
var state_11264__$1 = state_11264;
if(cljs.core.truth_(inst_11237)){
var statearr_11273_11291 = state_11264__$1;
(statearr_11273_11291[(1)] = (4));

} else {
var statearr_11274_11292 = state_11264__$1;
(statearr_11274_11292[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (11))){
var inst_11234 = (state_11264[(10)]);
var inst_11253 = (state_11264[(2)]);
var tmp11272 = inst_11234;
var inst_11234__$1 = tmp11272;
var state_11264__$1 = (function (){var statearr_11275 = state_11264;
(statearr_11275[(11)] = inst_11253);

(statearr_11275[(10)] = inst_11234__$1);

return statearr_11275;
})();
var statearr_11276_11293 = state_11264__$1;
(statearr_11276_11293[(2)] = null);

(statearr_11276_11293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (9))){
var inst_11244 = (state_11264[(8)]);
var state_11264__$1 = state_11264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11264__$1,(11),out,inst_11244);
} else {
if((state_val_11265 === (5))){
var inst_11258 = cljs.core.async.close_BANG_.call(null,out);
var state_11264__$1 = state_11264;
var statearr_11277_11294 = state_11264__$1;
(statearr_11277_11294[(2)] = inst_11258);

(statearr_11277_11294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (10))){
var inst_11256 = (state_11264[(2)]);
var state_11264__$1 = state_11264;
var statearr_11278_11295 = state_11264__$1;
(statearr_11278_11295[(2)] = inst_11256);

(statearr_11278_11295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (8))){
var inst_11243 = (state_11264[(7)]);
var inst_11245 = (state_11264[(9)]);
var inst_11234 = (state_11264[(10)]);
var inst_11244 = (state_11264[(8)]);
var inst_11248 = (function (){var cs = inst_11234;
var vec__11239 = inst_11243;
var v = inst_11244;
var c = inst_11245;
return ((function (cs,vec__11239,v,c,inst_11243,inst_11245,inst_11234,inst_11244,state_val_11265,c__9887__auto___11286,out){
return (function (p1__11230_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11230_SHARP_);
});
;})(cs,vec__11239,v,c,inst_11243,inst_11245,inst_11234,inst_11244,state_val_11265,c__9887__auto___11286,out))
})();
var inst_11249 = cljs.core.filterv.call(null,inst_11248,inst_11234);
var inst_11234__$1 = inst_11249;
var state_11264__$1 = (function (){var statearr_11279 = state_11264;
(statearr_11279[(10)] = inst_11234__$1);

return statearr_11279;
})();
var statearr_11280_11296 = state_11264__$1;
(statearr_11280_11296[(2)] = null);

(statearr_11280_11296[(1)] = (2));


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
});})(c__9887__auto___11286,out))
;
return ((function (switch__9799__auto__,c__9887__auto___11286,out){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_11281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11281[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_11281[(1)] = (1));

return statearr_11281;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_11264){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11282){if((e11282 instanceof Object)){
var ex__9803__auto__ = e11282;
var statearr_11283_11297 = state_11264;
(statearr_11283_11297[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11298 = state_11264;
state_11264 = G__11298;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_11264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_11264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___11286,out))
})();
var state__9889__auto__ = (function (){var statearr_11284 = f__9888__auto__.call(null);
(statearr_11284[(6)] = c__9887__auto___11286);

return statearr_11284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___11286,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__11300 = arguments.length;
switch (G__11300) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9887__auto___11345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___11345,out){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___11345,out){
return (function (state_11324){
var state_val_11325 = (state_11324[(1)]);
if((state_val_11325 === (7))){
var inst_11306 = (state_11324[(7)]);
var inst_11306__$1 = (state_11324[(2)]);
var inst_11307 = (inst_11306__$1 == null);
var inst_11308 = cljs.core.not.call(null,inst_11307);
var state_11324__$1 = (function (){var statearr_11326 = state_11324;
(statearr_11326[(7)] = inst_11306__$1);

return statearr_11326;
})();
if(inst_11308){
var statearr_11327_11346 = state_11324__$1;
(statearr_11327_11346[(1)] = (8));

} else {
var statearr_11328_11347 = state_11324__$1;
(statearr_11328_11347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (1))){
var inst_11301 = (0);
var state_11324__$1 = (function (){var statearr_11329 = state_11324;
(statearr_11329[(8)] = inst_11301);

return statearr_11329;
})();
var statearr_11330_11348 = state_11324__$1;
(statearr_11330_11348[(2)] = null);

(statearr_11330_11348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (4))){
var state_11324__$1 = state_11324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11324__$1,(7),ch);
} else {
if((state_val_11325 === (6))){
var inst_11319 = (state_11324[(2)]);
var state_11324__$1 = state_11324;
var statearr_11331_11349 = state_11324__$1;
(statearr_11331_11349[(2)] = inst_11319);

(statearr_11331_11349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (3))){
var inst_11321 = (state_11324[(2)]);
var inst_11322 = cljs.core.async.close_BANG_.call(null,out);
var state_11324__$1 = (function (){var statearr_11332 = state_11324;
(statearr_11332[(9)] = inst_11321);

return statearr_11332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11324__$1,inst_11322);
} else {
if((state_val_11325 === (2))){
var inst_11301 = (state_11324[(8)]);
var inst_11303 = (inst_11301 < n);
var state_11324__$1 = state_11324;
if(cljs.core.truth_(inst_11303)){
var statearr_11333_11350 = state_11324__$1;
(statearr_11333_11350[(1)] = (4));

} else {
var statearr_11334_11351 = state_11324__$1;
(statearr_11334_11351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (11))){
var inst_11301 = (state_11324[(8)]);
var inst_11311 = (state_11324[(2)]);
var inst_11312 = (inst_11301 + (1));
var inst_11301__$1 = inst_11312;
var state_11324__$1 = (function (){var statearr_11335 = state_11324;
(statearr_11335[(8)] = inst_11301__$1);

(statearr_11335[(10)] = inst_11311);

return statearr_11335;
})();
var statearr_11336_11352 = state_11324__$1;
(statearr_11336_11352[(2)] = null);

(statearr_11336_11352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (9))){
var state_11324__$1 = state_11324;
var statearr_11337_11353 = state_11324__$1;
(statearr_11337_11353[(2)] = null);

(statearr_11337_11353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (5))){
var state_11324__$1 = state_11324;
var statearr_11338_11354 = state_11324__$1;
(statearr_11338_11354[(2)] = null);

(statearr_11338_11354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (10))){
var inst_11316 = (state_11324[(2)]);
var state_11324__$1 = state_11324;
var statearr_11339_11355 = state_11324__$1;
(statearr_11339_11355[(2)] = inst_11316);

(statearr_11339_11355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (8))){
var inst_11306 = (state_11324[(7)]);
var state_11324__$1 = state_11324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11324__$1,(11),out,inst_11306);
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
});})(c__9887__auto___11345,out))
;
return ((function (switch__9799__auto__,c__9887__auto___11345,out){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_11340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11340[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_11340[(1)] = (1));

return statearr_11340;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_11324){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11341){if((e11341 instanceof Object)){
var ex__9803__auto__ = e11341;
var statearr_11342_11356 = state_11324;
(statearr_11342_11356[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11357 = state_11324;
state_11324 = G__11357;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_11324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_11324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___11345,out))
})();
var state__9889__auto__ = (function (){var statearr_11343 = f__9888__auto__.call(null);
(statearr_11343[(6)] = c__9887__auto___11345);

return statearr_11343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___11345,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11359 = (function (f,ch,meta11360){
this.f = f;
this.ch = ch;
this.meta11360 = meta11360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11361,meta11360__$1){
var self__ = this;
var _11361__$1 = this;
return (new cljs.core.async.t_cljs$core$async11359(self__.f,self__.ch,meta11360__$1));
});

cljs.core.async.t_cljs$core$async11359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11361){
var self__ = this;
var _11361__$1 = this;
return self__.meta11360;
});

cljs.core.async.t_cljs$core$async11359.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11359.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11359.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11362 = (function (f,ch,meta11360,_,fn1,meta11363){
this.f = f;
this.ch = ch;
this.meta11360 = meta11360;
this._ = _;
this.fn1 = fn1;
this.meta11363 = meta11363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11364,meta11363__$1){
var self__ = this;
var _11364__$1 = this;
return (new cljs.core.async.t_cljs$core$async11362(self__.f,self__.ch,self__.meta11360,self__._,self__.fn1,meta11363__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11364){
var self__ = this;
var _11364__$1 = this;
return self__.meta11363;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11358_SHARP_){
return f1.call(null,(((p1__11358_SHARP_ == null))?null:self__.f.call(null,p1__11358_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11362.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11360","meta11360",102395071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11359","cljs.core.async/t_cljs$core$async11359",-485434387,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11363","meta11363",1254637756,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11362";

cljs.core.async.t_cljs$core$async11362.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write.call(null,writer__7386__auto__,"cljs.core.async/t_cljs$core$async11362");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11362 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11362(f__$1,ch__$1,meta11360__$1,___$2,fn1__$1,meta11363){
return (new cljs.core.async.t_cljs$core$async11362(f__$1,ch__$1,meta11360__$1,___$2,fn1__$1,meta11363));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11362(self__.f,self__.ch,self__.meta11360,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6762__auto__ = ret;
if(cljs.core.truth_(and__6762__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6762__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11359.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11360","meta11360",102395071,null)], null);
});

cljs.core.async.t_cljs$core$async11359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11359";

cljs.core.async.t_cljs$core$async11359.cljs$lang$ctorPrWriter = (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write.call(null,writer__7386__auto__,"cljs.core.async/t_cljs$core$async11359");
});

cljs.core.async.__GT_t_cljs$core$async11359 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11359(f__$1,ch__$1,meta11360){
return (new cljs.core.async.t_cljs$core$async11359(f__$1,ch__$1,meta11360));
});

}

return (new cljs.core.async.t_cljs$core$async11359(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11365 = (function (f,ch,meta11366){
this.f = f;
this.ch = ch;
this.meta11366 = meta11366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11367,meta11366__$1){
var self__ = this;
var _11367__$1 = this;
return (new cljs.core.async.t_cljs$core$async11365(self__.f,self__.ch,meta11366__$1));
});

cljs.core.async.t_cljs$core$async11365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11367){
var self__ = this;
var _11367__$1 = this;
return self__.meta11366;
});

cljs.core.async.t_cljs$core$async11365.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11365.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11365.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11366","meta11366",892434062,null)], null);
});

cljs.core.async.t_cljs$core$async11365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11365";

cljs.core.async.t_cljs$core$async11365.cljs$lang$ctorPrWriter = (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write.call(null,writer__7386__auto__,"cljs.core.async/t_cljs$core$async11365");
});

cljs.core.async.__GT_t_cljs$core$async11365 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11365(f__$1,ch__$1,meta11366){
return (new cljs.core.async.t_cljs$core$async11365(f__$1,ch__$1,meta11366));
});

}

return (new cljs.core.async.t_cljs$core$async11365(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11368 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11368 = (function (p,ch,meta11369){
this.p = p;
this.ch = ch;
this.meta11369 = meta11369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11370,meta11369__$1){
var self__ = this;
var _11370__$1 = this;
return (new cljs.core.async.t_cljs$core$async11368(self__.p,self__.ch,meta11369__$1));
});

cljs.core.async.t_cljs$core$async11368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11370){
var self__ = this;
var _11370__$1 = this;
return self__.meta11369;
});

cljs.core.async.t_cljs$core$async11368.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11368.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11368.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11368.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11369","meta11369",1737411723,null)], null);
});

cljs.core.async.t_cljs$core$async11368.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11368";

cljs.core.async.t_cljs$core$async11368.cljs$lang$ctorPrWriter = (function (this__7385__auto__,writer__7386__auto__,opt__7387__auto__){
return cljs.core._write.call(null,writer__7386__auto__,"cljs.core.async/t_cljs$core$async11368");
});

cljs.core.async.__GT_t_cljs$core$async11368 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11368(p__$1,ch__$1,meta11369){
return (new cljs.core.async.t_cljs$core$async11368(p__$1,ch__$1,meta11369));
});

}

return (new cljs.core.async.t_cljs$core$async11368(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__11372 = arguments.length;
switch (G__11372) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9887__auto___11412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___11412,out){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___11412,out){
return (function (state_11393){
var state_val_11394 = (state_11393[(1)]);
if((state_val_11394 === (7))){
var inst_11389 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11395_11413 = state_11393__$1;
(statearr_11395_11413[(2)] = inst_11389);

(statearr_11395_11413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (1))){
var state_11393__$1 = state_11393;
var statearr_11396_11414 = state_11393__$1;
(statearr_11396_11414[(2)] = null);

(statearr_11396_11414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (4))){
var inst_11375 = (state_11393[(7)]);
var inst_11375__$1 = (state_11393[(2)]);
var inst_11376 = (inst_11375__$1 == null);
var state_11393__$1 = (function (){var statearr_11397 = state_11393;
(statearr_11397[(7)] = inst_11375__$1);

return statearr_11397;
})();
if(cljs.core.truth_(inst_11376)){
var statearr_11398_11415 = state_11393__$1;
(statearr_11398_11415[(1)] = (5));

} else {
var statearr_11399_11416 = state_11393__$1;
(statearr_11399_11416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (6))){
var inst_11375 = (state_11393[(7)]);
var inst_11380 = p.call(null,inst_11375);
var state_11393__$1 = state_11393;
if(cljs.core.truth_(inst_11380)){
var statearr_11400_11417 = state_11393__$1;
(statearr_11400_11417[(1)] = (8));

} else {
var statearr_11401_11418 = state_11393__$1;
(statearr_11401_11418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (3))){
var inst_11391 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11393__$1,inst_11391);
} else {
if((state_val_11394 === (2))){
var state_11393__$1 = state_11393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11393__$1,(4),ch);
} else {
if((state_val_11394 === (11))){
var inst_11383 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11402_11419 = state_11393__$1;
(statearr_11402_11419[(2)] = inst_11383);

(statearr_11402_11419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (9))){
var state_11393__$1 = state_11393;
var statearr_11403_11420 = state_11393__$1;
(statearr_11403_11420[(2)] = null);

(statearr_11403_11420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (5))){
var inst_11378 = cljs.core.async.close_BANG_.call(null,out);
var state_11393__$1 = state_11393;
var statearr_11404_11421 = state_11393__$1;
(statearr_11404_11421[(2)] = inst_11378);

(statearr_11404_11421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (10))){
var inst_11386 = (state_11393[(2)]);
var state_11393__$1 = (function (){var statearr_11405 = state_11393;
(statearr_11405[(8)] = inst_11386);

return statearr_11405;
})();
var statearr_11406_11422 = state_11393__$1;
(statearr_11406_11422[(2)] = null);

(statearr_11406_11422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (8))){
var inst_11375 = (state_11393[(7)]);
var state_11393__$1 = state_11393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11393__$1,(11),out,inst_11375);
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
});})(c__9887__auto___11412,out))
;
return ((function (switch__9799__auto__,c__9887__auto___11412,out){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_11407 = [null,null,null,null,null,null,null,null,null];
(statearr_11407[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_11407[(1)] = (1));

return statearr_11407;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_11393){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11408){if((e11408 instanceof Object)){
var ex__9803__auto__ = e11408;
var statearr_11409_11423 = state_11393;
(statearr_11409_11423[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11424 = state_11393;
state_11393 = G__11424;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_11393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_11393);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___11412,out))
})();
var state__9889__auto__ = (function (){var statearr_11410 = f__9888__auto__.call(null);
(statearr_11410[(6)] = c__9887__auto___11412);

return statearr_11410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___11412,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11426 = arguments.length;
switch (G__11426) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto__){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto__){
return (function (state_11489){
var state_val_11490 = (state_11489[(1)]);
if((state_val_11490 === (7))){
var inst_11485 = (state_11489[(2)]);
var state_11489__$1 = state_11489;
var statearr_11491_11529 = state_11489__$1;
(statearr_11491_11529[(2)] = inst_11485);

(statearr_11491_11529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (20))){
var inst_11455 = (state_11489[(7)]);
var inst_11466 = (state_11489[(2)]);
var inst_11467 = cljs.core.next.call(null,inst_11455);
var inst_11441 = inst_11467;
var inst_11442 = null;
var inst_11443 = (0);
var inst_11444 = (0);
var state_11489__$1 = (function (){var statearr_11492 = state_11489;
(statearr_11492[(8)] = inst_11442);

(statearr_11492[(9)] = inst_11466);

(statearr_11492[(10)] = inst_11441);

(statearr_11492[(11)] = inst_11443);

(statearr_11492[(12)] = inst_11444);

return statearr_11492;
})();
var statearr_11493_11530 = state_11489__$1;
(statearr_11493_11530[(2)] = null);

(statearr_11493_11530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (1))){
var state_11489__$1 = state_11489;
var statearr_11494_11531 = state_11489__$1;
(statearr_11494_11531[(2)] = null);

(statearr_11494_11531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (4))){
var inst_11430 = (state_11489[(13)]);
var inst_11430__$1 = (state_11489[(2)]);
var inst_11431 = (inst_11430__$1 == null);
var state_11489__$1 = (function (){var statearr_11495 = state_11489;
(statearr_11495[(13)] = inst_11430__$1);

return statearr_11495;
})();
if(cljs.core.truth_(inst_11431)){
var statearr_11496_11532 = state_11489__$1;
(statearr_11496_11532[(1)] = (5));

} else {
var statearr_11497_11533 = state_11489__$1;
(statearr_11497_11533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (15))){
var state_11489__$1 = state_11489;
var statearr_11501_11534 = state_11489__$1;
(statearr_11501_11534[(2)] = null);

(statearr_11501_11534[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (21))){
var state_11489__$1 = state_11489;
var statearr_11502_11535 = state_11489__$1;
(statearr_11502_11535[(2)] = null);

(statearr_11502_11535[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (13))){
var inst_11442 = (state_11489[(8)]);
var inst_11441 = (state_11489[(10)]);
var inst_11443 = (state_11489[(11)]);
var inst_11444 = (state_11489[(12)]);
var inst_11451 = (state_11489[(2)]);
var inst_11452 = (inst_11444 + (1));
var tmp11498 = inst_11442;
var tmp11499 = inst_11441;
var tmp11500 = inst_11443;
var inst_11441__$1 = tmp11499;
var inst_11442__$1 = tmp11498;
var inst_11443__$1 = tmp11500;
var inst_11444__$1 = inst_11452;
var state_11489__$1 = (function (){var statearr_11503 = state_11489;
(statearr_11503[(8)] = inst_11442__$1);

(statearr_11503[(10)] = inst_11441__$1);

(statearr_11503[(11)] = inst_11443__$1);

(statearr_11503[(12)] = inst_11444__$1);

(statearr_11503[(14)] = inst_11451);

return statearr_11503;
})();
var statearr_11504_11536 = state_11489__$1;
(statearr_11504_11536[(2)] = null);

(statearr_11504_11536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (22))){
var state_11489__$1 = state_11489;
var statearr_11505_11537 = state_11489__$1;
(statearr_11505_11537[(2)] = null);

(statearr_11505_11537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (6))){
var inst_11430 = (state_11489[(13)]);
var inst_11439 = f.call(null,inst_11430);
var inst_11440 = cljs.core.seq.call(null,inst_11439);
var inst_11441 = inst_11440;
var inst_11442 = null;
var inst_11443 = (0);
var inst_11444 = (0);
var state_11489__$1 = (function (){var statearr_11506 = state_11489;
(statearr_11506[(8)] = inst_11442);

(statearr_11506[(10)] = inst_11441);

(statearr_11506[(11)] = inst_11443);

(statearr_11506[(12)] = inst_11444);

return statearr_11506;
})();
var statearr_11507_11538 = state_11489__$1;
(statearr_11507_11538[(2)] = null);

(statearr_11507_11538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (17))){
var inst_11455 = (state_11489[(7)]);
var inst_11459 = cljs.core.chunk_first.call(null,inst_11455);
var inst_11460 = cljs.core.chunk_rest.call(null,inst_11455);
var inst_11461 = cljs.core.count.call(null,inst_11459);
var inst_11441 = inst_11460;
var inst_11442 = inst_11459;
var inst_11443 = inst_11461;
var inst_11444 = (0);
var state_11489__$1 = (function (){var statearr_11508 = state_11489;
(statearr_11508[(8)] = inst_11442);

(statearr_11508[(10)] = inst_11441);

(statearr_11508[(11)] = inst_11443);

(statearr_11508[(12)] = inst_11444);

return statearr_11508;
})();
var statearr_11509_11539 = state_11489__$1;
(statearr_11509_11539[(2)] = null);

(statearr_11509_11539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (3))){
var inst_11487 = (state_11489[(2)]);
var state_11489__$1 = state_11489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11489__$1,inst_11487);
} else {
if((state_val_11490 === (12))){
var inst_11475 = (state_11489[(2)]);
var state_11489__$1 = state_11489;
var statearr_11510_11540 = state_11489__$1;
(statearr_11510_11540[(2)] = inst_11475);

(statearr_11510_11540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (2))){
var state_11489__$1 = state_11489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11489__$1,(4),in$);
} else {
if((state_val_11490 === (23))){
var inst_11483 = (state_11489[(2)]);
var state_11489__$1 = state_11489;
var statearr_11511_11541 = state_11489__$1;
(statearr_11511_11541[(2)] = inst_11483);

(statearr_11511_11541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (19))){
var inst_11470 = (state_11489[(2)]);
var state_11489__$1 = state_11489;
var statearr_11512_11542 = state_11489__$1;
(statearr_11512_11542[(2)] = inst_11470);

(statearr_11512_11542[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (11))){
var inst_11441 = (state_11489[(10)]);
var inst_11455 = (state_11489[(7)]);
var inst_11455__$1 = cljs.core.seq.call(null,inst_11441);
var state_11489__$1 = (function (){var statearr_11513 = state_11489;
(statearr_11513[(7)] = inst_11455__$1);

return statearr_11513;
})();
if(inst_11455__$1){
var statearr_11514_11543 = state_11489__$1;
(statearr_11514_11543[(1)] = (14));

} else {
var statearr_11515_11544 = state_11489__$1;
(statearr_11515_11544[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (9))){
var inst_11477 = (state_11489[(2)]);
var inst_11478 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11489__$1 = (function (){var statearr_11516 = state_11489;
(statearr_11516[(15)] = inst_11477);

return statearr_11516;
})();
if(cljs.core.truth_(inst_11478)){
var statearr_11517_11545 = state_11489__$1;
(statearr_11517_11545[(1)] = (21));

} else {
var statearr_11518_11546 = state_11489__$1;
(statearr_11518_11546[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (5))){
var inst_11433 = cljs.core.async.close_BANG_.call(null,out);
var state_11489__$1 = state_11489;
var statearr_11519_11547 = state_11489__$1;
(statearr_11519_11547[(2)] = inst_11433);

(statearr_11519_11547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (14))){
var inst_11455 = (state_11489[(7)]);
var inst_11457 = cljs.core.chunked_seq_QMARK_.call(null,inst_11455);
var state_11489__$1 = state_11489;
if(inst_11457){
var statearr_11520_11548 = state_11489__$1;
(statearr_11520_11548[(1)] = (17));

} else {
var statearr_11521_11549 = state_11489__$1;
(statearr_11521_11549[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (16))){
var inst_11473 = (state_11489[(2)]);
var state_11489__$1 = state_11489;
var statearr_11522_11550 = state_11489__$1;
(statearr_11522_11550[(2)] = inst_11473);

(statearr_11522_11550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11490 === (10))){
var inst_11442 = (state_11489[(8)]);
var inst_11444 = (state_11489[(12)]);
var inst_11449 = cljs.core._nth.call(null,inst_11442,inst_11444);
var state_11489__$1 = state_11489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11489__$1,(13),out,inst_11449);
} else {
if((state_val_11490 === (18))){
var inst_11455 = (state_11489[(7)]);
var inst_11464 = cljs.core.first.call(null,inst_11455);
var state_11489__$1 = state_11489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11489__$1,(20),out,inst_11464);
} else {
if((state_val_11490 === (8))){
var inst_11443 = (state_11489[(11)]);
var inst_11444 = (state_11489[(12)]);
var inst_11446 = (inst_11444 < inst_11443);
var inst_11447 = inst_11446;
var state_11489__$1 = state_11489;
if(cljs.core.truth_(inst_11447)){
var statearr_11523_11551 = state_11489__$1;
(statearr_11523_11551[(1)] = (10));

} else {
var statearr_11524_11552 = state_11489__$1;
(statearr_11524_11552[(1)] = (11));

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
});})(c__9887__auto__))
;
return ((function (switch__9799__auto__,c__9887__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9800__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9800__auto____0 = (function (){
var statearr_11525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11525[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9800__auto__);

(statearr_11525[(1)] = (1));

return statearr_11525;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9800__auto____1 = (function (state_11489){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11526){if((e11526 instanceof Object)){
var ex__9803__auto__ = e11526;
var statearr_11527_11553 = state_11489;
(statearr_11527_11553[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11554 = state_11489;
state_11489 = G__11554;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9800__auto__ = function(state_11489){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9800__auto____1.call(this,state_11489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9800__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9800__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto__))
})();
var state__9889__auto__ = (function (){var statearr_11528 = f__9888__auto__.call(null);
(statearr_11528[(6)] = c__9887__auto__);

return statearr_11528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto__))
);

return c__9887__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11556 = arguments.length;
switch (G__11556) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__11559 = arguments.length;
switch (G__11559) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__11562 = arguments.length;
switch (G__11562) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9887__auto___11609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___11609,out){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___11609,out){
return (function (state_11586){
var state_val_11587 = (state_11586[(1)]);
if((state_val_11587 === (7))){
var inst_11581 = (state_11586[(2)]);
var state_11586__$1 = state_11586;
var statearr_11588_11610 = state_11586__$1;
(statearr_11588_11610[(2)] = inst_11581);

(statearr_11588_11610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (1))){
var inst_11563 = null;
var state_11586__$1 = (function (){var statearr_11589 = state_11586;
(statearr_11589[(7)] = inst_11563);

return statearr_11589;
})();
var statearr_11590_11611 = state_11586__$1;
(statearr_11590_11611[(2)] = null);

(statearr_11590_11611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (4))){
var inst_11566 = (state_11586[(8)]);
var inst_11566__$1 = (state_11586[(2)]);
var inst_11567 = (inst_11566__$1 == null);
var inst_11568 = cljs.core.not.call(null,inst_11567);
var state_11586__$1 = (function (){var statearr_11591 = state_11586;
(statearr_11591[(8)] = inst_11566__$1);

return statearr_11591;
})();
if(inst_11568){
var statearr_11592_11612 = state_11586__$1;
(statearr_11592_11612[(1)] = (5));

} else {
var statearr_11593_11613 = state_11586__$1;
(statearr_11593_11613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (6))){
var state_11586__$1 = state_11586;
var statearr_11594_11614 = state_11586__$1;
(statearr_11594_11614[(2)] = null);

(statearr_11594_11614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (3))){
var inst_11583 = (state_11586[(2)]);
var inst_11584 = cljs.core.async.close_BANG_.call(null,out);
var state_11586__$1 = (function (){var statearr_11595 = state_11586;
(statearr_11595[(9)] = inst_11583);

return statearr_11595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11586__$1,inst_11584);
} else {
if((state_val_11587 === (2))){
var state_11586__$1 = state_11586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11586__$1,(4),ch);
} else {
if((state_val_11587 === (11))){
var inst_11566 = (state_11586[(8)]);
var inst_11575 = (state_11586[(2)]);
var inst_11563 = inst_11566;
var state_11586__$1 = (function (){var statearr_11596 = state_11586;
(statearr_11596[(7)] = inst_11563);

(statearr_11596[(10)] = inst_11575);

return statearr_11596;
})();
var statearr_11597_11615 = state_11586__$1;
(statearr_11597_11615[(2)] = null);

(statearr_11597_11615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (9))){
var inst_11566 = (state_11586[(8)]);
var state_11586__$1 = state_11586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11586__$1,(11),out,inst_11566);
} else {
if((state_val_11587 === (5))){
var inst_11563 = (state_11586[(7)]);
var inst_11566 = (state_11586[(8)]);
var inst_11570 = cljs.core._EQ_.call(null,inst_11566,inst_11563);
var state_11586__$1 = state_11586;
if(inst_11570){
var statearr_11599_11616 = state_11586__$1;
(statearr_11599_11616[(1)] = (8));

} else {
var statearr_11600_11617 = state_11586__$1;
(statearr_11600_11617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (10))){
var inst_11578 = (state_11586[(2)]);
var state_11586__$1 = state_11586;
var statearr_11601_11618 = state_11586__$1;
(statearr_11601_11618[(2)] = inst_11578);

(statearr_11601_11618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (8))){
var inst_11563 = (state_11586[(7)]);
var tmp11598 = inst_11563;
var inst_11563__$1 = tmp11598;
var state_11586__$1 = (function (){var statearr_11602 = state_11586;
(statearr_11602[(7)] = inst_11563__$1);

return statearr_11602;
})();
var statearr_11603_11619 = state_11586__$1;
(statearr_11603_11619[(2)] = null);

(statearr_11603_11619[(1)] = (2));


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
});})(c__9887__auto___11609,out))
;
return ((function (switch__9799__auto__,c__9887__auto___11609,out){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_11604 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11604[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_11604[(1)] = (1));

return statearr_11604;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_11586){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11605){if((e11605 instanceof Object)){
var ex__9803__auto__ = e11605;
var statearr_11606_11620 = state_11586;
(statearr_11606_11620[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11621 = state_11586;
state_11586 = G__11621;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_11586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_11586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___11609,out))
})();
var state__9889__auto__ = (function (){var statearr_11607 = f__9888__auto__.call(null);
(statearr_11607[(6)] = c__9887__auto___11609);

return statearr_11607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___11609,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11623 = arguments.length;
switch (G__11623) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9887__auto___11689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___11689,out){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___11689,out){
return (function (state_11661){
var state_val_11662 = (state_11661[(1)]);
if((state_val_11662 === (7))){
var inst_11657 = (state_11661[(2)]);
var state_11661__$1 = state_11661;
var statearr_11663_11690 = state_11661__$1;
(statearr_11663_11690[(2)] = inst_11657);

(statearr_11663_11690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11662 === (1))){
var inst_11624 = (new Array(n));
var inst_11625 = inst_11624;
var inst_11626 = (0);
var state_11661__$1 = (function (){var statearr_11664 = state_11661;
(statearr_11664[(7)] = inst_11625);

(statearr_11664[(8)] = inst_11626);

return statearr_11664;
})();
var statearr_11665_11691 = state_11661__$1;
(statearr_11665_11691[(2)] = null);

(statearr_11665_11691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11662 === (4))){
var inst_11629 = (state_11661[(9)]);
var inst_11629__$1 = (state_11661[(2)]);
var inst_11630 = (inst_11629__$1 == null);
var inst_11631 = cljs.core.not.call(null,inst_11630);
var state_11661__$1 = (function (){var statearr_11666 = state_11661;
(statearr_11666[(9)] = inst_11629__$1);

return statearr_11666;
})();
if(inst_11631){
var statearr_11667_11692 = state_11661__$1;
(statearr_11667_11692[(1)] = (5));

} else {
var statearr_11668_11693 = state_11661__$1;
(statearr_11668_11693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11662 === (15))){
var inst_11651 = (state_11661[(2)]);
var state_11661__$1 = state_11661;
var statearr_11669_11694 = state_11661__$1;
(statearr_11669_11694[(2)] = inst_11651);

(statearr_11669_11694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11662 === (13))){
var state_11661__$1 = state_11661;
var statearr_11670_11695 = state_11661__$1;
(statearr_11670_11695[(2)] = null);

(statearr_11670_11695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11662 === (6))){
var inst_11626 = (state_11661[(8)]);
var inst_11647 = (inst_11626 > (0));
var state_11661__$1 = state_11661;
if(cljs.core.truth_(inst_11647)){
var statearr_11671_11696 = state_11661__$1;
(statearr_11671_11696[(1)] = (12));

} else {
var statearr_11672_11697 = state_11661__$1;
(statearr_11672_11697[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11662 === (3))){
var inst_11659 = (state_11661[(2)]);
var state_11661__$1 = state_11661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11661__$1,inst_11659);
} else {
if((state_val_11662 === (12))){
var inst_11625 = (state_11661[(7)]);
var inst_11649 = cljs.core.vec.call(null,inst_11625);
var state_11661__$1 = state_11661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11661__$1,(15),out,inst_11649);
} else {
if((state_val_11662 === (2))){
var state_11661__$1 = state_11661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11661__$1,(4),ch);
} else {
if((state_val_11662 === (11))){
var inst_11641 = (state_11661[(2)]);
var inst_11642 = (new Array(n));
var inst_11625 = inst_11642;
var inst_11626 = (0);
var state_11661__$1 = (function (){var statearr_11673 = state_11661;
(statearr_11673[(10)] = inst_11641);

(statearr_11673[(7)] = inst_11625);

(statearr_11673[(8)] = inst_11626);

return statearr_11673;
})();
var statearr_11674_11698 = state_11661__$1;
(statearr_11674_11698[(2)] = null);

(statearr_11674_11698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11662 === (9))){
var inst_11625 = (state_11661[(7)]);
var inst_11639 = cljs.core.vec.call(null,inst_11625);
var state_11661__$1 = state_11661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11661__$1,(11),out,inst_11639);
} else {
if((state_val_11662 === (5))){
var inst_11625 = (state_11661[(7)]);
var inst_11634 = (state_11661[(11)]);
var inst_11626 = (state_11661[(8)]);
var inst_11629 = (state_11661[(9)]);
var inst_11633 = (inst_11625[inst_11626] = inst_11629);
var inst_11634__$1 = (inst_11626 + (1));
var inst_11635 = (inst_11634__$1 < n);
var state_11661__$1 = (function (){var statearr_11675 = state_11661;
(statearr_11675[(12)] = inst_11633);

(statearr_11675[(11)] = inst_11634__$1);

return statearr_11675;
})();
if(cljs.core.truth_(inst_11635)){
var statearr_11676_11699 = state_11661__$1;
(statearr_11676_11699[(1)] = (8));

} else {
var statearr_11677_11700 = state_11661__$1;
(statearr_11677_11700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11662 === (14))){
var inst_11654 = (state_11661[(2)]);
var inst_11655 = cljs.core.async.close_BANG_.call(null,out);
var state_11661__$1 = (function (){var statearr_11679 = state_11661;
(statearr_11679[(13)] = inst_11654);

return statearr_11679;
})();
var statearr_11680_11701 = state_11661__$1;
(statearr_11680_11701[(2)] = inst_11655);

(statearr_11680_11701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11662 === (10))){
var inst_11645 = (state_11661[(2)]);
var state_11661__$1 = state_11661;
var statearr_11681_11702 = state_11661__$1;
(statearr_11681_11702[(2)] = inst_11645);

(statearr_11681_11702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11662 === (8))){
var inst_11625 = (state_11661[(7)]);
var inst_11634 = (state_11661[(11)]);
var tmp11678 = inst_11625;
var inst_11625__$1 = tmp11678;
var inst_11626 = inst_11634;
var state_11661__$1 = (function (){var statearr_11682 = state_11661;
(statearr_11682[(7)] = inst_11625__$1);

(statearr_11682[(8)] = inst_11626);

return statearr_11682;
})();
var statearr_11683_11703 = state_11661__$1;
(statearr_11683_11703[(2)] = null);

(statearr_11683_11703[(1)] = (2));


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
});})(c__9887__auto___11689,out))
;
return ((function (switch__9799__auto__,c__9887__auto___11689,out){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_11684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11684[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_11684[(1)] = (1));

return statearr_11684;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_11661){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11685){if((e11685 instanceof Object)){
var ex__9803__auto__ = e11685;
var statearr_11686_11704 = state_11661;
(statearr_11686_11704[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11705 = state_11661;
state_11661 = G__11705;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_11661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_11661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___11689,out))
})();
var state__9889__auto__ = (function (){var statearr_11687 = f__9888__auto__.call(null);
(statearr_11687[(6)] = c__9887__auto___11689);

return statearr_11687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___11689,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11707 = arguments.length;
switch (G__11707) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9887__auto___11777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___11777,out){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___11777,out){
return (function (state_11749){
var state_val_11750 = (state_11749[(1)]);
if((state_val_11750 === (7))){
var inst_11745 = (state_11749[(2)]);
var state_11749__$1 = state_11749;
var statearr_11751_11778 = state_11749__$1;
(statearr_11751_11778[(2)] = inst_11745);

(statearr_11751_11778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (1))){
var inst_11708 = [];
var inst_11709 = inst_11708;
var inst_11710 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11749__$1 = (function (){var statearr_11752 = state_11749;
(statearr_11752[(7)] = inst_11710);

(statearr_11752[(8)] = inst_11709);

return statearr_11752;
})();
var statearr_11753_11779 = state_11749__$1;
(statearr_11753_11779[(2)] = null);

(statearr_11753_11779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (4))){
var inst_11713 = (state_11749[(9)]);
var inst_11713__$1 = (state_11749[(2)]);
var inst_11714 = (inst_11713__$1 == null);
var inst_11715 = cljs.core.not.call(null,inst_11714);
var state_11749__$1 = (function (){var statearr_11754 = state_11749;
(statearr_11754[(9)] = inst_11713__$1);

return statearr_11754;
})();
if(inst_11715){
var statearr_11755_11780 = state_11749__$1;
(statearr_11755_11780[(1)] = (5));

} else {
var statearr_11756_11781 = state_11749__$1;
(statearr_11756_11781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (15))){
var inst_11739 = (state_11749[(2)]);
var state_11749__$1 = state_11749;
var statearr_11757_11782 = state_11749__$1;
(statearr_11757_11782[(2)] = inst_11739);

(statearr_11757_11782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (13))){
var state_11749__$1 = state_11749;
var statearr_11758_11783 = state_11749__$1;
(statearr_11758_11783[(2)] = null);

(statearr_11758_11783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (6))){
var inst_11709 = (state_11749[(8)]);
var inst_11734 = inst_11709.length;
var inst_11735 = (inst_11734 > (0));
var state_11749__$1 = state_11749;
if(cljs.core.truth_(inst_11735)){
var statearr_11759_11784 = state_11749__$1;
(statearr_11759_11784[(1)] = (12));

} else {
var statearr_11760_11785 = state_11749__$1;
(statearr_11760_11785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (3))){
var inst_11747 = (state_11749[(2)]);
var state_11749__$1 = state_11749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11749__$1,inst_11747);
} else {
if((state_val_11750 === (12))){
var inst_11709 = (state_11749[(8)]);
var inst_11737 = cljs.core.vec.call(null,inst_11709);
var state_11749__$1 = state_11749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11749__$1,(15),out,inst_11737);
} else {
if((state_val_11750 === (2))){
var state_11749__$1 = state_11749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11749__$1,(4),ch);
} else {
if((state_val_11750 === (11))){
var inst_11713 = (state_11749[(9)]);
var inst_11717 = (state_11749[(10)]);
var inst_11727 = (state_11749[(2)]);
var inst_11728 = [];
var inst_11729 = inst_11728.push(inst_11713);
var inst_11709 = inst_11728;
var inst_11710 = inst_11717;
var state_11749__$1 = (function (){var statearr_11761 = state_11749;
(statearr_11761[(7)] = inst_11710);

(statearr_11761[(11)] = inst_11729);

(statearr_11761[(8)] = inst_11709);

(statearr_11761[(12)] = inst_11727);

return statearr_11761;
})();
var statearr_11762_11786 = state_11749__$1;
(statearr_11762_11786[(2)] = null);

(statearr_11762_11786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (9))){
var inst_11709 = (state_11749[(8)]);
var inst_11725 = cljs.core.vec.call(null,inst_11709);
var state_11749__$1 = state_11749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11749__$1,(11),out,inst_11725);
} else {
if((state_val_11750 === (5))){
var inst_11713 = (state_11749[(9)]);
var inst_11710 = (state_11749[(7)]);
var inst_11717 = (state_11749[(10)]);
var inst_11717__$1 = f.call(null,inst_11713);
var inst_11718 = cljs.core._EQ_.call(null,inst_11717__$1,inst_11710);
var inst_11719 = cljs.core.keyword_identical_QMARK_.call(null,inst_11710,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11720 = (inst_11718) || (inst_11719);
var state_11749__$1 = (function (){var statearr_11763 = state_11749;
(statearr_11763[(10)] = inst_11717__$1);

return statearr_11763;
})();
if(cljs.core.truth_(inst_11720)){
var statearr_11764_11787 = state_11749__$1;
(statearr_11764_11787[(1)] = (8));

} else {
var statearr_11765_11788 = state_11749__$1;
(statearr_11765_11788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (14))){
var inst_11742 = (state_11749[(2)]);
var inst_11743 = cljs.core.async.close_BANG_.call(null,out);
var state_11749__$1 = (function (){var statearr_11767 = state_11749;
(statearr_11767[(13)] = inst_11742);

return statearr_11767;
})();
var statearr_11768_11789 = state_11749__$1;
(statearr_11768_11789[(2)] = inst_11743);

(statearr_11768_11789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (10))){
var inst_11732 = (state_11749[(2)]);
var state_11749__$1 = state_11749;
var statearr_11769_11790 = state_11749__$1;
(statearr_11769_11790[(2)] = inst_11732);

(statearr_11769_11790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11750 === (8))){
var inst_11713 = (state_11749[(9)]);
var inst_11709 = (state_11749[(8)]);
var inst_11717 = (state_11749[(10)]);
var inst_11722 = inst_11709.push(inst_11713);
var tmp11766 = inst_11709;
var inst_11709__$1 = tmp11766;
var inst_11710 = inst_11717;
var state_11749__$1 = (function (){var statearr_11770 = state_11749;
(statearr_11770[(7)] = inst_11710);

(statearr_11770[(14)] = inst_11722);

(statearr_11770[(8)] = inst_11709__$1);

return statearr_11770;
})();
var statearr_11771_11791 = state_11749__$1;
(statearr_11771_11791[(2)] = null);

(statearr_11771_11791[(1)] = (2));


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
});})(c__9887__auto___11777,out))
;
return ((function (switch__9799__auto__,c__9887__auto___11777,out){
return (function() {
var cljs$core$async$state_machine__9800__auto__ = null;
var cljs$core$async$state_machine__9800__auto____0 = (function (){
var statearr_11772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11772[(0)] = cljs$core$async$state_machine__9800__auto__);

(statearr_11772[(1)] = (1));

return statearr_11772;
});
var cljs$core$async$state_machine__9800__auto____1 = (function (state_11749){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11773){if((e11773 instanceof Object)){
var ex__9803__auto__ = e11773;
var statearr_11774_11792 = state_11749;
(statearr_11774_11792[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11793 = state_11749;
state_11749 = G__11793;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs$core$async$state_machine__9800__auto__ = function(state_11749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9800__auto____1.call(this,state_11749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9800__auto____0;
cljs$core$async$state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9800__auto____1;
return cljs$core$async$state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___11777,out))
})();
var state__9889__auto__ = (function (){var statearr_11775 = f__9888__auto__.call(null);
(statearr_11775[(6)] = c__9887__auto___11777);

return statearr_11775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___11777,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map