const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));

// Please Write your code here.

class Queue {
  constructor(){
    this.q = [];
    this.head = 0;
    this.tail = 0;
  }
  push(item){
    this.q.push(item);
    this.tail++;
  }
  size(){
    return this.tail - this.head;
  }
  empty(){
    return this.head === this.tail;
  }
  pop(){
    if(this.empty()) throw new Error('que is empty');
    return this.q[this.head++];
  }
}

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const q = new Queue();
const visited = Array(n).fill().map(() => Array(n).fill(0));

for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(grid[i][j] === 2){
      q.push([i, j]);
      visited[i][j] = 1;
    }
  }
}

while(q.size()){
  const [y, x] = q.pop();
  for(let d = 0; d < 4; d++){
    let ny = y + dy[d];
    let nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx]) continue;
    if(grid[ny][nx] === 1){
      visited[ny][nx] = visited[y][x] + 1;
      q.push([ny, nx]);
    }
  }
}

for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(visited[i][j] > 0) visited[i][j]--;
    else{
      if(grid[i][j] === 1) visited[i][j] = -2;
      else if(grid[i][j] === 0) visited[i][j] = -1;
    }
  }
}

console.log(visited.map((row) => row.join(' ')).join('\n'));