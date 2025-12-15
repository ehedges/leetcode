/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    let first = 0;
    let second = 1;
    let temp = 0;
    for(let i = 0;i<n-1;i++)
    {
        temp = first+second;
        second = first;
        first = temp;
    }

    return first+second;

};