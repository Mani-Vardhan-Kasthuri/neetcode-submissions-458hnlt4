class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length, cols = heights[0].length, res=[];
        const pacific = Array.from({ length: rows }, () => Array(cols).fill(0));
        const atlantic  = Array.from({ length: rows }, () => Array(cols).fill(0));
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        function dfs(r, c, ocean) {
            ocean[r][c] = 1;

            for(let [dr, dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;  
                if(nr >=0 && nr < rows
                && nc >= 0 && nc < cols
                && ocean[nr][nc] === 0
                && heights[r][c] <= heights[nr][nc]) {
                    dfs(nr, nc, ocean);
                }
            }
        }

        for(let c=0; c<cols; c++) {
            dfs(0, c, pacific);
            dfs(rows-1, c, atlantic);
        }

        for(let r=0; r<rows; r++) {
            dfs(r, 0, pacific);
            dfs(r, cols-1, atlantic);
        }

        for(let r=0; r<rows; r++) {
            for(let c=0; c<cols; c++) {
                if(pacific[r][c] === 1 && atlantic[r][c] === 1) {
                    res.push([r,c]);
                }
            }
        }
        return res;
    }
}