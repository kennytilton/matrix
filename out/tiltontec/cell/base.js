// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.cell.base');
goog.require('cljs.core');
goog.require('tiltontec.util.base');
goog.require('cljs.test');
goog.require('tiltontec.util.core');
tiltontec.cell.base._PLUS_pulse_PLUS_ = cljs.core.atom.call(null,(0));
tiltontec.cell.base.cells_init = (function tiltontec$cell$base$cells_init(){
return cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_,(0));
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
tiltontec.cell.base._PLUS_client_q_handler_PLUS_ = cljs.core.atom.call(null,null);
if(typeof tiltontec.cell.base.unbound !== 'undefined'){
} else {
tiltontec.cell.base.unbound = cljs.core.gensym.call(null,"unbound-cell-value");
}
if(typeof tiltontec.cell.base.uncurrent !== 'undefined'){
} else {
tiltontec.cell.base.uncurrent = cljs.core.gensym.call(null,"uncurrent-formulaic-value");
}
tiltontec.cell.base._STAR_not_to_be_STAR_ = false;
tiltontec.cell.base._STAR_unfinished_business_STAR_ = null;
tiltontec.cell.base._STAR_within_integrity_STAR_ = false;
tiltontec.cell.base._STAR_finbiz_id_STAR_ = (0);
tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (0);
tiltontec.cell.base._PLUS_c_debug_PLUS_ = cljs.core.atom.call(null,false);
tiltontec.cell.base._PLUS_stop_PLUS_ = cljs.core.atom.call(null,false);
var ret__7939__auto___8674 = tiltontec.cell.base.pcell = (function tiltontec$cell$base$pcell(_AMPERSAND_form,_AMPERSAND_env,tag,c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pcell","pcell",-240144130)),(function (){var x__7617__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),(function (){var x__7617__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-state","tiltontec.cell.base/c-state",1205895034,null)),(function (){var x__7617__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});
tiltontec.cell.base.pcell.cljs$lang$macro = true;

tiltontec.cell.base.cells_reset = (function tiltontec$cell$base$cells_reset(var_args){
var G__8676 = arguments.length;
switch (G__8676) {
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
return tiltontec.cell.base.cells_reset.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1 = (function (options){
cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_c_debug_PLUS_,new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$2(options,false));

cljs.core.reset_BANG_.call(null,cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_),(0));

return cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_client_q_handler_PLUS_,new cljs.core.Keyword(null,"client-queue-handler","client-queue-handler",-817174181).cljs$core$IFn$_invoke$arity$1(options));
});

tiltontec.cell.base.cells_reset.cljs$lang$maxFixedArity = 1;

var ret__7939__auto___8681 = (function (){
tiltontec.cell.base.without_c_dependency = (function tiltontec$cell$base$without_c_dependency(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8682 = arguments.length;
var i__7900__auto___8683 = (0);
while(true){
if((i__7900__auto___8683 < len__7899__auto___8682)){
args__7906__auto__.push((arguments[i__7900__auto___8683]));

var G__8684 = (i__7900__auto___8683 + (1));
i__7900__auto___8683 = G__8684;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),body)));
});

tiltontec.cell.base.without_c_dependency.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.without_c_dependency.cljs$lang$applyTo = (function (seq8678){
var G__8679 = cljs.core.first.call(null,seq8678);
var seq8678__$1 = cljs.core.next.call(null,seq8678);
var G__8680 = cljs.core.first.call(null,seq8678__$1);
var seq8678__$2 = cljs.core.next.call(null,seq8678__$1);
return tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic(G__8679,G__8680,seq8678__$2);
});

return null;
})()
;
tiltontec.cell.base.without_c_dependency.cljs$lang$macro = true;

