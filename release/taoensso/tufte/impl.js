// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.tufte.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');

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
taoensso.tufte.impl.PData = (function (__t0,__meta,__extmap,__hash){
this.__t0 = __t0;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.tufte.impl.PData.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7400__auto__,k__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
return this__7400__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7401__auto__,null);
});

taoensso.tufte.impl.PData.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7402__auto__,k25320,else__7403__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
var G__25324 = k25320;
var G__25324__$1 = (((G__25324 instanceof cljs.core.Keyword))?G__25324.fqn:null);
switch (G__25324__$1) {
case "__t0":
return self__.__t0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25320,else__7403__auto__);

}
});

taoensso.tufte.impl.PData.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7414__auto__,writer__7415__auto__,opts__7416__auto__){
var self__ = this;
var this__7414__auto____$1 = this;
var pr_pair__7417__auto__ = ((function (this__7414__auto____$1){
return (function (keyval__7418__auto__){
return cljs.core.pr_sequential_writer(writer__7415__auto__,cljs.core.pr_writer,""," ","",opts__7416__auto__,keyval__7418__auto__);
});})(this__7414__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7415__auto__,pr_pair__7417__auto__,"#taoensso.tufte.impl.PData{",", ","}",opts__7416__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$__t0,self__.__t0],null))], null),self__.__extmap));
});

taoensso.tufte.impl.PData.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25319){
var self__ = this;
var G__25319__$1 = this;
return (new cljs.core.RecordIter((0),G__25319__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$__t0], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.tufte.impl.PData.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7398__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return self__.__meta;
});

taoensso.tufte.impl.PData.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7395__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return (new taoensso.tufte.impl.PData(self__.__t0,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.PData.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7404__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

taoensso.tufte.impl.PData.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
var h__7214__auto__ = self__.__hash;
if(!((h__7214__auto__ == null))){
return h__7214__auto__;
} else {
var h__7214__auto____$1 = (function (){var fexpr__25325 = ((function (h__7214__auto__,this__7396__auto____$1){
return (function (coll__7397__auto__){
return (1205321799 ^ cljs.core.hash_unordered_coll(coll__7397__auto__));
});})(h__7214__auto__,this__7396__auto____$1))
;
return fexpr__25325(this__7396__auto____$1);
})();
self__.__hash = h__7214__auto____$1;

return h__7214__auto____$1;
}
});

taoensso.tufte.impl.PData.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25321,other25322){
var self__ = this;
var this25321__$1 = this;
return (!((other25322 == null))) && ((this25321__$1.constructor === other25322.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25321__$1.__t0,other25322.__t0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25321__$1.__extmap,other25322.__extmap));
});

taoensso.tufte.impl.PData.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7409__auto__,k__7410__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__t0,null], null), null),k__7410__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7409__auto____$1),self__.__meta),k__7410__auto__);
} else {
return (new taoensso.tufte.impl.PData(self__.__t0,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7410__auto__)),null));
}
});

taoensso.tufte.impl.PData.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7407__auto__,k__7408__auto__,G__25319){
var self__ = this;
var this__7407__auto____$1 = this;
var pred__25326 = cljs.core.keyword_identical_QMARK_;
var expr__25327 = k__7408__auto__;
if(cljs.core.truth_((function (){var G__25329 = cljs.core.cst$kw$__t0;
var G__25330 = expr__25327;
return (pred__25326.cljs$core$IFn$_invoke$arity$2 ? pred__25326.cljs$core$IFn$_invoke$arity$2(G__25329,G__25330) : pred__25326.call(null,G__25329,G__25330));
})())){
return (new taoensso.tufte.impl.PData(G__25319,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.impl.PData(self__.__t0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7408__auto__,G__25319),null));
}
});

taoensso.tufte.impl.PData.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7412__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$__t0,self__.__t0],null))], null),self__.__extmap));
});

taoensso.tufte.impl.PData.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7399__auto__,G__25319){
var self__ = this;
var this__7399__auto____$1 = this;
return (new taoensso.tufte.impl.PData(self__.__t0,G__25319,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.PData.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7405__auto__,entry__7406__auto__){
var self__ = this;
var this__7405__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7406__auto__)){
return this__7405__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7405__auto____$1,entry__7406__auto__);
}
});

taoensso.tufte.impl.PData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$__t0,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.tufte.impl.PData.cljs$lang$type = true;

taoensso.tufte.impl.PData.cljs$lang$ctorPrSeq = (function (this__7436__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.tufte.impl/PData");
});

taoensso.tufte.impl.PData.cljs$lang$ctorPrWriter = (function (this__7436__auto__,writer__7437__auto__){
return cljs.core._write(writer__7437__auto__,"taoensso.tufte.impl/PData");
});

