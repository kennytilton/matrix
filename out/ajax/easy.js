// Compiled by ClojureScript 1.9.671 {}
goog.provide('ajax.easy');
goog.require('cljs.core');
goog.require('ajax.simple');
goog.require('ajax.transit');
goog.require('ajax.json');
goog.require('ajax.ring');
goog.require('ajax.url');
goog.require('ajax.formats');
ajax.easy.default_formats = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.transit.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.transit.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.json.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.formats.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.formats.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.formats.raw_response_format], null)], null));
ajax.easy.detect_response_format = (function ajax$easy$detect_response_format(var_args){
var G__9303 = arguments.length;
switch (G__9303) {
case 0:
return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.formats.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.deref.call(null,ajax.easy.default_formats)], null));
});

ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.formats.detect_response_format.call(null,opts);
});

ajax.easy.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.easy.keyword_request_format = (function ajax$easy$keyword_request_format(format,format_params){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.transit.transit_request_format.call(null,format_params);
} else {
var G__9305 = format;
var G__9305__$1 = (((G__9305 instanceof cljs.core.Keyword))?G__9305.fqn:null);
switch (G__9305__$1) {
case "transit":
return ajax.transit.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.json.json_request_format.call(null);

break;
case "text":
return ajax.formats.text_request_format.call(null);

break;
case "raw":
return ajax.url.url_request_format.call(null,format_params);

break;
case "url":
return ajax.url.url_request_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
});
ajax.easy.keyword_response_format_element = (function ajax$easy$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax.easy.keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.easy.detect_response_format.call(null);
} else {
var G__9307 = format;
var G__9307__$1 = (((G__9307 instanceof cljs.core.Keyword))?G__9307.fqn:null);
switch (G__9307__$1) {
case "transit":
return ajax.transit.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.json.json_response_format.call(null,format_params);

break;
case "text":
return ajax.formats.text_response_format.call(null);

break;
case "ring":
return ajax.ring.ring_response_format.call(null);

break;
case "raw":
return ajax.formats.raw_response_format.call(null);

break;
case "detect":
return ajax.easy.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.easy.keyword_response_format = (function ajax$easy$keyword_response_format(format,format_params){

if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__9309_SHARP_){
return ajax.easy.keyword_response_format_element.call(null,p1__9309_SHARP_,format_params);
}),format));
} else {
return ajax.easy.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.easy.print_response = (function ajax$easy$print_response(response){
return cljs.core.println.call(null,"CLJS-AJAX response:",response);
});
/**
 * This gets called if you forget to attach a handler to an easy
 *   API function.
 */
ajax.easy.default_handler = cljs.core.atom.call(null,ajax.easy.print_response);
ajax.easy.print_error_response = (function ajax$easy$print_error_response(response){
if(typeof console !== 'undefined'){
return console.error(response);
} else {
if(typeof window !== 'undefined'){
return window.alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
} else {
return cljs.core.println.call(null,"CLJS-AJAX ERROR:",response);

}
}
});
/**
 * This will be called when errors occur if you don't supply
 * an error handler to the easy API functions. If you don't
 * want it writing errors to the console (or worse, flashing up
 * alerts), make sure you always handle errors.
 */
ajax.easy.default_error_handler = cljs.core.atom.call(null,ajax.easy.print_error_response);
/**
 * Converts easy API handlers to a `ajax-request` handler
 */
ajax.easy.transform_handler = (function ajax$easy$transform_handler(p__9310){
var map__9311 = p__9310;
var map__9311__$1 = ((((!((map__9311 == null)))?((((map__9311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9311):map__9311);
var handler = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var h = (function (){var or__6772__auto__ = handler;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return cljs.core.deref.call(null,ajax.easy.default_handler);
}
})();
var e = (function (){var or__6772__auto__ = error_handler;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return cljs.core.deref.call(null,ajax.easy.default_error_handler);
}
})();
return ((function (h,e,map__9311,map__9311__$1,handler,error_handler,finally$){
return (function ajax$easy$transform_handler_$_easy_handler(p__9313){
var vec__9314 = p__9313;
var ok = cljs.core.nth.call(null,vec__9314,(0),null);
var result = cljs.core.nth.call(null,vec__9314,(1),null);
(cljs.core.truth_(ok)?h:e).call(null,result);

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(h,e,map__9311,map__9311__$1,handler,error_handler,finally$))
});
ajax.easy.transform_opts = (function ajax$easy$transform_opts(p__9317){
var map__9318 = p__9317;
var map__9318__$1 = ((((!((map__9318 == null)))?((((map__9318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9318):map__9318);
var opts = map__9318__$1;
var method = cljs.core.get.call(null,map__9318__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__9318__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__9318__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__9318__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__9318__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__6772__auto__ = format;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return needs_format;
}
})())?ajax.easy.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.easy.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.easy.keyword_response_format.call(null,response_format,opts));
});
ajax.easy.easy_ajax_request = (function ajax$easy$easy_ajax_request(uri,method,opts){
return ajax.simple.ajax_request.call(null,ajax.easy.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});

//# sourceMappingURL=easy.js.map