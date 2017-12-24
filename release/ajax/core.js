// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort(this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27934 = arguments.length;
var i__7900__auto___27935 = (0);
while(true){
if((i__7900__auto___27935 < len__7899__auto___27934)){
args__7906__auto__.push((arguments[i__7900__auto___27935]));

var G__27936 = (i__7900__auto___27935 + (1));
i__7900__auto___27935 = G__27936;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27615__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"GET",(((f__27615__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27615__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq27932){
var G__27933 = cljs.core.first(seq27932);
var seq27932__$1 = cljs.core.next(seq27932);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__27933,seq27932__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27939 = arguments.length;
var i__7900__auto___27940 = (0);
while(true){
if((i__7900__auto___27940 < len__7899__auto___27939)){
args__7906__auto__.push((arguments[i__7900__auto___27940]));

var G__27941 = (i__7900__auto___27940 + (1));
i__7900__auto___27940 = G__27941;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27615__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"HEAD",(((f__27615__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27615__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq27937){
var G__27938 = cljs.core.first(seq27937);
var seq27937__$1 = cljs.core.next(seq27937);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__27938,seq27937__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27944 = arguments.length;
var i__7900__auto___27945 = (0);
while(true){
if((i__7900__auto___27945 < len__7899__auto___27944)){
args__7906__auto__.push((arguments[i__7900__auto___27945]));

var G__27946 = (i__7900__auto___27945 + (1));
i__7900__auto___27945 = G__27946;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27615__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"POST",(((f__27615__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27615__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq27942){
var G__27943 = cljs.core.first(seq27942);
var seq27942__$1 = cljs.core.next(seq27942);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__27943,seq27942__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27949 = arguments.length;
var i__7900__auto___27950 = (0);
while(true){
if((i__7900__auto___27950 < len__7899__auto___27949)){
args__7906__auto__.push((arguments[i__7900__auto___27950]));

var G__27951 = (i__7900__auto___27950 + (1));
i__7900__auto___27950 = G__27951;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27615__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PUT",(((f__27615__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27615__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq27947){
var G__27948 = cljs.core.first(seq27947);
var seq27947__$1 = cljs.core.next(seq27947);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__27948,seq27947__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27954 = arguments.length;
var i__7900__auto___27955 = (0);
while(true){
if((i__7900__auto___27955 < len__7899__auto___27954)){
args__7906__auto__.push((arguments[i__7900__auto___27955]));

var G__27956 = (i__7900__auto___27955 + (1));
i__7900__auto___27955 = G__27956;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27615__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"DELETE",(((f__27615__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27615__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq27952){
var G__27953 = cljs.core.first(seq27952);
var seq27952__$1 = cljs.core.next(seq27952);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__27953,seq27952__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27959 = arguments.length;
var i__7900__auto___27960 = (0);
while(true){
if((i__7900__auto___27960 < len__7899__auto___27959)){
args__7906__auto__.push((arguments[i__7900__auto___27960]));

var G__27961 = (i__7900__auto___27960 + (1));
i__7900__auto___27960 = G__27961;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27615__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"OPTIONS",(((f__27615__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27615__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq27957){
var G__27958 = cljs.core.first(seq27957);
var seq27957__$1 = cljs.core.next(seq27957);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__27958,seq27957__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27964 = arguments.length;
var i__7900__auto___27965 = (0);
while(true){
if((i__7900__auto___27965 < len__7899__auto___27964)){
args__7906__auto__.push((arguments[i__7900__auto___27965]));

var G__27966 = (i__7900__auto___27965 + (1));
i__7900__auto___27965 = G__27966;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27615__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"TRACE",(((f__27615__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27615__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq27962){
var G__27963 = cljs.core.first(seq27962);
var seq27962__$1 = cljs.core.next(seq27962);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__27963,seq27962__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27969 = arguments.length;
var i__7900__auto___27970 = (0);
while(true){
if((i__7900__auto___27970 < len__7899__auto___27969)){
args__7906__auto__.push((arguments[i__7900__auto___27970]));

var G__27971 = (i__7900__auto___27970 + (1));
i__7900__auto___27970 = G__27971;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27615__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PATCH",(((f__27615__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27615__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq27967){
var G__27968 = cljs.core.first(seq27967);
var seq27967__$1 = cljs.core.next(seq27967);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__27968,seq27967__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27974 = arguments.length;
var i__7900__auto___27975 = (0);
while(true){
if((i__7900__auto___27975 < len__7899__auto___27974)){
args__7906__auto__.push((arguments[i__7900__auto___27975]));

var G__27976 = (i__7900__auto___27975 + (1));
i__7900__auto___27975 = G__27976;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27615__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PURGE",(((f__27615__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27615__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq27972){
var G__27973 = cljs.core.first(seq27972);
var seq27972__$1 = cljs.core.next(seq27972);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__27973,seq27972__$1);
});

