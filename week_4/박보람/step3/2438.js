let input = Number(require("fs").readFileSync("input.txt").toString().trim());

let result = "";
for (let i = 1; i <= input; i++) {
  result += "*".repeat(i) + "\n";
}

console.log(result);
