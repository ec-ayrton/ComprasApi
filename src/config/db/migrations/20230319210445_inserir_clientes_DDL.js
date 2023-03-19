exports.up = function(knex) {
    return knex('cliente').insert([
        {nome:'joao', cpf:'00011122233'},
        {nome:'Maria', cpf:'11122233344'},
        {nome:'Bob',cpf: '22233344455'},
    ])
};

exports.down = function(knex) {
    return knex('cliente')
        .whereIn('cpf',['00011122233','11122233344','22233344455'])
        .del();
};
