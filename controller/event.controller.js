const Event = require('../model/event.model.js');

require("dotenv").config();
const paginationLimit =  parseInt(process.env.PAGINATION_LIMIT);

exports.create = async (req, res, next) =>{
    let event = await Event.create(req.body);
    res.status(201).json(event);
}

exports.getPagination = async (req, res, next) =>{
    let events = await Event.findAll({
        limit: paginationLimit, offset: (req.params.page-1)*paginationLimit,
        order: [['createdAt', 'DESC']]
    });
    res.status(200).json(events);
}