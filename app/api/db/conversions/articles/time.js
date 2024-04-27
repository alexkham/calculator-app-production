// timeUnits.js

const timeArticles = {
    atomic_unit_of_time: `
  # Atomic Unit of Time
  &nbsp;
  
  The atomic unit of time (au) is a standard unit of time used in atomic physics, based on the period of electron transitions between energy levels of an atom.

  ## Notation
  &nbsp;
  
  Symbolized as au.

  ## History
  &nbsp;
  
  Developed to simplify the mathematical formulations of quantum mechanics and to provide a natural unit system for describing atomic phenomena.

  ## Conversions
  &nbsp;
  
  - To seconds: 1 au ≈ 2.419 x 10^-17 seconds

  ## Practical Applications
  &nbsp;
  
  Essential in the field of quantum physics and spectroscopy for timing extremely fast events on the atomic scale.
  `,
    century: `
  # Century
  &nbsp;
  
  A century is a period of 100 years. It is commonly used in historical and genealogical contexts.

  ## Notation
  &nbsp;
  
  Not typically abbreviated, referred to as "century."

  ## History
  &nbsp;
  
  The concept of a century has been used since the Roman times when it referred to a group of 100 soldiers. Over time, it evolved into a measure of time.

  ## Conversions
  &nbsp;
  
  - To years: 1 century = 100 years

  ## Practical Applications
  &nbsp;
  
  Widely used in historical analysis, planning, and demography to mark significant periods of human development.
  `,
    common_year: `
  # Common Year
  &nbsp;
  
  A common year in the Gregorian calendar consists of 365 days, as opposed to a leap year which has 366.

  ## Notation
  &nbsp;
  
  Not abbreviated; referred to as "common year."

  ## History
  &nbsp;
  
  The Gregorian calendar was introduced in 1582 to correct for the annual drift in the Julian calendar by adjusting the frequency of leap years.

  ## Conversions
  &nbsp;
  
  - To days: 1 common year = 365 days

  ## Practical Applications
  &nbsp;
  
  The common year is the standard calendar year used for most organizational and civil purposes.
  `,
    day: `
  # Day
  &nbsp;
  
  A day is the time it takes for the Earth to complete one rotation on its axis, approximately 24 hours.

  ## Notation
  &nbsp;
  
  Abbreviated as "d."

  ## History
  &nbsp;
  
  Ancient civilizations defined a day as the period between two noons or sunsets, depending on the culture.

  ## Conversions
  &nbsp;
  
  - To hours: 1 day = 24 hours

  ## Practical Applications
  &nbsp;
  
  Fundamental to the civil timekeeping and the basis of daily human activities and biological cycles.
  `,
    eon: `
  # Eon
  &nbsp;
  
  An eon represents the largest division of geologic time, comprising several eras, often lasting several hundred million years.

  ## Notation
  &nbsp;
  
  Not typically abbreviated.

  ## History
  &nbsp;
  
  Derived from the Greek word "aeon" meaning "age," "vital force," or "being," it is used in geology to discuss the temporal span of the Earth's formation.

  ## Conversions
  &nbsp;
  
  No direct conversion to smaller time units due to its variable length based on geological and cosmological context.

  ## Practical Applications
  &nbsp;
  
  Used in geology and paleontology to discuss the broadest time scales in the Earth's history and the evolution of life.
  `,
  fortnight: `
  # Fortnight
  &nbsp;
  
  A fortnight is a unit of time commonly used in Britain and other Commonwealth countries to describe a period of two weeks.

  ## Notation
  &nbsp;
  
  Not typically abbreviated; referred to simply as "fortnight."

  ## History
  &nbsp;
  
  The term derives from the Old English expression "fēowertyne niht," meaning fourteen nights.

  ## Conversions
  &nbsp;
  
  - To days: 1 fortnight = 14 days

  ## Practical Applications
  &nbsp;
  
  Often used in social planning, agriculture, and by businesses for payroll cycles in regions where the term is still in regular use.
  `,
    gregorian_year: `
  # Gregorian Year
  &nbsp;
  
  The Gregorian year is the time measurement used by the Gregorian calendar, the most widely used civil calendar today.

  ## Notation
  &nbsp;
  
  Typically abbreviated as "yr."

  ## History
  &nbsp;
  
  Introduced in 1582 by Pope Gregory XIII as a modification of the Julian calendar to correct for the drift in the equinoxes.

  ## Conversions
  &nbsp;
  
  - To days: 1 Gregorian year = 365.2425 days (average)

  ## Practical Applications
  &nbsp;
  
  Fundamental for civil scheduling, including commerce, education, and legal applications worldwide.
  `,
    hour: `
  # Hour
  &nbsp;
  
  An hour is a time unit conventionally defined as 1/24 of a day.

  ## Notation
  &nbsp;
  
  Abbreviated as "hr."

  ## History
  &nbsp;
  
  Originating from the ancient Egyptians who divided the day into 24 hours, based on the decans they observed in the night sky.

  ## Conversions
  &nbsp;
  
  - To minutes: 1 hour = 60 minutes

  ## Practical Applications
  &nbsp;
  
  Universally used across all cultures for scheduling daily activities, work, transportation, and broadcasting.
  `,
    leap_year: `
  # Leap Year
  &nbsp;
  
  A leap year is a year in the Gregorian calendar that includes an extra day, February 29, added to keep the calendar year synchronized with the astronomical year.

  ## Notation
  &nbsp;
  
  Not specifically abbreviated; referred to as "leap year."

  ## History
  &nbsp;
  
  Leap years compensate for the fact that a period of 365 days is shorter than a tropical year by almost 6 hours.

  ## Conversions
  &nbsp;
  
  - To days: 1 leap year = 366 days

  ## Practical Applications
  &nbsp;
  
  Important for maintaining the alignment of seasonal and calendar years, essential in agriculture, legal fields, and historical studies.
  `,
    millennium: `
  # Millennium
  &nbsp;
  
  A millennium is a period of one thousand years, often used to denote significant historical timelines.

  ## Notation
  &nbsp;
  
  Sometimes abbreviated as "m."

  ## History
  &nbsp;
  
  Used in broader historical contexts to discuss long-term changes and periods significant in human history and civilizations.

  ## Conversions
  &nbsp;
  
  - To centuries: 1 millennium = 10 centuries

  ## Practical Applications
  &nbsp;
  
  Useful in historical analysis, futurism, and in planning long-term projects and studies.
  `,
    minute: `
  # Minute
  &nbsp;
  
  A minute is a unit of time equal to 1/60 of an hour or 60 seconds.

  ## Notation
  &nbsp;
  
  Abbreviated as "min."

  ## History
  &nbsp;
  
  The division of the hour into 60 minutes (and the minute into 60 seconds) comes from the Babylonians, who used a sexagesimal (base-60) number system.

  ## Conversions
  &nbsp;
  
  - To seconds: 1 minute = 60 seconds

  ## Practical Applications
  &nbsp;
  
  Used globally for timekeeping, in various forms of scheduling, broadcasting, and personal planning.
  `,

  month: `
  # Month
  &nbsp;
  
  A month is a unit of time, used mainly in calendars, that is approximately as long as a natural period related to the motion of the Moon; month and Moon are cognates.

  ## Notation
  &nbsp;
  
  Typically abbreviated as "mo."

  ## History
  &nbsp;
  
  Months were originally based on the lunar cycle but have since been standardized in the Gregorian calendar to vary between 28 and 31 days.

  ## Conversions
  &nbsp;
  
  - To days: Averages about 30.44 days

  ## Practical Applications
  &nbsp;
  
  Used universally for organizing and planning activities that range over longer periods than weeks, including billing cycles, rent, and subscriptions.
  `,
    planck_time: `
  # Planck Time
  &nbsp;
  
  Planck time is the time it would take a photon traveling at the speed of light to cross a distance equal to the Planck length. It is a unit of time in the system of natural units known as Planck units.

  ## Notation
  &nbsp;
  
  Symbolized as \( t_P \).

  ## History
  &nbsp;
  
  Named after Max Planck, this unit is based on fundamental constants of nature, and represents the time scale at which classical ideas about gravity and space-time cease to be valid, and quantum effects dominate.

  ## Conversions
  &nbsp;
  
  - To seconds: 1 \( t_P \) ≈ 5.39 x 10^-44 seconds

  ## Practical Applications
  &nbsp;
  
  Mostly theoretical, used in quantum mechanics and theories of gravitation like string theory and quantum gravity.
  `,
    second: `
  # Second
  &nbsp;
  
  The second is the base unit of time in the International System of Units (SI), historically defined as 1/86,400 of a mean solar day.

  ## Notation
  &nbsp;
  
  Abbreviated as "s."

  ## History
  &nbsp;
  
  Since 1967, the second has been defined based on the vibration frequencies of the cesium 133 atom, a definition adopted to provide greater accuracy and stability.

  ## Conversions
  &nbsp;
  
  - To milliseconds: 1 second = 1,000 milliseconds

  ## Practical Applications
  &nbsp;
  
  Essential in all aspects of life, from coordinating everyday activities and events to precision in scientific experiments and technology systems.
  `,
    shake: `
  # Shake
  &nbsp;
  
  A shake is an informal unit of time equal to 10 nanoseconds, used primarily to measure the time between nuclear reactions.

  ## Notation
  &nbsp;
  
  Often just called "shake."

  ## History
  &nbsp;
  
  Originating from the Manhattan Project during World War II, it is based on the approximate time it takes for a neutron to travel from one side of a critical mass of uranium to the other.

  ## Conversions
  &nbsp;
  
  - To seconds: 1 shake = 10^-8 seconds

  ## Practical Applications
  &nbsp;
  
  Used in nuclear physics and engineering to calculate critical timings in chain reactions and other rapid processes.
  `,
    sidereal_day: `
  # Sidereal Day
  &nbsp;
  
  A sidereal day is the time it takes for the Earth to rotate once relative to the fixed stars, approximately 23 hours, 56 minutes, and 4 seconds.

  ## Notation
  &nbsp;
  
  Sometimes abbreviated as "sday."

  ## History
  &nbsp;
  
  Used by astronomers to track the positions of celestial objects across the night sky.

  ## Conversions
  &nbsp;
  
  - To hours: A sidereal day is about 23.934 hours

  ## Practical Applications
  &nbsp;
  
  Essential in astronomy and navigating by the stars, providing a consistent measure for observing celestial events and configurations.
  `,

  sidereal_month: `
  # Sidereal Month
  &nbsp;
  
  A sidereal month is the time it takes the Moon to orbit the Earth once with respect to the fixed stars, about 27.3 days.

  ## Notation
  &nbsp;
  
  Typically abbreviated as "sid. mo."

  ## History
  &nbsp;
  
  Used by astronomers to calculate celestial positions and orbits, as it represents a more constant measure than the synodic month, which varies due to the Earth's motion around the Sun.

  ## Conversions
  &nbsp;
  
  - To days: 1 sidereal month ≈ 27.3217 days

  ## Practical Applications
  &nbsp;
  
  Important in astronomy and astrological practices, providing accurate measurements for the lunar cycle relative to the stars.
  `,
    sidereal_year: `
  # Sidereal Year
  &nbsp;
  
  The sidereal year is the time taken by the Earth to orbit the Sun once with respect to the fixed stars, approximately 365.25 days.

  ## Notation
  &nbsp;
  
  Sometimes abbreviated as "sid. yr."

  ## History
  &nbsp;
  
  This measurement is crucial for understanding the Earth's actual orbital period without the effects of precession and nutation, which affect the tropical year.

  ## Conversions
  &nbsp;
  
  - To days: 1 sidereal year ≈ 365.25 days

  ## Practical Applications
  &nbsp;
  
  Used in astronomy to calculate the positions of celestial objects and for maintaining precise astronomical calendars.
  `,
    svedberg: `
  # Svedberg
  &nbsp;
  
  The Svedberg unit, abbreviated as S, is a time unit used in ultracentrifugation for describing the sedimentation rate of particles in a centrifuge.

  ## Notation
  &nbsp;
  
  Represented as S.

  ## History
  &nbsp;
  
  Named after the Swedish chemist The Svedberg, who won the Nobel Prize for his research on colloids and proteins using the ultracentrifuge.

  ## Conversions
  &nbsp;
  
  - To seconds: 1 Svedberg = 1 x 10^-13 seconds

  ## Practical Applications
  &nbsp;
  
  Widely used in biochemistry and molecular biology for measuring the size, weight, and density of macromolecules.
  `,
    synodic_month: `
  # Synodic Month
  &nbsp;
  
  The synodic month is the time it takes the Moon to return to the same phase (e.g., new moon to new moon), averaging about 29.5 days.

  ## Notation
  &nbsp;
  
  Typically abbreviated as "syn. mo."

  ## History
  &nbsp;
  
  Fundamental to lunar calendars and ancient timekeeping, the synodic month is based on the Moon's phases as observed from Earth.

  ## Conversions
  &nbsp;
  
  - To days: 1 synodic month ≈ 29.53059 days

  ## Practical Applications
  &nbsp;
  
  Vital for creating lunar calendars, which are used in many cultures around the world for religious and agricultural purposes.
  `,
  tropical_month: `
  # Tropical Month
  &nbsp;
  
  The tropical month is the average time the Moon takes to return to the same position against the backdrop of the Sun as viewed from Earth, approximately 27.32 days.

  ## Notation
  &nbsp;
  
  Not commonly abbreviated.

  ## History
  &nbsp;
  
  The concept is important in astronomy for understanding the Moon's motion relative to the Earth and Sun, influencing tidal patterns and lunar visibility.

  ## Conversions
  &nbsp;
  
  - To days: 1 tropical month ≈ 27.32 days

  ## Practical Applications
  &nbsp;
  
  Used by astronomers for precise calculations of lunar cycles and by ecologists studying the influence of lunar cycles on wildlife and ecosystems.
  `,
    tropical_year: `
  # Tropical Year
  &nbsp;
  
  A tropical year, also known as a solar year, is the time taken for the Earth to complete one orbit around the Sun, relative to the equinoxes, approximately 365.242 days.

  ## Notation
  &nbsp;
  
  Often abbreviated as "trop. yr."

  ## History
  &nbsp;
  
  Essential for maintaining the calendar year aligned with the seasons, which is critical for agriculture and civil planning.

  ## Conversions
  &nbsp;
  
  - To days: 1 tropical year ≈ 365.242 days

  ## Practical Applications
  &nbsp;
  
  Fundamental to the design of calendars, planning agricultural cycles, and organizing seasonal activities.
  `,
    week: `
  # Week
  &nbsp;
  
  A week is a time unit of seven days, widely used across the world as a standard period for cycles of work days and rest days.

  ## Notation
  &nbsp;
  
  Typically abbreviated as "wk."

  ## History
  &nbsp;
  
  The seven-day week is believed to originate from ancient cultures, which based it on the seven celestial bodies visible to the naked eye—Sun, Moon, Mars, Mercury, Jupiter, Venus, and Saturn.

  ## Conversions
  &nbsp;
  
  - To days: 1 week = 7 days

  ## Practical Applications
  &nbsp;
  
  Used globally for structuring time in education, work, and religious observances, such as the Jewish Shabbat and the Christian Sunday.
  `,
    year: `
  # Year
  &nbsp;
  
  A year is the time it takes for the Earth to complete one orbit around the Sun, approximately 365 days in the Gregorian calendar.

  ## Notation
  &nbsp;
  
  Abbreviated as "yr."

  ## History
  &nbsp;
  
  The measurement of a year has been refined over centuries from lunar, to solar, to lunisolar calendars, reflecting the complexity of Earth's motions.

  ## Conversions
  &nbsp;
  
  - To days: 1 common year = 365 days; 1 leap year = 366 days

  ## Practical Applications
  &nbsp;
  
  Central to planning in all aspects of life, from agriculture to education, finance, and cultural festivities.
  `
};

export default timeArticles;
