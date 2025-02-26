const n = parseInt(require("fs").readFileSync(0).toString().trim());

console.log("long ".repeat(n / 4) + "int");
