/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=prices[0]
    let max=0
    for(i=0;i<prices.length;i++){
        if(min>prices[i]){
            min=prices[i]
        }
        else if(prices[i]-min>max){
            max=prices[i]-min
        }
    }
    return max
};