var React = require('react')

var WeatherForm = React.createClass({
  onSubmit: function(event) {
    event.preventDefault();
    var city = this.refs.city.value;
    if (city.length > 0){
      this.refs.city.value = null;
      this.props.onSearch(city);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input type="text" ref="city" placeholder="Enter name of city" />
        </div>
        <button>Get Weather!</button>
      </form>
    )
  }

});

module.exports = WeatherForm;
