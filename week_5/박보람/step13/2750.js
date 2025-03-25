let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let n = arr.shift();
//1. sort()
// console.log(arr.sort((a, b) => a - b).join("\n"));

//2.삽입정렬
function insert(sortedList, num) {
  let index = -1;
  for (let i = 0; i < sortedList.length; i++) {
    if (sortedList[i] < num) {
      continue;
    } else {
      index = i;
      break;
    }
  }
  if (index < 0) {
    sortedList.push(num);
  } else {
    sortedList.splice(index, 0, num);
  }
}

function sort(unsorted) {
  const sortedList = [];
  for (let num of unsorted) {
    insert(sortedList, num);
  }
  return sortedList;
}

let sortedList = sort(arr);

for (let num of sortedList) {
  console.log(num);
}
