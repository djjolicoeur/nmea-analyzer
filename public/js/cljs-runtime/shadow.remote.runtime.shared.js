goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14241){
var map__14242 = p__14241;
var map__14242__$1 = cljs.core.__destructure_map(map__14242);
var runtime = map__14242__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14242__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14446 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14446)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14260 = runtime;
var G__14261 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14446);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14260,G__14261) : shadow.remote.runtime.shared.process.call(null,G__14260,G__14261));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14268,res){
var map__14269 = p__14268;
var map__14269__$1 = cljs.core.__destructure_map(map__14269);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14269__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14269__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14270 = res;
var G__14270__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14270,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14270);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14270__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14270__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14274 = arguments.length;
switch (G__14274) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14277,msg,handlers,timeout_after_ms){
var map__14278 = p__14277;
var map__14278__$1 = cljs.core.__destructure_map(map__14278);
var runtime = map__14278__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14278__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14465 = arguments.length;
var i__5750__auto___14466 = (0);
while(true){
if((i__5750__auto___14466 < len__5749__auto___14465)){
args__5755__auto__.push((arguments[i__5750__auto___14466]));

var G__14467 = (i__5750__auto___14466 + (1));
i__5750__auto___14466 = G__14467;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14296,ev,args){
var map__14297 = p__14296;
var map__14297__$1 = cljs.core.__destructure_map(map__14297);
var runtime = map__14297__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14297__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14302 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14305 = null;
var count__14306 = (0);
var i__14307 = (0);
while(true){
if((i__14307 < count__14306)){
var ext = chunk__14305.cljs$core$IIndexed$_nth$arity$2(null,i__14307);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14476 = seq__14302;
var G__14477 = chunk__14305;
var G__14478 = count__14306;
var G__14479 = (i__14307 + (1));
seq__14302 = G__14476;
chunk__14305 = G__14477;
count__14306 = G__14478;
i__14307 = G__14479;
continue;
} else {
var G__14480 = seq__14302;
var G__14481 = chunk__14305;
var G__14482 = count__14306;
var G__14483 = (i__14307 + (1));
seq__14302 = G__14480;
chunk__14305 = G__14481;
count__14306 = G__14482;
i__14307 = G__14483;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14302);
if(temp__5823__auto__){
var seq__14302__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14302__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__14302__$1);
var G__14485 = cljs.core.chunk_rest(seq__14302__$1);
var G__14486 = c__5548__auto__;
var G__14487 = cljs.core.count(c__5548__auto__);
var G__14488 = (0);
seq__14302 = G__14485;
chunk__14305 = G__14486;
count__14306 = G__14487;
i__14307 = G__14488;
continue;
} else {
var ext = cljs.core.first(seq__14302__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14492 = cljs.core.next(seq__14302__$1);
var G__14493 = null;
var G__14494 = (0);
var G__14495 = (0);
seq__14302 = G__14492;
chunk__14305 = G__14493;
count__14306 = G__14494;
i__14307 = G__14495;
continue;
} else {
var G__14496 = cljs.core.next(seq__14302__$1);
var G__14497 = null;
var G__14498 = (0);
var G__14499 = (0);
seq__14302 = G__14496;
chunk__14305 = G__14497;
count__14306 = G__14498;
i__14307 = G__14499;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14287){
var G__14288 = cljs.core.first(seq14287);
var seq14287__$1 = cljs.core.next(seq14287);
var G__14289 = cljs.core.first(seq14287__$1);
var seq14287__$2 = cljs.core.next(seq14287__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14288,G__14289,seq14287__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14339,p__14340){
var map__14341 = p__14339;
var map__14341__$1 = cljs.core.__destructure_map(map__14341);
var runtime = map__14341__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14341__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14342 = p__14340;
var map__14342__$1 = cljs.core.__destructure_map(map__14342);
var msg = map__14342__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14342__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14343 = cljs.core.deref(state_ref);
var map__14343__$1 = cljs.core.__destructure_map(map__14343);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14343__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14343__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14354,msg){
var map__14356 = p__14354;
var map__14356__$1 = cljs.core.__destructure_map(map__14356);
var runtime = map__14356__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14356__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14373,key,p__14374){
var map__14376 = p__14373;
var map__14376__$1 = cljs.core.__destructure_map(map__14376);
var state = map__14376__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14376__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14377 = p__14374;
var map__14377__$1 = cljs.core.__destructure_map(map__14377);
var spec = map__14377__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14377__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14377__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14394,key,spec){
var map__14395 = p__14394;
var map__14395__$1 = cljs.core.__destructure_map(map__14395);
var runtime = map__14395__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14395__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14542 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14542 == null)){
} else {
var on_welcome_14544 = temp__5827__auto___14542;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14544.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14544.cljs$core$IFn$_invoke$arity$0() : on_welcome_14544.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14396_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14396_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14397_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14397_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14398_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14398_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14399_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14399_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14400_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14400_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14401,key){
var map__14402 = p__14401;
var map__14402__$1 = cljs.core.__destructure_map(map__14402);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14402__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14404,msg){
var map__14405 = p__14404;
var map__14405__$1 = cljs.core.__destructure_map(map__14405);
var runtime = map__14405__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14405__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14407,p__14408){
var map__14409 = p__14407;
var map__14409__$1 = cljs.core.__destructure_map(map__14409);
var runtime = map__14409__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14409__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14410 = p__14408;
var map__14410__$1 = cljs.core.__destructure_map(map__14410);
var msg = map__14410__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14410__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14410__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14412 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14414 = null;
var count__14415 = (0);
var i__14416 = (0);
while(true){
if((i__14416 < count__14415)){
var map__14431 = chunk__14414.cljs$core$IIndexed$_nth$arity$2(null,i__14416);
var map__14431__$1 = cljs.core.__destructure_map(map__14431);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14431__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14565 = seq__14412;
var G__14566 = chunk__14414;
var G__14567 = count__14415;
var G__14568 = (i__14416 + (1));
seq__14412 = G__14565;
chunk__14414 = G__14566;
count__14415 = G__14567;
i__14416 = G__14568;
continue;
} else {
var G__14569 = seq__14412;
var G__14570 = chunk__14414;
var G__14571 = count__14415;
var G__14572 = (i__14416 + (1));
seq__14412 = G__14569;
chunk__14414 = G__14570;
count__14415 = G__14571;
i__14416 = G__14572;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14412);
if(temp__5823__auto__){
var seq__14412__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14412__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__14412__$1);
var G__14577 = cljs.core.chunk_rest(seq__14412__$1);
var G__14578 = c__5548__auto__;
var G__14579 = cljs.core.count(c__5548__auto__);
var G__14580 = (0);
seq__14412 = G__14577;
chunk__14414 = G__14578;
count__14415 = G__14579;
i__14416 = G__14580;
continue;
} else {
var map__14437 = cljs.core.first(seq__14412__$1);
var map__14437__$1 = cljs.core.__destructure_map(map__14437);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14437__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14584 = cljs.core.next(seq__14412__$1);
var G__14585 = null;
var G__14586 = (0);
var G__14587 = (0);
seq__14412 = G__14584;
chunk__14414 = G__14585;
count__14415 = G__14586;
i__14416 = G__14587;
continue;
} else {
var G__14588 = cljs.core.next(seq__14412__$1);
var G__14589 = null;
var G__14590 = (0);
var G__14591 = (0);
seq__14412 = G__14588;
chunk__14414 = G__14589;
count__14415 = G__14590;
i__14416 = G__14591;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
