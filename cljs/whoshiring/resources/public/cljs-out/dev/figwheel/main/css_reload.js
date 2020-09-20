// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.main.css_reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.log');
goog.require('goog.object');
goog.require('goog.cssom');
goog.require('goog.events');
goog.require('goog.Promise');
goog.require('goog.debug.Console');
if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.logger !== 'undefined')){
} else {
figwheel.main.css_reload.logger = goog.log.getLogger("Figwheel CSS Reload");
}

figwheel.main.css_reload.console_logging = (function figwheel$main$css_reload$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_21556 = (new goog.debug.Console());
var G__21544_21557 = c_21556.getFormatter();
goog.object.set(G__21544_21557,"showAbsoluteTime",false);

goog.object.set(G__21544_21557,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_21556);

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
goog.exportSymbol('figwheel.main.css_reload.console_logging', figwheel.main.css_reload.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.log_console !== 'undefined')){
} else {
figwheel.main.css_reload.log_console = figwheel.main.css_reload.console_logging.call(null);
}

figwheel.main.css_reload.add_cache_buster = (function figwheel$main$css_reload$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.main.css_reload.truncate_url = (function figwheel$main$css_reload$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});

figwheel.main.css_reload.matches_file_QMARK_ = (function figwheel$main$css_reload$matches_file_QMARK_(file,stylesheet){
var temp__5720__auto__ = stylesheet.href;
if(cljs.core.truth_(temp__5720__auto__)){
var href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__21540_SHARP_,p2__21541_SHARP_){
if(cljs.core._EQ_.call(null,p1__21540_SHARP_,p2__21541_SHARP_)){
return p1__21540_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.main.css_reload.truncate_url.call(null,href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426),stylesheet,new cljs.core.Keyword(null,"link-href","link-href",-250644450),href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.main.css_reload.truncate_url.call(null,href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.root_stylesheet = (function figwheel$main$css_reload$root_stylesheet(stylesheet){
while(true){
var temp__5718__auto__ = stylesheet.parentStyleSheet;
if(cljs.core.truth_(temp__5718__auto__)){
var parent_stylesheet = temp__5718__auto__;
var G__21558 = parent_stylesheet;
stylesheet = G__21558;
continue;
} else {
return stylesheet;
}
break;
}
});

figwheel.main.css_reload.get_correct_link = (function figwheel$main$css_reload$get_correct_link(file){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__21545){
var map__21546 = p__21545;
var map__21546__$1 = (((((!((map__21546 == null))))?(((((map__21546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21546):map__21546);
var match_length = cljs.core.get.call(null,map__21546__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__21546__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__21542_SHARP_){
return figwheel.main.css_reload.matches_file_QMARK_.call(null,file,p1__21542_SHARP_);
}),goog.cssom.getAllCssStyleSheets())));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return figwheel.main.css_reload.root_stylesheet.call(null,new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426).cljs$core$IFn$_invoke$arity$1(res)).ownerNode;
} else {
return null;
}
});

figwheel.main.css_reload.clone_link = (function figwheel$main$css_reload$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.main.css_reload.add_cache_buster.call(null,url));

return clone;
});

figwheel.main.css_reload.add_link_to_document = (function figwheel$main$css_reload$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
goog.events.listenOnce(klone,"load",(function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}));

if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
return parent.appendChild(klone);
} else {
return parent.insertBefore(klone,orig_link.nextSibling);
}
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.main.css_reload.reload_css_deferred_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__21543_SHARP_){
return p1__21543_SHARP_.call(null,cljs.core.PersistentVector.EMPTY);
}))));
}

figwheel.main.css_reload.reload_css_file = (function figwheel$main$css_reload$reload_css_file(file,fin){
var temp__5718__auto__ = figwheel.main.css_reload.get_correct_link.call(null,file);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.main.css_reload.add_link_to_document.call(null,link,figwheel.main.css_reload.clone_link.call(null,link,link.href),(function (){
return fin.call(null,file);
}));
} else {
return fin.call(null,null);
}
});

figwheel.main.css_reload.conj_reload_prom = (function figwheel$main$css_reload$conj_reload_prom(prom,file){
return prom.then((function (files){
return (new goog.Promise((function (succ,fail){
return figwheel.main.css_reload.reload_css_file.call(null,file,(function (f){
return succ.call(null,(cljs.core.truth_(f)?cljs.core.conj.call(null,files,f):files));
}));
})));
}));
});

