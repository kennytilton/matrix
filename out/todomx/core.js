// Compiled by ClojureScript 1.9.671 {}
goog.provide('todomx.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('tiltontec.model.core');
goog.require('tiltontec.tag.html');
goog.require('todomx.matrix');
goog.require('example.gentle_intro');
goog.require('todomx.ticktock');
goog.require('todomx.startwatch');
goog.require('ajax.core');
goog.require('taoensso.tufte');
cljs.core.enable_console_print_BANG_.call(null);
taoensso.tufte.add_basic_println_handler_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var root_50825 = goog.dom.getElement("tagroot");
var app_matrix_50826 = todomx.matrix.matrix_build_BANG_.call(null);
var app_dom_50827 = (function (){var _STAR_tag_trace_STAR_50824 = tiltontec.tag.html._STAR_tag_trace_STAR_;
tiltontec.tag.html._STAR_tag_trace_STAR_ = null;

try{return tiltontec.tag.html.tag_dom_create.call(null,tiltontec.model.core.md_get.call(null,app_matrix_50826,new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107)));
}finally {tiltontec.tag.html._STAR_tag_trace_STAR_ = _STAR_tag_trace_STAR_50824;
}})();
root_50825.innerHTML = null;

goog.dom.appendChild(root_50825,app_dom_50827);

var temp__4657__auto___50828 = tiltontec.model.core.md_get.call(null,app_matrix_50826,new cljs.core.Keyword(null,"router-starter","router-starter",-629272961));
if(cljs.core.truth_(temp__4657__auto___50828)){
var route_starter_50829 = temp__4657__auto___50828;
route_starter_50829.call(null);
} else {
}

//# sourceMappingURL=core.js.map