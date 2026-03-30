class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let res = 0;
        // bfs
        for(let row=0; row < grid.length; row++) {
            for(let col=0; col < grid[0].length; col++) {
                // found the land
                if(grid[row][col] === '1') {
                    res++;
                    // flood the land
                    this.flood(grid, row, col);
                }
            }
        }
        return res;
    }

    flood(grid, row, col) {
        // out of bounds
        const rows = grid.length;
        const cols = grid[0].length;
        if(row < 0 || row >= rows) {
            return;
        }
        if(col < 0 || col >= cols) {
            return;
        }

        if(grid[row][col] === '1') {
            grid[row][col] = '0';
            this.flood(grid, row - 1, col);
            this.flood(grid, row + 1, col);
            this.flood(grid, row, col + 1);
            this.flood(grid, row, col - 1);
        }
    }
}
