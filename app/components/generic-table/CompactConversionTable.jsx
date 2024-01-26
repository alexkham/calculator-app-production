import React, { useState, useEffect } from 'react';

const CompactConversionTable = ({ data, baseUnit }) => {
    const [conversionFactors, setConversionFactors] = useState({});

    // function calculateConversion(fromUnit, toUnit, data,precision=2) {
    //     // Find the base units value for fromUnit and toUnit
    //     let fromBaseValue = data.find(unit => unit.unit_string === fromUnit).base_units_value;
    //     let toBaseValue = data.find(unit => unit.unit_string === toUnit).base_units_value;
      
    //     // Calculate the conversion value
    //     let conversionValue = (toBaseValue / fromBaseValue).toFixed(precision);
      
    //     return conversionValue;
    //   }
      

    useEffect(() => {
        const calculateConversion = (fromUnit, toUnit,precision=3) => {

            // Find the base units value for fromUnit and toUnit
        let fromBaseValue = data.find(unit => unit.unit_string === fromUnit).base_units_value;
        let toBaseValue = data.find(unit => unit.unit_string === toUnit).base_units_value;
      
        // Calculate the conversion value
        let conversionValue = (toBaseValue / fromBaseValue).toFixed(precision);
      
        return conversionValue;
            
        };

        const generateConversionFactors = () => {
            const factors = {};
            data.forEach(unit => {
                if (unit.unit_string && unit.unit_string !== baseUnit) {
                    factors[unit.unit_string] = calculateConversion(baseUnit, unit.unit_string);
                }
            });
            return factors;
        };

        setConversionFactors(generateConversionFactors());
    }, [data, baseUnit]);

    return (
        <div>
            <h2>{baseUnit} Conversion Table</h2>
            <table>
                <tbody>
                    {Object.entries(conversionFactors).map(([unit, factor]) => (
                        <tr key={unit}>
                            <td>{unit}</td>
                            <td>{factor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompactConversionTable;
