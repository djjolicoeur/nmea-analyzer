;; src/nmea_analyzer/core.cljs
(ns nmea-analyzer.core
  (:require [reagent.dom.client :as rdom]
            [re-frame.core :as rf]
            [nmea-analyzer.events :as events]
            [nmea-analyzer.views :as views]
            [nmea-analyzer.subs :as subs]))

(defonce root (rdom/create-root (js/document.getElementById "app")))

(defn ^:dev/after-load mount-root []
  (rf/dispatch-sync [:initialize-db])
  (rdom/render root [views/main-panel]))

(defn init []
  (mount-root))


