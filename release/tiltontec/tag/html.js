// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.tag.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.pprint');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('goog.dom');
goog.require('goog.html.SafeHtml');
goog.require('goog.dom.classlist');
goog.require('goog.html.sanitizer.HtmlSanitizer');
goog.require('goog.editor.focus');
goog.require('goog.ui.Control');
goog.require('goog.dom.selection');
goog.require('goog.dom.forms');
goog.require('taoensso.tufte');
tiltontec.tag.html._STAR_tag_trace_STAR_ = false;
tiltontec.tag.html.tagfo = (function tiltontec$tag$html$tagfo(me){
return cljs.core.select_keys(cljs.core.deref(me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$tag,cljs.core.cst$kw$class,cljs.core.cst$kw$name], null));
});
tiltontec.tag.html.dom_has_class = (function tiltontec$tag$html$dom_has_class(dom,class$){
return goog.dom.classlist.contains(dom,class$);
});
tiltontec.tag.html.dom_ancestor_by_class = (function tiltontec$tag$html$dom_ancestor_by_class(dom,class$){
return goog.dom.getAncestorByTagNameAndClass(dom,null,class$);
});
tiltontec.tag.html.dom_ancestor_by_tag = (function tiltontec$tag$html$dom_ancestor_by_tag(dom,tag){
return goog.dom.getAncestorByTagNameAndClass(dom,tag);
});
tiltontec.tag.html.map_less_nils = (function tiltontec$tag$html$map_less_nils(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__7563__auto__ = (function tiltontec$tag$html$map_less_nils_$_iter__26944(s__26945){
return (new cljs.core.LazySeq(null,(function (){
var s__26945__$1 = s__26945;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26945__$1);
if(temp__4657__auto__){
var s__26945__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26945__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__26945__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__26947 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__26946 = (0);
while(true){
if((i__26946 < size__7562__auto__)){
var vec__26948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__26946);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26948,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26948,(1),null);
if((v == null)){
cljs.core.chunk_append(b__26947,k);

var G__26954 = (i__26946 + (1));
i__26946 = G__26954;
continue;
} else {
var G__26955 = (i__26946 + (1));
i__26946 = G__26955;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26947),tiltontec$tag$html$map_less_nils_$_iter__26944(cljs.core.chunk_rest(s__26945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26947),null);
}
} else {
var vec__26951 = cljs.core.first(s__26945__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26951,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26951,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$tag$html$map_less_nils_$_iter__26944(cljs.core.rest(s__26945__$2)));
} else {
var G__26956 = cljs.core.rest(s__26945__$2);
s__26945__$1 = G__26956;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__(m);
})());
});
tiltontec.tag.html.tag_attrs = (function tiltontec$tag$html$tag_attrs(mx){
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__7563__auto__ = (function tiltontec$tag$html$tag_attrs_$_iter__26957(s__26958){
return (new cljs.core.LazySeq(null,(function (){
var s__26958__$1 = s__26958;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26958__$1);
if(temp__4657__auto__){
var s__26958__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26958__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__26958__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__26960 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__26959 = (0);
while(true){
if((i__26959 < size__7562__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__26959);
cljs.core.chunk_append(b__26960,(function (){var temp__4657__auto____$1 = tiltontec.model.core.md_get(mx,k);
if(cljs.core.truth_(temp__4657__auto____$1)){
var v = temp__4657__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),v], null);
} else {
return null;
}
})());

var G__26961 = (i__26959 + (1));
i__26959 = G__26961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26960),tiltontec$tag$html$tag_attrs_$_iter__26957(cljs.core.chunk_rest(s__26958__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26960),null);
}
} else {
var k = cljs.core.first(s__26958__$2);
return cljs.core.cons((function (){var temp__4657__auto____$1 = tiltontec.model.core.md_get(mx,k);
if(cljs.core.truth_(temp__4657__auto____$1)){
var v = temp__4657__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),v], null);
} else {
return null;
}
})(),tiltontec$tag$html$tag_attrs_$_iter__26957(cljs.core.rest(s__26958__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class,cljs.core.cst$kw$hidden,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$checked,cljs.core.cst$kw$disabled,cljs.core.cst$kw$autofocus,cljs.core.cst$kw$href,cljs.core.cst$kw$tiltontec$tag$html_SLASH_type,cljs.core.cst$kw$for,cljs.core.cst$kw$onclick,cljs.core.cst$kw$ondblclick,cljs.core.cst$kw$onkeypress,cljs.core.cst$kw$onblur,cljs.core.cst$kw$onmouseover,cljs.core.cst$kw$onchange,cljs.core.cst$kw$onkeydown,cljs.core.cst$kw$id,cljs.core.cst$kw$tagsid,cljs.core.cst$kw$style,cljs.core.cst$kw$value], null));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,beef));
});
tiltontec.tag.html.tag_dom_create = (function tiltontec$tag$html$tag_dom_create(var_args){
var G__26964 = arguments.length;
switch (G__26964) {
case 1:
return tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1 = (function (me){
return tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(me,null);
});

tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2 = (function (me,dbg){
if(typeof me === 'string'){
var G__26965 = goog.html.sanitizer.HtmlSanitizer.sanitize(me);
return goog.dom.safeHtmlToNode(G__26965);
} else {
if(cljs.core.coll_QMARK_(me)){
var frag = document.createDocumentFragment();
var seq__26966_26975 = cljs.core.seq(me);
var chunk__26967_26976 = null;
var count__26968_26977 = (0);
var i__26969_26978 = (0);
while(true){
if((i__26969_26978 < count__26968_26977)){
var tag_26979 = chunk__26967_26976.cljs$core$IIndexed$_nth$arity$2(null,i__26969_26978);
var G__26970_26980 = frag;
var G__26971_26981 = tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_26979);
goog.dom.appendChild(G__26970_26980,G__26971_26981);

var G__26982 = seq__26966_26975;
var G__26983 = chunk__26967_26976;
var G__26984 = count__26968_26977;
var G__26985 = (i__26969_26978 + (1));
seq__26966_26975 = G__26982;
chunk__26967_26976 = G__26983;
count__26968_26977 = G__26984;
i__26969_26978 = G__26985;
continue;
} else {
var temp__4657__auto___26986 = cljs.core.seq(seq__26966_26975);
if(temp__4657__auto___26986){
var seq__26966_26987__$1 = temp__4657__auto___26986;
if(cljs.core.chunked_seq_QMARK_(seq__26966_26987__$1)){
var c__7594__auto___26988 = cljs.core.chunk_first(seq__26966_26987__$1);
var G__26989 = cljs.core.chunk_rest(seq__26966_26987__$1);
var G__26990 = c__7594__auto___26988;
var G__26991 = cljs.core.count(c__7594__auto___26988);
var G__26992 = (0);
seq__26966_26975 = G__26989;
chunk__26967_26976 = G__26990;
count__26968_26977 = G__26991;
i__26969_26978 = G__26992;
continue;
} else {
var tag_26993 = cljs.core.first(seq__26966_26987__$1);
var G__26972_26994 = frag;
var G__26973_26995 = tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_26993);
goog.dom.appendChild(G__26972_26994,G__26973_26995);

var G__26996 = cljs.core.next(seq__26966_26987__$1);
var G__26997 = null;
var G__26998 = (0);
var G__26999 = (0);
seq__26966_26975 = G__26996;
chunk__26967_26976 = G__26997;
count__26968_26977 = G__26998;
i__26969_26978 = G__26999;
continue;
}
} else {
}
}
break;
}

return frag;
} else {
var temp__4657__auto___27000 = (function (){var or__6774__auto__ = dbg;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return tiltontec.tag.html._STAR_tag_trace_STAR_;
}
})();
if(cljs.core.truth_(temp__4657__auto___27000)){
var dbg_27001__$1 = temp__4657__auto___27000;
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_dom_DASH_create,dbg_27001__$1,tiltontec.tag.html.tagfo(me)], 0));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.md_get(me,cljs.core.cst$kw$tag),tiltontec.tag.html.tag_attrs(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26962_SHARP_){
return tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__26962_SHARP_,dbg);
}),tiltontec.model.core.md_get(me,cljs.core.cst$kw$kids)),(function (){var temp__4657__auto__ = tiltontec.model.core.md_get(me,cljs.core.cst$kw$content);
if(cljs.core.truth_(temp__4657__auto__)){
var c = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(c)], null);
} else {
return null;
}
})()));

}
}
});

