// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.core');
goog.require('taoensso.tufte');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26101 = arguments.length;
var i__7900__auto___26102 = (0);
while(true){
if((i__7900__auto___26102 < len__7899__auto___26101)){
args__7906__auto__.push((arguments[i__7900__auto___26102]));

var G__26103 = (i__7900__auto___26102 + (1));
i__7900__auto___26102 = G__26103;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((0) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7907__auto__);
});

tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kvs);
return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$state,cljs.core.cst$kw$synapses,cljs.core.cst$kw$pulse_DASH_observed,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$pulse,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,cljs.core.cst$kw$nascent,cljs.core.PersistentHashSet.EMPTY,(0),false,(0),(0),true]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell], null)], 0));
});

tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq26100){
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26100));
});

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26105 = arguments.length;
var i__7900__auto___26106 = (0);
while(true){
if((i__7900__auto___26106 < len__7899__auto___26105)){
args__7906__auto__.push((arguments[i__7900__auto___26106]));

var G__26107 = (i__7900__auto___26106 + (1));
i__7900__auto___26106 = G__26107;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((0) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(argseq__7907__auto__);
});

tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kvs);
var rule = cljs.core.cst$kw$rule.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(rule)){
} else {
throw (new Error("Assert failed: rule"));
}

if(cljs.core.fn_QMARK_(rule)){
} else {
throw (new Error("Assert failed: (fn? rule)"));
}

return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$state,cljs.core.cst$kw$pulse_DASH_observed,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$pulse,cljs.core.cst$kw$useds,cljs.core.cst$kw$optimize,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,cljs.core.cst$kw$nascent,(0),false,(0),(0),cljs.core.PersistentHashSet.EMPTY,true,false]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula], null)], 0));
});

tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq26104){
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26104));
});

var ret__7939__auto___26116 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26117 = arguments.length;
var i__7900__auto___26118 = (0);
while(true){
if((i__7900__auto___26118 < len__7899__auto___26117)){
args__7906__auto__.push((arguments[i__7900__auto___26118]));

var G__26119 = (i__7900__auto___26118 + (1));
i__7900__auto___26118 = G__26119;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__26112,body){
var vec__26113 = p__26112;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26113,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7617__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$me),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model),(function (){var x__7617__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cell),(function (){var x__7617__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$slot_DASH_name),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_slot),(function (){var x__7617__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cache),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value),(function (){var x__7617__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq26108){
var G__26109 = cljs.core.first(seq26108);
var seq26108__$1 = cljs.core.next(seq26108);
var G__26110 = cljs.core.first(seq26108__$1);
var seq26108__$2 = cljs.core.next(seq26108__$1);
var G__26111 = cljs.core.first(seq26108__$2);
var seq26108__$3 = cljs.core.next(seq26108__$2);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic(G__26109,G__26110,G__26111,seq26108__$3);
});

return null;
})()
;
tiltontec.cell.core.c_fn_var.cljs$lang$macro = true;

var ret__7939__auto___26123 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26124 = arguments.length;
var i__7900__auto___26125 = (0);
while(true){
if((i__7900__auto___26125 < len__7899__auto___26124)){
args__7906__auto__.push((arguments[i__7900__auto___26125]));

var G__26126 = (i__7900__auto___26125 + (1));
i__7900__auto___26125 = G__26126;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn_DASH_var),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$slot_DASH_c_SHARP_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.cell.core.c_fn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq26120){
var G__26121 = cljs.core.first(seq26120);
var seq26120__$1 = cljs.core.next(seq26120);
var G__26122 = cljs.core.first(seq26120__$1);
var seq26120__$2 = cljs.core.next(seq26120__$1);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic(G__26121,G__26122,seq26120__$2);
});

return null;
})()
;
tiltontec.cell.core.c_fn.cljs$lang$macro = true;

