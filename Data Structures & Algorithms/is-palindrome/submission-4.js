class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        console.log(s);
        let L=0, R=s.length -1;
        while(L<R) {
            console.log('Before => L, R', L, s[L], R, s[R])
            while(L < R && !this.isAlphaNum(s[L])) {
                L++;
            }

            while(L < R && !this.isAlphaNum(s[R])) {
                R--;
            }
            console.log('After => L, R', L, s[L], R, s[R])

            if(s[L] !== s[R]) {
                return false;
            }
            L++;
            R--;
        }
        return true;
    }

    isAlphaNum(c) {
        return (
            (c >= 'a' && c <= 'z')
            || (c >= '0' && c <= '9')
        )
    }
}
