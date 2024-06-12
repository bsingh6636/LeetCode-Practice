var threeSumClosest = function (nums, target) {
 
    nums.sort((a, b) => a - b)
    let closetSum = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1
       while(left<right){
        let currentSum = nums[i] + nums[left] + nums[right]
        if (currentSum == target) return currentSum;
        if (Math.abs(currentSum - target) < Math.abs(closetSum - target)) {
            closetSum = currentSum
        }
        if (currentSum < target) left++;
        else right--;
       }
    }
    return closetSum
};


console.log(threeSumClosest(nums = [-1, 2, 1, -4], target = 1))
console.log(threeSumClosest(nums = [4,0,5,-5,3,3,0,-4,-5], target = -2))