var ret__7939__auto___8688 = (function (){
tiltontec.cell.base.cpr = (function tiltontec$cell$base$cpr(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8689 = arguments.length;
var i__7900__auto___8690 = (0);
while(true){
if((i__7900__auto___8690 < len__7899__auto___8689)){
args__7906__auto__.push((arguments[i__7900__auto___8690]));

var G__8691 = (i__7900__auto___8690 + (1));
i__7900__auto___8690 = G__8691;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.cpr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.base.cpr.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,r){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","pln","tiltontec.cell.base/pln",-1986105644,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","+pulse+","tiltontec.cell.base/+pulse+",-1212422190,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),r)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.base.cpr.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.cpr.cljs$lang$applyTo = (function (seq8685){
var G__8686 = cljs.core.first.call(null,seq8685);
var seq8685__$1 = cljs.core.next.call(null,seq8685);
var G__8687 = cljs.core.first.call(null,seq8685__$1);
var seq8685__$2 = cljs.core.next.call(null,seq8685__$1);
return tiltontec.cell.base.cpr.cljs$core$IFn$_invoke$arity$variadic(G__8686,G__8687,seq8685__$2);
});

return null;
})()
;
tiltontec.cell.base.cpr.cljs$lang$macro = true;

tiltontec.cell.base._PLUS_cause = (function tiltontec$cell$base$_PLUS_cause(){
return cljs.core.first.call(null,tiltontec.cell.base._STAR_causation_STAR_);
});
tiltontec.cell.base.c_stopper = (function tiltontec$cell$base$c_stopper(why){
return cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_stop_PLUS_,why);
});
tiltontec.cell.base._PLUS_c_stopper_PLUS_ = cljs.core.atom.call(null,tiltontec.cell.base.c_stopper);
tiltontec.cell.base.c_stop = (function tiltontec$cell$base$c_stop(var_args){
var G__8693 = arguments.length;
switch (G__8693) {
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
return tiltontec.cell.base.c_stop.call(null,true);
});

tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1 = (function (why){
return cljs.core.deref.call(null,tiltontec.cell.base._PLUS_c_stopper_PLUS_).call(null,why);
});

tiltontec.cell.base.c_stop.cljs$lang$maxFixedArity = 1;

tiltontec.cell.base.c_stopped = (function tiltontec$cell$base$c_stopped(){
return cljs.core.deref.call(null,tiltontec.cell.base._PLUS_stop_PLUS_);
});
var ret__7939__auto___8698 = (function (){
tiltontec.cell.base.un_stopped = (function tiltontec$cell$base$un_stopped(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8699 = arguments.length;
var i__7900__auto___8700 = (0);
while(true){
if((i__7900__auto___8700 < len__7899__auto___8699)){
args__7906__auto__.push((arguments[i__7900__auto___8700]));

var G__8701 = (i__7900__auto___8700 + (1));
i__7900__auto___8700 = G__8701;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","+stop+","tiltontec.cell.base/+stop+",1421569483,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),body)));
});

tiltontec.cell.base.un_stopped.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.un_stopped.cljs$lang$applyTo = (function (seq8695){
var G__8696 = cljs.core.first.call(null,seq8695);
var seq8695__$1 = cljs.core.next.call(null,seq8695);
var G__8697 = cljs.core.first.call(null,seq8695__$1);
var seq8695__$2 = cljs.core.next.call(null,seq8695__$1);
return tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic(G__8696,G__8697,seq8695__$2);
});

return null;
})()
;
tiltontec.cell.base.un_stopped.cljs$lang$macro = true;

tiltontec.cell.base.ustack$ = (function tiltontec$cell$base$ustack$(tag){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ustack> "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,cljs.core.map.call(null,(function (c){
return new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
}),tiltontec.cell.base._STAR_call_stack_STAR_)))].join('');
});
tiltontec.cell.base.c_assert = (function tiltontec$cell$base$c_assert(var_args){
var G__8706 = arguments.length;
switch (G__8706) {
case 1:
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__7918__auto__ = [];
var len__7899__auto___8708 = arguments.length;
var i__7900__auto___8709 = (0);
while(true){
if((i__7900__auto___8709 < len__7899__auto___8708)){
args_arr__7918__auto__.push((arguments[i__7900__auto___8709]));

var G__8710 = (i__7900__auto___8709 + (1));
i__7900__auto___8709 = G__8710;
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
return cljs.core.println.call(null,"c-assert anon failed");
}
});

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic = (function (assertion,fmt$,fmt_args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
if(cljs.core.truth_(assertion)){
return null;
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-assert> "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_args)].join(''));
}
}
});

tiltontec.cell.base.c_assert.cljs$lang$applyTo = (function (seq8703){
var G__8704 = cljs.core.first.call(null,seq8703);
var seq8703__$1 = cljs.core.next.call(null,seq8703);
var G__8705 = cljs.core.first.call(null,seq8703__$1);
var seq8703__$2 = cljs.core.next.call(null,seq8703__$1);
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic(G__8704,G__8705,seq8703__$2);
});

tiltontec.cell.base.c_assert.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.c_break = (function tiltontec$cell$base$c_break(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8712 = arguments.length;
var i__7900__auto___8713 = (0);
while(true){
if((i__7900__auto___8713 < len__7899__auto___8712)){
args__7906__auto__.push((arguments[i__7900__auto___8713]));

var G__8714 = (i__7900__auto___8713 + (1));
i__7900__auto___8713 = G__8714;
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
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join(''));
}
});

tiltontec.cell.base.c_break.cljs$lang$maxFixedArity = (0);

tiltontec.cell.base.c_break.cljs$lang$applyTo = (function (seq8711){
return tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8711));
});

