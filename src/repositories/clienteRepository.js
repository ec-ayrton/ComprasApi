const knex = require('../config/db/database');

class ClienteRepository{
    async salvar(cliente) {
        await knex('cliente').insert(cliente);
        return knex('cliente').select('*').where('nome','=',cliente.nome);
    }
    async buscarTodosClientes(){
        return  knex('cliente').select('*');
    }
    async buscarPorCpf(cliente){
        return knex('cliente').select('*').where('nome','=',cliente.cpf).first();
    }
}

module.exports = ClienteRepository;