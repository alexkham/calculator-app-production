// temperatureUnits.js

const temperatureArticles = {
  celsius: `
# Celsius (°C)&nbsp;

The Celsius scale, once known as the centigrade scale, is widely used internationally and is a standard part of the International System of Units (SI). The scale measures the freezing point of water at 0°C and the boiling point at 100°C under standard atmospheric pressure.

## History&nbsp;
Introduced by Anders Celsius in 1742, the scale was initially reversed, with 100°C as the freezing point and 0°C as the boiling point. The scale was later inverted to its current form in 1744 by Carl Linnaeus.

## Conversions&nbsp;
- To Fahrenheit: (°C × 9/5) + 32
- To Kelvin: °C + 273.15

## Practical Applications&nbsp;
Celsius is commonly used in weather forecasts, medical applications, and many scientific contexts due to its direct relation to the Kelvin scale.
`,
  fahrenheit: `
# Fahrenheit (°F)&nbsp;

The Fahrenheit scale was developed by Daniel Gabriel Fahrenheit in 1724. This scale sets the freezing point of water at 32°F and the boiling point at 212°F at 1 atmosphere of pressure.

## History&nbsp;
Daniel Gabriel Fahrenheit originally made his scale using mercury in glass thermometers and based the zero point on the coldest temperature he could reliably reproduce using a mixture of ice, water, and ammonium chloride.

## Conversions&nbsp;
- To Celsius: (°F - 32) × 5/9
- To Kelvin: (°F - 32) × 5/9 + 273.15

## Practical Applications&nbsp;
Fahrenheit is predominantly used in the United States for weather forecasting, household temperature settings, and medical applications.
`,
  kelvin: `
# Kelvin (K)&nbsp;

The Kelvin scale is the base unit of temperature in the International System of Units (SI), named after the physicist William Thomson, also known as Lord Kelvin. It starts from absolute zero, the theoretical lowest possible temperature.

## History&nbsp;
The Kelvin scale was first proposed by Lord Kelvin in 1848, based on the need for an absolute thermodynamic temperature scale.

## Conversions&nbsp;
- To Celsius: K - 273.15
- To Fahrenheit: (K - 273.15) × 9/5 + 32

## Practical Applications&nbsp;
Kelvin is crucial in scientific measurements because it allows for precise calculations in physics and chemistry, involving phenomena like radiation, color temperature, and particle kinetics.
`,
  rankine: `
# Rankine (°R)&nbsp;

The Rankine scale is an absolute temperature scale that uses Fahrenheit degrees. It sets zero at absolute zero, similar to Kelvin but scaled to the Fahrenheit interval.

## History&nbsp;
Named after Scottish engineer and physicist William John Macquorn Rankine, this scale was proposed in the 1850s as part of his work on heat engines.

## Conversions&nbsp;
- To Fahrenheit: °R - 459.67
- To Celsius: (°R - 491.67) × 5/9
- To Kelvin: °R × 5/9

## Practical Applications&nbsp;
Rankine is primarily used in engineering fields, particularly in thermodynamics, where heat engines and high-temperature materials are studied.
`
};

export default temperatureArticles;
