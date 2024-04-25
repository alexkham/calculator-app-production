// areaUnits.js

const areaArticles = {
    acre: `
  # Acre
  &nbsp;
  
  An acre is a unit of area commonly used in the United States and the UK for measuring tracts of land. Traditionally, it represents the area that could be ploughed in one day with a yoke of oxen.

  ## History
  &nbsp;
  Originating from the Latin word 'ager' meaning field, the acre has been used since medieval times in England and has varied in size over time, generally being about 4,047 square meters today.

  ## Conversions
  &nbsp;
  - To square meters: 1 acre ≈ 4,046.86 square meters

  ## Practical Applications
  &nbsp;
  Widely used in real estate, agriculture, and land planning.
  `,

  are: `
  # Are
  &nbsp;
  
  An are is a metric unit of area, commonly used to measure land. One are is equivalent to 100 square meters.

  ## History
  &nbsp;
  Introduced during the French Revolution as part of the metric system, it provides a simpler alternative to the hectare for smaller plots of land.

  ## Conversions
  &nbsp;
  - To square feet: 1 are = 1076.39 square feet

  ## Practical Applications
  &nbsp;
  Often used in real estate and agriculture, particularly in some European countries.
  `,
  barn: `
  # Barn
  &nbsp;
  
  A barn is a unit of area used in nuclear physics to quantify the cross-sectional area of nuclei and nuclear reactions. It is equivalent to 10⁻²⁸ square meters.

  ## History
  &nbsp;
  The term 'barn' originates from the phrase "as big as a barn," used humorously to describe the ease of hitting a nucleus in accelerator experiments.

  ## Conversions
  &nbsp;
  - To square meters: 1 barn = 1.0 x 10⁻²⁸ square meters

  ## Practical Applications
  &nbsp;
  Primarily used in particle physics and nuclear engineering to express the probability of scattering or absorbing neutrons.
  `,

    circular_mil: `
  # Circular Mil
  &nbsp;
  
  A circular mil is a unit of area used primarily in the electrical industry to describe the cross-sectional size of a wire or a cable.

  ## History
  &nbsp;
  Derived from the area of a circle with a diameter of one mil (one thousandth of an inch), it simplifies calculations of electrical resistance and conductivity.

  ## Conversions
  &nbsp;
  - To square millimeters: 1 circular mil ≈ 0.0005067 square millimeters

  ## Practical Applications
  &nbsp;
  Crucial for determining the size and capacity of wires in electrical wiring and in specifying the thickness of cables in power installations.
  `,

  darcy: `
  # Darcy
  &nbsp;
  
  The darcy is a unit used in permeability of porous materials such as soil and rock. It measures the ease with which fluids (usually water or oil) can pass through a porous medium.

  ## History
  &nbsp;
  Named after the French engineer Henry Darcy who first described the flow of water through sand.

  ## Conversions
  &nbsp;
  - No simple conversions as it relates specifically to permeability.

  ## Practical Applications
  &nbsp;
  Crucial in the fields of hydrogeology, petroleum engineering, and civil engineering.
  `,
    hectare: `
  # Hectare
  &nbsp;
  
  The hectare is a metric unit of area defined as 10,000 square meters. It is primarily used in the measurement of land.

  ## History
  &nbsp;
  The term comes from the combination of metric prefix 'hecto-' and 'are', where 1 hectare equals 100 ares. It was first used in France in 1795.

  ## Conversions
  &nbsp;
  - To acres: 1 hectare ≈ 2.471 acres

  ## Practical Applications
  &nbsp;
  Commonly used worldwide in agriculture, forestry, and land planning to measure large plots of land.
  `,
    square_meter: `
  # Square Meter
  &nbsp;
  
  The square meter is the SI derived unit of area. It is defined as the area of a square whose sides measure exactly one meter.

  ## History
  &nbsp;
  As the standard unit of area in the International System of Units, it is used globally for a wide range of measurements.

  ## Conversions
  &nbsp;
  - To square feet: 1 square meter ≈ 10.7639 square feet

  ## Practical Applications
  &nbsp;
  Used universally in both everyday and professional contexts, including architecture, real estate, and urban planning.
  `,
    square_mile: `
  # Square Mile
  &nbsp;
  
  A square mile is an imperial and US unit of area describing the area of a square with one-mile sides. It is commonly used in the United States and the UK.

  ## History
  &nbsp;
  The square mile has been used in English-speaking countries for many centuries to describe large areas of land.

  ## Conversions
  &nbsp;
  - To square kilometers: 1 square mile ≈ 2.58999 square kilometers

  ## Practical Applications
  &nbsp;
  Often used to express the area of geographical regions such as cities or counties.
  `,
  square_foot: `
  # Square Foot
  &nbsp;
  
  A square foot is an imperial and US customary unit of area used predominantly in the United States, and to a lesser extent in the Commonwealth nations.

  ## History&nbsp;
  As part of the imperial system, it has been used historically in British Commonwealth countries and the United States for real estate and architectural purposes.

  ## Conversions&nbsp;
  - To square meters: 1 square foot = 0.092903 square meters

  ## Practical Applications&nbsp;
  Commonly used in real estate, architecture, and interior design.
  `,
  square_inch: `
  # Square Inch
  &nbsp;
  
  A square inch is an imperial and US customary unit of area, primarily used in the United States for measuring smaller surfaces like electronic components or textiles.

  ## History
  &nbsp;
  Part of the imperial system, it is used for detailed measurements in crafts and industrial applications where precision is critical.

  ## Conversions
  &nbsp;
  - To square centimeters: 1 square inch = 6.4516 square centimeters

  ## Practical Applications&nbsp;
  Widely used in industries such as manufacturing, crafts, and engineering for detailed surface measurements.
  `,
  square_rod: `
  # Square Rod
  &nbsp;
  
  A square rod is an old English unit used for measuring land area. It is equivalent to a square that is one rod on each side.

  ## History
  &nbsp;
  Historically used in the United Kingdom and the United States, it dates back to the old English system of measurement.

  ## Conversions
  &nbsp;
  - To square meters: 1 square rod ≈ 25.2929 square meters

  ## Practical Applications&nbsp;
  Mostly of historical interest today, but was traditionally used in surveying and land division, particularly in rural areas.
  `,
    square_survey_mile: `
  # Square Survey Mile
  &nbsp;
  
  The square survey mile is used primarily in U.S. land surveying. It is slightly larger than a standard square mile due to the precision required in professional surveying.

  ## History
  &nbsp;
  Developed for use in the United States Public Land Survey System to ensure consistency and accuracy in land measurements.

  ## Conversions
  &nbsp;
  - To square kilometers: 1 square survey mile ≈ 2.5907 square kilometers

  ## Practical Applications
  &nbsp;
  Used in government land surveys and legal land descriptions in the United States.
  `,

  square_yard: `
  # Square Yard
  &nbsp;
  
  The square yard is an imperial unit of area used primarily in the United Kingdom and the United States. It is defined as the area of a square with sides of one yard.

  ## History
  &nbsp;
  Has been used historically in textiles and landscaping.

  ## Conversions
  &nbsp;
  - To square meters: 1 square yard ≈ 0.836127 square meters

  ## Practical Applications
  &nbsp;
  Commonly used in measuring carpeting, flooring materials, and in some cases, outdoor land areas for gardening or landscaping.
  `,
  square_league: `
  # Square League
  &nbsp;
  
  A square league is a large unit of area historically used in parts of Latin America and the southern United States. It is based on the league, an old unit of distance that was typically about three miles long.

  ## History
  &nbsp;
  The square league was commonly used during the colonial period for measuring large tracts of land, particularly in areas under Spanish influence. It helped in managing and distributing land during colonization.

  ## Conversions
  &nbsp;
  - To square kilometers: 1 square league ≈ 34.6 square kilometers
  - To square miles: 1 square league ≈ 13.37 square miles

  ## Practical Applications
  &nbsp;
  Though largely historical now, the square league was crucial for land transactions and management in agricultural and rural development in historic contexts. It provided a measure for large-scale land areas, especially in agricultural and ranching operations.
  `,
  thomson_cross_section: `
  # Thomson Cross Section
  &nbsp;
  
  The Thomson cross section is a unit of area used in the field of atomic and nuclear physics to quantify the interaction of electromagnetic radiation with a free, unbound electron.

  ## History
  &nbsp;
  
  Named after physicist Sir J.J. Thomson, who is credited with the discovery of the electron. This cross section represents the effective area that quantifies the likelihood of scattering of photons by electrons, a fundamental concept in classical electromagnetism.

  ## Conversions
  &nbsp;
  
  - To square meters: 1 Thomson cross section ≈ 6.6524587158 x 10^-29 square meters

  ## Practical Applications
  &nbsp;
  
  It is crucial in the study of light-matter interactions, particularly in the scattering of light by electrons, which is a key area in spectroscopy and quantum mechanics. It helps in understanding phenomena such as the blue color of the sky, which results from Rayleigh scattering where the Thomson cross section provides a measure of interaction.
  `
};

export default areaArticles;
