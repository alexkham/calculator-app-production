import NumberConverter from '@/app/components/number-converter/NumberConverter'
import React from 'react'
import './base-converter.css'
import MyNavbar from '@/app/components/my-navbar/MyNavbar'

export default function index() {
  return (
    <div className='frame'>
      <MyNavbar></MyNavbar>
      <br></br>
      <br></br>
    <h2 className='page-title'>Base-to-Base Number Converter</h2>
    <NumberConverter
     styles={{titleClass : 'title',bodyClass:'converter-body', mainClass : 'main',
     inputClass:'input-element',selectClass:'select-element',errorClass:'error-message',buttongroupClass:'button-group',
     selectgroupClass:'select-group',resetbuttonClass:'reset-button',convertbuttonClass:'convert-button',
     inputgroupClass:'input-group' ,outputClass:'output-span',inputselectClass:'input-select'}}
    ></NumberConverter>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )
}
