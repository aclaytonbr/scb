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

        // url: /api/banco/listar
        this._router.get('/listar', (req, res) => {
            this._bancoController.listar(req, res);
        })

        // url: /api/banco/buscar/:id
        this._router.get('/buscar/:id', (req, res) => {
            this._bancoController.buscar(req, res);
        })

        // url: /api/banco/alterar?id=<valor>
        this._router.put('/alterar', (req, res) => {
            this._bancoController.alterar(req, res);
        })

    }

    get router(): Router {
        return this._router;
    }

}