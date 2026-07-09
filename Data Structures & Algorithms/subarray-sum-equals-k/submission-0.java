public class Solution {
    public int subarraySum(int[] nums, int k) {
        int res = 0, curSum = 0;
        Map<Integer, Integer> prefixSums = new HashMap<>();
        prefixSums.put(0, 1);

        for (int num : nums) {
            curSum += num;
            int diff = curSum - k;
            res += prefixSums.getOrDefault(diff, 0);
            prefixSums.merge(curSum, 1, (a,b) -> a+b);
        }

        return res;
    }
}