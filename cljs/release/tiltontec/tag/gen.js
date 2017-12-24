// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.tag.gen');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom.forms');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
tiltontec.tag.gen._PLUS_tag_sid_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
tiltontec.tag.gen.tag_init_BANG_ = (function tiltontec$tag$gen$tag_init_BANG_(){
return cljs.core.reset_BANG_(tiltontec.tag.gen._PLUS_tag_sid_PLUS_,(-1));
});
tiltontec.tag.gen.tag_by_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tiltontec.tag.gen.dom_tag = (function tiltontec$tag$gen$dom_tag(dom){
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tiltontec.tag.gen.tag_by_id),dom.id);
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("dom-tag did not find js for id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom.id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of dom "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("tag")].join('')));
}

return tag;
});
tiltontec.tag.gen.make_tag = (function tiltontec$tag$gen$make_tag(tag,attrs,c_QMARK_kids){
var tag_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6774__auto__ = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.tag.gen._PLUS_tag_sid_PLUS_,cljs.core.inc);
}
})())].join('');
var attrs__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$id);
var mx_tag = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.model.core.make,cljs.core.cst$kw$type,cljs.core.cst$kw$tiltontec$tag$html_SLASH_tag,cljs.core.cst$kw$tag,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,tag_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(attrs__$1))),cljs.core.cst$kw$kids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c_QMARK_kids], 0))], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tiltontec.tag.gen.tag_by_id,cljs.core.assoc,tag_id,mx_tag);

return mx_tag;
});
tiltontec.cell.evaluate.not_to_be.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$tag$html_SLASH_tag], null),(function (me){
var seq__27220_27224 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__27221_27225 = null;
var count__27222_27226 = (0);
var i__27223_27227 = (0);
while(true){
if((i__27223_27227 < count__27222_27226)){
var k_27228 = chunk__27221_27225.cljs$core$IIndexed$_nth$arity$2(null,i__27223_27227);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_(k_27228))){
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_27228) : tiltontec.cell.evaluate.not_to_be.call(null,k_27228));
} else {
}

var G__27229 = seq__27220_27224;
var G__27230 = chunk__27221_27225;
var G__27231 = count__27222_27226;
var G__27232 = (i__27223_27227 + (1));
seq__27220_27224 = G__27229;
chunk__27221_27225 = G__27230;
count__27222_27226 = G__27231;
i__27223_27227 = G__27232;
continue;
} else {
var temp__4657__auto___27233 = cljs.core.seq(seq__27220_27224);
if(temp__4657__auto___27233){
var seq__27220_27234__$1 = temp__4657__auto___27233;
if(cljs.core.chunked_seq_QMARK_(seq__27220_27234__$1)){
var c__7594__auto___27235 = cljs.core.chunk_first(seq__27220_27234__$1);
var G__27236 = cljs.core.chunk_rest(seq__27220_27234__$1);
var G__27237 = c__7594__auto___27235;
var G__27238 = cljs.core.count(c__7594__auto___27235);
var G__27239 = (0);
seq__27220_27224 = G__27236;
chunk__27221_27225 = G__27237;
count__27222_27226 = G__27238;
i__27223_27227 = G__27239;
continue;
} else {
var k_27240 = cljs.core.first(seq__27220_27234__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_(k_27240))){
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_27240) : tiltontec.cell.evaluate.not_to_be.call(null,k_27240));
} else {
}

var G__27241 = cljs.core.next(seq__27220_27234__$1);
var G__27242 = null;
var G__27243 = (0);
var G__27244 = (0);
seq__27220_27224 = G__27241;
chunk__27221_27225 = G__27242;
count__27222_27226 = G__27243;
i__27223_27227 = G__27244;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.tag.gen.tag_by_id,cljs.core.dissoc,tiltontec.model.core.md_get(me,cljs.core.cst$kw$id));

return tiltontec.cell.evaluate.not_to_be_self(me);
}));
var ret__7939__auto___27245 = tiltontec.tag.gen.deftag = (function tiltontec$tag$gen$deftag(_AMPERSAND_form,_AMPERSAND_env,tag){
var kids_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("kids");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
var attrs_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("attrs");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defmacro),(function (){var x__7617__auto__ = tag;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7617__auto__ = attrs_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_AMPERSAND_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = kids_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_sequence),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$tag$gen_SLASH_make_DASH_tag))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7617__auto__ = tag_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7617__auto__ = attrs_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_sequence),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7617__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH_c_QMARK_kids))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7617__auto__ = kids_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()], 0))));
});
tiltontec.tag.gen.deftag.cljs$lang$macro = true;

