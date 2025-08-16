/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result=""
    for(i=0;i<=nums.length-1;i++){
        if(nums[i]==target){
        result=i
    }
    else{
        nums.push(target)
        result=nums.sort((a,b)=>a-b).indexOf(target)
        break
    }
    }
    return result
};