tiltontec.tag.html.tag_dom_create.cljs$lang$maxFixedArity = 2;

tiltontec.tag.html._PLUS_true_html_PLUS_ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tiltontec$tag$html_SLASH_type,"type"], null);
tiltontec.tag.html.true_html = (function tiltontec$tag$html$true_html(keyword){
var or__6774__auto__ = (keyword.cljs$core$IFn$_invoke$arity$1 ? keyword.cljs$core$IFn$_invoke$arity$1(tiltontec.tag.html._PLUS_true_html_PLUS_) : keyword.call(null,tiltontec.tag.html._PLUS_true_html_PLUS_));
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.name(keyword);
}
});
tiltontec.tag.html.tag_dom = (function tiltontec$tag$html$tag_dom(me){
var id = tiltontec.model.core.md_get(me,cljs.core.cst$kw$id);
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

var or__6774__auto__ = tiltontec.model.core.md_get(me,cljs.core.cst$kw$dom_DASH_cache);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var temp__4655__auto__ = (function (){var G__27002 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
return goog.dom.getElement(G__27002);
})();
if(cljs.core.truth_(temp__4655__auto__)){
var dom = temp__4655__auto__;
return tiltontec.model.core.backdoor_reset_BANG_(me,cljs.core.cst$kw$dom_DASH_cache,dom);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$no_DASH_element,id,cljs.core.cst$kw$found], 0));
}
}
});
tiltontec.tag.html.tag = (function tiltontec$tag$html$tag(me){
return tiltontec.model.core.md_get(me,cljs.core.cst$kw$tag);
});
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$tiltontec$tag$html_SLASH_tag], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
var __pdata_or_pdata_ = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0 ? taoensso.tufte.impl.pdata_proxy.cljs$core$IFn$_invoke$arity$0() : taoensso.tufte.impl.pdata_proxy.call(null));
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result = (function (){var pdom = tiltontec.tag.html.tag_dom(me);
var lost = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv));
var gained = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
if(cljs.core.empty_QMARK_(gained)){
var seq__27003 = cljs.core.seq(lost);
var chunk__27004 = null;
var count__27005 = (0);
var i__27006 = (0);
while(true){
if((i__27006 < count__27005)){
var oldk = chunk__27004.cljs$core$IIndexed$_nth$arity$2(null,i__27006);
pdom.removeChild(tiltontec.tag.html.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.not_to_be.call(null,oldk));
}

var G__27035 = seq__27003;
var G__27036 = chunk__27004;
var G__27037 = count__27005;
var G__27038 = (i__27006 + (1));
seq__27003 = G__27035;
chunk__27004 = G__27036;
count__27005 = G__27037;
i__27006 = G__27038;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__27003);
if(temp__4657__auto__){
var seq__27003__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27003__$1)){
var c__7594__auto__ = cljs.core.chunk_first(seq__27003__$1);
var G__27039 = cljs.core.chunk_rest(seq__27003__$1);
var G__27040 = c__7594__auto__;
var G__27041 = cljs.core.count(c__7594__auto__);
var G__27042 = (0);
seq__27003 = G__27039;
chunk__27004 = G__27040;
count__27005 = G__27041;
i__27006 = G__27042;
continue;
} else {
var oldk = cljs.core.first(seq__27003__$1);
pdom.removeChild(tiltontec.tag.html.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.not_to_be.call(null,oldk));
}

