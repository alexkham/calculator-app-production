import React from 'react'
// import titlesData from '../api/db/calculations/binary_calc.json'
import { capitalizeWords } from '../../utils/utils-functions';
import './ButtonGroup3.css'
import Link from 'next/link';
//import { navigate } from 'next/navigate';
//import { useNavigate } from 'next/navigation';







const buttonStyle = {
    backgroundColor: '#1d6bd8', // Default background color (you can change it)
    color: 'white',
    fontWeight: '400',
    padding: '0.5rem 1rem',
    borderRadius: '3px',
    cursor: 'pointer',
    margin :'10px',
    border:'solid 1px gray'
  
    
  };




//     <div className='btn-outer-container'>
//     <h2 className='group-title'>{groupTitle}</h2>
//     <div className='containerClass'>
//         {data.map((item, index) => (
//             <Link key={index} href={`/${directory}/${item.key_word}`}>
//                 <button className='button-target-horizontal'>
//                     {capitalizeWords(item.title)}
//                 </button>
//             </Link>
//         ))}
//     </div>
// </div>

function ButtonGroup({ data, buttonClass, containerClass, groupTitle, directory }) {
  return (
      <div className={containerClass}>
          {data.map((item, index) => (
            
              <Link
              
              key={index} href={`/${directory}/${item.key_word}`} passHref>
                  <span className={buttonClass}>{capitalizeWords(item.title)}</span>
              </Link>
             
          ))}
      </div>
  );
}
 
export default ButtonGroup