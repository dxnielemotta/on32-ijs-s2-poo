import { Carrinho } from "./carrinho/carrinho"
import { ProdutoTipoEnum } from "./produtos/enums/produto-tipo.enum"
import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { Produto } from "./produtos/produto"
import { ProdutoDigtal } from "./produtos/produto-digital"
import { ProdutoVariante } from "./produtos/produto-variante"

//exercicios feitos pela profa aqui


const produtoDigitaL = new ProdutoDigtal('Codigo limpo', 90.88, "Abordando as complexidades de um software")
const produto = new Produto('Regata', 100, 'descricao regata M') // instancia de produto
const subRegataRosa = new ProdutoVariante('Regata', 110, 'modelo primavera/verao','rosa')
const subRegataPreta = new ProdutoVariante('Regata', 110, 'modelo rock','preta')


const carrinho = new Carrinho()

carrinho.adicionarItem(produto, 1) // 100
carrinho.adicionarItem(subRegataRosa, 10) // 220
carrinho.adicionarItem(subRegataRosa, 10) // 220
carrinho.adicionarItem(subRegataPreta, -1) // 110
carrinho.adicionarItem(subRegataPreta, 20) // 110
carrinho.adicionarItem(produtoDigitaL, 1) // 90.88

// simula no carrinho
carrinho.display()
