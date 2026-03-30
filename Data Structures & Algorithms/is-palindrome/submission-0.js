class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        console.log(s)
        let L=0, R=s.length -1;
        while(L<R) {
            if(s[L] !== s[R]) {
                return false;
            }
            L++;
            R--;
        }
        return true;
    }
}
