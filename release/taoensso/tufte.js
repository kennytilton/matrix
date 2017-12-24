// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.tufte');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('taoensso.encore');
goog.require('taoensso.tufte.impl');
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(85),(0)], null));
taoensso.tufte.valid_run_level_QMARK_ = (function taoensso$tufte$valid_run_level_QMARK_(x){
if(cljs.core.truth_((function (){var fexpr__25609 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__25609.cljs$core$IFn$_invoke$arity$1 ? fexpr__25609.cljs$core$IFn$_invoke$arity$1(x) : fexpr__25609.call(null,x));
})())){
return true;
} else {
return false;
}
});
taoensso.tufte.valid_min_level_QMARK_ = (function taoensso$tufte$valid_min_level_QMARK_(x){
if(cljs.core.truth_((function (){var fexpr__25610 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__25610.cljs$core$IFn$_invoke$arity$1 ? fexpr__25610.cljs$core$IFn$_invoke$arity$1(x) : fexpr__25610.call(null,x));
})())){
return true;
} else {
return false;
}
});
taoensso.tufte.invalid_run_level_msg = "Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}";
taoensso.tufte.invalid_min_level_msg = "Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}";
taoensso.tufte.valid_run_level = (function taoensso$tufte$valid_run_level(x){
var or__6774__auto__ = (function (){var fexpr__25612 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__25612.cljs$core$IFn$_invoke$arity$1 ? fexpr__25612.cljs$core$IFn$_invoke$arity$1(x) : fexpr__25612.call(null,x));
})();
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});
taoensso.tufte.valid_min_level = (function taoensso$tufte$valid_min_level(x){
var or__6774__auto__ = (function (){var fexpr__25614 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__25614.cljs$core$IFn$_invoke$arity$1 ? fexpr__25614.cljs$core$IFn$_invoke$arity$1(x) : fexpr__25614.call(null,x));
})();
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
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
taoensso.tufte.valid_min_level(level);

return taoensso.tufte._STAR_min_level_STAR_ = level;
});
var ret__7939__auto___25619 = (function (){
/**
 * Executes body with dynamic minimum profiling level, e/o #{0 1 2 3 4 5 6}.
 *  0 => Enable  all profiling.
 *  6 => Disable all profiling.
 */
taoensso.tufte.with_min_level = (function taoensso$tufte$with_min_level(var_args){
var args__7906__auto__ = [];
var len__7899__auto___25620 = arguments.length;
var i__7900__auto___25621 = (0);
while(true){
if((i__7900__auto___25621 < len__7899__auto___25620)){
args__7906__auto__.push((arguments[i__7900__auto___25621]));

var G__25622 = (i__7900__auto___25621 + (1));
i__7900__auto___25621 = G__25622;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
if(cljs.core.integer_QMARK_(level)){
taoensso.tufte.valid_min_level(level);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$tufte_SLASH__STAR_min_DASH_level_STAR_),(function (){var x__7617__auto__ = level;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$tufte_SLASH__STAR_min_DASH_level_STAR_),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$tufte_SLASH_valid_DASH_min_DASH_level),(function (){var x__7617__auto__ = level;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}
});

taoensso.tufte.with_min_level.cljs$lang$maxFixedArity = (3);

taoensso.tufte.with_min_level.cljs$lang$applyTo = (function (seq25615){
var G__25616 = cljs.core.first(seq25615);
var seq25615__$1 = cljs.core.next(seq25615);
var G__25617 = cljs.core.first(seq25615__$1);
var seq25615__$2 = cljs.core.next(seq25615__$1);
var G__25618 = cljs.core.first(seq25615__$2);
var seq25615__$3 = cljs.core.next(seq25615__$2);
return taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic(G__25616,G__25617,G__25618,seq25615__$3);
});

return null;
})()
;
taoensso.tufte.with_min_level.cljs$lang$macro = true;

taoensso.tufte._compile_ns_filter = taoensso.encore.memoize_(taoensso.encore.compile_ns_filter);
/**
 * (fn [?ns] -> truthy).
 */
taoensso.tufte._STAR_ns_filter_STAR_ = (taoensso.tufte._compile_ns_filter.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte._compile_ns_filter.cljs$core$IFn$_invoke$arity$1("*") : taoensso.tufte._compile_ns_filter.call(null,"*"));
/**
 * Sets root binding of namespace filter.
 *   See `compile-ns-filter` docstring for details on `ns-pattern` arg.
 */
taoensso.tufte.set_ns_pattern_BANG_ = (function taoensso$tufte$set_ns_pattern_BANG_(ns_pattern){
var nsf_QMARK_ = (taoensso.tufte._compile_ns_filter.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte._compile_ns_filter.cljs$core$IFn$_invoke$arity$1(ns_pattern) : taoensso.tufte._compile_ns_filter.call(null,ns_pattern));
return taoensso.tufte._STAR_ns_filter_STAR_ = nsf_QMARK_;
});
var ret__7939__auto___25627 = (function (){
/**
 * Executes body with dynamic namespace filter.
 *   See `compile-ns-filter` docstring for details on `ns-pattern` arg.
 */
taoensso.tufte.with_ns_pattern = (function taoensso$tufte$with_ns_pattern(var_args){
var args__7906__auto__ = [];
var len__7899__auto___25628 = arguments.length;
var i__7900__auto___25629 = (0);
while(true){
if((i__7900__auto___25629 < len__7899__auto___25628)){
args__7906__auto__.push((arguments[i__7900__auto___25629]));

var G__25630 = (i__7900__auto___25629 + (1));
i__7900__auto___25629 = G__25630;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,ns_pattern,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$tufte_SLASH__STAR_ns_DASH_filter_STAR_),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$tufte_SLASH__DASH_compile_DASH_ns_DASH_filter),(function (){var x__7617__auto__ = ns_pattern;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

taoensso.tufte.with_ns_pattern.cljs$lang$maxFixedArity = (3);

taoensso.tufte.with_ns_pattern.cljs$lang$applyTo = (function (seq25623){
var G__25624 = cljs.core.first(seq25623);
var seq25623__$1 = cljs.core.next(seq25623);
var G__25625 = cljs.core.first(seq25623__$1);
var seq25623__$2 = cljs.core.next(seq25623__$1);
var G__25626 = cljs.core.first(seq25623__$2);
var seq25623__$3 = cljs.core.next(seq25623__$2);
return taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic(G__25624,G__25625,G__25626,seq25623__$3);
});

return null;
})()
;
taoensso.tufte.with_ns_pattern.cljs$lang$macro = true;

/**
 * Returns true iff level and ns are runtime unfiltered.
 */
taoensso.tufte.may_profile_QMARK_ = (function taoensso$tufte$may_profile_QMARK_(var_args){
var G__25632 = arguments.length;
switch (G__25632) {
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
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2(level,cljs.core._STAR_ns_STAR_);
});

taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,ns){
if((taoensso.tufte.valid_run_level(level) >= taoensso.tufte._STAR_min_level_STAR_)){
if(cljs.core.truth_((taoensso.tufte._STAR_ns_filter_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte._STAR_ns_filter_STAR_.cljs$core$IFn$_invoke$arity$1(ns) : taoensso.tufte._STAR_ns_filter_STAR_.call(null,ns)))){
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
taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7400__auto__,k__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
return this__7400__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7401__auto__,null);
});

taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7402__auto__,k25635,else__7403__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
var G__25639 = k25635;
var G__25639__$1 = (((G__25639 instanceof cljs.core.Keyword))?G__25639.fqn:null);
switch (G__25639__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25635,else__7403__auto__);

}
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7414__auto__,writer__7415__auto__,opts__7416__auto__){
var self__ = this;
var this__7414__auto____$1 = this;
var pr_pair__7417__auto__ = ((function (this__7414__auto____$1){
return (function (keyval__7418__auto__){
return cljs.core.pr_sequential_writer(writer__7415__auto__,cljs.core.pr_writer,""," ","",opts__7416__auto__,keyval__7418__auto__);
});})(this__7414__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7415__auto__,pr_pair__7417__auto__,"#taoensso.tufte.HandlerVal{",", ","}",opts__7416__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ns_DASH_str,self__.ns_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$level,self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_id,self__._QMARK_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_data,self__._QMARK_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stats,self__.stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stats_DASH_str_,self__.stats_str_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_file,self__._QMARK_file],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_line,self__._QMARK_line],null))], null),self__.__extmap));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25634){
var self__ = this;
var G__25634__$1 = this;
return (new cljs.core.RecordIter((0),G__25634__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$_QMARK_id,cljs.core.cst$kw$_QMARK_data,cljs.core.cst$kw$stats,cljs.core.cst$kw$stats_DASH_str_,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$_QMARK_line], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7398__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return self__.__meta;
});

