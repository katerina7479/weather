var axios = require('axios');
var Config = require('Config');

const app_id = Config['openweathermap']['api_key']
const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${app_id}`;

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_URL}&units=imperial&q=${encodedLocation}`;
    setTimeout(function () {
      // Rate limit for open weather api
    }, 1000);
    return axios.get(requestUrl).then(function(res){
      //debugger;
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
          return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
