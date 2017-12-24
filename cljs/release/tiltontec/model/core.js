// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.base');
/**
 * Each app will populate this with the root of its application matrix.
 */
tiltontec.model.core.matrix = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
tiltontec.model.core.md_get = (function tiltontec$model$core$md_get(me,slot){
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("md-get passed nil for me accessing slot: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(me))){
var temp__4655__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.evaluate.c_get(c);
} else {
var G__26599 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__26599) : slot.call(null,G__26599));
}
} else {
return null;
}
});
tiltontec.model.core.md_getx = (function tiltontec$model$core$md_getx(tag,me,slot){
return tiltontec.model.core.md_get(me,slot);
});
tiltontec.model.core._STAR_par_STAR_ = null;
var ret__7939__auto___26604 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26605 = arguments.length;
var i__7900__auto___26606 = (0);
while(true){
if((i__7900__auto___26606 < len__7899__auto___26605)){
args__7906__auto__.push((arguments[i__7900__auto___26606]));

var G__26607 = (i__7900__auto___26606 + (1));
i__7900__auto___26606 = G__26607;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,meform,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH__STAR_par_STAR_),(function (){var x__7617__auto__ = meform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.model.core.with_par.cljs$lang$maxFixedArity = (3);

tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq26600){
var G__26601 = cljs.core.first(seq26600);
var seq26600__$1 = cljs.core.next(seq26600);
var G__26602 = cljs.core.first(seq26600__$1);
var seq26600__$2 = cljs.core.next(seq26600__$1);
var G__26603 = cljs.core.first(seq26600__$2);
var seq26600__$3 = cljs.core.next(seq26600__$2);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic(G__26601,G__26602,G__26603,seq26600__$3);
});

return null;
})()
;
tiltontec.model.core.with_par.cljs$lang$macro = true;

tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,slot,new_value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

var temp__4655__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_(c,new_value);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reset_DASH_oops], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,cljs.core.meta(me)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cz,cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))], 0));

if(cljs.core.contains_QMARK_(cljs.core.deref(me),slot)){
var G__26608 = cljs.core.str;
var G__26609 = "change not mediated by cell ";
var G__26610 = slot;
var G__26611 = "/";
var G__26612 = tiltontec.cell.base.ia_type(me);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$5 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$5(G__26608,G__26609,G__26610,G__26611,G__26612) : tiltontec.util.core.err.call(null,G__26608,G__26609,G__26610,G__26611,G__26612));
} else {
var G__26613 = cljs.core.str;
var G__26614 = "change to slot not mediated by cell and map lacks slot ";
var G__26615 = slot;
var G__26616 = "\n         ;; but has ";
var G__26617 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(me)))].join('');
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$5 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$5(G__26613,G__26614,G__26615,G__26616,G__26617) : tiltontec.util.core.err.call(null,G__26613,G__26614,G__26615,G__26616,G__26617));
}
}
});
tiltontec.model.core.backdoor_reset_BANG__QMARK_ = (function tiltontec$model$core$backdoor_reset_BANG__QMARK_(me,slot,new_value){
var temp__4655__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_(c,new_value);
} else {
return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
}
});
tiltontec.model.core.backdoor_reset_BANG_ = (function tiltontec$model$core$backdoor_reset_BANG_(me,slot,new_value){
return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26631 = arguments.length;
var i__7900__auto___26632 = (0);
while(true){
if((i__7900__auto___26632 < len__7899__auto___26631)){
args__7906__auto__.push((arguments[i__7900__auto___26632]));

var G__26633 = (i__7900__auto___26632 + (1));
i__7900__auto___26632 = G__26633;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((0) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__7907__auto__);
});

tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_(cljs.core.count(arg_list))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.model.core.make,cljs.core.cst$kw$type,arg_list);
} else {
var iargs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,arg_list);
var me = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$par,tiltontec.model.core._STAR_par_STAR_], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iargs){
return (function (p__26619){
var vec__26620 = p__26619;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26620,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(v))?tiltontec.cell.base.unbound:v)],null));
});})(iargs))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iargs){
return (function (p__26623){
var vec__26624 = p__26623;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(1),null);
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,slot));
});})(iargs))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,cljs.core.cst$kw$nascent], null),cljs.core.select_keys(iargs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type], null))], 0))], 0));
if(cljs.core.truth_(cljs.core.meta(me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iargs,me){
return (function (p__26627){
var vec__26628 = p__26627;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26628,(1),null);
return tiltontec.model.base.md_install_cell(me,slot,v);
});})(iargs,me))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$awaken,me,((function (iargs,me){
return (function (opcode,defer_info){
return tiltontec.model.base.md_awaken(me);
});})(iargs,me))
);

