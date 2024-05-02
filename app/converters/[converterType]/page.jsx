import React from 'react'
import './converters.css'
import data from '../../api/db/calculations/converters/converters.json'
import DecimalToAnyBaseConverter from '@/app/components/decimal-to-any/DecimalToAnyDemo';
import ButtonGroup from '@/app/components/button-group/ButtonGroup';
import buttonData from '../../api/db/calculations/converters/converters.json'
import Head from 'next/head';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import MarkdownComponent from '@/app/components/markdown-component/MarkdownComponent';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm'
import 'katex/dist/katex.min.css'; 


// Create a lookup object
const lookup = data.reduce((acc, item) => {
    acc[item.key_word] = item;
    return acc;
}, {});


export default function page({params}) {
    const decodedConverterType = decodeURI(params.converterType);
    const converter=lookup[decodedConverterType]

   

  
  return (
    <>
    <Head>
        <title>Decimal  to {decodedConverterType} Numbers Converter</title>
        <meta name="description" content={`Convert decimal numbers to ${decodedConverterType} with visual demo showing how the number created`}  />
        <meta property="og:title" content={`Decimal  to ${decodedConverterType} Numbers Converter`} />
        
        <link rel="canonical" href={`https://www.calculateonline.net/converters/${decodedConverterType}`}/>
        
      </Head>
   
    <div className='main'>
      
      
      {/* <div className='button-container-2'> */}
                
         <ButtonGroup data={buttonData}
          
             buttonClass={'my-span link-btn' } 
             containerClass={'button-group-container'}
            groupTitle={""}
            directory={'converters'}></ButtonGroup> 
          {/* </div>   */}
          <br></br>
          
        
    <DecimalToAnyBaseConverter base={decodedConverterType}
     n={converter?.base} 
     sanitizedLength={converter?.max_value}></DecimalToAnyBaseConverter>
       
     <br></br>
     <br></br>
      
     <br></br>
     <br></br>
    
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <ScrollUpButton></ScrollUpButton>
      
    </div>
    </>
  )
}
