'use client'
import React, {useState,useEffect} from 'react'
import './BinaryNumbersDemo.css'

import intToBinary from '../../api/db/calculations/int_to_binary.json'



function BinaryNumberDemo() {
    const[number,setNumber]=useState(0);
    const[binary,setBinary]=useState(0);
    const [reversedStrArray, setReversedStrArray] = useState([]);
    const [isInputValid, setIsInputValid] = useState(true);
    // const singlePrecisionBytesLength = 4; // 32 bits
    // const doublePrecisionBytesLength = 8; // 64 bits
    // const bitsInByte = 8;

    // function floatAsBinaryString(floatNumber, byteLength) {
    //     let numberAsBinaryString = '';
      
    //     const arrayBuffer = new ArrayBuffer(byteLength);
    //     const dataView = new DataView(arrayBuffer);
      
    //     const byteOffset = 0;
    //     const littleEndian = false;
      
    //     if (byteLength === singlePrecisionBytesLength) {
    //       dataView.setFloat32(byteOffset, floatNumber, littleEndian);
    //     } else {
    //       dataView.setFloat64(byteOffset, floatNumber, littleEndian);
    //     }
      
    //     for (let byteIndex = 0; byteIndex < byteLength; byteIndex += 1) {
    //       let bits = dataView.getUint8(byteIndex).toString(2);
    //       if (bits.length < bitsInByte) {
    //         bits = new Array(bitsInByte - bits.length).fill('0').join('') + bits;
    //       }
    //       numberAsBinaryString += bits;
    //     }
      
    //     return numberAsBinaryString;
    //   }
    // useEffect(() => {
    //     const myBinary = intToBinary[number]; // Fetch binary value from data
    //     setBinary(myBinary);
    //   }, [number, intToBinary]);
    useEffect(() => {
        const myBinary = intToBinary[number]; // Fetch binary value from data
        setBinary(myBinary);
    
        // Reverse the array only if binary is not empty
        if (binary) {
          setReversedStrArray(binary.split('').reverse()); // Split into characters and reverse
        }
      }, [number, intToBinary, binary]);
    

    // const handleChange=(e)=>{
    //     // if(number===0)
    //     //   setNumber('')
    //     if(number===0)
    //        setNumber('')
    //        setNumber(Number(e.target.value))
    //     const myBinary=intToBinary[number]
    //     setBinary(myBinary)
    // }
    // const handleChange = (e) => {
    //     const inputValue = e.target.value;
    
    //     // Remove leading zeros (if any) and convert to a number
    //     const sanitizedValue = inputValue.replace(/^0+/, '');
    
    //     // Update the state with the sanitized value
    //     setNumber(sanitizedValue);
    
    //     // Fetch and update the binary representation
    //     const myBinary = intToBinary[sanitizedValue];
    //     setBinary(myBinary);
    // }

    // const handleChange = (e) => {
    //     const inputValue = e.target.value;
    
    //     // Remove leading zeros and convert to a number
    //     const sanitizedValue = inputValue.replace(/^0+/, '');
    
    //     // Check if the sanitized value is within the allowed range
    //     if (sanitizedValue === '' || (sanitizedValue.length <= 5 && Number(sanitizedValue) <= 10000)) {
    //         setNumber(sanitizedValue);
    
    //         // Fetch and update the binary representation
    //         const myBinary = intToBinary[sanitizedValue];
    //         setBinary(myBinary);
    //     }
    // }

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
        // ("^[+]?\\d*$") ;
      
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

//   const strArray=[...binary]
//   const reversedStrArray = binary.toString().slice().reverse(); // Reverse the array

  return (
    <>
    <h2>Binary Numbers  Demo</h2>
    <br></br>
    
    
    
    {/* <div className='row'>
    {strArray.map((char,index)=><table><tr key={index}>{char}</tr><tr>{index}</tr></table>)}
    </div> */}
    {/* <div className="row">
        {reversedStrArray.map((char, originalIndex) => (
          <table key={originalIndex}>
            <tr>{char}</tr>
            <tr>{originalIndex}</tr>
          </table>
        ))}
      </div> */}
      
      <div className="row">
        {binary&&reversedStrArray.map((_, index) => (
          <table key={binary?.length - index - 1}>
            <tr><span>{reversedStrArray[binary?.length - index - 1]}</span></tr> {/* Use reversed character */}
            
            {/* <hr></hr> */}
            
            <tr>{binary&&<span>{reversedStrArray[binary?.length - index - 1]}×2<sup>{binary?.length - index - 1}</sup>=
            {Math.pow(2,binary?.length - index - 1)*Number(reversedStrArray[binary?.length - index - 1])}{binary?.length - index - 1===0?'':'+'}</span>}</tr> 
          </table>
        ))}
      </div>
      <div className='row-smaller'>
      {binary&&<div > <p><span>Decimal : {number}</span></p></div>}
      {binary&&<div > <p><span>Binary : {binary}</span></p></div>}
      </div>
      
     

      
    {/* <span>{number}</span> */}
    {/* <span>{floatAsBinaryString(number,6)}</span> */}
    <input 
    style={{backgroundColor:'white',maxWidth:'300px'}}
    type='number'
    className='my-input'
    value={number}
    onKeyUp={(e)=>validateInput(e)}
    onChange={(e)=>handleChange(e)}
    placeholder='Enter your number here...'/>
    {!isInputValid && <div className="error-message">"Please,enter valid integer number between 0 and 10000"</div>} 

    <button onClick={()=>setNumber('0')}>Reset</button>
    </>
    
  )
}

export default BinaryNumberDemo