"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
const produtos_1 = require("./src/utils/produtos");
const responseDefault_1 = require("./src/utils/responseDefault");
const soma = ({ parametro1, parametro2 }) => {
    return parseInt(parametro1) + parseInt(parametro2);
};
app.get("/", (req, res) => {
    const data = {
        parametro1: req.query.parametro1,
        parametro2: req.query.parametro2,
    };
    res.json(soma(data));
});
app.post("/produtos", (req, res) => {
    res.json((0, responseDefault_1.responseDefault)(produtos_1.produtos, "Estes são todos os produtos cadastrados", produtos_1.produtos.length));
});
app.post("/produtos/:nome", (req, res) => {
    res.json((0, responseDefault_1.responseDefault)((0, produtos_1.findProdutos)(req.params.nome), "Este é o registro do produto solicitado"));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// GET - pegar coisas, pedir coisas
// POST - entregar coisas
// PUT - atualizar coisas
// DELETE - remover coisas
// PATCH - atualizar coisas
// string - tudo que for texto (oq estiver entre aspas simples aspas duplas ou crase). Exemplo: "3" + "4" = "34"
// boolean - true ou false.
// integer - são números inteiros. Exemplo: 3.
// array - conjunto de dados. Exemplos: [], ["dado1", "dado2"], [1,2,3], [["opa"], [1,2,3], [{chave: "valor"}]]
// object - referente à um único registro. Exemplo: {}, {"nome": "Vitor"}, {"nome": "Vitor", "idade": 36}, {"nome": "Vitor", "enderecos": [{"rua": "rua xpto"}, {"rua": "Rua hhh"}]}
// functions - agrupamento de lógica
