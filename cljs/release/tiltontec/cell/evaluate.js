// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.evaluate');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('taoensso.tufte');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_(rc))){
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$ephemeral_DASH_reset,rc,(function (opcode,defer_info){
var temp__4657__auto___25864 = cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
if(cljs.core.truth_(temp__4657__auto___25864)){
var me_25865 = temp__4657__auto___25864;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(me_25865,cljs.core.assoc,cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc)),null);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rc,cljs.core.assoc,cljs.core.cst$kw$value,null);
}));
} else {
return null;
}
});
tiltontec.cell.evaluate.record_dependency = (function tiltontec$cell$evaluate$record_dependency(used){
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_(used))){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
} else {
throw (new Error("Assert failed: *depender*"));
}

tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reco_DASH_dep_BANG__BANG__BANG_,cljs.core.cst$kw$used,tiltontec.cell.base.c_slot(used),cljs.core.cst$kw$caller,tiltontec.cell.base.c_slot(tiltontec.cell.base._STAR_depender_STAR_)], 0));

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$useds,tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_useds(tiltontec.cell.base._STAR_depender_STAR_),used));

return tiltontec.cell.base.caller_ensure(used,tiltontec.cell.base._STAR_depender_STAR_);
}
});
/**
 * The key to data integrity: recursively check the known dependency
 *   graph to decide if we are current, and if not kick off recalculation
 *   and propagation.
 */
tiltontec.cell.evaluate.ensure_value_is_current = (function tiltontec$cell$evaluate$ensure_value_is_current(c,debug_id,ensurer){
if(tiltontec.cell.base._STAR_not_to_be_STAR_){
if(cljs.core.truth_(tiltontec.cell.base.c_unbound_QMARK_(c))){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(":unbound!!!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.cell.base.c_slot], 0));

var G__25866 = "evic> unbound slot %s of model %s";
var G__25867 = tiltontec.cell.base.c_slot(c);
var G__25868 = tiltontec.cell.base.c_model(c);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__25866,G__25867,G__25868) : tiltontec.util.core.err.call(null,G__25866,G__25867,G__25868));
} else {
if(cljs.core.truth_(tiltontec.cell.base.c_valid_QMARK_(c))){
return tiltontec.cell.base.c_value(c);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return tiltontec.cell.base.c_value(c);
} else {
if(cljs.core.truth_((function (){var and__6762__auto__ = tiltontec.cell.base.c_input_QMARK_(c);
if(cljs.core.truth_(and__6762__auto__)){
var and__6762__auto____$1 = tiltontec.cell.base.c_valid_QMARK_(c);
if(cljs.core.truth_(and__6762__auto____$1)){
return cljs.core.not((function (){var and__6762__auto____$2 = tiltontec.cell.base.c_formula_QMARK_(c);
if(cljs.core.truth_(and__6762__auto____$2)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_optimize(c),cljs.core.cst$kw$when_DASH_value_DASH_t)) && ((tiltontec.cell.base.c_value(c) == null));
} else {
return and__6762__auto____$2;
}
})());
} else {
return and__6762__auto____$1;
}
} else {
return and__6762__auto__;
}
})())){
return tiltontec.cell.base.c_value(c);
} else {
if(cljs.core.truth_((function (){var temp__4657__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__4657__auto__)){
var md = temp__4657__auto__;
var G__25869 = tiltontec.cell.base.c_model(c);
return (tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25869) : tiltontec.cell.base.mdead_QMARK_.call(null,G__25869));
} else {
return null;
}
})())){
var G__25870 = cljs.core.str;
var G__25871 = "evic> model %s of cell %s is dead";
var G__25872 = tiltontec.cell.base.c_model(c);
var G__25873 = c;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__25870,G__25871,G__25872,G__25873) : tiltontec.util.core.err.call(null,G__25870,G__25871,G__25872,G__25873));
} else {
if(cljs.core.truth_((function (){var or__6774__auto__ = cljs.core.not(tiltontec.cell.base.c_valid_QMARK_(c));
if(or__6774__auto__){
return or__6774__auto__;
} else {
var G__25890 = cljs.core.seq(tiltontec.cell.base.c_useds(c));
var vec__25891 = G__25890;
var seq__25892 = cljs.core.seq(vec__25891);
var first__25893 = cljs.core.first(seq__25892);
var seq__25892__$1 = cljs.core.next(seq__25892);
var used = first__25893;
var urest = seq__25892__$1;
var G__25890__$1 = G__25890;
while(true){
var vec__25894 = G__25890__$1;
var seq__25895 = cljs.core.seq(vec__25894);
var first__25896 = cljs.core.first(seq__25895);
var seq__25895__$1 = cljs.core.next(seq__25895);
var used__$1 = first__25896;
var urest__$1 = seq__25895__$1;
if(cljs.core.truth_(used__$1)){
var G__25897_25903 = used__$1;
var G__25898_25904 = cljs.core.cst$kw$nested;
var G__25899_25905 = c;
(tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3(G__25897_25903,G__25898_25904,G__25899_25905) : tiltontec.cell.evaluate.ensure_value_is_current.call(null,G__25897_25903,G__25898_25904,G__25899_25905));

var or__6774__auto____$1 = (tiltontec.cell.base.c_pulse_last_changed(used__$1) > tiltontec.cell.base.c_pulse(c));
if(or__6774__auto____$1){
return or__6774__auto____$1;
} else {
var G__25906 = urest__$1;
G__25890__$1 = G__25906;
continue;
}
} else {
return null;
}
break;
}
}
})())){
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
} else {
var G__25900_25907 = c;
var G__25901_25908 = cljs.core.cst$kw$evic;
var G__25902_25909 = ensurer;
(tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3(G__25900_25907,G__25901_25908,G__25902_25909) : tiltontec.cell.evaluate.calculate_and_set.call(null,G__25900_25907,G__25901_25908,G__25902_25909));
}

return tiltontec.cell.base.c_value(c);
} else {
tiltontec.cell.integrity.c_pulse_update(c,cljs.core.cst$kw$valid_DASH_uninfluenced);

return tiltontec.cell.base.c_value(c);

}
}
}
}
}
});
/**
 * The API for determing the value associated with a Cell.
 *   Ensures value is current, records any dependent, and
 *   notices if a standalone  cell has never been observed.
 */
