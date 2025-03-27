// N과 M (1)

const fs = require("fs");

const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const visited = new Array(N + 1).fill(0);
let path = [];
let answer = "";

function per(x) {
  if (x === M + 1) {
    answer += `${path.join(" ")}` + "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      path.push(i);
      per(x + 1);
      visited[i] = 0;
      path.pop();
    }
  }
}

per(1);
console.log(answer);
