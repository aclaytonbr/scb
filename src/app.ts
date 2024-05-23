import express, { Request, Response } from 'express'
import sequelize from './database/sequelize'
import { AppRouter } from './router/app-router'

const app = express()

// Middleware para definir o cabeçalho Content-Type em todas as respostas
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Ou substitua '*' pela origem permitida
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json())
app.get('/api', (req: Request, res: Response) => {
    res.send('Bem vindo a API bancária')
})

const appRouter = new AppRouter(app);
appRouter.carregarRotas();

async function initialize() {
    try {
        sequelize.authenticate();
        sequelize.sync({force: false, alter: false, logging: false});
        console.log('A conexão com o banco de dados foi estabelecida com sucesso')
    } catch (erro: any) {
        throw new Error(
            'Não foi possível estabelecer conexão com o banco de dados: ' + erro.message,
        )
    }

    const PORT = process.env.PORT;
    try {
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        })
    } catch (erro: any) {
        throw new Error('Não foi possível iniciar o servidor de API: ' + erro.message)
    }
}

initialize()
