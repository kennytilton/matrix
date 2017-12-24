// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.base');
goog.require('cljs.test');
goog.require('tiltontec.util.core');
tiltontec.cell.base._PLUS_pulse_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
tiltontec.cell.base.cells_init = (function tiltontec$cell$base$cells_init(){
return cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_pulse_PLUS_,(0));
});
tiltontec.cell.base._STAR_causation_STAR_ = cljs.core.List.EMPTY;
tiltontec.cell.base._STAR_call_stack_STAR_ = null;
/**
 * *depender* let's us differentiate between the call stack and
 * and dependency. The problem with overloading *call-stack* with both roles
 * is that we miss cyclic reentrance when we use without-c-dependency in a
 * rule to get once behavior or just when fm-traversing to find someone
 */
tiltontec.cell.base._STAR_depender_STAR_ = null;
tiltontec.cell.base._STAR_defer_changes_STAR_ = false;
tiltontec.cell.base._PLUS_client_q_handler_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(typeof tiltontec.cell.base.unbound !== 'undefined'){
} else {
tiltontec.cell.base.unbound = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("unbound-cell-value");
}
if(typeof tiltontec.cell.base.uncurrent !== 'undefined'){
} else {
tiltontec.cell.base.uncurrent = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("uncurrent-formulaic-value");
}
tiltontec.cell.base._STAR_not_to_be_STAR_ = false;
tiltontec.cell.base._STAR_unfinished_business_STAR_ = null;
tiltontec.cell.base._STAR_within_integrity_STAR_ = false;
tiltontec.cell.base._STAR_finbiz_id_STAR_ = (0);
tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (0);
tiltontec.cell.base._PLUS_c_debug_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tiltontec.cell.base._PLUS_stop_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var ret__7939__auto___13899 = tiltontec.cell.base.pcell = (function tiltontec$cell$base$pcell(_AMPERSAND_form,_AMPERSAND_env,tag,c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_println),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$pcell),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = tag;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_slot),(function (){var x__7617__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_state),(function (){var x__7617__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});
tiltontec.cell.base.pcell.cljs$lang$macro = true;

tiltontec.cell.base.cells_reset = (function tiltontec$cell$base$cells_reset(var_args){
var G__13901 = arguments.length;
switch (G__13901) {
case 0:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1 = (function (options){
cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_c_debug_PLUS_,cljs.core.cst$kw$debug.cljs$core$IFn$_invoke$arity$2(options,false));

cljs.core.reset_BANG_(cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_),(0));

return cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_client_q_handler_PLUS_,cljs.core.cst$kw$client_DASH_queue_DASH_handler.cljs$core$IFn$_invoke$arity$1(options));
});

tiltontec.cell.base.cells_reset.cljs$lang$maxFixedArity = 1;

var ret__7939__auto___13906 = (function (){
tiltontec.cell.base.without_c_dependency = (function tiltontec$cell$base$without_c_dependency(var_args){
var args__7906__auto__ = [];
var len__7899__auto___13907 = arguments.length;
var i__7900__auto___13908 = (0);
while(true){
if((i__7900__auto___13908 < len__7899__auto___13907)){
args__7906__auto__.push((arguments[i__7900__auto___13908]));

var G__13909 = (i__7900__auto___13908 + (1));
i__7900__auto___13908 = G__13909;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_depender_STAR_),cljs.core._conj(cljs.core.List.EMPTY,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.cell.base.without_c_dependency.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.without_c_dependency.cljs$lang$applyTo = (function (seq13903){
var G__13904 = cljs.core.first(seq13903);
var seq13903__$1 = cljs.core.next(seq13903);
var G__13905 = cljs.core.first(seq13903__$1);
var seq13903__$2 = cljs.core.next(seq13903__$1);
return tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic(G__13904,G__13905,seq13903__$2);
});

return null;
})()
;
tiltontec.cell.base.without_c_dependency.cljs$lang$macro = true;

var ret__7939__auto___13913 = (function (){
tiltontec.cell.base.cpr = (function tiltontec$cell$base$cpr(var_args){
var args__7906__auto__ = [];
var len__7899__auto___13914 = arguments.length;
var i__7900__auto___13915 = (0);
while(true){
if((i__7900__auto___13915 < len__7899__auto___13914)){
args__7906__auto__.push((arguments[i__7900__auto___13915]));

var G__13916 = (i__7900__auto___13915 + (1));
i__7900__auto___13915 = G__13916;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.cpr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.base.cpr.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,r){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_pln),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__PLUS_pulse_PLUS_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.base.cpr.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.cpr.cljs$lang$applyTo = (function (seq13910){
var G__13911 = cljs.core.first(seq13910);
var seq13910__$1 = cljs.core.next(seq13910);
var G__13912 = cljs.core.first(seq13910__$1);
var seq13910__$2 = cljs.core.next(seq13910__$1);
return tiltontec.cell.base.cpr.cljs$core$IFn$_invoke$arity$variadic(G__13911,G__13912,seq13910__$2);
});

return null;
})()
;
tiltontec.cell.base.cpr.cljs$lang$macro = true;

tiltontec.cell.base._PLUS_cause = (function tiltontec$cell$base$_PLUS_cause(){
return cljs.core.first(tiltontec.cell.base._STAR_causation_STAR_);
});
tiltontec.cell.base.c_stopper = (function tiltontec$cell$base$c_stopper(why){
return cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_stop_PLUS_,why);
});
tiltontec.cell.base._PLUS_c_stopper_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_stopper);
tiltontec.cell.base.c_stop = (function tiltontec$cell$base$c_stop(var_args){
var G__13918 = arguments.length;
switch (G__13918) {
case 0:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1(true);
});

tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1 = (function (why){
var fexpr__13919 = cljs.core.deref(tiltontec.cell.base._PLUS_c_stopper_PLUS_);
return (fexpr__13919.cljs$core$IFn$_invoke$arity$1 ? fexpr__13919.cljs$core$IFn$_invoke$arity$1(why) : fexpr__13919.call(null,why));
});

tiltontec.cell.base.c_stop.cljs$lang$maxFixedArity = 1;

tiltontec.cell.base.c_stopped = (function tiltontec$cell$base$c_stopped(){
return cljs.core.deref(tiltontec.cell.base._PLUS_stop_PLUS_);
});
var ret__7939__auto___13924 = (function (){
tiltontec.cell.base.un_stopped = (function tiltontec$cell$base$un_stopped(var_args){
var args__7906__auto__ = [];
var len__7899__auto___13925 = arguments.length;
var i__7900__auto___13926 = (0);
while(true){
if((i__7900__auto___13926 < len__7899__auto___13925)){
args__7906__auto__.push((arguments[i__7900__auto___13926]));

var G__13927 = (i__7900__auto___13926 + (1));
i__7900__auto___13926 = G__13927;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__PLUS_stop_PLUS_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.cell.base.un_stopped.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.un_stopped.cljs$lang$applyTo = (function (seq13921){
var G__13922 = cljs.core.first(seq13921);
var seq13921__$1 = cljs.core.next(seq13921);
var G__13923 = cljs.core.first(seq13921__$1);
var seq13921__$2 = cljs.core.next(seq13921__$1);
return tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic(G__13922,G__13923,seq13921__$2);
});

return null;
})()
;
tiltontec.cell.base.un_stopped.cljs$lang$macro = true;

tiltontec.cell.base.ustack$ = (function tiltontec$cell$base$ustack$(tag){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ustack> "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
}),tiltontec.cell.base._STAR_call_stack_STAR_)))].join('');
});
tiltontec.cell.base.c_assert = (function tiltontec$cell$base$c_assert(var_args){
var G__13932 = arguments.length;
switch (G__13932) {
case 1:
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__7918__auto__ = [];
var len__7899__auto___13934 = arguments.length;
var i__7900__auto___13935 = (0);
while(true){
if((i__7900__auto___13935 < len__7899__auto___13934)){
args_arr__7918__auto__.push((arguments[i__7900__auto___13935]));

var G__13936 = (i__7900__auto___13935 + (1));
i__7900__auto___13935 = G__13936;
continue;
} else {
}
break;
}

var argseq__7919__auto__ = (new cljs.core.IndexedSeq(args_arr__7918__auto__.slice((2)),(0),null));
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7919__auto__);

}
});

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1 = (function (assertion){
if(cljs.core.truth_(assertion)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["c-assert anon failed"], 0));
}
});

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic = (function (assertion,fmt$,fmt_args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
if(cljs.core.truth_(assertion)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-assert> "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_args)].join('')], 0));
}
}
});

tiltontec.cell.base.c_assert.cljs$lang$applyTo = (function (seq13929){
var G__13930 = cljs.core.first(seq13929);
var seq13929__$1 = cljs.core.next(seq13929);
var G__13931 = cljs.core.first(seq13929__$1);
var seq13929__$2 = cljs.core.next(seq13929__$1);
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic(G__13930,G__13931,seq13929__$2);
});

tiltontec.cell.base.c_assert.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.c_break = (function tiltontec$cell$base$c_break(var_args){
var args__7906__auto__ = [];
var len__7899__auto___13938 = arguments.length;
var i__7900__auto___13939 = (0);
while(true){
if((i__7900__auto___13939 < len__7899__auto___13938)){
args__7906__auto__.push((arguments[i__7900__auto___13939]));

var G__13940 = (i__7900__auto___13939 + (1));
i__7900__auto___13939 = G__13940;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((0) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic(argseq__7907__auto__);
});

tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('')], 0));
}
});

