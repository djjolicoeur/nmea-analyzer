;; src/nmea_analyzer/subs.cljs
(ns nmea-analyzer.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :connection
 (fn [db]
   (:connection db)))

(rf/reg-sub
 :connection-field
 :<- [:connection]
 (fn [connection [_ field]]
   (get connection field)))

(rf/reg-sub
 :connected?
 (fn [db]
   (:connected? db)))

(rf/reg-sub
 :connection-error
 :<- [:connection]
 (fn [connection]
   (:error connection)))

;; Add this subscription for NMEA frames
(rf/reg-sub
 :nmea-frames
 (fn [db]
   (:nmea-frames db)))

(rf/reg-sub
 :nmea-data
 (fn [db]
   (js/console.log "DB state in nmea-data sub:" db)
   (:nmea-data db)))

(rf/reg-sub
 :connection-status
 (fn [db]
   (:connected? db)))

(rf/reg-sub
 :latest-position
 :<- [:nmea-data]
 (fn [nmea-data]
   (->> nmea-data
        (filter #(#{:GGA :RMC :GLL} (:type %)))
        (sort-by :timestamp)
        last)))

(rf/reg-sub
 :latest-wind
 :<- [:nmea-data]
 (fn [nmea-data]
   (->> nmea-data
        (filter #(#{:MWV :VWR :VWT} (:type %)))
        (sort-by :timestamp)
        last)))

(rf/reg-sub
 :latest-depth
 :<- [:nmea-data]
 (fn [nmea-data]
   (->> nmea-data
        (filter #(#{:DBT :DPT} (:type %)))
        (sort-by :timestamp)
        last)))

;; Add this subscription for statistics
(rf/reg-sub
 :statistics
 (fn [db]
   (:statistics db)))
