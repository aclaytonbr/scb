import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

//carrega as variáveis de ambiente
const envPath = path.join(__dirname, '../../../', '.env');
dotenv.config({path: envPath});
const objEnv: dotenv.DotenvParseOutput = dotenv.parse(fs.readFileSync(envPath));

const DATABASE_NAME = objEnv.DATABASE_NAME ? objEnv.DATABASE_NAME : 'database';
const USER_NAME = objEnv.USER_NAME ? objEnv.USER_NAME : 'username';
const PASSWORD = objEnv.PASSWORD ? objEnv.PASSWORD : 'password';
const HOST = objEnv.HOST ? objEnv.HOST : 'host';

const sequelize = new Sequelize(
    DATABASE_NAME, 
    USER_NAME, 
    '', {
    host: HOST,
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true,
    }
});

export default sequelize
