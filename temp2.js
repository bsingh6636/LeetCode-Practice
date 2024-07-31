// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.




// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

var letterCombinations = function (digits) {

    const values = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": " prs",
        "8": "tuv",
        "9": "wxyz"
    }
    const array = []
    for (let i = 0; i < digits.length; i++) {
        console.log(values[digits[i]].length)
        let length = values[digits[i]].length
        for(let j = 0; i < length ; i++){
            console.log(values[digits[i+1]])
        }
    //    console.log(values[digits[i]][i])
    //    array.push(values[digits[i]][i])
    }
    return array
};

console.log(letterCombinations("23"))