var G__27043 = cljs.core.next(seq__27003__$1);
var G__27044 = null;
var G__27045 = (0);
var G__27046 = (0);
seq__27003 = G__27043;
chunk__27004 = G__27044;
count__27005 = G__27045;
i__27006 = G__27046;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var frag = document.createDocumentFragment();
var seq__27007_27047 = cljs.core.seq(lost);
var chunk__27008_27048 = null;
var count__27009_27049 = (0);
var i__27010_27050 = (0);
while(true){
if((i__27010_27050 < count__27009_27049)){
var oldk_27051 = chunk__27008_27048.cljs$core$IIndexed$_nth$arity$2(null,i__27010_27050);
if(typeof oldk_27051 === 'string'){
} else {
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk_27051) : tiltontec.cell.evaluate.not_to_be.call(null,oldk_27051));
}

var G__27052 = seq__27007_27047;
var G__27053 = chunk__27008_27048;
var G__27054 = count__27009_27049;
var G__27055 = (i__27010_27050 + (1));
seq__27007_27047 = G__27052;
chunk__27008_27048 = G__27053;
count__27009_27049 = G__27054;
i__27010_27050 = G__27055;
continue;
} else {
var temp__4657__auto___27056 = cljs.core.seq(seq__27007_27047);
if(temp__4657__auto___27056){
var seq__27007_27057__$1 = temp__4657__auto___27056;
if(cljs.core.chunked_seq_QMARK_(seq__27007_27057__$1)){
var c__7594__auto___27058 = cljs.core.chunk_first(seq__27007_27057__$1);
var G__27059 = cljs.core.chunk_rest(seq__27007_27057__$1);
var G__27060 = c__7594__auto___27058;
var G__27061 = cljs.core.count(c__7594__auto___27058);
var G__27062 = (0);
seq__27007_27047 = G__27059;
chunk__27008_27048 = G__27060;
count__27009_27049 = G__27061;
i__27010_27050 = G__27062;
continue;
} else {
var oldk_27063 = cljs.core.first(seq__27007_27057__$1);
if(typeof oldk_27063 === 'string'){
} else {
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk_27063) : tiltontec.cell.evaluate.not_to_be.call(null,oldk_27063));
}

var G__27064 = cljs.core.next(seq__27007_27057__$1);
var G__27065 = null;
var G__27066 = (0);
var G__27067 = (0);
seq__27007_27047 = G__27064;
chunk__27008_27048 = G__27065;
count__27009_27049 = G__27066;
i__27010_27050 = G__27067;
continue;
}
} else {
}
}
break;
}

