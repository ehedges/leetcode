/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let descent  = prices.length;
    let left = 0;
    let running = 0;
    for(let i = 1;i<prices.length;i++)
    {
        if(prices[i]+1 == prices[i-1]) running += (i-left);
        else
        {
            left = i;
            descent += running;
            running = 0;
        }

    }

    return descent + running;

};