class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {

            const count = new Array(26).fill(0);

            for (let c of str) {
                count[c.charCodeAt(0) - 97]++;
            }

            const key = count.join('#');

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return Array.from(map.values());
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
