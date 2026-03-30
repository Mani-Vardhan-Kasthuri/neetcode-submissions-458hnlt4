class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let lMax=0, rMax=0, l=0, r=height.length-1, count=0;

        // lMax=3, rMax=3, l=3, r=3, count=9;
        // [0,2,0,3,1,0,1,3,2,1]
        // [0,1,2,3,4,5,6,7,8,9]
        while(l < r) {
            lMax = Math.max(lMax, height[l]);
            rMax = Math.max(rMax, height[r]);

            if(height[l] < height[r]) {
                count += Math.max(0, lMax - height[l]);
                l++;
            } else {
                count += Math.max(0, rMax - height[r]);
                r--;
            }
        }
        return count;
    }
}
