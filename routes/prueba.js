const express = require('express');
const { route } = require('../app');
const controller = require('../controllers/prueba');
const router = express.Router();
const path = 'prueba'

router.get(
    `/api/${path}`,
    controller.getData
);

module.exports = router