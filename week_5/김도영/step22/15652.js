// N과 M (4)

const fs = require("fs");

const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let path = [];
let answer = "";

function per(x) {
  if (x === M + 1) {
    answer += `${path.join(" ")}` + "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (path.length === 0 || path[path.length - 1] <= i) {
      path.push(i);
      per(x + 1);
      path.pop();
    }
  }
}

per(1);
console.log(answer);
