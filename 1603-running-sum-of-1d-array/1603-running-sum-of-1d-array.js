/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
for(i=1;i<=nums.length-1;i++){
nums[i]+=nums[i-1]
}
return nums
};