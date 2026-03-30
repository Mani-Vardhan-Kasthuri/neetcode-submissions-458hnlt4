class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const state = {};
        const anagramGroup = [];

        for(let i=0; i<strs.length; i++) {
            if(!state[i]) {

                const anagram = [strs[i]];

                for(let k=i+1; k< strs.length; k++) {
                    if(!state[k] && this.isAnagram(strs[i], strs[k])) {
                        state[k] = 1;
                        anagram.push(strs[k]);
                    }
                }
                anagramGroup.push(anagram);
            }
        }
        return anagramGroup;
    }

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
