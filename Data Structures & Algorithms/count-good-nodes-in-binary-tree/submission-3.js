/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        return this.dfs(root, root.val);
    }

    dfs(root, max=0, sum=0) {
        if(!root) return sum;
        if(root.val >= max) {
            sum++;
        }
        sum = this.dfs(root.left, Math.max(max, root.val), sum);
        sum = this.dfs(root.right, Math.max(max, root.val), sum);
        return sum;
    }
}
