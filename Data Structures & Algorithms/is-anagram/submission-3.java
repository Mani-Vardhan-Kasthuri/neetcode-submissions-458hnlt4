class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) {
            return false;
        }

        Map<Character, Integer> fq = new HashMap<>();

        for(char c: s.toCharArray()) {
            fq.put(c, fq.getOrDefault(c, 0) + 1);
            // fq.merge(c, 1, Integer::sum);
        }

        for(char c: t.toCharArray()) {
            if(!fq.containsKey(c)) {
                return false;
            }
            fq.put(c, fq.getOrDefault(c, 0) - 1);
            if(fq.getOrDefault(c, 0) == 0) {
                fq.remove(c);
            }
        }

        return true;
    }
}
