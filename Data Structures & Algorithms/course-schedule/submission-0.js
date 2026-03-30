class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const coursesMap = {}, visit = {};
        for(let i=0; i<numCourses; i++) {
            coursesMap[i] = [];
        }
        for(let pre of prerequisites) {
            coursesMap[pre[0]].push(pre[1]);
        }

        function dfs(course) {
            const pre = coursesMap[course];
            if(visit[course]) {
                return false;
            }
            if(pre.length === 0) {
                return true;
            } else {
                visit[course] = 1;
                for(let cou of pre) {
                    if(!dfs(cou)) {
                        return false;
                    }
                }
                coursesMap[course] = [];
            }
            delete visit[course];
            return true;
        }

        for(let i=0; i<numCourses; i++) {
            if(!dfs(i)) {
                return false;
            }
        }
        return true;
    }
}
