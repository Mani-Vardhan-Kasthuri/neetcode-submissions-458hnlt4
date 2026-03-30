class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const state = {};
        const dfs = (i) => {
            if(i >= cost.length) return 0;
            if(state[i]) return state[i];
            state[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
            return state[i];
        };

        return Math.min(dfs(0), dfs(1));
    }
}
