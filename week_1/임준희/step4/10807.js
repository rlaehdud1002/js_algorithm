const input = require("fs").readFileSync(0).toString().trim().split("\n");

const list = input[1].split(" ").map(Number);
const v = parseInt(input[2]);

let result = list.filter((x) => x === v).length;

console.log(result);
