let n = parseInt(require("fs").readFileSync("input.txt").toString().trim());

// 1부터 n까지 중에서 제곱수의 개수를 세면 됨
let result = Math.floor(Math.sqrt(n));
console.log(result);
