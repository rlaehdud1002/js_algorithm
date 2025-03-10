const n = parseInt(require("fs").readFileSync(0).toString().trim());

console.log((n * (n - 1)) / 2 + "\n" + 2);
