const express = require('express');
const router = express.Router();
const productController = require('./../controller/product.controller.js');

router.get('/', () => {});
router.get('/:id', () => {});
router.post("/", () => {});
router.put("/:id", () => {});
router.delete("/:id", () => {});

module.exports = router;