const n = BigInt(require("fs").readFileSync(0).toString().trim());

console.log(`${n * n * n}\n3`);
