class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const stack = [];
        intervals.sort((a, b) => a[0] - b[0]);
        stack.push(intervals[0]);
        for(let i=1; i<intervals.length; i++) {
            const peek = stack[stack.length - 1];
            if(peek[1] >= intervals[i][0]) {
                peek[1] = Math.max(peek[1], intervals[i][1]);
            } else {
                stack.push(intervals[i]);
            }
        }
        return stack;
    }
}
