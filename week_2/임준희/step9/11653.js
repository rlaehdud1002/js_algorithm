let n = parseInt(require("fs").readFileSync(0).toString().trim());

let res = "";

let i = 2;

while (n > 1) {
  if (n % i === 0) {
    n /= i;
    res += i + "\n";
  } else {
    i++;
  }
}

console.log(res);
