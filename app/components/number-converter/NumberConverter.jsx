import React from 'react'

function NumberConverter({styles={}}) {


    const {headerClass='',bodyClass='', footerClass=''}=styles

   // Usage
   //<MyComponent styles={{ headerClass: 'header-style', contentClass: 'content-style', footerClass: 'footer-style' }} />
   
    function decimalToBinary(decimal) {
        let integerPart = Math.floor(decimal);
        let fractionalPart = decimal - integerPart;
        let binaryIntegerPart = "";
        let binaryFractionalPart = "";
    
        // Convert integer part
        while (integerPart > 0) {
            binaryIntegerPart = (integerPart % 2) + binaryIntegerPart;
            integerPart = Math.floor(integerPart / 2);
        }
    
        // Convert fractional part
        let iterationLimit = 20;  // Limit the number of iterations to avoid infinite loop
        while (fractionalPart > 0 && iterationLimit > 0) {
            fractionalPart *= 2;
            let fractionalBit = Math.floor(fractionalPart);
            binaryFractionalPart += fractionalBit;
            fractionalPart -= fractionalBit;
            iterationLimit--;
        }
    
        // Combine both parts
        return binaryIntegerPart + '.' + binaryFractionalPart;
    }
    
   
    
  return (
    <>
    <div className={bodyClass}>
    <div className={headerClass}>NumberConverter</div>
    </div>
    </>
  )
}

export default NumberConverter