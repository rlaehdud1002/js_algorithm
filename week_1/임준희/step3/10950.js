const nums = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(nums[0]);

for (let i = 1; i <= n; i++) {
  console.log(parseInt(nums[i][0]) + parseInt(nums[i][2]));
}
