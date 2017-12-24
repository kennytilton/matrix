// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.cell.evaluate');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('taoensso.tufte');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_.call(null,rc))){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603),rc,(function (opcode,defer_info){
var temp__4657__auto___48666 = new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
if(cljs.core.truth_(temp__4657__auto___48666)){
var me_48667 = temp__4657__auto___48666;
cljs.core.swap_BANG_.call(null,me_48667,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc)),null);
} else {
}

return cljs.core.swap_BANG_.call(null,rc,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),null);
}));
} else {
return null;
}
});
tiltontec.cell.evaluate.record_dependency = (function tiltontec$cell$evaluate$record_dependency(used){
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,used))){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
} else {
throw (new Error("Assert failed: *depender*"));
}

tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"reco-dep!!!","reco-dep!!!",380319801),new cljs.core.Keyword(null,"used","used",-1414786177),tiltontec.cell.base.c_slot.call(null,used),new cljs.core.Keyword(null,"caller","caller",-1275362879),tiltontec.cell.base.c_slot.call(null,tiltontec.cell.base._STAR_depender_STAR_));

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_useds.call(null,tiltontec.cell.base._STAR_depender_STAR_),used));

return tiltontec.cell.base.caller_ensure.call(null,used,tiltontec.cell.base._STAR_depender_STAR_);
}
});
/**
 * The key to data integrity: recursively check the known dependency
 *   graph to decide if we are current, and if not kick off recalculation
 *   and propagation.
 */
tiltontec.cell.evaluate.ensure_value_is_current = (function tiltontec$cell$evaluate$ensure_value_is_current(c,debug_id,ensurer){
if(tiltontec.cell.base._STAR_not_to_be_STAR_){
if(cljs.core.truth_(tiltontec.cell.base.c_unbound_QMARK_.call(null,c))){
tiltontec.util.base.call_trc.call(null,":unbound!!!",tiltontec.cell.base.c_slot);

return tiltontec.util.core.err.call(null,"evic> unbound slot %s of model %s",tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_model.call(null,c));
} else {
if(cljs.core.truth_(tiltontec.cell.base.c_valid_QMARK_.call(null,c))){
return tiltontec.cell.base.c_value.call(null,c);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var and__6760__auto__ = tiltontec.cell.base.c_input_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto____$1)){
return cljs.core.not.call(null,(function (){var and__6760__auto____$2 = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto____$2)){
return (cljs.core._EQ_.call(null,tiltontec.cell.base.c_optimize.call(null,c),new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336))) && ((tiltontec.cell.base.c_value.call(null,c) == null));
} else {
return and__6760__auto____$2;
}
})());
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})())){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var temp__4657__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4657__auto__)){
var md = temp__4657__auto__;
return tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c));
} else {
return null;
}
})())){
return tiltontec.util.core.err.call(null,cljs.core.str,"evic> model %s of cell %s is dead",tiltontec.cell.base.c_model.call(null,c),c);
} else {
if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core.not.call(null,tiltontec.cell.base.c_valid_QMARK_.call(null,c));
if(or__6772__auto__){
return or__6772__auto__;
} else {
var G__48681 = cljs.core.seq.call(null,tiltontec.cell.base.c_useds.call(null,c));
var vec__48682 = G__48681;
var seq__48683 = cljs.core.seq.call(null,vec__48682);
var first__48684 = cljs.core.first.call(null,seq__48683);
var seq__48683__$1 = cljs.core.next.call(null,seq__48683);
var used = first__48684;
var urest = seq__48683__$1;
var G__48681__$1 = G__48681;
while(true){
var vec__48685 = G__48681__$1;
var seq__48686 = cljs.core.seq.call(null,vec__48685);
var first__48687 = cljs.core.first.call(null,seq__48686);
var seq__48686__$1 = cljs.core.next.call(null,seq__48686);
var used__$1 = first__48687;
var urest__$1 = seq__48686__$1;
if(cljs.core.truth_(used__$1)){
tiltontec.cell.evaluate.ensure_value_is_current.call(null,used__$1,new cljs.core.Keyword(null,"nested","nested",18943849),c);

var or__6772__auto____$1 = (tiltontec.cell.base.c_pulse_last_changed.call(null,used__$1) > tiltontec.cell.base.c_pulse.call(null,c));
if(or__6772__auto____$1){
return or__6772__auto____$1;
} else {
var G__48688 = urest__$1;
G__48681__$1 = G__48688;
continue;
}
} else {
return null;
}
break;
}
}
})())){
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"evic","evic",1309656753),ensurer);
}

