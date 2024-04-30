// 'use client'
// import React, { useState } from 'react';
// import './LogarithmCalculator.css'; // Ensure you create and link appropriate CSS styles similar to your PowerCalculator

// function LogarithmCalculator() {
//   const [base, setBase] = useState('');
//   const [result, setResult] = useState('');
//   const [selectedBase, setSelectedBase] = useState('2');

//   const handleChangeBase = (event) => {
//     setBase(Number(event.target.value));
//   };

//   const handleSelectBase = (event) => {
//     setSelectedBase(event.target.value);
//   };

//   const calculateLogarithm = () => {
//     const logResult = Math.log(base) / Math.log(selectedBase);
//     setResult(logResult);
//   };

//   const resetAll = () => {
//     setBase('');
//     setResult('');
//     setSelectedBase('2');
//   };

//   return (
//     <>
//       <div className='main-container'>
//         <table className='calc-table'>
//           <tbody>
//             <tr className='table-row'>
//               <td><span style={{fontSize:'xx-large', background:'none'}}>log</span></td>
//               <td>
//                 <input
//                  className='input-number' 
//                  type="number" 
//                  value={base} 
//                  placeholder='Enter Value...'
//                  onChange={handleChangeBase} 
//                 ></input>
//               </td>
//               <td className='result'>{result}</td>
//             </tr>
//             <tr className='table-row'>
//               <td></td>
//               <td className='input-block'>
//                 {/* <div className='base-container'> */}
//                 {/* <label>Type Base</label> */}
//                 <input  
//                 //   style={{ maxWidth: '20px', maxHeight: '20px', marginRight: '10px' }} 
//                   className='log-base' 
//                   type="number" 
//                   value={base} 
//                   placeholder='Enter Value...'
//                   onChange={handleChangeBase} 
//                 />
//                 {/* <label style={{fontSize:'small', background:'none'}}>or Choose from list</label> */}
//                 <select className='select-base' value={selectedBase} onChange={handleSelectBase}>
//                   <option value="2">2</option>
//                   <option value={Math.E.toFixed(4)}>e</option>
//                   <option value="10">10</option>
//                 </select>
//                 {/* </div> */}
//               </td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className='btn-container'>
//         <button 
//           onClick={calculateLogarithm}
//           style={{ minWidth: '200px', backgroundColor: 'blue', color: 'white' }}
//         >
//           Calculate
//         </button>
//         <button 
//           onClick={resetAll}
//           style={{ minWidth: '200px', backgroundColor: 'red', color: 'white' }}
//         >
//           Reset
//         </button>
//       </div>
//     </>
//   );
// }

// export default LogarithmCalculator;
// 'use client'
// import React, { useState } from 'react';
// import './LogarithmCalculator.css'; // Ensure you create and link appropriate CSS styles similar to your PowerCalculator

// function LogarithmCalculator() {
//   const [value, setValue] = useState('');
//   const [base, setBase] = useState('2');
//   const [customBase, setCustomBase] = useState('');
//   const [result, setResult] = useState('');

//   const handleChangeValue = (event) => {
//     setValue(Number(event.target.value));
//   };

//   const handleChangeBase = (event) => {
//     setBase(event.target.value);
//     setCustomBase(''); // Clear custom base when selecting a standard base
//   };

//   const handleCustomBaseChange = (event) => {
//     setCustomBase(event.target.value);
//     setBase(event.target.value); // Update base with custom value
//   };

//   const calculateLogarithm = () => {
//     const numericalBase = customBase || base; // Use custom base if it's set, otherwise use dropdown
//     if (value > 0 && numericalBase > 0) {
//       const logResult = Math.log(value) / Math.log(numericalBase);
//       setResult(logResult);
//     } else {
//       setResult('Error: Logarithm requires positive values');
//     }
//   };

//   const resetAll = () => {
//     setValue('');
//     setBase('2');
//     setCustomBase('');
//     setResult('');
//   };

//   return (
//     <>
//       <div className='main-container'>
//         <table className='calc-table'>
//           <tbody>
//             <tr className='table-row'>
//               <td><span>log</span></td>
//               <td>
//                 <input  
//                   style={{ maxWidth: '100px', maxHeight: '20px' }} 
//                   className='my-input value' 
//                   type="number" 
//                   value={value} 
//                   placeholder='Enter Value...'
//                   onChange={handleChangeValue} 
//                 />
//               </td>
//               <td className='result'>{isNaN(result) ? "Invalid input" : result}</td>
//             </tr>
//             <tr className='table-row'>
//               <td></td>
//               <td className='input-block'>
//                 <input
//                   style={{ maxWidth: '100px', maxHeight: '20px', marginRight: '10px' }}
//                   className='my-input base'
//                   type='number'
//                   placeholder='Enter Base...'
//                   value={customBase}
//                   onChange={handleCustomBaseChange}
//                 />
//                 <select className='select-base' value={base} onChange={handleChangeBase}>
//                   <option value="2">2</option>
//                   <option value={Math.E.toFixed(4)}>e</option>
//                   <option value="10">10</option>
//                 </select>
//               </td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className='btn-container'>
//         <button 
//           onClick={calculateLogarithm}
//           style={{ minWidth: '200px', backgroundColor: 'blue', color: 'white' }}
//         >
//           Calculate
//         </button>
//         <button 
//           onClick={resetAll}
//           style={{ minWidth: '200px', backgroundColor: 'red', color: 'white' }}
//         >
//           Reset
//         </button>
//       </div>
//     </>
//   );
// }

