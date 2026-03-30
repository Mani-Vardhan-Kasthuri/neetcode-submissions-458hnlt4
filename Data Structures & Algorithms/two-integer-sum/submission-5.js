class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const state = {};
        for(let i=0; i<nums.length; i++) {
            state[nums[i]] = i
        }

        for(let i=0; i<nums.length; i++) {
            if(state.hasOwnProperty(target - nums[i])) {
                const L = state[target - nums[i]];
                const R = i;
                if(L !== R) {
                    return [Math.min(L, R), Math.max(L,R)]
                }
            }
        }
    }
}