return tiltontec.cell.base.c_value.call(null,c);
} else {
tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"valid-uninfluenced","valid-uninfluenced",676756797));

return tiltontec.cell.base.c_value.call(null,c);

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
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
var result__8351__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value.call(null,c);
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
[cljs.core.str.cljs$core$IFn$_invoke$arity$1("asker="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_slot.call(null,tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name.call(null,tiltontec.cell.base._STAR_depender_STAR_))].join('');
} else {
}

var result__8351__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current.call(null,c,new cljs.core.Keyword(null,"c-read","c-read",-1481921085),null);
return ev;
})();
if(((tiltontec.cell.base.c_model.call(null,c) == null)) && (cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,c),new cljs.core.Keyword(null,"nascent","nascent",443401807))) && ((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c)))){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"cget","cget",1794378742));

tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
}

return result__8351__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.evaluate.record_dependency.call(null,c);
} else {
}

return result__8351__auto__;
} else {
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))){
return cljs.core.deref.call(null,c);
} else {
return c;

}
}
});

/**
 * Calculate, link, record, and propagate.
 */
tiltontec.cell.evaluate.calculate_and_set = (function tiltontec$cell$evaluate$calculate_and_set(c,dbgid,dbgdata){
var vec__48689 = tiltontec.cell.evaluate.calculate_and_link.call(null,c);
var raw_value = cljs.core.nth.call(null,vec__48689,(0),null);
var propagation_code = cljs.core.nth.call(null,vec__48689,(1),null);
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c))){
return null;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("calc-n-set"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(map? (clojure.core/deref c))")].join('')));
}

return tiltontec.cell.evaluate.c_value_assume.call(null,c,raw_value,propagation_code);
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
var _STAR_call_stack_STAR_48692 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR_48693 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR_48694 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_call_stack_STAR_ = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_call_stack_STAR_);

tiltontec.cell.base._STAR_depender_STAR_ = c;

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"pre-rule-clear","pre-rule-clear",258781380));

if(cljs.core.truth_(tiltontec.cell.base.c_rule.call(null,c))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No rule in %s type %s"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,cljs.core.deref.call(null,c)))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c-rule c)")].join('')));
}

