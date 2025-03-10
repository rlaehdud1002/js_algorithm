const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

let res = "";
const size = ["Equilateral", "Isosceles", "Scalene"];

for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i].sort((a, b) => a - b);
  if (arr[0] + arr[1] <= arr[2]) {
    res += "Invalid" + "\n";
    continue;
  }
  const inputSet = new Set(input[i]);
  res += size[inputSet.size - 1] + "\n";
}

console.log(res);
