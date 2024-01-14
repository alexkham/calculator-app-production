import GenericTable from '@/app/components/generic-table/GenericTable'
import React from 'react'
import data from '../../app/api/db/calculations/unit_converters/prefixes/prefixes_all.json'
import './prefixes.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import MyNavbar from '@/app/components/my-navbar/MyNavbar'


export default function index() {
  return (
    <>
    <MyNavbar></MyNavbar>
    <br></br>
    <br></br>
    <br></br>
    <div className='table-container'>
    <GenericTable tableData={data}></GenericTable>
    </div>
    <ScrollUpButton className={'scroll-button'}></ScrollUpButton>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </>
    
    )
}
