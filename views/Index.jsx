const React = require("react");
const Nav = require("./components/Nav");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <h1 style={myStyle}>See All The Pokemon!</h1>
        <Nav link="/pokemon/new" text="Create New Pokemon" />
        <ul>
          {pokemons.map((pokemon, i) => {
            return (
              <li key={pokemon + i}>
                <a href={`/pokemon/${pokemon._id}`}>
                  {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
