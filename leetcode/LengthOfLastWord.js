/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arra = s.trim().split(' ');

    return arra[arra.length-1].length

};
