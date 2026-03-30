class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            // all the values post this will be -ev, we can't ger zeros
            if (nums[i] > 0) break;

            // de dup only after the elm is processed other wise (-1,-1,2) will fail, it will go to the last -1
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                // can decrease the sum only by removing the current largest value.
                if (sum > 0) {
                    r--;
                // can increase the sum only by removing the current smallest value
                } else if (sum < 0) {
                    l++;
                } else {
                    // found the triplet
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    // why are we deduping only left?
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }

                    while (r > l && nums[r] === nums[r + 1]) {
                        r--;
                    }
                }
            }
        }
        return res;
    }
}