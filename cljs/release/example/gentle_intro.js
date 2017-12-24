// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('example.gentle_intro');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.tag.html');
goog.require('tiltontec.tag.gen');
goog.require('cljs_http.client');



example.gentle_intro.matrix_build_BANG_ = (function example$gentle_intro$matrix_build_BANG_(){
return (example.gentle_intro.gentle_intro_to_Tag.cljs$core$IFn$_invoke$arity$0 ? example.gentle_intro.gentle_intro_to_Tag.cljs$core$IFn$_invoke$arity$0() : example.gentle_intro.gentle_intro_to_Tag.call(null));
});
example.gentle_intro.gentle_intro_ls_key = "matrixcljs-gentle-intro";
example.gentle_intro.gentle_intro_input_cells = (function example$gentle_intro$gentle_intro_input_cells(){
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["----- Part A: An input cell and its accessors ---------------------------------"], 0));

var todos_34467 = tiltontec.cell.core.c_in(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wash car","mow lawn"], null));
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wrapped value:",tiltontec.cell.evaluate.c_get(todos_34467)], 0));

tiltontec.cell.core.c_reset_BANG_(todos_34467,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["learn Mandarin"], null));

tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["changed value:",tiltontec.cell.evaluate.c_get(todos_34467)], 0));

tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["----- Part B: observers let the matrix have useful effect -------------------"], 0));

tiltontec.tag.html.io_clear_storage();

var todos_34468 = tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$obs,(function (slot,me,new_value,prior_value,cell){
return tiltontec.tag.html.io_upsert(example.gentle_intro.gentle_intro_ls_key,JSON.stringify(tiltontec.util.core.map_to_json(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$todos,new_value], null))));
})], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Storage before c-in reset says:",tiltontec.tag.html.io_read(example.gentle_intro.gentle_intro_ls_key)], 0));

tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Storing a couple of todos..."], 0));

tiltontec.cell.core.c_reset_BANG_(todos_34468,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wash dog","learn Mandarin"], null));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["localStorage after reset says:",tiltontec.tag.html.io_read(example.gentle_intro.gentle_intro_ls_key)], 0));

return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$example$gentle_DASH_intro_SLASH_dummyApp,cljs.core.cst$kw$mx_DASH_dom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag("div",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.PersistentArrayMap.EMPTY,"Gentle Intro: Input cells"),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Input cells, accessors, and observers connecting matrix to world"),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"(see JS console for output)->"),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Edit todomx/gentle_intro.cljs line 95 to try other examples."))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34458 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Gentle Intro: Input cells")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_34458,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34460 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Gentle Intro: Input cells"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34460;
}});})(_STAR_par_STAR_34458,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Input cells, accessors, and observers connecting matrix to world")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_34458,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34462 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Input cells, accessors, and observers connecting matrix to world"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34462;
}});})(x__7617__auto__,_STAR_par_STAR_34458,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$2 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"(see JS console for output)->")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34458,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34464 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"(see JS console for output)->"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34464;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34458,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$3 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Edit todomx/gentle_intro.cljs line 95 to try other examples.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34458,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34466 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Edit todomx/gentle_intro.cljs line 95 to try other examples."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34466;
}});})(x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34458,me,cell,slot_name,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$3);
})(),x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34458;
}})], 0)))], null)], 0));
});
example.gentle_intro.gentle_intro_formulaic_cells = (function example$gentle_intro$gentle_intro_formulaic_cells(){
var todos = tiltontec.cell.core.c_in(cljs.core.PersistentVector.EMPTY);
var add_todo = ((function (todos){
return (function (todo){
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$procedural_DASH_adding_DASH_todo_BANG__BANG__BANG_], 0));

return tiltontec.cell.core.c_reset_BANG_(todos,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_value(todos),todo));
});})(todos))
;
var clear_todos = ((function (todos,add_todo){
return (function (){
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$procedural_DASH_clearing_DASH_todos_BANG__BANG__BANG_], 0));

return tiltontec.cell.core.c_reset_BANG_(todos,null);
});})(todos,add_todo))
;
var todo_count = tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$obs,((function (todos,add_todo,clear_todos){
return (function (slot,me,new$,old,c){
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["HTML soon:",cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"<strong>~a</strong>  item~:P remaining",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new$], 0))], 0));
});})(todos,add_todo,clear_todos))
,cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$pln,"rule: counting todos!"),cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$c_DASH_get,cljs.core.cst$sym$todos))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (todos,add_todo,clear_todos){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rule: counting todos!"], 0));

return cljs.core.count(tiltontec.cell.evaluate.c_get(todos));
});})(todos,add_todo,clear_todos))
], 0));
var todos_empty = tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$obs,((function (todos,add_todo,clear_todos,todo_count){
return (function (slot,me,new$,old,c){
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["obs: empty:",new$], 0));
});})(todos,add_todo,clear_todos,todo_count))
,cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$pln,"rule: testing empty!"),cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$c_DASH_get,cljs.core.cst$sym$todo_DASH_count))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (todos,add_todo,clear_todos,todo_count){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rule: testing empty!"], 0));

return (tiltontec.cell.evaluate.c_get(todo_count) === (0));
});})(todos,add_todo,clear_todos,todo_count))
], 0));
var html_hidden = tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$obs,((function (todos,add_todo,clear_todos,todo_count,todos_empty){
return (function (slot,me,new$,old,c){
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["obs: hidden:",new$], 0));
});})(todos,add_todo,clear_todos,todo_count,todos_empty))
,cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$pln,"rule: testing if dom should be hidden"),cljs.core.list(cljs.core.cst$sym$c_DASH_get,cljs.core.cst$sym$todos_DASH_empty)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (todos,add_todo,clear_todos,todo_count,todos_empty){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rule: testing if dom should be hidden"], 0));

return tiltontec.cell.evaluate.c_get(todos_empty);
});})(todos,add_todo,clear_todos,todo_count,todos_empty))
], 0));
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["starting value of hidden",tiltontec.cell.evaluate.c_get(html_hidden)], 0));

