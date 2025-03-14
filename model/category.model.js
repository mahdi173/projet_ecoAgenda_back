const{db} = require('./../framework/connexion');
const { DataTypes } = require("sequelize");

const Category = db.define(
    'category',
    {
        name: {
            type: DataTypes.STRING(255),
            alowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.DECIMAL(7.2),
            alowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            alowNull: false
        }
    }
);

module.exports = Category;