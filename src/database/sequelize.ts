import { Sequelize } from 'sequelize'

const DATABASE_NAME = 'scb'
const USER_NAME = 'sban'
const PASSWORD = 'banco2024'
const HOST = 'localhost'

const sequelize = new Sequelize(DATABASE_NAME, USER_NAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true
    }
})

export default sequelize
