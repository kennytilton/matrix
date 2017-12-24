// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.model.base');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.macros');
tiltontec.model.base.md_name = (function tiltontec$model$base$md_name(ref){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});
tiltontec.model.base.md_state = (function tiltontec$model$base$md_state(ref){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ref));
});

tiltontec.model.base.md_cz = (function tiltontec$model$base$md_cz(ref){
return new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ref));
});
tiltontec.model.base.md_cell = (function tiltontec$model$base$md_cell(me,slot){
return slot.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me)));
});
tiltontec.model.base.md_install_cell = (function tiltontec$model$base$md_install_cell(me,slot,c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571),slot,new cljs.core.Keyword(null,"me","me",-139006693),me);

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_.call(null,c))?tiltontec.cell.base.c_value.call(null,c):null));

return true;
} else {
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),c);

return false;

}
});
if(typeof tiltontec.model.base.md_awaken_before !== 'undefined'){
} else {
tiltontec.model.base.md_awaken_before = (function (){var method_table__7706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.model.base","md-awaken-before"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7710__auto__,method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.model.base.md_awaken_before,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return null;
}));
/**
 * (1) do initial evaluation of all ruled slots
 * (2) call observers of all slots
 */
tiltontec.model.base.md_awaken = (function tiltontec$model$base$md_awaken(me){
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("md-awaken passed nil"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

tiltontec.model.base.md_awaken_before.call(null,me);

tiltontec.cell.base.c_assert.call(null,cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nascent","nascent",443401807),tiltontec.model.base.md_state.call(null,me)));

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),me], null),new cljs.core.Keyword(null,"awakening","awakening",838364227));

cljs.core.doall.call(null,(function (){var iter__7561__auto__ = (function tiltontec$model$base$md_awaken_$_iter__50168(s__50169){
return (new cljs.core.LazySeq(null,(function (){
var s__50169__$1 = s__50169;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50169__$1);
if(temp__4657__auto__){
var s__50169__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50169__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__50169__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__50171 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__50170 = (0);
while(true){
if((i__50170 < size__7560__auto__)){
var slot = cljs.core._nth.call(null,c__7559__auto__,i__50170);
cljs.core.chunk_append.call(null,b__50171,(function (){var temp__4657__auto____$1 = slot.call(null,tiltontec.model.base.md_cz.call(null,me),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core.truth_(temp__4657__auto____$1)){
var c = temp__4657__auto____$1;
if(cljs.core._EQ_.call(null,c,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
if(cljs.core._EQ_.call(null,slot,new cljs.core.Keyword(null,"kids","kids",1156670771))){
cljs.core.println.call(null,tiltontec.cell.base.ia_type.call(null,me),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)),new cljs.core.Keyword(null,"md-awaken-noslot-obs","md-awaken-noslot-obs",1288539060),slot,cljs.core.keys.call(null,tiltontec.model.base.md_cz.call(null,me)),new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$2(tiltontec.model.base.md_cz.call(null,me),new cljs.core.Keyword(null,"hunh","hunh",-1591878996)));

} else {
}

return tiltontec.cell.observer.observe.call(null,slot,me,slot.call(null,cljs.core.deref.call(null,me)),tiltontec.cell.base.unbound,null);
} else {
return tiltontec.cell.evaluate.c_awaken.call(null,c);

}
} else {
return null;
}
})());

var G__50172 = (i__50170 + (1));
i__50170 = G__50172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50171),tiltontec$model$base$md_awaken_$_iter__50168.call(null,cljs.core.chunk_rest.call(null,s__50169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50171),null);
}
} else {
var slot = cljs.core.first.call(null,s__50169__$2);
return cljs.core.cons.call(null,(function (){var temp__4657__auto____$1 = slot.call(null,tiltontec.model.base.md_cz.call(null,me),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core.truth_(temp__4657__auto____$1)){
var c = temp__4657__auto____$1;
if(cljs.core._EQ_.call(null,c,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
if(cljs.core._EQ_.call(null,slot,new cljs.core.Keyword(null,"kids","kids",1156670771))){
cljs.core.println.call(null,tiltontec.cell.base.ia_type.call(null,me),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)),new cljs.core.Keyword(null,"md-awaken-noslot-obs","md-awaken-noslot-obs",1288539060),slot,cljs.core.keys.call(null,tiltontec.model.base.md_cz.call(null,me)),new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$2(tiltontec.model.base.md_cz.call(null,me),new cljs.core.Keyword(null,"hunh","hunh",-1591878996)));

} else {
}

return tiltontec.cell.observer.observe.call(null,slot,me,slot.call(null,cljs.core.deref.call(null,me)),tiltontec.cell.base.unbound,null);
} else {
return tiltontec.cell.evaluate.c_awaken.call(null,c);

}
} else {
return null;
}
})(),tiltontec$model$base$md_awaken_$_iter__50168.call(null,cljs.core.rest.call(null,s__50169__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7561__auto__.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,me)));
})());

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),me], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

return me;
});

//# sourceMappingURL=base.js.map