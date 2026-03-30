class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const state = {};
        for(let i=0; i<nums.length; i++) {
            state[nums[i]] = (state[nums[i]] || 0) + 1;
            if(state[nums[i]] === 2) {
                return true;
            }
        }
        return false;
    }
}