var seq__27011_27068 = cljs.core.seq(newv);
var chunk__27012_27069 = null;
var count__27013_27070 = (0);
var i__27014_27071 = (0);
while(true){
if((i__27014_27071 < count__27013_27070)){
var newk_27072 = chunk__27012_27069.cljs$core$IIndexed$_nth$arity$2(null,i__27014_27071);
var G__27015_27073 = frag;
var G__27016_27074 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_27072]),oldv))?pdom.removeChild(tiltontec.tag.html.tag_dom(newk_27072)):tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_27072));
goog.dom.appendChild(G__27015_27073,G__27016_27074);

var G__27075 = seq__27011_27068;
var G__27076 = chunk__27012_27069;
var G__27077 = count__27013_27070;
var G__27078 = (i__27014_27071 + (1));
seq__27011_27068 = G__27075;
chunk__27012_27069 = G__27076;
count__27013_27070 = G__27077;
i__27014_27071 = G__27078;
continue;
} else {
var temp__4657__auto___27079 = cljs.core.seq(seq__27011_27068);
if(temp__4657__auto___27079){
var seq__27011_27080__$1 = temp__4657__auto___27079;
if(cljs.core.chunked_seq_QMARK_(seq__27011_27080__$1)){
var c__7594__auto___27081 = cljs.core.chunk_first(seq__27011_27080__$1);
var G__27082 = cljs.core.chunk_rest(seq__27011_27080__$1);
var G__27083 = c__7594__auto___27081;
var G__27084 = cljs.core.count(c__7594__auto___27081);
var G__27085 = (0);
seq__27011_27068 = G__27082;
chunk__27012_27069 = G__27083;
count__27013_27070 = G__27084;
i__27014_27071 = G__27085;
continue;
} else {
var newk_27086 = cljs.core.first(seq__27011_27080__$1);
var G__27017_27087 = frag;
var G__27018_27088 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_27086]),oldv))?pdom.removeChild(tiltontec.tag.html.tag_dom(newk_27086)):tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_27086));
goog.dom.appendChild(G__27017_27087,G__27018_27088);

