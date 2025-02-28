const s = require("fs").readFileSync(0).toString().trim().split(" ");
console.log(s[0] === "" ? 0 : s.length);
