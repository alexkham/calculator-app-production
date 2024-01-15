import MyNavbar from '@/app/components/my-navbar/MyNavbar';
import UnitsConverter from '@/app/components/units-converter/UnitsConverter';
import React from 'react'
import '../pages.css'
import { capitalizeWords } from '@/app/utils/utils-functions';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import ButtonGroup from '@/app/components/button-group/ButtonGroup';
import links from '../../app/api/db/calculations/unit_converters/units_converters.json'
import MyAccordion from '@/app/components/my-accordion/MyAccordion';


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
    <MyNavbar></MyNavbar>
    <div  className='main'>
      <br></br>
      <br></br>
      <br></br>
    <h2 className='page-title'>  {capitalizeWords(conversionType)} Converter</h2> 
    <div className='horizontal-container '>
    <div className='converter-container'>    
    
    <UnitsConverter conversionType={conversionType}></UnitsConverter>
    </div>
    <div style={{maxWidth:'400px',marginRight:'50px'}}>
    <MyAccordion title={'All Units Converters'}
    content={<ButtonGroup
      directory={'units-converters'}
      data={links}
     //  buttonClass={'button-target'} 
      containerClass={'button-group-container-vertical'}
      buttonClass={'button-target'}
      ></ButtonGroup>}></MyAccordion>
      </div>
    {/* <ButtonGroup
     directory={'units-converters'}
     data={links}
    //  buttonClass={'button-target'} 
     containerClass={'button-group-container-vertical'}
     buttonClass={'button-target'}
     ></ButtonGroup> */}
    </div>
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
    <ScrollUpButton className={'scroll-button'}></ScrollUpButton>
    </div>
    </>
  )
}
