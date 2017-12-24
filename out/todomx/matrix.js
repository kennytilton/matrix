// Compiled by ClojureScript 1.9.671 {}
goog.provide('todomx.matrix');
goog.require('cljs.core');
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
return cljs.core.reset_BANG_.call(null,tiltontec.model.core.matrix,tiltontec.model.core.make.call(null,new cljs.core.Keyword("todomx.matrix","todoApp","todomx.matrix/todoApp",-2063259668),new cljs.core.Keyword(null,"todos","todos",630308868),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("todomx.todo","todo-list","todomx.todo/todo-list",2069191062,null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_50549 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return todomx.todo.todo_list.call(null);
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_50549;
}})),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("md","with-par","md/with-par",-1450243129,null),new cljs.core.Symbol(null,"me","me",1501524834,null),cljs.core.list(new cljs.core.Symbol(null,"landing-page","landing-page",-967020582,null)))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_50550 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var _STAR_par_STAR_50551 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return todomx.matrix.landing_page.call(null);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50551;
}}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_50550;
}})),new cljs.core.Keyword(null,"route","route",329891309),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"obs","obs",-664011444),(function (slot,me,new$,old,c){
if(cljs.core._EQ_.call(null,tiltontec.cell.base.unbound,old)){
return null;
} else {
return tiltontec.tag.html.io_upsert.call(null,"todo-matrixcljs.route",new$);
}
}),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"io-read","io-read",736682236,null),"todo-matrixcljs.route"),"All")),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_50552 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var or__6772__auto__ = tiltontec.tag.html.io_read.call(null,"todo-matrixcljs.route");
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return "All";
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_50552;
}})),new cljs.core.Keyword(null,"router-starter","router-starter",-629272961),todomx.matrix.start_router));
});
todomx.matrix.start_router = (function todomx$matrix$start_router(){
return bide.core.start_BANG_.call(null,bide.core.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"All","All",-2078402587)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/active",new cljs.core.Keyword(null,"Active","Active",-2079032146)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/completed",new cljs.core.Keyword(null,"Completed","Completed",402352227)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),(function (route,params,query){
return tiltontec.model.core.md_reset_BANG_.call(null,cljs.core.deref.call(null,tiltontec.model.core.matrix),new cljs.core.Keyword(null,"route","route",329891309),cljs.core.name.call(null,route));
})], null));
});



