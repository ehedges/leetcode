/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefix = []
    let product = 1;
    for(let i = 0;i<nums.length;i++)
    {
        prefix.push(product);
        product = product * nums[i];
    }
    product = nums[nums.length-1];
    for(let i = nums.length-2;i>-1;i--)
    {
        prefix[i] =  prefix[i]*product;
        product = product*nums[i];
    }

    return prefix;

};