return me;

}
});

tiltontec.model.core.make.cljs$lang$maxFixedArity = (0);

tiltontec.model.core.make.cljs$lang$applyTo = (function (seq26618){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26618));
});

tiltontec.model.core.mm_obj = Object;
tiltontec.model.core.md_kids = (function tiltontec$model$core$md_kids(me){
return tiltontec.model.core.md_get(me,cljs.core.cst$kw$kids);
});
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (_,___$1,newk,oldk,___$2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldk),cljs.core.set(newk));
if(cljs.core.empty_QMARK_(lostks)){
return null;
} else {
var seq__26634 = cljs.core.seq(lostks);
var chunk__26635 = null;
var count__26636 = (0);
var i__26637 = (0);
while(true){
if((i__26637 < count__26636)){
var k = chunk__26635.cljs$core$IIndexed$_nth$arity$2(null,i__26637);
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.not_to_be.call(null,k));

var G__26638 = seq__26634;
var G__26639 = chunk__26635;
var G__26640 = count__26636;
var G__26641 = (i__26637 + (1));
seq__26634 = G__26638;
chunk__26635 = G__26639;
count__26636 = G__26640;
i__26637 = G__26641;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__26634);
if(temp__4657__auto__){
var seq__26634__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26634__$1)){
var c__7594__auto__ = cljs.core.chunk_first(seq__26634__$1);
var G__26642 = cljs.core.chunk_rest(seq__26634__$1);
var G__26643 = c__7594__auto__;
var G__26644 = cljs.core.count(c__7594__auto__);
var G__26645 = (0);
seq__26634 = G__26642;
chunk__26635 = G__26643;
count__26636 = G__26644;
i__26637 = G__26645;
continue;
} else {
var k = cljs.core.first(seq__26634__$1);
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.not_to_be.call(null,k));

var G__26646 = cljs.core.next(seq__26634__$1);
var G__26647 = null;
var G__26648 = (0);
var G__26649 = (0);
seq__26634 = G__26646;
chunk__26635 = G__26647;
count__26636 = G__26648;
i__26637 = G__26649;
continue;
}
} else {
return null;
}
}
break;
}
}
}
}));
tiltontec.cell.evaluate.not_to_be.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (me){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$family_DASH_not_DASH_to_DASH_be_BANG_,me], 0));

var seq__26650_26654 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__26651_26655 = null;
var count__26652_26656 = (0);
var i__26653_26657 = (0);
while(true){
if((i__26653_26657 < count__26652_26656)){
var k_26658 = chunk__26651_26655.cljs$core$IIndexed$_nth$arity$2(null,i__26653_26657);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_(k_26658))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fm_DASH_not_DASH_to_DASH_be_DASH_kid_BANG_], 0));

(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_26658) : tiltontec.cell.evaluate.not_to_be.call(null,k_26658));
} else {
}

