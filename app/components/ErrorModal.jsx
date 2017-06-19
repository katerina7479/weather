var React = require("react");
var { PropTypes } = require('prop-types');


var ErrorModal = React.createClass({
  propTypes: {
    title: PropTypes.string,
    message: PropTypes.string.isRequired
  },
  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    var { title, message } = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p style={{textTransform: 'capitalize'}}>{message}</p>
        <button className="button hollow" data-close="">
          Okay
        </button>
      </div>
    )
  }
});

module.exports = ErrorModal;
