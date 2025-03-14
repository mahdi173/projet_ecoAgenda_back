const Sequelize = require('sequelize');
let db = new Sequelize("projet-conception-lg", "root", "", {
    dialect: 'mysql',
    host: "localhost"
});

let connect = async () => {
    try{
        await db.authenticate();
        console.log('connected to db');
    }catch(error){
        console.error('Unable to connect', error);
    }
}

module.exports = {connect, db};