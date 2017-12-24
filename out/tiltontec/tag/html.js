// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.tag.html');
goog.require('cljs.core');
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
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null));
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
return cljs.core.apply.call(null,cljs.core.dissoc,m,(function (){var iter__7561__auto__ = (function tiltontec$tag$html$map_less_nils_$_iter__50295(s__50296){
return (new cljs.core.LazySeq(null,(function (){
var s__50296__$1 = s__50296;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50296__$1);
if(temp__4657__auto__){
var s__50296__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50296__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__50296__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__50298 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__50297 = (0);
while(true){
if((i__50297 < size__7560__auto__)){
var vec__50299 = cljs.core._nth.call(null,c__7559__auto__,i__50297);
var k = cljs.core.nth.call(null,vec__50299,(0),null);
var v = cljs.core.nth.call(null,vec__50299,(1),null);
if((v == null)){
cljs.core.chunk_append.call(null,b__50298,k);

var G__50305 = (i__50297 + (1));
i__50297 = G__50305;
continue;
} else {
var G__50306 = (i__50297 + (1));
i__50297 = G__50306;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50298),tiltontec$tag$html$map_less_nils_$_iter__50295.call(null,cljs.core.chunk_rest.call(null,s__50296__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50298),null);
}
} else {
var vec__50302 = cljs.core.first.call(null,s__50296__$2);
var k = cljs.core.nth.call(null,vec__50302,(0),null);
var v = cljs.core.nth.call(null,vec__50302,(1),null);
if((v == null)){
return cljs.core.cons.call(null,k,tiltontec$tag$html$map_less_nils_$_iter__50295.call(null,cljs.core.rest.call(null,s__50296__$2)));
} else {
var G__50307 = cljs.core.rest.call(null,s__50296__$2);
s__50296__$1 = G__50307;
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
return iter__7561__auto__.call(null,m);
})());
});
tiltontec.tag.html.tag_attrs = (function tiltontec$tag$html$tag_attrs(mx){
var beef = cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__7561__auto__ = (function tiltontec$tag$html$tag_attrs_$_iter__50308(s__50309){
return (new cljs.core.LazySeq(null,(function (){
var s__50309__$1 = s__50309;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50309__$1);
if(temp__4657__auto__){
var s__50309__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50309__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__50309__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__50311 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__50310 = (0);
while(true){
if((i__50310 < size__7560__auto__)){
var k = cljs.core._nth.call(null,c__7559__auto__,i__50310);
cljs.core.chunk_append.call(null,b__50311,(function (){var temp__4657__auto____$1 = tiltontec.model.core.md_get.call(null,mx,k);
if(cljs.core.truth_(temp__4657__auto____$1)){
var v = temp__4657__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else {
return null;
}
})());

var G__50312 = (i__50310 + (1));
i__50310 = G__50312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50311),tiltontec$tag$html$tag_attrs_$_iter__50308.call(null,cljs.core.chunk_rest.call(null,s__50309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50311),null);
}
} else {
var k = cljs.core.first.call(null,s__50309__$2);
return cljs.core.cons.call(null,(function (){var temp__4657__auto____$1 = tiltontec.model.core.md_get.call(null,mx,k);
if(cljs.core.truth_(temp__4657__auto____$1)){
var v = temp__4657__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else {
return null;
}
})(),tiltontec$tag$html$tag_attrs_$_iter__50308.call(null,cljs.core.rest.call(null,s__50309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7561__auto__.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword("tiltontec.tag.html","type","tiltontec.tag.html/type",-1460626477),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"onclick","onclick",1297553739),new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),new cljs.core.Keyword(null,"onkeypress","onkeypress",740819085),new cljs.core.Keyword(null,"onblur","onblur",689939618),new cljs.core.Keyword(null,"onmouseover","onmouseover",-455386327),new cljs.core.Keyword(null,"onchange","onchange",1355467329),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tagsid","tagsid",1728044197),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"value","value",305978217)], null));
})());
return cljs.core.apply.call(null,cljs.core.js_obj,cljs.core.apply.call(null,cljs.core.concat,beef));
});
tiltontec.tag.html.tag_dom_create = (function tiltontec$tag$html$tag_dom_create(var_args){
var G__50315 = arguments.length;
switch (G__50315) {
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
return tiltontec.tag.html.tag_dom_create.call(null,me,null);
});

tiltontec.tag.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2 = (function (me,dbg){
if(typeof me === 'string'){
return goog.dom.safeHtmlToNode(goog.html.sanitizer.HtmlSanitizer.sanitize(me));
} else {
if(cljs.core.coll_QMARK_.call(null,me)){
var frag = document.createDocumentFragment();
var seq__50316_50321 = cljs.core.seq.call(null,me);
var chunk__50317_50322 = null;
var count__50318_50323 = (0);
var i__50319_50324 = (0);
while(true){
if((i__50319_50324 < count__50318_50323)){
var tag_50325 = cljs.core._nth.call(null,chunk__50317_50322,i__50319_50324);
goog.dom.appendChild(frag,tiltontec.tag.html.tag_dom_create.call(null,tag_50325));

var G__50326 = seq__50316_50321;
var G__50327 = chunk__50317_50322;
var G__50328 = count__50318_50323;
var G__50329 = (i__50319_50324 + (1));
seq__50316_50321 = G__50326;
chunk__50317_50322 = G__50327;
count__50318_50323 = G__50328;
i__50319_50324 = G__50329;
continue;
} else {
var temp__4657__auto___50330 = cljs.core.seq.call(null,seq__50316_50321);
if(temp__4657__auto___50330){
var seq__50316_50331__$1 = temp__4657__auto___50330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50316_50331__$1)){
var c__7592__auto___50332 = cljs.core.chunk_first.call(null,seq__50316_50331__$1);
var G__50333 = cljs.core.chunk_rest.call(null,seq__50316_50331__$1);
var G__50334 = c__7592__auto___50332;
var G__50335 = cljs.core.count.call(null,c__7592__auto___50332);
var G__50336 = (0);
seq__50316_50321 = G__50333;
chunk__50317_50322 = G__50334;
count__50318_50323 = G__50335;
i__50319_50324 = G__50336;
continue;
} else {
var tag_50337 = cljs.core.first.call(null,seq__50316_50331__$1);
goog.dom.appendChild(frag,tiltontec.tag.html.tag_dom_create.call(null,tag_50337));

var G__50338 = cljs.core.next.call(null,seq__50316_50331__$1);
var G__50339 = null;
var G__50340 = (0);
var G__50341 = (0);
seq__50316_50321 = G__50338;
chunk__50317_50322 = G__50339;
count__50318_50323 = G__50340;
i__50319_50324 = G__50341;
continue;
}
} else {
}
}
break;
}

return frag;
} else {
var temp__4657__auto___50342 = (function (){var or__6772__auto__ = dbg;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return tiltontec.tag.html._STAR_tag_trace_STAR_;
}
})();
if(cljs.core.truth_(temp__4657__auto___50342)){
var dbg_50343__$1 = temp__4657__auto___50342;
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"tag-dom-create","tag-dom-create",1943906167),dbg_50343__$1,tiltontec.tag.html.tagfo.call(null,me));
} else {
}

return cljs.core.apply.call(null,goog.dom.createDom,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223)),tiltontec.tag.html.tag_attrs.call(null,me),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__50313_SHARP_){
return tiltontec.tag.html.tag_dom_create.call(null,p1__50313_SHARP_,dbg);
}),tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771))),(function (){var temp__4657__auto__ = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.truth_(temp__4657__auto__)){
var c = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.html.tag_dom_create.call(null,c)], null);
} else {
return null;
}
})()));

}
}
});

