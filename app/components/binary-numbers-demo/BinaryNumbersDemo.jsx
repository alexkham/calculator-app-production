'use client'
import React, {useState,useEffect} from 'react'
import './BinaryNumbersDemo.css'

import intToBinary from '../../api/db/calculations/int_to_binary.json'



function BinaryNumberDemo() {
    const[number,setNumber]=useState(0);
    const[binary,setBinary]=useState(0);
    const [reversedStrArray, setReversedStrArray] = useState([]);
    const [isInputValid, setIsInputValid] = useState(true);
    
    useEffect(() => {
        const myBinary = intToBinary[number]; // Fetch binary value from data
        setBinary(myBinary);
    
        // Reverse the array only if binary is not empty
        if (binary) {
          setReversedStrArray(binary.split('').reverse()); // Split into characters and reverse
        }
      }, [number,binary]);
    

    

    const handleChange = (e) => {
        const inputValue = e.target.value;
    
        // Remove leading zeros and convert to a number
        const sanitizedValue = inputValue === '0' ? '0' : inputValue.replace(/^0+/, '');
    
        // Check if the sanitized value is within the allowed range
        if (sanitizedValue === '' || (sanitizedValue.length <= 5 && Number(sanitizedValue) <= 10000)) {
            setIsInputValid(true); // Input is valid
            setNumber(sanitizedValue);
    
            // Fetch and update the binary representation
            const myBinary = intToBinary[sanitizedValue];
            setBinary(myBinary);
        } else {
            setIsInputValid(false); // Input is not valid
        }
    }
    
    

    const validateInput = (e) => {
        const isValid = new RegExp("^([0-9]|[1-9][0-9]{1,3}|10000)?$");
       
      
        if (isValid.test(e.target.value)) {
          setIsInputValid(true); // Correct use of setIsInputValid
        } else {
          setIsInputValid(false); // Correct use of setIsInputValid
        //   setInvalidInputMessage(props.invalid_input_message);
          e.preventDefault();
        }
      };

      const handleReset=(e)=>{
        if(number===0)
          setNumber('')
        setNumber(number)

      }


  return (
    <>
    <h2>Binary Numbers  Demo</h2>
    
    <br></br>
    
    
    
    
      
      <div className="row">
        {binary&&reversedStrArray.map((_, index) => (
          <table key={binary?.length - index - 1}>
            <tr><span>{reversedStrArray[binary?.length - index - 1]}</span></tr> {/* Use reversed character */}
            
           
            
            <tr>{binary&&<span>{reversedStrArray[binary?.length - index - 1]}×2<sup>{binary?.length - index - 1}</sup>=
            {Math.pow(2,binary?.length - index - 1)*Number(reversedStrArray[binary?.length - index - 1])}{binary?.length - index - 1===0?'':'+'}</span>}</tr> 
          </table>
        ))}
      </div>
      <div className='row-smaller'>
      {binary&&<div > <p><span>Decimal : {number}</span></p></div>}
      {binary&&<div > <p><span>Binary : {binary}</span></p></div>}
      </div>
          

      
    
    <input 
    style={{backgroundColor:'white',maxWidth:'300px'}}
    type='number'
    className='my-input'
    value={number}
    onKeyUp={(e)=>validateInput(e)}
    onChange={(e)=>handleChange(e)}
    placeholder='Enter your number here...'/>
    {!isInputValid && <div className="error-message">Please,enter valid integer number between 0 and 10000</div>} 

    <button onClick={()=>setNumber('0')}>Reset</button>
    </>
    
  )
}

export default BinaryNumberDemo