todomx.matrix.landing_page = (function todomx$matrix$landing_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag.call(null,"section",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"todoapp"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"todos"),cljs.core.list(new cljs.core.Symbol(null,"todo-entry-field","todo-entry-field",-1722773886,null))),cljs.core.list(new cljs.core.Symbol(null,"todo-list-items","todo-list-items",-122105134,null)),cljs.core.list(new cljs.core.Symbol(null,"dashboard-footer","dashboard-footer",-1106288423,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50553 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.tag.gen.make_tag.call(null,"header",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"todos"),cljs.core.list(new cljs.core.Symbol(null,"todo-entry-field","todo-entry-field",-1722773886,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50553,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50557 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.tag.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"todos")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50557,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50553,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50559 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"todos"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50559;
}});})(_STAR_par_STAR_50557,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50553,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = todomx.matrix.todo_entry_field.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50557;
}});})(_STAR_par_STAR_50553,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = todomx.matrix.todo_list_items.call(null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$2 = todomx.matrix.dashboard_footer.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$2);
})(),x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50553;
}}))),tiltontec.tag.gen.make_tag.call(null,"footer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"info"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Double-click a to-do list item to edit it."),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>."),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50560 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Double-click a to-do list item to edit it.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50560,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50562 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Double-click a to-do list item to edit it."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50562;
}});})(_STAR_par_STAR_50560,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_50560,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50564 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50564;
}});})(x__7615__auto__,_STAR_par_STAR_50560,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50560,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50566 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50566;
}});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50560,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$2);
})(),x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50560;
}})))], null);
});
todomx.matrix.todo_entry_field = (function todomx$matrix$todo_entry_field(){
return tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"new-todo",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs doing?",new cljs.core.Keyword(null,"onkeypress","onkeypress",740819085),(function (p1__50567_SHARP_){
if(cljs.core._EQ_.call(null,p1__50567_SHARP_.key,"Enter")){
var vec__50568 = (((taoensso.tufte.may_profile_QMARK_.call(null,(5),"todomx.matrix")) && (true))?(function (){try{taoensso.tufte.impl.pdata_proxy.call(null,(new taoensso.tufte.impl.PData(taoensso.encore.now_nano.call(null))));

var result__18633__auto__ = (function (){var raw = goog.dom.forms.getValue(p1__50567_SHARP_.target);
var title = clojure.string.trim.call(null,raw);
var todos = todomx.matrix.mx_todos.call(null);
if(cljs.core._EQ_.call(null,title,"")){
} else {
tiltontec.model.core.md_reset_BANG_.call(null,todos,new cljs.core.Keyword(null,"items-raw","items-raw",153861709),cljs.core.conj.call(null,tiltontec.model.core.md_get.call(null,todos,new cljs.core.Keyword(null,"items-raw","items-raw",153861709)),(function (){var __pdata_or_pdata_ = (function (){var or__6772__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy.call(null);
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = taoensso.encore.now_nano.call(null);
var __result = todomx.todo.make_todo.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null));
var __t1 = taoensso.encore.now_nano.call(null);
taoensso.tufte.impl.capture_time_BANG_.call(null,__pdata_or_pdata_,new cljs.core.Keyword("todomx.matrix","mktodo","todomx.matrix/mktodo",1813243454),(__t1 - __t0));

return __result;
} else {
return todomx.todo.make_todo.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null));
}
})()));
}

return goog.dom.forms.setValue(p1__50567_SHARP_.target,"");
})();
var stats__18634__auto__ = taoensso.tufte.impl.pdata__GT_Stats.call(null,taoensso.tufte.impl.pdata_proxy.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__18633__auto__,stats__18634__auto__], null);
}finally {taoensso.tufte.impl.pdata_proxy.call(null,null);
}})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var raw = goog.dom.forms.getValue(p1__50567_SHARP_.target);
var title = clojure.string.trim.call(null,raw);
var todos = todomx.matrix.mx_todos.call(null);
if(cljs.core._EQ_.call(null,title,"")){
} else {
tiltontec.model.core.md_reset_BANG_.call(null,todos,new cljs.core.Keyword(null,"items-raw","items-raw",153861709),cljs.core.conj.call(null,tiltontec.model.core.md_get.call(null,todos,new cljs.core.Keyword(null,"items-raw","items-raw",153861709)),(function (){var __pdata_or_pdata_ = (function (){var or__6772__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy.call(null);
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = taoensso.encore.now_nano.call(null);
var __result = todomx.todo.make_todo.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null));
var __t1 = taoensso.encore.now_nano.call(null);
taoensso.tufte.impl.capture_time_BANG_.call(null,__pdata_or_pdata_,new cljs.core.Keyword("todomx.matrix","mktodo","todomx.matrix/mktodo",1813243454),(__t1 - __t0));

return __result;
} else {
return todomx.todo.make_todo.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null));
}
})()));
}

return goog.dom.forms.setValue(p1__50567_SHARP_.target,"");
})()], null));
var result__18640__auto__ = cljs.core.nth.call(null,vec__50568,(0),null);
var stats__18641__auto__ = cljs.core.nth.call(null,vec__50568,(1),null);
if(cljs.core.truth_(stats__18641__auto__)){
taoensso.tufte.impl.handle_BANG_.call(null,taoensso.tufte.__GT_HandlerVal.call(null,"todomx.matrix",(5),null,null,stats__18641__auto__,(new cljs.core.Delay(((function (vec__50568,result__18640__auto__,stats__18641__auto__){
return (function (){
return taoensso.tufte.format_stats.call(null,stats__18641__auto__);
});})(vec__50568,result__18640__auto__,stats__18641__auto__))
,null)),"/Users/kennethtilton/todoFRP/todo/MatrixCLJS/scripts/watch.clj",109));
} else {
}

