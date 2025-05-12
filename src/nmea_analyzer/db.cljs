;; src/nmea_analyzer/db.cljs
(ns nmea-analyzer.db)

(def default-db
  {:nmea-frames []
   :connected? false
   :connection {:host "192.168.1.162"  ; Default NMEA device address
                :port 11123            ; Default NMEA device port
                :status nil
                :error nil}
   :statistics {:frame-count 0
                :last-update nil
                :error-count 0}})