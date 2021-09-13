exports.up = function(knex) {
    return knex.schema.createTable("countries", (table) => {
        table.increments("id");
        table.string("name").notNullable();
        table.integer("provinces");
        table.string("provinceNames");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("countries");
  };
  