class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const state = {};
        let max = 0;
        for(let i=0; i<nums.length; i++) {
            state[nums[i]] = 1;
        }

        // in any given Sequence, the first number didn't have a number left to it
        for(let i=0; i<nums.length; i++) {
            if(!state[nums[i] - 1]) {
                // found the start of the Sequence
                let length = 0;
                while(state[nums[i] + length]) {
                    length++;
                }
                max = Math.max(length, max);
            }
        }

        return max;
    }
}
