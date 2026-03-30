class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [], curr = [];

        const bt = (target, i) => {
            if(target === 0) return res.push([...curr]);
            if(target < 0 || i >= nums.length) return;

            curr.push(nums[i]);
            bt(target - nums[i], i);

            curr.pop();
            bt(target, i + 1);
        }

        bt(target, 0);
        return res;
    }
}
