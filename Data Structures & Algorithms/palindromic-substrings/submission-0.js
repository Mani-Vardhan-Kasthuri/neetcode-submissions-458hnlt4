class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
            for(let i=0; i<s.length; i++) {
            // odd
            let r=i;
            let l=i;
            while(l>=0 && r<s.length && s[l] === s[r]) {
                count++;
                l--;
                r++;
            }

            // even
            l=i;
            r=i+1;
            while(l>=0 && r<s.length && s[l] === s[r]) {
                count++;
                l--;
                r++;
            }
        }
        return count;
    }
}
