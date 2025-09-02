/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr=[]
    for(i=0;i<=words.length-1;i++){
        if(words[i].includes(x)){
            arr.push(i)
        }
    }
    return arr
};

// var findWordsContaining = function(words, x) {
//     let arr=[]
//     for(i=0;i<=words.length-1;i++){
//         for(j=0;j<=words[i].length-1;j++){
//             if(words[i][j]==x){
//                 arr.push(i)
//                 break
//             }
//         }
//     }
//     return arr
// };