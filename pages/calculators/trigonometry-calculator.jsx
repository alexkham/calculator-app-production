import MyNavbar from '@/app/components/my-navbar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import TrigoCalculator from '@/app/components/trigo-calculator/TrigoCalculator'
import Footer from '@/app/components/footer/Footer'

export default function TrigonometryCalculator() {
  return (
    <>
    <MyNavbar></MyNavbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <TrigoCalculator></TrigoCalculator>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <ScrollUpButton className={'target-button'}></ScrollUpButton>
    <br></br>
    <br></br>
    <Footer></Footer>

    
    </>
    
  )
}
