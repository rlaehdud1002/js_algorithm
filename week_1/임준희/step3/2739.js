const n = require("fs").readFileSync(0).toString().trim();

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
