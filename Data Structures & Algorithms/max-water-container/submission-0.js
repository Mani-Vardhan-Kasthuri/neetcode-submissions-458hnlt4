class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // area = width * height
        // two pointers approch
        // as the initial width is maxium, any subscquent movements (l >> R) or (R >> L) will decrease the width
        // In order to find the max area we need to choose the heighest bar and eliminate the other.

        let L=0, R=heights.length - 1, max=0;
        while(L<R) {
            max = Math.max(max, (R - L) * Math.min(heights[L], heights[R]))
            if(heights[L] > heights[R]) {
                R--;
            } else {
                L++;
            }
        }
        return max;
    }
}
