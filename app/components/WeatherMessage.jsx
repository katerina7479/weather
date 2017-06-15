var React = require('react')


var WeatherMessage = ({ temp, city }) => {
  return (
    <div>
        <h3 className="text-center">The weather is {temp}°F in {city}.</h3>
    </div>
  )
};

module.exports = WeatherMessage;
