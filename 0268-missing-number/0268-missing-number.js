/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
let sort=nums.sort(function(a,b){return a-b})
for(i=0;i<=sort.length-1;i++){
    if(sort[i]!=i){
        return i
    }
}
return i
};