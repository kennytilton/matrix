// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('todomx.matrix');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('bide.core');
goog.require('taoensso.tufte');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.tag.html');
goog.require('tiltontec.tag.gen');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.editor.focus');
goog.require('goog.dom.selection');
goog.require('goog.events.Event');
goog.require('goog.dom.forms');
goog.require('todomx.todo');





todomx.matrix.matrix_build_BANG_ = (function todomx$matrix$matrix_build_BANG_(){
return cljs.core.reset_BANG_(tiltontec.model.core.matrix,tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$todomx$matrix_SLASH_todoApp,cljs.core.cst$kw$todos,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$todomx$todo_SLASH_todo_DASH_list)),cljs.core.cst$kw$input_QMARK_,null,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR_27415 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return todomx.todo.todo_list();
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_27415;
}})], 0)),cljs.core.cst$kw$mx_DASH_dom,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$md_SLASH_with_DASH_par,cljs.core.cst$sym$me,cljs.core.list(cljs.core.cst$sym$landing_DASH_page))),cljs.core.cst$kw$input_QMARK_,null,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR_27416 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var _STAR_par_STAR_27417 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return (todomx.matrix.landing_page.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.landing_page.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.landing_page.call(null));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27417;
}}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_27416;
}})], 0)),cljs.core.cst$kw$route,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$obs,(function (slot,me,new$,old,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.unbound,old)){
return null;
} else {
return tiltontec.tag.html.io_upsert("todo-matrixcljs.route",new$);
}
}),cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$io_DASH_read,"todo-matrixcljs.route"),"All")),cljs.core.cst$kw$input_QMARK_,true,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR_27418 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var or__6774__auto__ = tiltontec.tag.html.io_read("todo-matrixcljs.route");
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return "All";
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_27418;
}})], 0)),cljs.core.cst$kw$router_DASH_starter,todomx.matrix.start_router], 0)));
});
todomx.matrix.start_router = (function todomx$matrix$start_router(){
return bide.core.start_BANG_(bide.core.router(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.cst$kw$All], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/active",cljs.core.cst$kw$Active], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/completed",cljs.core.cst$kw$Completed], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default,cljs.core.cst$kw$ignore,cljs.core.cst$kw$on_DASH_navigate,(function (route,params,query){
return tiltontec.model.core.md_reset_BANG_(cljs.core.deref(tiltontec.model.core.matrix),cljs.core.cst$kw$route,cljs.core.name(route));
})], null));
});



