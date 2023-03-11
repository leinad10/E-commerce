const express = require('express');
const { route } = require('../app');
const controller = require('../controllers/factura');
const router = express.Router();
const path = 'factura'


router.post(
    `/api/${path}`,
    controller.insertData
);

router.get(
    `/api/${path}`,
    controller.getData
);


module.exports = router