taoensso.tufte.HandlerVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7395__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7404__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
var h__7214__auto__ = self__.__hash;
if(!((h__7214__auto__ == null))){
return h__7214__auto__;
} else {
var h__7214__auto____$1 = (function (){var fexpr__25640 = ((function (h__7214__auto__,this__7396__auto____$1){
return (function (coll__7397__auto__){
return (-274730077 ^ cljs.core.hash_unordered_coll(coll__7397__auto__));
});})(h__7214__auto__,this__7396__auto____$1))
;
return fexpr__25640(this__7396__auto____$1);
})();
self__.__hash = h__7214__auto____$1;

return h__7214__auto____$1;
}
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25636,other25637){
var self__ = this;
var this25636__$1 = this;
return (!((other25637 == null))) && ((this25636__$1.constructor === other25637.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25636__$1.ns_str,other25637.ns_str)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25636__$1.level,other25637.level)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25636__$1._QMARK_id,other25637._QMARK_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25636__$1._QMARK_data,other25637._QMARK_data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25636__$1.stats,other25637.stats)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25636__$1.stats_str_,other25637.stats_str_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25636__$1._QMARK_file,other25637._QMARK_file)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25636__$1._QMARK_line,other25637._QMARK_line)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25636__$1.__extmap,other25637.__extmap));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7409__auto__,k__7410__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$stats_DASH_str_,null,cljs.core.cst$kw$_QMARK_file,null,cljs.core.cst$kw$ns_DASH_str,null,cljs.core.cst$kw$level,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$_QMARK_line,null,cljs.core.cst$kw$_QMARK_id,null,cljs.core.cst$kw$stats,null], null), null),k__7410__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7409__auto____$1),self__.__meta),k__7410__auto__);
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7410__auto__)),null));
}
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7407__auto__,k__7408__auto__,G__25634){
var self__ = this;
var this__7407__auto____$1 = this;
var pred__25641 = cljs.core.keyword_identical_QMARK_;
var expr__25642 = k__7408__auto__;
if(cljs.core.truth_((function (){var G__25644 = cljs.core.cst$kw$ns_DASH_str;
var G__25645 = expr__25642;
return (pred__25641.cljs$core$IFn$_invoke$arity$2 ? pred__25641.cljs$core$IFn$_invoke$arity$2(G__25644,G__25645) : pred__25641.call(null,G__25644,G__25645));
})())){
return (new taoensso.tufte.HandlerVal(G__25634,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25646 = cljs.core.cst$kw$level;
var G__25647 = expr__25642;
return (pred__25641.cljs$core$IFn$_invoke$arity$2 ? pred__25641.cljs$core$IFn$_invoke$arity$2(G__25646,G__25647) : pred__25641.call(null,G__25646,G__25647));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,G__25634,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25648 = cljs.core.cst$kw$_QMARK_id;
var G__25649 = expr__25642;
return (pred__25641.cljs$core$IFn$_invoke$arity$2 ? pred__25641.cljs$core$IFn$_invoke$arity$2(G__25648,G__25649) : pred__25641.call(null,G__25648,G__25649));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,G__25634,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25650 = cljs.core.cst$kw$_QMARK_data;
var G__25651 = expr__25642;
return (pred__25641.cljs$core$IFn$_invoke$arity$2 ? pred__25641.cljs$core$IFn$_invoke$arity$2(G__25650,G__25651) : pred__25641.call(null,G__25650,G__25651));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,G__25634,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25652 = cljs.core.cst$kw$stats;
var G__25653 = expr__25642;
return (pred__25641.cljs$core$IFn$_invoke$arity$2 ? pred__25641.cljs$core$IFn$_invoke$arity$2(G__25652,G__25653) : pred__25641.call(null,G__25652,G__25653));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,G__25634,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25654 = cljs.core.cst$kw$stats_DASH_str_;
var G__25655 = expr__25642;
return (pred__25641.cljs$core$IFn$_invoke$arity$2 ? pred__25641.cljs$core$IFn$_invoke$arity$2(G__25654,G__25655) : pred__25641.call(null,G__25654,G__25655));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,G__25634,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25656 = cljs.core.cst$kw$_QMARK_file;
var G__25657 = expr__25642;
return (pred__25641.cljs$core$IFn$_invoke$arity$2 ? pred__25641.cljs$core$IFn$_invoke$arity$2(G__25656,G__25657) : pred__25641.call(null,G__25656,G__25657));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,G__25634,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25658 = cljs.core.cst$kw$_QMARK_line;
var G__25659 = expr__25642;
return (pred__25641.cljs$core$IFn$_invoke$arity$2 ? pred__25641.cljs$core$IFn$_invoke$arity$2(G__25658,G__25659) : pred__25641.call(null,G__25658,G__25659));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,G__25634,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7408__auto__,G__25634),null));
}
}
}
}
}
}
}
}
});

