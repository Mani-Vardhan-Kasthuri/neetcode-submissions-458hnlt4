class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let idx = 0;
        let len = 0;

        for(let i=0; i<s.length; i++) {
            // odd
            let r=i;
            let l=i;
            while(l>=0 && r<s.length && s[l] === s[r]) {
                if(r-l+1 > len) {
                    len = r-l+1;
                    idx = l;
                }
                l--;
                r++;
            }

            // even
            l=i;
            r=i+1;
            while(l>=0 && r<s.length && s[l] === s[r]) {
                if(r-l+1 > len) {
                    len = r-l+1;
                    idx = l;
                }
                l--;
                r++;
            }
        }

        return s.substring(idx, idx + len);
    }
}
