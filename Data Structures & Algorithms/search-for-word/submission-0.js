class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length, cols = board[0].length;
        const curr = [], visit = Array.from({ length: rows }, () => Array(cols).fill(0));
        const bt = (r, c, i) => {
            // out of bounds
            if(r<0 || c <0 || r >= rows || c >= cols) return false;

            if(visit[r][c] || board[r][c] !== word[i]) return false;

            curr.push(board[r][c]);
            visit[r][c] = 1;
            if(curr.length === word.length) return true;

            // go in 4 directions
            if(bt(r+1,c,i+1)) return true;
            if(bt(r-1,c,i+1)) return true;
            if(bt(r,c+1,i+1)) return true;
            if(bt(r,c-1,i+1)) return true;

            curr.pop();
            visit[r][c] = 0;
            return false;
        }
        for(let r=0; r<rows; r++) {
            for(let c=0; c<cols; c++) {
                if(board[r][c] === word[0] && bt(r, c, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
}
