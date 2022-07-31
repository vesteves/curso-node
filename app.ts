import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { produtos, findProdutos } from "./src/utils/produtos";
import { responseDefault } from "./src/utils/responseDefault";

import { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

interface ISoma {
  parametro1: TParamentro;
  parametro2: TParamentro;
}

type TParamentro = string;

const soma = ({ parametro1, parametro2 }: ISoma): number => {
  return parseInt(parametro1 as string) + parseInt(parametro2 as string);
};

app.get("/", (req: Request, res: Response) => {
  const data: ISoma = {
    parametro1: req.query.parametro1 as string,
    parametro2: req.query.parametro2 as string,
  };
  res.json(soma(data));
});

app.post("/produtos", (req: Request, res: Response) => {
  res.json(
    responseDefault(
      produtos,
      "Estes são todos os produtos cadastrados",
      produtos.length
    )
  );
});

app.post("/produtos/:nome", (req: Request, res: Response) => {
  res.json(
    responseDefault(
      findProdutos(req.params.nome),
      "Este é o registro do produto solicitado"
    )
  );
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