tiltontec.tag.html.tag_dom_create.cljs$lang$maxFixedArity = 2;

tiltontec.tag.html._PLUS_true_html_PLUS_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tiltontec.tag.html","type","tiltontec.tag.html/type",-1460626477),"type"], null);
tiltontec.tag.html.true_html = (function tiltontec$tag$html$true_html(keyword){
var or__6772__auto__ = keyword.call(null,tiltontec.tag.html._PLUS_true_html_PLUS_);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return cljs.core.name.call(null,keyword);
}
});
tiltontec.tag.html.tag_dom = (function tiltontec$tag$html$tag_dom(me){
var id = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

var or__6772__auto__ = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857));
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var temp__4655__auto__ = goog.dom.getElement([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var dom = temp__4655__auto__;
return tiltontec.model.core.backdoor_reset_BANG_.call(null,me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857),dom);
} else {
return cljs.core.println.call(null,new cljs.core.Keyword(null,"no-element","no-element",470772656),id,new cljs.core.Keyword(null,"found","found",-584700170));
}
}
});
tiltontec.tag.html.tag = (function tiltontec$tag$html$tag(me){
return tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.tag.html","tag","tiltontec.tag.html/tag",1337322312)], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
var __pdata_or_pdata_ = (function (){var or__6772__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy.call(null);
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = taoensso.encore.now_nano.call(null);
var __result = (function (){var pdom = tiltontec.tag.html.tag_dom.call(null,me);
var lost = clojure.set.difference.call(null,cljs.core.set.call(null,oldv),cljs.core.set.call(null,newv));
var gained = clojure.set.difference.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,oldv));
if(cljs.core.empty_QMARK_.call(null,gained)){
var seq__50344 = cljs.core.seq.call(null,lost);
var chunk__50345 = null;
var count__50346 = (0);
var i__50347 = (0);
while(true){
if((i__50347 < count__50346)){
var oldk = cljs.core._nth.call(null,chunk__50345,i__50347);
pdom.removeChild(tiltontec.tag.html.tag_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk);
}

var G__50368 = seq__50344;
var G__50369 = chunk__50345;
var G__50370 = count__50346;
var G__50371 = (i__50347 + (1));
seq__50344 = G__50368;
chunk__50345 = G__50369;
count__50346 = G__50370;
i__50347 = G__50371;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50344);
if(temp__4657__auto__){
var seq__50344__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50344__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__50344__$1);
var G__50372 = cljs.core.chunk_rest.call(null,seq__50344__$1);
var G__50373 = c__7592__auto__;
var G__50374 = cljs.core.count.call(null,c__7592__auto__);
var G__50375 = (0);
seq__50344 = G__50372;
chunk__50345 = G__50373;
count__50346 = G__50374;
i__50347 = G__50375;
continue;
} else {
var oldk = cljs.core.first.call(null,seq__50344__$1);
pdom.removeChild(tiltontec.tag.html.tag_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk);
}

var G__50376 = cljs.core.next.call(null,seq__50344__$1);
var G__50377 = null;
var G__50378 = (0);
var G__50379 = (0);
seq__50344 = G__50376;
chunk__50345 = G__50377;
count__50346 = G__50378;
i__50347 = G__50379;
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
var seq__50348_50380 = cljs.core.seq.call(null,lost);
var chunk__50349_50381 = null;
var count__50350_50382 = (0);
var i__50351_50383 = (0);
while(true){
if((i__50351_50383 < count__50350_50382)){
var oldk_50384 = cljs.core._nth.call(null,chunk__50349_50381,i__50351_50383);
if(typeof oldk_50384 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk_50384);
}

var G__50385 = seq__50348_50380;
var G__50386 = chunk__50349_50381;
var G__50387 = count__50350_50382;
var G__50388 = (i__50351_50383 + (1));
seq__50348_50380 = G__50385;
chunk__50349_50381 = G__50386;
count__50350_50382 = G__50387;
i__50351_50383 = G__50388;
continue;
} else {
var temp__4657__auto___50389 = cljs.core.seq.call(null,seq__50348_50380);
if(temp__4657__auto___50389){
var seq__50348_50390__$1 = temp__4657__auto___50389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50348_50390__$1)){
var c__7592__auto___50391 = cljs.core.chunk_first.call(null,seq__50348_50390__$1);
var G__50392 = cljs.core.chunk_rest.call(null,seq__50348_50390__$1);
var G__50393 = c__7592__auto___50391;
var G__50394 = cljs.core.count.call(null,c__7592__auto___50391);
var G__50395 = (0);
seq__50348_50380 = G__50392;
chunk__50349_50381 = G__50393;
count__50350_50382 = G__50394;
i__50351_50383 = G__50395;
continue;
} else {
var oldk_50396 = cljs.core.first.call(null,seq__50348_50390__$1);
if(typeof oldk_50396 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk_50396);
}

var G__50397 = cljs.core.next.call(null,seq__50348_50390__$1);
var G__50398 = null;
var G__50399 = (0);
var G__50400 = (0);
seq__50348_50380 = G__50397;
chunk__50349_50381 = G__50398;
count__50350_50382 = G__50399;
i__50351_50383 = G__50400;
continue;
}
} else {
}
}
break;
}

