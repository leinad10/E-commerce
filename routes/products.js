const express = require('express');
const { route } = require('../app');
const controller = require('../controllers/products');
const router = express.Router();
const path = 'products'

router.get(
    `/api/${path}`,
    controller.getData
);
router.post(
    `/api/${path}`,
    controller.insertData
);
module.exports = router