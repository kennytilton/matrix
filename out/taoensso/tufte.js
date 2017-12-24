// Compiled by ClojureScript 1.9.671 {}
goog.provide('taoensso.tufte');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('taoensso.tufte.impl');
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(85),(0)], null));
taoensso.tufte.valid_run_level_QMARK_ = (function taoensso$tufte$valid_run_level_QMARK_(x){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null).call(null,x))){
return true;
} else {
return false;
}
});
taoensso.tufte.valid_min_level_QMARK_ = (function taoensso$tufte$valid_min_level_QMARK_(x){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null).call(null,x))){
return true;
} else {
return false;
}
});
taoensso.tufte.invalid_run_level_msg = "Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}";
taoensso.tufte.invalid_min_level_msg = "Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}";
taoensso.tufte.valid_run_level = (function taoensso$tufte$valid_run_level(x){
var or__6772__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null).call(null,x);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
throw cljs.core.ex_info.call(null,"Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
taoensso.tufte.valid_min_level = (function taoensso$tufte$valid_min_level(x){
var or__6772__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null).call(null,x);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
throw cljs.core.ex_info.call(null,"Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
/**
 * e/o #{0 1 2 3 4 5 6}
 */
taoensso.tufte._STAR_min_level_STAR_ = (2);
/**
 * Sets root binding of minimum profiling level, e/o #{0 1 2 3 4 5 6}.
 *  0 => Enable  all profiling.
 *  6 => Disable all profiling.
 */
taoensso.tufte.set_min_level_BANG_ = (function taoensso$tufte$set_min_level_BANG_(level){
taoensso.tufte.valid_min_level.call(null,level);

return taoensso.tufte._STAR_min_level_STAR_ = level;
});
var ret__7937__auto___19556 = (function (){
/**
 * Executes body with dynamic minimum profiling level, e/o #{0 1 2 3 4 5 6}.
 *  0 => Enable  all profiling.
 *  6 => Disable all profiling.
 */
taoensso.tufte.with_min_level = (function taoensso$tufte$with_min_level(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19557 = arguments.length;
var i__7898__auto___19558 = (0);
while(true){
if((i__7898__auto___19558 < len__7897__auto___19557)){
args__7904__auto__.push((arguments[i__7898__auto___19558]));

var G__19559 = (i__7898__auto___19558 + (1));
i__7898__auto___19558 = G__19559;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
if(cljs.core.integer_QMARK_.call(null,level)){
taoensso.tufte.valid_min_level.call(null,level);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.tufte","*min-level*","taoensso.tufte/*min-level*",-1012922549,null)),(function (){var x__7615__auto__ = level;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.tufte","*min-level*","taoensso.tufte/*min-level*",-1012922549,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.tufte","valid-min-level","taoensso.tufte/valid-min-level",-1139992132,null)),(function (){var x__7615__auto__ = level;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
}
});

taoensso.tufte.with_min_level.cljs$lang$maxFixedArity = (3);

taoensso.tufte.with_min_level.cljs$lang$applyTo = (function (seq19552){
var G__19553 = cljs.core.first.call(null,seq19552);
var seq19552__$1 = cljs.core.next.call(null,seq19552);
var G__19554 = cljs.core.first.call(null,seq19552__$1);
var seq19552__$2 = cljs.core.next.call(null,seq19552__$1);
var G__19555 = cljs.core.first.call(null,seq19552__$2);
var seq19552__$3 = cljs.core.next.call(null,seq19552__$2);
return taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic(G__19553,G__19554,G__19555,seq19552__$3);
});

return null;
})()
;
taoensso.tufte.with_min_level.cljs$lang$macro = true;

taoensso.tufte._compile_ns_filter = taoensso.encore.memoize_.call(null,taoensso.encore.compile_ns_filter);
/**
 * (fn [?ns] -> truthy).
 */
taoensso.tufte._STAR_ns_filter_STAR_ = taoensso.tufte._compile_ns_filter.call(null,"*");
/**
 * Sets root binding of namespace filter.
 *   See `compile-ns-filter` docstring for details on `ns-pattern` arg.
 */
taoensso.tufte.set_ns_pattern_BANG_ = (function taoensso$tufte$set_ns_pattern_BANG_(ns_pattern){
var nsf_QMARK_ = taoensso.tufte._compile_ns_filter.call(null,ns_pattern);
return taoensso.tufte._STAR_ns_filter_STAR_ = nsf_QMARK_;
});
var ret__7937__auto___19564 = (function (){
/**
 * Executes body with dynamic namespace filter.
 *   See `compile-ns-filter` docstring for details on `ns-pattern` arg.
 */
taoensso.tufte.with_ns_pattern = (function taoensso$tufte$with_ns_pattern(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19565 = arguments.length;
var i__7898__auto___19566 = (0);
while(true){
if((i__7898__auto___19566 < len__7897__auto___19565)){
args__7904__auto__.push((arguments[i__7898__auto___19566]));

var G__19567 = (i__7898__auto___19566 + (1));
i__7898__auto___19566 = G__19567;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,ns_pattern,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.tufte","*ns-filter*","taoensso.tufte/*ns-filter*",843426356,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.tufte","-compile-ns-filter","taoensso.tufte/-compile-ns-filter",1610882000,null)),(function (){var x__7615__auto__ = ns_pattern;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
});

taoensso.tufte.with_ns_pattern.cljs$lang$maxFixedArity = (3);

taoensso.tufte.with_ns_pattern.cljs$lang$applyTo = (function (seq19560){
var G__19561 = cljs.core.first.call(null,seq19560);
var seq19560__$1 = cljs.core.next.call(null,seq19560);
var G__19562 = cljs.core.first.call(null,seq19560__$1);
var seq19560__$2 = cljs.core.next.call(null,seq19560__$1);
var G__19563 = cljs.core.first.call(null,seq19560__$2);
var seq19560__$3 = cljs.core.next.call(null,seq19560__$2);
return taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic(G__19561,G__19562,G__19563,seq19560__$3);
});

return null;
})()
;
taoensso.tufte.with_ns_pattern.cljs$lang$macro = true;

/**
 * Returns true iff level and ns are runtime unfiltered.
 */
taoensso.tufte.may_profile_QMARK_ = (function taoensso$tufte$may_profile_QMARK_(var_args){
var G__19569 = arguments.length;
switch (G__19569) {
case 1:
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.tufte.may_profile_QMARK_.call(null,level,cljs.core._STAR_ns_STAR_);
});

taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,ns){
if((taoensso.tufte.valid_run_level.call(null,level) >= taoensso.tufte._STAR_min_level_STAR_)){
if(cljs.core.truth_(taoensso.tufte._STAR_ns_filter_STAR_.call(null,ns))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.tufte.may_profile_QMARK_.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.tufte.HandlerVal = (function (ns_str,level,_QMARK_id,_QMARK_data,stats,stats_str_,_QMARK_file,_QMARK_line,__meta,__extmap,__hash){
this.ns_str = ns_str;
this.level = level;
this._QMARK_id = _QMARK_id;
this._QMARK_data = _QMARK_data;
this.stats = stats;
this.stats_str_ = stats_str_;
this._QMARK_file = _QMARK_file;
this._QMARK_line = _QMARK_line;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7398__auto__,k__7399__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return this__7398__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7399__auto__,null);
});

taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7400__auto__,k19572,else__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
var G__19576 = k19572;
var G__19576__$1 = (((G__19576 instanceof cljs.core.Keyword))?G__19576.fqn:null);
switch (G__19576__$1) {
case "ns-str":
return self__.ns_str;

break;
case "level":
return self__.level;

break;
case "?id":
return self__._QMARK_id;

break;
case "?data":
return self__._QMARK_data;

break;
case "stats":
return self__.stats;

break;
case "stats-str_":
return self__.stats_str_;

break;
case "?file":
return self__._QMARK_file;

break;
case "?line":
return self__._QMARK_line;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19572,else__7401__auto__);

}
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7412__auto__,writer__7413__auto__,opts__7414__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
var pr_pair__7415__auto__ = ((function (this__7412__auto____$1){
return (function (keyval__7416__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7413__auto__,cljs.core.pr_writer,""," ","",opts__7414__auto__,keyval__7416__auto__);
});})(this__7412__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7413__auto__,pr_pair__7415__auto__,"#taoensso.tufte.HandlerVal{",", ","}",opts__7414__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),self__.ns_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?id","?id",-712098248),self__._QMARK_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?data","?data",-9471433),self__._QMARK_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stats","stats",-85643011),self__.stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stats-str_","stats-str_",838165736),self__.stats_str_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?file","?file",1533429675),self__._QMARK_file],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?line","?line",-631853385),self__._QMARK_line],null))], null),self__.__extmap));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19571){
var self__ = this;
var G__19571__$1 = this;
return (new cljs.core.RecordIter((0),G__19571__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?id","?id",-712098248),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"stats-str_","stats-str_",838165736),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"?line","?line",-631853385)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
return self__.__meta;
});

taoensso.tufte.HandlerVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7393__auto__){
var self__ = this;
var this__7393__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7402__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7394__auto__){
var self__ = this;
var this__7394__auto____$1 = this;
var h__7212__auto__ = self__.__hash;
if(!((h__7212__auto__ == null))){
return h__7212__auto__;
} else {
var h__7212__auto____$1 = ((function (h__7212__auto__,this__7394__auto____$1){
return (function (coll__7395__auto__){
return (-274730077 ^ cljs.core.hash_unordered_coll.call(null,coll__7395__auto__));
});})(h__7212__auto__,this__7394__auto____$1))
.call(null,this__7394__auto____$1);
self__.__hash = h__7212__auto____$1;

return h__7212__auto____$1;
}
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19573,other19574){
var self__ = this;
var this19573__$1 = this;
return (!((other19574 == null))) && ((this19573__$1.constructor === other19574.constructor)) && (cljs.core._EQ_.call(null,this19573__$1.ns_str,other19574.ns_str)) && (cljs.core._EQ_.call(null,this19573__$1.level,other19574.level)) && (cljs.core._EQ_.call(null,this19573__$1._QMARK_id,other19574._QMARK_id)) && (cljs.core._EQ_.call(null,this19573__$1._QMARK_data,other19574._QMARK_data)) && (cljs.core._EQ_.call(null,this19573__$1.stats,other19574.stats)) && (cljs.core._EQ_.call(null,this19573__$1.stats_str_,other19574.stats_str_)) && (cljs.core._EQ_.call(null,this19573__$1._QMARK_file,other19574._QMARK_file)) && (cljs.core._EQ_.call(null,this19573__$1._QMARK_line,other19574._QMARK_line)) && (cljs.core._EQ_.call(null,this19573__$1.__extmap,other19574.__extmap));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7407__auto__,k__7408__auto__){
var self__ = this;
var this__7407__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"stats-str_","stats-str_",838165736),null,new cljs.core.Keyword(null,"?file","?file",1533429675),null,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"?line","?line",-631853385),null,new cljs.core.Keyword(null,"?id","?id",-712098248),null,new cljs.core.Keyword(null,"stats","stats",-85643011),null], null), null),k__7408__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7407__auto____$1),self__.__meta),k__7408__auto__);
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7408__auto__)),null));
}
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7405__auto__,k__7406__auto__,G__19571){
var self__ = this;
var this__7405__auto____$1 = this;
var pred__19577 = cljs.core.keyword_identical_QMARK_;
var expr__19578 = k__7406__auto__;
if(cljs.core.truth_(pred__19577.call(null,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),expr__19578))){
return (new taoensso.tufte.HandlerVal(G__19571,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19577.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__19578))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,G__19571,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19577.call(null,new cljs.core.Keyword(null,"?id","?id",-712098248),expr__19578))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,G__19571,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19577.call(null,new cljs.core.Keyword(null,"?data","?data",-9471433),expr__19578))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,G__19571,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19577.call(null,new cljs.core.Keyword(null,"stats","stats",-85643011),expr__19578))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,G__19571,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19577.call(null,new cljs.core.Keyword(null,"stats-str_","stats-str_",838165736),expr__19578))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,G__19571,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19577.call(null,new cljs.core.Keyword(null,"?file","?file",1533429675),expr__19578))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,G__19571,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19577.call(null,new cljs.core.Keyword(null,"?line","?line",-631853385),expr__19578))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,G__19571,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7406__auto__,G__19571),null));
}
}
}
}
}
}
}
}
});

