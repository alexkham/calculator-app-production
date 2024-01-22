'use client'

import React ,{ useEffect, useState} from 'react'
import { convertNumber,isValidInput } from '@/app/utils/calculations';
import MyModal from '../my-modal/MyModal';

function NumberConverter({ styles = {},title='' }) {
  const { titleClass = '',bodyClass='', mainClass = '',
  inputClass='',selectClass='',errorClass='',buttongroupClass='',
  selectgroupClass='',resetbuttonClass='',convertbuttonClass='',
  inputgroupClass='' ,outputClass='',inputselectClass=''} = styles;
  const [inputNumber, setInputNumber] = React.useState('');
  const [inputFormat, setInputFormat] = React.useState('decimal');
  const [outputFormat, setOutputFormat] = React.useState('binary');
  const [convertedNumber, setConvertedNumber] = React.useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConvert = () => {
      if(!inputNumber){
        alert("No Number to Convert")
      }
      const result = convertNumber(inputNumber, inputFormat, outputFormat);
      // if(!isNaN(result))
      setConvertedNumber(result);
  };

//   function convertNumber(inputNumber, inputFormat, outputFormat) {
//     let number = inputNumber;

//     // Convert input to decimal (base 10) first
//     switch (inputFormat) {
//         case 'binary':
//             number = parseInt(inputNumber, 2);
//             break;
//         case 'hexadecimal':
//             number = parseInt(inputNumber, 16);
//             break;
//         case 'octal':
//             number = parseInt(inputNumber, 8);
//             break;
//         default:
//             number = parseInt(inputNumber, 10); // Assume decimal
//     }

//     // Now convert from decimal to desired output format
//     switch (outputFormat) {
//         case 'binary':
//             return number.toString(2);
//         case 'hexadecimal':
//             return number.toString(16);
//         case 'octal':
//             return number.toString(8);
//         default:
//             return number.toString(); // Default to decimal
//     }
// }
  const validateInput=(e)=>{
    const input=e.target.value;
    if(input===''){
      setIsInputValid(true)
    }
    else if(inputFormat&&!isValidInput(input,inputFormat)){
      setIsInputValid(false)
    }else{
      setIsInputValid(true)
    }

  }

  // useEffect (()=>{
    
  //  if(!isValidInput(inputNumber,inputFormat)){
  //   setIsInputValid(false)
  //  }else{
  //   if(input===''){
  //     setIsInputValid(true)
  //   }else
  //   setIsInputValid(true)
  //  }

  // }, [inputNumber])

//   useEffect(() => {
//     // Actions to perform after inputFormat changes
//     console.log("From use Effect :"+inputFormat);
//     // Other logic...
// }, [inputFormat]);


  const resetAll=()=>{
    setInputNumber('');
    setInputFormat('decimal');
    setOutputFormat('decimal');
    setConvertedNumber('')
    setIsInputValid(true)

  }
  const handleChange=(e)=>{
    const number=e.target.value;
    setInputNumber(number)
    if(isValidInput(number,inputFormat||number==='')){
       setIsInputValid(true)
    }else{
      setIsInputValid(false)
    }
  }
  const handleSelectChange=(e)=>{
    const newInputFormat=e.target.value
    setInputFormat(newInputFormat);
    console.log("Updated inputFormat to:", newInputFormat);
    if(isValidInput(inputNumber,newInputFormat)||inputNumber===''){
      setIsInputValid(true)      
    }else{
      setIsInputValid(false)
    }
  }

  return (
      <div className={mainClass}>
        
         <div className={titleClass}>{title}</div>
          <div  className={bodyClass}>
            <div className={inputgroupClass}>
              <label>Number : </label>
              <input 
                  type="text" 
                  value={inputNumber}
                  onKeyUp={(e)=>validateInput(e)}
                  onChange={(e) =>handleChange(e)}
                  placeholder="Enter number to convert"
                  className={inputClass}
              />
               {!isInputValid && <div className={errorClass}>Please  enter  valid  {inputFormat}  number</div>}
               </div> 
               <div className={selectgroupClass}>
                <div className={inputselectClass}>
              <label>From : </label>
              <select
               value={inputFormat}
                onChange={(e) => handleSelectChange(e)}
                className={selectClass}>
                  <option value="decimal">Decimal</option>
                  <option value="binary">Binary</option>
                  <option value="hexadecimal">Hexadecimal</option>
                  <option value="octal">Octal</option>
              </select>
              </div>
              <div className={inputselectClass}>
              <label>To :   </label>
              <select value={outputFormat}
               onChange={(e) => setOutputFormat(e.target.value)}
               className={selectClass}>
                  <option value="decimal">Decimal</option>
                  <option value="binary">Binary</option>
                  <option value="hexadecimal">Hexadecimal</option>
                  <option value="octal">Octal</option>
              </select>
              </div>
              </div>
              <div className={buttongroupClass}>
              <button onClick={handleConvert} className={convertbuttonClass}>Convert</button>
              <button onClick={resetAll} className={resetbuttonClass}>Reset  </button>
              </div>
              <label style={{marginLeft:'30px',marginTop:'20px',fontWeight:'bold'}}>Result : </label>
              <div className={outputClass}>
                
                <span > {convertedNumber}</span>
                </div>
              </div>

              {/* <div>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            <MyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p>This is a modal!</p>
            </MyModal>
        </div> */}
              
          
      </div>
  );
}

export default NumberConverter;
