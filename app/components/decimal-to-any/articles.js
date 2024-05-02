 export const binary=`
# Understanding Binary Numbers

Binary numbers operate using a base-2 numeral system, which is different from the base-10 decimal system used in everyday arithmetic.  
In binary, each position represents a power of two, with only two possible values for each digit: 0 or 1.  
This system is particularly suitable for digital devices, as it matches the on/off state of electronic switches.

## How Binary Numbers Are Created

Creating a binary number is similar to creating a decimal number but uses base 2 instead of base 10.  
Here’s how you can convert a decimal number to binary:

1. Divide the decimal number by 2.
2. Record the remainder as the least significant bit (rightmost bit).
3. Divide the quotient by 2.
4. Repeat the process until the quotient is 0.
5. The binary number is the remainders read in reverse order.

### Example: Converting Decimal to Binary

Convert the decimal number 13 to binary:

- 13 ÷ 2 = 6 remainder 1
- 6 ÷ 2 = 3 remainder 0
- 3 ÷ 2 = 1 remainder 1
- 1 ÷ 2 = 0 remainder 1

Reading the remainders from bottom to top, 13 in decimal is $1101$ in binary.

### Binary vs. Decimal

In the decimal system, each position represents a power of 10.  
For example, the number 123 in decimal represents:
- $1 \\times 10^2 + 2 \\times 10^1 + 3 \\times 10^0$

In contrast, in the binary system:
- The binary number $1101$ represents:
  - $1 \\times 2^3 + 1 \\times 2^2 + 0 \\times 2^1 + 1 \\times 2^0$
  - This calculation simplifies to $8 + 4 + 0 + 1 = 13$


### Example: Converting Binary to Decimal
&nbsp;  

&nbsp;  


To convert the binary number 1101 to decimal:

1. Recognize the binary digits from right to left as 1, 0, 1, 1.
2. Calculate each binary digit multiplied by its corresponding power of 2:

  - $1 * 2^0 = 1  $
  - $0 * 2^1 = 0  $
  - $1 * 2^2 = 4 $ 
  - $1 * 2^3 = 8$

3. Sum these values: 1 + 0 + 4 + 8 = 13.

Therefore, the binary number 1101 equals 13 in decimal.
## Table of Decimal to Binary Conversions

Here is a table showing the binary equivalents of the first 20 decimal numbers:

| Decimal | Binary |
|---------|--------|
| 0       | 0000   |
| 1       | 0001   |
| 2       | 0010   |
| 3       | 0011   |
| 4       | 0100   |
| 5       | 0101   |
| 6       | 0110   |
| 7       | 0111   |
| 8       | 1000   |
| 9       | 1001   |
| 10      | 1010   |
| 11      | 1011   |
| 12      | 1100   |
| 13      | 1101   |
| 14      | 1110   |
| 15      | 1111   |
| 16      | 10000  |
| 17      | 10001  |
| 18      | 10010  |
| 19      | 10011  |
| 20      | 10100  |

## Practical Use of Binary Numbers

Binary numbers are essential for digital data storage and processing.  
They underpin operations in all computing systems, enabling everything from basic arithmetic in calculators to complex algorithms in supercomputers.

`

