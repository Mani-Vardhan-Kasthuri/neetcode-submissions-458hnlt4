class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int curr = 0;

        for(int num: nums) {
            curr = Math.max(curr + num, num);
            // curr += num;
            maxSum = Math.max(maxSum, curr);
        }

        return maxSum;
    }
}
