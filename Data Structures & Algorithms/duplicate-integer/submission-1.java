class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashMap<Integer, Boolean> fqMap = new HashMap<>();

        for(int num: nums) {
            if(fqMap.containsKey(num)) {
                return true;
            } else {
                fqMap.put(num, true);
            }
        }

        return false;
    }
}