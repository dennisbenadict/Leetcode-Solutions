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
    last = y.length-1
    for(i=0;i<y.length;i++){
  
     
      if(last==i){
         return true
     }
     if(y[last]!=y[i]){
        
         return false
     }
     last--
   
    }
    
    return true
};