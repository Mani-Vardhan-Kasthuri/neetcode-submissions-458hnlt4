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
        if(!root) return true;

        let left = this.height(root.left);
        let right = this.height(root.right);

        if(Math.abs(left - right) > 1) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    memo = {};

    height(root) {
        if(!root) return 0;
        let h = 1 + Math.max(this.height(root.left), this.height(root.right));
        return h;
    }
}
