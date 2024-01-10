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
  if(window.scrollY > nav.offsetHeight + 150){
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
    <nav class="nav">
  <div class="container">
    {/* <h1 class="logo"><a href="#">My website</a></h1> */}
    <ul>
      <li><Link href="/">Home</Link></li>
      <li onClick={navigateBack} style={{cursor:'pointer'}}><a>GoBack</a></li>
     
      

    </ul>
  </div>
</nav>


    </>
  )
}

export default MyNavbar