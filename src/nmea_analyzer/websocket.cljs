;; src/nmea_analyzer/websocket.cljs
(ns nmea-analyzer.websocket
  (:require [re-frame.core :as rf]))

(defonce websocket-connection (atom nil))

;; Bridge server configuration
(def bridge-config
  {:host "localhost"
   :port 3000})

;; Update the parse-message function in websocket.cljs
(defn parse-message [msg]
  (try
    (let [data (js->clj (js/JSON.parse msg) :keywordize-keys true)]
      (js/console.log "Received message:" (clj->js data)) ;; Debug log
      (case (:type data)
        "nmea" (let [nmea-data (:data data)]
                 (when (not-empty nmea-data)
                   (rf/dispatch [:nmea-frame-received 
                               {:timestamp (js/Date.now)
                                :data nmea-data}])))
        "status" (case (:status data)
                  "connected" (do
                              (js/console.log "Successfully connected to NMEA device")
                              (rf/dispatch [:connection-success]))
                  "disconnected" (do
                                 (js/console.log "Disconnected from NMEA device")
                                 (rf/dispatch [:connection-error (:error data)]))
                  "error" (do
                          (js/console.error "NMEA connection error:" (:error data))
                          (rf/dispatch [:connection-error (:error data)]))
                  (js/console.log "Unknown status:" (:status data)))
        (js/console.log "Unknown message type:" (:type data))))
    (catch js/Error e
      (js/console.error "Error parsing message:" e)
      (rf/dispatch [:connection-error (str "Failed to parse message: " (.-message e))])
      nil)))


(defn handle-message [msg]
  (parse-message (.-data msg)))

(defn create-websocket []
  (let [ws-url (str "ws://" (:host bridge-config) ":" (:port bridge-config))
        _ (js/console.log "Connecting to bridge at:" ws-url) ;; Debug log
        ws (js/WebSocket. ws-url)]
    
    (set! (.-onopen ws)
          (fn [_]
            (js/console.log "Connected to bridge server")))
    
    (set! (.-onclose ws)
          (fn [event]
            (js/console.log "Bridge connection closed:" (.-reason event)) ;; Debug log
            (reset! websocket-connection nil)
            (rf/dispatch [:connection-error 
                         (str "Bridge connection closed: " (.-reason event))])))
    
    (set! (.-onerror ws)
          (fn [error]
            (js/console.log "Bridge connection error:" error) ;; Debug log
            (rf/dispatch [:connection-error 
                         "Failed to connect to bridge server"])))
    
    (set! (.-onmessage ws) handle-message)
    ws))

(defn connect! [nmea-host nmea-port]
  (js/console.log "Attempting to connect to NMEA device at:" nmea-host ":" nmea-port) ;; Debug log
  (if-not @websocket-connection
    (try
      (let [ws (create-websocket)]
        (reset! websocket-connection ws)
        ;; Wait for WebSocket to open before sending connection request
        (set! (.-onopen ws)
              (fn [_]
                (js/console.log "Sending connect request to bridge") ;; Debug log
                (.send ws (js/JSON.stringify 
                          (clj->js {:type "connect"
                                   :host nmea-host
                                   :port nmea-port})))))
        ws)
      (catch js/Error e
        (js/console.error "Error creating WebSocket:" e) ;; Debug log
        (rf/dispatch [:connection-error (.-message e)])))
    ;; If WebSocket exists, just send connect message
    (do
      (js/console.log "Using existing bridge connection") ;; Debug log
      (.send @websocket-connection 
             (js/JSON.stringify 
              (clj->js {:type "connect"
                       :host nmea-host
                       :port nmea-port}))))))

(defn disconnect! []
  (when @websocket-connection
    (js/console.log "Disconnecting from NMEA device") ;; Debug log
    (.send @websocket-connection 
           (js/JSON.stringify (clj->js {:type "disconnect"})))
    (.close @websocket-connection)
    (reset! websocket-connection nil)))