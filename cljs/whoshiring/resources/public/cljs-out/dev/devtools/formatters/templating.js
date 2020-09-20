// Compiled by ClojureScript 1.10.773 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x19431_19432 = value;
(x19431_19432.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x19434_19435 = value;
(x19434_19435.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x19437_19438 = value;
(x19437_19438.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,(value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19445 = arguments.length;
var i__4737__auto___19446 = (0);
while(true){
if((i__4737__auto___19446 < len__4736__auto___19445)){
args__4742__auto__.push((arguments[i__4737__auto___19446]));

var G__19447 = (i__4737__auto___19446 + (1));
i__4737__auto___19446 = G__19447;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__19441_19448 = cljs.core.seq.call(null,items);
var chunk__19442_19449 = null;
var count__19443_19450 = (0);
var i__19444_19451 = (0);
while(true){
if((i__19444_19451 < count__19443_19450)){
var item_19452 = cljs.core._nth.call(null,chunk__19442_19449,i__19444_19451);
if((!((item_19452 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_19452)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_19452)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_19452));
}
} else {
}


var G__19453 = seq__19441_19448;
var G__19454 = chunk__19442_19449;
var G__19455 = count__19443_19450;
var G__19456 = (i__19444_19451 + (1));
seq__19441_19448 = G__19453;
chunk__19442_19449 = G__19454;
count__19443_19450 = G__19455;
i__19444_19451 = G__19456;
continue;
} else {
var temp__5720__auto___19457 = cljs.core.seq.call(null,seq__19441_19448);
if(temp__5720__auto___19457){
var seq__19441_19458__$1 = temp__5720__auto___19457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19441_19458__$1)){
var c__4556__auto___19459 = cljs.core.chunk_first.call(null,seq__19441_19458__$1);
var G__19460 = cljs.core.chunk_rest.call(null,seq__19441_19458__$1);
var G__19461 = c__4556__auto___19459;
var G__19462 = cljs.core.count.call(null,c__4556__auto___19459);
var G__19463 = (0);
seq__19441_19448 = G__19460;
chunk__19442_19449 = G__19461;
count__19443_19450 = G__19462;
i__19444_19451 = G__19463;
continue;
} else {
var item_19464 = cljs.core.first.call(null,seq__19441_19458__$1);
if((!((item_19464 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_19464)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_19464)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_19464));
}
} else {
}


var G__19465 = cljs.core.next.call(null,seq__19441_19458__$1);
var G__19466 = null;
var G__19467 = (0);
var G__19468 = (0);
seq__19441_19448 = G__19465;
chunk__19442_19449 = G__19466;
count__19443_19450 = G__19467;
i__19444_19451 = G__19468;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq19440){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19440));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19476 = arguments.length;
var i__4737__auto___19477 = (0);
while(true){
if((i__4737__auto___19477 < len__4736__auto___19476)){
args__4742__auto__.push((arguments[i__4737__auto___19477]));

var G__19478 = (i__4737__auto___19477 + (1));
i__4737__auto___19477 = G__19478;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__19472_19479 = cljs.core.seq.call(null,children);
var chunk__19473_19480 = null;
var count__19474_19481 = (0);
var i__19475_19482 = (0);
while(true){
if((i__19475_19482 < count__19474_19481)){
var child_19483 = cljs.core._nth.call(null,chunk__19473_19480,i__19475_19482);
if((!((child_19483 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_19483)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_19483))));
} else {
var temp__5718__auto___19484 = devtools.formatters.helpers.pref.call(null,child_19483);
if(cljs.core.truth_(temp__5718__auto___19484)){
var child_value_19485 = temp__5718__auto___19484;
template.push(child_value_19485);
} else {
}
}
} else {
}


var G__19486 = seq__19472_19479;
var G__19487 = chunk__19473_19480;
var G__19488 = count__19474_19481;
var G__19489 = (i__19475_19482 + (1));
seq__19472_19479 = G__19486;
chunk__19473_19480 = G__19487;
count__19474_19481 = G__19488;
i__19475_19482 = G__19489;
continue;
} else {
var temp__5720__auto___19490 = cljs.core.seq.call(null,seq__19472_19479);
if(temp__5720__auto___19490){
var seq__19472_19491__$1 = temp__5720__auto___19490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19472_19491__$1)){
var c__4556__auto___19492 = cljs.core.chunk_first.call(null,seq__19472_19491__$1);
var G__19493 = cljs.core.chunk_rest.call(null,seq__19472_19491__$1);
var G__19494 = c__4556__auto___19492;
var G__19495 = cljs.core.count.call(null,c__4556__auto___19492);
var G__19496 = (0);
seq__19472_19479 = G__19493;
chunk__19473_19480 = G__19494;
count__19474_19481 = G__19495;
i__19475_19482 = G__19496;
continue;
} else {
var child_19497 = cljs.core.first.call(null,seq__19472_19491__$1);
if((!((child_19497 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_19497)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_19497))));
} else {
var temp__5718__auto___19498 = devtools.formatters.helpers.pref.call(null,child_19497);
if(cljs.core.truth_(temp__5718__auto___19498)){
var child_value_19499 = temp__5718__auto___19498;
template.push(child_value_19499);
} else {
}
}
} else {
}


