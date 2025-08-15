/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let answer=0
    let result=dividend/divisor
    if(result==2147483648){
        answer=2147483647
    }
    else if(result<=0){
        answer=Math.ceil(result)
    }
    else{
      answer=Math.floor(result)  
    }
    return answer
};


// if(result<=0){
//         answer=Math.ceil(result)
//     }
//     else{
//         answer=Math.floor(result)
//     }