taoensso.tufte.HandlerVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7410__auto__){
var self__ = this;
var this__7410__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),self__.ns_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?id","?id",-712098248),self__._QMARK_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?data","?data",-9471433),self__._QMARK_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stats","stats",-85643011),self__.stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stats-str_","stats-str_",838165736),self__.stats_str_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?file","?file",1533429675),self__._QMARK_file],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?line","?line",-631853385),self__._QMARK_line],null))], null),self__.__extmap));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7397__auto__,G__19571){
var self__ = this;
var this__7397__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,G__19571,self__.__extmap,self__.__hash));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7403__auto__,entry__7404__auto__){
var self__ = this;
var this__7403__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7404__auto__)){
return this__7403__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7404__auto__,(0)),cljs.core._nth.call(null,entry__7404__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7403__auto____$1,entry__7404__auto__);
}
});

taoensso.tufte.HandlerVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns-str","ns-str",-422084972,null),new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?data","?data",1631060094,null),new cljs.core.Symbol(null,"stats","stats",1554888516,null),new cljs.core.Symbol(null,"stats-str_","stats-str_",-1816270033,null),new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Symbol(null,"?line","?line",1008678142,null)], null);
});

taoensso.tufte.HandlerVal.cljs$lang$type = true;

taoensso.tufte.HandlerVal.cljs$lang$ctorPrSeq = (function (this__7434__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.tufte/HandlerVal");
});

