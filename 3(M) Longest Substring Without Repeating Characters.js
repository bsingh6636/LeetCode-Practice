// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let right = 0;
    let left = 0;
    let longestStr=0;
    while(right < s.length){
        let letter = s[right];
        if(!set.has(letter)){
            set.add(letter);
            longestStr =Math.max(longestStr,set.size);
            right++
        }else{
            set.delete(s[left])
            left++
        }
    }
    return longestStr
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))