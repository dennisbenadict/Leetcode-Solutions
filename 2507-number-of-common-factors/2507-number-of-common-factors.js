/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    count=0
    let min=a<b?a:b
    for(i=0;i<=min;i++){
        if(a%i==0 && b%i==0){
            count++
        }
    }
    return count
};