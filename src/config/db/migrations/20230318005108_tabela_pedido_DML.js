/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pedido', function (table){
        table.increments('id');
        table.date('dataPedido').notNullable();
        table.double('total').notNullable();
        table.integer('id_cliente').unsigned().notNullable()
        table.foreign('id_cliente').references('id').inTable('cliente');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pedido')
};