taoensso.tufte.impl.__GT_PData = (function taoensso$tufte$impl$__GT_PData(__t0){
return (new taoensso.tufte.impl.PData(__t0,null,null,null));
});

taoensso.tufte.impl.map__GT_PData = (function taoensso$tufte$impl$map__GT_PData(G__25323){
return (new taoensso.tufte.impl.PData(cljs.core.cst$kw$__t0.cljs$core$IFn$_invoke$arity$1(G__25323),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25323,cljs.core.cst$kw$__t0)),null));
});

/**
 * Non-nil iff dynamic profiling active.
 */
taoensso.tufte.impl._STAR_pdata__STAR_ = null;
/**
 * Non-nil iff thread-local profiling active.
 */
taoensso.tufte.impl.pdata_proxy = (function (){var state_ = cljs.core.volatile_BANG_(false);
return ((function (state_){
return (function() {
var G__25332 = null;
var G__25332__0 = (function (){
return cljs.core.deref(state_);
});
var G__25332__1 = (function (new_val){
return cljs.core.vreset_BANG_(state_,new_val);
});
G__25332 = function(new_val){
switch(arguments.length){
case 0:
return G__25332__0.call(this);
case 1:
return G__25332__1.call(this,new_val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25332.cljs$core$IFn$_invoke$arity$0 = G__25332__0;
G__25332.cljs$core$IFn$_invoke$arity$1 = G__25332__1;
return G__25332;
})()
;})(state_))
})();
var ret__7939__auto___25333 = taoensso.tufte.impl.new_pdata_thread = (function taoensso$tufte$impl$new_pdata_thread(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$PData$),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_nano_STAR_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
});
taoensso.tufte.impl.new_pdata_thread.cljs$lang$macro = true;

var ret__7939__auto___25334 = taoensso.tufte.impl.new_pdata_dynamic = (function taoensso$tufte$impl$new_pdata_dynamic(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$PData$),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$encore_SLASH_now_DASH_nano_STAR_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
});
taoensso.tufte.impl.new_pdata_dynamic.cljs$lang$macro = true;


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
taoensso.tufte.impl.Clock = (function (t0,t1,total,__meta,__extmap,__hash){
this.t0 = t0;
this.t1 = t1;
this.total = total;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.tufte.impl.Clock.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7400__auto__,k__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
return this__7400__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7401__auto__,null);
});

taoensso.tufte.impl.Clock.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7402__auto__,k25336,else__7403__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
var G__25340 = k25336;
var G__25340__$1 = (((G__25340 instanceof cljs.core.Keyword))?G__25340.fqn:null);
switch (G__25340__$1) {
case "t0":
return self__.t0;

break;
case "t1":
return self__.t1;

break;
case "total":
return self__.total;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25336,else__7403__auto__);

}
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7414__auto__,writer__7415__auto__,opts__7416__auto__){
var self__ = this;
var this__7414__auto____$1 = this;
var pr_pair__7417__auto__ = ((function (this__7414__auto____$1){
return (function (keyval__7418__auto__){
return cljs.core.pr_sequential_writer(writer__7415__auto__,cljs.core.pr_writer,""," ","",opts__7416__auto__,keyval__7418__auto__);
});})(this__7414__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7415__auto__,pr_pair__7417__auto__,"#taoensso.tufte.impl.Clock{",", ","}",opts__7416__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$t0,self__.t0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$t1,self__.t1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$total,self__.total],null))], null),self__.__extmap));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25335){
var self__ = this;
var G__25335__$1 = this;
return (new cljs.core.RecordIter((0),G__25335__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$t0,cljs.core.cst$kw$t1,cljs.core.cst$kw$total], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7398__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return self__.__meta;
});

