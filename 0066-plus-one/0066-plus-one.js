/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let split=digits.join("")
    let num=BigInt(split)
    let sum=num+1n
    let str=String(sum)
    let arr=str.split("").map(Number)
    return arr
};