return result__18640__auto__;
} else {
return null;
}
})], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50571 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50571;
}})));
});
todomx.matrix.todo_list_items = (function todomx$matrix$todo_list_items(){
return tiltontec.tag.gen.make_tag.call(null,"section",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"main",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"empty?","empty?",-1564122972))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return tiltontec.model.core.md_get.call(null,todomx.matrix.mx_todos.call(null,me),new cljs.core.Keyword(null,"empty?","empty?",-1564122972));
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"toggle-all","toggle-all",-2099586420,null)),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rte","rte",1174575981,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"td-created","td-created",1922435389,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"rte","rte",1174575981,null),"All",new cljs.core.Keyword(null,"items","items",1031954938),"Completed",new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098),"Active",new cljs.core.Keyword(null,"items-active","items-active",-1058660354)))))),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50572#","p1__50572#",694564720,null)], null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"p1__50572#","p1__50572#",694564720,null),new cljs.core.Keyword(null,"todo","todo",-1046442570))),new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),new cljs.core.Symbol(null,"todo-list-item","todo-list-item",250361684,null)], null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50573 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = todomx.matrix.toggle_all.call(null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"ul",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rte","rte",1174575981,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"td-created","td-created",1922435389,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"rte","rte",1174575981,null),"All",new cljs.core.Keyword(null,"items","items",1031954938),"Completed",new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098),"Active",new cljs.core.Keyword(null,"items-active","items-active",-1058660354)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_50573,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var temp__4657__auto__ = todomx.matrix.mx_route.call(null,me__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var rte = temp__4657__auto__;
return cljs.core.sort_by.call(null,todomx.todo.td_created,tiltontec.model.core.md_get.call(null,todomx.matrix.mx_todos.call(null,me__$1),(function (){var G__50576 = rte;
switch (G__50576) {
case "All":
return new cljs.core.Keyword(null,"items","items",1031954938);

break;
case "Completed":
return new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098);

break;
case "Active":
return new cljs.core.Keyword(null,"items-active","items-active",-1058660354);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50576)].join('')));

}
})()));
} else {
return null;
}
});})(x__7615__auto__,_STAR_par_STAR_50573,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),((function (x__7615__auto__,_STAR_par_STAR_50573,me,cell,slot_name,cache){
return (function (p1__50572_SHARP_){
return tiltontec.model.core.md_get.call(null,p1__50572_SHARP_,new cljs.core.Keyword(null,"todo","todo",-1046442570));
});})(x__7615__auto__,_STAR_par_STAR_50573,me,cell,slot_name,cache))
,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),todomx.matrix.todo_list_item], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_50573,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50577 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = tiltontec.model.core.kid_values_kids.call(null,me__$1,cache__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50577;
}});})(x__7615__auto__,_STAR_par_STAR_50573,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50573;
}})));
});
todomx.matrix.toggle_all = (function todomx$matrix$toggle_all(){
return tiltontec.tag.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822),new cljs.core.Keyword(null,"complete","complete",-500388775))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.every_QMARK_.call(null,todomx.todo.td_completed,todomx.matrix.mx_todo_items.call(null,me))){
return new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822);
} else {
return new cljs.core.Keyword(null,"complete","complete",-500388775);
}
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword("tiltontec.tag.html","type","tiltontec.tag.html/type",-1460626477),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50579#","p1__50579#",-1970035959,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"action","action",829293503,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"action","action",-811238024))], null),cljs.core.list(new cljs.core.Symbol("event","preventDefault","event/preventDefault",-171361443,null),new cljs.core.Symbol(null,"p1__50579#","p1__50579#",-1970035959,null)),cljs.core.list(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"td","td",-1174502416,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null))], null),cljs.core.list(new cljs.core.Symbol(null,"md-reset!","md-reset!",1664918226,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Keyword(null,"complete","complete",-500388775)),cljs.core.list(new cljs.core.Symbol(null,"now","now",-9994004,null)))))))], null),"Mark all as complete"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50580 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword("tiltontec.tag.html","type","tiltontec.tag.html/type",-1460626477),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50580,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.core._EQ_.call(null,tiltontec.model.core.md_get.call(null,tiltontec.model.core.mx_par.call(null,me__$1),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822));
});})(_STAR_par_STAR_50580,me,cell,slot_name,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50580,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50582 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50582;
}});})(_STAR_par_STAR_50580,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all",new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7615__auto__,_STAR_par_STAR_50580,me,cell,slot_name,cache){
return (function (p1__50579_SHARP_){
var action = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"action","action",-811238024));
goog.events.Event.preventDefault(p1__50579_SHARP_);

var seq__50588 = cljs.core.seq.call(null,todomx.matrix.mx_todo_items.call(null));
var chunk__50589 = null;
var count__50590 = (0);
var i__50591 = (0);
while(true){
if((i__50591 < count__50590)){
var td = cljs.core._nth.call(null,chunk__50589,i__50591);
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"complete","complete",-500388775)))?tiltontec.util.core.now.call(null):null));