todomx.matrix.landing_page = (function todomx$matrix$landing_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag("section",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"todoapp"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"header"], null),cljs.core.list(cljs.core.cst$sym$h1,cljs.core.PersistentArrayMap.EMPTY,"todos"),cljs.core.list(cljs.core.cst$sym$todo_DASH_entry_DASH_field)),cljs.core.list(cljs.core.cst$sym$todo_DASH_list_DASH_items),cljs.core.list(cljs.core.cst$sym$dashboard_DASH_footer))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27419 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("header",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"header"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.PersistentArrayMap.EMPTY,"todos"),cljs.core.list(cljs.core.cst$sym$todo_DASH_entry_DASH_field))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27419,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27423 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"todos")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27423,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27419,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27425 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"todos"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27425;
}});})(_STAR_par_STAR_27423,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27419,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = (todomx.matrix.todo_entry_field.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.todo_entry_field.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.todo_entry_field.call(null));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27423;
}});})(_STAR_par_STAR_27419,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = (todomx.matrix.todo_list_items.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.todo_list_items.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.todo_list_items.call(null));
return cljs.core._conj((function (){var x__7617__auto____$2 = (todomx.matrix.dashboard_footer.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.dashboard_footer.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.dashboard_footer.call(null));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27419;
}})], 0))),tiltontec.tag.gen.make_tag("footer",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"info"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Double-click a to-do list item to edit it."),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>."),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27426 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Double-click a to-do list item to edit it.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27426,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27428 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Double-click a to-do list item to edit it."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27428;
}});})(_STAR_par_STAR_27426,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_27426,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27430 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27430;
}});})(x__7617__auto__,_STAR_par_STAR_27426,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$2 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27426,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27432 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27432;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27426,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27426;
}})], 0)))], null);
});
todomx.matrix.todo_entry_field = (function todomx$matrix$todo_entry_field(){
return tiltontec.tag.gen.make_tag("input",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"new-todo",cljs.core.cst$kw$autofocus,true,cljs.core.cst$kw$placeholder,"What needs doing?",cljs.core.cst$kw$onkeypress,(function (p1__27433_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27433_SHARP_.key,"Enter")){
var vec__27434 = (((taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2((5),"todomx.matrix")) && (true))?(function (){try{var G__27437_27445 = (new taoensso.tufte.impl.PData((taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null))));
(taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1(G__27437_27445) : taoensso.tufte.impl.pdata_proxy.call(null,G__27437_27445));

var result__25523__auto__ = (function (){var raw = (function (){var G__27438 = p1__27433_SHARP_.target;
return goog.dom.forms.getValue(G__27438);
})();
var title = clojure.string.trim(raw);
var todos = (todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.mx_todos.call(null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,"")){
} else {
tiltontec.model.core.md_reset_BANG_(todos,cljs.core.cst$kw$items_DASH_raw,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.md_get(todos,cljs.core.cst$kw$items_DASH_raw),(function (){var __pdata_or_pdata_ = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result = todomx.todo.make_todo(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null));
var __t1 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pdata_or_pdata_,cljs.core.cst$kw$todomx$matrix_SLASH_mktodo,(__t1 - __t0));

return __result;
} else {
return todomx.todo.make_todo(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null));
}
})()));
}

var G__27439 = p1__27433_SHARP_.target;
var G__27440 = "";
return goog.dom.forms.setValue(G__27439,G__27440);
})();
var stats__25524__auto__ = taoensso.tufte.impl.pdata__GT_Stats((taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__25523__auto__,stats__25524__auto__], null);
}finally {(taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$1(null) : taoensso.tufte.impl.pdata_proxy.call(null,null));
}})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var raw = (function (){var G__27441 = p1__27433_SHARP_.target;
return goog.dom.forms.getValue(G__27441);
})();
var title = clojure.string.trim(raw);
var todos = (todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.mx_todos.call(null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,"")){
} else {
tiltontec.model.core.md_reset_BANG_(todos,cljs.core.cst$kw$items_DASH_raw,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.md_get(todos,cljs.core.cst$kw$items_DASH_raw),(function (){var __pdata_or_pdata_ = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result = todomx.todo.make_todo(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null));
var __t1 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pdata_or_pdata_,cljs.core.cst$kw$todomx$matrix_SLASH_mktodo,(__t1 - __t0));

return __result;
} else {
return todomx.todo.make_todo(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null));
}
})()));
}

var G__27442 = p1__27433_SHARP_.target;
var G__27443 = "";
return goog.dom.forms.setValue(G__27442,G__27443);
})()], null));
var result__25530__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27434,(0),null);
var stats__25531__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27434,(1),null);
if(cljs.core.truth_(stats__25531__auto__)){
taoensso.tufte.impl.handle_BANG_(taoensso.tufte.__GT_HandlerVal("todomx.matrix",(5),null,null,stats__25531__auto__,(new cljs.core.Delay(((function (vec__27434,result__25530__auto__,stats__25531__auto__){
return (function (){
return taoensso.tufte.format_stats.cljs$core$IFn$_invoke$arity$1(stats__25531__auto__);
});})(vec__27434,result__25530__auto__,stats__25531__auto__))
,null)),"/Users/kennethtilton/todoFRP/todo/MatrixCLJS/scripts/release.clj",109));
} else {
}

