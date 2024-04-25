// lengthUnits.js

const lengthArticles = {
    angstrom: `
  # Angstrom
  &nbsp;
  
  An angstrom is a unit of length used mainly in chemistry and physics to measure atomic-scale distances.

  ## Notation
  &nbsp;
  
  The symbol for angstrom is Å.

  ## History
  &nbsp;
  
  Named after the Swedish physicist Anders Jonas Ångström, it was widely used to describe wavelengths of light and the sizes of atoms.

  ## Conversions
  &nbsp;
  
  - To meters: 1 Å = 1 x 10^-10 meters

  ## Practical Applications
  &nbsp;
  
  Commonly used in the fields of chemistry, physics, and crystallography to specify atomic and molecular dimensions.
  `,
    angstrom_star: `
  # Angstrom Star
  &nbsp;
  
  The angstrom star is a variation of the angstrom used specifically in spectroscopy to measure spectral line displacements due to the Doppler effect.

  ## Notation
  &nbsp;
  
  The symbol for angstrom star is Å*.

  ## History
  &nbsp;
  
  It is a specialized unit developed to provide precise measurements in astronomical spectroscopy.

  ## Conversions
  &nbsp;
  
  - To angstrom: 1 Å* = 1 Å

  ## Practical Applications
  &nbsp;
  
  Used primarily in astrophysics and spectroscopy to measure shifts in spectral lines that indicate motion relative to the observer.
  `,
    astronomical_unit: `
  # Astronomical Unit
  &nbsp;
  
  An astronomical unit (AU) is a unit of length based on the average distance from Earth to the Sun, used to measure distances within our solar system.

  ## Notation
  &nbsp;
  
  The symbol for astronomical unit is AU.

  ## History
  &nbsp;
  
  The concept of the astronomical unit has been used since the 17th century to simplify astronomical observations of planetary orbits.

  ## Conversions
  &nbsp;
  
  - To kilometers: 1 AU ≈ 149,597,870.7 kilometers

  ## Practical Applications
  &nbsp;
  
  Essential in astronomy for expressing distances between objects in the solar system and for navigating space missions.
  `,
    bohr: `
  # Bohr
  &nbsp;
  
  The Bohr is a unit of length named after the physicist Niels Bohr, used in quantum physics to describe the sizes of atomic shells and subatomic particles.

  ## Notation
  &nbsp;
  
  The symbol for Bohr is a0 (Bohr radius).

  ## History
  &nbsp;
  
  Introduced in the early 20th century as part of Bohr's model of the atom.

  ## Conversions
  &nbsp;
  
  - To meters: 1 a0 = 0.529177 x 10^-10 meters

  ## Practical Applications
  &nbsp;
  
  Predominantly used in atomic physics and quantum chemistry to describe electron orbits and interactions at quantum scales.
  `,
    cables_length: `
  # Cable's Length
  &nbsp;
  
  A cable's length, historically known as cable length, is a nautical unit of measure used to define the length of a ship's cable or the distance at sea.

  ## Notation
  &nbsp;
  
  There is no specific symbol, but it is often abbreviated as "cable".

  ## History
  &nbsp;
  
  The term originates from the length of a ship's anchor cable in the Age of Sail.

  ## Conversions
  &nbsp;
  
  - To meters: 1 cable ≈ 185.2 meters (British standard)

  ## Practical Applications
  &nbsp;
  
  Used in maritime navigation to estimate ship distances during navigation and docking procedures.
  `,
  centimeter: `
  # Centimeter
  &nbsp;
  
  The centimeter is a unit of length in the metric system, equal to one-hundredth of a meter.

  ## Notation
  &nbsp;
  
  The symbol for centimeter is cm.

  ## History
  &nbsp;
  
  Introduced in the 19th century as part of the metric system to provide a standard of measurement based on the decimal system.

  ## Conversions
  &nbsp;
  
  - To inches: 1 cm ≈ 0.393701 inches

  ## Practical Applications
  &nbsp;
  
  Widely used in everyday measurements, science, and engineering, particularly in countries that follow the metric system.
  `,
    chain: `
  # Chain
  &nbsp;
  
  A chain is a unit of length, traditionally used in surveying. It measures 66 feet or 22 yards.

  ## Notation
  &nbsp;
  
  The symbol for chain is ch.

  ## History
  &nbsp;
  
  Developed by English engineer Edmund Gunter in the early 17th century for land measurement.

  ## Conversions
  &nbsp;
  
  - To meters: 1 chain = 20.1168 meters

  ## Practical Applications
  &nbsp;
  
  Still used in some surveying applications and in the measurement of cricket pitches.
  `,
    cicero: `
  # Cicero
  &nbsp;
  
  Cicero is a historical unit of measurement in typography, roughly equivalent to the point system.

  ## Notation
  &nbsp;
  
  The symbol for cicero is not standardized, often referred to simply as cicero.

  ## History
  &nbsp;
  
  Named after the Roman orator Cicero, it was used predominantly in European typesetting before the adoption of the point system.

  ## Conversions
  &nbsp;
  
  - To points: 1 cicero ≈ 12 points

  ## Practical Applications
  &nbsp;
  
  Used primarily in historical and academic studies of typesetting and printing.
  `,
    classical_electron_radius: `
  # Classical Electron Radius
  &nbsp;
  
  The classical electron radius is a measure used in physics to describe the scale of the electron's interaction with electromagnetic fields.

  ## Notation
  &nbsp;
  
  Often abbreviated as rₑ.

  ## History
  &nbsp;
  
  Derived from classical theories of physics, providing a scale to measure effects involving electrons.

  ## Conversions
  &nbsp;
  
  - To meters: 1 rₑ ≈ 2.81794 x 10^-15 meters

  ## Practical Applications
  &nbsp;
  
  Important in theoretical physics and calculations involving electromagnetic interactions at subatomic scales.
  `,
    css_pixel: `
  # CSS Pixel
  &nbsp;
  
  The CSS pixel is a digital unit of measurement used in web design and electronic displays to specify the size of fonts, elements, and layouts.

  ## Notation
  &nbsp;
  
  Typically abbreviated as px.

  ## History
  &nbsp;
  
  Developed with the rise of digital computing and the internet as a standard for web developers to control layout precisely across different display devices.

  ## Conversions
  &nbsp;
  
  - To inches (assuming 96 DPI): 1 px = 1/96 inches

  ## Practical Applications
  &nbsp;
  
  Essential in web design, graphic design, and user interface design to ensure consistency across varying display technologies.
  `,
  
  decimeter: `
  # Decimeter
  &nbsp;
  
  A decimeter is a unit of length in the metric system, equal to one-tenth of a meter.

  ## Notation
  &nbsp;
  
  The symbol for decimeter is dm.

  ## History
  &nbsp;
  
  Introduced as part of the metric system during the French Revolution, the decimeter provides a medium-scale measurement, bridging the gap between centimeters and meters.

  ## Conversions
  &nbsp;
  
  - To inches: 1 dm ≈ 3.93701 inches

  ## Practical Applications
  &nbsp;
  
  Commonly used in geology, biology, and other sciences where intermediate measurements are required.
  `,
    didot: `
  # Didot
  &nbsp;
  
  The Didot is a unit of length used in typography, particularly in Europe, and is named after the French printer and typographer François-Ambroise Didot.

  ## Notation
  &nbsp;
  
  There is no widely recognized symbol for the Didot; it is typically just referred to as Didot.

  ## History
  &nbsp;
  
  Developed by the Didot family in the early 19th century, it was used to standardize typesetting measurements in France and subsequently across Europe.

  ## Conversions
  &nbsp;
  
  - To points: 1 Didot ≈ 1.06575 points (the point being another typographical measure)

  ## Practical Applications
  &nbsp;
  
  Used primarily in the printing and typesetting industries to specify font sizes, leading, and other layout dimensions.
  `,
  fathom: `
  # Fathom
  &nbsp;
  
  A fathom is a unit of length used in nautical settings to measure the depth of water.

  ## Notation
  &nbsp;
  
  There is no specific symbol, but it is commonly abbreviated as "fth" or "fm."

  ## History
  &nbsp;
  
  Historically used by sailors for centuries, the unit originates from the measurement of a man's outstretched arms.

  ## Conversions
  &nbsp;
  
  - To meters: 1 fathom = 1.8288 meters

  ## Practical Applications
  &nbsp;
  
  Primarily used in maritime activities such as anchoring, dredging, and underwater exploration.
  `,
    femtometer: `
  # Femtometer
  &nbsp;
  
  Also known as a fermi, a femtometer is a unit of length used in nuclear physics to measure nuclear distances.

  ## Notation
  &nbsp;
  
  The symbol for femtometer is fm.

  ## History
  &nbsp;
  
  Named after Enrico Fermi, this unit is useful for describing the scale of atomic nuclei and subatomic particles.

  ## Conversions
  &nbsp;
  
  - To meters: 1 fm = 1 x 10^-15 meters

  ## Practical Applications
  &nbsp;
  
  Essential in fields like particle physics and nuclear engineering for describing the size of atomic structures.
  `,
    foot: `
  # Foot
  &nbsp;
  
  The foot is a unit of length in the imperial and US customary systems.

  ## Notation
  &nbsp;
  
  The symbol for foot is ft.

  ## History
  &nbsp;
  
  Originating from the size of a human foot, it has been used in many different cultures throughout history, standardized in modern times to 12 inches.

  ## Conversions
  &nbsp;
  
  - To meters: 1 foot = 0.3048 meters

  ## Practical Applications
  &nbsp;
  
  Widely used in the United States, the United Kingdom, and Canada for many everyday applications including building construction, human height measurement, and aviation.
  `,
    furlong: `
  # Furlong
  &nbsp;
  
  A furlong is a measure of distance used traditionally in agriculture and horse racing.

  ## Notation
  &nbsp;
  
  There is no specific symbol, but it is commonly abbreviated as "fur."

  ## History
  &nbsp;
  
  Originating from the Old English word 'furh' meaning furrow and 'lang' meaning long, it was originally the length of a furrow in one acre of a ploughed open field.

  ## Conversions
  &nbsp;
  
  - To meters: 1 furlong = 201.168 meters

  ## Practical Applications
  &nbsp;
  
  Although largely historical, it is still used in horse racing in some countries.
  `,
    hand: `
  # Hand
  &nbsp;
  
  The hand is a unit of measure traditionally used to measure the height of horses.

  ## Notation
  &nbsp;
  
  The symbol for hand is h or hd.

  ## History
  &nbsp;
  
  Historically based on the breadth of a human hand, it is standardized to four inches.

  ## Conversions
  &nbsp;
  
  - To centimeters: 1 hand = 10.16 cm

  ## Practical Applications
  &nbsp;
  
  Commonly used in English-speaking countries to express the height of horses.
  `,
    inch: `
  # Inch
  &nbsp;
  
  An inch is a unit of length in the imperial and US customary systems of measurement.

  ## Notation
  &nbsp;
  
  The symbol for inch is in.

  ## History
  &nbsp;
  
  Derived from the Latin word 'uncia,' which was one-twelfth of the Roman foot.

  ## Conversions
  &nbsp;
  
  - To centimeters: 1 inch = 2.54 cm

  ## Practical Applications
  &nbsp;
  
  Used extensively in the United States and the United Kingdom for a variety of measurements, including screen sizes, fabric dimensions, and machine parts.
  `,

  kilometer: `
  # Kilometer
  &nbsp;
  
  A kilometer is a unit of length in the metric system, equal to one thousand meters.

  ## Notation
  &nbsp;
  
  The symbol for kilometer is km.

  ## History
  &nbsp;
  
  Introduced during the adoption of the metric system in France in the late 18th century, it is used globally for measuring long distances.

  ## Conversions
  &nbsp;
  
  - To miles: 1 kilometer ≈ 0.621371 miles

  ## Practical Applications
  &nbsp;
  
  Commonly used in road measurements, geography, and athletic events such as running races.
  `,
    lattice_spacing_of_si: `
  # Lattice Spacing of Si
  &nbsp;
  
  Lattice spacing of silicon refers to the distance between atoms in a silicon crystal lattice, crucial in semiconductor physics.

  ## Notation
  &nbsp;
  
  Typically measured in angstroms (Å).

  ## History
  &nbsp;
  
  The precise measurement of lattice constants in materials like silicon is critical for the development of semiconductor devices.

  ## Conversions
  &nbsp;
  
  - To angstroms: Typical lattice spacing for silicon is around 5.431 Å.

  ## Practical Applications
  &nbsp;
  
  Used in the design and manufacturing of semiconductors and understanding material properties in solid-state physics.
  `,
    league: `
  # League
  &nbsp;
  
  A league is an old unit of distance used to measure land, defined as the distance a person could walk in an hour.

  ## Notation
  &nbsp;
  
  There is no specific symbol, and its length varied from region to region.

  ## History
  &nbsp;
  
  Historically used in Europe and the Americas, its length varied typically between three to five miles.

  ## Conversions
  &nbsp;
  
  - To kilometers: 1 league (average) ≈ 4.828 kilometers

  ## Practical Applications
  &nbsp;
  
  Largely historical but still referenced in literature and historical documents.
  `,
    light_year: `
  # Light Year
  &nbsp;
  
  A light year is a unit of astronomical distance that light travels in one year in a vacuum.

  ## Notation
  &nbsp;
  
  The symbol for light year is ly.

  ## History
  &nbsp;
  
  Used to express astronomical distances that are otherwise too large to conveniently describe in standard units like kilometers or miles.

  ## Conversions
  &nbsp;
  
  - To kilometers: 1 light year ≈ 9.461 x 10^12 kilometers

  ## Practical Applications
  &nbsp;
  
  Essential for describing distances in space between stars and galaxies in astronomy.
  `,
    link: `
  # Link
  &nbsp;
  
  A link is a traditional unit of length, used especially in land surveying, equal to 1/100 of a chain.

  ## Notation
  &nbsp;
  
  The symbol for link is lk.

  ## History
  &nbsp;
  
  Originally part of the surveying chain system developed by Gunter in the 17th century.

  ## Conversions
  &nbsp;
  
  - To meters: 1 link = 0.201168 meters

  ## Practical Applications
  &nbsp;
  
  Still used in some surveying applications and in the legal descriptions of land.
  `,
    meter: `
  # Meter
  &nbsp;
  
  The meter is the base unit of length in the International System of Units (SI).

  ## Notation
  &nbsp;
  
  The symbol for meter is m.

  ## History
  &nbsp;
  
  Established in 1799 during the French Revolution, based on measurements of the Earth's meridian.

  ## Conversions
  &nbsp;
  
  - To feet: 1 meter = 3.28084 feet

  ## Practical Applications
  &nbsp;
  
  Used globally in almost every application involving measurement of length, including engineering, construction, and everyday measurements.
  `,
    micrometer: `
  # Micrometer
  &nbsp;
  
  A micrometer, also known as a micron, is a unit of length in the metric system, equal to one millionth of a meter.

  ## Notation
  &nbsp;
  
  The symbol for micrometer is µm.

  ## History
  &nbsp;
  
  Used extensively in science and engineering for measuring very small distances, such as the wavelengths of infrared radiation.

  ## Conversions
  &nbsp;
  
  - To inches: 1 µm = 3.93701 x 10^-5 inches

  ## Practical Applications
  &nbsp;
  
  Crucial in fields like microbiology, engineering, and technology, particularly in the manufacturing of semiconductor devices.
  `,
    mile: `
  # Mile
  &nbsp;
  
  The mile is a unit of length in the imperial system primarily used in the United States and the United Kingdom.

  ## Notation
  &nbsp;
  
  The symbol for mile is mi.

  ## History
  &nbsp;
  
  Originates from the Roman mille passus, or 'thousand paces', which was measured as 5,000 Roman feet.

  ## Conversions
  &nbsp;
  
  - To kilometers: 1 mile = 1.60934 kilometers

  ## Practical Applications
  &nbsp;
  
  Widely used in road and distance measurements in countries using the imperial system.
  `,
  millimeter: `
  # Millimeter
  &nbsp;
  
  The millimeter is a metric unit of length, equivalent to one-thousandth of a meter.

  ## Notation
  &nbsp;
  
  The symbol for millimeter is mm.

  ## History
  &nbsp;
  
  Part of the metric system adopted in France in the late 18th century, widely used globally for precise measurements.

  ## Conversions
  &nbsp;
  
  - To inches: 1 mm = 0.03937 inches

  ## Practical Applications
  &nbsp;
  
  Used in engineering, technology, and everyday measurements for small-scale objects.
  `,
    nautical_mile: `
  # Nautical Mile
  &nbsp;
  
  A nautical mile is based on the circumference of the Earth and is used in aviation and maritime navigation.

  ## Notation
  &nbsp;
  
  The symbol for nautical mile is NM.

  ## History
  &nbsp;
  
  Historically defined as one minute of latitude along any meridian.

  ## Conversions
  &nbsp;
  
  - To kilometers: 1 NM = 1.852 kilometers

  ## Practical Applications
  &nbsp;
  
  Essential for calculating distances in navigation and international law regarding territorial waters.
  `,
    parsec: `
  # Parsec
  &nbsp;
  
  The parsec is a unit of distance used in astronomy to describe distances beyond our solar system, derived from parallax-second.

  ## Notation
  &nbsp;
  
  The symbol for parsec is pc.

  ## History
  &nbsp;
  
  Coined from the method of parallax to measure stellar distances using the Earth's orbit as a baseline.

  ## Conversions
  &nbsp;
  
  - To light years: 1 pc ≈ 3.26 light years

  ## Practical Applications
  &nbsp;
  
  Used to express distances between stars and galaxies, fundamental in the field of astrophysics.
  `,
    pica: `
  # Pica
  &nbsp;
  
  In typography, a pica is a unit of measure equal to approximately 1/6 of an inch.

  ## Notation
  &nbsp;
  
  Typically used in the context of fonts and point sizes, the symbol for pica is p.

  ## History
  &nbsp;
  
  Originates from the printing industry, historically important in typesetting for defining the size of text.

  ## Conversions
  &nbsp;
  
  - To points: 1 pica = 12 points

  ## Practical Applications
  &nbsp;
  
  Essential in graphic design, publishing, and digital typesetting to define text sizes and layout.
  `,
    planck_length: `
  # Planck Length
  &nbsp;
  
  The Planck length is the scale at which classical ideas about gravity and space-time cease to be valid, and quantum effects dominate.

  ## Notation
  &nbsp;
  
  The symbol for Planck length is ℓP.

  ## History
  &nbsp;
  
  Named after Max Planck, the founder of quantum theory. It represents the smallest measure of length with any physical significance.

  ## Conversions
  &nbsp;
  
  - To meters: 1 ℓP ≈ 1.616255 x 10^-35 meters

  ## Practical Applications
  &nbsp;
  
  Mostly theoretical, used in physics to discuss concepts in quantum mechanics and theories of gravitation like string theory.
  `,

  point: `
  # Point
  &nbsp;
  
  In typography, a point is a unit of length typically used to specify the size of type. One point is approximately 1/72 of an inch.

  ## Notation
  &nbsp;
  
  The symbol for point is pt.

  ## History
  &nbsp;
  
  Originates from the printing industry and has been standardized in different countries with slight variations. The most commonly used today is the PostScript point.

  ## Conversions
  &nbsp;
  
  - To inches: 1 pt = 1/72 inches
  - To millimeters: 1 pt ≈ 0.352778 mm

  ## Practical Applications
  &nbsp;
  
  Used in desktop publishing, graphic design, and typography to measure font size and spacing.
  `,
    rod: `
  # Rod
  &nbsp;
  
  A rod, also known as a pole or perch, is a historical unit of length used in surveying. It is equal to 5.5 yards or 16.5 feet.

  ## Notation
  &nbsp;
  
  The symbol for rod is rd.

  ## History
  &nbsp;
  
  Historically used in agricultural land measurement in the English-speaking world.

  ## Conversions
  &nbsp;
  
  - To meters: 1 rd = 5.0292 meters

  ## Practical Applications
  &nbsp;
  
  Though largely obsolete, rods are still used in some legal contexts and in rural land assessments.
  `,
    scaled_point: `
  # Scaled Point
  &nbsp;
  
  A scaled point (sp) is a digital unit of measurement in typesetting, smaller than a point, used primarily with TeX computer typesetting system.

  ## Notation
  &nbsp;
  
  The symbol for scaled point is sp.

  ## History
  &nbsp;
  
  Introduced by Donald Knuth as part of TeX, it allows for extremely precise measurements in typesetting.

  ## Conversions
  &nbsp;
  
  - To points: 1 sp = 1/65536 pt

  ## Practical Applications
  &nbsp;
  
  Used in high-precision digital typesetting to ensure exact text placement and layout consistency across various printing technologies and display types.
  `,
    statfarad: `
  # Statfarad
  &nbsp;
  
  The statfarad is not a unit of length but a unit of capacitance in the electrostatic system of units (cgs). It measures the capacitance that, when charged with one statcoulomb, results in a potential difference of one statvolt.

  ## Notation
  &nbsp;
  
  The symbol for statfarad is statF.

  ## History
  &nbsp;
  
  Derived from the cgs (centimeter-gram-second) system, which was used before the widespread adoption of the SI system.

  ## Conversions
  &nbsp;
  
  - To farads: 1 statF ≈ 1.11265 x 10^-12 F

  ## Practical Applications
  &nbsp;
  
  Mainly of historical interest; used in teaching classical electromagnetism in academic settings.
  `,
    survey_foot: `
  # Survey Foot
  &nbsp;
  
  The survey foot is a unit of length formerly used in the United States for geodetic surveying. It is defined as exactly 0.3048006 meters.

  ## Notation
  &nbsp;
  
  The symbol for the survey foot is ft (survey).

  ## History
  &nbsp;
  
  Used to ensure consistency with older surveys that used a slightly different definition of the foot.

  ## Conversions
  &nbsp;
  
  - To meters: 1 survey ft = 0.3048006 m

  ## Practical Applications
  &nbsp;
  
  Phased out in favor of the international foot but was critical in mapping and property surveys in the United States.
  `,

  survey_mile: `
  # Survey Mile
  &nbsp;
  
  The survey mile is a unit of length formerly used in the United States for land surveying. It is slightly longer than the standard mile.

  ## Notation
  &nbsp;
  
  The symbol for survey mile is usually denoted as mi (survey).

  ## History
  &nbsp;
  
  Used in conjunction with the survey foot, it was designed to ensure consistency with historical measurements based on slightly different standards.

  ## Conversions
  &nbsp;
  
  - To meters: 1 survey mile = 1609.347 meters

  ## Practical Applications
  &nbsp;
  
  Mainly historical but was important in property surveys and official measurements before transitioning to the standard mile.
  `,
    tex_cicero: `
  # Tex Cicero
  &nbsp;
  
  Tex Cicero is a unit of measure used in TeX typesetting for defining the size of text, based on the traditional cicero unit.

  ## Notation
  &nbsp;
  
  It is often represented in TeX programming without a specific symbol but used with definitions in TeX scripts.

  ## History
  &nbsp;
  
  Adapted for digital typesetting by Donald Knuth, it allows for precise control over typesetting in the TeX system.

  ## Conversions
  &nbsp;
  
  - To points: 1 Tex Cicero = 12 Tex Points

  ## Practical Applications
  &nbsp;
  
  Used in digital typesetting within the TeX system, particularly in academic publications and complex documents.
  `,
    tex_didot: `
  # Tex Didot
  &nbsp;
  
  Tex Didot is another unit used in TeX typesetting, tailored to accommodate the Didot system's point size, common in European typesetting.

  ## Notation
  &nbsp;
  
  Like other TeX measurements, it does not have a standard symbol but is used in TeX programming.

  ## History
  &nbsp;
  
  Integrates the Didot system into TeX for consistency in document preparation across different typographic standards.

  ## Conversions
  &nbsp;
  
  - To points: 1 Tex Didot = 1.07 points

  ## Practical Applications
  &nbsp;
  
  Facilitates typesetting and layout consistency in European academic and publishing sectors using TeX.
  `,
    tex_pica: `
  # Tex Pica
  &nbsp;
  
  In TeX typesetting, the Tex Pica is used to define the size of text, aligning with the traditional pica unit but adapted for digital typesetting precision.

  ## Notation
  &nbsp;
  
  Typically used in TeX programming without a specific symbol.

  ## History
  &nbsp;
  
  Provides a bridge between traditional pica measurements and modern digital typesetting requirements.

  ## Conversions
  &nbsp;
  
  - To points: 1 Tex Pica = 12 Tex Points

  ## Practical Applications
  &nbsp;
  
  Critical in the TeX digital typesetting system for designing and adjusting text layout.
  `,
    tex_point: `
  # Tex Point
  &nbsp;
  
  The Tex Point is a measurement unit in the TeX typesetting system, designed to offer high precision in digital document formatting.

  ## Notation
  &nbsp;
  
  Commonly referred to as pt in TeX programming.

  ## History
  &nbsp;
  
  Introduced by Donald Knuth as part of the TeX typesetting system, providing finer control over text sizing than traditional points.

  ## Conversions
  &nbsp;
  
  - To inches: 1 Tex Point ≈ 0.0138 inches

  ## Practical Applications
  &nbsp;
  
  Utilized extensively in the TeX system for precise typographic work in scholarly documents and detailed typesetting.
  `,
    thou: `
  # Thou
  &nbsp;
  
  A thou is a unit of length equal to one-thousandth of an inch, used primarily in engineering and manufacturing.

  ## Notation
  &nbsp;
  
  The symbol for thou is th.

  ## History
  &nbsp;
  
  Derived from the term "thousandth," it's used predominantly in the United Kingdom and the United States.

  ## Conversions
  &nbsp;
  
  - To millimeters: 1 thou = 0.0254 mm

  ## Practical Applications
  &nbsp;
  
  Essential in precision engineering, especially in machining and manufacturing processes where fine tolerances are critical.
  `,
    x_unit_cu: `
  # X Unit (Cu)
  &nbsp;
  
  The X Unit (Cu) is used to measure atomic distances and bond lengths in crystallography, based on copper X-ray wavelength emissions.

  ## Notation
  &nbsp;
  
  Symbolized as XU (Cu).

  ## History
  &nbsp;
  
  Developed as a precise measurement method in X-ray crystallography, providing detailed insights into crystal structures.

  ## Conversions
  &nbsp;
  
  - To meters: 1 XU (Cu) = 1.002 x 10^-13 meters

  ## Practical Applications
  &nbsp;
  
  Critical in molecular biology and materials science for determining the structures of crystals and complex molecules.
  `,
    x_unit_mo: `
  # X Unit (Mo)
  &nbsp;
  
  Similar to the X Unit (Cu), the X Unit (Mo) is used in crystallography, specifically based on molybdenum X-ray wavelength emissions.

  ## Notation
  &nbsp;
  
  Often represented as XU (Mo).

  ## History
  &nbsp;
  
  Utilized to provide greater precision in measurements of atomic structures where molybdenum X-rays are used.

  ## Conversions
  &nbsp;
  
  - To meters: 1 XU (Mo) = 1.00206 x 10^-13 meters

  ## Practical Applications
  &nbsp;
  
  Important for high-resolution crystallographic studies, especially in chemistry and materials science.
  `,
    yard: `
  # Yard
  &nbsp;
  
  The yard is a unit of length in both the imperial and US customary systems, equivalent to three feet or thirty-six inches.

  ## Notation
  &nbsp;
  
  The symbol for yard is yd.

  ## History
  &nbsp;
  
  Its use dates back to the early medieval period as a measure of length for textiles and land.

  ## Conversions
  &nbsp;
  
  - To meters: 1 yard = 0.9144 meters

  ## Practical Applications
  &nbsp;
  
  Used in the United States, the United Kingdom, and other countries for various measurements including fabric, fencing, and field lengths.
  `,
  fermi: `
  # Fermi
  &nbsp;
  
  A Fermi, equivalent to a femtometer, is a unit of length used primarily in nuclear physics to measure the size of atomic nuclei and the scale of subatomic processes.

  ## Notation
  &nbsp;
  
  The symbol for Fermi is fm.

  ## History
  &nbsp;
  
  Named after the Italian physicist Enrico Fermi, it is crucial for expressing measurements that are on the scale of nuclear particles.

  ## Conversions
  &nbsp;
  
  - To meters: 1 Fermi = 1 x 10^-15 meters

  ## Practical Applications
  &nbsp;
  
  Widely used in fields like particle physics and nuclear engineering to describe the dimensions of atomic nuclei, the range of nuclear forces, and the sizes of other subatomic particles.
  `
};

export default lengthArticles;
