import { capitalizeWords } from '@/app/utils/utils-functions';
import React from 'react';

const SimpleConversionTable = ({ data,dimension,baseUnit }) => {
    return (
        <div className='table-container'>
            <h2>{capitalizeWords(dimension)} Conversion Table</h2>
            <table className='my-table'>
                <thead>
                    <tr>
                        <th>Unit</th>
                        <th>In  1 {baseUnit.replace(/_/g, ' ')}</th>
                        <th>{baseUnit.replace(/_/g, ' ')}s in 1 unit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((unit, index) => (
                        <tr key={index}>
                            <td>{capitalizeWords(unit.unit_string.replace(/_/g, ' '))}</td>
                            <td>{1/unit.base_units_value}</td>
                            <td>{unit.base_units_value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SimpleConversionTable;
