// 붙임성 좋은 총총이

const fs = require("fs");

const [N, ...meetInfo] = fs.readFileSync(0).toString().trim().split("\n");

const rainbow = new Set().add("ChongChong");

for (let info of meetInfo) {
  const [A, B] = info.split(" ");
  if (rainbow.has(A)) {
    rainbow.add(B);
  }

  if (rainbow.has(B)) {
    rainbow.add(A);
  }
}

console.log(rainbow.size);
