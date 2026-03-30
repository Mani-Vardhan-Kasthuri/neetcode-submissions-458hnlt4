class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // if odd number
        if(s.length % 2 === 1) {
            return false;
        }
        const stack = [];
        const map = {
            '(': ')',
            '{': '}',
            '[': ']'
        };
        for(let i=0; i<s.length; i++) {
            // open
            if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
                stack.push(s[i]);
            } else if(s[i] !== map[stack.pop()]) {
                return false;
            }
        }
        return stack.length === 0;
    }
}
