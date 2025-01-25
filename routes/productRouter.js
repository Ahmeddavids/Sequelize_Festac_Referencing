const express = require('express');
const { createProduct, getOneProduct, getAllProductBelongingToAStore } = require('../controllers/productController');

const router = express.Router();



module.exports = router
