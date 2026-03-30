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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        let level=0, i=0, elmLen=0;
        const queue = [root], res = [];
        while(i < queue.length) {
            elmLen = queue.length - i;
            level++;
            const layer = [];
            while(elmLen) {
                const node = queue[i];
                layer.push(node.val);
                if(node.left) {
                    queue.push(node.left);
                }

                if(node.right) {
                    queue.push(node.right);
                }
                i++;
                elmLen--;
            }
            res.push(layer);
        }

        return res;
    }
}