tiltontec.cell.evaluate.c_get = (function tiltontec$cell$evaluate$c_get(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
var result__12240__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value(c);
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
[cljs.core.str.cljs$core$IFn$_invoke$arity$1("asker="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_slot(tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(tiltontec.cell.base._STAR_depender_STAR_))].join('');
} else {
}

var result__12240__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current(c,cljs.core.cst$kw$c_DASH_read,null);
return ev;
})();
if(((tiltontec.cell.base.c_model(c) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(c),cljs.core.cst$kw$nascent)) && ((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed(c)))){
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,c], null),cljs.core.cst$kw$awake);

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$cget);

tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
}

return result__12240__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.evaluate.record_dependency(c);
} else {
}

return result__12240__auto__;
} else {
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(c))){
return cljs.core.deref(c);
} else {
return c;

}
}
});

/**
 * Calculate, link, record, and propagate.
 */
tiltontec.cell.evaluate.calculate_and_set = (function tiltontec$cell$evaluate$calculate_and_set(c,dbgid,dbgdata){
var vec__25910 = (tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.calculate_and_link.call(null,c));
var raw_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25910,(0),null);
var propagation_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25910,(1),null);
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_(c))){
return null;
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("calc-n-set"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(map? (clojure.core/deref c))")].join('')));
}

return (tiltontec.cell.evaluate.c_value_assume.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_assume.cljs$core$IFn$_invoke$arity$3(c,raw_value,propagation_code) : tiltontec.cell.evaluate.c_value_assume.call(null,c,raw_value,propagation_code));
}
});
/**
 * The name is accurate: we do no more than invoke the
 *   rule of a formula and return its value*, but along the
 *   way the links between dependencies and dependents get
 *   determined anew.
 * 
 *   * Well, we also look to see if a synaptic cell has attached a
 *   propagaion code to a vector used to wrap the raw value, which we then unpack.
 */
