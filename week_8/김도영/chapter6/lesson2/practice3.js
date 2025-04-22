// G or H 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift());
const people = [];
for (let i = 0; i < n; i++) {
  const [posStr, letter] = input[i].split(" ");
  const pos = Number(posStr);
  people.push({ pos, letter });
}

const photo = new Array(101).fill(0);

for (let peopleInfo of people) {
  photo[peopleInfo.pos - 1] = peopleInfo.letter;
}

let maxPosition = 0;

for (let i = 0; i <= 100; i++) {
  for (let j = 0; j <= 100; j++) {
    if (photo[i] === 0 || photo[j] === 0) continue;

    let countG = 0;
    let countH = 0;

    for (let k = i; k <= j; k++) {
      if (photo[k] === "G") {
        countG++;
      } else if (photo[k] === "H") {
        countH++;
      }
    }

    if (countG === 0 || countH === 0 || countG === countH) {
      maxPosition = Math.max(maxPosition, j - i);
    }
  }
}

console.log(maxPosition);
