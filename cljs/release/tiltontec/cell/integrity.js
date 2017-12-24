// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.integrity');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('taoensso.tufte');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_ = false;
tiltontec.cell.integrity._STAR_dp_log_STAR_ = false;
tiltontec.cell.integrity.data_pulse_next = (function tiltontec$cell$integrity$data_pulse_next(var_args){
var G__25722 = arguments.length;
switch (G__25722) {
case 0:
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$anon);
});

tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1 = (function (pulse_info){
if(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_){
return null;
} else {
if(tiltontec.cell.integrity._STAR_dp_log_STAR_){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic("dp-next> ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) + (1)),pulse_info], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base._PLUS_pulse_PLUS_,cljs.core.inc);
}
});

tiltontec.cell.integrity.data_pulse_next.cljs$lang$maxFixedArity = 1;

tiltontec.cell.integrity.c_current_QMARK_ = (function tiltontec$cell$integrity$c_current_QMARK_(c){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_pulse(c),cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));
});
tiltontec.cell.integrity.c_pulse_update = (function tiltontec$cell$integrity$c_pulse_update(c,key){
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_(c))){
return null;
} else {
if((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) >= tiltontec.cell.base.c_pulse(c))){
} else {
throw (new Error("Assert failed: (>= (clojure.core/deref +pulse+) (c-pulse c))"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(c,cljs.core.assoc,cljs.core.cst$kw$pulse,cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));
}
});
tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tell_DASH_dependents,cljs.core.cst$kw$awaken,cljs.core.cst$kw$client,cljs.core.cst$kw$ephemeral_DASH_reset,cljs.core.cst$kw$change], null);
tiltontec.cell.integrity.unfin_biz = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7563__auto__ = (function tiltontec$cell$integrity$iter__25724(s__25725){
return (new cljs.core.LazySeq(null,(function (){
var s__25725__$1 = s__25725;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25725__$1);
if(temp__4657__auto__){
var s__25725__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25725__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__25725__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__25727 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__25726 = (0);
while(true){
if((i__25726 < size__7562__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__25726);
cljs.core.chunk_append(b__25727,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null));

var G__25728 = (i__25726 + (1));
i__25726 = G__25728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25727),tiltontec$cell$integrity$iter__25724(cljs.core.chunk_rest(s__25725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25727),null);
}
} else {
var i = cljs.core.first(s__25725__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null),tiltontec$cell$integrity$iter__25724(cljs.core.rest(s__25725__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__(tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_);
})());
tiltontec.cell.integrity.ufb_queue = (function tiltontec$cell$integrity$ufb_queue(opcode){
var or__6774__auto__ = (opcode.cljs$core$IFn$_invoke$arity$1 ? opcode.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.integrity.unfin_biz) : opcode.call(null,tiltontec.cell.integrity.unfin_biz));
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var G__25729 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ufb-queue> opcode unknown: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode)].join('');
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1(G__25729) : tiltontec.util.core.err.call(null,G__25729));
}
});
tiltontec.cell.integrity.ufb_queue_ensure = (function tiltontec$cell$integrity$ufb_queue_ensure(opcode){

return tiltontec.cell.integrity.ufb_queue(opcode);
});
tiltontec.cell.integrity.ufb_add = (function tiltontec$cell$integrity$ufb_add(opcode,continuation){
return tiltontec.util.core.fifo_add(tiltontec.cell.integrity.ufb_queue_ensure(opcode),continuation);
});
tiltontec.cell.integrity.ufb_assert_q_empty = (function tiltontec$cell$integrity$ufb_assert_q_empty(opcode){
var temp__4655__auto__ = tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue_ensure(opcode));
if(cljs.core.truth_(temp__4655__auto__)){
var uqp = temp__4655__auto__;
var G__25730 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ufb queue %s not empty, viz %s")].join('');
var G__25731 = opcode;
var G__25732 = uqp;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__25730,G__25731,G__25732) : tiltontec.util.core.err.call(null,G__25730,G__25731,G__25732));
} else {
return true;
}
});
tiltontec.cell.integrity._STAR_ufb_do_q_STAR_ = null;
tiltontec.cell.integrity.ufb_do = (function tiltontec$cell$integrity$ufb_do(var_args){
var G__25734 = arguments.length;
switch (G__25734) {
case 1:
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1 = (function (opcode){
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.integrity.ufb_queue(opcode),opcode);
});

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2 = (function (q,opcode){
while(true){
var temp__4657__auto__ = tiltontec.util.core.fifo_pop(q);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__25735 = temp__4657__auto__;
var defer_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25735,(0),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25735,(1),null);
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ufb_DASH_do_DASH_yep,defer_info,task], 0));

(task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : task.call(null,opcode,defer_info));

var G__25739 = q;
var G__25740 = opcode;
q = G__25739;
opcode = G__25740;
continue;
} else {
return null;
}
break;
}
});