taoensso.tufte.HandlerVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7412__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ns_DASH_str,self__.ns_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$level,self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_id,self__._QMARK_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_data,self__._QMARK_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stats,self__.stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stats_DASH_str_,self__.stats_str_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_file,self__._QMARK_file],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_line,self__._QMARK_line],null))], null),self__.__extmap));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7399__auto__,G__25634){
var self__ = this;
var this__7399__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.stats,self__.stats_str_,self__._QMARK_file,self__._QMARK_line,G__25634,self__.__extmap,self__.__hash));
});

taoensso.tufte.HandlerVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7405__auto__,entry__7406__auto__){
var self__ = this;
var this__7405__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7406__auto__)){
return this__7405__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7405__auto____$1,entry__7406__auto__);
}
});

taoensso.tufte.HandlerVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ns_DASH_str,cljs.core.cst$sym$level,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$sym$_QMARK_data,cljs.core.cst$sym$stats,cljs.core.cst$sym$stats_DASH_str_,cljs.core.cst$sym$_QMARK_file,cljs.core.cst$sym$_QMARK_line], null);
});

taoensso.tufte.HandlerVal.cljs$lang$type = true;

taoensso.tufte.HandlerVal.cljs$lang$ctorPrSeq = (function (this__7436__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.tufte/HandlerVal");
});