var seq__50352_50401 = cljs.core.seq.call(null,newv);
var chunk__50353_50402 = null;
var count__50354_50403 = (0);
var i__50355_50404 = (0);
while(true){
if((i__50355_50404 < count__50354_50403)){
var newk_50405 = cljs.core._nth.call(null,chunk__50353_50402,i__50355_50404);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_50405]),oldv))?pdom.removeChild(tiltontec.tag.html.tag_dom.call(null,newk_50405)):tiltontec.tag.html.tag_dom_create.call(null,newk_50405)));

var G__50406 = seq__50352_50401;
var G__50407 = chunk__50353_50402;
var G__50408 = count__50354_50403;
var G__50409 = (i__50355_50404 + (1));
seq__50352_50401 = G__50406;
chunk__50353_50402 = G__50407;
count__50354_50403 = G__50408;
i__50355_50404 = G__50409;
continue;
} else {
var temp__4657__auto___50410 = cljs.core.seq.call(null,seq__50352_50401);
if(temp__4657__auto___50410){
var seq__50352_50411__$1 = temp__4657__auto___50410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50352_50411__$1)){
var c__7592__auto___50412 = cljs.core.chunk_first.call(null,seq__50352_50411__$1);
var G__50413 = cljs.core.chunk_rest.call(null,seq__50352_50411__$1);
var G__50414 = c__7592__auto___50412;
var G__50415 = cljs.core.count.call(null,c__7592__auto___50412);
var G__50416 = (0);
seq__50352_50401 = G__50413;
chunk__50353_50402 = G__50414;
count__50354_50403 = G__50415;
i__50355_50404 = G__50416;
continue;
} else {
var newk_50417 = cljs.core.first.call(null,seq__50352_50411__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_50417]),oldv))?pdom.removeChild(tiltontec.tag.html.tag_dom.call(null,newk_50417)):tiltontec.tag.html.tag_dom_create.call(null,newk_50417)));

