const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);

const dance = new Set();

dance.add("ChongChong");

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ");

  if (dance.has(a) || dance.has(b)) {
    dance.add(a).add(b);
  }
}

console.log(dance.size);
