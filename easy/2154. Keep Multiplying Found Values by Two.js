/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const setNums = new Set(nums);
    
    while(setNums.has(original))
    {
        original = original*2;
    }

    return original;

};