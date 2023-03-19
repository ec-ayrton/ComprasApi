const knex = require('../config/db/database');

class PedidoRepository{
    async salvar(pedido) {
        const pedidoToBd = {
            dataPedido: pedido.dataPedido,
            total: pedido.total,
            id_cliente: pedido.idCliente
        };

        await knex.transaction(async (trx) => {
            const [idPedido] = await trx('pedido').insert(pedidoToBd);

            const itemsPedido = pedido.itens.map((item) => ({
                quantidade: item.quantidade,
                preco: item.preco,
                id_pedido: idPedido,
                item_total: item.total,
                id_produto: item.idProduto
            }));

            await Promise.all(itemsPedido.map((itemToBd) => trx('itemPedido').insert(itemToBd)));
        });

        return pedido;
    }

    async buscarTodosPedidos(){
        return  knex('pedido').select('*');
    }
    async buscarPorId(pedido){
        return knex('pedido').select('*').where('id','=',pedido.id).first();
    }
}

module.exports = PedidoRepository;