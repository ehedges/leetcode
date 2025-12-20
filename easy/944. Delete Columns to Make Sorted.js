/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let deleteCount = 0;

    for(let i = 0;i<strs[0].length;i++)
    {
        for(let j = 1;j<strs.length;j++)
        {
            if(strs[j-1].charCodeAt(i) <= strs[j].charCodeAt(i)) continue;
            deleteCount++;
            break;
        }

    }

    return deleteCount;

};