class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const state = {};
        const dp = (i) => {
            if(i === s.length) return 1;
            if(s[i] === '0') return 0;
            if(state[s[i]]) return state[s[i]];

            let res = dp(i+1);
            if(i < s.length - 1) {
                if(s[i] === '1' || (s[i] === '2' && s[i+1] < '7')) {
                    res += dp(i+2);
                }
            }
            state[s[i]] = res;
            return state[s[i]];
        }

        return dp(0);
    }
}
