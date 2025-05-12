;; src/nmea_analyzer/events.cljs
(ns nmea-analyzer.events
  (:require [re-frame.core :as rf]
            [nmea-analyzer.db :as db]
            [nmea-analyzer.nmea-parser :as parser]
            [nmea-analyzer.websocket :as ws]))

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-db
 :update-connection-field
 (fn [db [_ field value]]
   (assoc-in db [:connection field] value)))

(rf/reg-event-fx
 :connect-nmea
 (fn [{:keys [db]} _]
   (let [{:keys [host port]} (get db :connection)]
     {:db (-> db
              (assoc-in [:connection :status] :connecting)
              (assoc-in [:connection :error] nil))
      :fx [[:dispatch [:attempt-connection host port]]]})))

(rf/reg-event-fx
 :attempt-connection
 (fn [_ [_ host port]]
   (ws/connect! host port)
   {}))

(rf/reg-event-fx
 :disconnect-nmea
 (fn [{:keys [db]} _]
   (ws/disconnect!)
   {:db (-> db
            (assoc :connected? false)
            (assoc-in [:connection :status] nil)
            (assoc-in [:connection :error] nil))}))

(rf/reg-event-db
 :connection-success
 (fn [db _]
   (-> db
       (assoc :connected? true)
       (assoc-in [:connection :status] :connected)
       (assoc-in [:connection :error] nil))))

(rf/reg-event-db
 :connection-error
 (fn [db [_ error]]
   (-> db
       (assoc :connected? false)
       (assoc-in [:connection :status] :error)
       (assoc-in [:connection :error] error))))

;(rf/reg-event-db
; :nmea-frame-received
; (fn [db [_ frame]]
;   (-> db
;       (update :nmea-frames conj frame)
;       (update-in [:statistics :frame-count] inc)
;       (assoc-in [:statistics :last-update] (js/Date.now)))))

(rf/reg-event-db
  :nmea-frame-received
  (fn [db [_ frame]]
    (js/console.log "Frame received:" frame)
    (let [sentence (:data frame)
          parsed (parser/parse-sentence sentence)]
      (if parsed
        (do
          (js/console.log "Successfully parsed NMEA sentence:" parsed)
          (update db :nmea-data conj
                  (assoc parsed
                         :timestamp (:timestamp frame)
                         :source (:source frame))))
        (do
          (js/console.log "Failed to parse NMEA sentence:" sentence)
          db)))))