
var isPalindrome = function(x) {
    if(x<0)return false
    const string=x.toString()
    if(string.length===1) return true
    let length=string.length
    let left=0,right=length-1
    while(right>left){
             if(string[right]!==string[left])return false;
             
             console.log(left,right,string[left],string[right])
             console.log(string[right]==!string[left])
             left++
             right--
             
    }
   
    return true

};

console.log("hy")
console.log(isPalindrome(121))