return result__25530__auto__;
} else {
return null;
}
})], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27444 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27444;
}})], 0)));
});
todomx.matrix.todo_list_items = (function todomx$matrix$todo_list_items(){
return tiltontec.tag.gen.make_tag("section",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"main",cljs.core.cst$kw$hidden,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.cst$kw$empty_QMARK_)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return tiltontec.model.core.md_get((todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1(me) : todomx.matrix.mx_todos.call(null,me)),cljs.core.cst$kw$empty_QMARK_);
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$toggle_DASH_all),cljs.core.list(cljs.core.cst$sym$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"todo-list",cljs.core.cst$kw$kid_DASH_values,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rte,cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)], null),cljs.core.list(cljs.core.cst$sym$sort_DASH_by,cljs.core.cst$sym$td_DASH_created,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.list(cljs.core.cst$sym$case,cljs.core.cst$sym$rte,"All",cljs.core.cst$kw$items,"Completed",cljs.core.cst$kw$items_DASH_completed,"Active",cljs.core.cst$kw$items_DASH_active))))),cljs.core.cst$kw$kid_DASH_key,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27446_SHARP_], null),cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$p1__27446_SHARP_,cljs.core.cst$kw$todo)),cljs.core.cst$kw$kid_DASH_factory,cljs.core.cst$sym$todo_DASH_list_DASH_item], null),cljs.core.list(cljs.core.cst$sym$kid_DASH_values_DASH_kids,cljs.core.cst$sym$me,cljs.core.cst$sym$cache)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27447 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = (todomx.matrix.toggle_all.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.toggle_all.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.toggle_all.call(null));
return cljs.core._conj((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("ul",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"todo-list",cljs.core.cst$kw$kid_DASH_values,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rte,cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)], null),cljs.core.list(cljs.core.cst$sym$sort_DASH_by,cljs.core.cst$sym$td_DASH_created,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.list(cljs.core.cst$sym$case,cljs.core.cst$sym$rte,"All",cljs.core.cst$kw$items,"Completed",cljs.core.cst$kw$items_DASH_completed,"Active",cljs.core.cst$kw$items_DASH_active))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_27447,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
var temp__4657__auto__ = (todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1(me__$1) : todomx.matrix.mx_route.call(null,me__$1));
if(cljs.core.truth_(temp__4657__auto__)){
var rte = temp__4657__auto__;
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_created,tiltontec.model.core.md_get((todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1(me__$1) : todomx.matrix.mx_todos.call(null,me__$1)),(function (){var G__27450 = rte;
switch (G__27450) {
case "All":
return cljs.core.cst$kw$items;

break;
case "Completed":
return cljs.core.cst$kw$items_DASH_completed;

break;
case "Active":
return cljs.core.cst$kw$items_DASH_active;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27450)].join('')));

}
})()));
} else {
return null;
}
});})(x__7617__auto__,_STAR_par_STAR_27447,me,cell,slot_name,cache))
], 0)),cljs.core.cst$kw$kid_DASH_key,((function (x__7617__auto__,_STAR_par_STAR_27447,me,cell,slot_name,cache){
return (function (p1__27446_SHARP_){
return tiltontec.model.core.md_get(p1__27446_SHARP_,cljs.core.cst$kw$todo);
});})(x__7617__auto__,_STAR_par_STAR_27447,me,cell,slot_name,cache))
,cljs.core.cst$kw$kid_DASH_factory,todomx.matrix.todo_list_item], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$kid_DASH_values_DASH_kids,cljs.core.cst$sym$me,cljs.core.cst$sym$cache))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_27447,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27451 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto____$1 = tiltontec.model.core.kid_values_kids(me__$1,cache__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27451;
}});})(x__7617__auto__,_STAR_par_STAR_27447,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27447;
}})], 0)));
});
todomx.matrix.toggle_all = (function todomx$matrix$toggle_all(){
return tiltontec.tag.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$mx_DASH_todo_DASH_items,cljs.core.cst$sym$me)),cljs.core.cst$kw$uncomplete,cljs.core.cst$kw$complete)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.every_QMARK_(todomx.todo.td_completed,(todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1(me) : todomx.matrix.mx_todo_items.call(null,me)))){
return cljs.core.cst$kw$uncomplete;
} else {
return cljs.core.cst$kw$complete;
}
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"toggle-all",cljs.core.cst$kw$class,"toggle-all",cljs.core.cst$kw$tiltontec$tag$html_SLASH_type,"checkbox",cljs.core.cst$kw$checked,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_par,cljs.core.cst$sym$me),cljs.core.cst$kw$action),cljs.core.cst$kw$uncomplete))], null)),cljs.core.list(cljs.core.cst$sym$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$for,"toggle-all",cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27453_SHARP_], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$action,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$action)], null),cljs.core.list(cljs.core.cst$sym$event_SLASH_preventDefault,cljs.core.cst$sym$p1__27453_SHARP_),cljs.core.list(cljs.core.cst$sym$doseq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$td,cljs.core.list(cljs.core.cst$sym$mx_DASH_todo_DASH_items)], null),cljs.core.list(cljs.core.cst$sym$md_DASH_reset_BANG_,cljs.core.cst$sym$td,cljs.core.cst$kw$completed,cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$action,cljs.core.cst$kw$complete),cljs.core.list(cljs.core.cst$sym$now))))))], null),"Mark all as complete"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27454 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("input",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"toggle-all",cljs.core.cst$kw$class,"toggle-all",cljs.core.cst$kw$tiltontec$tag$html_SLASH_type,"checkbox",cljs.core.cst$kw$checked,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_par,cljs.core.cst$sym$me),cljs.core.cst$kw$action),cljs.core.cst$kw$uncomplete)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27454,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.md_get(tiltontec.model.core.mx_par(me__$1),cljs.core.cst$kw$action),cljs.core.cst$kw$uncomplete);
});})(_STAR_par_STAR_27454,me,cell,slot_name,cache))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27454,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27456 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27456;
}});})(_STAR_par_STAR_27454,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("label",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$for,"toggle-all",cljs.core.cst$kw$onclick,((function (x__7617__auto__,_STAR_par_STAR_27454,me,cell,slot_name,cache){
return (function (p1__27453_SHARP_){
var action = tiltontec.model.core.md_get(me,cljs.core.cst$kw$action);
goog.events.Event.preventDefault(p1__27453_SHARP_);

var seq__27462 = cljs.core.seq((todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.mx_todo_items.call(null)));
var chunk__27463 = null;
var count__27464 = (0);
var i__27465 = (0);
while(true){
if((i__27465 < count__27464)){
var td = chunk__27463.cljs$core$IIndexed$_nth$arity$2(null,i__27465);
tiltontec.model.core.md_reset_BANG_(td,cljs.core.cst$kw$completed,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$complete))?tiltontec.util.core.now():null));

var G__27467 = seq__27462;
var G__27468 = chunk__27463;
var G__27469 = count__27464;
var G__27470 = (i__27465 + (1));
seq__27462 = G__27467;
chunk__27463 = G__27468;
count__27464 = G__27469;
i__27465 = G__27470;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__27462);
if(temp__4657__auto__){
var seq__27462__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27462__$1)){
var c__7594__auto__ = cljs.core.chunk_first(seq__27462__$1);
var G__27471 = cljs.core.chunk_rest(seq__27462__$1);
var G__27472 = c__7594__auto__;
var G__27473 = cljs.core.count(c__7594__auto__);
var G__27474 = (0);
seq__27462 = G__27471;
chunk__27463 = G__27472;
count__27464 = G__27473;
i__27465 = G__27474;
continue;
} else {
var td = cljs.core.first(seq__27462__$1);
tiltontec.model.core.md_reset_BANG_(td,cljs.core.cst$kw$completed,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$complete))?tiltontec.util.core.now():null));

var G__27475 = cljs.core.next(seq__27462__$1);
var G__27476 = null;
var G__27477 = (0);
var G__27478 = (0);
seq__27462 = G__27475;
chunk__27463 = G__27476;
count__27464 = G__27477;
i__27465 = G__27478;
continue;
}
} else {
return null;
}
}
break;
}
});})(x__7617__auto__,_STAR_par_STAR_27454,me,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Mark all as complete")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_27454,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27466 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Mark all as complete"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27466;
}});})(x__7617__auto__,_STAR_par_STAR_27454,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27454;
}})], 0)));
});
todomx.matrix.todo_list_item = (function todomx$matrix$todo_list_item(me,todo){
return tiltontec.tag.gen.make_tag("li",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$td_DASH_completed,cljs.core.cst$sym$todo),"completed","")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(todomx.todo.td_completed(todo))){
return "completed";
} else {
return "";
}
})], 0)),cljs.core.cst$kw$todo,todo,cljs.core.cst$kw$editing,tiltontec.cell.core.c_in(false),cljs.core.cst$kw$display,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$route,cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)], null),cljs.core.list(cljs.core.cst$sym$cond,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$route,"All"),cljs.core.list(cljs.core.cst$sym$xor,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$route,"Active"),cljs.core.list(cljs.core.cst$sym$td_DASH_completed,cljs.core.cst$sym$todo))),"block",cljs.core.cst$kw$default,"none"),"block")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var temp__4655__auto__ = (todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1(me__$1) : todomx.matrix.mx_route.call(null,me__$1));
if(cljs.core.truth_(temp__4655__auto__)){
var route = temp__4655__auto__;
if(cljs.core.truth_((function (){var or__6774__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"All");
if(or__6774__auto__){
return or__6774__auto__;
} else {
return tiltontec.util.core.xor(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"Active"),todomx.todo.td_completed(todo));
}
})())){
return "block";
} else {
return "none";

}
} else {
return "block";
}
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"view"], null),cljs.core.list(cljs.core.cst$sym$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"toggle",cljs.core.cst$kw$tiltontec$tag$html_SLASH_type,"checkbox",cljs.core.cst$kw$checked,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$td_DASH_completed,cljs.core.cst$sym$todo)),cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$td_DASH_toggle_DASH_completed_BANG_,cljs.core.cst$sym$todo))], null)),cljs.core.list(cljs.core.cst$sym$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ondblclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27479_SHARP_], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$li_DASH_dom,cljs.core.list(cljs.core.cst$sym$dom_SLASH_getAncestorByTagNameAndClass,cljs.core.list(cljs.core.cst$sym$$_DASH_target,cljs.core.cst$sym$p1__27479_SHARP_),"li"),cljs.core.cst$sym$edt_DASH_dom,cljs.core.list(cljs.core.cst$sym$dom_SLASH_getElementByClass,"edit",cljs.core.cst$sym$li_DASH_dom)], null),cljs.core.list(cljs.core.cst$sym$classlist_SLASH_add,cljs.core.cst$sym$li_DASH_dom,"editing"),cljs.core.list(cljs.core.cst$sym$tag_SLASH_input_DASH_editing_DASH_start,cljs.core.cst$sym$edt_DASH_dom,cljs.core.list(cljs.core.cst$sym$td_DASH_title,cljs.core.cst$sym$todo))))], null),cljs.core.list(cljs.core.cst$sym$td_DASH_title,cljs.core.cst$sym$todo)),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"destroy",cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$td_DASH_delete_BANG_,cljs.core.cst$sym$todo))], null))),cljs.core.list(cljs.core.cst$sym$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"edit",cljs.core.cst$kw$onblur,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27480_SHARP_], null),cljs.core.list(cljs.core.cst$sym$todo_DASH_edit,cljs.core.cst$sym$p1__27480_SHARP_,cljs.core.cst$sym$todo)),cljs.core.cst$kw$onkeydown,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27481_SHARP_], null),cljs.core.list(cljs.core.cst$sym$todo_DASH_edit,cljs.core.cst$sym$p1__27481_SHARP_,cljs.core.cst$sym$todo))], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27482 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"view"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"toggle",cljs.core.cst$kw$tiltontec$tag$html_SLASH_type,"checkbox",cljs.core.cst$kw$checked,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$td_DASH_completed,cljs.core.cst$sym$todo)),cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$td_DASH_toggle_DASH_completed_BANG_,cljs.core.cst$sym$todo))], null)),cljs.core.list(cljs.core.cst$sym$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ondblclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27479_SHARP_], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$li_DASH_dom,cljs.core.list(cljs.core.cst$sym$dom_SLASH_getAncestorByTagNameAndClass,cljs.core.list(cljs.core.cst$sym$$_DASH_target,cljs.core.cst$sym$p1__27479_SHARP_),"li"),cljs.core.cst$sym$edt_DASH_dom,cljs.core.list(cljs.core.cst$sym$dom_SLASH_getElementByClass,"edit",cljs.core.cst$sym$li_DASH_dom)], null),cljs.core.list(cljs.core.cst$sym$classlist_SLASH_add,cljs.core.cst$sym$li_DASH_dom,"editing"),cljs.core.list(cljs.core.cst$sym$tag_SLASH_input_DASH_editing_DASH_start,cljs.core.cst$sym$edt_DASH_dom,cljs.core.list(cljs.core.cst$sym$td_DASH_title,cljs.core.cst$sym$todo))))], null),cljs.core.list(cljs.core.cst$sym$td_DASH_title,cljs.core.cst$sym$todo)),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"destroy",cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$td_DASH_delete_BANG_,cljs.core.cst$sym$todo))], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27494 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("input",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"toggle",cljs.core.cst$kw$tiltontec$tag$html_SLASH_type,"checkbox",cljs.core.cst$kw$checked,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$td_DASH_completed,cljs.core.cst$sym$todo)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
return todomx.todo.td_completed(todo);
});})(_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
], 0)),cljs.core.cst$kw$onclick,((function (_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (){
return todomx.todo.td_toggle_completed_BANG_(todo);
});})(_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27496 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27496;
}});})(_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("label",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ondblclick,((function (x__7617__auto__,_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (p1__27479_SHARP_){
var li_dom = (function (){var G__27500 = p1__27479_SHARP_.target;
var G__27501 = "li";
return goog.dom.getAncestorByTagNameAndClass(G__27500,G__27501);
})();
var edt_dom = goog.dom.getElementByClass("edit",li_dom);
goog.dom.classlist.add(li_dom,"editing");

return tiltontec.tag.html.input_editing_start(edt_dom,todomx.todo.td_title(todo));
});})(x__7617__auto__,_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$td_DASH_title,cljs.core.cst$sym$todo))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27502 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto____$1 = todomx.todo.td_title(todo);
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27502;
}});})(x__7617__auto__,_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$2 = tiltontec.tag.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"destroy",cljs.core.cst$kw$onclick,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (){
return todomx.todo.td_delete_BANG_(todo);
});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27504 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27504;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27494,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27494;
}});})(_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("input",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"edit",cljs.core.cst$kw$onblur,((function (x__7617__auto__,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (p1__27480_SHARP_){
return (todomx.matrix.todo_edit.cljs$core$IFn$_invoke$arity$2 ? todomx.matrix.todo_edit.cljs$core$IFn$_invoke$arity$2(p1__27480_SHARP_,todo) : todomx.matrix.todo_edit.call(null,p1__27480_SHARP_,todo));
});})(x__7617__auto__,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
,cljs.core.cst$kw$onkeydown,((function (x__7617__auto__,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (p1__27481_SHARP_){
return (todomx.matrix.todo_edit.cljs$core$IFn$_invoke$arity$2 ? todomx.matrix.todo_edit.cljs$core$IFn$_invoke$arity$2(p1__27481_SHARP_,todo) : todomx.matrix.todo_edit.call(null,p1__27481_SHARP_,todo));
});})(x__7617__auto__,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27506 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27506;
}});})(x__7617__auto__,_STAR_par_STAR_27482,me__$1,cell,slot_name,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27482;
}})], 0)));
});
todomx.matrix.todo_edit = (function todomx$matrix$todo_edit(e,todo){
var edt_dom = e.target;
var li_dom = goog.dom.getAncestorByTagNameAndClass(edt_dom,"li");
if(cljs.core.truth_(goog.dom.classlist.contains(li_dom,"editing"))){
var title = clojure.string.trim(goog.dom.forms.getValue(edt_dom));
var stop_editing = ((function (title,edt_dom,li_dom){
return (function (){
return goog.dom.classlist.remove(li_dom,"editing");
});})(title,edt_dom,li_dom))
;
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.type,"blur")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter"))){
stop_editing();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,"")){
return todomx.todo.td_delete_BANG_(todo);
} else {
return tiltontec.model.core.md_reset_BANG_(todo,cljs.core.cst$kw$title,title);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Escape")){
return stop_editing();
} else {
return null;
}
}
} else {
return null;
}
});
todomx.matrix.dashboard_footer = (function todomx$matrix$dashboard_footer(){
return tiltontec.tag.gen.make_tag("footer",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"footer",cljs.core.cst$kw$hidden,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.cst$kw$empty_QMARK_)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return tiltontec.model.core.md_get((todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1(me) : todomx.matrix.mx_todos.call(null,me)),cljs.core.cst$kw$empty_QMARK_);
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"todo-count",cljs.core.cst$kw$content,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$remove,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$mx_DASH_todo_DASH_items,cljs.core.cst$sym$me)))))], null)),cljs.core.list(cljs.core.cst$sym$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"filters"], null),cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$label,cljs.core.cst$sym$route], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(cljs.core.cst$sym$li,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,cljs.core.cst$sym$route,cljs.core.cst$kw$selector,cljs.core.cst$sym$label,cljs.core.cst$kw$class,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)),"selected"))], null),cljs.core.cst$sym$label)))),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"clear-completed",cljs.core.cst$kw$hidden,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$empty_QMARK_,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.cst$kw$items_DASH_completed))),cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$doseq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$td,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$mx_DASH_todo_DASH_items))], null),cljs.core.list(cljs.core.cst$sym$td_DASH_delete_BANG_,cljs.core.cst$sym$td)))], null),"Clear completed"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27507 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"todo-count",cljs.core.cst$kw$content,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$remove,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$mx_DASH_todo_DASH_items,cljs.core.cst$sym$me))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"<strong>~a</strong>  item~:P remaining",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,(todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1(me__$1) : todomx.matrix.mx_todo_items.call(null,me__$1))))], 0));
});})(_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27509 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27509;
}});})(_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("ul",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"filters"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$label,cljs.core.cst$sym$route], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(cljs.core.cst$sym$li,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,cljs.core.cst$sym$route,cljs.core.cst$kw$selector,cljs.core.cst$sym$label,cljs.core.cst$kw$class,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)),"selected"))], null),cljs.core.cst$sym$label))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27543 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto____$1 = (function (){var iter__7563__auto__ = ((function (_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function todomx$matrix$dashboard_footer_$_iter__27560(s__27561){
return (new cljs.core.LazySeq(null,((function (_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (){
var s__27561__$1 = s__27561;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27561__$1);
if(temp__4657__auto__){
var s__27561__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27561__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__27561__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__27563 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__27562 = (0);
while(true){
if((i__27562 < size__7562__auto__)){
var vec__27564 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__27562);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27564,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27564,(1),null);
cljs.core.chunk_append(b__27563,tiltontec.tag.gen.make_tag("li",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,cljs.core.cst$sym$route,cljs.core.cst$kw$selector,cljs.core.cst$sym$label,cljs.core.cst$kw$class,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)),"selected"))], null),cljs.core.cst$sym$label))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__27562,vec__27564,label,route,c__7561__auto__,size__7562__auto__,b__27563,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27567 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("a",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,route,cljs.core.cst$kw$selector,label,cljs.core.cst$kw$class,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)),"selected")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__27562,_STAR_par_STAR_27567,me__$2,cell__$2,slot_name__$2,cache__$2,vec__27564,label,route,c__7561__auto__,size__7562__auto__,b__27563,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me__$3)),(todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1(me__$3) : todomx.matrix.mx_route.call(null,me__$3)))){
return "selected";
} else {
return null;
}
});})(i__27562,_STAR_par_STAR_27567,me__$2,cell__$2,slot_name__$2,cache__$2,vec__27564,label,route,c__7561__auto__,size__7562__auto__,b__27563,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$label)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__27562,_STAR_par_STAR_27567,me__$2,cell__$2,slot_name__$2,cache__$2,vec__27564,label,route,c__7561__auto__,size__7562__auto__,b__27563,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27569 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto____$1 = label;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27569;
}});})(i__27562,_STAR_par_STAR_27567,me__$2,cell__$2,slot_name__$2,cache__$2,vec__27564,label,route,c__7561__auto__,size__7562__auto__,b__27563,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27567;
}});})(i__27562,vec__27564,label,route,c__7561__auto__,size__7562__auto__,b__27563,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0))));

