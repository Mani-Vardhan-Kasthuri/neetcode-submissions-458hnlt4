class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({ length: n }, () => []);
        const visit = Array(n).fill(0);

        for(let edge of edges) {
            adj[edge[0]].push(edge[1]);
            adj[edge[1]].push(edge[0]);
        }

        function dfs(node) {
            if(visit[node]) return;

            visit[node] = 1;
            for(let edg of adj[node]) {
                dfs(edg);
            }
        }

        let res = 0;
        for(let node=0; node<n; node++) {
            if(!visit[node]) {
                res++;
                dfs(node);
            }
        }
        return res;
    }
}
