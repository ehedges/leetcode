/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {

    return nums.reduce((operations,current)=>{
        if(current%3 != 0) operations++;
        return operations
    },0);
};