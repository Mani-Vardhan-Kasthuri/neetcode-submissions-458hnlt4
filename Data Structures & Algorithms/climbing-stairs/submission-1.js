class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    res = {};
    climbStairs(n) {
        if(n == 1) return 1;
        if(n == 2) return 2;
        if(this.res[n]) return this.res[n];
        this.res[n] = this.climbStairs(n-1) + this.climbStairs(n-2);
        return this.res[n];
    }
}
