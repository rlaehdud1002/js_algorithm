// 코드네임

const fs = require("fs");

const [
  [code0, score0],
  [code1, score1],
  [code2, score2],
  [code3, score3],
  [code4, score4],
] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" "));

class Info {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const peoples = [
  new Info(code0, Number(score0)),
  new Info(code1, Number(score1)),
  new Info(code2, Number(score2)),
  new Info(code3, Number(score3)),
  new Info(code4, Number(score4)),
];

peoples.sort((a, b) => a.score - b.score);

console.log(peoples[0].name, peoples[0].score);
