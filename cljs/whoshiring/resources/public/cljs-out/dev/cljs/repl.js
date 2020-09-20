// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27933){
var map__27934 = p__27933;
var map__27934__$1 = (((((!((map__27934 == null))))?(((((map__27934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27934):map__27934);
var m = map__27934__$1;
var n = cljs.core.get.call(null,map__27934__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27936_27968 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27937_27969 = null;
var count__27938_27970 = (0);
var i__27939_27971 = (0);
while(true){
if((i__27939_27971 < count__27938_27970)){
var f_27972 = cljs.core._nth.call(null,chunk__27937_27969,i__27939_27971);
cljs.core.println.call(null,"  ",f_27972);


var G__27973 = seq__27936_27968;
var G__27974 = chunk__27937_27969;
var G__27975 = count__27938_27970;
var G__27976 = (i__27939_27971 + (1));
seq__27936_27968 = G__27973;
chunk__27937_27969 = G__27974;
count__27938_27970 = G__27975;
i__27939_27971 = G__27976;
continue;
} else {
var temp__5720__auto___27977 = cljs.core.seq.call(null,seq__27936_27968);
if(temp__5720__auto___27977){
var seq__27936_27978__$1 = temp__5720__auto___27977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27936_27978__$1)){
var c__4556__auto___27979 = cljs.core.chunk_first.call(null,seq__27936_27978__$1);
var G__27980 = cljs.core.chunk_rest.call(null,seq__27936_27978__$1);
var G__27981 = c__4556__auto___27979;
var G__27982 = cljs.core.count.call(null,c__4556__auto___27979);
var G__27983 = (0);
seq__27936_27968 = G__27980;
chunk__27937_27969 = G__27981;
count__27938_27970 = G__27982;
i__27939_27971 = G__27983;
continue;
} else {
var f_27984 = cljs.core.first.call(null,seq__27936_27978__$1);
cljs.core.println.call(null,"  ",f_27984);


var G__27985 = cljs.core.next.call(null,seq__27936_27978__$1);
var G__27986 = null;
var G__27987 = (0);
var G__27988 = (0);
seq__27936_27968 = G__27985;
chunk__27937_27969 = G__27986;
count__27938_27970 = G__27987;
i__27939_27971 = G__27988;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27989 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27989);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27989)))?cljs.core.second.call(null,arglists_27989):arglists_27989));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27940_27990 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27941_27991 = null;
var count__27942_27992 = (0);
var i__27943_27993 = (0);
while(true){
if((i__27943_27993 < count__27942_27992)){
var vec__27954_27994 = cljs.core._nth.call(null,chunk__27941_27991,i__27943_27993);
var name_27995 = cljs.core.nth.call(null,vec__27954_27994,(0),null);
var map__27957_27996 = cljs.core.nth.call(null,vec__27954_27994,(1),null);
var map__27957_27997__$1 = (((((!((map__27957_27996 == null))))?(((((map__27957_27996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27957_27996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27957_27996):map__27957_27996);
var doc_27998 = cljs.core.get.call(null,map__27957_27997__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27999 = cljs.core.get.call(null,map__27957_27997__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27995);

cljs.core.println.call(null," ",arglists_27999);

if(cljs.core.truth_(doc_27998)){
cljs.core.println.call(null," ",doc_27998);
} else {
}


var G__28000 = seq__27940_27990;
var G__28001 = chunk__27941_27991;
var G__28002 = count__27942_27992;
var G__28003 = (i__27943_27993 + (1));
seq__27940_27990 = G__28000;
chunk__27941_27991 = G__28001;
count__27942_27992 = G__28002;
i__27943_27993 = G__28003;
continue;
} else {
var temp__5720__auto___28004 = cljs.core.seq.call(null,seq__27940_27990);
if(temp__5720__auto___28004){
var seq__27940_28005__$1 = temp__5720__auto___28004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27940_28005__$1)){
var c__4556__auto___28006 = cljs.core.chunk_first.call(null,seq__27940_28005__$1);
var G__28007 = cljs.core.chunk_rest.call(null,seq__27940_28005__$1);
var G__28008 = c__4556__auto___28006;
var G__28009 = cljs.core.count.call(null,c__4556__auto___28006);
var G__28010 = (0);
seq__27940_27990 = G__28007;
chunk__27941_27991 = G__28008;
count__27942_27992 = G__28009;
i__27943_27993 = G__28010;
continue;
} else {
var vec__27959_28011 = cljs.core.first.call(null,seq__27940_28005__$1);
var name_28012 = cljs.core.nth.call(null,vec__27959_28011,(0),null);
var map__27962_28013 = cljs.core.nth.call(null,vec__27959_28011,(1),null);
var map__27962_28014__$1 = (((((!((map__27962_28013 == null))))?(((((map__27962_28013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27962_28013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27962_28013):map__27962_28013);
var doc_28015 = cljs.core.get.call(null,map__27962_28014__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28016 = cljs.core.get.call(null,map__27962_28014__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28012);

cljs.core.println.call(null," ",arglists_28016);

if(cljs.core.truth_(doc_28015)){
cljs.core.println.call(null," ",doc_28015);
} else {
}


var G__28017 = cljs.core.next.call(null,seq__27940_28005__$1);
var G__28018 = null;
var G__28019 = (0);
var G__28020 = (0);
seq__27940_27990 = G__28017;
chunk__27941_27991 = G__28018;
count__27942_27992 = G__28019;
i__27943_27993 = G__28020;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__27964 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27965 = null;
var count__27966 = (0);
var i__27967 = (0);
while(true){
if((i__27967 < count__27966)){
var role = cljs.core._nth.call(null,chunk__27965,i__27967);
var temp__5720__auto___28021__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28021__$1)){
var spec_28022 = temp__5720__auto___28021__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28022));
} else {
}


var G__28023 = seq__27964;
var G__28024 = chunk__27965;
var G__28025 = count__27966;
var G__28026 = (i__27967 + (1));
seq__27964 = G__28023;
chunk__27965 = G__28024;
count__27966 = G__28025;
i__27967 = G__28026;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__27964);
if(temp__5720__auto____$1){
var seq__27964__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27964__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27964__$1);
var G__28027 = cljs.core.chunk_rest.call(null,seq__27964__$1);
var G__28028 = c__4556__auto__;
var G__28029 = cljs.core.count.call(null,c__4556__auto__);
var G__28030 = (0);
seq__27964 = G__28027;
chunk__27965 = G__28028;
count__27966 = G__28029;
i__27967 = G__28030;
continue;
} else {
var role = cljs.core.first.call(null,seq__27964__$1);
var temp__5720__auto___28031__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28031__$2)){
var spec_28032 = temp__5720__auto___28031__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28032));
} else {
}


var G__28033 = cljs.core.next.call(null,seq__27964__$1);
var G__28034 = null;
var G__28035 = (0);
var G__28036 = (0);
seq__27964 = G__28033;
chunk__27965 = G__28034;
count__27966 = G__28035;
i__27967 = G__28036;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28037 = cljs.core.conj.call(null,via,t);
var G__28038 = cljs.core.ex_cause.call(null,t);
via = G__28037;
t = G__28038;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28041 = datafied_throwable;
var map__28041__$1 = (((((!((map__28041 == null))))?(((((map__28041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28041):map__28041);
var via = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28042 = cljs.core.last.call(null,via);
var map__28042__$1 = (((((!((map__28042 == null))))?(((((map__28042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28042):map__28042);
var type = cljs.core.get.call(null,map__28042__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28042__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28042__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28043 = data;
var map__28043__$1 = (((((!((map__28043 == null))))?(((((map__28043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28043):map__28043);
var problems = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28044 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28044__$1 = (((((!((map__28044 == null))))?(((((map__28044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28044):map__28044);
var top_data = map__28044__$1;
var source = cljs.core.get.call(null,map__28044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28049 = phase;
var G__28049__$1 = (((G__28049 instanceof cljs.core.Keyword))?G__28049.fqn:null);
switch (G__28049__$1) {
case "read-source":
var map__28050 = data;
var map__28050__$1 = (((((!((map__28050 == null))))?(((((map__28050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28050):map__28050);
var line = cljs.core.get.call(null,map__28050__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28050__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28052 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28052__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28052,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28052);
var G__28052__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28052__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28052__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28052__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28052__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28053 = top_data;
var G__28053__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28053,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28053);
var G__28053__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28053__$1);
var G__28053__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28053__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28053__$2);
var G__28053__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28053__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28053__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28053__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28053__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28054 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28054,(0),null);
var method = cljs.core.nth.call(null,vec__28054,(1),null);
var file = cljs.core.nth.call(null,vec__28054,(2),null);
var line = cljs.core.nth.call(null,vec__28054,(3),null);
var G__28057 = top_data;
var G__28057__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28057,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28057);
var G__28057__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28057__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28057__$1);
var G__28057__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__28057__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28057__$2);
var G__28057__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28057__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28057__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28057__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28057__$4;
}

break;
case "execution":
var vec__28058 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28058,(0),null);
var method = cljs.core.nth.call(null,vec__28058,(1),null);
var file = cljs.core.nth.call(null,vec__28058,(2),null);
var line = cljs.core.nth.call(null,vec__28058,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__28040_SHARP_){
var or__4126__auto__ = (p1__28040_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28040_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__28061 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28061__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28061,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28061);
var G__28061__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28061__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28061__$1);
var G__28061__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__28061__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28061__$2);
var G__28061__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28061__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28061__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28061__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28061__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28049__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28065){
var map__28066 = p__28065;
var map__28066__$1 = (((((!((map__28066 == null))))?(((((map__28066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28066):map__28066);
var triage_data = map__28066__$1;
var phase = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28068 = phase;
var G__28068__$1 = (((G__28068 instanceof cljs.core.Keyword))?G__28068.fqn:null);
switch (G__28068__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28069_28078 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28070_28079 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28071_28080 = true;
var _STAR_print_fn_STAR__temp_val__28072_28081 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28071_28080);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28072_28081);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28063_SHARP_){
return cljs.core.dissoc.call(null,p1__28063_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28070_28079);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28069_28078);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28073_28082 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28074_28083 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28075_28084 = true;
var _STAR_print_fn_STAR__temp_val__28076_28085 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28075_28084);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28076_28085);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28064_SHARP_){
return cljs.core.dissoc.call(null,p1__28064_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28074_28083);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28073_28082);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28068__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
