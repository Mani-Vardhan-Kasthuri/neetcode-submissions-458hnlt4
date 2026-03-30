class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];
        
        const state = Array.from({ length: nums.length }, () => Array(2).fill(0));
        const dfs = (i, omitLast) => {
            if(i >= nums.length) return 0;
            if(omitLast && i === nums.length-1) return 0;
            if(state[i][omitLast]) return state[i][omitLast];

            state[i][omitLast] = Math.max(dfs(i+1, omitLast), nums[i] + dfs(i+2, omitLast));
            return state[i][omitLast];
        };
        return Math.max(dfs(0, 1), dfs(1, 0));
    }
}
