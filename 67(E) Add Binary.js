
// 67. Add Binary
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// var addBinary = function(a, b) {
//     return (a.toString(2)+b.toString(2))
// };


// let a=3
// console.log(a.toString(2))


var addBinary = function(a, b) {
    // Convert strings to arrays of characters
    let arrA = a.split('');
    let arrB = b.split('');

    let carry = 0;
    let result = [];

    // Start from the end of both arrays
    let i = arrA.length - 1;
    let j = arrB.length - 1;

    // Iterate through the arrays or carry
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;

        // Add digits from arrA and arrB (convert to integer)
        if (i >= 0) {
            sum += parseInt(arrA[i]);
            i--;
        }
        if (j >= 0) {
            sum += parseInt(arrB[j]);
            j--;
        }

        // Push the sum modulo 2 (binary result)
        result.push(sum % 2);

        // Update carry
        carry = Math.floor(sum / 2);
    }

    // Reverse the result array and join to form the final binary string
    return result.reverse().join('');
};


console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
