import slug from "slug";
import { IProdutos } from "../types/Produtos";

export const produtos: IProdutos[] = [
  {
    id: 1,
    nome: "Produto 1",
    preco: 10000,
  },
  {
    id: 2,
    nome: "Produto 2",
    preco: 15000,
  },
  {
    id: 3,
    nome: "Produto 3",
    preco: 20000,
  },
];

export const findProdutos = (nome: string): IProdutos | undefined => {
  return produtos.find((item) => slug(item.nome) == nome);
};

export default produtos;
