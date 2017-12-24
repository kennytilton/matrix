// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.tag.gen');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
tiltontec.tag.gen._PLUS_tag_sid_PLUS_ = cljs.core.atom.call(null,(-1));
tiltontec.tag.gen.tag_init_BANG_ = (function tiltontec$tag$gen$tag_init_BANG_(){
return cljs.core.reset_BANG_.call(null,tiltontec.tag.gen._PLUS_tag_sid_PLUS_,(-1));
});
tiltontec.tag.gen.tag_by_id = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tiltontec.tag.gen.dom_tag = (function tiltontec$tag$gen$dom_tag(dom){
var tag = cljs.core.get.call(null,cljs.core.deref.call(null,tiltontec.tag.gen.tag_by_id),dom.id);
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("dom-tag did not find js for id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom.id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of dom "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("tag")].join('')));
}

return tag;
});
tiltontec.tag.gen.make_tag = (function tiltontec$tag$gen$make_tag(tag,attrs,c_QMARK_kids){
var tag_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6772__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return cljs.core.swap_BANG_.call(null,tiltontec.tag.gen._PLUS_tag_sid_PLUS_,cljs.core.inc);
}
})())].join('');
var attrs__$1 = cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092));
var mx_tag = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.tag.html","tag","tiltontec.tag.html/tag",1337322312),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"id","id",-1388402092),tag_id,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,attrs__$1))),new cljs.core.Keyword(null,"kids","kids",1156670771),c_QMARK_kids));
cljs.core.swap_BANG_.call(null,tiltontec.tag.gen.tag_by_id,cljs.core.assoc,tag_id,mx_tag);

return mx_tag;
});
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.tag.html","tag","tiltontec.tag.html/tag",1337322312)], null),(function (me){
var seq__50509_50513 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
var chunk__50510_50514 = null;
var count__50511_50515 = (0);
var i__50512_50516 = (0);
while(true){
if((i__50512_50516 < count__50511_50515)){
var k_50517 = cljs.core._nth.call(null,chunk__50510_50514,i__50512_50516);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_50517))){
tiltontec.cell.evaluate.not_to_be.call(null,k_50517);
} else {
}

var G__50518 = seq__50509_50513;
var G__50519 = chunk__50510_50514;
var G__50520 = count__50511_50515;
var G__50521 = (i__50512_50516 + (1));
seq__50509_50513 = G__50518;
chunk__50510_50514 = G__50519;
count__50511_50515 = G__50520;
i__50512_50516 = G__50521;
continue;
} else {
var temp__4657__auto___50522 = cljs.core.seq.call(null,seq__50509_50513);
if(temp__4657__auto___50522){
var seq__50509_50523__$1 = temp__4657__auto___50522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50509_50523__$1)){
var c__7592__auto___50524 = cljs.core.chunk_first.call(null,seq__50509_50523__$1);
var G__50525 = cljs.core.chunk_rest.call(null,seq__50509_50523__$1);
var G__50526 = c__7592__auto___50524;
var G__50527 = cljs.core.count.call(null,c__7592__auto___50524);
var G__50528 = (0);
seq__50509_50513 = G__50525;
chunk__50510_50514 = G__50526;
count__50511_50515 = G__50527;
i__50512_50516 = G__50528;
continue;
} else {
var k_50529 = cljs.core.first.call(null,seq__50509_50523__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_50529))){
tiltontec.cell.evaluate.not_to_be.call(null,k_50529);
} else {
}

var G__50530 = cljs.core.next.call(null,seq__50509_50523__$1);
var G__50531 = null;
var G__50532 = (0);
var G__50533 = (0);
seq__50509_50513 = G__50530;
chunk__50510_50514 = G__50531;
count__50511_50515 = G__50532;
i__50512_50516 = G__50533;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,tiltontec.tag.gen.tag_by_id,cljs.core.dissoc,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"id","id",-1388402092)));