taoensso.tufte.HandlerVal.cljs$lang$ctorPrWriter = (function (this__7434__auto__,writer__7435__auto__){
return cljs.core._write.call(null,writer__7435__auto__,"taoensso.tufte/HandlerVal");
});

taoensso.tufte.__GT_HandlerVal = (function taoensso$tufte$__GT_HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,stats,stats_str_,_QMARK_file,_QMARK_line){
return (new taoensso.tufte.HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,stats,stats_str_,_QMARK_file,_QMARK_line,null,null,null));
});

taoensso.tufte.map__GT_HandlerVal = (function taoensso$tufte$map__GT_HandlerVal(G__19575){
return (new taoensso.tufte.HandlerVal(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(G__19575),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__19575),new cljs.core.Keyword(null,"?id","?id",-712098248).cljs$core$IFn$_invoke$arity$1(G__19575),new cljs.core.Keyword(null,"?data","?data",-9471433).cljs$core$IFn$_invoke$arity$1(G__19575),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(G__19575),new cljs.core.Keyword(null,"stats-str_","stats-str_",838165736).cljs$core$IFn$_invoke$arity$1(G__19575),new cljs.core.Keyword(null,"?file","?file",1533429675).cljs$core$IFn$_invoke$arity$1(G__19575),new cljs.core.Keyword(null,"?line","?line",-631853385).cljs$core$IFn$_invoke$arity$1(G__19575),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__19575,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?id","?id",-712098248),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"stats-str_","stats-str_",838165736),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"?line","?line",-631853385))),null));
});

/**
 * {<handler-id> <handler-fn>}
 */
taoensso.tufte.handlers_ = taoensso.tufte.impl.handlers_;
/**
 * Use this to register interest in stats output produced by `profile` calls.
 *   Each registered `handler-fn` will be called as:
 * 
 *  (handler-fn {:ns-str _ :level _ :?id _ :?data _ :stats _ :stats-str_ _})
 * 
 *   Map args:
 *  :ns-str     - Namespace string where `profile` call took place
 *  :level      - Level e/o #{0 1 2 3 4 5}, given in `(profile {:level _} ...)`
 *  :?id        - Optional id,              given in `(profile {:id    _} ...)`
 *  :?data      - Optional arb data,        given in `(profile {:data  _} ...)`
 *  :stats      - Stats map as in `(second (profiled ...))`
 *  :stats-str_ - `(delay (format-stats stats))`
 * 
 *   Error handling (NB):
 *  Handler errors will be silently swallowed. Please `try`/`catch` and
 *  appropriately deal with (e.g. log) possible errors *within* `handler-fn`.
 * 
 *   Async/blocking:
 *  `handler-fn` should ideally be non-blocking, or reasonably cheap. Handler
 *   dispatch occurs through a 1-thread 1k-buffer dropping queue.
 * 
 *   Ns filtering:
 *  Provide an optional `ns-pattern` arg to only call handler for matching
 *  namespaces. See `compile-ns-filter` docstring for details on `ns-pattern`.
 * 
 *   Handler ideas:
 *  Save to a db, log, `put!` to an appropriate `core.async` channel, filter,
 *  aggregate, use for a realtime analytics dashboard, examine for outliers
 *  or unexpected output, ...
 */
taoensso.tufte.add_handler_BANG_ = (function taoensso$tufte$add_handler_BANG_(var_args){
var G__19582 = arguments.length;
switch (G__19582) {
case 2:
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,handler_fn){
return taoensso.tufte.add_handler_BANG_.call(null,handler_id,null,handler_fn);
});

taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,ns_pattern,handler_fn){
var f = ((((ns_pattern == null)) || (cljs.core._EQ_.call(null,ns_pattern,"*")))?handler_fn:(function (){var nsf_QMARK_ = taoensso.tufte._compile_ns_filter.call(null,ns_pattern);
return ((function (nsf_QMARK_){
return (function (m){
if(cljs.core.truth_(nsf_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499))))){
return handler_fn.call(null,m);
} else {
return null;
}
});
;})(nsf_QMARK_))
})());
return cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.swap_BANG_.call(null,taoensso.tufte.handlers_,cljs.core.assoc,handler_id,f)));
});

