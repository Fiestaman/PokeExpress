const React = require("react");

class Nav extends React.Component {
  render() {
    // console.log(this.props.link);
    return (
      <nav>
        <a href={this.props.link}>{this.props.text}</a>
      </nav>
    );
  }
}

module.exports = Nav;
