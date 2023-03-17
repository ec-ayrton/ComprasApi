/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('produto', function (table){
      table.increments('id');
      table.string('nome',30).notNullable().unique();
      table.string('descricao',50).nullable();
      table.decimal('preco').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('produto')
};