taoensso.tufte.add_handler_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.tufte.remove_handler_BANG_ = (function taoensso$tufte$remove_handler_BANG_(handler_id){
return cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.swap_BANG_.call(null,taoensso.tufte.handlers_,cljs.core.dissoc,handler_id)));
});
/**
 * Adds a simple handler that logs `profile` stats output with `println`.
 */
taoensso.tufte.add_basic_println_handler_BANG_ = (function taoensso$tufte$add_basic_println_handler_BANG_(p__19584){
var map__19585 = p__19584;
var map__19585__$1 = ((((!((map__19585 == null)))?((((map__19585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19585):map__19585);
var ns_pattern = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"ns-pattern","ns-pattern",-1760120986),"*");
return taoensso.tufte.add_handler_BANG_.call(null,new cljs.core.Keyword(null,"basic-println","basic-println",-1128346249),ns_pattern,((function (map__19585,map__19585__$1,ns_pattern){
return (function (m){
var map__19587 = m;
var map__19587__$1 = ((((!((map__19587 == null)))?((((map__19587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19587):map__19587);
var stats_str_ = cljs.core.get.call(null,map__19587__$1,new cljs.core.Keyword(null,"stats-str_","stats-str_",838165736));
var _QMARK_id = cljs.core.get.call(null,map__19587__$1,new cljs.core.Keyword(null,"?id","?id",-712098248));
var _QMARK_data = cljs.core.get.call(null,map__19587__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var stats_str = cljs.core.force.call(null,stats_str_);
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(_QMARK_id)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\nid: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_id)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(_QMARK_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\ndata: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_data)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stats_str)].join(''));
});})(map__19585,map__19585__$1,ns_pattern))
);
});
/**
 * Returns e/o #{nil :thread :dynamic}.
 */
taoensso.tufte.profiling_QMARK_ = (function taoensso$tufte$profiling_QMARK_(){
if(cljs.core.truth_(taoensso.tufte.impl._STAR_pdata__STAR_)){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571);
} else {
if(cljs.core.truth_(taoensso.tufte.impl.pdata_proxy.call(null))){
return new cljs.core.Keyword(null,"thread","thread",947001524);
} else {
return null;
}
}
});
/**
 * Warning: this is a low-level primitive. Prefer higher-level macros
 *   like `profile` when possible.
 * 
 *   NB: must be accompanied by a call to `stop-profiling-thread!`
 *   (e.g. using `try`/`finally`).
 */
taoensso.tufte.start_profiling_thread_BANG_ = (function taoensso$tufte$start_profiling_thread_BANG_(){
taoensso.tufte.impl.pdata_proxy.call(null,(new taoensso.tufte.impl.PData(taoensso.encore.now_nano.call(null))));

return null;
});
/**
 * Warning: this is a low-level primitive.
 */
taoensso.tufte.stop_profiling_thread_BANG_ = (function taoensso$tufte$stop_profiling_thread_BANG_(){
var temp__4657__auto__ = taoensso.tufte.impl.pdata_proxy.call(null);
if(cljs.core.truth_(temp__4657__auto__)){
var pdata = temp__4657__auto__;
var result = taoensso.tufte.impl.pdata__GT_Stats.call(null,pdata);
taoensso.tufte.impl.pdata_proxy.call(null,null);

return result;
} else {
return null;
}
});
/**
 * Returns (fn [?ns]) -> truthy. Some example patterns:
 *  "foo.bar", "foo.bar.*", #{"foo" "bar"},
 *  {:whitelist ["foo.bar.*"] :blacklist ["baz.*"]}
 */
taoensso.tufte.compile_ns_filter = (function taoensso$tufte$compile_ns_filter(ns_pattern){
return taoensso.encore.compile_ns_filter.call(null,ns_pattern);
});
/**
 * Returns true with 0<`p`<1 probability.
 */
taoensso.tufte.chance = (function taoensso$tufte$chance(p){
return (cljs.core.rand.call(null) < p);
});
/**
 * Merges stats maps from multiple runs or threads.
 *   Automatically identifies and merges concurrent time windows.
 */
taoensso.tufte.merge_stats = (function taoensso$tufte$merge_stats(s1,s2){
if(cljs.core.truth_(s1)){
if(cljs.core.truth_(s2)){
var s1__$1 = s1;
var s2__$1 = s2;
var clock1 = s1__$1.clock;
var clock2 = s2__$1.clock;
var s1_t0 = clock1.t0;
var s1_t1 = clock1.t1;
var s2_t0 = clock2.t0;
var s2_t1 = clock2.t1;
var clock_overlap_QMARK_ = (!((s1_t0 === (0)))) && (!((s2_t0 === (0)))) && ((((s2_t0 <= s1_t1)) && ((s2_t1 >= s1_t0))) || (((s1_t0 <= s2_t1)) && ((s1_t1 >= s2_t0))));
var clock3 = ((clock_overlap_QMARK_)?(function (){var s3_t0 = (((s1_t0 < s2_t0))?s1_t0:s2_t0);
var s3_t1 = (((s1_t1 < s2_t1))?s1_t1:s2_t1);
return (new taoensso.tufte.impl.Clock(s3_t0,s3_t1,(s3_t1 - s3_t0),null,null,null));
})():(new taoensso.tufte.impl.Clock((0),(0),(clock1.total + clock2.total),null,null,null)));
var m_id_stats1 = s1__$1.id_stats_map;
var m_id_stats2 = s2__$1.id_stats_map;
var all_ids = cljs.core.into.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m_id_stats1)),cljs.core.keys.call(null,m_id_stats2));
var m_id_stats3 = cljs.core.reduce.call(null,((function (s1__$1,s2__$1,clock1,clock2,s1_t0,s1_t1,s2_t0,s2_t1,clock_overlap_QMARK_,clock3,m_id_stats1,m_id_stats2,all_ids){
return (function (m,id){
var sid1 = cljs.core.get.call(null,m_id_stats1,id);
var sid2 = cljs.core.get.call(null,m_id_stats2,id);
if(cljs.core.truth_(sid1)){
if(cljs.core.truth_(sid2)){
var sid1__$1 = sid1;
var sid2__$1 = sid2;
var s1_count = sid1__$1.count;
var s1_time = sid1__$1.time;
var s1_mad_sum = sid1__$1.mad_sum;
var s1_min = sid1__$1.min;
var s1_max = sid1__$1.max;
var s2_count = sid2__$1.count;
var s2_time = sid2__$1.time;
var s2_mad_sum = sid2__$1.mad_sum;
var s2_min = sid2__$1.min;
var s2_max = sid2__$1.max;
var s3_count = (s1_count + s2_count);
var s3_time = (s1_time + s2_time);
var s3_mad_sum = (s1_mad_sum + s2_mad_sum);
return cljs.core.assoc.call(null,m,id,(new taoensso.tufte.impl.IdStats(s3_count,s3_time,(s3_time / s3_count),s3_mad_sum,(s3_mad_sum / s3_count),(((s1_min < s2_min))?s1_min:s2_min),(((s1_max > s2_max))?s1_max:s2_max),null,null,null)));
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,id,sid2);
}
});})(s1__$1,s2__$1,clock1,clock2,s1_t0,s1_t1,s2_t0,s2_t1,clock_overlap_QMARK_,clock3,m_id_stats1,m_id_stats2,all_ids))
,m_id_stats1,all_ids);
return (new taoensso.tufte.impl.Stats(clock3,m_id_stats3,null,null,null));
} else {
return s1;
}
} else {
return s2;
}
});
taoensso.tufte.accounted_time = (function taoensso$tufte$accounted_time(stats){
return cljs.core.reduce_kv.call(null,(function (acc,id,v){
return (acc + v.time);
}),(0),stats.id_stats_map);
});
/**
 * Experimental, subject to change!
 *   Small util to help merge stats maps from multiple runs or threads.
 *   Returns a stateful fn with arities:
 *  ([stats]) ; Accumulates the given stats (you may call this from any thread)
 *  ([])      ; Deref: returns the merged value of all accumulated stats
 */
taoensso.tufte.stats_accumulator = (function taoensso$tufte$stats_accumulator(){
var acc_ = cljs.core.atom.call(null,null);
var reduce_stats_ = (new cljs.core.Delay(((function (acc_){
return (function (){
var merge_stats = taoensso.encore.memoize_.call(null,taoensso.tufte.merge_stats);
return taoensso.encore.memoize_.call(null,((function (merge_stats,acc_){
return (function (acc){
return cljs.core.reduce.call(null,merge_stats,null,acc);
});})(merge_stats,acc_))
);
});})(acc_))
,null));
return ((function (acc_,reduce_stats_){
return (function() {
var taoensso$tufte$stats_accumulator_$_stats_accumulator = null;
var taoensso$tufte$stats_accumulator_$_stats_accumulator__0 = (function (){
var temp__4657__auto__ = cljs.core.deref.call(null,acc_);
if(cljs.core.truth_(temp__4657__auto__)){
var acc = temp__4657__auto__;
return cljs.core.deref.call(null,reduce_stats_).call(null,acc);
} else {
return null;
}
});
var taoensso$tufte$stats_accumulator_$_stats_accumulator__1 = (function (stats){
if(cljs.core.truth_(stats)){
return cljs.core.swap_BANG_.call(null,acc_,cljs.core.conj,stats);
} else {
return null;
}
});
taoensso$tufte$stats_accumulator_$_stats_accumulator = function(stats){
switch(arguments.length){
case 0:
return taoensso$tufte$stats_accumulator_$_stats_accumulator__0.call(this);
case 1:
return taoensso$tufte$stats_accumulator_$_stats_accumulator__1.call(this,stats);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$tufte$stats_accumulator_$_stats_accumulator.cljs$core$IFn$_invoke$arity$0 = taoensso$tufte$stats_accumulator_$_stats_accumulator__0;
taoensso$tufte$stats_accumulator_$_stats_accumulator.cljs$core$IFn$_invoke$arity$1 = taoensso$tufte$stats_accumulator_$_stats_accumulator__1;
return taoensso$tufte$stats_accumulator_$_stats_accumulator;
})()
;})(acc_,reduce_stats_))
});
/**
 * Experimental, subject to change!
 */
taoensso.tufte.accumulate_stats = (function taoensso$tufte$accumulate_stats(stats_accumulator,p__19596){
var vec__19597 = p__19596;
var profiled_result = cljs.core.nth.call(null,vec__19597,(0),null);
var profiled__QMARK_stats = cljs.core.nth.call(null,vec__19597,(1),null);
if(cljs.core.truth_(profiled__QMARK_stats)){
stats_accumulator.call(null,profiled__QMARK_stats);
} else {
}

return profiled_result;
});
taoensso.tufte.perc = (function taoensso$tufte$perc(n,d){
return Math.round(((n / d) * 100.0));
});
taoensso.tufte.ft = (function taoensso$tufte$ft(nanosecs){
var ns = cljs.core.long$.call(null,nanosecs);
if((ns >= (1000000000))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.round2.call(null,(ns / (1000000000)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('');
} else {
if((ns >= (1000000))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.round2.call(null,(ns / (1000000)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ms")].join('');
} else {
if((ns >= (1000))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.round2.call(null,(ns / (1000)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u03BCs")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ns")].join('');

}
}
}
});
taoensso.tufte.format_stats = (function taoensso$tufte$format_stats(var_args){
var G__19603 = arguments.length;
switch (G__19603) {
case 1:
return taoensso.tufte.format_stats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.format_stats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tufte.format_stats.cljs$core$IFn$_invoke$arity$1 = (function (stats){
return taoensso.tufte.format_stats.call(null,stats,(function (id,id_stats){
return id_stats.time;
}));
});

taoensso.tufte.format_stats.cljs$core$IFn$_invoke$arity$2 = (function (stats,sort_fn){
if(cljs.core.truth_(stats)){
var stats__$1 = stats;
var clock = stats__$1.clock;
var m_id_stats = stats__$1.id_stats_map;
var clock_total = clock.total;
var accounted = taoensso.tufte.accounted_time.call(null,stats__$1);
var sorted_ids = cljs.core.sort_by.call(null,((function (stats__$1,clock,m_id_stats,clock_total,accounted){
return (function (id){
return sort_fn.call(null,id,cljs.core.get.call(null,m_id_stats,id));
});})(stats__$1,clock,m_id_stats,clock_total,accounted))
,taoensso.encore.rcompare,cljs.core.keys.call(null,m_id_stats));
var max_id_width = cljs.core.reduce_kv.call(null,((function (stats__$1,clock,m_id_stats,clock_total,accounted,sorted_ids){
return (function (acc,k,v){
var c = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
if((c > acc)){
return c;
} else {
return acc;
}
});})(stats__$1,clock,m_id_stats,clock_total,accounted,sorted_ids))
,14,m_id_stats);
var sb = cljs.core.reduce.call(null,((function (stats__$1,clock,m_id_stats,clock_total,accounted,sorted_ids,max_id_width){
return (function (acc,id){
var id_stats = cljs.core.get.call(null,m_id_stats,id);
var time = id_stats.time;
return taoensso.encore.sb_append.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),id_stats.count,new cljs.core.Keyword(null,"min","min",444991522),taoensso.tufte.ft.call(null,id_stats.min),new cljs.core.Keyword(null,"max","max",61366548),taoensso.tufte.ft.call(null,id_stats.max),new cljs.core.Keyword(null,"mad","mad",-1963165801),taoensso.tufte.ft.call(null,id_stats.mad),new cljs.core.Keyword(null,"mean","mean",-1359234715),taoensso.tufte.ft.call(null,id_stats.mean),new cljs.core.Keyword(null,"time%","time%",953560289),taoensso.tufte.perc.call(null,time,clock_total),new cljs.core.Keyword(null,"time","time",1385887882),taoensso.tufte.ft.call(null,time)], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''));
});})(stats__$1,clock,m_id_stats,clock_total,accounted,sorted_ids,max_id_width))
,taoensso.encore.str_builder.call(null),sorted_ids);
taoensso.encore.sb_append.call(null,sb,"\n");

taoensso.encore.sb_append.call(null,sb,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Clock Time: (100%) "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.ft.call(null,clock_total)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''));

taoensso.encore.sb_append.call(null,sb,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Accounted Time: ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.perc.call(null,accounted,clock_total)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%) "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.ft.call(null,accounted)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
});

taoensso.tufte.format_stats.cljs$lang$maxFixedArity = 2;

taoensso.tufte.fn_sigs = (function taoensso$tufte$fn_sigs(def_QMARK_,fn_name,sigs){
var single_arity_QMARK_ = cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs));
var sigs__$1 = ((single_arity_QMARK_)?(function (){var x__7615__auto__ = sigs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})():sigs);
var prepend = (cljs.core.truth_(def_QMARK_)?"defn_":"fn_");
var get_id = ((single_arity_QMARK_)?((function (single_arity_QMARK_,sigs__$1,prepend){
return (function (fn_name__$1,_params){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prepend),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fn_name__$1))].join(''));
});})(single_arity_QMARK_,sigs__$1,prepend))
:((function (single_arity_QMARK_,sigs__$1,prepend){
return (function (fn_name__$1,params){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prepend),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fn_name__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,params))].join(''));
});})(single_arity_QMARK_,sigs__$1,prepend))
);
var new_sigs = cljs.core.map.call(null,((function (single_arity_QMARK_,sigs__$1,prepend,get_id){
return (function (p__19605){
var vec__19606 = p__19605;
var seq__19607 = cljs.core.seq.call(null,vec__19606);
var first__19608 = cljs.core.first.call(null,seq__19607);
var seq__19607__$1 = cljs.core.next.call(null,seq__19607);
var params = first__19608;
var others = seq__19607__$1;
var has_prepost_map_QMARK_ = (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,others))) && (cljs.core.next.call(null,others));
var vec__19609 = ((has_prepost_map_QMARK_)?others:cljs.core.cons.call(null,null,others));
var seq__19610 = cljs.core.seq.call(null,vec__19609);
var first__19611 = cljs.core.first.call(null,seq__19610);
var seq__19610__$1 = cljs.core.next.call(null,seq__19610);
var _QMARK_prepost_map = first__19611;
var body = seq__19610__$1;
if(cljs.core.truth_(_QMARK_prepost_map)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7615__auto__ = params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = _QMARK_prepost_map;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.tufte","p","taoensso.tufte/p",955444208,null)),(function (){var x__7615__auto__ = get_id.call(null,fn_name,params);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7615__auto__ = params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.tufte","p","taoensso.tufte/p",955444208,null)),(function (){var x__7615__auto__ = get_id.call(null,fn_name,params);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}
});})(single_arity_QMARK_,sigs__$1,prepend,get_id))
,sigs__$1);
return new_sigs;
});
var ret__7937__auto___19618 = (function (){
/**
 * Like `fn` but wraps fn bodies with `p` macro.
 */
taoensso.tufte.fnp = (function taoensso$tufte$fnp(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19619 = arguments.length;
var i__7898__auto___19620 = (0);
while(true){
if((i__7898__auto___19620 < len__7897__auto___19619)){
args__7904__auto__.push((arguments[i__7898__auto___19620]));

var G__19621 = (i__7898__auto___19620 + (1));
i__7898__auto___19620 = G__19621;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return taoensso.tufte.fnp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

taoensso.tufte.fnp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var vec__19615 = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,sigs),cljs.core.next.call(null,sigs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sigs], null));
var _QMARK_fn_name = cljs.core.nth.call(null,vec__19615,(0),null);
var sigs__$1 = cljs.core.nth.call(null,vec__19615,(1),null);
var new_sigs = taoensso.tufte.fn_sigs.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"def","def",-1043430536)),(function (){var or__6772__auto__ = _QMARK_fn_name;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return cljs.core.gensym.call(null,"");
}
})(),sigs__$1);
if(cljs.core.truth_(_QMARK_fn_name)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7615__auto__ = _QMARK_fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),new_sigs)));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),new_sigs)));
}
});