taoensso.tufte.impl.Clock.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7395__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return (new taoensso.tufte.impl.Clock(self__.t0,self__.t1,self__.total,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7404__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
var h__7214__auto__ = self__.__hash;
if(!((h__7214__auto__ == null))){
return h__7214__auto__;
} else {
var h__7214__auto____$1 = (function (){var fexpr__25341 = ((function (h__7214__auto__,this__7396__auto____$1){
return (function (coll__7397__auto__){
return (1323235705 ^ cljs.core.hash_unordered_coll(coll__7397__auto__));
});})(h__7214__auto__,this__7396__auto____$1))
;
return fexpr__25341(this__7396__auto____$1);
})();
self__.__hash = h__7214__auto____$1;

return h__7214__auto____$1;
}
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25337,other25338){
var self__ = this;
var this25337__$1 = this;
return (!((other25338 == null))) && ((this25337__$1.constructor === other25338.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25337__$1.t0,other25338.t0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25337__$1.t1,other25338.t1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25337__$1.total,other25338.total)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25337__$1.__extmap,other25338.__extmap));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7409__auto__,k__7410__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$t0,null,cljs.core.cst$kw$total,null,cljs.core.cst$kw$t1,null], null), null),k__7410__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7409__auto____$1),self__.__meta),k__7410__auto__);
} else {
return (new taoensso.tufte.impl.Clock(self__.t0,self__.t1,self__.total,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7410__auto__)),null));
}
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7407__auto__,k__7408__auto__,G__25335){
var self__ = this;
var this__7407__auto____$1 = this;
var pred__25342 = cljs.core.keyword_identical_QMARK_;
var expr__25343 = k__7408__auto__;
if(cljs.core.truth_((function (){var G__25345 = cljs.core.cst$kw$t0;
var G__25346 = expr__25343;
return (pred__25342.cljs$core$IFn$_invoke$arity$2 ? pred__25342.cljs$core$IFn$_invoke$arity$2(G__25345,G__25346) : pred__25342.call(null,G__25345,G__25346));
})())){
return (new taoensso.tufte.impl.Clock(G__25335,self__.t1,self__.total,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25347 = cljs.core.cst$kw$t1;
var G__25348 = expr__25343;
return (pred__25342.cljs$core$IFn$_invoke$arity$2 ? pred__25342.cljs$core$IFn$_invoke$arity$2(G__25347,G__25348) : pred__25342.call(null,G__25347,G__25348));
})())){
return (new taoensso.tufte.impl.Clock(self__.t0,G__25335,self__.total,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25349 = cljs.core.cst$kw$total;
var G__25350 = expr__25343;
return (pred__25342.cljs$core$IFn$_invoke$arity$2 ? pred__25342.cljs$core$IFn$_invoke$arity$2(G__25349,G__25350) : pred__25342.call(null,G__25349,G__25350));
})())){
return (new taoensso.tufte.impl.Clock(self__.t0,self__.t1,G__25335,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.impl.Clock(self__.t0,self__.t1,self__.total,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7408__auto__,G__25335),null));
}
}
}
});

taoensso.tufte.impl.Clock.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7412__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$t0,self__.t0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$t1,self__.t1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$total,self__.total],null))], null),self__.__extmap));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7399__auto__,G__25335){
var self__ = this;
var this__7399__auto____$1 = this;
return (new taoensso.tufte.impl.Clock(self__.t0,self__.t1,self__.total,G__25335,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7405__auto__,entry__7406__auto__){
var self__ = this;
var this__7405__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7406__auto__)){
return this__7405__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7405__auto____$1,entry__7406__auto__);
}
});

taoensso.tufte.impl.Clock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$t0,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$t1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$total,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.tufte.impl.Clock.cljs$lang$type = true;

taoensso.tufte.impl.Clock.cljs$lang$ctorPrSeq = (function (this__7436__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.tufte.impl/Clock");
});

taoensso.tufte.impl.Clock.cljs$lang$ctorPrWriter = (function (this__7436__auto__,writer__7437__auto__){
return cljs.core._write(writer__7437__auto__,"taoensso.tufte.impl/Clock");
});

taoensso.tufte.impl.__GT_Clock = (function taoensso$tufte$impl$__GT_Clock(t0,t1,total){
return (new taoensso.tufte.impl.Clock(t0,t1,total,null,null,null));
});

