/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index=0
    for(i=0;i<=nums.length-1;i++){
        let duplicate=nums.slice(0,index).includes(nums[i])
        if(duplicate==false){
            nums[index]=nums[i]
            index++
        }
    }
    return index
};