var G__26659 = seq__26650_26654;
var G__26660 = chunk__26651_26655;
var G__26661 = count__26652_26656;
var G__26662 = (i__26653_26657 + (1));
seq__26650_26654 = G__26659;
chunk__26651_26655 = G__26660;
count__26652_26656 = G__26661;
i__26653_26657 = G__26662;
continue;
} else {
var temp__4657__auto___26663 = cljs.core.seq(seq__26650_26654);
if(temp__4657__auto___26663){
var seq__26650_26664__$1 = temp__4657__auto___26663;
if(cljs.core.chunked_seq_QMARK_(seq__26650_26664__$1)){
var c__7594__auto___26665 = cljs.core.chunk_first(seq__26650_26664__$1);
var G__26666 = cljs.core.chunk_rest(seq__26650_26664__$1);
var G__26667 = c__7594__auto___26665;
var G__26668 = cljs.core.count(c__7594__auto___26665);
var G__26669 = (0);
seq__26650_26654 = G__26666;
chunk__26651_26655 = G__26667;
count__26652_26656 = G__26668;
i__26653_26657 = G__26669;
continue;
} else {
var k_26670 = cljs.core.first(seq__26650_26664__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_(k_26670))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fm_DASH_not_DASH_to_DASH_be_DASH_kid_BANG_], 0));

(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_26670) : tiltontec.cell.evaluate.not_to_be.call(null,k_26670));
} else {
}

var G__26671 = cljs.core.next(seq__26650_26664__$1);
var G__26672 = null;
var G__26673 = (0);
var G__26674 = (0);
seq__26650_26654 = G__26671;
chunk__26651_26655 = G__26672;
count__26652_26656 = G__26673;
i__26653_26657 = G__26674;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.not_to_be_self(me);
}));
tiltontec.model.core.mx_par = (function tiltontec$model$core$mx_par(me){
return cljs.core.cst$kw$par.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
tiltontec.model.core.fget_EQ_ = (function tiltontec$model$core$fget_EQ_(seek,poss){
if(cljs.core.truth_((function (){var or__6774__auto__ = tiltontec.util.core.any_ref_QMARK_(poss);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return typeof poss === 'string';
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("poss not ref "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof poss === 'string')].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (any-ref? poss) (string? poss))")].join('')));
}

if(cljs.core.not(tiltontec.util.core.any_ref_QMARK_(poss))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fget_EQ_bailnotref,poss], 0));

return false;
} else {
if(cljs.core.fn_QMARK_(seek)){
return (seek.cljs$core$IFn$_invoke$arity$1 ? seek.cljs$core$IFn$_invoke$arity$1(poss) : seek.call(null,poss));
} else {
if((seek instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(seek,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(poss)))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.ia_type(poss),seek));
} else {
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(":fget=-else-pplain=!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([seek], 0));

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(seek,poss);

}
}
}
});
tiltontec.model.core.fasc = (function tiltontec$model$core$fasc(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26683 = arguments.length;
var i__7900__auto___26684 = (0);
while(true){
if((i__7900__auto___26684 < len__7899__auto___26683)){
args__7906__auto__.push((arguments[i__7900__auto___26684]));

var G__26685 = (i__7900__auto___26684 + (1));
i__7900__auto___26684 = G__26685;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__6762__auto__ = where;
if(cljs.core.truth_(and__6762__auto__)){
return what;
} else {
return and__6762__auto__;
}
})())){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$wocd_QMARK_,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)], 0));
var _STAR_depender_STAR_26678 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{var or__6774__auto__ = (function (){var and__6762__auto__ = cljs.core.cst$kw$me_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6762__auto__)){
var and__6762__auto____$1 = tiltontec.model.core.fget_EQ_(what,where);
if(cljs.core.truth_(and__6762__auto____$1)){
return where;
} else {
return and__6762__auto____$1;
}
} else {
return and__6762__auto__;
}
})();
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var or__6774__auto____$1 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$par.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic(what,par,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,true], 0));
} else {
return null;
}
})();
if(cljs.core.truth_(or__6774__auto____$1)){
return or__6774__auto____$1;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$must_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
var G__26679 = cljs.core.cst$kw$fasc_DASH_must_DASH_failed;
var G__26680 = what;
var G__26681 = where;
var G__26682 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__26679,G__26680,G__26681,G__26682) : tiltontec.util.core.err.call(null,G__26679,G__26680,G__26681,G__26682));
} else {
return null;
}
}
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_26678;
}} else {
return null;
}
});

tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq26675){
var G__26676 = cljs.core.first(seq26675);
var seq26675__$1 = cljs.core.next(seq26675);
var G__26677 = cljs.core.first(seq26675__$1);
var seq26675__$2 = cljs.core.next(seq26675__$1);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic(G__26676,G__26677,seq26675__$2);
});

tiltontec.model.core.fget = (function tiltontec$model$core$fget(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26695 = arguments.length;
var i__7900__auto___26696 = (0);
while(true){
if((i__7900__auto___26696 < len__7899__auto___26695)){
args__7906__auto__.push((arguments[i__7900__auto___26696]));

var G__26697 = (i__7900__auto___26696 + (1));
i__7900__auto___26696 = G__26697;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__6762__auto__ = where;
if(cljs.core.truth_(and__6762__auto__)){
var and__6762__auto____$1 = what;
if(cljs.core.truth_(and__6762__auto____$1)){
return tiltontec.util.core.any_ref_QMARK_(where);
} else {
return and__6762__auto____$1;
}
} else {
return and__6762__auto__;
}
})())){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$inside_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$wocd_QMARK_,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)], 0));
var _STAR_depender_STAR_26690 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(where))){
var or__6774__auto__ = (function (){var and__6762__auto__ = cljs.core.cst$kw$me_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6762__auto__)){
var and__6762__auto____$1 = tiltontec.model.core.fget_EQ_(what,where);
if(cljs.core.truth_(and__6762__auto____$1)){
return where;
} else {
return and__6762__auto____$1;
}
} else {
return and__6762__auto__;
}
})();
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var or__6774__auto____$1 = (function (){var and__6762__auto__ = cljs.core.cst$kw$inside_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6762__auto__)){
var temp__4655__auto__ = tiltontec.model.core.md_get(where,cljs.core.cst$kw$kids);
if(cljs.core.truth_(temp__4655__auto__)){
var kids = temp__4655__auto__;
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_DASH_kids_BANG__BANG__BANG_,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where))], 0));

var temp__4655__auto____$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$skip.cljs$core$IFn$_invoke$arity$1(options__$1)]),kids);
if(cljs.core.truth_(temp__4655__auto____$1)){
var netkids = temp__4655__auto____$1;
return cljs.core.some(((function (netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__6762__auto__,or__6774__auto__,_STAR_depender_STAR_26690,options__$1){
return (function (p1__26686_SHARP_){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(what,p1__26686_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});})(netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__6762__auto__,or__6774__auto__,_STAR_depender_STAR_26690,options__$1))
,netkids);
} else {
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$no_DASH_net_DASH_kids], 0));
}
} else {
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_DASH_no_DASH_kids,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where))], 0));
}
} else {
return and__6762__auto__;
}
})();
if(cljs.core.truth_(or__6774__auto____$1)){
return or__6774__auto____$1;
} else {
var or__6774__auto____$2 = (function (){var and__6762__auto__ = cljs.core.cst$kw$up_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6762__auto__)){
var temp__4657__auto__ = cljs.core.cst$kw$par.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(what,par,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$skip,where,cljs.core.cst$kw$inside_QMARK_,true], 0));
} else {
return null;
}
} else {
return and__6762__auto__;
}
})();
if(cljs.core.truth_(or__6774__auto____$2)){
return or__6774__auto____$2;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$must_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
var G__26691 = cljs.core.cst$kw$fget_DASH_must_DASH_failed;
var G__26692 = what;
var G__26693 = where;
var G__26694 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__26691,G__26692,G__26693,G__26694) : tiltontec.util.core.err.call(null,G__26691,G__26692,G__26693,G__26694));
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_26690;
}} else {
return null;
}
});

