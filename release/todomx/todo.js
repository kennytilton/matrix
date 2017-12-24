// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('todomx.todo');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.tufte');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.tag.html');



todomx.todo.TODO_LS_PREFIX = "todos-matrixcljs.";
todomx.todo.todo_list = (function todomx$todo$todo_list(){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$todomx$todo_SLASH_todo_DASH_list,cljs.core.cst$kw$items_DASH_raw,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$load_DASH_all)),cljs.core.cst$kw$input_QMARK_,true,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR_27177 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return (todomx.todo.load_all.cljs$core$IFn$_invoke$arity$0 ? todomx.todo.load_all.cljs$core$IFn$_invoke$arity$0() : todomx.todo.load_all.call(null));
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_27177;
}})], 0)),cljs.core.cst$kw$items,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$p,cljs.core.cst$kw$items,cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$remove,cljs.core.cst$sym$td_DASH_deleted,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$items_DASH_raw))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var __pdata_or_pdata_ = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_deleted,tiltontec.model.core.md_get(me,cljs.core.cst$kw$items_DASH_raw)));
var __t1 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pdata_or_pdata_,cljs.core.cst$kw$items,(__t1 - __t0));

return __result;
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_deleted,tiltontec.model.core.md_get(me,cljs.core.cst$kw$items_DASH_raw)));
}
})], 0)),cljs.core.cst$kw$items_DASH_completed,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$p,cljs.core.cst$kw$completed,cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$items))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var __pdata_or_pdata_ = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,tiltontec.model.core.md_get(me,cljs.core.cst$kw$items)));
var __t1 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pdata_or_pdata_,cljs.core.cst$kw$completed,(__t1 - __t0));

return __result;
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,tiltontec.model.core.md_get(me,cljs.core.cst$kw$items)));
}
})], 0)),cljs.core.cst$kw$items_DASH_active,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$p,cljs.core.cst$kw$active,cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$remove,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$items))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var __pdata_or_pdata_ = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,tiltontec.model.core.md_get(me,cljs.core.cst$kw$items)));
var __t1 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pdata_or_pdata_,cljs.core.cst$kw$active,(__t1 - __t0));

return __result;
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,tiltontec.model.core.md_get(me,cljs.core.cst$kw$items)));
}
})], 0)),cljs.core.cst$kw$empty_QMARK_,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$first,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$items)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return (cljs.core.first(tiltontec.model.core.md_get(me,cljs.core.cst$kw$items)) == null);
})], 0))], 0));
});
/**
 * Make a matrix incarnation of a todo on initial entry
 */
todomx.todo.make_todo = (function todomx$todo$make_todo(islots){
var net_slots = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,cljs.core.cst$kw$todomx$todo_SLASH_todo,cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(todomx.todo.TODO_LS_PREFIX),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.util.core.uuidv4())].join(''),cljs.core.cst$kw$created,tiltontec.util.core.now(),cljs.core.cst$kw$title,tiltontec.cell.core.c_in(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(islots)),cljs.core.cst$kw$completed,tiltontec.cell.core.c_in(false),cljs.core.cst$kw$deleted,tiltontec.cell.core.c_in(null)], null)], 0));
var todo = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.make,cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,net_slots)));
(todomx.todo.td_upsert.cljs$core$IFn$_invoke$arity$1 ? todomx.todo.td_upsert.cljs$core$IFn$_invoke$arity$1(todo) : todomx.todo.td_upsert.call(null,todo));

