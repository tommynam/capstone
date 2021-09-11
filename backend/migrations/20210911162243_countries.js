exports.up = function(knex) {
    return knex.scheme.createTAble("countries", (table) => {
        table.increments("id");
        table.string("name").notNullable();
        table.integer("provinces");
        table.string("provinceNames");
    })
  };
  
  exports.down = function(knex) {
    return knex.scheme.dropTable("countries");
  };
  