import MyNavbar from '@/app/components/my-navbar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../pages.css'
import Link from 'next/link'

export default function index() {
  return (
    <>
    <MyNavbar></MyNavbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='page-title' >Welcome to calculators page</h3>
    <br></br>
    <br></br>
    <br></br>
    <Link href={'calculators/trigonometry-calculator'}>
    <button className='basic-btn'>Trigonometry Calculator</button>
    </Link>
     
    <br></br>
    <br></br>
    <ScrollUpButton></ScrollUpButton>
    </>
  )
}
