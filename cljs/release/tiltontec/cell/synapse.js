// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.synapse');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.core');
goog.require('cljs_http.client');
tiltontec.cell.synapse.existing_syn = (function tiltontec$cell$synapse$existing_syn(synapse_id){
if((synapse_id instanceof cljs.core.Keyword)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Synapse ID must be a keyword"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(keyword? synapse-id)")].join('')));
}

if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("You attempted to create synapse "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(synapse_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" outside a Cell formula. Synapses serve containing Cells.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*depender*")].join('')));
}

return cljs.core.some((function (p1__31283_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(synapse_id,cljs.core.cst$kw$synapse_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(p1__31283_SHARP_)))){
return p1__31283_SHARP_;
} else {
return null;
}
}),tiltontec.cell.base.c_synapses(tiltontec.cell.base._STAR_depender_STAR_));
});
var ret__7939__auto___31299 = (function (){
tiltontec.cell.synapse.with_synapse = (function tiltontec$cell$synapse$with_synapse(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31300 = arguments.length;
var i__7900__auto___31301 = (0);
while(true){
if((i__7900__auto___31301 < len__7899__auto___31300)){
args__7906__auto__.push((arguments[i__7900__auto___31301]));

var G__31302 = (i__7900__auto___31301 + (1));
i__7900__auto___31301 = G__31302;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__31292,body){
var vec__31293 = p__31292;
var synapse_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31293,(0),null);
var vec__31296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31293,(1),null);
var seq__31297 = cljs.core.seq(vec__31296);
var closure_bindings = seq__31297;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$existing_DASH_syn__31284__auto__),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$synapse_SLASH_existing_DASH_syn),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$synapse__31285__auto__),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$existing_DASH_syn__31284__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new_DASH_syn__31286__auto__),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(closure_bindings))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_println),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$making_DASH_syn_BANG__QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$slot),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_depender_STAR_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$model),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$model),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_depender_STAR_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$slot),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$synapse_DASH_id),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$synaptic_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$synapse_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$util$core_SLASH_rmap_DASH_setf),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$synapses),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_depender_STAR_)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_synapses),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_depender_STAR_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new_DASH_syn__31286__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$evaluate_SLASH_record_DASH_dependency),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new_DASH_syn__31286__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new_DASH_syn__31286__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$value__31287__auto__),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH_with_DASH_integrity),(function (){var x__7617__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$evaluate_SLASH_ensure_DASH_value_DASH_is_DASH_current),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$synapse__31285__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$synapse),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_depender_STAR_)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$evaluate_SLASH_record_DASH_dependency),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$synapse__31285__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$value__31287__auto__)], 0))));
});

tiltontec.cell.synapse.with_synapse.cljs$lang$maxFixedArity = (3);

tiltontec.cell.synapse.with_synapse.cljs$lang$applyTo = (function (seq31288){
var G__31289 = cljs.core.first(seq31288);
var seq31288__$1 = cljs.core.next(seq31288);
var G__31290 = cljs.core.first(seq31288__$1);
var seq31288__$2 = cljs.core.next(seq31288__$1);
var G__31291 = cljs.core.first(seq31288__$2);
var seq31288__$3 = cljs.core.next(seq31288__$2);
return tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic(G__31289,G__31290,G__31291,seq31288__$3);
});

return null;
})()
;
tiltontec.cell.synapse.with_synapse.cljs$lang$macro = true;

tiltontec.cell.synapse.call_with_synapse = (function tiltontec$cell$synapse$call_with_synapse(synapse_id,cell_factory){
var existing_syn = tiltontec.cell.synapse.existing_syn(synapse_id);
var synapse = (function (){var or__6774__auto__ = existing_syn;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var new_syn = (cell_factory.cljs$core$IFn$_invoke$arity$0 ? cell_factory.cljs$core$IFn$_invoke$arity$0() : cell_factory.call(null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$building_DASH_synapse,(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(synapse_id) : cljs.core.unquote.call(null,synapse_id))], 0));

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$synapses,tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_synapses(tiltontec.cell.base._STAR_depender_STAR_),new_syn));

tiltontec.cell.evaluate.record_dependency(new_syn);

return new_syn;
}
})();
var value = tiltontec.cell.integrity.call_with_integrity(null,null,((function (existing_syn,synapse){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.ensure_value_is_current(synapse,cljs.core.cst$kw$synapse,tiltontec.cell.base._STAR_depender_STAR_);
});})(existing_syn,synapse))
);
tiltontec.cell.evaluate.record_dependency(synapse);

return value;
});
var ret__7939__auto___31314 = (function (){
tiltontec.cell.synapse.cSyn = (function tiltontec$cell$synapse$cSyn(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31315 = arguments.length;
var i__7900__auto___31316 = (0);
while(true){
if((i__7900__auto___31316 < len__7899__auto___31315)){
args__7906__auto__.push((arguments[i__7900__auto___31316]));

var G__31317 = (i__7900__auto___31316 + (1));
i__7900__auto___31316 = G__31317;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__31307,body){
var vec__31308 = p__31307;
var synapse_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31308,(0),null);
var vec__31311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31308,(1),null);
var seq__31312 = cljs.core.seq(vec__31311);
var closure_bindings = seq__31312;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$synapse_SLASH_call_DASH_with_DASH_synapse),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fn_STAR_),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(closure_bindings))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$model),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$synapse_SLASH_c_DASH_model),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_depender_STAR_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$slot),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$synapse_DASH_id),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$synaptic_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$synapse_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.synapse.cSyn.cljs$lang$maxFixedArity = (3);

tiltontec.cell.synapse.cSyn.cljs$lang$applyTo = (function (seq31303){
var G__31304 = cljs.core.first(seq31303);
var seq31303__$1 = cljs.core.next(seq31303);
var G__31305 = cljs.core.first(seq31303__$1);
var seq31303__$2 = cljs.core.next(seq31303__$1);
var G__31306 = cljs.core.first(seq31303__$2);
var seq31303__$3 = cljs.core.next(seq31303__$2);
return tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic(G__31304,G__31305,G__31306,seq31303__$3);
});

return null;
})()
;
tiltontec.cell.synapse.cSyn.cljs$lang$macro = true;

