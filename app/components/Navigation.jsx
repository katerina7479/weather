var React = require('react');
var { Link, IndexLink } = require('react-router');


var Navigation = React.createClass({
  onSearch: function (event) {
    event.preventDefault();
    var city = this.refs.city.value;
    if (city.length > 0) {
      var encodedLocation = encodeURIComponent(city);
      this.refs.city.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Simple Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form className="menu" onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="city" placeholder="Seach Weather by city" /></li>
              <li><button type="submit" className="button" value="Get Weather">Get Weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
