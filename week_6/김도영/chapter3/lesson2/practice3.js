// 사는 지역

const fs = require("fs");

const [n, ...personLines] = fs.readFileSync(0).toString().trim().split("\n");

class City {
  constructor(name, street, city) {
    this.name = name;
    this.street = street;
    this.city = city;
  }
}

let cityInfo = new Array();
for (let i = 0; i < n; i++) {
  const [name, street, city] = personLines[i].split(" ");
  cityInfo.push(new City(name, street, city));
}

let resultIdx = 0;
for (let i = 1; i < n; i++) {
  if (cityInfo[i].name > cityInfo[resultIdx].name) {
    resultIdx = i;
  }
}

console.log(`name ${cityInfo[resultIdx].name}`);
console.log(`addr ${cityInfo[resultIdx].street}`);
console.log(`city ${cityInfo[resultIdx].city}`);
