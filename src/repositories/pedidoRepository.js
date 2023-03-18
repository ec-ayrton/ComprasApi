const knex = require('../config/db/database');

class PedidoRepository{
    async salvar(pedido) {
        await knex('pedido').insert(pedido);
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