tiltontec.model.core.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fget.cljs$lang$applyTo = (function (seq26687){
var G__26688 = cljs.core.first(seq26687);
var seq26687__$1 = cljs.core.next(seq26687);
var G__26689 = cljs.core.first(seq26687__$1);
var seq26687__$2 = cljs.core.next(seq26687__$1);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(G__26688,G__26689,seq26687__$2);
});

tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(what,where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$must_QMARK_,true,cljs.core.cst$kw$up_QMARK_,true], 0));
});
var ret__7939__auto___26707 = (function (){
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26708 = arguments.length;
var i__7900__auto___26709 = (0);
while(true){
if((i__7900__auto___26709 < len__7899__auto___26708)){
args__7906__auto__.push((arguments[i__7900__auto___26709]));

var G__26710 = (i__7900__auto___26709 + (1));
i__7900__auto___26709 = G__26710;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((4) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7907__auto__);
});

tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__26703){
var vec__26704 = p__26703;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26704,(0),null);
var me__$1 = (function (){var or__6774__auto__ = me;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH_md_DASH_get),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_BANG_),(function (){var x__7617__auto__ = what;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = me__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4);

tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq26698){
var G__26699 = cljs.core.first(seq26698);
var seq26698__$1 = cljs.core.next(seq26698);
var G__26700 = cljs.core.first(seq26698__$1);
var seq26698__$2 = cljs.core.next(seq26698__$1);
var G__26701 = cljs.core.first(seq26698__$2);
var seq26698__$3 = cljs.core.next(seq26698__$2);
var G__26702 = cljs.core.first(seq26698__$3);
var seq26698__$4 = cljs.core.next(seq26698__$3);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26699,G__26700,G__26701,G__26702,seq26698__$4);
});

return null;
})()
;
tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true;

