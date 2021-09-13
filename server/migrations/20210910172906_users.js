exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
      table.increments();
      table.string("username").notNullable().unique();
      table.string("password").notNullable();
      table.string("email").notNullable().unique();
      table.integer("age");
      table.string("countryOfOrigin");
      table.string("destination");
      table.boolean("isStudent");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("users");
  };