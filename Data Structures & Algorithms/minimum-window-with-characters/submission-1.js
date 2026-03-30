class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let have = 0, need = 0, minStr = '';
        const sState = {}, tState = {};

        for(let i=0; i<t.length; i++) {
            tState[t[i]] = (tState[t[i]] || 0) + 1;
        }
        need = Object.keys(tState).length;

        let L=0, R=0;
        while(R<s.length) {
            sState[s[R]] = (sState[s[R]] || 0) + 1;

            if(tState[s[R]] && sState[s[R]] === tState[s[R]]) {
                have++;
            }

            // valid window.
            while(have === need) {
                const len = R-L+1;
                const str = s.substring(L, L + len);
                minStr =  minStr || str;
                if(len < minStr.length) {
                    minStr = str;
                }

                sState[s[L]]--;
                if(tState[s[L]] && sState[s[L]] < tState[s[L]]) {
                    have--;
                }
                L++;
            }
            R++;
        }

        return minStr;
    }
}