tiltontec.cell.evaluate.calculate_and_link = (function tiltontec$cell$evaluate$calculate_and_link(c){
var _STAR_call_stack_STAR_25913 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR_25914 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR_25915 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_call_stack_STAR_ = cljs.core.cons(c,tiltontec.cell.base._STAR_call_stack_STAR_);

tiltontec.cell.base._STAR_depender_STAR_ = c;

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{var G__25916_25919 = c;
var G__25917_25920 = cljs.core.cst$kw$pre_DASH_rule_DASH_clear;
(tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2(G__25916_25919,G__25917_25920) : tiltontec.cell.evaluate.unlink_from_used.call(null,G__25916_25919,G__25917_25920));

if(cljs.core.truth_(tiltontec.cell.base.c_rule(c))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No rule in %s type %s"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(cljs.core.deref(c)))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c-rule c)")].join('')));
}

var raw_value = (function (){var fexpr__25918 = tiltontec.cell.base.c_rule(c);
return (fexpr__25918.cljs$core$IFn$_invoke$arity$1 ? fexpr__25918.cljs$core$IFn$_invoke$arity$1(c) : fexpr__25918.call(null,c));
})();
var prop_code_QMARK_ = (function (){var and__6762__auto__ = tiltontec.cell.base.c_synaptic_QMARK_(c);
if(cljs.core.truth_(and__6762__auto__)){
return (cljs.core.vector_QMARK_(raw_value)) && (cljs.core.contains_QMARK_(cljs.core.meta(raw_value),cljs.core.cst$kw$propagate));
} else {
return and__6762__auto__;
}
})();
if(cljs.core.truth_(prop_code_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(raw_value),cljs.core.cst$kw$propagate.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(raw_value))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_value,null], null);
}
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_25915;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_25914;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_25913;
}});
if(typeof tiltontec.cell.evaluate.c_awaken !== 'undefined'){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__7708__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","c-awaken"),((function (method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__){
return (function (c){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(c));
});})(method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__))
,cljs.core.cst$kw$default,hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (c){
if(cljs.core.coll_QMARK_(c)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7563__auto__ = (function tiltontec$cell$evaluate$iter__25921(s__25922){
return (new cljs.core.LazySeq(null,(function (){
var s__25922__$1 = s__25922;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25922__$1);
if(temp__4657__auto__){
var s__25922__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25922__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__25922__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__25924 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__25923 = (0);
while(true){
if((i__25923 < size__7562__auto__)){
var ce = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__25923);
cljs.core.chunk_append(b__25924,(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce)));

var G__25925 = (i__25923 + (1));
i__25923 = G__25925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25924),tiltontec$cell$evaluate$iter__25921(cljs.core.chunk_rest(s__25922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25924),null);
}
} else {
var ce = cljs.core.first(s__25922__$2);
return cljs.core.cons((tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce)),tiltontec$cell$evaluate$iter__25921(cljs.core.rest(s__25922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__(c);
})());
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_awaken_DASH_fall_DASH_thru,(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH_of,cljs.core.type(c),cljs.core.deref(c)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unref,c,cljs.core.type(c)], null))], 0));

}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell,(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed(c))){
var temp__4657__auto___25926 = tiltontec.cell.base.c_me(c);
if(cljs.core.truth_(temp__4657__auto___25926)){
var me_25927 = temp__4657__auto___25926;
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot(c),me_25927], null),tiltontec.cell.base.c_value(c));
} else {
}

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$cell_DASH_awaken);

return tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
return null;
}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,(function (c){
var _STAR_depender_STAR_25928 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set(c,cljs.core.cst$kw$fn_DASH_c_DASH_awaken,null);
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_25928;
}}));



tiltontec.cell.evaluate.md_slot_value_store = (function tiltontec$cell$evaluate$md_slot_value_store(me,slot,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(me))){
} else {
throw (new Error("Assert failed: (any-ref? me)"));
}

return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),value);
});
/**
 * The Cell assumes a new value at awakening, on c-reset!, or
 * after formula recalculation.
 * 
 *   We record the new value, set the Cell state to :awake, make
 *   its pulse current, check to see if a formula cell can be
 *   optimized away, and then propagate to any dependent formula
 *   cells.
 */
tiltontec.cell.evaluate.c_value_assume = (function tiltontec$cell$evaluate$c_value_assume(c,new_value,propagation_code){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var result__12240__auto__ = new_value;
var _STAR_depender_STAR_25929_25933 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var prior_value_25934 = tiltontec.cell.base.c_value(c);
var prior_state_25935 = tiltontec.cell.base.c_value_state(c);
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,c], null),new_value);

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,c], null),cljs.core.cst$kw$awake);

