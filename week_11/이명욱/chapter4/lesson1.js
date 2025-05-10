const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, u, d] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

class Queue {
  constructor (){
    this.q = [];
    this.head = 0;
    this.tail = 0;
  }
  push(item){
    this.q.push(item);
    this.tail++;
  }
  empty(){
    return this.tail === this.head;
  }
  size(){
    return this.tail - this.head;
  }
  pop(){
    if(this.empty()){
      throw new Error('que is empty');
    }
    return this.q[this.head++];
  }
}

const sPos = [];
const pos = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    pos.push([i, j]);
  }
}

let visited = Array(n).fill().map(() => Array(n).fill(0));
let mx = -1e9;

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const q = new Queue();

function bk(idx, cnt){
  if(cnt > k) return;

  if(idx === n * n){
    if(cnt === k){
      visited = Array(n).fill().map(() => Array(n).fill(0));

      for([y, x] of sPos){
        q.push([y, x]);
        visited[y][x] = 1;
      }

      bfs();

      let cnt = 0;
      for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
          if(visited[i][j]) cnt++;
        }
      }
      mx = Math.max(mx, cnt);
    }
    return;
  }

  sPos.push(pos[idx]);
  bk(idx + 1, cnt + 1);
  sPos.pop();

  bk(idx + 1, cnt);

}

function bfs(){
  while(q.size()){
    const [y, x] = q.pop();
    for(let l = 0; l < 4; l++){
      let ny = y + dy[l];
      let nx = x + dx[l];
      if(ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx]) continue;
      if(Math.abs(grid[y][x] - grid[ny][nx]) >= u && Math.abs(grid[y][x] - grid[ny][nx]) <= d){
        visited[ny][nx] = 1;
        q.push([ny, nx]);
      }
    }
  }
}

bk(0, 0);
console.log(mx);
