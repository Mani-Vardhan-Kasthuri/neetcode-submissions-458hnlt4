class Solution {
    public String longestCommonPrefix(String[] strs) {
        String base = strs[0];
        for(int j=0; j < base.length(); j++) {
            for(int i=0; i< strs.length; i++) {
                if(strs[i].length() == j || base.charAt(j) != strs[i].charAt(j)) {
                    return base.substring(0, j);
                }
            }
        }
        return base;
    }
}