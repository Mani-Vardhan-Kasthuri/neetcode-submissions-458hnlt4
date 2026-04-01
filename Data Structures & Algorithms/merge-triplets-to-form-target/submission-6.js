class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let i = false, j = false, k = false;
        triplets.forEach((triplet) => {
            if(triplet[0] <= target[0] && triplet[1] <= target[1] && triplet[2] <= target[2]) {
                if(!i) i = triplet[0] === target[0];
                if(!j) j = triplet[1] === target[1];
                if(!k) k = triplet[2] === target[2];
            }
        });
        return i && j && k;
    }
}
