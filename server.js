const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use(express.urlencoded({ extended: false }));

app.get("/pokemon", function (req, res) {
  res.render("./Index", { pokemons: pokemon });
  //   res.send(pokemon);
});

app.get("/pokemon/new", (req, res) => {
  res.render("./New");
});

app.post("/pokemon", (req, res) => {
  //   console.log(req.body);
  req.body.name = req.body.name.toLowerCase();
  req.body.img = `http://img.pokemondb.net/artwork/${req.body.name}`;
  pokemon.push({ ...req.body });
  res.redirect("/pokemon");
});

app.get("/pokemon/:id", function (req, res) {
  res.render("./Show", {
    pokemon: pokemon[req.params.id],
  });
  //   res.send(req.params.id);
});

app.listen(port, () => {
  console.log("listening");
});
