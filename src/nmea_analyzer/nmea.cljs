;; src/nmea_analyzer/nmea.cljs
(ns nmea-analyzer.nmea
  (:require
   [re-frame.core :as rf]
   [clojure.string :as str]
   [nmea-analyzer.nmea-parser :as parser]))

(defn parse-nmea-frame [raw-data]
  ;; Implementation will depend on your NMEA device's data format
  (let [parsed (js->clj raw-data :keywordize-keys true)]
    {:pgn (:pgn parsed)
     :data (:data parsed)
     :timestamp (js/Date.now)}))

(defn setup-nmea-connection [url]
  (let [ws (new js/WebSocket url)]
    (set! (.-onopen ws)
          #(rf/dispatch [:connection-status-changed true]))

    (set! (.-onclose ws)
          #(rf/dispatch [:connection-status-changed false]))

    (set! (.-onmessage ws)
          #(rf/dispatch [:nmea-frame-received
                         (parse-nmea-frame (.-data %))]))))