const n = parseInt(require("fs").readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}
