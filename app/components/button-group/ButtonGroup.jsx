import React from 'react'
// import titlesData from '../api/db/calculations/binary_calc.json'
import { capitalizeWords } from '../../utils/utils-functions';
import './ButtonGroup.css'
import Link from 'next/link';
import { Tooltip } from 'primereact/tooltip';



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
    <div className={containerClass} >
     {data.map((item,index)=>{
        return (
         <>
         <Tooltip style={{fontSize:'0.7rem', backgroundColor:'black',color:'white',opacity:'0.7',borderRadius:'5px',padding:'10px'}} mouseTrack mouseTrackLeft={10} target=".button-target" />
        <Link  key={index} href={`/converters/${item.key_word}`}>
        <button
         className={buttonClass} 
          key={index}
          data-pr-tooltip="No content"
         data-pr-position="top"
         data-pr-at="top"
         data-pr-my="left center"
         >{capitalizeWords(item.title)}</button>
        </Link>
        </>
        )}
     )}
      </div>
    </>
  )
}

export default ButtonGroup