if(cljs.core.truth_((function (){var and__6762__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(and__6762__auto__)){
return cljs.core.not(tiltontec.cell.base.c_synaptic_QMARK_(c));
} else {
return and__6762__auto__;
}
})())){
tiltontec.cell.evaluate.md_slot_value_store(tiltontec.cell.base.c_model(c),tiltontec.cell.base.c_slot(c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update(c,cljs.core.cst$kw$slotv_DASH_assume);

if(cljs.core.truth_((function (){var or__6774__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_25935]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$uncurrent], null)));
if(or__6774__auto__){
return or__6774__auto__;
} else {
var or__6774__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,true);
if(or__6774__auto____$1){
return or__6774__auto____$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,false)){
return null;
} else {
return (tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_25934) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_25934));
}
}
}
})())){
var callers_25936 = tiltontec.cell.base.c_callers(c);
var temp__4657__auto___25937 = (function (){var and__6762__auto__ = tiltontec.cell.base.c_formula_QMARK_(c);
if(cljs.core.truth_(and__6762__auto__)){
return tiltontec.cell.base.c_optimize(c);
} else {
return and__6762__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto___25937)){
var optimize_25938 = temp__4657__auto___25937;
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$wtf,optimize_25938], 0));

var G__25930_25939 = optimize_25938;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$when_DASH_value_DASH_t,G__25930_25939)){
if(cljs.core.truth_(tiltontec.cell.base.c_value(c))){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$when_DASH_value_DASH_t,tiltontec.cell.base.c_slot(c)], 0));

var G__25931_25940 = c;
var G__25932_25941 = cljs.core.cst$kw$when_DASH_value_DASH_t;
(tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2(G__25931_25940,G__25932_25941) : tiltontec.cell.evaluate.unlink_from_used.call(null,G__25931_25940,G__25932_25941));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__25930_25939)){
(tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2(c,prior_value_25934) : tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_25934));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25930_25939)].join('')));

}
}
} else {
}

if(cljs.core.truth_((function (){var or__6774__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,cljs.core.cst$kw$no_DASH_propagate);
if(or__6774__auto__){
return or__6774__auto__;
} else {
return tiltontec.cell.base.c_optimized_away_QMARK_(c);
}
})())){
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

(tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3(c,prior_value_25934,callers_25936) : tiltontec.cell.evaluate.propagate.call(null,c,prior_value_25934,callers_25936));
}
} else {
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_25929_25933;
}
return result__12240__auto__;
});
tiltontec.cell.evaluate.unlink_from_used = (function tiltontec$cell$evaluate$unlink_from_used(c,why){

var iter__7563__auto___25946 = (function tiltontec$cell$evaluate$unlink_from_used_$_iter__25942(s__25943){
return (new cljs.core.LazySeq(null,(function (){
var s__25943__$1 = s__25943;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25943__$1);
if(temp__4657__auto__){
var s__25943__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25943__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__25943__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__25945 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__25944 = (0);
while(true){
if((i__25944 < size__7562__auto__)){
var used = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__25944);
cljs.core.chunk_append(b__25945,tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callers,used], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),c)));

var G__25947 = (i__25944 + (1));
i__25944 = G__25947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25945),tiltontec$cell$evaluate$unlink_from_used_$_iter__25942(cljs.core.chunk_rest(s__25943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25945),null);
}
} else {
var used = cljs.core.first(s__25943__$2);
return cljs.core.cons(tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callers,used], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),c)),tiltontec$cell$evaluate$unlink_from_used_$_iter__25942(cljs.core.rest(s__25943__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__7563__auto___25946(tiltontec.cell.base.c_useds(c));

return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$useds,c], null),cljs.core.PersistentHashSet.EMPTY);
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__4657__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__4657__auto__)){
var me = temp__4657__auto__;
return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cells_DASH_flushed,me], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cells_DASH_flushed.cljs$core$IFn$_invoke$arity$1(me),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot(c),tiltontec.cell.base.c_pulse_observed(c)], null)));
} else {
return null;
}
});
/**
 * Optimizes away cells who turn out not to depend on anyone, 
 *   saving a lot of work at runtime. A caller/user will not bother
 *   establishing a link, and when we get to models cget will 
 *   find a non-cell in a slot and Just Use It.
 */
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_ = (function tiltontec$cell$evaluate$optimize_away_QMARK__BANG_(c,prior_value){
if(cljs.core.truth_((function (){var and__6762__auto__ = tiltontec.cell.base.c_formula_QMARK_(c);
if(cljs.core.truth_(and__6762__auto__)){
var and__6762__auto____$1 = cljs.core.empty_QMARK_(tiltontec.cell.base.c_useds(c));
if(and__6762__auto____$1){
var and__6762__auto____$2 = tiltontec.cell.base.c_optimize(c);
if(cljs.core.truth_(and__6762__auto____$2)){
var and__6762__auto____$3 = cljs.core.not(tiltontec.cell.base.c_optimized_away_QMARK_(c));
if(and__6762__auto____$3){
var and__6762__auto____$4 = tiltontec.cell.base.c_valid_QMARK_(c);
if(cljs.core.truth_(and__6762__auto____$4)){
return (cljs.core.not(tiltontec.cell.base.c_synaptic_QMARK_(c))) && (cljs.core.not(tiltontec.cell.base.c_input_QMARK_(c)));
} else {
return and__6762__auto____$4;
}
} else {
return and__6762__auto____$3;
}
} else {
return and__6762__auto____$2;
}
} else {
return and__6762__auto____$1;
}
} else {
return and__6762__auto__;
}
})())){
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,c], null),cljs.core.cst$kw$optimized_DASH_away);

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$opti_DASH_away);

