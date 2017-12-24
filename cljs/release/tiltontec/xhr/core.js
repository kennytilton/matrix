// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.xhr.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.synapse');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('cljs_http.client');
tiltontec.xhr.core._PLUS_xhr_sid_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
tiltontec.xhr.core.xhr_init_BANG_ = (function tiltontec$xhr$core$xhr_init_BANG_(){
return cljs.core.reset_BANG_(tiltontec.xhr.core._PLUS_xhr_sid_PLUS_,(-1));
});
tiltontec.xhr.core.xhr_send = (function tiltontec$xhr$core$xhr_send(xhr){
var uri = tiltontec.model.core.md_get(xhr,cljs.core.cst$kw$uri);
return null;
});
tiltontec.xhr.core.xhr_status = (function tiltontec$xhr$core$xhr_status(xhr){
var or__6774__auto__ = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.md_get(xhr,cljs.core.cst$kw$response));
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.cst$kw$no_DASH_response_DASH_yet;
}
});
tiltontec.xhr.core.xhr_ok_body = (function tiltontec$xhr$core$xhr_ok_body(xhr){
var temp__4657__auto__ = tiltontec.model.core.md_get(xhr,cljs.core.cst$kw$response);
if(cljs.core.truth_(temp__4657__auto__)){
var r = temp__4657__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(r);
} else {
return null;
}
} else {
return null;
}
});
tiltontec.xhr.core.xhr_error = (function tiltontec$xhr$core$xhr_error(xhr){
var temp__4657__auto__ = tiltontec.model.core.md_get(xhr,cljs.core.cst$kw$response);
if(cljs.core.truth_(temp__4657__auto__)){
var r = temp__4657__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(r);
} else {
return null;
}
} else {
return null;
}
});
tiltontec.xhr.core.make_xhr = (function tiltontec$xhr$core$make_xhr(var_args){
var G__34509 = arguments.length;
switch (G__34509) {
case 1:
return tiltontec.xhr.core.make_xhr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.xhr.core.make_xhr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.core.make_xhr.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return tiltontec.xhr.core.make_xhr.cljs$core$IFn$_invoke$arity$2(uri,cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.xhr.core.make_xhr.cljs$core$IFn$_invoke$arity$2 = (function (uri,attrs){
if(typeof uri === 'string'){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("param uri <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1("> not a string")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(string? uri)")].join('')));
}

var xhr = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.model.core.make,cljs.core.cst$kw$type,cljs.core.cst$kw$tiltontec$xhr$core_SLASH_xhr,cljs.core.cst$kw$id,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.xhr.core._PLUS_xhr_sid_PLUS_,cljs.core.inc),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$uri,uri,cljs.core.cst$kw$response,tiltontec.cell.core.c_in(null),cljs.core.cst$kw$select,null,cljs.core.cst$kw$selection,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$b,cljs.core.list(cljs.core.cst$sym$xhr_DASH_ok_DASH_body,cljs.core.cst$sym$me)], null),cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ks,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$select)], null),cljs.core.list(cljs.core.cst$sym$select_DASH_keys,cljs.core.cst$sym$b,cljs.core.cst$sym$ks),cljs.core.cst$sym$b))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var temp__4657__auto__ = tiltontec.xhr.core.xhr_ok_body(me);
if(cljs.core.truth_(temp__4657__auto__)){
var b = temp__4657__auto__;
var temp__4655__auto__ = tiltontec.model.core.md_get(me,cljs.core.cst$kw$select);
if(cljs.core.truth_(temp__4655__auto__)){
var ks = temp__4655__auto__;
return cljs.core.select_keys(b,ks);
} else {
return b;
}
} else {
return null;
}
})], 0)),cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$send_QMARK_))))], 0));
if(cljs.core.truth_(cljs.core.cst$kw$send_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs))){
tiltontec.xhr.core.xhr_send(xhr);
} else {
}

return xhr;
});

tiltontec.xhr.core.make_xhr.cljs$lang$maxFixedArity = 2;

tiltontec.xhr.core.send_xhr = (function tiltontec$xhr$core$send_xhr(var_args){
var G__34512 = arguments.length;
switch (G__34512) {
case 1:
return tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$anon,uri,cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x instanceof cljs.core.Keyword)){
return tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$3(x,y,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(typeof x === 'string'){
return tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$anon,x,y);
} else {
throw (new Error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic("~&send-xhr cannot discriminate params ~a and ~a",x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0))));

}
}
});

tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$3 = (function (name,uri,attrs){
tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$send_DASH_xhr);

return tiltontec.xhr.core.make_xhr.cljs$core$IFn$_invoke$arity$2(uri,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$send_QMARK_,true], null),attrs], 0)));
});

tiltontec.xhr.core.send_xhr.cljs$lang$maxFixedArity = 3;

