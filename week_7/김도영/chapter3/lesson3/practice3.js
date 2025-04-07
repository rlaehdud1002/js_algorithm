// 원점으로부터의 거리

const fs = require("fs");

const [n, ...points] = fs.readFileSync(0).toString().trim().split("\n");

class Distance {
  constructor(idx, dis) {
    this.idx = idx;
    this.dis = dis;
  }
}

let distance = new Array();
for (let i = 0; i < n; i++) {
  const [x, y] = points[i].split(" ").map(Number);

  distance.push(new Distance(i + 1, Math.abs(x) + Math.abs(y)));
}

distance.sort((a, b) => {
  if (a.dis === b.dis) {
    return a.idx - b.idx;
  }

  return a.dis - b.dis;
});

let result = new Array();
for (let dis of distance) {
  result.push(dis.idx);
}

console.log(result.join("\n"));
