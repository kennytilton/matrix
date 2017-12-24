// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7400__auto__,k__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
return this__7400__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7401__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7402__auto__,k27624,else__7403__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
var G__27628 = k27624;
var G__27628__$1 = (((G__27628 instanceof cljs.core.Keyword))?G__27628.fqn:null);
switch (G__27628__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27624,else__7403__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__27629,opts){
var self__ = this;
var map__27630 = p__27629;
var map__27630__$1 = ((((!((map__27630 == null)))?((((map__27630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27630):map__27630);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27630__$1,cljs.core.cst$kw$request);
var map__27632 = this;
var map__27632__$1 = ((((!((map__27632 == null)))?((((map__27632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27632):map__27632);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27632__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__27634,xhrio){
var self__ = this;
var map__27635 = p__27634;
var map__27635__$1 = ((((!((map__27635 == null)))?((((map__27635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27635):map__27635);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27635__$1,cljs.core.cst$kw$response);
var map__27637 = this;
var map__27637__$1 = ((((!((map__27637 == null)))?((((map__27637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27637):map__27637);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27637__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7414__auto__,writer__7415__auto__,opts__7416__auto__){
var self__ = this;
var this__7414__auto____$1 = this;
var pr_pair__7417__auto__ = ((function (this__7414__auto____$1){
return (function (keyval__7418__auto__){
return cljs.core.pr_sequential_writer(writer__7415__auto__,cljs.core.pr_writer,""," ","",opts__7416__auto__,keyval__7418__auto__);
});})(this__7414__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7415__auto__,pr_pair__7417__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__7416__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27623){
var self__ = this;
var G__27623__$1 = this;
return (new cljs.core.RecordIter((0),G__27623__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7398__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7395__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7404__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
var h__7214__auto__ = self__.__hash;
if(!((h__7214__auto__ == null))){
return h__7214__auto__;
} else {
var h__7214__auto____$1 = (function (){var fexpr__27639 = ((function (h__7214__auto__,this__7396__auto____$1){
return (function (coll__7397__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll(coll__7397__auto__));
});})(h__7214__auto__,this__7396__auto____$1))
;
return fexpr__27639(this__7396__auto____$1);
})();
self__.__hash = h__7214__auto____$1;

return h__7214__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27625,other27626){
var self__ = this;
var this27625__$1 = this;
return (!((other27626 == null))) && ((this27625__$1.constructor === other27626.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27625__$1.name,other27626.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27625__$1.request,other27626.request)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27625__$1.response,other27626.response)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27625__$1.__extmap,other27626.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7409__auto__,k__7410__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__7410__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7409__auto____$1),self__.__meta),k__7410__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7410__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7407__auto__,k__7408__auto__,G__27623){
var self__ = this;
var this__7407__auto____$1 = this;
var pred__27640 = cljs.core.keyword_identical_QMARK_;
var expr__27641 = k__7408__auto__;
if(cljs.core.truth_((function (){var G__27643 = cljs.core.cst$kw$name;
var G__27644 = expr__27641;
return (pred__27640.cljs$core$IFn$_invoke$arity$2 ? pred__27640.cljs$core$IFn$_invoke$arity$2(G__27643,G__27644) : pred__27640.call(null,G__27643,G__27644));
})())){
return (new ajax.interceptors.StandardInterceptor(G__27623,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27645 = cljs.core.cst$kw$request;
var G__27646 = expr__27641;
return (pred__27640.cljs$core$IFn$_invoke$arity$2 ? pred__27640.cljs$core$IFn$_invoke$arity$2(G__27645,G__27646) : pred__27640.call(null,G__27645,G__27646));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__27623,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27647 = cljs.core.cst$kw$response;
var G__27648 = expr__27641;
return (pred__27640.cljs$core$IFn$_invoke$arity$2 ? pred__27640.cljs$core$IFn$_invoke$arity$2(G__27647,G__27648) : pred__27640.call(null,G__27647,G__27648));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__27623,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7408__auto__,G__27623),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7412__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7399__auto__,G__27623){
var self__ = this;
var this__7399__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__27623,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7405__auto__,entry__7406__auto__){
var self__ = this;
var this__7405__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7406__auto__)){
return this__7405__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7405__auto____$1,entry__7406__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__7436__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__7436__auto__,writer__7437__auto__){
return cljs.core._write(writer__7437__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__27627){
return (new ajax.interceptors.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__27627),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__27627),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__27627),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27627,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__27650,xhrio){
var map__27651 = p__27650;
var map__27651__$1 = ((((!((map__27651 == null)))?((((map__27651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27651):map__27651);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27651__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  Format should have been "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27657 = arguments.length;
var i__7900__auto___27658 = (0);
while(true){
if((i__7900__auto___27658 < len__7899__auto___27657)){
args__7906__auto__.push((arguments[i__7900__auto___27658]));

var G__27659 = (i__7900__auto___27658 + (1));
i__7900__auto___27658 = G__27659;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq27653){
var G__27654 = cljs.core.first(seq27653);
var seq27653__$1 = cljs.core.next(seq27653);
var G__27655 = cljs.core.first(seq27653__$1);
var seq27653__$2 = cljs.core.next(seq27653__$1);
var G__27656 = cljs.core.first(seq27653__$2);
var seq27653__$3 = cljs.core.next(seq27653__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__27654,G__27655,G__27656,seq27653__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7400__auto__,k__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
return this__7400__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7401__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7402__auto__,k27662,else__7403__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
var G__27666 = k27662;
var G__27666__$1 = (((G__27666 instanceof cljs.core.Keyword))?G__27666.fqn:null);
switch (G__27666__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27662,else__7403__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__27667,request){
var self__ = this;
var map__27668 = p__27667;
var map__27668__$1 = ((((!((map__27668 == null)))?((((map__27668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27668):map__27668);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27668__$1,cljs.core.cst$kw$content_DASH_type);
var map__27670 = this;
var map__27670__$1 = ((((!((map__27670 == null)))?((((map__27670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27670):map__27670);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27670__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__27670,map__27670__$1,content_type__$2,map__27668,map__27668__$1,content_type__$1){
return (function (p1__27660_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header(content_type__$2)], null),(function (){var or__6774__auto__ = p1__27660_SHARP_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__27670,map__27670__$1,content_type__$2,map__27668,map__27668__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__27672,xhrio){
var self__ = this;
var map__27673 = p__27672;
var map__27673__$1 = ((((!((map__27673 == null)))?((((map__27673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27673):map__27673);
var format = map__27673__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27673__$1,cljs.core.cst$kw$read);
var map__27675 = this;
var map__27675__$1 = ((((!((map__27675 == null)))?((((map__27675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27675):map__27675);
var format__$1 = map__27675__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27675__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail,status);
var G__27678 = status;
switch (G__27678) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__27679 = "Request failed.";
var G__27680 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__27679,G__27680) : fail.call(null,G__27679,G__27680));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__27681 = "Request aborted by client.";
var G__27682 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__27681,G__27682) : fail.call(null,G__27681,G__27682));
} else {
var G__27683 = "Request timed out.";
var G__27684 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__27683,G__27684) : fail.call(null,G__27683,G__27684));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__27686 = ajax.protocols._status_text(xhrio);
var G__27687 = cljs.core.cst$kw$error;
var G__27688 = cljs.core.cst$kw$response;
var G__27689 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__27686,G__27687,G__27688,G__27689) : fail.call(null,G__27686,G__27687,G__27688,G__27689));
}
}catch (e27685){if((e27685 instanceof Object)){
var e = e27685;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e27685;

}
}
}
}catch (e27677){if((e27677 instanceof Object)){
var e = e27677;
var message = e.message;
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$exception,e], 0));
} else {
throw e27677;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7414__auto__,writer__7415__auto__,opts__7416__auto__){
var self__ = this;
var this__7414__auto____$1 = this;
var pr_pair__7417__auto__ = ((function (this__7414__auto____$1){
return (function (keyval__7418__auto__){
return cljs.core.pr_sequential_writer(writer__7415__auto__,cljs.core.pr_writer,""," ","",opts__7416__auto__,keyval__7418__auto__);
});})(this__7414__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7415__auto__,pr_pair__7417__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__7416__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27661){
var self__ = this;
var G__27661__$1 = this;
return (new cljs.core.RecordIter((0),G__27661__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7398__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7395__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7404__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
var h__7214__auto__ = self__.__hash;
if(!((h__7214__auto__ == null))){
return h__7214__auto__;
} else {
var h__7214__auto____$1 = (function (){var fexpr__27690 = ((function (h__7214__auto__,this__7396__auto____$1){
return (function (coll__7397__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll(coll__7397__auto__));
});})(h__7214__auto__,this__7396__auto____$1))
;
return fexpr__27690(this__7396__auto____$1);
})();
self__.__hash = h__7214__auto____$1;

return h__7214__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27663,other27664){
var self__ = this;
var this27663__$1 = this;
return (!((other27664 == null))) && ((this27663__$1.constructor === other27664.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27663__$1.read,other27664.read)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27663__$1.description,other27664.description)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27663__$1.content_type,other27664.content_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27663__$1.__extmap,other27664.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7409__auto__,k__7410__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__7410__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7409__auto____$1),self__.__meta),k__7410__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7410__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7407__auto__,k__7408__auto__,G__27661){
var self__ = this;
var this__7407__auto____$1 = this;
var pred__27691 = cljs.core.keyword_identical_QMARK_;
var expr__27692 = k__7408__auto__;
if(cljs.core.truth_((function (){var G__27694 = cljs.core.cst$kw$read;
var G__27695 = expr__27692;
return (pred__27691.cljs$core$IFn$_invoke$arity$2 ? pred__27691.cljs$core$IFn$_invoke$arity$2(G__27694,G__27695) : pred__27691.call(null,G__27694,G__27695));
})())){
return (new ajax.interceptors.ResponseFormat(G__27661,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27696 = cljs.core.cst$kw$description;
var G__27697 = expr__27692;
return (pred__27691.cljs$core$IFn$_invoke$arity$2 ? pred__27691.cljs$core$IFn$_invoke$arity$2(G__27696,G__27697) : pred__27691.call(null,G__27696,G__27697));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,G__27661,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27698 = cljs.core.cst$kw$content_DASH_type;
var G__27699 = expr__27692;
return (pred__27691.cljs$core$IFn$_invoke$arity$2 ? pred__27691.cljs$core$IFn$_invoke$arity$2(G__27698,G__27699) : pred__27691.call(null,G__27698,G__27699));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__27661,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7408__auto__,G__27661),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7412__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7399__auto__,G__27661){
var self__ = this;
var this__7399__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__27661,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7405__auto__,entry__7406__auto__){
var self__ = this;
var this__7405__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7406__auto__)){
return this__7405__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7405__auto____$1,entry__7406__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__7436__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__7436__auto__,writer__7437__auto__){
return cljs.core._write(writer__7437__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__27665){
return (new ajax.interceptors.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__27665),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__27665),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__27665),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27665,cljs.core.cst$kw$read,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7400__auto__,k__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
return this__7400__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7401__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7402__auto__,k27703,else__7403__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
var G__27707 = k27703;
switch (G__27707) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27703,else__7403__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27708){
var self__ = this;
var map__27709 = p__27708;
var map__27709__$1 = ((((!((map__27709 == null)))?((((map__27709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27709):map__27709);
var request = map__27709__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27709__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27709__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27709__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27709__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27709__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__27711 = ajax.interceptors.get_request_format(format);
var map__27711__$1 = ((((!((map__27711 == null)))?((((map__27711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27711):map__27711);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27711__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27711__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.interceptors.apply_request_format(write,params):ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__6774__auto__ = headers;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7414__auto__,writer__7415__auto__,opts__7416__auto__){
var self__ = this;
var this__7414__auto____$1 = this;
var pr_pair__7417__auto__ = ((function (this__7414__auto____$1){
return (function (keyval__7418__auto__){
return cljs.core.pr_sequential_writer(writer__7415__auto__,cljs.core.pr_writer,""," ","",opts__7416__auto__,keyval__7418__auto__);
});})(this__7414__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7415__auto__,pr_pair__7417__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__7416__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27702){
var self__ = this;
var G__27702__$1 = this;
return (new cljs.core.RecordIter((0),G__27702__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7398__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7395__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7404__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
var h__7214__auto__ = self__.__hash;
if(!((h__7214__auto__ == null))){
return h__7214__auto__;
} else {
var h__7214__auto____$1 = (function (){var fexpr__27713 = ((function (h__7214__auto__,this__7396__auto____$1){
return (function (coll__7397__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll(coll__7397__auto__));
});})(h__7214__auto__,this__7396__auto____$1))
;
return fexpr__27713(this__7396__auto____$1);
})();
self__.__hash = h__7214__auto____$1;

return h__7214__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27704,other27705){
var self__ = this;
var this27704__$1 = this;
return (!((other27705 == null))) && ((this27704__$1.constructor === other27705.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27704__$1.__extmap,other27705.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7409__auto__,k__7410__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7410__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7409__auto____$1),self__.__meta),k__7410__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7410__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7407__auto__,k__7408__auto__,G__27702){
var self__ = this;
var this__7407__auto____$1 = this;
var pred__27714 = cljs.core.keyword_identical_QMARK_;
var expr__27715 = k__7408__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7408__auto__,G__27702),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7412__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7399__auto__,G__27702){
var self__ = this;
var this__7399__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__27702,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7405__auto__,entry__7406__auto__){
var self__ = this;
var this__7405__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7406__auto__)){
return this__7405__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7405__auto____$1,entry__7406__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__7436__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__7436__auto__,writer__7437__auto__){
return cljs.core._write(writer__7437__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__27706){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__27706)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__27719 = arguments.length;
switch (G__27719) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__27720,uri){
var map__27721 = p__27720;
var map__27721__$1 = ((((!((map__27721 == null)))?((((map__27721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27721):map__27721);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27721__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27721__$1,cljs.core.cst$kw$params);

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__27723){
var map__27724 = p__27723;
var map__27724__$1 = ((((!((map__27724 == null)))?((((map__27724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27724):map__27724);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27724__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27724__$1,cljs.core.cst$kw$params);
return ((function (map__27724,map__27724__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__27724,map__27724__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7400__auto__,k__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
return this__7400__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7401__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7402__auto__,k27728,else__7403__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
var G__27732 = k27728;
switch (G__27732) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27728,else__7403__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27733){
var self__ = this;
var map__27734 = p__27733;
var map__27734__$1 = ((((!((map__27734 == null)))?((((map__27734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27734):map__27734);
var request = map__27734__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27734__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1(request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7414__auto__,writer__7415__auto__,opts__7416__auto__){
var self__ = this;
var this__7414__auto____$1 = this;
var pr_pair__7417__auto__ = ((function (this__7414__auto____$1){
return (function (keyval__7418__auto__){
return cljs.core.pr_sequential_writer(writer__7415__auto__,cljs.core.pr_writer,""," ","",opts__7416__auto__,keyval__7418__auto__);
});})(this__7414__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7415__auto__,pr_pair__7417__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__7416__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27727){
var self__ = this;
var G__27727__$1 = this;
return (new cljs.core.RecordIter((0),G__27727__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7398__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7395__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7404__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
var h__7214__auto__ = self__.__hash;
if(!((h__7214__auto__ == null))){
return h__7214__auto__;
} else {
var h__7214__auto____$1 = (function (){var fexpr__27736 = ((function (h__7214__auto__,this__7396__auto____$1){
return (function (coll__7397__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll(coll__7397__auto__));
});})(h__7214__auto__,this__7396__auto____$1))
;
return fexpr__27736(this__7396__auto____$1);
})();
self__.__hash = h__7214__auto____$1;

return h__7214__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27729,other27730){
var self__ = this;
var this27729__$1 = this;
return (!((other27730 == null))) && ((this27729__$1.constructor === other27730.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27729__$1.__extmap,other27730.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7409__auto__,k__7410__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7410__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7409__auto____$1),self__.__meta),k__7410__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7410__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7407__auto__,k__7408__auto__,G__27727){
var self__ = this;
var this__7407__auto____$1 = this;
var pred__27737 = cljs.core.keyword_identical_QMARK_;
var expr__27738 = k__7408__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7408__auto__,G__27727),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7412__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7399__auto__,G__27727){
var self__ = this;
var this__7399__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__27727,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7405__auto__,entry__7406__auto__){
var self__ = this;
var this__7405__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7406__auto__)){
return this__7405__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7405__auto____$1,entry__7406__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__7436__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__7436__auto__,writer__7437__auto__){
return cljs.core._write(writer__7437__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__27731){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__27731)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7400__auto__,k__7401__auto__){
var self__ = this;
var this__7400__auto____$1 = this;
return this__7400__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7401__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7402__auto__,k27742,else__7403__auto__){
var self__ = this;
var this__7402__auto____$1 = this;
var G__27746 = k27742;
switch (G__27746) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27742,else__7403__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27747){
var self__ = this;
var map__27748 = p__27747;
var map__27748__$1 = ((((!((map__27748 == null)))?((((map__27748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27748):map__27748);
var request = map__27748__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27748__$1,cljs.core.cst$kw$body);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7414__auto__,writer__7415__auto__,opts__7416__auto__){
var self__ = this;
var this__7414__auto____$1 = this;
var pr_pair__7417__auto__ = ((function (this__7414__auto____$1){
return (function (keyval__7418__auto__){
return cljs.core.pr_sequential_writer(writer__7415__auto__,cljs.core.pr_writer,""," ","",opts__7416__auto__,keyval__7418__auto__);
});})(this__7414__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7415__auto__,pr_pair__7417__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__7416__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27741){
var self__ = this;
var G__27741__$1 = this;
return (new cljs.core.RecordIter((0),G__27741__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7398__auto__){
var self__ = this;
var this__7398__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7395__auto__){
var self__ = this;
var this__7395__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7404__auto__){
var self__ = this;
var this__7404__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7396__auto__){
var self__ = this;
var this__7396__auto____$1 = this;
var h__7214__auto__ = self__.__hash;
if(!((h__7214__auto__ == null))){
return h__7214__auto__;
} else {
var h__7214__auto____$1 = (function (){var fexpr__27750 = ((function (h__7214__auto__,this__7396__auto____$1){
return (function (coll__7397__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll(coll__7397__auto__));
});})(h__7214__auto__,this__7396__auto____$1))
;
return fexpr__27750(this__7396__auto____$1);
})();
self__.__hash = h__7214__auto____$1;

return h__7214__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27743,other27744){
var self__ = this;
var this27743__$1 = this;
return (!((other27744 == null))) && ((this27743__$1.constructor === other27744.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27743__$1.__extmap,other27744.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7409__auto__,k__7410__auto__){
var self__ = this;
var this__7409__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7410__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7409__auto____$1),self__.__meta),k__7410__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7410__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7407__auto__,k__7408__auto__,G__27741){
var self__ = this;
var this__7407__auto____$1 = this;
var pred__27751 = cljs.core.keyword_identical_QMARK_;
var expr__27752 = k__7408__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7408__auto__,G__27741),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7412__auto__){
var self__ = this;
var this__7412__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7399__auto__,G__27741){
var self__ = this;
var this__7399__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__27741,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7405__auto__,entry__7406__auto__){
var self__ = this;
var this__7405__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7406__auto__)){
return this__7405__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7406__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7405__auto____$1,entry__7406__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__7436__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__7436__auto__,writer__7437__auto__){
return cljs.core._write(writer__7437__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__27745){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__27745)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__27755){
var map__27756 = p__27755;
var map__27756__$1 = ((((!((map__27756 == null)))?((((map__27756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27756):map__27756);
var opts = map__27756__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_(response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return (interpret_vector.cljs$core$IFn$_invoke$arity$1 ? interpret_vector.cljs$core$IFn$_invoke$arity$1(opts) : interpret_vector.call(null,opts));
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
