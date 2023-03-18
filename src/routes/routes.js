const express = require('express');
const router = express.Router();

const ProdutoController = require('../controllers/produtoController')
const ClienteController = require('../controllers/ClienteController')
const PedidoController = require('../controllers/pedidoController')

const produtoController = new ProdutoController();
const clienteController = new ClienteController();
const pedidoController = new PedidoController();


router.get('/produtos', produtoController.listar)
router.post('/produtos', produtoController.cadastrar);

router.get('/clientes', clienteController.listar)
router.post('/clientes', clienteController.cadastrar);

router.get('/pedidos',pedidoController.listar)
router.post('/pedidos',pedidoController.cadastrar)


module.exports = router;