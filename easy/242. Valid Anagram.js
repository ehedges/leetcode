/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    const alphabet = new Array(26).fill(0);

    for(let i = 0;i<s.length;i++)
    {
        alphabet[s.charCodeAt(i)-97]++;
    }

    for(let i = 0;i<t.length;i++)
    {
        alphabet[t.charCodeAt(i)-97]--;
    }  

    for(let i = 0;i<alphabet.length;i++)
    {

        if(alphabet[i] != 0) return false;

    }

    return true;

};