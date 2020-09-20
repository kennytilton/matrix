// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__14978 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14979 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14979);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__14980 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14981 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14981);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14980);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14978);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__14983 = arguments.length;
switch (G__14983) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__14984 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__14984,(0),null);
var callback = cljs.core.nth.call(null,vec__14984,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__14988_15004 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__14989_15005 = null;
var count__14990_15006 = (0);
var i__14991_15007 = (0);
while(true){
if((i__14991_15007 < count__14990_15006)){
var vec__14998_15008 = cljs.core._nth.call(null,chunk__14989_15005,i__14991_15007);
var container_15009 = cljs.core.nth.call(null,vec__14998_15008,(0),null);
var comp_15010 = cljs.core.nth.call(null,vec__14998_15008,(1),null);
reagent.dom.re_render_component.call(null,comp_15010,container_15009);


var G__15011 = seq__14988_15004;
var G__15012 = chunk__14989_15005;
var G__15013 = count__14990_15006;
var G__15014 = (i__14991_15007 + (1));
seq__14988_15004 = G__15011;
chunk__14989_15005 = G__15012;
count__14990_15006 = G__15013;
i__14991_15007 = G__15014;
continue;
} else {
var temp__5720__auto___15015 = cljs.core.seq.call(null,seq__14988_15004);
if(temp__5720__auto___15015){
var seq__14988_15016__$1 = temp__5720__auto___15015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14988_15016__$1)){
var c__4556__auto___15017 = cljs.core.chunk_first.call(null,seq__14988_15016__$1);
var G__15018 = cljs.core.chunk_rest.call(null,seq__14988_15016__$1);
var G__15019 = c__4556__auto___15017;
var G__15020 = cljs.core.count.call(null,c__4556__auto___15017);
var G__15021 = (0);
seq__14988_15004 = G__15018;
chunk__14989_15005 = G__15019;
count__14990_15006 = G__15020;
i__14991_15007 = G__15021;
continue;
} else {
var vec__15001_15022 = cljs.core.first.call(null,seq__14988_15016__$1);
var container_15023 = cljs.core.nth.call(null,vec__15001_15022,(0),null);
var comp_15024 = cljs.core.nth.call(null,vec__15001_15022,(1),null);
reagent.dom.re_render_component.call(null,comp_15024,container_15023);


var G__15025 = cljs.core.next.call(null,seq__14988_15016__$1);
var G__15026 = null;
var G__15027 = (0);
var G__15028 = (0);
seq__14988_15004 = G__15025;
chunk__14989_15005 = G__15026;
count__14990_15006 = G__15027;
i__14991_15007 = G__15028;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
