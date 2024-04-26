import { Request, Response } from 'express'
import { BancoService } from "../services/banco-service";
import { BancoModel } from '../model/banco-model';



export class BancoController {

    private bancoService: BancoService = new BancoService();

    public async criar(req: Request, res: Response) {

        if (Object.keys(req.body).length < 2) {
            res.status(400).json({ message: 'O corpo da requisição está vazio'});
            return;
        }

        try {
            await this.bancoService.criar(req.body);
            res.status(201).json({ message: 'Banco criado com sucesso' });
        } catch (erro: any) {
            res.status(500).json({ message: erro.message});
        }
    }

    public async listar(req: Request, res: Response) {
        try {
            const bancos = await this.bancoService.listar()
            res.status(200).json({bancos});
        } catch (erro: any) {
            res.status(500).json({ message: erro.message});
        }
    }

    // uri: /api/banco/buscar/:id
    public async buscar(req: Request, res: Response) {
        
        if (!req.params.id) {
            res.status(400).json({ message: 'Parâmetro de busca não informado'});
            return
        }
        
        const pk: number = parseInt(req.params.id);

        try {
            const banco : BancoModel = await this.bancoService.buscar(pk);
            if (banco) {
                res.status(200).json(banco);
            } else {
                res.status(204).json({ message: 'Banco não encontrado'});
            }
        } catch (erro: any) {
            res.status(500).json({ message: erro.message});
        }
    }

    public async alterar(req: Request, res: Response) {

        if (!req.query.id) {
            res.status(400).json({ message: 'Parâmetro de busca não encontrado'});
            return
        }

        if (Object.keys(req.body).length === 0) {
            res.status(400).json({ message: 'O corpo da requisição está vazio'});
            return
        }

        const pk: number = parseInt(<string>req.query.id);
        
        try {
            await this.bancoService.alterar(pk, req.body);
            res.status(200).json({ message: 'Banco alterado com sucesso'});
        } catch (erro: any) {
            res.status(500).json({ message: erro.message});
        }

    }

    public async delete(req: Request, res: Response) {

        if (!req.params.id) {
            res.status(400).json({ message: 'Parâmetro de busca não encontrado'});
            return
        }

        const pk: number = parseInt(<string>req.params.id);
        
        try {
            await this.bancoService.delete(pk);
            res.status(200).json({ message: 'Banco excluído com sucesso'});
        } catch (erro: any) {
            res.status(500).json({ message: erro.message});
        }

    }

}