import { BancoRouter } from "./banco-router";



export class AppRouter {
    
    private app_express: any;

    private bancoRouter: BancoRouter;
    
    constructor(app_server: any) {
        this.app_express = app_server;

        //criar as rotas
        this.bancoRouter = new BancoRouter();

    }

    public carregarRotas() {
        this.app_express.use('/api/banco', this.bancoRouter.router);
    }

}