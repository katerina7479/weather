var React = require('react')

var WeatherForm = React.createClass({
  onSubmit: function (event) {
    event.preventDefault();
    var city = this.refs.city.value;
    if (city.length > 0) {
      this.refs.city.value = null;
      this.props.onSearch(city);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input type="search" ref="city" placeholder="Search weather by city" />
        </div>
        <button className="button expanded hollow">Get Weather!</button>
      </form>
    )
  }

});

module.exports = WeatherForm;
