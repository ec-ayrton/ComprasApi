exports.up = function(knex) {
    return knex.schema.createTable('itemPedido', function(table) {
        table.increments('id');
        table.integer('quantidade').notNullable();
        table.double('preco').notNullable();
        table.integer('id_pedido').unsigned().notNullable();
        table.double('Item_Total').notNullable();
        table.foreign('id_pedido').references('id').inTable('pedido');
        table.integer('id_produto').unsigned().notNullable();
        table.foreign('id_produto').references('id').inTable('produto');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('itemPedido');
};
