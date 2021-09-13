exports.up = function(knex) {
    return knex.scheme.createTAble("fields", (table) => {
        table.increments("fieldId");
        table.string("name").notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.scheme.dropTable("fields");
  };
  