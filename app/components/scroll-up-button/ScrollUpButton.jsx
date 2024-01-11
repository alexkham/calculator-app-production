'use client'
import React, { useState, useEffect } from 'react';

const ScrollUpButton = ({className}) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean-up
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && 
      <button onClick={scrollToTop} className={className} style={{ position: 'fixed', bottom: '20px', right: '30px', zIndex: 1000, backgroundColor: 'blue', color: 'white' }}>
        Scroll to Top
      </button>
  );
}

export default ScrollUpButton;
