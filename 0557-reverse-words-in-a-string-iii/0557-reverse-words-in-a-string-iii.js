/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     let rev=""
//     let spl=s.split("")
//     for(i=spl.length-1;i>=0;i--){
//         rev+=spl[i]
//     }
//     let spl2=rev.split(" ")
//     let rev3=spl2.reverse()
//     let str=String(rev3)
//     let str2=str.replaceAll(","," ")
//     return str2
// };
var reverseWords = function(s) {
    let rev=" "
    let rev2=" "
    let spl=s.split("")
    for(i=spl.length-1;i>=0;i--){
        rev+=spl[i]
    }
    let spl2=rev.split(" ")
    for(i=spl2.length-1;i>=0;i--){
        rev2+=spl2[i]+" "
    }
    return rev2.trim()
};