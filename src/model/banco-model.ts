import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/sequelize'

export class BancoModel extends Model {
    private _id!: number
    private _codigo!: string
    private _nome!: string

    get nome(): string {
        return this._nome
    }

    set nome(value: string) {
        this._nome = value
    }

    get codigo(): string {
        return this._codigo
    }

    set codigo(value: string) {
        this._codigo = value
    }
    get id(): number {
        return this._id
    }

    set id(value: number) {
        this._id = value
    }
}

BancoModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        codigo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'BancoModel',
        tableName: 'tbl_banco',
    },
)

BancoModel.sync({ alter: true, force: true })
