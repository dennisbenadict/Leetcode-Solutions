/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let a=title.toLowerCase().split(' ')
    for(let i=0;i<a.length;i++){
        if(a[i].length>2){
            a[i] = a[i][0].toUpperCase()+a[i].slice(1)}        
            }
            return a.join(' ')
            }