var G__27089 = cljs.core.next(seq__27011_27080__$1);
var G__27090 = null;
var G__27091 = (0);
var G__27092 = (0);
seq__27011_27068 = G__27089;
chunk__27012_27069 = G__27090;
count__27013_27070 = G__27091;
i__27014_27071 = G__27092;
continue;
}
} else {
}
}
break;
}

goog.dom.removeChildren(pdom);

return goog.dom.appendChild(pdom,frag);

}
})();
var __t1 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pdata_or_pdata_,cljs.core.cst$kw$tiltontec$tag$html_SLASH_observe_DASH_kids,(__t1 - __t0));

return __result;
} else {
var pdom = tiltontec.tag.html.tag_dom(me);
var lost = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv));
var gained = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
if(cljs.core.empty_QMARK_(gained)){
var seq__27019 = cljs.core.seq(lost);
var chunk__27020 = null;
var count__27021 = (0);
var i__27022 = (0);
while(true){
if((i__27022 < count__27021)){
var oldk = chunk__27020.cljs$core$IIndexed$_nth$arity$2(null,i__27022);
pdom.removeChild(tiltontec.tag.html.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.not_to_be.call(null,oldk));
}

var G__27093 = seq__27019;
var G__27094 = chunk__27020;
var G__27095 = count__27021;
var G__27096 = (i__27022 + (1));
seq__27019 = G__27093;
chunk__27020 = G__27094;
count__27021 = G__27095;
i__27022 = G__27096;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__27019);
if(temp__4657__auto__){
var seq__27019__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27019__$1)){
var c__7594__auto__ = cljs.core.chunk_first(seq__27019__$1);
var G__27097 = cljs.core.chunk_rest(seq__27019__$1);
var G__27098 = c__7594__auto__;
var G__27099 = cljs.core.count(c__7594__auto__);
var G__27100 = (0);
seq__27019 = G__27097;
chunk__27020 = G__27098;
count__27021 = G__27099;
i__27022 = G__27100;
continue;
} else {
var oldk = cljs.core.first(seq__27019__$1);
pdom.removeChild(tiltontec.tag.html.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.not_to_be.call(null,oldk));
}

var G__27101 = cljs.core.next(seq__27019__$1);
var G__27102 = null;
var G__27103 = (0);
var G__27104 = (0);
seq__27019 = G__27101;
chunk__27020 = G__27102;
count__27021 = G__27103;
i__27022 = G__27104;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var frag = document.createDocumentFragment();
var seq__27023_27105 = cljs.core.seq(lost);
var chunk__27024_27106 = null;
var count__27025_27107 = (0);
var i__27026_27108 = (0);
while(true){
if((i__27026_27108 < count__27025_27107)){
var oldk_27109 = chunk__27024_27106.cljs$core$IIndexed$_nth$arity$2(null,i__27026_27108);
if(typeof oldk_27109 === 'string'){
} else {
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk_27109) : tiltontec.cell.evaluate.not_to_be.call(null,oldk_27109));
}

var G__27110 = seq__27023_27105;
var G__27111 = chunk__27024_27106;
var G__27112 = count__27025_27107;
var G__27113 = (i__27026_27108 + (1));
seq__27023_27105 = G__27110;
chunk__27024_27106 = G__27111;
count__27025_27107 = G__27112;
i__27026_27108 = G__27113;
continue;
} else {
var temp__4657__auto___27114 = cljs.core.seq(seq__27023_27105);
if(temp__4657__auto___27114){
var seq__27023_27115__$1 = temp__4657__auto___27114;
if(cljs.core.chunked_seq_QMARK_(seq__27023_27115__$1)){
var c__7594__auto___27116 = cljs.core.chunk_first(seq__27023_27115__$1);
var G__27117 = cljs.core.chunk_rest(seq__27023_27115__$1);
var G__27118 = c__7594__auto___27116;
var G__27119 = cljs.core.count(c__7594__auto___27116);
var G__27120 = (0);
seq__27023_27105 = G__27117;
chunk__27024_27106 = G__27118;
count__27025_27107 = G__27119;
i__27026_27108 = G__27120;
continue;
} else {
var oldk_27121 = cljs.core.first(seq__27023_27115__$1);
if(typeof oldk_27121 === 'string'){
} else {
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk_27121) : tiltontec.cell.evaluate.not_to_be.call(null,oldk_27121));
}

var G__27122 = cljs.core.next(seq__27023_27115__$1);
var G__27123 = null;
var G__27124 = (0);
var G__27125 = (0);
seq__27023_27105 = G__27122;
chunk__27024_27106 = G__27123;
count__27025_27107 = G__27124;
i__27026_27108 = G__27125;
continue;
}
} else {
}
}
break;
}