var G__50593 = seq__50588;
var G__50594 = chunk__50589;
var G__50595 = count__50590;
var G__50596 = (i__50591 + (1));
seq__50588 = G__50593;
chunk__50589 = G__50594;
count__50590 = G__50595;
i__50591 = G__50596;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50588);
if(temp__4657__auto__){
var seq__50588__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50588__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__50588__$1);
var G__50597 = cljs.core.chunk_rest.call(null,seq__50588__$1);
var G__50598 = c__7592__auto__;
var G__50599 = cljs.core.count.call(null,c__7592__auto__);
var G__50600 = (0);
seq__50588 = G__50597;
chunk__50589 = G__50598;
count__50590 = G__50599;
i__50591 = G__50600;
continue;
} else {
var td = cljs.core.first.call(null,seq__50588__$1);
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"complete","complete",-500388775)))?tiltontec.util.core.now.call(null):null));

var G__50601 = cljs.core.next.call(null,seq__50588__$1);
var G__50602 = null;
var G__50603 = (0);
var G__50604 = (0);
seq__50588 = G__50601;
chunk__50589 = G__50602;
count__50590 = G__50603;
i__50591 = G__50604;
continue;
}
} else {
return null;
}
}
break;
}
});})(x__7615__auto__,_STAR_par_STAR_50580,me,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Mark all as complete")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_50580,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50592 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Mark all as complete"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50592;
}});})(x__7615__auto__,_STAR_par_STAR_50580,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50580;
}})));
});
todomx.matrix.todo_list_item = (function todomx$matrix$todo_list_item(me,todo){
return tiltontec.tag.gen.make_tag.call(null,"li",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)),"completed","")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(todomx.todo.td_completed.call(null,todo))){
return "completed";
} else {
return "";
}
})),new cljs.core.Keyword(null,"todo","todo",-1046442570),todo,new cljs.core.Keyword(null,"editing","editing",1365491601),tiltontec.cell.core.c_in.call(null,false),new cljs.core.Keyword(null,"display","display",242065432),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route","route",1970422836,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),"All"),cljs.core.list(new cljs.core.Symbol(null,"xor","xor",520589273,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),"Active"),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))),"block",new cljs.core.Keyword(null,"default","default",-1987822328),"none"),"block")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var temp__4655__auto__ = todomx.matrix.mx_route.call(null,me__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var route = temp__4655__auto__;
if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core._EQ_.call(null,route,"All");
if(or__6772__auto__){
return or__6772__auto__;
} else {
return tiltontec.util.core.xor.call(null,cljs.core._EQ_.call(null,route,"Active"),todomx.todo.td_completed.call(null,todo));
}
})())){
return "block";
} else {
return "none";

}
} else {
return "block";
}
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword("tiltontec.tag.html","type","tiltontec.tag.html/type",-1460626477),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"td-toggle-completed!","td-toggle-completed!",1024639246,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50605#","p1__50605#",-1292720152,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null),cljs.core.list(new cljs.core.Symbol("dom","getAncestorByTagNameAndClass","dom/getAncestorByTagNameAndClass",1576389817,null),cljs.core.list(new cljs.core.Symbol(null,".-target",".-target",683579619,null),new cljs.core.Symbol(null,"p1__50605#","p1__50605#",-1292720152,null)),"li"),new cljs.core.Symbol(null,"edt-dom","edt-dom",315193713,null),cljs.core.list(new cljs.core.Symbol("dom","getElementByClass","dom/getElementByClass",-1709014822,null),"edit",new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null))], null),cljs.core.list(new cljs.core.Symbol("classlist","add","classlist/add",1850054952,null),new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null),"editing"),cljs.core.list(new cljs.core.Symbol("tag","input-editing-start","tag/input-editing-start",903280328,null),new cljs.core.Symbol(null,"edt-dom","edt-dom",315193713,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"td-delete!","td-delete!",1322716646,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))], null))),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"onblur","onblur",689939618),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50606#","p1__50606#",2027470255,null)], null),cljs.core.list(new cljs.core.Symbol(null,"todo-edit","todo-edit",573841998,null),new cljs.core.Symbol(null,"p1__50606#","p1__50606#",2027470255,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50607#","p1__50607#",-902374003,null)], null),cljs.core.list(new cljs.core.Symbol(null,"todo-edit","todo-edit",573841998,null),new cljs.core.Symbol(null,"p1__50607#","p1__50607#",-902374003,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50608 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.tag.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword("tiltontec.tag.html","type","tiltontec.tag.html/type",-1460626477),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"td-toggle-completed!","td-toggle-completed!",1024639246,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50605#","p1__50605#",-1292720152,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null),cljs.core.list(new cljs.core.Symbol("dom","getAncestorByTagNameAndClass","dom/getAncestorByTagNameAndClass",1576389817,null),cljs.core.list(new cljs.core.Symbol(null,".-target",".-target",683579619,null),new cljs.core.Symbol(null,"p1__50605#","p1__50605#",-1292720152,null)),"li"),new cljs.core.Symbol(null,"edt-dom","edt-dom",315193713,null),cljs.core.list(new cljs.core.Symbol("dom","getElementByClass","dom/getElementByClass",-1709014822,null),"edit",new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null))], null),cljs.core.list(new cljs.core.Symbol("classlist","add","classlist/add",1850054952,null),new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null),"editing"),cljs.core.list(new cljs.core.Symbol("tag","input-editing-start","tag/input-editing-start",903280328,null),new cljs.core.Symbol(null,"edt-dom","edt-dom",315193713,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"td-delete!","td-delete!",1322716646,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50616 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword("tiltontec.tag.html","type","tiltontec.tag.html/type",-1460626477),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return todomx.todo.td_completed.call(null,todo);
});})(_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (){
return todomx.todo.td_toggle_completed_BANG_.call(null,todo);
});})(_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50618 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50618;
}});})(_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),((function (x__7615__auto__,_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (p1__50605_SHARP_){
var li_dom = goog.dom.getAncestorByTagNameAndClass(p1__50605_SHARP_.target,"li");
var edt_dom = goog.dom.getElementByClass("edit",li_dom);
goog.dom.classlist.add(li_dom,"editing");

return tiltontec.tag.html.input_editing_start.call(null,edt_dom,todomx.todo.td_title.call(null,todo));
});})(x__7615__auto__,_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50620 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = todomx.todo.td_title.call(null,todo);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50620;
}});})(x__7615__auto__,_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (){
return todomx.todo.td_delete_BANG_.call(null,todo);
});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50622 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50622;
}});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50616,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$2);
})(),x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50616;
}});})(_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"onblur","onblur",689939618),((function (x__7615__auto__,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (p1__50606_SHARP_){
return todomx.matrix.todo_edit.call(null,p1__50606_SHARP_,todo);
});})(x__7615__auto__,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
,new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),((function (x__7615__auto__,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (p1__50607_SHARP_){
return todomx.matrix.todo_edit.call(null,p1__50607_SHARP_,todo);
});})(x__7615__auto__,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50624 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50624;
}});})(x__7615__auto__,_STAR_par_STAR_50608,me__$1,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50608;
}})));
});
todomx.matrix.todo_edit = (function todomx$matrix$todo_edit(e,todo){
var edt_dom = e.target;
var li_dom = goog.dom.getAncestorByTagNameAndClass(edt_dom,"li");
if(cljs.core.truth_(goog.dom.classlist.contains(li_dom,"editing"))){
var title = clojure.string.trim.call(null,goog.dom.forms.getValue(edt_dom));
var stop_editing = ((function (title,edt_dom,li_dom){
return (function (){
return goog.dom.classlist.remove(li_dom,"editing");
});})(title,edt_dom,li_dom))
;
if((cljs.core._EQ_.call(null,e.type,"blur")) || (cljs.core._EQ_.call(null,e.key,"Enter"))){
stop_editing.call(null);

if(cljs.core._EQ_.call(null,title,"")){
return todomx.todo.td_delete_BANG_.call(null,todo);
} else {
return tiltontec.model.core.md_reset_BANG_.call(null,todo,new cljs.core.Keyword(null,"title","title",636505583),title);
}
} else {
if(cljs.core._EQ_.call(null,e.key,"Escape")){
return stop_editing.call(null);
} else {
return null;
}
}
} else {
return null;
}
});
todomx.matrix.dashboard_footer = (function todomx$matrix$dashboard_footer(){
return tiltontec.tag.gen.make_tag.call(null,"footer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"empty?","empty?",-1564122972))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return tiltontec.model.core.md_get.call(null,todomx.matrix.mx_todos.call(null,me),new cljs.core.Keyword(null,"empty?","empty?",-1564122972));
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-count",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))))], null)),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"filters"], null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"li","li",-1930876848,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected"))], null),new cljs.core.Symbol(null,"label","label",-936024965,null))))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"clear-completed",new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098)))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"td","td",-1174502416,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"td-delete!","td-delete!",1322716646,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))))], null),"Clear completed"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50625 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.tag.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-count",new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.pprint.cl_format.call(null,null,"<strong>~a</strong>  item~:P remaining",cljs.core.count.call(null,cljs.core.remove.call(null,todomx.todo.td_completed,todomx.matrix.mx_todo_items.call(null,me__$1))));
});})(_STAR_par_STAR_50625,me,cell,slot_name,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50627 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50627;
}});})(_STAR_par_STAR_50625,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"ul",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"filters"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"li","li",-1930876848,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected"))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50661 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = (function (){var iter__7561__auto__ = ((function (_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function todomx$matrix$dashboard_footer_$_iter__50678(s__50679){
return (new cljs.core.LazySeq(null,((function (_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (){
var s__50679__$1 = s__50679;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50679__$1);
if(temp__4657__auto__){
var s__50679__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50679__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__50679__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__50681 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__50680 = (0);
while(true){
if((i__50680 < size__7560__auto__)){
var vec__50682 = cljs.core._nth.call(null,c__7559__auto__,i__50680);
var label = cljs.core.nth.call(null,vec__50682,(0),null);
var route = cljs.core.nth.call(null,vec__50682,(1),null);
cljs.core.chunk_append.call(null,b__50681,tiltontec.tag.gen.make_tag.call(null,"li",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected"))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__50680,vec__50682,label,route,c__7559__auto__,size__7560__auto__,b__50681,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50685 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"a",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),route,new cljs.core.Keyword(null,"selector","selector",762528866),label,new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__50680,_STAR_par_STAR_50685,me__$2,cell__$2,slot_name__$2,cache__$2,vec__50682,label,route,c__7559__auto__,size__7560__auto__,b__50681,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$3)),todomx.matrix.mx_route.call(null,me__$3))){
return "selected";
} else {
return null;
}
});})(i__50680,_STAR_par_STAR_50685,me__$2,cell__$2,slot_name__$2,cache__$2,vec__50682,label,route,c__7559__auto__,size__7560__auto__,b__50681,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__50680,_STAR_par_STAR_50685,me__$2,cell__$2,slot_name__$2,cache__$2,vec__50682,label,route,c__7559__auto__,size__7560__auto__,b__50681,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50687 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50687;
}});})(i__50680,_STAR_par_STAR_50685,me__$2,cell__$2,slot_name__$2,cache__$2,vec__50682,label,route,c__7559__auto__,size__7560__auto__,b__50681,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50685;
}});})(i__50680,vec__50682,label,route,c__7559__auto__,size__7560__auto__,b__50681,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
)));

