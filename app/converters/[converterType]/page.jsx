import React from 'react'
import './converters.css'
import data from '../../api/db/calculations/converters/converters.json'
import DecimalToAnyBaseConverter from '@/app/components/decimal-to-any/DecimalToAnyDemo';
import ButtonGroup from '@/app/components/button-group/ButtonGroup';
import buttonData from '../../api/db/calculations/converters/converters.json'
import GoHomeButton from '@/app/components/GoHomeButton';


// Create a lookup object
const lookup = data.reduce((acc, item) => {
    acc[item.key_word] = item;
    return acc;
}, {});


export default function page({params}) {
    const decodedConverterType = decodeURI(params.converterType);
    const converter=lookup[decodedConverterType]
  return (
    <div className='main'>
      
        
    <DecimalToAnyBaseConverter base={decodedConverterType}
     n={converter.base} 
     sanitizedLength={converter.max_value}></DecimalToAnyBaseConverter>
     <div className='button-container-2'>
     <GoHomeButton className={'home-button'}></GoHomeButton>
     <ButtonGroup data={buttonData}
        buttonClass={'button'} 
        containerClass={'button-container'}
        groupTitle={""}></ButtonGroup> 
      </div>  
    
    </div>
  )
}
