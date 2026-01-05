/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zeroCount = 0;
    let i = 0;
    let left = 0;
    for(i;i<nums.length;i++)
    {
        if(nums[i]== 1)continue;
        if(zeroCount == k) break;
        else zeroCount++;;
    }
    if(i == nums.length) return i;
    let max = 0;

    for(i;i<nums.length;i++)
    {
        if(nums[i] == 1) continue;
        max = Math.max(max,i-left);
        while(nums[left] != 0)
        {
            left++;
        }
        left++;
    }

    return Math.max(max,i-left);
};