figwheel.main.css_reload.dispatch_on_css_load = (function figwheel$main$css_reload$dispatch_on_css_load(files){
return document.body.dispatchEvent((function (){var G__21548 = (new Event("figwheel.after-css-load",document.body));
goog.object.add(G__21548,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css-files","css-files",-502009265),files], null));

return G__21548;
})());
});

figwheel.main.css_reload.reload_css_files_STAR_ = (function figwheel$main$css_reload$reload_css_files_STAR_(files,on_cssload){
var seq__21549_21559 = cljs.core.seq.call(null,files);
var chunk__21550_21560 = null;
var count__21551_21561 = (0);
var i__21552_21562 = (0);
while(true){
if((i__21552_21562 < count__21551_21561)){
var file_21563 = cljs.core._nth.call(null,chunk__21550_21560,i__21552_21562);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_21563);


var G__21564 = seq__21549_21559;
var G__21565 = chunk__21550_21560;
var G__21566 = count__21551_21561;
var G__21567 = (i__21552_21562 + (1));
seq__21549_21559 = G__21564;
chunk__21550_21560 = G__21565;
count__21551_21561 = G__21566;
i__21552_21562 = G__21567;
continue;
} else {
var temp__5720__auto___21568 = cljs.core.seq.call(null,seq__21549_21559);
if(temp__5720__auto___21568){
var seq__21549_21569__$1 = temp__5720__auto___21568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21549_21569__$1)){
var c__4556__auto___21570 = cljs.core.chunk_first.call(null,seq__21549_21569__$1);
var G__21571 = cljs.core.chunk_rest.call(null,seq__21549_21569__$1);
var G__21572 = c__4556__auto___21570;
var G__21573 = cljs.core.count.call(null,c__4556__auto___21570);
var G__21574 = (0);
seq__21549_21559 = G__21571;
chunk__21550_21560 = G__21572;
count__21551_21561 = G__21573;
i__21552_21562 = G__21574;
continue;
} else {
var file_21575 = cljs.core.first.call(null,seq__21549_21569__$1);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_21575);


var G__21576 = cljs.core.next.call(null,seq__21549_21569__$1);
var G__21577 = null;
var G__21578 = (0);
var G__21579 = (0);
seq__21549_21559 = G__21576;
chunk__21550_21560 = G__21577;
count__21551_21561 = G__21578;
i__21552_21562 = G__21579;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,(function (prom){
return prom.then((function (loaded_files){
if(cljs.core.truth_(cljs.core.not_empty.call(null,loaded_files))){
goog.log.info(figwheel.main.css_reload.logger,["loaded ",cljs.core.pr_str.call(null,loaded_files)].join(''));

figwheel.main.css_reload.dispatch_on_css_load.call(null,loaded_files);
} else {
}

var temp__5720__auto___21580 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,loaded_files),cljs.core.set.call(null,files)));
if(cljs.core.truth_(temp__5720__auto___21580)){
var not_loaded_21581 = temp__5720__auto___21580;
goog.log.warning(figwheel.main.css_reload.logger,["Unable to reload ",cljs.core.pr_str.call(null,not_loaded_21581)].join(''));
} else {
}

return cljs.core.PersistentVector.EMPTY;
}));
}));
});

figwheel.main.css_reload.reload_css_files = (function figwheel$main$css_reload$reload_css_files(p__21553,files){
var map__21554 = p__21553;
var map__21554__$1 = (((((!((map__21554 == null))))?(((((map__21554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21554):map__21554);
var on_cssload = cljs.core.get.call(null,map__21554__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if((!((goog.global.document == null)))){
var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.distinct.call(null,files));
if(cljs.core.truth_(temp__5720__auto__)){
var files_SINGLEQUOTE_ = temp__5720__auto__;
return figwheel.main.css_reload.reload_css_files_STAR_.call(null,files_SINGLEQUOTE_,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.reload_css_files_remote = (function figwheel$main$css_reload$reload_css_files_remote(files_array){
figwheel.main.css_reload.reload_css_files.call(null,cljs.core.PersistentArrayMap.EMPTY,files_array);

return true;
});
goog.exportSymbol('figwheel.main.css_reload.reload_css_files_remote', figwheel.main.css_reload.reload_css_files_remote);

//# sourceMappingURL=css_reload.js.map
