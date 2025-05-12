goog.provide('nmea_analyzer.views');
nmea_analyzer.views.connection_status = (function nmea_analyzer$views$connection_status(){
var status = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-field","connection-field",237319538),new cljs.core.Keyword(null,"status","status",-1997798413)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-error","connection-error",-707388013)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.connection-status","div.connection-status",-2125960515),(function (){var G__12843 = status;
var G__12843__$1 = (((G__12843 instanceof cljs.core.Keyword))?G__12843.fqn:null);
switch (G__12843__$1) {
case "connecting":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status.connecting","div.status.connecting",-1540286696),"Connecting..."], null);

break;
case "connected":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status.connected","div.status.connected",1591307550),"Connected"], null);

break;
case "error":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status.error","div.status.error",-2115826866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Connection Error: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.error-message","span.error-message",-1259714387),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status.disconnected","div.status.disconnected",570632864),"Disconnected"], null);

}
})()], null);
});
nmea_analyzer.views.connection_form = (function nmea_analyzer$views$connection_form(){
var host = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-field","connection-field",237319538),new cljs.core.Keyword(null,"host","host",-1558485167)], null)));
var port = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection-field","connection-field",237319538),new cljs.core.Keyword(null,"port","port",1534937262)], null)));
var connected_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.connection-form","div.connection-form",-529475574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"NMEA Connection"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Host:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),host,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),connected_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12844_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-connection-field","update-connection-field",-37012574),new cljs.core.Keyword(null,"host","host",-1558485167),p1__12844_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Port:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),port,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),connected_QMARK_,new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(65535),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12845_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-connection-field","update-connection-field",-37012574),new cljs.core.Keyword(null,"port","port",1534937262),parseInt(p1__12845_SHARP_.target.value)], null));
})], null)], null)], null),(cljs.core.truth_(connected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.disconnect","button.disconnect",927785992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disconnect-nmea","disconnect-nmea",-779802837)], null));
})], null),"Disconnect"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.connect","button.connect",1781768371),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connect-nmea","connect-nmea",1691379970)], null));
})], null),"Connect"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nmea_analyzer.views.connection_status], null)], null);
});
nmea_analyzer.views.nmea_frame = (function nmea_analyzer$views$nmea_frame(p__12846){
var map__12847 = p__12846;
var map__12847__$1 = cljs.core.__destructure_map(map__12847);
var frame = map__12847__$1;
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12847__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var pgn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12847__$1,new cljs.core.Keyword(null,"pgn","pgn",741144188));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12847__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nmea-frame","div.nmea-frame",-1222896092),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.frame-header","div.frame-header",-992941373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.timestamp","span.timestamp",1207246744),(new Date(timestamp)).toISOString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pgn","span.pgn",353339251),["PGN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pgn)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.frame-data","div.frame-data",1230108678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null)], null)], null);
});
nmea_analyzer.views.frames_display = (function nmea_analyzer$views$frames_display(){
var frames = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nmea-frames","nmea-frames",-873906219)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.frames-container","div.frames-container",-534534359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"NMEA Frames"], null),(((((frames == null)) || (cljs.core.empty_QMARK_(frames))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.no-frames","div.no-frames",570708640),"No frames received"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.frames-list","div.frames-list",-236368148),(function (){var iter__5503__auto__ = (function nmea_analyzer$views$frames_display_$_iter__12848(s__12849){
return (new cljs.core.LazySeq(null,(function (){
var s__12849__$1 = s__12849;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__12849__$1);
if(temp__5823__auto__){
var s__12849__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12849__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__12849__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__12851 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__12850 = (0);
while(true){
if((i__12850 < size__5502__auto__)){
var frame = cljs.core._nth(c__5501__auto__,i__12850);
cljs.core.chunk_append(b__12851,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nmea_analyzer.views.nmea_frame,frame], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(frame)], null)));

var G__12859 = (i__12850 + (1));
i__12850 = G__12859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12851),nmea_analyzer$views$frames_display_$_iter__12848(cljs.core.chunk_rest(s__12849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12851),null);
}
} else {
var frame = cljs.core.first(s__12849__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nmea_analyzer.views.nmea_frame,frame], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(frame)], null)),nmea_analyzer$views$frames_display_$_iter__12848(cljs.core.rest(s__12849__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((100),cljs.core.reverse(frames)));
})()], null))], null);
});
nmea_analyzer.views.position_display = (function nmea_analyzer$views$position_display(){
var temp__5823__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latest-position","latest-position",1912659327)], null)));
if(cljs.core.truth_(temp__5823__auto__)){
var position = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.position","div.position",2000554708),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Position"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Lat: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(position)),"\u00B0"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Lon: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(position)),"\u00B0"].join('')], null)], null)], null);
} else {
return null;
}
});
nmea_analyzer.views.wind_display = (function nmea_analyzer$views$wind_display(){
var temp__5823__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latest-wind","latest-wind",-308791537)], null)));
if(cljs.core.truth_(temp__5823__auto__)){
var wind = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wind","div.wind",-231441332),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Wind"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Angle: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(wind)),"\u00B0"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Speed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(wind))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"speed-units","speed-units",1912275428).cljs$core$IFn$_invoke$arity$1(wind))].join('')], null)], null)], null);
} else {
return null;
}
});
nmea_analyzer.views.depth_display = (function nmea_analyzer$views$depth_display(){
var temp__5823__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latest-depth","latest-depth",-570323983)], null)));
if(cljs.core.truth_(temp__5823__auto__)){
var depth = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.depth","div.depth",1166149812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Depth"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Depth: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"depth-meters","depth-meters",-313191564).cljs$core$IFn$_invoke$arity$1(depth)),"m"].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"depth-feet","depth-feet",334408077).cljs$core$IFn$_invoke$arity$1(depth))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"depth-feet","depth-feet",334408077).cljs$core$IFn$_invoke$arity$1(depth)),"ft)"].join('')], null):null)], null)], null);
} else {
return null;
}
});
nmea_analyzer.views.nmea_data_display = (function nmea_analyzer$views$nmea_data_display(){
var nmea_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nmea-data","nmea-data",-585464137)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nmea-data","div.nmea-data",-214280117),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f9f9f9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 15px 0",new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid #007bff",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"8px"], null)], null),"NMEA Data"], null),((cljs.core.empty_QMARK_(nmea_data))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),"No NMEA data received yet"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.frames-list","div.frames-list",-236368148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], null),(function (){var iter__5503__auto__ = (function nmea_analyzer$views$nmea_data_display_$_iter__12852(s__12853){
return (new cljs.core.LazySeq(null,(function (){
var s__12853__$1 = s__12853;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__12853__$1);
if(temp__5823__auto__){
var s__12853__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12853__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__12853__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__12855 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__12854 = (0);
while(true){
if((i__12854 < size__5502__auto__)){
var map__12856 = cljs.core._nth(c__5501__auto__,i__12854);
var map__12856__$1 = cljs.core.__destructure_map(map__12856);
var sentence = map__12856__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12856__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12856__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12856__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var talker_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12856__$1,new cljs.core.Keyword(null,"talker-id","talker-id",2106974805));
cljs.core.chunk_append(b__12855,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nmea-sentence","div.nmea-sentence",-452977474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px rgba(0,0,0,0.1)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sentence-type","div.sentence-type",1654677427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"color","color",1011675173),"#007bff",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(nmea_analyzer.nmea_parser.nmea_sentence_types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"name","name",1843675177)], null),"Unknown")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.talker-id","span.talker-id",-666348371),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em"], null)], null),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(talker_id),")"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.raw-data","div.raw-data",1058463295),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f5f5f5",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-all"], null)], null),raw], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.parsed-data","pre.parsed-data",418429648),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"margin","margin",-995903681)],["#333","pre-wrap","0.9em","#f8f9fa","8px","auto","3px","monospace","5px 0"])], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sentence,new cljs.core.Keyword(null,"raw","raw",1604651272)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),timestamp], null)));

