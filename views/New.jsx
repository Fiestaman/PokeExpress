const React = require("react");
const Nav = require("./components/Nav");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon page</h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          {/* Image: <input type="text" name="img" />
          <br /> */}
          <input type="submit" name="" value="Create Pokemon" />
        </form>
        <Nav link="/pokemon" text="Back" />
      </div>
    );
  }
}

module.exports = New;
