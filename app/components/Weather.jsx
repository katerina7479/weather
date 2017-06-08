var React = require('react')
var OpenWeatherMap = require('OpenWeatherMap')
var WeatherMessage = require('WeatherMessage')
var WeatherForm = require('WeatherForm')

var Weather = React.createClass({
  getInitialState: function(){
    return {
      location: null,
      temp: null
    }
  },
  handleSearch: function(city) {
    var that = this;
    OpenWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        'location': city,
        'temp': temp
      });
    }, function(errorMessage){
      alert(errorMessage);
    })
  },
  render: function () {
    var {temp, location} = this.state;
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage city={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
