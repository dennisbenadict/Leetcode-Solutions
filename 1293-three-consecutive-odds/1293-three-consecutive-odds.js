/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count=0
    for(i=0;i<=arr.length-1;i++){
        if(arr[i]%2!=0){
            count++
            if(count==3){
                return true
            }
        }
        else{
            count=0
    }
    }
    return false
};