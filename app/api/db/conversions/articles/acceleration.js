// accelerationUnits.js

const accelerationArticles = {
    centimeter_per_second_squared: `
  # Centimeter Per Second Squared
  &nbsp;
  
  A unit of acceleration commonly used in physics, defined as an object increasing its velocity by one centimeter per second every second.

  ## History
  &nbsp;
  
  Used in various scientific and engineering contexts where the metric system is preferred, particularly in laboratories and educational settings.

  ## Conversions
  &nbsp;
  
  - To meters per second squared: 1 cm/s² = 0.01 m/s²

  ## Practical Applications
  &nbsp;
  
  Often used in physics education and in industries that deal with smaller scales of motion.
  `,
    foot_per_hour_per_second: `
  # Foot Per Hour Per Second
  &nbsp;
  
  This unit measures how much the velocity of an object increases by in feet per hour for every second that passes.

  ## History
  &nbsp;
  
  It is primarily used in contexts where acceleration is gradual and measurements are needed over extended periods.

  ## Conversions
  &nbsp;
  
  - To feet per second squared: 1 ft/h/s = 8.46667 x 10^-5 ft/s²

  ## Practical Applications
  &nbsp;
  
  Useful in transportation and civil engineering to model slow changes in velocity.
  `,
    foot_per_minute_per_second: `
  # Foot Per Minute Per Second
  &nbsp;
  
  Measures the rate of change in velocity in feet per minute for each second.

  ## History
  &nbsp;
  
  Often used in industries where understanding acceleration over short periods is essential, such as in some manufacturing processes.

  ## Conversions
  &nbsp;
  
  - To feet per second squared: 1 ft/min/s = 0.00508 ft/s²

  ## Practical Applications
  &nbsp;
  
  Useful in mechanical engineering and robotics for precise control over motion.
  `,
    foot_per_second_squared: `
  # Foot Per Second Squared
  &nbsp;
  
  A standard imperial unit of acceleration that indicates how quickly the velocity of an object increases by in feet per second every second.

  ## History
  &nbsp;
  
  Commonly used in the United States and other countries still utilizing the imperial system, especially in automotive and aerospace industries.

  ## Conversions
  &nbsp;
  
  - To meters per second squared: 1 ft/s² = 0.3048 m/s²

  ## Practical Applications
  &nbsp;
  
  Widely used in the automotive industry, aerospace engineering, and physics.
  `,
    galileo: `
  # Galileo
  &nbsp;
  
  Defined as an acceleration of one centimeter per second squared. Named after the famous physicist Galileo Galilei.

  ## History
  &nbsp;
  
  Introduced to provide a simpler unit in systems using the centimeter-gram-second (CGS) system of units.

  ## Conversions
  &nbsp;
  
  - To meters per second squared: 1 Gal = 0.01 m/s²

  ## Practical Applications
  &nbsp;
  
  Primarily used in geophysics and in studies related to gravity and acceleration due to its relevance to gravitational measurements.
  `,
    gravity_standard: `
  # Gravity (standard)
  &nbsp;
  
  Represents the typical acceleration due to Earth's gravity, approximately 9.80665 meters per second squared.

  ## History
  &nbsp;
  
  Defined to standardize the gravitational constant used in physics and engineering calculations related to Earth's gravity.

  ## Conversions
  &nbsp;
  
  - To feet per second squared: 1 g = 32.174 ft/s²

  ## Practical Applications
  &nbsp;
  
  Essential in all areas of physics, engineering, and aerospace, where accurate measurements of gravitational effects are crucial.
  `,
  inch_per_hour_per_second: `
  # Inch Per Hour Per Second
  &nbsp;
  
  This unit measures the change in speed in inches per hour for each second that elapses.

  ## History
  &nbsp;
  
  Used in specific engineering contexts where slow, precise changes in speed are monitored over long durations.

  ## Conversions
  &nbsp;
  
  - To inches per second squared: 1 in/h/s = 7.71667 x 10^-5 in/s²

  ## Practical Applications
  &nbsp;
  
  Often applied in scientific experiments and engineering applications where slow velocity changes are significant.
  `,
    inch_per_minute_per_second: `
  # Inch Per Minute Per Second
  &nbsp;
  
  Measures how quickly an object’s speed increases by inches per minute for every second.

  ## History
  &nbsp;
  
  Used where acceleration needs to be tracked minutely over short intervals, such as in some mechanical testing scenarios.

  ## Conversions
  &nbsp;
  
  - To inches per second squared: 1 in/min/s = 0.00027778 in/s²

  ## Practical Applications
  &nbsp;
  
  Useful in precision engineering and controlled environment experiments where detailed monitoring is required.
  `,
    inch_per_second_squared: `
  # Inch Per Second Squared
  &nbsp;
  
  A unit of acceleration measuring the rate at which velocity increases by inches per second every second.

  ## History
  &nbsp;
  
  Commonly used in the American engineering and scientific communities, consistent with other imperial measurement systems.

  ## Conversions
  &nbsp;
  
  - To meters per second squared: 1 in/s² = 0.0254 m/s²

  ## Practical Applications
  &nbsp;
  
  Frequently used in industrial applications in the United States, especially in sectors like automotive testing and aerospace.
  `,
    knot_per_second: `
  # Knot Per Second
  &nbsp;
  
  Represents the rate of change in speed where one knot per second equals one nautical mile per hour per second.

  ## History
  &nbsp;
  
  Predominantly used in maritime and aeronautical navigation to describe changes in speed.

  ## Conversions
  &nbsp;
  
  - To meters per second squared: 1 knot/s ≈ 0.514444 m/s²

  ## Practical Applications
  &nbsp;
  
  Critical in navigation for calculating rapid changes in ship or aircraft speed.
  `,
    meter_per_second_squared: `
  # Meter Per Second Squared
  &nbsp;
  
  The SI unit of acceleration, indicating how quickly the velocity of an object increases by meters per second every second.

  ## History
  &nbsp;
  
  It is the standard unit of acceleration in the International System of Units, used globally in all scientific and engineering fields.

  ## Conversions
  &nbsp;
  
  - To feet per second squared: 1 m/s² = 3.28084 ft/s²

  ## Practical Applications
  &nbsp;
  
  Used in virtually every aspect of science and engineering, including automotive, aerospace, and structural engineering.
  `,
    mile_per_hour_per_second: `
  # Mile Per Hour Per Second
  &nbsp;
  
  This unit measures the rate of speed increase by one mile per hour for each second that passes.

  ## History
  &nbsp;
  
  Commonly used in automotive and traffic engineering, especially in the United States.

  ## Conversions
  &nbsp;
  
  - To feet per second squared: 1 mph/s ≈ 0.44704 ft/s²

  ## Practical Applications
  &nbsp;
  
  Essential in vehicle dynamics, traffic studies, and road safety analysis.
  `,
    mile_per_minute_per_second: `
  # Mile Per Minute Per Second
  &nbsp;
  
  Measures the increase in speed in miles per minute for each second that elapses.

  ## History
  &nbsp;
  
  Useful in contexts where acceleration happens very rapidly, such as in certain aerospace applications.

  ## Conversions
  &nbsp;
  
  - To miles per hour per second: 1 mi/min/s = 60 mph/s

  ## Practical Applications
  &nbsp;
  
  Utilized in high-speed vehicle testing and aerospace engineering to measure quick changes in velocity.
  `,
    mile_per_second_squared: `
  # Mile Per Second Squared
  &nbsp;
  
  A unit of acceleration indicating a velocity increase by one mile per second for every second of time that passes.

  ## History
  &nbsp;
  
  Used in scientific research where extremely high rates of acceleration need to be measured.

  ## Conversions
  &nbsp;
  
  - To meters per second squared: 1 mi/s² = 1609.34 m/s²

  ## Practical Applications
  &nbsp;
  
  Relevant in theoretical physics and advanced aerospace studies, particularly in scenarios involving very high velocities.
  `
};

export default accelerationArticles;
