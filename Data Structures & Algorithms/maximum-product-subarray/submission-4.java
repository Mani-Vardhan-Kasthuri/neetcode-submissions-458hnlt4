class Solution {
    public int maxProduct(int[] nums) {
        int maxPro = nums[0];
        int currMin = 1, currMax = 1;

        for(int num: nums) {
            int temp = num * currMax;
            currMax = Math.max(Math.max(num * currMax, num * currMin), num);
            currMin = Math.min(Math.min(temp, num * currMin), num);
            maxPro = Math.max(maxPro, currMax);
        }

        return maxPro;
    }
}
