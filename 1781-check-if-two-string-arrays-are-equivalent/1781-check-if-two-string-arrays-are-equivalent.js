/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let word_1=word1.join("")
    let word_2=word2.join("")
    if(word_1===word_2){
        return true
    }
    return false
};