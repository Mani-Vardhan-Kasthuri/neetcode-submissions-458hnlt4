class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let L=0, R=0, max = 0, state={};

        // window validity, L<R and no duplicates in b/w
        while(R<s.length) {
            state[s[R]] = (state[s[R]] || 0) + 1;
            
            // srinking the window if duplicates found till the window is valid
            while(state[s[R]] > 1) {
                state[s[L]] = state[s[L]] - 1;
                // if(state[s[L]] === 0) {
                //     delete state[s[L]];
                // }
                L++;
            }
            max = Math.max(max, R - L + 1);
            R++;
        }

        return max;
    }
}
