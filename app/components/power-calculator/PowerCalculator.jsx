// 'use client'
// import React, { useState } from 'react';
// import './PowerCalculator.css'

// function PowerCalculator() {
//   const [x, setX] = useState('');
//   const [y, setY] = useState('');
//   const [result,setResult]=useState('')

//   const handleChangeX = (event) => {
//     setX(Number(event.target.value));
//   };

//   const handleChangeY = (event) => {
//     setY(Number(event.target.value));
//   };



//   const calculatePower=()=>{
//       // Calculate power dynamically
//   const power = Math.pow(x, y);
//   setResult(power);

//   }

//   const resetAll=()=>{
//     setX('');
//     setY('');
//     setResult('')
//   }

//   return (
//     <>
//     <div className='main-container'>
//         <sub>
//      <div></div>
//       <input  
//       style={{maxWidth:'100px',maxHeight:'20px'}} 
//       className='my-input base' 
//       type="number" 
//       value={x} 
//       placeholder='Enter Base...'
//       onChange={handleChangeX} />
//       </sub>
//       <sup>
//         <input 
//         className='my-input power'
        
//         placeholder='Enter Exponent'
//         type="number" value={y} onChange={handleChangeY} />
//         <div style={{minHeight:'30px'}}></div>
//       </sup>
//       <div></div>
      
//       <span 
//       className='result'
//       > = {result}</span>
        
//     </div>
//     <div className='btn-container'>
//       <button 
//       onClick={calculatePower}
//       style={{minWidth:'200px',backgroundColor: 'blue',color:'white'}}
//       >Calculate</button>
//       <button 
//       style={{minWidth:'200px',backgroundColor: 'red',color:'white'}}
//       onClick={resetAll}>Reset</button>
//     </div>
//     </>
//   );
// }

// export default PowerCalculator;
'use client'
import React, { useState } from 'react';
import './PowerCalculator.css';

function PowerCalculator() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [result, setResult] = useState('');

  const handleChangeX = (event) => {
    setX(Number(event.target.value));
  };

  const handleChangeY = (event) => {
    setY(Number(event.target.value));
  };

  const calculatePower = () => {
    const power = Math.pow(x, y);
    setResult(power);
  };

  const resetAll = () => {
    setX('');
    setY('');
    setResult('');
  };

  return (
    <>
      <div className='main-container'>
        <table className='calc-table'>
          <tbody>
            <tr className='table-row'>
              <td></td>
              <td className='power'>
                <input 
                  style={{ maxWidth: '100px', maxHeight: '20px', marginBottom: '20px' }} // reduced space below this input
                  className='my-input power'
                  placeholder='Enter Exponent'
                  type="number" 
                  value={y} 
                  onChange={handleChangeY} 
                />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr className='table-row'>
              <td className='base'>
                <input  
                  style={{ maxWidth: '100px', maxHeight: '20px', marginTop: '0px' }} 
                  className='my-input base' 
                  type="number" 
                  value={x} 
                  placeholder='Enter Base...'
                  onChange={handleChangeX} 
                />
              </td>
              <td></td>
              <td></td>
              <td className='result' colSpan="2" style={{ textAlign: 'flex-end',marginLeft:'30px' }}>         = {result}</td>
            </tr>
            {/* <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                = {result}
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div className='btn-container'>
        <button 
          onClick={calculatePower}
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

export default PowerCalculator;
