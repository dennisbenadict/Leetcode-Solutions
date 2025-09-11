/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(i=0;i<=nums.length-1;i++){
        nums[i]*=nums[i]
    }
    return nums.sort((a,b)=>a-b)
};