taoensso.tufte.HandlerVal.cljs$lang$ctorPrWriter = (function (this__7436__auto__,writer__7437__auto__){
return cljs.core._write(writer__7437__auto__,"taoensso.tufte/HandlerVal");
});

taoensso.tufte.__GT_HandlerVal = (function taoensso$tufte$__GT_HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,stats,stats_str_,_QMARK_file,_QMARK_line){
return (new taoensso.tufte.HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,stats,stats_str_,_QMARK_file,_QMARK_line,null,null,null));
});

taoensso.tufte.map__GT_HandlerVal = (function taoensso$tufte$map__GT_HandlerVal(G__25638){
return (new taoensso.tufte.HandlerVal(cljs.core.cst$kw$ns_DASH_str.cljs$core$IFn$_invoke$arity$1(G__25638),cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(G__25638),cljs.core.cst$kw$_QMARK_id.cljs$core$IFn$_invoke$arity$1(G__25638),cljs.core.cst$kw$_QMARK_data.cljs$core$IFn$_invoke$arity$1(G__25638),cljs.core.cst$kw$stats.cljs$core$IFn$_invoke$arity$1(G__25638),cljs.core.cst$kw$stats_DASH_str_.cljs$core$IFn$_invoke$arity$1(G__25638),cljs.core.cst$kw$_QMARK_file.cljs$core$IFn$_invoke$arity$1(G__25638),cljs.core.cst$kw$_QMARK_line.cljs$core$IFn$_invoke$arity$1(G__25638),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25638,cljs.core.cst$kw$ns_DASH_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$level,cljs.core.cst$kw$_QMARK_id,cljs.core.cst$kw$_QMARK_data,cljs.core.cst$kw$stats,cljs.core.cst$kw$stats_DASH_str_,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$_QMARK_line], 0))),null));
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
var G__25662 = arguments.length;
switch (G__25662) {
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
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,null,handler_fn);
});

taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,ns_pattern,handler_fn){
var f = ((((ns_pattern == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,"*")))?handler_fn:(function (){var nsf_QMARK_ = (taoensso.tufte._compile_ns_filter.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte._compile_ns_filter.cljs$core$IFn$_invoke$arity$1(ns_pattern) : taoensso.tufte._compile_ns_filter.call(null,ns_pattern));
return ((function (nsf_QMARK_){
return (function (m){
if(cljs.core.truth_((function (){var G__25663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$ns_DASH_str);
return (nsf_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nsf_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25663) : nsf_QMARK_.call(null,G__25663));
})())){
return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(m) : handler_fn.call(null,m));
} else {
return null;
}
});
;})(nsf_QMARK_))
})());
return cljs.core.set(cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(taoensso.tufte.handlers_,cljs.core.assoc,handler_id,f)));
});

taoensso.tufte.add_handler_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.tufte.remove_handler_BANG_ = (function taoensso$tufte$remove_handler_BANG_(handler_id){
return cljs.core.set(cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(taoensso.tufte.handlers_,cljs.core.dissoc,handler_id)));
});
/**
 * Adds a simple handler that logs `profile` stats output with `println`.
 */
taoensso.tufte.add_basic_println_handler_BANG_ = (function taoensso$tufte$add_basic_println_handler_BANG_(p__25665){
var map__25666 = p__25665;
var map__25666__$1 = ((((!((map__25666 == null)))?((((map__25666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25666):map__25666);
var ns_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25666__$1,cljs.core.cst$kw$ns_DASH_pattern,"*");
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$basic_DASH_println,ns_pattern,((function (map__25666,map__25666__$1,ns_pattern){
return (function (m){
var map__25668 = m;
var map__25668__$1 = ((((!((map__25668 == null)))?((((map__25668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25668):map__25668);
var stats_str_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25668__$1,cljs.core.cst$kw$stats_DASH_str_);
var _QMARK_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25668__$1,cljs.core.cst$kw$_QMARK_id);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25668__$1,cljs.core.cst$kw$_QMARK_data);
var stats_str = cljs.core.force(stats_str_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(_QMARK_id)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\nid: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_id)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(_QMARK_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\ndata: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_data)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stats_str)].join('')], 0));
});})(map__25666,map__25666__$1,ns_pattern))
);
});
/**
 * Returns e/o #{nil :thread :dynamic}.
 */
taoensso.tufte.profiling_QMARK_ = (function taoensso$tufte$profiling_QMARK_(){
if(cljs.core.truth_(taoensso.tufte.impl._STAR_pdata__STAR_)){
return cljs.core.cst$kw$dynamic;
} else {
if(cljs.core.truth_((taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null)))){
return cljs.core.cst$kw$thread;
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
var G__25670_25671 = (new taoensso.tufte.impl.PData((taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null))));
(taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1(G__25670_25671) : taoensso.tufte.impl.pdata_proxy.call(null,G__25670_25671));

return null;
});
/**
 * Warning: this is a low-level primitive.
 */
