// G or H 3

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(" ");
  people.push([Number(x), c]);
}

const photo = new Array(10000).fill(null);

let maxPoint = Number.MIN_SAFE_INTEGER;

for (let [x, c] of people) {
  photo[x - 1] = c;
}

for (let i = 0; i <= 10000 - k; i++) {
  let point = 0;
  for (let j = 0; j <= k; j++) {
    if (photo[i + j] === "G") {
      point += 1;
    } else if (photo[i + j] === "H") {
      point += 2;
    }
  }

  maxPoint = Math.max(point, maxPoint);
}

console.log(maxPoint);
