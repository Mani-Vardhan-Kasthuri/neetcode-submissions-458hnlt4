class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let L=0, R=1, max = 0;
        // valid window will be L < R and prices[L] < prices[R]
        // 
        while(R<prices.length) {
            if(prices[L] < prices[R]) {
                max = Math.max(max, prices[R] - prices[L]);
                R++;
            } else {
                L=R;
                R++;
            }
        }
        return max;
    }
}
