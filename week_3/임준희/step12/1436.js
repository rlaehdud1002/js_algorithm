const n = parseInt(require("fs").readFileSync(0).toString().trim());

let i = 666;
let cnt = 1;

while (true) {
  let s = i.toString();
  let temp = 0;
  let satisfied = false;
  for (let j = 0; j < s.length; j++) {
    if (s[j] === "6") {
      temp++;
    } else {
      temp = 0;
    }
    if (temp >= 3) {
      satisfied = true;
    }
  }
  if (satisfied) {
    if (cnt === n) {
      console.log(i);
      process.exit(0);
    }
    cnt++;
  }

  i++;
}
