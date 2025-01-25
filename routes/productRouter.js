const express = require('express');
const { createProduct, getOneProduct, getAllProductBelongingToAStore } = require('../controllers/productController');

const router = express.Router();

router.post('/product/:id', createProduct);

router.get('/product/:id', getOneProduct);

router.get('/product-by-store/:id', getAllProductBelongingToAStore);

module.exports = router
