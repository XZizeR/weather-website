const request = require("request");

// Weather
// Lat/Long -> Weather
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ec4878c456abcb6ec8a79e377bb39bce&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        // response.body.location.name +
        //   ": " +
        //   response.body.location.lat +
        //   ", " +
        //   response.body.location.lon +
        //   " : " +
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out."
        // {
        //   weatherDesc: body.current.weather_descriptions[0],
        //   temperature: body.current.temperature,
        //   feelsLike: body.current.feelslike,
        // }
      );
    }
  });
};

module.exports = forecast;