var G__50418 = cljs.core.next.call(null,seq__50352_50411__$1);
var G__50419 = null;
var G__50420 = (0);
var G__50421 = (0);
seq__50352_50401 = G__50418;
chunk__50353_50402 = G__50419;
count__50354_50403 = G__50420;
i__50355_50404 = G__50421;
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
var __t1 = taoensso.encore.now_nano.call(null);
taoensso.tufte.impl.capture_time_BANG_.call(null,__pdata_or_pdata_,new cljs.core.Keyword("tiltontec.tag.html","observe-kids","tiltontec.tag.html/observe-kids",589571043),(__t1 - __t0));

return __result;
} else {
var pdom = tiltontec.tag.html.tag_dom.call(null,me);
var lost = clojure.set.difference.call(null,cljs.core.set.call(null,oldv),cljs.core.set.call(null,newv));
var gained = clojure.set.difference.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,oldv));
if(cljs.core.empty_QMARK_.call(null,gained)){
var seq__50356 = cljs.core.seq.call(null,lost);
var chunk__50357 = null;
var count__50358 = (0);
var i__50359 = (0);
while(true){
if((i__50359 < count__50358)){
var oldk = cljs.core._nth.call(null,chunk__50357,i__50359);
pdom.removeChild(tiltontec.tag.html.tag_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk);
}

var G__50422 = seq__50356;
var G__50423 = chunk__50357;
var G__50424 = count__50358;
var G__50425 = (i__50359 + (1));
seq__50356 = G__50422;
chunk__50357 = G__50423;
count__50358 = G__50424;
i__50359 = G__50425;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50356);
if(temp__4657__auto__){
var seq__50356__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50356__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__50356__$1);
var G__50426 = cljs.core.chunk_rest.call(null,seq__50356__$1);
var G__50427 = c__7592__auto__;
var G__50428 = cljs.core.count.call(null,c__7592__auto__);
var G__50429 = (0);
seq__50356 = G__50426;
chunk__50357 = G__50427;
count__50358 = G__50428;
i__50359 = G__50429;
continue;
} else {
var oldk = cljs.core.first.call(null,seq__50356__$1);
pdom.removeChild(tiltontec.tag.html.tag_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk);
}

