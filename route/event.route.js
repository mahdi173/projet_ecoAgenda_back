const express = require('express');
const router = express.Router();
const EventController = require('../controller/event.controller.js');

router.get('/', () => {});
router.get('/:id', EventController.getById);
router.get('/pagination/:page', EventController.getPagination);
// router.get('/pagination2/:page', productController.getPagination2);
router.post("/", EventController.create);
router.put("/:id", () => {});
router.delete("/:id", () => {});

module.exports = router;