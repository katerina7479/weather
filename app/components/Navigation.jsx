var React = require('react');
var { Link, IndexLink } = require('react-router');


var Navigation = (props) => {
  return (
    <div>
      <h3>Navigation</h3>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
};

module.exports = Navigation;
