var React = require('react')
var WeatherMessage = require('WeatherMessage')
var WeatherForm = require('WeatherForm')

var Weather = React.createClass({

  render: function () {
    return (
      <div>
        <WeatherMessage />
        <WeatherForm />
      </div>
    );
  }
});

module.exports = Weather;
