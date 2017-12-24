// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
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
tiltontec.model.core.matrix = cljs.core.atom.call(null,null);
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.md_get = (function tiltontec$model$core$md_get(me,slot){
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("md-get passed nil for me accessing slot: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,me))){
var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.evaluate.c_get.call(null,c);
} else {
return slot.call(null,cljs.core.deref.call(null,me));
}
} else {
return null;
}
});
tiltontec.model.core.md_getx = (function tiltontec$model$core$md_getx(tag,me,slot){
return tiltontec.model.core.md_get.call(null,me,slot);
});
tiltontec.model.core._STAR_par_STAR_ = null;
var ret__7937__auto___50179 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__7904__auto__ = [];
var len__7897__auto___50180 = arguments.length;
var i__7898__auto___50181 = (0);
while(true){
if((i__7898__auto___50181 < len__7897__auto___50180)){
args__7904__auto__.push((arguments[i__7898__auto___50181]));

var G__50182 = (i__7898__auto___50181 + (1));
i__7898__auto___50181 = G__50182;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,meform,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)),(function (){var x__7615__auto__ = meform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
});

tiltontec.model.core.with_par.cljs$lang$maxFixedArity = (3);

tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq50175){
var G__50176 = cljs.core.first.call(null,seq50175);
var seq50175__$1 = cljs.core.next.call(null,seq50175);
var G__50177 = cljs.core.first.call(null,seq50175__$1);
var seq50175__$2 = cljs.core.next.call(null,seq50175__$1);
var G__50178 = cljs.core.first.call(null,seq50175__$2);
var seq50175__$3 = cljs.core.next.call(null,seq50175__$2);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic(G__50176,G__50177,G__50178,seq50175__$3);
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

var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"reset-oops","reset-oops",896366160));

cljs.core.println.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta.call(null,me));

cljs.core.println.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me)));

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,me),slot)){
return tiltontec.util.core.err.call(null,cljs.core.str,"change not mediated by cell ",slot,"/",tiltontec.cell.base.ia_type.call(null,me));
} else {
return tiltontec.util.core.err.call(null,cljs.core.str,"change to slot not mediated by cell and map lacks slot ",slot,"\n         ;; but has ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,cljs.core.deref.call(null,me)))].join(''));
}
}
});
tiltontec.model.core.backdoor_reset_BANG__QMARK_ = (function tiltontec$model$core$backdoor_reset_BANG__QMARK_(me,slot,new_value){
var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
}
});
tiltontec.model.core.backdoor_reset_BANG_ = (function tiltontec$model$core$backdoor_reset_BANG_(me,slot,new_value){
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__7904__auto__ = [];
var len__7897__auto___50196 = arguments.length;
var i__7898__auto___50197 = (0);
while(true){
if((i__7898__auto___50197 < len__7897__auto___50196)){
args__7904__auto__.push((arguments[i__7898__auto___50197]));

var G__50198 = (i__7898__auto___50197 + (1));
i__7898__auto___50197 = G__50198;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((0) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__7905__auto__);
});

tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,arg_list))){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),arg_list);
} else {
var iargs = cljs.core.apply.call(null,cljs.core.hash_map,arg_list);
var me = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"par","par",-61778778),tiltontec.model.core._STAR_par_STAR_], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (iargs){
return (function (p__50184){
var vec__50185 = p__50184;
var k = cljs.core.nth.call(null,vec__50185,(0),null);
var v = cljs.core.nth.call(null,vec__50185,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,v))?tiltontec.cell.base.unbound:v)],null));
});})(iargs))
,cljs.core.filter.call(null,((function (iargs){
return (function (p__50188){
var vec__50189 = p__50188;
var slot = cljs.core.nth.call(null,vec__50189,(0),null);
var v = cljs.core.nth.call(null,vec__50189,(1),null);
return !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348),slot));
});})(iargs))
,cljs.core.partition.call(null,(2),arg_list))))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"nascent","nascent",443401807)], null),cljs.core.select_keys.call(null,iargs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null))));
if(cljs.core.truth_(cljs.core.meta.call(null,me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.filter.call(null,((function (iargs,me){
return (function (p__50192){
var vec__50193 = p__50192;
var slot = cljs.core.nth.call(null,vec__50193,(0),null);
var v = cljs.core.nth.call(null,vec__50193,(1),null);
return tiltontec.model.base.md_install_cell.call(null,me,slot,v);
});})(iargs,me))
,cljs.core.partition.call(null,(2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"awaken","awaken",-1899628152),me,((function (iargs,me){
return (function (opcode,defer_info){
return tiltontec.model.base.md_awaken.call(null,me);
});})(iargs,me))
);

return me;

}
});

tiltontec.model.core.make.cljs$lang$maxFixedArity = (0);

tiltontec.model.core.make.cljs$lang$applyTo = (function (seq50183){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50183));
});