taoensso.tufte.stop_profiling_thread_BANG_ = (function taoensso$tufte$stop_profiling_thread_BANG_(){
var temp__4657__auto__ = (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
if(cljs.core.truth_(temp__4657__auto__)){
var pdata = temp__4657__auto__;
var result = taoensso.tufte.impl.pdata__GT_Stats(pdata);
(taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1(null) : taoensso.tufte.impl.pdata_proxy.call(null,null));

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
return (taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1(ns_pattern) : taoensso.encore.compile_ns_filter.call(null,ns_pattern));
});
/**
 * Returns true with 0<`p`<1 probability.
 */
taoensso.tufte.chance = (function taoensso$tufte$chance(p){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < p);
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
var all_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m_id_stats1)),cljs.core.keys(m_id_stats2));
var m_id_stats3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s1__$1,s2__$1,clock1,clock2,s1_t0,s1_t1,s2_t0,s2_t1,clock_overlap_QMARK_,clock3,m_id_stats1,m_id_stats2,all_ids){
return (function (m,id){
var sid1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m_id_stats1,id);
var sid2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m_id_stats2,id);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,(new taoensso.tufte.impl.IdStats(s3_count,s3_time,(s3_time / s3_count),s3_mad_sum,(s3_mad_sum / s3_count),(((s1_min < s2_min))?s1_min:s2_min),(((s1_max > s2_max))?s1_max:s2_max),null,null,null)));
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,sid2);
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
return cljs.core.reduce_kv((function (acc,id,v){
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
var acc_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reduce_stats_ = (new cljs.core.Delay(((function (acc_){
return (function (){
var merge_stats = taoensso.encore.memoize_(taoensso.tufte.merge_stats);
return taoensso.encore.memoize_(((function (merge_stats,acc_){
return (function (acc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_stats,null,acc);
});})(merge_stats,acc_))
);
});})(acc_))
,null));
return ((function (acc_,reduce_stats_){
return (function() {
var taoensso$tufte$stats_accumulator_$_stats_accumulator = null;
var taoensso$tufte$stats_accumulator_$_stats_accumulator__0 = (function (){
var temp__4657__auto__ = cljs.core.deref(acc_);
if(cljs.core.truth_(temp__4657__auto__)){
var acc = temp__4657__auto__;
var fexpr__25679 = cljs.core.deref(reduce_stats_);
return (fexpr__25679.cljs$core$IFn$_invoke$arity$1 ? fexpr__25679.cljs$core$IFn$_invoke$arity$1(acc) : fexpr__25679.call(null,acc));
} else {
return null;
}
});
var taoensso$tufte$stats_accumulator_$_stats_accumulator__1 = (function (stats){
if(cljs.core.truth_(stats)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(acc_,cljs.core.conj,stats);
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
taoensso.tufte.accumulate_stats = (function taoensso$tufte$accumulate_stats(stats_accumulator,p__25680){
var vec__25681 = p__25680;
var profiled_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25681,(0),null);
var profiled__QMARK_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25681,(1),null);
if(cljs.core.truth_(profiled__QMARK_stats)){
(stats_accumulator.cljs$core$IFn$_invoke$arity$1 ? stats_accumulator.cljs$core$IFn$_invoke$arity$1(profiled__QMARK_stats) : stats_accumulator.call(null,profiled__QMARK_stats));
} else {
}

return profiled_result;
});
taoensso.tufte.perc = (function taoensso$tufte$perc(n,d){
var G__25684 = ((n / d) * 100.0);
return Math.round(G__25684);
});
taoensso.tufte.ft = (function taoensso$tufte$ft(nanosecs){
var ns = cljs.core.long$(nanosecs);
if((ns >= (1000000000))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.round2((ns / (1000000000)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('');
} else {
if((ns >= (1000000))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.round2((ns / (1000000)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ms")].join('');
} else {
if((ns >= (1000))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.round2((ns / (1000)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u03BCs")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ns")].join('');

}
}
}
});
taoensso.tufte.format_stats = (function taoensso$tufte$format_stats(var_args){
var G__25688 = arguments.length;
switch (G__25688) {
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
return taoensso.tufte.format_stats.cljs$core$IFn$_invoke$arity$2(stats,(function (id,id_stats){
return id_stats.time;
}));
});

taoensso.tufte.format_stats.cljs$core$IFn$_invoke$arity$2 = (function (stats,sort_fn){
if(cljs.core.truth_(stats)){
var stats__$1 = stats;
var clock = stats__$1.clock;
var m_id_stats = stats__$1.id_stats_map;
var clock_total = clock.total;
var accounted = taoensso.tufte.accounted_time(stats__$1);
var sorted_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(((function (stats__$1,clock,m_id_stats,clock_total,accounted){
return (function (id){
var G__25689 = id;
var G__25690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m_id_stats,id);
return (sort_fn.cljs$core$IFn$_invoke$arity$2 ? sort_fn.cljs$core$IFn$_invoke$arity$2(G__25689,G__25690) : sort_fn.call(null,G__25689,G__25690));
});})(stats__$1,clock,m_id_stats,clock_total,accounted))
,taoensso.encore.rcompare,cljs.core.keys(m_id_stats));
var max_id_width = cljs.core.reduce_kv(((function (stats__$1,clock,m_id_stats,clock_total,accounted,sorted_ids){
return (function (acc,k,v){
var c = cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
if((c > acc)){
return c;
} else {
return acc;
}
});})(stats__$1,clock,m_id_stats,clock_total,accounted,sorted_ids))
,14,m_id_stats);
var sb = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (stats__$1,clock,m_id_stats,clock_total,accounted,sorted_ids,max_id_width){
return (function (acc,id){
var id_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m_id_stats,id);
var time = id_stats.time;
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$n_DASH_calls,id_stats.count,cljs.core.cst$kw$min,taoensso.tufte.ft(id_stats.min),cljs.core.cst$kw$max,taoensso.tufte.ft(id_stats.max),cljs.core.cst$kw$mad,taoensso.tufte.ft(id_stats.mad),cljs.core.cst$kw$mean,taoensso.tufte.ft(id_stats.mean),cljs.core.cst$kw$time_PERCENT_,taoensso.tufte.perc(time,clock_total),cljs.core.cst$kw$time,taoensso.tufte.ft(time)], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''));
});})(stats__$1,clock,m_id_stats,clock_total,accounted,sorted_ids,max_id_width))
,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),sorted_ids);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Clock Time: (100%) "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.ft(clock_total)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''));

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Accounted Time: ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.perc(accounted,clock_total)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%) "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.ft(accounted)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
});

taoensso.tufte.format_stats.cljs$lang$maxFixedArity = 2;

taoensso.tufte.fn_sigs = (function taoensso$tufte$fn_sigs(def_QMARK_,fn_name,sigs){
var single_arity_QMARK_ = cljs.core.vector_QMARK_(cljs.core.first(sigs));
var sigs__$1 = ((single_arity_QMARK_)?(function (){var x__7617__auto__ = sigs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})():sigs);
var prepend = (cljs.core.truth_(def_QMARK_)?"defn_":"fn_");
var get_id = ((single_arity_QMARK_)?((function (single_arity_QMARK_,sigs__$1,prepend){
return (function (fn_name__$1,_params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prepend),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name__$1))].join(''));
});})(single_arity_QMARK_,sigs__$1,prepend))
:((function (single_arity_QMARK_,sigs__$1,prepend){
return (function (fn_name__$1,params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prepend),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params))].join(''));
});})(single_arity_QMARK_,sigs__$1,prepend))
);
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (single_arity_QMARK_,sigs__$1,prepend,get_id){
return (function (p__25692){
var vec__25693 = p__25692;
var seq__25694 = cljs.core.seq(vec__25693);
var first__25695 = cljs.core.first(seq__25694);
var seq__25694__$1 = cljs.core.next(seq__25694);
var params = first__25695;
var others = seq__25694__$1;
var has_prepost_map_QMARK_ = (cljs.core.map_QMARK_(cljs.core.first(others))) && (cljs.core.next(others));
var vec__25696 = ((has_prepost_map_QMARK_)?others:cljs.core.cons(null,others));
var seq__25697 = cljs.core.seq(vec__25696);
var first__25698 = cljs.core.first(seq__25697);
var seq__25697__$1 = cljs.core.next(seq__25697);
var _QMARK_prepost_map = first__25698;
var body = seq__25697__$1;
if(cljs.core.truth_(_QMARK_prepost_map)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7617__auto__ = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = _QMARK_prepost_map;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$tufte_SLASH_p),(function (){var x__7617__auto__ = (get_id.cljs$core$IFn$_invoke$arity$2 ? get_id.cljs$core$IFn$_invoke$arity$2(fn_name,params) : get_id.call(null,fn_name,params));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7617__auto__ = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$tufte_SLASH_p),(function (){var x__7617__auto__ = (get_id.cljs$core$IFn$_invoke$arity$2 ? get_id.cljs$core$IFn$_invoke$arity$2(fn_name,params) : get_id.call(null,fn_name,params));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
}
});})(single_arity_QMARK_,sigs__$1,prepend,get_id))
,sigs__$1);
return new_sigs;
});
var ret__7939__auto___25705 = (function (){
/**
 * Like `fn` but wraps fn bodies with `p` macro.
 */
taoensso.tufte.fnp = (function taoensso$tufte$fnp(var_args){
var args__7906__auto__ = [];
var len__7899__auto___25706 = arguments.length;
var i__7900__auto___25707 = (0);
while(true){
if((i__7900__auto___25707 < len__7899__auto___25706)){
args__7906__auto__.push((arguments[i__7900__auto___25707]));

var G__25708 = (i__7900__auto___25707 + (1));
i__7900__auto___25707 = G__25708;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return taoensso.tufte.fnp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

taoensso.tufte.fnp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var vec__25702 = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(sigs),cljs.core.next(sigs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sigs], null));
var _QMARK_fn_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25702,(0),null);
var sigs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25702,(1),null);
var new_sigs = taoensso.tufte.fn_sigs(cljs.core.not(cljs.core.cst$kw$def),(function (){var or__6774__auto__ = _QMARK_fn_name;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("");
}
})(),sigs__$1);
if(cljs.core.truth_(_QMARK_fn_name)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7617__auto__ = _QMARK_fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_sigs], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),new_sigs)));
}
});

