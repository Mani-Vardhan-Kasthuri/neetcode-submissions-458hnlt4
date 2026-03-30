class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let L=0, R=matrix.length - 1, mid=0, row=0;
        while(L<=R) {
            mid = Math.floor((L+R)/2);
        console.log('L, R, mid', L, R, mid);
            if((matrix[mid][0] <= target && mid === R)
            || (matrix[mid][0] <= target && target < matrix[mid + 1][0])) {
                // found the row;
                break;
            } else if(matrix[mid][0] > target) {
                R = mid - 1;
            } else {
                L = mid + 1;
            }
        }
        L=0, R=matrix[0].length - 1, row=mid, mid=0;

        while(L<=R) {
            mid = Math.floor((L+R)/2);
            if(matrix[row][mid] === target) {
                return true;
            } else if(matrix[row][mid] > target) {
                R = mid - 1;
            } else {
                L = mid + 1;
            }
        }
        return false;
    }
}
