class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        for(let i=0; i<strs.length; i++) {
            const str = strs[i];
            encodedStr += `!${str.length}#${str}`;
        }
        console.log(encodedStr);
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoaded = [];
        let i=0;
        while(i<str.length) {
            if(str[i] === '#' && !isNaN(str[i - 1])) {
                let j = i - 1;
                while(str[j] !== '!') {
                    j--;
                }
                j++;
                let no = '';
                while(j < i) {
                    no += str[j];
                    j++;
                }

                let destr = '';
                i++;
                let r = i + parseInt(no);
                while(i < r) {
                    destr += str[i];
                    i++;
                }
                decoaded.push(destr);
            } else {
                i++;
            }
        }
        return decoaded;
    }
}
