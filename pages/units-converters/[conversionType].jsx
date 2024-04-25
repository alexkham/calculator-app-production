import MyNavbar from '@/app/components/my-navbar/MyNavbar';
import UnitsConverter from '@/app/components/units-converter/UnitsConverter';
import React from 'react'
import '../pages.css'
import { capitalizeWords } from '@/app/utils/utils-functions';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import ButtonGroup from '@/app/components/button-group/ButtonGroup';
import links from '../../app/api/db/calculations/unit_converters/units_converters.json'
import MyAccordion from '@/app/components/my-accordion/MyAccordion';
import PagesLayout from '../layout';


// Function to generate static paths for each category and table
export async function getStaticPaths() {
  // Since you don't have a predefined list of categories and tables,
  // you can use fallback: 'blocking' to generate them on-demand
  return {
    paths: [], // No predefined paths
    fallback: 'blocking' // Generate paths on-demand
  };
}


// Function to fetch data for the static page based on URL parameters
export async function getStaticProps({ params }) {
// params are automatically decoded by Next.js
const conversionType = params.conversionType || null;
// //const filePath = path.join(process.cwd(), `app/api/db/tables/${category}_tables.json`);
// let selectedItem;
// let fileContents;
// try {
//   // const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'));
//   // selectedItem = fileContents[0]//.find(item => item.tableTitle === table);
//   const myModule = await import(`../../../app/api/db/tables/${category}_tables.json`);
//   fileContents = myModule.default;
  
//   selectedItem = fileContents.find(item => 
//   item.tableTitle.replace(/\s+/g, ' ').trim() === table.replace(/\s+/g, ' ').trim());
//   if (!selectedItem) {
//       selectedItem = null;
//     }

// } catch (error) {
//   console.error(`Failed to read file at `, error);
//   selectedItem = null; 
// }

return {
  props: {
    conversionType
    
  },
};
}

export default function page({conversionType}) {
  
  
  return (
    <>
    <PagesLayout>
    
    <div  className='main'>
      <br></br>
      <br></br>
      <br></br>
      
    {/* <div className='horizontal-container '>
      <div style={{padding:'0px'}}> */}
      
       {/* <MyAccordion title={'All Units Converters'}
      content={<ButtonGroup
      directory={'units-converters'}
      data={links}
      buttonClass={'button-target'} 
      containerClass={'button-group-container-vertical'}
      
      ></ButtonGroup>}></MyAccordion> */}
      {/* <div className='button-group-container'> */}
      <ButtonGroup
      directory={'units-converters'}
      data={links}
      buttonClass={'link-btn'} 
      containerClass={'flat '}
      
      ></ButtonGroup>
      {/* </div>
      */}
    <h2 className='page-title'>  {capitalizeWords(conversionType)} Converter</h2> 
    {/* <div className='converter-container'>     */}
   
    <UnitsConverter conversionType={conversionType}></UnitsConverter>
    {/* {conversionType!='temperature'&&<a href={`/tables/conversions/${conversionType}`}>Go to {capitalizeWords(conversionType)} Conversion Table</a>} */}
    {/* </div> */}
    {/* </div> */}
    
    {/* <ButtonGroup
     directory={'units-converters'}
     data={links}
    //  buttonClass={'button-target'} 
     containerClass={'button-group-container-vertical'}
     buttonClass={'button-target'}
     ></ButtonGroup> */}
    {/* </div> */}
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
   
    
    </div>
    </PagesLayout>
    </>
  )
}
