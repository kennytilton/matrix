// Compiled by ClojureScript 1.10.773 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__15490__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__15490__auto__["add"]).call(o__15490__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__15490__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__15490__auto__["delete"]).call(o__15490__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__15490__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__15490__auto__["has"]).call(o__15490__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__19976 = data;
var target__15495__auto__ = G__19976;
if(cljs.core.truth_(target__15495__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19976)].join(''),"\n","target__15495__auto__"].join('')));
}

(target__15495__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__19976;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_19981 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_19981);
} else {
var seq__19977_19982 = cljs.core.seq.call(null,json_ml);
var chunk__19978_19983 = null;
var count__19979_19984 = (0);
var i__19980_19985 = (0);
while(true){
if((i__19980_19985 < count__19979_19984)){
var item_19986 = cljs.core._nth.call(null,chunk__19978_19983,i__19980_19985);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_19986,new_depth_budget_19981);


var G__19987 = seq__19977_19982;
var G__19988 = chunk__19978_19983;
var G__19989 = count__19979_19984;
var G__19990 = (i__19980_19985 + (1));
seq__19977_19982 = G__19987;
chunk__19978_19983 = G__19988;
count__19979_19984 = G__19989;
i__19980_19985 = G__19990;
continue;
} else {
var temp__5720__auto___19991 = cljs.core.seq.call(null,seq__19977_19982);
if(temp__5720__auto___19991){
var seq__19977_19992__$1 = temp__5720__auto___19991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19977_19992__$1)){
var c__4556__auto___19993 = cljs.core.chunk_first.call(null,seq__19977_19992__$1);
var G__19994 = cljs.core.chunk_rest.call(null,seq__19977_19992__$1);
var G__19995 = c__4556__auto___19993;
var G__19996 = cljs.core.count.call(null,c__4556__auto___19993);
var G__19997 = (0);
seq__19977_19982 = G__19994;
chunk__19978_19983 = G__19995;
count__19979_19984 = G__19996;
i__19980_19985 = G__19997;
continue;
} else {
var item_19998 = cljs.core.first.call(null,seq__19977_19992__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_19998,new_depth_budget_19981);


var G__19999 = cljs.core.next.call(null,seq__19977_19992__$1);
var G__20000 = null;
var G__20001 = (0);
var G__20002 = (0);
seq__19977_19982 = G__19999;
chunk__19978_19983 = G__20000;
count__19979_19984 = G__20001;
i__19980_19985 = G__20002;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5718__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5718__auto__)){
var initial_hierarchy_depth_budget = temp__5718__auto__;
var remaining_depth_budget = (function (){var or__4126__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map
