let [input, ...string] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace(/\r/g, ""));

let n = Number(input);
let card = string.map((el) => el.split(" "));

let enter = new Map(card.map((el) => [el[0], 0]));

for (let i = 0; i < n; i++) {
  if (card[i][1] === "enter") {
    enter.set(card[i][0], 1);
  } else {
    enter.delete(card[i][0]);
  }
}

let result = [...enter.keys()].sort().reverse();

console.log(result.join("\n"));
