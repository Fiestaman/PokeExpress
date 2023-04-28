const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.get("/pokemons", function (req, res) {
  //   res.render("./Index", { pokemons: pokemons });
  res.send("Welcome to the Pokemon App!");
});

app.listen(port, () => {
  console.log("listening");
});
