var React = require('react');
var {Link} = require('react-router');

var Navigation = React.createClass({

  render: function() {
      return (
        <div>
          <h3>Navigation</h3>
          <Link to="/">Weather</Link>
          <Link to="/about">About</Link>
          <Link to="/examples">Examples</Link>
        </div>
      );
  }
});

module.exports = Navigation;
