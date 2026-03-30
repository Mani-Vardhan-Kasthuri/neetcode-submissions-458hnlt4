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
    diameter = 0;
    diameterOfBinaryTree(root) {
        if(!root) return 0;
        this.dfs(root);
        return this.diameter;
    }

    dfs(root) {
        if(!root) return 0;
        let left = this.dfs(root.left);
        let right = this.dfs(root.right);
        const dia = 1 + Math.max(left, right);
        this.diameter = Math.max(left + right, this.diameter);
        return dia;
    }
}
