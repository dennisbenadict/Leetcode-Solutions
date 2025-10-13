/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     y=String(x)
//     k=String(x)
//     let arr1=k.split("").join()
//     let arr=y.split("").reverse().join()
//     if(arr1==arr){
//         return true
//     }
//     else{
//         return false
//     }
// };

// var isPalindrome = function(x) {
//     let y=String(x)
//     for(i=0;i<=y.length-1;i++){
//         for(j=y.length-1;j>=0;j--){
//            if(y[i]==y[j]) {
//             return true
//            }
//            else{
//             return false
//            }
//         }
//     }
// };
var isPalindrome = function(x) {
x=x.toString()
let left=0
let right=x.length-1
while(left<right){
    if(x[left]!=x[right]){
        return false
    }
    left++
    right--
}
return true
}