
exports.up = function(knex) {
  return knex.schema.createTable("courses", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("website").notNullable();
      table.string("schoolName").notNullable();
      table.string("courseLevel");
      table.string("location");
      table.integer("tuitionFee");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("courses");
};
