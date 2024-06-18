import { Produto } from "./produto";

export class ProdutoVariante extends Produto {
    public imagens: string[] = [] //s3;
    public categorias: string[] = ['regata']
    dimensoes: any = {}
   

    constructor(public nome: string, public preco: number, protected _descricao: string, public cor: string) {
        super(nome, preco, _descricao)
    }

    //isso é um override = sobrescrita (polimorfismo)
    public get descricao():string {
        console.log('classe filha')
        return `O produto ${this.nome} , com a cor ${this.cor}
        categorias ${this.categorias.join(', ')}
        ${this._descricao}`
    }
}

