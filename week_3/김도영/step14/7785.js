// 회사에 있는 사람

const fs = require("fs");

const [n, ...enterLog] = fs.readFileSync(0).toString().trim().split("\n");

let inCompany = new Set();

for (let log of enterLog) {
  const [name, info] = log.split(" ");

  info === "enter" ? inCompany.add(name) : inCompany.delete(name);
}

console.log([...inCompany].sort().reverse().join("\n"));
