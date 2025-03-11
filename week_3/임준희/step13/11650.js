const [n, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x, i) => (i === 0 ? parseInt(x) : x.split(" ").map(Number)));

arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

console.log(arr.map((x) => x.join(" ")).join("\n"));