var G__19500 = cljs.core.next.call(null,seq__19472_19491__$1);
var G__19501 = null;
var G__19502 = (0);
var G__19503 = (0);
seq__19472_19479 = G__19500;
chunk__19473_19480 = G__19501;
count__19474_19481 = G__19502;
i__19475_19482 = G__19503;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq19469){
var G__19470 = cljs.core.first.call(null,seq19469);
var seq19469__$1 = cljs.core.next.call(null,seq19469);
var G__19471 = cljs.core.first.call(null,seq19469__$1);
var seq19469__$2 = cljs.core.next.call(null,seq19469__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19470,G__19471,seq19469__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19506 = arguments.length;
var i__4737__auto___19507 = (0);
while(true){
if((i__4737__auto___19507 < len__4736__auto___19506)){
args__4742__auto__.push((arguments[i__4737__auto___19507]));

var G__19508 = (i__4737__auto___19507 + (1));
i__4737__auto___19507 = G__19508;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq19504){
var G__19505 = cljs.core.first.call(null,seq19504);
var seq19504__$1 = cljs.core.next.call(null,seq19504);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19505,seq19504__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19511 = arguments.length;
var i__4737__auto___19512 = (0);
while(true){
if((i__4737__auto___19512 < len__4736__auto___19511)){
args__4742__auto__.push((arguments[i__4737__auto___19512]));

var G__19513 = (i__4737__auto___19512 + (1));
i__4737__auto___19512 = G__19513;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq19509){
var G__19510 = cljs.core.first.call(null,seq19509);
var seq19509__$1 = cljs.core.next.call(null,seq19509);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19510,seq19509__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__19515 = arguments.length;
switch (G__19515) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj19517 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4126__auto__ = start_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()});
return obj19517;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19525 = arguments.length;
var i__4737__auto___19526 = (0);
while(true){
if((i__4737__auto___19526 < len__4736__auto___19525)){
args__4742__auto__.push((arguments[i__4737__auto___19526]));

var G__19527 = (i__4737__auto___19526 + (1));
i__4737__auto___19526 = G__19527;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__19521){
var vec__19522 = p__19521;
var state_override_fn = cljs.core.nth.call(null,vec__19522,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = (((!((state_override_fn == null))))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq19519){
var G__19520 = cljs.core.first.call(null,seq19519);
var seq19519__$1 = cljs.core.next.call(null,seq19519);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19520,seq19519__$1);
}));

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__19528 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__19529 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__19529);

try{return cljs.core.pr_str.call(null,markup);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__19528);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__19530 = name;
switch (G__19530) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__19532 = tag;
var html_tag = cljs.core.nth.call(null,vec__19532,(0),null);
var style = cljs.core.nth.call(null,vec__19532,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__19535 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__19536 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__19536);

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__19535);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__19537 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__19538 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__19539 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__19540 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__19539);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__19540);

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__19538);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__19537);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__19541 = initial_value;
var G__19542 = value.call(null);
initial_value = G__19541;
value = G__19542;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__19543 = initial_value;
var G__19544 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__19543;
value = G__19544;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__19545 = initial_value;
var G__19546 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__19545;
value = G__19546;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_.call(null,value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map