tiltontec.cell.base.c_warn = (function tiltontec$cell$base$c_warn(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8716 = arguments.length;
var i__7900__auto___8717 = (0);
while(true){
if((i__7900__auto___8717 < len__7899__auto___8716)){
args__7906__auto__.push((arguments[i__7900__auto___8717]));

var G__8718 = (i__7900__auto___8717 + (1));
i__7900__auto___8717 = G__8718;
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
return cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"WARNING: ",args));
}
});

tiltontec.cell.base.c_warn.cljs$lang$maxFixedArity = (0);

tiltontec.cell.base.c_warn.cljs$lang$applyTo = (function (seq8715){
return tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8715));
});

cljs.core.derive.call(null,new cljs.core.Keyword("tiltontec.cell.base","model","tiltontec.cell.base/model",284743830),new cljs.core.Keyword("tiltontec.cell.base","object","tiltontec.cell.base/object",1595927066));
cljs.core.derive.call(null,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),new cljs.core.Keyword("tiltontec.cell.base","object","tiltontec.cell.base/object",1595927066));
cljs.core.derive.call(null,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071));
tiltontec.cell.base.ia_type = (function tiltontec$cell$base$ia_type(it){
if((it instanceof cljs.core.Atom)){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,it));
} else {
return cljs.core.type.call(null,it);

}
});
tiltontec.cell.base.ia_type_QMARK_ = (function tiltontec$cell$base$ia_type_QMARK_(it,typ){
return cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,it),typ);
});
tiltontec.cell.base.c_formula_QMARK_ = (function tiltontec$cell$base$c_formula_QMARK_(c){
return tiltontec.cell.base.ia_type_QMARK_.call(null,c,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037));
});
tiltontec.cell.base.c_ref_QMARK_ = (function tiltontec$cell$base$c_ref_QMARK_(x){
return tiltontec.cell.base.ia_type_QMARK_.call(null,x,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071));
});
tiltontec.cell.base.c_me = (function tiltontec$cell$base$c_me(ref){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_slot = (function tiltontec$cell$base$c_slot(ref){
return new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_state = (function tiltontec$cell$base$c_state(ref){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_input_QMARK_ = (function tiltontec$cell$base$c_input_QMARK_(ref){
return new cljs.core.Keyword(null,"input?","input?",-1792843173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_rule = (function tiltontec$cell$base$c_rule(ref){
return new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_pulse = (function tiltontec$cell$base$c_pulse(ref){
return new cljs.core.Keyword(null,"pulse","pulse",-244494476).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_pulse_last_changed = (function tiltontec$cell$base$c_pulse_last_changed(ref){
return new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_pulse_observed = (function tiltontec$cell$base$c_pulse_observed(ref){
return new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_useds = (function tiltontec$cell$base$c_useds(ref){
return new cljs.core.Keyword(null,"useds","useds",621350967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_users = (function tiltontec$cell$base$c_users(ref){
return new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_callers = (function tiltontec$cell$base$c_callers(ref){
return new cljs.core.Keyword(null,"callers","callers",-1991542784).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_optimize = (function tiltontec$cell$base$c_optimize(ref){
return new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_ephemeral_QMARK_ = (function tiltontec$cell$base$c_ephemeral_QMARK_(ref){
return new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_lazy = (function tiltontec$cell$base$c_lazy(ref){
return new cljs.core.Keyword(null,"lazy","lazy",-424547181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_synapses = (function tiltontec$cell$base$c_synapses(ref){
return new cljs.core.Keyword(null,"synapses","synapses",-614206130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_synaptic_QMARK_ = (function tiltontec$cell$base$c_synaptic_QMARK_(ref){
return new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});
tiltontec.cell.base.c_value = (function tiltontec$cell$base$c_value(c){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (any-ref? c)"));
}

if(cljs.core.truth_((function (){var and__6762__auto__ = tiltontec.cell.base.c_ref_QMARK_.call(null,c);
if(cljs.core.truth_(and__6762__auto__)){
return cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c));
} else {
return and__6762__auto__;
}
})())){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
} else {
return cljs.core.deref.call(null,c);

}
});
tiltontec.cell.base.c_optimized_away_QMARK_ = (function tiltontec$cell$base$c_optimized_away_QMARK_(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
return (!(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c)))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c))));
} else {
return true;

}
});
tiltontec.cell.base.c_model = (function tiltontec$cell$base$c_model(rc){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
});
tiltontec.cell.base.c_md_name = (function tiltontec$cell$base$c_md_name(c){
var temp__4655__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4655__auto__)){
var md = temp__4655__auto__;
var or__6774__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,md));
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
var v = tiltontec.cell.base.c_value.call(null,rc);
if(cljs.core._EQ_.call(null,v,tiltontec.cell.base.unbound)){
return new cljs.core.Keyword(null,"unbound","unbound",-1366326654);
} else {
if(cljs.core._EQ_.call(null,v,tiltontec.cell.base.uncurrent)){
return new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265);
} else {
return new cljs.core.Keyword(null,"valid","valid",155614240);

}
}
});
tiltontec.cell.base.c_unbound_QMARK_ = (function tiltontec$cell$base$c_unbound_QMARK_(rc){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unbound","unbound",-1366326654),tiltontec.cell.base.c_value_state.call(null,rc));
});
tiltontec.cell.base.c_valid_QMARK_ = (function tiltontec$cell$base$c_valid_QMARK_(rc){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"valid","valid",155614240),tiltontec.cell.base.c_value_state.call(null,rc));
});
tiltontec.cell.base.caller_ensure = (function tiltontec$cell$base$caller_ensure(used,new_caller){
return cljs.core.swap_BANG_.call(null,used,cljs.core.assoc,new cljs.core.Keyword(null,"callers","callers",-1991542784),cljs.core.conj.call(null,tiltontec.cell.base.c_callers.call(null,used),new_caller));
});
tiltontec.cell.base.caller_drop = (function tiltontec$cell$base$caller_drop(used,caller){
return cljs.core.swap_BANG_.call(null,used,cljs.core.assoc,new cljs.core.Keyword(null,"callers","callers",-1991542784),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),caller));
});
tiltontec.cell.base.unlink_from_callers = (function tiltontec$cell$base$unlink_from_callers(c){
var iter__7563__auto___8723 = (function tiltontec$cell$base$unlink_from_callers_$_iter__8719(s__8720){
return (new cljs.core.LazySeq(null,(function (){
var s__8720__$1 = s__8720;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8720__$1);
if(temp__4657__auto__){
var s__8720__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8720__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__8720__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__8722 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__8721 = (0);
while(true){
if((i__8721 < size__7562__auto__)){
var caller = cljs.core._nth.call(null,c__7561__auto__,i__8721);
cljs.core.chunk_append.call(null,b__8722,tiltontec.cell.base.caller_drop.call(null,c,caller));

var G__8724 = (i__8721 + (1));
i__8721 = G__8724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8722),tiltontec$cell$base$unlink_from_callers_$_iter__8719.call(null,cljs.core.chunk_rest.call(null,s__8720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8722),null);
}
} else {
var caller = cljs.core.first.call(null,s__8720__$2);
return cljs.core.cons.call(null,tiltontec.cell.base.caller_drop.call(null,c,caller),tiltontec$cell$base$unlink_from_callers_$_iter__8719.call(null,cljs.core.rest.call(null,s__8720__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__7563__auto___8723.call(null,tiltontec.cell.base.c_callers.call(null,c));

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),c], null),null);
});
tiltontec.cell.base.c_slots = (function tiltontec$cell$base$c_slots(c,k){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

return cljs.core.set.call(null,cljs.core.map.call(null,tiltontec.cell.base.c_slot,k.call(null,cljs.core.deref.call(null,c))));
});
tiltontec.cell.base.md_ref_QMARK_ = (function tiltontec$cell$base$md_ref_QMARK_(x){
return tiltontec.util.core.any_ref_QMARK_.call(null,x);
});
if(typeof tiltontec.cell.base.mdead_QMARK_ !== 'undefined'){
} else {
tiltontec.cell.base.mdead_QMARK_ = (function (){var method_table__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.base","mdead?"),((function (method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__){
return (function (me){
if(cljs.core.truth_((function (){var or__6774__auto__ = (me == null);
if(or__6774__auto__){
return or__6774__auto__;
} else {
return tiltontec.cell.base.md_ref_QMARK_.call(null,me);
}
})())){
} else {
throw (new Error("Assert failed: (or (nil? me) (md-ref? me))"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type.call(null,(cljs.core.truth_(me)?cljs.core.deref.call(null,me):null))], null);
});})(method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.base.mdead_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__4655__auto__ = cljs.core.meta.call(null,me);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(m));
} else {
return false;
}
}));
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.base.md_slot_owning_QMARK_ = (function tiltontec$cell$base$md_slot_owning_QMARK_(class_name,slot_name){
return false;
});

//# sourceMappingURL=base.js.map