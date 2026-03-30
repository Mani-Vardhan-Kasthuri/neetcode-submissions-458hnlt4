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
     * @return {boolean}
     */
    isBalanced(root) {
        return this.dfs(root).isBalanced === 1;
    }

    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    dfs(root) {
        if (!root) {
            return { isBalanced: 1, height: 0 };
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const balanced =
            left.isBalanced &&
            right.isBalanced &&
            Math.abs(left.height - right.height) <= 1;
        const height = 1 + Math.max(left.height, right.height);

        return { isBalanced: balanced ? 1 : 0, height };
    }
}