// densityUnits.js

const densityArticles = {
    gram_per_cubic_centimeter: `
  # Gram Per Cubic Centimeter
  &nbsp;
  
  A unit of density commonly used in chemistry and physics to express the mass of a substance per unit volume.

  ## Notation
  &nbsp;
  
  Abbreviated as g/cm³.

  ## Practical Applications
  &nbsp;
  
  Frequently used in material science, geology, and engineering to specify the density of various materials.
  `,
    gram_per_cubic_meter: `
  # Gram Per Cubic Meter
  &nbsp;
  
  The gram per cubic meter is a metric unit of density, measuring very light substances.

  ## Notation
  &nbsp;
  
  Abbreviated as g/m³.

  ## Practical Applications
  &nbsp;
  
  Used in environmental science, meteorology, and in industries dealing with gases and very light materials.
  `,
    gram_per_liter: `
  # Gram Per Liter
  &nbsp;
  
  A unit of density used to express the concentration of a chemical in a solution or the density of other fluids.

  ## Notation
  &nbsp;
  
  Abbreviated as g/L.

  ## Practical Applications
  &nbsp;
  
  Essential in chemistry for preparing solutions and in healthcare for specifying blood solute concentrations.
  `,
    gram_per_milliliter: `
  # Gram Per Milliliter
  &nbsp;
  
  A unit of density often used in smaller scale or more precise laboratory measurements.

  ## Notation
  &nbsp;
  
  Abbreviated as g/mL.

  ## Practical Applications
  &nbsp;
  
  Used in pharmacology, cooking, and any application requiring precise density measurements in small quantities.
  `,
    kilogram_per_cubic_centimeter: `
  # Kilogram Per Cubic Centimeter
  &nbsp;
  
  An extremely high unit of density, indicating the mass in kilograms per cubic centimeter of volume.

  ## Notation
  &nbsp;
  
  Abbreviated as kg/cm³.

  ## Practical Applications
  &nbsp;
  
  Used for very dense materials in scientific research, such as in studies involving rare or exotic substances.
  `,
    kilogram_per_cubic_meter: `
  # Kilogram Per Cubic Meter
  &nbsp;
  
  The SI unit of density, used for measuring the mass of a substance per unit volume.

  ## Notation
  &nbsp;
  
  Abbreviated as kg/m³.

  ## Practical Applications
  &nbsp;
  
  Commonly used in various industries, including construction and logistics, to calculate load volumes, shipping costs, and material properties.
  `,
    kilogram_per_liter: `
  # Kilogram Per Liter
  &nbsp;
  
  A unit of density that measures the mass in kilograms per liter of volume.

  ## Notation
  &nbsp;
  
  Abbreviated as kg/L.

  ## Practical Applications
  &nbsp;
  
  Typically used in the chemical industry and in fluid dynamics to measure the density of liquids compared to water.
  `,
    ounce_per_cubic_foot: `
  # Ounce Per Cubic Foot
  &nbsp;
  
  A unit of density measuring the number of ounces per cubic foot.

  ## Notation
  &nbsp;
  
  Abbreviated as oz/ft³.

  ## Practical Applications
  &nbsp;
  
  Useful in industries like textile and manufacturing where lightweight materials are measured in large volumes.
  `,
    ounce_per_cubic_inch: `
  # Ounce Per Cubic Inch
  &nbsp;
  
  A unit of density that measures the number of ounces per cubic inch.

  ## Notation
  &nbsp;
  
  Abbreviated as oz/in³.

  ## Practical Applications
  &nbsp;
  
  Often used in the aerospace and automotive industries where precise measurements of dense materials are required.
  `,
  ounce_per_gallon_imperial: `
  # Ounce Per Gallon Imperial
  &nbsp;
  
  A unit of density measuring the number of ounces per Imperial gallon.

  ## Notation
  &nbsp;
  
  Abbreviated as oz/gal (Imp).

  ## Practical Applications
  &nbsp;
  
  Commonly used in the UK for applications in brewing, fuel economy calculations, and cooking.
  `,
    ounce_per_gallon_us_fluid: `
  # Ounce Per Gallon U.S. Fluid
  &nbsp;
  
  A unit of density that measures the number of ounces per U.S. fluid gallon.

  ## Notation
  &nbsp;
  
  Abbreviated as oz/gal (US).

  ## Practical Applications
  &nbsp;
  
  Used in the United States for various applications including automotive fluids, food recipes, and chemical mixtures.
  `,
    pound_per_cubic_foot: `
  # Pound Per Cubic Foot
  &nbsp;
  
  A unit of density measuring the weight of a material per cubic foot.

  ## Notation
  &nbsp;
  
  Abbreviated as lb/ft³.

  ## Practical Applications
  &nbsp;
  
  Frequently used in construction and materials science for measuring the density of building materials such as concrete and wood.
  `,
    pound_per_cubic_inch: `
  # Pound Per Cubic Inch
  &nbsp;
  
  A unit of density that measures the weight of a material per cubic inch.

  ## Notation
  &nbsp;
  
  Abbreviated as lb/in³.

  ## Practical Applications
  &nbsp;
  
  Essential in the aerospace and automotive industries where high-density materials are common, such as in engine components.
  `,
    pound_per_gallon_imperial: `
  # Pound Per Gallon Imperial
  &nbsp;
  
  A unit of density measuring the weight of a material per Imperial gallon.

  ## Notation
  &nbsp;
  
  Abbreviated as lb/gal (Imp).

  ## Practical Applications
  &nbsp;
  
  Used in the UK for measuring the density of liquids such as fuel, lubricants, and other chemicals.
  `,
    pound_per_gallon_us_fluid: `
  # Pound Per Gallon U.S. Fluid
  &nbsp;
  
  A unit of density that measures the weight of a material per U.S. fluid gallon.

  ## Notation
  &nbsp;
  
  Abbreviated as lb/gal (US).

  ## Practical Applications
  &nbsp;
  
  Common in the United States for measuring the density of paints, fuels, and other commercial liquids.
  `,
    slug_per_cubic_foot: `
  # Slug Per Cubic Foot
  &nbsp;
  
  A unit of density in the British gravitational system, measuring the number of slugs per cubic foot.

  ## Notation
  &nbsp;
  
  Abbreviated as slug/ft³.

  ## Practical Applications
  &nbsp;
  
  Used in mechanical engineering and aerospace industries, particularly in the U.S., for calculating weight distributions in structures.
  `,
    ton_per_cubic_yard_long: `
  # Ton Per Cubic Yard Long
  &nbsp;
  
  A unit of density used to measure the weight of a material per cubic yard using the long ton (British).

  ## Notation
  &nbsp;
  
  Abbreviated as ton/yd³ (long).

  ## Practical Applications
  &nbsp;
  
  Commonly used in the UK and some Commonwealth countries in industries such as mining and construction for materials like sand, soil, and gravel.
  `,
    ton_per_cubic_yard_short: `
  # Ton Per Cubic Yard Short
  &nbsp;
  
  A unit of density used to measure the weight of a material per cubic yard using the short ton (U.S.).

  ## Notation
  &nbsp;
  
  Abbreviated as ton/yd³ (short).

  ## Practical Applications
  &nbsp;
  
  Widely used in the United States for industrial applications, particularly in construction and landscaping for materials such as aggregate and mulch.
  `
};

export default densityArticles;
