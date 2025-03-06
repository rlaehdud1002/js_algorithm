let n = parseInt(require("fs").readFileSync(0).toString().trim());
let cnt = 1;

while (true) {
  n -= cnt;
  if (n <= 0) {
    n += cnt;
    break;
  }
  cnt++;
}

if (cnt % 2 === 1) {
  console.log(`${cnt - n + 1}/${n}`);
} else {
  console.log(`${n}/${cnt - n + 1}`);
}
