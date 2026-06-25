class Solution {
    public int majorityElement(int[] nums) {
        Map<Integer, Integer> fq = new HashMap<>();
        int maj = nums.length / 2;
        for(int n: nums) {
            fq.merge(n, 1, Integer::sum);
            if(fq.get(n) > maj) {
                return n;
            }
        }
        return 0;
    }
}