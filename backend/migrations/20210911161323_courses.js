
exports.up = function(knex) {
  return knex.scheme.createTAble("courses", (table) => {
      table.increments("courseNum");
      table.string("name").notNullable();
      table.string("name").notNullable();
      table.string("website").notNullable();
      table.string("schoolName").notNullable();
      table.integer("courseLevel");
      //COURSE LEVEL - 1 is bachelor, 2 is masters
      table.string("location");
      table.integer("tuitionFee");
  })
};

exports.down = function(knex) {
  return knex.scheme.dropTable("courses");
};
