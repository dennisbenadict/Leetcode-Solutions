/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let tracker=1;
    let sorted=nums.sort((a,b)=>a-b)
    for(i=0;i<=sorted.length-1;i++){
        if(sorted[i]==tracker){
            tracker++
        }
    }
    return tracker
};