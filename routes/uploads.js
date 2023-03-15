const express = require('express');
const { route } = require('../app');
const controller = require('../controllers/uploads');
const router = express.Router();
const path = 'uploads'

router.post(
    `/api/${path}`,
    controller.upload,
    controller.insertData
);

router.get(
    `/api/${path}`,
    controller.getData
);

module.exports = router