taoensso.tufte.fnp.cljs$lang$maxFixedArity = (2);

taoensso.tufte.fnp.cljs$lang$applyTo = (function (seq25699){
var G__25700 = cljs.core.first(seq25699);
var seq25699__$1 = cljs.core.next(seq25699);
var G__25701 = cljs.core.first(seq25699__$1);
var seq25699__$2 = cljs.core.next(seq25699__$1);
return taoensso.tufte.fnp.cljs$core$IFn$_invoke$arity$variadic(G__25700,G__25701,seq25699__$2);
});

return null;
})()
;
taoensso.tufte.fnp.cljs$lang$macro = true;

var ret__7939__auto___25715 = (function (){
/**
 * Like `defn` but wraps fn bodies with `p` macro.
 */
taoensso.tufte.defnp = (function taoensso$tufte$defnp(var_args){
var args__7906__auto__ = [];
var len__7899__auto___25716 = arguments.length;
var i__7900__auto___25717 = (0);
while(true){
if((i__7900__auto___25717 < len__7899__auto___25716)){
args__7906__auto__.push((arguments[i__7900__auto___25717]));

var G__25718 = (i__7900__auto___25717 + (1));
i__7900__auto___25717 = G__25718;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return taoensso.tufte.defnp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

taoensso.tufte.defnp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var vec__25712 = taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.next(sigs));
var fn_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25712,(0),null);
var sigs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25712,(1),null);
var new_sigs = taoensso.tufte.fn_sigs(cljs.core.cst$kw$def,fn_name,sigs__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defn),(function (){var x__7617__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_sigs], 0))));
});

taoensso.tufte.defnp.cljs$lang$maxFixedArity = (2);

taoensso.tufte.defnp.cljs$lang$applyTo = (function (seq25709){
var G__25710 = cljs.core.first(seq25709);
var seq25709__$1 = cljs.core.next(seq25709);
var G__25711 = cljs.core.first(seq25709__$1);
var seq25709__$2 = cljs.core.next(seq25709__$1);
return taoensso.tufte.defnp.cljs$core$IFn$_invoke$arity$variadic(G__25710,G__25711,seq25709__$2);
});

return null;
})()
;
taoensso.tufte.defnp.cljs$lang$macro = true;

