import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

//carrega as variáveis de ambiente
const envPath = path.join(__dirname, '../..', '.env');
dotenv.config({path: envPath});
const objEnv: dotenv.DotenvParseOutput = dotenv.parse(fs.readFileSync(envPath));

const DATABASE_NAME = objEnv.DATABASE_NAME;
const USER_NAME = objEnv.USER_NAME;
const PASSWORD = objEnv.PASSWORD;
const HOST = objEnv.HOST;

const sequelize = new Sequelize(
    DATABASE_NAME, 
    USER_NAME, 
    PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true
    }
});

export default sequelize