var temp__4657__auto___25952 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__4657__auto___25952)){
var me_25953 = temp__4657__auto___25952;
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me_25953], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me_25953)),tiltontec.cell.base.c_slot(c),null));

tiltontec.cell.evaluate.md_cell_flush(c);
} else {
}

var seq__25948_25954 = cljs.core.seq(cljs.core.seq(tiltontec.cell.base.c_callers(c)));
var chunk__25949_25955 = null;
var count__25950_25956 = (0);
var i__25951_25957 = (0);
while(true){
if((i__25951_25957 < count__25950_25956)){
var caller_25958 = chunk__25949_25955.cljs$core$IIndexed$_nth$arity$2(null,i__25951_25957);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(caller_25958,cljs.core.assoc,cljs.core.cst$kw$useds,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller_25958)));

tiltontec.cell.base.caller_drop(c,caller_25958);

tiltontec.cell.evaluate.ensure_value_is_current(caller_25958,cljs.core.cst$kw$opti_DASH_used,c);

var G__25959 = seq__25948_25954;
var G__25960 = chunk__25949_25955;
var G__25961 = count__25950_25956;
var G__25962 = (i__25951_25957 + (1));
seq__25948_25954 = G__25959;
chunk__25949_25955 = G__25960;
count__25950_25956 = G__25961;
i__25951_25957 = G__25962;
continue;
} else {
var temp__4657__auto___25963 = cljs.core.seq(seq__25948_25954);
if(temp__4657__auto___25963){
var seq__25948_25964__$1 = temp__4657__auto___25963;
if(cljs.core.chunked_seq_QMARK_(seq__25948_25964__$1)){
var c__7594__auto___25965 = cljs.core.chunk_first(seq__25948_25964__$1);
var G__25966 = cljs.core.chunk_rest(seq__25948_25964__$1);
var G__25967 = c__7594__auto___25965;
var G__25968 = cljs.core.count(c__7594__auto___25965);
var G__25969 = (0);
seq__25948_25954 = G__25966;
chunk__25949_25955 = G__25967;
count__25950_25956 = G__25968;
i__25951_25957 = G__25969;
continue;
} else {
var caller_25970 = cljs.core.first(seq__25948_25964__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(caller_25970,cljs.core.assoc,cljs.core.cst$kw$useds,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller_25970)));

tiltontec.cell.base.caller_drop(c,caller_25970);

tiltontec.cell.evaluate.ensure_value_is_current(caller_25970,cljs.core.cst$kw$opti_DASH_used,c);

var G__25971 = cljs.core.next(seq__25948_25964__$1);
var G__25972 = null;
var G__25973 = (0);
var G__25974 = (0);
seq__25948_25954 = G__25971;
chunk__25949_25955 = G__25972;
count__25950_25956 = G__25973;
i__25951_25957 = G__25974;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(c,tiltontec.cell.base.c_value(c));
} else {
return null;
}
});
tiltontec.cell.evaluate.c_quiesce = (function tiltontec$cell$evaluate$c_quiesce(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

tiltontec.cell.base.unlink_from_callers(c);

tiltontec.cell.evaluate.unlink_from_used(c,cljs.core.cst$kw$quiesce);

return cljs.core.reset_BANG_(c,cljs.core.cst$kw$dead_DASH_c);
});
tiltontec.cell.evaluate.not_to_be_self = (function tiltontec$cell$evaluate$not_to_be_self(me){
var seq__25975_25979 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))));
var chunk__25976_25980 = null;
var count__25977_25981 = (0);
var i__25978_25982 = (0);
while(true){
if((i__25978_25982 < count__25977_25981)){
var c_25983 = chunk__25976_25980.cljs$core$IIndexed$_nth$arity$2(null,i__25978_25982);
if(cljs.core.truth_(c_25983)){
tiltontec.cell.evaluate.c_quiesce(c_25983);
} else {
}

var G__25984 = seq__25975_25979;
var G__25985 = chunk__25976_25980;
var G__25986 = count__25977_25981;
var G__25987 = (i__25978_25982 + (1));
seq__25975_25979 = G__25984;
chunk__25976_25980 = G__25985;
count__25977_25981 = G__25986;
i__25978_25982 = G__25987;
continue;
} else {
var temp__4657__auto___25988 = cljs.core.seq(seq__25975_25979);
if(temp__4657__auto___25988){
var seq__25975_25989__$1 = temp__4657__auto___25988;
if(cljs.core.chunked_seq_QMARK_(seq__25975_25989__$1)){
var c__7594__auto___25990 = cljs.core.chunk_first(seq__25975_25989__$1);
var G__25991 = cljs.core.chunk_rest(seq__25975_25989__$1);
var G__25992 = c__7594__auto___25990;
var G__25993 = cljs.core.count(c__7594__auto___25990);
var G__25994 = (0);
seq__25975_25979 = G__25991;
chunk__25976_25980 = G__25992;
count__25977_25981 = G__25993;
i__25978_25982 = G__25994;
continue;
} else {
var c_25995 = cljs.core.first(seq__25975_25989__$1);
if(cljs.core.truth_(c_25995)){
tiltontec.cell.evaluate.c_quiesce(c_25995);
} else {
}

var G__25996 = cljs.core.next(seq__25975_25989__$1);
var G__25997 = null;
var G__25998 = (0);
var G__25999 = (0);
seq__25975_25979 = G__25996;
chunk__25976_25980 = G__25997;
count__25977_25981 = G__25998;
i__25978_25982 = G__25999;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(me,null);

return tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$dead);
});
if(typeof tiltontec.cell.evaluate.not_to_be !== 'undefined'){
} else {
tiltontec.cell.evaluate.not_to_be = (function (){var method_table__7708__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","not-to-be"),((function (method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__){
return (function (me){
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_(me))){
} else {
throw (new Error("Assert failed: (md-ref? me)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type(me)], null);
});})(method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__))
,cljs.core.cst$kw$default,hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
tiltontec.cell.evaluate.not_to_be.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$not2be_DASH_default,cljs.core.type((cljs.core.truth_(me)?cljs.core.deref(me):null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),me], 0));

