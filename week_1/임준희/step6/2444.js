const n = parseInt(require("fs").readFileSync(0).toString().trim());
let res = [];

for (let i = 1; i <= n; i++) {
  const blank = " ".repeat(n - i);
  const star = "*".repeat(i * 2 - 1);
  res.push(blank + star);
}

for (let i = n - 1; i >= 1; i--) {
  const blank = " ".repeat(n - i);
  const star = "*".repeat(i * 2 - 1);
  res.push(blank + star);
}

console.log(res.join("\n"));
