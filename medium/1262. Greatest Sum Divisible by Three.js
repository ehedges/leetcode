var maxSumDivThree = function(nums) {
    let smallestOne = Infinity;
    let secondSmallestOne = Infinity;
    let smallestTwo = Infinity;
    let secondSmallestTwo = Infinity;
    let total = 0;
    for(let i = 0; i<nums.length;i++)
    {
        total += nums[i];
        const remain = nums[i]%3;
        if(remain == 0) continue;
        else if(remain == 2)
        {
            if(nums[i]<=smallestTwo)
            {
                secondSmallestTwo = smallestTwo;
                smallestTwo = nums[i];
            }
            else if(nums[i]<=secondSmallestTwo)
            {
                secondSmallestTwo = nums[i];
            }
        }
        else if(nums[i] <= smallestOne)
        {
            secondSmallestOne = smallestOne;
            smallestOne = nums[i];
        }
        else if(nums[i] < secondSmallestOne) secondSmallestOne = nums[i];
    }

    if(total%3 == 0) return total;
    if(total%3 == 1) return total - Math.min(smallestTwo+secondSmallestTwo,smallestOne);
    return total - Math.min(smallestOne+secondSmallestOne,smallestTwo)
}