return tiltontec.cell.evaluate.not_to_be_self(me);
}));
if(typeof tiltontec.cell.evaluate.unchanged_test !== 'undefined'){
} else {
/**
 * Cells does not propagate when nothing changes. By default, the
 *   test is =, but cells can inject a different test, and when we get
 *   to models it will be possible for a slot to have associated
 *   with it a different test.
 */
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__7708__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","unchanged-test"),((function (method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__){
return (function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(me)?cljs.core.type(cljs.core.deref(me)):null),slot], null);
});})(method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__))
,cljs.core.cst$kw$default,hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
tiltontec.cell.evaluate.unchanged_test.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not((function (){var fexpr__26002 = (function (){var or__6774__auto__ = cljs.core.cst$kw$unchanged_DASH_if.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var G__26003 = tiltontec.cell.base.c_model(c);
var G__26004 = tiltontec.cell.base.c_slot(c);
return (tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2(G__26003,G__26004) : tiltontec.cell.evaluate.unchanged_test.call(null,G__26003,G__26004));
}
})();
return (fexpr__26002.cljs$core$IFn$_invoke$arity$2 ? fexpr__26002.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : fexpr__26002.call(null,new_value,old_value));
})());
});
tiltontec.cell.evaluate._STAR_custom_propagater_STAR_ = null;