tiltontec.xhr.core.xhr_response = (function tiltontec$xhr$core$xhr_response(xhr){
return tiltontec.model.core.md_get(xhr,cljs.core.cst$kw$response);
});
tiltontec.xhr.core.xhr_selection = (function tiltontec$xhr$core$xhr_selection(xhr){
return tiltontec.model.core.md_get(xhr,cljs.core.cst$kw$selection);
});
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$tiltontec$xhr$core_SLASH_xhr], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
return null;
} else {
return null;
}
}));
if(typeof tiltontec.xhr.core.xhr_name_to_map !== 'undefined'){
} else {
tiltontec.xhr.core.xhr_name_to_map = (function (){var method_table__7708__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.xhr.core","xhr-name-to-map"),((function (method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__){
return (function (p1__34514_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(p1__34514_SHARP_));
});})(method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__))
,cljs.core.cst$kw$default,hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
tiltontec.xhr.core.xhr_name_to_map.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (xhr){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(xhr),cljs.core.cst$kw$par,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$kids,cljs.core.cst$kw$id,cljs.core.cst$kw$response,cljs.core.cst$kw$select,cljs.core.cst$kw$selection], 0)),cljs.core.cst$kw$warning,cljs.core.cst$kw$xhr_DASH_name_DASH_to_DASH_map_DASH_fell_DASH_thru,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kids,(function (){var iter__7563__auto__ = (function tiltontec$xhr$core$iter__34515(s__34516){
return (new cljs.core.LazySeq(null,(function (){
var s__34516__$1 = s__34516;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34516__$1);
if(temp__4657__auto__){
var s__34516__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34516__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__34516__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__34518 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__34517 = (0);
while(true){
if((i__34517 < size__7562__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__34517);
cljs.core.chunk_append(b__34518,(tiltontec.xhr.core.xhr_to_map.cljs$core$IFn$_invoke$arity$1 ? tiltontec.xhr.core.xhr_to_map.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.xhr.core.xhr_to_map.call(null,k)));

var G__34519 = (i__34517 + (1));
i__34517 = G__34519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34518),tiltontec$xhr$core$iter__34515(cljs.core.chunk_rest(s__34516__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34518),null);
}
} else {
var k = cljs.core.first(s__34516__$2);
return cljs.core.cons((tiltontec.xhr.core.xhr_to_map.cljs$core$IFn$_invoke$arity$1 ? tiltontec.xhr.core.xhr_to_map.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.xhr.core.xhr_to_map.call(null,k)),tiltontec$xhr$core$iter__34515(cljs.core.rest(s__34516__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xhr)));
})()], 0));
}));
tiltontec.xhr.core.xhr_to_map = (function tiltontec$xhr$core$xhr_to_map(xhr){
var G__34520 = cljs.core.type(xhr);
var G__34520__$1 = (((G__34520 instanceof cljs.core.Keyword))?G__34520.fqn:null);
switch (G__34520__$1) {
case "tiltontec.xhr.core/xhr":
return (tiltontec.xhr.core.xhr_name_to_map.cljs$core$IFn$_invoke$arity$1 ? tiltontec.xhr.core.xhr_name_to_map.cljs$core$IFn$_invoke$arity$1(xhr) : tiltontec.xhr.core.xhr_name_to_map.call(null,xhr));

break;
case "tiltontec.model.core/family":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(xhr),cljs.core.cst$kw$type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$par,cljs.core.cst$kw$kids,cljs.core.cst$kw$cells_DASH_flushed], 0)),cljs.core.cst$kw$kids,(function (){var iter__7563__auto__ = ((function (G__34520,G__34520__$1){
return (function tiltontec$xhr$core$xhr_to_map_$_iter__34521(s__34522){
return (new cljs.core.LazySeq(null,((function (G__34520,G__34520__$1){
return (function (){
var s__34522__$1 = s__34522;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34522__$1);
if(temp__4657__auto__){
var s__34522__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34522__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__34522__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__34524 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__34523 = (0);
while(true){
if((i__34523 < size__7562__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__34523);
cljs.core.chunk_append(b__34524,(tiltontec.xhr.core.xhr_to_map.cljs$core$IFn$_invoke$arity$1 ? tiltontec.xhr.core.xhr_to_map.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.xhr.core.xhr_to_map.call(null,k)));

var G__34526 = (i__34523 + (1));
i__34523 = G__34526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34524),tiltontec$xhr$core$xhr_to_map_$_iter__34521(cljs.core.chunk_rest(s__34522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34524),null);
}
} else {
var k = cljs.core.first(s__34522__$2);
return cljs.core.cons((tiltontec.xhr.core.xhr_to_map.cljs$core$IFn$_invoke$arity$1 ? tiltontec.xhr.core.xhr_to_map.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.xhr.core.xhr_to_map.call(null,k)),tiltontec$xhr$core$xhr_to_map_$_iter__34521(cljs.core.rest(s__34522__$2)));
}
} else {
return null;
}
break;
}
});})(G__34520,G__34520__$1))
,null,null));
});})(G__34520,G__34520__$1))
;
return iter__7563__auto__(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(xhr)));
})());

