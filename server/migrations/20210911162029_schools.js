exports.up = function(knex) {
    return knex.schema.createTable("schools", (table) => {
        table.increments("schoolId");
        table.string("name").notNullable();
        table.string("website").notNullable();
        table.integer("ranking");
        table.string("location");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("schools");
  };
  