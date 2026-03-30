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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(root.val === p.val || root.val === q.val) {
            return root;
        }

        if(this.check(root.right, p.val) && this.check(root.right, q.val)) {
            return this.lowestCommonAncestor(root.right, p, q);
        } else if(this.check(root.left, p.val) && this.check(root.left, q.val)) {
            return this.lowestCommonAncestor(root.left, p, q);
        } else {
            return root;
        }
    }

    check(root, val) {
        if(!root) return false;

        if(root.val > val) {
            return this.check(root.left, val);
        } else if(root.val < val) {
            return this.check(root.right, val);
        } else {
            return true;
        }
    }
}