var G__27586 = (i__27562 + (1));
i__27562 = G__27586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27563),todomx$matrix$dashboard_footer_$_iter__27560(cljs.core.chunk_rest(s__27561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27563),null);
}
} else {
var vec__27570 = cljs.core.first(s__27561__$2);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27570,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27570,(1),null);
return cljs.core.cons(tiltontec.tag.gen.make_tag("li",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,cljs.core.cst$sym$route,cljs.core.cst$kw$selector,cljs.core.cst$sym$label,cljs.core.cst$kw$class,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)),"selected"))], null),cljs.core.cst$sym$label))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (vec__27570,label,route,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27573 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("a",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,route,cljs.core.cst$kw$selector,label,cljs.core.cst$kw$class,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)),"selected")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27573,me__$2,cell__$2,slot_name__$2,cache__$2,vec__27570,label,route,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me__$3)),(todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1(me__$3) : todomx.matrix.mx_route.call(null,me__$3)))){
return "selected";
} else {
return null;
}
});})(_STAR_par_STAR_27573,me__$2,cell__$2,slot_name__$2,cache__$2,vec__27570,label,route,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$label)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_27573,me__$2,cell__$2,slot_name__$2,cache__$2,vec__27570,label,route,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27575 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto____$1 = label;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27575;
}});})(_STAR_par_STAR_27573,me__$2,cell__$2,slot_name__$2,cache__$2,vec__27570,label,route,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27573;
}});})(vec__27570,label,route,s__27561__$2,temp__4657__auto__,_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0))),todomx$matrix$dashboard_footer_$_iter__27560(cljs.core.rest(s__27561__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
,null,null));
});})(_STAR_par_STAR_27543,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
;
return iter__7563__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27543;
}});})(x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$2 = tiltontec.tag.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"clear-completed",cljs.core.cst$kw$hidden,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$empty_QMARK_,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.cst$kw$items_DASH_completed))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return cljs.core.empty_QMARK_(tiltontec.model.core.md_get((todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1(me__$1) : todomx.matrix.mx_todos.call(null,me__$1)),cljs.core.cst$kw$items_DASH_completed));
});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0)),cljs.core.cst$kw$onclick,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (){
var seq__27581 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,(todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.mx_todo_items.call(null))));
var chunk__27582 = null;
var count__27583 = (0);
var i__27584 = (0);
while(true){
if((i__27584 < count__27583)){
var td = chunk__27582.cljs$core$IIndexed$_nth$arity$2(null,i__27584);
todomx.todo.td_delete_BANG_(td);

var G__27587 = seq__27581;
var G__27588 = chunk__27582;
var G__27589 = count__27583;
var G__27590 = (i__27584 + (1));
seq__27581 = G__27587;
chunk__27582 = G__27588;
count__27583 = G__27589;
i__27584 = G__27590;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__27581);
if(temp__4657__auto__){
var seq__27581__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27581__$1)){
var c__7594__auto__ = cljs.core.chunk_first(seq__27581__$1);
var G__27591 = cljs.core.chunk_rest(seq__27581__$1);
var G__27592 = c__7594__auto__;
var G__27593 = cljs.core.count(c__7594__auto__);
var G__27594 = (0);
seq__27581 = G__27591;
chunk__27582 = G__27592;
count__27583 = G__27593;
i__27584 = G__27594;
continue;
} else {
var td = cljs.core.first(seq__27581__$1);
todomx.todo.td_delete_BANG_(td);

var G__27595 = cljs.core.next(seq__27581__$1);
var G__27596 = null;
var G__27597 = (0);
var G__27598 = (0);
seq__27581 = G__27595;
chunk__27582 = G__27596;
count__27583 = G__27597;
i__27584 = G__27598;
continue;
}
} else {
return null;
}
}
break;
}
});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Clear completed")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_27585 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Clear completed"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27585;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_27507,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_27507;
}})], 0)));
});
todomx.matrix.mx_route = (function todomx$matrix$mx_route(mx){
return tiltontec.model.core.md_get((todomx.matrix.mx_find_matrix.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_find_matrix.cljs$core$IFn$_invoke$arity$1(mx) : todomx.matrix.mx_find_matrix.call(null,mx)),cljs.core.cst$kw$route);
});
/**
 * Given a node in the matrix, navigate to the root and read the todos. After
 *   the matrix is initially loaded (say in an event handler), one can pass nil
 *   and find the matrix in @matrix. Put another way, a starting node is required
 *   during the matrix's initial build.
 */
