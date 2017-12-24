// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.observer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.macros');
tiltontec.cell.observer.type_cljc = (function tiltontec$cell$observer$type_cljc(x){
var or__6774__auto__ = (function (){var temp__4657__auto__ = cljs.core.meta(x);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.type(x);
}
});
if(typeof tiltontec.cell.observer.observe_by_type !== 'undefined'){
} else {
tiltontec.cell.observer.observe_by_type = (function (){var method_table__7708__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.observer","observe-by-type"),((function (method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__){
return (function (slot_name,me,new_val,old_val,c){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.observer.type_cljc(me)], null);
});})(method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__))
,cljs.core.cst$kw$default,hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (slot,me,new_val,old_val,c){
return null;
}));
if(typeof tiltontec.cell.observer.observe !== 'undefined'){
} else {
tiltontec.cell.observer.observe = (function (){var method_table__7708__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.observer","observe"),((function (method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__){
return (function (slot_name,me,new_val,old_val,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_name,tiltontec.cell.observer.type_cljc(me)], null);
});})(method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__))
,cljs.core.cst$kw$default,hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (slot,me,new_val,old_val,c){
var temp__4655__auto__ = cljs.core.deref(tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_);
if(cljs.core.truth_(temp__4655__auto__)){
var obs = temp__4655__auto__;
return (obs.cljs$core$IFn$_invoke$arity$5 ? obs.cljs$core$IFn$_invoke$arity$5(slot,me,new_val,old_val,c) : obs.call(null,slot,me,new_val,old_val,c));
} else {
return (tiltontec.cell.observer.observe_by_type.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe_by_type.cljs$core$IFn$_invoke$arity$5(slot,me,new_val,old_val,c) : tiltontec.cell.observer.observe_by_type.call(null,slot,me,new_val,old_val,c));
}
}));
var ret__7939__auto___14175 = (function (){
tiltontec.cell.observer.defobserver = (function tiltontec$cell$observer$defobserver(var_args){
var args__7906__auto__ = [];
var len__7899__auto___14176 = arguments.length;
var i__7900__auto___14177 = (0);
while(true){
if((i__7900__auto___14177 < len__7899__auto___14176)){
args__7906__auto__.push((arguments[i__7900__auto___14177]));

var G__14178 = (i__7900__auto___14177 + (1));
i__7900__auto___14177 = G__14178;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((5) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((5)),(0),null)):null);
return tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7907__auto__);
});

tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,slot,types,params,body){
if((slot instanceof cljs.core.Keyword)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("defobserver> slot should be a keyword."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(keyword? slot)")].join('')));
}

var ftypes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(types,cljs.core.take_last(((1) - cljs.core.count(types)),cljs.core.list(cljs.core.cst$kw$tiltontec$cell$base_SLASH_model)));
var fparams = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(params,cljs.core.take_last(((4) - cljs.core.count(params)),cljs.core.list(cljs.core.cst$sym$me,cljs.core.cst$sym$new_DASH_value,cljs.core.cst$sym$old_DASH_value,cljs.core.cst$sym$c)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defmethod),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$observer_SLASH_observe),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7617__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),ftypes))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$slot),fparams))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),body], 0))));
});

tiltontec.cell.observer.defobserver.cljs$lang$maxFixedArity = (5);

tiltontec.cell.observer.defobserver.cljs$lang$applyTo = (function (seq14169){
var G__14170 = cljs.core.first(seq14169);
var seq14169__$1 = cljs.core.next(seq14169);
var G__14171 = cljs.core.first(seq14169__$1);
var seq14169__$2 = cljs.core.next(seq14169__$1);
var G__14172 = cljs.core.first(seq14169__$2);
var seq14169__$3 = cljs.core.next(seq14169__$2);
var G__14173 = cljs.core.first(seq14169__$3);
var seq14169__$4 = cljs.core.next(seq14169__$3);
var G__14174 = cljs.core.first(seq14169__$4);
var seq14169__$5 = cljs.core.next(seq14169__$4);
return tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic(G__14170,G__14171,G__14172,G__14173,G__14174,seq14169__$5);
});

return null;
})()
;
tiltontec.cell.observer.defobserver.cljs$lang$macro = true;

var ret__7939__auto___14182 = (function (){
/**
 * Shortcut definer for cell-specific observers.
 * body can be multiple sexprs with access to
 * call parameters: slot, me, new, old, and c.
 */
tiltontec.cell.observer.fn_obs = (function tiltontec$cell$observer$fn_obs(var_args){
var args__7906__auto__ = [];
var len__7899__auto___14183 = arguments.length;
var i__7900__auto___14184 = (0);
while(true){
if((i__7900__auto___14184 < len__7899__auto___14183)){
args__7906__auto__.push((arguments[i__7900__auto___14184]));

var G__14185 = (i__7900__auto___14184 + (1));
i__7900__auto___14184 = G__14185;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$slot),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$me),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$old),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.cell.observer.fn_obs.cljs$lang$maxFixedArity = (2);

tiltontec.cell.observer.fn_obs.cljs$lang$applyTo = (function (seq14179){
var G__14180 = cljs.core.first(seq14179);
var seq14179__$1 = cljs.core.next(seq14179);
var G__14181 = cljs.core.first(seq14179__$1);
var seq14179__$2 = cljs.core.next(seq14179__$1);
return tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic(G__14180,G__14181,seq14179__$2);
});

return null;
})()
;
tiltontec.cell.observer.fn_obs.cljs$lang$macro = true;

tiltontec.cell.observer.c_observe = (function tiltontec$cell$observer$c_observe(var_args){
var G__14187 = arguments.length;
switch (G__14187) {
case 2:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2 = (function (c,why){
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,tiltontec.cell.base.unbound,why);
});

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3 = (function (c,prior_value,why){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_observed,c], null),cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));

var G__14189 = tiltontec.cell.base.c_slot(c);
var G__14190 = tiltontec.cell.base.c_model(c);
var G__14191 = tiltontec.cell.base.c_value(c);
var G__14192 = prior_value;
var G__14193 = c;
var fexpr__14188 = (function (){var or__6774__auto__ = cljs.core.cst$kw$obs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return tiltontec.cell.observer.observe;
}
})();
return (fexpr__14188.cljs$core$IFn$_invoke$arity$5 ? fexpr__14188.cljs$core$IFn$_invoke$arity$5(G__14189,G__14190,G__14191,G__14192,G__14193) : fexpr__14188.call(null,G__14189,G__14190,G__14191,G__14192,G__14193));
});

tiltontec.cell.observer.c_observe.cljs$lang$maxFixedArity = 3;

