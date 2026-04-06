class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [], len = intervals.length;
        let i=0;
        // copy the left side of set
        while(i < len && newInterval[0] > intervals[i][1]) {
            res.push(intervals[i]);
            i++;
        }

        res.push(newInterval);
        while(i < len && newInterval[1] >= intervals[i][0]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }

        while(i < len) {
            res.push(intervals[i]);
            i++;
        }

        return res;
    }
}
