// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__27789 = e.target.readyState;
var fexpr__27788 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__27788.cljs$core$IFn$_invoke$arity$1 ? fexpr__27788.cljs$core$IFn$_invoke$arity$1(G__27789) : fexpr__27788.call(null,G__27789));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27791,handler){
var map__27792 = p__27791;
var map__27792__$1 = ((((!((map__27792 == null)))?((((map__27792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27792):map__27792);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27792__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27792__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27792,map__27792__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27790_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__27790_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__27792,map__27792__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___27804 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___27804)){
var response_type_27805 = temp__4657__auto___27804;
this$__$1.responseType = cljs.core.name(response_type_27805);
} else {
}

var seq__27794_27806 = cljs.core.seq(headers);
var chunk__27795_27807 = null;
var count__27796_27808 = (0);
var i__27797_27809 = (0);
while(true){
if((i__27797_27809 < count__27796_27808)){
var vec__27798_27810 = chunk__27795_27807.cljs$core$IIndexed$_nth$arity$2(null,i__27797_27809);
var k_27811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27798_27810,(0),null);
var v_27812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27798_27810,(1),null);
this$__$1.setRequestHeader(k_27811,v_27812);

var G__27813 = seq__27794_27806;
var G__27814 = chunk__27795_27807;
var G__27815 = count__27796_27808;
var G__27816 = (i__27797_27809 + (1));
seq__27794_27806 = G__27813;
chunk__27795_27807 = G__27814;
count__27796_27808 = G__27815;
i__27797_27809 = G__27816;
continue;
} else {
var temp__4657__auto___27817 = cljs.core.seq(seq__27794_27806);
if(temp__4657__auto___27817){
var seq__27794_27818__$1 = temp__4657__auto___27817;
if(cljs.core.chunked_seq_QMARK_(seq__27794_27818__$1)){
var c__7594__auto___27819 = cljs.core.chunk_first(seq__27794_27818__$1);
var G__27820 = cljs.core.chunk_rest(seq__27794_27818__$1);
var G__27821 = c__7594__auto___27819;
var G__27822 = cljs.core.count(c__7594__auto___27819);
var G__27823 = (0);
seq__27794_27806 = G__27820;
chunk__27795_27807 = G__27821;
count__27796_27808 = G__27822;
i__27797_27809 = G__27823;
continue;
} else {
var vec__27801_27824 = cljs.core.first(seq__27794_27818__$1);
var k_27825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27801_27824,(0),null);
var v_27826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27801_27824,(1),null);
this$__$1.setRequestHeader(k_27825,v_27826);

var G__27827 = cljs.core.next(seq__27794_27818__$1);
var G__27828 = null;
var G__27829 = (0);
var G__27830 = (0);
seq__27794_27806 = G__27827;
chunk__27795_27807 = G__27828;
count__27796_27808 = G__27829;
i__27797_27809 = G__27830;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6774__auto__ = body;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
