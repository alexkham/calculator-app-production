'use client'
import React, {useState,useEffect,useCallback} from 'react'
import './UnitsConverter.css'
import SelectComponent from '../select-component/SelectComponent'
import { capitalizeWords } from '@/app/utils/utils-functions'

function UnitsConverter({conversionType}) {
  const [number,setNumber]=useState('')
  const [result,setResult]=useState('')
  const [from,setFrom]=useState('')
  const [to,setTo]=useState('')
  const [isInputValid,setIsInputValid]=useState(true)
  const [data,setData]=useState(null)

  useEffect(() => {
    async function loadCalculationData() {
      try {
        const myModule = await import(`../../api/db/calculations/unit_converters/${conversionType}_units.json`);
        setData(myModule.default);
        console.log('Use Effect')
        console.log(data)
      } catch (error) {
        console.error('Failed to load calculation data', error);
        setData(null);
      }
    }

    loadCalculationData();
  }, [data,conversionType]);  
  
  
  const validateInput = (e) => {
       
    const numericValue = parseInt(e.target.value, 10);
      if (numericValue >= 0 ||'') {
          setIsInputValid(true);
      } else {
          setIsInputValid(false);
          e.preventDefault();
      }

  };

 const handleChange=(e)=>{
  const numericValue = parseInt(e.target.value, 10);
  if (numericValue >= 0 ||'0') {
    setNumber(numericValue)
} else {
    setNumber('0')
    e.preventDefault();
}
  

 }

//  const calculateConversion = () => {
//   const fromUnit = data.find(unit => unit.unit_string === from.replace(/ /g,'_').toLowerCase());
//   const toUnit = data.find(unit => unit.unit_string === to.replace(/ /g,'_').toLowerCase());

//   if (fromUnit && toUnit) {
//     const convertedValue = (number * fromUnit.base_units_value) / toUnit.base_units_value;
//     setResult(convertedValue);
//   }
// };

const calculateConversion = useCallback(() => {
  const fromUnit = data.find(unit => unit.unit_string === from.replace(/ /g,'_').toLowerCase());
  const toUnit = data.find(unit => unit.unit_string === to.replace(/ /g,'_').toLowerCase());

  if (fromUnit && toUnit) {
      const convertedValue = (number * fromUnit.base_units_value) / toUnit.base_units_value;
      setResult(convertedValue);
  }
}, [number, from, to, data]);

useEffect(() => {
  if (number && from && to) {
    calculateConversion();
  }
}, [number, from, to, data,calculateConversion]);


// const options=data?.map(unit=>capitalizeWords(unit.unit_string.replace(/_/g,' ')))
// const options = [...new Set(data?.map(unit => capitalizeWords(unit.unit_string.replace(/_/g, ' '))))];
const options = [...new Set(data?.map(unit => capitalizeWords(unit.unit_string.replace(/_/g, ' '))))].sort();


  return (
   
    <>
    
    <div className='outer-container'>
      
      <div className='group-block'>
      <h4 className='title'>From</h4>
      <div className='inputs-box'>
      <div className='input-block'>
      <input 
      type='number' 
      min={0} 
      className='select'
      value={number}
      placeholder='Enter number to convert...'
      onChange={(e)=>handleChange(e)}
      onKeyUp={(e)=>validateInput(e)}
      />
      {!isInputValid && <div className="error-message">Please,enter valid integer non-negative number </div>} 
      </div>
      <SelectComponent 
      options={options} 
      label={'units'} 
      onChange={e => setFrom(e.target.value)}
      value={from}/>
      </div>
      </div>
      <div className='group-block'>
      <h4 className='title'>To</h4>
      <div className='inputs-box'>
      <span className='select' > {result}</span>
      <SelectComponent label={'units'}  
      options={options} 
      onChange={e => setTo(e.target.value)}
      value={to}/>
      </div>
      </div>

      </div>
      
   
    
    </>
  )
}

export default UnitsConverter