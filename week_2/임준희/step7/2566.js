const findMax = (arr) => {
  return arr.reduce(
    (acc, cur, idx) => (cur > acc.maxNum ? { maxNum: cur, idx } : acc),
    {
      maxNum: -Infinity,
    }
  );
};

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => findMax(x.split(" ").map(Number)));

const res = findMax(input.map((x) => x.maxNum));
console.log(res.maxNum);
console.log(res.idx + 1, input[res.idx].idx + 1);
