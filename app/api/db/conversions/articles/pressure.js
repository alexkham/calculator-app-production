// pressureUnits.js

const pressureArticles = {
    atmosphere_standard: `
  # Atmosphere-Standard
  &nbsp;
  
  The standard atmosphere is a unit of pressure defined as 101,325 Pa. It is used as a reference for measuring atmospheric pressure.

  ## Notation
  &nbsp;
  
  The symbol for standard atmosphere is atm.

  ## History
  &nbsp;
  
  Historically used to model atmospheric pressure on Earth at sea level.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 atm = 101,325 Pa

  ## Practical Applications
  &nbsp;
  
  Used in aviation, meteorology, and engineering to define atmospheric pressure for calculations and designs.
  `,
    atmosphere_technical: `
  # Atmosphere-Technical
  &nbsp;
  
  The technical atmosphere is a unit of pressure equal to one kilogram-force per square centimeter.

  ## Notation
  &nbsp;
  
  Abbreviated as at or kgf/cm².

  ## History
  &nbsp;
  
  Commonly used in engineering fields to measure pressure using the metric system.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 at = 98,066.5 Pa

  ## Practical Applications
  &nbsp;
  
  Often used in the automotive and aerospace industries to measure pressure exerted by fluids and gases.
  `,
    bar: `
  # Bar
  &nbsp;
  
  A bar is a metric unit of pressure, approximately equal to the atmospheric pressure on Earth at sea level.

  ## Notation
  &nbsp;
  
  The symbol for bar is bar.

  ## History
  &nbsp;
  
  The bar was introduced by the British meteorologist William Napier Shaw in 1909 and has been widely adopted in weather reports, refrigeration, and engineering.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 bar = 100,000 Pa

  ## Practical Applications
  &nbsp;
  
  Commonly used in meteorology, oceanography, and industrial pressure settings such as pneumatic systems and hydraulic equipment.
  `,
    barye_cgs_unit: `
  # Barye (CGS Unit)
  &nbsp;
  
  The barye is the centimeter-gram-second (CGS) unit of pressure, defined as one dyne per square centimeter.

  ## Notation
  &nbsp;
  
  The symbol for barye is Ba.

  ## History
  &nbsp;
  
  Part of the CGS system which predates the modern SI system, it was widely used in physics and engineering.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 Ba = 0.1 Pa

  ## Practical Applications
  &nbsp;
  
  Although largely superseded by the SI system, it is still used in some scientific calculations and historical contexts.
  `,
    centimeter_of_mercury: `
  # Centimeter Of Mercury
  &nbsp;
  
  A unit of pressure defined as the pressure exerted at the base of a column of mercury one centimeter high.

  ## Notation
  &nbsp;
  
  Abbreviated as cmHg.

  ## History
  &nbsp;
  
  Historically used in barometric and vacuum applications due to mercury's high density.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 cmHg ≈ 1,333.22 Pa

  ## Practical Applications
  &nbsp;
  
  Used in medical fields, particularly in blood pressure measurement and other vacuum systems.
  `,
  centimeter_of_water_4_c: `
  # Centimeter Of Water (4 °C)
  &nbsp;
  
  A unit of pressure defined as the pressure exerted by a column of water one centimeter high at 4 degrees Celsius (temperature at which water is densest).

  ## Notation
  &nbsp;
  
  Abbreviated as cmH2O.

  ## History
  &nbsp;
  
  Used due to water's maximum density at 4 °C, which provides a stable point for precise pressure measurements.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 cmH2O = 98.0665 Pa

  ## Practical Applications
  &nbsp;
  
  Commonly used in medical respiratory technology and meteorology, as well as in various engineering fields to measure small pressure differences.
  `,
    decibar: `
  # Decibar
  &nbsp;
  
  A decibar is a unit of pressure equal to one-tenth of a bar.

  ## Notation
  &nbsp;
  
  Abbreviated as dbar.

  ## History
  &nbsp;
  
  Although less common than bars, decibars are used for more granular pressure measurements, particularly in oceanographic research.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 dbar = 10,000 Pa

  ## Practical Applications
  &nbsp;
  
  Frequently utilized in marine sciences to measure water pressure due to changes in ocean depth.
  `,
    foot_of_mercury_conventional: `
  # Foot Of Mercury (conventional)
  &nbsp;
  
  A unit of pressure defined as the pressure exerted at the base of a column of mercury one foot high.

  ## Notation
  &nbsp;
  
  Abbreviated as ftHg.

  ## History
  &nbsp;
  
  Similar to the more common inch of mercury, it is used for larger scale applications in scientific and industrial settings.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 ftHg ≈ 40,636 Pa

  ## Practical Applications
  &nbsp;
  
  Used in certain industrial processes where high precision in pressure measurement is required.
  `,
    foot_of_water_39_2_f: `
  # Foot Of Water (39.2 °F)
  &nbsp;
  
  Defined as the pressure exerted by a column of water one foot high at 39.2 degrees Fahrenheit, the temperature at which water is densest.

  ## Notation
  &nbsp;
  
  Abbreviated as ftH2O.

  ## History
  &nbsp;
  
  Like the centimeter of water, it provides a stable measurement unit due to the density properties of water at this specific temperature.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 ftH2O ≈ 2,988 Pa

  ## Practical Applications
  &nbsp;
  
  Often used in the U.S. for various hydraulic and civil engineering calculations.
  `,
    hectopascal: `
  # Hectopascal
  &nbsp;
  
  The hectopascal (hPa) is equivalent to 100 pascals and is commonly used in meteorology to measure atmospheric pressure.

  ## Notation
  &nbsp;
  
  Abbreviated as hPa.

  ## History
  &nbsp;
  
  The hectopascal aligns closely with the millibar, another unit traditionally used in atmospheric pressure measurements.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 hPa = 100 Pa

  ## Practical Applications
  &nbsp;
  
  Used globally to report atmospheric pressure in weather forecasts, aiding in the prediction of weather patterns and storm systems.
  `,

  inch_of_mercury_conventional: `
  # Inch Of Mercury (conventional)
  &nbsp;
  
  A unit of pressure measured as the pressure exerted by a column of mercury one inch high at a temperature of 32°F (0°C).

  ## Notation
  &nbsp;
  
  Abbreviated as inHg.

  ## History
  &nbsp;
  
  Widely used in meteorology, aviation, and automotive applications to measure atmospheric pressure.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 inHg = 3,386.39 Pa

  ## Practical Applications
  &nbsp;
  
  Crucial for calibrating barometric pressure that influences weather forecasting and altitude measurements in aviation.
  `,
    inch_of_water_39_2_f: `
  # Inch Of Water (39.2 °F)
  &nbsp;
  
  This unit measures pressure as the force exerted by a one-inch column of water at 39.2°F, the temperature of maximum density of water.

  ## Notation
  &nbsp;
  
  Abbreviated as inH2O.

  ## History
  &nbsp;
  
  Used for measuring small pressure differences in fluid dynamics and in medical applications involving respiratory support.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 inH2O = 249.082 Pa

  ## Practical Applications
  &nbsp;
  
  Often utilized in HVAC systems, engineering, and medical ventilators to measure air pressure.
  `,
    kilogram_force_per_square_millimeter: `
  # Kilogram-force Per Square Millimeter
  &nbsp;
  
  A unit of pressure where one kilogram-force is applied to an area of one square millimeter.

  ## Notation
  &nbsp;
  
  Abbreviated as kgf/mm².

  ## History
  &nbsp;
  
  Used primarily in materials science and engineering, particularly in stress analysis and strength testing.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 kgf/mm² = 9,806,650 Pa

  ## Practical Applications
  &nbsp;
  
  Essential in the field of materials engineering, especially for testing the mechanical properties of metals and composites.
  `,
    kilopascal: `
  # Kilopascal
  &nbsp;
  
  The kilopascal is a unit of pressure in the metric system, equal to one thousand pascals.

  ## Notation
  &nbsp;
  
  Abbreviated as kPa.

  ## History
  &nbsp;
  
  Adopted as part of the International System of Units to provide a more manageable figure for daily scientific use compared to the pascal.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 kPa = 1,000 Pa

  ## Practical Applications
  &nbsp;
  
  Used broadly in meteorology, engineering, and automotive industries to measure pressure and stress.
  `,
    kip_per_square_inch: `
  # Kip Per Square Inch
  &nbsp;
  
  A unit of pressure where one kip (a thousand pounds-force) is applied per square inch.

  ## Notation
  &nbsp;
  
  Abbreviated as ksi.

  ## History
  &nbsp;
  
  Common in structural engineering in the United States, where large-scale loads are measured in thousands of pounds.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 ksi = 6,894,757 Pa

  ## Practical Applications
  &nbsp;
  
  Critical in civil engineering for calculating the stress and load-bearing capacity of materials and structures.
  `,

  millibar: `
  # Millibar
  &nbsp;
  
  The millibar is a unit of pressure commonly used in meteorology, equivalent to one-thousandth of a bar.

  ## Notation
  &nbsp;
  
  Abbreviated as mbar.

  ## History
  &nbsp;
  
  Historically significant in weather reporting and atmospheric pressure measurements.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 mbar = 100 Pa

  ## Practical Applications
  &nbsp;
  
  Widely used in meteorology to describe atmospheric pressures in weather reports and forecasts.
  `,
    millimeter_of_mercury: `
  # Millimeter Of Mercury
  &nbsp;
  
  A millimeter of mercury is a manometric unit of pressure, historically defined as the extra pressure generated by a column of mercury one millimeter high.

  ## Notation
  &nbsp;
  
  Abbreviated as mmHg.

  ## History
  &nbsp;
  
  Commonly used in medical fields, especially in blood pressure measurement.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 mmHg = 133.322 Pa

  ## Practical Applications
  &nbsp;
  
  Essential in healthcare for measuring blood pressure and other vacuum pressures in medical devices.
  `,
    millimeter_of_water_3_98_c: `
  # Millimeter Of Water (3.98 °C)
  &nbsp;
  
  This unit measures the pressure exerted by a column of water one millimeter high at the temperature of maximum water density, 3.98 °C.

  ## Notation
  &nbsp;
  
  Abbreviated as mmH2O.

  ## History
  &nbsp;
  
  Useful for its stability at this specific temperature where water density peaks.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 mmH2O = 9.80665 Pa

  ## Practical Applications
  &nbsp;
  
  Used in engineering to measure small pressure differences, such as in ventilation and air-conditioning systems.
  `,
    pascal: `
  # Pascal
  &nbsp;
  
  The pascal is the SI unit of pressure, defined as one newton per square meter.

  ## Notation
  &nbsp;
  
  Symbolized as Pa.

  ## History
  &nbsp;
  
  Named after Blaise Pascal, a prominent mathematician, physicist, and philosopher.

  ## Conversions
  &nbsp;
  
  - To atmospheres: 1 Pa ≈ 9.8692 x 10^-6 atm

  ## Practical Applications
  &nbsp;
  
  Used universally in science and engineering to measure pressure and stress in materials.
  `,
    pound_per_square_foot: `
  # Pound Per Square Foot
  &nbsp;
  
  A unit of pressure measuring the force in pounds applied to one square foot of area.

  ## Notation
  &nbsp;
  
  Abbreviated as psf.

  ## History
  &nbsp;
  
  Used in construction and aviation for floor loading and wind pressure calculations.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 psf = 47.8803 Pa

  ## Practical Applications
  &nbsp;
  
  Crucial in architecture and civil engineering for assessing load capacity and structural integrity.
  `,
    pound_per_square_inch: `
  # Pound Per Square Inch
  &nbsp;
  
  A unit of pressure widely used in various industries to express internal pressure, stress, or mechanical load.

  ## Notation
  &nbsp;
  
  Abbreviated as psi.

  ## History
  &nbsp;
  
  Integral in the development of steam engines and still used extensively in automotive, aerospace, and industrial applications.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 psi = 6,894.76 Pa

  ## Practical Applications
  &nbsp;
  
  Commonly used to measure tire pressure, fluid dynamics in pipelines, and compression in engines.
  `,
    poundal_per_square_foot: `
  # Poundal Per Square Foot
  &nbsp;
  
  A unit of pressure in the foot-pound-second (FPS) system, where it measures the force of one poundal applied to one square foot of area.

  ## Notation
  &nbsp;
  
  Abbreviated as pdl/sq ft.

  ## History
  &nbsp;
  
  Used primarily in some niche areas of science and engineering within the United States.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 pdl/sq ft = 1.48816 Pa

  ## Practical Applications
  &nbsp;
  
  Often found in educational contexts and theoretical physics where the FPS system is studied.
  `,
    short_ton_per_square_foot: `
  # Short Ton Per Square Foot
  &nbsp;
  
  This unit measures the pressure exerted when a short ton is spread evenly over one square foot of area.

  ## Notation
  &nbsp;
  
  Commonly seen as "ton/sq ft (short)."

  ## History
  &nbsp;
  
  Used in construction and shipping, particularly in the United States.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 short ton/sq ft = 95,760 Pa

  ## Practical Applications
  &nbsp;
  
  Important in structural engineering, especially for calculating load-bearing capacities in building floors and foundations.
  `,
    torr: `
  # Torr
  &nbsp;
  
  A unit of pressure based on an absolute scale, defined as 1/760 of one atmosphere.

  ## Notation
  &nbsp;
  
  Symbolized as Torr.

  ## History
  &nbsp;
  
  Named after the Italian physicist Evangelista Torricelli, inventor of the barometer.

  ## Conversions
  &nbsp;
  
  - To pascals: 1 Torr = 133.322 Pa

  ## Practical Applications
  &nbsp;
  
  Frequently used in vacuum physics and engineering to measure pressures close to a vacuum.
  `
    
};

export default pressureArticles;
