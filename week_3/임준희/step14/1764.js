const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, _] = input[0].split(" ").map(Number);
const setA = new Set(input.slice(1, n + 1));
const setB = new Set(input.slice(n + 1));

const intersection = [...setA].filter((x) => setB.has(x));

let res = intersection.length + "\n" + intersection.sort().join("\n");
console.log(res);