/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.model.core.mxu_find_class = (function tiltontec$model$core$mxu_find_class(where,class$){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__26711_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.md_get(p1__26711_SHARP_,cljs.core.cst$kw$class));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with given name
 */
tiltontec.model.core.mxu_find_name = (function tiltontec$model$core$mxu_find_name(where,name){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__26712_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,tiltontec.model.core.md_get(p1__26712_SHARP_,cljs.core.cst$kw$name));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search matrix ascendants only from node 'me' for first with given tag
 */
tiltontec.model.core.mxu_find_type = (function tiltontec$model$core$mxu_find_type(me,type){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

return tiltontec.model.core.fasc((function (visited){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,tiltontec.cell.base.ia_type(visited));
}),me);
});
tiltontec.model.core.fmi_w_class = (function tiltontec$model$core$fmi_w_class(where,class$){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__26713_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(p1__26713_SHARP_))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.md_get(p1__26713_SHARP_,cljs.core.cst$kw$class));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
/**
 * Search matrix below node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__26714_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(p1__26714_SHARP_))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,tiltontec.model.core.md_get(p1__26714_SHARP_,property));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
var ret__7939__auto___26718 = (function (){
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26719 = arguments.length;
var i__7900__auto___26720 = (0);
while(true){
if((i__7900__auto___26720 < len__7899__auto___26719)){
args__7906__auto__.push((arguments[i__7900__auto___26720]));

var G__26721 = (i__7900__auto___26720 + (1));
i__7900__auto___26720 = G__26721;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH__STAR_par_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$me)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assert),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH__STAR_par_STAR_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_doall),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_remove),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_flatten),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),tree)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.model.core.the_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq26715){
var G__26716 = cljs.core.first(seq26715);
var seq26715__$1 = cljs.core.next(seq26715);
var G__26717 = cljs.core.first(seq26715__$1);
var seq26715__$2 = cljs.core.next(seq26715__$1);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__26716,G__26717,seq26715__$2);
});

return null;
})()
;
tiltontec.model.core.the_kids.cljs$lang$macro = true;

var ret__7939__auto___26725 = (function (){
tiltontec.model.core.c_QMARK_kids = (function tiltontec$model$core$c_QMARK_kids(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26726 = arguments.length;
var i__7900__auto___26727 = (0);
while(true){
if((i__7900__auto___26727 < len__7899__auto___26726)){
args__7906__auto__.push((arguments[i__7900__auto___26727]));

var G__26728 = (i__7900__auto___26727 + (1));
i__7900__auto___26727 = G__26728;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH_c_QMARK_),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assert),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$me),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"no me for c?kids")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids),tree)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.model.core.c_QMARK_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.c_QMARK_kids.cljs$lang$applyTo = (function (seq26722){
var G__26723 = cljs.core.first(seq26722);
var seq26722__$1 = cljs.core.next(seq26722);
var G__26724 = cljs.core.first(seq26722__$1);
var seq26722__$2 = cljs.core.next(seq26722__$1);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic(G__26723,G__26724,seq26722__$2);
});

return null;
})()
;
tiltontec.model.core.c_QMARK_kids.cljs$lang$macro = true;

tiltontec.model.core.kid_values_kids = (function tiltontec$model$core$kid_values_kids(me,x_kids){
var x_kids__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_kids,tiltontec.cell.base.unbound))?cljs.core.PersistentVector.EMPTY:x_kids);
var k_key = tiltontec.model.core.md_get(me,cljs.core.cst$kw$kid_DASH_key);
var k_factory = tiltontec.model.core.md_get(me,cljs.core.cst$kw$kid_DASH_factory);
if(cljs.core.truth_(k_key)){
} else {
throw (new Error("Assert failed: (and k-key)"));
}

if(cljs.core.truth_(k_factory)){
} else {
throw (new Error("Assert failed: (and k-factory)"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7563__auto__ = ((function (x_kids__$1,k_key,k_factory){
return (function tiltontec$model$core$kid_values_kids_$_iter__26729(s__26730){
return (new cljs.core.LazySeq(null,((function (x_kids__$1,k_key,k_factory){
return (function (){
var s__26730__$1 = s__26730;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26730__$1);
if(temp__4657__auto__){
var s__26730__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26730__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__26730__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__26732 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__26731 = (0);
while(true){
if((i__26731 < size__7562__auto__)){
var kid_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__26731);
cljs.core.chunk_append(b__26732,(function (){var or__6774__auto__ = cljs.core.some(((function (i__26731,kid_value,c__7561__auto__,size__7562__auto__,b__26732,s__26730__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(kid_value,(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(x_kid) : k_key.call(null,x_kid)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(x_kid) : k_key.call(null,x_kid))], 0))){
return x_kid;
} else {
return null;
}
});})(i__26731,kid_value,c__7561__auto__,size__7562__auto__,b__26732,s__26730__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var _STAR_par_STAR_26733 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_26733;
}}
})());

var G__26735 = (i__26731 + (1));
i__26731 = G__26735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26732),tiltontec$model$core$kid_values_kids_$_iter__26729(cljs.core.chunk_rest(s__26730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26732),null);
}
} else {
var kid_value = cljs.core.first(s__26730__$2);
return cljs.core.cons((function (){var or__6774__auto__ = cljs.core.some(((function (kid_value,s__26730__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(kid_value,(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(x_kid) : k_key.call(null,x_kid)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(x_kid) : k_key.call(null,x_kid))], 0))){
return x_kid;
} else {
return null;
}
});})(kid_value,s__26730__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var _STAR_par_STAR_26734 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_26734;
}}
})(),tiltontec$model$core$kid_values_kids_$_iter__26729(cljs.core.rest(s__26730__$2)));
}
} else {
return null;
}
break;
}
});})(x_kids__$1,k_key,k_factory))
,null,null));
});})(x_kids__$1,k_key,k_factory))
;
return iter__7563__auto__(tiltontec.model.core.md_get(me,cljs.core.cst$kw$kid_DASH_values));
})());
});
