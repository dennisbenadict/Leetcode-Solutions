/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
let x = {}
 for(i=0;i<nums.length;i++){
    if(x.hasOwnProperty(nums[i])){
        return nums[i]
    }else{
    x[nums[i]]=i
    }
}
};

// var findDuplicate = function(nums) {
//     let repeat=""
//     for(i=0;i<=nums.length-1;i++){
//         for(j=i+1;j<=nums.length;j++){
//             if(nums[i]==nums[j]){
//                 repeat=nums[i]
//             }
//         }
//     }
//     return repeat
// };