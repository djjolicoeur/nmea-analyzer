goog.provide('nmea_analyzer.core');
if((typeof nmea_analyzer !== 'undefined') && (typeof nmea_analyzer.core !== 'undefined') && (typeof nmea_analyzer.core.root !== 'undefined')){
} else {
nmea_analyzer.core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
nmea_analyzer.core.mount_root = (function nmea_analyzer$core$mount_root(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(nmea_analyzer.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nmea_analyzer.views.main_panel], null));
});
nmea_analyzer.core.init = (function nmea_analyzer$core$init(){
return nmea_analyzer.core.mount_root();
});

//# sourceMappingURL=nmea_analyzer.core.js.map
