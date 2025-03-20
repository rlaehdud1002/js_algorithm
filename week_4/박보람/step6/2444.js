let input = require("fs").readFileSync("input.txt").toString().trim();
input = Number(input);

result = "";
for (let i = 1; i <= input; i++) {
  result += " ".repeat(input - i) + "*".repeat(2 * i - 1) + "\n";
}

for (let i = input - 1; i > 0; i--) {
  result += " ".repeat(input - i) + "*".repeat(2 * i - 1) + "\n";
}

console.log(result);
