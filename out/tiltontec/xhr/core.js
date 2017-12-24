// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.xhr.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.synapse');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('cljs_http.client');
tiltontec.xhr.core._PLUS_xhr_sid_PLUS_ = cljs.core.atom.call(null,(-1));
tiltontec.xhr.core.xhr_init_BANG_ = (function tiltontec$xhr$core$xhr_init_BANG_(){
return cljs.core.reset_BANG_.call(null,tiltontec.xhr.core._PLUS_xhr_sid_PLUS_,(-1));
});
tiltontec.xhr.core.xhr_send = (function tiltontec$xhr$core$xhr_send(xhr){
var uri = tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"uri","uri",-774711847));
return null;
});
tiltontec.xhr.core.xhr_status = (function tiltontec$xhr$core$xhr_status(xhr){
var or__6772__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192)));
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return new cljs.core.Keyword(null,"no-response-yet","no-response-yet",417819532);
}
});
tiltontec.xhr.core.xhr_ok_body = (function tiltontec$xhr$core$xhr_ok_body(xhr){
var temp__4657__auto__ = tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192));
if(cljs.core.truth_(temp__4657__auto__)){
var r = temp__4657__auto__;
if(cljs.core._EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(r))){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(r);
} else {
return null;
}
} else {
return null;
}
});
tiltontec.xhr.core.xhr_error = (function tiltontec$xhr$core$xhr_error(xhr){
var temp__4657__auto__ = tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192));
if(cljs.core.truth_(temp__4657__auto__)){
var r = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(r))){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(r);
} else {
return null;
}
} else {
return null;
}
});
tiltontec.xhr.core.make_xhr = (function tiltontec$xhr$core$make_xhr(var_args){
var G__50833 = arguments.length;
switch (G__50833) {
case 1:
return tiltontec.xhr.core.make_xhr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.xhr.core.make_xhr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.core.make_xhr.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return tiltontec.xhr.core.make_xhr.call(null,uri,cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.xhr.core.make_xhr.cljs$core$IFn$_invoke$arity$2 = (function (uri,attrs){
if(typeof uri === 'string'){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("param uri <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1("> not a string")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(string? uri)")].join('')));
}

var xhr = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.xhr.core","xhr","tiltontec.xhr.core/xhr",895251004),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,tiltontec.xhr.core._PLUS_xhr_sid_PLUS_,cljs.core.inc),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"response","response",-1068424192),tiltontec.cell.core.c_in.call(null,null),new cljs.core.Keyword(null,"select","select",1147833503),null,new cljs.core.Keyword(null,"selection","selection",975998651),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.list(new cljs.core.Symbol(null,"xhr-ok-body","xhr-ok-body",153742127,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"select","select",1147833503))], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol(null,"b","b",-1172211299,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var temp__4657__auto__ = tiltontec.xhr.core.xhr_ok_body.call(null,me);
if(cljs.core.truth_(temp__4657__auto__)){
var b = temp__4657__auto__;
var temp__4655__auto__ = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"select","select",1147833503));
if(cljs.core.truth_(temp__4655__auto__)){
var ks = temp__4655__auto__;
return cljs.core.select_keys.call(null,b,ks);
} else {
return b;
}
} else {
return null;
}
})),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"send?","send?",1918149690))))));
if(cljs.core.truth_(new cljs.core.Keyword(null,"send?","send?",1918149690).cljs$core$IFn$_invoke$arity$1(attrs))){
tiltontec.xhr.core.xhr_send.call(null,xhr);
} else {
}

return xhr;
});

tiltontec.xhr.core.make_xhr.cljs$lang$maxFixedArity = 2;

tiltontec.xhr.core.send_xhr = (function tiltontec$xhr$core$send_xhr(var_args){
var G__50836 = arguments.length;
switch (G__50836) {
case 1:
return tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return tiltontec.xhr.core.send_xhr.call(null,new cljs.core.Keyword(null,"anon","anon",-765650478),uri,cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x instanceof cljs.core.Keyword)){
return tiltontec.xhr.core.send_xhr.call(null,x,y,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(typeof x === 'string'){
return tiltontec.xhr.core.send_xhr.call(null,new cljs.core.Keyword(null,"anon","anon",-765650478),x,y);
} else {
throw (new Error(cljs.pprint.cl_format.call(null,"~&send-xhr cannot discriminate params ~a and ~a",x,y)));

}
}
});

tiltontec.xhr.core.send_xhr.cljs$core$IFn$_invoke$arity$3 = (function (name,uri,attrs){
tiltontec.util.core.countit.call(null,new cljs.core.Keyword(null,"send-xhr","send-xhr",1063487637));

return tiltontec.xhr.core.make_xhr.call(null,uri,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"send?","send?",1918149690),true], null),attrs));
});

