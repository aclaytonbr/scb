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
}