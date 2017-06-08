var React = require('react')


var WeatherMessage = ({ temp, city }) => {
  return (
    <div>
        <p>The weather is {temp}°F in {city}.</p>
    </div>
  )
};

module.exports = WeatherMessage;