var G__12860 = (i__12854 + (1));
i__12854 = G__12860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12855),nmea_analyzer$views$nmea_data_display_$_iter__12852(cljs.core.chunk_rest(s__12853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12855),null);
}
} else {
var map__12857 = cljs.core.first(s__12853__$2);
var map__12857__$1 = cljs.core.__destructure_map(map__12857);
var sentence = map__12857__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12857__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12857__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12857__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var talker_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12857__$1,new cljs.core.Keyword(null,"talker-id","talker-id",2106974805));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nmea-sentence","div.nmea-sentence",-452977474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px rgba(0,0,0,0.1)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sentence-type","div.sentence-type",1654677427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"color","color",1011675173),"#007bff",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(nmea_analyzer.nmea_parser.nmea_sentence_types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"name","name",1843675177)], null),"Unknown")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.talker-id","span.talker-id",-666348371),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em"], null)], null),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(talker_id),")"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.raw-data","div.raw-data",1058463295),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f5f5f5",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-all"], null)], null),raw], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.parsed-data","pre.parsed-data",418429648),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"margin","margin",-995903681)],["#333","pre-wrap","0.9em","#f8f9fa","8px","auto","3px","monospace","5px 0"])], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sentence,new cljs.core.Keyword(null,"raw","raw",1604651272)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),timestamp], null)),nmea_analyzer$views$nmea_data_display_$_iter__12852(cljs.core.rest(s__12853__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.take_last((10),nmea_data));
})()], null))], null);
});
nmea_analyzer.views.main_panel = (function nmea_analyzer$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"NMEA Analyzer"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nmea_analyzer.views.connection_form], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.data-displays","div.data-displays",196028162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nmea_analyzer.views.position_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nmea_analyzer.views.wind_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nmea_analyzer.views.depth_display], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nmea_analyzer.views.nmea_data_display], null)], null);
});

//# sourceMappingURL=nmea_analyzer.views.js.map
