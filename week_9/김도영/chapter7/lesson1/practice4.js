// 상해버린 치즈

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, d, s] = input[0].split(" ").map(Number);

const info1 = [];
for (let i = 1; i <= d; i++) {
  const [p, cheese, t] = input[i].split(" ").map(Number);
  info1.push({ p, cheese, t });
}

const info2 = [];
for (let i = d + 1; i <= d + s; i++) {
  const [p, t] = input[i].split(" ").map(Number);
  info2.push({ p, t });
}

let maxPill = 0;
for (let i = 1; i <= m; i++) {
  const time = new Array(n + 1).fill(0);

  for (let cheeseInfo of info1) {
    if (cheeseInfo.cheese !== i) continue;

    if (time[cheeseInfo.p] === 0 || time[cheeseInfo.p] > cheeseInfo.t) {
      time[cheeseInfo.p] = cheeseInfo.t;
    }
  }

  let possible = true;
  for (let eatInfo of info2) {
    if (time[eatInfo.p] === 0 || time[eatInfo.p] >= eatInfo.t) {
      possible = false;
    }
  }

  let pill = 0;
  if (possible) {
    for (let j = 1; j <= n; j++) {
      if (time[j] !== 0) pill++;
    }
  }

  maxPill = Math.max(maxPill, pill);
}

console.log(maxPill);
