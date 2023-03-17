const knex = require('../config/db/database');

class ProdutoRepository{
    async salvar(produto) {
        await knex('produto').insert(produto);
        return knex('produto').select('*').where('nome','=',produto.nome);
    }
    async buscarTodosProdutos(){
        return  knex('produto').select('*');
    }
}

module.exports = ProdutoRepository;