tiltontec.xhr.core.send_xhr.cljs$lang$maxFixedArity = 3;

tiltontec.xhr.core.xhr_response = (function tiltontec$xhr$core$xhr_response(xhr){
return tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192));
});
tiltontec.xhr.core.xhr_selection = (function tiltontec$xhr$core$xhr_selection(xhr){
return tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"selection","selection",975998651));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.xhr.core","xhr","tiltontec.xhr.core/xhr",895251004)], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
return null;
} else {
return null;
}
}));
if(typeof tiltontec.xhr.core.xhr_name_to_map !== 'undefined'){
} else {
tiltontec.xhr.core.xhr_name_to_map = (function (){var method_table__7706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.xhr.core","xhr-name-to-map"),((function (method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__){
return (function (p1__50838_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__50838_SHARP_));
});})(method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7710__auto__,method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.xhr.core.xhr_name_to_map,new cljs.core.Keyword(null,"default","default",-1987822328),(function (xhr){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,xhr),new cljs.core.Keyword(null,"par","par",-61778778),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"selection","selection",975998651)),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"xhr-name-to-map-fell-thru","xhr-name-to-map-fell-thru",1396391297),new cljs.core.Keyword(null,"kids","kids",1156670771),(function (){var iter__7561__auto__ = (function tiltontec$xhr$core$iter__50839(s__50840){
return (new cljs.core.LazySeq(null,(function (){
var s__50840__$1 = s__50840;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50840__$1);
if(temp__4657__auto__){
var s__50840__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50840__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__50840__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__50842 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__50841 = (0);
while(true){
if((i__50841 < size__7560__auto__)){
var k = cljs.core._nth.call(null,c__7559__auto__,i__50841);
cljs.core.chunk_append.call(null,b__50842,tiltontec.xhr.core.xhr_to_map.call(null,k));

var G__50843 = (i__50841 + (1));
i__50841 = G__50843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50842),tiltontec$xhr$core$iter__50839.call(null,cljs.core.chunk_rest.call(null,s__50840__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50842),null);
}
} else {
var k = cljs.core.first.call(null,s__50840__$2);
return cljs.core.cons.call(null,tiltontec.xhr.core.xhr_to_map.call(null,k),tiltontec$xhr$core$iter__50839.call(null,cljs.core.rest.call(null,s__50840__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7561__auto__.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xhr)));
})());
}));
tiltontec.xhr.core.xhr_to_map = (function tiltontec$xhr$core$xhr_to_map(xhr){
var G__50844 = cljs.core.type.call(null,xhr);
var G__50844__$1 = (((G__50844 instanceof cljs.core.Keyword))?G__50844.fqn:null);
switch (G__50844__$1) {
case "tiltontec.xhr.core/xhr":
return tiltontec.xhr.core.xhr_name_to_map.call(null,xhr);

break;
case "tiltontec.model.core/family":
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,xhr),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"par","par",-61778778),new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949)),new cljs.core.Keyword(null,"kids","kids",1156670771),(function (){var iter__7561__auto__ = ((function (G__50844,G__50844__$1){
return (function tiltontec$xhr$core$xhr_to_map_$_iter__50845(s__50846){
return (new cljs.core.LazySeq(null,((function (G__50844,G__50844__$1){
return (function (){
var s__50846__$1 = s__50846;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50846__$1);
if(temp__4657__auto__){
var s__50846__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50846__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__50846__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__50848 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__50847 = (0);
while(true){
if((i__50847 < size__7560__auto__)){
var k = cljs.core._nth.call(null,c__7559__auto__,i__50847);
cljs.core.chunk_append.call(null,b__50848,tiltontec.xhr.core.xhr_to_map.call(null,k));

var G__50850 = (i__50847 + (1));
i__50847 = G__50850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50848),tiltontec$xhr$core$xhr_to_map_$_iter__50845.call(null,cljs.core.chunk_rest.call(null,s__50846__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50848),null);
}
} else {
var k = cljs.core.first.call(null,s__50846__$2);
return cljs.core.cons.call(null,tiltontec.xhr.core.xhr_to_map.call(null,k),tiltontec$xhr$core$xhr_to_map_$_iter__50845.call(null,cljs.core.rest.call(null,s__50846__$2)));
}
} else {
return null;
}
break;
}
});})(G__50844,G__50844__$1))
,null,null));
});})(G__50844,G__50844__$1))
;
return iter__7561__auto__.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xhr)));
})());

