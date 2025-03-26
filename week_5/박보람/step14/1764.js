let route = "input.txt";
// let route = "dev/stdin";

let [input, ...arr] = require("fs")
  .readFileSync(route)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.replace(/\r/g, ""));
let [n, m] = input.split(" ").map(Number);
//n 듣도 못함
let notHear = arr.slice(0, n);
//m 보도 못함
let notSee = arr.slice(n, n + m);

let cntMap = new Map();

// 듣도 보도 못한 사람
for (let i = 0; i < n; i++) {
  let name = notHear[i];
  if (cntMap.has(name)) {
    cntMap.set(name, cntMap.get(name) + 1);
  } else {
    cntMap.set(name, 1);
  }
}

let result = [];

for (let i = 0; i < m; i++) {
  let name = notSee[i];
  if (cntMap.has(name)) {
    result.push(name);
  }
}

console.log(result.length);
console.log(result.sort().join("\n"));
