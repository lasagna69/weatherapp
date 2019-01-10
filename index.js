let request = require('request');

let apiKey = '1e633184aa243831894d8d884c77daee';
let city = 'Cebu city';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
  	let weather = JSON.parse(body);
  	let message = `It is currently ${weather.main.temp} degrees in ${weather.name}`;
    console.log(message);
  }
});