break;
default:
return cljs.core.select_keys(xhr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type,cljs.core.cst$kw$name,cljs.core.cst$kw$uri], null));

}
});
tiltontec.xhr.core.xhr_status_key = (function tiltontec$xhr$core$xhr_status_key(xhr){
return tiltontec.xhr.core.xhr_status(xhr);
});
tiltontec.xhr.core.xhr_resolved = (function tiltontec$xhr$core$xhr_resolved(xhr){
return tiltontec.xhr.core.xhr_response(xhr);
});
tiltontec.xhr.core.xhr_error_QMARK_ = (function tiltontec$xhr$core$xhr_error_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.xhr.core.xhr_status_key(xhr),cljs.core.cst$kw$error);
});
tiltontec.xhr.core.xhrfo = (function tiltontec$xhr$core$xhrfo(xhr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.xhr.core.xhr_status_key(xhr),tiltontec.model.core.md_get(xhr,cljs.core.cst$kw$uri)], null);
});
tiltontec.xhr.core.synaptic_xhr = (function tiltontec$xhr$core$synaptic_xhr(var_args){
var G__34528 = arguments.length;
switch (G__34528) {
case 2:
return tiltontec.xhr.core.synaptic_xhr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.xhr.core.synaptic_xhr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.core.synaptic_xhr.cljs$core$IFn$_invoke$arity$2 = (function (id,uri){
return tiltontec.xhr.core.synaptic_xhr.cljs$core$IFn$_invoke$arity$3(id,uri,true);
});

tiltontec.xhr.core.synaptic_xhr.cljs$core$IFn$_invoke$arity$3 = (function (id,uri,resolve_QMARK_){
var G__34530 = (function (){var existing_syn__34408__auto__ = tiltontec.cell.synapse.existing_syn(id);
var synapse__34409__auto__ = (function (){var or__6774__auto__ = existing_syn__34408__auto__;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var new_syn__34410__auto__ = (function (){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$making_DASH_syn_BANG__QMARK_,cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tiltontec.cell.base._STAR_depender_STAR_))], 0));

return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,cljs.core.cst$kw$model.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.cst$kw$slot,id,cljs.core.cst$kw$synapse_DASH_id,id,cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$send_DASH_xhr,cljs.core.cst$sym$id,cljs.core.cst$sym$uri)),cljs.core.cst$kw$synaptic_QMARK_,true,cljs.core.cst$kw$rule,((function (or__6774__auto__,existing_syn__34408__auto__){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$2(id,uri);
});})(or__6774__auto__,existing_syn__34408__auto__))
], 0));
})();
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$synapses,tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_synapses(tiltontec.cell.base._STAR_depender_STAR_),new_syn__34410__auto__));

tiltontec.cell.evaluate.record_dependency(new_syn__34410__auto__);

return new_syn__34410__auto__;
}
})();
var value__34411__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,((function (existing_syn__34408__auto__,synapse__34409__auto__){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.ensure_value_is_current(synapse__34409__auto__,cljs.core.cst$kw$synapse,tiltontec.cell.base._STAR_depender_STAR_);
});})(existing_syn__34408__auto__,synapse__34409__auto__))
);
tiltontec.cell.evaluate.record_dependency(synapse__34409__auto__);

return value__34411__auto__;
})();
var fexpr__34529 = (cljs.core.truth_(resolve_QMARK_)?tiltontec.xhr.core.xhr_resolved:cljs.core.identity);
return (fexpr__34529.cljs$core$IFn$_invoke$arity$1 ? fexpr__34529.cljs$core$IFn$_invoke$arity$1(G__34530) : fexpr__34529.call(null,G__34530));
});

tiltontec.xhr.core.synaptic_xhr.cljs$lang$maxFixedArity = 3;

tiltontec.xhr.core.xhr_await = (function tiltontec$xhr$core$xhr_await(var_args){
var G__34533 = arguments.length;
switch (G__34533) {
case 1:
return tiltontec.xhr.core.xhr_await.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.xhr.core.xhr_await.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.core.xhr_await.cljs$core$IFn$_invoke$arity$1 = (function (xhr){
return tiltontec.xhr.core.xhr_await.cljs$core$IFn$_invoke$arity$2(xhr,(3));
});

tiltontec.xhr.core.xhr_await.cljs$core$IFn$_invoke$arity$2 = (function (xhr,max_seconds){
if(cljs.core.truth_(tiltontec.xhr.core.xhr_response(xhr))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xhr_DASH_resolved,tiltontec.xhr.core.xhr_response(xhr)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xhr_DASH_resolved,tiltontec.xhr.core.xhrfo(xhr)], 0));

return xhr;
} else {
if((max_seconds > (0))){
var G__34534 = (function (){
return tiltontec.xhr.core.xhr_await.cljs$core$IFn$_invoke$arity$2(xhr,(max_seconds - (1)));
});
var G__34535 = (1000);
return setTimeout(G__34534,G__34535);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$xhr_DASH_await_DASH_timeout_BANG_,tiltontec.xhr.core.xhrfo(xhr)], 0));

return null;

}
}
});

tiltontec.xhr.core.xhr_await.cljs$lang$maxFixedArity = 2;