var raw_value = tiltontec.cell.base.c_rule.call(null,c).call(null,c);
var prop_code_QMARK_ = (function (){var and__6760__auto__ = tiltontec.cell.base.c_synaptic_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto__)){
return (cljs.core.vector_QMARK_.call(null,raw_value)) && (cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,raw_value),new cljs.core.Keyword(null,"propagate","propagate",274376905)));
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(prop_code_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,raw_value),new cljs.core.Keyword(null,"propagate","propagate",274376905).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,raw_value))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_value,null], null);
}
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_48694;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_48693;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_48692;
}});
if(typeof tiltontec.cell.evaluate.c_awaken !== 'undefined'){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__7706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","c-awaken"),((function (method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__){
return (function (c){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c));
});})(method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7710__auto__,method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
if(cljs.core.coll_QMARK_.call(null,c)){
return cljs.core.doall.call(null,(function (){var iter__7561__auto__ = (function tiltontec$cell$evaluate$iter__48695(s__48696){
return (new cljs.core.LazySeq(null,(function (){
var s__48696__$1 = s__48696;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__48696__$1);
if(temp__4657__auto__){
var s__48696__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48696__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__48696__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__48698 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__48697 = (0);
while(true){
if((i__48697 < size__7560__auto__)){
var ce = cljs.core._nth.call(null,c__7559__auto__,i__48697);
cljs.core.chunk_append.call(null,b__48698,tiltontec.cell.evaluate.c_awaken.call(null,ce));

var G__48699 = (i__48697 + (1));
i__48697 = G__48699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48698),tiltontec$cell$evaluate$iter__48695.call(null,cljs.core.chunk_rest.call(null,s__48696__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48698),null);
}
} else {
var ce = cljs.core.first.call(null,s__48696__$2);
return cljs.core.cons.call(null,tiltontec.cell.evaluate.c_awaken.call(null,ce),tiltontec$cell$evaluate$iter__48695.call(null,cljs.core.rest.call(null,s__48696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7561__auto__.call(null,c);
})());
} else {
return cljs.core.println.call(null,new cljs.core.Keyword(null,"c-awaken-fall-thru","c-awaken-fall-thru",-2004606871),(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-of","ref-of",1886926194),cljs.core.type.call(null,c),cljs.core.deref.call(null,c)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unref","unref",-1884894186),c,cljs.core.type.call(null,c)], null)));

}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c))){
var temp__4657__auto___48700 = tiltontec.cell.base.c_me.call(null,c);
if(cljs.core.truth_(temp__4657__auto___48700)){
var me_48701 = temp__4657__auto___48700;
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),me_48701], null),tiltontec.cell.base.c_value.call(null,c));
} else {
}

tiltontec.cell.observer.c_observe.call(null,c,new cljs.core.Keyword(null,"cell-awaken","cell-awaken",2137807704));

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),(function (c){
var _STAR_depender_STAR_48702 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"fn-c-awaken","fn-c-awaken",1597115821),null);
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_48702;
}}));



tiltontec.cell.evaluate.md_slot_value_store = (function tiltontec$cell$evaluate$md_slot_value_store(me,slot,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,me))){
} else {
throw (new Error("Assert failed: (any-ref? me)"));
}

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),value);
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
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var result__8351__auto__ = new_value;
var _STAR_depender_STAR_48703_48705 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var prior_value_48706 = tiltontec.cell.base.c_value.call(null,c);
var prior_state_48707 = tiltontec.cell.base.c_value_state.call(null,c);
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),c], null),new_value);

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

if(cljs.core.truth_((function (){var and__6760__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__6760__auto__)){
return cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c));
} else {
return and__6760__auto__;
}
})())){
tiltontec.cell.evaluate.md_slot_value_store.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot.call(null,c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"slotv-assume","slotv-assume",-1071260275));

if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_48707]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265)], null)));
if(or__6772__auto__){
return or__6772__auto__;
} else {
var or__6772__auto____$1 = cljs.core._EQ_.call(null,propagation_code,true);
if(or__6772__auto____$1){
return or__6772__auto____$1;
} else {
if(cljs.core._EQ_.call(null,propagation_code,false)){
return null;
} else {
return tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_48706);
}
}
}
})())){
var callers_48708 = tiltontec.cell.base.c_callers.call(null,c);
var temp__4657__auto___48709 = (function (){var and__6760__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto__)){
return tiltontec.cell.base.c_optimize.call(null,c);
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto___48709)){
var optimize_48710 = temp__4657__auto___48709;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"wtf","wtf",-1581114577),optimize_48710);

var G__48704_48711 = optimize_48710;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),G__48704_48711)){
if(cljs.core.truth_(tiltontec.cell.base.c_value.call(null,c))){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),tiltontec.cell.base.c_slot.call(null,c));

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336));
} else {
}
} else {
if(cljs.core._EQ_.call(null,true,G__48704_48711)){
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_48706);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48704_48711)].join('')));

}
}
} else {
}

