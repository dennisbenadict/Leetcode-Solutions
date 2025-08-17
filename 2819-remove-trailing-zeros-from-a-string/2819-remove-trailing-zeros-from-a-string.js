/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let count="0",result=""
    for(i=num.length-1;i>=0;i--){
        if(num[i]!=count){
            count="huhu"
            result=num[i]+result
        }
    }
    return result
};