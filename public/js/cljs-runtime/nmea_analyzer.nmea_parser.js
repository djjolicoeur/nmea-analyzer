goog.provide('nmea_analyzer.nmea_parser');
nmea_analyzer.nmea_parser.nmea_sentence_types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"VWR","VWR",-1358301408),new cljs.core.Keyword(null,"XDR","XDR",-244667488),new cljs.core.Keyword(null,"XTE","XTE",781560482),new cljs.core.Keyword(null,"VWT","VWT",1461029826),new cljs.core.Keyword(null,"ROT","ROT",1361322179),new cljs.core.Keyword(null,"GGA","GGA",-1817839225),new cljs.core.Keyword(null,"VHW","VHW",870869479),new cljs.core.Keyword(null,"ZDA","ZDA",484964967),new cljs.core.Keyword(null,"DBT","DBT",574499849),new cljs.core.Keyword(null,"DPT","DPT",1241584332),new cljs.core.Keyword(null,"GLL","GLL",1716426606),new cljs.core.Keyword(null,"MWV","MWV",-893211216),new cljs.core.Keyword(null,"APB","APB",1264945648),new cljs.core.Keyword(null,"VTG","VTG",-1468214191),new cljs.core.Keyword(null,"MTW","MTW",774182161),new cljs.core.Keyword(null,"RMC","RMC",147399281),new cljs.core.Keyword(null,"HDM","HDM",1473438482),new cljs.core.Keyword(null,"RPM","RPM",833605109),new cljs.core.Keyword(null,"HDT","HDT",-1440828875),new cljs.core.Keyword(null,"PASHR","PASHR",-644903976),new cljs.core.Keyword(null,"RSA","RSA",-1452514279),new cljs.core.Keyword(null,"GSA","GSA",824412573),new cljs.core.Keyword(null,"GSV","GSV",338459357),new cljs.core.Keyword(null,"HDG","HDG",-778133281)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Relative Wind Speed and Angle",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wind-angle","wind-angle",-60565736),new cljs.core.Keyword(null,"left-right","left-right",-771929588),new cljs.core.Keyword(null,"wind-speed-knots","wind-speed-knots",1056225160),new cljs.core.Keyword(null,"knots-indicator","knots-indicator",1009431600),new cljs.core.Keyword(null,"wind-speed-ms","wind-speed-ms",-740554532),new cljs.core.Keyword(null,"ms-indicator","ms-indicator",1190966936),new cljs.core.Keyword(null,"wind-speed-kmh","wind-speed-kmh",47254924),new cljs.core.Keyword(null,"kmh-indicator","kmh-indicator",2113891903)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Transducer Measurements",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"name","name",1843675177)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Cross-Track Error",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status1","status1",37835275),new cljs.core.Keyword(null,"status2","status2",1397089035),new cljs.core.Keyword(null,"xte-magnitude","xte-magnitude",-1806617994),new cljs.core.Keyword(null,"dir-to-steer","dir-to-steer",428455841),new cljs.core.Keyword(null,"xte-units","xte-units",78687881)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"True Wind Speed and Angle",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wind-angle","wind-angle",-60565736),new cljs.core.Keyword(null,"left-right","left-right",-771929588),new cljs.core.Keyword(null,"wind-speed-knots","wind-speed-knots",1056225160),new cljs.core.Keyword(null,"knots-indicator","knots-indicator",1009431600),new cljs.core.Keyword(null,"wind-speed-ms","wind-speed-ms",-740554532),new cljs.core.Keyword(null,"ms-indicator","ms-indicator",1190966936),new cljs.core.Keyword(null,"wind-speed-kmh","wind-speed-kmh",47254924),new cljs.core.Keyword(null,"kmh-indicator","kmh-indicator",2113891903)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Rate Of Turn",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rate-of-turn","rate-of-turn",591674),new cljs.core.Keyword(null,"status","status",-1997798413)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Global Positioning System Fix Data",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"lat-dir","lat-dir",288985671),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"lon-dir","lon-dir",1269293970),new cljs.core.Keyword(null,"quality","quality",147850199),new cljs.core.Keyword(null,"satellites","satellites",644765266),new cljs.core.Keyword(null,"hdop","hdop",-939458903),new cljs.core.Keyword(null,"altitude","altitude",463588637),new cljs.core.Keyword(null,"altitude-units","altitude-units",1894914427),new cljs.core.Keyword(null,"geoid-separation","geoid-separation",127976012),new cljs.core.Keyword(null,"geoid-units","geoid-units",-929410516),new cljs.core.Keyword(null,"age-of-diff-data","age-of-diff-data",1733738520),new cljs.core.Keyword(null,"diff-ref-station","diff-ref-station",-906692926)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Water Speed and Heading",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heading-true","heading-true",-217249283),new cljs.core.Keyword(null,"true-indicator","true-indicator",-1512098249),new cljs.core.Keyword(null,"heading-magnetic","heading-magnetic",300991011),new cljs.core.Keyword(null,"magnetic-indicator","magnetic-indicator",2079058582),new cljs.core.Keyword(null,"speed-knots","speed-knots",1088546151),new cljs.core.Keyword(null,"knots-indicator","knots-indicator",1009431600),new cljs.core.Keyword(null,"speed-kmh","speed-kmh",-1477011203),new cljs.core.Keyword(null,"kmh-indicator","kmh-indicator",2113891903)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Time & Date",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"local-zone-hours","local-zone-hours",2131544655),new cljs.core.Keyword(null,"local-zone-minutes","local-zone-minutes",-93080304)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Depth Below Transducer",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth-feet","depth-feet",334408077),new cljs.core.Keyword(null,"feet","feet",-92616651),new cljs.core.Keyword(null,"depth-meters","depth-meters",-313191564),new cljs.core.Keyword(null,"meters","meters",-1644078545),new cljs.core.Keyword(null,"depth-fathoms","depth-fathoms",1098874880),new cljs.core.Keyword(null,"fathoms","fathoms",-1621001343)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Depth",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"maximum-range","maximum-range",-186896392)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Geographic Position - Latitude/Longitude",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"lat-dir","lat-dir",288985671),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"lon-dir","lon-dir",1269293970),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"mode","mode",654403691)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Wind Speed and Angle",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"reference","reference",-1711695023),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"speed-units","speed-units",1912275428),new cljs.core.Keyword(null,"status","status",-1997798413)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Autopilot Sentence B",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status1","status1",37835275),new cljs.core.Keyword(null,"status2","status2",1397089035),new cljs.core.Keyword(null,"xte-magnitude","xte-magnitude",-1806617994),new cljs.core.Keyword(null,"dir-to-steer","dir-to-steer",428455841),new cljs.core.Keyword(null,"xte-units","xte-units",78687881),new cljs.core.Keyword(null,"arrival-status","arrival-status",1492183741),new cljs.core.Keyword(null,"arrival-perpendicular","arrival-perpendicular",-1904520549),new cljs.core.Keyword(null,"bearing-origin-to-destination","bearing-origin-to-destination",1951772400),new cljs.core.Keyword(null,"bearing-type","bearing-type",387017997),new cljs.core.Keyword(null,"destination-waypoint-id","destination-waypoint-id",1294798028),new cljs.core.Keyword(null,"bearing-present-to-destination","bearing-present-to-destination",-1752079375),new cljs.core.Keyword(null,"bearing-type2","bearing-type2",1431450330),new cljs.core.Keyword(null,"heading-to-steer","heading-to-steer",112848335),new cljs.core.Keyword(null,"heading-type","heading-type",484491726)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Track Made Good and Ground Speed",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"track-true","track-true",1517004497),new cljs.core.Keyword(null,"true-indicator","true-indicator",-1512098249),new cljs.core.Keyword(null,"track-magnetic","track-magnetic",-1639779617),new cljs.core.Keyword(null,"magnetic-indicator","magnetic-indicator",2079058582),new cljs.core.Keyword(null,"speed-knots","speed-knots",1088546151),new cljs.core.Keyword(null,"knots-indicator","knots-indicator",1009431600),new cljs.core.Keyword(null,"speed-kmh","speed-kmh",-1477011203),new cljs.core.Keyword(null,"kmh-indicator","kmh-indicator",2113891903),new cljs.core.Keyword(null,"mode","mode",654403691)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Water Temperature",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Recommended Minimum Navigation Info",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"lat-dir","lat-dir",288985671),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"lon-dir","lon-dir",1269293970),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"magnetic-variation","magnetic-variation",-1559398875),new cljs.core.Keyword(null,"mag-var-dir","mag-var-dir",-1436201987)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Heading - Magnetic",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"magnetic-indicator","magnetic-indicator",2079058582)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Revolutions",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"engine-number","engine-number",884093675),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"pitch","pitch",1495126700),new cljs.core.Keyword(null,"status","status",-1997798413)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Heading - True",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"true-indicator","true-indicator",-1512098249)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Attitude Data",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"heading-type","heading-type",484491726),new cljs.core.Keyword(null,"roll","roll",11266999),new cljs.core.Keyword(null,"pitch","pitch",1495126700),new cljs.core.Keyword(null,"heave","heave",611105532),new cljs.core.Keyword(null,"roll-accuracy","roll-accuracy",-913972182),new cljs.core.Keyword(null,"pitch-accuracy","pitch-accuracy",292158565),new cljs.core.Keyword(null,"heading-accuracy","heading-accuracy",-819581755),new cljs.core.Keyword(null,"quality","quality",147850199),new cljs.core.Keyword(null,"status","status",-1997798413)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Rudder Sensor Angle",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starboard-angle","starboard-angle",-1534058803),new cljs.core.Keyword(null,"starboard-status","starboard-status",-71316934),new cljs.core.Keyword(null,"port-angle","port-angle",1220763824),new cljs.core.Keyword(null,"port-status","port-status",-1515401977)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"GPS DOP and Active Satellites",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode1","mode1",31226832),new cljs.core.Keyword(null,"mode2","mode2",-338188104),new cljs.core.Keyword(null,"satellite1","satellite1",1602315420),new cljs.core.Keyword(null,"satellite2","satellite2",1121390199),new cljs.core.Keyword(null,"satellite3","satellite3",93649931),new cljs.core.Keyword(null,"satellite4","satellite4",1082409113),new cljs.core.Keyword(null,"satellite5","satellite5",-124034817),new cljs.core.Keyword(null,"satellite6","satellite6",1515032069),new cljs.core.Keyword(null,"satellite7","satellite7",860736758),new cljs.core.Keyword(null,"satellite8","satellite8",-997201194),new cljs.core.Keyword(null,"satellite9","satellite9",-1770828649),new cljs.core.Keyword(null,"satellite10","satellite10",-1386438800),new cljs.core.Keyword(null,"satellite11","satellite11",-1894541255),new cljs.core.Keyword(null,"satellite12","satellite12",741517046),new cljs.core.Keyword(null,"pdop","pdop",-888174320),new cljs.core.Keyword(null,"hdop","hdop",-939458903),new cljs.core.Keyword(null,"vdop","vdop",539778187)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"GPS Satellites in View",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-messages","total-messages",843672214),new cljs.core.Keyword(null,"message-number","message-number",-1133140185),new cljs.core.Keyword(null,"satellites-in-view","satellites-in-view",1872376505),new cljs.core.Keyword(null,"prn1","prn1",54893000),new cljs.core.Keyword(null,"elevation1","elevation1",-966376134),new cljs.core.Keyword(null,"azimuth1","azimuth1",-1667047237),new cljs.core.Keyword(null,"snr1","snr1",-2116309738),new cljs.core.Keyword(null,"prn2","prn2",970914771),new cljs.core.Keyword(null,"elevation2","elevation2",-709007336),new cljs.core.Keyword(null,"azimuth2","azimuth2",1080729398),new cljs.core.Keyword(null,"snr2","snr2",532655108),new cljs.core.Keyword(null,"prn3","prn3",1130679761),new cljs.core.Keyword(null,"elevation3","elevation3",-1696582129),new cljs.core.Keyword(null,"azimuth3","azimuth3",-283667226),new cljs.core.Keyword(null,"snr3","snr3",1668713648),new cljs.core.Keyword(null,"prn4","prn4",727414561),new cljs.core.Keyword(null,"elevation4","elevation4",-776415357),new cljs.core.Keyword(null,"azimuth4","azimuth4",-560504210),new cljs.core.Keyword(null,"snr4","snr4",-1499194386)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Heading - Deviation & Variation",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"deviation","deviation",-2077551870),new cljs.core.Keyword(null,"dev-dir","dev-dir",2116346165),new cljs.core.Keyword(null,"variation","variation",-450640146),new cljs.core.Keyword(null,"var-dir","var-dir",1197403806)], null)], null)]);
/**
 * Convert NMEA coordinate format to decimal degrees
 */
