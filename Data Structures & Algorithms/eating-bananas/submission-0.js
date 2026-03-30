class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // given h >= piles, max rate is Max(piles), min is 1
        // adguest the rate k, to finesh in time.

        let min = 1, max = Math.max(...piles), mid = 0, k=0;

        while(min <= max) {
            mid = Math.floor((min+max)/2);

            const timeToCompleate = this.time(piles, mid);
            console.log('min max mid time', min, max, mid, timeToCompleate);

            if(h < timeToCompleate) {
                min = mid + 1;
            } else if(h >= timeToCompleate) {
                k = mid;
                max = mid - 1;
            }
        }
        return k;
    }

    time(piles, k) {
        let t=0;
        for(let i=0; i<piles.length; i++) {
            t = t + Math.ceil(piles[i]/k);
        }
        return t;
    }
}
