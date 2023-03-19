const knex = require('../config/db/database');

class ClienteRepository{
    async salvar(cliente) {
        await knex('cliente').insert(cliente);
        return knex('cliente').select('*').where('cpf','=',cliente.cpf).first();
    }
    async buscarTodosClientes(){
        return  knex('cliente').select('*');
    }
    async buscarPorCpf(cliente){
        return knex('cliente').select('*').where('cpf','=',cliente.cpf).first();
    }
    async buscarPorId(id){
        return knex('cliente').select('*').where('id','=',id).first();
    }
}

module.exports = ClienteRepository;