const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produtoController')

const produtoController = new ProdutoController();


router.get('/produtos', produtoController.listar)
router.get('/produtos', produtoController.cadastrar);

module.exports = router;