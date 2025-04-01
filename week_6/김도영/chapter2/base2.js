// 숫자 차례로 출력하기

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function up(n) {
  if (n === 0) return;
  process.stdout.write(`${String(n)} `);
  up(n - 1);
}

function down(n) {
  if (n === 0) return;
  down(n - 1);
  process.stdout.write(`${String(n)} `);
}

down(n);
console.log();
up(n);