tiltontec.model.core.mm_obj = Object;
tiltontec.model.core.md_kids = (function tiltontec$model$core$md_kids(me){
return tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (_,___$1,newk,oldk,___$2){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks)){
return null;
} else {
var seq__50199 = cljs.core.seq.call(null,lostks);
var chunk__50200 = null;
var count__50201 = (0);
var i__50202 = (0);
while(true){
if((i__50202 < count__50201)){
var k = cljs.core._nth.call(null,chunk__50200,i__50202);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__50203 = seq__50199;
var G__50204 = chunk__50200;
var G__50205 = count__50201;
var G__50206 = (i__50202 + (1));
seq__50199 = G__50203;
chunk__50200 = G__50204;
count__50201 = G__50205;
i__50202 = G__50206;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50199);
if(temp__4657__auto__){
var seq__50199__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50199__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__50199__$1);
var G__50207 = cljs.core.chunk_rest.call(null,seq__50199__$1);
var G__50208 = c__7592__auto__;
var G__50209 = cljs.core.count.call(null,c__7592__auto__);
var G__50210 = (0);
seq__50199 = G__50207;
chunk__50200 = G__50208;
count__50201 = G__50209;
i__50202 = G__50210;
continue;
} else {
var k = cljs.core.first.call(null,seq__50199__$1);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__50211 = cljs.core.next.call(null,seq__50199__$1);
var G__50212 = null;
var G__50213 = (0);
var G__50214 = (0);
seq__50199 = G__50211;
chunk__50200 = G__50212;
count__50201 = G__50213;
i__50202 = G__50214;
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
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (me){
cljs.core.println.call(null,new cljs.core.Keyword(null,"family-not-to-be!","family-not-to-be!",996747952),me);

var seq__50215_50219 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
var chunk__50216_50220 = null;
var count__50217_50221 = (0);
var i__50218_50222 = (0);
while(true){
if((i__50218_50222 < count__50217_50221)){
var k_50223 = cljs.core._nth.call(null,chunk__50216_50220,i__50218_50222);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_50223))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fm-not-to-be-kid!","fm-not-to-be-kid!",-2094387713));

tiltontec.cell.evaluate.not_to_be.call(null,k_50223);
} else {
}

var G__50224 = seq__50215_50219;
var G__50225 = chunk__50216_50220;
var G__50226 = count__50217_50221;
var G__50227 = (i__50218_50222 + (1));
seq__50215_50219 = G__50224;
chunk__50216_50220 = G__50225;
count__50217_50221 = G__50226;
i__50218_50222 = G__50227;
continue;
} else {
var temp__4657__auto___50228 = cljs.core.seq.call(null,seq__50215_50219);
if(temp__4657__auto___50228){
var seq__50215_50229__$1 = temp__4657__auto___50228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50215_50229__$1)){
var c__7592__auto___50230 = cljs.core.chunk_first.call(null,seq__50215_50229__$1);
var G__50231 = cljs.core.chunk_rest.call(null,seq__50215_50229__$1);
var G__50232 = c__7592__auto___50230;
var G__50233 = cljs.core.count.call(null,c__7592__auto___50230);
var G__50234 = (0);
seq__50215_50219 = G__50231;
chunk__50216_50220 = G__50232;
count__50217_50221 = G__50233;
i__50218_50222 = G__50234;
continue;
} else {
var k_50235 = cljs.core.first.call(null,seq__50215_50229__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_50235))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fm-not-to-be-kid!","fm-not-to-be-kid!",-2094387713));

tiltontec.cell.evaluate.not_to_be.call(null,k_50235);
} else {
}

var G__50236 = cljs.core.next.call(null,seq__50215_50229__$1);
var G__50237 = null;
var G__50238 = (0);
var G__50239 = (0);
seq__50215_50219 = G__50236;
chunk__50216_50220 = G__50237;
count__50217_50221 = G__50238;
i__50218_50222 = G__50239;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.not_to_be_self.call(null,me);
}));
tiltontec.model.core.mx_par = (function tiltontec$model$core$mx_par(me){
return new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.fget_EQ_ = (function tiltontec$model$core$fget_EQ_(seek,poss){
if(cljs.core.truth_((function (){var or__6772__auto__ = tiltontec.util.core.any_ref_QMARK_.call(null,poss);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return typeof poss === 'string';
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("poss not ref "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof poss === 'string')].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (any-ref? poss) (string? poss))")].join('')));
}

if(cljs.core.not.call(null,tiltontec.util.core.any_ref_QMARK_.call(null,poss))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fget=bailnotref","fget=bailnotref",-1507107200),poss);

return false;
} else {
if(cljs.core.fn_QMARK_.call(null,seek)){
return seek.call(null,poss);
} else {
if((seek instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.call(null,seek,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,poss)))) || (cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,poss),seek));
} else {
tiltontec.util.base.call_trc.call(null,":fget=-else-pplain=!",seek);

return cljs.core._EQ_.call(null,seek,poss);

}
}
}
});
tiltontec.model.core.fasc = (function tiltontec$model$core$fasc(var_args){
var args__7904__auto__ = [];
var len__7897__auto___50244 = arguments.length;
var i__7898__auto___50245 = (0);
while(true){
if((i__7898__auto___50245 < len__7897__auto___50244)){
args__7904__auto__.push((arguments[i__7898__auto___50245]));

var G__50246 = (i__7898__auto___50245 + (1));
i__7898__auto___50245 = G__50246;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__6760__auto__ = where;
if(cljs.core.truth_(and__6760__auto__)){
return what;
} else {
return and__6760__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_50243 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{var or__6772__auto__ = (function (){var and__6760__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = tiltontec.model.core.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__6760__auto____$1)){
return where;
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var or__6772__auto____$1 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fasc.call(null,what,par,new cljs.core.Keyword(null,"me?","me?",-625404259),true);
} else {
return null;
}
})();
if(cljs.core.truth_(or__6772__auto____$1)){
return or__6772__auto____$1;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fasc-must-failed","fasc-must-failed",845302164),what,where,options__$1);
} else {
return null;
}
}
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_50243;
}} else {
return null;
}
});

tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq50240){
var G__50241 = cljs.core.first.call(null,seq50240);
var seq50240__$1 = cljs.core.next.call(null,seq50240);
var G__50242 = cljs.core.first.call(null,seq50240__$1);
var seq50240__$2 = cljs.core.next.call(null,seq50240__$1);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic(G__50241,G__50242,seq50240__$2);
});

tiltontec.model.core.fget = (function tiltontec$model$core$fget(var_args){
var args__7904__auto__ = [];
var len__7897__auto___50252 = arguments.length;
var i__7898__auto___50253 = (0);
while(true){
if((i__7898__auto___50253 < len__7897__auto___50252)){
args__7904__auto__.push((arguments[i__7898__auto___50253]));

var G__50254 = (i__7898__auto___50253 + (1));
i__7898__auto___50253 = G__50254;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__6760__auto__ = where;
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = what;
if(cljs.core.truth_(and__6760__auto____$1)){
return tiltontec.util.core.any_ref_QMARK_.call(null,where);
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_50251 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,where))){
var or__6772__auto__ = (function (){var and__6760__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = tiltontec.model.core.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__6760__auto____$1)){
return where;
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var or__6772__auto____$1 = (function (){var and__6760__auto__ = new cljs.core.Keyword(null,"inside?","inside?",639243696).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6760__auto__)){
var temp__4655__auto__ = tiltontec.model.core.md_get.call(null,where,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4655__auto__)){
var kids = temp__4655__auto__;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-kids!!!","inside-kids!!!",-988551250),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));

var temp__4655__auto____$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"skip","skip",602715391).cljs$core$IFn$_invoke$arity$1(options__$1)]),kids);
if(cljs.core.truth_(temp__4655__auto____$1)){
var netkids = temp__4655__auto____$1;
return cljs.core.some.call(null,((function (netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__6760__auto__,or__6772__auto__,_STAR_depender_STAR_50251,options__$1){
return (function (p1__50247_SHARP_){
return tiltontec.model.core.fget.call(null,what,p1__50247_SHARP_,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});})(netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__6760__auto__,or__6772__auto__,_STAR_depender_STAR_50251,options__$1))
,netkids);
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"no-net-kids","no-net-kids",1963649640));
}
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-no-kids","inside-no-kids",-1437068961),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));
}
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(or__6772__auto____$1)){
return or__6772__auto____$1;
} else {
var or__6772__auto____$2 = (function (){var and__6760__auto__ = new cljs.core.Keyword(null,"up?","up?",77854972).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6760__auto__)){
var temp__4657__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fget.call(null,what,par,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"skip","skip",602715391),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true);
} else {
return null;
}
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(or__6772__auto____$2)){
return or__6772__auto____$2;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fget-must-failed","fget-must-failed",237242954),what,where,options__$1);
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_50251;
}} else {
return null;
}
});

