/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let total = 0;
    const answers = []
    for(let i = 0;i<nums.length;i++)
    {
        total = (total*2+nums[i])%5;
        answers.push(total==0);     
    }
    return answers;

};