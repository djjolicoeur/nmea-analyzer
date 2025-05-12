goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13174 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13175 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13175);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___13255 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___13255)){
var new_db_13256 = temp__5823__auto___13255;
var fexpr__13178_13257 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13178_13257.cljs$core$IFn$_invoke$arity$1 ? fexpr__13178_13257.cljs$core$IFn$_invoke$arity$1(new_db_13256) : fexpr__13178_13257.call(null,new_db_13256));
} else {
}

var seq__13179 = cljs.core.seq(effects_without_db);
var chunk__13180 = null;
var count__13181 = (0);
var i__13182 = (0);
while(true){
if((i__13182 < count__13181)){
var vec__13190 = chunk__13180.cljs$core$IIndexed$_nth$arity$2(null,i__13182);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(1),null);
var temp__5821__auto___13258 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13258)){
var effect_fn_13259 = temp__5821__auto___13258;
(effect_fn_13259.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13259.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13259.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13260 = seq__13179;
var G__13261 = chunk__13180;
var G__13262 = count__13181;
var G__13263 = (i__13182 + (1));
seq__13179 = G__13260;
chunk__13180 = G__13261;
count__13181 = G__13262;
i__13182 = G__13263;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13179);
if(temp__5823__auto__){
var seq__13179__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13179__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__13179__$1);
var G__13264 = cljs.core.chunk_rest(seq__13179__$1);
var G__13265 = c__5548__auto__;
var G__13266 = cljs.core.count(c__5548__auto__);
var G__13267 = (0);
seq__13179 = G__13264;
chunk__13180 = G__13265;
count__13181 = G__13266;
i__13182 = G__13267;
continue;
} else {
var vec__13205 = cljs.core.first(seq__13179__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13205,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13205,(1),null);
var temp__5821__auto___13268 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13268)){
var effect_fn_13269 = temp__5821__auto___13268;
(effect_fn_13269.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13269.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13269.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13270 = cljs.core.next(seq__13179__$1);
var G__13271 = null;
var G__13272 = (0);
var G__13273 = (0);
seq__13179 = G__13270;
chunk__13180 = G__13271;
count__13181 = G__13272;
i__13182 = G__13273;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12834__auto___13274 = re_frame.interop.now();
var duration__12835__auto___13275 = (end__12834__auto___13274 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12835__auto___13275,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12834__auto___13274);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13174);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___13276 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___13276)){
var new_db_13277 = temp__5823__auto___13276;
var fexpr__13208_13278 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13208_13278.cljs$core$IFn$_invoke$arity$1 ? fexpr__13208_13278.cljs$core$IFn$_invoke$arity$1(new_db_13277) : fexpr__13208_13278.call(null,new_db_13277));
} else {
}