todomx.matrix.mx_todos = (function todomx$matrix$mx_todos(var_args){
var G__27600 = arguments.length;
switch (G__27600) {
case 0:
return todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.model.core.md_get(cljs.core.deref(tiltontec.model.core.matrix),cljs.core.cst$kw$todos);
});

todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 = (function (mx){
if((mx == null)){
return todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0();
} else {
var mtrx = (todomx.matrix.mx_find_matrix.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_find_matrix.cljs$core$IFn$_invoke$arity$1(mx) : todomx.matrix.mx_find_matrix.call(null,mx));
if(cljs.core.truth_(mtrx)){
} else {
throw (new Error("Assert failed: mtrx"));
}

return tiltontec.model.core.md_get(mtrx,cljs.core.cst$kw$todos);
}
});

todomx.matrix.mx_todos.cljs$lang$maxFixedArity = 1;

todomx.matrix.mx_todo_items = (function todomx$matrix$mx_todo_items(var_args){
var G__27603 = arguments.length;
switch (G__27603) {
case 0:
return todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0 = (function (){
return todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1(null);
});

todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1 = (function (mx){
return tiltontec.model.core.md_get(todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1(mx),cljs.core.cst$kw$items);
});

todomx.matrix.mx_todo_items.cljs$lang$maxFixedArity = 1;

todomx.matrix.mx_find_matrix = (function todomx$matrix$mx_find_matrix(mx){
return tiltontec.model.core.mxu_find_type(mx,cljs.core.cst$kw$todomx$matrix_SLASH_todoApp);
});
