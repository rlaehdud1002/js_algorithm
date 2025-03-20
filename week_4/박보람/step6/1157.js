let input = require("fs").readFileSync("input.txt").toString().trim();
input = input.toLowerCase();
let bucket = Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  bucket[input.charCodeAt(i) - 97]++;
}

let max = Math.max(...bucket);
if (bucket.filter((el) => el === max).length > 1) {
  console.log("?");
} else {
  console.log(String.fromCharCode(bucket.indexOf(max) + 65));
}