nmea_analyzer.nmea_parser.nmea_coord__GT_decimal = (function nmea_analyzer$nmea_parser$nmea_coord__GT_decimal(coord,dir){
if(cljs.core.truth_((function (){var and__5023__auto__ = coord;
if(cljs.core.truth_(and__5023__auto__)){
return dir;
} else {
return and__5023__auto__;
}
})())){
var degrees = parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(coord,(0),(2)));
var minutes = parseFloat(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(coord,(2)));
var decimal = (degrees + (minutes / (60)));
var multiplier = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,"N")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,"E"))))?(1):(-1));
return (decimal * multiplier);
} else {
return null;
}
});
/**
 * Safely parse numeric values
 */
nmea_analyzer.nmea_parser.parse_numeric = (function nmea_analyzer$nmea_parser$parse_numeric(value){
if(cljs.core.truth_((function (){var and__5023__auto__ = value;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,"");
} else {
return and__5023__auto__;
}
})())){
return parseFloat(value);
} else {
return null;
}
});
/**
 * Process specific fields based on sentence type
 */
nmea_analyzer.nmea_parser.process_fields = (function nmea_analyzer$nmea_parser$process_fields(sentence_type,data){
var G__12753 = sentence_type;
var G__12753__$1 = (((G__12753 instanceof cljs.core.Keyword))?G__12753.fqn:null);
switch (G__12753__$1) {
case "GGA":
case "RMC":
case "GLL":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"latitude","latitude",394867543),(function (p1__12751_SHARP_){
return nmea_analyzer.nmea_parser.nmea_coord__GT_decimal(p1__12751_SHARP_,new cljs.core.Keyword(null,"lat-dir","lat-dir",288985671).cljs$core$IFn$_invoke$arity$1(data));
})),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),(function (p1__12752_SHARP_){
return nmea_analyzer.nmea_parser.nmea_coord__GT_decimal(p1__12752_SHARP_,new cljs.core.Keyword(null,"lon-dir","lon-dir",1269293970).cljs$core$IFn$_invoke$arity$1(data));
})),new cljs.core.Keyword(null,"lat-dir","lat-dir",288985671),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lon-dir","lon-dir",1269293970)], 0));