/**
 * A cell:
 *   - notifies its callers of its change;
 *   - calls any observer; and
 *   - if ephemeral, silently reverts to nil.
 */
tiltontec.cell.evaluate.propagate = (function tiltontec$cell$evaluate$propagate(c,prior_value,callers){
if(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_){
if(cljs.core.truth_(tiltontec.cell.evaluate._STAR_custom_propagater_STAR_)){
return (tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.cljs$core$IFn$_invoke$arity$2(c,prior_value) : tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.call(null,c,prior_value));
} else {
return null;
}
} else {
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_last_DASH_changed,c], null),cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));

var _STAR_depender_STAR_26005 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR_26006 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR_26007 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR_26008 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

tiltontec.cell.base._STAR_call_stack_STAR_ = null;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{if(cljs.core.truth_((function (){var and__6762__auto__ = prior_value;
if(cljs.core.truth_(and__6762__auto__)){
var and__6762__auto____$1 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(and__6762__auto____$1)){
return tiltontec.cell.base.md_slot_owning_QMARK_(cljs.core.type(tiltontec.cell.base.c_model(c)),tiltontec.cell.base.c_slot(c));
} else {
return and__6762__auto____$1;
}
} else {
return and__6762__auto__;
}
})())){
var temp__4657__auto___26013 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tiltontec.util.core.set_ify(prior_value),tiltontec.util.core.set_ify(tiltontec.cell.base.c_value(c)));
if(cljs.core.truth_(temp__4657__auto___26013)){
var ownees_26014 = temp__4657__auto___26013;
var seq__26009_26015 = cljs.core.seq(ownees_26014);
var chunk__26010_26016 = null;
var count__26011_26017 = (0);
var i__26012_26018 = (0);
while(true){
if((i__26012_26018 < count__26011_26017)){
var ownee_26019 = chunk__26010_26016.cljs$core$IIndexed$_nth$arity$2(null,i__26012_26018);
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(ownee_26019) : tiltontec.cell.evaluate.not_to_be.call(null,ownee_26019));

var G__26020 = seq__26009_26015;
var G__26021 = chunk__26010_26016;
var G__26022 = count__26011_26017;
var G__26023 = (i__26012_26018 + (1));
seq__26009_26015 = G__26020;
chunk__26010_26016 = G__26021;
count__26011_26017 = G__26022;
i__26012_26018 = G__26023;
continue;
} else {
var temp__4657__auto___26024__$1 = cljs.core.seq(seq__26009_26015);
if(temp__4657__auto___26024__$1){
var seq__26009_26025__$1 = temp__4657__auto___26024__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26009_26025__$1)){
var c__7594__auto___26026 = cljs.core.chunk_first(seq__26009_26025__$1);
var G__26027 = cljs.core.chunk_rest(seq__26009_26025__$1);
var G__26028 = c__7594__auto___26026;
var G__26029 = cljs.core.count(c__7594__auto___26026);
var G__26030 = (0);
seq__26009_26015 = G__26027;
chunk__26010_26016 = G__26028;
count__26011_26017 = G__26029;
i__26012_26018 = G__26030;
continue;
} else {
var ownee_26031 = cljs.core.first(seq__26009_26025__$1);
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(ownee_26031) : tiltontec.cell.evaluate.not_to_be.call(null,ownee_26031));

var G__26032 = cljs.core.next(seq__26009_26025__$1);
var G__26033 = null;
var G__26034 = (0);
var G__26035 = (0);
seq__26009_26015 = G__26032;
chunk__26010_26016 = G__26033;
count__26011_26017 = G__26034;
i__26012_26018 = G__26035;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

(tiltontec.cell.evaluate.propagate_to_callers.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.propagate_to_callers.cljs$core$IFn$_invoke$arity$2(c,callers) : tiltontec.cell.evaluate.propagate_to_callers.call(null,c,callers));

if(cljs.core.truth_((function (){var or__6774__auto__ = (cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed(c));
if(or__6774__auto__){
return or__6774__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null));
}
})())){
tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$propagate);
} else {
}