var ret__7939__auto___26130 = (function (){
tiltontec.cell.core.c_QMARK_ = (function tiltontec$cell$core$c_QMARK_(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26131 = arguments.length;
var i__7900__auto___26132 = (0);
while(true){
if((i__7900__auto___26132 < len__7899__auto___26131)){
args__7906__auto__.push((arguments[i__7900__auto___26132]));

var G__26133 = (i__7900__auto___26132 + (1));
i__7900__auto___26132 = G__26133;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK_.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_.cljs$lang$applyTo = (function (seq26127){
var G__26128 = cljs.core.first(seq26127);
var seq26127__$1 = cljs.core.next(seq26127);
var G__26129 = cljs.core.first(seq26127__$1);
var seq26127__$2 = cljs.core.next(seq26127__$1);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__26128,G__26129,seq26127__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_.cljs$lang$macro = true;

var ret__7939__auto___26142 = (function (){
tiltontec.cell.core.c_QMARK__PLUS_ = (function tiltontec$cell$core$c_QMARK__PLUS_(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26143 = arguments.length;
var i__7900__auto___26144 = (0);
while(true){
if((i__7900__auto___26144 < len__7899__auto___26143)){
args__7906__auto__.push((arguments[i__7900__auto___26144]));

var G__26145 = (i__7900__auto___26144 + (1));
i__7900__auto___26144 = G__26145;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__26138,body){
var vec__26139 = p__26138;
var seq__26140 = cljs.core.seq(vec__26139);
var options = seq__26140;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$applyTo = (function (seq26134){
var G__26135 = cljs.core.first(seq26134);
var seq26134__$1 = cljs.core.next(seq26134);
var G__26136 = cljs.core.first(seq26134__$1);
var seq26134__$2 = cljs.core.next(seq26134__$1);
var G__26137 = cljs.core.first(seq26134__$2);
var seq26134__$3 = cljs.core.next(seq26134__$2);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__26135,G__26136,G__26137,seq26134__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$macro = true;

var ret__7939__auto___26149 = (function (){
tiltontec.cell.core.c_QMARK_n = (function tiltontec$cell$core$c_QMARK_n(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26150 = arguments.length;
var i__7900__auto___26151 = (0);
while(true){
if((i__7900__auto___26151 < len__7899__auto___26150)){
args__7906__auto__.push((arguments[i__7900__auto___26151]));

var G__26152 = (i__7900__auto___26151 + (1));
i__7900__auto___26151 = G__26152;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_n.cljs$lang$applyTo = (function (seq26146){
var G__26147 = cljs.core.first(seq26146);
var seq26146__$1 = cljs.core.next(seq26146);
var G__26148 = cljs.core.first(seq26146__$1);
var seq26146__$2 = cljs.core.next(seq26146__$1);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__26147,G__26148,seq26146__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_n.cljs$lang$macro = true;

var ret__7939__auto___26161 = (function (){
tiltontec.cell.core.c_QMARK__PLUS_n = (function tiltontec$cell$core$c_QMARK__PLUS_n(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26162 = arguments.length;
var i__7900__auto___26163 = (0);
while(true){
if((i__7900__auto___26163 < len__7899__auto___26162)){
args__7906__auto__.push((arguments[i__7900__auto___26163]));

var G__26164 = (i__7900__auto___26163 + (1));
i__7900__auto___26163 = G__26164;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__26157,body){
var vec__26158 = p__26157;
var seq__26159 = cljs.core.seq(vec__26158);
var options = seq__26159;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$applyTo = (function (seq26153){
var G__26154 = cljs.core.first(seq26153);
var seq26153__$1 = cljs.core.next(seq26153);
var G__26155 = cljs.core.first(seq26153__$1);
var seq26153__$2 = cljs.core.next(seq26153__$1);
var G__26156 = cljs.core.first(seq26153__$2);
var seq26153__$3 = cljs.core.next(seq26153__$2);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic(G__26154,G__26155,G__26156,seq26153__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$macro = true;

var ret__7939__auto___26168 = (function (){
tiltontec.cell.core.c__QMARK_n = (function tiltontec$cell$core$c__QMARK_n(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26169 = arguments.length;
var i__7900__auto___26170 = (0);
while(true){
if((i__7900__auto___26170 < len__7899__auto___26169)){
args__7906__auto__.push((arguments[i__7900__auto___26170]));

var G__26171 = (i__7900__auto___26170 + (1));
i__7900__auto___26170 = G__26171;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lazy),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$until_DASH_asked),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c__QMARK_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c__QMARK_n.cljs$lang$applyTo = (function (seq26165){
var G__26166 = cljs.core.first(seq26165);
var seq26165__$1 = cljs.core.next(seq26165);
var G__26167 = cljs.core.first(seq26165__$1);
var seq26165__$2 = cljs.core.next(seq26165__$1);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__26166,G__26167,seq26165__$2);
});

return null;
})()
;
tiltontec.cell.core.c__QMARK_n.cljs$lang$macro = true;

var ret__7939__auto___26175 = (function (){
tiltontec.cell.core.c_QMARK_n_dbg = (function tiltontec$cell$core$c_QMARK_n_dbg(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26176 = arguments.length;
var i__7900__auto___26177 = (0);
while(true){
if((i__7900__auto___26177 < len__7899__auto___26176)){
args__7906__auto__.push((arguments[i__7900__auto___26177]));

var G__26178 = (i__7900__auto___26177 + (1));
i__7900__auto___26177 = G__26178;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$debug),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$applyTo = (function (seq26172){
var G__26173 = cljs.core.first(seq26172);
var seq26172__$1 = cljs.core.next(seq26172);
var G__26174 = cljs.core.first(seq26172__$1);
var seq26172__$2 = cljs.core.next(seq26172__$1);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic(G__26173,G__26174,seq26172__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$macro = true;

var ret__7939__auto___26183 = (function (){
tiltontec.cell.core.c_QMARK_n_until = (function tiltontec$cell$core$c_QMARK_n_until(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26184 = arguments.length;
var i__7900__auto___26185 = (0);
while(true){
if((i__7900__auto___26185 < len__7899__auto___26184)){
args__7906__auto__.push((arguments[i__7900__auto___26185]));

var G__26186 = (i__7900__auto___26185 + (1));
i__7900__auto___26185 = G__26186;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$optimize),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$when_DASH_value_DASH_t),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),args], 0))));
});

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$applyTo = (function (seq26179){
var G__26180 = cljs.core.first(seq26179);
var seq26179__$1 = cljs.core.next(seq26179);
var G__26181 = cljs.core.first(seq26179__$1);
var seq26179__$2 = cljs.core.next(seq26179__$1);
var G__26182 = cljs.core.first(seq26179__$2);
var seq26179__$3 = cljs.core.next(seq26179__$2);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic(G__26180,G__26181,G__26182,seq26179__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_n_until.cljs$lang$macro = true;

var ret__7939__auto___26190 = (function (){
tiltontec.cell.core.c_QMARK_once = (function tiltontec$cell$core$c_QMARK_once(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26191 = arguments.length;
var i__7900__auto___26192 = (0);
while(true){
if((i__7900__auto___26192 < len__7899__auto___26191)){
args__7906__auto__.push((arguments[i__7900__auto___26192]));

var G__26193 = (i__7900__auto___26192 + (1));
i__7900__auto___26192 = G__26193;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK_once.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_once.cljs$lang$applyTo = (function (seq26187){
var G__26188 = cljs.core.first(seq26187);
var seq26187__$1 = cljs.core.next(seq26187);
var G__26189 = cljs.core.first(seq26187__$1);
var seq26187__$2 = cljs.core.next(seq26187__$1);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic(G__26188,G__26189,seq26187__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_once.cljs$lang$macro = true;

var ret__7939__auto___26197 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26198 = arguments.length;
var i__7900__auto___26199 = (0);
while(true){
if((i__7900__auto___26199 < len__7899__auto___26198)){
args__7906__auto__.push((arguments[i__7900__auto___26199]));

var G__26200 = (i__7900__auto___26199 + (1));
i__7900__auto___26199 = G__26200;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lazy),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq26194){
var G__26195 = cljs.core.first(seq26194);
var seq26194__$1 = cljs.core.next(seq26194);
var G__26196 = cljs.core.first(seq26194__$1);
var seq26194__$2 = cljs.core.next(seq26194__$1);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic(G__26195,G__26196,seq26194__$2);
});

return null;
})()
;
tiltontec.cell.core.c_1.cljs$lang$macro = true;

var ret__7939__auto___26204 = (function (){
tiltontec.cell.core.c_QMARK_1 = (function tiltontec$cell$core$c_QMARK_1(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26205 = arguments.length;
var i__7900__auto___26206 = (0);
while(true){
if((i__7900__auto___26206 < len__7899__auto___26205)){
args__7906__auto__.push((arguments[i__7900__auto___26206]));

var G__26207 = (i__7900__auto___26206 + (1));
i__7900__auto___26206 = G__26207;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_QMARK_once),body)));
});

tiltontec.cell.core.c_QMARK_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_1.cljs$lang$applyTo = (function (seq26201){
var G__26202 = cljs.core.first(seq26201);
var seq26201__$1 = cljs.core.next(seq26201);
var G__26203 = cljs.core.first(seq26201__$1);
var seq26201__$2 = cljs.core.next(seq26201__$1);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic(G__26202,G__26203,seq26201__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_1.cljs$lang$macro = true;

var ret__7939__auto___26211 = (function (){
tiltontec.cell.core.c_QMARK_dbg = (function tiltontec$cell$core$c_QMARK_dbg(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26212 = arguments.length;
var i__7900__auto___26213 = (0);
while(true){
if((i__7900__auto___26213 < len__7899__auto___26212)){
args__7906__auto__.push((arguments[i__7900__auto___26213]));

var G__26214 = (i__7900__auto___26213 + (1));
i__7900__auto___26213 = G__26214;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$debug),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$applyTo = (function (seq26208){
var G__26209 = cljs.core.first(seq26208);
var seq26208__$1 = cljs.core.next(seq26208);
var G__26210 = cljs.core.first(seq26208__$1);
var seq26208__$2 = cljs.core.next(seq26208__$1);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__26209,G__26210,seq26208__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_dbg.cljs$lang$macro = true;

var ret__7939__auto___26223 = (function (){
tiltontec.cell.core.c_QMARK__ = (function tiltontec$cell$core$c_QMARK__(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26224 = arguments.length;
var i__7900__auto___26225 = (0);
while(true){
if((i__7900__auto___26225 < len__7899__auto___26224)){
args__7906__auto__.push((arguments[i__7900__auto___26225]));

var G__26226 = (i__7900__auto___26225 + (1));
i__7900__auto___26225 = G__26226;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__26219,body){
var vec__26220 = p__26219;
var seq__26221 = cljs.core.seq(vec__26220);
var options = seq__26221;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lazy),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK__.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__.cljs$lang$applyTo = (function (seq26215){
var G__26216 = cljs.core.first(seq26215);
var seq26215__$1 = cljs.core.next(seq26215);
var G__26217 = cljs.core.first(seq26215__$1);
var seq26215__$2 = cljs.core.next(seq26215__$1);
var G__26218 = cljs.core.first(seq26215__$2);
var seq26215__$3 = cljs.core.next(seq26215__$2);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic(G__26216,G__26217,G__26218,seq26215__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK__.cljs$lang$macro = true;

var ret__7939__auto___26235 = (function (){
tiltontec.cell.core.c__QMARK_ = (function tiltontec$cell$core$c__QMARK_(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26236 = arguments.length;
var i__7900__auto___26237 = (0);
while(true){
if((i__7900__auto___26237 < len__7899__auto___26236)){
args__7906__auto__.push((arguments[i__7900__auto___26237]));

var G__26238 = (i__7900__auto___26237 + (1));
i__7900__auto___26237 = G__26238;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__26231,body){
var vec__26232 = p__26231;
var seq__26233 = cljs.core.seq(vec__26232);
var options = seq__26233;

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lazy),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$until_DASH_asked),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.cell.core.c__QMARK_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c__QMARK_.cljs$lang$applyTo = (function (seq26227){
var G__26228 = cljs.core.first(seq26227);
var seq26227__$1 = cljs.core.next(seq26227);
var G__26229 = cljs.core.first(seq26227__$1);
var seq26227__$2 = cljs.core.next(seq26227__$1);
var G__26230 = cljs.core.first(seq26227__$2);
var seq26227__$3 = cljs.core.next(seq26227__$2);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__26228,G__26229,G__26230,seq26227__$3);
});

return null;
})()
;
tiltontec.cell.core.c__QMARK_.cljs$lang$macro = true;

var ret__7939__auto___26242 = (function (){
tiltontec.cell.core.c__QMARK_dbg = (function tiltontec$cell$core$c__QMARK_dbg(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26243 = arguments.length;
var i__7900__auto___26244 = (0);
while(true){
if((i__7900__auto___26244 < len__7899__auto___26243)){
args__7906__auto__.push((arguments[i__7900__auto___26244]));

var G__26245 = (i__7900__auto___26244 + (1));
i__7900__auto___26244 = G__26245;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lazy),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$until_DASH_asked),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$debug),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
});

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$applyTo = (function (seq26239){
var G__26240 = cljs.core.first(seq26239);
var seq26239__$1 = cljs.core.next(seq26239);
var G__26241 = cljs.core.first(seq26239__$1);
var seq26239__$2 = cljs.core.next(seq26239__$1);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__26240,G__26241,seq26239__$2);
});

return null;
})()
;
tiltontec.cell.core.c__QMARK_dbg.cljs$lang$macro = true;

var ret__7939__auto___26254 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26255 = arguments.length;
var i__7900__auto___26256 = (0);
while(true){
if((i__7900__auto___26256 < len__7899__auto___26255)){
args__7906__auto__.push((arguments[i__7900__auto___26256]));

var G__26257 = (i__7900__auto___26256 + (1));
i__7900__auto___26256 = G__26257;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__26250,body){
var vec__26251 = p__26250;
var seq__26252 = cljs.core.seq(vec__26251);
var kvs = seq__26252;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7617__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.keys], 0))));
});

tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq26246){
var G__26247 = cljs.core.first(seq26246);
var seq26246__$1 = cljs.core.next(seq26246);
var G__26248 = cljs.core.first(seq26246__$1);
var seq26246__$2 = cljs.core.next(seq26246__$1);
var G__26249 = cljs.core.first(seq26246__$2);
var seq26246__$3 = cljs.core.next(seq26246__$2);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic(G__26247,G__26248,G__26249,seq26246__$3);
});

return null;
})()
;
tiltontec.cell.core.c_formula.cljs$lang$macro = true;

tiltontec.cell.core.c_in = (function tiltontec$cell$core$c_in(var_args){
var args__7906__auto__ = [];
var len__7899__auto___26260 = arguments.length;
var i__7900__auto___26261 = (0);
while(true){
if((i__7900__auto___26261 < len__7899__auto___26260)){
args__7906__auto__.push((arguments[i__7900__auto___26261]));

var G__26262 = (i__7900__auto___26261 + (1));
i__7900__auto___26261 = G__26262;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic = (function (value,option_kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.core.make_cell,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$value,value,cljs.core.cst$kw$input_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option_kvs], 0)));
});

tiltontec.cell.core.c_in.cljs$lang$maxFixedArity = (1);

tiltontec.cell.core.c_in.cljs$lang$applyTo = (function (seq26258){
var G__26259 = cljs.core.first(seq26258);
var seq26258__$1 = cljs.core.next(seq26258);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic(G__26259,seq26258__$1);
});

tiltontec.cell.core.c_reset_BANG_ = (function tiltontec$cell$core$c_reset_BANG_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

if(tiltontec.cell.base._STAR_defer_changes_STAR_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_reset_DASH_rejecting_DASH_undeferred_BANG_], 0));

throw (new Error(cljs.pprint.cl_format("c-reset!> change to ~s must be deferred by wrapping it in WITH-INTEGRITY",tiltontec.cell.base.c_slot(c))));
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null)))){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
} else {
var __pdata_or_pdata_ = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result = tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$change,tiltontec.cell.base.c_slot(c),((function (__t0,__pdata_or_pdata_){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
});})(__t0,__pdata_or_pdata_))
);
var __t1 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pdata_or_pdata_,cljs.core.cst$kw$outer_DASH_wi,(__t1 - __t0));

return __result;
} else {
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$change,tiltontec.cell.base.c_slot(c),((function (__pdata_or_pdata_){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
});})(__pdata_or_pdata_))
);
}

}
}
});
var ret__7939__auto___26265 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH__STAR_within_DASH_integrity_STAR_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_slot),(function (){var x__7617__auto__ = f_c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_ufb_DASH_add),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$change),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$c_DASH_reset_DASH_next_BANG_),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opcode),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$defer_DASH_info)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__26263__auto__),(function (){var x__7617__auto__ = f_c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new_DASH_value__26264__auto__),(function (){var x__7617__auto__ = f_new_value;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_call_DASH_c_DASH_reset_DASH_next_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__26263__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new_DASH_value__26264__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});
tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true;

tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null)))){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);

}
});
