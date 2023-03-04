const express = require('express');
const { route } = require('../app');
const controller = require('../controllers/auth');
const router = express.Router();
const path = 'auth'


router.post(
    `/api/${path}`,
    controller.insertData
);
router.put(
    `/api/${path}`,
    controller.insertData
);

module.exports = router