const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(row => row.split(" ").map(Number));

// Please write your code here.

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function dfs(y, x, v){
  let cnt = 1;

  for(let d = 0; d < 4; d++){
    let ny = y + dy[d];
    let nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx]) continue;
    if(grid[ny][nx] === v){
      visited[ny][nx] = 1;
      cnt += dfs(ny, nx, v);
    }
  }

  return cnt;
}

let res = 0;
let mx = -1e9;
const visited = Array(n).fill().map(() => Array(n).fill(0));

for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(!visited[i][j]){
      const v = grid[i][j];
      visited[i][j] = 1;
      const cnt = dfs(i, j, v);
      mx = Math.max(mx, cnt);
      if(cnt >= 4) res++;
    }
  }
}

console.log(res, mx);