/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    for(i=97;i<=122;i++){
        let letter=String.fromCharCode(i)
        if(!sentence.includes(letter)){
            return false
        }
    }
    return true
};