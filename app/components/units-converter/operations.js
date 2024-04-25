export const operationExplanations = {
    AND: `
#### AND Operation (\`&\`)
&nbsp;

&nbsp;
The bitwise AND operation compares each bit of two numbers. If both bits are \`1\`, the result is \`1\`. Otherwise, the result is \`0\`. This operation is commonly used to clear specific bits (by ANDing with 0) or to check if a bit is set (by ANDing with a bitmask).


`,

    OR: `
#### OR Operation (\`|\`)
&nbsp;

&nbsp;
The bitwise OR operation compares each bit of two numbers. If at least one of the bits is \`1\`, the result is \`1\`. Otherwise, the result is \`0\`. This operation is useful for setting specified bits (by ORing with 1).


`,

    XOR: `
#### XOR Operation (\`^\`)
&nbsp;

&nbsp;
The bitwise XOR operation compares each bit of two numbers. If the bits are different, the result is \`1\`. If the bits are the same, the result is \`0\`. This operation is used for toggling bits without changing the others.


`,

    NOT: `
#### NOT Operation (\`~\`)
&nbsp;

&nbsp;
The bitwise NOT operation inverts each bit of a number. \`1\` becomes \`0\` and \`0\` becomes \`1\`. This operation is also known as bitwise complement.


`,

    LSHIFT: `
#### Left Shift Operation (\`<<\`)
&nbsp;

&nbsp;
The bitwise left shift operation moves all bits in a binary number to the left by the specified number of places. Bits shifted off the end are discarded, and \`0\`s are shifted in from the right.


`,

    RSHIFT: `
#### Right Shift Operation (\`>>\`)
&nbsp;

&nbsp;
The bitwise right shift operation moves all bits in a binary number to the right by the specified number of places. Bits shifted off the end are discarded. In signed numbers, the leftmost bits will typically be filled based on the sign of the original number to preserve the sign.


`
};
