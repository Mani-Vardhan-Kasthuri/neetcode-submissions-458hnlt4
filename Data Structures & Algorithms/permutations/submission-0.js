class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];

        function backtrack(perm, pick) {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (!pick[i]) {
                    perm.push(nums[i]);
                    pick[i] = true;
                    backtrack(perm, pick);
                    perm.pop();
                    pick[i] = false;
                }
            }
        }

        backtrack([], new Array(nums.length).fill(false));
        return res;
    }
}