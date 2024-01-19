'use client'
import React, {useState,useEffect,useCallback} from 'react'
import './UnitsConverter.css'
import SelectComponent from '../select-component/SelectComponent'
import { capitalizeWords } from '@/app/utils/utils-functions'

function UnitsConverter({conversionType}) {
  const [number,setNumber]=useState('')
  const [result,setResult]=useState('')
  const [from,setFrom]=useState('')
  const [fromAbr,setFromAbr]=useState('')
  const [to,setTo]=useState('')
  const [toAbr,setToAbr]=useState('')
  const [isInputValid,setIsInputValid]=useState(true)
  const [data,setData]=useState(null)


  const loadDataFromAPI = async () => {
    try {
      const response = await fetch(`localhost:8001/${conversionType}/${number}/${from}/${to}`); 
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Failed to load data from API', error);
      setData(null);
    }
  };

  useEffect(() => {
    setNumber('');
    setResult('');
    setFrom('');
    setTo('');
    setIsInputValid(true);
    async function loadCalculationData() {
      try {
        const myModule = await import(`../../api/db/calculations/unit_converters/${conversionType}_units.json`);
        setData(myModule.default);
        setFromAbr(' ')
        setToAbr(' ')
        } catch (error) {
        console.error('Failed to load calculation data', error);
        loadDataFromAPI();
      }
    }

    loadCalculationData();
  }, [data,conversionType]); 
  
  useEffect(() => {
    if (from && data) {
      const fromUnit = data.find(unit => unit.unit_string === from.replace(/ /g,'_').toLowerCase());
      if (fromUnit) {
        setFromAbr(fromUnit.formated_string?.replace(/_/g,' '));
      }
    }
  }, [from, data]); 
  
  useEffect(() => {
    if (to && data) {
      const toUnit = data.find(unit => unit.unit_string === to.replace(/ /g,'_').toLowerCase());
      if (toUnit) {
        setToAbr(toUnit.formated_string?.replace(/_/g,' '));
      }
    }
  }, [to, data]); 
  
  
  
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

 const unitMapping = {
  'Celsius': 'degC',
  'Fahrenheit': 'degF',
  'Kelvin': 'degK',
  'Rankine': 'degR',
  'Réaumur': 'degRe',

 }


 const convertTemperature = async () => {
  if (number && from && to) {
    const pintFromUnit = unitMapping[from];
    const pintToUnit = unitMapping[to];
    console.log(pintFromUnit)
    console.log(pintToUnit)
    try {
      const response = await fetch(` http://0.0.0.0:8000/temperature/?value=${number}&from_unit=${pintFromUnit}&to_unit=${pintToUnit}`);
     
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const temp = await response.json();
      console.log(temp.result)
      setResult(temp.result.toString()); // Assuming 'calculatedValue' is the key in your JSON response
    } catch (error) {
      console.error('Failed to fetch temperature conversion', error);
      // Handle error (e.g., update state to show an error message to the user)
    }
  }
};

const calculateConversion = useCallback(async() => {

  if (conversionType === 'temperature') {
    // Call the convertTemperature function for temperature conversions
    const temp=await convertTemperature();
    }
  else{ 
  const fromUnit = data.find(unit => unit.unit_string === from.replace(/ /g,'_').toLowerCase());
  const toUnit = data.find(unit => unit.unit_string === to.replace(/ /g,'_').toLowerCase());

  if (fromUnit && toUnit) {
      const convertedValue = (number * fromUnit.base_units_value) / toUnit.base_units_value;
      setResult(convertedValue);
  }
}}, [number, from, to, data]);

useEffect(() => {
  if (number && from && to) {
    calculateConversion();
  }
}, [number, from, to, data,calculateConversion]);



const options = [...new Set(data?.map(unit => capitalizeWords(unit.unit_string.replace(/_/g, ' '))))].sort();

  return (
   
    <>
    {/* <span>{from}</span>
    <span>{to}</span>
    <span>{result}</span> */}
    
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
      <span className='units'>{fromAbr}</span>
      </div>
      </div>
      <div className='group-block'>
      <h4 className='title'>To</h4>
      <div className='inputs-box'>
      <span className='select'> {result}</span>
      <SelectComponent label={'units'}  
      options={options} 
      onChange={e => setTo(e.target.value)}
      value={to}/>
      <span className='units'>{toAbr}</span>
      </div>
      </div>

      </div>
      
   
    
    </>
  )
}

export default UnitsConverter