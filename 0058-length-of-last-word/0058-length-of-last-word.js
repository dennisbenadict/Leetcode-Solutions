/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result=""
    let tri=s.trim()
    let spl=tri.split(" ")
    for(i=0;i<=spl.length-1;i++){
        if(i==spl.length-1){
           result=spl[i]
        }
    }
    return result.length
};