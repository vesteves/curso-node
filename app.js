const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  const soma = parseInt(req.query.parametro1) + parseInt(req.query.parametro2);
  res.send(200, soma);
});

app.post("/produtos", (req, res) => {
  res.json({ data: req.body.id });
});

app.post("/produtos/:id", (req, res) => {
  res.json({ data: `Este é o produto ${req.params.id}` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// GET - pegar coisas, pedir coisas
// POST - entregar coisas
// PUT - atualizar coisas
// DELETE - remover coisas
// PATCH - atualizar coisas