return tiltontec.cell.evaluate.not_to_be_self.call(null,me);
}));
var ret__7937__auto___50534 = tiltontec.tag.gen.deftag = (function tiltontec$tag$gen$deftag(_AMPERSAND_form,_AMPERSAND_env,tag){
var kids_sym = cljs.core.gensym.call(null,"kids");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
var attrs_sym = cljs.core.gensym.call(null,"attrs");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null)),(function (){var x__7615__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7615__auto__ = attrs_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",-2144855648,null)),(function (){var x__7615__auto__ = kids_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.tag.gen","make-tag","tiltontec.tag.gen/make-tag",-893405104,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7615__auto__ = tag_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7615__auto__ = attrs_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = kids_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});
tiltontec.tag.gen.deftag.cljs$lang$macro = true;

var ret__7937__auto___50542 = (function (){
tiltontec.tag.gen.deftags = (function tiltontec$tag$gen$deftags(var_args){
var args__7904__auto__ = [];
var len__7897__auto___50543 = arguments.length;
var i__7898__auto___50544 = (0);
while(true){
if((i__7898__auto___50544 < len__7897__auto___50543)){
args__7904__auto__.push((arguments[i__7898__auto___50544]));

var G__50545 = (i__7898__auto___50544 + (1));
i__7898__auto___50544 = G__50545;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tags){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var iter__7561__auto__ = (function tiltontec$tag$gen$iter__50538(s__50539){
return (new cljs.core.LazySeq(null,(function (){
var s__50539__$1 = s__50539;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50539__$1);
if(temp__4657__auto__){
var s__50539__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50539__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__50539__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__50541 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__50540 = (0);
while(true){
if((i__50540 < size__7560__auto__)){
var tag = cljs.core._nth.call(null,c__7559__auto__,i__50540);
cljs.core.chunk_append.call(null,b__50541,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.tag.gen","deftag","tiltontec.tag.gen/deftag",-845346631,null)),(function (){var x__7615__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));

var G__50546 = (i__50540 + (1));
i__50540 = G__50546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50541),tiltontec$tag$gen$iter__50538.call(null,cljs.core.chunk_rest.call(null,s__50539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50541),null);
}
} else {
var tag = cljs.core.first.call(null,s__50539__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.tag.gen","deftag","tiltontec.tag.gen/deftag",-845346631,null)),(function (){var x__7615__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))),tiltontec$tag$gen$iter__50538.call(null,cljs.core.rest.call(null,s__50539__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7561__auto__.call(null,tags);
})())));
});

tiltontec.tag.gen.deftags.cljs$lang$maxFixedArity = (2);

tiltontec.tag.gen.deftags.cljs$lang$applyTo = (function (seq50535){
var G__50536 = cljs.core.first.call(null,seq50535);
var seq50535__$1 = cljs.core.next.call(null,seq50535);
var G__50537 = cljs.core.first.call(null,seq50535__$1);
var seq50535__$2 = cljs.core.next.call(null,seq50535__$1);
return tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic(G__50536,G__50537,seq50535__$2);
});

return null;
})()
;
tiltontec.tag.gen.deftags.cljs$lang$macro = true;















tiltontec.tag.gen.deftags.call(null,tiltontec.tag.gen.section,tiltontec.tag.gen.section,tiltontec.tag.gen.label,tiltontec.tag.gen.header,tiltontec.tag.gen.footer,tiltontec.tag.gen.h1,tiltontec.tag.gen.input,tiltontec.tag.gen.p,tiltontec.tag.gen.span,tiltontec.tag.gen.a,tiltontec.tag.gen.img,tiltontec.tag.gen.ul,tiltontec.tag.gen.li,tiltontec.tag.gen.div,tiltontec.tag.gen.button);
tiltontec.tag.gen.evt_tag = (function tiltontec$tag$gen$evt_tag(e){
return tiltontec.tag.gen.dom_tag.call(null,e.target);
});
tiltontec.tag.gen.target_value = (function tiltontec$tag$gen$target_value(evt){
return goog.dom.forms.getValue(evt.target);
});

//# sourceMappingURL=gen.js.map