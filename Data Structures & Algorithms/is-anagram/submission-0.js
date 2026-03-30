class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const state = {};
        if(s.length !== t.length) {
            return false;
        }
        for(let i=0; i<s.length; i++) {
            state[s[i]] = (state[s[i]] || 0) + 1;
        }

        for(let i=0; i<t.length; i++) {
            if(!state[t[i]]) {
                return false;
            }
            state[t[i]] = state[t[i]] - 1;
        }

        return true;
    }
}
