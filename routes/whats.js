const express = require('express');
const { route } = require('../app');
const controller = require('../controllers/whats');
const router = express.Router();
const path = 'whats'

router.post(
    `/api/${path}`,
    controller.insertData
);

module.exports = router