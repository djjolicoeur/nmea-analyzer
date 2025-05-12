;; src/nmea_analyzer/views.cljs
(ns nmea-analyzer.views
  (:require [re-frame.core :as rf]
            [nmea-analyzer.nmea-parser :refer [nmea-sentence-types]]))

(defn connection-status []
  (let [status @(rf/subscribe [:connection-field :status])
        error @(rf/subscribe [:connection-error])]
    [:div.connection-status
     (case status
       :connecting [:div.status.connecting "Connecting..."]
       :connected [:div.status.connected "Connected"]
       :error [:div.status.error 
               [:span "Connection Error: "]
               [:span.error-message (str error)]]
       [:div.status.disconnected "Disconnected"])]))

(defn connection-form []
  (let [host @(rf/subscribe [:connection-field :host])
        port @(rf/subscribe [:connection-field :port])
        connected? @(rf/subscribe [:connected?])]
    [:div.connection-form
     [:h3 "NMEA Connection"]
     [:div.form-group
      [:label "Host:"]
      [:input {:type "text"
               :value host
               :disabled connected?
               :on-change #(rf/dispatch [:update-connection-field :host 
                                       (.. % -target -value)])}]]
     [:div.form-group
      [:label "Port:"]
      [:input {:type "number"
               :value port
               :disabled connected?
               :min 1
               :max 65535
               :on-change #(rf/dispatch [:update-connection-field :port 
                                       (js/parseInt (.. % -target -value))])}]]
     (if connected?
       [:button.disconnect
        {:on-click #(rf/dispatch [:disconnect-nmea])}
        "Disconnect"]
       [:button.connect
        {:on-click #(rf/dispatch [:connect-nmea])}
        "Connect"])
     [connection-status]]))

(defn nmea-frame [{:keys [timestamp pgn data] :as frame}]
  [:div.nmea-frame
   [:div.frame-header
    [:span.timestamp (-> timestamp js/Date. .toISOString)]
    [:span.pgn (str "PGN: " pgn)]]
   [:div.frame-data
    [:pre (str data)]]])

(defn frames-display []
  (let [frames @(rf/subscribe [:nmea-frames])]
    [:div.frames-container
     [:h3 "NMEA Frames"]
     (if (or (nil? frames) (empty? frames))
       [:div.no-frames "No frames received"]
       [:div.frames-list
        (for [frame (take 100 (reverse frames))]
          ^{:key (:timestamp frame)}
          [nmea-frame frame])])]))

(defn position-display []
  (when-let [position @(rf/subscribe [:latest-position])]
    [:div.position
     [:h3 "Position"]
     [:div
      [:div (str "Lat: " (:latitude position) "°")]
      [:div (str "Lon: " (:longitude position) "°")]]]))

(defn wind-display []
  (when-let [wind @(rf/subscribe [:latest-wind])]
    [:div.wind
     [:h3 "Wind"]
     [:div
      [:div (str "Angle: " (:angle wind) "°")]
      [:div (str "Speed: " (:speed wind) " " (:speed-units wind))]]]))

(defn depth-display []
  (when-let [depth @(rf/subscribe [:latest-depth])]
    [:div.depth
     [:h3 "Depth"]
     [:div
      [:div (str "Depth: " (:depth-meters depth) "m")]
      (when (:depth-feet depth)
        [:div (str "(" (:depth-feet depth) "ft)")])]]))

(defn nmea-data-display []
  (let [nmea-data @(rf/subscribe [:nmea-data])]
    [:div.nmea-data {:style {:margin-top "20px"
                             :padding "15px"
                             :border "1px solid #ddd"
                             :border-radius "5px"
                             :background-color "#f9f9f9"}}
     [:h3 {:style {:margin "0 0 15px 0"
                   :color "#333"
                   :border-bottom "2px solid #007bff"
                   :padding-bottom "8px"}}
      "NMEA Data"]
     (if (empty? nmea-data)
       [:div {:style {:padding "20px"
                      :text-align "center"
                      :color "#666"
                      :font-style "italic"}}
        "No NMEA data received yet"]
       [:div.frames-list {:style {:max-height "400px"
                                  :overflow-y "auto"}}
        (for [{:keys [type timestamp raw talker-id] :as sentence} (take-last 10 nmea-data)]
          ^{:key timestamp}
          [:div.nmea-sentence {:style {:margin "10px 0"
                                       :padding "10px"
                                       :border "1px solid #e0e0e0"
                                       :border-radius "4px"
                                       :background-color "#fff"
                                       :box-shadow "0 1px 3px rgba(0,0,0,0.1)"}}
           [:div.sentence-type {:style {:font-weight "bold"
                                        :color "#007bff"
                                        :margin-bottom "5px"
                                        :display "flex"
                                        :justify-content "space-between"}}
            [:span (get-in nmea-sentence-types [type :name] "Unknown")]
            [:span.talker-id {:style {:color "#666"
                                      :font-size "0.9em"}}
             (str "(" talker-id ")")]]
           [:div.raw-data {:style {:font-family "monospace"
                                   :font-size "0.9em"
                                   :padding "5px"
                                   :background-color "#f5f5f5"
                                   :border-radius "3px"
                                   :margin "5px 0"
                                   :word-break "break-all"}}
            raw]
           [:pre.parsed-data {:style {:font-family "monospace"
                                      :font-size "0.9em"
                                      :padding "8px"
                                      :background-color "#f8f9fa"
                                      :border-radius "3px"
                                      :margin "5px 0"
                                      :overflow-x "auto"
                                      :white-space "pre-wrap"
                                      :color "#333"}}
            (str (dissoc sentence :raw))]])])]))

(defn main-panel []
  [:div.container
   [:h1 "NMEA Analyzer"]
   [connection-form]
   [:div.data-displays
    [position-display]
    [wind-display]
    [depth-display]]
   [nmea-data-display]])



;(defn main-panel []
;  [:div.container
;   [:h1 "NMEA Analyzer"]
;   [connection-form]
;   [frames-display]])
