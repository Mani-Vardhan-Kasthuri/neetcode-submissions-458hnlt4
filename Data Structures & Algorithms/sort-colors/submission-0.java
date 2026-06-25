class Solution {
    public void sortColors(int[] nums) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int c : nums) {
            count.merge(c, 1, Integer::sum);
        }

        // Use getOrDefault to prevent NullPointerException if a color is missing
        int reds = count.getOrDefault(0, 0);
        int whites = count.getOrDefault(1, 0);
        int blues = count.getOrDefault(2, 0);

        int currentIdx = 0;

        // Fill Reds (0)
        if (reds > 0) {
            Arrays.fill(nums, currentIdx, currentIdx + reds, 0);
            currentIdx += reds;
        }

        // Fill Whites (1)
        if (whites > 0) {
            Arrays.fill(nums, currentIdx, currentIdx + whites, 1);
            currentIdx += whites;
        }

        // Fill Blues (2)
        if (blues > 0) {
            Arrays.fill(nums, currentIdx, currentIdx + blues, 2);
        }
    }
}
