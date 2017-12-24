// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('todomx.startwatch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('tiltontec.tag.gen');
goog.require('tiltontec.cell.synapse');

todomx.startwatch.matrix_build_BANG_ = (function todomx$startwatch$matrix_build_BANG_(){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$todomx$startwatch_SLASH_startwatch,cljs.core.cst$kw$mx_DASH_dom,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$md_SLASH_with_DASH_par,cljs.core.cst$sym$me,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$div,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.PersistentArrayMap.EMPTY,"On your mark. Get set...open your browser console."),cljs.core.list(cljs.core.cst$sym$clock))], null))),cljs.core.cst$kw$input_QMARK_,null,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR_34434 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var _STAR_par_STAR_34435 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag("div",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.PersistentArrayMap.EMPTY,"On your mark. Get set...open your browser console."),cljs.core.list(cljs.core.cst$sym$clock))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_34435,_STAR_depender_STAR_34434,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34436 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"On your mark. Get set...open your browser console.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_34436,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_34435,_STAR_depender_STAR_34434,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34438 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"On your mark. Get set...open your browser console."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34438;
}});})(_STAR_par_STAR_34436,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_34435,_STAR_depender_STAR_34434,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = (todomx.startwatch.clock.cljs$core$IFn$_invoke$arity$0 ? todomx.startwatch.clock.cljs$core$IFn$_invoke$arity$0() : todomx.startwatch.clock.call(null));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34436;
}});})(_STAR_par_STAR_34435,_STAR_depender_STAR_34434,me,cell,slot_name,cache))
], 0)))], null);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34435;
}}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_34434;
}})], 0))], 0));
});
todomx.startwatch.clock = (function todomx$startwatch$clock(){
return tiltontec.tag.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"example-clock",cljs.core.cst$kw$tick,tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic(false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ephemeral_QMARK_,true], 0)),cljs.core.cst$kw$ticker,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$js_SLASH_setInterval,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$md_DASH_reset_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$tick,true)),(110))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var G__34439 = ((function (me,cell,slot_name,cache){
return (function (){
return tiltontec.model.core.md_reset_BANG_(me,cljs.core.cst$kw$tick,true);
});})(me,cell,slot_name,cache))
;
var G__34440 = (110);
return setInterval(G__34439,G__34440);
})], 0)),cljs.core.cst$kw$content,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$self,cljs.core.cst$sym$me], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$with_DASH_synapse,cljs.core.list(cljs.core.cst$kw$throttle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$last,cljs.core.list(cljs.core.cst$sym$atom,null)], null)),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$self,cljs.core.cst$kw$tick),cljs.core.list(cljs.core.cst$sym$println,cljs.core.cst$kw$tick_DASH_raw_DASH_unthrottled,cljs.core.list(cljs.core.cst$sym$now)),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$prop_QMARK_,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$last)),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.list(cljs.core.cst$sym$now),cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$last)),(990)))], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$prop_QMARK_,cljs.core.list(cljs.core.cst$sym$reset_BANG_,cljs.core.cst$sym$last,cljs.core.list(cljs.core.cst$sym$now))),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagate,cljs.core.cst$sym$prop_QMARK_], null))))),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$d,cljs.core.list(cljs.core.cst$sym$js_SLASH_Date$)], null),cljs.core.list(cljs.core.cst$sym$println,cljs.core.cst$kw$tick_BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG_),cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$first,cljs.core.list(cljs.core.cst$sym$str_SLASH_split,cljs.core.list(cljs.core.cst$sym$$toTimeString,cljs.core.cst$sym$d)," ")),":",cljs.core.list(cljs.core.cst$sym$$getUTCMilliseconds,cljs.core.cst$sym$d))),"*checks watch*"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var self = me;
if(cljs.core.truth_((function (){var existing_syn__34408__auto__ = tiltontec.cell.synapse.existing_syn(cljs.core.cst$kw$throttle);
var synapse__34409__auto__ = (function (){var or__6774__auto__ = existing_syn__34408__auto__;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var new_syn__34410__auto__ = (function (){var last = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$making_DASH_syn_BANG__QMARK_,cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tiltontec.cell.base._STAR_depender_STAR_))], 0));

return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,cljs.core.cst$kw$model.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.cst$kw$slot,cljs.core.cst$kw$throttle,cljs.core.cst$kw$synapse_DASH_id,cljs.core.cst$kw$throttle,cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$self,cljs.core.cst$kw$tick),cljs.core.list(cljs.core.cst$sym$println,cljs.core.cst$kw$tick_DASH_raw_DASH_unthrottled,cljs.core.list(cljs.core.cst$sym$now)),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$prop_QMARK_,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$last)),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.list(cljs.core.cst$sym$now),cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$last)),(990)))], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$prop_QMARK_,cljs.core.list(cljs.core.cst$sym$reset_BANG_,cljs.core.cst$sym$last,cljs.core.list(cljs.core.cst$sym$now))),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagate,cljs.core.cst$sym$prop_QMARK_], null))))),cljs.core.cst$kw$synaptic_QMARK_,true,cljs.core.cst$kw$rule,((function (last,or__6774__auto__,existing_syn__34408__auto__,self,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(tiltontec.model.core.md_get(self,cljs.core.cst$kw$tick))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tick_DASH_raw_DASH_unthrottled,tiltontec.util.core.now()], 0));

var prop_QMARK_ = ((cljs.core.deref(last) == null)) || (((tiltontec.util.core.now() - cljs.core.deref(last)) >= (990)));
if(prop_QMARK_){
cljs.core.reset_BANG_(last,tiltontec.util.core.now());
} else {
}

return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagate,prop_QMARK_], null));
} else {
return null;
}
});})(last,or__6774__auto__,existing_syn__34408__auto__,self,me,cell,slot_name,cache))
], 0));
})();
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$synapses,tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_synapses(tiltontec.cell.base._STAR_depender_STAR_),new_syn__34410__auto__));

tiltontec.cell.evaluate.record_dependency(new_syn__34410__auto__);

return new_syn__34410__auto__;
}
})();
var value__34411__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,((function (existing_syn__34408__auto__,synapse__34409__auto__,self,me,cell,slot_name,cache){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.ensure_value_is_current(synapse__34409__auto__,cljs.core.cst$kw$synapse,tiltontec.cell.base._STAR_depender_STAR_);
});})(existing_syn__34408__auto__,synapse__34409__auto__,self,me,cell,slot_name,cache))
);
tiltontec.cell.evaluate.record_dependency(synapse__34409__auto__);

return value__34411__auto__;
})())){
var d = (new Date());
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tick_BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG_], 0));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(d.toTimeString()," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getUTCMilliseconds())].join('');
} else {
return "*checks watch*";
}
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34441 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34441;
}})], 0)));
});
