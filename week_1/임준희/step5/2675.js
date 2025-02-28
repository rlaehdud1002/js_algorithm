const input = require("fs").readFileSync(0).toString().trim().split("\n");

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
  const [r, s] = input[i].split(" ");
  const res = s
    .split("")
    .map((x) => x.repeat(r))
    .join("");
  console.log(res);
}
