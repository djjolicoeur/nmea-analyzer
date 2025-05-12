goog.provide('nmea_analyzer.websocket');
if((typeof nmea_analyzer !== 'undefined') && (typeof nmea_analyzer.websocket !== 'undefined') && (typeof nmea_analyzer.websocket.websocket_connection !== 'undefined')){
} else {
nmea_analyzer.websocket.websocket_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
nmea_analyzer.websocket.bridge_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),(3000)], null);
nmea_analyzer.websocket.parse_message = (function nmea_analyzer$websocket$parse_message(msg){
try{var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(msg),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
console.log("Received message:",cljs.core.clj__GT_js(data));

var G__12400 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data);
switch (G__12400) {
case "nmea":
var nmea_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(cljs.core.not_empty(nmea_data))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nmea-frame-received","nmea-frame-received",362380129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now(),new cljs.core.Keyword(null,"data","data",-232669377),nmea_data], null)], null));
} else {
return null;
}

break;
case "status":
var G__12401 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data);
switch (G__12401) {
case "connected":
console.log("Successfully connected to NMEA device");

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-success","connection-success",2071694436)], null));

break;
case "disconnected":
console.log("Disconnected from NMEA device");

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-error","connection-error",-707388013),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data)], null));

break;
case "error":
console.error("NMEA connection error:",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-error","connection-error",-707388013),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data)], null));

break;
default:
return console.log("Unknown status:",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data));

}

break;
default:
return console.log("Unknown message type:",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data));

}
}catch (e12399){if((e12399 instanceof Error)){
var e = e12399;
console.error("Error parsing message:",e);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-error","connection-error",-707388013),["Failed to parse message: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null));

return null;
} else {
throw e12399;

}
}});
nmea_analyzer.websocket.handle_message = (function nmea_analyzer$websocket$handle_message(msg){
return nmea_analyzer.websocket.parse_message(msg.data);
});
nmea_analyzer.websocket.create_websocket = (function nmea_analyzer$websocket$create_websocket(){
var ws_url = ["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(nmea_analyzer.websocket.bridge_config)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(nmea_analyzer.websocket.bridge_config))].join('');
var _ = console.log("Connecting to bridge at:",ws_url);
var ws = (new WebSocket(ws_url));
(ws.onopen = (function (___$1){
return console.log("Connected to bridge server");
}));

(ws.onclose = (function (event){
console.log("Bridge connection closed:",event.reason);

cljs.core.reset_BANG_(nmea_analyzer.websocket.websocket_connection,null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-error","connection-error",-707388013),["Bridge connection closed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.reason)].join('')], null));
}));

(ws.onerror = (function (error){
console.log("Bridge connection error:",error);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-error","connection-error",-707388013),"Failed to connect to bridge server"], null));
}));

(ws.onmessage = nmea_analyzer.websocket.handle_message);

return ws;
});
nmea_analyzer.websocket.connect_BANG_ = (function nmea_analyzer$websocket$connect_BANG_(nmea_host,nmea_port){
console.log("Attempting to connect to NMEA device at:",nmea_host,":",nmea_port);

if(cljs.core.not(cljs.core.deref(nmea_analyzer.websocket.websocket_connection))){
try{var ws = nmea_analyzer.websocket.create_websocket();
cljs.core.reset_BANG_(nmea_analyzer.websocket.websocket_connection,ws);

(ws.onopen = (function (_){
console.log("Sending connect request to bridge");

return ws.send(JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"connect",new cljs.core.Keyword(null,"host","host",-1558485167),nmea_host,new cljs.core.Keyword(null,"port","port",1534937262),nmea_port], null))));
}));

return ws;
}catch (e12402){if((e12402 instanceof Error)){
var e = e12402;
console.error("Error creating WebSocket:",e);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-error","connection-error",-707388013),e.message], null));
} else {
throw e12402;

}
}} else {
console.log("Using existing bridge connection");

return cljs.core.deref(nmea_analyzer.websocket.websocket_connection).send(JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"connect",new cljs.core.Keyword(null,"host","host",-1558485167),nmea_host,new cljs.core.Keyword(null,"port","port",1534937262),nmea_port], null))));
}
});
nmea_analyzer.websocket.disconnect_BANG_ = (function nmea_analyzer$websocket$disconnect_BANG_(){
if(cljs.core.truth_(cljs.core.deref(nmea_analyzer.websocket.websocket_connection))){
console.log("Disconnecting from NMEA device");

cljs.core.deref(nmea_analyzer.websocket.websocket_connection).send(JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"disconnect"], null))));

cljs.core.deref(nmea_analyzer.websocket.websocket_connection).close();

return cljs.core.reset_BANG_(nmea_analyzer.websocket.websocket_connection,null);
} else {
return null;
}
});

//# sourceMappingURL=nmea_analyzer.websocket.js.map
