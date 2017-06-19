var React = require('react')


// Stateless functional component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a simple weather application built
      on React.</p>
      <p>Here are some of the tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io">React</a> Javascript Framework
        </li>
        <li>
          <a href="http://openweathermap.org">OpenWeatherMap</a> Javascript Framework
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
