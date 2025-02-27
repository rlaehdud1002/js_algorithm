const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, x] = input[0].split(" ").map(Number);

const list = input[1].split(" ").map(Number);

const res = list.filter((val) => x > val);

console.log(res.join(" "));
