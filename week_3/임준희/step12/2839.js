let n = parseInt(require("fs").readFileSync(0).toString().trim());

let cnt = 0;

while (true) {
  if (n % 5 === 0) {
    console.log(n / 5 + cnt);
    break;
  } else if (n <= 0) {
    console.log(-1);
    break;
  }
  cnt++;
  n -= 3;
}
