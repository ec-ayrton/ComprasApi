const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController')


router.get('/produtos', produtoController.listar);

module.exports = router;