break;
default:
return cljs.core.select_keys.call(null,xhr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847)], null));

}
});
tiltontec.xhr.core.xhr_status_key = (function tiltontec$xhr$core$xhr_status_key(xhr){
return tiltontec.xhr.core.xhr_status.call(null,xhr);
});
tiltontec.xhr.core.xhr_resolved = (function tiltontec$xhr$core$xhr_resolved(xhr){
return tiltontec.xhr.core.xhr_response.call(null,xhr);
});
tiltontec.xhr.core.xhr_error_QMARK_ = (function tiltontec$xhr$core$xhr_error_QMARK_(xhr){
return cljs.core._EQ_.call(null,tiltontec.xhr.core.xhr_status_key.call(null,xhr),new cljs.core.Keyword(null,"error","error",-978969032));
});
tiltontec.xhr.core.xhrfo = (function tiltontec$xhr$core$xhrfo(xhr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.xhr.core.xhr_status_key.call(null,xhr),tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"uri","uri",-774711847))], null);
});
tiltontec.xhr.core.synaptic_xhr = (function tiltontec$xhr$core$synaptic_xhr(var_args){
var G__50852 = arguments.length;
switch (G__50852) {
case 2:
return tiltontec.xhr.core.synaptic_xhr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.xhr.core.synaptic_xhr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.core.synaptic_xhr.cljs$core$IFn$_invoke$arity$2 = (function (id,uri){
return tiltontec.xhr.core.synaptic_xhr.call(null,id,uri,true);
});

tiltontec.xhr.core.synaptic_xhr.cljs$core$IFn$_invoke$arity$3 = (function (id,uri,resolve_QMARK_){
return (cljs.core.truth_(resolve_QMARK_)?tiltontec.xhr.core.xhr_resolved:cljs.core.identity).call(null,(function (){var existing_syn__24621__auto__ = tiltontec.cell.synapse.existing_syn.call(null,id);
var synapse__24622__auto__ = (function (){var or__6772__auto__ = existing_syn__24621__auto__;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var new_syn__24623__auto__ = (function (){cljs.core.println.call(null,new cljs.core.Keyword(null,"making-syn!?","making-syn!?",1778764065),new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tiltontec.cell.base._STAR_depender_STAR_)));

return tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tiltontec.cell.base._STAR_depender_STAR_)),new cljs.core.Keyword(null,"slot","slot",240229571),id,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201),id,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"send-xhr","send-xhr",-1590948132,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"uri","uri",865819680,null))),new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248),true,new cljs.core.Keyword(null,"rule","rule",729973257),((function (or__6772__auto__,existing_syn__24621__auto__){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return tiltontec.xhr.core.send_xhr.call(null,id,uri);
});})(or__6772__auto__,existing_syn__24621__auto__))
);
})();
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synapses","synapses",-614206130),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_synapses.call(null,tiltontec.cell.base._STAR_depender_STAR_),new_syn__24623__auto__));

tiltontec.cell.evaluate.record_dependency.call(null,new_syn__24623__auto__);

return new_syn__24623__auto__;
}
})();
var value__24624__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,((function (existing_syn__24621__auto__,synapse__24622__auto__){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.ensure_value_is_current.call(null,synapse__24622__auto__,new cljs.core.Keyword(null,"synapse","synapse",-1160900177),tiltontec.cell.base._STAR_depender_STAR_);
});})(existing_syn__24621__auto__,synapse__24622__auto__))
);
tiltontec.cell.evaluate.record_dependency.call(null,synapse__24622__auto__);

return value__24624__auto__;
})());
});

tiltontec.xhr.core.synaptic_xhr.cljs$lang$maxFixedArity = 3;

tiltontec.xhr.core.xhr_await = (function tiltontec$xhr$core$xhr_await(var_args){
var G__50855 = arguments.length;
switch (G__50855) {
case 1:
return tiltontec.xhr.core.xhr_await.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.xhr.core.xhr_await.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.core.xhr_await.cljs$core$IFn$_invoke$arity$1 = (function (xhr){
return tiltontec.xhr.core.xhr_await.call(null,xhr,(3));
});

tiltontec.xhr.core.xhr_await.cljs$core$IFn$_invoke$arity$2 = (function (xhr,max_seconds){
if(cljs.core.truth_(tiltontec.xhr.core.xhr_response.call(null,xhr))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"xhr-resolved","xhr-resolved",1871144193),tiltontec.xhr.core.xhr_response.call(null,xhr));

cljs.core.println.call(null,new cljs.core.Keyword(null,"xhr-resolved","xhr-resolved",1871144193),tiltontec.xhr.core.xhrfo.call(null,xhr));

return xhr;
} else {
if((max_seconds > (0))){
return setTimeout((function (){
return tiltontec.xhr.core.xhr_await.call(null,xhr,(max_seconds - (1)));
}),(1000));
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"xhr-await-timeout!","xhr-await-timeout!",223238396),tiltontec.xhr.core.xhrfo.call(null,xhr));

return null;

}
}
});

tiltontec.xhr.core.xhr_await.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map