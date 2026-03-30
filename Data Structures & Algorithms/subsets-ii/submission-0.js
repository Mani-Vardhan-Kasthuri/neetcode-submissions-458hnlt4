class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort((a,b) => a-b);
        const res = [], curr = [];

        const bt = (i) => {
            if(i === nums.length) return res.push([...curr]);

            // pushing
            curr.push(nums[i]);
            bt(i+1);

            // without pushing
            curr.pop();
            while(nums[i] === nums[i+1]) i++;
            bt(i+1);
        }

        bt(0);
        return res;
    }
}
