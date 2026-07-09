class Solution {
    public List<Integer> majorityElement(int[] nums) {
        Map<Integer, Integer> fqMap = new HashMap<>();
        Set<Integer> res = new HashSet<>();

        for(int i=0; i<nums.length; i++) {
            fqMap.merge(nums[i], 1, (oldVal, newVal) -> oldVal + newVal);
            if(fqMap.getOrDefault(nums[i], 0) > nums.length/3) {
                res.add(nums[i]);
            }
        }

        return new ArrayList<>(res);
    }
}