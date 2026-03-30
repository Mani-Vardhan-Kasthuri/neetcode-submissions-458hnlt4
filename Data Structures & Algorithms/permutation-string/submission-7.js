class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        let idx = (c, i) => c.charCodeAt(i) - 97;

        const s1Array = new Array(26).fill(0);
        const s2Array = new Array(26).fill(0);

        for(let i=0; i<s1.length; i++){
            s1Array[idx(s1, i)]++;
        }

        const s1Fingerprint = s1Array.join('');

        let L=0, R=0;
        
        while(R<s2.length) {
            s2Array[idx(s2, R)]++;

            if(R-L+1 > s1.length) {
                s2Array[idx(s2, L)]--;
                L++;
            }
            if(R-L+1 === s1.length && s1Fingerprint === s2Array.join('')) {
                return true;
            }
            R++;
        }
        return false;
    }
}