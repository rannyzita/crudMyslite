/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// aplica as alterações do banco, insert e etc
exports.up = function(knex) {
    // primeiro arg - nome da tabela, e o segundo ua function onde vai 
    // criar os campos
    return knex.schema.createTable("Alunos", function(table) {
        table.increments("id");
        table.string("Nome", 45).notNullable();
        table.integer("idade").notNullable();
        table.integer("NumChamada").notNullable();
    });
};

// rever=te as alterações do up
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
