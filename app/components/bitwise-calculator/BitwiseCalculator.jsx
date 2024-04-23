// // 'use client'
// // import React, { useState } from 'react';
// // import './BitwiseCalculator.css'

// // function BitwiseCalculator() {
// //     const [inputA, setInputA] = useState('');
// //     const [inputB, setInputB] = useState('');
// //     const [operation, setOperation] = useState('AND');
// //     const [result, setResult] = useState('');

// //     const handleCalculate = () => {
// //         const numA = parseInt(inputA);
// //         const numB = parseInt(inputB);
// //         let calcResult = 0;

// //         switch (operation) {
// //             case 'AND':
// //                 calcResult = numA & numB;
// //                 break;
// //             case 'OR':
// //                 calcResult = numA | numB;
// //                 break;
// //             case 'XOR':
// //                 calcResult = numA ^ numB;
// //                 break;
// //             case 'NOT':
// //                 // NOT is typically unary, applying only to inputA in this example
// //                 calcResult = ~numA;
// //                 break;
// //             case 'LSHIFT':
// //                 calcResult = numA << numB;
// //                 break;
// //             case 'RSHIFT':
// //                 calcResult = numA >> numB;
// //                 break;
// //             default:
// //                 calcResult = 0;
// //         }

// //         setResult(calcResult);
// //     };

// //     const resetAll=()=>{
// //         setInputA('');
// //         setInputB('');
// //         setResult('');
        
// //     }

// //     return (
// //         <> <h1>Bitwise Operations Calculator</h1>
// //         <div className='parent'>
            
// //         <div className='left-container'>
           
// //             <input
// //                 className='my-input'
// //                 type="number"
// //                 value={inputA}
// //                 onChange={(e) => setInputA(e.target.value)}
// //                 placeholder="Number 1"
// //             />
// //             <select 
// //             value={operation}
// //             className='my-input'
// //             onChange={(e) => setOperation(e.target.value)}>
// //                 <option value="AND">AND</option>
// //                 <option value="OR">OR</option>
// //                 <option value="XOR">XOR</option>
// //                 <option value="NOT">NOT</option>
// //                 <option value="LSHIFT">Left Shift (&lt;&lt;) </option>
// //                 <option value="RSHIFT">Right Shift (&gt;&gt;)</option>
// //             </select>
// //             {operation !== 'NOT' && (
// //                 <input
// //                     className='my-input'
// //                     type="number"
// //                     value={inputB}
// //                     onChange={(e) => setInputB(e.target.value)}
// //                     placeholder="Number 2 "
// //                 />
// //             )}
            
// //             <button 
// //             className='calculate-btn my-input'
// //             onClick={handleCalculate}>Calculate</button>
// //             <button
// //             onClick={resetAll}
// //             style={{backgroundColor:'gray'}}
// //             className='calculate-btn my-input'>Reset</button>
// //             <h2>Result: </h2>
// //             {result&&<span>{result}</span>}
// //         </div>
// //         <div className='right-container'> right container</div>
        
// //         </div>
// //         </>
// //     );
// // }

// // export default BitwiseCalculator;

// 'use client'
// import React, { useState } from 'react';
// import './BitwiseCalculator.css';

// function BitwiseCalculator() {
//     const [inputA, setInputA] = useState('');
//     const [inputB, setInputB] = useState('');
//     const [operation, setOperation] = useState('AND');
//     const [result, setResult] = useState('');
//     const [binaryA, setBinaryA] = useState(''); // State for binary representation of inputA
//     const [binaryB, setBinaryB] = useState(''); // State for binary representation of inputB
//     const [binaryResult, setBinaryResult] = useState(''); // State for binary representation of result

//     const handleCalculate = () => {
//         const numA = parseInt(inputA);
//         const numB = parseInt(inputB);
//         let calcResult = 0;

//         switch (operation) {
//             case 'AND':
//                 calcResult = numA & numB;
//                 break;
//             case 'OR':
//                 calcResult = numA | numB;
//                 break;
//             case 'XOR':
//                 calcResult = numA ^ numB;
//                 break;
//             case 'NOT':
//                 calcResult = ~numA;
//                 break;
//             case 'LSHIFT':
//                 calcResult = numA << numB;
//                 break;
//             case 'RSHIFT':
//                 calcResult = numA >> numB;
//                 break;
//             default:
//                 calcResult = 0;
//         }

