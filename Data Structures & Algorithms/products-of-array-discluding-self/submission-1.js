class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let len = nums.length;
        const res = [];
        // [1,2,4,6]
        // cal prefix
        const prefix = [nums[0]];
        for(let i = 1; i<len; i++) {
            prefix[i] = prefix[i - 1] * nums[i];
        }
        // [1, 2, 8, 48]

        // postfix
        const postfix = [];
        postfix[len - 1] = nums[len - 1];
        for(let i = len - 2; i > -1; i--) {
            postfix[i] = postfix[i + 1] * nums[i];
        }
        // [48,48,24,6]

        // product fir i th elm is prefix[i-1] * post[i+1]
        for(let i = 0; i<len; i++) {
            const pre = i - 1 < 0 ? 1 : prefix[i-1];
            const post = i + 1 > len - 1 ? 1 : postfix[i+1];
            res[i] = pre * post;
        }
        return res;
    }
}
