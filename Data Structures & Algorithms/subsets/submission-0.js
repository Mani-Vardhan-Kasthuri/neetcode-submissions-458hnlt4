class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const sub = [], curr = [];
        const bt = (i) => {
            if(i >= nums.length) {
                return sub.push([...curr]);
            }

            curr.push(nums[i]);
            bt(i+1);
            curr.pop();
            bt(i+1)
        }
        bt(0);
        return sub;
    }
}
