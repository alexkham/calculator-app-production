import React from 'react'
// import titlesData from '../api/db/calculations/binary_calc.json'
import { capitalizeWords } from '../../utils/utils-functions';
import './ButtonGroup.css'
import Link from 'next/link';




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



function ButtonGroup({data,buttonClass,containerClass,groupTitle}) {
   
  return (
    < >
    <h2>{groupTitle}</h2>
   
     {data.map((item,index)=>{
        return (
         <div className={containerClass} key={index}>
         
        <Link  key={index} href={`/converters/${item.key_word}`}>
        <button
         className={buttonClass} 
          key={index}>{capitalizeWords(item.title)}</button>
        </Link>
        </div>
        )}
     )}
      
    </>
  )
}

export default ButtonGroup