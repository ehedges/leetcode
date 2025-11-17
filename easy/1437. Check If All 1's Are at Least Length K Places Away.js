/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let lastOneIndex = nums.indexOf(1);

    for(let i = lastOneIndex+1;i<nums.length;i++)
    {
        if(nums[i] != 1) continue;
        if((lastOneIndex+k+1)>i) return false;
        lastOneIndex = i;
    }

    return true;

};