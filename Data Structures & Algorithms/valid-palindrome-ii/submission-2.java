class Solution {
    public boolean validPalindrome(String s) {
        char[] ch = s.toCharArray();

        for(int i=0,j=ch.length-1; i<j; i++, j--) {
            if(ch[i] != ch[j]) {
                return isPalindrome(ch, i, j-1) 
                || isPalindrome(ch, i+1, j);
            };
        }
        return true;
        
    }

    public boolean isPalindrome(char[] chars, int i, int j) {
        for(; i<j; i++, j--) {
            if(chars[i] != chars[j]) return false;
        }
        return true;
    }
}