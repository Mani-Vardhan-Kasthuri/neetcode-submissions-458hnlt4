class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // rows
        for(let i=0; i<9; i++) {
            const seen = Array(10).fill(0);
            for(let j=0; j<9; j++) {
                const val = board[i][j];
                if(val !== ".") {
                    if(seen[+val]) return false;
                    seen[+val] = 1;
                }
            }
        }

        // cols
        for(let i=0; i<9; i++) {
            const seen = Array(10).fill(0);
            for(let j=0; j<9; j++) {
                const val = board[j][i];
                if(val !== ".") {
                    if(seen[+val]) return false;
                    seen[+val] = 1;
                }
            }
        }

        // 3*3 grid
        let col=0, row=0;
        while(col<9 && row<9) {
            let lc = col;
            let rc = col + 2;
            let tr= row;
            let br = row + 2;
            const seen = Array(10).fill(0);
            for(let r = tr; r <= br; r++) {
                for(let c=lc; c<=rc; c++) {
                    const val = board[r][c];
                    if(val !== ".") {
                        if(seen[+val]) return false;
                        seen[+val] = 1;
                    }
                }
            }
            col = rc + 1;
            row = tr;
            if(col === 9) {
                col = 0;
                row = row + 3;
            }
        }

        return true;
    }
}
