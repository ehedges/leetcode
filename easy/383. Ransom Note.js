/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const alphaBet = new Array(26).fill(0)
    for(let i = 0;i<ransomNote.length;i++)
    {
        alphaBet[ransomNote.charCodeAt(i)-97]++;
    }

    for(let i = 0;i<magazine.length;i++)
    {
        if(alphaBet[magazine.charCodeAt(i)-97] > 0) alphaBet[magazine.charCodeAt(i)-97]--;
    }

    for(let i = 0; i<alphaBet.length;i++)
    {
        if(alphaBet[i] != 0) return false;
    }

    return true;

};