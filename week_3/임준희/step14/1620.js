const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const nameMap = new Map();
const numMap = new Map();

let res = "";

for (let i = 1; i <= n; i++) {
  nameMap.set(input[i], i);
  numMap.set(i.toString(), input[i]);
}

for (let i = n + 1; i <= n + m; i++) {
  if (isNaN(input[i])) {
    res += nameMap.get(input[i]) + "\n";
  } else {
    res += numMap.get(input[i]) + "\n";
  }
}
console.log(res);
