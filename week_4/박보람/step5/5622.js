let arr = require("fs").readFileSync("input.txt").toString().trim().split("");

let bucket = [
  "",
  "",
  "",
  "ABC",
  "DEF",
  "GHI",
  "JKL",
  "MNO",
  "PQRS",
  "TUV",
  "WXYZ",
  "",
];

let result = 0;

for (let i = 3; i < bucket.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (bucket[i].includes(arr[j])) {
      result += i;
    }
  }
}

console.log(result);
