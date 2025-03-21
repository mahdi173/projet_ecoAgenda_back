const{db} = require('./connexion.js');
const Event = require('../model/event.model.js');

const sync = async () => {
    await db.sync({force: true});
}

module.exports = sync;