tiltontec.model.core.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fget.cljs$lang$applyTo = (function (seq50248){
var G__50249 = cljs.core.first.call(null,seq50248);
var seq50248__$1 = cljs.core.next.call(null,seq50248);
var G__50250 = cljs.core.first.call(null,seq50248__$1);
var seq50248__$2 = cljs.core.next.call(null,seq50248__$1);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(G__50249,G__50250,seq50248__$2);
});

tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fget.call(null,what,where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
var ret__7937__auto___50264 = (function (){
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__7904__auto__ = [];
var len__7897__auto___50265 = arguments.length;
var i__7898__auto___50266 = (0);
while(true){
if((i__7898__auto___50266 < len__7897__auto___50265)){
args__7904__auto__.push((arguments[i__7898__auto___50266]));

var G__50267 = (i__7898__auto___50266 + (1));
i__7898__auto___50266 = G__50267;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((4) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7905__auto__);
});

tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__50260){
var vec__50261 = p__50260;
var me = cljs.core.nth.call(null,vec__50261,(0),null);
var me__$1 = (function (){var or__6772__auto__ = me;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","md-get","tiltontec.model.core/md-get",-1259532148,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","fm!","tiltontec.model.core/fm!",-726483993,null)),(function (){var x__7615__auto__ = what;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = me__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4);

tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq50255){
var G__50256 = cljs.core.first.call(null,seq50255);
var seq50255__$1 = cljs.core.next.call(null,seq50255);
var G__50257 = cljs.core.first.call(null,seq50255__$1);
var seq50255__$2 = cljs.core.next.call(null,seq50255__$1);
var G__50258 = cljs.core.first.call(null,seq50255__$2);
var seq50255__$3 = cljs.core.next.call(null,seq50255__$2);
var G__50259 = cljs.core.first.call(null,seq50255__$3);
var seq50255__$4 = cljs.core.next.call(null,seq50255__$3);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50256,G__50257,G__50258,G__50259,seq50255__$4);
});

return null;
})()
;
tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true;

