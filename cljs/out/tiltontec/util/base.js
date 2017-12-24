// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.util.base');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.util.base._STAR_trx_QMARK__STAR_ = true;
tiltontec.util.base._STAR_trc_ensure_STAR_ = null;
tiltontec.util.base._STAR_trx_path_id_STAR_ = null;
tiltontec.util.base._STAR_trxdepth_STAR_ = (0);
tiltontec.util.base.last_trc = cljs.core.atom.call(null,(0));
tiltontec.util.base.call_trc$ = (function tiltontec$util$base$call_trc$(s,bits){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(bits)].join(''))].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__7904__auto__ = [];
var len__7897__auto___8330 = arguments.length;
var i__7898__auto___8331 = (0);
while(true){
if((i__7898__auto___8331 < len__7897__auto___8330)){
args__7904__auto__.push((arguments[i__7898__auto___8331]));

var G__8332 = (i__7898__auto___8331 + (1));
i__7898__auto___8331 = G__8332;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic = (function (s,os){
if(tiltontec.util.base._STAR_trx_QMARK__STAR_){
if(cljs.core.truth_(s)){
var path = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,tiltontec.util.base._STAR_trxdepth_STAR_,"."));
return cljs.core.println.call(null,path,tiltontec.util.base.call_trc$.call(null,s,os));
} else {
return null;
}
} else {
return null;
}
});

tiltontec.util.base.call_trc.cljs$lang$maxFixedArity = (1);

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq8328){
var G__8329 = cljs.core.first.call(null,seq8328);
var seq8328__$1 = cljs.core.next.call(null,seq8328);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__8329,seq8328__$1);
});

var ret__7937__auto___8337 = (function (){
tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__7904__auto__ = [];
var len__7897__auto___8338 = arguments.length;
var i__7898__auto___8339 = (0);
while(true){
if((i__7898__auto___8339 < len__7897__auto___8338)){
args__7904__auto__.push((arguments[i__7898__auto___8339]));

var G__8340 = (i__7898__auto___8339 + (1));
i__7898__auto___8339 = G__8340;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-trc","tiltontec.util.base/call-trc",242817092,null)),(function (){var x__7615__auto__ = ((!((label == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),vals)));
});

tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq8333){
var G__8334 = cljs.core.first.call(null,seq8333);
var seq8333__$1 = cljs.core.next.call(null,seq8333);
var G__8335 = cljs.core.first.call(null,seq8333__$1);
var seq8333__$2 = cljs.core.next.call(null,seq8333__$1);
var G__8336 = cljs.core.first.call(null,seq8333__$2);
var seq8333__$3 = cljs.core.next.call(null,seq8333__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__8334,G__8335,G__8336,seq8333__$3);
});

return null;
})()
;
tiltontec.util.base.trx.cljs$lang$macro = true;

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_8341 = tiltontec.util.base._STAR_trxdepth_STAR_;
tiltontec.util.base._STAR_trxdepth_STAR_ = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));

try{if(((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi))){
cljs.core.apply.call(null,tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("wtrx exceeded max depth "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,tiltontec.util.base.call_trc$,cljs.core.first.call(null,trxargs),cljs.core.rest.call(null,trxargs)))].join('')));
} else {
}
}

return fn.call(null);
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_8341;
}});
var ret__7937__auto___8350 = (function (){
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__7904__auto__ = [];
var len__7897__auto___8351 = arguments.length;
var i__7898__auto___8352 = (0);
while(true){
if((i__7898__auto___8352 < len__7897__auto___8351)){
args__7904__auto__.push((arguments[i__7898__auto___8352]));

var G__8353 = (i__7898__auto___8352 + (1));
i__7898__auto___8352 = G__8353;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__8346,body){
var vec__8347 = p__8346;
var seq__8348 = cljs.core.seq.call(null,vec__8347);
var first__8349 = cljs.core.first.call(null,seq__8348);
var seq__8348__$1 = cljs.core.next.call(null,seq__8348);
var lo = first__8349;
var first__8349__$1 = cljs.core.first.call(null,seq__8348__$1);
var seq__8348__$2 = cljs.core.next.call(null,seq__8348__$1);
var hi = first__8349__$1;
var trxargs = seq__8348__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-wtrx","tiltontec.util.base/call-wtrx",-151750095,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = lo;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = hi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),trxargs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq8342){
var G__8343 = cljs.core.first.call(null,seq8342);
var seq8342__$1 = cljs.core.next.call(null,seq8342);
var G__8344 = cljs.core.first.call(null,seq8342__$1);
var seq8342__$2 = cljs.core.next.call(null,seq8342__$1);
var G__8345 = cljs.core.first.call(null,seq8342__$2);
var seq8342__$3 = cljs.core.next.call(null,seq8342__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__8343,G__8344,G__8345,seq8342__$3);
});

return null;
})()
;
tiltontec.util.base.wtrx.cljs$lang$macro = true;

