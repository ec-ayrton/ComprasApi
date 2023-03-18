const PedidoRepository= require('../repositories/pedidoRepository')
const pedidoRepository = new PedidoRepository();

class PedidoService{
    async cadastrarPedido(pedido){
        return pedidoRepository.salvar(pedido);
    }

    async buscarTodosPedido(){
        return  pedidoRepository.buscarTodosPedidos();
    }

}

module.exports  = PedidoService;