taoensso.tufte.impl.map__GT_Clock = (function taoensso$tufte$impl$map__GT_Clock(G__25339){
return (new taoensso.tufte.impl.Clock(cljs.core.cst$kw$t0.cljs$core$IFn$_invoke$arity$1(G__25339),cljs.core.cst$kw$t1.cljs$core$IFn$_invoke$arity$1(G__25339),cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(G__25339),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25339,cljs.core.cst$kw$t0,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$t1,cljs.core.cst$kw$total], 0))),null));
});


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
taoensso.tufte.impl.IdStats = (function (count,time,mean,mad_sum,mad,min,max,__meta,__extmap,__hash){
this.count = count;
this.time = time;
this.mean = mean;
this.mad_sum = mad_sum;
this.mad = mad;
this.min = min;
this.max = max;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.tufte.impl.IdStats.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7400__auto__,k__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
return this__7400__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7401__auto__,null);
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7402__auto__,k25353,else__7403__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
var G__25357 = k25353;
var G__25357__$1 = (((G__25357 instanceof cljs.core.Keyword))?G__25357.fqn:null);
switch (G__25357__$1) {
case "count":
return self__.count;

break;
case "time":
return self__.time;

break;
case "mean":
return self__.mean;

break;
case "mad-sum":
return self__.mad_sum;

break;
case "mad":
return self__.mad;

break;
case "min":
return self__.min;

break;
case "max":
return self__.max;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25353,else__7403__auto__);

}
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7414__auto__,writer__7415__auto__,opts__7416__auto__){
var self__ = this;
var this__7414__auto____$1 = this;
var pr_pair__7417__auto__ = ((function (this__7414__auto____$1){
return (function (keyval__7418__auto__){
return cljs.core.pr_sequential_writer(writer__7415__auto__,cljs.core.pr_writer,""," ","",opts__7416__auto__,keyval__7418__auto__);
});})(this__7414__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7415__auto__,pr_pair__7417__auto__,"#taoensso.tufte.impl.IdStats{",", ","}",opts__7416__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$count,self__.count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$time,self__.time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mean,self__.mean],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mad_DASH_sum,self__.mad_sum],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mad,self__.mad],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$min,self__.min],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max,self__.max],null))], null),self__.__extmap));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25352){
var self__ = this;
var G__25352__$1 = this;
return (new cljs.core.RecordIter((0),G__25352__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$count,cljs.core.cst$kw$time,cljs.core.cst$kw$mean,cljs.core.cst$kw$mad_DASH_sum,cljs.core.cst$kw$mad,cljs.core.cst$kw$min,cljs.core.cst$kw$max], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7398__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return self__.__meta;
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7395__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7404__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
var h__7214__auto__ = self__.__hash;
if(!((h__7214__auto__ == null))){
return h__7214__auto__;
} else {
var h__7214__auto____$1 = (function (){var fexpr__25358 = ((function (h__7214__auto__,this__7396__auto____$1){
return (function (coll__7397__auto__){
return (1194684684 ^ cljs.core.hash_unordered_coll(coll__7397__auto__));
});})(h__7214__auto__,this__7396__auto____$1))
;
return fexpr__25358(this__7396__auto____$1);
})();
self__.__hash = h__7214__auto____$1;

return h__7214__auto____$1;
}
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25354,other25355){
var self__ = this;
var this25354__$1 = this;
return (!((other25355 == null))) && ((this25354__$1.constructor === other25355.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25354__$1.count,other25355.count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25354__$1.time,other25355.time)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25354__$1.mean,other25355.mean)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25354__$1.mad_sum,other25355.mad_sum)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25354__$1.mad,other25355.mad)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25354__$1.min,other25355.min)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25354__$1.max,other25355.max)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25354__$1.__extmap,other25355.__extmap));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7409__auto__,k__7410__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$min,null,cljs.core.cst$kw$mean,null,cljs.core.cst$kw$mad_DASH_sum,null,cljs.core.cst$kw$time,null,cljs.core.cst$kw$max,null,cljs.core.cst$kw$count,null,cljs.core.cst$kw$mad,null], null), null),k__7410__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7409__auto____$1),self__.__meta),k__7410__auto__);
} else {
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7410__auto__)),null));
}
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7407__auto__,k__7408__auto__,G__25352){
var self__ = this;
var this__7407__auto____$1 = this;
var pred__25359 = cljs.core.keyword_identical_QMARK_;
var expr__25360 = k__7408__auto__;
if(cljs.core.truth_((function (){var G__25362 = cljs.core.cst$kw$count;
var G__25363 = expr__25360;
return (pred__25359.cljs$core$IFn$_invoke$arity$2 ? pred__25359.cljs$core$IFn$_invoke$arity$2(G__25362,G__25363) : pred__25359.call(null,G__25362,G__25363));
})())){
return (new taoensso.tufte.impl.IdStats(G__25352,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25364 = cljs.core.cst$kw$time;
var G__25365 = expr__25360;
return (pred__25359.cljs$core$IFn$_invoke$arity$2 ? pred__25359.cljs$core$IFn$_invoke$arity$2(G__25364,G__25365) : pred__25359.call(null,G__25364,G__25365));
})())){
return (new taoensso.tufte.impl.IdStats(self__.count,G__25352,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25366 = cljs.core.cst$kw$mean;
var G__25367 = expr__25360;
return (pred__25359.cljs$core$IFn$_invoke$arity$2 ? pred__25359.cljs$core$IFn$_invoke$arity$2(G__25366,G__25367) : pred__25359.call(null,G__25366,G__25367));
})())){
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,G__25352,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25368 = cljs.core.cst$kw$mad_DASH_sum;
var G__25369 = expr__25360;
return (pred__25359.cljs$core$IFn$_invoke$arity$2 ? pred__25359.cljs$core$IFn$_invoke$arity$2(G__25368,G__25369) : pred__25359.call(null,G__25368,G__25369));
})())){
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,G__25352,self__.mad,self__.min,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25370 = cljs.core.cst$kw$mad;
var G__25371 = expr__25360;
return (pred__25359.cljs$core$IFn$_invoke$arity$2 ? pred__25359.cljs$core$IFn$_invoke$arity$2(G__25370,G__25371) : pred__25359.call(null,G__25370,G__25371));
})())){
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,G__25352,self__.min,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25372 = cljs.core.cst$kw$min;
var G__25373 = expr__25360;
return (pred__25359.cljs$core$IFn$_invoke$arity$2 ? pred__25359.cljs$core$IFn$_invoke$arity$2(G__25372,G__25373) : pred__25359.call(null,G__25372,G__25373));
})())){
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,G__25352,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25374 = cljs.core.cst$kw$max;
var G__25375 = expr__25360;
return (pred__25359.cljs$core$IFn$_invoke$arity$2 ? pred__25359.cljs$core$IFn$_invoke$arity$2(G__25374,G__25375) : pred__25359.call(null,G__25374,G__25375));
})())){
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,G__25352,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7408__auto__,G__25352),null));
}
}
}
}
}
}
}
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7412__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$count,self__.count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$time,self__.time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mean,self__.mean],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mad_DASH_sum,self__.mad_sum],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mad,self__.mad],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$min,self__.min],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max,self__.max],null))], null),self__.__extmap));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7399__auto__,G__25352){
var self__ = this;
var this__7399__auto____$1 = this;
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,G__25352,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7405__auto__,entry__7406__auto__){
var self__ = this;
var this__7405__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7406__auto__)){
return this__7405__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7405__auto____$1,entry__7406__auto__);
}
});