export const hexadecimal = `
# Understanding Hexadecimal Numbers

Hexadecimal numbers use a base-16 numeral system. Unlike the decimal system's base-10, hexadecimal extends the traditional number system with six alphabetic characters.  
Each position in hexadecimal can be a digit from 0 to 9 or a letter from A to F, where A represents 10, B is 11, C is 12, D is 13, E is 14, and F is 15.

## How Hexadecimal Numbers Are Created

Creating a hexadecimal number from a decimal number involves dividing the number by 16:
1. Divide the decimal number by 16.
2. Record the remainder using digits 0-9 and letters A-F.
3. Divide the quotient by 16.
4. Repeat the process until the quotient is 0.
5. The hexadecimal number is the remainders read in reverse order.

### Example: Converting Decimal to Hexadecimal

Convert the decimal number 254 to hexadecimal:
- 254 ÷ 16 = 15 remainder 14
- 15 ÷ 16 = 0 remainder 15

Using hexadecimal digits, 14 is E and 15 is F.  
Reading the remainders from bottom to top, 254 in decimal is FE in hexadecimal.

### Hexadecimal vs. Decimal

In the decimal system, each position represents a power of 10. For example, the number 254 in decimal represents:
- $2 \\times 10^2 + 5 \\times 10^1 + 4 \\times 10^0$

In the hexadecimal system, the number FE represents:
- $F \\times 16^1 + E \\times 16^0$
- This calculation simplifies to $15 \\times 16 + 14 = 240 + 14 = 254$

## Table of Decimal to Hexadecimal Conversions

Here is a table showing the hexadecimal equivalents of the first 20 decimal numbers:

| Decimal | Hexadecimal |
|---------|-------------|
| 0       | 00          |
| 1       | 01          |
| 2       | 02          |
| 3       | 03          |
| 4       | 04          |
| 5       | 05          |
| 6       | 06          |
| 7       | 07          |
| 8       | 08          |
| 9       | 09          |
| 10      | 0A          |
| 11      | 0B          |
| 12      | 0C          |
| 13      | 0D          |
| 14      | 0E          |
| 15      | 0F          |
| 16      | 10          |
| 17      | 11          |
| 18      | 12          |
| 19      | 13          |
| 20      | 14          |

## Practical Use of Hexadecimal Numbers

Hexadecimal is crucial for simplifying the representation of binary data in computing and digital electronics, such as defining colors in web design and displaying memory addresses in debugging processes.
`;

export const octal = `
# Understanding Octal Numbers

Octal numbers use a base-8 numeral system, unlike the more common base-10 decimal system.  
In octal, each position can hold any digit from 0 to 7, and each digit represents a power of 8.

## How Octal Numbers Are Created

Creating an octal number from a decimal number involves dividing the number by 8:
1. Divide the decimal number by 8.
2. Record the remainder as the least significant digit.
3. Divide the quotient by 8.
4. Repeat the process until the quotient is 0.
5. The octal number is the remainders read in reverse order.

### Example: Converting Decimal to Octal

Convert the decimal number 254 to octal:
- 254 ÷ 8 = 31 remainder 6
- 31 ÷ 8 = 3 remainder 7
- 3 ÷ 8 = 0 remainder 3

Reading the remainders from bottom to top, 254 in decimal is 376 in octal.

### Octal vs. Decimal

In the decimal system, each position represents a power of 10. For example, the number 254 in decimal represents:
- $2 \\times 10^2 + 5 \\times 10^1 + 4 \\times 10^0$

In the octal system, the number 376 represents:
- $3 \\times 8^2 + 7 \\times 8^1 + 6 \\times 8^0$
- This calculation simplifies to $3 \\times 64 + 7 \\times 8 + 6 = 192 + 56 + 6 = 254$

## Table of Decimal to Octal Conversions

Here is a table showing the octal equivalents of the first 20 decimal numbers:

| Decimal | Octal |
|---------|-------|
| 0       | 00    |
| 1       | 01    |
| 2       | 02    |
| 3       | 03    |
| 4       | 04    |
| 5       | 05    |
| 6       | 06    |
| 7       | 07    |
| 8       | 10    |
| 9       | 11    |
| 10      | 12    |
| 11      | 13    |
| 12      | 14    |
| 13      | 15    |
| 14      | 16    |
| 15      | 17    |
| 16      | 20    |
| 17      | 21    |
| 18      | 22    |
| 19      | 23    |
| 20      | 24    |

## Practical Use of Octal Numbers

Historically, octal was used extensively in computing because it is relatively easy to convert between binary and octal; each octal digit corresponds exactly to three binary digits.  
It is less common today but still used in certain computing contexts, such as permissions in Unix-like operating systems.
`;
