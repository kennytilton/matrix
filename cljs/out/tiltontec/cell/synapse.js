// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.cell.synapse');
goog.require('cljs.core');
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

return cljs.core.some.call(null,(function (p1__50725_SHARP_){
if(cljs.core._EQ_.call(null,synapse_id,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__50725_SHARP_)))){
return p1__50725_SHARP_;
} else {
return null;
}
}),tiltontec.cell.base.c_synapses.call(null,tiltontec.cell.base._STAR_depender_STAR_));
});
var ret__7937__auto___50741 = (function (){
tiltontec.cell.synapse.with_synapse = (function tiltontec$cell$synapse$with_synapse(var_args){
var args__7904__auto__ = [];
var len__7897__auto___50742 = arguments.length;
var i__7898__auto___50743 = (0);
while(true){
if((i__7898__auto___50743 < len__7897__auto___50742)){
args__7904__auto__.push((arguments[i__7898__auto___50743]));

var G__50744 = (i__7898__auto___50743 + (1));
i__7898__auto___50743 = G__50744;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__50734,body){
var vec__50735 = p__50734;
var synapse_id = cljs.core.nth.call(null,vec__50735,(0),null);
var vec__50738 = cljs.core.nth.call(null,vec__50735,(1),null);
var seq__50739 = cljs.core.seq.call(null,vec__50738);
var closure_bindings = seq__50739;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"existing-syn__50726__auto__","existing-syn__50726__auto__",-1116639263,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","existing-syn","tiltontec.cell.synapse/existing-syn",959112904,null)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"synapse__50727__auto__","synapse__50727__auto__",504178195,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"existing-syn__50726__auto__","existing-syn__50726__auto__",-1116639263,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__50728__auto__","new-syn__50728__auto__",-1878404923,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,closure_bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"making-syn!?","making-syn!?",1778764065)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"slot","slot",240229571)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"model","model",331153215)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"model","model",331153215)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"slot","slot",240229571)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","c-fn","tiltontec.cell.synapse/c-fn",-1576151688,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.core","rmap-setf","tiltontec.util.core/rmap-setf",829497923,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapses","synapses",-614206130)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-synapses","tiltontec.cell.base/c-synapses",-492443395,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__50728__auto__","new-syn__50728__auto__",-1878404923,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.evaluate","record-dependency","tiltontec.cell.evaluate/record-dependency",1527354689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__50728__auto__","new-syn__50728__auto__",-1878404923,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__50728__auto__","new-syn__50728__auto__",-1878404923,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__50729__auto__","value__50729__auto__",-1906077614,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.integrity","with-integrity","tiltontec.cell.integrity/with-integrity",-1374442056,null)),(function (){var x__7615__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.evaluate","ensure-value-is-current","tiltontec.cell.evaluate/ensure-value-is-current",-1882381435,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"synapse__50727__auto__","synapse__50727__auto__",504178195,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapse","synapse",-1160900177)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.evaluate","record-dependency","tiltontec.cell.evaluate/record-dependency",1527354689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"synapse__50727__auto__","synapse__50727__auto__",504178195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__50729__auto__","value__50729__auto__",-1906077614,null)))));
});

tiltontec.cell.synapse.with_synapse.cljs$lang$maxFixedArity = (3);

tiltontec.cell.synapse.with_synapse.cljs$lang$applyTo = (function (seq50730){
var G__50731 = cljs.core.first.call(null,seq50730);
var seq50730__$1 = cljs.core.next.call(null,seq50730);
var G__50732 = cljs.core.first.call(null,seq50730__$1);
var seq50730__$2 = cljs.core.next.call(null,seq50730__$1);
var G__50733 = cljs.core.first.call(null,seq50730__$2);
var seq50730__$3 = cljs.core.next.call(null,seq50730__$2);
return tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic(G__50731,G__50732,G__50733,seq50730__$3);
});

return null;
})()
;
tiltontec.cell.synapse.with_synapse.cljs$lang$macro = true;

tiltontec.cell.synapse.call_with_synapse = (function tiltontec$cell$synapse$call_with_synapse(synapse_id,cell_factory){
var existing_syn = tiltontec.cell.synapse.existing_syn.call(null,synapse_id);
var synapse = (function (){var or__6772__auto__ = existing_syn;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var new_syn = cell_factory.call(null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"building-synapse","building-synapse",-277429802),cljs.core.unquote.call(null,synapse_id));

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synapses","synapses",-614206130),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_synapses.call(null,tiltontec.cell.base._STAR_depender_STAR_),new_syn));

tiltontec.cell.evaluate.record_dependency.call(null,new_syn);

return new_syn;
}
})();
var value = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,((function (existing_syn,synapse){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.ensure_value_is_current.call(null,synapse,new cljs.core.Keyword(null,"synapse","synapse",-1160900177),tiltontec.cell.base._STAR_depender_STAR_);
});})(existing_syn,synapse))
);
tiltontec.cell.evaluate.record_dependency.call(null,synapse);

return value;
});
var ret__7937__auto___50756 = (function (){
tiltontec.cell.synapse.cSyn = (function tiltontec$cell$synapse$cSyn(var_args){
var args__7904__auto__ = [];
var len__7897__auto___50757 = arguments.length;
var i__7898__auto___50758 = (0);
while(true){
if((i__7898__auto___50758 < len__7897__auto___50757)){
args__7904__auto__.push((arguments[i__7898__auto___50758]));

var G__50759 = (i__7898__auto___50758 + (1));
i__7898__auto___50758 = G__50759;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__50749,body){
var vec__50750 = p__50749;
var synapse_id = cljs.core.nth.call(null,vec__50750,(0),null);
var vec__50753 = cljs.core.nth.call(null,vec__50750,(1),null);
var seq__50754 = cljs.core.seq.call(null,vec__50753);
var closure_bindings = seq__50754;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","call-with-synapse","tiltontec.cell.synapse/call-with-synapse",-146230646,null)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,closure_bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"model","model",331153215)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","c-model","tiltontec.cell.synapse/c-model",-889022908,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"slot","slot",240229571)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","c-fn","tiltontec.cell.synapse/c-fn",-1576151688,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.synapse.cSyn.cljs$lang$maxFixedArity = (3);

tiltontec.cell.synapse.cSyn.cljs$lang$applyTo = (function (seq50745){
var G__50746 = cljs.core.first.call(null,seq50745);
var seq50745__$1 = cljs.core.next.call(null,seq50745);
var G__50747 = cljs.core.first.call(null,seq50745__$1);
var seq50745__$2 = cljs.core.next.call(null,seq50745__$1);
var G__50748 = cljs.core.first.call(null,seq50745__$2);
var seq50745__$3 = cljs.core.next.call(null,seq50745__$2);
return tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic(G__50746,G__50747,G__50748,seq50745__$3);
});

return null;
})()
;
tiltontec.cell.synapse.cSyn.cljs$lang$macro = true;


//# sourceMappingURL=synapse.js.map