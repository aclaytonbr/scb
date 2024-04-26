import { IBanco } from "../interface/banco-intreface";
import { BancoModel } from "../model/banco-model";



export class BancoService {
    constructor(){}


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


}