goog.provide('nmea_analyzer.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return nmea_analyzer.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-connection-field","update-connection-field",-37012574),(function (db,p__12804){
var vec__12805 = p__12804;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12805,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12805,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12805,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),field], null),value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connect-nmea","connect-nmea",1691379970),(function (p__12808,_){
var map__12809 = p__12808;
var map__12809__$1 = cljs.core.__destructure_map(map__12809);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12809__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__12810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"connection","connection",-123599300));
var map__12810__$1 = cljs.core.__destructure_map(map__12810);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12810__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12810__$1,new cljs.core.Keyword(null,"port","port",1534937262));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"connecting","connecting",-1347943866)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"error","error",-978969032)], null),null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attempt-connection","attempt-connection",-1620453750),host,port], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attempt-connection","attempt-connection",-1620453750),(function (_,p__12811){
var vec__12812 = p__12811;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12812,(0),null);
var host = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12812,(1),null);
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12812,(2),null);
nmea_analyzer.websocket.connect_BANG_(host,port);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"disconnect-nmea","disconnect-nmea",-779802837),(function (p__12815,_){
var map__12816 = p__12815;
var map__12816__$1 = cljs.core.__destructure_map(map__12816);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,new cljs.core.Keyword(null,"db","db",993250759));
nmea_analyzer.websocket.disconnect_BANG_();

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"connected?","connected?",-1197551387),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"status","status",-1997798413)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"error","error",-978969032)], null),null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connection-success","connection-success",2071694436),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"connected?","connected?",-1197551387),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"connected","connected",-169833045)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"error","error",-978969032)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connection-error","connection-error",-707388013),(function (db,p__12817){
var vec__12818 = p__12817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12818,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12818,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"connected?","connected?",-1197551387),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"error","error",-978969032)], null),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nmea-frame-received","nmea-frame-received",362380129),(function (db,p__12821){
var vec__12822 = p__12821;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12822,(0),null);
var frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12822,(1),null);
console.log("Frame received:",frame);

var sentence = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(frame);
var parsed = nmea_analyzer.nmea_parser.parse_sentence(sentence);
if(cljs.core.truth_(parsed)){
console.log("Successfully parsed NMEA sentence:",parsed);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"nmea-data","nmea-data",-585464137),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parsed,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(frame),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(frame)], 0)));
} else {
console.log("Failed to parse NMEA sentence:",sentence);

return db;
}
}));

//# sourceMappingURL=nmea_analyzer.events.js.map