break;
case "DBT":
case "DPT":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"depth-meters","depth-meters",-313191564),nmea_analyzer.nmea_parser.parse_numeric),new cljs.core.Keyword(null,"depth-feet","depth-feet",334408077),nmea_analyzer.nmea_parser.parse_numeric),new cljs.core.Keyword(null,"depth-fathoms","depth-fathoms",1098874880),nmea_analyzer.nmea_parser.parse_numeric);

break;
case "MWV":
case "VWR":
case "VWT":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"speed","speed",1257663751),nmea_analyzer.nmea_parser.parse_numeric),new cljs.core.Keyword(null,"angle","angle",1622094254),nmea_analyzer.nmea_parser.parse_numeric);

break;
case "HDT":
case "HDM":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"heading","heading",-1312171873),nmea_analyzer.nmea_parser.parse_numeric);

break;
case "ROT":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"rate-of-turn","rate-of-turn",591674),nmea_analyzer.nmea_parser.parse_numeric);

break;
default:
return data;

}
});
/**
 * Validate NMEA sentence checksum
 */
nmea_analyzer.nmea_parser.checksum_valid_QMARK_ = (function nmea_analyzer$nmea_parser$checksum_valid_QMARK_(sentence){
try{var temp__5823__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(sentence),/\*/);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__12758 = temp__5823__auto__;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12758,(0),null);
var checksum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12758,(1),null);
var calculated = (function (p1__12756_SHARP_){
return goog.string.format("%02X",p1__12756_SHARP_);
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12754_SHARP_,p2__12755_SHARP_){
return (p1__12754_SHARP_ ^ (p2__12755_SHARP_ | (0)));
}),(0),cljs.core.rest(data)));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(calculated,clojure.string.upper_case(checksum));
} else {
return null;
}
}catch (e12757){var e = e12757;
console.log("Checksum validation error:",e);

return false;
}});
/**
 * Parse NMEA sentence into structured data
 */
nmea_analyzer.nmea_parser.parse_sentence = (function nmea_analyzer$nmea_parser$parse_sentence(nmea_string){
console.log("Attempting to parse:",nmea_string);

if(((typeof nmea_string === 'string') && (clojure.string.starts_with_QMARK_(nmea_string,"$")))){
var cleaned_string = clojure.string.trim(nmea_string);
var vec__12761 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cleaned_string,/\*/);
var sentence = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(0),null);
var checksum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(1),null);
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(sentence,/,/);
var talker_id = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.first(parts),(1),(3));
var sentence_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parts),(3)));
var data = cljs.core.rest(parts);
var sentence_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nmea_analyzer.nmea_parser.nmea_sentence_types,sentence_type);
console.log("Sentence type:",sentence_type);

console.log("Sentence def:",sentence_def);

if(cljs.core.truth_(sentence_def)){
var raw_data = cljs.core.zipmap(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(sentence_def),data);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),sentence_type,new cljs.core.Keyword(null,"talker-id","talker-id",2106974805),talker_id,new cljs.core.Keyword(null,"raw","raw",1604651272),cleaned_string], null),nmea_analyzer.nmea_parser.process_fields(sentence_type,raw_data)], 0));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=nmea_analyzer.nmea_parser.js.map
