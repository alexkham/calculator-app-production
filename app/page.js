
 import styles from './page.module.css'
import BinaryNumberDemo from './components/binary-numbers-demo/BinaryNumbersDemo'
import MyTabs from './components/my-tabs/MyTabs'
import tabsData from './api/db/tabs-data/tabsData.js'
import DecimalToAnyBaseConverter from './components/decimal-to-any/DecimalToAnyDemo'




export default function Home() {
  return (
    // <main className={styles.main}>
    <div className={styles.main}>
      <br></br>   
     <BinaryNumberDemo></BinaryNumberDemo>   
      <br></br>
      <br></br>
      <br></br>
      <MyTabs tabs={tabsData}></MyTabs>
      <br></br>
      <br></br>
      <DecimalToAnyBaseConverter base={"hexadecimal"} n={16} sanitizedLength={100000}></DecimalToAnyBaseConverter>
      <br></br>
      <br></br>
      <br></br>
      <DecimalToAnyBaseConverter base={"binary"} n={2} sanitizedLength={10000}></DecimalToAnyBaseConverter>
      <br></br>
      <br></br>
      <br></br>
      <DecimalToAnyBaseConverter base={"octal"} n={8} sanitizedLength={100000}></DecimalToAnyBaseConverter>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     
     </div>     
       
  
  )
}
