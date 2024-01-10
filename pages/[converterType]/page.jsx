import React from 'react';
import Head from 'next/head';
import DecimalToAnyBaseConverter from '@/app/components/decimal-to-any/DecimalToAnyDemo';
import ButtonGroup from '@/app/components/button-group/ButtonGroup';
import data from './app/api/db/calculations/converters/converters.json';
import buttonData from './app/api/db/calculations/converters/converters.json';
import './app/converters/converters.css';

export default function Page({ decodedConverterType, converter }) {
  return (
    <>
      <Head>
        <title>Decimal to {decodedConverterType} Numbers Converter</title>
        <meta name="description" content={`Convert decimal numbers to ${decodedConverterType} with visual demo showing how the number is created`} />
        <meta property="og:title" content={`Decimal to ${decodedConverterType} Numbers Converter`} />
        <link rel="canonical" href={`https://www.calculateonline.net/converters/${decodedConverterType}`} />
      </Head>

      <div className='main'>
        <div className='button-container-2'>
          <ButtonGroup 
            data={buttonData}
            buttonClass={'button-target'} 
            containerClass={'button-group-container'}
            groupTitle={""} />
        </div>  

        <h2>{converter.text}</h2> {/* Rendering the text field */}
        <DecimalToAnyBaseConverter 
          base={decodedConverterType}
          n={converter.base} 
          sanitizedLength={converter.max_value} />

        {/* Other page content */}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const decodedConverterType = decodeURI(params.converterType);
  const converter = data.find(item => item.key_word === decodedConverterType) || { base: 'Not Found', max_value: 'Not Found', text: 'Content not found' };

  return {
    props: {
      decodedConverterType,
      converter,
    },
  };
}

export async function getStaticPaths() {
  const paths = data.map(item => ({ params: { converterType: item.key_word } }));

  return {
    paths,
    fallback: false,
  };
}
