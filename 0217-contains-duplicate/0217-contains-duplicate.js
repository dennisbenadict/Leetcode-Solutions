/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let sort=nums.sort((a,b)=>a-b)
    for(i=0;i<=sort.length-1;i++){
        if(sort[i]==sort[i+1]){
            return true
        }
    }
    return false
};
        // for(i=0;i<=nums.length-1;i++){
        // for(j=i+1;j<=nums.length-1;j++){
        //     if(nums[i]==nums[j]){
        //         return true
        //     }
        //     }
        // }
        // return false