add_todo("clean dishes");

add_todo("file taxes");

return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$example$gentle_DASH_intro_SLASH_dummyApp,cljs.core.cst$kw$mx_DASH_dom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag("div",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.PersistentArrayMap.EMPTY,"Gentle Intro: Formulaic cells"),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Formulaic cells, matrix HTML"),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"(see JS console for output)->"),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Edit todomx/gentle_intro.cljs line 95 to try other examples."))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34469 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Gentle Intro: Formulaic cells")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_34469,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34471 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Gentle Intro: Formulaic cells"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34471;
}});})(_STAR_par_STAR_34469,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Formulaic cells, matrix HTML")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_34469,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34473 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Formulaic cells, matrix HTML"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34473;
}});})(x__7617__auto__,_STAR_par_STAR_34469,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$2 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"(see JS console for output)->")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34469,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34475 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"(see JS console for output)->"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34475;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34469,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$3 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Edit todomx/gentle_intro.cljs line 95 to try other examples.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34469,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34477 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Edit todomx/gentle_intro.cljs line 95 to try other examples."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34477;
}});})(x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34469,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$3);
})(),x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34469;
}});})(todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden))
], 0)))], null)], 0));
});
example.gentle_intro.gentle_intro_models = (function example$gentle_intro$gentle_intro_models(){
var to_do = tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$example$gentle_DASH_intro_SLASH_todo,cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.gentle_intro.gentle_intro_ls_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.util.core.uuidv4())].join(''),cljs.core.cst$kw$created,tiltontec.util.core.now(),cljs.core.cst$kw$title,tiltontec.cell.core.c_in("Sell car"),cljs.core.cst$kw$versions,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$obs,(function (slot,me,new$,old,c){
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$version,new$,tiltontec.model.core.md_get(me,cljs.core.cst$kw$title)], 0));
}),cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$title),cljs.core.list(cljs.core.cst$sym$inc,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$cache,cljs.core.cst$sym$unbound),(0),cljs.core.cst$sym$cache)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(tiltontec.model.core.md_get(me,cljs.core.cst$kw$title))){
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cache,tiltontec.cell.base.unbound))?(0):cache) + (1));
} else {
return null;
}
})], 0)),cljs.core.cst$kw$completed,tiltontec.cell.core.c_in(false),cljs.core.cst$kw$deleted,tiltontec.cell.core.c_in(null)], 0));
tiltontec.model.core.md_reset_BANG_(to_do,cljs.core.cst$kw$title,"Sell car and boat");