return tiltontec.cell.evaluate.ephemeral_reset(c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_26008;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR_26007;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_26006;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_26005;
}
}
});
tiltontec.cell.evaluate.propagate_to_callers = (function tiltontec$cell$evaluate$propagate_to_callers(c,callers){
if(cljs.core.empty_QMARK_(callers)){
return null;
} else {
var causation = cljs.core.cons(c,tiltontec.cell.base._STAR_causation_STAR_);
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$tell_DASH_dependents,c,((function (causation){
return (function (opcode,defer_info){
if(cljs.core.truth_((function (){var G__26036 = tiltontec.cell.base.c_model(c);
return (tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1(G__26036) : tiltontec.cell.base.mdead_QMARK_.call(null,G__26036));
})())){
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic("WHOAA!!!! dead by time :tell-deps dispatched; bailing",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0));
} else {
var _STAR_causation_STAR_26037 = tiltontec.cell.base._STAR_causation_STAR_;
tiltontec.cell.base._STAR_causation_STAR_ = causation;

try{var seq__26038 = cljs.core.seq(cljs.core.seq(callers));
var chunk__26039 = null;
var count__26040 = (0);
var i__26041 = (0);
while(true){
if((i__26041 < count__26040)){
var caller = chunk__26039.cljs$core$IIndexed$_nth$arity$2(null,i__26041);
if(cljs.core.truth_((function (){var or__6774__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(caller),cljs.core.cst$kw$quiesced);
if(or__6774__auto__){
return or__6774__auto__;
} else {
var or__6774__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_(caller);
if(cljs.core.truth_(or__6774__auto____$1)){
return or__6774__auto____$1;
} else {
var or__6774__auto____$2 = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.cst$kw$always,cljs.core.cst$kw$once_DASH_asked], null));
if(cljs.core.truth_(or__6774__auto____$2)){
return or__6774__auto____$2;
} else {
return (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller)))) && (cljs.core.not(tiltontec.cell.base.c_optimized_away_QMARK_(c)));
}
}
}
})())){
} else {
tiltontec.cell.evaluate.calculate_and_set(caller,cljs.core.cst$kw$propagate,c);

}

var G__26042 = seq__26038;
var G__26043 = chunk__26039;
var G__26044 = count__26040;
var G__26045 = (i__26041 + (1));
seq__26038 = G__26042;
chunk__26039 = G__26043;
count__26040 = G__26044;
i__26041 = G__26045;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__26038);
if(temp__4657__auto__){
var seq__26038__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26038__$1)){
var c__7594__auto__ = cljs.core.chunk_first(seq__26038__$1);
var G__26046 = cljs.core.chunk_rest(seq__26038__$1);
var G__26047 = c__7594__auto__;
var G__26048 = cljs.core.count(c__7594__auto__);
var G__26049 = (0);
seq__26038 = G__26046;
chunk__26039 = G__26047;
count__26040 = G__26048;
i__26041 = G__26049;
continue;
} else {
var caller = cljs.core.first(seq__26038__$1);
if(cljs.core.truth_((function (){var or__6774__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(caller),cljs.core.cst$kw$quiesced);
if(or__6774__auto__){
return or__6774__auto__;
} else {
var or__6774__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_(caller);
if(cljs.core.truth_(or__6774__auto____$1)){
return or__6774__auto____$1;
} else {
var or__6774__auto____$2 = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.cst$kw$always,cljs.core.cst$kw$once_DASH_asked], null));
if(cljs.core.truth_(or__6774__auto____$2)){
return or__6774__auto____$2;
} else {
return (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller)))) && (cljs.core.not(tiltontec.cell.base.c_optimized_away_QMARK_(c)));
}
}
}
})())){
} else {
tiltontec.cell.evaluate.calculate_and_set(caller,cljs.core.cst$kw$propagate,c);

}

var G__26050 = cljs.core.next(seq__26038__$1);
var G__26051 = null;
var G__26052 = (0);
var G__26053 = (0);
seq__26038 = G__26050;
chunk__26039 = G__26051;
count__26040 = G__26052;
i__26041 = G__26053;
continue;
}
} else {
return null;
}
}
break;
}
}finally {tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR_26037;
}}
});})(causation))
);
}
});
