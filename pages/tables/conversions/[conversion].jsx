import React from 'react'
import { capitalizeWords } from '@/app/utils/utils-functions';
import '../prefixes.css'
import SimpleConversionTable from '@/app/components/generic-table/SimpleConversionTable';
import MyNavbar from '@/app/components/my-navbar/MyNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';



function findBaseUnit(data) {
  let baseUnit = null;
  
  data.forEach(unit => {
      if (unit.base_units_value === 1) {
          baseUnit = unit.unit_string;
      }
  });

  return baseUnit;
}

export async function getStaticPaths() {
  // Since you don't have a predefined list of categories and tables,
  // you can use fallback: 'blocking' to generate them on-demand
  return {
    paths: [], // No predefined paths
    fallback: 'blocking' // Generate paths on-demand
  };
}



function calculateConversion(fromUnit, toUnit, data,precision=2) {
  // Find the base units value for fromUnit and toUnit
  let fromBaseValue = data.find(unit => unit.unit_string === fromUnit).base_units_value;
  let toBaseValue = data.find(unit => unit.unit_string === toUnit).base_units_value;

  // Calculate the conversion value
  let conversionValue = (toBaseValue / fromBaseValue).toFixed(precision);

  return conversionValue;
}

// Rest of the createConversionTable function...

function createConversionTable(data,dimension) {
  if (!Array.isArray(data)) {
      // Handle the case where data is not structured as expected
      console.error("Invalid data format. Data is not an array.");
      return null;
  }

  // Assuming 'data' is an array of objects, each having a 'unit_string' field
  const unitSet = new Set(data.map(unit => unit.unit_string).filter(Boolean));

  // Convert the set to an array
  const unitsArray = Array.from(unitSet).sort();

  // Determine the dimension from the array (assuming all units relate to the same dimension)
  //const dimension = unitsArray.length > 0 ? "Some Dimension" : ""; // Replace "Some Dimension" with actual logic if available

  // Initialize the output JSON structure
  const output = {
      tableTitle: capitalizeWords(dimension + " Conversion Table"),
      rows: []
  };

  // Iterate over unitsArray to create each row
  unitsArray.forEach(unit => {
      const row = { unit: capitalizeWords(unit) };
      unitsArray.forEach(otherUnit => {
          if (unit === otherUnit) {
              row[otherUnit] = 1; // Self conversion
          } else {
              // Calculate the conversion value here using a hypothetical function
              row[otherUnit] = calculateConversion(unit, otherUnit, data);
          }
      });
      output.rows.push(row);
  });

  return output;
}

// Example usage
// const jsonData = [{ unit_string: 'm', ... }, { unit_string: 'km', ... }, ...];
// const conversionTable = createConversionTable(jsonData);

export async function getStaticProps({ params }) {
  const conversionType = params.conversion || null;
  let data = null; // Initialize data to null

  try {
    const myModule = await import(`../../../app/api/db/calculations/unit_converters/${conversionType}_units.json`);
    data = myModule.default;
  } catch (error) {
    console.error('Failed to load calculation data', error);
    // Handle the error - in this case, we leave data as null
  }
  //const tableData=createConversionTable(data,conversionType)
  const baseUnit=findBaseUnit(data);
 
  return {
    props: {
      conversionType,
      baseUnit,
           
      data // Make sure this is always defined, even if it's null
    },
  };
}


export default function conversion({conversionType,data, baseUnit}) {

  const units = [...new Set(data?.map(unit => capitalizeWords(unit.unit_string.replace(/_/g, ' '))))].sort();
 // const uniqueData = Array.from(new Set(data.map(unit => JSON.stringify(unit))))
                             //.map(unitStr => JSON.parse(unitStr));

   const uniqueData = data.filter((unit, index, self) =>
    index === self.findIndex((t) =>
    t.unit_string === unit.unit_string && t.base_units_value === unit.base_units_value
    )
    );
                                                                          
  return (

    <>
    <MyNavbar></MyNavbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
    
   
   {/* <div>{data[0]?.unit_string}</div>
     {units.map((unit,index)=>{
      return(
        <div key={index}>{unit}</div>
      )
     })} */}
     <a className={'link'} href={`/units-converters/${conversionType}`}>Go to {capitalizeWords(conversionType)} Converter</a>
    <div className='table-container' >
     <SimpleConversionTable data={uniqueData} 
     dimension={conversionType}
     baseUnit={baseUnit}></SimpleConversionTable>
     
     </div>
     <a href={`/units-converters/${conversionType}`}>Go to {capitalizeWords(conversionType)} Converter</a>

     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <ScrollUpButton className={'button-target'}></ScrollUpButton>
    </>
    
  )
}
