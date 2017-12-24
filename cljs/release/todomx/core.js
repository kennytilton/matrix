// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('todomx.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('tiltontec.model.core');
goog.require('tiltontec.tag.html');
goog.require('todomx.matrix');
goog.require('example.gentle_intro');
goog.require('todomx.ticktock');
goog.require('todomx.startwatch');
goog.require('ajax.core');
goog.require('taoensso.tufte');
cljs.core.enable_console_print_BANG_();
taoensso.tufte.add_basic_println_handler_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var root_34501 = goog.dom.getElement("tagroot");
var app_matrix_34502 = todomx.matrix.matrix_build_BANG_();
var app_dom_34503 = (function (){var _STAR_tag_trace_STAR_34500 = tiltontec.tag.html._STAR_tag_trace_STAR_;
tiltontec.tag.html._STAR_tag_trace_STAR_ = null;

try{return tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.md_get(app_matrix_34502,cljs.core.cst$kw$mx_DASH_dom));
}finally {tiltontec.tag.html._STAR_tag_trace_STAR_ = _STAR_tag_trace_STAR_34500;
}})();
root_34501.innerHTML = null;

goog.dom.appendChild(root_34501,app_dom_34503);

var temp__4657__auto___34504 = tiltontec.model.core.md_get(app_matrix_34502,cljs.core.cst$kw$router_DASH_starter);
if(cljs.core.truth_(temp__4657__auto___34504)){
var route_starter_34505 = temp__4657__auto___34504;
(route_starter_34505.cljs$core$IFn$_invoke$arity$0 ? route_starter_34505.cljs$core$IFn$_invoke$arity$0() : route_starter_34505.call(null));
} else {
}