tiltontec.cell.base.c_break.cljs$lang$maxFixedArity = (0);

tiltontec.cell.base.c_break.cljs$lang$applyTo = (function (seq13937){
return tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13937));
});

tiltontec.cell.base.c_warn = (function tiltontec$cell$base$c_warn(var_args){
var args__7906__auto__ = [];
var len__7899__auto___13942 = arguments.length;
var i__7900__auto___13943 = (0);
while(true){
if((i__7900__auto___13943 < len__7899__auto___13942)){
args__7906__auto__.push((arguments[i__7900__auto___13943]));

var G__13944 = (i__7900__auto___13943 + (1));
i__7900__auto___13943 = G__13944;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((0) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__7907__auto__);
});

tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"WARNING: ",args)], 0));
}
});

tiltontec.cell.base.c_warn.cljs$lang$maxFixedArity = (0);

tiltontec.cell.base.c_warn.cljs$lang$applyTo = (function (seq13941){
return tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13941));
});

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tiltontec$cell$base_SLASH_model,cljs.core.cst$kw$tiltontec$cell$base_SLASH_object);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell,cljs.core.cst$kw$tiltontec$cell$base_SLASH_object);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell);
tiltontec.cell.base.ia_type = (function tiltontec$cell$base$ia_type(it){
if((it instanceof cljs.core.Atom)){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(it));
} else {
return cljs.core.type(it);

}
});
tiltontec.cell.base.ia_type_QMARK_ = (function tiltontec$cell$base$ia_type_QMARK_(it,typ){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.ia_type(it),typ);
});
tiltontec.cell.base.c_formula_QMARK_ = (function tiltontec$cell$base$c_formula_QMARK_(c){
return tiltontec.cell.base.ia_type_QMARK_(c,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula);
});
tiltontec.cell.base.c_ref_QMARK_ = (function tiltontec$cell$base$c_ref_QMARK_(x){
return tiltontec.cell.base.ia_type_QMARK_(x,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell);
});
tiltontec.cell.base.c_me = (function tiltontec$cell$base$c_me(ref){
return cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_slot = (function tiltontec$cell$base$c_slot(ref){
return cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_state = (function tiltontec$cell$base$c_state(ref){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_input_QMARK_ = (function tiltontec$cell$base$c_input_QMARK_(ref){
return cljs.core.cst$kw$input_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_rule = (function tiltontec$cell$base$c_rule(ref){
return cljs.core.cst$kw$rule.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_pulse = (function tiltontec$cell$base$c_pulse(ref){
return cljs.core.cst$kw$pulse.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_pulse_last_changed = (function tiltontec$cell$base$c_pulse_last_changed(ref){
return cljs.core.cst$kw$pulse_DASH_last_DASH_changed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_pulse_observed = (function tiltontec$cell$base$c_pulse_observed(ref){
return cljs.core.cst$kw$pulse_DASH_observed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_useds = (function tiltontec$cell$base$c_useds(ref){
return cljs.core.cst$kw$useds.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_users = (function tiltontec$cell$base$c_users(ref){
return cljs.core.cst$kw$users.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_callers = (function tiltontec$cell$base$c_callers(ref){
return cljs.core.cst$kw$callers.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_optimize = (function tiltontec$cell$base$c_optimize(ref){
return cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_ephemeral_QMARK_ = (function tiltontec$cell$base$c_ephemeral_QMARK_(ref){
return cljs.core.cst$kw$ephemeral_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_lazy = (function tiltontec$cell$base$c_lazy(ref){
return cljs.core.cst$kw$lazy.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_synapses = (function tiltontec$cell$base$c_synapses(ref){
return cljs.core.cst$kw$synapses.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_synaptic_QMARK_ = (function tiltontec$cell$base$c_synaptic_QMARK_(ref){
return cljs.core.cst$kw$synaptic_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});
tiltontec.cell.base.c_value = (function tiltontec$cell$base$c_value(c){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (any-ref? c)"));
}

if(cljs.core.truth_((function (){var and__6762__auto__ = tiltontec.cell.base.c_ref_QMARK_(c);
if(cljs.core.truth_(and__6762__auto__)){
return cljs.core.map_QMARK_(cljs.core.deref(c));
} else {
return and__6762__auto__;
}
})())){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
} else {
return cljs.core.deref(c);

}
});
tiltontec.cell.base.c_optimized_away_QMARK_ = (function tiltontec$cell$base$c_optimized_away_QMARK_(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
return (!(cljs.core.map_QMARK_(cljs.core.deref(c)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimized_DASH_away,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c))));
} else {
return true;

}
});
tiltontec.cell.base.c_model = (function tiltontec$cell$base$c_model(rc){
return cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
});
tiltontec.cell.base.c_md_name = (function tiltontec$cell$base$c_md_name(c){
var temp__4655__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__4655__auto__)){
var md = temp__4655__auto__;
var or__6774__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(md));
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return "anon";
}
} else {
return "no-md";
}
});
tiltontec.cell.base.c_value_state = (function tiltontec$cell$base$c_value_state(rc){
var v = tiltontec.cell.base.c_value(rc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,tiltontec.cell.base.unbound)){
return cljs.core.cst$kw$unbound;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,tiltontec.cell.base.uncurrent)){
return cljs.core.cst$kw$uncurrent;
} else {
return cljs.core.cst$kw$valid;

}
}
});
tiltontec.cell.base.c_unbound_QMARK_ = (function tiltontec$cell$base$c_unbound_QMARK_(rc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unbound,tiltontec.cell.base.c_value_state(rc));
});
tiltontec.cell.base.c_valid_QMARK_ = (function tiltontec$cell$base$c_valid_QMARK_(rc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$valid,tiltontec.cell.base.c_value_state(rc));
});
tiltontec.cell.base.caller_ensure = (function tiltontec$cell$base$caller_ensure(used,new_caller){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(used,cljs.core.assoc,cljs.core.cst$kw$callers,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),new_caller));
});
tiltontec.cell.base.caller_drop = (function tiltontec$cell$base$caller_drop(used,caller){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(used,cljs.core.assoc,cljs.core.cst$kw$callers,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),caller));
});
tiltontec.cell.base.unlink_from_callers = (function tiltontec$cell$base$unlink_from_callers(c){
var iter__7563__auto___13949 = (function tiltontec$cell$base$unlink_from_callers_$_iter__13945(s__13946){
return (new cljs.core.LazySeq(null,(function (){
var s__13946__$1 = s__13946;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13946__$1);
if(temp__4657__auto__){
var s__13946__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13946__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__13946__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__13948 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__13947 = (0);
while(true){
if((i__13947 < size__7562__auto__)){
var caller = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__13947);
cljs.core.chunk_append(b__13948,tiltontec.cell.base.caller_drop(c,caller));

var G__13950 = (i__13947 + (1));
i__13947 = G__13950;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13948),tiltontec$cell$base$unlink_from_callers_$_iter__13945(cljs.core.chunk_rest(s__13946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13948),null);
}
} else {
var caller = cljs.core.first(s__13946__$2);
return cljs.core.cons(tiltontec.cell.base.caller_drop(c,caller),tiltontec$cell$base$unlink_from_callers_$_iter__13945(cljs.core.rest(s__13946__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__7563__auto___13949(tiltontec.cell.base.c_callers(c));

return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callers,c], null),null);
});
tiltontec.cell.base.c_slots = (function tiltontec$cell$base$c_slots(c,k){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_slot,(function (){var G__13951 = cljs.core.deref(c);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__13951) : k.call(null,G__13951));
})()));
});
tiltontec.cell.base.md_ref_QMARK_ = (function tiltontec$cell$base$md_ref_QMARK_(x){
return tiltontec.util.core.any_ref_QMARK_(x);
});
if(typeof tiltontec.cell.base.mdead_QMARK_ !== 'undefined'){
} else {
tiltontec.cell.base.mdead_QMARK_ = (function (){var method_table__7708__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.base","mdead?"),((function (method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__){
return (function (me){
if(cljs.core.truth_((function (){var or__6774__auto__ = (me == null);
if(or__6774__auto__){
return or__6774__auto__;
} else {
return tiltontec.cell.base.md_ref_QMARK_(me);
}
})())){
} else {
throw (new Error("Assert failed: (or (nil? me) (md-ref? me))"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type((cljs.core.truth_(me)?cljs.core.deref(me):null))], null);
});})(method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__))
,cljs.core.cst$kw$default,hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
tiltontec.cell.base.mdead_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
var temp__4655__auto__ = cljs.core.meta(me);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dead,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(m));
} else {
return false;
}
}));
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.base.md_slot_owning_QMARK_ = (function tiltontec$cell$base$md_slot_owning_QMARK_(class_name,slot_name){
return false;
});
