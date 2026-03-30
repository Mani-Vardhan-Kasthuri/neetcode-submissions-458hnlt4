class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target === nums[mid]) {
                return mid;
            }

            // left sorted array is correct
            if(nums[l] <= nums[mid]) {
                if(target < nums[l] || target > nums[mid]) {
                    l = mid +1;
                } else {
                    r = mid
                }
            } else {
                if(target < nums[mid] || target > nums[r]) {
                    r = mid-1;
                } else {
                    l = mid;
                }
            }

        }
        return -1;
    }
}