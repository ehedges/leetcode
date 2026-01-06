/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let currentLevel = [root];
    let next = [];
    let currentSum  = 0;
    let level = 1;
    let maxLevel = 1;
    let maxSum = -Infinity;
    do
    {
        next = [];
        for(const node of currentLevel)
        {
            currentSum += node.val;
            if(node.left != null) next.push(node.left);
            if(node.right != null) next.push(node.right);
        }

        if(currentSum > maxSum)
        {
            maxSum = currentSum;
            maxLevel = level;
        }
        currentSum = 0;
        level++;
        currentLevel = next;
    }
    while(next.length > 0)

    return maxLevel;

};