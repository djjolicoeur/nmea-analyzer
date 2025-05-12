;; src/nmea_analyzer/nmea_parser.cljs
(ns nmea-analyzer.nmea-parser
  (:require
   [clojure.string :as str]
   [goog.string :as gstring]
   [goog.string.format])) ;; This is required for gstring/format to work

(def nmea-sentence-types
  {:GGA {:name "Global Positioning System Fix Data"
         :fields [:time :latitude :lat-dir :longitude :lon-dir
                 :quality :satellites :hdop :altitude :altitude-units
                 :geoid-separation :geoid-units :age-of-diff-data :diff-ref-station]}
   :RMC {:name "Recommended Minimum Navigation Info"
         :fields [:time :status :latitude :lat-dir :longitude :lon-dir
                 :speed :track :date :magnetic-variation :mag-var-dir]}
   :GLL {:name "Geographic Position - Latitude/Longitude"
         :fields [:latitude :lat-dir :longitude :lon-dir :time :status :mode]}
   :VTG {:name "Track Made Good and Ground Speed"
         :fields [:track-true :true-indicator :track-magnetic :magnetic-indicator
                 :speed-knots :knots-indicator :speed-kmh :kmh-indicator :mode]}
   :GSA {:name "GPS DOP and Active Satellites"
         :fields [:mode1 :mode2 :satellite1 :satellite2 :satellite3 :satellite4
                 :satellite5 :satellite6 :satellite7 :satellite8 :satellite9
                 :satellite10 :satellite11 :satellite12 :pdop :hdop :vdop]}
   :GSV {:name "GPS Satellites in View"
         :fields [:total-messages :message-number :satellites-in-view
                 :prn1 :elevation1 :azimuth1 :snr1
                 :prn2 :elevation2 :azimuth2 :snr2
                 :prn3 :elevation3 :azimuth3 :snr3
                 :prn4 :elevation4 :azimuth4 :snr4]}
   :HDT {:name "Heading - True"
         :fields [:heading :true-indicator]}
   :HDM {:name "Heading - Magnetic"
         :fields [:heading :magnetic-indicator]}
   :MWV {:name "Wind Speed and Angle"
         :fields [:angle :reference :speed :speed-units :status]}
   :DBT {:name "Depth Below Transducer"
         :fields [:depth-feet :feet :depth-meters :meters :depth-fathoms :fathoms]}
   :DPT {:name "Depth"
         :fields [:depth :offset :maximum-range]}
   :MTW {:name "Water Temperature"
         :fields [:temperature :unit]}
   :VHW {:name "Water Speed and Heading"
         :fields [:heading-true :true-indicator :heading-magnetic :magnetic-indicator
                 :speed-knots :knots-indicator :speed-kmh :kmh-indicator]}
   :VWR {:name "Relative Wind Speed and Angle"
         :fields [:wind-angle :left-right :wind-speed-knots :knots-indicator
                 :wind-speed-ms :ms-indicator :wind-speed-kmh :kmh-indicator]}
   :VWT {:name "True Wind Speed and Angle"
         :fields [:wind-angle :left-right :wind-speed-knots :knots-indicator
                 :wind-speed-ms :ms-indicator :wind-speed-kmh :kmh-indicator]}
   :ZDA {:name "Time & Date"
         :fields [:time :day :month :year :local-zone-hours :local-zone-minutes]}
   :APB {:name "Autopilot Sentence B"
         :fields [:status1 :status2 :xte-magnitude :dir-to-steer :xte-units
                 :arrival-status :arrival-perpendicular :bearing-origin-to-destination
                 :bearing-type :destination-waypoint-id :bearing-present-to-destination
                 :bearing-type2 :heading-to-steer :heading-type]}
   :ROT {:name "Rate Of Turn"
         :fields [:rate-of-turn :status]}
   :RPM {:name "Revolutions"
         :fields [:source :engine-number :speed :pitch :status]}
   :RSA {:name "Rudder Sensor Angle"
         :fields [:starboard-angle :starboard-status :port-angle :port-status]}
   :XTE {:name "Cross-Track Error"
         :fields [:status1 :status2 :xte-magnitude :dir-to-steer :xte-units]}
   :XDR {:name "Transducer Measurements"
         :fields [:type :data :units :name]}
   :HDG {:name "Heading - Deviation & Variation"
         :fields [:heading :deviation :dev-dir :variation :var-dir]}
   
   :PASHR {:name "Attitude Data"
           :fields [:time :heading :heading-type :roll :pitch :heave
                    :roll-accuracy :pitch-accuracy :heading-accuracy
                    :quality :status]}})

(defn- nmea-coord->decimal
  "Convert NMEA coordinate format to decimal degrees"
  [coord dir]
  (when (and coord dir)
    (let [degrees (js/parseInt (subs coord 0 2))
          minutes (js/parseFloat (subs coord 2))
          decimal (+ degrees (/ minutes 60))
          multiplier (if (or (= dir "N") (= dir "E")) 1 -1)]
      (* decimal multiplier))))

(defn- parse-numeric
  "Safely parse numeric values"
  [value]
  (when (and value (not= value ""))
    (js/parseFloat value)))

(defn- process-fields
  "Process specific fields based on sentence type"
  [sentence-type data]
  (case sentence-type
    (:GGA :RMC :GLL) (-> data
                         (update :latitude #(nmea-coord->decimal % (:lat-dir data)))
                         (update :longitude #(nmea-coord->decimal % (:lon-dir data)))
                         (dissoc :lat-dir :lon-dir))
    
    (:DBT :DPT) (-> data
                    (update :depth-meters parse-numeric)
                    (update :depth-feet parse-numeric)
                    (update :depth-fathoms parse-numeric))
    
    (:MWV :VWR :VWT) (-> data
                         (update :speed parse-numeric)
                         (update :angle parse-numeric))
    
    (:HDT :HDM) (update data :heading parse-numeric)
    
    (:ROT) (update data :rate-of-turn parse-numeric)
    
    ;; Default case - return unmodified data
    data))

(defn- checksum-valid?
  "Validate NMEA sentence checksum"
  [sentence]
  (try
    (when-let [[data checksum] (str/split (str/trim sentence) #"\*")]
      (let [calculated (->> (rest data)
                            (reduce #(bit-xor %1 (int %2)) 0)
                            (#(gstring/format "%02X" %)))]
        (= calculated (str/upper-case checksum))))
    (catch :default e
      (js/console.log "Checksum validation error:" e)
      false)))

(defn parse-sentence
  "Parse NMEA sentence into structured data"
  [nmea-string]
  (js/console.log "Attempting to parse:" nmea-string)
  (when (and (string? nmea-string)
             (str/starts-with? nmea-string "$"))
    (let [cleaned-string (str/trim nmea-string)
          [sentence checksum] (str/split cleaned-string #"\*")
          parts (str/split sentence #",")
          talker-id (subs (first parts) 1 3)
          sentence-type (-> (first parts)
                            (subs 3)
                            keyword)
          data (rest parts)
          sentence-def (get nmea-sentence-types sentence-type)]
      (js/console.log "Sentence type:" sentence-type)
      (js/console.log "Sentence def:" sentence-def)
      (when sentence-def
        (let [raw-data (zipmap (:fields sentence-def) data)]
          (merge
           {:type sentence-type
            :talker-id talker-id
            :raw cleaned-string}
           (process-fields sentence-type raw-data)))))))

