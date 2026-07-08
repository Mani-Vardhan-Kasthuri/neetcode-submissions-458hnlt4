class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length == 0) return 0;
        Arrays.sort(nums);
        Map<Integer, Integer> hash = new HashMap<>();
        int res = 1;
        for(int i=0; i<nums.length; i++) {
            if(hash.containsKey(nums[i] - 1)) {
                hash.put(nums[i], hash.get(nums[i] - 1) + 1);
                res = Math.max(hash.get(nums[i]), res);
            } else {
                hash.put(nums[i], 1);
            }
        }
        return res;
    }
}