// export default LogarithmCalculator;
// 'use client'
// import React, { useState } from 'react';
// import './LogarithmCalculator.css'; // Ensure you create and link appropriate CSS styles similar to your PowerCalculator

// function LogarithmCalculator() {
//   const [value, setValue] = useState('');
//   const [base, setBase] = useState('2');
//   const [customBase, setCustomBase] = useState('');
//   const [result, setResult] = useState('');

//   const handleChangeValue = (event) => {
//     setValue(Number(event.target.value));
//   };

//   const handleChangeBase = (event) => {
//     setBase(event.target.value);
//     setCustomBase(''); // Clear custom base when selecting a standard base
//   };

//   const handleCustomBaseChange = (event) => {
//     setCustomBase(event.target.value);
//     setBase(event.target.value); // Update base with custom value
//   };

//   const calculateLogarithm = () => {
//     const numericalBase = customBase || base; // Use custom base if it's set, otherwise use dropdown
//     if (value > 0 && numericalBase > 0) {
//       const logResult = Math.log(value) / Math.log(numericalBase);
//       setResult(logResult);
//     } else {
//       setResult('Error: Logarithm requires positive values');
//     }
//   };

//   const resetAll = () => {
//     setValue('');
//     setBase('2');
//     setCustomBase('');
//     setResult('');
//   };

//   return (
//     <>
//       <div className='main-container'>
//         <table className='calc-table'>
//           <tbody>
//             <tr className='table-row'>
//               <td><span style={{fontSize:'xx-large', background:'none'}}>log</span></td>
//               <td></td>
//               <td>
//                 <input  
//                 //   style={{ maxWidth: '100px', 
//                 //   maxHeight: '20px', 
//                 //   marginLeft: '20px', 
//                 //   backgroundColor:'red'}} // Space added next to "log"
//                   className=' value' 
//                   type="number" 
//                   value={value} 
//                   placeholder='Enter Value...'
//                   onChange={handleChangeValue} 
//                 />
//               </td>
//               <td className='result'>={isNaN(result) ? "Invalid input" : result}</td>
//             </tr>
//             <tr className='table-row'>
//               <td></td>
//               <td>
//                 <input
//                 //   style={{ maxWidth: '100px', maxHeight: '20px', marginRight: '10px' }}
//                   className='log-base'
//                   type='number'
//                   placeholder='Custom Base...'
//                   value={customBase}
//                   onChange={handleCustomBaseChange}
//                 />
//                 <select className='select-base' value={base} onChange={handleChangeBase}>
//                   <option value="2">2</option>
//                   <option value={Math.E.toFixed(4)}>e</option>
//                   <option value="10">10</option>
//                 </select>
//               </td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className='btn-container'>
//         <button 
//           onClick={calculateLogarithm}
//           style={{ minWidth: '200px', backgroundColor: 'blue', color: 'white' }}
//         >
//           Calculate
//         </button>
//         <button 
//           onClick={resetAll}
//           style={{ minWidth: '200px', backgroundColor: 'red', color: 'white' }}
//         >
//           Reset
//         </button>
//       </div>
//     </>
//   );
// }

// export default LogarithmCalculator;
// 'use client'
// import React, { useState } from 'react';
// import './LogarithmCalculator.css'; // Ensure you create and link appropriate CSS styles similar to your PowerCalculator

// function LogarithmCalculator() {
//   const [value, setValue] = useState('');
//   const [base, setBase] = useState('2'); // Single state for base
//   const [result, setResult] = useState('');

//   const handleChangeValue = (event) => {
//     setValue(Number(event.target.value));
//   };

//   const handleBaseChange = (event) => {
//     setBase(event.target.value);
//   };

//   const calculateLogarithm = () => {
//     if (value > 0 && base > 0) {
//       const logResult = Math.log(value) / Math.log(base);
//       setResult(logResult);
//     } else {
//       setResult('Error: Logarithm requires positive values');
//     }
//   };

//   const resetAll = () => {
//     setValue('');
//     setBase('2');
//     setResult('');
//   };

