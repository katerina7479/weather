var React = require('react')

var WeatherMessage = React.createClass({
  render: function () {
    return (
      <div>
        <p>The weather is {this.props.temp}°F in {this.props.city}.</p>
      </div>
    )
  }
});

module.exports = WeatherMessage;