/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.model.core.mxu_find_class = (function tiltontec$model$core$mxu_find_class(where,class$){
return tiltontec.model.core.fget.call(null,(function (p1__50268_SHARP_){
return cljs.core._EQ_.call(null,class$,tiltontec.model.core.md_get.call(null,p1__50268_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search up the matrix from node 'where' looking for element with given name
 */
tiltontec.model.core.mxu_find_name = (function tiltontec$model$core$mxu_find_name(where,name){
return tiltontec.model.core.fget.call(null,(function (p1__50269_SHARP_){
return cljs.core._EQ_.call(null,name,tiltontec.model.core.md_get.call(null,p1__50269_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search matrix ascendants only from node 'me' for first with given tag
 */
tiltontec.model.core.mxu_find_type = (function tiltontec$model$core$mxu_find_type(me,type){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

return tiltontec.model.core.fasc.call(null,(function (visited){
return cljs.core._EQ_.call(null,type,tiltontec.cell.base.ia_type.call(null,visited));
}),me);
});
tiltontec.model.core.fmi_w_class = (function tiltontec$model$core$fmi_w_class(where,class$){
return tiltontec.model.core.fget.call(null,(function (p1__50270_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,p1__50270_SHARP_))){
return cljs.core._EQ_.call(null,class$,tiltontec.model.core.md_get.call(null,p1__50270_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
} else {
return null;
}
}),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});
/**
 * Search matrix below node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fget.call(null,(function (p1__50271_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,p1__50271_SHARP_))){
return cljs.core._EQ_.call(null,value,tiltontec.model.core.md_get.call(null,p1__50271_SHARP_,property));
} else {
return null;
}
}),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});
var ret__7937__auto___50275 = (function (){
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__7904__auto__ = [];
var len__7897__auto___50276 = arguments.length;
var i__7898__auto___50277 = (0);
while(true){
if((i__7898__auto___50277 < len__7897__auto___50276)){
args__7904__auto__.push((arguments[i__7898__auto___50277]));

var G__50278 = (i__7898__auto___50277 + (1));
i__7898__auto___50277 = G__50278;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","doall","cljs.core/doall",1093272293,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","remove","cljs.core/remove",20102034,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.model.core.the_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq50272){
var G__50273 = cljs.core.first.call(null,seq50272);
var seq50272__$1 = cljs.core.next.call(null,seq50272);
var G__50274 = cljs.core.first.call(null,seq50272__$1);
var seq50272__$2 = cljs.core.next.call(null,seq50272__$1);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__50273,G__50274,seq50272__$2);
});

return null;
})()
;
tiltontec.model.core.the_kids.cljs$lang$macro = true;

var ret__7937__auto___50282 = (function (){
tiltontec.model.core.c_QMARK_kids = (function tiltontec$model$core$c_QMARK_kids(var_args){
var args__7904__auto__ = [];
var len__7897__auto___50283 = arguments.length;
var i__7898__auto___50284 = (0);
while(true){
if((i__7898__auto___50284 < len__7897__auto___50283)){
args__7904__auto__.push((arguments[i__7898__auto___50284]));

var G__50285 = (i__7898__auto___50284 + (1));
i__7898__auto___50284 = G__50285;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?","tiltontec.model.core/c?",508213181,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"no me for c?kids"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.model.core.c_QMARK_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.c_QMARK_kids.cljs$lang$applyTo = (function (seq50279){
var G__50280 = cljs.core.first.call(null,seq50279);
var seq50279__$1 = cljs.core.next.call(null,seq50279);
var G__50281 = cljs.core.first.call(null,seq50279__$1);
var seq50279__$2 = cljs.core.next.call(null,seq50279__$1);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic(G__50280,G__50281,seq50279__$2);
});

return null;
})()
;
tiltontec.model.core.c_QMARK_kids.cljs$lang$macro = true;

tiltontec.model.core.kid_values_kids = (function tiltontec$model$core$kid_values_kids(me,x_kids){
var x_kids__$1 = ((cljs.core._EQ_.call(null,x_kids,tiltontec.cell.base.unbound))?cljs.core.PersistentVector.EMPTY:x_kids);
var k_key = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-key","kid-key",-779444857));
var k_factory = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394));
if(cljs.core.truth_(k_key)){
} else {
throw (new Error("Assert failed: (and k-key)"));
}

if(cljs.core.truth_(k_factory)){
} else {
throw (new Error("Assert failed: (and k-factory)"));
}

return cljs.core.doall.call(null,(function (){var iter__7561__auto__ = ((function (x_kids__$1,k_key,k_factory){
return (function tiltontec$model$core$kid_values_kids_$_iter__50286(s__50287){
return (new cljs.core.LazySeq(null,((function (x_kids__$1,k_key,k_factory){
return (function (){
var s__50287__$1 = s__50287;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50287__$1);
if(temp__4657__auto__){
var s__50287__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50287__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__50287__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__50289 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__50288 = (0);
while(true){
if((i__50288 < size__7560__auto__)){
var kid_value = cljs.core._nth.call(null,c__7559__auto__,i__50288);
cljs.core.chunk_append.call(null,b__50289,(function (){var or__6772__auto__ = cljs.core.some.call(null,((function (i__50288,kid_value,c__7559__auto__,size__7560__auto__,b__50289,s__50287__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.call(null,kid_value,k_key.call(null,x_kid),k_key.call(null,x_kid))){
return x_kid;
} else {
return null;
}
});})(i__50288,kid_value,c__7559__auto__,size__7560__auto__,b__50289,s__50287__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var _STAR_par_STAR_50290 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return k_factory.call(null,me,kid_value);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50290;
}}
})());

var G__50292 = (i__50288 + (1));
i__50288 = G__50292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50289),tiltontec$model$core$kid_values_kids_$_iter__50286.call(null,cljs.core.chunk_rest.call(null,s__50287__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50289),null);
}
} else {
var kid_value = cljs.core.first.call(null,s__50287__$2);
return cljs.core.cons.call(null,(function (){var or__6772__auto__ = cljs.core.some.call(null,((function (kid_value,s__50287__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.call(null,kid_value,k_key.call(null,x_kid),k_key.call(null,x_kid))){
return x_kid;
} else {
return null;
}
});})(kid_value,s__50287__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var _STAR_par_STAR_50291 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return k_factory.call(null,me,kid_value);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50291;
}}
})(),tiltontec$model$core$kid_values_kids_$_iter__50286.call(null,cljs.core.rest.call(null,s__50287__$2)));
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
return iter__7561__auto__.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-values","kid-values",575730341)));
})());
});

//# sourceMappingURL=core.js.map