exports.up = function(knex) {
    return knex.schema.createTable("fields", (table) => {
        table.increments("fieldId");
        table.string("name").notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("fields");
  };
  