require("dotenv").config();
const { connect, connection } = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Pokemon = require("./models/pokemon");

// Database connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use(express.urlencoded({ extended: false }));

app.get("/pokemon", async (req, res) => {
  try {
    const foundPokemons = await Pokemon.find({});
    res.status(200).render("./Index", { pokemons: foundPokemons });
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/pokemon/new", (req, res) => {
  res.render("./New");
});

app.post("/pokemon", async (req, res) => {
  try {
    req.body.name = req.body.name.toLowerCase();
    req.body.img = `http://img.pokemondb.net/artwork/${req.body.name}`;
    const newFruit = await Pokemon.create(req.body);

    res.redirect("/pokemon");
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/pokemon/:id", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render("./Show", {
      pokemon: foundPokemon,
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
