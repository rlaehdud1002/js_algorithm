const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

if (90 <= n) console.log("A");
else if (80 <= n) console.log("B");
else if (70 <= n) console.log("C");
else if (60 <= n) console.log("D");
else console.log("F");