return todo;
});
todomx.todo.bulk_todo = (function todomx$todo$bulk_todo(prefix,ct){
var n__7698__auto__ = ct;
var n = (0);
while(true){
if((n < n__7698__auto__)){
todomx.todo.make_todo(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null));

var G__27178 = (n + (1));
n = G__27178;
continue;
} else {
return null;
}
break;
}
});
todomx.todo.td_created = (function todomx$todo$td_created(td){
return tiltontec.model.core.md_get(td,cljs.core.cst$kw$created);
});
todomx.todo.td_title = (function todomx$todo$td_title(td){
return tiltontec.model.core.md_get(td,cljs.core.cst$kw$title);
});
todomx.todo.td_id = (function todomx$todo$td_id(td){
return tiltontec.model.core.md_get(td,cljs.core.cst$kw$id);
});
todomx.todo.td_completed = (function todomx$todo$td_completed(td){
return tiltontec.model.core.md_get(td,cljs.core.cst$kw$completed);
});
todomx.todo.td_deleted = (function todomx$todo$td_deleted(td){
return tiltontec.model.core.md_get(td,cljs.core.cst$kw$deleted);
});
todomx.todo.td_delete_BANG_ = (function todomx$todo$td_delete_BANG_(td){
if(cljs.core.truth_(td)){
} else {
throw (new Error("Assert failed: td"));
}

return tiltontec.model.core.md_reset_BANG_(td,cljs.core.cst$kw$deleted,tiltontec.util.core.now());
});
todomx.todo.td_toggle_completed_BANG_ = (function todomx$todo$td_toggle_completed_BANG_(td){
return tiltontec.model.core.md_reset_BANG_(td,cljs.core.cst$kw$completed,(cljs.core.truth_(todomx.todo.td_completed(td))?null:tiltontec.util.core.now()));
});
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$todomx$todo_SLASH_todo], null),(function (slot,me,new_val,old_val,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_val,tiltontec.cell.base.unbound)){
return null;
} else {
return (todomx.todo.td_upsert.cljs$core$IFn$_invoke$arity$1 ? todomx.todo.td_upsert.cljs$core$IFn$_invoke$arity$1(me) : todomx.todo.td_upsert.call(null,me));
}
}));
todomx.todo.load_all = (function todomx$todo$load_all(){
var keys = tiltontec.tag.html.io_find(todomx.todo.TODO_LS_PREFIX);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (td_id){
var G__27179 = tiltontec.util.core.json_to_map(JSON.parse(tiltontec.tag.html.io_read(td_id)));
return (todomx.todo.remake_todo.cljs$core$IFn$_invoke$arity$1 ? todomx.todo.remake_todo.cljs$core$IFn$_invoke$arity$1(G__27179) : todomx.todo.remake_todo.call(null,G__27179));
});})(keys))
,tiltontec.tag.html.io_find(todomx.todo.TODO_LS_PREFIX));
});
todomx.todo.remake_todo = (function todomx$todo$remake_todo(islots){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.make,cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([islots,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$todomx$todo_SLASH_todo,cljs.core.cst$kw$title,tiltontec.cell.core.c_in(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(islots)),cljs.core.cst$kw$completed,tiltontec.cell.core.c_in(cljs.core.cst$kw$completed.cljs$core$IFn$_invoke$arity$2(islots,false)),cljs.core.cst$kw$deleted,(function (){var or__6774__auto__ = cljs.core.cst$kw$deleted.cljs$core$IFn$_invoke$arity$1(islots);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return tiltontec.cell.core.c_in(null);
}
})()], null)], 0)))));
});
todomx.todo.td_upsert = (function todomx$todo$td_upsert(td){
return tiltontec.tag.html.io_upsert(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(td)),JSON.stringify((todomx.todo.td_to_json.cljs$core$IFn$_invoke$arity$1 ? todomx.todo.td_to_json.cljs$core$IFn$_invoke$arity$1(td) : todomx.todo.td_to_json.call(null,td))));
});
todomx.todo.td_to_json = (function todomx$todo$td_to_json(todo){
return tiltontec.util.core.map_to_json(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7563__auto__ = (function todomx$todo$td_to_json_$_iter__27180(s__27181){
return (new cljs.core.LazySeq(null,(function (){
var s__27181__$1 = s__27181;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27181__$1);
if(temp__4657__auto__){
var s__27181__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27181__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__27181__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__27183 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__27182 = (0);
while(true){
if((i__27182 < size__7562__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__27182);
cljs.core.chunk_append(b__27183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core.md_get(todo,k)], null));

var G__27184 = (i__27182 + (1));
i__27182 = G__27184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27183),todomx$todo$td_to_json_$_iter__27180(cljs.core.chunk_rest(s__27181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27183),null);
}
} else {
var k = cljs.core.first(s__27181__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core.md_get(todo,k)], null),todomx$todo$td_to_json_$_iter__27180(cljs.core.rest(s__27181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$created,cljs.core.cst$kw$title,cljs.core.cst$kw$completed,cljs.core.cst$kw$deleted], null));
})()));
});
