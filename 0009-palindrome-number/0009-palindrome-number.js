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




var isPalindrome = function(x) {
    let y=String(x)
    l= y.length-1
    f= 0
    while(f<=l){
     if(y[l]!=y[f]){
         return false
     }
     f++
     l--
    }
    return true
};