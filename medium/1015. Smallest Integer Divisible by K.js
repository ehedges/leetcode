/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if(k%2 == 0 ||k%5==0) return -1;
    let count = 1;
    let remain = 1%k;
    const seen = new Set([remain]);
    while(remain !=0)
    {
        remain = (remain*10+1)%k;
        count++;
        if(seen.has(remain) == true) return -1;
    }

    return count;

};