if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"no-propagate","no-propagate",-573850970));
if(or__6772__auto__){
return or__6772__auto__;
} else {
return tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c);
}
})())){
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

tiltontec.cell.evaluate.propagate.call(null,c,prior_value_48706,callers_48708);
}
} else {
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_48703_48705;
}
return result__8351__auto__;
});
tiltontec.cell.evaluate.unlink_from_used = (function tiltontec$cell$evaluate$unlink_from_used(c,why){

var iter__7561__auto___48716 = (function tiltontec$cell$evaluate$unlink_from_used_$_iter__48712(s__48713){
return (new cljs.core.LazySeq(null,(function (){
var s__48713__$1 = s__48713;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__48713__$1);
if(temp__4657__auto__){
var s__48713__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48713__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__48713__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__48715 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__48714 = (0);
while(true){
if((i__48714 < size__7560__auto__)){
var used = cljs.core._nth.call(null,c__7559__auto__,i__48714);
cljs.core.chunk_append.call(null,b__48715,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)));

var G__48717 = (i__48714 + (1));
i__48714 = G__48717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48715),tiltontec$cell$evaluate$unlink_from_used_$_iter__48712.call(null,cljs.core.chunk_rest.call(null,s__48713__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48715),null);
}
} else {
var used = cljs.core.first.call(null,s__48713__$2);
return cljs.core.cons.call(null,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)),tiltontec$cell$evaluate$unlink_from_used_$_iter__48712.call(null,cljs.core.rest.call(null,s__48713__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__7561__auto___48716.call(null,tiltontec.cell.base.c_useds.call(null,c));

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),c], null),cljs.core.PersistentHashSet.EMPTY);
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__4657__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4657__auto__)){
var me = temp__4657__auto__;
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949),me], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949).cljs$core$IFn$_invoke$arity$1(me),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_pulse_observed.call(null,c)], null)));
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
if(cljs.core.truth_((function (){var and__6760__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = cljs.core.empty_QMARK_.call(null,tiltontec.cell.base.c_useds.call(null,c));
if(and__6760__auto____$1){
var and__6760__auto____$2 = tiltontec.cell.base.c_optimize.call(null,c);
if(cljs.core.truth_(and__6760__auto____$2)){
var and__6760__auto____$3 = cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c));
if(and__6760__auto____$3){
var and__6760__auto____$4 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto____$4)){
return (cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c))) && (cljs.core.not.call(null,tiltontec.cell.base.c_input_QMARK_.call(null,c)));
} else {
return and__6760__auto____$4;
}
} else {
return and__6760__auto____$3;
}
} else {
return and__6760__auto____$2;
}
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})())){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"opti-away","opti-away",1290785499));

var temp__4657__auto___48722 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4657__auto___48722)){
var me_48723 = temp__4657__auto___48722;
tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me_48723], null),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me_48723)),tiltontec.cell.base.c_slot.call(null,c),null));

tiltontec.cell.evaluate.md_cell_flush.call(null,c);
} else {
}

