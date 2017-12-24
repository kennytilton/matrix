// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.model.base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.macros');
tiltontec.model.base.md_name = (function tiltontec$model$base$md_name(ref){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});
tiltontec.model.base.md_state = (function tiltontec$model$base$md_state(ref){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref));
});

tiltontec.model.base.md_cz = (function tiltontec$model$base$md_cz(ref){
return cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref));
});
tiltontec.model.base.md_cell = (function tiltontec$model$base$md_cell(me,slot){
var G__26575 = cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__26575) : slot.call(null,G__26575));
});
tiltontec.model.base.md_install_cell = (function tiltontec$model$base$md_install_cell(me,slot,c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.assoc,cljs.core.cst$kw$slot,slot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me,me], 0));

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))?tiltontec.cell.base.c_value(c):null));

return true;
} else {
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),c);

return false;

}
});
if(typeof tiltontec.model.base.md_awaken_before !== 'undefined'){
} else {
tiltontec.model.base.md_awaken_before = (function (){var method_table__7708__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.model.base","md-awaken-before"),tiltontec.cell.base.ia_type,cljs.core.cst$kw$default,hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
tiltontec.model.base.md_awaken_before.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
return null;
}));
/**
 * (1) do initial evaluation of all ruled slots
 * (2) call observers of all slots
 */
tiltontec.model.base.md_awaken = (function tiltontec$model$base$md_awaken(me){
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("md-awaken passed nil"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

(tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1 ? tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1(me) : tiltontec.model.base.md_awaken_before.call(null,me));

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nascent,tiltontec.model.base.md_state(me)));

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$awakening);

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7563__auto__ = (function tiltontec$model$base$md_awaken_$_iter__26576(s__26577){
return (new cljs.core.LazySeq(null,(function (){
var s__26577__$1 = s__26577;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26577__$1);
if(temp__4657__auto__){
var s__26577__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26577__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__26577__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__26579 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__26578 = (0);
while(true){
if((i__26578 < size__7562__auto__)){
var slot = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__26578);
cljs.core.chunk_append(b__26579,(function (){var temp__4657__auto____$1 = (function (){var G__26580 = tiltontec.model.base.md_cz(me);
var G__26581 = cljs.core.cst$kw$not_DASH_found;
return (slot.cljs$core$IFn$_invoke$arity$2 ? slot.cljs$core$IFn$_invoke$arity$2(G__26580,G__26581) : slot.call(null,G__26580,G__26581));
})();
if(cljs.core.truth_(temp__4657__auto____$1)){
var c = temp__4657__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$not_DASH_found)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot,cljs.core.cst$kw$kids)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.cell.base.ia_type(me),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),cljs.core.cst$kw$md_DASH_awaken_DASH_noslot_DASH_obs,slot,cljs.core.keys(tiltontec.model.base.md_cz(me)),cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$2(tiltontec.model.base.md_cz(me),cljs.core.cst$kw$hunh)], 0));

} else {
}

var G__26582 = slot;
var G__26583 = me;
var G__26584 = (function (){var G__26587 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__26587) : slot.call(null,G__26587));
})();
var G__26585 = tiltontec.cell.base.unbound;
var G__26586 = null;
return (tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__26582,G__26583,G__26584,G__26585,G__26586) : tiltontec.cell.observer.observe.call(null,G__26582,G__26583,G__26584,G__26585,G__26586));
} else {
return (tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.c_awaken.call(null,c));

}
} else {
return null;
}
})());

var G__26596 = (i__26578 + (1));
i__26578 = G__26596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26579),tiltontec$model$base$md_awaken_$_iter__26576(cljs.core.chunk_rest(s__26577__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26579),null);
}
} else {
var slot = cljs.core.first(s__26577__$2);
return cljs.core.cons((function (){var temp__4657__auto____$1 = (function (){var G__26588 = tiltontec.model.base.md_cz(me);
var G__26589 = cljs.core.cst$kw$not_DASH_found;
return (slot.cljs$core$IFn$_invoke$arity$2 ? slot.cljs$core$IFn$_invoke$arity$2(G__26588,G__26589) : slot.call(null,G__26588,G__26589));
})();
if(cljs.core.truth_(temp__4657__auto____$1)){
var c = temp__4657__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$not_DASH_found)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot,cljs.core.cst$kw$kids)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.cell.base.ia_type(me),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),cljs.core.cst$kw$md_DASH_awaken_DASH_noslot_DASH_obs,slot,cljs.core.keys(tiltontec.model.base.md_cz(me)),cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$2(tiltontec.model.base.md_cz(me),cljs.core.cst$kw$hunh)], 0));

} else {
}

var G__26590 = slot;
var G__26591 = me;
var G__26592 = (function (){var G__26595 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__26595) : slot.call(null,G__26595));
})();
var G__26593 = tiltontec.cell.base.unbound;
var G__26594 = null;
return (tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__26590,G__26591,G__26592,G__26593,G__26594) : tiltontec.cell.observer.observe.call(null,G__26590,G__26591,G__26592,G__26593,G__26594));
} else {
return (tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.c_awaken.call(null,c));

}
} else {
return null;
}
})(),tiltontec$model$base$md_awaken_$_iter__26576(cljs.core.rest(s__26577__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__(cljs.core.keys(cljs.core.deref(me)));
})());

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$awake);

return me;
});
