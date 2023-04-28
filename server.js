const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.get("/pokemon", function (req, res) {
  res.render("./Index", { pokemons: pokemon });
  //   res.send(pokemon);
});

app.get("/pokemon/:id", function (req, res) {
  //   res.render("./Show", {
  //second param must be an object
  // pokemon: pokemon[req.params.id], //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  // });
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log("listening");
});
