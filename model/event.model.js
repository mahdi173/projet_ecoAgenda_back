const{db} = require('../framework/connexion');
const { DataTypes } = require("sequelize");

const Event = db.define(
    'event',
    {
        title: {
            type: DataTypes.STRING(255),
            alowNull: false
        },
        lieu: {
            type: DataTypes.STRING(255),
            alowNull: false
        },
        date: {
            type: DataTypes.DATE,
            alowNull: false
        }
    }
);

module.exports = Event;