const [n, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x, i) => (i === 0 ? parseInt(x) : x.split(" ")));

arr.sort((a, b) => {
  const ageA = parseInt(a[0]);
  const ageB = parseInt(b[0]);
  if (ageA !== ageB) {
    return ageA - ageB;
  }
  return 0;
});
console.log(arr.map((x) => x.join(" ")).join("\n"));