taoensso.tufte.fnp.cljs$lang$maxFixedArity = (2);

taoensso.tufte.fnp.cljs$lang$applyTo = (function (seq19612){
var G__19613 = cljs.core.first.call(null,seq19612);
var seq19612__$1 = cljs.core.next.call(null,seq19612);
var G__19614 = cljs.core.first.call(null,seq19612__$1);
var seq19612__$2 = cljs.core.next.call(null,seq19612__$1);
return taoensso.tufte.fnp.cljs$core$IFn$_invoke$arity$variadic(G__19613,G__19614,seq19612__$2);
});

return null;
})()
;
taoensso.tufte.fnp.cljs$lang$macro = true;

var ret__7937__auto___19628 = (function (){
/**
 * Like `defn` but wraps fn bodies with `p` macro.
 */
taoensso.tufte.defnp = (function taoensso$tufte$defnp(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19629 = arguments.length;
var i__7898__auto___19630 = (0);
while(true){
if((i__7898__auto___19630 < len__7897__auto___19629)){
args__7904__auto__.push((arguments[i__7898__auto___19630]));

var G__19631 = (i__7898__auto___19630 + (1));
i__7898__auto___19630 = G__19631;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return taoensso.tufte.defnp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

taoensso.tufte.defnp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var vec__19625 = taoensso.encore.name_with_attrs.call(null,cljs.core.first.call(null,sigs),cljs.core.next.call(null,sigs));
var fn_name = cljs.core.nth.call(null,vec__19625,(0),null);
var sigs__$1 = cljs.core.nth.call(null,vec__19625,(1),null);
var new_sigs = taoensso.tufte.fn_sigs.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),fn_name,sigs__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7615__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),new_sigs)));
});

taoensso.tufte.defnp.cljs$lang$maxFixedArity = (2);

taoensso.tufte.defnp.cljs$lang$applyTo = (function (seq19622){
var G__19623 = cljs.core.first.call(null,seq19622);
var seq19622__$1 = cljs.core.next.call(null,seq19622);
var G__19624 = cljs.core.first.call(null,seq19622__$1);
var seq19622__$2 = cljs.core.next.call(null,seq19622__$1);
return taoensso.tufte.defnp.cljs$core$IFn$_invoke$arity$variadic(G__19623,G__19624,seq19622__$2);
});

return null;
})()
;
taoensso.tufte.defnp.cljs$lang$macro = true;


//# sourceMappingURL=tufte.js.map