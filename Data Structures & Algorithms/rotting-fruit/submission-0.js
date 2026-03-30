class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length, cols = grid[0].length;
        const q = new Queue();
        let fresh = 0;

        function rot(r, c) {
            if(r<0 || c<0 || r>= rows || c>= cols) {
                return;
            }
            const fruit = grid[r][c];
            if(fruit === 0 || fruit === 2) {
                return;
            }
            fresh--;
            grid[r][c] = 2;
            q.push([r,c]);
        }
        console.log('r c', rows, cols);
        for(let r=0; r<rows; r++) {
            for(let c=0; c<cols; c++) {
                if(grid[r][c] === 2) {
                    q.push([r,c]);
                }
                if(grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        console.log('outside', q);

        let time = 0;
        while(!q.isEmpty() && fresh > 0) {
            console.log('loop', q);
            for(let i=q.size(); i > 0; i--) {
                const [r, c] = q.pop();
                rot(r+1, c);
                rot(r-1, c);
                rot(r, c+1);
                rot(r, c-1);
            }
            time++;
        }
        return fresh === 0 ? time : -1;
    }
}
