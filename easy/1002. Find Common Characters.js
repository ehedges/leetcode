/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {

    const alphabet = new Array(26).fill(0);

    for(let i = 0;i<words[0].length;i++)
    {
        alphabet[words[0].charCodeAt(i)-97]++;
    }

    for(let i = 1;i<words.length;i++)
    {
        const newAlphabet = new Array(26).fill(0)
        for(let j  = 0;j<words[i].length;j++)
        {
            newAlphabet[words[i].charCodeAt(j)-97]++;
        }
        for(let k = 0;k<26;k++)
        {
            if(newAlphabet[k] != alphabet[k]) alphabet[k] = Math.min(alphabet[k],newAlphabet[k]);
        }
    }
    
    const answer = [];

    for(let i = 0;i<26;i++)
    {
        for(let j = 0;j<alphabet[i];j++)
        {
            answer.push(String.fromCharCode(97 + i))
        }
    }

    return answer;

};