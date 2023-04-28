const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.get("/pokemon", function (req, res) {
  //   res.render("./Index", { pokemons: pokemons });
  res.send(pokemon);
});

app.listen(port, () => {
  console.log("listening");
});