tiltontec.cell.integrity.ufb_do.cljs$lang$maxFixedArity = 2;

tiltontec.cell.integrity.finish_business = (function tiltontec$cell$integrity$finish_business(){
if(cljs.core.truth_(cljs.core.deref(tiltontec.cell.base._PLUS_stop_PLUS_))){
return null;
} else {
var tag = cljs.core.cst$kw$tell_DASH_dependents;
while(true){
var G__25741 = tag;
var G__25741__$1 = (((G__25741 instanceof cljs.core.Keyword))?G__25741.fqn:null);
switch (G__25741__$1) {
case "tell-dependents":
var __pdata_or_pdata__25748 = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
}
})();
if(cljs.core.truth_(__pdata_or_pdata__25748)){
var __t0_25749 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result_25750 = tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tell_DASH_dependents);
var __t1_25751 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pdata_or_pdata__25748,cljs.core.cst$kw$telldeps,(__t1_25751 - __t0_25749));

} else {
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tell_DASH_dependents);
}

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$awaken);

var G__25752 = (cljs.core.truth_(tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue_ensure(cljs.core.cst$kw$tell_DASH_dependents)))?cljs.core.cst$kw$tell_DASH_dependents:cljs.core.cst$kw$handle_DASH_clients);
tag = G__25752;
continue;

break;
case "handle-clients":
tiltontec.util.core.plnk(cljs.core.cst$kw$handle_DASH_clients_BANG__BANG__BANG_);

var temp__4657__auto__ = tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$client);
if(cljs.core.truth_(temp__4657__auto__)){
var clientq = temp__4657__auto__;
var temp__4655__auto___25753 = cljs.core.deref(tiltontec.cell.base._PLUS_client_q_handler_PLUS_);
if(cljs.core.truth_(temp__4655__auto___25753)){
var cqh_25754 = temp__4655__auto___25753;
(cqh_25754.cljs$core$IFn$_invoke$arity$1 ? cqh_25754.cljs$core$IFn$_invoke$arity$1(clientq) : cqh_25754.call(null,clientq));
} else {
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2(clientq,cljs.core.cst$kw$client);
}

var G__25755 = (cljs.core.truth_(tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$client)))?(function (){
tiltontec.util.core.plnk(cljs.core.cst$kw$re_DASH_handling_DASH_clients_BANG__BANG__BANG__BANG_);

return cljs.core.cst$kw$handle_DASH_clients;
})()
:cljs.core.cst$kw$ephemeral_DASH_reset);
tag = G__25755;
continue;
} else {
return null;
}

break;
case "ephemeral-reset":
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ephemeral_DASH_reset);

var G__25756 = cljs.core.cst$kw$deferred_DASH_state_DASH_change;
tag = G__25756;
continue;

break;
case "deferred-state-change":
var temp__4657__auto__ = tiltontec.util.core.fifo_pop(tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$change));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__25742 = temp__4657__auto__;
var defer_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25742,(0),null);
var task_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25742,(1),null);
tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$defferred_DASH_state_DASH_chg);

var G__25745_25757 = cljs.core.cst$kw$change;
var G__25746_25758 = defer_info;
(task_fn.cljs$core$IFn$_invoke$arity$2 ? task_fn.cljs$core$IFn$_invoke$arity$2(G__25745_25757,G__25746_25758) : task_fn.call(null,G__25745_25757,G__25746_25758));

