goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12856){
var map__12857 = p__12856;
var map__12857__$1 = cljs.core.__destructure_map(map__12857);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12857__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12857__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12857__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12857__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5025__auto__ = child_of;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12858_12889 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12859_12890 = null;
var count__12860_12891 = (0);
var i__12861_12892 = (0);
while(true){
if((i__12861_12892 < count__12860_12891)){
var vec__12874_12893 = chunk__12859_12890.cljs$core$IIndexed$_nth$arity$2(null,i__12861_12892);
var k_12894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12874_12893,(0),null);
var cb_12895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12874_12893,(1),null);
try{var G__12878_12896 = cljs.core.deref(re_frame.trace.traces);
(cb_12895.cljs$core$IFn$_invoke$arity$1 ? cb_12895.cljs$core$IFn$_invoke$arity$1(G__12878_12896) : cb_12895.call(null,G__12878_12896));
}catch (e12877){var e_12897 = e12877;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12894,"while storing",cljs.core.deref(re_frame.trace.traces),e_12897], 0));
}

var G__12898 = seq__12858_12889;
var G__12899 = chunk__12859_12890;
var G__12900 = count__12860_12891;
var G__12901 = (i__12861_12892 + (1));
seq__12858_12889 = G__12898;
chunk__12859_12890 = G__12899;
count__12860_12891 = G__12900;
i__12861_12892 = G__12901;
continue;
} else {
var temp__5823__auto___12902 = cljs.core.seq(seq__12858_12889);
if(temp__5823__auto___12902){
var seq__12858_12903__$1 = temp__5823__auto___12902;
if(cljs.core.chunked_seq_QMARK_(seq__12858_12903__$1)){
var c__5548__auto___12904 = cljs.core.chunk_first(seq__12858_12903__$1);
var G__12905 = cljs.core.chunk_rest(seq__12858_12903__$1);
var G__12906 = c__5548__auto___12904;
var G__12907 = cljs.core.count(c__5548__auto___12904);
var G__12908 = (0);
seq__12858_12889 = G__12905;
chunk__12859_12890 = G__12906;
count__12860_12891 = G__12907;
i__12861_12892 = G__12908;
continue;
} else {
var vec__12880_12909 = cljs.core.first(seq__12858_12903__$1);
var k_12910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12880_12909,(0),null);
var cb_12911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12880_12909,(1),null);
try{var G__12884_12912 = cljs.core.deref(re_frame.trace.traces);
(cb_12911.cljs$core$IFn$_invoke$arity$1 ? cb_12911.cljs$core$IFn$_invoke$arity$1(G__12884_12912) : cb_12911.call(null,G__12884_12912));
}catch (e12883){var e_12913 = e12883;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12910,"while storing",cljs.core.deref(re_frame.trace.traces),e_12913], 0));
}

var G__12914 = cljs.core.next(seq__12858_12903__$1);
var G__12915 = null;
var G__12916 = (0);
var G__12917 = (0);
seq__12858_12889 = G__12914;
chunk__12859_12890 = G__12915;
count__12860_12891 = G__12916;
i__12861_12892 = G__12917;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
