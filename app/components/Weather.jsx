var React = require('react')
var OpenWeatherMap = require('OpenWeatherMap')
var WeatherMessage = require('WeatherMessage')
var WeatherForm = require('WeatherForm')

var Weather = React.createClass({
  getInitialState: function(){
    return {isLoading: false}
  },
  handleSearch: function(city) {
    var that = this;
    this.setState({isLoading: true});
    OpenWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        'location': city,
        'temp': temp,
        'isLoading': false
      });
    }, function(errorMessage){
      alert(errorMessage);
      that.setState({'isLoading': false});
    })
  },
  render: function () {
    var {temp, location, isLoading} = this.state;
    function renderMessage(){
      if (isLoading){
        return <h3>Fetching Weather...</h3>
      } else if (temp && location){
        return <WeatherMessage city={location} temp={temp}/>
      }
    }
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
