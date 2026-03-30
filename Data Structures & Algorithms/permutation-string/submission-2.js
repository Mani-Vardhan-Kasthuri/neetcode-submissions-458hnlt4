class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) {
            return false;
        }
        const len = s1.length;
        for(let i=0, j = i + len; i < s2.length; i++, j = j + len) {
            const res = this.compare2Strings(s1, s2.substring(i, j));
            if(res) {
                return true;
            } 
        }
        return false;
    }

    compare2Strings(s1, s2) {
        const hash = {};
        for(let i=0; i < s1.length; i++) {
            hash[s1[i]] = (hash[s1[i]] || 0) + 1;
            hash[s2[i]] = (hash[s2[i]] || 0) - 1;
        }

        return Array.from(Object.values(hash)).every((el) => el === 0);
    }
}
