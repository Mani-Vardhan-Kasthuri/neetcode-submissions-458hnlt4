class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows=grid.length, cols=grid[0].length;
        const queue = new Queue(), state={};

        for(let row=0; row<rows; row++) {
            for(let col=0; col<cols; col++) {
                if(grid[row][col] === 0) {
                    queue.push([row, col]);
                    state[`${row}${col}`] = 1;
                }
            }
        }

        function addCell(r, c) {
            if(r<0 || c<0 || r>=rows || c >= cols || state[`${r}${c}`]) {
                return;
            }

            if(grid[r][c] > 0) {
                state[`${r}${c}`] = 1;
                queue.push([r, c]);
            }
        }

        let dist = 0;
        while(!queue.isEmpty()) {
            for(let i=queue.size(); i>0; i--) {
                let [r,c] = queue.pop();
                grid[r][c] = dist;
                addCell(r+1, c);
                addCell(r-1, c);
                addCell(r, c+1);
                addCell(r, c-1);
            }
            dist++;
        }
    }
}
