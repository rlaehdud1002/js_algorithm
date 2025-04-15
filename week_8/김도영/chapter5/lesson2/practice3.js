// 악수와 전염병의 상관관계 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k, p, t] = input[0].split(" ").map(Number);
const shakes = [];
for (let i = 1; i <= t; i++) {
  const [time, person1, person2] = input[i].split(" ").map(Number);
  shakes.push({ time, person1, person2 });
}

shakes.sort((a, b) => a.time - b.time);

const person = new Array(n + 1).fill(0); // k 카운트
const sickPerson = new Array(n + 1).fill(0);
person[p] = k;
sickPerson[p] = 1;

for (let info of shakes) {
  // 둘 다 전염되지 않았을 경우 or k 카운트가 0일 때
  if (!person[info.person1] && !person[info.person2]) continue;

  // 둘 다 전염되었을 경우
  if (sickPerson[info.person1] && sickPerson[info.person2]) {
    if (person[info.person1]) person[info.person1]--;
    if (person[info.person2]) person[info.person2]--;
  } else if (sickPerson[info.person1] && person[info.person1]) {
    // 1번만 전염되었고, K번 이하일 때
    person[info.person1]--;
    sickPerson[info.person2] = 1;
    person[info.person2] = k;
  } else if (sickPerson[info.person2] && person[info.person2]) {
    // 2번만 전염되었고, k번 이하일 때
    person[info.person2]--;
    sickPerson[info.person1] = 1;
    person[info.person1] = k;
  }
}

console.log(sickPerson.slice(1).join(""));