var G__50704 = (i__50680 + (1));
i__50680 = G__50704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50681),todomx$matrix$dashboard_footer_$_iter__50678.call(null,cljs.core.chunk_rest.call(null,s__50679__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50681),null);
}
} else {
var vec__50688 = cljs.core.first.call(null,s__50679__$2);
var label = cljs.core.nth.call(null,vec__50688,(0),null);
var route = cljs.core.nth.call(null,vec__50688,(1),null);
return cljs.core.cons.call(null,tiltontec.tag.gen.make_tag.call(null,"li",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected"))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (vec__50688,label,route,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50691 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"a",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),route,new cljs.core.Keyword(null,"selector","selector",762528866),label,new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50691,me__$2,cell__$2,slot_name__$2,cache__$2,vec__50688,label,route,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$3)),todomx.matrix.mx_route.call(null,me__$3))){
return "selected";
} else {
return null;
}
});})(_STAR_par_STAR_50691,me__$2,cell__$2,slot_name__$2,cache__$2,vec__50688,label,route,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_50691,me__$2,cell__$2,slot_name__$2,cache__$2,vec__50688,label,route,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50693 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50693;
}});})(_STAR_par_STAR_50691,me__$2,cell__$2,slot_name__$2,cache__$2,vec__50688,label,route,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50691;
}});})(vec__50688,label,route,s__50679__$2,temp__4657__auto__,_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
)),todomx$matrix$dashboard_footer_$_iter__50678.call(null,cljs.core.rest.call(null,s__50679__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
,null,null));
});})(_STAR_par_STAR_50661,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
;
return iter__7561__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50661;
}});})(x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"clear-completed",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.core.empty_QMARK_.call(null,tiltontec.model.core.md_get.call(null,todomx.matrix.mx_todos.call(null,me__$1),new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098)));
});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (){
var seq__50699 = cljs.core.seq.call(null,cljs.core.filter.call(null,todomx.todo.td_completed,todomx.matrix.mx_todo_items.call(null)));
var chunk__50700 = null;
var count__50701 = (0);
var i__50702 = (0);
while(true){
if((i__50702 < count__50701)){
var td = cljs.core._nth.call(null,chunk__50700,i__50702);
todomx.todo.td_delete_BANG_.call(null,td);

var G__50705 = seq__50699;
var G__50706 = chunk__50700;
var G__50707 = count__50701;
var G__50708 = (i__50702 + (1));
seq__50699 = G__50705;
chunk__50700 = G__50706;
count__50701 = G__50707;
i__50702 = G__50708;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50699);
if(temp__4657__auto__){
var seq__50699__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50699__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__50699__$1);
var G__50709 = cljs.core.chunk_rest.call(null,seq__50699__$1);
var G__50710 = c__7592__auto__;
var G__50711 = cljs.core.count.call(null,c__7592__auto__);
var G__50712 = (0);
seq__50699 = G__50709;
chunk__50700 = G__50710;
count__50701 = G__50711;
i__50702 = G__50712;
continue;
} else {
var td = cljs.core.first.call(null,seq__50699__$1);
todomx.todo.td_delete_BANG_.call(null,td);

var G__50713 = cljs.core.next.call(null,seq__50699__$1);
var G__50714 = null;
var G__50715 = (0);
var G__50716 = (0);
seq__50699 = G__50713;
chunk__50700 = G__50714;
count__50701 = G__50715;
i__50702 = G__50716;
continue;
}
} else {
return null;
}
}
break;
}
});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Clear completed")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_50703 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Clear completed"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50703;
}});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_50625,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$2);
})(),x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_50625;
}})));
});
todomx.matrix.mx_route = (function todomx$matrix$mx_route(mx){
return tiltontec.model.core.md_get.call(null,todomx.matrix.mx_find_matrix.call(null,mx),new cljs.core.Keyword(null,"route","route",329891309));
});
/**
 * Given a node in the matrix, navigate to the root and read the todos. After
 *   the matrix is initially loaded (say in an event handler), one can pass nil
 *   and find the matrix in @matrix. Put another way, a starting node is required
 *   during the matrix's initial build.
 */
