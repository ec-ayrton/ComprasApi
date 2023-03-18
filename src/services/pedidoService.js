const PedidoRepository = require('../repositories/pedidoRepository')
const pedidoRepository = new PedidoRepository();

class PedidoService {
    async cadastrarPedido(pedido) {
        this.calculaTotais(pedido);
        return pedidoRepository.salvar(pedido);
    }

    async buscarTodosPedido() {
        return pedidoRepository.buscarTodosPedidos();
    }
    calculaTotais(pedido){
        this.calculaTotalItem(pedido.itens)
        this.calculaTotalPedido(pedido);
    }
    calculaTotalItem(itens){
        itens.forEach(function (item){
            item.total = item.preco * item.quantidade;
        });
    }
    calculaTotalPedido(pedido) {
        let ItemPedido = pedido.itens;
        pedido.total = ItemPedido.reduce(function (accumulator, item) {
            return accumulator + item.total;
        }, 0);
    }
}

module.exports = PedidoService;