//   return (
//     <>
//       <div className='main-container'>
//         <table className='calc-table'>
//           <tbody>
//             <tr className='table-row'>
//               <td><span style={{fontSize:'xx-large', background:'none'}}>log</span></td>
//               <td></td>
//               <td>
//                 <input  
//                   className='value' 
//                   type="number" 
//                   value={value} 
//                   placeholder='Enter Value...'
//                   onChange={handleChangeValue} 
//                 />
//               </td>
//               <td className='result'>={isNaN(result) ? "Invalid input" : result}</td>
//             </tr>
//             <tr className='table-row'>
//               <td></td>
//               <td>
//                 <input
//                   className='log-base'
//                   type='number'
//                   placeholder='Custom Base or Select Below'
//                   value={base}
//                   onChange={handleBaseChange}
//                 />
//                 <select 
//                   className='select-base' 
//                   value={base} 
//                   onChange={handleBaseChange}>
//                   <option value="2">2</option>
//                   <option value={Math.E.toFixed(4)}>e</option>
//                   <option value="10">10</option>
//                 </select>
//               </td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className='btn-container'>
//         <button 
//           onClick={calculateLogarithm}
//           style={{ minWidth: '200px', backgroundColor: 'blue', color: 'white' }}
//         >
//           Calculate
//         </button>
//         <button 
//           onClick={resetAll}
//           style={{ minWidth: '200px', backgroundColor: 'red', color: 'white' }}
//         >
//           Reset
//         </button>
//       </div>
//     </>
//   );
// }

// export default LogarithmCalculator;
'use client'
import React, { useState } from 'react';
import './LogarithmCalculator.css';

function LogarithmCalculator() {
  const [value, setValue] = useState('');
  const [base, setBase] = useState(' ');
  const [result, setResult] = useState('');
  const [standard, setStandard] = useState(true);  // State to toggle between standard and custom base

//   const handleChangeValue = (event) => {
//     setValue(Number(event.target.value));
//   };

const handleChangeValue = (event) => {
    setValue(event.target.value); // Set the value directly as string
  };
  

  const handleChangeBase = (event) => {
    setBase(event.target.value);
  };

  const toggleBaseInput = (event) => {
    setStandard(event.target.value === 'standard');
    if (event.target.value === 'standard') {
      setBase('2');  // Reset to default standard base when switching back
    }
  };

//   const calculateLogarithm = () => {
//     if (value > 0 && base > 0) {
//       const logResult = Math.log(value) / Math.log(base);
//       setResult(logResult);
//     } else {
//       setResult('Error: Logarithm requires positive values');
//     }
//   };

const calculateLogarithm = () => {
    const numericalValue = parseFloat(value);  // Convert value to a floating-point number
    const numericalBase = parseFloat(base);    // Ensure base is also a floating-point number
  
    if (numericalValue > 0 && numericalBase > 0 && !isNaN(numericalValue) && !isNaN(numericalBase)) {
      const logResult = Math.log(numericalValue) / Math.log(numericalBase);
      setResult(logResult);
    } else {
      setResult('Error: Both value and base must be positive numbers');
    }
  };
  

  const resetAll = () => {
    setValue('');
    setBase(' ');
    setStandard(true);
    setResult('');
  };

  return (
    <>
       <label style={{marginLeft:'30px'}} >Choose Base</label>
       <div style={{marginLeft:'30px',marginBottom:'20px'}}>
        <input 
                  type="radio" 
                  checked={standard} 
                  value="standard" 
                  onChange={toggleBaseInput} 
                  style={{marginRight:'10px'}}
                /> Standard
                <input 
                  type="radio" 
                  checked={!standard} 
                  value="custom" 
                  onChange={toggleBaseInput} 
                  style={{marginLeft:'10px'}}
                /> Custom
                </div>
      <div className='main-container'>
        
        <table className='calc-table'>
         
          <tbody>
            <tr className='table-row'>
              <td><span style={{fontSize:'xx-large',background:'none'}}>log</span></td>
              <td></td>
              <td>
                <input  
                  className='value' 
                  type="number" 
                  value={value} 
                  placeholder='Enter Value...'
                  onChange={handleChangeValue} 
                />
              </td>
              <td className='result'>=  {isNaN(result) ? "Invalid input" : result}</td>
            </tr>
            <tr className='table-row'>
              <td>
                {/* <input 
                  type="radio" 
                  checked={standard} 
                  value="standard" 
                  onChange={toggleBaseInput} 
                /> Standard
                <input 
                  type="radio" 
                  checked={!standard} 
                  value="custom" 
                  onChange={toggleBaseInput} 
                /> Custom */}
              </td>
              <td>
                {standard ? (
                  <select 
                    className='select-base' 
                    value={base} 
                    onChange={handleChangeBase}>
                    <option>Base</option>
                    <option value="2">2</option>
                    <option value={Math.E.toFixed(4)}>e</option>
                    <option value="10">10</option>
                  </select>
                ) : (
                  <input
                    className='log-base'
                    type='number'
                    placeholder='Base...'
                    value={base}
                    onChange={handleChangeBase}
                  />
                )}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='btn-container'>
        <button 
          onClick={calculateLogarithm}
          style={{ minWidth: '200px', backgroundColor: 'blue', color: 'white' }}
        >
          Calculate
        </button>
        <button 
          onClick={resetAll}
          style={{ minWidth: '200px', backgroundColor: 'red', color: 'white' }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default LogarithmCalculator;