return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$example$gentle_DASH_intro_SLASH_dummyApp,cljs.core.cst$kw$mx_DASH_dom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag("div",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.PersistentArrayMap.EMPTY,"Gentle Intro: Models"),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Models: objects with cells as properties"),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"(see JS console for output)->"),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Edit todomx/gentle_intro.cljs line 95 to try other examples."))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (to_do){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34478 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Gentle Intro: Models")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_34478,me,cell,slot_name,cache,to_do){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34480 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Gentle Intro: Models"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34480;
}});})(_STAR_par_STAR_34478,me,cell,slot_name,cache,to_do))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Models: objects with cells as properties")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_34478,me,cell,slot_name,cache,to_do){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34482 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Models: objects with cells as properties"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34482;
}});})(x__7617__auto__,_STAR_par_STAR_34478,me,cell,slot_name,cache,to_do))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$2 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"(see JS console for output)->")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34478,me,cell,slot_name,cache,to_do){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34484 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"(see JS console for output)->"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34484;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34478,me,cell,slot_name,cache,to_do))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$3 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Edit todomx/gentle_intro.cljs line 95 to try other examples.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34478,me,cell,slot_name,cache,to_do){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34486 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Edit todomx/gentle_intro.cljs line 95 to try other examples."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34486;
}});})(x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34478,me,cell,slot_name,cache,to_do))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$3);
})(),x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34478;
}});})(to_do))
], 0)))], null)], 0));
});
example.gentle_intro.to_do = (42);
goog.exportSymbol('example.gentle_intro.to_do', example.gentle_intro.to_do);
example.gentle_intro.gentle_intro_to_Tag = (function example$gentle_intro$gentle_intro_to_Tag(){
var to_do = tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$example$gentle_DASH_intro_SLASH_todo,cljs.core.cst$kw$title,tiltontec.cell.core.c_in("Sell car"),cljs.core.cst$kw$completed,tiltontec.cell.core.c_in(true)], 0));
var completed = ((function (to_do){
return (function (p1__34487_SHARP_){
return tiltontec.model.core.md_get(p1__34487_SHARP_,cljs.core.cst$kw$completed);
});})(to_do))
;
var title = ((function (to_do,completed){
return (function (p1__34488_SHARP_){
return tiltontec.model.core.md_get(p1__34488_SHARP_,cljs.core.cst$kw$title);
});})(to_do,completed))
;
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$example$gentle_DASH_intro_SLASH_dummyApp,cljs.core.cst$kw$mx_DASH_dom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,"margin:24px"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.PersistentArrayMap.EMPTY,"Gentle Intro to Tag&trade;"),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"(click below to toggle whether to-do has been done)"),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag_SLASH__STAR_tag_DASH_trace_STAR_,"toggle"], null),cljs.core.list(cljs.core.cst$sym$md_DASH_reset_BANG_,cljs.core.cst$sym$to_DASH_do,cljs.core.cst$kw$completed,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$completed,cljs.core.cst$sym$to_DASH_do))))),cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$str_SLASH_join,";",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background-color:white",cljs.core.list(cljs.core.cst$sym$str,"color:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$completed,cljs.core.cst$sym$to_DASH_do),"red","green"))], null))),cljs.core.cst$kw$content,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$title,cljs.core.cst$sym$to_DASH_do),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$completed,cljs.core.cst$sym$to_DASH_do)," (done)")))], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (to_do,completed,title){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34489 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7617__auto__ = tiltontec.tag.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Gentle Intro to Tag&trade;")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34491 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Gentle Intro to Tag&trade;"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34491;
}});})(_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$1 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"(click below to toggle whether to-do has been done)")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto__,_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34493 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"(click below to toggle whether to-do has been done)"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34493;
}});})(x__7617__auto__,_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title))
], 0)));
return cljs.core._conj((function (){var x__7617__auto____$2 = tiltontec.tag.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$onclick,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title){
return (function (){
var _STAR_tag_trace_STAR_34496 = tiltontec.tag.html._STAR_tag_trace_STAR_;
tiltontec.tag.html._STAR_tag_trace_STAR_ = "toggle";

try{return tiltontec.model.core.md_reset_BANG_(to_do,cljs.core.cst$kw$completed,cljs.core.not(completed(to_do)));
}finally {tiltontec.tag.html._STAR_tag_trace_STAR_ = _STAR_tag_trace_STAR_34496;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title))
,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str_SLASH_join,";",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background-color:white",cljs.core.list(cljs.core.cst$sym$str,"color:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$completed,cljs.core.cst$sym$to_DASH_do),"red","green"))], null))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background-color:white",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("color:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(completed(to_do))?"red":"green"))].join('')], null));
});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title))
], 0)),cljs.core.cst$kw$content,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$title,cljs.core.cst$sym$to_DASH_do),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$completed,cljs.core.cst$sym$to_DASH_do)," (done)"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(title(to_do)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(completed(to_do))?" (done)":null))].join('');
});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_34497 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34497;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_34489,me,cell,slot_name,cache,to_do,completed,title))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_34489;
}});})(to_do,completed,title))
], 0)))], null)], 0));
});
