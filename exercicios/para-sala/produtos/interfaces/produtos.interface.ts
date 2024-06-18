import { ProdutoTipoEnum } from "../enums/produto-tipo.enum"

export interface ProdutoInterface {
    descricao:string
    preco: number
    nome: string
    tipo: ProdutoTipoEnum,
    estaDisponivel: () => boolean // o produto precisa ter estoque, stauts do produto: publica\do, draft, deletado
}