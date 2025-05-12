
shadow.cljs.devtools.client.env.module_loaded('app');

try { nmea_analyzer.core.init(); } catch (e) { console.error("An error occurred when calling (nmea-analyzer.core/init)"); console.error(e); }