class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const state = {};
        const dfs = (i) => {
            if(i >= nums.length) return 0;
            if(state[i]) return state[i];
            state[i] = nums[i] + Math.max(dfs(i+2), dfs(i+3));
            return state[i];
        };

        return Math.max(dfs(0), dfs(1));
    }
}
