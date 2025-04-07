const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map((line) => line.split(" "));

class Data {
  constructor(date, day, weather) {
    this.date = date;
    this.day = day;
    this.weather = weather;
  }
}

const days = [];

for (let i = 0; i < n; i++) {
  const [date, day, weather] = forecasts[i];
  if (weather === "Rain") {
    days.push(new Data(date, day, weather));
  }
}

days.sort((a, b) => new Date(a.date) - new Date(b.date));

console.log(days[0].date, days[0].day, days[0].weather);
