import React from 'react'
import './converters.css'
import data from '../../api/db/calculations/converters/converters.json'
import DecimalToAnyBaseConverter from '@/app/components/decimal-to-any/DecimalToAnyDemo';

// const data = [
//     {"title":"decimal to binary converter","key_word":"binary","base":2,"max_value":10000},
//     {"title":"decimal to hexadecimal converter","key_word":"hexadecimal","base":16,"max_value":100000},
//     {"title":"decimal to octal converter","key_word":"octal","base":8,"max_value":100000}
// ];

// Create a lookup object
const lookup = data.reduce((acc, item) => {
    acc[item.key_word] = item;
    return acc;
}, {});

// Now, you can access an item by its key_word
const binaryConverter = lookup["binary"];
const hexadecimalConverter = lookup["hexadecimal"];
const octalConverter = lookup["octal"];

// Example of using one of these objects
console.log("Binary Converter:", binaryConverter);
console.log("Hexadecimal Converter:", hexadecimalConverter);
console.log("Octal Converter:", octalConverter);


export default function page({params}) {
    const decodedConverterType = decodeURI(params.converterType);
    const converter=lookup[decodedConverterType]
  return (
    <div className='main'>
         
    <DecimalToAnyBaseConverter base={decodedConverterType}
     n={converter.base} 
     sanitizedLength={converter.max_value}></DecimalToAnyBaseConverter>
    
    </div>
  )
}
