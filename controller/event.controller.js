const Event = require('../model/event.model.js');

require("dotenv").config();
const paginationLimit =  parseInt(process.env.PAGINATION_LIMIT);

exports.create = async (req, res, next) =>{
    let event = await Event.create(req.body.product);
    res.status(201).json(event);
}

exports.getById = async (req, res, next) =>{
    let id = req.params.id;
    console.log(id);
    let event = await Event.findOne({where: {id: id}});
    res.status(201).json(event);
}

exports.getPagination = async (req, res, next) =>{
    let events = await Event.findAll({
        limit: paginationLimit, offset: (req.params.page-1)*paginationLimit
    });
    res.status(200).json(events);
}