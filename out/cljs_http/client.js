// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
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
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__11863_SHARP_,p2__11862_SHARP_){
var vec__11864 = clojure.string.split.call(null,p2__11862_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__11864,(0),null);
var v = cljs.core.nth.call(null,vec__11864,(1),null);
return cljs.core.assoc.call(null,p1__11863_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__11867_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__11867_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__11868){
var vec__11869 = p__11868;
var k = cljs.core.nth.call(null,vec__11869,(0),null);
var v = cljs.core.nth.call(null,vec__11869,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__11872_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11872_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6762__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__6762__auto__){
var and__6762__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__6762__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6762__auto____$1;
}
} else {
return and__6762__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__11873_SHARP_){
return cljs_http.client.decode_body.call(null,p1__11873_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7906__auto__ = [];
var len__7899__auto___11880 = arguments.length;
var i__7900__auto___11881 = (0);
while(true){
if((i__7900__auto___11881 < len__7899__auto___11880)){
args__7906__auto__.push((arguments[i__7900__auto___11881]));

var G__11882 = (i__7900__auto___11881 + (1));
i__7900__auto___11881 = G__11882;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11876){
var vec__11877 = p__11876;
var default_headers = cljs.core.nth.call(null,vec__11877,(0),null);
return ((function (vec__11877,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6774__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__11877,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq11874){
var G__11875 = cljs.core.first.call(null,seq11874);
var seq11874__$1 = cljs.core.next.call(null,seq11874);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__11875,seq11874__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7906__auto__ = [];
var len__7899__auto___11889 = arguments.length;
var i__7900__auto___11890 = (0);
while(true){
if((i__7900__auto___11890 < len__7899__auto___11889)){
args__7906__auto__.push((arguments[i__7900__auto___11890]));

var G__11891 = (i__7900__auto___11890 + (1));
i__7900__auto___11890 = G__11891;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11885){
var vec__11886 = p__11885;
var accept = cljs.core.nth.call(null,vec__11886,(0),null);
return ((function (vec__11886,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6774__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__11886,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq11883){
var G__11884 = cljs.core.first.call(null,seq11883);
var seq11883__$1 = cljs.core.next.call(null,seq11883);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__11884,seq11883__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7906__auto__ = [];
var len__7899__auto___11898 = arguments.length;
var i__7900__auto___11899 = (0);
while(true){
if((i__7900__auto___11899 < len__7899__auto___11898)){
args__7906__auto__.push((arguments[i__7900__auto___11899]));

var G__11900 = (i__7900__auto___11899 + (1));
i__7900__auto___11899 = G__11900;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11894){
var vec__11895 = p__11894;
var content_type = cljs.core.nth.call(null,vec__11895,(0),null);
return ((function (vec__11895,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6774__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__11895,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq11892){
var G__11893 = cljs.core.first.call(null,seq11892);
var seq11892__$1 = cljs.core.next.call(null,seq11892);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__11893,seq11892__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__11901 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__11901__$1 = ((((!((map__11901 == null)))?((((map__11901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11901):map__11901);
var encoding = cljs.core.get.call(null,map__11901__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__11901__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__11905 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__11905__$1 = ((((!((map__11905 == null)))?((((map__11905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11905):map__11905);
var decoding = cljs.core.get.call(null,map__11905__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__11905__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__11905,map__11905__$1,decoding,decoding_opts){
return (function (p1__11903_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__11903_SHARP_,decoding,decoding_opts);
});})(map__11905,map__11905__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__11905,map__11905__$1,decoding,decoding_opts,transit_decode){
return (function (p1__11904_SHARP_){
return cljs_http.client.decode_body.call(null,p1__11904_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__11905,map__11905__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__11907_SHARP_){
return cljs_http.client.decode_body.call(null,p1__11907_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__11908){
var map__11909 = p__11908;
var map__11909__$1 = ((((!((map__11909 == null)))?((((map__11909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11909):map__11909);
var req = map__11909__$1;
var query_params = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__11911){
var map__11912 = p__11911;
var map__11912__$1 = ((((!((map__11912 == null)))?((((map__11912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11912):map__11912);
var request = map__11912__$1;
var form_params = cljs.core.get.call(null,map__11912__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__11912__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__11912__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6762__auto__ = form_params;
if(cljs.core.truth_(and__6762__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6762__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__11914_11924 = cljs.core.seq.call(null,params);
var chunk__11915_11925 = null;
var count__11916_11926 = (0);
var i__11917_11927 = (0);
while(true){
if((i__11917_11927 < count__11916_11926)){
var vec__11918_11928 = cljs.core._nth.call(null,chunk__11915_11925,i__11917_11927);
var k_11929 = cljs.core.nth.call(null,vec__11918_11928,(0),null);
var v_11930 = cljs.core.nth.call(null,vec__11918_11928,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_11930)){
form_data.append(cljs.core.name.call(null,k_11929),cljs.core.first.call(null,v_11930),cljs.core.second.call(null,v_11930));
} else {
form_data.append(cljs.core.name.call(null,k_11929),v_11930);
}

var G__11931 = seq__11914_11924;
var G__11932 = chunk__11915_11925;
var G__11933 = count__11916_11926;
var G__11934 = (i__11917_11927 + (1));
seq__11914_11924 = G__11931;
chunk__11915_11925 = G__11932;
count__11916_11926 = G__11933;
i__11917_11927 = G__11934;
continue;
} else {
var temp__4657__auto___11935 = cljs.core.seq.call(null,seq__11914_11924);
if(temp__4657__auto___11935){
var seq__11914_11936__$1 = temp__4657__auto___11935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11914_11936__$1)){
var c__7594__auto___11937 = cljs.core.chunk_first.call(null,seq__11914_11936__$1);
var G__11938 = cljs.core.chunk_rest.call(null,seq__11914_11936__$1);
var G__11939 = c__7594__auto___11937;
var G__11940 = cljs.core.count.call(null,c__7594__auto___11937);
var G__11941 = (0);
seq__11914_11924 = G__11938;
chunk__11915_11925 = G__11939;
count__11916_11926 = G__11940;
i__11917_11927 = G__11941;
continue;
} else {
var vec__11921_11942 = cljs.core.first.call(null,seq__11914_11936__$1);
var k_11943 = cljs.core.nth.call(null,vec__11921_11942,(0),null);
var v_11944 = cljs.core.nth.call(null,vec__11921_11942,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_11944)){
form_data.append(cljs.core.name.call(null,k_11943),cljs.core.first.call(null,v_11944),cljs.core.second.call(null,v_11944));
} else {
form_data.append(cljs.core.name.call(null,k_11943),v_11944);
}

var G__11945 = cljs.core.next.call(null,seq__11914_11936__$1);
var G__11946 = null;
var G__11947 = (0);
var G__11948 = (0);
seq__11914_11924 = G__11945;
chunk__11915_11925 = G__11946;
count__11916_11926 = G__11947;
i__11917_11927 = G__11948;
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
return (function (p__11949){
var map__11950 = p__11949;
var map__11950__$1 = ((((!((map__11950 == null)))?((((map__11950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11950):map__11950);
var request = map__11950__$1;
var multipart_params = cljs.core.get.call(null,map__11950__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__11950__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__6762__auto__ = multipart_params;
if(cljs.core.truth_(and__6762__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6762__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__11952_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__11952_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__11954){
var map__11955 = p__11954;
var map__11955__$1 = ((((!((map__11955 == null)))?((((map__11955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11955):map__11955);
var req = map__11955__$1;
var query_params = cljs.core.get.call(null,map__11955__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__11955,map__11955__$1,req,query_params){
return (function (p1__11953_SHARP_){
return cljs.core.merge.call(null,p1__11953_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__11955,map__11955__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7906__auto__ = [];
var len__7899__auto___11963 = arguments.length;
var i__7900__auto___11964 = (0);
while(true){
if((i__7900__auto___11964 < len__7899__auto___11963)){
args__7906__auto__.push((arguments[i__7900__auto___11964]));

var G__11965 = (i__7900__auto___11964 + (1));
i__7900__auto___11964 = G__11965;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11959){
var vec__11960 = p__11959;
var credentials = cljs.core.nth.call(null,vec__11960,(0),null);
return ((function (vec__11960,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6774__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__11960,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq11957){
var G__11958 = cljs.core.first.call(null,seq11957);
var seq11957__$1 = cljs.core.next.call(null,seq11957);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__11958,seq11957__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
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
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7906__auto__ = [];
var len__7899__auto___11972 = arguments.length;
var i__7900__auto___11973 = (0);
while(true){
if((i__7900__auto___11973 < len__7899__auto___11972)){
args__7906__auto__.push((arguments[i__7900__auto___11973]));

var G__11974 = (i__7900__auto___11973 + (1));
i__7900__auto___11973 = G__11974;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11968){
var vec__11969 = p__11968;
var req = cljs.core.nth.call(null,vec__11969,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq11966){
var G__11967 = cljs.core.first.call(null,seq11966);
var seq11966__$1 = cljs.core.next.call(null,seq11966);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__11967,seq11966__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7906__auto__ = [];
var len__7899__auto___11981 = arguments.length;
var i__7900__auto___11982 = (0);
while(true){
if((i__7900__auto___11982 < len__7899__auto___11981)){
args__7906__auto__.push((arguments[i__7900__auto___11982]));

var G__11983 = (i__7900__auto___11982 + (1));
i__7900__auto___11982 = G__11983;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11977){
var vec__11978 = p__11977;
var req = cljs.core.nth.call(null,vec__11978,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq11975){
var G__11976 = cljs.core.first.call(null,seq11975);
var seq11975__$1 = cljs.core.next.call(null,seq11975);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__11976,seq11975__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7906__auto__ = [];
var len__7899__auto___11990 = arguments.length;
var i__7900__auto___11991 = (0);
while(true){
if((i__7900__auto___11991 < len__7899__auto___11990)){
args__7906__auto__.push((arguments[i__7900__auto___11991]));

var G__11992 = (i__7900__auto___11991 + (1));
i__7900__auto___11991 = G__11992;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11986){
var vec__11987 = p__11986;
var req = cljs.core.nth.call(null,vec__11987,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq11984){
var G__11985 = cljs.core.first.call(null,seq11984);
var seq11984__$1 = cljs.core.next.call(null,seq11984);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__11985,seq11984__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7906__auto__ = [];
var len__7899__auto___11999 = arguments.length;
var i__7900__auto___12000 = (0);
while(true){
if((i__7900__auto___12000 < len__7899__auto___11999)){
args__7906__auto__.push((arguments[i__7900__auto___12000]));

var G__12001 = (i__7900__auto___12000 + (1));
i__7900__auto___12000 = G__12001;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11995){
var vec__11996 = p__11995;
var req = cljs.core.nth.call(null,vec__11996,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq11993){
var G__11994 = cljs.core.first.call(null,seq11993);
var seq11993__$1 = cljs.core.next.call(null,seq11993);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__11994,seq11993__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12008 = arguments.length;
var i__7900__auto___12009 = (0);
while(true){
if((i__7900__auto___12009 < len__7899__auto___12008)){
args__7906__auto__.push((arguments[i__7900__auto___12009]));

var G__12010 = (i__7900__auto___12009 + (1));
i__7900__auto___12009 = G__12010;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12004){
var vec__12005 = p__12004;
var req = cljs.core.nth.call(null,vec__12005,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq12002){
var G__12003 = cljs.core.first.call(null,seq12002);
var seq12002__$1 = cljs.core.next.call(null,seq12002);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__12003,seq12002__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12017 = arguments.length;
var i__7900__auto___12018 = (0);
while(true){
if((i__7900__auto___12018 < len__7899__auto___12017)){
args__7906__auto__.push((arguments[i__7900__auto___12018]));

var G__12019 = (i__7900__auto___12018 + (1));
i__7900__auto___12018 = G__12019;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12013){
var vec__12014 = p__12013;
var req = cljs.core.nth.call(null,vec__12014,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq12011){
var G__12012 = cljs.core.first.call(null,seq12011);
var seq12011__$1 = cljs.core.next.call(null,seq12011);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__12012,seq12011__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12026 = arguments.length;
var i__7900__auto___12027 = (0);
while(true){
if((i__7900__auto___12027 < len__7899__auto___12026)){
args__7906__auto__.push((arguments[i__7900__auto___12027]));

var G__12028 = (i__7900__auto___12027 + (1));
i__7900__auto___12027 = G__12028;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12022){
var vec__12023 = p__12022;
var req = cljs.core.nth.call(null,vec__12023,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq12020){
var G__12021 = cljs.core.first.call(null,seq12020);
var seq12020__$1 = cljs.core.next.call(null,seq12020);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__12021,seq12020__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12035 = arguments.length;
var i__7900__auto___12036 = (0);
while(true){
if((i__7900__auto___12036 < len__7899__auto___12035)){
args__7906__auto__.push((arguments[i__7900__auto___12036]));

var G__12037 = (i__7900__auto___12036 + (1));
i__7900__auto___12036 = G__12037;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12031){
var vec__12032 = p__12031;
var req = cljs.core.nth.call(null,vec__12032,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq12029){
var G__12030 = cljs.core.first.call(null,seq12029);
var seq12029__$1 = cljs.core.next.call(null,seq12029);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__12030,seq12029__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7906__auto__ = [];
var len__7899__auto___12044 = arguments.length;
var i__7900__auto___12045 = (0);
while(true){
if((i__7900__auto___12045 < len__7899__auto___12044)){
args__7906__auto__.push((arguments[i__7900__auto___12045]));

var G__12046 = (i__7900__auto___12045 + (1));
i__7900__auto___12045 = G__12046;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12040){
var vec__12041 = p__12040;
var req = cljs.core.nth.call(null,vec__12041,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq12038){
var G__12039 = cljs.core.first.call(null,seq12038);
var seq12038__$1 = cljs.core.next.call(null,seq12038);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__12039,seq12038__$1);
});


//# sourceMappingURL=client.js.map