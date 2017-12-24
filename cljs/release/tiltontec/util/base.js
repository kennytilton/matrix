// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.util.base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
tiltontec.util.base._STAR_trx_QMARK__STAR_ = true;
tiltontec.util.base._STAR_trc_ensure_STAR_ = null;
tiltontec.util.base._STAR_trx_path_id_STAR_ = null;
tiltontec.util.base._STAR_trxdepth_STAR_ = (0);
tiltontec.util.base.last_trc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
tiltontec.util.base.call_trc$ = (function tiltontec$util$base$call_trc$(s,bits){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(bits)].join(''))].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12150 = arguments.length;
var i__7900__auto___12151 = (0);
while(true){
if((i__7900__auto___12151 < len__7899__auto___12150)){
args__7906__auto__.push((arguments[i__7900__auto___12151]));

var G__12152 = (i__7900__auto___12151 + (1));
i__7900__auto___12151 = G__12152;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic = (function (s,os){
if(tiltontec.util.base._STAR_trx_QMARK__STAR_){
if(cljs.core.truth_(s)){
var path = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base._STAR_trxdepth_STAR_,"."));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,tiltontec.util.base.call_trc$(s,os)], 0));
} else {
return null;
}
} else {
return null;
}
});

tiltontec.util.base.call_trc.cljs$lang$maxFixedArity = (1);

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq12148){
var G__12149 = cljs.core.first(seq12148);
var seq12148__$1 = cljs.core.next(seq12148);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__12149,seq12148__$1);
});

var ret__7939__auto___12157 = (function (){
tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12158 = arguments.length;
var i__7900__auto___12159 = (0);
while(true){
if((i__7900__auto___12159 < len__7899__auto___12158)){
args__7906__auto__.push((arguments[i__7900__auto___12159]));

var G__12160 = (i__7900__auto___12159 + (1));
i__7900__auto___12159 = G__12160;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$util$base_SLASH_call_DASH_trc),(function (){var x__7617__auto__ = ((!((label == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vals], 0))));
});

tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq12153){
var G__12154 = cljs.core.first(seq12153);
var seq12153__$1 = cljs.core.next(seq12153);
var G__12155 = cljs.core.first(seq12153__$1);
var seq12153__$2 = cljs.core.next(seq12153__$1);
var G__12156 = cljs.core.first(seq12153__$2);
var seq12153__$3 = cljs.core.next(seq12153__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__12154,G__12155,G__12156,seq12153__$3);
});

return null;
})()
;
tiltontec.util.base.trx.cljs$lang$macro = true;

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_12161 = tiltontec.util.base._STAR_trxdepth_STAR_;
tiltontec.util.base._STAR_trxdepth_STAR_ = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));

try{if(((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi))){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("wtrx exceeded max depth "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.util.base.call_trc$,cljs.core.first(trxargs),cljs.core.rest(trxargs)))].join('')));
} else {
}
}

return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_12161;
}});
var ret__7939__auto___12170 = (function (){
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12171 = arguments.length;
var i__7900__auto___12172 = (0);
while(true){
if((i__7900__auto___12172 < len__7899__auto___12171)){
args__7906__auto__.push((arguments[i__7900__auto___12172]));

var G__12173 = (i__7900__auto___12172 + (1));
i__7900__auto___12172 = G__12173;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__12166,body){
var vec__12167 = p__12166;
var seq__12168 = cljs.core.seq(vec__12167);
var first__12169 = cljs.core.first(seq__12168);
var seq__12168__$1 = cljs.core.next(seq__12168);
var lo = first__12169;
var first__12169__$1 = cljs.core.first(seq__12168__$1);
var seq__12168__$2 = cljs.core.next(seq__12168__$1);
var hi = first__12169__$1;
var trxargs = seq__12168__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$util$base_SLASH_call_DASH_wtrx),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = lo;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = hi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),trxargs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq12162){
var G__12163 = cljs.core.first(seq12162);
var seq12162__$1 = cljs.core.next(seq12162);
var G__12164 = cljs.core.first(seq12162__$1);
var seq12162__$2 = cljs.core.next(seq12162__$1);
var G__12165 = cljs.core.first(seq12162__$2);
var seq12162__$3 = cljs.core.next(seq12162__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__12163,G__12164,G__12165,seq12162__$3);
});

return null;
})()
;
tiltontec.util.base.wtrx.cljs$lang$macro = true;

