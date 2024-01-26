import GenericTable from '@/app/components/generic-table/GenericTable'
import React from 'react'
import prefixes from '../../app/api/db/tables/units-conversion/prefixes_all.json'
import allUnits from '../../app/api/db/tables/units-conversion/all_si_units.json'
import './prefixes.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import MyNavbar from '@/app/components/my-navbar/MyNavbar'
import siBaseUnits from '../../app/api/db/tables/units-conversion/si_base_units.json'
import siDerivedUnits from '../../app/api/db/tables/units-conversion/derived_si_units.json'
import siDerivedUnitsSpecial from '../../app/api/db/tables/units-conversion/derived_si_units_special_names.json'
import siDerivedUnitsSpecialDerived from '../../app/api/db/tables/units-conversion/derived_si_units_with_derived_units.json'
import GenericTable2 from '@/app/components/generic-table/GenericTable2'
import linksObj from '../../app/api/db/calculations/unit_converters/units_converters.json'
import { capitalizeWords } from '@/app/utils/utils-functions'

export default function index() {
  const  links=linksObj.map((link)=>link.key_word).filter(link=>link!='temperature')
  console.log(links)
  return (
    <>
    <MyNavbar></MyNavbar>
    <br></br>
    <br></br>
    
    <br></br>
    <br></br>
    <br></br>
    <div id='on-page-nav'></div>
    <br></br>
    <br></br>
    <br></br>
    
    <br></br>
    <br></br>
    <br></br>
    <nav className='on-page-nav' >
          <a href="#table1">Metric Prefixes</a>
          <a href="#table2">SI Base Units</a>
          <a href="#table3">SI Derived Units Expressed in Terms of SI Base Units</a>
          <a href="#table4">SI Coherent Derived Units with Special Names and Symbols</a>
          <a href="#table5">Examples of SI coherent derived units expressed with the aid of SI derived units having special names and symbols</a>
          {links.map((link,index)=>{
            return(
              <a key={index} href={`/tables/conversions/${link}`}>{capitalizeWords(link)} Conversion Table</a>
            )
          })}
     </nav>

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
    <div  id='table1'>

      
      <br></br>
      <br></br>
      <br></br>
      <a href="#on-page-nav">Back to Top</a>

      
    <GenericTable tableData={prefixes}></GenericTable>
    </div>


    <br></br>
    <div id='table2'></div>
    
      <br></br>
      <br></br>
      <br></br>
      <a href="#on-page-nav">Back to Top</a>
    
    <GenericTable tableData={siBaseUnits}
     styleLeftColumnLikeHeader={true}
     ></GenericTable>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div id='table3'></div>
    
      <br></br>
      <br></br>
      <br></br>
      <a href="#on-page-nav">Back to Top</a>
    <GenericTable2 tableData={siDerivedUnits}
     styleLeftColumnLikeHeader={true}
     
    ></GenericTable2>
    
    <br></br>
    <br></br>
    {/* <GenericTable2
    tableData={siDerivedUnits}
    styleLeftColumnLikeHeader={true}
    ></GenericTable2> */}
    {/* headerColor={"#8c66ff"} */}
    {/* <GenericTable tableData={allUnits}></GenericTable>
    <br></br> */}
    <br></br>
    <br></br>
    <br></br>
    <div id='table4'></div>
    <br></br>
    <br></br>
    <br></br>
    <a href="#on-page-nav">Back to Top</a>
    <GenericTable2 tableData={siDerivedUnitsSpecial}
    styleLeftColumnLikeHeader={true}></GenericTable2>
    <br></br>
    <br></br>
    <br></br>
    <div id='table5'></div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <a href="#on-page-nav">Back to Top</a>
    <GenericTable2 
    tableData={siDerivedUnitsSpecialDerived}
    styleLeftColumnLikeHeader={true}></GenericTable2>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <ScrollUpButton className={'scroll-button'}></ScrollUpButton>
    <br></br>
    </>
    
    )
}
