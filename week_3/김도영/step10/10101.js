// 삼각형 외우기

const fs = require("fs");

const [angle1, angle2, angle3] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (angle1 + angle2 + angle3 !== 180) {
  console.log("Error");
} else {
  if (angle1 === 60 && angle2 === 60 && angle3 === 60) {
    console.log("Equilateral");
  } else if (angle1 !== angle2 && angle2 !== angle3 && angle3 !== angle1) {
    console.log("Scalene");
  } else {
    console.log("Isosceles");
  }
}
