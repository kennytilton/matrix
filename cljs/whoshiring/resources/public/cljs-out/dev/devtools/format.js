// Compiled by ClojureScript 1.10.773 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_15599 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._header[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,value);
} else {
var m__4426__auto__ = (devtools.format._header["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_15599.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_15600 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._has_body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,value);
} else {
var m__4426__auto__ = (devtools.format._has_body["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_15600.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_15601 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,value);
} else {
var m__4426__auto__ = (devtools.format._body["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_15601.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o15602 = temp__5718__auto__;
var temp__5718__auto____$1 = (o15602["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o15603 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o15603["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o15604 = temp__5718__auto____$2;
return (o15604["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o15605 = temp__5718__auto__;
var temp__5718__auto____$1 = (o15605["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o15606 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o15606["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o15607 = temp__5718__auto____$2;
return (o15607["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o15608 = temp__5718__auto__;
var temp__5718__auto____$1 = (o15608["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o15609 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o15609["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o15610 = temp__5718__auto____$2;
return (o15610["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o15611 = temp__5718__auto__;
var temp__5718__auto____$1 = (o15611["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o15612 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o15612["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o15613 = temp__5718__auto____$2;
return (o15613["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o15614 = temp__5718__auto__;
var temp__5718__auto____$1 = (o15614["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o15615 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o15615["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o15616 = temp__5718__auto____$2;
return (o15616["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o15617 = temp__5718__auto__;
var temp__5718__auto____$1 = (o15617["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o15618 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o15618["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o15619 = temp__5718__auto____$2;
return (o15619["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o15620 = temp__5718__auto__;
var temp__5718__auto____$1 = (o15620["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o15621 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o15621["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o15622 = temp__5718__auto____$2;
return (o15622["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15624 = arguments.length;
var i__4737__auto___15625 = (0);
while(true){
if((i__4737__auto___15625 < len__4736__auto___15624)){
args__4742__auto__.push((arguments[i__4737__auto___15625]));

var G__15626 = (i__4737__auto___15625 + (1));
i__4737__auto___15625 = G__15626;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq15623){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15623));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15628 = arguments.length;
var i__4737__auto___15629 = (0);
while(true){
if((i__4737__auto___15629 < len__4736__auto___15628)){
args__4742__auto__.push((arguments[i__4737__auto___15629]));

var G__15630 = (i__4737__auto___15629 + (1));
i__4737__auto___15629 = G__15630;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq15627){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15627));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15632 = arguments.length;
var i__4737__auto___15633 = (0);
while(true){
if((i__4737__auto___15633 < len__4736__auto___15632)){
args__4742__auto__.push((arguments[i__4737__auto___15633]));

var G__15634 = (i__4737__auto___15633 + (1));
i__4737__auto___15633 = G__15634;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq15631){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15631));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15636 = arguments.length;
var i__4737__auto___15637 = (0);
while(true){
if((i__4737__auto___15637 < len__4736__auto___15636)){
args__4742__auto__.push((arguments[i__4737__auto___15637]));

var G__15638 = (i__4737__auto___15637 + (1));
i__4737__auto___15637 = G__15638;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq15635){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15635));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15640 = arguments.length;
var i__4737__auto___15641 = (0);
while(true){
if((i__4737__auto___15641 < len__4736__auto___15640)){
args__4742__auto__.push((arguments[i__4737__auto___15641]));

var G__15642 = (i__4737__auto___15641 + (1));
i__4737__auto___15641 = G__15642;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq15639){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15639));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15644 = arguments.length;
var i__4737__auto___15645 = (0);
while(true){
if((i__4737__auto___15645 < len__4736__auto___15644)){
args__4742__auto__.push((arguments[i__4737__auto___15645]));

var G__15646 = (i__4737__auto___15645 + (1));
i__4737__auto___15645 = G__15646;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq15643){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15643));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15648 = arguments.length;
var i__4737__auto___15649 = (0);
while(true){
if((i__4737__auto___15649 < len__4736__auto___15648)){
args__4742__auto__.push((arguments[i__4737__auto___15649]));

var G__15650 = (i__4737__auto___15649 + (1));
i__4737__auto___15649 = G__15650;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq15647){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15647));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15658 = arguments.length;
var i__4737__auto___15659 = (0);
while(true){
if((i__4737__auto___15659 < len__4736__auto___15658)){
args__4742__auto__.push((arguments[i__4737__auto___15659]));

var G__15660 = (i__4737__auto___15659 + (1));
i__4737__auto___15659 = G__15660;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__15654){
var vec__15655 = p__15654;
var state_override = cljs.core.nth.call(null,vec__15655,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__15651_SHARP_){
return cljs.core.merge.call(null,p1__15651_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq15652){
var G__15653 = cljs.core.first.call(null,seq15652);
var seq15652__$1 = cljs.core.next.call(null,seq15652);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15653,seq15652__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15662 = arguments.length;
var i__4737__auto___15663 = (0);
while(true){
if((i__4737__auto___15663 < len__4736__auto___15662)){
args__4742__auto__.push((arguments[i__4737__auto___15663]));

var G__15664 = (i__4737__auto___15663 + (1));
i__4737__auto___15663 = G__15664;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq15661){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15661));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15667 = arguments.length;
var i__4737__auto___15668 = (0);
while(true){
if((i__4737__auto___15668 < len__4736__auto___15667)){
args__4742__auto__.push((arguments[i__4737__auto___15668]));

var G__15669 = (i__4737__auto___15668 + (1));
i__4737__auto___15668 = G__15669;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq15665){
var G__15666 = cljs.core.first.call(null,seq15665);
var seq15665__$1 = cljs.core.next.call(null,seq15665);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15666,seq15665__$1);
}));


//# sourceMappingURL=format.js.map
