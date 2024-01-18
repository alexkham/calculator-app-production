import GenericTable from '@/app/components/generic-table/GenericTable'
import React from 'react'
import prefixes from '../../app/api/db/tables/units-conversion/prefixes_all.json'
import allUnits from '../../app/api/db/tables/units-conversion/all_si_units.json'
import './prefixes.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import MyNavbar from '@/app/components/my-navbar/MyNavbar'
import siBaseUnits from '../../app/api/db/tables/units-conversion/si_base_units.json'
import siDerivedUnits from '../../app/api/db/tables/units-conversion/derived_si_units.json'


export default function index() {
  return (
    <>
    <MyNavbar></MyNavbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <nav className='on-page-nav'>
          <a href="#table1">Metric Prefixes</a>
          <a href="#table2">SI Base Units</a>
          <a href="#table3">SI Derived Units Expressed in Terms of SI Base Units</a>
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
    <div className='table-container' id='table1'>
      <br></br>
    <GenericTable tableData={prefixes}></GenericTable>
    </div>

    <br></br>
    <div id='table2'></div>
    <br></br>
    
    <GenericTable tableData={siBaseUnits}></GenericTable>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div id='table3'></div>
    <br></br>
    <GenericTable tableData={siDerivedUnits}></GenericTable>
    
    <br></br>
    <br></br>
    {/* <GenericTable tableData={allUnits}></GenericTable>
    <br></br> */}
    <br></br>

    <ScrollUpButton className={'scroll-button'}></ScrollUpButton>
    <br></br>
    </>
    
    )
}
