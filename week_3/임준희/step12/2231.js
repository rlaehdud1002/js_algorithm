const n = parseInt(require("fs").readFileSync(0).toString().trim());

let res = 0;

for (let i = n; i > 0; i--) {
  const arr = i.toString().split("").map(Number);
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  if (sum + i === n) {
    res = i;
  }
}

console.log(res);
