const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produtoController')
const ClienteController = require('../controllers/ClienteController')

const produtoController = new ProdutoController();
const clienteController = new ClienteController();

router.get('/produtos', produtoController.listar)
router.post('/produtos', produtoController.cadastrar);

router.get('/clientes', clienteController.listar)
router.post('/clientes', clienteController.cadastrar);

module.exports = router;