var ret__7939__auto___27253 = (function (){
tiltontec.tag.gen.deftags = (function tiltontec$tag$gen$deftags(var_args){
var args__7906__auto__ = [];
var len__7899__auto___27254 = arguments.length;
var i__7900__auto___27255 = (0);
while(true){
if((i__7900__auto___27255 < len__7899__auto___27254)){
args__7906__auto__.push((arguments[i__7900__auto___27255]));

var G__27256 = (i__7900__auto___27255 + (1));
i__7900__auto___27255 = G__27256;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tags){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var iter__7563__auto__ = (function tiltontec$tag$gen$iter__27249(s__27250){
return (new cljs.core.LazySeq(null,(function (){
var s__27250__$1 = s__27250;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27250__$1);
if(temp__4657__auto__){
var s__27250__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27250__$2)){
var c__7561__auto__ = cljs.core.chunk_first(s__27250__$2);
var size__7562__auto__ = cljs.core.count(c__7561__auto__);
var b__27252 = cljs.core.chunk_buffer(size__7562__auto__);
if((function (){var i__27251 = (0);
while(true){
if((i__27251 < size__7562__auto__)){
var tag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7561__auto__,i__27251);
cljs.core.chunk_append(b__27252,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$tag$gen_SLASH_deftag),(function (){var x__7617__auto__ = tag;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))));

var G__27257 = (i__27251 + (1));
i__27251 = G__27257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27252),tiltontec$tag$gen$iter__27249(cljs.core.chunk_rest(s__27250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27252),null);
}
} else {
var tag = cljs.core.first(s__27250__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$tag$gen_SLASH_deftag),(function (){var x__7617__auto__ = tag;
return cljs.core._conj(cljs.core.List.EMPTY,x__7617__auto__);
})()))),tiltontec$tag$gen$iter__27249(cljs.core.rest(s__27250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__(tags);
})())));
});

tiltontec.tag.gen.deftags.cljs$lang$maxFixedArity = (2);

tiltontec.tag.gen.deftags.cljs$lang$applyTo = (function (seq27246){
var G__27247 = cljs.core.first(seq27246);
var seq27246__$1 = cljs.core.next(seq27246);
var G__27248 = cljs.core.first(seq27246__$1);
var seq27246__$2 = cljs.core.next(seq27246__$1);
return tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic(G__27247,G__27248,seq27246__$2);
});

return null;
})()
;
tiltontec.tag.gen.deftags.cljs$lang$macro = true;















(tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$15 ? tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$15(tiltontec.tag.gen.section,tiltontec.tag.gen.section,tiltontec.tag.gen.label,tiltontec.tag.gen.header,tiltontec.tag.gen.footer,tiltontec.tag.gen.h1,tiltontec.tag.gen.input,tiltontec.tag.gen.p,tiltontec.tag.gen.span,tiltontec.tag.gen.a,tiltontec.tag.gen.img,tiltontec.tag.gen.ul,tiltontec.tag.gen.li,tiltontec.tag.gen.div,tiltontec.tag.gen.button) : tiltontec.tag.gen.deftags.call(null,tiltontec.tag.gen.section,tiltontec.tag.gen.section,tiltontec.tag.gen.label,tiltontec.tag.gen.header,tiltontec.tag.gen.footer,tiltontec.tag.gen.h1,tiltontec.tag.gen.input,tiltontec.tag.gen.p,tiltontec.tag.gen.span,tiltontec.tag.gen.a,tiltontec.tag.gen.img,tiltontec.tag.gen.ul,tiltontec.tag.gen.li,tiltontec.tag.gen.div,tiltontec.tag.gen.button));
tiltontec.tag.gen.evt_tag = (function tiltontec$tag$gen$evt_tag(e){
return tiltontec.tag.gen.dom_tag(e.target);
});
tiltontec.tag.gen.target_value = (function tiltontec$tag$gen$target_value(evt){
var G__27258 = evt.target;
return goog.dom.forms.getValue(G__27258);
});
