public class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int curr = 0, gMax = nums[0], gMin = nums[0], total = 0, currMin = 0;
        for(int num: nums) {
            curr = Math.max(num, num + curr);
            gMax = Math.max(gMax, curr);
            total += num;
            currMin = Math.min(num, num + currMin);
            gMin = Math.min(gMin, currMin);
        }

        return gMax > 0 ? Math.max(gMax, total - gMin) : gMax;
    }
}