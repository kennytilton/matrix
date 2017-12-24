// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (function (){var fexpr__31003 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__31003.cljs$core$IFn$_invoke$arity$1 ? fexpr__31003.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__31003.call(null,channel));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__31004){
var vec__31005 = p__31004;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31005,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__31008 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__31008)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__31008)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__31008)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__31008)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__31008)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31008)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31008)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__31009){
var map__31010 = p__31009;
var map__31010__$1 = ((((!((map__31010 == null)))?((((map__31010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31010):map__31010);
var request = map__31010__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31010__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31010__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31010__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6774__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__31012 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__31012,default_headers);

cljs_http.core.apply_response_type_BANG_(G__31012,response_type);

G__31012.setTimeoutInterval(timeout);

G__31012.setWithCredentials(send_credentials);

return G__31012;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__31013){
var map__31014 = p__31013;
var map__31014__$1 = ((((!((map__31014 == null)))?((((map__31014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31014):map__31014);
var request = map__31014__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__6774__auto__ = request_method;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__31014,map__31014__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__31016 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__31016) : cljs_http.core.error_kw.call(null,G__31016));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__31014,map__31014__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_31039 = ((function (channel,request_url,method,headers__$1,xhr,map__31014,map__31014__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__31014,map__31014__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__31017_31040 = xhr;
G__31017_31040.setProgressEventsEnabled(true);

G__31017_31040.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_31039,cljs.core.cst$kw$upload));

G__31017_31040.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_31039,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__29090__auto___31041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___31041,channel,request_url,method,headers__$1,xhr,map__31014,map__31014__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___31041,channel,request_url,method,headers__$1,xhr,map__31014,map__31014__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_31028){
var state_val_31029 = (state_31028[(1)]);
if((state_val_31029 === (1))){
var state_31028__$1 = state_31028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31028__$1,(2),cancel);
} else {
if((state_val_31029 === (2))){
var inst_31019 = (state_31028[(2)]);
var inst_31020 = xhr.isComplete();
var inst_31021 = cljs.core.not(inst_31020);
var state_31028__$1 = (function (){var statearr_31030 = state_31028;
(statearr_31030[(7)] = inst_31019);

return statearr_31030;
})();
if(inst_31021){
var statearr_31031_31042 = state_31028__$1;
(statearr_31031_31042[(1)] = (3));

} else {
var statearr_31032_31043 = state_31028__$1;
(statearr_31032_31043[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31029 === (3))){
var inst_31023 = xhr.abort();
var state_31028__$1 = state_31028;
var statearr_31033_31044 = state_31028__$1;
(statearr_31033_31044[(2)] = inst_31023);

(statearr_31033_31044[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31029 === (4))){
var state_31028__$1 = state_31028;
var statearr_31034_31045 = state_31028__$1;
(statearr_31034_31045[(2)] = null);

(statearr_31034_31045[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31029 === (5))){
var inst_31026 = (state_31028[(2)]);
var state_31028__$1 = state_31028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31028__$1,inst_31026);
} else {
return null;
}
}
}
}
}
});})(c__29090__auto___31041,channel,request_url,method,headers__$1,xhr,map__31014,map__31014__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__28990__auto__,c__29090__auto___31041,channel,request_url,method,headers__$1,xhr,map__31014,map__31014__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__28991__auto__ = null;
var cljs_http$core$xhr_$_state_machine__28991__auto____0 = (function (){
var statearr_31035 = [null,null,null,null,null,null,null,null];
(statearr_31035[(0)] = cljs_http$core$xhr_$_state_machine__28991__auto__);

(statearr_31035[(1)] = (1));

return statearr_31035;
});
var cljs_http$core$xhr_$_state_machine__28991__auto____1 = (function (state_31028){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_31028);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e31036){if((e31036 instanceof Object)){
var ex__28994__auto__ = e31036;
var statearr_31037_31046 = state_31028;
(statearr_31037_31046[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31028);

return cljs.core.cst$kw$recur;
} else {
throw e31036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__31047 = state_31028;
state_31028 = G__31047;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__28991__auto__ = function(state_31028){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__28991__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__28991__auto____1.call(this,state_31028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__28991__auto____0;
cljs_http$core$xhr_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__28991__auto____1;
return cljs_http$core$xhr_$_state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___31041,channel,request_url,method,headers__$1,xhr,map__31014,map__31014__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__29092__auto__ = (function (){var statearr_31038 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_31038[(6)] = c__29090__auto___31041);

return statearr_31038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___31041,channel,request_url,method,headers__$1,xhr,map__31014,map__31014__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__31048){
var map__31049 = p__31048;
var map__31049__$1 = ((((!((map__31049 == null)))?((((map__31049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31049):map__31049);
var request = map__31049__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31049__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31049__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31049__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31049__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_31062 = jsonp.send(null,((function (channel,jsonp,map__31049,map__31049__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__31049,map__31049__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__31049,map__31049__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__31049,map__31049__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_31062], null));

if(cljs.core.truth_(cancel)){
var c__29090__auto___31063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29090__auto___31063,req_31062,channel,jsonp,map__31049,map__31049__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__29091__auto__ = (function (){var switch__28990__auto__ = ((function (c__29090__auto___31063,req_31062,channel,jsonp,map__31049,map__31049__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_31055){
var state_val_31056 = (state_31055[(1)]);
if((state_val_31056 === (1))){
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31055__$1,(2),cancel);
} else {
if((state_val_31056 === (2))){
var inst_31052 = (state_31055[(2)]);
var inst_31053 = jsonp.cancel(req_31062);
var state_31055__$1 = (function (){var statearr_31057 = state_31055;
(statearr_31057[(7)] = inst_31052);

return statearr_31057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31055__$1,inst_31053);
} else {
return null;
}
}
});})(c__29090__auto___31063,req_31062,channel,jsonp,map__31049,map__31049__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__28990__auto__,c__29090__auto___31063,req_31062,channel,jsonp,map__31049,map__31049__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__28991__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__28991__auto____0 = (function (){
var statearr_31058 = [null,null,null,null,null,null,null,null];
(statearr_31058[(0)] = cljs_http$core$jsonp_$_state_machine__28991__auto__);

(statearr_31058[(1)] = (1));

return statearr_31058;
});
var cljs_http$core$jsonp_$_state_machine__28991__auto____1 = (function (state_31055){
while(true){
var ret_value__28992__auto__ = (function (){try{while(true){
var result__28993__auto__ = switch__28990__auto__(state_31055);
if(cljs.core.keyword_identical_QMARK_(result__28993__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28993__auto__;
}
break;
}
}catch (e31059){if((e31059 instanceof Object)){
var ex__28994__auto__ = e31059;
var statearr_31060_31064 = state_31055;
(statearr_31060_31064[(5)] = ex__28994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31055);

return cljs.core.cst$kw$recur;
} else {
throw e31059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28992__auto__,cljs.core.cst$kw$recur)){
var G__31065 = state_31055;
state_31055 = G__31065;
continue;
} else {
return ret_value__28992__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__28991__auto__ = function(state_31055){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__28991__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__28991__auto____1.call(this,state_31055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__28991__auto____0;
cljs_http$core$jsonp_$_state_machine__28991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__28991__auto____1;
return cljs_http$core$jsonp_$_state_machine__28991__auto__;
})()
;})(switch__28990__auto__,c__29090__auto___31063,req_31062,channel,jsonp,map__31049,map__31049__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__29092__auto__ = (function (){var statearr_31061 = (f__29091__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29091__auto__.cljs$core$IFn$_invoke$arity$0() : f__29091__auto__.call(null));
(statearr_31061[(6)] = c__29090__auto___31063);

return statearr_31061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29092__auto__);
});})(c__29090__auto___31063,req_31062,channel,jsonp,map__31049,map__31049__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__31066){
var map__31067 = p__31066;
var map__31067__$1 = ((((!((map__31067 == null)))?((((map__31067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31067):map__31067);
var request = map__31067__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31067__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
