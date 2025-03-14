const{db} = require('./../framework/connexion');
const { DataTypes } = require("sequelize");

const Product = db.define(
    'product',
    {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(7.2),
            alowNull: false
        },
        stock: {
            type: DataTypes.MEDIUMINT,
            alowNull: false,
            defaultValue: 0,
        },
        picture	: {
            type: DataTypes.STRING(2089),
            alowNull: false
        },
        reference: {
            type: DataTypes.STRING(12),
            alowNull: false
        }
    }
);

module.exports = Product;