//         setResult(calcResult);
//         setBinaryA(numA.toString(2));
//         setBinaryB(numB.toString(2));
//         setBinaryResult(calcResult.toString(2));
//     };

//     const resetAll=()=>{
//         setInputA('');
//         setInputB('');
//         setResult('');
//         setBinaryA('');
//         setBinaryB('');
//         setBinaryResult('');
//     }

//     return (
//         <> <h1>Bitwise Operations Calculator</h1>
//         <div className='parent'>
//             <div className='left-container'>
//                 <input
//                     className='my-input'
//                     type="number"
//                     value={inputA}
//                     onChange={(e) => setInputA(e.target.value)}
//                     placeholder="Number 1"
//                 />
//                 <select 
//                     value={operation}
//                     className='my-input'
//                     onChange={(e) => setOperation(e.target.value)}>
//                     <option value="AND">AND</option>
//                     <option value="OR">OR</option>
//                     <option value="XOR">XOR</option>
//                     <option value="NOT">NOT</option>
//                     <option value="LSHIFT">Left Shift (&lt;&lt;) </option>
//                     <option value="RSHIFT">Right Shift (&gt;&gt;)</option>
//                 </select>
//                 {operation !== 'NOT' && (
//                     <>
//                     <label style={{background:'none'}}>Number 2 (decimal)</label>
//                     <input
//                         className='my-input'
//                         type="number"
//                         value={inputB}
//                         onChange={(e) => setInputB(e.target.value)}
//                         placeholder="Number 2 "
//                     />
//                     </>
//                 )}
//                 <button 
//                     className='calculate-btn my-input'
//                     onClick={handleCalculate}>Calculate</button>
//                 <button
//                     onClick={resetAll}
//                     style={{backgroundColor:'gray'}}
//                     className='calculate-btn my-input'>Reset</button>
//                 <h2>Result: </h2>
//                 {result && <span>{result}</span>}
//             </div>
//             <div className='right-container'>
//                 {/* <h3>Binary Representations</h3> */}
//                 <label>Number 1  (Binary): </label>
//                 <p className='my-input'>{binaryA}</p>
//                 <label>Number 2 (Binary):</label>
//                 {operation !== 'NOT' && <p className='my-input'> {binaryB}</p>}
//                 <label>Result (Binary): </label>
//                 <p className='my-input'>{binaryResult}</p>
//             </div>
//         </div>
//         </>
//     );
// }

// export default BitwiseCalculator;

'use client'
import React, { useState } from 'react';
import './BitwiseCalculator.css';
import { operationExplanations } from './operations';
import MarkdownComponent from '../markdown-component/MarkdownComponent';

