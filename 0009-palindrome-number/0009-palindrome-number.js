/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    y=String(x)
    k=String(x)
    let arr1=k.split("").join()
    let arr=y.split("").reverse().join()
    if(arr1==arr){
        return true
    }
    else{
        return false
    }
};