taoensso.tufte.impl.IdStats.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$count,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$time,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$mean,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$mad_DASH_sum,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$mad,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$min,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$max,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.tufte.impl.IdStats.cljs$lang$type = true;

taoensso.tufte.impl.IdStats.cljs$lang$ctorPrSeq = (function (this__7436__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.tufte.impl/IdStats");
});

taoensso.tufte.impl.IdStats.cljs$lang$ctorPrWriter = (function (this__7436__auto__,writer__7437__auto__){
return cljs.core._write(writer__7437__auto__,"taoensso.tufte.impl/IdStats");
});

taoensso.tufte.impl.__GT_IdStats = (function taoensso$tufte$impl$__GT_IdStats(count,time,mean,mad_sum,mad,min,max){
return (new taoensso.tufte.impl.IdStats(count,time,mean,mad_sum,mad,min,max,null,null,null));
});

taoensso.tufte.impl.map__GT_IdStats = (function taoensso$tufte$impl$map__GT_IdStats(G__25356){
return (new taoensso.tufte.impl.IdStats(cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(G__25356),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(G__25356),cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(G__25356),cljs.core.cst$kw$mad_DASH_sum.cljs$core$IFn$_invoke$arity$1(G__25356),cljs.core.cst$kw$mad.cljs$core$IFn$_invoke$arity$1(G__25356),cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(G__25356),cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(G__25356),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25356,cljs.core.cst$kw$count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$time,cljs.core.cst$kw$mean,cljs.core.cst$kw$mad_DASH_sum,cljs.core.cst$kw$mad,cljs.core.cst$kw$min,cljs.core.cst$kw$max], 0))),null));
});


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
taoensso.tufte.impl.Stats = (function (clock,id_stats_map,__meta,__extmap,__hash){
this.clock = clock;
this.id_stats_map = id_stats_map;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.tufte.impl.Stats.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7400__auto__,k__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
return this__7400__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7401__auto__,null);
});

taoensso.tufte.impl.Stats.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7402__auto__,k25378,else__7403__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
var G__25382 = k25378;
var G__25382__$1 = (((G__25382 instanceof cljs.core.Keyword))?G__25382.fqn:null);
switch (G__25382__$1) {
case "clock":
return self__.clock;

break;
case "id-stats-map":
return self__.id_stats_map;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25378,else__7403__auto__);

}
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7414__auto__,writer__7415__auto__,opts__7416__auto__){
var self__ = this;
var this__7414__auto____$1 = this;
var pr_pair__7417__auto__ = ((function (this__7414__auto____$1){
return (function (keyval__7418__auto__){
return cljs.core.pr_sequential_writer(writer__7415__auto__,cljs.core.pr_writer,""," ","",opts__7416__auto__,keyval__7418__auto__);
});})(this__7414__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7415__auto__,pr_pair__7417__auto__,"#taoensso.tufte.impl.Stats{",", ","}",opts__7416__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clock,self__.clock],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id_DASH_stats_DASH_map,self__.id_stats_map],null))], null),self__.__extmap));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25377){
var self__ = this;
var G__25377__$1 = this;
return (new cljs.core.RecordIter((0),G__25377__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clock,cljs.core.cst$kw$id_DASH_stats_DASH_map], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7398__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return self__.__meta;
});

