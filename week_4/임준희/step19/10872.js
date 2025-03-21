const n = parseInt(require("fs").readFileSync(0).toString().trim());

let res = 1;

for (let i = 1; i <= n; i++) {
  res *= i;
}

console.log(res);