function BitwiseCalculator() {
    const [inputA, setInputA] = useState('');
    const [inputB, setInputB] = useState('');
    const [operation, setOperation] = useState('AND');
    const [result, setResult] = useState('');
    const [binaryA, setBinaryA] = useState(''); // State for binary representation of inputA
    const [binaryB, setBinaryB] = useState(''); // State for binary representation of inputB
    const [binaryResult, setBinaryResult] = useState(''); // State for binary representation of result

    // Helper function to get 32-bit binary string
    const to32BitBinaryString = (num) => {
        return (num >>> 0).toString(2).padStart(32, '0');
    };

    // Function to split binary string into spans
    const renderBinarySpans = (binaryString) => {
        return binaryString.split('').map((bit, index) => (
            <span key={index} className="bit">{bit}</span>
        ));
    };

    const handleCalculate = () => {
        const numA = parseInt(inputA);
        const numB = parseInt(inputB);
        let calcResult = 0;

        switch (operation) {
            case 'AND':
                calcResult = numA & numB;
                break;
            case 'OR':
                calcResult = numA | numB;
                break;
            case 'XOR':
                calcResult = numA ^ numB;
                break;
            case 'NOT':
                calcResult = ~numA;
                break;
            case 'LSHIFT':
                calcResult = numA << numB;
                break;
            case 'RSHIFT':
                calcResult = numA >> numB;
                break;
            default:
                calcResult = 0;
        }

        setResult(calcResult);
        setBinaryA(to32BitBinaryString(numA));
        setBinaryB(to32BitBinaryString(numB));
        setBinaryResult(to32BitBinaryString(calcResult));
    };

    const resetAll = () => {
        setInputA('');
        setInputB('');
        setResult('');
        setBinaryA('');
        setBinaryB('');
        setBinaryResult('');
    }

    return (
        <>
            <h1 className='title'>Bitwise Operations Calculator for 32-Bit Numbers</h1>
            <div className='parent'>
                <div className='left-container'>
                    <input
                        className='my-input'
                        type="number"
                        value={inputA}
                        onChange={(e) => setInputA(e.target.value)}
                        placeholder="Number 1 (decimal)"
                    />
                    <select 
                        className='my-input'
                        value={operation}
                        onChange={(e) => setOperation(e.target.value)}
                    >
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                        <option value="XOR">XOR</option>
                        <option value="NOT">NOT</option>
                        <option value="LSHIFT">Left Shift (&lt;&lt;)</option>
                        <option value="RSHIFT">Right Shift (&gt;&gt;)</option>
                    </select>
                    {operation !== 'NOT' && (
                        <input
                            className='my-input'
                            type="number"
                            value={inputB}
                            onChange={(e) => setInputB(e.target.value)}
                            placeholder="Number 2 (decimal)"
                        />
                    )}
                    <div className='tooltip-container'>

                    <button
                    
                        className='calculate-btn my-input '
                        onClick={handleCalculate}
                    >Calculate</button>
                     <span 
                     className='tooltip-icon' 
                     title="Do not forget to press 'Calculate' 
                     button before you check the result.">?</span>
                     </div>
                    <button 
                        className='reset-btn my-input'
                        onClick={resetAll}
                        style={{ backgroundColor: 'gray' }}
                        
                    >Reset</button>
                    <label 
                    style={{background:'none',marginLeft:'10px',fontWeight:'bold'}}>
                        Result (decimal): </label>
                     <p className='my-input' placeholder={'result'} style={{minHeight:'40px'}}>{result}</p>
                </div>
                {/* <div className='right-container'>
                    <label>Number 1 (Binary): </label>
                    <p >{renderBinarySpans(binaryA)}</p>
                    <p className='my-input'>{operation}</p>
                    {operation !== 'NOT' && (
                        <>
                            <label>Number 2 (Binary): </label>
                            <p >{renderBinarySpans(binaryB)}</p>
                        </>
                    )}
                    <label>Result (Binary): </label>
                    <p >{renderBinarySpans(binaryResult)}</p>
                </div> */}
                <div className='right-container'>
                    <table className='bitwise-table'>
                        <tbody>
                            <tr style={{ height: '50px' }}>
                                <td >Number 1 (Binary):</td>
                                {binaryA.split('').map((bit, index) => <td  className='bit' key={index}>{bit}</td>)}
                            </tr>
                            {/* <tr>{"______________"}</tr> */}
                            <tr className='operation' style={{ height: '50px' }}>
                                <td>Operation:</td>
                                <td colSpan={32} style={{textAlign: 'center'}}>{operation}</td>
                            </tr>
                            {/* <tr>{"______________"}</tr> */}
                            {operation !== 'NOT' && (
                                <tr style={{ height: '50px' }}>
                                    <td>Number 2 (Binary):</td>
                                    {binaryB.split('').map((bit, index) => <td className='bit' key={index}>{bit}</td>)}
                                </tr>
                            )}
                            <tr style={{ height: '50px' }}>
                                <td>Result (Binary):</td>
                                {binaryResult.split('').map((bit, index) => <td className='bit' key={index}>{bit}</td>)}
                            </tr>
                           
                        </tbody>
                    </table>
                   <br></br>
                  
                  { binaryResult&&<div style={{padding:'10px',width:'100%',justifyContent:'center'}}>
                    <MarkdownComponent article={operationExplanations[operation]}></MarkdownComponent>
                    </div>}
               </div>
   
            </div>
        </>
    );
}

export default BitwiseCalculator;
