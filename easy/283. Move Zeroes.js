var moveZeroes = function(nums) {
    let firstZero = nums.indexOf(0);
    if(firstZero == -1) return nums;
    for(let i = firstZero+1; i<nums.length;i++)
    {
        if(nums[i] == 0) firstZero = Math.min(firstZero,i);
        nums[firstZero] = nums[i];
        nums[i] = 0;
        while(nums[firstZero] != 0)
        {
            firstZero++
        }
    }

    return nums;

};