var seq__48718_48724 = cljs.core.seq.call(null,cljs.core.seq.call(null,tiltontec.cell.base.c_callers.call(null,c)));
var chunk__48719_48725 = null;
var count__48720_48726 = (0);
var i__48721_48727 = (0);
while(true){
if((i__48721_48727 < count__48720_48726)){
var caller_48728 = cljs.core._nth.call(null,chunk__48719_48725,i__48721_48727);
cljs.core.swap_BANG_.call(null,caller_48728,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds.call(null,caller_48728)));

tiltontec.cell.base.caller_drop.call(null,c,caller_48728);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_48728,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__48729 = seq__48718_48724;
var G__48730 = chunk__48719_48725;
var G__48731 = count__48720_48726;
var G__48732 = (i__48721_48727 + (1));
seq__48718_48724 = G__48729;
chunk__48719_48725 = G__48730;
count__48720_48726 = G__48731;
i__48721_48727 = G__48732;
continue;
} else {
var temp__4657__auto___48733 = cljs.core.seq.call(null,seq__48718_48724);
if(temp__4657__auto___48733){
var seq__48718_48734__$1 = temp__4657__auto___48733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48718_48734__$1)){
var c__7592__auto___48735 = cljs.core.chunk_first.call(null,seq__48718_48734__$1);
var G__48736 = cljs.core.chunk_rest.call(null,seq__48718_48734__$1);
var G__48737 = c__7592__auto___48735;
var G__48738 = cljs.core.count.call(null,c__7592__auto___48735);
var G__48739 = (0);
seq__48718_48724 = G__48736;
chunk__48719_48725 = G__48737;
count__48720_48726 = G__48738;
i__48721_48727 = G__48739;
continue;
} else {
var caller_48740 = cljs.core.first.call(null,seq__48718_48734__$1);
cljs.core.swap_BANG_.call(null,caller_48740,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds.call(null,caller_48740)));

tiltontec.cell.base.caller_drop.call(null,c,caller_48740);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_48740,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__48741 = cljs.core.next.call(null,seq__48718_48734__$1);
var G__48742 = null;
var G__48743 = (0);
var G__48744 = (0);
seq__48718_48724 = G__48741;
chunk__48719_48725 = G__48742;
count__48720_48726 = G__48743;
i__48721_48727 = G__48744;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,c,tiltontec.cell.base.c_value.call(null,c));
} else {
return null;
}
});
tiltontec.cell.evaluate.c_quiesce = (function tiltontec$cell$evaluate$c_quiesce(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

tiltontec.cell.base.unlink_from_callers.call(null,c);

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121));

return cljs.core.reset_BANG_.call(null,c,new cljs.core.Keyword(null,"dead-c","dead-c",385485497));
});
tiltontec.cell.evaluate.not_to_be_self = (function tiltontec$cell$evaluate$not_to_be_self(me){
var seq__48745_48749 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))));
var chunk__48746_48750 = null;
var count__48747_48751 = (0);
var i__48748_48752 = (0);
while(true){
if((i__48748_48752 < count__48747_48751)){
var c_48753 = cljs.core._nth.call(null,chunk__48746_48750,i__48748_48752);
if(cljs.core.truth_(c_48753)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_48753);
} else {
}

var G__48754 = seq__48745_48749;
var G__48755 = chunk__48746_48750;
var G__48756 = count__48747_48751;
var G__48757 = (i__48748_48752 + (1));
seq__48745_48749 = G__48754;
chunk__48746_48750 = G__48755;
count__48747_48751 = G__48756;
i__48748_48752 = G__48757;
continue;
} else {
var temp__4657__auto___48758 = cljs.core.seq.call(null,seq__48745_48749);
if(temp__4657__auto___48758){
var seq__48745_48759__$1 = temp__4657__auto___48758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48745_48759__$1)){
var c__7592__auto___48760 = cljs.core.chunk_first.call(null,seq__48745_48759__$1);
var G__48761 = cljs.core.chunk_rest.call(null,seq__48745_48759__$1);
var G__48762 = c__7592__auto___48760;
var G__48763 = cljs.core.count.call(null,c__7592__auto___48760);
var G__48764 = (0);
seq__48745_48749 = G__48761;
chunk__48746_48750 = G__48762;
count__48747_48751 = G__48763;
i__48748_48752 = G__48764;
continue;
} else {
var c_48765 = cljs.core.first.call(null,seq__48745_48759__$1);
if(cljs.core.truth_(c_48765)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_48765);
} else {
}

var G__48766 = cljs.core.next.call(null,seq__48745_48759__$1);
var G__48767 = null;
var G__48768 = (0);
var G__48769 = (0);
seq__48745_48749 = G__48766;
chunk__48746_48750 = G__48767;
count__48747_48751 = G__48768;
i__48748_48752 = G__48769;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,me,null);

return tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),me], null),new cljs.core.Keyword(null,"dead","dead",-1946604091));
});
if(typeof tiltontec.cell.evaluate.not_to_be !== 'undefined'){
} else {
tiltontec.cell.evaluate.not_to_be = (function (){var method_table__7706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","not-to-be"),((function (method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__){
return (function (me){
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,me))){
} else {
throw (new Error("Assert failed: (md-ref? me)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type.call(null,me)], null);
});})(method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7710__auto__,method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
cljs.core.println.call(null,new cljs.core.Keyword(null,"not2be-default","not2be-default",-728051456),cljs.core.type.call(null,(cljs.core.truth_(me)?cljs.core.deref.call(null,me):null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)),me);

return tiltontec.cell.evaluate.not_to_be_self.call(null,me);
}));
if(typeof tiltontec.cell.evaluate.unchanged_test !== 'undefined'){
} else {
/**
 * Cells does not propagate when nothing changes. By default, the
 *   test is =, but cells can inject a different test, and when we get
 *   to models it will be possible for a slot to have associated
 *   with it a different test.
 */
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__7706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","unchanged-test"),((function (method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__){
return (function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(me)?cljs.core.type.call(null,cljs.core.deref.call(null,me)):null),slot], null);
});})(method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7710__auto__,method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.unchanged_test,new cljs.core.Keyword(null,"default","default",-1987822328),(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not.call(null,(function (){var or__6772__auto__ = new cljs.core.Keyword(null,"unchanged-if","unchanged-if",-923210106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return tiltontec.cell.evaluate.unchanged_test.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot.call(null,c));
}
})().call(null,new_value,old_value));
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
return tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.call(null,c,prior_value);
} else {
return null;
}
} else {
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),c], null),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));

var _STAR_depender_STAR_48770 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR_48771 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR_48772 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR_48773 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

