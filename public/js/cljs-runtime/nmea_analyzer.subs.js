goog.provide('nmea_analyzer.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"connection","connection",-123599300),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"connection-field","connection-field",237319538),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300)], null),(function (connection,p__12738){
var vec__12739 = p__12738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(connection,field);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"connected?","connected?",-1197551387),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"connected?","connected?",-1197551387).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"connection-error","connection-error",-707388013),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300)], null),(function (connection){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(connection);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"nmea-frames","nmea-frames",-873906219),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"nmea-frames","nmea-frames",-873906219).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"nmea-data","nmea-data",-585464137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
console.log("DB state in nmea-data sub:",db);

return new cljs.core.Keyword(null,"nmea-data","nmea-data",-585464137).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"connection-status","connection-status",2011317083),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"connected?","connected?",-1197551387).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"latest-position","latest-position",1912659327),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nmea-data","nmea-data",-585464137)], null),(function (nmea_data){
return cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12742_SHARP_){
var G__12744 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__12742_SHARP_);
var fexpr__12743 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"GGA","GGA",-1817839225),null,new cljs.core.Keyword(null,"GLL","GLL",1716426606),null,new cljs.core.Keyword(null,"RMC","RMC",147399281),null], null), null);
return (fexpr__12743.cljs$core$IFn$_invoke$arity$1 ? fexpr__12743.cljs$core$IFn$_invoke$arity$1(G__12744) : fexpr__12743.call(null,G__12744));
}),nmea_data)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"latest-wind","latest-wind",-308791537),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nmea-data","nmea-data",-585464137)], null),(function (nmea_data){
return cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12745_SHARP_){
var G__12747 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__12745_SHARP_);
var fexpr__12746 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"VWR","VWR",-1358301408),null,new cljs.core.Keyword(null,"VWT","VWT",1461029826),null,new cljs.core.Keyword(null,"MWV","MWV",-893211216),null], null), null);
return (fexpr__12746.cljs$core$IFn$_invoke$arity$1 ? fexpr__12746.cljs$core$IFn$_invoke$arity$1(G__12747) : fexpr__12746.call(null,G__12747));
}),nmea_data)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"latest-depth","latest-depth",-570323983),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nmea-data","nmea-data",-585464137)], null),(function (nmea_data){
return cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12748_SHARP_){
var G__12750 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__12748_SHARP_);
var fexpr__12749 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"DBT","DBT",574499849),null,new cljs.core.Keyword(null,"DPT","DPT",1241584332),null], null), null);
return (fexpr__12749.cljs$core$IFn$_invoke$arity$1 ? fexpr__12749.cljs$core$IFn$_invoke$arity$1(G__12750) : fexpr__12749.call(null,G__12750));
}),nmea_data)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"statistics","statistics",-1140631984),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"statistics","statistics",-1140631984).cljs$core$IFn$_invoke$arity$1(db);
})], 0));

//# sourceMappingURL=nmea_analyzer.subs.js.map