todomx.matrix.mx_todos = (function todomx$matrix$mx_todos(var_args){
var G__50718 = arguments.length;
switch (G__50718) {
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
return tiltontec.model.core.md_get.call(null,cljs.core.deref.call(null,tiltontec.model.core.matrix),new cljs.core.Keyword(null,"todos","todos",630308868));
});

todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 = (function (mx){
if((mx == null)){
return todomx.matrix.mx_todos.call(null);
} else {
var mtrx = todomx.matrix.mx_find_matrix.call(null,mx);
if(cljs.core.truth_(mtrx)){
} else {
throw (new Error("Assert failed: mtrx"));
}

return tiltontec.model.core.md_get.call(null,mtrx,new cljs.core.Keyword(null,"todos","todos",630308868));
}
});

todomx.matrix.mx_todos.cljs$lang$maxFixedArity = 1;

todomx.matrix.mx_todo_items = (function todomx$matrix$mx_todo_items(var_args){
var G__50721 = arguments.length;
switch (G__50721) {
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
return todomx.matrix.mx_todo_items.call(null,null);
});

todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1 = (function (mx){
return tiltontec.model.core.md_get.call(null,todomx.matrix.mx_todos.call(null,mx),new cljs.core.Keyword(null,"items","items",1031954938));
});

todomx.matrix.mx_todo_items.cljs$lang$maxFixedArity = 1;

todomx.matrix.mx_find_matrix = (function todomx$matrix$mx_find_matrix(mx){
return tiltontec.model.core.mxu_find_type.call(null,mx,new cljs.core.Keyword("todomx.matrix","todoApp","todomx.matrix/todoApp",-2063259668));
});

//# sourceMappingURL=matrix.js.map