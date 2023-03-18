const PedidoService = require('../services/pedidoService')
const pedidoService = new PedidoService();

class ProdutoController {
    async listar(req, res) {
        try {
            const pedidos = await pedidoService.buscarTodosPedido();
            res.json(pedidos);
        }catch (err){
            console.log(err);
            res.status(500).send(err.message);
        }
    }

    async cadastrar(req,res) {
        try {
            const pedido = req.body;
            const pedidoCadastrado = await pedidoService.cadastrarPedido(pedido);
            res.status(201).json(pedidoCadastrado);
        }catch(err){
            console.log(err.message);
            res.status(500).send(err.message);
        }
    }
}
module.exports = ProdutoController;