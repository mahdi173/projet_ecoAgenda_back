const express = require('express');
const router = express.Router();
const EventController = require('../controller/event.controller.js');

router.get('/pagination/:page', EventController.getPagination);
router.post("/", EventController.create);

module.exports = router;