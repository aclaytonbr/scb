import express, { Router} from "express";
import { BancoController } from "../controller/banco-controller";


export class BancoRouter {
    private _router!: Router;
    private _bancoController!: BancoController;
    

    constructor() {
        
        this._router = express.Router();
        this._bancoController = new BancoController();

        // url: /api/banco/criar
        // body obrigatorio
        this._router.post('/criar', (req, res) => {
            this._bancoController.criar(req, res);
        })

    }

    get router(): Router {
        return this._router;
    }

}