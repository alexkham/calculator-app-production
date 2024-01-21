// export const convertNumber= (inputNumber, inputFormat, outputFormat)=> {

//     if(isValidInput(inputNumber,inputFormat)){
//     let number = inputNumber;

//     // Convert input to decimal (base 10) first
//     switch (inputFormat) {
//         case 'binary':
//             number = parseInt(inputNumber, 2);
//             break;
//         case 'hexadecimal':
//             number = parseInt(inputNumber, 16);
//             break;
//         case 'octal':
//             number = parseInt(inputNumber, 8);
//             break;
//         default:
//             number = parseInt(inputNumber, 10); // Assume decimal
//     }

//     // Now convert from decimal to desired output format
//     switch (outputFormat) {
//         case 'binary':
//             return number.toString(2);
//         case 'hexadecimal':
//             return number.toString(16);
//         case 'octal':
//             return number.toString(8);
//         default:
//             return number.toString(); // Default to decimal
//     }}else{
//         console.log("Invalid input")
//     }
// }
export const convertNumber = (inputNumber, inputFormat, outputFormat) => {
    if (!isValidInput(inputNumber, inputFormat)) {
        console.log("Invalid input");
        return null; // or handle the error as per your application's needs
    }

    const convertFractionalPart = (fractionalPart, baseFrom, baseTo) => {
        let decimalFraction = 0;
        for (let i = 0; i < fractionalPart.length; i++) {
            decimalFraction += parseInt(fractionalPart[i], baseFrom) * Math.pow(baseFrom, -(i + 1));
        }

        let outputFraction = '';
        let iterationLimit = 20; // to prevent potential infinite loops
        while (decimalFraction > 0 && iterationLimit > 0) {
            decimalFraction *= baseTo;
            let digit = Math.floor(decimalFraction);
            outputFraction += digit.toString(baseTo);
            decimalFraction -= digit;
            iterationLimit--;
        }
        console.log("Converted fractional part: ", outputFraction);
        return outputFraction;
    };

    let integerPart, fractionalPart;
    if (inputNumber.includes('.')) {
        [integerPart, fractionalPart] = inputNumber.split('.');
    } else {
        integerPart = inputNumber;
        fractionalPart = '';
    }

    let baseFrom = getBaseValue(inputFormat);
    let baseTo = getBaseValue(outputFormat);
    console.log("Converting from base:", baseFrom, "to base:", baseTo);

    let convertedIntegerPart = parseInt(integerPart, baseFrom).toString(baseTo);
    let convertedFractionalPart = fractionalPart ? '.' + convertFractionalPart(fractionalPart, baseFrom, baseTo) : '';
    console.log("Converted integer part: ", convertedIntegerPart);
    const final=convertedIntegerPart + convertedFractionalPart;
    console.log( 'Final Result is :'+final)
    return final.toString().toUpperCase();
};

const getBaseValue = (format) => {
    switch (format) {
        case 'binary':
            return 2;
        case 'octal':
            return 8;
        case 'decimal':
            return 10;
        case 'hexadecimal':
            return 16;
        default:
            throw new Error("Invalid format specified");
    }
};


export const isValidInput=(inputNumber, base)=> {
    console.log("Input Number:", inputNumber, "Base:", base); 
    const baseRegex = {
        'binary': /^[0-1]+(\.[0-1]+)?$/, // Binary (both integer and floating-point)
        'octal': /^[0-7]+(\.[0-7]+)?$/,  // Octal (both integer and floating-point)
        'decimal': /^[0-9]+(\.[0-9]+)?$/, // Decimal (both integer and floating-point)
        'hexadecimal': /^[0-9A-Fa-f]+(\.[0-9A-Fa-f]+)?$/, // Hexadecimal (both integer and floating-point)
    };

    // Check if base is within allowed range
    if (base < 2 || base > 36) {
        console.log("Base out of allowed range");
        return false;
    }

    if (!baseRegex[base]) {
        console.log("Regex not found for base:", base); // Debug log
        return false;
    }

    // Validate against the respective regex
    return baseRegex[base].test(inputNumber);
}

export const isValidInputAll=(inputNumber, base)=> {
    const baseRegex = {
        2: /^[0-1]+$/,  // Binary
        8: /^[0-7]+$/,  // Octal
        10: /^[0-9]+$/, // Decimal
        16: /^[0-9A-Fa-f]+$/, // Hexadecimal
        // Add other bases as needed
    };

    // Check if base is within allowed range
    if (base < 2 || base > 36) {
        return false;
    }
    const reg=getBaseRegex(base)
    // Validate against the respective regex
    return reg.test(inputNumber);
}

export const getBaseRegex=(base)=> {
    if (base < 2 || base > 36) {
        throw new Error("Base out of range. Base must be between 2 and 36.");
    }

    if (base <= 10) {
        // For bases less than or equal to 10, use 0 to base-1
        return new RegExp(`^[0-${base - 1}]+$`);
    } else {
        // For bases greater than 10, include letters up to the corresponding base
        // For example, base 16 includes 0-9 and A-F
        let maxLetter = String.fromCharCode('A'.charCodeAt(0) + base - 11).toUpperCase();
        return new RegExp(`^[0-9A-${maxLetter}a-${maxLetter.toLowerCase()}]+$`);
    }
}