var seq__13209 = cljs.core.seq(effects_without_db);
var chunk__13210 = null;
var count__13211 = (0);
var i__13212 = (0);
while(true){
if((i__13212 < count__13211)){
var vec__13219 = chunk__13210.cljs$core$IIndexed$_nth$arity$2(null,i__13212);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13219,(1),null);
var temp__5821__auto___13279 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13279)){
var effect_fn_13280 = temp__5821__auto___13279;
(effect_fn_13280.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13280.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13280.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13281 = seq__13209;
var G__13282 = chunk__13210;
var G__13283 = count__13211;
var G__13284 = (i__13212 + (1));
seq__13209 = G__13281;
chunk__13210 = G__13282;
count__13211 = G__13283;
i__13212 = G__13284;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13209);
if(temp__5823__auto__){
var seq__13209__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13209__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__13209__$1);
var G__13285 = cljs.core.chunk_rest(seq__13209__$1);
var G__13286 = c__5548__auto__;
var G__13287 = cljs.core.count(c__5548__auto__);
var G__13288 = (0);
seq__13209 = G__13285;
chunk__13210 = G__13286;
count__13211 = G__13287;
i__13212 = G__13288;
continue;
} else {
var vec__13222 = cljs.core.first(seq__13209__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13222,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13222,(1),null);
var temp__5821__auto___13289 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13289)){
var effect_fn_13290 = temp__5821__auto___13289;
(effect_fn_13290.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13290.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13290.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13291 = cljs.core.next(seq__13209__$1);
var G__13292 = null;
var G__13293 = (0);
var G__13294 = (0);
seq__13209 = G__13291;
chunk__13210 = G__13292;
count__13211 = G__13293;
i__13212 = G__13294;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13225){
var map__13226 = p__13225;
var map__13226__$1 = cljs.core.__destructure_map(map__13226);
var effect = map__13226__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13226__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13226__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__13227 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13228 = null;
var count__13229 = (0);
var i__13230 = (0);
while(true){
if((i__13230 < count__13229)){
var effect = chunk__13228.cljs$core$IIndexed$_nth$arity$2(null,i__13230);
re_frame.fx.dispatch_later(effect);


var G__13295 = seq__13227;
var G__13296 = chunk__13228;
var G__13297 = count__13229;
var G__13298 = (i__13230 + (1));
seq__13227 = G__13295;
chunk__13228 = G__13296;
count__13229 = G__13297;
i__13230 = G__13298;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13227);
if(temp__5823__auto__){
var seq__13227__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13227__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__13227__$1);
var G__13299 = cljs.core.chunk_rest(seq__13227__$1);
var G__13300 = c__5548__auto__;
var G__13301 = cljs.core.count(c__5548__auto__);
var G__13302 = (0);
seq__13227 = G__13299;
chunk__13228 = G__13300;
count__13229 = G__13301;
i__13230 = G__13302;
continue;
} else {
var effect = cljs.core.first(seq__13227__$1);
re_frame.fx.dispatch_later(effect);


var G__13303 = cljs.core.next(seq__13227__$1);
var G__13304 = null;
var G__13305 = (0);
var G__13306 = (0);
seq__13227 = G__13303;
chunk__13228 = G__13304;
count__13229 = G__13305;
i__13230 = G__13306;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__13231 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13232 = null;
var count__13233 = (0);
var i__13234 = (0);
while(true){
if((i__13234 < count__13233)){
var vec__13241 = chunk__13232.cljs$core$IIndexed$_nth$arity$2(null,i__13234);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13241,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13241,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___13307 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13307)){
var effect_fn_13308 = temp__5821__auto___13307;
(effect_fn_13308.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13308.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13308.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13309 = seq__13231;
var G__13310 = chunk__13232;
var G__13311 = count__13233;
var G__13312 = (i__13234 + (1));
seq__13231 = G__13309;
chunk__13232 = G__13310;
count__13233 = G__13311;
i__13234 = G__13312;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13231);
if(temp__5823__auto__){
var seq__13231__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13231__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__13231__$1);
var G__13313 = cljs.core.chunk_rest(seq__13231__$1);
var G__13314 = c__5548__auto__;
var G__13315 = cljs.core.count(c__5548__auto__);
var G__13316 = (0);
seq__13231 = G__13313;
chunk__13232 = G__13314;
count__13233 = G__13315;
i__13234 = G__13316;
continue;
} else {
var vec__13244 = cljs.core.first(seq__13231__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13244,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13244,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___13317 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13317)){
var effect_fn_13318 = temp__5821__auto___13317;
(effect_fn_13318.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13318.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13318.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13319 = cljs.core.next(seq__13231__$1);
var G__13320 = null;
var G__13321 = (0);
var G__13322 = (0);
seq__13231 = G__13319;
chunk__13232 = G__13320;
count__13233 = G__13321;
i__13234 = G__13322;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13247 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13248 = null;
var count__13249 = (0);
var i__13250 = (0);
while(true){
if((i__13250 < count__13249)){
var event = chunk__13248.cljs$core$IIndexed$_nth$arity$2(null,i__13250);
re_frame.router.dispatch(event);


var G__13323 = seq__13247;
var G__13324 = chunk__13248;
var G__13325 = count__13249;
var G__13326 = (i__13250 + (1));
seq__13247 = G__13323;
chunk__13248 = G__13324;
count__13249 = G__13325;
i__13250 = G__13326;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13247);
if(temp__5823__auto__){
var seq__13247__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13247__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__13247__$1);
var G__13327 = cljs.core.chunk_rest(seq__13247__$1);
var G__13328 = c__5548__auto__;
var G__13329 = cljs.core.count(c__5548__auto__);
var G__13330 = (0);
seq__13247 = G__13327;
chunk__13248 = G__13328;
count__13249 = G__13329;
i__13250 = G__13330;
continue;
} else {
var event = cljs.core.first(seq__13247__$1);
re_frame.router.dispatch(event);


var G__13331 = cljs.core.next(seq__13247__$1);
var G__13332 = null;
var G__13333 = (0);
var G__13334 = (0);
seq__13247 = G__13331;
chunk__13248 = G__13332;
count__13249 = G__13333;
i__13250 = G__13334;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13251 = cljs.core.seq(value);
var chunk__13252 = null;
var count__13253 = (0);
var i__13254 = (0);
while(true){
if((i__13254 < count__13253)){
var event = chunk__13252.cljs$core$IIndexed$_nth$arity$2(null,i__13254);
clear_event(event);


var G__13335 = seq__13251;
var G__13336 = chunk__13252;
var G__13337 = count__13253;
var G__13338 = (i__13254 + (1));
seq__13251 = G__13335;
chunk__13252 = G__13336;
count__13253 = G__13337;
i__13254 = G__13338;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13251);
if(temp__5823__auto__){
var seq__13251__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13251__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__13251__$1);
var G__13339 = cljs.core.chunk_rest(seq__13251__$1);
var G__13340 = c__5548__auto__;
var G__13341 = cljs.core.count(c__5548__auto__);
var G__13342 = (0);
seq__13251 = G__13339;
chunk__13252 = G__13340;
count__13253 = G__13341;
i__13254 = G__13342;
continue;
} else {
var event = cljs.core.first(seq__13251__$1);
clear_event(event);


var G__13343 = cljs.core.next(seq__13251__$1);
var G__13344 = null;
var G__13345 = (0);
var G__13346 = (0);
seq__13251 = G__13343;
chunk__13252 = G__13344;
count__13253 = G__13345;
i__13254 = G__13346;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