taoensso.tufte.impl.Stats.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7395__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return (new taoensso.tufte.impl.Stats(self__.clock,self__.id_stats_map,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7404__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
var h__7214__auto__ = self__.__hash;
if(!((h__7214__auto__ == null))){
return h__7214__auto__;
} else {
var h__7214__auto____$1 = (function (){var fexpr__25383 = ((function (h__7214__auto__,this__7396__auto____$1){
return (function (coll__7397__auto__){
return (-1109701291 ^ cljs.core.hash_unordered_coll(coll__7397__auto__));
});})(h__7214__auto__,this__7396__auto____$1))
;
return fexpr__25383(this__7396__auto____$1);
})();
self__.__hash = h__7214__auto____$1;

return h__7214__auto____$1;
}
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25379,other25380){
var self__ = this;
var this25379__$1 = this;
return (!((other25380 == null))) && ((this25379__$1.constructor === other25380.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25379__$1.clock,other25380.clock)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25379__$1.id_stats_map,other25380.id_stats_map)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25379__$1.__extmap,other25380.__extmap));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7409__auto__,k__7410__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id_DASH_stats_DASH_map,null,cljs.core.cst$kw$clock,null], null), null),k__7410__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7409__auto____$1),self__.__meta),k__7410__auto__);
} else {
return (new taoensso.tufte.impl.Stats(self__.clock,self__.id_stats_map,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7410__auto__)),null));
}
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7407__auto__,k__7408__auto__,G__25377){
var self__ = this;
var this__7407__auto____$1 = this;
var pred__25384 = cljs.core.keyword_identical_QMARK_;
var expr__25385 = k__7408__auto__;
if(cljs.core.truth_((function (){var G__25387 = cljs.core.cst$kw$clock;
var G__25388 = expr__25385;
return (pred__25384.cljs$core$IFn$_invoke$arity$2 ? pred__25384.cljs$core$IFn$_invoke$arity$2(G__25387,G__25388) : pred__25384.call(null,G__25387,G__25388));
})())){
return (new taoensso.tufte.impl.Stats(G__25377,self__.id_stats_map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25389 = cljs.core.cst$kw$id_DASH_stats_DASH_map;
var G__25390 = expr__25385;
return (pred__25384.cljs$core$IFn$_invoke$arity$2 ? pred__25384.cljs$core$IFn$_invoke$arity$2(G__25389,G__25390) : pred__25384.call(null,G__25389,G__25390));
})())){
return (new taoensso.tufte.impl.Stats(self__.clock,G__25377,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.impl.Stats(self__.clock,self__.id_stats_map,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7408__auto__,G__25377),null));
}
}
});

taoensso.tufte.impl.Stats.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7412__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clock,self__.clock],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id_DASH_stats_DASH_map,self__.id_stats_map],null))], null),self__.__extmap));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7399__auto__,G__25377){
var self__ = this;
var this__7399__auto____$1 = this;
return (new taoensso.tufte.impl.Stats(self__.clock,self__.id_stats_map,G__25377,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7405__auto__,entry__7406__auto__){
var self__ = this;
var this__7405__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7406__auto__)){
return this__7405__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7405__auto____$1,entry__7406__auto__);
}
});

taoensso.tufte.impl.Stats.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$clock,cljs.core.cst$sym$id_DASH_stats_DASH_map], null);
});

taoensso.tufte.impl.Stats.cljs$lang$type = true;

taoensso.tufte.impl.Stats.cljs$lang$ctorPrSeq = (function (this__7436__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.tufte.impl/Stats");
});

taoensso.tufte.impl.Stats.cljs$lang$ctorPrWriter = (function (this__7436__auto__,writer__7437__auto__){
return cljs.core._write(writer__7437__auto__,"taoensso.tufte.impl/Stats");
});

taoensso.tufte.impl.__GT_Stats = (function taoensso$tufte$impl$__GT_Stats(clock,id_stats_map){
return (new taoensso.tufte.impl.Stats(clock,id_stats_map,null,null,null));
});

taoensso.tufte.impl.map__GT_Stats = (function taoensso$tufte$impl$map__GT_Stats(G__25381){
return (new taoensso.tufte.impl.Stats(cljs.core.cst$kw$clock.cljs$core$IFn$_invoke$arity$1(G__25381),cljs.core.cst$kw$id_DASH_stats_DASH_map.cljs$core$IFn$_invoke$arity$1(G__25381),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25381,cljs.core.cst$kw$clock,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id_DASH_stats_DASH_map], 0))),null));
});

