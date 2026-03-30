class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let area = 0;
        for(let row=0; row<rows; row++) {
            for(let col=0; col<cols; col++) {
                if(grid[row][col] === 1) {
                    area = Math.max(area, this.dfs(grid, row, col));
                }
            }
        }
        return area;
    }

    dfs(grid, row, col) {
        if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
            return 0;
        }
        let area = 0;
        if(grid[row][col] === 1) {
            area++;
            grid[row][col] = 0;
            area += this.dfs(grid, row+1, col);
            area += this.dfs(grid, row-1, col);
            area += this.dfs(grid, row, col+1);
            area += this.dfs(grid, row, col-1);
        }
        return area;
    }
}
