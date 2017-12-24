// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__11796){
var vec__11797 = p__11796;
var k = cljs.core.nth.call(null,vec__11797,(0),null);
var v = cljs.core.nth.call(null,vec__11797,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__11800 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__11800)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__11800)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__11800)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__11800)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__11800)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__11800)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11800)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__11801){
var map__11802 = p__11801;
var map__11802__$1 = ((((!((map__11802 == null)))?((((map__11802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11802):map__11802);
var request = map__11802__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__6774__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__11804 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__11804,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__11804,response_type);

G__11804.setTimeoutInterval(timeout);

G__11804.setWithCredentials(send_credentials);

return G__11804;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__11805){
var map__11806 = p__11805;
var map__11806__$1 = ((((!((map__11806 == null)))?((((map__11806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11806):map__11806);
var request = map__11806__$1;
var request_method = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__6774__auto__ = request_method;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__11806,map__11806__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__11806,map__11806__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_11830 = ((function (channel,request_url,method,headers__$1,xhr,map__11806,map__11806__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__11806,map__11806__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__11808_11831 = xhr;
G__11808_11831.setProgressEventsEnabled(true);

G__11808_11831.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_11830,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__11808_11831.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_11830,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__9887__auto___11832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___11832,channel,request_url,method,headers__$1,xhr,map__11806,map__11806__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___11832,channel,request_url,method,headers__$1,xhr,map__11806,map__11806__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_11819){
var state_val_11820 = (state_11819[(1)]);
if((state_val_11820 === (1))){
var state_11819__$1 = state_11819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11819__$1,(2),cancel);
} else {
if((state_val_11820 === (2))){
var inst_11810 = (state_11819[(2)]);
var inst_11811 = xhr.isComplete();
var inst_11812 = cljs.core.not.call(null,inst_11811);
var state_11819__$1 = (function (){var statearr_11821 = state_11819;
(statearr_11821[(7)] = inst_11810);

return statearr_11821;
})();
if(inst_11812){
var statearr_11822_11833 = state_11819__$1;
(statearr_11822_11833[(1)] = (3));

} else {
var statearr_11823_11834 = state_11819__$1;
(statearr_11823_11834[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (3))){
var inst_11814 = xhr.abort();
var state_11819__$1 = state_11819;
var statearr_11824_11835 = state_11819__$1;
(statearr_11824_11835[(2)] = inst_11814);

(statearr_11824_11835[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (4))){
var state_11819__$1 = state_11819;
var statearr_11825_11836 = state_11819__$1;
(statearr_11825_11836[(2)] = null);

(statearr_11825_11836[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (5))){
var inst_11817 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11819__$1,inst_11817);
} else {
return null;
}
}
}
}
}
});})(c__9887__auto___11832,channel,request_url,method,headers__$1,xhr,map__11806,map__11806__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__9799__auto__,c__9887__auto___11832,channel,request_url,method,headers__$1,xhr,map__11806,map__11806__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__9800__auto__ = null;
var cljs_http$core$xhr_$_state_machine__9800__auto____0 = (function (){
var statearr_11826 = [null,null,null,null,null,null,null,null];
(statearr_11826[(0)] = cljs_http$core$xhr_$_state_machine__9800__auto__);

(statearr_11826[(1)] = (1));

return statearr_11826;
});
var cljs_http$core$xhr_$_state_machine__9800__auto____1 = (function (state_11819){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11827){if((e11827 instanceof Object)){
var ex__9803__auto__ = e11827;
var statearr_11828_11837 = state_11819;
(statearr_11828_11837[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11838 = state_11819;
state_11819 = G__11838;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__9800__auto__ = function(state_11819){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__9800__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__9800__auto____1.call(this,state_11819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__9800__auto____0;
cljs_http$core$xhr_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__9800__auto____1;
return cljs_http$core$xhr_$_state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___11832,channel,request_url,method,headers__$1,xhr,map__11806,map__11806__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__9889__auto__ = (function (){var statearr_11829 = f__9888__auto__.call(null);
(statearr_11829[(6)] = c__9887__auto___11832);

return statearr_11829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___11832,channel,request_url,method,headers__$1,xhr,map__11806,map__11806__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__11839){
var map__11840 = p__11839;
var map__11840__$1 = ((((!((map__11840 == null)))?((((map__11840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11840):map__11840);
var request = map__11840__$1;
var timeout = cljs.core.get.call(null,map__11840__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__11840__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__11840__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__11840__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_11853 = jsonp.send(null,((function (channel,jsonp,map__11840,map__11840__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__11840,map__11840__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__11840,map__11840__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__11840,map__11840__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_11853], null));

if(cljs.core.truth_(cancel)){
var c__9887__auto___11854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9887__auto___11854,req_11853,channel,jsonp,map__11840,map__11840__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__9888__auto__ = (function (){var switch__9799__auto__ = ((function (c__9887__auto___11854,req_11853,channel,jsonp,map__11840,map__11840__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_11846){
var state_val_11847 = (state_11846[(1)]);
if((state_val_11847 === (1))){
var state_11846__$1 = state_11846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11846__$1,(2),cancel);
} else {
if((state_val_11847 === (2))){
var inst_11843 = (state_11846[(2)]);
var inst_11844 = jsonp.cancel(req_11853);
var state_11846__$1 = (function (){var statearr_11848 = state_11846;
(statearr_11848[(7)] = inst_11843);

return statearr_11848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11846__$1,inst_11844);
} else {
return null;
}
}
});})(c__9887__auto___11854,req_11853,channel,jsonp,map__11840,map__11840__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__9799__auto__,c__9887__auto___11854,req_11853,channel,jsonp,map__11840,map__11840__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__9800__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__9800__auto____0 = (function (){
var statearr_11849 = [null,null,null,null,null,null,null,null];
(statearr_11849[(0)] = cljs_http$core$jsonp_$_state_machine__9800__auto__);

(statearr_11849[(1)] = (1));

return statearr_11849;
});
var cljs_http$core$jsonp_$_state_machine__9800__auto____1 = (function (state_11846){
while(true){
var ret_value__9801__auto__ = (function (){try{while(true){
var result__9802__auto__ = switch__9799__auto__.call(null,state_11846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9802__auto__;
}
break;
}
}catch (e11850){if((e11850 instanceof Object)){
var ex__9803__auto__ = e11850;
var statearr_11851_11855 = state_11846;
(statearr_11851_11855[(5)] = ex__9803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11856 = state_11846;
state_11846 = G__11856;
continue;
} else {
return ret_value__9801__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__9800__auto__ = function(state_11846){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__9800__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__9800__auto____1.call(this,state_11846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__9800__auto____0;
cljs_http$core$jsonp_$_state_machine__9800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__9800__auto____1;
return cljs_http$core$jsonp_$_state_machine__9800__auto__;
})()
;})(switch__9799__auto__,c__9887__auto___11854,req_11853,channel,jsonp,map__11840,map__11840__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__9889__auto__ = (function (){var statearr_11852 = f__9888__auto__.call(null);
(statearr_11852[(6)] = c__9887__auto___11854);

return statearr_11852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9889__auto__);
});})(c__9887__auto___11854,req_11853,channel,jsonp,map__11840,map__11840__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__11857){
var map__11858 = p__11857;
var map__11858__$1 = ((((!((map__11858 == null)))?((((map__11858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11858):map__11858);
var request = map__11858__$1;
var request_method = cljs.core.get.call(null,map__11858__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map