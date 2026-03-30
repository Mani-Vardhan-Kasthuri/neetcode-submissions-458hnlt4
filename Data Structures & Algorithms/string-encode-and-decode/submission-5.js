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
        for(let i=0; i<str.length; i++) {
            if(str[i] === '#' && !isNaN(str[i - 1])) {
                let j = i;
                while(str[j] !== '!') {
                    j--;
                }
                j++;
                const len = parseInt(str.substring(j, i));
                console.log('j, i', j, i);
                console.log('length', len);
                decoaded.push(str.substring(i+1, i + 1 + len));
            }
        }
        return decoaded;
    }
}
