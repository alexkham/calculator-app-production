'use client'
import React,{useEffect} from 'react'
import './MyNavbar.css'
import Link from 'next/link';
import GoBackButton from '../GoBackButton';

function MyNavbar() {

  useEffect(()=>{
    const nav = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

function fixNav(){
  if(window.scrollY > nav.offsetHeight + 100){
    nav.classList.add('active');
  }else{
    nav.classList.remove('active');
  }
}

  },[]);

  const navigateBack = () => {
    window.history.back();
  };
  return (
    <>
    <nav className="nav">
  <div className="container">
    {/* <h1 class="logo"><a href="#">My website</a></h1> */}
    <ul>
      <li><Link href="/">Home</Link></li>
      <li className="dropdown">
        <Link href='/converters'>Visual Converters</Link>
        <ul className="dropdown-content">
            <li><Link href="/converters/binary">Binary Converter</Link></li>
            <li><Link href="/converters/hexadecimal">Hexadecimal Converter</Link></li>
            <li><Link href="/converters/octal">Octal Converter</Link></li>                                
         </ul>
        
        </li>
      <li className="dropdown" >
        Units Conversion  
        <ul className="dropdown-content">
            <li><Link href="/units-converters">Units Converters</Link></li>
            <li><Link href="/tables">Conversion Tables</Link></li>                                           
         </ul>   
        
        </li>
      <li onClick={navigateBack} style={{cursor:'pointer'}}><a>GoBack</a></li>
     {/* <li className="dropdown">
         <a href="/main-page">More Options</a> 
         <ul className="dropdown-content">
            <li><Link href="/option1">Option 1</Link></li>
            <li><Link href="/option2">Option 2</Link></li>
            <li><Link href="/option3">Option 3</Link></li>
                                
         </ul>
      </li> */}

    </ul>
  </div>
</nav>

    </>
  )
}

export default MyNavbar