var G__25759 = cljs.core.cst$kw$tell_DASH_dependents;
tag = G__25759;
continue;
} else {
return null;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25741__$1)].join('')));

}
break;
}
}
});
var ret__7939__auto___25768 = (function (){
tiltontec.cell.integrity.with_integrity = (function tiltontec$cell$integrity$with_integrity(var_args){
var args__7906__auto__ = [];
var len__7899__auto___25769 = arguments.length;
var i__7900__auto___25770 = (0);
while(true){
if((i__7900__auto___25770 < len__7899__auto___25769)){
args__7906__auto__.push((arguments[i__7900__auto___25770]));

var G__25771 = (i__7900__auto___25770 + (1));
i__7900__auto___25770 = G__25771;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__25764,body){
var vec__25765 = p__25764;
var opcode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25765,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25765,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH_call_DASH_with_DASH_integrity),(function (){var x__7617__auto__ = opcode;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = info;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opcode),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$defer_DASH_info)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.integrity.with_integrity.cljs$lang$maxFixedArity = (3);

tiltontec.cell.integrity.with_integrity.cljs$lang$applyTo = (function (seq25760){
var G__25761 = cljs.core.first(seq25760);
var seq25760__$1 = cljs.core.next(seq25760);
var G__25762 = cljs.core.first(seq25760__$1);
var seq25760__$2 = cljs.core.next(seq25760__$1);
var G__25763 = cljs.core.first(seq25760__$2);
var seq25760__$3 = cljs.core.next(seq25760__$2);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic(G__25761,G__25762,G__25763,seq25760__$3);
});

return null;
})()
;
tiltontec.cell.integrity.with_integrity.cljs$lang$macro = true;

var ret__7939__auto___25776 = (function (){
tiltontec.cell.integrity.with_cc = (function tiltontec$cell$integrity$with_cc(var_args){
var args__7906__auto__ = [];
var len__7899__auto___25777 = arguments.length;
var i__7900__auto___25778 = (0);
while(true){
if((i__7900__auto___25778 < len__7899__auto___25777)){
args__7906__auto__.push((arguments[i__7900__auto___25778]));

var G__25779 = (i__7900__auto___25778 + (1));
i__7900__auto___25778 = G__25779;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_cc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.integrity.with_cc.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,id,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH_with_DASH_integrity),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$change),(function (){var x__7617__auto__ = id;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.cell.integrity.with_cc.cljs$lang$maxFixedArity = (3);

tiltontec.cell.integrity.with_cc.cljs$lang$applyTo = (function (seq25772){
var G__25773 = cljs.core.first(seq25772);
var seq25772__$1 = cljs.core.next(seq25772);
var G__25774 = cljs.core.first(seq25772__$1);
var seq25772__$2 = cljs.core.next(seq25772__$1);
var G__25775 = cljs.core.first(seq25772__$2);
var seq25772__$3 = cljs.core.next(seq25772__$2);
return tiltontec.cell.integrity.with_cc.cljs$core$IFn$_invoke$arity$variadic(G__25773,G__25774,G__25775,seq25772__$3);
});

return null;
})()
;
tiltontec.cell.integrity.with_cc.cljs$lang$macro = true;

var ret__7939__auto___25783 = (function (){
tiltontec.cell.integrity.without_integrity = (function tiltontec$cell$integrity$without_integrity(var_args){
var args__7906__auto__ = [];
var len__7899__auto___25784 = arguments.length;
var i__7900__auto___25785 = (0);
while(true){
if((i__7900__auto___25785 < len__7899__auto___25784)){
args__7906__auto__.push((arguments[i__7900__auto___25785]));

var G__25786 = (i__7900__auto___25785 + (1));
i__7900__auto___25785 = G__25786;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_within_DASH_integrity_STAR_),cljs.core._conj(cljs.core.List.EMPTY,false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_defer_DASH_changes_STAR_),cljs.core._conj(cljs.core.List.EMPTY,false),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH__STAR_call_DASH_stack_STAR_),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.cell.integrity.without_integrity.cljs$lang$maxFixedArity = (2);

tiltontec.cell.integrity.without_integrity.cljs$lang$applyTo = (function (seq25780){
var G__25781 = cljs.core.first(seq25780);
var seq25780__$1 = cljs.core.next(seq25780);
var G__25782 = cljs.core.first(seq25780__$1);
var seq25780__$2 = cljs.core.next(seq25780__$1);
return tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic(G__25781,G__25782,seq25780__$2);
});

return null;
})()
;
tiltontec.cell.integrity.without_integrity.cljs$lang$macro = true;

tiltontec.cell.integrity.call_with_integrity = (function tiltontec$cell$integrity$call_with_integrity(opcode,defer_info,action){
if(tiltontec.cell.base._STAR_within_integrity_STAR_){
if(cljs.core.truth_(opcode)){
var result__12240__auto__ = cljs.core.cst$kw$deferred_DASH_to_DASH_ufb_DASH_1;
tiltontec.cell.integrity.ufb_add(opcode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defer_info,action], null));

return result__12240__auto__;
} else {
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : action.call(null,opcode,defer_info));
}
} else {
var _STAR_within_integrity_STAR_25787 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_defer_changes_STAR_25788 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_within_integrity_STAR_ = true;

tiltontec.cell.base._STAR_defer_changes_STAR_ = false;

try{if(((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opcode,cljs.core.cst$kw$change))){
tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cwi,opcode,defer_info], null));
} else {
}

var result__12240__auto__ = (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : action.call(null,opcode,defer_info));
var __pdata_or_pdata__25789 = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
}
})();
if(cljs.core.truth_(__pdata_or_pdata__25789)){
var __t0_25790 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result_25791 = tiltontec.cell.integrity.finish_business();
var __t1_25792 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pdata_or_pdata__25789,cljs.core.cst$kw$finbiz,(__t1_25792 - __t0_25790));

} else {
tiltontec.cell.integrity.finish_business();
}

tiltontec.cell.integrity.ufb_assert_q_empty(cljs.core.cst$kw$tell_DASH_dependents);

tiltontec.cell.integrity.ufb_assert_q_empty(cljs.core.cst$kw$change);

return result__12240__auto__;
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_25788;

tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR_25787;
}
}
});
