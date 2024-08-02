// 32. Longest Valid Parentheses
// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
// substring
// .

 

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLen = 0;
    let stack = [];
    let lastInvalidIndex = -1;
    for(let i = 0; i < s.length ; i++){
        if ( s[i] === '('){
            stack.push(i);
        }else{
            if(stack.length === 0){
                lastInvalidIndex = i
            }else{
                stack.pop();
                if( stack.length === 0){
                    maxLen = Math.max(maxLen , i - lastInvalidIndex);
                }else{
                    maxLen = Math.max(maxLen , i - stack[stack.length -1 ])
                }
            }
        }
    }
    
    return maxLen
};

console.log(longestValidParentheses(")()()")); // Output: 4
console.log(longestValidParentheses("()(()")); // Output: 2
