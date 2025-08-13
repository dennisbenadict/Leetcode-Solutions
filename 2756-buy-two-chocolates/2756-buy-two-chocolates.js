/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let sorted=prices.sort((a,b)=>a-b)
    let sum=sorted[0]+sorted[1]
    if(sum==money){
        return 0
    }
    else if(sum<money){
        return money-sum
    }
    else{
        return money
    }
};