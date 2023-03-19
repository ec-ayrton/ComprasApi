const PedidoRepository = require('../repositories/pedidoRepository')
const ItemPedidoService = require('./itemPedidoService')
const ValidadorPedido = require('../validators/validadorPedido')

class PedidoService {

    constructor() {
        this.pedidoRepository = new PedidoRepository();
        this.validadorPedido = new ValidadorPedido();
        this.itemPedidoService = new ItemPedidoService();
    }
    async cadastrarPedido(pedido) {
        await this.validadorPedido.validaCamposPedido(pedido)
        this.calculaTotais(pedido);
        return this.pedidoRepository.salvar(pedido);
    }

    async buscarTodosPedido() {
        let pedidos = await this.pedidoRepository.buscarTodosPedidos();
        const pedidosComItens = await Promise.all(pedidos.map(async (pedido) => ({
            ...pedido,
            item: await this.itemPedidoService.buscarItensDoPedido(pedido.id),
        })));
        return pedidosComItens;
    }

    calculaTotais(pedido){
        this.calculaTotalItem(pedido.itens)
        this.calculaTotalPedido(pedido);
    }

    calculaTotalPedido(pedido) {
        let ItemPedido = pedido.itens;
        pedido.total = ItemPedido.reduce(function (accumulator, item) {
            return accumulator + item.total;
        }, 0);
    }

    calculaTotalItem(itens){
        itens.forEach(function (item){
            item.total = item.preco * item.quantidade;
        });
    }

}

module.exports = PedidoService;
