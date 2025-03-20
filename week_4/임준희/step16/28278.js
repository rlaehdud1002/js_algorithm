const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
let res = "";
const arr = [];

const commands = {
  1: (arr, x) => arr.push(x),
  2: (arr) => (res += (arr.pop() ?? -1) + "\n"),
  3: (arr) => (res += arr.length + "\n"),
  4: (arr) => (res += (arr.length === 0 ? 1 : 0) + "\n"),
  5: (arr) => (res += (arr[arr.length - 1] ?? -1) + "\n"),
};

for (let i = 1; i <= n; i++) {
  const temp = input[i].split(" ").map(Number);
  a = temp[0];
  x = temp[1] || 0;

  commands[a](arr, x);
}

console.log(res);
