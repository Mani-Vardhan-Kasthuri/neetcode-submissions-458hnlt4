class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curr = -Infinity, max = -Infinity;
        for(let j=0; j < nums.length; j++) {
            if(nums[j] > curr + nums[j]) {
                // reset
                curr = nums[j];
            } else {
                curr = curr + nums[j];
            }
            max = Math.max(max, curr);
        }
        return max;
    }
}
