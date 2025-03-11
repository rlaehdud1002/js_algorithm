const n = require("fs").readFileSync(0).toString().trim().split("").map(Number);
console.log(n.sort((a, b) => b - a).join(""));
