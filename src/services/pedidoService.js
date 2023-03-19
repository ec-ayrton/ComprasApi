const PedidoRepository = require('../repositories/pedidoRepository')
const ValidadorPedido = require('../validators/validadorPedido')



const pedidoRepository = new PedidoRepository();
const validadorPedido = new ValidadorPedido();
class PedidoService {
    async cadastrarPedido(pedido) {
        await validadorPedido.validaCamposPedido(pedido)
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
