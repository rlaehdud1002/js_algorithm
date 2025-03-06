const n = parseInt(require("fs").readFileSync(0).toString().trim());

let num = 1,
  cnt = 1;

while (num < n) {
  num += 6 * cnt;
  cnt++;
}

console.log(cnt);
