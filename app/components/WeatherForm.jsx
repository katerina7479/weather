var React = require('react')

var WeatherForm = React.createClass({

  render: function(){
    return (
      <form >
        <div>
          <input type="text" ref="city" placeholder="Enter name of city" />
        </div>
        <button>Get Weather!</button>
      </form>
    )
  }

});

module.exports = WeatherForm;