var G__50430 = cljs.core.next.call(null,seq__50356__$1);
var G__50431 = null;
var G__50432 = (0);
var G__50433 = (0);
seq__50356 = G__50430;
chunk__50357 = G__50431;
count__50358 = G__50432;
i__50359 = G__50433;
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
var seq__50360_50434 = cljs.core.seq.call(null,lost);
var chunk__50361_50435 = null;
var count__50362_50436 = (0);
var i__50363_50437 = (0);
while(true){
if((i__50363_50437 < count__50362_50436)){
var oldk_50438 = cljs.core._nth.call(null,chunk__50361_50435,i__50363_50437);
if(typeof oldk_50438 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk_50438);
}

var G__50439 = seq__50360_50434;
var G__50440 = chunk__50361_50435;
var G__50441 = count__50362_50436;
var G__50442 = (i__50363_50437 + (1));
seq__50360_50434 = G__50439;
chunk__50361_50435 = G__50440;
count__50362_50436 = G__50441;
i__50363_50437 = G__50442;
continue;
} else {
var temp__4657__auto___50443 = cljs.core.seq.call(null,seq__50360_50434);
if(temp__4657__auto___50443){
var seq__50360_50444__$1 = temp__4657__auto___50443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50360_50444__$1)){
var c__7592__auto___50445 = cljs.core.chunk_first.call(null,seq__50360_50444__$1);
var G__50446 = cljs.core.chunk_rest.call(null,seq__50360_50444__$1);
var G__50447 = c__7592__auto___50445;
var G__50448 = cljs.core.count.call(null,c__7592__auto___50445);
var G__50449 = (0);
seq__50360_50434 = G__50446;
chunk__50361_50435 = G__50447;
count__50362_50436 = G__50448;
i__50363_50437 = G__50449;
continue;
} else {
var oldk_50450 = cljs.core.first.call(null,seq__50360_50444__$1);
if(typeof oldk_50450 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk_50450);
}

var G__50451 = cljs.core.next.call(null,seq__50360_50444__$1);
var G__50452 = null;
var G__50453 = (0);
var G__50454 = (0);
seq__50360_50434 = G__50451;
chunk__50361_50435 = G__50452;
count__50362_50436 = G__50453;
i__50363_50437 = G__50454;
continue;
}
} else {
}
}
break;
}

var seq__50364_50455 = cljs.core.seq.call(null,newv);
var chunk__50365_50456 = null;
var count__50366_50457 = (0);
var i__50367_50458 = (0);
while(true){
if((i__50367_50458 < count__50366_50457)){
var newk_50459 = cljs.core._nth.call(null,chunk__50365_50456,i__50367_50458);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_50459]),oldv))?pdom.removeChild(tiltontec.tag.html.tag_dom.call(null,newk_50459)):tiltontec.tag.html.tag_dom_create.call(null,newk_50459)));

var G__50460 = seq__50364_50455;
var G__50461 = chunk__50365_50456;
var G__50462 = count__50366_50457;
var G__50463 = (i__50367_50458 + (1));
seq__50364_50455 = G__50460;
chunk__50365_50456 = G__50461;
count__50366_50457 = G__50462;
i__50367_50458 = G__50463;
continue;
} else {
var temp__4657__auto___50464 = cljs.core.seq.call(null,seq__50364_50455);
if(temp__4657__auto___50464){
var seq__50364_50465__$1 = temp__4657__auto___50464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50364_50465__$1)){
var c__7592__auto___50466 = cljs.core.chunk_first.call(null,seq__50364_50465__$1);
var G__50467 = cljs.core.chunk_rest.call(null,seq__50364_50465__$1);
var G__50468 = c__7592__auto___50466;
var G__50469 = cljs.core.count.call(null,c__7592__auto___50466);
var G__50470 = (0);
seq__50364_50455 = G__50467;
chunk__50365_50456 = G__50468;
count__50366_50457 = G__50469;
i__50367_50458 = G__50470;
continue;
} else {
var newk_50471 = cljs.core.first.call(null,seq__50364_50465__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_50471]),oldv))?pdom.removeChild(tiltontec.tag.html.tag_dom.call(null,newk_50471)):tiltontec.tag.html.tag_dom_create.call(null,newk_50471)));

