/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp  = "";
    let right = s.length-1;
    for(let i = 0; i<s.length/2;i++)
    {
        temp = s[i];
        s[i] = s[right];
        s[right] = temp;
        right--;
    }
};