// 비오는 날

const fs = require("fs");

const [n, ...forecasts] = fs.readFileSync(0).toString().trim().split("\n");

class Weather {
  constructor(date, day, weather) {
    this.date = date;
    this.day = day;
    this.weather = weather;
  }
}

let weatherInfo = new Array();
for (let i = 0; i < n; i++) {
  const [date, day, weather] = forecasts[i].split(" ");

  if (weather === "Rain") {
    weatherInfo.push(new Weather(date, day, weather));
  }
}

let resultIdx = 0;
for (let i = 1; i < weatherInfo.length; i++) {
  if (weatherInfo[i].date < weatherInfo[resultIdx].date) {
    resultIdx = i;
  }
}

console.log(
  weatherInfo[resultIdx].date,
  weatherInfo[resultIdx].day,
  weatherInfo[resultIdx].weather
);
