const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.trim().split(' ').map(Number));

// Please write your code here.

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function boom(y, x){
  const arr = grid.map((row) => [...row]);

  for(let d = 0; d < 4; d++){
    for(let k = 1; k < arr[y][x]; k++){
      let ny = y + dy[d] * k;
      let nx = x + dx[d] * k;
      if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
      arr[ny][nx] = 0;
    }
  }
  arr[y][x] = 0;

  const temp = Array(n).fill().map(() => Array(n).fill(0));

  for(let j = 0; j < n; j++){
    let idx = n - 1;
    for(let i = n - 1; i >= 0; i--){
      if(arr[i][j] > 0){
        temp[idx][j] = arr[i][j];
        idx--;
      }
    }
  }

  return temp;
}

function check(arr){
  let cnt = 0;

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n - 1; j++){
      if(arr[i][j] === 0) continue;
      if(arr[i][j] === arr[i][j + 1]) cnt++;
    }
  }

  for(let i = 0; i < n - 1; i++){
    for(let j = 0; j < n; j++){
      if(arr[i][j] === 0) continue;
      if(arr[i][j] === arr[i + 1][j]) cnt++;
    }
  }

  return cnt;
}

let mx = -1e9;

for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    const b = boom(i, j);
    mx = Math.max(mx, check(b));
  }
}

console.log(mx);
