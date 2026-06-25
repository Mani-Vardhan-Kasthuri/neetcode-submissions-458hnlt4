class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> fqMap = new HashSet<>();

        for(int num: nums) {
            if(fqMap.contains(num)) {
                return true;
            } else {
                fqMap.add(num);
            }
        }

        return false;
    }
}