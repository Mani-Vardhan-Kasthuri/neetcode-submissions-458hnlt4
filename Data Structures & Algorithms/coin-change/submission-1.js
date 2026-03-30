class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const state = {};
        const dp = (amt) => {
            if(amt === 0) return 0;
            if(state[amt]) return state[amt];
            let min = Infinity;
            for(let i=0; i<coins.length; i++) {
                const rem = amt - coins[i];
                if(rem >= 0) {
                    min = Math.min(min, dp(rem) + 1);
                }
            }
            state[amt] = min;
            return state[amt];
        }
        const mcoins = dp(amount);
        return mcoins === Infinity ? -1 : mcoins;
    }
}
