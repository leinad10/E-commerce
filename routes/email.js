const express = require('express');
const { route } = require('../app');
const controller = require('../controllers/email');
const router = express.Router();
const path = 'email'


router.post(
    `/api/${path}`,
    controller.insertData
);


module.exports = router