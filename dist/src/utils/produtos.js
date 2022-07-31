"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProdutos = exports.produtos = void 0;
const slug_1 = __importDefault(require("slug"));
exports.produtos = [
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
const findProdutos = (nome) => {
    return exports.produtos.find((item) => (0, slug_1.default)(item.nome) == nome);
};
exports.findProdutos = findProdutos;
exports.default = exports.produtos;
