/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    if(n<5) return 0;
    let total = 0;
    for(let i = 1;i<n+1;i++)
    {
        for(let j = 1;j<n+1;j++)
        {
            const c = (Math.sqrt(i*i+j*j));
            if(Number.isInteger(c) && c <= n == true)
            {
                 total++;
            }
        }
    }

    return total;

};