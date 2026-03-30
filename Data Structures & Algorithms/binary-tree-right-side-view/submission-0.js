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
     * @return {number[]}
     */
    rightSideView(root) {
        let res = [];
        if (!root) return res;

        const q = new Queue();
        q.push(root);

        while (!q.isEmpty()) {
            let level = 0;

            for (let i = q.size(); i > 0; i--) {
                let node = q.pop();
                if (node !== null) {
                    level = node.val;
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if (level) {
                res.push(level);
            }
        }
        return res;
    }
}
