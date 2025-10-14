/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left=0
    let right=numbers.length-1
    while(left<right){
        let sum=numbers[left]+numbers[right]
        if(sum==target){
            return [left+1,right+1]
        }
        else if(sum>target){
            right--
        }
        else{
            left++
        }
    }

};




// var twoSum = function(numbers, target) {
//     for(i=0;i<numbers.length;i++){
//         for(j=i+1;j<numbers.length;j++){
//             if(numbers[i]+numbers[j]==target){
//                 return [i+1,j+1]
//             }
//         }
//     }
//     return [0]
// };