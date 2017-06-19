var React = require('react');
var OpenWeatherMap = require('OpenWeatherMap');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var ErrorModal = require('ErrorModal');


var Weather = React.createClass({
      getInitialState: function () {
        return ({
          isLoading: false,
          errorMessage: undefined,
          location: undefined,
          temp: undefined,
        })
      },
      componentDidMount: function () {
        var location = this.props.location.query.location;
        if (location && location.length > 0) {
          this.handleSearch(location);
          window.location.hash = '#/';
        }
      },
      componentWillReceiveProps: function (newProps) {
        var location = newProps.location.query.location;
        if (location && location.length > 0) {
          this.handleSearch(location);
          window.location.hash = '#/';
        }
      },
      handleSearch: function (city) {
        this.setState({
          isLoading: true,
          errorMessage: undefined
        });

        OpenWeatherMap.getTemp(city).then((temp) => {
          this.setState({
            'location': city,
            'temp': temp,
            'isLoading': false
          });
        }, (error) => {
          this.setState({
            isLoading: false,
            errorMessage: error.message
          });
        })
      },

      render: function () {
          var { temp, location, isLoading, errorMessage, errorTitle } = this.state;

          function renderMessage() {
            if (isLoading) {
              return <h3 className="text-center">Fetching Weather...</h3>
            } else if (temp && location) {
              return <WeatherMessage city={location} temp={temp}/>
            }
          }

          function renderError() {
            if (typeof errorMessage == 'string') {
              return (
                <ErrorModal message={errorMessage}></ErrorModal>
              )
            }
          }

          return (
              <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/> { renderMessage() } { renderError() } <
              /div>
            );
          }
        });

      module.exports = Weather;
