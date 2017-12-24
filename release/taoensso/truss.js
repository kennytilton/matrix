// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.truss');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('taoensso.truss.impl');
/**
 * Returns current value of dynamic assertion data.
 */
taoensso.truss.get_dynamic_assertion_data = (function taoensso$truss$get_dynamic_assertion_data(){
return taoensso.truss.impl._STAR__QMARK_data_STAR_;
});
taoensso.truss._error_fn = (function taoensso$truss$_error_fn(f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.cst$kw$default)){
return taoensso.truss.impl.default_error_fn;
} else {
return f;
}
});
/**
 * Sets the root (fn [data-map-delay]) called on invariant violations.
 */
taoensso.truss.set_error_fn_BANG_ = (function taoensso$truss$set_error_fn_BANG_(f){
return taoensso.truss.impl._STAR_error_fn_STAR_ = taoensso.truss._error_fn(f);
});
