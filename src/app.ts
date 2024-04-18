import express, { Request, Response } from 'express'
import sequelize from './database/sequelize'

const PORT = 3000
const app = express()

app.use(express.json())
app.get('/api', (req: Request, res: Response) => {
    res.send('Bem vindo a API bancária')
})

async function initialize() {
    try {
        await sequelize.authenticate()
        sequelize.sync({force: false, alter: false});
        console.log('A conexão com o banco de dados foi estabelecida com sucesso')
    } catch (erro: any) {
        throw new Error(
            'Não foi possível estabelecer conexão com o banco de dados: ' + erro.message,
        )
    }

    try {
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        })
    } catch (erro: any) {
        throw new Error('Não foi possível iniciar o servidor de API: ' + erro.message)
    }
}

initialize()
