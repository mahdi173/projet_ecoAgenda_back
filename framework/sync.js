const{db} = require('./connexion.js');
const Product = require('./../model/product.js');
const Category = require('../model/category.model.js');

const sync = async () => {
    Product.belongsTo(Category);
    Category.belongsTo(Category, {foreignKey: "parentId"});
    await db.sync({force: true});
}

module.exports = sync;