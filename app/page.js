

import BinaryNumberDemo from './components/binary-numbers-demo/BinaryNumbersDemo'
import MyTabs from './components/my-tabs/MyTabs'
import tabsData from './api/db/tabs-data/tabsData.js'
import DecimalToAnyBaseConverter from './components/decimal-to-any/DecimalToAnyDemo'
import ButtonGroup from './components/button-group/ButtonGroup'
import buttonData from './api/db/calculations/converters/converters.json'
import styles from './page.module.css'
import { ScrollTop } from 'primereact/scrolltop';


export default function Home() {
  
  return (

   
    <div className={styles.main}>
     
        
       <ButtonGroup data={buttonData}
        buttonClass={'button-target'} 
        containerClass={'button-group-container'}
        groupTitle={"Decimal Numbers Converters"}></ButtonGroup>

          
     </div>     
       
  
  )
}
