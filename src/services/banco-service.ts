import { IBanco } from "../interface/banco-intreface";
import { BancoModel } from "../model/banco-model";
import { CredenciamentoService } from "./credenciamento-service";



export class BancoService {
    
    private credenciamentoService: CredenciamentoService;

    constructor(){
        this.credenciamentoService = new CredenciamentoService();
    }


    public async criar(novo_item: IBanco) {
        try {
            await BancoModel.create({
                numero: novo_item.numero,
                nome: novo_item.nome
            });
        } catch (erro: any) {
            throw new Error("Erro ao tentar incluir um novo banco [" + erro.message + "]")
        }
    }

    public async listar() {
        try {
            const bancos: BancoModel[]  =   await BancoModel.findAll();
            return bancos;
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

    public async buscar(id: number): Promise<BancoModel> {
        try {
            const banco = <BancoModel> await BancoModel.findByPk(id);
            return banco;
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

    public async alterar(id: number, item: IBanco ) {
        try {
            const banco : BancoModel = await this.buscar(id);
            if (banco) {
                banco.numero = item.numero;
                banco.nome = item.nome;
                banco.save();
            } else {
                throw new Error('Banco não encontrado');
            }
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

    public async delete(id: number) {
        try {
            const banco : BancoModel = await this.buscar(id);
            if (banco) {
                banco.destroy();
            } else {
                throw new Error('Banco não encontrado');
            }
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

//operaçoes de credenciamento
    public async criarCredenciamento(idBanco: number, idAtm: number) {
        try {
            await this.credenciamentoService.criar(idBanco,idAtm);
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }

    public async excluirCredenciamento(idBanco: number, idAtm: number) {
        try {
            await this.credenciamentoService.excluir(idBanco, idAtm);
        } catch (erro: any) {
            throw Error(erro.message);
        }
    }

    public async listarCredenciamento() {
        try {
            return await this.credenciamentoService.listar();
        } catch (erro: any) {
            throw new Error(erro.message);
        }
    }
}