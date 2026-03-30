class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const state = {};
        let L=0, R=0, max=0;

        // valid window condition
        // window length = max frq elm + k opes
        while(R<s.length) {
            state[s[R]] = (state[s[R]] || 0) + 1;
            // invalid window
            while(R-L+1 - Math.max(...Object.values(state)) > k) {
                state[s[L]] = state[s[L]] - 1;
                if(state[s[L]] === 0) {
                    delete state[s[L]];
                }
                L++;
            }
            max = Math.max(max, R-L+1);
            R++;
        }

        return max;
    }
}
