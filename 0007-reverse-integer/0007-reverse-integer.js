/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let combine =[];
    let join ="";
    let str =String(x);
    let split =str.split("");

    for(i=split.length-1;i>=0;i--){
        if(split[i]=="-") {
            combine.unshift(split[i]);
        }else{
            combine.push(split[i]);
        }
    }
    join=combine.join("");
    let reversedNum=Number(join);

    if (reversedNum>2147483647||reversedNum<-2147483648) {
        return 0;
    }
    return reversedNum;
};
