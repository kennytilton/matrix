// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.util.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('tiltontec.util.base');
tiltontec.util.core.type_of = (function tiltontec$util$core$type_of(x){
return cljs.core.type.call(null,x);
});
tiltontec.util.core.xor = (function tiltontec$util$core$xor(a,b){
var or__6774__auto__ = (function (){var and__6762__auto__ = a;
if(cljs.core.truth_(and__6762__auto__)){
return cljs.core.not.call(null,b);
} else {
return and__6762__auto__;
}
})();
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var and__6762__auto__ = b;
if(cljs.core.truth_(and__6762__auto__)){
return cljs.core.not.call(null,a);
} else {
return and__6762__auto__;
}
}
});
tiltontec.util.core.set_ify = (function tiltontec$util$core$set_ify(x){
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.set.call(null,x);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([x]);

}
}
});
tiltontec.util.core.cl_find = (function tiltontec$util$core$cl_find(sought,coll){
if((sought == null)){
return null;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([sought]),coll);
}
});
tiltontec.util.core.uuidv4 = (function tiltontec$util$core$uuidv4(){
var hex = (function tiltontec$util$core$uuidv4_$_hex(){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return cljs.core.uuid.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("4"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null))].join(''));
});
tiltontec.util.core.ia_ref = (function tiltontec$util$core$ia_ref(x){
return cljs.core.atom.call(null,x);
});
tiltontec.util.core.any_ref_QMARK_ = (function tiltontec$util$core$any_ref_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
tiltontec.util.core.rmap_setf = (function tiltontec$util$core$rmap_setf(p__8387,new_value){
var vec__8388 = p__8387;
var slot = cljs.core.nth.call(null,vec__8388,(0),null);
var ref = cljs.core.nth.call(null,vec__8388,(1),null);
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (any-ref? ref)"));
}

if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,ref))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref ref))"));
}

cljs.core.swap_BANG_.call(null,ref,cljs.core.assoc,slot,new_value);

