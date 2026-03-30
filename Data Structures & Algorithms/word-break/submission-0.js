class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const state = {};
        const dfs = (s, wordDict, i) => {
        if(i === s.length) return true;
        if(i in state) return state[i];
        for(let w of wordDict) {
            if(i + w.length <= s.length
            && s.substring(i, i + w.length) === w) {
                if(dfs(s, wordDict, i + w.length)) {
                    state[i] = true;
                    return true;
                }
            }
        }
            state[i] = false;
            return state[i];
        }
        return dfs(s, wordDict, 0);
    }
}