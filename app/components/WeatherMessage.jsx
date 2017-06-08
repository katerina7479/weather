var React = require('react')

var WeatherMessage = React.createClass({
  render: function () {
    if (this.props.temp && this.props.city){
      return (
        <div>
          <p>The weather is {this.props.temp}°F in {this.props.city}.</p>
        </div>
      )
    } else {
      return <div></div>
    }
  }
});

module.exports = WeatherMessage;
