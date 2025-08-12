/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
let result=0;
for(i=0;i<=nums.length-1;i++){
    result^=nums[i]
}
return result
};