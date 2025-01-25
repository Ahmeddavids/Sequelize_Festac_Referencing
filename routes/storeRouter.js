const express = require('express');
const { createStore, getAllStores, getOneStore } = require('../controllers/storeController');

const router = express.Router();

router.post('/store', createStore);
router.get('/store', getAllStores);
router.get('/store/:id', getOneStore);

module.exports = router
