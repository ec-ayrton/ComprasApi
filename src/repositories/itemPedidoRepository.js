const knex = require('../config/db/database');

class ItemPedidoRepository{

    async buscarItensDoPedido(idPedido){
        return knex('itemPedido').select('*').where('id_pedido','=',idPedido);
    }
}

module.exports = ItemPedidoRepository