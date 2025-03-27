let [m, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace(/\r/g, ""));

arr = arr.map((el) => el.split(" ").map((el) => +el));

//최소공배수lcm = 두 수의 곱 / 최대공약수

// 최대 공약수 gcd
let getGCD = (a, b) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

arr.forEach(([a, b]) => {
  console.log((a * b) / getGCD(a, b));
});
