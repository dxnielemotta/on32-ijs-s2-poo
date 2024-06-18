//exercicios feitos pela profa aqui

import { ProdutoTipoEnum } from "./produtos/enums/produto-tipo.enum";
import { ProdutoInterface } from "./produtos/interfaces/produtos.interface";
import { Produto } from "./produtos/produto";
import { ProdutoDigital } from "./produtos/produto-digital";
import { ProdutoVariante } from "./produtos/produto-variante";


const produtoDigitaL = new ProdutoDigital('Codigo limpo', 90.88, "Abordando as complexidades de um software")
const produto = new Produto('Regata', 100, 'descricao regata M') // instancia de produto
const subRegataRosa = new ProdutoVariante('Regata', 110, 'modelo primavera/verao','rosa')
const subRegataPreta = new ProdutoVariante('Regata', 110, 'modelo rock','preta')


const display = (...produtos: ProdutoInterface[]): void => {

    const carrinhoProdutos = produtos.map((produto) => ({
        nome: produto.nome,
        preco: produto.preco,
        descricao: produto.descricao,
        estaDisponivel: produto.estaDisponivel()  
    }))
    console.table(carrinhoProdutos)
   
}
//simulando o carrinho
display(produto, produtoDigitaL, subRegataRosa, subRegataPreta)