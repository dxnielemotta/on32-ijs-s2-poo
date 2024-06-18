import { ProdutoTipoEnum } from "./enums/produto-tipo.enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";

// forma verbosa
// export class Produto implements ProdutoInterface {
//     nome:string;
//     preco:number;
//     descricao: string;

//     constructor(nome:string, preco:number, descricao: string) {
//         this.nome = nome
//         this.preco = preco
//         this.descricao = descricao
//     }
// }

//forma abreviada

export class Produto implements ProdutoInterface {
    protected estoque: number = 0
    public tipo:ProdutoTipoEnum = ProdutoTipoEnum.FISICO

    public get descricao(): string {
        console.log('classe mae')
        return this._descricao
    }

    constructor(public nome:string, public preco: number, protected _descricao: string) {

    }

    public estaDisponivel(): boolean {
        return this.estoque > 0
    };
}