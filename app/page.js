

import BinaryNumberDemo from './components/binary-numbers-demo/BinaryNumbersDemo'
import MyTabs from './components/my-tabs/MyTabs'
import tabsData from './api/db/tabs-data/tabsData.js'
import DecimalToAnyBaseConverter from './components/decimal-to-any/DecimalToAnyDemo'
import ButtonGroup from './components/button-group/ButtonGroup'
import buttonData from './api/db/calculations/converters/converters.json'
import styles from './page.module.css'



export default function Home() {
  
  return (

    // <main className={styles.main}>
    <div className={styles.main}>
     
        
       <ButtonGroup data={buttonData}
        buttonClass={'button'} 
        containerClass={'button-container'}
        groupTitle={"Decimal Numbers Converters"}></ButtonGroup>

      {/* <MyTabs tabs={tabsData}></MyTabs> */}
      
      {/* <DecimalToAnyBaseConverter base={"hexadecimal"} n={16} sanitizedLength={100000}></DecimalToAnyBaseConverter> */}
     
      {/* <DecimalToAnyBaseConverter base={"binary"} n={2} sanitizedLength={10000}></DecimalToAnyBaseConverter> */}
      
      {/* <DecimalToAnyBaseConverter base={"octal"} n={8} sanitizedLength={100000}></DecimalToAnyBaseConverter> */}
      
      <br></br>
     
     </div>     
       
  
  )
}
