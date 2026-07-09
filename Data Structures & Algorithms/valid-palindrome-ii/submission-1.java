class Solution {
    public boolean validPalindrome(String s) {
        char[] ch = s.toCharArray();

        for(int i=0,j=ch.length-1; i<j; i++, j--) {
            if(ch[i] != ch[j]) {
                return isPalindrome(Arrays.copyOfRange(ch, i, j)) 
                || isPalindrome(Arrays.copyOfRange(ch, i+1, j+1));
            };
        }
        return true;
        
    }

    public boolean isPalindrome(char[] chars) {
        for(int i=0,j=chars.length-1; i<j; i++, j--) {
            if(chars[i] != chars[j]) return false;
        }
        return true;
    }
}