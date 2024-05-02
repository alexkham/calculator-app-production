'use client'
import React, {useState,useEffect} from 'react'
import '../binary-numbers-demo/BinaryNumbersDemo.css'
import { capitalizeWords } from '../../utils/utils-functions.js';
import MarkdownComponent from '../markdown-component/MarkdownComponent';
import {binary,hexadecimal,octal} from './articles'





function DecimalToAnyBaseConverter({base,n,sanitizedLength}) {
    const[number,setNumber]=useState(0);
    const[result,setResult]=useState(0);
    const [reversedStrArray, setReversedStrArray] = useState([]);
    const [isInputValid, setIsInputValid] = useState(true);
    const [calculationData, setCalculationData] = useState(null);
    const [article, setArticle] = useState(binary);  

    
    useEffect(() => {
      async function loadCalculationData() {
        try {
          const myModule = await import(`../../api/db/calculations/int_to_${base}.json`);
          setCalculationData(myModule.default);
          console.log('Use Effect')
          console.log(calculationData)
        } catch (error) {
          console.error('Failed to load calculation data', error);
          setCalculationData(null);
        }
      }
  
      loadCalculationData();
    }, [base,calculationData]); 
    
    

    useEffect(() => {

      if (result) {
          setReversedStrArray(result.split('').reverse()); // Split into characters and reverse
           }
      const myResult=calculationData?calculationData[number]:'';
      setResult(myResult)
      console.log('Updated calculationData:', calculationData);
    }, [calculationData,number,result]);
    
    useEffect(() => {
      if (base === 'binary') {
          setArticle(binary);
      } else if (base === 'hexadecimal') {
          setArticle(hexadecimal);
      } else if (base === 'octal') {
          setArticle(octal);
      }
  }, [base]);
   
     
   

    const handleChange = (e) => {
        const inputValue = e.target.value;
    
        // Remove leading zeros and convert to a number
        const sanitizedValue = inputValue === '0' ? '0' : inputValue.replace(/^0+/, '');
    
        // Check if the sanitized value is within the allowed range
        if (sanitizedValue === '' || (sanitizedValue.length <= sanitizedLength.toString().length && Number(sanitizedValue) <= sanitizedLength)) {
            setIsInputValid(true); // Input is valid
            setNumber(sanitizedValue);
    
            // Fetch and update the binary representation
            const myResult = calculationData?calculationData[sanitizedValue]:'';
            setResult(myResult);
        } else {
            setIsInputValid(false); // Input is not valid
        }
    }
    
  
  

    const validateInput = (e) => {
       
        const numericValue = parseInt(e.target.value, 10);
          if (numericValue >= 0 && numericValue <= sanitizedLength) {
              setIsInputValid(true);
          } else {
              setIsInputValid(false);
              e.preventDefault();
          }

      };

      const handleReset=(e)=>{
         setNumber(number)

      }


  return (
    <>
    
        <h2>
            Decimal To {capitalizeWords(base)} Number Conversion
            <a href="#articleContent" className="tooltip-icon" aria-label="Learn more about this conversion" data-tooltip="Click to see more details about this conversion.">?</a>
        </h2>
       
   
      <div className="row">
        {result&&reversedStrArray.map((_, index) => (
          <table key={result?.length - index - 1}>
            <tr><span className='my-span'>{reversedStrArray[result?.length - index - 1]}</span></tr> 
            
            
            
            <tr>{result&&<span className='my-span'>{calculationData.indexOf(reversedStrArray[result?.length - index - 1])}×{n}<sup>{result?.length - index - 1}</sup>=
            {(Math.pow(n,parseInt(result?.length - index - 1)))*parseInt(calculationData.indexOf(reversedStrArray[result?.length - index - 1]))}{(result?.length - index - 1)===0?'':'+'}</span>}</tr> 
          </table>
        ))}
      </div>
      <div className='row-smaller'>
      {result&&<div > <p><span className='my-span'>Decimal : {number}</span></p></div>}
      {result&&<div > <p><span className='my-span'>{capitalizeWords(base)} : {result}</span></p></div>}
      </div>
     
   <div className='input-container'> 
    <input 
    style={{backgroundColor:'white',maxWidth:'300px'}}
    type='number'
    className='my-input'
    value={number}
    onKeyUp={(e)=>validateInput(e)}
    onChange={(e)=>handleChange(e)}
    placeholder='Enter your number here...'/>
    {!isInputValid && <div className="error-message">Please,enter valid integer number between 0 and {sanitizedLength}</div>} 

    <button  onClick={()=>setNumber('')}>Reset</button>
    
    </div>
    <br></br>
    <br></br>
    <br></br>
    
    <div id="articleContent">
      <br></br>
      <br></br>
      <br></br>
            <MarkdownComponent article={article}></MarkdownComponent>
        </div>
    
   
  
    </>
    
  )
}

export default DecimalToAnyBaseConverter

