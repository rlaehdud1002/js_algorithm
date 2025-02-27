// 과제 안 내신 분...?

const fs = require("fs");

const num = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const submit = new Array(30).fill(0);

num.forEach((value) => (submit[value - 1] = 1));

submit.forEach((value, idx) => value === 0 && console.log(idx + 1));
