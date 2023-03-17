/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cliente', function (table){
        table.increments('id');
        table.string('nome',30).notNullable();
        table.string('cpf',11).notNullable().unique();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cliente')
};
