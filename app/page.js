
import BinaryNumberDemo from './components/binary-numbers-demo/BinaryNumbersDemo'
import MyTabs from './components/my-tabs/MyTabs'
import tabsData from './api/db/tabs-data/tabsData.js'
import DecimalToAnyBaseConverter from './components/decimal-to-any/DecimalToAnyDemo'
import ButtonGroup from './components/button-group/ButtonGroup'
import buttonData from './api/db/calculations/converters/converters.json'
import buttonData2 from './api/db/calculations/unit_converters/units_converters.json'
import styles from './page.module.css'
import Tooltip2 from './components/tooltip/Tooltip2'
import Tooltip from './components/tooltip/Tooltip2'
import MyAccordion from './components/my-accordion/MyAccordion'
import './globals.css'



export default function Home() {
  
  return (

   
    <div className='main'>
     
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
       {/* <ButtonGroup data={buttonData}
        buttonClass={'button-target'} 
        containerClass={'button-group-container'}
        groupTitle={"Decimal Numbers Converters"}
        directory={'converters'}></ButtonGroup> */}
       
       <MyAccordion title={"Decimal Numbers Converters"}
       content={<ButtonGroup data={buttonData}
       buttonClass={'button-target'} 
       containerClass={'button-group-container'}
      //  groupTitle={"Decimal Numbers Converters"}
       directory={'converters'}></ButtonGroup>}
       
       ></MyAccordion>
        {/* <ButtonGroup data={buttonData2}
        buttonClass={'button-target'} 
        containerClass={'button-group-container-vertical'}
        groupTitle={"Decimal Numbers Converters"}
        directory={'converters'}></ButtonGroup> */}
       
        
        <MyAccordion title={"Units Converters"} content={<ButtonGroup data={buttonData2}
        buttonClass={'button-target'} 
        containerClass={'button-group-container-vertical'}
        // groupTitle={"Decimal Numbers Converters"}
        directory={'units-converters'}></ButtonGroup>}></MyAccordion>
        <br></br>
        <br></br>
        {/* <Tooltip2 text={'Tooltip'}>
        <div>?</div>
        </Tooltip2> */}
        
    <br></br>   
    <br></br>   
    <br></br>   
    <br></br>   
    <br></br>   
    <br></br>   
    <br></br> 
    {/* <MyAccordion title={'  Title'} content={'content'}></MyAccordion>   */}
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
     </div>     
       
  
  )
}
