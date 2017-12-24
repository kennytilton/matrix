// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6762__auto__ = v;
if(cljs.core.truth_(and__6762__auto__)){
return (v > (0));
} else {
return and__6762__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__31072_SHARP_,p2__31071_SHARP_){
var vec__31073 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__31071_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31073,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31073,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31072_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31076_SHARP_){
return cljs_http.client.encode_val(k,p1__31076_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__31077){
var vec__31078 = p__31077;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31078,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31078,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__31081_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31081_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6762__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__6762__auto__){
var and__6762__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__6762__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6762__auto____$1;
}
} else {
return and__6762__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__31082 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31082) : client.call(null,G__31082));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__31083_SHARP_){
return cljs_http.client.decode_body(p1__31083_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31091 = arguments.length;
var i__7900__auto___31092 = (0);
while(true){
if((i__7900__auto___31092 < len__7899__auto___31091)){
args__7906__auto__.push((arguments[i__7900__auto___31092]));

var G__31093 = (i__7900__auto___31092 + (1));
i__7900__auto___31092 = G__31093;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31086){
var vec__31087 = p__31086;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31087,(0),null);
return ((function (vec__31087,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6774__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
var G__31090 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31090) : client.call(null,G__31090));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__31087,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq31084){
var G__31085 = cljs.core.first(seq31084);
var seq31084__$1 = cljs.core.next(seq31084);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__31085,seq31084__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31101 = arguments.length;
var i__7900__auto___31102 = (0);
while(true){
if((i__7900__auto___31102 < len__7899__auto___31101)){
args__7906__auto__.push((arguments[i__7900__auto___31102]));

var G__31103 = (i__7900__auto___31102 + (1));
i__7900__auto___31102 = G__31103;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31096){
var vec__31097 = p__31096;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31097,(0),null);
return ((function (vec__31097,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6774__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
var G__31100 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31100) : client.call(null,G__31100));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__31097,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq31094){
var G__31095 = cljs.core.first(seq31094);
var seq31094__$1 = cljs.core.next(seq31094);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__31095,seq31094__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31111 = arguments.length;
var i__7900__auto___31112 = (0);
while(true){
if((i__7900__auto___31112 < len__7899__auto___31111)){
args__7906__auto__.push((arguments[i__7900__auto___31112]));

var G__31113 = (i__7900__auto___31112 + (1));
i__7900__auto___31112 = G__31113;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31106){
var vec__31107 = p__31106;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31107,(0),null);
return ((function (vec__31107,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6774__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
var G__31110 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31110) : client.call(null,G__31110));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__31107,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq31104){
var G__31105 = cljs.core.first(seq31104);
var seq31104__$1 = cljs.core.next(seq31104);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__31105,seq31104__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__31114 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__31114__$1 = ((((!((map__31114 == null)))?((((map__31114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31114):map__31114);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31114__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31114__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__31116 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31116) : client.call(null,G__31116));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__31119 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__31119__$1 = ((((!((map__31119 == null)))?((((map__31119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31119):map__31119);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31119__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31119__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__31119,map__31119__$1,decoding,decoding_opts){
return (function (p1__31117_SHARP_){
return cljs_http.util.transit_decode(p1__31117_SHARP_,decoding,decoding_opts);
});})(map__31119,map__31119__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__31119,map__31119__$1,decoding,decoding_opts,transit_decode){
return (function (p1__31118_SHARP_){
return cljs_http.client.decode_body(p1__31118_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__31119,map__31119__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__31121 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31121) : client.call(null,G__31121));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__31122_SHARP_){
return cljs_http.client.decode_body(p1__31122_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__31123){
var map__31124 = p__31123;
var map__31124__$1 = ((((!((map__31124 == null)))?((((map__31124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31124):map__31124);
var req = map__31124__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31124__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__31126 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31126) : client.call(null,G__31126));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__31127){
var map__31128 = p__31127;
var map__31128__$1 = ((((!((map__31128 == null)))?((((map__31128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31128):map__31128);
var request = map__31128__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31128__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31128__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31128__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__6762__auto__ = form_params;
if(cljs.core.truth_(and__6762__auto__)){
var fexpr__31130 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__31130.cljs$core$IFn$_invoke$arity$1 ? fexpr__31130.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__31130.call(null,request_method));
} else {
return and__6762__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__31131 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31131) : client.call(null,G__31131));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__31132_31142 = cljs.core.seq(params);
var chunk__31133_31143 = null;
var count__31134_31144 = (0);
var i__31135_31145 = (0);
while(true){
if((i__31135_31145 < count__31134_31144)){
var vec__31136_31146 = chunk__31133_31143.cljs$core$IIndexed$_nth$arity$2(null,i__31135_31145);
var k_31147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31136_31146,(0),null);
var v_31148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31136_31146,(1),null);
if(cljs.core.coll_QMARK_(v_31148)){
form_data.append(cljs.core.name(k_31147),cljs.core.first(v_31148),cljs.core.second(v_31148));
} else {
form_data.append(cljs.core.name(k_31147),v_31148);
}

var G__31149 = seq__31132_31142;
var G__31150 = chunk__31133_31143;
var G__31151 = count__31134_31144;
var G__31152 = (i__31135_31145 + (1));
seq__31132_31142 = G__31149;
chunk__31133_31143 = G__31150;
count__31134_31144 = G__31151;
i__31135_31145 = G__31152;
continue;
} else {
var temp__4657__auto___31153 = cljs.core.seq(seq__31132_31142);
if(temp__4657__auto___31153){
var seq__31132_31154__$1 = temp__4657__auto___31153;
if(cljs.core.chunked_seq_QMARK_(seq__31132_31154__$1)){
var c__7594__auto___31155 = cljs.core.chunk_first(seq__31132_31154__$1);
var G__31156 = cljs.core.chunk_rest(seq__31132_31154__$1);
var G__31157 = c__7594__auto___31155;
var G__31158 = cljs.core.count(c__7594__auto___31155);
var G__31159 = (0);
seq__31132_31142 = G__31156;
chunk__31133_31143 = G__31157;
count__31134_31144 = G__31158;
i__31135_31145 = G__31159;
continue;
} else {
var vec__31139_31160 = cljs.core.first(seq__31132_31154__$1);
var k_31161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31139_31160,(0),null);
var v_31162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31139_31160,(1),null);
if(cljs.core.coll_QMARK_(v_31162)){
form_data.append(cljs.core.name(k_31161),cljs.core.first(v_31162),cljs.core.second(v_31162));
} else {
form_data.append(cljs.core.name(k_31161),v_31162);
}

var G__31163 = cljs.core.next(seq__31132_31154__$1);
var G__31164 = null;
var G__31165 = (0);
var G__31166 = (0);
seq__31132_31142 = G__31163;
chunk__31133_31143 = G__31164;
count__31134_31144 = G__31165;
i__31135_31145 = G__31166;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__31167){
var map__31168 = p__31167;
var map__31168__$1 = ((((!((map__31168 == null)))?((((map__31168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31168):map__31168);
var request = map__31168__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31168__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31168__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__6762__auto__ = multipart_params;
if(cljs.core.truth_(and__6762__auto__)){
var fexpr__31170 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__31170.cljs$core$IFn$_invoke$arity$1 ? fexpr__31170.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__31170.call(null,request_method));
} else {
return and__6762__auto__;
}
})())){
var G__31171 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31171) : client.call(null,G__31171));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
var G__31172 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31172) : client.call(null,G__31172));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__31173_SHARP_){
var G__31174 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31173_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31174) : client.call(null,G__31174));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__31176){
var map__31177 = p__31176;
var map__31177__$1 = ((((!((map__31177 == null)))?((((map__31177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31177):map__31177);
var req = map__31177__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31177__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4655__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
var G__31179 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4655__auto__,map__31177,map__31177__$1,req,query_params){
return (function (p1__31175_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__31175_SHARP_,query_params], 0));
});})(spec,temp__4655__auto__,map__31177,map__31177__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31179) : client.call(null,G__31179));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31187 = arguments.length;
var i__7900__auto___31188 = (0);
while(true){
if((i__7900__auto___31188 < len__7899__auto___31187)){
args__7906__auto__.push((arguments[i__7900__auto___31188]));

var G__31189 = (i__7900__auto___31188 + (1));
i__7900__auto___31188 = G__31189;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31182){
var vec__31183 = p__31182;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31183,(0),null);
return ((function (vec__31183,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6774__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__31186 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31186) : client.call(null,G__31186));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__31183,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq31180){
var G__31181 = cljs.core.first(seq31180);
var seq31180__$1 = cljs.core.next(seq31180);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__31181,seq31180__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
var G__31190 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__31190) : client.call(null,G__31190));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31198 = arguments.length;
var i__7900__auto___31199 = (0);
while(true){
if((i__7900__auto___31199 < len__7899__auto___31198)){
args__7906__auto__.push((arguments[i__7900__auto___31199]));

var G__31200 = (i__7900__auto___31199 + (1));
i__7900__auto___31199 = G__31200;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31193){
var vec__31194 = p__31193;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31194,(0),null);
var G__31197 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__31197) : cljs_http.client.request.call(null,G__31197));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq31191){
var G__31192 = cljs.core.first(seq31191);
var seq31191__$1 = cljs.core.next(seq31191);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__31192,seq31191__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31208 = arguments.length;
var i__7900__auto___31209 = (0);
while(true){
if((i__7900__auto___31209 < len__7899__auto___31208)){
args__7906__auto__.push((arguments[i__7900__auto___31209]));

var G__31210 = (i__7900__auto___31209 + (1));
i__7900__auto___31209 = G__31210;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31203){
var vec__31204 = p__31203;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31204,(0),null);
var G__31207 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__31207) : cljs_http.client.request.call(null,G__31207));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq31201){
var G__31202 = cljs.core.first(seq31201);
var seq31201__$1 = cljs.core.next(seq31201);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__31202,seq31201__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31218 = arguments.length;
var i__7900__auto___31219 = (0);
while(true){
if((i__7900__auto___31219 < len__7899__auto___31218)){
args__7906__auto__.push((arguments[i__7900__auto___31219]));

var G__31220 = (i__7900__auto___31219 + (1));
i__7900__auto___31219 = G__31220;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31213){
var vec__31214 = p__31213;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31214,(0),null);
var G__31217 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__31217) : cljs_http.client.request.call(null,G__31217));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq31211){
var G__31212 = cljs.core.first(seq31211);
var seq31211__$1 = cljs.core.next(seq31211);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__31212,seq31211__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31228 = arguments.length;
var i__7900__auto___31229 = (0);
while(true){
if((i__7900__auto___31229 < len__7899__auto___31228)){
args__7906__auto__.push((arguments[i__7900__auto___31229]));

var G__31230 = (i__7900__auto___31229 + (1));
i__7900__auto___31229 = G__31230;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31223){
var vec__31224 = p__31223;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31224,(0),null);
var G__31227 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__31227) : cljs_http.client.request.call(null,G__31227));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq31221){
var G__31222 = cljs.core.first(seq31221);
var seq31221__$1 = cljs.core.next(seq31221);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__31222,seq31221__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31238 = arguments.length;
var i__7900__auto___31239 = (0);
while(true){
if((i__7900__auto___31239 < len__7899__auto___31238)){
args__7906__auto__.push((arguments[i__7900__auto___31239]));

var G__31240 = (i__7900__auto___31239 + (1));
i__7900__auto___31239 = G__31240;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31233){
var vec__31234 = p__31233;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31234,(0),null);
var G__31237 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__31237) : cljs_http.client.request.call(null,G__31237));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq31231){
var G__31232 = cljs.core.first(seq31231);
var seq31231__$1 = cljs.core.next(seq31231);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__31232,seq31231__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31248 = arguments.length;
var i__7900__auto___31249 = (0);
while(true){
if((i__7900__auto___31249 < len__7899__auto___31248)){
args__7906__auto__.push((arguments[i__7900__auto___31249]));

var G__31250 = (i__7900__auto___31249 + (1));
i__7900__auto___31249 = G__31250;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31243){
var vec__31244 = p__31243;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31244,(0),null);
var G__31247 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__31247) : cljs_http.client.request.call(null,G__31247));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq31241){
var G__31242 = cljs.core.first(seq31241);
var seq31241__$1 = cljs.core.next(seq31241);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__31242,seq31241__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31258 = arguments.length;
var i__7900__auto___31259 = (0);
while(true){
if((i__7900__auto___31259 < len__7899__auto___31258)){
args__7906__auto__.push((arguments[i__7900__auto___31259]));

var G__31260 = (i__7900__auto___31259 + (1));
i__7900__auto___31259 = G__31260;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31253){
var vec__31254 = p__31253;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31254,(0),null);
var G__31257 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__31257) : cljs_http.client.request.call(null,G__31257));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq31251){
var G__31252 = cljs.core.first(seq31251);
var seq31251__$1 = cljs.core.next(seq31251);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__31252,seq31251__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31268 = arguments.length;
var i__7900__auto___31269 = (0);
while(true){
if((i__7900__auto___31269 < len__7899__auto___31268)){
args__7906__auto__.push((arguments[i__7900__auto___31269]));

var G__31270 = (i__7900__auto___31269 + (1));
i__7900__auto___31269 = G__31270;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31263){
var vec__31264 = p__31263;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31264,(0),null);
var G__31267 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__31267) : cljs_http.client.request.call(null,G__31267));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq31261){
var G__31262 = cljs.core.first(seq31261);
var seq31261__$1 = cljs.core.next(seq31261);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__31262,seq31261__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7906__auto__ = [];
var len__7899__auto___31278 = arguments.length;
var i__7900__auto___31279 = (0);
while(true){
if((i__7900__auto___31279 < len__7899__auto___31278)){
args__7906__auto__.push((arguments[i__7900__auto___31279]));

var G__31280 = (i__7900__auto___31279 + (1));
i__7900__auto___31279 = G__31280;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31273){
var vec__31274 = p__31273;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31274,(0),null);
var G__31277 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__31277) : cljs_http.client.request.call(null,G__31277));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq31271){
var G__31272 = cljs.core.first(seq31271);
var seq31271__$1 = cljs.core.next(seq31271);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__31272,seq31271__$1);
});

