const ItemPedidoRepository = require('../repositories/itemPedidoRepository')

class ItemPedidoService {

    constructor() {
        this.itemPedidoRepository = new ItemPedidoRepository();

    }

    async buscarItensDoPedido(idPedido){
        return this.itemPedidoRepository.buscarItensDoPedido(idPedido)
    }

}

module.exports = ItemPedidoService;