var seq__27027_27126 = cljs.core.seq(newv);
var chunk__27028_27127 = null;
var count__27029_27128 = (0);
var i__27030_27129 = (0);
while(true){
if((i__27030_27129 < count__27029_27128)){
var newk_27130 = chunk__27028_27127.cljs$core$IIndexed$_nth$arity$2(null,i__27030_27129);
var G__27031_27131 = frag;
var G__27032_27132 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_27130]),oldv))?pdom.removeChild(tiltontec.tag.html.tag_dom(newk_27130)):tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_27130));
goog.dom.appendChild(G__27031_27131,G__27032_27132);

var G__27133 = seq__27027_27126;
var G__27134 = chunk__27028_27127;
var G__27135 = count__27029_27128;
var G__27136 = (i__27030_27129 + (1));
seq__27027_27126 = G__27133;
chunk__27028_27127 = G__27134;
count__27029_27128 = G__27135;
i__27030_27129 = G__27136;
continue;
} else {
var temp__4657__auto___27137 = cljs.core.seq(seq__27027_27126);
if(temp__4657__auto___27137){
var seq__27027_27138__$1 = temp__4657__auto___27137;
if(cljs.core.chunked_seq_QMARK_(seq__27027_27138__$1)){
var c__7594__auto___27139 = cljs.core.chunk_first(seq__27027_27138__$1);
var G__27140 = cljs.core.chunk_rest(seq__27027_27138__$1);
var G__27141 = c__7594__auto___27139;
var G__27142 = cljs.core.count(c__7594__auto___27139);
var G__27143 = (0);
seq__27027_27126 = G__27140;
chunk__27028_27127 = G__27141;
count__27029_27128 = G__27142;
i__27030_27129 = G__27143;
continue;
} else {
var newk_27144 = cljs.core.first(seq__27027_27138__$1);
var G__27033_27145 = frag;
var G__27034_27146 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_27144]),oldv))?pdom.removeChild(tiltontec.tag.html.tag_dom(newk_27144)):tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_27144));
goog.dom.appendChild(G__27033_27145,G__27034_27146);

var G__27147 = cljs.core.next(seq__27027_27138__$1);
var G__27148 = null;
var G__27149 = (0);
var G__27150 = (0);
seq__27027_27126 = G__27147;
chunk__27028_27127 = G__27148;
count__27029_27128 = G__27149;
i__27030_27129 = G__27150;
continue;
}
} else {
}
}
break;
}

goog.dom.removeChildren(pdom);