return new_value;
});
tiltontec.util.core.rmap_meta_setf = (function tiltontec$util$core$rmap_meta_setf(p__8391,new_value){
var vec__8392 = p__8391;
var slot = cljs.core.nth.call(null,vec__8392,(0),null);
var ref = cljs.core.nth.call(null,vec__8392,(1),null);
if(cljs.core.truth_(cljs.core.meta.call(null,ref))){
} else {
throw (new Error("Assert failed: (meta ref)"));
}

cljs.core.alter_meta_BANG_.call(null,ref,cljs.core.assoc,slot,new_value);

return new_value;
});
if(typeof tiltontec.util.core.err !== 'undefined'){
} else {
tiltontec.util.core.err = (function (){var method_table__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.util.core","err"),((function (method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__){
return (function() { 
var G__8395__delegate = function (a1,args){
return cljs.core.fn_QMARK_.call(null,a1);
};
var G__8395 = function (a1,var_args){
var args = null;
if (arguments.length > 1) {
var G__8396__i = 0, G__8396__a = new Array(arguments.length -  1);
while (G__8396__i < G__8396__a.length) {G__8396__a[G__8396__i] = arguments[G__8396__i + 1]; ++G__8396__i;}
  args = new cljs.core.IndexedSeq(G__8396__a,0,null);
} 
return G__8395__delegate.call(this,a1,args);};
G__8395.cljs$lang$maxFixedArity = 1;
G__8395.cljs$lang$applyTo = (function (arglist__8397){
var a1 = cljs.core.first(arglist__8397);
var args = cljs.core.rest(arglist__8397);
return G__8395__delegate(a1,args);
});
G__8395.cljs$core$IFn$_invoke$arity$variadic = G__8395__delegate;
return G__8395;
})()
;})(method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.util.core.err,true,(function() { 
var G__8398__delegate = function (fn,mas){
return tiltontec.util.core.err.call(null,cljs.core.apply.call(null,fn,mas));
};
var G__8398 = function (fn,var_args){
var mas = null;
if (arguments.length > 1) {
var G__8399__i = 0, G__8399__a = new Array(arguments.length -  1);
while (G__8399__i < G__8399__a.length) {G__8399__a[G__8399__i] = arguments[G__8399__i + 1]; ++G__8399__i;}
  mas = new cljs.core.IndexedSeq(G__8399__a,0,null);
} 
return G__8398__delegate.call(this,fn,mas);};
G__8398.cljs$lang$maxFixedArity = 1;
G__8398.cljs$lang$applyTo = (function (arglist__8400){
var fn = cljs.core.first(arglist__8400);
var mas = cljs.core.rest(arglist__8400);
return G__8398__delegate(fn,mas);
});
G__8398.cljs$core$IFn$_invoke$arity$variadic = G__8398__delegate;
return G__8398;
})()
);
cljs.core._add_method.call(null,tiltontec.util.core.err,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__8401__delegate = function (bits){
throw (new Error(clojure.string.join.call(null," ",cljs.core.cons.call(null,"jz/err>",bits))));
};
var G__8401 = function (var_args){
var bits = null;
if (arguments.length > 0) {
var G__8402__i = 0, G__8402__a = new Array(arguments.length -  0);
while (G__8402__i < G__8402__a.length) {G__8402__a[G__8402__i] = arguments[G__8402__i + 0]; ++G__8402__i;}
  bits = new cljs.core.IndexedSeq(G__8402__a,0,null);
} 
return G__8401__delegate.call(this,bits);};
G__8401.cljs$lang$maxFixedArity = 0;
G__8401.cljs$lang$applyTo = (function (arglist__8403){
var bits = cljs.core.seq(arglist__8403);
return G__8401__delegate(bits);
});
G__8401.cljs$core$IFn$_invoke$arity$variadic = G__8401__delegate;
return G__8401;
})()
);
tiltontec.util.core.flz = (function tiltontec$util$core$flz(x){
if(cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,x),cljs.core.LazySeq)){
return cljs.core.vec.call(null,cljs.core.doall.call(null,x));
} else {
return x;
}
});
tiltontec.util.core.wtrx_test = (function tiltontec$util$core$wtrx_test(n){
return tiltontec.util.base.call_wtrx.call(null,(function (){
if((n > (0))){
return tiltontec.util.core.wtrx_test.call(null,(n - (1)));
} else {
return null;
}
}),(0),(10),cljs.core._conj.call(null,(function (){var x__7617__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),"test"));
});
tiltontec.util.core.slot_users = (function tiltontec$util$core$slot_users(me,slot){
return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"slotq","slotq",1456717980),cljs.core.map.call(null,cljs.core.deref,new cljs.core.Keyword(null,"callers","callers",-1991542784).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,slot.call(null,cljs.core.deref.call(null,me))),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.slot_useds = (function tiltontec$util$core$slot_useds(me,slot){
return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"slot","slot",240229571),cljs.core.map.call(null,cljs.core.deref,new cljs.core.Keyword(null,"useds","useds",621350967).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,slot.call(null,cljs.core.deref.call(null,me))),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.make_fifo_queue = (function tiltontec$util$core$make_fifo_queue(){
return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
});
tiltontec.util.core.fifo_data = (function tiltontec$util$core$fifo_data(q){
return cljs.core.deref.call(null,q);
});
tiltontec.util.core.fifo_clear = (function tiltontec$util$core$fifo_clear(q){
return cljs.core.swap_BANG_.call(null,q,cljs.core.empty);
});
tiltontec.util.core.fifo_empty_QMARK_ = (function tiltontec$util$core$fifo_empty_QMARK_(q){
return cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,q));
});
tiltontec.util.core.fifo_peek = (function tiltontec$util$core$fifo_peek(q){
return cljs.core.first.call(null,cljs.core.deref.call(null,q));
});
tiltontec.util.core.fifo_add = (function tiltontec$util$core$fifo_add(q,new$){
return cljs.core.swap_BANG_.call(null,q,cljs.core.conj,new$);
});
tiltontec.util.core.fifo_pop = (function tiltontec$util$core$fifo_pop(q){
if(cljs.core.truth_(tiltontec.util.core.fifo_empty_QMARK_.call(null,q))){
return null;
} else {
var result__8353__auto__ = cljs.core.first.call(null,cljs.core.deref.call(null,q));
cljs.core.swap_BANG_.call(null,q,cljs.core.subvec,(1));

return result__8353__auto__;
}
});
tiltontec.util.core.ensure_vec = (function tiltontec$util$core$ensure_vec(x){
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
tiltontec.util.core.pln = (function tiltontec$util$core$pln(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8405 = arguments.length;
var i__7900__auto___8406 = (0);
while(true){
if((i__7900__auto___8406 < len__7899__auto___8405)){
args__7906__auto__.push((arguments[i__7900__auto___8406]));

var G__8407 = (i__7900__auto___8406 + (1));
i__7900__auto___8406 = G__8407;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((0) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((0)),(0),null)):null);
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(argseq__7907__auto__);
});

tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic = (function (r){
return cljs.core.println.call(null,cljs.core.pr_str.call(null,r));
});

tiltontec.util.core.pln.cljs$lang$maxFixedArity = (0);

tiltontec.util.core.pln.cljs$lang$applyTo = (function (seq8404){
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8404));
});

tiltontec.util.core._STAR_plnk_keys_STAR_ = cljs.core.PersistentVector.EMPTY;
tiltontec.util.core.plnk = (function tiltontec$util$core$plnk(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8410 = arguments.length;
var i__7900__auto___8411 = (0);
while(true){
if((i__7900__auto___8411 < len__7899__auto___8410)){
args__7906__auto__.push((arguments[i__7900__auto___8411]));

var G__8412 = (i__7900__auto___8411 + (1));
i__7900__auto___8411 = G__8412;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return tiltontec.util.core.plnk.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

tiltontec.util.core.plnk.cljs$core$IFn$_invoke$arity$variadic = (function (k,r){
if(typeof cljs.core.first.call(null,r) === 'string'){
return cljs.core.println.call(null,cljs.core.pr_str.call(null,r));
} else {
if(cljs.core.truth_((function (){var or__6774__auto__ = cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"force","force",781957286));
if(or__6774__auto__){
return or__6774__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.util.core._STAR_plnk_keys_STAR_], null));
}
})())){
return cljs.core.println.call(null,cljs.core.pr_str.call(null,r));
} else {
return null;
}
}
});

