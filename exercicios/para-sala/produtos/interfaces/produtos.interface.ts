import { ProdutoTipoEnum } from "../enums/produto-tipo.enum"

//podemos utilizar uma interface para 
/**
 * validar tipagem
 * polimorfismo - geralmente quuando precisamos da instancia, precisa de um mecanismo com type para identificar
 * ter um contrato de entrada ou saida de dados = tipagem
 */

export interface ProdutoInterface {
    descricao:string
    preco: number
    nome: string
    tipo: ProdutoTipoEnum,
    estaDisponivel: () => boolean // o produto precisa ter estoque
}