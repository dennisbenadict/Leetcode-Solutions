/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum=0
    let product=1

    let str=n.toString().split("").map(Number)
    for(i=0;i<=str.length-1;i++){
        sum+=str[i]
        product*=str[i]
    }
    let result=product-sum
    return (result)
};