return goog.dom.appendChild(pdom,frag);

}
}
} else {
return null;
}
}));
tiltontec.tag.html._PLUS_global_attr_PLUS_ = cljs.core.set(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class,cljs.core.cst$kw$checked,cljs.core.cst$kw$hidden], null));
tiltontec.tag.html._PLUS_inline_css_PLUS_ = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$display], null));
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$tag$html_SLASH_tag], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
var temp__4657__auto__ = tiltontec.tag.html.tag_dom(me);
if(cljs.core.truth_(temp__4657__auto__)){
var dom = temp__4657__auto__;
if(tiltontec.tag.html._STAR_tag_trace_STAR_){
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$observing_DASH_tag,tiltontec.tag.html._STAR_tag_trace_STAR_,tiltontec.tag.html.tagfo(me),slot,newv,oldv], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot,cljs.core.cst$kw$content)){
return dom.innerHTML = newv;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot,cljs.core.cst$kw$style)){
return dom.style = newv;
} else {
if(cljs.core.truth_((tiltontec.tag.html._PLUS_global_attr_PLUS_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.tag.html._PLUS_global_attr_PLUS_.cljs$core$IFn$_invoke$arity$1(slot) : tiltontec.tag.html._PLUS_global_attr_PLUS_.call(null,slot)))){
var G__27151 = slot;
var G__27151__$1 = (((G__27151 instanceof cljs.core.Keyword))?G__27151.fqn:null);
switch (G__27151__$1) {
case "hidden":
return dom.hidden = newv;

break;
case "class":
return goog.dom.classlist.set(dom,newv);

break;
case "checked":
return dom.checked = newv;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27151__$1)].join('')));

}
} else {
if(cljs.core.truth_((tiltontec.tag.html._PLUS_inline_css_PLUS_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.tag.html._PLUS_inline_css_PLUS_.cljs$core$IFn$_invoke$arity$1(slot) : tiltontec.tag.html._PLUS_inline_css_PLUS_.call(null,slot)))){
var G__27152 = slot;
var G__27152__$1 = (((G__27152 instanceof cljs.core.Keyword))?G__27152.fqn:null);
switch (G__27152__$1) {
case "display":
return dom.style.display = newv;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27152__$1)].join('')));

}
} else {
return null;
}
}
}
}
} else {
return null;
}
} else {
return null;
}
}));
tiltontec.tag.html.io_upsert = (function tiltontec$tag$html$io_upsert(key,val){
return window.localStorage.setItem(key,val);
});
tiltontec.tag.html.io_read = (function tiltontec$tag$html$io_read(key){
return window.localStorage.getItem(key);
});
tiltontec.tag.html.io_delete = (function tiltontec$tag$html$io_delete(key){
return window.localStorage.removeItem(key);
});
tiltontec.tag.html.io_clear_storage = (function tiltontec$tag$html$io_clear_storage(){
return window.localStorage.clear();
});
tiltontec.tag.html.io_all_keys = (function tiltontec$tag$html$io_all_keys(){
return Object.keys(window.localStorage);
});
tiltontec.tag.html.io_find = (function tiltontec$tag$html$io_find(key_prefix){
var keys = tiltontec.tag.html.io_all_keys();
var found = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(keys)){
var G__27155 = cljs.core.rest(keys);
var G__27156 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__27155;
found = G__27156;
continue;
} else {
return found;
}
break;
}
});
tiltontec.tag.html.io_truncate = (function tiltontec$tag$html$io_truncate(key_prefix){
var seq__27157 = cljs.core.seq(tiltontec.tag.html.io_find(key_prefix));
var chunk__27158 = null;
var count__27159 = (0);
var i__27160 = (0);
while(true){
if((i__27160 < count__27159)){
var key = chunk__27158.cljs$core$IIndexed$_nth$arity$2(null,i__27160);
tiltontec.tag.html.io_delete(key);

var G__27161 = seq__27157;
var G__27162 = chunk__27158;
var G__27163 = count__27159;
var G__27164 = (i__27160 + (1));
seq__27157 = G__27161;
chunk__27158 = G__27162;
count__27159 = G__27163;
i__27160 = G__27164;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__27157);
if(temp__4657__auto__){
var seq__27157__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27157__$1)){
var c__7594__auto__ = cljs.core.chunk_first(seq__27157__$1);
var G__27165 = cljs.core.chunk_rest(seq__27157__$1);
var G__27166 = c__7594__auto__;
var G__27167 = cljs.core.count(c__7594__auto__);
var G__27168 = (0);
seq__27157 = G__27165;
chunk__27158 = G__27166;
count__27159 = G__27167;
i__27160 = G__27168;
continue;
} else {
var key = cljs.core.first(seq__27157__$1);
tiltontec.tag.html.io_delete(key);

var G__27169 = cljs.core.next(seq__27157__$1);
var G__27170 = null;
var G__27171 = (0);
var G__27172 = (0);
seq__27157 = G__27169;
chunk__27158 = G__27170;
count__27159 = G__27171;
i__27160 = G__27172;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.tag.html.input_editing_start = (function tiltontec$tag$html$input_editing_start(dom,initial_value){
goog.dom.forms.setValue(dom,initial_value);

goog.editor.focus.focusInputField(dom);

goog.dom.selection.setStart(dom,(0));

var G__27173 = dom;
var G__27174 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__27173,G__27174);
});
