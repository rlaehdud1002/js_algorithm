let x = parseInt(require("fs").readFileSync("input.txt"));

for (let n = 1; ; n++) {
  let start = (n * (n - 1)) / 2 + 1;
  let end = (n * (n + 1)) / 2;

  if (start <= x && x <= end) {
    if (n % 2 == 0) {
      console.log(`${x - start + 1}/${end - x + 1}`);
    } else {
      console.log(`${end - x + 1}/${x - start + 1}`);
    }
    break;
  }
}