var ret__7939__auto___12178 = (function (){
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12179 = arguments.length;
var i__7900__auto___12180 = (0);
while(true){
if((i__7900__auto___12180 < len__7899__auto___12179)){
args__7906__auto__.push((arguments[i__7900__auto___12180]));

var G__12181 = (i__7900__auto___12180 + (1));
i__7900__auto___12180 = G__12181;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$result__12174__auto__),(function (){var x__7617__auto__ = cljs.core.first(body);
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(body),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$result__12174__auto__)], 0))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq12175){
var G__12176 = cljs.core.first(seq12175);
var seq12175__$1 = cljs.core.next(seq12175);
var G__12177 = cljs.core.first(seq12175__$1);
var seq12175__$2 = cljs.core.next(seq12175__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__12176,G__12177,seq12175__$2);
});

return null;
})()
;
tiltontec.util.base.prog1.cljs$lang$macro = true;

var ret__7939__auto___12187 = (function (){
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12188 = arguments.length;
var i__7900__auto___12189 = (0);
while(true){
if((i__7900__auto___12189 < len__7899__auto___12188)){
args__7906__auto__.push((arguments[i__7900__auto___12189]));

var G__12190 = (i__7900__auto___12189 + (1));
i__7900__auto___12189 = G__12190;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((4) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((4)),(0),null)):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7907__auto__);
});

tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_let),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7617__auto__ = var$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4);

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq12182){
var G__12183 = cljs.core.first(seq12182);
var seq12182__$1 = cljs.core.next(seq12182);
var G__12184 = cljs.core.first(seq12182__$1);
var seq12182__$2 = cljs.core.next(seq12182__$1);
var G__12185 = cljs.core.first(seq12182__$2);
var seq12182__$3 = cljs.core.next(seq12182__$2);
var G__12186 = cljs.core.first(seq12182__$3);
var seq12182__$4 = cljs.core.next(seq12182__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__12183,G__12184,G__12185,G__12186,seq12182__$4);
});

return null;
})()
;
tiltontec.util.base.b_when.cljs$lang$macro = true;

var ret__7939__auto___12195 = (function (){
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12196 = arguments.length;
var i__7900__auto___12197 = (0);
while(true){
if((i__7900__auto___12197 < len__7899__auto___12196)){
args__7906__auto__.push((arguments[i__7900__auto___12197]));

var G__12198 = (i__7900__auto___12197 + (1));
i__7900__auto___12197 = G__12198;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7617__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq12191){
var G__12192 = cljs.core.first(seq12191);
var seq12191__$1 = cljs.core.next(seq12191);
var G__12193 = cljs.core.first(seq12191__$1);
var seq12191__$2 = cljs.core.next(seq12191__$1);
var G__12194 = cljs.core.first(seq12191__$2);
var seq12191__$3 = cljs.core.next(seq12191__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__12192,G__12193,G__12194,seq12191__$3);
});

return null;
})()
;
tiltontec.util.base.unless.cljs$lang$macro = true;

var ret__7939__auto___12203 = (function (){
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12204 = arguments.length;
var i__7900__auto___12205 = (0);
while(true){
if((i__7900__auto___12205 < len__7899__auto___12204)){
args__7906__auto__.push((arguments[i__7900__auto___12205]));

var G__12206 = (i__7900__auto___12205 + (1));
i__7900__auto___12205 = G__12206;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (slot_SHARP_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defn),(function (){var x__7617__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6774__auto__ = reader_prefix;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ref)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7617__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(slot_SHARP_);
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ref))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
}),slots))));
});

tiltontec.util.base.def_rmap_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq12199){
var G__12200 = cljs.core.first(seq12199);
var seq12199__$1 = cljs.core.next(seq12199);
var G__12201 = cljs.core.first(seq12199__$1);
var seq12199__$2 = cljs.core.next(seq12199__$1);
var G__12202 = cljs.core.first(seq12199__$2);
var seq12199__$3 = cljs.core.next(seq12199__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__12200,G__12201,G__12202,seq12199__$3);
});

return null;
})()
;
tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;

var ret__7939__auto___12211 = (function (){
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12212 = arguments.length;
var i__7900__auto___12213 = (0);
while(true){
if((i__7900__auto___12213 < len__7899__auto___12212)){
args__7906__auto__.push((arguments[i__7900__auto___12213]));

var G__12214 = (i__7900__auto___12213 + (1));
i__7900__auto___12213 = G__12214;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (slot_SHARP_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defn),(function (){var x__7617__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6774__auto__ = reader_prefix;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ref)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7617__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(slot_SHARP_);
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_meta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ref))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
}),slots))));
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq12207){
var G__12208 = cljs.core.first(seq12207);
var seq12207__$1 = cljs.core.next(seq12207);
var G__12209 = cljs.core.first(seq12207__$1);
var seq12207__$2 = cljs.core.next(seq12207__$1);
var G__12210 = cljs.core.first(seq12207__$2);
var seq12207__$3 = cljs.core.next(seq12207__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__12208,G__12209,G__12210,seq12207__$3);
});

return null;
})()
;
tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;

