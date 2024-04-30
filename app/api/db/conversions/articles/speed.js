// speedUnits.js

const speedArticles = {
    centimeter_per_minute: `
  # Centimeter Per Minute
  &nbsp;
  
  A unit of speed expressing the number of centimeters an object travels in one minute.

  ## Notation
  &nbsp;
  
  Abbreviated as cm/min.

  ## History
  &nbsp;
  
  Typically used in scientific studies where slow-moving phenomena are observed.

  ## Conversions
  &nbsp;
  
  - To meters per second: 1 cm/min = 0.00016667 m/s

  ## Practical Applications
  &nbsp;
  
  Useful in laboratory settings for observing chemical reactions or biological processes.
  `,
    centimeter_per_second: `
  # Centimeter Per Second
  &nbsp;
  
  A unit of speed representing how many centimeters an object travels in one second.

  ## Notation
  &nbsp;
  
  Abbreviated as cm/s.

  ## History
  &nbsp;
  
  Often used in physics and engineering to measure smaller scale movements accurately.

  ## Conversions
  &nbsp;
  
  - To meters per second: 1 cm/s = 0.01 m/s

  ## Practical Applications
  &nbsp;
  
  Commonly used in physics education and experiments to measure velocity in smaller settings.
  `,
    foot_per_hour: `
  # Foot Per Hour
  &nbsp;
  
  A unit of speed expressing the distance in feet an object travels in one hour.

  ## Notation
  &nbsp;
  
  Abbreviated as ft/hr.

  ## History
  &nbsp;
  
  Used in industries and studies where extremely slow motion needs to be quantified.

  ## Conversions
  &nbsp;
  
  - To meters per second: 1 ft/hr ≈ 8.4667e-5 m/s

  ## Practical Applications
  &nbsp;
  
  Useful in geological and environmental sciences to monitor slow changes over time.
  `,
    foot_per_minute: `
  # Foot Per Minute
  &nbsp;
  
  A unit of speed that measures the distance traveled in feet per minute.

  ## Notation
  &nbsp;
  
  Abbreviated as ft/min.

  ## History
  &nbsp;
  
  Utilized in various fields including manufacturing and engineering to measure conveyor belt speeds or fluid flow.

  ## Conversions
  &nbsp;
  
  - To meters per second: 1 ft/min = 0.00508 m/s

  ## Practical Applications
  &nbsp;
  
  Commonly used in HVAC for airflow rates and in other industrial applications.
  `,
    foot_per_second: `
  # Foot Per Second
  &nbsp;
  
  A unit of speed used primarily in the United States to measure how fast an object moves in feet per second.

  ## Notation
  &nbsp;
  
  Abbreviated as ft/s.

  ## History
  &nbsp;
  
  Often used in the U.S. for automotive speed, industrial processes, and sporting events like sprinting.

  ## Conversions
  &nbsp;
  
  - To meters per second: 1 ft/s = 0.3048 m/s

  ## Practical Applications
  &nbsp;
  
  Vital for calculating speeds in many contexts, from vehicle dynamics to athletic performance analysis.
  `,
  inch_per_minute: `
  # Inch Per Minute
  &nbsp;
  
  A unit of speed that measures the number of inches an object travels in one minute.

  ## Notation
  &nbsp;
  
  Abbreviated as in/min.

  ## Practical Applications
  &nbsp;
  
  Often used in manufacturing and engineering to measure the feed rate of materials in processes such as milling and drilling.
  `,
    inch_per_second: `
  # Inch Per Second
  &nbsp;
  
  A unit of speed that measures the number of inches an object travels in one second.

  ## Notation
  &nbsp;
  
  Abbreviated as in/s.

  ## Practical Applications
  &nbsp;
  
  Commonly used in the automotive industry and in mechanical engineering for precision measurements of equipment speed.
  `,
    kilometer_per_hour: `
  # Kilometer Per Hour
  &nbsp;
  
  A unit of speed expressing the number of kilometers traveled in one hour.

  ## Notation
  &nbsp;
  
  Abbreviated as km/h.

  ## Practical Applications
  &nbsp;
  
  Widely used in road signs and car speedometers to indicate vehicular speeds and legal speed limits.
  `,
    kilometer_per_second: `
  # Kilometer Per Second
  &nbsp;
  
  A unit of speed indicating the number of kilometers an object travels in one second.

  ## Notation
  &nbsp;
  
  Abbreviated as km/s.

  ## Practical Applications
  &nbsp;
  
  Used in astronomical contexts to measure the speed of celestial objects, such as comets and planets.
  `,
    knot_uk: `
  # Knot (UK)
  &nbsp;
  
  A unit of speed used in maritime and air navigation, equivalent to one nautical mile per hour.

  ## Notation
  &nbsp;
  
  Abbreviated as kn.

  ## Practical Applications
  &nbsp;
  
  Essential for navigation at sea and in the air, ensuring compliance with maritime and aviation speed limits.
  `,
    knot_nautical_mih: `
  # Knot (Nautical Mi/h)
  &nbsp;
  
  Identical to Knot (UK), used internationally to denote maritime and aerial speeds.

  ## Notation
  &nbsp;
  
  Also abbreviated as kn.

  ## Practical Applications
  &nbsp;
  
  Universally recognized in navigation systems for its practical application in maritime and aviation operations.
  `,
    meter_per_hour: `
  # Meter Per Hour
  &nbsp;
  
  A unit of speed measuring how many meters are traveled in one hour.

  ## Notation
  &nbsp;
  
  Abbreviated as m/h.

  ## Practical Applications
  &nbsp;
  
  Used in various engineering and scientific research to monitor slow movements, such as the displacement of glaciers.
  `,
    meter_per_minute: `
  # Meter Per Minute
  &nbsp;
  
  A unit of speed that measures how many meters are traveled in one minute.

  ## Notation
  &nbsp;
  
  Abbreviated as m/min.

  ## Practical Applications
  &nbsp;
  
  Often used in industrial applications to measure conveyor belt speeds or in medical devices to monitor fluid flow rates.
  `,
    meter_per_second: `
  # Meter Per Second
  &nbsp;
  
  The fundamental unit of speed in the SI system, representing the speed of an object traveling one meter in one second.

  ## Notation
  &nbsp;
  
  Abbreviated as m/s.

  ## Practical Applications
  &nbsp;
  
  Used extensively in scientific calculations, sports science for measuring athletic performance, and in vehicle dynamics.
  `,
    mile_per_hour: `
  # Mile Per Hour
  &nbsp;
  
  A unit of speed commonly used in the United States and the United Kingdom to measure road speeds.

  ## Notation
  &nbsp;
  
  Abbreviated as mph.

  ## Practical Applications
  &nbsp;
  
  Primary unit of speed on road signs and in vehicle speedometers in countries using the imperial system.
  `,
    mile_per_minute: `
  # Mile Per Minute
  &nbsp;
  
  A high-speed unit that measures the distance in miles an object travels in one minute.

  ## Notation
  &nbsp;
  
  Abbreviated as mi/min.

  ## Practical Applications
  &nbsp;
  
  Used in contexts where very high speeds need to be conveyed, such as in certain types of racing or high-speed testing.
  `,
    mile_per_second: `
  # Mile Per Second
  &nbsp;
  
  An extremely high-speed unit indicating the number of miles an object travels in one second.

  ## Notation
  &nbsp;
  
  Abbreviated as mi/s.

  ## Practical Applications
  &nbsp;
  
  Typically used in aerospace and scientific research to measure speeds in high-velocity experiments or space travel.
  `,
    speed_of_light_vacuum: `
  # Speed-of-light (vacuum)
  &nbsp;
  
  The speed of light in a vacuum is the ultimate speed limit of the universe, approximately 299,792 kilometers per second.

  ## Notation
  &nbsp;
  
  Often symbolized as c.

  ## Practical Applications
  &nbsp;
  
  Fundamental in the theories of relativity, used in calculations involving the propagation of light and other electromagnetic radiation.
  `,
    yard_per_hour: `
  # Yard Per Hour
  &nbsp;
  
  A unit of speed that measures how many yards are traveled in one hour.

  ## Notation
  &nbsp;
  
  Abbreviated as yd/h.

  ## Practical Applications
  &nbsp;
  
  Used in some industrial and scientific applications to measure slow-moving objects or substances.
  `,
    yard_per_minute: `
  # Yard Per Minute
  &nbsp;
  
  A unit of speed measuring how many yards are traveled in one minute.

  ## Notation
  &nbsp;
  
  Abbreviated as yd/min.

  ## Practical Applications
  &nbsp;
  
  Can be used in industrial contexts where material movement is measured over moderate distances.
  `,
    yard_per_second: `
  # Yard Per Second
  &nbsp;
  
  A unit of speed that measures how many yards are traveled in one second.

  ## Notation
  &nbsp;
  
  Abbreviated as yd/s.

  ## Practical Applications
  &nbsp;
  
  Useful in sports science, particularly in athletics to measure sprint speeds.
  `
};

export default speedArticles;
