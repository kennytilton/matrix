// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__21167_SHARP_){
var k = f.call(null,p1__21167_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__21168){
var vec__21169 = p__21168;
var k = cljs.core.nth.call(null,vec__21169,(0),null);
var v = cljs.core.nth.call(null,vec__21169,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21173 = arguments.length;
var i__4737__auto___21174 = (0);
while(true){
if((i__4737__auto___21174 < len__4736__auto___21173)){
args__4742__auto__.push((arguments[i__4737__auto___21174]));

var G__21175 = (i__4737__auto___21174 + (1));
i__4737__auto___21174 = G__21175;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq21172){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21172));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__21178){
var map__21179 = p__21178;
var map__21179__$1 = (((((!((map__21179 == null))))?(((((map__21179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21179):map__21179);
var message = cljs.core.get.call(null,map__21179__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__21179__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__21177_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21177_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__21176_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__21176_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__21182){
var map__21183 = p__21182;
var map__21183__$1 = (((((!((map__21183 == null))))?(((((map__21183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21183):map__21183);
var message_data = map__21183__$1;
var message = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__21185 = file_excerpt;
var map__21185__$1 = (((((!((map__21185 == null))))?(((((map__21185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21185):map__21185);
var start_line = cljs.core.get.call(null,map__21185__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__21185__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__21185__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__21186 = cljs.core.split_with.call(null,(function (p1__21181_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__21181_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__21186,(0),null);
var end = cljs.core.nth.call(null,vec__21186,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__21190){
var map__21191 = p__21190;
var map__21191__$1 = (((((!((map__21191 == null))))?(((((map__21191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21191):map__21191);
var file = cljs.core.get.call(null,map__21191__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__21191__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__21191__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__21193 = "";
var G__21193__$1 = (cljs.core.truth_(file)?[G__21193,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__21193);
var G__21193__$2 = (cljs.core.truth_(line)?[G__21193__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__21193__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__21193__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__21193__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_21248 = (new goog.debug.Console());
var G__21200_21249 = c_21248.getFormatter();
goog.object.set(G__21200_21249,"showAbsoluteTime",false);

goog.object.set(G__21200_21249,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_21248);

}

var temp__5720__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__21201 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__21201,"data",(function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__21201;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5718__auto__ = e.event_;
if(cljs.core.truth_(temp__5718__auto__)){
var e__$1 = temp__5718__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4115__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4115__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4115__auto__;
}
});

var last_reload_timestamp_21250 = cljs.core.atom.call(null,(0));
var promise_chain_21251 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_21250) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_21250,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_21251.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__21202 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__21203 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__21203);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__21204 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__21205 = null;
var count__21206 = (0);
var i__21207 = (0);
while(true){
if((i__21207 < count__21206)){
var w = cljs.core._nth.call(null,chunk__21205,i__21207);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__21252 = seq__21204;
var G__21253 = chunk__21205;
var G__21254 = count__21206;
var G__21255 = (i__21207 + (1));
seq__21204 = G__21252;
chunk__21205 = G__21253;
count__21206 = G__21254;
i__21207 = G__21255;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__21204);
if(temp__5720__auto__){
var seq__21204__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21204__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__21204__$1);
var G__21256 = cljs.core.chunk_rest.call(null,seq__21204__$1);
var G__21257 = c__4556__auto__;
var G__21258 = cljs.core.count.call(null,c__4556__auto__);
var G__21259 = (0);
seq__21204 = G__21256;
chunk__21205 = G__21257;
count__21206 = G__21258;
i__21207 = G__21259;
continue;
} else {
var w = cljs.core.first.call(null,seq__21204__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__21260 = cljs.core.next.call(null,seq__21204__$1);
var G__21261 = null;
var G__21262 = (0);
var G__21263 = (0);
seq__21204 = G__21260;
chunk__21205 = G__21261;
count__21206 = G__21262;
i__21207 = G__21263;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__21202);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_21251.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__21208 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__21209 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__21209);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__21208);
}}));
} else {
return promise_chain_21251.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21264 = arguments.length;
var i__4737__auto___21265 = (0);
while(true){
if((i__4737__auto___21265 < len__4736__auto___21264)){
args__4742__auto__.push((arguments[i__4737__auto___21265]));

var G__21266 = (i__4737__auto___21265 + (1));
i__4737__auto___21265 = G__21266;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__21212){
var vec__21213 = p__21212;
var n = cljs.core.nth.call(null,vec__21213,(0),null);
var mdata = cljs.core.nth.call(null,vec__21213,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__21216 = cljs.core.seq.call(null,hooks);
var chunk__21217 = null;
var count__21218 = (0);
var i__21219 = (0);
while(true){
if((i__21219 < count__21218)){
var vec__21226 = cljs.core._nth.call(null,chunk__21217,i__21219);
var n = cljs.core.nth.call(null,vec__21226,(0),null);
var f = cljs.core.nth.call(null,vec__21226,(1),null);
var temp__5718__auto___21267 = cljs.core.reduce.call(null,((function (seq__21216,chunk__21217,count__21218,i__21219,vec__21226,n,f,hooks){
return (function (p1__21194_SHARP_,p2__21195_SHARP_){
if(cljs.core.truth_(p1__21194_SHARP_)){
return goog.object.get(p1__21194_SHARP_,p2__21195_SHARP_);
} else {
return null;
}
});})(seq__21216,chunk__21217,count__21218,i__21219,vec__21226,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___21267)){
var hook_21268 = temp__5718__auto___21267;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_21268,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__21269 = seq__21216;
var G__21270 = chunk__21217;
var G__21271 = count__21218;
var G__21272 = (i__21219 + (1));
seq__21216 = G__21269;
chunk__21217 = G__21270;
count__21218 = G__21271;
i__21219 = G__21272;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__21216);
if(temp__5720__auto__){
var seq__21216__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21216__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__21216__$1);
var G__21273 = cljs.core.chunk_rest.call(null,seq__21216__$1);
var G__21274 = c__4556__auto__;
var G__21275 = cljs.core.count.call(null,c__4556__auto__);
var G__21276 = (0);
seq__21216 = G__21273;
chunk__21217 = G__21274;
count__21218 = G__21275;
i__21219 = G__21276;
continue;
} else {
var vec__21229 = cljs.core.first.call(null,seq__21216__$1);
var n = cljs.core.nth.call(null,vec__21229,(0),null);
var f = cljs.core.nth.call(null,vec__21229,(1),null);
var temp__5718__auto___21277 = cljs.core.reduce.call(null,((function (seq__21216,chunk__21217,count__21218,i__21219,vec__21229,n,f,seq__21216__$1,temp__5720__auto__,hooks){
return (function (p1__21194_SHARP_,p2__21195_SHARP_){
if(cljs.core.truth_(p1__21194_SHARP_)){
return goog.object.get(p1__21194_SHARP_,p2__21195_SHARP_);
} else {
return null;
}
});})(seq__21216,chunk__21217,count__21218,i__21219,vec__21229,n,f,seq__21216__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___21277)){
var hook_21278 = temp__5718__auto___21277;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_21278,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__21279 = cljs.core.next.call(null,seq__21216__$1);
var G__21280 = null;
var G__21281 = (0);
var G__21282 = (0);
seq__21216 = G__21279;
chunk__21217 = G__21280;
count__21218 = G__21281;
i__21219 = G__21282;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq21210){
var G__21211 = cljs.core.first.call(null,seq21210);
var seq21210__$1 = cljs.core.next.call(null,seq21210);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21211,seq21210__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__21232){
var vec__21233 = p__21232;
var k = cljs.core.nth.call(null,vec__21233,(0),null);
var v = cljs.core.nth.call(null,vec__21233,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__21196_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__21196_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__21196_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__21197_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__21197_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_(((cljs.core.not.call(null,figwheel.core.load_warninged_code))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__21198_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__21198_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__21236_21283 = cljs.core.seq.call(null,to_reload);
var chunk__21237_21284 = null;
var count__21238_21285 = (0);
var i__21239_21286 = (0);
while(true){
if((i__21239_21286 < count__21238_21285)){
var ns_21287 = cljs.core._nth.call(null,chunk__21237_21284,i__21239_21286);
goog.require(cljs.core.name.call(null,ns_21287),true);


var G__21288 = seq__21236_21283;
var G__21289 = chunk__21237_21284;
var G__21290 = count__21238_21285;
var G__21291 = (i__21239_21286 + (1));
seq__21236_21283 = G__21288;
chunk__21237_21284 = G__21289;
count__21238_21285 = G__21290;
i__21239_21286 = G__21291;
continue;
} else {
var temp__5720__auto___21292 = cljs.core.seq.call(null,seq__21236_21283);
if(temp__5720__auto___21292){
var seq__21236_21293__$1 = temp__5720__auto___21292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21236_21293__$1)){
var c__4556__auto___21294 = cljs.core.chunk_first.call(null,seq__21236_21293__$1);
var G__21295 = cljs.core.chunk_rest.call(null,seq__21236_21293__$1);
var G__21296 = c__4556__auto___21294;
var G__21297 = cljs.core.count.call(null,c__4556__auto___21294);
var G__21298 = (0);
seq__21236_21283 = G__21295;
chunk__21237_21284 = G__21296;
count__21238_21285 = G__21297;
i__21239_21286 = G__21298;
continue;
} else {
var ns_21299 = cljs.core.first.call(null,seq__21236_21293__$1);
goog.require(cljs.core.name.call(null,ns_21299),true);


var G__21300 = cljs.core.next.call(null,seq__21236_21293__$1);
var G__21301 = null;
var G__21302 = (0);
var G__21303 = (0);
seq__21236_21283 = G__21300;
chunk__21237_21284 = G__21301;
count__21238_21285 = G__21302;
i__21239_21286 = G__21303;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_21304 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var not_loaded = temp__5720__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_21304);
} else {
setTimeout(after_reload_fn_21304,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__21240 = cljs.core.seq.call(null,warnings);
var chunk__21241 = null;
var count__21242 = (0);
var i__21243 = (0);
while(true){
if((i__21243 < count__21242)){
var warning = cljs.core._nth.call(null,chunk__21241,i__21243);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__21305 = seq__21240;
var G__21306 = chunk__21241;
var G__21307 = count__21242;
var G__21308 = (i__21243 + (1));
seq__21240 = G__21305;
chunk__21241 = G__21306;
count__21242 = G__21307;
i__21243 = G__21308;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__21240);
if(temp__5720__auto__){
var seq__21240__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21240__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__21240__$1);
var G__21309 = cljs.core.chunk_rest.call(null,seq__21240__$1);
var G__21310 = c__4556__auto__;
var G__21311 = cljs.core.count.call(null,c__4556__auto__);
var G__21312 = (0);
seq__21240 = G__21309;
chunk__21241 = G__21310;
count__21242 = G__21311;
i__21243 = G__21312;
continue;
} else {
var warning = cljs.core.first.call(null,seq__21240__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__21313 = cljs.core.next.call(null,seq__21240__$1);
var G__21314 = null;
var G__21315 = (0);
var G__21316 = (0);
seq__21240 = G__21313;
chunk__21241 = G__21314;
count__21242 = G__21315;
i__21243 = G__21316;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__21244){
var map__21245 = p__21244;
var map__21245__$1 = (((((!((map__21245 == null))))?(((((map__21245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21245):map__21245);
var exception_data = map__21245__$1;
var file = cljs.core.get.call(null,map__21245__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__21245__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21245__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__21199_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__21199_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return goog.log.warning(figwheel.core.logger,(function (){var G__21247 = "Compile Exception - ";
var G__21247__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return message;
}
})())?[G__21247,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__21247);
if(cljs.core.truth_(file)){
return [G__21247__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__21247__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
