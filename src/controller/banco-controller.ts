import { Request, Response } from 'express'
import { BancoService } from "../services/banco-service";



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


}