tiltontec.util.core.plnk.cljs$lang$maxFixedArity = (1);

tiltontec.util.core.plnk.cljs$lang$applyTo = (function (seq8408){
var G__8409 = cljs.core.first.call(null,seq8408);
var seq8408__$1 = cljs.core.next.call(null,seq8408);
return tiltontec.util.core.plnk.cljs$core$IFn$_invoke$arity$variadic(G__8409,seq8408__$1);
});

tiltontec.util.core.now = (function tiltontec$util$core$now(){
return (new Date()).getTime();
});
tiltontec.util.core.map_to_json = (function tiltontec$util$core$map_to_json(map){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),map);
});
tiltontec.util.core.json_to_map = (function tiltontec$util$core$json_to_map(json){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),json);
});
tiltontec.util.core.counts = cljs.core.atom.call(null,null);
tiltontec.util.core.counts_reset = (function tiltontec$util$core$counts_reset(){
return cljs.core.reset_BANG_.call(null,tiltontec.util.core.counts,null);
});
/**
 * Count it
 */
tiltontec.util.core.countit = (function tiltontec$util$core$countit(var_args){
var G__8414 = arguments.length;
switch (G__8414) {
case 1:
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$1 = (function (path){
return tiltontec.util.core.countit.call(null,path,(1));
});

tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2 = (function (path,n){
if(cljs.core.sequential_QMARK_.call(null,path)){
if(cljs.core.counted_QMARK_.call(null,n)){
return tiltontec.util.core.countit.call(null,path,cljs.core.count.call(null,n));
} else {
return cljs.core.swap_BANG_.call(null,tiltontec.util.core.counts,cljs.core.update_in,path,cljs.core.fnil.call(null,cljs.core._PLUS_,(0)),n);
}
} else {
return tiltontec.util.core.countit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),n);
}
});

tiltontec.util.core.countit.cljs$lang$maxFixedArity = 2;

tiltontec.util.core.counts_reset.call(null);

tiltontec.util.core.countit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),(7));

tiltontec.util.core.countit.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"b","b",1482224470)),new cljs.core.Keyword(null,"a","a",-2123407586)),(3));

tiltontec.util.core.countit.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(2));

tiltontec.util.core.countit.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));

//# sourceMappingURL=core.js.map