var ret__7939__auto___25392 = taoensso.tufte.impl.mutable_times = (function taoensso$tufte$impl$mutable_times(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$LinkedList$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});
taoensso.tufte.impl.mutable_times.cljs$lang$macro = true;

var ret__7939__auto___25393 = taoensso.tufte.impl.mt_add = (function taoensso$tufte$impl$mt_add(_AMPERSAND_form,_AMPERSAND_env,x,t){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$push),(function (){var x__7617__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$add),(function (){var x__7617__auto__ = cljs.core.with_meta(x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$LinkedList], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});
taoensso.tufte.impl.mt_add.cljs$lang$macro = true;

var ret__7939__auto___25394 = taoensso.tufte.impl.mt_count = (function taoensso$tufte$impl$mt_count(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_alength),(function (){var x__7617__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$size),(function (){var x__7617__auto__ = cljs.core.with_meta(x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$LinkedList], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});
taoensso.tufte.impl.mt_count.cljs$lang$macro = true;

/**
 * >n will trigger compaction
 */
taoensso.tufte.impl.nmax_times = cljs.core.long$(2000000.0);
var ret__7939__auto___25395 = taoensso.tufte.impl.atom_QMARK_ = (function taoensso$tufte$impl$atom_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$encore_SLASH_if_DASH_cljs),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$Atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$lang$Atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});
taoensso.tufte.impl.atom_QMARK_.cljs$lang$macro = true;

taoensso.tufte.impl.capture_time_BANG_ = (function taoensso$tufte$impl$capture_time_BANG_(pdata_or_pdata_,id,t_elapsed){
if((pdata_or_pdata_ instanceof cljs.core.Atom)){
var pdata__25398 = pdata_or_pdata_;
var _QMARK_pulled_times_25399 = (function (){while(true){
var pdata = cljs.core.deref(pdata__25398);
var times = cljs.core.get.cljs$core$IFn$_invoke$arity$3(pdata,id,cljs.core.List.EMPTY);
if((cljs.core.count(times) >= taoensso.tufte.impl.nmax_times)){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(pdata__25398,pdata,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pdata,id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,t_elapsed))))){
return times;
} else {
continue;
}
} else {
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(pdata__25398,pdata,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pdata,id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(times,t_elapsed))))){
return null;
} else {
continue;
}
}
break;
}
})();
var temp__4657__auto___25400 = _QMARK_pulled_times_25399;
if(cljs.core.truth_(temp__4657__auto___25400)){
var times_25401 = temp__4657__auto___25400;
var id_stats_25402 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pdata__25398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$__m_DASH_id_DASH_stats,id], null));
var id_stats_25403__$1 = (taoensso.tufte.impl.times__GT_IdStats.cljs$core$IFn$_invoke$arity$2 ? taoensso.tufte.impl.times__GT_IdStats.cljs$core$IFn$_invoke$arity$2(times_25401,id_stats_25402) : taoensso.tufte.impl.times__GT_IdStats.call(null,times_25401,id_stats_25402));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pdata__25398,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$__m_DASH_id_DASH_stats,id], null),id_stats_25403__$1);
} else {
}
} else {
var pdata_25404 = pdata_or_pdata_;
var pdata_25405__$1 = (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
var temp__4655__auto___25406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pdata_25405__$1,id);
if(cljs.core.truth_(temp__4655__auto___25406)){
var times_25407 = temp__4655__auto___25406;
if((cljs.core.long$(times_25407.length) >= taoensso.tufte.impl.nmax_times)){
var m_id_stats_25408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pdata_25405__$1,cljs.core.cst$kw$__m_DASH_id_DASH_stats);
var id_stats_25409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m_id_stats_25408,id);
var id_stats_25410__$1 = (taoensso.tufte.impl.times__GT_IdStats.cljs$core$IFn$_invoke$arity$2 ? taoensso.tufte.impl.times__GT_IdStats.cljs$core$IFn$_invoke$arity$2(times_25407,id_stats_25409) : taoensso.tufte.impl.times__GT_IdStats.call(null,times_25407,id_stats_25409));
var m_id_stats_25411__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m_id_stats_25408,id,id_stats_25410__$1);
var times_25412__$1 = [];
times_25412__$1.push(t_elapsed);

var G__25396_25413 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pdata_25405__$1,id,times_25412__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$__m_DASH_id_DASH_stats,m_id_stats_25411__$1], 0));
(taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1(G__25396_25413) : taoensso.tufte.impl.pdata_proxy.call(null,G__25396_25413));
} else {
times_25407.push(t_elapsed);
}
} else {
var times_25414 = [];
times_25414.push(t_elapsed);

var G__25397_25415 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pdata_25405__$1,id,times_25414);
(taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1(G__25397_25415) : taoensso.tufte.impl.pdata_proxy.call(null,G__25397_25415));
}
}

