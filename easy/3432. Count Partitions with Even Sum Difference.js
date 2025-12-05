/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let total = nums.reduce((curr,total)=>total+curr,0)
    let answer = 0;
    let left = 0;
    for(let i = 0;i<nums.length-1;i++)
    {
        left += nums[i];
        total -= nums[i];
        if((left-total)%2 == 0) answer++;
    }

    return answer;

};