var G__50472 = cljs.core.next.call(null,seq__50364_50465__$1);
var G__50473 = null;
var G__50474 = (0);
var G__50475 = (0);
seq__50364_50455 = G__50472;
chunk__50365_50456 = G__50473;
count__50366_50457 = G__50474;
i__50367_50458 = G__50475;
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
tiltontec.tag.html._PLUS_global_attr_PLUS_ = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null));
tiltontec.tag.html._PLUS_inline_css_PLUS_ = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.tag.html","tag","tiltontec.tag.html/tag",1337322312)], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
var temp__4657__auto__ = tiltontec.tag.html.tag_dom.call(null,me);
if(cljs.core.truth_(temp__4657__auto__)){
var dom = temp__4657__auto__;
if(tiltontec.tag.html._STAR_tag_trace_STAR_){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"observing-tag","observing-tag",-99153083),tiltontec.tag.html._STAR_tag_trace_STAR_,tiltontec.tag.html.tagfo.call(null,me),slot,newv,oldv);
} else {
}

if(cljs.core._EQ_.call(null,slot,new cljs.core.Keyword(null,"content","content",15833224))){
return dom.innerHTML = newv;
} else {
if(cljs.core._EQ_.call(null,slot,new cljs.core.Keyword(null,"style","style",-496642736))){
return dom.style = newv;
} else {
if(cljs.core.truth_(tiltontec.tag.html._PLUS_global_attr_PLUS_.call(null,slot))){
var G__50476 = slot;
var G__50476__$1 = (((G__50476 instanceof cljs.core.Keyword))?G__50476.fqn:null);
switch (G__50476__$1) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50476__$1)].join('')));

}
} else {
if(cljs.core.truth_(tiltontec.tag.html._PLUS_inline_css_PLUS_.call(null,slot))){
var G__50477 = slot;
var G__50477__$1 = (((G__50477 instanceof cljs.core.Keyword))?G__50477.fqn:null);
switch (G__50477__$1) {
case "display":
return dom.style.display = newv;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50477__$1)].join('')));

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
var keys = tiltontec.tag.html.io_all_keys.call(null);
var found = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,keys)){
var G__50480 = cljs.core.rest.call(null,keys);
var G__50481 = ((clojure.string.starts_with_QMARK_.call(null,cljs.core.first.call(null,keys),key_prefix))?cljs.core.conj.call(null,found,cljs.core.first.call(null,keys)):found);
keys = G__50480;
found = G__50481;
continue;
} else {
return found;
}
break;
}
});
tiltontec.tag.html.io_truncate = (function tiltontec$tag$html$io_truncate(key_prefix){
var seq__50482 = cljs.core.seq.call(null,tiltontec.tag.html.io_find.call(null,key_prefix));
var chunk__50483 = null;
var count__50484 = (0);
var i__50485 = (0);
while(true){
if((i__50485 < count__50484)){
var key = cljs.core._nth.call(null,chunk__50483,i__50485);
tiltontec.tag.html.io_delete.call(null,key);

var G__50486 = seq__50482;
var G__50487 = chunk__50483;
var G__50488 = count__50484;
var G__50489 = (i__50485 + (1));
seq__50482 = G__50486;
chunk__50483 = G__50487;
count__50484 = G__50488;
i__50485 = G__50489;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50482);
if(temp__4657__auto__){
var seq__50482__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50482__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__50482__$1);
var G__50490 = cljs.core.chunk_rest.call(null,seq__50482__$1);
var G__50491 = c__7592__auto__;
var G__50492 = cljs.core.count.call(null,c__7592__auto__);
var G__50493 = (0);
seq__50482 = G__50490;
chunk__50483 = G__50491;
count__50484 = G__50492;
i__50485 = G__50493;
continue;
} else {
var key = cljs.core.first.call(null,seq__50482__$1);
tiltontec.tag.html.io_delete.call(null,key);

var G__50494 = cljs.core.next.call(null,seq__50482__$1);
var G__50495 = null;
var G__50496 = (0);
var G__50497 = (0);
seq__50482 = G__50494;
chunk__50483 = G__50495;
count__50484 = G__50496;
i__50485 = G__50497;
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

return goog.dom.selection.setEnd(dom,cljs.core.count.call(null,initial_value));
});

//# sourceMappingURL=html.js.map