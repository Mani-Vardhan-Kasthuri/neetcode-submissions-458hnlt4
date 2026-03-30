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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!subRoot) return true;
        if(!root) return false;

        if(this.isSame(root, subRoot)) {
            return true;
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSame(node, subRoot) {
        if(!node && !subRoot) return true;

        if(!node || !subRoot) return false;

        if(node.val !== subRoot.val) {
            return false;
        }
        return this.isSame(node.left, subRoot.left) && this.isSame(node.right, subRoot.right);
    }
}