tiltontec.cell.base._STAR_call_stack_STAR_ = null;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{if(cljs.core.truth_((function (){var and__6760__auto__ = prior_value;
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__6760__auto____$1)){
return tiltontec.cell.base.md_slot_owning_QMARK_.call(null,cljs.core.type.call(null,tiltontec.cell.base.c_model.call(null,c)),tiltontec.cell.base.c_slot.call(null,c));
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})())){
var temp__4657__auto___48778 = clojure.set.difference.call(null,tiltontec.util.core.set_ify.call(null,prior_value),tiltontec.util.core.set_ify.call(null,tiltontec.cell.base.c_value.call(null,c)));
if(cljs.core.truth_(temp__4657__auto___48778)){
var ownees_48779 = temp__4657__auto___48778;
var seq__48774_48780 = cljs.core.seq.call(null,ownees_48779);
var chunk__48775_48781 = null;
var count__48776_48782 = (0);
var i__48777_48783 = (0);
while(true){
if((i__48777_48783 < count__48776_48782)){
var ownee_48784 = cljs.core._nth.call(null,chunk__48775_48781,i__48777_48783);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_48784);

var G__48785 = seq__48774_48780;
var G__48786 = chunk__48775_48781;
var G__48787 = count__48776_48782;
var G__48788 = (i__48777_48783 + (1));
seq__48774_48780 = G__48785;
chunk__48775_48781 = G__48786;
count__48776_48782 = G__48787;
i__48777_48783 = G__48788;
continue;
} else {
var temp__4657__auto___48789__$1 = cljs.core.seq.call(null,seq__48774_48780);
if(temp__4657__auto___48789__$1){
var seq__48774_48790__$1 = temp__4657__auto___48789__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48774_48790__$1)){
var c__7592__auto___48791 = cljs.core.chunk_first.call(null,seq__48774_48790__$1);
var G__48792 = cljs.core.chunk_rest.call(null,seq__48774_48790__$1);
var G__48793 = c__7592__auto___48791;
var G__48794 = cljs.core.count.call(null,c__7592__auto___48791);
var G__48795 = (0);
seq__48774_48780 = G__48792;
chunk__48775_48781 = G__48793;
count__48776_48782 = G__48794;
i__48777_48783 = G__48795;
continue;
} else {
var ownee_48796 = cljs.core.first.call(null,seq__48774_48790__$1);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_48796);

var G__48797 = cljs.core.next.call(null,seq__48774_48790__$1);
var G__48798 = null;
var G__48799 = (0);
var G__48800 = (0);
seq__48774_48780 = G__48797;
chunk__48775_48781 = G__48798;
count__48776_48782 = G__48799;
i__48777_48783 = G__48800;
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

tiltontec.cell.evaluate.propagate_to_callers.call(null,c,callers);

if(cljs.core.truth_((function (){var or__6772__auto__ = (cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c));
if(or__6772__auto__){
return or__6772__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null));
}
})())){
tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"propagate","propagate",274376905));
} else {
}

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_48773;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR_48772;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_48771;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_48770;
}
}
});
tiltontec.cell.evaluate.propagate_to_callers = (function tiltontec$cell$evaluate$propagate_to_callers(c,callers){
if(cljs.core.empty_QMARK_.call(null,callers)){
return null;
} else {
var causation = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_causation_STAR_);
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388),c,((function (causation){
return (function (opcode,defer_info){
if(cljs.core.truth_(tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c)))){
return tiltontec.util.base.call_trc.call(null,"WHOAA!!!! dead by time :tell-deps dispatched; bailing",c);
} else {
var _STAR_causation_STAR_48801 = tiltontec.cell.base._STAR_causation_STAR_;
tiltontec.cell.base._STAR_causation_STAR_ = causation;

try{var seq__48802 = cljs.core.seq.call(null,cljs.core.seq.call(null,callers));
var chunk__48803 = null;
var count__48804 = (0);
var i__48805 = (0);
while(true){
if((i__48805 < count__48804)){
var caller = cljs.core._nth.call(null,chunk__48803,i__48805);
if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__6772__auto__){
return or__6772__auto__;
} else {
var or__6772__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__6772__auto____$1)){
return or__6772__auto____$1;
} else {
var or__6772__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__6772__auto____$2)){
return or__6772__auto____$2;
} else {
return (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds.call(null,caller)))) && (cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)));
}
}
}
})())){
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}

var G__48806 = seq__48802;
var G__48807 = chunk__48803;
var G__48808 = count__48804;
var G__48809 = (i__48805 + (1));
seq__48802 = G__48806;
chunk__48803 = G__48807;
count__48804 = G__48808;
i__48805 = G__48809;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48802);
if(temp__4657__auto__){
var seq__48802__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48802__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__48802__$1);
var G__48810 = cljs.core.chunk_rest.call(null,seq__48802__$1);
var G__48811 = c__7592__auto__;
var G__48812 = cljs.core.count.call(null,c__7592__auto__);
var G__48813 = (0);
seq__48802 = G__48810;
chunk__48803 = G__48811;
count__48804 = G__48812;
i__48805 = G__48813;
continue;
} else {
var caller = cljs.core.first.call(null,seq__48802__$1);
if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__6772__auto__){
return or__6772__auto__;
} else {
var or__6772__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__6772__auto____$1)){
return or__6772__auto____$1;
} else {
var or__6772__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__6772__auto____$2)){
return or__6772__auto____$2;
} else {
return (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds.call(null,caller)))) && (cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)));
}
}
}
})())){
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}

var G__48814 = cljs.core.next.call(null,seq__48802__$1);
var G__48815 = null;
var G__48816 = (0);
var G__48817 = (0);
seq__48802 = G__48814;
chunk__48803 = G__48815;
count__48804 = G__48816;
i__48805 = G__48817;
continue;
}
} else {
return null;
}
}
break;
}
}finally {tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR_48801;
}}
});})(causation))
);
}
});

//# sourceMappingURL=evaluate.js.map