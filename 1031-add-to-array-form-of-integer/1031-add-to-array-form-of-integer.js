/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let sum=""
    for(i=0;i<=num.length-1;i++){
        sum+=num[i]
    }
    let sum1=BigInt(sum)+BigInt(k)
    let result=sum1.toString().split("").map(a=>Number(a))
    return result
};