var ret__7937__auto___8358 = (function (){
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__7904__auto__ = [];
var len__7897__auto___8359 = arguments.length;
var i__7898__auto___8360 = (0);
while(true){
if((i__7898__auto___8360 < len__7897__auto___8359)){
args__7904__auto__.push((arguments[i__7898__auto___8360]));

var G__8361 = (i__7898__auto___8360 + (1));
i__7898__auto___8360 = G__8361;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__8354__auto__","result__8354__auto__",243059636,null)),(function (){var x__7615__auto__ = cljs.core.first.call(null,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__8354__auto__","result__8354__auto__",243059636,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq8355){
var G__8356 = cljs.core.first.call(null,seq8355);
var seq8355__$1 = cljs.core.next.call(null,seq8355);
var G__8357 = cljs.core.first.call(null,seq8355__$1);
var seq8355__$2 = cljs.core.next.call(null,seq8355__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__8356,G__8357,seq8355__$2);
});

return null;
})()
;
tiltontec.util.base.prog1.cljs$lang$macro = true;

var ret__7937__auto___8367 = (function (){
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__7904__auto__ = [];
var len__7897__auto___8368 = arguments.length;
var i__7898__auto___8369 = (0);
while(true){
if((i__7898__auto___8369 < len__7897__auto___8368)){
args__7904__auto__.push((arguments[i__7898__auto___8369]));

var G__8370 = (i__7898__auto___8369 + (1));
i__7898__auto___8369 = G__8370;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((4) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((4)),(0),null)):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7905__auto__);
});

tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7615__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
});

tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4);

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq8362){
var G__8363 = cljs.core.first.call(null,seq8362);
var seq8362__$1 = cljs.core.next.call(null,seq8362);
var G__8364 = cljs.core.first.call(null,seq8362__$1);
var seq8362__$2 = cljs.core.next.call(null,seq8362__$1);
var G__8365 = cljs.core.first.call(null,seq8362__$2);
var seq8362__$3 = cljs.core.next.call(null,seq8362__$2);
var G__8366 = cljs.core.first.call(null,seq8362__$3);
var seq8362__$4 = cljs.core.next.call(null,seq8362__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__8363,G__8364,G__8365,G__8366,seq8362__$4);
});

return null;
})()
;
tiltontec.util.base.b_when.cljs$lang$macro = true;

var ret__7937__auto___8375 = (function (){
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__7904__auto__ = [];
var len__7897__auto___8376 = arguments.length;
var i__7898__auto___8377 = (0);
while(true){
if((i__7898__auto___8377 < len__7897__auto___8376)){
args__7904__auto__.push((arguments[i__7898__auto___8377]));

var G__8378 = (i__7898__auto___8377 + (1));
i__7898__auto___8377 = G__8378;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__7615__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
});

tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq8371){
var G__8372 = cljs.core.first.call(null,seq8371);
var seq8371__$1 = cljs.core.next.call(null,seq8371);
var G__8373 = cljs.core.first.call(null,seq8371__$1);
var seq8371__$2 = cljs.core.next.call(null,seq8371__$1);
var G__8374 = cljs.core.first.call(null,seq8371__$2);
var seq8371__$3 = cljs.core.next.call(null,seq8371__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__8372,G__8373,G__8374,seq8371__$3);
});

return null;
})()
;
tiltontec.util.base.unless.cljs$lang$macro = true;

var ret__7937__auto___8383 = (function (){
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__7904__auto__ = [];
var len__7897__auto___8384 = arguments.length;
var i__7898__auto___8385 = (0);
while(true){
if((i__7898__auto___8385 < len__7897__auto___8384)){
args__7904__auto__.push((arguments[i__7898__auto___8385]));

var G__8386 = (i__7898__auto___8385 + (1));
i__7898__auto___8385 = G__8386;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7615__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6772__auto__ = reader_prefix;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7615__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq8379){
var G__8380 = cljs.core.first.call(null,seq8379);
var seq8379__$1 = cljs.core.next.call(null,seq8379);
var G__8381 = cljs.core.first.call(null,seq8379__$1);
var seq8379__$2 = cljs.core.next.call(null,seq8379__$1);
var G__8382 = cljs.core.first.call(null,seq8379__$2);
var seq8379__$3 = cljs.core.next.call(null,seq8379__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__8380,G__8381,G__8382,seq8379__$3);
});

return null;
})()
;
tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;

var ret__7937__auto___8391 = (function (){
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__7904__auto__ = [];
var len__7897__auto___8392 = arguments.length;
var i__7898__auto___8393 = (0);
while(true){
if((i__7898__auto___8393 < len__7897__auto___8392)){
args__7904__auto__.push((arguments[i__7898__auto___8393]));

var G__8394 = (i__7898__auto___8393 + (1));
i__7898__auto___8393 = G__8394;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7615__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6772__auto__ = reader_prefix;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7615__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq8387){
var G__8388 = cljs.core.first.call(null,seq8387);
var seq8387__$1 = cljs.core.next.call(null,seq8387);
var G__8389 = cljs.core.first.call(null,seq8387__$1);
var seq8387__$2 = cljs.core.next.call(null,seq8387__$1);
var G__8390 = cljs.core.first.call(null,seq8387__$2);
var seq8387__$3 = cljs.core.next.call(null,seq8387__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__8388,G__8389,G__8390,seq8387__$3);
});

return null;
})()
;
tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;


//# sourceMappingURL=base.js.map