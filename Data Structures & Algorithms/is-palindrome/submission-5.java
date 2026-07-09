class Solution {
    public boolean isPalindrome(String s) {
        char[] chars = s.toLowerCase().toCharArray();
        int i=0, j=chars.length-1;
        while(i<j) {
            while(i<j && !alphaNum(chars[i])) {
                i++;
            }
            while(i<j && !alphaNum(chars[j])) {
                j--;
            }
            if(chars[i] != chars[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    public boolean alphaNum(char c) {
        return (c >= 'A' && c <= 'Z' ||
                c >= 'a' && c <= 'z' ||
                c >= '0' && c <= '9');
    }
}
