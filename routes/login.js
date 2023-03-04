const express = require('express');
const { route } = require('../app');
const controller = require('../controllers/login');
const router = express.Router();
const path = 'login'


router.post(
    `/api/${path}`,
    controller.insertData
);

module.exports = router