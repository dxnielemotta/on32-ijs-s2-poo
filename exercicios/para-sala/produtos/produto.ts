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

/**
 * public -> qualquer um pode acessar filho, ou partir de uma variavel
 * proteced -> somente a classe e suas classes derivadas ( extends ) pode acessar
 * private -> somente a classe pode acessar
 *  private | proteced | public getStatus()
 *  private | proteced | public status
 *  readonly 
 */
export class Produto implements ProdutoInterface {
  estoque: number = 10;
  public estaDisponivel(): boolean {
    return this.estoque > 0
  }

  public tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO; 
  public get descricao(): string {
    console.log('classe mae')
    return this._descricao
  }
  
  // public get descricao: string são equivalentes, incrusive no constructor

  constructor(public nome: string, public preco: number, protected _descricao: string) {}
 }

