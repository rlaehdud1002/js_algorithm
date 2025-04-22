// 개발팀의 능력

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);

let total = abilities.reduce((prev, cur) => prev + cur);
let minDiff = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 5; i++) {
  for (let j = i + 1; j < 5; j++) {
    for (let k = 0; k < 5; k++) {
      // i, j -> 1번 팀, k -> 2번팀, 나머지 -> 3번 팀
      if (i === k || j === k) continue;

      const team1 = abilities[i] + abilities[j];
      const team2 = abilities[k];
      const team3 = total - team1 - team2;

      if (team1 === team2 || team2 === team3 || team3 === team1) continue;

      const maxTeamDiff = Math.max(team1, team2, team3);
      const minTeamDiff = Math.min(team1, team2, team3);

      minDiff = Math.min(minDiff, maxTeamDiff - minTeamDiff);
    }
  }
}

console.log(minDiff === Number.MAX_SAFE_INTEGER ? -1 : minDiff);
