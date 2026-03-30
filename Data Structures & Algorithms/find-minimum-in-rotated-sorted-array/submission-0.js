class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let L=0, R=nums.length - 1;
        // l=3, r=3 mid=4
        while(L<R) {
            let mid = L + Math.floor((R-L)/2);
            if(nums[mid] < nums[R]) {
                R = mid;
            } else {
                 L = mid + 1;
            }
        }
        return nums[L]
    }
}
