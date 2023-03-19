exports.up = function(knex) {
    return knex('produto').insert([
        {nome:'coca 2L retornavel', descricao:'refrigante retornavel sabor coda',preco:'5.00'},
        {nome:'agua 500ml', descricao:'agua mineral indaia 500 ml',preco:'2.00'},
        {nome:'heineken lata', descricao:'cerveja heineken em lata',preco:'5.50'},
    ])
};

exports.down = function(knex) {
    return knex('produto')
        .whereIn('nome',['coca 2L retornavel','agua 500ml','heineken lata'])
        .del();
};
