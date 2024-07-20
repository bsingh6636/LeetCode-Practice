// 4. Median of Two Sorted Arrays
// Hard
// Topics
// Companies
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var findMedianSortedArrays = function(nums1, nums2) {
    
    let combindedArray = nums1.concat(nums2)
    combindedArray.sort((a,b)=>a-b)
    console.log(combindedArray)
    let combinedArrayLength = combindedArray.length
    if(combinedArrayLength == 1) return combindedArray[0]
    if(combinedArrayLength % 2 == 0){
        median = combinedArrayLength/2
        return (combindedArray[median-1]+combindedArray[median])/2
    }else{
        
        median = Math.round(combinedArrayLength/2)
         return combindedArray[median-1]
    }
};
console.log(findMedianSortedArrays([0,0,0,0,0],[-1,0,0,0,0,0,1]))
console.log(findMedianSortedArrays([],[1]))
console.log(findMedianSortedArrays([1,2,3],[4,5,6]))
console.log(findMedianSortedArrays([1,2],[3,4]))
console.log(findMedianSortedArrays([1,3],[2]))