return null;
});
taoensso.tufte.impl.times__GT_IdStats = (function taoensso$tufte$impl$times__GT_IdStats(times,_QMARK_interim_id_stats){
var times__$1 = cljs.core.vec(times);
var ts_count = cljs.core.count(times__$1);
var _ = ((!((ts_count === (0))))?null:(function(){throw (new Error("Assert failed: (not (zero? ts-count))"))})());
var ts_time = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (times__$1,ts_count,_){
return (function (acc,in$){
return (acc + in$);
});})(times__$1,ts_count,_))
,(0),times__$1);
var ts_mean = (ts_time / ts_count);
var ts_mad_sum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (times__$1,ts_count,_,ts_time,ts_mean){
return (function (acc,in$){
return (acc + (function (){var G__25416 = (in$ - ts_mean);
return Math.abs(G__25416);
})());
});})(times__$1,ts_count,_,ts_time,ts_mean))
,(0),times__$1);
var ts_min = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (times__$1,ts_count,_,ts_time,ts_mean,ts_mad_sum){
return (function (acc,in$){
if((in$ < acc)){
return in$;
} else {
return acc;
}
});})(times__$1,ts_count,_,ts_time,ts_mean,ts_mad_sum))
,(9007199254740991),times__$1);
var ts_max = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (times__$1,ts_count,_,ts_time,ts_mean,ts_mad_sum,ts_min){
return (function (acc,in$){
if((in$ > acc)){
return in$;
} else {
return acc;
}
});})(times__$1,ts_count,_,ts_time,ts_mean,ts_mad_sum,ts_min))
,(0),times__$1);
var temp__4655__auto__ = _QMARK_interim_id_stats;
if(cljs.core.truth_(temp__4655__auto__)){
var id_stats = temp__4655__auto__;
var s_count = (id_stats.count + ts_count);
var s_time = (id_stats.time + ts_time);
var s_mean = (s_time / s_count);
var s_mad_sum = (id_stats.mad_sum() + ts_mad_sum);
var s0_min = id_stats.min;
var s0_max = id_stats.max;
return (new taoensso.tufte.impl.IdStats(s_count,s_time,s_mean,s_mad_sum,(s_mad_sum / s_count),(((s0_min < ts_min))?s0_min:ts_min),(((s0_max > ts_max))?s0_max:ts_max),null,null,null));
} else {
return (new taoensso.tufte.impl.IdStats(ts_count,ts_time,ts_mean,ts_mad_sum,(ts_mad_sum / ts_count),ts_min,ts_max,null,null,null));
}
});
/**
 * Wraps up a pdata run. Nb: recall that we need a *fresh* `(pdata-proxy)`
 *   here for thread-local profiling.
 */
taoensso.tufte.impl.pdata__GT_Stats = (function taoensso$tufte$impl$pdata__GT_Stats(current_pdata){
var t1 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var t0 = current_pdata.__t0;
var m_id_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_pdata,cljs.core.cst$kw$__m_DASH_id_DASH_stats);
var m_times = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(current_pdata,cljs.core.cst$kw$__m_DASH_id_DASH_stats,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$__t0], 0));
return (new taoensso.tufte.impl.Stats((new taoensso.tufte.impl.Clock(t0,t1,(t1 - t0),null,null,null)),cljs.core.reduce_kv(((function (t1,t0,m_id_stats,m_times){
return (function (m,id,times){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,taoensso.tufte.impl.times__GT_IdStats(times,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m_id_stats,id)));
});})(t1,t0,m_id_stats,m_times))
,cljs.core.PersistentArrayMap.EMPTY,m_times),null,null,null));
});
if(typeof taoensso.tufte.impl.handlers_ !== 'undefined'){
} else {
/**
 * {<hid> <handler-fn>}
 */
taoensso.tufte.impl.handlers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
taoensso.tufte.impl.handle_blocking_BANG_ = (function taoensso$tufte$impl$handle_blocking_BANG_(m){
return taoensso.encore.run_kv_BANG_((function (id,f){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}catch (e25417){if((e25417 instanceof Error)){
var e = e25417;
try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("WARNING: Uncaught Tufte `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("` handler error\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], 0));
}catch (e25418){if((e25418 instanceof Error)){
var _ = e25418;
return null;
} else {
throw e25418;

}
}} else {
throw e25417;

}
}}),cljs.core.deref(taoensso.tufte.impl.handlers_));
});
taoensso.tufte.impl.handle_BANG_ = (function taoensso$tufte$impl$handle_BANG_(m){
taoensso.tufte.impl.handle_blocking_BANG_(m);

return null;
});
